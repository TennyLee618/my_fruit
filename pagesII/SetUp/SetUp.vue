<template>
	<view>
		<!--header-->
		<view class="tui-header-box">
			<view class="tui-icon-box" @tap="back">
				<tui-icon name="arrowleft" :size="30" color="#333"></tui-icon>
			</view>
			<view class="tui-header">设置</view>
		</view>
		<!--header-->
		<view class="tui-paddingTop">
			<tui-list-cell unlined :hover="false">
				<view class="tui-title">
					WIFI下自动播放视频
					<!-- <switch class="tui-switch" color="rgba(0, 197, 42, 1)" @change="switchChange( $event)"></switch> -->
					<ss-switch selColor="#00C52A"   v-model="switchValue" @change="switchInput"></ss-switch>
				</view>
			</tui-list-cell>
		</view>

		<view class="log-out" @tap="logout">退出登录</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				switchValue: false,
			}
		},
		methods: {
			switchInput(e) {
				console.log(e)
			},
			back: function() {
				uni.navigateBack();
			},
			switchChange(e) {
				console.log(e.detail.value)
			},
			logout() {
				console.log('点击了退出登录')
			}

		}
	}
</script>

<style>
	page {
		background-color: rgba(245, 245, 245, 1);
	}

	.tui-header-box {
		display: flex;
		align-items: center;
		background: #fff;
		font-size: 32rpx;
		color: #393939;
		padding: 50rpx 30rpx 20rpx;
	}

	.log-out {

		border: 1px solid #fff;
		width: 90%;
		margin: 424rpx auto;
		background: #fff;
		padding: 26rpx 0;
		border-radius: 6rpx;
		text-align: center;
		font-size: 36rpx;
		color: #707070;

	}

	.tui-paddingTop {
		padding-top: 10rpx;
	}

	.tui-title {
		width: 100%;
		padding-left: 20rpx;
		box-sizing: border-box;
		color: #333333;
		font-size: 32rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.tui-switch {
		transform: scale(0.8);
		transform-origin: 100% center;
	}

	.tui-item-box {
		width: 100%;
		display: flex;
		align-items: center;
	}

	.tui-list-cell_name {
		padding-left: 20rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
