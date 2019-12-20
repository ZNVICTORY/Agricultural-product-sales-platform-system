<template>
	<view class="content">
		<view class="uni-form-item uni-column">
		   <input type="number" length="11" class="uni-input" placeholder="请输入手机号" @blur="checkTel" v-model="userInfo.phone">
		</view>
		<view class="uni-form-item uni-column column-with-btn">
			<input type="text" class="uni-input" placeholder="请输入验证码" v-model="userInfo.captcha">
			<button :class="{ active: !disableCodeBtn }" :disabled="disableCodeBtn" @tap="sendCode" >{{ codeBtn.text }}</button>
		</view>
		<view class="uni-form-item uni-column">
			<input type="password" class="uni-input" name="" placeholder="请输入密码"  v-model="userInfo.password"/>
		</view>
		<view class="uni-form-item uni-column">
			<input type="password" class="uni-input" name="" placeholder="确认密码" v-model="userInfo.repassword"/>
		</view>
		<button type="primary">注册</button>
		<view class="links">已有账号？<view class="link-highlight" @tap="gotoLogin">点此登陆</view></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo: {
					phone: '',                 // 用户手机号
					captcha: '',               // 手机验证码
					password: '',              // 密码
					repassword: ''             // 确认密码
				},
				seconds: 10, 
				codeBtn: {
					text: '获取验证码',
					waitingCode: false,
					count: this.seconds
				}
			}
		},
		onLoad() {
			//页面生命周期函数
		},
		methods: {
			sendCode: function() {
				this.codeBtn.waitingCode = true
				this.codeBtn.count = this.seconds
				this.codeBtn.text = this.codeBtn.count + 's'
			
				let countdown = setInterval(() => {
					this.codeBtn.count--
					this.codeBtn.text = this.codeBtn.count + 's'
					
					if(this.codeBtn.count === 0) {
						clearInterval(countdown)
						this.codeBtn.text = '重新发送'
						this.codeBtn.waitingCode = false
					}
				}, 1000)
			},
			gotoLogin: function() {
				uni.navigateTo({ url: 'login'})
			},
			checkTel() {
				const pattern = new RegExp(/^1[3456789]\d{9}$/)
				if(!pattern.test(this.userInfo.phone)) {
					uni.showModal({
						content: '输入错误'
					})
				}
			}
		},
		computed:{
			disableCodeBtn: function() {
				return this.codeBtn.waitingCode || this.captchaImg.length < 4
			}
		}
	}
</script>

<style lang="scss" scoped>
 
  .content {
	  padding: 60upx 100upx 100upx;
  }
  .logo {
	  text-align: center;
	  image {
		  width: 200upx;
		  height: 200upx;
		  margin-bottom: 40upx;
	  }
  }
  .uni-form-item {
	  margin-bottom: 40upx;
	  padding: 0;
	  border-bottom: 1px solid #e3e3e3;
	  .uni-input {
		  font-size: 30upx;
		  padding: 7px 0;
	  }
  }
  .column-with-btn {
	  display: flex;
	  flex: row;
	  justify-content: space-between;
	  align-content: center;
	  button {
		  font-size: 24upx;
		  margin: 0;
		  width: 180upx;
		  text-align: center;
		  &:after {
			  border: none;
		  }
		  &.active {
			  background-color: $color-primary;
			  color: $uni-text-color-inverse;
		  }
	  }
  }
  .img-captcha {
  		  width: 150upx;
  		  height: 60upx;
  }
  button[type="primary"] {
  		  background-color: $color-primary;
  		  border-radius: 0;
  		  font-size: 34upx;
  		  margin-top: 60upx;
  }
  .links {
	  text-align: center;
	  margin-top: 40upx;
	  font-size: 26upx;
	  color: #999999;
	  view {
		  display: inline-block;
		  vertical-align: top;
		  margin: 0 10upx;
	  }
	  .link-highlight {
		  color: $color-primary;
	  }
  }
</style>
