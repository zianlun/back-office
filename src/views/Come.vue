<template>
    <div class="app">
        <el-container>
            <el-header>
                <login-header></login-header>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>

<script>
import LoginHeader from '@/components/LoginHeader.vue'
export default {
    name:"come",
    components:{
        LoginHeader
    }
}
</script>

<style lang='less' scoped>
.app{
    
}

</style>