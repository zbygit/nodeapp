<template>
  <el-col class="addUser">
    <el-form :label-position="labelPosition" label-width="80px">
      <el-col :span="8" :offset="9">
        <el-form-item label="用户名称">
          <el-input v-model="name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8" :offset="9">
        <el-form-item label="所在地址">
          <el-input v-model="address"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8" :offset="9">
        <el-form-item label="手机号码">
          <el-input v-model="tel"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8" :offset="9">
        <el-form-item label="IP地址">
          <el-input v-model="ip"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8" :offset="9">
        <el-button type="primary" @click="addUser">添加</el-button>
        <el-button>取消</el-button>
      </el-col>
    </el-form>
  </el-col>
</template>
<script>
import * as API from "../../api/index";
export default {
  data() {
    return {
      labelPosition: "right",
      name: "",
      address: "",
      tel: "",
      ip: ""
    };
  },
  methods: {
    addUser() {
      let userInfo = {
        userName: this.name,
        tel: this.tel,
        address: this.address,
        ip: this.ip
      };
    
      API.addUser(userInfo).then(result => {
        alert(result.data);
  
    
      });
    }
  }
};
</script>