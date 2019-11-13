<template>
  <Card>
    <Form :model="formItem" :label-width="150" style="width: 80%">

      <Collapse v-model="panelName" accordion>
        <Panel name="base">
          公众号基本信息配置
          <p slot="content">
            <FormItem label="id：">
              <Input v-model="formItem.id"></Input>
            </FormItem>
            <FormItem label="名字：">
              <Input v-model="formItem.name"></Input>
            </FormItem>
            <FormItem label="地址：">
              <Input v-model="formItem.address"></Input>
            </FormItem>
            <FormItem label="日期：">
              <Input v-model="formItem.date"></Input>
            </FormItem>
          </p>
        </Panel>
      </Collapse>
      <FormItem style="margin-top: 50px">
        <Button type="primary" @click="save">保存</Button>
        <Button @click="redirectMpList" class="base-margin-left-20">返回</Button>
      </FormItem>
    </Form>
  </Card>
</template>
<script>
import { getMpAppInfo, saveMpAppInfo } from '@/api/account'

export default {
  name: 'AccountInfo',
  data () {
    return {
      formItem: {
        _id: '',
        name: '',
        secret: '',
        apiSecret: '',
        token_url: '',
        jsticket_url: '',
        service_url: [],
        sign_token: '',
        created: '',
        updated: '',
        logo: '',
        type: undefined
      },
      uploadUrl: this.$store.state.apiHost + 'mp/upload',
      imgModal: false,
      panelName: 'base', // base基础；other其他
      columns1: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      data6: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
    }
  },
  methods: {
    redirectMpList () {
      this.$router.push('/account/account-list')
    },
    getInfo () {
      getMpAppInfo(this.formItem._id).then(res => {
        let that = this
        console.log(res.data)
        if (res.data.code === 1) {
          that.formItem = res.data.data
          console.log(that.formItem)
          if (that.formItem.service_url) {
            if (!(that.formItem.service_url instanceof Array)) {
              this.$set(that.formItem, 'service_url', [that.formItem.service_url])
            }
          } else {
            this.$set(that.formItem, 'service_url', [''])
          }
        } else {
          this.$Message.warning({ 'title': '获取失败' })
        }
      })
    },
    save () {
      saveMpAppInfo(this.formItem).then(res => {
        if (res.data.code === 0) {
          this.$Notice.success({ title: '修改成功' })
          this.redirectMpList()
        } else {
          this.$Message.info({ title: '修改失败' })
        }
      }
      ).catch(error => {
        console.log(error)
        this.$Message.info({ title: '错误' })
      })
    },
    upload () {
      this.imgModal = true
    },
    beforeUpload (file) {
      return false
    },
    addServiceUrl () { // 给某一关键词增加一个回复内容
      let length = this.formItem.service_url.length
      this.$set(this.formItem.service_url, length, '')
    },
    delServiceUrl (index) {
      this.$delete(this.formItem.service_url, index)
    }
  },
  mounted () {
    if (this.$route.query.appId !== undefined) {
      this.formItem = this.data6[0]
      this.formItem.id = this.$route.query.appId
      // this.getInfo()
    }
  }
}
</script>

<style lang="less">
  .img-logo {
    margin-top: 7px;
  }
</style>
