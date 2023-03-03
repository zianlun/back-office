<template>
  <div class="nav-header">
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
    >
      <el-menu-item
        class="nav-left"
        v-for="item in menuDataLeft"
        :key="item.name"
        :index="item.name"
      >
        {{ item.label }}
      </el-menu-item>
      <!-- 登录dialog -->
      <el-menu-item class="fa-login" index="login">
        <el-button type="text" class="login" @click="dialogFormVisible = true">
          登录
        </el-button>
      </el-menu-item>
      <el-dialog 
        width="50%"
        :visible.sync="dialogFormVisible">
        <login></login>
        <div slot="footer" class="dialog-footer"></div>
      </el-dialog>
      <el-menu-item
        class="nav-right"
        v-for="item in menuDataRight"
        :key="item.name"
        :index="item.name"
      >
        {{ item.label }}
      </el-menu-item>
    </el-menu>
  </div>
</template>
 
<script>
import Home from '@/views/Home.vue';
import Login from '../views/Login.vue';
export default {
  components:{
    Login,
    Home
  },
  data() {
    return {
      menuDataLeft: [
        {
          path: "/git",
          name: "git",
          label: "GitHub",
          icon: "s-home",
          url: "",
        },
        {
          path: "/function",
          name: "function",
          label: "功能介绍",
          icon: "video-play",
          url: "",
        },
        {
          path: "/user",
          name: "collaboration",
          label: "请求协作",
          icon: "user",
          url: "UserManage/UserManage",
        },
        {
          path: "/documentation",
          name: "documentation",
          label: "项目文档",
          icon: "user",
          url: "UserManage/UserManage",
        },
      ],
      menuDataRight: [
        {
          path: "/message",
          name: "message",
          label: "消息",
          icon: "video-play",
          url: "MallManage/MallManage",
        },
      ],
      //登录弹窗设置
      dialogFormVisible: false,
    };
  },
};
</script>
 
<style lang='less' scoped>
.nav-header {
  font-size: 25px;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  .fa-login{
    display: flex;
    float: right;
    .login {
        width: auto;
        height: auto;
        color:#909399;
    }
  }
  
}
.nav-right {
  float: right;
}
.el-menu {
  width: 100%;
  background: #eeeeee;
}
.el-menu-item .el-button {
  margin-right: 20px;
  margin-left: 20px;
}
/deep/.el-dialog {
    border-radius: 20px;
}
</style>