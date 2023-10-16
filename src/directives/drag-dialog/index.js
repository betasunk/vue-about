import Vue from 'vue';

// v-dialogDrag: 弹窗拖拽
Vue.directive('dragDialog', {
  bind(el){
    console.log('el>>>>>',el);
  }
});
