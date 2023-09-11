// 工具库
import _ from "lodash";

// 设置表格高度
const doResize = (el, binding, vnode) => {
  debugger
  // debugger;
  // 获取调用传递过来的数据 数组的数据
  const { value } = binding;
  if (value.isTableDataComplete && !value.tableData) {
    console.error("tableData 不能为null");
    return;
  }
  // 分页的页脚高度
  let paginationList = document.getElementsByClassName("avue-crud__pagination");
  let paginationHeight = 0;
  if (paginationList.length) {
    paginationHeight = paginationList[0].getBoundingClientRect().height;
  }

  if (!el) return;
  // 计算列表高度并设置
  const height =
    window.innerHeight - el.getBoundingClientRect().top - paginationHeight - 50;
  el.style.height = `${value.tableData.length > 10 ? height + "px" : "auto"}`;
};
let debounceHandle = null;
export default {
  // 初始化设置
  mounted(el, binding, vnode, prevVnode) {
    doResize(el, binding, vnode);
  },

  // 在绑定元素的父组件及他自己的所有子节点都更新后调用
  updated(el, binding, vnode, prevVnode) {
    if (binding.value.isTableDataComplete) {
      doResize(el, binding, vnode);
      let resizeListener = () => {
        doResize(el, binding, vnode);
      };
      debounceHandle = _.debounce(resizeListener, 200);
      window.addEventListener("resize", debounceHandle);
    }
  },
  // 绑定元素的父组件卸载后调用
  unmounted(el, binding, vnode, prevVnode) {
    debounceHandle && debounceHandle.cancel();
    window.removeEventListener("resize", debounceHandle);
  },
};
