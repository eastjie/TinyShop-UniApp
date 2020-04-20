(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-detail"],{"1e33":function(e,t,i){"use strict";i.r(t);var a=i("821a"),n=i("d92a");for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);i("a39a");var o,s=i("f0c5"),l=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"345a6f5e",null,!1,a["a"],o);t["default"]=l.exports},"467e":function(e,t,i){"use strict";i.r(t);var a=i("c3fb"),n=i("ced0");for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);i("8a1d");var o,s=i("f0c5"),l=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"c4258be0",null,!1,a["a"],o);t["default"]=l.exports},"51f2":function(e,t,i){"use strict";var a=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("96cf");var n=a(i("3b8d"));i("ac6a");var r=a(i("5028")),o=a(i("93f4")),s=a(i("1e33")),l=i("c4c8"),c=i("802d"),d={components:{rfNoData:s.default},data:function(){return{orderDetail:{},loading:!0,errInfo:null,order_id:null}},computed:{orderTimeLine:function(){var e=[];return 0!=this.orderDetail.created_at&&e.push({time:this.orderDetail.created_at,value:"订单创建"}),this.orderDetail.close_time<((new Date).getTime()/1e3&&0!=this.orderDetail.pay_time)&&e.push({time:this.orderDetail.close_time,value:"未付款订单关闭时间"}),0!=this.orderDetail.pay_time&&e.push({time:this.orderDetail.pay_time,value:"订单支付"}),0!=this.orderDetail.shipping_time&&e.push({time:this.orderDetail.shipping_time,value:"买家要求发货"}),0!=this.orderDetail.consign_time&&e.push({time:this.orderDetail.consign_time,value:"卖家发货"}),0!=this.orderDetail.sign_time&&e.push({time:this.orderDetail.sign_time,value:"买家确认收货"}),0!=this.orderDetail.finish_time&&e.push({time:this.orderDetail.finish_time,value:"订单完成"}),e}},filters:{time:function(e){return(0,r.default)(1e3*e).format("YYYY-MM-DD HH:mm:ss")},orderStatusFilter:function(e){var t=null;return o.default.orderStatus.forEach((function(i){i.key===parseInt(e,10)&&(t=i.value)})),t},filterProductStatus:function(e){var t=null;return 0!==parseInt(e.refund_status,10)&&-1!==parseInt(e.refund_status,10)&&-2!==parseInt(e.refund_status,10)?o.default.refundStatus.forEach((function(i){i.key===parseInt(e.refund_status,10)&&(t=i.value)})):4===parseInt(e.order_status,10)?o.default.evaluateStatus.forEach((function(i){i.key==e.is_evaluate&&(t=i.value)})):(o.default.orderStatus.forEach((function(i){i.key===parseInt(e.order_status,10)&&(t=i.value)})),1==e.order_status&&1==e.shipping_status&&(t="已发货")),t},filterShippingType:function(e){var t=["","物流配送","买家自提","本地配送"];return t[parseInt(e,10)]}},onLoad:function(e){this.order_id=e.id},onShow:function(){this.initData()},methods:{navTo:function(e){this.$mRouter.push({route:e})},navToEvaluation:function(e,t){this.$mRouter.push({route:"/pages/order/evaluation/evaluation?data=".concat(JSON.stringify(e),"&type=").concat(t)})},navToRefund:function(e,t){this.$mRouter.push({route:"/pages/order/refund/refund?data=".concat(JSON.stringify(e),"&refundType=").concat(t)})},navToShippingReturn:function(e){this.$mRouter.push({route:"/pages/order/shipping/return?data=".concat(JSON.stringify(e))})},handleOrderOperation:function(e,t,i){switch(t){case"detail":this.navTo("/pages/order/detail?id=".concat(e.id));break;case"evaluation":this.navTo("/pages/order/evaluation/evaluation?order_id=".concat(e.id));break;case"close":this.handleOrderClose(e.id);break;case"delete":this.handleOrderDelete(e.id);break;case"shipping":this.navTo("/pages/order/shipping/shipping?id=".concat(e.id));break;case"delivery":this.handleOrderTakeDelivery(e.id);break}},initData:function(){this.getOrderDetail()},getOrderDetail:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("".concat(c.orderDetail),{id:this.order_id}).then((function(e){t.loading=!1,t.orderDetail=e.data})).catch((function(e){t.loading=!1,t.errInfo=e}));case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleOrderClose:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(t){var i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("".concat(l.orderClose),{id:t}).then((function(){i.$mHelper.toast("订单取消成功"),i.getOrderDetail()}));case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),handleOrderDelete:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(t){var i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.delete("".concat(c.orderDelete,"?id=").concat(t),{}).then((function(){i.$mHelper.toast("订单删除成功"),i.$mRouter.back()}));case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),handleOrderTakeDelivery:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(t){var i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("".concat(c.orderTakeDelivery),{id:t}).then((function(){i.$mHelper.toast("确认收货成功"),i.getOrderDetail()}));case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),handleCloseOrderRefundApply:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(t,i){var a,n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=c.closeOrderRefundApply,4===parseInt(t,10)&&(a=c.orderCustomerRefundClose),e.next=4,this.$http.post("".concat(a),{id:i}).then((function(e){n.$mHelper.toast("取消成功"),n.getOrderDetail()}));case 4:case"end":return e.stop()}}),e,this)})));function t(t,i){return e.apply(this,arguments)}return t}()}};t.default=d},"7d5e":function(e,t,i){var a=i("9359");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("a1c6a77e",a,!0,{sourceMap:!1,shadowMode:!1})},"802d":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.orderProductIndex=t.orderCustomerRefundClose=t.orderCustomerRefundApply=t.orderCustomerSalesReturn=t.rechargeConfigIndex=t.thirdPartyAuthDelete=t.thirdPartyAuthList=t.opinionDetail=t.opinionCreate=t.opinionList=t.uploadImage=t.orderInvoiceList=t.invoiceDel=t.invoiceDefault=t.invoiceDetail=t.invoiceUpdate=t.invoiceCreate=t.invoiceList=t.evaluateAgain=t.evaluateCreate=t.creditsLogList=t.collectList=t.footPrintDel=t.footPrintList=t.couponReceive=t.orderTakeDelivery=t.orderDelete=t.orderDetail=t.orderProductSalesReturn=t.closeOrderRefundApply=t.orderRefundApply=t.orderList=t.couponDetail=t.couponClear=t.myCouponList=t.couponList=t.addressDelete=t.addressUpdate=t.addressDetail=t.addressDefault=t.addressCreate=t.addressList=t.memberUpdate=t.memberInfo=void 0;var a="/tiny-shop/v1/member/member/index";t.memberInfo=a;var n="/tiny-shop/v1/member/member/update";t.memberUpdate=n;var r="/tiny-shop/v1/member/address/index";t.addressList=r;var o="/tiny-shop/v1/member/address/default";t.addressDefault=o;var s="/tiny-shop/v1/member/address/view";t.addressDetail=s;var l="/tiny-shop/v1/member/address/create";t.addressCreate=l;var c="/tiny-shop/v1/member/address/update";t.addressUpdate=c;var d="/tiny-shop/v1/member/address/delete";t.addressDelete=d;var u="/tiny-shop/v1/marketing/coupon-type/index";t.couponList=u;var v="/tiny-shop/v1/member/coupon/index";t.myCouponList=v;var p="/tiny-shop/v1/marketing/coupon-type/view";t.couponDetail=p;var f="/tiny-shop/v1/marketing/coupon-type/create";t.couponReceive=f;var b="/tiny-shop/v1/member/coupon/clear";t.couponClear=b;var m="/tiny-shop/v1/member/order/index";t.orderList=m;var h="/tiny-shop/v1/member/order/take-delivery";t.orderTakeDelivery=h;var g="/tiny-shop/v1/member/order-product/refund-apply";t.orderRefundApply=g;var y="/tiny-shop/v1/member/order-product/refund-sales-return";t.orderProductSalesReturn=y;var x="/tiny-shop/v1/member/order-product/refund-close";t.closeOrderRefundApply=x;var _="/tiny-shop/v1/member/order/view";t.orderDetail=_;var w="/tiny-shop/v1/member/order/delete";t.orderDelete=w;var C="/tiny-shop/v1/member/footprint/index";t.footPrintList=C;var D="/tiny-shop/v1/member/footprint/delete";t.footPrintDel=D;var k="/tiny-shop/v1/member/collect/index";t.collectList=k;var O="/tiny-shop/v1/member/credits-log/index";t.creditsLogList=O;var R="/tiny-shop/v1/member/evaluate/create";t.evaluateCreate=R;var j="/tiny-shop/v1/member/evaluate/again";t.evaluateAgain=j;var P="/tiny-shop/v1/member/order-product/index";t.orderProductIndex=P;var A="/tiny-shop/v1/member/invoice/index";t.invoiceList=A;var S="/tiny-shop/v1/member/invoice/create";t.invoiceCreate=S;var T="/tiny-shop/v1/member/invoice/update";t.invoiceUpdate=T;var I="/tiny-shop/v1/member/invoice/view";t.invoiceDetail=I;var E="/tiny-shop/v1/member/invoice/default";t.invoiceDefault=E;var L="/tiny-shop/v1/member/invoice/delete";t.invoiceDel=L;var Z="/tiny-shop/v1/member/order-invoice/index";t.orderInvoiceList=Z;var G="/tiny-shop/v1/member/opinion/index";t.opinionList=G;var Y="/tiny-shop/v1/member/opinion/create";t.opinionCreate=Y;var z="/tiny-shop/v1/member/opinion/view";t.opinionDetail=z;var M="/tiny-shop/v1/member/auth/index";t.thirdPartyAuthList=M;var N="/tiny-shop/v1/member/auth/delete";t.thirdPartyAuthDelete=N;var H="/tiny-shop/v1/member/recharge-config/index";t.rechargeConfigIndex=H;var U="/tiny-shop/v1/member/order-customer/apply";t.orderCustomerRefundApply=U;var J="/tiny-shop/v1/member/order-customer/sales-return";t.orderCustomerSalesReturn=J;var W="/tiny-shop/v1/member/order-customer/close";t.orderCustomerRefundClose=W;var F="/tiny-shop/v1/common/file/images";t.uploadImage=F},"821a":function(e,t,i){"use strict";var a;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return a}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"rf-no-data hideToShow",style:{backgroundColor:e.bgColor}},[i("v-uni-view",{staticClass:"image"},[i("v-uni-image",{attrs:{src:1==e.custom?e.notFoundImg:e.noNetWorkImg}})],1),"none"==e.netType&&0==e.custom?i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"title",style:{color:e.mainColor}},[e._v(e._s(e.mainText))]),i("v-uni-text",{staticClass:"desc",style:{color:e.viceColor}},[e._v(e._s(e.viceText))])],1):e._e(),e._t("default"),i("v-uni-view",{staticClass:"back"},[e._v("或者"),i("v-uni-text",{staticClass:"btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navTo("/pages/index/index")}}},[e._v("返回主页")])],1)],2)},r=[]},8961:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,"uni-page-body[data-v-c4258be0]{background:#f8f8f8}.order-detail[data-v-c4258be0]{padding-bottom:%?100?%}.rf-goods-section .g-header[data-v-c4258be0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.rf-goods-section .g-header .red[data-v-c4258be0]{color:#fa436a}.rf-goods-section .g-item[data-v-c4258be0]{border-bottom:%?1?% solid rgba(0,0,0,.1)}.rf-goods-section .right .price-box[data-v-c4258be0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;color:#303133;border-bottom:%?1?% solid rgba(0,0,0,.05)}.rf-goods-section .right .price-box .price-wrapper[data-v-c4258be0]{margin-bottom:%?10?%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.rf-goods-section .right .price-box .price-wrapper .price[data-v-c4258be0]{font-size:%?24?%;margin-bottom:%?4?%}.rf-goods-section .right .price-box .price-wrapper .number[data-v-c4258be0]{font-size:%?24?%;color:#606266;margin-left:%?24?%}.rf-goods-section .right .price-box .status[data-v-c4258be0]{font-size:%?24?%;margin-left:%?10?%;color:#fa436a}.rf-goods-section .right .price-box .spec-color[data-v-c4258be0]{color:#4399fc}.rf-goods-section .right .btn-box .action-btn[data-v-c4258be0]{font-size:%?24?%;padding:0 %?20?%;text-align:center;height:%?48?%;line-height:%?48?%}.yt-list[data-v-c4258be0]{margin-top:%?16?%;background:#fff}.yt-list .yt-list-cell[data-v-c4258be0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?10?% %?30?% %?10?% %?40?%;line-height:%?70?%;position:relative}.yt-list .yt-list-cell.cell-hover[data-v-c4258be0]{background:#fafafa}.yt-list .yt-list-cell.b-b[data-v-c4258be0]:after{left:%?30?%}.yt-list .yt-list-cell .cell-icon[data-v-c4258be0]{height:%?32?%;width:%?32?%;font-size:%?22?%;color:#fff;text-align:center;line-height:%?32?%;background:#f85e52;border-radius:%?4?%;margin-right:%?12?%}.yt-list .yt-list-cell .cell-icon.hb[data-v-c4258be0]{background:#ffaa0e}.yt-list .yt-list-cell .cell-icon.lpk[data-v-c4258be0]{background:#3ab54a}.yt-list .yt-list-cell .cell-more[data-v-c4258be0]{-webkit-align-self:center;align-self:center;font-size:%?24?%;color:#909399;margin-left:%?8?%;margin-right:%?-10?%}.yt-list .yt-list-cell .cell-tit[data-v-c4258be0]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?26?%;color:#909399;margin-right:%?10?%}.yt-list .yt-list-cell .cell-tip[data-v-c4258be0]{font-size:%?26?%;color:#303133}.yt-list .yt-list-cell .cell-tip.disabled[data-v-c4258be0]{color:#909399}.yt-list .yt-list-cell .cell-tip.active[data-v-c4258be0]{color:#fa436a}.yt-list .yt-list-cell .cell-tip.red[data-v-c4258be0]{color:#fa436a}.yt-list .yt-list-cell.desc-cell .cell-tit[data-v-c4258be0]{max-width:%?90?%}.yt-list .yt-list-cell .desc[data-v-c4258be0]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;color:#303133}.uni-timeline[data-v-c4258be0]{padding:%?30?%;background-color:#fff}.footer[data-v-c4258be0]{position:fixed;left:0;bottom:0;z-index:98;width:100%;height:%?100?%;background-color:#fff;color:#606266;padding-right:%?10?%;box-shadow:0 -1px 5px rgba(0,0,0,.1)}.action-btn[data-v-c4258be0]{margin:%?20?% %?10?%;float:right;padding:0 %?30?%;text-align:center;height:%?60?%;line-height:%?60?%;font-size:%?24?%;color:#303133;background:#fff;border-radius:100px;border:1px solid rgba(0,0,0,.05)}.action-btn[data-v-c4258be0]:after{border-radius:100px}.action-btn.recom[data-v-c4258be0]{background:#fff9f9;color:#fa436a}.action-btn.recom[data-v-c4258be0]:after{border-color:#f7bcc8}body.?%PAGE?%[data-v-c4258be0]{background:#f8f8f8}",""]),e.exports=t},"8a1d":function(e,t,i){"use strict";var a=i("8dab"),n=i.n(a);n.a},"8dab":function(e,t,i){var a=i("8961");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("5827e032",a,!0,{sourceMap:!1,shadowMode:!1})},9359:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,".rf-no-data[data-v-345a6f5e]{width:100%;height:calc(100vh - %?90?%);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.rf-no-data .image[data-v-345a6f5e]{width:60vw;height:40vw;margin-bottom:%?40?%}.rf-no-data .image uni-image[data-v-345a6f5e]{width:100%;height:100%}.rf-no-data .content[data-v-345a6f5e]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;letter-spacing:%?1?%}.rf-no-data .content .title[data-v-345a6f5e]{font-size:%?36?%}.rf-no-data .content .desc[data-v-345a6f5e]{font-size:%?28?%;margin-top:%?6?%}.rf-no-data .content .btn[data-v-345a6f5e]{width:%?160?%;height:%?65?%;color:#868d91;font-size:%?24?%;margin-top:%?34?%;border-radius:%?36?%;border:%?1?% solid #d4d4d4}.rf-no-data .content .btn[data-v-345a6f5e]::after{border:none}.rf-no-data .back[data-v-345a6f5e]{margin-top:%?20?%}.rf-no-data .back .btn[data-v-345a6f5e]{margin-left:%?10?%;color:#4399fc}",""]),e.exports=t},a39a:function(e,t,i){"use strict";var a=i("7d5e"),n=i.n(a);n.a},c3fb:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return a}));var a={"rf-image":i("b19a").default,"rf-loading":i("a7c6").default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"rf-order-detail"},[e.orderDetail.product?i("v-uni-view",{staticClass:"order-detail"},[i("v-uni-view",{staticClass:"rf-address-section"},[i("v-uni-view",{staticClass:"order-content"},[i("i",{staticClass:"iconfont iconshouhuodizhi"}),i("v-uni-view",{staticClass:"cen"},[i("v-uni-view",{staticClass:"top"},[i("v-uni-text",{staticClass:"name"},[e._v(e._s(e.orderDetail.receiver_name))]),i("v-uni-text",{staticClass:"mobile"},[e._v(e._s(e.orderDetail.receiver_mobile))])],1),i("v-uni-text",{staticClass:"address"},[e._v(e._s(e.orderDetail.receiver_region_name)+" "+e._s(e.orderDetail.receiver_address))])],1)],1),i("v-uni-image",{staticClass:"a-bg",attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAAFCAYAAAAaAWmiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Rjk3RjkzMjM2NzMxMTFFOUI4RkU4OEZGMDcxQzgzOEYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Rjk3RjkzMjQ2NzMxMTFFOUI4RkU4OEZGMDcxQzgzOEYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGOTdGOTMyMTY3MzExMUU5QjhGRTg4RkYwNzFDODM4RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGOTdGOTMyMjY3MzExMUU5QjhGRTg4RkYwNzFDODM4RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrEOZlQAAAiuSURBVHjazJp7bFvV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"}})],1),i("v-uni-view",{staticClass:"rf-goods-section"},[i("v-uni-view",{staticClass:"g-header b-b"},[i("v-uni-text",{staticClass:"name in1line"},[e._v("订单号："+e._s(e.orderDetail.order_sn))]),i("v-uni-text",{staticClass:"name red"},[e._v(e._s(e._f("orderStatusFilter")(e.orderDetail.order_status)))])],1),e._l(e.orderDetail.product,(function(t,a){return i("v-uni-view",{key:a,staticClass:"g-item",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.navTo("/pages/product/product?id="+t.product_id)}}},[i("rf-image",{attrs:{src:t.product_picture}}),i("v-uni-view",{staticClass:"right"},[i("v-uni-text",{staticClass:"title clamp in2line"},[e._v(e._s(t.product_name))]),i("v-uni-text",{staticClass:"spec"},[e._v(e._s(t.sku_name||"基础款")+"  * "+e._s(t.num))]),i("v-uni-view",{staticClass:"price-box"},[i("v-uni-text",{staticClass:"price-wrapper"},[i("v-uni-text",{staticClass:"price base-color"},[e._v("￥ "+e._s(t.product_money))])],1),i("v-uni-text",{staticClass:"status spec-color",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t)}}},[e._v(e._s(e._f("filterProductStatus")(t)))])],1),i("v-uni-view",{staticClass:"btn-box"},[4!=t.order_status||0!=t.is_evaluate||0!=t.refund_status&&-2!=t.refund_status&&-3!=t.refund_status?e._e():i("v-uni-button",{staticClass:"action-btn recom",on:{click:function(i){i.stopPropagation(),arguments[0]=i=e.$handleEvent(i),e.navToEvaluation(t)}}},[e._v("我要评价")]),4!=t.order_status||1!=t.is_evaluate||0!=t.refund_status&&-2!=t.refund_status&&-3!=t.refund_status?e._e():i("v-uni-button",{staticClass:"action-btn recom",on:{click:function(i){i.stopPropagation(),arguments[0]=i=e.$handleEvent(i),e.navToEvaluation(t,"add")}}},[e._v("追加评价")]),1!=t.order_status||1==t.shipping_status||0!=t.refund_status&&-3!=t.refund_status?e._e():i("v-uni-button",{staticClass:"action-btn recom",on:{click:function(i){i.stopPropagation(),arguments[0]=i=e.$handleEvent(i),e.navToRefund(t,1)}}},[e._v("申请退款")]),2!=t.order_status||1!=t.shipping_status||0!=t.refund_status&&-3!=t.refund_status?e._e():i("v-uni-button",{staticClass:"action-btn recom",on:{click:function(i){i.stopPropagation(),arguments[0]=i=e.$handleEvent(i),e.navToRefund(t,2)}}},[e._v("申请退换")]),4!=t.order_status||0!=t.refund_status&&-3!=t.refund_status?e._e():i("v-uni-button",{staticClass:"action-btn",on:{click:function(i){i.stopPropagation(),arguments[0]=i=e.$handleEvent(i),e.navToRefund(t,3)}}},[e._v("申请退换")]),2!=t.order_status&&4!=t.order_status||2!=t.refund_status?e._e():i("v-uni-button",{staticClass:"action-btn recom",on:{click:function(i){i.stopPropagation(),arguments[0]=i=e.$handleEvent(i),e.navToShippingReturn(t)}}},[e._v("填写退货信息")]),1==t.refund_status||2==t.refund_status||3==t.refund_status||4==t.refund_status||-1==t.refund_status?i("v-uni-button",{staticClass:"action-btn",on:{click:function(i){i.stopPropagation(),arguments[0]=i=e.$handleEvent(i),e.handleCloseOrderRefundApply(t.order_status,t.id)}}},[e._v("取消退款")]):e._e()],1)],1)],1)}))],2),i("v-uni-view",{staticClass:"yt-list"},[i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-view",{staticClass:"cell-icon"},[e._v("券")]),i("v-uni-text",{staticClass:"cell-tit clamp"},[e._v("优惠券")]),i("v-uni-text",{staticClass:"cell-tip active"},[e._v(e._s(e.orderDetail.coupon&&e.orderDetail.coupon.title||"未使用优惠券"))]),i("v-uni-text",{staticClass:"cell-more wanjia wanjia-gengduo-d"})],1),i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-view",{staticClass:"cell-icon"},[e._v("寄")]),i("v-uni-text",{staticClass:"cell-tit clamp"},[e._v("配送方式")]),i("v-uni-text",{staticClass:"cell-tip active"},[e._v(e._s(e._f("filterShippingType")(e.orderDetail.shipping_type)))]),i("v-uni-text",{staticClass:"cell-more wanjia wanjia-gengduo-d"})],1),e.orderDetail.company_name?i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-view",{staticClass:"cell-icon"},[e._v("司")]),i("v-uni-text",{staticClass:"cell-tit clamp"},[e._v("快递公司")]),i("v-uni-text",{staticClass:"cell-tip active"},[e._v(e._s(e.orderDetail.company_name))]),i("v-uni-text",{staticClass:"cell-more wanjia wanjia-gengduo-d"})],1):e._e(),"积分兑换"!=e.orderDetail.payment_explain?i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-view",{staticClass:"cell-icon hb"},[e._v("减")]),i("v-uni-text",{staticClass:"cell-tit clamp"},[e._v("积分抵扣")]),i("v-uni-text",{staticClass:"cell-tip disabled"}),i("v-uni-text",{staticClass:"cell-tip disabled"},[e._v("已用"+e._s(e.orderDetail.point||0)+"积分抵用"+e._s(e.orderDetail.point_money||0)+"元")])],1):i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-view",{staticClass:"cell-icon hb"},[e._v("减")]),i("v-uni-text",{staticClass:"cell-tit clamp"},[e._v("积分下单")]),i("v-uni-text",{staticClass:"cell-tip disabled"}),i("v-uni-text",{staticClass:"cell-tip disabled"},[e._v("消耗了"+e._s(e.orderDetail.point||0)+"积分")])],1)],1),i("v-uni-view",{staticClass:"yt-list"},[i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[e._v("商品金额")]),i("v-uni-text",{staticClass:"cell-tip red"},[e._v("￥"+e._s(e.orderDetail.order_money))])],1),i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[e._v("优惠金额")]),i("v-uni-text",{staticClass:"cell-tip red"},[e._v("-￥ "+e._s(e.orderDetail.coupon_money))])],1),i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[e._v("运费")]),i("v-uni-text",{staticClass:"cell-tip red"},[i("v-uni-text",[e._v("￥ "+e._s(e.orderDetail.shipping_money))])],1)],1),e.orderDetail.invoice?i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[e._v("开具发票")]),i("v-uni-text",{staticClass:"cell-tip red in1line"},[i("v-uni-text",[e._v(e._s("电子发票 -"+(1===parseInt(e.orderDetail.invoice&&e.orderDetail.invoice.type,10)?"公司":"个人")+"-"+(e.orderDetail.invoice&&e.orderDetail.invoice.title)+" [ "+(e.orderDetail.invoice&&e.orderDetail.invoice.content)+" ]"))])],1)],1):e._e(),i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[e._v("发票税费")]),i("v-uni-text",{staticClass:"cell-tip red"},[i("v-uni-text",[e._v("￥ "+e._s(e.orderDetail.tax_money))])],1)],1),i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[e._v("赠送积分")]),i("v-uni-text",{staticClass:"cell-tip"},[i("v-uni-text",[e._v(e._s(e.orderDetail.give_point)+" 积分")])],1)],1),i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[e._v("实付金额")]),i("v-uni-text",{staticClass:"cell-tip red"},[e._v("￥ "+e._s(e.orderDetail.pay_money))])],1)],1),i("v-uni-view",{staticClass:"yt-list"},[i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[e._v("备注")]),i("v-uni-text",{staticClass:"cell-tip"},[e._v(e._s(e.orderDetail.buyer_message))])],1)],1),i("v-uni-view",{staticClass:"uni-timeline"},e._l(e.orderTimeLine,(function(t,a){return i("v-uni-view",{key:a,staticClass:"uni-timeline-item",class:{"uni-timeline-first-item":0===a,"uni-timeline-last-item":a===e.orderTimeLine.length-1}},[i("v-uni-view",{staticClass:"uni-timeline-item-divider"}),i("v-uni-view",{staticClass:"uni-timeline-item-content"},[i("v-uni-view",[e._v(e._s(t.value))]),i("v-uni-view",{staticClass:"datetime"},[e._v(e._s(e._f("time")(t.time)))])],1)],1)})),1),1!=e.orderDetail.order_status?i("v-uni-view",{staticClass:"footer"},[2==e.orderDetail.order_status?i("v-uni-button",{staticClass:"action-btn recom",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleOrderOperation(e.orderDetail,"delivery")}}},[e._v("确认收货")]):e._e(),4==e.orderDetail.order_status&&0==e.orderDetail.is_evaluate?i("v-uni-button",{staticClass:"action-btn recom",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleOrderOperation(e.orderDetail,"evaluation")}}},[e._v("批量评价")]):e._e(),0==e.orderDetail.order_status?i("v-uni-button",{staticClass:"action-btn recom",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navTo("/pages/user/money/pay?id="+e.orderDetail.id)}}},[e._v("立即支付")]):e._e(),4!=e.orderDetail.order_status&&2!=e.orderDetail.order_status||1==e.orderDetail.is_virtual?e._e():i("v-uni-button",{staticClass:"action-btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleOrderOperation(e.orderDetail,"shipping")}}},[e._v("查看物流")]),-4==e.orderDetail.order_status?i("v-uni-button",{staticClass:"action-btn recom",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleOrderOperation(e.orderDetail,"delete")}}},[e._v("删除订单")]):e._e(),0==e.orderDetail.order_status?i("v-uni-button",{staticClass:"action-btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleOrderOperation(e.orderDetail,"close")}}},[e._v("取消订单")]):e._e()],1):e._e()],1):e._e(),e.orderDetail.product||e.loading?e._e():i("v-uni-view",[i("rf-no-data",{attrs:{custom:!0}},[i("v-uni-view",{staticClass:"title",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getOrderDetail.apply(void 0,arguments)}}},[e._v(e._s(e.errInfo||"订单不存在")+"，\n\t\t\t\t点击"),i("v-uni-text",{staticClass:"spec-color"},[e._v("重新加载")])],1)],1)],1),e.loading?i("rf-loading"):e._e()],1)},r=[]},ced0:function(e,t,i){"use strict";i.r(t);var a=i("51f2"),n=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);t["default"]=n.a},d92a:function(e,t,i){"use strict";i.r(t);var a=i("da8b"),n=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);t["default"]=n.a},da8b:function(e,t,i){"use strict";var a=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("8e6e"),i("ac6a"),i("456d");var n=a(i("bd86")),r=i("2f62");function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){(0,n.default)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var l={props:{isShow:{type:Boolean,default:!1},bgColor:{type:String,default:"#ffffff"},mainColor:{type:String,default:"#373a40"},viceColor:{type:String,default:"#8b8b8b"},custom:{type:Boolean,default:!1}},computed:s({},(0,r.mapGetters)(["networkStatus"])),data:function(){return{type:"",netType:this.networkType,mainText:"网络居然崩溃了",viceText:"别紧张,去检测一下网络设置",notFoundImg:this.$mAssetsPath.notFoundImg,noNetWorkImg:this.$mAssetsPath.noNetWorkImg}},methods:{setting:function(e){e&&this.$emit("handle",e)},navTo:function(e){this.$mRouter.reLaunch({route:e})}}};t.default=l}}]);