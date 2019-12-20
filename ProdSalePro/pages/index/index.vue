<template>
	<view class="content">
		<image class="logo" src="../../static/kitty-BasicLogin/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		 <navigator url="/pages/login/login" hover-class="other-navigator-hover">
		      <button type="default">跳转登陆页面</button>
		 </navigator>
		 <view>
			 <navigator url="/pages/bus_pages/livePusher/livePusher">主播端</navigator>
			 <navigator url="/pages/cus_pages/livePlayer/livePlayer">观众端</navigator>
		 </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		onShow() {
			uni.showToast({
				title:"显示成功",
				duration:2000,
				position: 'center'
			})
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
