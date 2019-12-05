<template>
  <div class="aside">
    <el-menu default-active="this.$route.path" router>
      <el-submenu index="/">
        <template slot="title">
          <i class="el-icon-message"></i>用户管理
        </template>
        <el-menu-item-group>
          <el-menu-item index="/userList">用户列表</el-menu-item>
          <el-menu-item index="/addUser">添加用户</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "leftAside"
};
</script>
<style  scoped>
.aside {
  height: 100%;
}
</style>