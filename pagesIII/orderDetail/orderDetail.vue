<template>
	<view class="order-detail-container">
		<view class="address-wrap">
			<view class="user-phone-name">
				<view class="user-name">陆盈盈</view>
				<view class="user-phone">19324234323</view>
			</view>
			<view class="user-address">
				<view class="address-icon">
					<image src="../../static/images/location.png" mode=""></image>
				</view>
				<view class="address-info">
					<view class="info-province">广西省南宁市青秀区-龙光世纪B塔45层4516商铺</view>
					<view class="info-detail">圈果水果店</view>
				</view>
			</view>
		</view>
		<view class="order-info">
			<view class="order-info-wrap">
				<view class="info-item">
					<view class="info-item-left">订单编号：</view>
					<view class="info-item-right">
						<view>127188608472</view>
						<view class="clip">复制</view>
					</view>
				</view>
				<view class="info-item">
					<view class="info-item-left">物流单号：</view>
					<view class="info-item-right">
						<view>127188608472</view>
						<view class="clip">复制</view>
					</view>
				</view>
			</view>
			<view class="order-info-wrap">
				<view class="info-item">
					<view class="info-item-left">支付方式：</view>
					<view class="info-item-right">
						<view>微信支付</view>
					</view>
				</view>
				<view class="info-item">
					<view class="info-item-left">支付时间：</view>
					<view class="info-item-right">
						<view>2020-09-21 22:18:09</view>
					</view>
				</view>
			</view>
			<view class="order-info-wrap">
				<view class="info-item">
					<view class="info-item-left">下单时间：</view>
					<view class="info-item-right">
						<view>2020-09-21 22:18:09</view>
					</view>
				</view>
				<view class="info-item">
					<view class="info-item-left">发货时间：</view>
					<view class="info-item-right">
						<view>2020-09-21 22:18:09</view>
					</view>
				</view>
				<view class="info-item">
					<view class="info-item-left">收货时间：</view>
					<view class="info-item-right">
						<view>2020-09-21 22:18:09</view>
					</view>
				</view>
			</view>

		</view>
		<view class="order-snapshoot">
			<view class="snap-title">
				<view>商品快照</view>
				<view> <text>*</text> 核对交易细节时，可作为判断依据</view>
			</view>
			<view class="snap-goods">
				<view class="goods-item" v-for="item of 2" :key="item">
					<view class="item-img">
						<image src="../../static/images/niuyouguo1.png" mode=""></image>
					</view>
					<view class="item-info">
						<view class="info-title">
							<text>采手精选</text>
							<text>八六王哈密瓜B级1.8~2.2公斤/个</text>
						</view>
						<view class="info-desc">
							<view>5斤装</view>
							<view><text>X</text>2</view>
						</view>
						<view class="info-price">
							<view class="left-price">
								<text>￥</text>
								<text>108</text>
								<text>元</text>
							</view>
							<view class="right-price">
								<text>实付:</text>
								<text>108.00</text>
								<text>(含运费)</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="fruit-info-title">
				<view>水果身份</view>
			</view>
			
			<view class="frui-info-wrap">
				<view class="fruit-info-item">
					<view class="left-item">种类:</view>
					<view class="right-item">哈密瓜</view>
				</view>
				<view class="fruit-info-item">
					<view class="left-item">品种:</view>
					<view class="right-item">八六王</view>
				</view>
				<view class="fruit-info-item">
					<view class="left-item">产地:</view>
					<view class="right-item">广西</view>
				</view>
				<view class="fruit-info-item">
					<view class="left-item">储存条件:</view>
					<view class="right-item">4-28℃</view>
				</view>
				<view class="fruit-info-item">
					<view class="left-item">包装:</view>
					<view class="right-item">塑料胶框</view>
				</view>
			</view>
			
			<!-- 水果标准 -->
			<view class="tui-height-full">
				<view class="tui-title-line">
					<text>抽样标准</text>
				</view>
				<view class="tui-height-flex-two tui-magin-left-on tui-border-1px">
					<view class="tui-left-one">
						<text class="tui-text-left tui-title-class">果品星级</text>
						<tui-rate :current="4" active="#ff7900" :hollow="true" :disabled="true" :size="16"></tui-rate>
					</view>
					<view class="tui-left-one">
						<text class=" tui-text-left tui-title-class">口感星级</text>
						<tui-rate :current="4" active="#ff7900" :hollow="true" :disabled="true" :size="16"></tui-rate>
					</view>
			
				</view>
				<view class="tui-height-flex-two tui-magin-left-on tui-border-1px">
					<view class="tui-left-one">
						<text class="tui-text-left tui-title-class">果色星级</text>
						<tui-rate :current="4" active="#ff7900" :hollow="true" :disabled="true" :size="16"></tui-rate>
					</view>
					<view class="tui-left-one">
						<text class="tui-text-left tui-title-class">外观星级</text>
						<tui-rate :current="4" active="#ff7900" :hollow="true" :disabled="true" :size="16"></tui-rate>
					</view>
			
				</view>
				<view class="tui-height-flex-two tui-magin-left-on tui-border-1px">
					<view class="tui-left-one2">
						<text class="tui-text-left tui-title-class">果径大小</text>
						<text class=" tui-text-left tui-title-class">{{shopListdata.data.platformPrice || 0}}mm</text>
					</view>
					<view class="tui-right-one" style="flex: 4;">
						<text class=" tui-text-left tui-title-class ">不良率</text>
						<text class=" tui-text-left tui-title-class">{{shopListdata.data.rejectRatio || 0}}</text>
					</view>
			
				</view>
				<view class="tui-height-flex-two tui-magin-left-on tui-border-1px">
					<view class="tui-left-one2">
						<text class="tui-text-left tui-title-class">糖分</text>
						<text class=" tui-text-left tui-title-class">{{shopListdata.data.sugar || 0}}</text>
					</view>
					<view class="tui-right-one" style="flex: 4;">
						<text class="tui-text-left tui-title-class">酸度</text>
						<text class="tui-text-left tui-title-class">{{shopListdata.data.acidity || 0}}</text>
					</view>
			
				</view>
				<view class="tui-height-flex-two tui-magin-left-on tui-border-1px">
					<view class="tui-left-one2">
						<text class="tui-text-left tui-title-class">水分</text>
						<text class="tui-text-left tui-title-class">{{shopListdata.data.moisture || 0}}</text>
					</view>
					<view class="tui-right-one" style="flex: 4;">
						<text class="tui-text-left tui-title-class">硬度</text>
						<text class="tui-text-left tui-title-class">{{shopListdata.data.hardness || 0}}</text>
					</view>
			
				</view>
				<!-- 	<view class="tui-height-flex-two tui-magin-left-on tui-border-1px">
					<view class="tui-left-one">
						<text class="tui-text-left tui-title-class">外观等级</text>
					</view>
					<view class="tui-right-one">
						<text class="tui-title-class">{{shopListdata.data.facadeLevel}}</text>
					</view>
					
				</view>
				<view class="tui-height-flex-two tui-magin-left-on tui-border-1px">
					<view class="tui-left-one">
						<text class="tui-text-left tui-title-class">果形等级</text>
					</view>
					<view class="tui-right-one">
						<text class="tui-title-class">{{shopListdata.data.shapeLevel}}</text>
					</view>
					
				</view>
				<view class="tui-height-flex-two tui-magin-left-on tui-border-1px">
					<view class="tui-left-one">
						<text class="tui-text-left tui-title-class">不良率</text>
					</view>
					<view class="tui-right-one">
						<text class="tui-title-class">{{shopListdata.data.rejectRatio}}</text>
					</view>
					
				</view>
				<view class="tui-height-flex-two tui-magin-left-on tui-border-1px">
					<view class="tui-left-one">
						<text class="tui-text-left tui-title-class">售后时效	</text>
					</view>
					<view class="tui-right-one">
						<text class=" tui-title-class">{{shopListdata.data.afterSalesTime}}</text>
					</view>
					
				</view> -->
			
			
			</view>
			
			<!-- 免赔情况 -->
			<view class="tui-height-full">
				<view class="tui-title-line">
					<text>免赔情况</text>
				</view>
				<view class="tui-height-flex tui-height-flex-top">
					<view class="tui-left-one1">
						<text class="iconfont icon-quan"></text><text class="tui-name-class">果子颜色不一</text>
					</view>
					<view class="tui-right-one">
						<text class="iconfont icon-quan"></text><text class="tui-name-class">轻微风花</text>
					</view>
			
				</view>
				<view class="tui-height-flex tui-height-flex-top">
					<view class="tui-left-one1">
						<text class="iconfont icon-quan"></text><text class="tui-name-class">果形大小不一</text>
					</view>
					<view class="tui-right-one">
						<text class="iconfont icon-quan"></text><text class="tui-name-class">轻微流浆</text>
					</view>
			
				</view>
			
			</view>
			<!-- 可售后情况 -->
			<view class="tui-height-full ">
				<view class="tui-title-line">
					<text>可售后情况</text>
				</view>
				<view class="tui-height-flex tui-height-flex-top">
					<view class="tui-left-one1">
						<text class="iconfont icon-quan"></text><text class="tui-name-class">摔坏</text>
					</view>
					<view class="tui-right-one">
						<text class="iconfont icon-quan"></text><text class="tui-name-class">压伤</text>
					</view>
			
				</view>
				<view class="tui-height-flex tui-height-flex-top">
					<view class="tui-left-one1">
						<text class="iconfont icon-quan"></text><text class="tui-name-class">腐烂</text>
					</view>
					<view class="tui-right-one">
						<text class="iconfont icon-quan"></text><text class="tui-name-class">单果重量不达标</text>
					</view>
			
				</view>
			</view>
			
		</view>

	</view>
</template>

<script>
	export default {
		name: "orderDetail",
		data() {
			return {
				
			};
		},
	}
</script>

<style lang="less">
	page {
		background-color: #F7F7F7;
	}

	.order-detail-container {
		overflow: hidden;

		.address-wrap {
			background: #fff;
			border-radius: 30rpx;
			padding: 20rpx 48rpx;
			margin: 20rpx 0;

			.user-phone-name {
				display: flex;
				align-items: center;
				font-size: 32rpx;
				color: #000;
				font-weight: 500;
				margin-bottom: 30rpx;

				.user-name {
					margin-right: 16rpx;
				}
			}

			.user-address {
				display: flex;

				.address-icon {
					width: 6%;

					image {
						width: 24rpx;
						height: 28rpx;
					}

				}

				.address-info {
					width: 94%;
					font-size: 28rpx;
					color: #555;

				}
			}
		}

		.order-info {
			margin: 20rpx 0;
			background: #fff;
			padding: 10rpx 40rpx;
			border-radius: 30rpx;

			.order-info-wrap {
				position: relative;

				&::after {
					content: "";
					width: 100%;
					position: absolute;
					left: 30%;
					bottom: 0;
					height: 2rpx;
					background: #F2F2F2;
				}

				&:last-child {

					&::after {
						content: "";
						width: 100%;
						position: absolute;
						left: 30%;
						bottom: 0;
						height: 2rpx;
						background: #fff;
					}
				}

				padding: 30rpx 0;

				.info-item {
					display: flex;
					margin-bottom: 40rpx;

					&:last-child {
						margin-bottom: 0;
					}

					.info-item-left {
						color: #8C8C8C;
						font-size: 28rpx;
						font-weight: 500;
						width: 30%;
					}

					.info-item-right {
						display: flex;
						align-items: center;
						font-size: 28rpx;
						color: #000;
						font-weight: 500;
						width: 70%;

						.clip {
							margin-left: 20rpx;
							font-size: 24rpx;
							width: 72rpx;
							height: 36rpx;
							background: #f2f2f2;
							color: #000;
							text-align: center;
							border-radius: 40rpx;

						}
					}
				}

			}
		}

		.order-snapshoot {
			background: #fff;
			border-radius: 30rpx;
			padding: 40rpx 40rpx;
			margin: 20rpx 0 80rpx;
			.snap-title {
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 28rpx;
				border-bottom: 1px solid #F2F2F2;
				padding: 12rpx 0;

				view {
					&:first-child {
						color: #000;
					}

					&:last-child {
						color: #8C8C8C;

						text {
							color: #F20000;
						}
					}
				}
			}

			.snap-goods {
				.goods-item {
					display: flex;
					padding: 20rpx 0;
					border-bottom: 1px solid #e5e5e5;
					margin: 20rpx 0;

					&:last-child {
						border-bottom: none;
					}

					.item-img {
						margin-right: 20rpx;

						image {
							width: 160rpx;
							height: 160rpx;
							background: #eee;
							border-radius: 6rpx;
						}
					}

					.item-info {
						.info-title {
							text {
								&:first-child {
									background: #00C52A;
									font-size: 24rpx;
									border-radius: 10rpx 2rpx 10rpx 2rpx;
									color: #fff;
									margin-right: 4rpx;
									padding: 2rpx 4rpx;
									display: inline-block;
								}

								&:last-child {
									color: #333333;
									font-size: 28rpx;
									fong-weight: 400;
								}
							}
						}

						.info-desc {
							display: flex;
							justify-content: space-between;
							align-items: center;
							color: #555555;
							font-size: 28rpx;
							margin: 12rpx 0;

							view {
								&:last-child {
									fonts-size: 32rpx;
									color: #333333;

									text {
										font-size: 24rpx;
									}
								}
							}
						}

						.info-price {
							display: flex;
							justify-content: space-between;

							.left-price {
								text {
									color: #FF5600;

									&:first-child {
										font-size: 16rpx;
									}

									&:nth-child(2) {
										font-size: 32rpx;
										font-weight: bold;
									}

									&:last-child {
										font-size: 24rpx;
									}
								}
							}

							.right-price {
								text {
									color: #666666;

									&:first-child {
										font-size: 24rpx;
									}

									&:nth-child(2) {
										font-size: 28rpx;
										color: #333333;
									}

									&:last-child {
										font-size: 24rpx;
									}
								}
							}
						}
					}
				}
			}

			.fruit-info-title {
				font-size: 28rpx;
				border-bottom: 1px solid #F2F2F2;
				padding: 12rpx 0;
			}

			.frui-info-wrap {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				padding: 36rpx 0;
				.fruit-info-item {
					display: flex;
					align-items: center;
					font-size: 28rpx;
					width: 50%;
					padding: 6rpx 0;
					.left-item {
						color: #939297;
					}
					.right-item {
						color: #333;
						margin-left: 16rpx;
					}
				}
			}

		}
	}
	
	.tui-height-full {
		background-color: #fff;
		margin: 40rpx 0;
	}
	
	.shuoming {
		line-height: 60rpx;
		font-size: 28rpx;
		padding: 20rpx 10rpx;
	}
	
	.shuoming text {
		color: #00BC45;
		font-weight: bold;
	}
	
	.tui-title-line {
		color: rgba(51, 51, 51, 1);
		font-weight: 400;
		font-size: 28rpx;
		padding-bottom: 14rpx;
		border-bottom: 1px solid #f5f5f5;
		margin-bottom: 30rpx;
	}
	
	.tui-height-flex {
		display: flex;
	
	}
	
	.tui-height-flex-top {
		margin: 28rpx 0;
		display: flex;
		justify-content: space-between;
	
	}
	
	.tui-bottom-border {
		border-bottom: 1rpx solid rgba(245, 245, 245, 1);
		padding-bottom: 10rpx;
		color: rgba(51, 51, 51, 1);
	
	
	}
	
	.tui-pay-color {
		color: rgba(146, 147, 151, 1);
		font-size: 27rpx;
	}
	
	.tui-height-flex-two {
		display: flex;
		height: 80rpx;
		line-height: 80rpx;
	
	
	}
	
	.tui-border-1px {
		border-top: 1px solid rgba(244, 245, 247, 1);
		border-left: 1px solid rgba(244, 245, 247, 1);
		border-right: 1px solid rgba(244, 245, 247, 1);
	}
	
	.heigth-tui {
		background-color: #fff;
		border-radius: 50rpx;
		height: 518rpx;
	
	}
	
	.text-indent {
		text-indent: 2em;
		letter-spacing: 4rpx;
	}
	
	.line-higth-cent {
		color: rgba(112, 112, 112, 1);
		font-size: 24rpx;
		line-height: 50rpx;
		padding: 53rpx;
		font-weight: 500;
	}
	
	.tui-border-1px:last-child {
		border-bottom: 1px solid rgba(244, 245, 247, 1);
	
	}
	
	.tui-magin-cente {
		text-align: center;
		font-size: 40rpx;
		font-weight: 800;
		color: #fff;
		margin-bottom: 20rpx;
	}
	
	.tui-left-one {
		display: flex;
		justify-content: space-between;
		padding-right: 10rpx;
		flex: 4;
		border-right: 1px solid rgba(244, 245, 247, 1);
		
	}
	.tui-height-flex-two {
		.tui-left-one {
			&:last-child {
			border-right: none
			}
		}
	}
	
	.tui-left-one1 {
		flex: 4;
		display: flex;
		align-items: center;

	}
	
	.tui-left-one2 {
		flex: 4;
		border-right: 1px solid rgba(244, 245, 247, 1);
		
	}
	
	.tui-title-class {
		font-size: 24rpx;
		color: rgba(146, 147, 151, 1);
	}
	
	.tui-name-class {
		font-size: 32rpx;
		color: rgba(51, 51, 51, 1);
	}
	
	.icon-quan {
		margin-right: 10rpx;
		color: rgba(0, 197, 42, 1);
		font-size: 20rpx;
	}
	
	.tui-text-left {
		margin-left: 40rpx;
	}
	
	.tui-right-one {
		flex: 3;
		display: flex;
		align-items: center;
	}
</style>
