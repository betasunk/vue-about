<template>
    <div>
      <el-row :gutter="20">
      <el-col :span="12" v-for="(column, index) in columnList" :key="index">
        <el-card class="box-card card-column">
          <div slot="header" class="clearfix">
            <span>{{ column.columnName }}</span>
          </div>
          <commodity-list :commodities="column.commodityList">
            <template slot-scope="scope">
              <!-- 这里只需要给Commodity组件传入数据，响应Commodity组件的clickCommodity事件即可。
                        事件不必携带参数，完全符合父到子的数据流向，而不会发生子组件又给父组件反向发数据的情况 -->
              <commodity
                :modityData="scope.rowData"
                @clickCommodity="onCommodityClick(scope.row)"
              ></commodity>
            </template>
          </commodity-list>
        </el-card>
      </el-col>
    </el-row>
    </div>
  </template>
  
  <script>
  import commodityList from "./commodity-list";
  import commodity from "./commodity";
  export default {
    name: "SlotComponent",
    components: {
      commodityList,
      commodity,
    },
    data() {
      return {
        columnList: [
          {
            columnName: "第一个子组件",
            commodityList: [
              {
                name: "a孙",
              },
              {
                name: "aaa孙",
              },
            ],
          },
          {
            columnName: "第二个子组件",
            commodityList: [
              {
                name: "b孙",
              },
              {
                name: "bbb孙",
              },
            ],
          },
        ],
      };
    },
    methods: {
      onCommodityClick(row) {
        console.log("row>>>", row);
      },
    },
  };
  </script>
  