<template>
	<view class="container">
		<!--header-->
		<view class="tui-header-box">
			<view class="tui-icon-box" @tap="back"><tui-icon name="arrowleft" :size="30" color="#333"></tui-icon></view>
			<view class="tui-header">最近看过</view>
		</view>
		<!--header-->
		<view class="container-img " v-if="lookDatas[0] && lookDatas[0].list.length === 0" :class="{ active: isActive, 'text-danger': hasError }">
			<image src="../../static/images/orderBMG.png" mode="widthFix"></image>
			<text class="color-text">最近没有浏览过商品先去逛逛</text>
		</view>
		<view class="container-img" v-if="modaishow">
			<image src="../../static/images/quanguo.png" mode="widthFix" class="img-quanguo"></image>
			<!-- <text class="color-text">{{tips}}</text> -->
			<view class="btnbox"><button class="btn" type="default" open-type="getUserInfo" @getuserinfo="getUserInfo">去登陆</button></view>
		</view>

		<checkbox-group @change="buyChange">
			<view class="tui-cart-cell  tui-mtop">
				<tui-swipe-action :actions="actions" @click="handlerButton(item.id)" :params="item" v-for="(item, index) in lookDatas" :key="index">
					<template v-slot:content>
						<block v-if="item.list.length !== 0">
							<view class="item-time">{{ item.createDate }}</view>
							<view class="tui-goods-item" v-for="dt of item.list" :key="idx">
								<image :src="dt.url" class="tui-goods-img" @tap="gotoList(dt.id)" />
								<view class="tui-goods-info">
									<view class="tui-goods-title">
										<text class="tag-tit">{{ dt.lableName || '' }}</text>
										{{ dt.name || '' }}
									</view>
									<view class="tui-goods-model">
										<view class="tui-model-text">{{ dt.kg1 || 0 }}斤装 x 1</view>
									</view>
									<view class="tui-price-box">
										<view class="tui-goods-price">
											<text class="text-color2">￥</text>
											{{ dt.platformPrice || 0 }}
											<text style="font-size: 20rpx;font-weight: 400;margin-left: 4rpx;">元</text>
											<text class="price2">/件</text>
										</view>
										<view class="">
											<image src="../../static/images/like1.png" mode="aspectFill" class="tui-shop-car" v-if="dt.isCollection" @tap="delLike(dt.id)"></image>
											<image
												src="../../static/images/like2.png"
												mode="aspectFill"
												class="tui-shop-car"
												v-if="!dt.isCollection"
												@tap="likeOrder(dt.id)"
											></image>
										</view>
									</view>
								</view>
							</view>
						</block>
						<block>
							
						</block>
					</template>
				</tui-swipe-action>
			</view>
		</checkbox-group>

		<!--加载loadding-->
		<tui-loadmore v-if="loadding" :index="3" type="red"></tui-loadmore>
		<!-- 提示 -->
		<tips ref="tips"></tips>
	</view>
</template>

<script>
//请求方式
import { listing, publicing, publicing2 } from '../../api/api.js';
//请求地址
import { getRecently, postRecentlyDel, postLike, postDelLike, loginis } from '../../api/request.js';
var setdata = uni.getStorageSync('usermen');
var { log } = console;
export default {
	data() {
		return {
			tips: '',
			modaishow: false,
			isCollection: false,
			isActive: true, //显示
			hasError: false, //隐藏
			showLike: true,
			url: 'http://192.168.1.10:8980/',
			lookDatas: [],

			flag: false,
			checkFlag: false, //默认选中
			allFlag: '', //全选
			checkedArr: [], //存放选中的数据
			valueNum: 0,
			url: 'http://192.168.1.10:8980',
			orderObj: [],
			openid: '',
			neworder: [],

			dataList: [
				{
					id: 'q2020811',
					buyNum: 1,
					price: 299.5,
					selected: false,
					imgsrc: '../../static/images/putao1.png',
					shopName: '大葡萄'
				},
				{
					id: 'q2020812',
					buyNum: 2,
					price: 499,
					selected: false,
					imgsrc: '../../static/images/niuyouguo1.png',
					shopName: '大哈密瓜'
				},
				{
					id: 'q2020813',
					buyNum: 3,
					price: 199,
					selected: false,
					imgsrc: '../../static/images/putao1.png',
					shopName: '大紫葡萄'
				}
			],
			isAll: false,
			totalPrice: 0,
			buyNum: 0,
			cartIds: [], //购物车id
			actions: [
				{
					name: '删除',
					color: '#fff',
					fontsize: 28,
					width: 64,
					background: '#F82400'
				}
			],
			actions2: [
				{
					name: '看相似',
					color: '#fff',
					fontsize: 28,
					width: 64,
					background: '#FF7035'
				},
				{
					name: '删除',
					color: '#fff',
					fontsize: 28,
					width: 64,
					background: '#F82400'
				}
			],
			isEdit: false,

			pageIndex: 1,
			loadding: false,
			pullUpOn: true,
			allPrice: 0 //总价
		};
	},
	filters: {
		getPrice(price) {
			price = price || 0;
			return price.toFixed(2);
		}
	},

	//下拉刷新
	onPullDownRefresh() {
		this.getRecentlyData();
		console.log('refresh');
		setTimeout(function() {
			uni.stopPullDownRefresh();
		}, 1000);
	},
	methods: {
		back: function() {
			uni.navigateBack();
		},
		init(bull, tips) {
			this.modaishow = bull;
			this.tips = tips;
		},
		//获取头像昵称
		getUserInfo(event) {
			log(event);
			this.usering = event.detail.userInfo;
			uni.setStorageSync('userIN', event.detail.userInfo); //把头像存在本地，小程序提供如同浏览器cookie
			let userING = uni.setStorageSync('userIN', event.detail.userInfo);
			if (event.detail.userInfo) {
				let wxing = event.detail.userInfo;
				this.wxCode(wxing.avatarUrl, wxing.nickName);
			}
			// wx.startPullDownRefresh()

			log('dddddddddd');
		},
		//获取code
		wxCode(avatarUrl, nickName) {
			wx.login({
				success: res => {
					log(res);
					let code = res.code;
					this.wxLoging(code);
				},
				fail: err => {
					log(err);
				}
			});
		},
		//发code给后台换取token
		wxLoging(code) {
			log(code);

			// let appid = wx.getAccountInfoSync().miniProgram.appId
			// let secret = "956f8c9345cbe06a42c6494f7bb53f7f"
			let data = {
				code
			};
			uni.showLoading({
				title: '加载中',
				icon: 'none'
				// mask:true
			});
			publicing2(loginis, data) //发送请求携带参数
				.then(res => {
					if (res.statusCode == 500) {
						uni.showModal({
							title: '提示',
							content: '服务器错误，请重新登录获取信息',
							success: function(res) {
								if (res.confirm) {
									console.log('用户点击确定');
									uni.hideLoading();
								} else if (res.cancel) {
									console.log('用户点击取消');
									uni.hideLoading();
								}
							}
						});
						return;
					} else if (res.statusCode == 200) {
						log(res);
					}

					log(res); //获得token
					uni.setStorageSync('usermen', res.data.token); //把token存在本地，小程序提供如同浏览器cookie
					uni.hideLoading();
					this.modaishow = false;
					this.getRecentlyData();
				})
				.catch(err => {
					uni.showToast({
						title: `${err}`
					});

					log(err);
				});
		},
		//请求最近看过
		getRecentlyData() {
			uni.showLoading({});
			let data = {
				token: setdata,
				pageNo: 1,
				pageSize: 10
			};
			listing(getRecently, data)
				.then(res => {
					log('res:', res);
					this.lookDatas = res.data.data;
				})
				.catch(err => {
					log(err);
				});
			uni.hideLoading();
		},
		//收藏
		likeOrder(id) {
			log(id);
			let setdata = uni.getStorageSync('usermen');
			//判断是否登录才能收藏
			if (!setdata) {
				this.modaishow = true;
			} else {
				this.modaishow = false;
				let data = {
					goodsId: id,
					token: setdata
				};
				publicing(postLike, data)
					.then(res => {
						log(res);
						uni.showToast({
							title: `${res.data.msg}`,
							icon: 'none',
							duration: 1000
						});
						this.getRecentlyData();
					})
					.catch(err => {
						log(err);
					});
			}

			// let setdata = uni.getStorageSync('usermen')
			log(setdata);
		},
		//删除收藏
		delLike(id) {
			let data = {
				goodsId: id,
				token: setdata
			};
			uni.showModal({
				title: '提示',
				content: '取消收藏这件宝贝，确定吗？',
				success: res => {
					if (res.confirm) {
						publicing(postDelLike, data)
							.then(res => {
								log(res.data.msg);
								uni.showToast({
									title: `删除${res.data.msg}`
								});
								this.getRecentlyData();
							})
							.catch(err => {
								log(err);
							});
						console.log('用户点击确定');
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
			});
		},

		//商品详情页
		gotoList(id) {
			log(id);
			// 	return
			uni.navigateTo({
				url: '../../pagesIII/productDetail/productDetail?id=' + id
			});
		},

		//更新进货单数量

		//删除商品
		handlerButton(id) {
			log(id);
			var setdata = uni.getStorageSync('usermen');
			let data = {
				goodsId: id,
				token: setdata
			};
			log(data);
			publicing(postRecentlyDel, data)
				.then(res => {
					log(res);

					uni.showToast({
						title: `${res.data.msg}`
					});
					this.getRecentlyData();

					// this.$forceUpdate();
				})
				.catch(err => {
					log(err);
					uni.showToast({
						title: '删除失败'
					});
				});
			// let index = e.index;
			// let item = e.item;
		},
		//反馈提示
		tising(bull, tips) {
			this.init(bull, tips);
		},

		detail: function() {
			uni.navigateTo({
				url: '../productDetail/productDetail'
			});
		}
	},

	// 看订单的前提条件就是是否登录
	onShow() {
		//请求最近看过
		// this.getRecentlyData()

		let setdata = uni.getStorageSync('usermen');
		log(setdata);
		if (!setdata) {
			this.hasError = true;
			this.isActive = false;
			let bull = true;
			let tips = '请登录后再查看';
			this.tising(bull, tips);
		} else {
			let bull = false;
			let tips = '';
			this.tising(bull, tips);

			this.getRecentlyData();
			log('显示订单');
		}
	},
	onPullDownRefresh() {
		setTimeout(() => {
			uni.stopPullDownRefresh();
		}, 200);
	},

	onNavigationBarButtonTap(e) {
		this.isEdit = !this.isEdit;
		let text = this.isEdit ? '完成' : '编辑';
		// #ifdef APP-PLUS
		let webView = this.$mp.page.$getAppWebview();
		webView.setTitleNViewButtonStyle(0, {
			text: text
		});
		// #endif
	}
};
</script>

<style>
.tui-header-box {
	display: flex;
	align-items: center;
	background: #fff;
	font-size: 32rpx;
	color: #393939;
	padding: 50rpx 30rpx 20rpx;
}
/* 隐藏 */
.text-danger {
	display: none !important;
}

/* 显示 */
.active {
	display: block;
}

.container {
	padding-bottom: 120rpx;
}

.container-img {
	margin-top: 150rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.img-quanguo {
	height: 600rpx;
	width: 300rpx;
}

.color-text {
	color: rgba(112, 112, 112, 1);
}

.tui-mtop {
	margin: 20rpx 0;
}

/* 头像 */
.tui-head-log {
	width: 40rpx;
	height: 40rpx;
	display: block;
	margin-right: 20rpx;
}

.tui-edit-goods {
	width: 100%;
	border-radius: 12rpx;
	overflow: hidden;
	padding: 24rpx 30rpx 0 30rpx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #333;
	font-size: 24rpx;
}

.tui-goods-num {
	font-weight: bold;
	color: #ff5600;
}

.tui-cart-cell {
	width: 100%;
	/* border-radius: 12rpx; */
	/* background: #FFFFFF; */
	/* padding: 20rpx 0; */
	overflow: hidden;
}

.item-time {
	padding: 14rpx 30rpx;
	color: #707070;
	font-size: 28rpx;
	font-weight: 500;
	border-bottom: 1px solid #f5f5f5;
}

.tui-goods-item {
	display: flex;
	padding: 30rpx;
	box-sizing: border-box;
	border-bottom: 20rpx solid #f7f7f7;
}

.tui-checkbox {
	min-width: 70rpx;
	display: flex;
	align-items: center;
}

/* #ifdef MP-WEIXIN */
.tui-checkbox .wx-checkbox-input {
	width: 40rpx;
	height: 40rpx;
	margin-right: 0 !important;
	border-radius: 50% !important;
	transform: scale(0.8);
	border-color: #d1d1d1 !important;
}

.tui-checkbox .wx-checkbox-input.wx-checkbox-input-checked {
	background: #00bc45;
	width: 44rpx !important;
	height: 44rpx !important;
	border: none;
}

/* #endif */
/* #ifndef MP-WEIXIN */

>>> .tui-checkbox .uni-checkbox-input {
	width: 40rpx;
	height: 40rpx;
	margin-right: 0 !important;
	border-radius: 50% !important;
	transform: scale(0.8);
	border-color: #d1d1d1 !important;
}

>>> .tui-checkbox .uni-checkbox-input.uni-checkbox-input-checked {
	background: #00bc45;
	width: 45rpx !important;
	height: 45rpx !important;
	border: none;
}

/* #endif */
.tui-goods-img {
	width: 140rpx;
	height: 140rpx !important;
	border-radius: 12rpx;
	flex-shrink: 0;
	display: block;
	background: #eee;
}

.tui-goods-info {
	width: 100%;
	padding-left: 20rpx;
	/* display: flex; */
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	box-sizing: border-box;
	overflow: hidden;
}

.tui-goods-title {
	white-space: normal;
	word-break: break-all;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	font-size: 28rpx;
	color: #333;
}

.tag-tit {
	/* 渐变色 */
	background-image: linear-gradient(to right, #00c94a, #00ac3f);
	margin-right: 10rpx;
	padding: 0 12rpx;
	border-radius: 15rpx 0 15rpx 0;
	color: #fff;
	font-size: 20rpx;
}

.tui-goods-model {
	max-width: 100%;
	color: #555;
	font-size: 24rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-sizing: border-box;
	margin: 14rpx 0;
}

.tui-model-text {
	max-width: 100%;
	transform: scale(0.9);
	transform-origin: 0 center;
	font-size: 24rpx;
	line-height: 32rpx;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.tui-price-box {
	width: 100%;
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
}

.text-color2 {
	font-size: 16rpx;
	margin-right: 4rpx;
}

.tui-goods-price {
	font-size: 36rpx;
	font-weight: 500;
	color: #ff5600;
}

.price2 {
	color: #b6b6b6;
	font-size: 20rpx;
}

.tui-shop-car {
	width: 44rpx;
	height: 40rpx;
	display: block;
}

.tui-scale {
	transform: scale(0.8);
	transform-origin: 100% 100%;
}

.tui-activity {
	font-size: 24rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 30rpx 20rpx 28rpx;
	box-sizing: border-box;
}

.tui-buy {
	display: flex;
	align-items: center;
}

.tui-bold {
	font-weight: bold;
	display: flex;
}

.tui-sub-info {
	max-width: 532rpx;
	font-size: 24rpx;
	line-height: 24rpx;
	padding: 20rpx 30rpx 10rpx 30rpx;
	box-sizing: border-box;
	color: #333;
	transform: scale(0.8);
	transform-origin: 100% center;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	margin-left: auto;
}

.tui-invalid-text {
	width: 66rpx;
	margin-right: 4rpx;
	text-align: center;
	font-size: 24rpx;
	color: #fff;
	background: rgba(0, 0, 0, 0.3);
	transform: scale(0.8);
	transform-origin: center center;
	border-radius: 4rpx;
	flex-shrink: 0;
}

.tui-gray {
	color: #b2b2b2 !important;
}

.tui-goods-invalid {
	color: #555;
	font-size: 24rpx;
}

.tui-flex-center {
	align-items: center !important;
}

.tui-invalid-ptop {
	padding-top: 40rpx;
}

.tui-tabbar {
	width: 100%;
	height: 100rpx;
	background: #fff;
	position: fixed;
	left: 0;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 30rpx;
	box-sizing: border-box;
	font-size: 24rpx;
	z-index: 99999;
}

.tui-tabbar::before {
	content: '';
	width: 100%;
	border-top: 1rpx solid #d9d9d9;
	position: absolute;
	top: 0;
	left: 0;
	-webkit-transform: scaleY(0.5);
	transform: scaleY(0.5);
}

.tui-checkAll {
	display: flex;
	align-items: center;
}

.tui-checkbox-pl {
	padding-left: 12rpx;
}

.tui-total-price {
	padding-left: 30rpx;
	font-size: 30rpx !important;
}

/*猜你喜欢*/
.tui-youlike {
	padding-left: 12rpx;
}

.tui-product-list {
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	flex-wrap: wrap;
	box-sizing: border-box;
}

.tui-product-container {
	flex: 1;
	margin-right: 2%;
}

.tui-product-container:last-child {
	margin-right: 0;
}

.tui-pro-item {
	width: 100%;
	margin-bottom: 4%;
	background: #fff;
	box-sizing: border-box;
	border-radius: 12rpx;
	overflow: hidden;
}

.tui-pro-img {
	width: 100%;
	display: block;
}

.tui-pro-content {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	box-sizing: border-box;
	padding: 20rpx;
}

.tui-pro-tit {
	color: #2e2e2e;
	font-size: 26rpx;
	word-break: break-all;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
}

.tui-pro-price {
	padding-top: 18rpx;
}

.tui-sale-price {
	font-size: 34rpx;
	font-weight: 500;
	color: #e41f19;
}

.tui-factory-price {
	font-size: 24rpx;
	color: #a0a0a0;
	text-decoration: line-through;
	padding-left: 12rpx;
}

.tui-pro-pay {
	padding-top: 10rpx;
	font-size: 24rpx;
	color: #656565;
}

/* ==== */
.order-no {
	width: 400upx;
	height: 400upx;
	margin: 90upx auto 0 auto;
	text-align: center;
	font-size: 28upx;
}

.order-no image {
	display: block;
	width: 250upx;
	height: 250upx;
	margin: 0 auto;
	padding-bottom: 30upx;
}

.container-img {
	margin-top: 150rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.color-text {
	color: rgba(112, 112, 112, 1);
}

.btnbox {
	position: relative;
	top: 100rpx;
	width: 100%;
}

button::after {
	/* border: 2rpx solid #00AC3F; */
}

button {
	background-color: #fff !important;
	/* background-color: transparent; */

	padding-left: 0;

	padding-right: 0;

	line-height: inherit;
}

button {
	border-radius: 0;
}

.btn {
	border-radius: 100rpx;
	height: 60rpx;
	width: 30%;
	background-color: #ffffff;
	border: 1rpx solid rgba(0, 197, 42, 1);
	color: rgba(0, 197, 42, 1) !important;
	padding: 10rpx 0;
	font-size: 30rpx;
}
</style>
