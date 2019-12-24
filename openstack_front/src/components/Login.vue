<template>
  <div class="background">
    <div id="login_box">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="domain" prop="domain">
          <el-input type="text" v-model="ruleForm.domain" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户名" prop="user">
          <el-input type="text" v-model="ruleForm.user" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密 码" prop="pass">
          <el-input v-model.number="ruleForm.pass"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>

    </div>

  </div>

</template>

<script>
export default {
  name: 'Login',
  data () {
    var validateUser = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    var validateDomain = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入域'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        pass: '',
        user: '',
        domain: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        user: [
          { validator: validateUser, trigger: 'blur' }
        ],
        domain: [
          { validator: validateDomain, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const params = new URLSearchParams()
          params.append('user', this.ruleForm.user)
          params.append('pass', this.ruleForm.pass)
          params.append('domain', this.ruleForm.domain)
          this.axios.post('/api/login', params)
            .then(response => {
              this.content = response.data
              console.log(this.content)
              if (this.content === 'success') {
                this.$router.push('/Horizon')
              } else if (this.content === 401) {
                alert('用户名或密码错误')
              }
            })
            .catch(function (error) {
              console.log(error)
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}

</script>

<style scoped>
  .background {

    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgb(50, 64, 87);
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
  }

  #login_box {

    width: 400px;
    height: 400px;
    background-color: white;
    border-radius: 2%;

  }

  .el-form {
    margin-top: 80px;
    margin-right: 60px;

  }

  .body {
    background-color: rgb(50, 64, 87);
  }

</style>
