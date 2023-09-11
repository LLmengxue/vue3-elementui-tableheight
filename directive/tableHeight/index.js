import tableHeight from "./tableHeight";

const install = function (Vue) {
  // 绑定v-adaptive指令
  Vue.directive("tableHeight", tableHeight);
};

tableHeight.install = install;

export default tableHeight;
