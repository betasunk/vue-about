<template>
  <div @click="emitClick" style="background-color: bisque;">
  {{ modityData.name }}
  </div>
</template>
<script>
export default {
  props: {
    modityData: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {
      commodities: [],
    };
  },
  created(){
    console.log('row>>>',this.modityData);
  },
  methods:{
    emitClick(){
        this.$emit('clickCommodity')
    }
  }
};
</script>