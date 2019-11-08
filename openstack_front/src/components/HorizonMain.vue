<template>
  <el-container>
    <el-header
          height="50px" class="breadcrumb-header">
          <el-breadcrumb separator-class="el-icon-arrow-right"
                         style="line-height: 50px">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="breed in this.breadList">{{breed}}}</el-breadcrumb-item>

            <div class="domain">
              <el-dropdown>
                <span class="el-dropdown-link">
                  <el-avatar shape="square" :size="42" :src="squareUrl" class="avator_img"></el-avatar>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item style="background-color: #e5e5e5" divided="divided">admin</el-dropdown-item>
                  <el-dropdown-item divided="divided">注销</el-dropdown-item>

                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <div class="avator">
              <el-dropdown>
              <span class="el-dropdown-link">
                <el-avatar shape="square" :size="42" :src="squareUrl" class="avator_img"></el-avatar>
              </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item style="background-color: #e5e5e5" divided="divided">admin</el-dropdown-item>
                  <el-dropdown-item divided="divided">注销</el-dropdown-item>

                </el-dropdown-menu>
              </el-dropdown>
            </div>

          </el-breadcrumb>

        </el-header>
  </el-container>

</template>

<script>
export default {
  name: 'HorizonMain',
  data () {
    return {
      squareUrl: 'http://elm.cangdu.org/img/default.jpg'
    }
  },

}
</script>

<style scoped>
  .breadcrumb-header {
    padding-left: 210px;
    background-color: #eff2f7;

  }

  .avator_img{

    border-radius: 50%;
    margin-right: 2px;
}
  .avator{
    float: right;
  }
  .domain {
    float: right;
  }

  .el-dropdown {
    margin-top: 4px;

  }
  .el-dropdown-menu__item {
    font-size: 16px;
    color: #161b23;
  }

</style>
