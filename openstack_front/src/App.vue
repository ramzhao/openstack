<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld
  },
  data (){
    return{
      breadList: [1],
    }

  },

  watch:{
    $route(to,from){
      console.log(from.path);//从哪来
      console.log(to.path);//到哪去
      this.breadList = [1,2]
    }
}


}


</script>

<style>
  body{
     padding: 0px;
     margin: 0px;

  }

</style>
