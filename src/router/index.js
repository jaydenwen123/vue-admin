import Vue from 'vue'
import Router from 'vue-router'
import Template from '../components/Template'
import WhiteUid from '../components/WhiteUid'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '看点业务诊断',
      component: Template
    },
    {
      path: '/user',
      name: '白名单管理',
      component: WhiteUid,
    },

    {
      path: '/config',
      name: '业务配置管理',
      component: Template
    },
    /*{
      path: '/salary',
      name: '工资管理',
      component: Template
    },
    {
      path: '/attendence',
      name: '考勤管理',
      component: Template
    },
    {
      path: '/perform',
      name: '绩效管理',
      component: Template
    },
    {
      path: '/admin',
      name: '系统管理',
      component: Template
    },*/
    {
      path: '/feedback',
      name: '意见反馈',
      component: Template
    },
    // {
    //     path: '/userInfo/:id',
    //     name: '用户详情页',
    //     component: DetailInfo
    // },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
