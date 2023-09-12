### 简介：该插件是一个用于表格的全局指令插件，在 element-ui 的基础之上封装的，支持 vue3、不支持 vue2
#### 示例 Demo

```
1. 安装
   npm i vue3-elementui-tableheight
   yarn add vue3-elementui-tableheight
2. 使用
   main.js:
   import { createApp } from 'vue'
   import vue3ElementuiTableheight from 'vue3-elementui-tableheight'

const app = createApp(App)
app.use(vue3ElementuiTableheight)

template:
<el-table
    v-tableHeight="{ isTableDataComplete }"
></el-table>

Options:
    isTableDataComplete: false // (default) boolean 类型，代表表格数据是否请求完成


github源码： https://github.com/LLmengxue/vue3-elementui-tableheight
```
