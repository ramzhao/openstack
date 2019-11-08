<template>
  <el-menu
    unique-opened="true"
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="#324157"
    text-color="#fff"
    active-text-color="#20a0ff"
    router="true">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-s-grid"></i>
        <span>项目</span>
      </template>
      <el-submenu index="1-1">

        <template slot="title">
          <i class="iconfont el-icon-zhao-cpuchuliqiyingjian"></i>计算</template>
        <el-menu-item-group>
          <el-menu-item index="1-1-1"><i class="el-icon-caret-right"></i>概述</el-menu-item>
          <el-menu-item index="1-1-2"><i class="el-icon-caret-right"></i>实例</el-menu-item>
          <el-menu-item index="1-1-3"><i class="el-icon-caret-right"></i>卷</el-menu-item>
          <el-menu-item index="/Horizon/image"><i class="el-icon-caret-right"></i>映像</el-menu-item>
          <el-menu-item index="1-1-5"><i class="el-icon-caret-right"></i>访问 & 安全</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="1-2">
        <template slot="title">
          <i class="iconfont el-icon-zhao-wangluo1"></i>网络</template>
        <el-menu-item-group>
          <el-menu-item index="1-2-1"><i class="el-icon-caret-right"></i>网络拓扑</el-menu-item>
          <el-menu-item index="1-2-2"><i class="el-icon-caret-right"></i>网络</el-menu-item>

        </el-menu-item-group>
      </el-submenu>

    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-s-custom"></i>
        <span>管理员</span>
      </template>
      <el-submenu index="2-1">
        <template slot="title">
          <i class="iconfont el-icon-zhao-xitong"></i>系统</template>
        <el-menu-item-group>
          <el-menu-item index="2-1-1"><i class="el-icon-caret-right"></i>概述</el-menu-item>
          <el-menu-item index="2-1-2"><i class="el-icon-caret-right"></i>管理程序</el-menu-item>
          <el-menu-item index="2-1-3"><i class="el-icon-caret-right"></i>主机聚集</el-menu-item>
          <el-menu-item index="2-1-4"><i class="el-icon-caret-right"></i>实例</el-menu-item>
          <el-menu-item index="2-1-5"><i class="el-icon-caret-right"></i>卷</el-menu-item>
          <el-menu-item index="2-1-6"><i class="el-icon-caret-right"></i>flavor数</el-menu-item>
          <el-menu-item index="/Horizon/image"><i class="el-icon-caret-right"></i>映像</el-menu-item>
          <el-menu-item index="/Horizon/network"><i class="el-icon-caret-right"></i>网络</el-menu-item>
          <el-menu-item index="2-1-9"><i class="el-icon-caret-right"></i>缺省值</el-menu-item>
          <el-menu-item index="2-1-10"><i class="el-icon-caret-right"></i>元数据定义</el-menu-item>
          <el-menu-item index="2-1-11"><i class="el-icon-caret-right"></i>系统信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <i class="iconfont el-icon-zhao-shenfen-tianchong"></i>
        <span>身份管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="3-1">
          <i class="iconfont el-icon-zhao-xiangmu"></i>项目</el-menu-item>
        <el-menu-item index="3-2">
          <i class="iconfont el-icon-zhao-jiaoseguanli"></i>用户</el-menu-item>
        <el-menu-item index="3-3">
           <i class="iconfont el-icon-zhao-zudui"></i>组</el-menu-item>
        <el-menu-item index="3-4">
           <i class="iconfont el-icon-zhao-jiaoseguanli"></i>角色</el-menu-item>
      </el-menu-item-group>

    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: 'HorizonAside'
}
</script>

<style scoped>

  .el-aside {
    background-color: rgb(50, 64, 87);
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-menu {
    border-right-width: 0px;

  }

</style>
