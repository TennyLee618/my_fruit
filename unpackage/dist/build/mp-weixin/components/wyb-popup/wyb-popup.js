(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/wyb-popup/wyb-popup"],{4804:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{w:t.getSystemInfoSync().screenWidth,h:t.getSystemInfoSync().screenHeight,eleW:0,eleH:0,isShow:!1,contentAnim:{},maskAnim:{},winReBottom:"",winReTop:"",sizeChange:!1}},computed:{autoCenterTop:function(){var e=t.getSystemInfoSync().statusBarHeight,i=(t.getSystemInfoSync().windowHeight,44),n=(this.h-this.rpxToPx(this.height))/2-i-e-this.negativeTop+"px";return i=wx.getMenuButtonBoundingClientRect().bottom,n=(this.h-this.rpxToPx(this.height))/2-e-i+"px",n},autoTransform:function(){var t="";switch(this.type){case"center":"zoom-lessen"===this.centerAnim?t="scale("+this.zoomLessenMulti+")":"slide-up"===this.centerAnim?t="translateY("+100*this.slideMulti+"%)":"slide-down"===this.centerAnim?t="translateY("+-100*this.slideMulti+"%)":"fade"===this.centerAnim&&(t="auto");break;case"bottom":t="translateY(100%)";break;case"top":t="translateY(-100%)";break;case"left":t="translateX(-100%)";break;case"right":t="translateX(100%)";break}return t},autoWidth:function(){return"center"===this.type?this.width+"rpx":"size-fixed"===this.mode?"top"===this.type||"bottom"===this.type?"100%":this.width+"rpx":"top"===this.type||"bottom"===this.type?"100%":"auto"},autoHeight:function(){return"center"===this.type?this.height+"rpx":"size-fixed"===this.mode?"left"===this.type||"right"===this.type?"100%":this.height+"rpx":"left"===this.type||"right"===this.type?"100%":"auto"},autoTop:function(){return"center"===this.type?this.autoCenterTop:"bottom"===this.type?"auto":0},autoBottom:function(){return"center"===this.type||"top"===this.type?"auto":0},autoLeft:function(){return"center"===this.type?(this.w-this.rpxToPx(this.width))/2+"px":"right"===this.type?"auto":0},autoRight:function(){return"center"===this.type||"left"===this.type?"auto":0}},props:{type:{type:String,default:"bottom"},mode:{type:String,default:"size-auto"},height:{type:[String,Number],default:400},width:{type:[String,Number],default:500},radius:{type:[String,Number],default:0},zIndex:{type:[String,Number],default:10076},maskClickClose:{type:Boolean,default:!0},maskAlpha:{type:Number,default:.5},duration:{type:Number,default:400},showCloseIcon:{type:Boolean,default:!1},scrollY:{type:Boolean,default:!1},scrollX:{type:Boolean,default:!1},closeIconPos:{type:String,default:"top-right"},closeIcon:{type:String,default:""},closeIconSize:{type:[String,Number],default:"20"},vertOffset:{type:[String,Number],default:"22"},horiOffset:{type:[String,Number],default:"22"},centerAnim:{type:String,default:"zoom-lessen"},bgColor:{type:String,default:"#ffffff"},zoomLessenMulti:{type:Number,default:1.15},slideMulti:{type:Number,default:1},negativeTop:{type:Number,default:0},showScrollbar:{type:Boolean,default:!1}},mounted:function(){},methods:{close:function(){this.maskClickClose&&this.hide()},show:function(){var t=this;this.isShow=!0,setTimeout((function(){setTimeout((function(){t.maskIn(),t.contentIn(),setTimeout((function(){t.$emit("show",{pageScroll:!1,overflow:"hidden"})}),t.duration)}),10)}),1)},hide:function(){var t=this;this.contentOut(),this.maskOut(),setTimeout((function(){t.isShow=!1,t.$emit("hide",{pageScroll:!0,overflow:"scroll"}),t.animation={},t.contentAnim={},t.maskAnim={}}),this.duration+1)},contentIn:function(){var e=this;switch(this.animation=t.createAnimation({duration:this.duration,timingFunction:"ease-out"}),this.type){case"center":"zoom-lessen"===this.centerAnim?this.animation.opacity(1).scale(1).step():"slide-up"===this.centerAnim||"slide-down"===this.centerAnim?this.animation.opacity(1).translateY(0).step():"fade"===this.centerAnim&&this.animation.opacity(1).step();break;case"bottom":case"top":this.animation.translateY(0).step();break;case"left":case"right":this.animation.translateX(0).step();break}this.contentAnim=this.animation.export(),this.getRect("#wyb-popup-content-box").then((function(t){e.eleW=t.width,e.eleH=t.height}))},contentOut:function(){switch(this.type){case"center":"zoom-lessen"===this.centerAnim?this.animation.opacity(0).scale(this.zoomLessenMulti).step():"slide-up"===this.centerAnim?this.animation.opacity(0).translateY(this.rpxToPx(this.height)*this.slideMulti+"px").step():"slide-down"===this.centerAnim?this.animation.opacity(0).translateY(0-this.rpxToPx(this.height)*this.slideMulti+"px").step():"fade"===this.centerAnim&&this.animation.opacity(0).step();break;case"bottom":this.animation.translateY(this.eleH).step();break;case"top":this.animation.translateY(0-this.eleH).step();break;case"left":this.animation.translateX(0-this.eleW).step();break;case"right":this.animation.translateX(this.eleW).step();break}this.contentAnim=this.animation.export()},maskIn:function(){this.animation=t.createAnimation({duration:this.duration,timingFunction:"ease"}),this.animation.opacity(1).step(),this.maskAnim=this.animation.export()},maskOut:function(){this.animation.opacity(0).step(),this.maskAnim=this.animation.export()},rpxToPx:function(t){return t/750*this.w},getRect:function(e){var i=this;return new Promise((function(n){t.createSelectorQuery().in(i)["select"](e).boundingClientRect((function(t){t&&n(t)})).exec()}))},clear:function(t){t.stopPropagation()}}};e.default=i}).call(this,i("543d")["default"])},"8ea8":function(t,e,i){"use strict";i.r(e);var n=i("4804"),o=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=o.a},ccf1:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement;t._self._c},s=[]},db6f:function(t,e,i){"use strict";var n=i("f7f6"),o=i.n(n);o.a},e169:function(t,e,i){"use strict";i.r(e);var n=i("ccf1"),o=i("8ea8");for(var s in o)"default"!==s&&function(t){i.d(e,t,(function(){return o[t]}))}(s);i("db6f");var a,r=i("f0c5"),u=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],a);e["default"]=u.exports},f7f6:function(t,e,i){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/wyb-popup/wyb-popup-create-component',
    {
        'components/wyb-popup/wyb-popup-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("e169"))
        })
    },
    [['components/wyb-popup/wyb-popup-create-component']]
]);
