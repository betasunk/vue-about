import Vue from 'vue';

// v-dialogDrag: 弹窗拖拽
Vue.directive('dragDialog', {
  bind(el){
    const dragDialogHeader=el.querySelector('.el-dialog__header')
    const dragDialogDom=el.querySelector('.el-dialog')

    console.log('dragDialogHeader>>>>>',dragDialogDom);
    dragDialogHeader.style.cursor='move'
    
    dragDialogHeader.onmousedown=(event)=>{
      console.log('event>>>>>',event.clientY,event.clientX);
      console.log('dragDialogHeader.style>>>>>',dragDialogHeader.style);
      console.log('dragDialogDom.style.left>>>>>',dragDialogHeader.style.left);
      document.onmousemove=(e)=>{
        console.log('e',e.clientY-event.clientY);
        dragDialogDom.style.top=(e.clientY-event.clientY)+'px'
        dragDialogDom.style.left=(e.clientX-event.clientX)+'px'
      }
      document.onmouseup=()=>{
        document.onmousemove=null
      }
    }
  }
});
// import Vue from 'vue';

// // v-dialogDrag: 弹窗拖拽
// Vue.directive('dragDialog', {
//   bind(el) {
//     // 处理cef49场景下left默认值auto的情况
//     const autoTransferNumber = (val) => {
//       if(val === 'auto') return 0; 
//       return val;
//     }

//     const dialogHeaderEl = el.querySelector('.el-dialog__header');
//     const dragDom = el.querySelector('.el-dialog');

//     dialogHeaderEl.style.cursor = 'move';
//     dragDom.style.marginTop = '10vh';
//     dragDom.style.marginBottom = '0';
//     if(!el.__initPosition__) {
//       // 记录初始位置
//       el.__initPosition__ = {
//         marginTop: dragDom.style.marginTop,
//         marginBottom: dragDom.style.marginBottom,
//         top: dragDom.style.top,
//         left: dragDom.style.left
//       }
//     }

//     // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);
//     const sty = dragDom.currentStyle || window.getComputedStyle(dragDom, null);

//     dialogHeaderEl.onmousedown = e => {
//       // 鼠标按下，计算当前元素距离可视区的距离
//       const disX = e.clientX - dialogHeaderEl.offsetLeft;
//       const disY = e.clientY - dialogHeaderEl.offsetTop;

//       // 获取到的值带px 正则匹配替换
//       let styL, styT;

//       // 注意在ie中 第一次获取到的值为组件自带50% 移动之后赋值为px
//       if (sty.left.includes('%')) {
//         styL =
//           +document.body.clientWidth * (+autoTransferNumber(sty.left.replace(/%/g, '')) / 100);
//         styT =
//           +document.body.clientHeight * (+autoTransferNumber(sty.top.replace(/%/g, '')) / 100);
//       } else {
//         styL = +autoTransferNumber(sty.left.replace(/\px/g, ''));
//         styT = +autoTransferNumber(sty.top.replace(/\px/g, ''));
//       }

//       document.onmousemove = function(event) {
//         // 通过事件委托，计算移动的距离
//         let l = event.clientX - disX + styL;
//         let t = event.clientY - disY + styT;
//         let minL = -(
//           (document.documentElement.clientWidth - dragDom.offsetWidth) * 0.5 -
//           50
//         );
//         let maxL =
//           (document.documentElement.clientWidth - dragDom.offsetWidth) * 0.5 -
//           50;
//         let minT = -(document.documentElement.clientHeight - dragDom.offsetHeight) * 0.5 ;
//         let maxT =
//           document.documentElement.clientHeight -
//           dragDom.offsetHeight -
//           document.documentElement.clientHeight * 0.1 +
//           dragDom.offsetHeight -
//           50;
//         if (l <= minL) {
//           l = minL;
//         } else if (l >= maxL) {
//           //document.documentElement.clientWidth 屏幕的可视宽度
//           l = maxL;
//         }

//         if (t <= minT) {
//           t = minT;
//         } else if (t >= maxT) {
//           // document.documentElement.clientHeight 屏幕的可视高度
//           t = maxT;
//         }
        
//         t = t > minT ? t : minT;
//         // 移动当前元素
//         dragDom.style.left = `${l}px`;
//         dragDom.style.top = `${t}px`;

//         //将此时的位置传出去
//         //binding.value({x:e.pageX,y:e.pageY})
//       };

//       document.onmouseup = function() {
//         document.onmousemove = null;
//         document.onmouseup = null;
//       };
//     };
//   },
//   async componentUpdated(el, binding) {
//     // 解决绑定了v-dragDialog指令后，组件内按钮click事件失效问题
//     // 如果点击内部按钮导致组件更新时，该组件会返回其原始位置
//     // 导致该按钮只响应了mousedown事件，还未响应mouseup事件就离开了鼠标指针位置，因此click事件未触发
//     const { moveAfterEventBubble } = binding.value || {}
//     if (moveAfterEventBubble) await afterEventBubble(el)
//     // 通过监听组件更新状态，在弹框关闭时重置初始位置
//     if(el.__initPosition__) {
//       const dragDom = el.querySelector('.el-dialog');
//       // 记录初始位置
//       if(el.style.display !== 'none') {
//         const { marginTop, marginBottom, left, top } = el.__initPosition__;
//         dragDom.style.marginTop = marginTop;
//         dragDom.style.marginBottom = marginBottom;
//         dragDom.style.left = left;
//         dragDom.style.top = top;
//       }
//     }

//     // Vue.nextTick(() => {
//     //   if(el.style.display === 'none') {
//     //     const { marginTop, marginBottom, left, top } = el.__initPosition__;
//     //     const dragDom = el.querySelector('.el-dialog');
//     //     dragDom.style.marginTop = marginTop;
//     //     dragDom.style.marginBottom = marginBottom;
//     //     dragDom.style.left = left;
//     //     dragDom.style.top = top;
//     //   }
//     // })
//   }
// });


// function afterEventBubble (el) {
//   return new Promise((resolve) => {
//     let bubbled = false
//     let timer = null
//     const bubbleCallback = () => {
//       bubbled = true
//       resolve()
//       el.removeEventListener('click', bubbleCallback, false)
//       timer && window.clearTimeout(timer)
//     }
//     el.addEventListener('click', bubbleCallback, false)
//     timer = setTimeout(() => {
//       if (!bubbled) resolve()
//     }, 1000);
//   })
// }
