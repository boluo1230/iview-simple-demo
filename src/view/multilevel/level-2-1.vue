<template>
  <div>
    <div>多级菜单 -> 二级-1</div>
    <Card>
      <Table :columns="columns1" :data="data1"></Table>
    </Card>
  </div>

</template>
<script>
export default {
  name: 'level_2_1',
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
  }
}
</script>
