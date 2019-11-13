<template>
  <div>
    <Card>
      <Button type="primary" @click="add" ghost>新增</Button>
      <Table class="table" border :columns="columns" :data="data"></Table>
    </Card>
  </div>
</template>
<script>
import { getMpAppList } from '../../api/account'

export default {
  name: 'AccountList',
  data () {
    return {
      columns: [
        {
          title: 'AppID',
          key: 'appId'
        },
        {
          title: '名称',
          key: 'name',
          render: (h, params) => {
            return h('div', [
              h('strong', params.row.name)
            ])
          }
        },
        {
          title: '类型',
          key: 'type',
          render: (h, params) => {
            return h('div', [
              h('p', params.row.type === 'mini_program' ? '小程序' : '公众号')
            ])
          }
        },
        // {
        //   title: 'Logo',
        //   key: 'address',
        //   render: (h, params) => {
        //     return h('div', [
        //       h('img', {
        //         props: {
        //           type: 'primary',
        //           size: 'small'
        //         },
        //         attrs: {
        //           src: params.row.logo, style: 'width: 100px;border-radius: 2px;margin-top:5px'
        //         }
        //       },)
        //     ]);
        //   }
        // },
        {
          title: '更新时间',
          key: 'updateDate'
          // render: (h, params) => {
          //   return h('div', new Date(this.data[params.index].updateDate).toDateString())
          // }
        },
        {
          title: '操作',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.$router.push('/account/account-info?appId=' + this.data[params.index].appId)
                  }
                }
              }, '修改')
            ])
          }
        }
      ],
      data: []
    }
  },
  methods: {
    add () {
      this.$router.push('/account/account-info')
    },
    getMpAppList () {
      let that = this
      getMpAppList().then(res => {
        that.data = res.data.data
        console.log(that.data)
      })
    }
  },
  mounted () {
    this.getMpAppList()
  }
}
</script>
<style>
  .table {
    margin-top: 20px;
  }
</style>
