<template>
  <Card>
    <Form :model="formItem" :label-width="150" style="width: 80%">

      <Collapse v-model="panelName" accordion>
        <Panel name="base">
          公众号基本信息配置
          <p slot="content">
            <FormItem label="公众号名字：">
              <Input v-model="formItem.name"></Input>
            </FormItem>
            <FormItem label="AppId：">
              <Input v-model="formItem.appId"></Input>
            </FormItem>
            <FormItem label="AppSecret：">
              <Input v-model="formItem.appSecret"></Input>
            </FormItem>
            <FormItem label="ApiSecret：">
              <Input v-model="formItem.apiSecret" placeholder="调用api时校验参数用的密钥，默认为${appSecret}"></Input>
            </FormItem>
            <FormItem label="AccessToken(Url)：">
              <Input v-model="formItem.tokenUrl"></Input>
            </FormItem>
            <FormItem label="JsTicket(Url)：">
              <Input v-model="formItem.jsconfigUrl"></Input>
            </FormItem>
            <FormItem label="SignToken：">
              <Input v-model="formItem.signToken"></Input>
            </FormItem>
            <FormItem label="公众号类型：">
              <RadioGroup v-model="formItem.type">
                <Radio label="media_public">公众号</Radio>
                <Radio label="mini_program">小程序</Radio>
              </RadioGroup>
            </FormItem>
          </p>
        </Panel>
        <Panel name="other">
          其他信息配置
          <p slot="content">
            <FormItem label="业务地址(Url)：">
              <Card>
                <div>
                  <Divider v-if="!formItem.service_url || formItem.service_url.length===0" orientation="left">添加地址<span
                    @click="addServiceUrl()"><Icon
                    type="md-add-circle"/></span></Divider>
                  <div v-for="(item,index) in formItem.service_url" :key="index">
                    <Divider orientation="left">地址{{index + 1}}<span @click="addServiceUrl()"><Icon
                      type="md-add-circle"/></span><span @click="delServiceUrl(index)"><Icon
                      type="md-remove-circle"/></span></Divider>
                    <Input v-model="formItem.service_url[index]"></Input>
                  </div>
                </div>
              </Card>
            </FormItem>
            <FormItem label="LOGO：">
              <!--<div>-->
              <!--<Upload v-if="!formItem.logo"-->
              <!--type="drag"-->
              <!--:before-upload="beforeUpload" style="width: 60%" :action="uploadUrl">-->
              <!--<Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>-->
              <!--<p>点击上传</p>-->
              <!--</Upload>-->
              <!--</div>-->
              <div>
                <Upload :before-upload="beforeUpload" :action="uploadUrl">
                  <Button style="display: inline-block;" icon="ios-cloud-upload-outline">点击更换</Button>
                </Upload>
                <img style="width: 150px;" class="img-logo" :src="formItem.logo">
              </div>
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
      data1: [
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
      this.formItem._id = this.$route.query.appId
      this.getInfo()
    }
  }
}
</script>

<style lang="less">
  .img-logo {
    margin-top: 7px;
  }
</style>
