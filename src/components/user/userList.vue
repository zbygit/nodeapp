<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="time" label="日期" width="180"></el-table-column>
      <el-table-column prop="userName" label="姓名" width="180"></el-table-column>
      <el-table-column prop="tel" label="联系方式"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column prop="ip" label="ip地址"></el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="15"
      :current-page="current_page"
      :total="total"
      @current-change="getList"
    ></el-pagination>
  </div>
</template>

<script>
import * as API from "../../api/index";
export default {
  data() {
    return {
      tableData: [],
      total: 0,
      current_page: 1
    };
  },
  created() {
    this.getList(1);
  },
  methods: {
    getList(val) {
      console.log(val);

      API.getUserList(val).then(result => {
        this.total = result.data.num;
        this.tableData = result.data.data;
      });
    }
  }
};
</script>