<template>
   <div class='nav-header'>
    <div class='nav-header-left'>
          <el-button @click="changeAside" icon="el-icon-menu" size='mini'></el-button>
          <!-- 面包屑区域 -->
          <span>首页</span>
    </div>
    <div class='nav-header-right'>
    <el-dropdown>
        <span class="el-dropdown-link">
            <img class='user' src="../assets/user.jpg" alt="用户头像">
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
    </div>
   </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  export default {
    methods:{
        ...mapMutations('tabAbout', ['changeAside'])
    }
  };
</script>

<style lang='less' scoped>
.nav-header {
  height: 60px;
  width: auto;
  background-color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  span {
    font-size: 14px;
    color: #fff;
    margin: 10px;
  }
  .nav-header-right{
    .user {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
  }
}
</style>