<template>
  <div id="app">
    <DragDialog></DragDialog>
  </div>
</template>

<script>
import DragDialog from "./components/drag-dialog";
import SlotComponent from "./components/slot-component/index.vue";
export default {
  name: "App",
  components: {
    DragDialog,
    SlotComponent,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
