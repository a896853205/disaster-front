<template>
  <div id="app">
    <router-view/>
    <Loading></Loading>
    <Notification></Notification>
  </div>
</template>

<script>
// 等待组件
import Loading from '@/components/util/load'
// home单元组件
import Notification from '@/components/util/Notification'
export default {
  name: 'app',
  components: {
    Loading,
    Notification
  }
}
</script>

<style>
/* 基本配置开始 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul, ol {
  list-style: none;
}
a {
  text-decoration: none;
}
/* 基本配置结束 */
/* 工具类 */
.hidden {
  display: none;
}
.mar-bom-small{
  margin-bottom: 20px;
}
/* 阿里图标基本配置 */
.icon {
  width: 1em; 
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.icon-pen:hover {
  color: #eac52a;
  cursor: pointer;
}
.icon-bin:hover {
  color: #eac52a;
  cursor: pointer;
}
.icon-eye:hover {
  color: #eac52a;
  cursor: pointer;
}
/* 增加组件通用开始 */
.add-container {
  padding: 20px;
}
/* 增加组件通用结束 */
/* 描述通用样式开始 */
.describe-ul {
  padding: 20px;
  font-size: 12px;
  color: #666;
}
.describe-ul li {
  height: 24px;
  line-height: 24px;
}
/* 描述通用样式结束 */
/* 重置element-ui表格 */
.el-table {
  position: static!important;
}
.el-table--border {
  border-color: #584f4a!important;
}
.el-checkbox__inner {
  border-radius: 0;
  border-color: #584f4a;
  background: #cec5be;
}
.el-checkbox__inner:hover {
  border-color: #e1c129;
}
.is-checked .el-checkbox__inner {
  background: #e1c129!important;
  border-color: #e1c129!important;
}
.el-input__inner {
  border-radius: 0;
  border-color: #584f4a;
  background: #584f4a;
}
.el-select {
  width: 100%;
}
.el-dialog {
  width: 400px;
  border-radius: 0;
  background: #cec5be;
}
.el-dialog__body {
  padding-top: 0;
  padding-bottom: 0;
}
/* 暂时放置全局使用 */
.input-pack {
  width: 100%;
  padding: 0 10px;
  color: #595959;
  line-height: 40px;
  background: rgb(206, 197, 190);
  border: 1px solid rgb(27, 20 , 14);
}
</style>
