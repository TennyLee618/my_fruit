(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesII/productList/productList"],{4770:function(t,e,i){"use strict";var o=i("893f"),n=i.n(o);n.a},"53b3":function(t,e,i){"use strict";(function(t){i("79ad");o(i("66fd"));var e=o(i("bf97"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("543d")["createPage"])},"7b16":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return o}));var o={tuiIcon:function(){return i.e("components/tui-icon/tui-icon").then(i.bind(null,"20fc"))},tuiTopDropdown:function(){return i.e("components/tui-top-dropdown/tui-top-dropdown").then(i.bind(null,"97c6"))},tuiDrawer:function(){return i.e("components/tui-drawer/tui-drawer").then(i.bind(null,"06d1"))},easySelect:function(){return i.e("components/easy-select/easy-select").then(i.bind(null,"066e"))},tuiNomore:function(){return i.e("components/tui-nomore/tui-nomore").then(i.bind(null,"cf54"))}},n=function(){var t=this,e=t.$createElement,i=(t._self._c,t.px(t.dropScreenH+18));t.$mp.data=Object.assign({},{$root:{m0:i}})},s=[]},"893f":function(t,e,i){},"9a9d":function(t,e,i){"use strict";i.r(e);var o=i("e529"),n=i.n(o);for(var s in o)"default"!==s&&function(t){i.d(e,t,(function(){return o[t]}))}(s);e["default"]=n.a},bf97:function(t,e,i){"use strict";i.r(e);var o=i("7b16"),n=i("9a9d");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("4770");var a,r=i("f0c5"),c=Object(r["a"])(n["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);e["default"]=c.exports},e529:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i("0e00"),n=i("1a1b"),s=console,a=s.log,r={data:function(){return{title:"选中",sleter:!1,sleter2:!1,dropdownlistData:[{name:"微信支付"},{name:"支付宝支付"},{name:"银行卡支付"},{name:"微信支付"},{name:"支付宝支付"},{name:"银行卡支付"}],dropdownShow:!1,dropdownShow2:!1,seleVarieties:[],color_level:[],facade_level:[],fruit_level:[],shape_level:[],goods:[],packaging:[],species:[],storage_mode:[],taste_level:[],variety:[],numNull:0,numNull2:0,numName:0,url:"http://192.168.1.10:8980",isActives1:!1,isActives2:!1,imgUrl:"http://192.168.1.10:8980/js/userfiles/fileupload/202008/1298932901905809410.png",colorLevelList:[],goodsList:[],fileUploadList:"",mouthfeelLevelList:[],slMangguo:"芒果",serrchGoods:"",slPinzhong:"品种",slGuobiao:"水果标准",slYanzheng:"验证保障",mangguoID:0,ciData:[{name:"芒果",bOn:!1},{name:"西瓜",bOn:!1},{name:"香蕉",bOn:!1},{name:"橘子",bOn:!1},{name:"猕猴桃",bOn:!1}],dictDataList:[{name:"芒果",isActive:!1},{name:"西瓜",isActive:!1},{name:"哈密瓜",isActive:!1}],fruitLevelList:[],facadeLevelList:[],dictTypeList:[],dengji:[{name:"特级"},{name:"A级"},{name:"B级"}],activeA:!1,selecValue:"不限",selecTwoValue:"不限",searchKey:"",width:200,height:64,inputTop:0,arrowTop:0,dropScreenH:0,attrData:[],attrIndex:-1,dropScreenShow:!1,dropScreenShow2:!1,dropNum:0,scrollTop:0,tabIndex:0,tabIndex1:1,tabIndex2:2,tabIndex3:3,isList:!1,drawer:!1,drawerH:0,selectedName:"综合",selectH:0,num:0,seleTopList:[{name:"综合",selected:!1},{name:"销量",selected:!1},{name:"价格",selected:!1},{name:"视频选果",selected:!1}],seleBottom:[{name:"芒果",selected:!1},{name:"品种",selected:!0},{name:"水果标准",selected:!1},{name:"验证保障",selected:!1}],dropdownList:[{name:"综合",selected:!0},{name:"价格升序",selected:!1},{name:"价格降序",selected:!1}],pageIndex:1,loadding:!1,pullUpOn:!0,optionList:{level:"1295251270639849472",ltWeight:"",rtWeight:"",ltWidth:"",rtWidth:"",ltTaste:"",rtTaste:"",ltColor:"",rtColor:"",ltShape:"",rtShape:"",ltRight:"",rtRight:"",ltPrice:"",rtPrice:""}}},onLoad:function(e){var i=this,o=getCurrentPages(),n=(o[o.length-1],o[o.length-2]);a(n.$page.fullPath),"/pagesII/searchGoods/searchGoods"===n.$page.fullPath&&a("我执行了搜索"),this.getSearch(e.name),console.log(e),this.serrchGoods=e.name,this.slMangguo=e.name,this.mangguoID=e.id,a(this.mangguoID),this.ShopIng();var s={};s=wx.getMenuButtonBoundingClientRect(),t.getSystemInfo({success:function(o){i.width=s.left||o.windowWidth,i.height=s.top?s.top+s.height+8:o.statusBarHeight+44,i.inputTop=s.top?s.top+(s.height-30)/2:o.statusBarHeight+7,i.arrowTop=s.top?s.top+(s.height-32)/2:o.statusBarHeight+6,i.searchKey=e.name||"",i.dropScreenH=750*i.height/o.windowWidth+186,i.drawerH=o.windowHeight-t.upx2px(100)-i.height}})},computed:{tasteBox:function(){var t=[],e=this.taste_level;return e.forEach((function(e,i){var o={num:i,star:i+1,label:e.title,value:e.title};t.push(o)})),t},colorBox:function(){var t=[],e=this.color_level;return e.forEach((function(e,i){var o={num:i,star:i+1,label:e.title,value:e.title};t.push(o)})),t},facadeBox:function(){var t=[],e=this.facade_level;return e.forEach((function(e,i){var o={num:i,star:i+1,label:e.title,value:e.title};t.push(o)})),t}},methods:{goToSearchGoods:function(){t.navigateTo({url:"../../pagesII/searchGoods/searchGoods"})},gotoList:function(e){a(e),t.navigateTo({url:"../../pagesIII/productDetail/productDetail?id="+e})},dropDownList:function(t,e){-1!==t&&console.log("index："+t,e),this.title=e,this.dropdownShow=!this.dropdownShow},dropDownList2:function(t,e){-1!==t&&console.log("index："+t,e),this.title=e,this.dropdownShow2=!this.dropdownShow2},getSearch:function(t){var e=this,i={pageNo:1,pageSize:10,name:t};(0,o.listing)(n.getGoodsall,i).then((function(t){a(t),e.goods=t.data.data[0].goods,a(e.goods)})).catch((function(t){a(t)}))},Total:function(e){this.num=e,a(this.num),0==this.num?(this.ShopIng(),a("综合")):1==this.num?(this.sleter?(a("销量升序"),this.getshopDESC()):(this.getshopASC(),a("销量降序")),this.sleter=!this.sleter):2==this.num?(this.sleter2?(a("价格升序"),this.getpriceDESC()):(a("价格降序"),this.getpriceASC()),this.sleter2=!this.sleter2):3==this.num?(t.navigateTo({url:"../../pagesIII/videos/videos"}),a("视频选果")):4==this.num&&t.navigateTo({url:"../../pagesII/rankingList/rankingList"})},btnDropChange:function(t){this.isActives1=!this.isActives1,this.dropScreenShow=!this.dropScreenShow,this.dropScreenShow2=!1,this.isActives2=!1,this.isActives1=this.dropScreenShow,a("颜色事件isActives1="+this.isActives1,"弹层事件="+this.dropScreenShow)},btnDropChange2:function(){a("触发"),this.$forceUpdate(),this.isActives2=!this.isActives2,this.dropScreenShow2=!this.dropScreenShow2,this.dropScreenShow=!1,this.isActives1=!1},btnDropChange3:function(){this.drawer=!this.drawer,this.dropScreenShow2=!1,this.dropScreenShow=!1,this.isActives2=!1,this.isActives=!1},checkDing:function(t,e,i){this.numNull=t,this.slMangguo=i,this.mangguoID=e,this.ShopIng(),this.dropScreenShow=!this.dropScreenShow},checkVariety:function(t,e,i){this.numNull2=t,this.slPinzhong=i,this.mangguoID=e,this.dropScreenShow2=!this.dropScreenShow2,this.ShopIng()},checkDing2:function(t,e,i){this.numNull2=t,this.slPinzhong=e,a(t,e,i)},checkgeng:function(){t.switchTab({url:"../../pages/search/search"})},Sales:function(t){a(t)},Priceda:function(t){a(t)},Videosl:function(t){a(t)},activeGo:function(t,e,i){this.optionList[t]=e,this.num=i,console.log(this.optionList)},selectItem:function(t){console.log(t);var e=t.s_name,i=(t.id,t.label);this.optionList[e]=i,console.log("optionList:",this.optionList)},isFalse:function(){this.dropScreenShow2=!1,this.dropScreenShow=!1,this.isActives2=!1,this.isActives=!1},isTrue:function(){this.dropScreenShow2=!0,this.dropScreenShow=!0,this.isActives2=!0,this.isActives=!0},useOutClickSide:function(){this.$refs.easySelect.hideOptions&&this.$refs.easySelect.hideOptions()},getshopDESC:function(){var t=this,e={pageNo:1,pageSize:10,order:"A.shop_number DESC"};(0,o.listing)(n.getGoodsall,e).then((function(e){a(e),t.goods=e.data.data[0].goods})).catch((function(t){a(t)}))},getshopASC:function(){var t=this,e={pageNo:1,pageSize:10,order:"A.shop_number ASC"};(0,o.listing)(n.getGoodsall,e).then((function(e){a(e),t.goods=e.data.data[0].goods})).catch((function(t){a(t)}))},getpriceDESC:function(){var t=this,e={pageNo:1,pageSize:10,order:"A.platform_price DESC"};(0,o.listing)(n.getGoodsall,e).then((function(e){a(e),t.goods=e.data.data[0].goods})).catch((function(t){a(t)}))},getpriceASC:function(){var t=this,e={pageNo:1,pageSize:10,order:"A.platform_price ASC"};(0,o.listing)(n.getGoodsall,e).then((function(e){t.goods=e.data.data[0].goods})).catch((function(t){a(t)}))},ShopIng:function(){var t=this,e={pageNo:1,pageSize:10},i={id:this.mangguoID};Promise.all([(0,o.listing)(n.getGoodsall,e),(0,o.listing)(n.getAttribute,i)]).then((function(e){t.seleVarieties=e[1].data.data,void 0===t.seleVarieties?t.seleVarieties=t.seleVarieties:t.seleVarieties,t.color_level=e[0].data.data[0].color_level,t.facade_level=e[0].data.data[0].facade_level,t.fruit_level=e[0].data.data[0].fruit_level,t.shape_level=e[0].data.data[0].shape_level,t.goods=e[0].data.data[0].goods,t.packaging=e[0].data.data[0].packaging,t.species=e[0].data.data[0].species;for(var i=0;i<t.species.length;i++)t.species[i].isActives=t.activeA;t.storage_mode=e[0].data.data[0].storage_mode,t.taste_level=e[0].data.data[0].taste_level,t.variety=e[0].data.data[0].variety})).catch((function(t){a(t)}))},px:function(e){return t.upx2px(e)+"px"},reset:function(){this.isActives2=!1,this.isActives=!1,this.slPinzhong="品种"},btnCloseDrop:function(){var t=this;this.scrollTop=1,this.$nextTick((function(){t.scrollTop=0})),this.dropScreenShow=!1,this.attrIndex=-1},clickToSure:function(t){this.isActives2=!1,this.isActives=!1,this.dropScreenShow2=!1,console.log("我真的点击了",t)},showDropdownList:function(){this.selectH=246,this.tabIndex=0},hideDropdownList:function(){this.selectH=0},dropdownItem:function(){a("2")},screen:function(e){var i=e.currentTarget.dataset.index?e.currentTarget.dataset.index:e;console.log(i),this.hideDropdownList(),this.btnCloseDrop(),0==i?this.showDropdownList():1==i?this.tabIndex=1:2==i?this.isList=!this.isList:3==i?this.drawer=!0:4==i&&(a(""),t.navigateTo({url:"../../pagesII/rankingList/rankingList"}))},clickToConfirm:function(){console.log(this.optionList),this.closeDrawer()},clickToReset:function(){this.num=0,this.optionList={level:"",ltWeight:"",rtWeight:"",ltWidth:"",rtWidth:"",ltTaste:"",rtTaste:"",ltColor:"",rtColor:"",ltShape:"",rtShape:"",ltRight:"",rtRight:"",ltPrice:"",rtPrice:""}},closeDrawer:function(){this.drawer=!1},back:function(){this.drawer?this.closeDrawer():t.navigateBack()},search:function(){t.navigateTo({url:"../../news/search/search"})},detail:function(e){console.log(e),t.navigateTo({url:"../../pagesIII/productDetail/productDetail?data="+e})}},onReachBottom:function(){if(this.pullUpOn)if(this.loadding=!0,4==this.pageIndex)this.loadding=!1,this.pullUpOn=!1;else{var t=JSON.parse(JSON.stringify(this.goodsList));t=t.splice(0,10),1==this.pageIndex&&(t=t.reverse()),this.goodsList=this.goodsList.concat(t),this.pageIndex=this.pageIndex+1,this.loadding=!1}}};e.default=r}).call(this,i("543d")["default"])}},[["53b3","common/runtime","common/vendor"]]]);