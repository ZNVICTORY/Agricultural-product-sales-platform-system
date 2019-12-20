<template>
	<view class="content">
		<view class="logo">
			<image src="../../static/kitty-BasicLogin/logo.png"></image>
		</view>
		<view class="uni-form-item uni-column">
			<input type="text"  v-model="userinfo.name" class="uni-input" placeholder="账号名称"/>
		</view>
		<view class="uni-form-item uni-column">
			<input type="password" v-model="userinfo.password" class="uni-input" placeholder="密码"/>
		</view>
	    <button type="primary" @tap="login">登陆</button>
		<view class="links">
			<view class="link-highlight" @tap="gotoForgetPassword">忘记密码</view><view>|</view><view class="link-highlight" @tap="gotoRegister">注册账号</view>
		</view>
	</view>
</template>
<script>
	import crypto from 'crypto'
	var MD5 = crypto.createHash('md5')
	
	export default {
		data() {
			return {
				userinfo: {
					name: '',
					password: ''
				}
			}
		},
		methods: {
			login: async function() {
				const result = await this.$apis.postLogin(this.userinfo)
				if(result.code === '000001') {
					uni.setStorageSync("token", result.data.token)
					uni.navigateTo({
						animationDuration: 500,
						animationType: 'slide-in-right',
						url: '../index/index'
					})
				} else {
					uni.showModal({
						content: result.message
					})
				}
			},
			// 忘记密码
			gotoForgetPassword: function() {
				uni.navigateTo({url: 'forget'})
			},
			//注册账号
			gotoRegister: function() {
				uni.navigateTo({url: 'register'})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		padding: 100upx;
	}
	.logo {
		text-align: center;
		image {
			width: 200upx;
			height: 200upx;
			margin: 0 0 60upx;
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
		color: #999;
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
