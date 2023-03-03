<template>
  <div>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <h3>{{isCollapse ? '后台':'通用后台管理管理'}}</h3>
      <el-menu-item @click='clickMenu(item)' v-for="item in noChildren" :key="item.name" :index="item.name">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{item.label}}</span>
      </el-menu-item>
      <!-- 存在子选项的菜单 -->
      <el-submenu  v-for="item in hasChildren" :key="item.label" :index="item.label">
        <template slot="title">
          <i :class="`el-icon-${item.icon}`"></i>
          <span slot="title">{{item.label}}</span>
        </template>
        <el-menu-item-group v-for="subItem in item.children" :key='subItem.name'>
          <el-menu-item @click='clickMenu(subItem)' :index="subItem.name">{{subItem.label}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      menuData: [
        {
          path: "/",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "Home/Home",
        },
        {
          path: "/mall",
          name: "mall",
          label: "商品管理",
          icon: "video-play",
          url: "MallManage/MallManage",
        },
        {
          path: "/user",
          name: "user",
          label: "用户管理",
          icon: "user",
          url: "UserManage/UserManage",
        },
        {
          label: "其他",
          icon: "location",
          children: [
            {
              path: "/page1",
              name: "page1",
              label: "页面1",
              icon: "setting",
              url: "Other/PageOne",
            },
            {
              path: "/page2",
              name: "page2",
              label: "页面2",
              icon: "setting",
              url: "Other/PageTwo",
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    //点击菜单操作
    clickMenu(item){
      console.log(this)
      //当页面的路由与我们跳转的路由不一致的时候才允许跳转
      //每个由路由器控制的组件下都有一个route[路由]实例 存储着自己的路由信息
      //主菜单重定向到/home  需要特判
      if(this.$route.path !== item.path && !( this.$route.path === '/home' && item.path === '/'))
      this.$router.push(item.path)
    }
  },
  computed: {
    noChildren() {
      return this.menuData.filter((item) => !item.children);
    },
    hasChildren() {
      return this.menuData.filter((item) => item.children);
    },
    // isCollapse(){
    //   return this.$store.state.tabAbout.isCollapse
    // }
    ...mapState('tabAbout',['isCollapse'])
  },
};
</script>

<style lang='less' scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  height: 100vh;
  h3{
    color:#fff;
    text-align: center;
    line-height: 48px;
    font-size:16px;
    font-weight: 400px;
  }
  border-right: none;
}
</style>
