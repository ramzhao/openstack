<template>
  <el-container>
    <!--    头部-->
    <!-- <el-header
     height="46px" id="main-header">
       <HorizonHeader></HorizonHeader>

     </el-header>-->
    <!--    容器:侧边导航和主要区域-->
    <el-container>
      <el-aside width="200px">
        <HorizonAside>

        </HorizonAside>

      </el-aside>
      <el-container>
        <el-header
          height="50px" class="breadcrumb-header">
          <el-breadcrumb separator-class="el-icon-arrow-right"
                         style="line-height: 50px">
            <el-breadcrumb-item v-for="breed in $store.state.breadList" v-bind:key="breed"> {{breed}} </el-breadcrumb-item>

            <div class="avator">
              <el-dropdown>
  <span class="el-dropdown-link">
    <el-avatar shape="square" :size="42" :src="squareUrl" class="avator_img"></el-avatar>
  </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item style="background-color: #f7f7f7">admin</el-dropdown-item>
                  <el-dropdown-item>注销</el-dropdown-item>

                </el-dropdown-menu>
              </el-dropdown>
            </div>

            <el-dropdown class="domain">
                <span class="el-dropdown-link">
                  <i class="el-icon-s-unfold" style="font-size: 30px"></i>
                </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item style="background-color: #f7f7f7">domain</el-dropdown-item>

              </el-dropdown-menu>
            </el-dropdown>

          </el-breadcrumb>

        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>

    </el-container>
  </el-container>

</template>

<script>
// import HorizonHeader from '@/components/HorizonHeader'
import HorizonAside from '@/components/HorizonAside'

export default {
  name: 'Horizon',
  components: {
    /* HorizonHeader, */
    HorizonAside

  },
  data () {
    return {
      squareUrl: 'http://elm.cangdu.org/img/default.jpg'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    created(){
      console.log(this.breadList)
    }
  }
}
</script>

<style scoped>
  #main-header {

    background-color: #222222;
    color: #333;
    text-align: center;
    line-height: 46px;

  }

  .el-main {

    background-color: #f7f7f7;
    color: #333;

    margin-left: 200px;
  }

  .el-aside {
    position: absolute;

    height: 100%;

    background-color: #324157;
  }

  .breadcrumb-header {
    padding-left: 210px;
    background-color: #eff2f7;

  }

  .avator_img {

    border-radius: 50%;
    margin-right: 2px;
  }

  .avator {
    float: right;
  }

  .domain {
    float: right;
    margin-right: 50px;

  }

  .el-dropdown {
    margin-top: 4px;

  }

  .el-dropdown-menu__item {
    font-size: 14px;
    color: #161b23;
  }

</style>
