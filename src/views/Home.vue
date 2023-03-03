<template>
  <div>
    <el-row>
      <el-col :span="8">
        <el-card class="box-card">
          <div class="user">
            <img class="user-img" src="../assets/user.jpg" alt="头像" />
            <div class="user-info">
              <p class="name">ljzhang</p>
              <p class="level">超级管理员</p>
            </div>
          </div>
          <div class="login-info">
            <p>上次登录的时间： <span>2022-9-1</span></p>
            <p>上次登录的地点： <span>成都</span></p>
          </div>
        </el-card>
        <el-card class='project-table' style="margin-top:20px; height:460px">
          <el-table
            :data="tableData"
            style="width: 100%"
            :row-class-name="tableRowClassName"
          >
          <el-table-column v-for='(val,key) in tableLabel' :prop="key" :label="val" :key='key' >
          </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="16">
        <div class='data-show'>
          <el-card class='box-card' v-for='(val, idx) in countData' 
          :key='idx' 
          :body-style="{display:'flex', padding:0}"
          >
            <i class='icon' :class='`el-icon-${val.icon}`' :style='{background:val.color }'></i>
            <div>
              <p class="price">￥{{val.value}}</p>
              <p class='desc'>{{val.name}}</p>
            </div>
          </el-card>
        </div>
        <div class='graph'>
          <el-card style="height:280px">
            <div ref='lineChart' style="height:280px">
            </div>
          </el-card>
          <div class='bottom'>
            <el-card style="height:260px">
              <div ref='barChart' style="height:260px"> 
              </div>
            </el-card>
            <el-card style="height:260px">
              <div ref='pieChart' style="height:260px"> 
              </div>
            </el-card>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import {getData} from '../api'
  import * as echarts from 'echarts'
  export default {
    mounted(){
      getData().then(
        ({data} ) => {
          const {tableData} = data.data
          this.tableData = tableData
          console.log('获取请求数据',data)
          //折线图数据处理
          const lineChart = echarts.init(this.$refs.lineChart)
          //处理数据
          const {orderData} = data.data
          const xAxis = Object.keys(orderData.data[0])
          const series = []
          console.log(orderData.data[0])
          //查找关键字来生成对应品牌的数组
          xAxis.forEach((key) => {
             series.unshift({
                name:key,
                type:'line',
                data:orderData.data.map((obj) => {
                  return obj[key]
                })
             })
          })
          var lineOption ={
            title:{
              text:'折线图统计'
            },
            legend:{
              data:xAxis
            },
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "line"
              }
            },
            grid: {},
            yAxis:{
              type:'value'
            },
            xAxis:{
              type: 'category',
              data:orderData.date,
              tooltip:{},
            },
            series: series
          }
          lineChart.setOption(lineOption)
          //柱状图数据处理
          const {userData} = data.data
          const barChart = echarts.init(this.$refs.barChart)
          const chartOption = {
            legend:{
              data:['新增用户', '活跃用户']
            },
            title:{
              text:'柱状图统计'
            },
            xAxis:{
              data:userData.map(item => item.date)
            },
            yAxis:{
              type:'value'
            },
            series:[
              {
                name:`新增用户`,
                type:'bar',
                data:userData.map(item => item.new)
              },
              {
                name:'活跃用户',
                type:'bar',
                data:userData.map(item => item.active)
              }
            ]
          }
          barChart.setOption(chartOption)
          //饼图数据处理
          const {videoData} = data.data
          const pieOption = {
            title:{
              text:'饼图统计'
            },
            series:[
              {
                roseType:'area',
                type:'pie',
                data:videoData
              }
            ]
          }
          const pieChart = echarts.init(this.$refs.pieChart)
          pieChart.setOption(pieOption)
      },
        error => {
          console.log(error.message)
        }
      )
    },
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
    },
    data() {
      return {
        tableLabel:{
          name:'产品',
          todayBuy:'今日购买',
          monthBuy:'本月购买',
          totalBuy:'总共购买'
        },
        tableData: [],
        countData:[
          {
            name:'今日支付订单',
            value:1234,
            icon:'success',
            color:'#2ec7c9'
          },
          {
            name:'今日支付订单',
            value:1234,
            icon:'success',
            color:'#2ec7c9'
          },
           {
            name:'今日支付订单',
            value:1234,
            icon:'success',
            color:'#2ec7c9'
          },
           {
            name:'今日支付订单',
            value:1234,
            icon:'success',
            color:'#2ec7c9'
          },
           {
            name:'今日支付订单',
            value:1234,
            icon:'success',
            color:'#2ec7c9'
          },
           {
            name:'今日支付订单',
            value:1234,
            icon:'success',
            color:'#2ec7c9'
          }
        ]
      }
    }
  }
</script>

<style lang='less' scoped>
.box-card {
  .user {
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin-right: 40px;
    }
    .user-info {
      .name {
        font-size: 32px;
        margin-bottom: 12px;
      }
      .level {
        color: #999999;
      }
    }
  }
  .login-info {
    p {
      line-height: 28px;
      font-size: 14px;
      color: #999999;
      span {
        color: #666666;
        margin-left: 60px;
      }
    }
  }
}
.project-table{
  margin-top:20px;
  margin-right: 7px;
}
.data-show{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .box-card{
    display: flex;
    width:32%;
    margin-bottom: 20px;
    .icon{
      display: flex;
      height: 80px;
      width: 80px;
      font-size:30px;
      text-align: center;
      justify-content: center;
      align-items: center;
      color:#fff;
      margin-right: 15px;
      // background-color: aquamarine;
    }
    .price{
      font-size:30px;
      margin-bottom: 10px;
    }
    .desc{
      font-size:14px;
      color:#999;
      text-align: center;
    }
  }
}
.graph{   
  .bottom{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    .el-card{
      width: 48%;
    }
  }
}
</style>