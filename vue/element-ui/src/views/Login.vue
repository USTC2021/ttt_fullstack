<template>
  <div class="login">
      <div class="login-container">
          <h2>学习后台管理系统</h2>
          <div class="wrap">
            <el-input
                placeholder="请输入用户名"
                prefix-icon="el-icon-user"
                v-model="userName">
            </el-input>

            <el-input placeholder="请输入密码" prefix-icon="el-icon-lock" v-model="password" show-password></el-input>
          
            <el-button type="primary" @click="login">登陆</el-button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
          userName: '',
          password: '' 
        }
    },
    methods: {
        login() {
            if (this.userName === 'admin' && this.password === '123456') {
                this.$router.push({
                    path: '/home',
                    query: {
                        user: this.userName
                    }
                })
                localStorage.setItem('user', this.userName)
            }
        }
    }
}
</script>

<style>
    .login {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .login-container {
        width: 300px;
        height: 260px;
        box-shadow: 0px 0px 5px #999;
        border-radius: 5px;
        text-align: center;
    }
    .wrap {
        padding: 10px 50px;
    }
    input {
        margin: 10px 0;
    }
</style>