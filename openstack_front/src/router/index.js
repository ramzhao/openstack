import Vue from 'vue'
import Router from 'vue-router'
import Horizon from '@/components/Horizon'
import Login from '@/components/Login'
import image from '@/components/projects/compute/images/image'
import create_image_dialog from '@/components/projects/compute/images/create_image_dialog'
import network from '@/components/system/network/network'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: Login

    },
    {
      path: '/Horizon',
      name: 'Horizon',
      component: Horizon,
      children: [
        { path: '/', name: 'test', component: image },
        {
          path: 'image',
          name: 'image',
          component: image,
          children: [
            {path: 'create_image/:open',name: 'create_image_dialog', component: create_image_dialog}
          ]
        },
        {
          path: 'network',
          name: 'network',
          component: network
        }
        
        
      ]
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login

    }
  ]
})
