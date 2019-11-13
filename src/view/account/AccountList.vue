<template>
  <div>
    <Card>
      <Button type="primary" @click="add" ghost>新增</Button>
      <Table class="table" border :columns="columns" :data="data6"></Table>
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
          title: '名称',
          key: 'name',
          render: (h, params) => {
            return h('div', [
              h('strong', params.row.name)
            ])
          }
        },
        {
          title: '年龄',
          key: 'age'
        },
        {
          title: ' 地址',
          key: 'address'
        },
        {
          title: '日期',
          key: 'date'
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
                    this.$router.push('/account/account-info?appId=' + params.index)
                  }
                }
              }, '修改')
            ])
          }
        }
      ],
      data: [],
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
