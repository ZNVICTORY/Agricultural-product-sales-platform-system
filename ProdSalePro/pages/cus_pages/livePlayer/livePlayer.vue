<template>
	<view>
		<view>播放器</view>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				player: null,    // 放置播放器
				liveplayurl: 'rtmp://zhangly.xyz/live/test?txSecret=0276f067d794f4d136f3e9592360170a&txTime=5DF8ED6F',  // 拉流地址
				currentWebView: null ,//容器存放当前页面
				
			}
		},
		// onShow() {
		// 	// 应用生命周期， 当uniapp 启动时，或从后台进入前台时调用	
		// 	this.getwebView()
		// },
		onLoad() {
			// 页面生命周期，页面加载时启动，参数是上个页面传递的参数，用于页面传参
			this.getwebView()  //获取当前webviewå
		},
		methods: {
			/**
			 *  获取当前显示的 webview 实例，方便操作
			 */
			getwebView() {
				const pages = getCurrentPages()  //获取所有页面对象,数组的最后一个是当前页面
				const page = pages[pages.length - 1]  // 获取当前页面
				//#ifdef APP-PLUS
				const webView = page.$getAppWebview()  // 得到当前页面的对象实例
				// console.log(webView)
				this.currentWebView = webView
				this.plusPlay() //创建Liveplay 对象
				//#endif
                this.plusPlay() //创建Liveplay 对象
			},
			/**
			 * 创建播放器，即 拉流对象
			 */
			plusPlay() {
				console.log(this.player,this.liveplayurl)
				this.player = new plus.video.VideoPlayer('play', {
					src: this.liveplayurl,
					top: '100upx',
					left: '0px',
					width: '100%',
					height: '300px',
					position: 'static',
					objectFit: 'fill'
					
				})
				// console.log('player', this.player)
				console.log('webview', this.currentWebView)
				this.currentWebView.append(this.player)
				// console.log(this.currentWebView)
			}
		}
	}
</script>

<style>
 
</style>
