<template>
   
    <div class="login-root">
        <div class="login-left">

        </div>
        <div class="login-right">
            <el-form :model="dynamicValidateForm" 
            ref="dynamicValidateForm" 
            label-width="100px" 
            class="demo-form">
                <el-form-item
                  prop="email"
                  label="邮箱账号"
                  class="demo-item"
                  :rules="[
                    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                    { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                  ]"
                >
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="账号密码" prop="pass" class="demo-item">
                    <el-input type="password" ></el-input>
                </el-form-item>
                <div class="button-syn">
                    <el-button type="primary" @click="onSubmit">登录</el-button>
                    <el-button>取消</el-button>
                </div>
            </el-form>
        </div>
    </div>

</template>

<script>
export default {
    data() {
      return {
        dynamicValidateForm: {
          domains: [{
            value: ''
          }],
          email: ''
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      removeDomain(item) {
        var index = this.dynamicValidateForm.domains.indexOf(item)
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1)
        }
      },
      addDomain() {
        this.dynamicValidateForm.domains.push({
          value: '',
          key: Date.now()
        });
      }
    }
  }
</script>

<style lang="less" scoped>
.login-root{
    height: 280px;
    .login-left{
        width: 30%;
        float: left;
    }
    .login-right{
        width: 70%;
        float: right;
        .demo-form{
            width: 420px;
            .demo-item{
                margin-top:35px;
                margin-bottom: 35px;
            }
        }

    }
    .button-syn{
        margin-top: 50px;
        padding-left: 80px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
}
</style>