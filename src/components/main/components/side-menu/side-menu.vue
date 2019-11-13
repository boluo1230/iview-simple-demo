<template>
  <div class="side-menu-wrapper">
    <slot></slot>
    <Menu ref="menu" v-show="!collapsed" :active-name="activeName" :open-names="openedNames" :accordion="accordion"
          :theme="theme" width="auto" @on-select="handleSelect" style="margin-top: 25px">
      <template v-for="item in menuList">
        <template v-if="item.children && item.children.length === 1">
          <side-menu-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item"></side-menu-item>
          <menu-item v-else :name="getNameOrHref(item, true)" :key="`menu-${item.children[0].name}`">
            <Icon :type="item.children[0].icon || ''"/>
            <span class="level_span">{{ showTitle(item.children[0]) }}</span></menu-item>
        </template>
        <template v-else>
          <side-menu-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item"></side-menu-item>
          <menu-item v-else :name="getNameOrHref(item)" :key="`menu-${item.name}`">
            <Icon :type="item.icon || ''"/>
            <span>{{ showTitle(item) }}</span></menu-item>
        </template>
      </template>
    </Menu>
    <div class="menu-collapsed" v-show="collapsed" :list="menuList">
      <collapsed-menu @on-click="handleSelect" hide-title :root-icon-size="rootIconSize" :icon-size="iconSize"
                      :theme="theme" v-for="item in menuList"
                      :parent-item="item"
                      :key="`drop-menu-${item.name}`"></collapsed-menu>
    </div>
  </div>
</template>
<script>
import sideMenuItem from './side-menu-item.vue'
import collapsedMenu from './collapsed-menu.vue'
import { getIntersection } from '@/libs/tools'
import mixin from './mixin'
import { mapActions } from 'vuex'

export default {
  name: 'sideMenu',
  mixins: [mixin],
  components: {
    sideMenuItem,
    collapsedMenu
  },
  props: {
    menuList: {
      type: Array,
      default () {
        return []
      }
    },
    collapsed: {
      type: Boolean
    },
    theme: {
      type: String,
      default: 'dark'
    },
    rootIconSize: {
      type: Number,
      default: 20
    },
    iconSize: {
      type: Number,
      default: 16
    },
    accordion: Boolean,
    activeName: {
      type: String,
      default: ''
    },
    openNames: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      openedNames: [],
      userMenuList: []
    }
  },
  methods: {
    ...mapActions([
      'getUser'
    ]),
    handleSelect (name) {
      this.$emit('on-select', name)
    },
    getOpenedNamesByActiveName (name) {
      return this.$route.matched.map(item => item.name).filter(item => item !== name)
    }
  },
  watch: {
    activeName (name) {
      if (this.accordion) this.openedNames = this.getOpenedNamesByActiveName(name)
      else this.openedNames = getIntersection(this.openedNames, this.getOpenedNamesByActiveName(name))
    },
    openNames (newNames) {
      this.openedNames = newNames
    },
    openedNames () {
      this.$nextTick(() => {
        this.$refs.menu.updateOpened()
      })
    }
  },
  mounted () {
    let that = this
    this.openedNames = getIntersection(this.openedNames, this.getOpenedNamesByActiveName(name))
    // this.getUser().then(res => {
    //   that.userMenuList = res.menu_list // 获取当前用户应有菜单
    // })
  }
}
</script>
<style lang="less">
  @import './side-menu.less';

  /*.level_span {*/
  /*  margin-left: 2px*/
  /*}*/
</style>
