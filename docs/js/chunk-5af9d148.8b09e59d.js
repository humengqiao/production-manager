(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5af9d148"],{"0f9f":function(t,e,n){"use strict";var o=n("6bb0"),i=n.n(o);i.a},1199:function(t,e,n){"use strict";n.r(e);var o=n("a5a8"),i=n("3ecb");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("aa8f");var a=n("2877"),u=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,"3a620e50",null);e["default"]=u.exports},"1cb7":function(t,e,n){"use strict";n.r(e);var o=n("8498"),i=n("f451");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("0f9f");var a=n("2877"),u=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,"3e6bfee2",null);e["default"]=u.exports},"20c6":function(t,e,n){},"2f02":function(t,e,n){var o,i,r;n("a4d3"),n("99af"),n("4de4"),n("c740"),n("4160"),n("d81d"),n("45fc"),n("a434"),n("b0c0"),n("a9e3"),n("e439"),n("dbb4"),n("b64b"),n("ac1f"),n("5319"),n("159b"),function(a,u){i=[e,n("2909"),n("96cf"),n("1da1"),n("ade3"),n("5880"),n("1cb7"),n("1199"),n("8975")],o=u,r="function"===typeof o?o.apply(e,i):o,void 0===r||(t.exports=r)}("undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,(function(t,e,o,i,r,a,u,c,s){"use strict";var l=n("4ea4");function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){(0,r.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e=l(e),i=l(i),r=l(r),u=l(u),c=l(c);var f={name:"GoodsList",components:{Divider:u.default,TitleSection:c.default},data:function(){return{opType:"",list:[],newProductionModal:!1,deleteProductionModal:!1,productionLoading:!1,addProductionLoading:!1,deleteProductionLoading:!1,productionOutInComingRecordModal:!1,productionOutInComingRecordLoading:!1,deleteProductionOutInComingModal:!1,deleteProductionOutInComingLoading:!1,productionOutInComingModal:!1,productionOutInComingLoading:!1,exportProductionListLoading:!1,pagination:{pageSize:10,currentPage:1,total:0},form:{productionNo:"",productionName:"",price:"",supplier:"",productionImg:[],buyLink:[{name:"",url:""}],size:"",unit:"2",count:0,desc:"",remark:""},rules:{productionNo:[{required:!0,message:"请输入产品货号",trigger:"blur"}],productionName:[{required:!0,message:"请输入产品名称",trigger:"blur"}],price:[{required:!0,message:"请输入产品价格",trigger:"blur"}],supplier:[{required:!0,message:"请输入供应商",trigger:"blur"}],buyLink:[{validator:function(t,e,n){var o=e.some((function(t){var e=t.url;return!/(https?:\/\/)?[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(e)})),i=e.some((function(t){var e=t.url;return!!e}));return i&&o?n(new Error("请输入正确采购链接地址")):n()},trigger:"blur"}],size:[{required:!0,message:"请输入产品尺寸",trigger:"blur"},{validator:function(t,e,n){return/\d+\*\d+\*\d+/.test(e)?n():n(new Error("请输入正确产品尺寸"))},trigger:"blur"}],unit:[{required:!0,message:"请选择尺寸单位",trigger:"change"}],count:[{required:!0,message:"请输入产品库存",trigger:"blur"},{validator:function(t,e,n){return e<0?n(new Error("产品库存不能小于0")):n()},trigger:"blur"}]},rulesOutInComing:{count:[{required:!0,message:"请输入出入库的产品数量",trigger:"blur"}]},productionDetail:{productionName:"",desc:""},productionOutInComingList:[],productionOutInComingPagination:{pageSize:10,currentPage:1,total:0},productionOutInComingForm:{count:1,remark:"",opType:""},productionOutInComingOpType:"",productionOutInComingMaxCount:0,productionKeyword:""}},computed:p({addOrEditProductionTitle:function(){var t=this.opType;return"add"===t?"新增产品":"edit"===t?"编辑产品":""},productionOutInComingTitle:function(){var t=this.productionOutInComingOpType;return"IN"===t?"入库":"OUT"===t?"出库":""}},(0,a.mapGetters)({productionUnitList:"productionUnitListGetter"})),mounted:function(){this.fetchProductionList()},methods:{fetchProductionList:function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(){var n,o,i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.productionLoading=!0,t.prev=1,n={pagination:p({},this.pagination),keyword:this.productionKeyword},t.next=5,this.$service.productionService.getProductionList(n);case 5:o=t.sent,i=o.list,r=o.pagination,this.list=(0,e.default)(i),this.pagination=p({},r),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](1),this.$message.error(t.t0);case 14:return t.prev=14,this.productionLoading=!1,t.finish(14);case 17:case"end":return t.stop()}}),t,this,[[1,11,14,17]])})));function n(){return t.apply(this,arguments)}return n}(),fetchProductionOutInComingList:function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(){var n,o,i,r,a,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=this.productionOutInComingPagination,o=this.productionDetailId,i={id:o,pagination:p({},n)},t.next=5,this.$service.productionService.getProductionOutInComingList(i);case 5:r=t.sent,r&&(a=r.list,u=r.pagination,this.productionOutInComingList=(0,e.default)(a),this.productionOutInComingPagination=p({},u));case 7:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),onHandleChangeProductionImg:function(t,n){this.form.productionImg=(0,e.default)(n)},onHandleConfirmNewProduction:function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(){var e,n,o,i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.form,n=this.opType,t.next=4,this.$refs.newProductionFormRef.validate();case 4:if(o=t.sent,o){t.next=7;break}return t.abrupt("return");case 7:if("add"!==n){t.next=22;break}return t.prev=8,this.addProductionLoading=!0,t.next=12,this.$service.productionService.addProduction(e);case 12:i=t.sent,i&&(this.newProductionModal=!1,this.fetchProductionList(),this.$message.success("产品新增成功")),t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](8),this.$message.error(t.t0);case 19:return t.prev=19,this.addProductionLoading=!1,t.finish(19);case 22:if("edit"!==n){t.next=37;break}return t.prev=23,this.addProductionLoading=!0,t.next=27,this.$service.productionService.editProduction(e);case 27:r=t.sent,r&&(this.newProductionModal=!1,this.fetchProductionList(),this.$message.success("产品修改成功")),t.next=34;break;case 31:t.prev=31,t.t1=t["catch"](23),this.$message.error(t.t1);case 34:return t.prev=34,this.addProductionLoading=!1,t.finish(34);case 37:case"end":return t.stop()}}),t,this,[[8,16,19,22],[23,31,34,37]])})));function e(){return t.apply(this,arguments)}return e}(),onHandleClickDelete:function(t){var e=t.objectId;this.deleteProductionId=e,this.deleteProductionModal=!0},onHandleConfirmDeleteProduction:function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(){var e,n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.deleteProductionId,e&&0!==e.length){t.next=3;break}return t.abrupt("return",this.$message.error("产品id缺少"));case 3:return this.deleteProductionLoading=!0,t.prev=4,t.next=7,this.$service.productionService.deleteProduction(e);case 7:this.$service.productionService.batchDeleteProductionOutInComing(e),this.$message.success("删除产品成功"),this.pagination={pageSize:10,currentPage:1,total:0},this.$nextTick((function(){n.fetchProductionList()})),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](4),this.$message.error(t.t0);case 16:return t.prev=16,this.deleteProductionModal=!1,this.deleteProductionLoading=!1,t.finish(16);case 20:case"end":return t.stop()}}),t,this,[[4,13,16,20]])})));function e(){return t.apply(this,arguments)}return e}(),onHandleCloseNewProductionModal:function(){this.form={productionName:"",productionNo:"",buyLink:[{name:"",url:""}],count:0,desc:"",price:"",productionImg:[],size:"",supplier:"",unit:"",remark:""}},onHandleClickEdit:function(t){var e=this;this.opType="edit",this.newProductionModal=!0;var n=JSON.parse(JSON.stringify(t)),o=n.productionName,i=n.productionNo,r=n.buyLink,a=n.count,u=n.desc,c=n.objectId,s=n.price,l=n.productionImg,d=n.size,p=n.supplier,f=n.unit,m=n.remark;this.$nextTick((function(){e.form={productionName:o,productionNo:i,buyLink:r,count:a,desc:u.replace(/<br\s?\/>/g,"\n"),objectId:c,price:s,productionImg:l,size:d,supplier:p,unit:f,remark:m}}))},onHandleRemoveProductionImg:function(t){var e=t.uid,n=this.form.productionImg,o=n.findIndex((function(t){return t.uid===e}));-1!==o&&this.form.productionImg.splice(o,1)},onHandleClickView:function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(e){var n,o,i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.objectId,this.productionOutInComingRecordModal=!0,this.productionOutInComingRecordLoading=!0,this.productionDetailId=n,t.prev=4,t.next=7,this.$service.productionService.getProductionDetail(n);case 7:if(o=t.sent,o){t.next=10;break}return t.abrupt("return",this.$message.error("查询产品详情失败"));case 10:i=o.productionName,r=o.desc,this.productionDetail={productionName:i,desc:r},this.fetchProductionOutInComingList(n),this.fetchProductionOutInComingGraphList(n),t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](4),this.$message.error(t.t0);case 19:return t.prev=19,this.productionOutInComingRecordLoading=!1,t.finish(19);case 22:case"end":return t.stop()}}),t,this,[[4,16,19,22]])})));function e(e){return t.apply(this,arguments)}return e}(),fetchProductionOutInComingGraphList:function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(e){var n,o,i,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$service.productionService.getProductionOutInComingListByDay(e);case 3:n=t.sent,n&&(o=n.map((function(t){var e=t.date;return e})),i=n.map((function(t){var e=t.total;return e})),r=n.map((function(t){var e=t.outCount;return e})),a=n.map((function(t){var e=t.inCount;return e})),this.renderProductionOutInComingGraph({dateList:o,totalList:i,outList:r,inList:a})),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),this.$message.error(t.t0);case 10:case"end":return t.stop()}}),t,this,[[0,7]])})));function e(e){return t.apply(this,arguments)}return e}(),renderProductionOutInComingGraph:function(t){var e=t.dateList,n=t.totalList,o=t.outList,i=t.inList;this.chart&&this.chart.clear(),this.chart&&this.chart.dispose();var r=echarts.init(this.$refs.productionOutInComingGraphRef);r.setOption({title:{show:!1},legend:{data:[{name:"库存",textStyle:{color:"#ff0000"}},{name:"入库",textStyle:{color:"orange"}},{name:"出库",textStyle:{color:"navy"}}]},tooltip:{trigger:"axis"},xAxis:{type:"category",data:e,axisLabel:{interval:0,rotate:45}},yAxis:{type:"value"},series:[{name:"库存",type:"line",data:n},{name:"入库",type:"line",data:i},{name:"出库",type:"line",data:o}]}),this.chart=r},onHandleClickDescCopy:function(){var t=this.productionDetail.desc;if(!t)return this.$message.warning("无拷贝内容");var e=t.replace(/<br\s*\/?>/g,"\n");this.$utils.commonUtils.copy(e),this.$message.success("拷贝成功")},onHandleClickDeleteOutInComing:function(t){this.deleteProductionOutInComingModal=!0,this.deleteProductionOutInComing=t},onHandleConfirmDeleteProductionOutInComing:function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(){var e,n,o,i,r,a,u,c=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.deleteProductionOutInComing,n=e.objectId,o=e.opType,i=e.count,r=e.createdAt,a=this.productionDetailId,n){t.next=4;break}return t.abrupt("return",this.$message.warning("无该进销记录id"));case 4:return this.deleteProductionOutInComingLoading=!0,t.prev=5,u={productionId:a,productionOutInComingId:n,count:"IN"===o?Number("-".concat(i)):"OUT"===o?i:0,createdAt:r},t.next=9,this.$service.productionService.deleteProductionOutInComing(u);case 9:this.productionOutInComingPagination={pageSize:10,currentPage:1,total:0},this.$nextTick((function(){c.fetchProductionOutInComingList(),c.fetchProductionList(),c.fetchProductionOutInComingGraphList(a)})),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](5),this.$message.error(t.t0);case 16:return t.prev=16,this.deleteProductionOutInComingModal=!1,this.deleteProductionOutInComingLoading=!1,t.finish(16);case 20:case"end":return t.stop()}}),t,this,[[5,13,16,20]])})));function e(){return t.apply(this,arguments)}return e}(),onHandleClickProductionInOutComing:function(t,e){var n=t.objectId,o=t.count;this.productionOutInComingModal=!0,this.productionDetailId=n,this.productionOutInComingOpType=e,this.productionOutInComingMaxCount="OUT"===e?Number(o):1/0,this.productionOutInComingForm.opType=e},onHandleConfirmProductionOutInComing:function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(){var e,n,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.productionOutInComingForm,n=this.productionDetailId,o={form:e,productionId:n},this.productionOutInComingLoading=!0,t.prev=4,t.next=7,this.$service.productionService.addProductionOutInComing(o);case 7:i=t.sent,i&&(this.productionOutInComingModal=!1,this.fetchProductionList(),this.$message.success("".concat(this.productionOutInComingTitle,"产品成功"))),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](4),this.$message.error(t.t0);case 14:return t.prev=14,this.productionOutInComingLoading=!1,t.finish(14);case 17:case"end":return t.stop()}}),t,this,[[4,11,14,17]])})));function e(){return t.apply(this,arguments)}return e}(),onHandleClickExportProductionList:function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(){var e,n,o,i,r,a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.exportProductionListLoading=!0,t.prev=1,t.next=4,this.$service.productionService.getProductionList({},!0);case 4:e=t.sent,e&&(n=e.list,o=[{name:"SKU",value:"productionNo"},{name:"名称",value:"productionName"},{name:"采购价",value:"price"},{name:"供应商",value:"supplier"},{name:"采购链接",value:"buyLink"},{name:"尺寸",value:"size"},{name:"库存",value:"count"},{name:"创建时间",value:"createdAt"}],i=this.productionUnitList,r=this.$utils.htmlUtils.getExportHtml(o,n.map((function(t){return p({},t,{price:"".concat(t.price,"¥"),buyLink:t.buyLink.map((function(t){return'<a href="'.concat((0,s.filterLink)(t.url),'" target="_blank">').concat(t.name,"</a>")})),createdAt:a.$utils.dateUtils.formatDate(new Date(t.createdAt)),size:"".concat(t.size,"(").concat((0,s.filterProductionUnit)(t.unit,i),")")})}))),this.$utils.fileUtils.downloadExcel(r,"产品列表-".concat(this.$utils.dateUtils.formatDate(new Date,"yyyy-MM-dd"),".xls"))),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),this.$message.error(t.t0);case 11:return t.prev=11,this.exportProductionListLoading=!1,t.finish(11);case 14:case"end":return t.stop()}}),t,this,[[1,8,11,14]])})));function e(){return t.apply(this,arguments)}return e}()},filters:{filterProductionOutInText:function(t){return"IN"===t?"入库":"OUT"===t?"出库":void 0}}};t.default=f}))},"2fb8":function(t,e,n){"use strict";var o=n("20c6"),i=n.n(o);i.a},"2ff3":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"op-container"},[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(){t.newProductionModal=!0,t.opType="add"}}},[t._v("新建产品")]),n("el-button",{attrs:{type:"success",size:"small",loading:t.exportProductionListLoading},on:{click:t.onHandleClickExportProductionList}},[t._v("导出产品Excel")]),n("el-input",{staticClass:"search-box",staticStyle:{float:"right",width:"250px"},attrs:{type:"text",placeholder:"请输入产品名"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.fetchProductionList(e)}},model:{value:t.productionKeyword,callback:function(e){t.productionKeyword=e},expression:"productionKeyword"}})],1),n("title-section",{attrs:{title:"产品列表",count:t.list.length}}),n("div",{staticClass:"table-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.productionLoading,expression:"productionLoading"}],staticClass:"table",attrs:{data:t.list,border:"",stripe:"","highlight-current-row":"",height:"100%"}},[n("el-table-column",{attrs:{label:"操作",fixed:"",width:"60"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{staticStyle:{color:"#579ef8","font-size":"12px","margin-right":"5px",cursor:"pointer"},on:{click:function(n){return t.onHandleClickEdit(e.row)}}},[t._v("编辑")]),n("span",{staticStyle:{color:"#e98f8c","font-size":"12px",cursor:"pointer"},on:{click:function(n){return t.onHandleClickDelete(e.row)}}},[t._v("删除")])]}}])}),n("el-table-column",{attrs:{width:"50",label:"序号"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s((t.pagination.currentPage-1)*t.pagination.pageSize+(e.$index+1)))]}}])}),n("el-table-column",{attrs:{label:"SKU",sortable:"","min-width":"100",prop:"productionNo"}}),n("el-table-column",{attrs:{label:"名称",prop:"highlightProductionName"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{domProps:{innerHTML:t._s(e.row.highlightProductionName)}})]}}])}),n("el-table-column",{attrs:{label:"采购价(¥)",prop:"price",width:"80"}}),n("el-table-column",{attrs:{label:"供应商",prop:"supplier"}}),n("el-table-column",{attrs:{label:"采购链接"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.buyLink,(function(e,o){return n("a",{key:o,staticStyle:{display:"block",color:"#579ef8"},attrs:{href:t._f("filterLink")(e.url),target:"_blank"}},[t._v(t._s(e.name))])}))}}])}),n("el-table-column",{attrs:{label:"尺寸","min-width":"90"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.size)+" ("),n("strong",[t._v(t._s(t._f("filterProductionUnit")(e.row.unit,t.productionUnitList)))]),t._v(") ")])]}}])}),n("el-table-column",{attrs:{label:"库存",prop:"count",width:"60"}}),n("el-table-column",{attrs:{label:"进销管理",width:"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{staticClass:"in-out-comeing-btn",on:{click:function(n){return t.onHandleClickView(e.row)}}},[t._v("查看")]),n("span",{staticClass:"in-out-comeing-btn",on:{click:function(n){return t.onHandleClickProductionInOutComing(e.row,"IN")}}},[t._v("入库")]),n("span",{staticClass:"in-out-comeing-btn",on:{click:function(n){return t.onHandleClickProductionInOutComing(e.row,"OUT")}}},[t._v("出库")])]}}])}),n("el-table-column",{attrs:{label:"图片",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.productionImg.length>0?n("img",{directives:[{name:"preview",rawName:"v-preview",value:e.row.productionImg.map((function(t){var e=t.url;return e})),expression:"scope.row.productionImg.map(({ url }) => url)"}],key:Math.random(),staticClass:"production-img",attrs:{src:e.row.productionImg[0].url,alt:"产品图片"}}):n("span",[t._v("暂无")])]}}])}),n("el-table-column",{attrs:{label:"备注",prop:"remark"}}),n("el-table-column",{attrs:{label:"创建时间",width:"90"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.$utils.dateUtils.formatDate(new Date(e.row.createdAt))))]}}])})],1)],1),t.list.length>0?n("el-pagination",{staticClass:"pagination-container",attrs:{"page-sizes":[10,20,30],"current-page":t.pagination.currentPage,"page-size":t.pagination.pageSize,layout:"sizes, prev, pager, next",total:t.pagination.total},on:{"update:currentPage":function(e){return t.$set(t.pagination,"currentPage",e)},"update:current-page":function(e){return t.$set(t.pagination,"currentPage",e)},"update:pageSize":function(e){return t.$set(t.pagination,"pageSize",e)},"update:page-size":function(e){return t.$set(t.pagination,"pageSize",e)},"size-change":t.fetchProductionList,"current-change":t.fetchProductionList}}):t._e(),n("el-dialog",{staticClass:"add-edit-production-modal-container",attrs:{visible:t.newProductionModal,title:t.addOrEditProductionTitle,"destroy-on-close":""},on:{"update:visible":function(e){t.newProductionModal=e},close:t.onHandleCloseNewProductionModal}},[n("el-form",{ref:"newProductionFormRef",attrs:{model:t.form,rules:t.rules,"label-width":"100px","status-icon":""}},[n("el-form-item",{attrs:{label:"产品货号：",prop:"productionNo"}},[n("el-input",{attrs:{placeholder:"请输入产品货号"},model:{value:t.form.productionNo,callback:function(e){t.$set(t.form,"productionNo",e)},expression:"form.productionNo"}})],1),n("el-form-item",{attrs:{label:"产品名称：",prop:"productionName"}},[n("el-input",{attrs:{placeholder:"请输入产品名称"},model:{value:t.form.productionName,callback:function(e){t.$set(t.form,"productionName",e)},expression:"form.productionName"}})],1),n("el-form-item",{attrs:{label:"产品价格：",prop:"price"}},[n("el-input",{attrs:{placeholder:"请输入产品价格(¥)"},model:{value:t.form.price,callback:function(e){t.$set(t.form,"price",e)},expression:"form.price"}})],1),n("el-form-item",{attrs:{label:"产品描述：",prop:"desc"}},[n("el-input",{attrs:{type:"textarea",placeholder:"请输入产品描述"},model:{value:t.form.desc,callback:function(e){t.$set(t.form,"desc",e)},expression:"form.desc"}})],1),n("el-form-item",{attrs:{label:"供应商：",prop:"supplier"}},[n("el-input",{attrs:{placeholder:"请输入供应商"},model:{value:t.form.supplier,callback:function(e){t.$set(t.form,"supplier",e)},expression:"form.supplier"}})],1),n("el-form-item",{attrs:{label:"采购链接：",prop:"buyLink"}},t._l(t.form.buyLink,(function(e,o){return n("div",{key:o,staticClass:"buy-link-input-container"},[n("el-input",{staticClass:"buy-link-name-input",attrs:{placeholder:"请输入链接名"},model:{value:t.form.buyLink[o].name,callback:function(e){t.$set(t.form.buyLink[o],"name",e)},expression:"form.buyLink[index].name"}}),n("el-input",{staticClass:"buy-link-url-input",attrs:{placeholder:"请输入链接地址"},model:{value:t.form.buyLink[o].url,callback:function(e){t.$set(t.form.buyLink[o],"url",e)},expression:"form.buyLink[index].url"}}),n("i",0===o?{staticClass:"buy-link-btn el-icon-circle-plus-outline",on:{click:function(e){return t.form.buyLink.push({name:"",url:""})}}}:{staticClass:"buy-link-btn el-icon-remove-outline",on:{click:function(e){return t.form.buyLink.splice(o,1)}}})],1)})),0),n("el-form-item",{attrs:{"label-width":"0"}},[n("el-form-item",{staticStyle:{display:"inline-block"},attrs:{label:"产品尺寸：",prop:"size"}},[n("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入产品尺寸(长*宽*高)"},model:{value:t.form.size,callback:function(e){t.$set(t.form,"size",e)},expression:"form.size"}})],1),n("el-form-item",{staticStyle:{display:"inline-block"},attrs:{label:"尺寸单位：",prop:"unit"}},[n("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择尺寸单位"},model:{value:t.form.unit,callback:function(e){t.$set(t.form,"unit",e)},expression:"form.unit"}},t._l(t.productionUnitList,(function(t,e){return n("el-option",{key:e,attrs:{label:t.label,value:t.value}})})),1)],1)],1),n("el-form-item",{attrs:{label:"产品库存：",prop:"count"}},[n("el-input",{attrs:{type:"number",placeholder:"请输入产品库存"},model:{value:t.form.count,callback:function(e){t.$set(t.form,"count",t._n(e))},expression:"form.count"}})],1),n("el-form-item",{attrs:{label:"产品图片："}},[n("el-upload",{attrs:{action:"",multiple:"",drag:"","list-type":"picture-card","auto-upload":!1,"on-change":t.onHandleChangeProductionImg,"file-list":t.form.productionImg,"on-remove":t.onHandleRemoveProductionImg}},[n("i",{staticClass:"el-icon-plus"})])],1),n("el-form-item",{attrs:{label:"产品备注："}},[n("el-input",{attrs:{type:"textarea",rows:"6",placeholder:"请输入产品备注"},model:{value:t.form.remark,callback:function(e){t.$set(t.form,"remark",e)},expression:"form.remark"}})],1)],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"small"},on:{click:function(e){t.newProductionModal=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary",size:"small",loading:t.addProductionLoading},on:{click:t.onHandleConfirmNewProduction}},[t._v("确 定")])],1)],1),n("el-dialog",{attrs:{visible:t.deleteProductionModal,title:"删除产品",width:"30%"},on:{"update:visible":function(e){t.deleteProductionModal=e}}},[n("div",[t._v("确定要删除该产品吗？")]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"small"},on:{click:function(e){t.deleteProductionModal=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary",size:"small",loading:t.deleteProductionLoading},on:{click:t.onHandleConfirmDeleteProduction}},[t._v("确 定")])],1)]),n("el-dialog",{attrs:{visible:t.deleteProductionOutInComingModal,title:"删除进销记录",width:"30%"},on:{"update:visible":function(e){t.deleteProductionOutInComingModal=e}}},[n("div",[t._v("确定要删除该进销记录吗？")]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"small"},on:{click:function(e){t.deleteProductionOutInComingModal=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary",size:"small",loading:t.deleteProductionOutInComingLoading},on:{click:t.onHandleConfirmDeleteProductionOutInComing}},[t._v("确 定")])],1)]),n("el-dialog",{attrs:{visible:t.productionOutInComingRecordModal,"destroy-on-close":"",title:"产品进销记录"},on:{"update:visible":function(e){t.productionOutInComingRecordModal=e}}},[n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.productionOutInComingRecordLoading,expression:"productionOutInComingRecordLoading"}],staticClass:"production-out-in-coming-record-container"},[n("div",{staticClass:"production-info-container"},[n("title-section",{attrs:{title:"产品信息"}},[n("divider",{staticClass:"divider"})],1),n("ul",[n("li",{staticClass:"info-container"},[n("span",[t._v("产品名称：")]),n("span",{staticClass:"content"},[t._v(t._s(t.productionDetail.productionName))])])]),n("title-section",{attrs:{title:"产品进销记录"}},[n("divider",{staticClass:"divider"})],1),n("div",{staticClass:"out-in-coming-table-container"},[n("el-table",{attrs:{data:t.productionOutInComingList,stripe:"","highlight-current-row":"",border:""}},[n("el-table-column",{attrs:{label:"序号",width:"60",type:"index"}}),n("el-table-column",{attrs:{label:"类型",width:"70px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("filterProductionOutInText")(e.row.opType)))]}}])}),n("el-table-column",{attrs:{label:"数量",prop:"count",width:"70px"}}),n("el-table-column",{attrs:{label:"库存",width:"70px",prop:"total"}}),n("el-table-column",{attrs:{label:"备注",prop:"remark"}}),n("el-table-column",{attrs:{label:"时间",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.$utils.dateUtils.formatDate(new Date(e.row.createdAt))))]}}])}),n("el-table-column",{attrs:{label:"操作",width:"60px"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{staticStyle:{color:"#e98f8c","font-size":"12px",cursor:"pointer"},on:{click:function(n){return t.onHandleClickDeleteOutInComing(e.row)}}},[t._v("删除")])]}}])})],1),t.productionOutInComingList.length>0?n("el-pagination",{staticClass:"pagination-container",attrs:{"page-sizes":[10,20,30],"current-page":t.productionOutInComingPagination.currentPage,"page-size":t.productionOutInComingPagination.pageSize,layout:"sizes, prev, pager, next",total:t.productionOutInComingPagination.total},on:{"update:currentPage":function(e){return t.$set(t.productionOutInComingPagination,"currentPage",e)},"update:current-page":function(e){return t.$set(t.productionOutInComingPagination,"currentPage",e)},"update:pageSize":function(e){return t.$set(t.productionOutInComingPagination,"pageSize",e)},"update:page-size":function(e){return t.$set(t.productionOutInComingPagination,"pageSize",e)},"size-change":function(e){return t.fetchProductionOutInComingList()},"current-change":t.fetchProductionOutInComingList}}):t._e()],1),n("title-section",{attrs:{title:"产品进销统计图"}},[n("divider",{staticClass:"divider"})],1),n("div",{staticClass:"production-out-in-coming-graph-container"},[n("div",{ref:"productionOutInComingGraphRef",staticClass:"panel-container"})]),n("title-section",{attrs:{title:"产品附加信息"}},[n("divider",{staticClass:"divider"})],1),n("ul",[n("li",{staticClass:"info-container"},[n("span",[t._v("产品描述：")]),n("span",{staticClass:"content",domProps:{innerHTML:t._s(t.productionDetail.desc)}}),n("el-tooltip",{attrs:{content:"拷贝"}},[n("i",{staticClass:"el-icon-thumb copy-btn",on:{click:t.onHandleClickDescCopy}})])],1)])],1)])]),n("el-dialog",{attrs:{visible:t.productionOutInComingModal,title:t.productionOutInComingTitle+"产品","destroy-on-close":""},on:{"update:visible":function(e){t.productionOutInComingModal=e},close:function(){t.productionOutInComingForm={count:1,remark:"",opType:""}}}},[n("div",[n("el-form",{attrs:{rules:t.rulesOutInComing,model:t.productionOutInComingForm,"label-width":"120px"}},[n("el-form-item",{attrs:{label:t.productionOutInComingTitle+"数量：",prop:"count"}},[n("el-input-number",{staticStyle:{width:"200px"},attrs:{min:1,max:t.productionOutInComingMaxCount,placeholder:"请输入"+t.productionOutInComingTitle+"产品数量"},model:{value:t.productionOutInComingForm.count,callback:function(e){t.$set(t.productionOutInComingForm,"count",t._n(e))},expression:"productionOutInComingForm.count"}})],1),n("el-form-item",{attrs:{label:"备注：",prop:"remark"}},[n("el-input",{staticStyle:{width:"70%"},attrs:{type:"textarea",placeholder:"请输入"+t.productionOutInComingTitle+"产品备注"},model:{value:t.productionOutInComingForm.remark,callback:function(e){t.$set(t.productionOutInComingForm,"remark",e)},expression:"productionOutInComingForm.remark"}})],1)],1)],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"small"},on:{click:function(e){t.productionOutInComingModal=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary",size:"small",loading:t.productionOutInComingLoading},on:{click:t.onHandleConfirmProductionOutInComing}},[t._v("确 定")])],1)])],1)},i=[];n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i}))},"3ecb":function(t,e,n){"use strict";n.r(e);var o=n("6733"),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=i.a},"45fc":function(t,e,n){"use strict";var o=n("23e7"),i=n("b727").some,r=n("a640"),a=n("ae40"),u=r("some"),c=a("some");o({target:"Array",proto:!0,forced:!u||!c},{some:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},4816:function(t,e,n){"use strict";n.r(e);var o=n("2ff3"),i=n("dbe5");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("2fb8");var a=n("2877"),u=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,"a0646946",null);e["default"]=u.exports},6733:function(t,e,n){var o,i,r;n("a9e3"),function(n,a){i=[e],o=a,r="function"===typeof o?o.apply(e,i):o,void 0===r||(t.exports=r)}("undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,(function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={name:"TitleCount",props:{title:{required:!0,type:String,default:""},count:{type:[String,Number],default:0},unit:{type:String,default:"个"}}};t.default=e}))},"6bb0":function(t,e,n){},8200:function(t,e,n){var o,i,r;(function(n,a){i=[e],o=a,r="function"===typeof o?o.apply(e,i):o,void 0===r||(t.exports=r)})("undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,(function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={name:"Divider"};t.default=e}))},8498:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"divider-container"})},i=[];n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i}))},a434:function(t,e,n){"use strict";var o=n("23e7"),i=n("23cb"),r=n("a691"),a=n("50c4"),u=n("7b0b"),c=n("65f0"),s=n("8418"),l=n("1dde"),d=n("ae40"),p=l("splice"),f=d("splice",{ACCESSORS:!0,0:0,1:2}),m=Math.max,g=Math.min,h=9007199254740991,v="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!p||!f},{splice:function(t,e){var n,o,l,d,p,f,b=u(this),C=a(b.length),y=i(t,C),k=arguments.length;if(0===k?n=o=0:1===k?(n=0,o=C-y):(n=k-2,o=g(m(r(e),0),C-y)),C+n-o>h)throw TypeError(v);for(l=c(b,o),d=0;d<o;d++)p=y+d,p in b&&s(l,d,b[p]);if(l.length=o,n<o){for(d=y;d<C-o;d++)p=d+o,f=d+n,p in b?b[f]=b[p]:delete b[f];for(d=C;d>C-o+n;d--)delete b[d-1]}else if(n>o)for(d=C-o;d>y;d--)p=d+o-1,f=d+n-1,p in b?b[f]=b[p]:delete b[f];for(d=0;d<n;d++)b[d+y]=arguments[d+2];return b.length=C-o+n,l}})},a5a8:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title-container"},[n("h3",{staticClass:"title"},[t._v(t._s(t.title))]),t._t("default",[n("div",{staticClass:"total"},[t._v("共"),n("strong",{staticStyle:{color:"#ff0000"}},[t._v(t._s(t.count))]),t._v(t._s(t.unit))])])],2)},i=[];n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i}))},aa8f:function(t,e,n){"use strict";var o=n("cfa7"),i=n.n(o);i.a},cfa7:function(t,e,n){},dbe5:function(t,e,n){"use strict";n.r(e);var o=n("2f02"),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=i.a},f451:function(t,e,n){"use strict";n.r(e);var o=n("8200"),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=i.a}}]);
//# sourceMappingURL=chunk-5af9d148.8b09e59d.js.map