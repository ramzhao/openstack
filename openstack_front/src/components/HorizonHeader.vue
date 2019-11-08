<template>
  <div id="header">
    <el-dropdown style="margin-right: 60%">
     <span class="el-dropdown-link">
    admin<i class="el-icon-arrow-down el-icon--right"></i>
     </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>注销</el-dropdown-item>
          <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>

      </el-dropdown-menu>

    </el-dropdown>

    <el-dropdown divided="true" style="float: right" >
  <span class="el-dropdown-link">
    <i class="el-icon-user-solid"></i>
    admin<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
      <el-dropdown-menu slot="dropdown" >
        <el-dropdown-item>注销</el-dropdown-item>

      </el-dropdown-menu>

    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'HorizonHeader'
}
</script>

<style scoped>
  .el-dropdown-menu__item{
    font-size: medium;

  }
  .el-dropdown {
    font-size: 18px;
  }

  .el-dropdown-link {
    cursor: pointer;
    color: #dddddd;
  }

  .el-icon-arrow-down {
    font-size: 15px;
  }

</style>
