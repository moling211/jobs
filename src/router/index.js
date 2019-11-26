import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 首页，发布，消息，我，
import Home from '@/components/Home'
import Issue from '@/components/Issue'
import Mine from '@/components/Mine'
import News from '@/components/News'
// 首页的单个导航 人才 合作 定制
import Person from '@/components/home/person/Person'
import Make from '@/components/home/make/Make'
import Conmunite from '@/components/home/conmunite/Conmunite'
// 消息详情页
import newsDetail from '@/components/news/newsDetail'
// 简历
import Resume from '@/components/news/Resume'
// Mine 下的list
import MineList from '@/components/mine/MineList'
Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect:'/Home',
      children:[
        {
          path:'/Home',
          name:'Home',
          component:Home,
          children:[
            {
              path:'/Person',
              name:'Person',
              component:Person
            },
            {
              path:'/Make',
              name:'Make',
              component:Make
            },
            {
              path:'/Conmunite',
              name:'Conmunite',
              component:Conmunite
            }
          ]
        },
        {
          path:'/Issue',
          name:'Issue',
          component:Issue
        },
        {
          path:'/Mine',
          name:'Mine',
          component:Mine
        },
        {
          path:'/News',
          name:'News',
          component:News,
        }
      ]
    },
    {
      path:'/Resume',
      name:'Resume',
      component:Resume
    },
    {
      path:'/MineList',
      name:'MineList',
      component:MineList
    },
    // {
    //   path:'/Acount',
    //   name:'Acount',
    //   component:Acount
    // }
    
  ]
})
