(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/my"],{2085:function(t,e,o){},"208b":function(t,e,o){"use strict";(function(t){o("79ad");n(o("66fd"));var e=n(o("e66e"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("543d")["createPage"])},"254e":function(t,e,o){"use strict";o.r(e);var n=o("4be7"),a=o.n(n);for(var i in n)"default"!==i&&function(t){o.d(e,t,(function(){return n[t]}))}(i);e["default"]=a.a},"4be7":function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o("0e00"),a=o("1a1b"),i=(t.getStorageSync("userIN"),t.getStorageSync("usermen")),s=console,r=s.log,u=(o("3fe3"),{onLoad:function(e){var o=this;this.$forceUpdate(),this.getMerchants(),this.ifLogin();var n={};t.getSystemInfo({success:function(t){o.width=n.left||t.windowWidth,o.height=n.top?n.top+n.height+8:t.statusBarHeight+44,o.top=n.top?n.top+(n.height-32)/2:t.statusBarHeight+6,o.scrollH=.6*t.windowWidth}})},data:function(){return{lists:[],modaishow:!1,show:!0,wxlogin:!0,usering:{},imageUrl:"/static/images/wode.png",kefuID:"",loadding:!1,pullUpOn:!0,ApproveStatus:0,loginText:"",logMsg:this.logMsg,showBtn:!1,Goauth:!0,Goauth2:!1,Goauth3:!1,Goauth4:!1,user_phone:"",fukuanList:"",fahuoList:"",shouhuoList:"",tuikuanList:""}},methods:{onPullDownRefresh:function(){this.getMerchants(),setTimeout((function(){t.stopPullDownRefresh()}),1e3)},getUserInfo:function(e){r(e),this.usering=e.detail.userInfo,t.setStorageSync("userIN",e.detail.userInfo);t.setStorageSync("userIN",e.detail.userInfo);if(e.detail.userInfo){var o=e.detail.userInfo;this.wxCode(o.avatarUrl,o.nickName)}this.ifUser()},wxCode:function(t,e){var o=this;wx.login({success:function(t){var e=t.code;o.wxLoging(e)},fail:function(t){r(t)}})},wxLoging:function(e){var o=this;r(e);var i={code:e};t.showLoading({title:"加载中",icon:"none"}),(0,n.publicing2)(a.loginis,i).then((function(e){500!=e.statusCode?(200==e.statusCode&&r(e),t.setStorageSync("usermen",e.data.token),t.hideLoading(),o.getMerchants()):t.showModal({title:"提示",content:"服务器错误，请重新登录获取信息",success:function(e){e.confirm?(console.log("用户点击确定"),t.hideLoading()):e.cancel&&(console.log("用户点击取消"),t.hideLoading())}})})).catch((function(e){t.showToast({title:"".concat(e)}),r(e)}))},ifLogin:function(){var t=this.ApproveStatus;i?0==t?(this.Goauth2=!0,this.logMsg="审核中待通过"):1==t?(this.logMsg="我的店铺已认证",this.Goauth3=!0):2==t?(this.logMsg="未通过",this.Goauth4=!0):void 0==t&&(this.Goauth=!0,this.Goauth2=!1,this.logMsg="去认证我的店铺"):r("没有token信息请点击登录")},getMerchants:function(){var e=this,o=t.getStorageSync("usermen"),i={token:o};(0,n.listing)(a.getClient,i).then((function(o){e.ApproveStatus=o.data.data.approveStatus,t.setStorageSync("StoreStatus",o.data.data.approveStatus);t.getStorageSync("StoreStatus");e.user_phone=o.data.data.phone;var n=e.ApproveStatus;void 0==n?(e.Goauth=!0,e.Goauth2=!1,e.logMsg="去认证我的店铺"):0==n?(e.Goauth2=!0,e.Goauth=flase,e.logMsg="审核中待通过"):1==n?(e.logMsg="我的店铺已认证",e.Goauth3=!0):2==n&&(e.logMsg="未通过",e.Goauth4=!0)})).catch((function(t){r(t)}))},getOrderData:function(){var e=this,o=t.getStorageSync("usermen"),i={token:o,pageNo:1,pageSize:100};(0,n.listing)(a.getMyOrder,i).then((function(t){var o=t.data.data,n=[],a=[],i=[],s=[];0!==o.length&&(o.forEach((function(t){0==t.payStatus&&n.push(t),1!=t.tradeStatus&&3!=t.tradeStatus||a.push(t),4==t.tradeStatus&&i.push(t),7==t.tradeStatus&&s.push(t)})),e.fukuanList=n.length,e.fahuoList=a.length,e.shouhuoList=i.length,e.tuikuanList=s.length,e.$forceUpdate())})).catch((function(t){r(t)}))},ifUser:function(){var e=t.getStorageSync("userIN");e?(this.wxlogin=!0,this.usering=e):this.wxlogin=!1},tendShop:function(){var e=t.getStorageSync("usermen");e?t.navigateTo({url:"../../pagesII/tendShop/tendShop"}):(t.showToast({title:"请先登录",icon:"none"}),this.modaishow=!0)},tendShop2:function(){t.navigateTo({url:"../../pagesII/StoreInformation/StoreInformation"})},tendShop3:function(){t.navigateTo({url:"../../pagesII/StoreInformation/StoreInformation"})},tendShop1:function(){t.navigateTo({url:"../../pagesII/StoreInformation/StoreInformation"})},gotoAfter:function(){t.navigateTo({url:"../../pagesII/afterSale/afterSale"})},ifUser2:function(){i?(t.showToast({title:"已登录",duration:2e3}),r("用户已经登陆"),this.wxlogin=!0,this.usering=i):(t.showToast({title:"登录失败",duration:2e3,icon:"none"}),this.wxlogin=!1)},init:function(){this.modaishow=!0},messcancel:function(){this.modaishow=!1},ToBePaid:function(){t.navigateTo({url:"../../pagesII/myOrder/myOrder?index=1"})},ToBeDelivered:function(){t.navigateTo({url:"../../pagesII/myOrder/myOrder?index=2"})},ToBeReceived:function(){t.navigateTo({url:"../../pagesII/myOrder/myOrder?index=3"})},myOrder:function(){t.navigateTo({url:"../../pagesII/myOrder/myOrder"})},href:function(e){var o="";switch(e){case 1:o="../../pagesII/OrderStatistics/OrderStatistics";break;case 2:o="../../pagesII/Evaluate/Evaluate";break;case 3:o="../../pagesII/myCollection/myCollection";break;case 4:o="../../pagesII/customerService/customerService";break;case 5:o="../../pagesII/ruleDescription/ruleDescription";break;case 6:o="../../pagesII/cooperation/cooperation";break;case 7:o="../../pagesII/SetUp/SetUp";break;case 8:o="../../pagesII/message/message";break;default:break}o?t.navigateTo({url:o}):this.tui.toast("功能尚未完善~")},detail:function(){t.navigateTo({url:"../productDetail/productDetail"})},initNavigation:function(t){this.opacity=t.opacity,this.top=t.top},opacityChange:function(t){this.opacity=t.opacity},back:function(){t.navigateBack()}},onShow:function(){this.getMerchants(),this.getOrderData(),this.ifUser(),this.ifLogin()},onPageScroll:function(t){this.scrollTop=t.scrollTop},onPullDownRefresh:function(){setTimeout((function(){t.stopPullDownRefresh()}),200)},onReachBottom:function(){}});e.default=u}).call(this,o("543d")["default"])},a3e5:function(t,e,o){"use strict";var n=o("2085"),a=o.n(n);a.a},df8a:function(t,e,o){"use strict";o.d(e,"b",(function(){return a})),o.d(e,"c",(function(){return i})),o.d(e,"a",(function(){return n}));var n={tuiListCell:function(){return o.e("components/tui-list-cell/tui-list-cell").then(o.bind(null,"f4ee"))}},a=function(){var t=this,e=t.$createElement;t._self._c},i=[]},e66e:function(t,e,o){"use strict";o.r(e);var n=o("df8a"),a=o("254e");for(var i in a)"default"!==i&&function(t){o.d(e,t,(function(){return a[t]}))}(i);o("a3e5");var s,r=o("f0c5"),u=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);e["default"]=u.exports}},[["208b","common/runtime","common/vendor"]]]);