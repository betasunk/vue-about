<template>
  <div>
    <span>子组件</span>
    <el-row :gutter="20">
      <el-col
        :span="8"
        v-for="(item, index) in commodities"
        :key="index"
        style="margin-top: 20px"
      >
        <slot :rowData="item"></slot>
      </el-col>
    </el-row>
  </div>
</template>
  <script>
export default {
  props: {
    commodities: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  created() {
    console.log("commodities>>>", this.commodities);
  },
};
</script>