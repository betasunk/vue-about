<template>
  <div id="app">
    {{ componentName }}
    <!-- <component :is="componentName"></component> -->
  </div>
</template>

<script>
// import DragDialog from "./components/drag-dialog";
// import SlotComponent from "./components/slot-component/index.vue";
// import eventOn from "@/components/event-on/index.vue"
export default {
  name: "App",
  // components: {
  //   DragDialog,
  //   SlotComponent,
  //   eventOn
  // },
  // directives: {
  //   focus: {
  //     // 指令的定义
  //     inserted: function (el) {
  //       console.log('vm>>>',arguments);
  //       console.log('el>>>',arguments);
  //       el.innerHTML='elllllllll';
  //     },
  //   },
  // },
  // computed: {
  //   calcNum() {
  //     return "123";
  //   },
  // },
  data() {
    return {
      componentName: '1',
    };
  },
  created(){
    this.componentName='eventOn'
  },
  methods: {

  },
};
</script>
