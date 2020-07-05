<template>
  <el-row class="home"
          :gutter="20">
    <el-col :span="8">
      <el-card shadow="hover"
               style="height: 290px">
        <div class="user">
          <img :src="userImg" />
          <div class="userinfo">
            <p class="name">firework</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间：<span>2020-7-05</span></p>
          <p>上次登录地点：<span>成都</span></p>
        </div>
      </el-card>
      <el-card shadow="hover"
               style="height: 522px; margin-top: 20px">
        鼠标
      </el-card>
    </el-col>
    <el-col :span="16">
      <div class="num">
        <el-card shadow="hover"
                 v-for="item in 6"
                 :key="item">
          <i class="icon">
            <div class="detail">
              <p class="num">￥123</p>
              <p class="txt">今日支付订单</p>
            </div>
          </i>
        </el-card>
      </div>
      <el-card shadow="hover">
        <div style="height: 280px">

        </div>
      </el-card>
      <div class="graph">
        <el-card shadow="hover">
          <div style="height: 260px">

          </div>
        </el-card>
        <el-card shadow="hover">
          <div style="height: 260px">

          </div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      userImg: require('../../assets/images/user.jpg')
    }
  },
  mounted () {
    this.$http.get('/home/getData').then(res => {
      console.log(res.data)
    })
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/home";
</style>