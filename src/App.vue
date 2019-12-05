<template>
  <div id="app">
    <el-container class="conentArea">
      <el-header>Header</el-header>
      <el-container class="conentBox">
        <el-aside width="200px"><leftAside></leftAside></el-aside>
        <el-main>
         <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import leftAside from './base/aside'
export default {
  name: "App",
  components:{
    leftAside
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,body,#app,.conentArea{
  width: 100%;
  height: 100%;
}
.conentBox{
  height: calc(100% - 60px);
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;

}
</style>
