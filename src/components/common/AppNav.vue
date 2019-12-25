<!-- 左侧菜单导航栏组件 -->

<template>
  <div class="app-nav-wrap">
    <el-menu :default-active="$route.path"
             class="el-menu-vertical-demo"
                background-color="#eff2f7"
                 active-text-color="#409EFF"
                 text-color="#000000"
             router>
      <!--        style=" background: #eff2f7;"-->
      <el-menu-item
        v-for="menu in menus"
        :index="menu.route"
        :key="menu.route">
        <i :class="menu.icon"></i>{{menu.name}}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        menus: [
          {route: '/', name: '看点业务诊断',icon:'el-icon-menu'},
          {route: '/user', name: '白名单管理',icon:'el-icon-user'},
          {route: '/config', name: '业务配置管理',icon:'el-icon-setting'},
          {route: '/feedback', name: '意见反馈',icon:'el-icon-phone'},
         /* {route: '/salary', name: '工资管理'},
          {route: '/attendence', name: '考勤管理'},
          {route: '/perform', name: '绩效管理'},
          {route: '/admin', name: '系统管理'},*/

        ]
      }
    },



    mounted () {

      let options = this.$store.state.options;
      console.log("options:",options)
      if (options.length>0){
        return
      }
      // 刷新时以当前路由做为tab加入tabs
      if (this.$route.path !== '/' && this.$route.path.indexOf('userInfo') === -1) {
        //判断是否已经存在当前路由了
        if (options !== 'undefined' && options.length > 0) {
          let isExisted = false
          for (let i = 0; i < options.length; i++) {
            if (options[i].route === this.$route.path) {
              isExisted = true
              break
            }
          }
          if (!isExisted) {
            this.$store.commit('add_tabs', {route: '/', name: '看点业务诊断'});
            this.$store.commit('add_tabs', {route: this.$route.path, name: this.$route.name});
            console.log("add_tabs");
          }
          this.$store.commit('set_active_index', this.$route.path);
        }else{
          this.$store.commit('add_tabs', {route: this.$route.path, name: this.$route.name});
          this.$store.commit('set_active_index', this.$route.path);
          // this.$router.push('/');
        }
      } else {
        this.$store.commit('add_tabs', {route: '/', name: '看点业务诊断'});
        this.$store.commit('set_active_index', '/');
        this.$router.push('/');
      }
    },
    computed: {
      options() {
        return this.$store.state.options;
      }
    }
  }
</script>
