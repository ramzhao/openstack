(function(e){function t(t){for(var a,l,n=t[0],m=t[1],s=t[2],u=0,d=[];u<n.length;u++)l=n[u],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&d.push(o[l][0]),o[l]=0;for(a in m)Object.prototype.hasOwnProperty.call(m,a)&&(e[a]=m[a]);c&&c(t);while(d.length)d.shift()();return r.push.apply(r,s||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],a=!0,n=1;n<i.length;n++){var m=i[n];0!==o[m]&&(a=!1)}a&&(r.splice(t--,1),e=l(l.s=i[0]))}return e}var a={},o={app:0},r=[];function l(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.m=e,l.c=a,l.d=function(e,t,i){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(i,a,function(t){return e[t]}.bind(null,a));return i},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],m=n.push.bind(n);n.push=t,n=n.slice();for(var s=0;s<n.length;s++)t(n[s]);var c=m;r.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";var a=i("c37e"),o=i.n(a);o.a},"0797":function(e,t,i){},"256e":function(e,t,i){"use strict";var a=i("0797"),o=i.n(a);o.a},"3d56":function(e,t,i){"use strict";var a=i("a091"),o=i.n(a);o.a},"56d7":function(e,t,i){"use strict";i.r(t);i("23dc"),i("70e7"),i("e7c0"),i("351c");var a=i("6e6d"),o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},r=[],l={name:"app",components:{}},n=l,m=(i("034f"),i("6691")),s=Object(m["a"])(n,o,r,!1,null,null,null),c=s.exports,u=i("591a");a["default"].use(u["a"]);var d=new u["a"].Store({state:{},mutations:{},actions:{},modules:{}}),f=i("c478"),p=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-container",[i("el-container",[i("el-aside",{attrs:{width:"200px"}},[i("HorizonAside")],1),i("el-container",[i("el-header",{staticClass:"breadcrumb-header",attrs:{height:"50px"}},[i("el-breadcrumb",{staticStyle:{"line-height":"50px"},attrs:{"separator-class":"el-icon-arrow-right"}},[i("el-breadcrumb-item",[e._v("项目")]),i("el-breadcrumb-item",[e._v("计算")]),i("el-breadcrumb-item",[e._v("映像")]),i("div",{staticClass:"avator"},[i("el-dropdown",[i("span",{staticClass:"el-dropdown-link"},[i("el-avatar",{staticClass:"avator_img",attrs:{shape:"square",size:42,src:e.squareUrl}})],1),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",{staticStyle:{"background-color":"#f7f7f7"}},[e._v("admin")]),i("el-dropdown-item",[e._v("注销")])],1)],1)],1),i("el-dropdown",{staticClass:"domain"},[i("span",{staticClass:"el-dropdown-link"},[i("i",{staticClass:"el-icon-s-unfold",staticStyle:{"font-size":"30px"}})]),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",{staticStyle:{"background-color":"#f7f7f7"}},[e._v("domain")])],1)],1)],1)],1),i("el-main",[i("router-view")],1)],1)],1)],1)},_=[],g=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"unique-opened":"true","default-active":"2","background-color":"#324157","text-color":"#fff","active-text-color":"#20a0ff",router:"true"},on:{open:e.handleOpen,close:e.handleClose}},[i("el-submenu",{attrs:{index:"1"}},[i("template",{slot:"title"},[i("i",{staticClass:"el-icon-s-grid"}),i("span",[e._v("项目")])]),i("el-submenu",{attrs:{index:"1-1"}},[i("template",{slot:"title"},[i("i",{staticClass:"iconfont el-icon-zhao-cpuchuliqiyingjian"}),e._v("计算")]),i("el-menu-item-group",[i("el-menu-item",{attrs:{index:"1-1-1"}},[i("i",{staticClass:"el-icon-caret-right"}),e._v("概述")]),i("el-menu-item",{attrs:{index:"1-1-2"}},[i("i",{staticClass:"el-icon-caret-right"}),e._v("实例")]),i("el-menu-item",{attrs:{index:"1-1-3"}},[i("i",{staticClass:"el-icon-caret-right"}),e._v("卷")]),i("el-menu-item",{attrs:{index:"/Horizon/image"}},[i("i",{staticClass:"el-icon-caret-right"}),e._v("映像")]),i("el-menu-item",{attrs:{index:"1-1-5"}},[i("i",{staticClass:"el-icon-caret-right"}),e._v("访问 & 安全")])],1)],2),i("el-submenu",{attrs:{index:"1-2"}},[i("template",{slot:"title"},[i("i",{staticClass:"iconfont el-icon-zhao-wangluo1"}),e._v("网络")]),i("el-menu-item-group",[i("el-menu-item",{attrs:{index:"1-2-1"}},[i("i",{staticClass:"el-icon-caret-right"}),e._v("网络拓扑")]),i("el-menu-item",{attrs:{index:"1-2-2"}},[i("i",{staticClass:"el-icon-caret-right"}),e._v("网络")])],1)],2)],2),i("el-submenu",{attrs:{index:"2"}},[i("template",{slot:"title"},[i("i",{staticClass:"el-icon-s-custom"}),i("span",[e._v("管理员")])]),i("el-submenu",{attrs:{index:"2-1"}},[i("template",{slot:"title"},[i("i",{staticClass:"iconfont el-icon-zhao-xitong"}),e._v("系统")]),i("el-menu-item-group",[i("el-menu-item",{attrs:{index:"2-1-1"}},[i("i",{staticClass:"el-icon-caret-right"}),e._v("概述")]),i("el-menu-item",{attrs:{index:"2-1-2"}},[i("i",{staticClass:"el-icon-caret-right"}),e._v("管理程序")]),i("el-menu-item",{attrs:{index:"2-1-3"}},[i("i",{staticClass:"el-icon-caret-right"}),e._v("主机聚集")]),i("el-menu-item",{attrs:{index:"2-1-4"}},[i("i",{staticClass:"el-icon-caret-right"}),e._v("实例")]),i("el-menu-item",{attrs:{index:"2-1-5"}},[i("i",{staticClass:"el-icon-caret-right"}),e._v("卷")]),i("el-menu-item",{attrs:{index:"2-1-6"}},[i("i",{staticClass:"el-icon-caret-right"}),e._v("flavor数")]),i("el-menu-item",{attrs:{index:"/Horizon/image"}},[i("i",{staticClass:"el-icon-caret-right"}),e._v("映像")]),i("el-menu-item",{attrs:{index:"/Horizon/network"}},[i("i",{staticClass:"el-icon-caret-right"}),e._v("网络")]),i("el-menu-item",{attrs:{index:"2-1-9"}},[i("i",{staticClass:"el-icon-caret-right"}),e._v("缺省值")]),i("el-menu-item",{attrs:{index:"2-1-10"}},[i("i",{staticClass:"el-icon-caret-right"}),e._v("元数据定义")]),i("el-menu-item",{attrs:{index:"2-1-11"}},[i("i",{staticClass:"el-icon-caret-right"}),e._v("系统信息")])],1)],2)],2),i("el-submenu",{attrs:{index:"3"}},[i("template",{slot:"title"},[i("i",{staticClass:"iconfont el-icon-zhao-shenfen-tianchong"}),i("span",[e._v("身份管理")])]),i("el-menu-item-group",[i("el-menu-item",{attrs:{index:"3-1"}},[i("i",{staticClass:"iconfont el-icon-zhao-xiangmu"}),e._v("项目")]),i("el-menu-item",{attrs:{index:"3-2"}},[i("i",{staticClass:"iconfont el-icon-zhao-jiaoseguanli"}),e._v("用户")]),i("el-menu-item",{attrs:{index:"3-3"}},[i("i",{staticClass:"iconfont el-icon-zhao-zudui"}),e._v("组")]),i("el-menu-item",{attrs:{index:"3-4"}},[i("i",{staticClass:"iconfont el-icon-zhao-jiaoseguanli"}),e._v("角色")])],1)],2)],1)},b=[],h={name:"HorizonAside"},v=h,x=(i("256e"),Object(m["a"])(v,g,b,!1,null,"a34d3b56",null)),k=x.exports,w={name:"Horizon",components:{HorizonAside:k},data:function(){return{squareUrl:"http://elm.cangdu.org/img/default.jpg"}},methods:{handleSelect:function(e,t){console.log(e,t)},handleOpen:function(e,t){console.log(e,t)},handleClose:function(e,t){console.log(e,t)}}},y=w,$=(i("3d56"),Object(m["a"])(y,p,_,!1,null,"43dc474e",null)),L=$.exports,C=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"background"},[i("div",{attrs:{id:"login_box"}},[i("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules,"label-width":"100px"}},[i("el-form-item",{attrs:{label:"domain",prop:"domain"}},[i("el-input",{attrs:{type:"text",autocomplete:"off"},model:{value:e.ruleForm.domain,callback:function(t){e.$set(e.ruleForm,"domain",t)},expression:"ruleForm.domain"}})],1),i("el-form-item",{attrs:{label:"用户名",prop:"user"}},[i("el-input",{attrs:{type:"text",autocomplete:"off"},model:{value:e.ruleForm.user,callback:function(t){e.$set(e.ruleForm,"user",t)},expression:"ruleForm.user"}})],1),i("el-form-item",{attrs:{label:"密 码",prop:"pass"}},[i("el-input",{model:{value:e.ruleForm.pass,callback:function(t){e.$set(e.ruleForm,"pass",e._n(t))},expression:"ruleForm.pass"}})],1),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("登录")]),i("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)])},S=[],W=(i("7fae"),i("384e"),i("6076"),i("c0f0"),{name:"Login",data:function(){var e=function(e,t,i){if(!t)return i(new Error("用户名不能为空"));i()},t=function(e,t,i){""===t?i(new Error("请输入密码")):i()},i=function(e,t,i){""===t?i(new Error("请输入域")):i()};return{ruleForm:{pass:"",user:"",domain:""},rules:{pass:[{validator:t,trigger:"blur"}],user:[{validator:e,trigger:"blur"}],domain:[{validator:i,trigger:"blur"}]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;var i=new URLSearchParams;i.append("user",t.ruleForm.user),i.append("pass",t.ruleForm.pass),i.append("domain",t.ruleForm.domain),t.axios.post("/api/login",i).then((function(e){t.content=e.data,console.log(t.content),"success"===t.content?t.$router.push("/Horizon"):401===t.content&&alert("用户名或密码错误")})).catch((function(e){console.log(e)}))}))},resetForm:function(e){this.$refs[e].resetFields()}}}),O=W,z=(i("9790"),Object(m["a"])(O,C,S,!1,null,"7c236635",null)),D=z.exports,j=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"end"}},[i("el-col",{attrs:{span:5}},[i("el-button-group",[i("el-button",{attrs:{type:"primary",size:"medium"}},[e._v("项目(2)")]),i("el-button",{attrs:{type:"primary",size:"medium"}},[e._v("与我共享")]),i("el-button",{attrs:{type:"primary",size:"medium"}},[e._v("公有(2)")])],1)],1),i("el-col",{attrs:{span:3}},[i("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){e.createImagesDialogVisible=!0}}},[e._v("创建映像")]),i("el-button",{attrs:{type:"danger",size:"medium"}},[e._v("删除映像")])],1)],1),i("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark",stripe:"true",border:"true",height:"800"},on:{"selection-change":e.handleSelectionChange}},[i("el-table-column",{attrs:{type:"selection",width:"50"}}),i("el-table-column",{attrs:{prop:"name",label:"映像名称",width:"200"}}),i("el-table-column",{attrs:{prop:"disk_format",label:"类型",width:"200"}}),i("el-table-column",{attrs:{prop:"status",label:"状态",width:"200"}}),i("el-table-column",{attrs:{prop:"visibility",label:"公有",width:"200"}}),i("el-table-column",{attrs:{prop:"protected",label:"受保护的",width:"200"}}),i("el-table-column",{attrs:{prop:"disk_format",label:"格式",width:"200"}}),i("el-table-column",{attrs:{prop:"size",label:"大小",width:"200"}}),i("el-table-column",{attrs:{label:"Actions"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-dropdown",{attrs:{"split-button":"",type:"primary",size:"small"},on:{click:e.handleClick}},[e._v(" 启动 "),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",[e._v("创建卷")]),i("el-dropdown-item",{nativeOn:{click:function(i){return e.edit_image_dialog_open(t.row)}}},[e._v("编辑映像")]),i("el-dropdown-item",[e._v("更新元数据")]),i("el-dropdown-item",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{divided:""},nativeOn:{click:function(i){return e.images_delete_one(t.row.id)}}},[e._v("删除映像 ")])],1)],1)]}}])})],1),i("el-dialog",{attrs:{title:"编辑映像",visible:e.editImagesDialogVisible,width:"500px"},on:{"update:visible":function(t){e.editImagesDialogVisible=t}}},[i("el-form",{attrs:{model:e.form,"label-width":"100px","label-position":"right"}},[i("el-form-item",{attrs:{label:"名称","label-width":e.formLabelWidth}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:e.edit_image_form.name,callback:function(t){e.$set(e.edit_image_form,"name",t)},expression:"edit_image_form.name"}})],1),i("el-form-item",{attrs:{label:"描述"}},[i("el-input",{attrs:{type:"textarea"},model:{value:e.edit_image_form.description,callback:function(t){e.$set(e.edit_image_form,"description",t)},expression:"edit_image_form.description"}})],1),i("el-form-item",{attrs:{label:"内核标识","label-width":e.formLabelWidth}},[i("el-input",{attrs:{autocomplete:"off",disabled:!0},model:{value:e.edit_image_form.kernel_id,callback:function(t){e.$set(e.edit_image_form,"kernel_id",t)},expression:"edit_image_form.kernel_id"}})],1),i("el-form-item",{attrs:{label:"内存盘标识","label-width":e.formLabelWidth}},[i("el-input",{attrs:{autocomplete:"off",disabled:!0},model:{value:e.edit_image_form.ramdisk_id,callback:function(t){e.$set(e.edit_image_form,"ramdisk_id",t)},expression:"edit_image_form.ramdisk_id"}})],1),i("el-form-item",{attrs:{label:"架构","label-width":e.formLabelWidth}},[i("el-input",{attrs:{autocomplete:"off",disabled:!0},model:{value:e.edit_image_form.architecture,callback:function(t){e.$set(e.edit_image_form,"architecture",t)},expression:"edit_image_form.architecture"}})],1),i("el-form-item",{attrs:{label:"格式","label-width":e.formLabelWidth}},[i("el-select",{attrs:{placeholder:"请选择映像格式"},model:{value:e.edit_image_form.format,callback:function(t){e.$set(e.edit_image_form,"format",t)},expression:"edit_image_form.format"}},[i("el-option",{attrs:{label:"ISO-光盘映像",value:"iso"}}),i("el-option",{attrs:{label:"QCOW2-QEMU模拟器",value:"qcow2"}})],1)],1),i("el-form-item",{attrs:{label:"最小磁盘(GB)","label-width":e.formLabelWidth}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:e.edit_image_form.minimum_disk,callback:function(t){e.$set(e.edit_image_form,"minimum_disk",t)},expression:"edit_image_form.minimum_disk"}})],1),i("el-form-item",{attrs:{label:"最低内存(MB)","label-width":e.formLabelWidth}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:e.edit_image_form.minimum_ram,callback:function(t){e.$set(e.edit_image_form,"minimum_ram",t)},expression:"edit_image_form.minimum_ram"}})],1),i("el-form-item",{staticStyle:{"margin-bottom":"0px"},attrs:{label:"公有"}},[i("el-checkbox",{attrs:{name:"type"},model:{value:e.edit_image_form.public,callback:function(t){e.$set(e.edit_image_form,"public",t)},expression:"edit_image_form.public"}})],1),i("el-form-item",{staticStyle:{"margin-bottom":"0px"},attrs:{label:"受保护的"}},[i("el-checkbox",{attrs:{name:"type"},model:{value:e.edit_image_form.protected,callback:function(t){e.$set(e.edit_image_form,"protected",t)},expression:"edit_image_form.protected"}})],1)],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.editImagesDialogVisible=!1}}},[e._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:e.edit_image_onsubmit}},[e._v("保 存")])],1)],1),i("el-dialog",{attrs:{title:"编辑映像",visible:e.createImagesDialogVisible,width:"500px"},on:{"update:visible":function(t){e.createImagesDialogVisible=t}}},[i("el-form",{ref:"create_image_form",attrs:{model:e.create_image_form,"label-width":"100px","label-position":"right"}},[i("el-form-item",{attrs:{label:"名称","label-width":e.formLabelWidth}},[i("el-input",{attrs:{autocomplete:"off",name:"name"},model:{value:e.create_image_form.name,callback:function(t){e.$set(e.create_image_form,"name",t)},expression:"create_image_form.name"}})],1),i("el-form-item",{attrs:{label:"描述"}},[i("el-input",{attrs:{type:"textarea",name:"description"},model:{value:e.create_image_form.description,callback:function(t){e.$set(e.create_image_form,"description",t)},expression:"create_image_form.description"}})],1),i("el-form-item",{attrs:{label:"映像源","label-width":e.formLabelWidth}},[i("el-select",{model:{value:e.create_image_form.image_source,callback:function(t){e.$set(e.create_image_form,"image_source",t)},expression:"create_image_form.image_source"}},[i("el-option",{attrs:{label:"映像位置",value:"shanghai"}}),i("el-option",{attrs:{label:"映像文件",value:"beijing"}})],1)],1),i("el-form-item",{attrs:{label:"映像位置","label-width":e.formLabelWidth}},[i("el-input",{attrs:{autocomplete:"off",name:"image_location"},model:{value:e.create_image_form.image_location,callback:function(t){e.$set(e.create_image_form,"image_location",t)},expression:"create_image_form.image_location"}})],1),i("el-form-item",{attrs:{label:"选择映像","label-width":e.formLabelWidth}},[i("el-upload",{attrs:{action:"","http-request":e.handleFile,multiple:!1,limit:1,"on-exceed":e.handleExceed,"file-list":e.fileList}},[i("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击选择")])],1)],1),i("el-form-item",{attrs:{label:"格式","label-width":e.formLabelWidth}},[i("el-select",{attrs:{placeholder:"请选择映像格式",name:"format"},model:{value:e.create_image_form.format,callback:function(t){e.$set(e.create_image_form,"format",t)},expression:"create_image_form.format"}},[i("el-option",{attrs:{label:"ISO-光盘映像",value:"iso"}}),i("el-option",{attrs:{label:"QCOW2-QEMU模拟器",value:"qcow2"}})],1)],1),i("el-form-item",{attrs:{label:"架构","label-width":e.formLabelWidth}},[i("el-input",{attrs:{autocomplete:"off",name:"architecture"},model:{value:e.create_image_form.architecture,callback:function(t){e.$set(e.create_image_form,"architecture",t)},expression:"create_image_form.architecture"}})],1),i("el-form-item",{attrs:{label:"最小磁盘(GB)","label-width":e.formLabelWidth}},[i("el-input",{attrs:{autocomplete:"off",name:"minimum_disk"},model:{value:e.create_image_form.minimum_disk,callback:function(t){e.$set(e.create_image_form,"minimum_disk",t)},expression:"create_image_form.minimum_disk"}})],1),i("el-form-item",{attrs:{label:"最低内存(MB)","label-width":e.formLabelWidth}},[i("el-input",{attrs:{autocomplete:"off",name:"minimum_ram"},model:{value:e.create_image_form.minimum_ram,callback:function(t){e.$set(e.create_image_form,"minimum_ram",t)},expression:"create_image_form.minimum_ram"}})],1),i("el-form-item",{staticStyle:{"margin-bottom":"0px"},attrs:{label:"复制数据"}},[i("el-checkbox",{attrs:{name:"copy_data"},model:{value:e.create_image_form.copy_data,callback:function(t){e.$set(e.create_image_form,"copy_data",t)},expression:"create_image_form.copy_data"}})],1),i("el-form-item",{staticStyle:{"margin-bottom":"0px"},attrs:{label:"公有"}},[i("el-checkbox",{attrs:{name:"public"},model:{value:e.create_image_form.public,callback:function(t){e.$set(e.create_image_form,"public",t)},expression:"create_image_form.public"}})],1),i("el-form-item",{staticStyle:{"margin-bottom":"0px"},attrs:{label:"受保护的"}},[i("el-checkbox",{attrs:{name:"protected"},model:{value:e.create_image_form.protected,callback:function(t){e.$set(e.create_image_form,"protected",t)},expression:"create_image_form.protected"}})],1)],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.createImagesDialogVisible=!1}}},[e._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:e.create_image_onsubmit}},[e._v("创 建")])],1)],1)],1)},F=[],I=(i("44bb"),i("c639"),i("67d7"),i("03b2"),i("4536"),i("3596")),V=(i("63ff"),i("f8f9")),E={name:"image",components:{},data:function(){return{fullscreenLoading:!1,multipleSelection:[],createImagesDialogVisible:!1,editImagesDialogVisible:!1,formLabelWidth:"100px",fileList:[],create_image_form:{name:"",description:"",image_source:"",image_location:"",format:"",architecture:"",minimum_disk:"",minimum_ram:"",copy_data:!0,public:!1,protected:!1},edit_image_form:{name:"",description:"",kernel_id:"",ramdisk_id:"",architecture:"",format:"",minimum_disk:"",minimum_ram:"",public:!1,protected:!1},tableData:[{name:"cirros",status:"活动",size:"12.1 MB",disk_format:"qcow2",protected:"否",visibility:"是",id:12345678,minimum_disk:"",minimum_ram:"",description:"",architecture:""}]}},created:function(){this.getData()},methods:{toggleSelection:function(e){var t=this;e?e.forEach((function(e){t.$refs.multipleTable.toggleRowSelection(e)})):this.$refs.multipleTable.clearSelection()},handleSelectionChange:function(e){this.multipleSelection=e},getData:function(){var e=Object(V["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.axios.get("api/getImageList").then((function(e){t.content=e.data,t.tableData=t.content,console.log(t.content),console.log(Object(I["a"])(t.content)),"not login in"===t.content&&(alert("请先登录！"),t.$router.push("/Login"))})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),images_delete_one:function(e){var t=this;console.log(e),this.$confirm("此操作将删除该映像, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.fullscreenLoading=!0,t.axios.get("api/images/delete_one?image_id="+e).then((function(e){t.fullscreenLoading=!1,t.content=e.data,"not login in"===t.content?(alert("请先登录！"),t.$router.push("/Login")):204===t.content?(t.$message({type:"success",message:"删除成功!"}),window.location.reload()):t.$message({type:"error",message:"删除失败! 返回信息："+t.content})})).catch((function(e){console.log(e)}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},handleClick:function(){alert("button click")},handleFile:function(e){this.fileList.push(e.file)},handleExceed:function(e,t){this.$message.warning("最多上传 ".concat(e.length," 个文件"))},create_image_onsubmit:function(){this.$refs["create_image_form"].$el;var e=new FormData;e.append("name",this.create_image_form.name),e.append("description",this.create_image_form.description),e.append("image_location",this.create_image_form.image_location),e.append("architecture",this.create_image_form.architecture),e.append("format",this.create_image_form.format),e.append("minimum_ram",this.create_image_form.minimum_ram),e.append("minimum_disk",this.create_image_form.minimum_disk),e.append("protected",this.create_image_form.protected),e.append("public",this.create_image_form.public),e.append("copy_data",this.create_image_form.copy_data),e.append("files",this.fileList[0]),console.log(this.fileList[0]),this.axios.post("/api/images/create_image",e).then((function(e){e.code})).catch((function(e){}))},edit_image_dialog_open:function(e){var t,i;t="是"===e.visibility,i="是"===e.protected,this.edit_image_form={name:e.name,description:e.description,kernel_id:"",ramdisk_id:"",architecture:e.architecture,format:e.disk_format,minimum_disk:e.minimum_disk,minimum_ram:e.minimum_ram,public:t,protected:i},console.log(this.edit_image_form),this.editImagesDialogVisible=!0},edit_image_onsubmit:function(){}}},B=E,M=(i("c829"),Object(m["a"])(B,j,F,!1,null,"30ec7ccc",null)),T=M.exports,q=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div")},H=[],P={name:"create_image_dialog",data:function(){return{dialogFormVisible:$route.params.open}}},Q=P,R=Object(m["a"])(Q,q,H,!1,null,"286ed16c",null),U=R.exports,A=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"end"}},[i("el-col",{attrs:{span:3}},[i("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){e.createImagesDialogVisible=!0}}},[e._v("创建网络")]),i("el-button",{attrs:{type:"danger",size:"medium"}},[e._v("删除网络")])],1)],1),i("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark",stripe:"true",border:"true",height:"800"},on:{"selection-change":e.handleSelectionChange}},[i("el-table-column",{attrs:{type:"selection",width:"50"}}),i("el-table-column",{attrs:{prop:"project",label:"项目",width:"200"}}),i("el-table-column",{attrs:{prop:"name",label:"网络名称",width:"200"}}),i("el-table-column",{attrs:{prop:"cidr",label:"子网已连接",width:"200"}}),i("el-table-column",{attrs:{prop:"",label:"DHCP管理程序",width:"200"}}),i("el-table-column",{attrs:{prop:"shared",label:"共享",width:"200"}}),i("el-table-column",{attrs:{prop:"external",label:"外部",width:"200"}}),i("el-table-column",{attrs:{prop:"status",label:"状态",width:"100"}}),i("el-table-column",{attrs:{prop:"admin_state_up",label:"管理状态",width:"100"}}),i("el-table-column",{attrs:{label:"Actions"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-dropdown",{attrs:{"split-button":"",type:"primary",size:"small"},on:{click:e.handleClick}},[e._v(" 编辑网络 "),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{divided:""},nativeOn:{click:function(i){return e.images_delete_one(t.row.id)}}},[e._v("删除网络 ")])],1)],1)]}}])})],1),i("el-dialog",{attrs:{title:"编辑映像",visible:e.editImagesDialogVisible,width:"500px"},on:{"update:visible":function(t){e.editImagesDialogVisible=t}}},[i("el-form",{attrs:{model:e.form,"label-width":"100px","label-position":"right"}},[i("el-form-item",{attrs:{label:"名称","label-width":e.formLabelWidth}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:e.edit_image_form.name,callback:function(t){e.$set(e.edit_image_form,"name",t)},expression:"edit_image_form.name"}})],1),i("el-form-item",{attrs:{label:"描述"}},[i("el-input",{attrs:{type:"textarea"},model:{value:e.edit_image_form.description,callback:function(t){e.$set(e.edit_image_form,"description",t)},expression:"edit_image_form.description"}})],1),i("el-form-item",{attrs:{label:"内核标识","label-width":e.formLabelWidth}},[i("el-input",{attrs:{autocomplete:"off",disabled:!0},model:{value:e.edit_image_form.kernel_id,callback:function(t){e.$set(e.edit_image_form,"kernel_id",t)},expression:"edit_image_form.kernel_id"}})],1),i("el-form-item",{attrs:{label:"内存盘标识","label-width":e.formLabelWidth}},[i("el-input",{attrs:{autocomplete:"off",disabled:!0},model:{value:e.edit_image_form.ramdisk_id,callback:function(t){e.$set(e.edit_image_form,"ramdisk_id",t)},expression:"edit_image_form.ramdisk_id"}})],1),i("el-form-item",{attrs:{label:"架构","label-width":e.formLabelWidth}},[i("el-input",{attrs:{autocomplete:"off",disabled:!0},model:{value:e.edit_image_form.architecture,callback:function(t){e.$set(e.edit_image_form,"architecture",t)},expression:"edit_image_form.architecture"}})],1),i("el-form-item",{attrs:{label:"格式","label-width":e.formLabelWidth}},[i("el-select",{attrs:{placeholder:"请选择映像格式"},model:{value:e.edit_image_form.format,callback:function(t){e.$set(e.edit_image_form,"format",t)},expression:"edit_image_form.format"}},[i("el-option",{attrs:{label:"ISO-光盘映像",value:"iso"}}),i("el-option",{attrs:{label:"QCOW2-QEMU模拟器",value:"qcow2"}})],1)],1),i("el-form-item",{attrs:{label:"最小磁盘(GB)","label-width":e.formLabelWidth}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:e.edit_image_form.minimum_disk,callback:function(t){e.$set(e.edit_image_form,"minimum_disk",t)},expression:"edit_image_form.minimum_disk"}})],1),i("el-form-item",{attrs:{label:"最低内存(MB)","label-width":e.formLabelWidth}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:e.edit_image_form.minimum_ram,callback:function(t){e.$set(e.edit_image_form,"minimum_ram",t)},expression:"edit_image_form.minimum_ram"}})],1),i("el-form-item",{staticStyle:{"margin-bottom":"0px"},attrs:{label:"公有"}},[i("el-checkbox",{attrs:{name:"type"},model:{value:e.edit_image_form.public,callback:function(t){e.$set(e.edit_image_form,"public",t)},expression:"edit_image_form.public"}})],1),i("el-form-item",{staticStyle:{"margin-bottom":"0px"},attrs:{label:"受保护的"}},[i("el-checkbox",{attrs:{name:"type"},model:{value:e.edit_image_form.protected,callback:function(t){e.$set(e.edit_image_form,"protected",t)},expression:"edit_image_form.protected"}})],1)],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.editImagesDialogVisible=!1}}},[e._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:e.edit_image_onsubmit}},[e._v("保 存")])],1)],1),i("el-dialog",{attrs:{title:"编辑映像",visible:e.createImagesDialogVisible,width:"500px"},on:{"update:visible":function(t){e.createImagesDialogVisible=t}}},[i("el-form",{ref:"create_image_form",attrs:{model:e.create_image_form,"label-width":"100px","label-position":"right"}},[i("el-form-item",{attrs:{label:"名称","label-width":e.formLabelWidth}},[i("el-input",{attrs:{autocomplete:"off",name:"name"},model:{value:e.create_image_form.name,callback:function(t){e.$set(e.create_image_form,"name",t)},expression:"create_image_form.name"}})],1),i("el-form-item",{attrs:{label:"描述"}},[i("el-input",{attrs:{type:"textarea",name:"description"},model:{value:e.create_image_form.description,callback:function(t){e.$set(e.create_image_form,"description",t)},expression:"create_image_form.description"}})],1),i("el-form-item",{attrs:{label:"映像源","label-width":e.formLabelWidth}},[i("el-select",{model:{value:e.create_image_form.image_source,callback:function(t){e.$set(e.create_image_form,"image_source",t)},expression:"create_image_form.image_source"}},[i("el-option",{attrs:{label:"映像位置",value:"shanghai"}}),i("el-option",{attrs:{label:"映像文件",value:"beijing"}})],1)],1),i("el-form-item",{attrs:{label:"映像位置","label-width":e.formLabelWidth}},[i("el-input",{attrs:{autocomplete:"off",name:"image_location"},model:{value:e.create_image_form.image_location,callback:function(t){e.$set(e.create_image_form,"image_location",t)},expression:"create_image_form.image_location"}})],1),i("el-form-item",{attrs:{label:"选择映像","label-width":e.formLabelWidth}},[i("el-upload",{attrs:{action:"","http-request":e.handleFile,multiple:!1,limit:1,"on-exceed":e.handleExceed,"file-list":e.fileList}},[i("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击选择")])],1)],1),i("el-form-item",{attrs:{label:"格式","label-width":e.formLabelWidth}},[i("el-select",{attrs:{placeholder:"请选择映像格式",name:"format"},model:{value:e.create_image_form.format,callback:function(t){e.$set(e.create_image_form,"format",t)},expression:"create_image_form.format"}},[i("el-option",{attrs:{label:"ISO-光盘映像",value:"iso"}}),i("el-option",{attrs:{label:"QCOW2-QEMU模拟器",value:"qcow2"}})],1)],1),i("el-form-item",{attrs:{label:"架构","label-width":e.formLabelWidth}},[i("el-input",{attrs:{autocomplete:"off",name:"architecture"},model:{value:e.create_image_form.architecture,callback:function(t){e.$set(e.create_image_form,"architecture",t)},expression:"create_image_form.architecture"}})],1),i("el-form-item",{attrs:{label:"最小磁盘(GB)","label-width":e.formLabelWidth}},[i("el-input",{attrs:{autocomplete:"off",name:"minimum_disk"},model:{value:e.create_image_form.minimum_disk,callback:function(t){e.$set(e.create_image_form,"minimum_disk",t)},expression:"create_image_form.minimum_disk"}})],1),i("el-form-item",{attrs:{label:"最低内存(MB)","label-width":e.formLabelWidth}},[i("el-input",{attrs:{autocomplete:"off",name:"minimum_ram"},model:{value:e.create_image_form.minimum_ram,callback:function(t){e.$set(e.create_image_form,"minimum_ram",t)},expression:"create_image_form.minimum_ram"}})],1),i("el-form-item",{staticStyle:{"margin-bottom":"0px"},attrs:{label:"复制数据"}},[i("el-checkbox",{attrs:{name:"copy_data"},model:{value:e.create_image_form.copy_data,callback:function(t){e.$set(e.create_image_form,"copy_data",t)},expression:"create_image_form.copy_data"}})],1),i("el-form-item",{staticStyle:{"margin-bottom":"0px"},attrs:{label:"公有"}},[i("el-checkbox",{attrs:{name:"public"},model:{value:e.create_image_form.public,callback:function(t){e.$set(e.create_image_form,"public",t)},expression:"create_image_form.public"}})],1),i("el-form-item",{staticStyle:{"margin-bottom":"0px"},attrs:{label:"受保护的"}},[i("el-checkbox",{attrs:{name:"protected"},model:{value:e.create_image_form.protected,callback:function(t){e.$set(e.create_image_form,"protected",t)},expression:"create_image_form.protected"}})],1)],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.createImagesDialogVisible=!1}}},[e._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:e.create_image_onsubmit}},[e._v("创 建")])],1)],1)],1)},G=[],N={name:"image",components:{},data:function(){return{fullscreenLoading:!1,multipleSelection:[],createImagesDialogVisible:!1,editImagesDialogVisible:!1,formLabelWidth:"100px",fileList:[],create_image_form:{name:"",description:"",image_source:"",image_location:"",format:"",architecture:"",minimum_disk:"",minimum_ram:"",copy_data:!0,public:!1,protected:!1},edit_image_form:{name:"",description:"",kernel_id:"",ramdisk_id:"",architecture:"",format:"",minimum_disk:"",minimum_ram:"",public:!1,protected:!1},tableData:[{project:"admin",name:"provider",status:"活动",admin_state_up:"启动",cidr:"provider 10.18.200.0/24",shared:"否",external:"是",id:12345678}]}},created:function(){this.getData()},methods:{toggleSelection:function(e){var t=this;e?e.forEach((function(e){t.$refs.multipleTable.toggleRowSelection(e)})):this.$refs.multipleTable.clearSelection()},handleSelectionChange:function(e){this.multipleSelection=e},getData:function(){var e=Object(V["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.axios.get("api/getNetworksList").then((function(e){t.content=e.data,t.tableData=t.content,console.log(t.content),console.log(Object(I["a"])(t.content)),"not login in"===t.content&&(alert("请先登录！"),t.$router.push("/Login"))})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),images_delete_one:function(e){var t=this;console.log(e),this.$confirm("此操作将删除该映像, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.fullscreenLoading=!0,t.axios.get("api/images/delete_one?image_id="+e).then((function(e){t.fullscreenLoading=!1,t.content=e.data,"not login in"===t.content?(alert("请先登录！"),t.$router.push("/Login")):204===t.content?(t.$message({type:"success",message:"删除成功!"}),window.location.reload()):t.$message({type:"error",message:"删除失败! 返回信息："+t.content})})).catch((function(e){console.log(e)}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},handleClick:function(){alert("button click")},handleFile:function(e){this.fileList.push(e.file)},handleExceed:function(e,t){this.$message.warning("最多上传 ".concat(e.length," 个文件"))},create_image_onsubmit:function(){this.$refs["create_image_form"].$el;var e=new FormData;e.append("name",this.create_image_form.name),e.append("description",this.create_image_form.description),e.append("image_location",this.create_image_form.image_location),e.append("architecture",this.create_image_form.architecture),e.append("format",this.create_image_form.format),e.append("minimum_ram",this.create_image_form.minimum_ram),e.append("minimum_disk",this.create_image_form.minimum_disk),e.append("protected",this.create_image_form.protected),e.append("public",this.create_image_form.public),e.append("copy_data",this.create_image_form.copy_data),e.append("files",this.fileList[0]),console.log(this.fileList[0]),this.axios.post("/api/images/create_image",e).then((function(e){e.code})).catch((function(e){}))},edit_image_dialog_open:function(e){var t,i;t="是"===e.visibility,i="是"===e.protected,this.edit_image_form={name:e.name,description:e.description,kernel_id:"",ramdisk_id:"",architecture:e.architecture,format:e.disk_format,minimum_disk:e.minimum_disk,minimum_ram:e.minimum_ram,public:t,protected:i},console.log(this.edit_image_form),this.editImagesDialogVisible=!0},edit_image_onsubmit:function(){}}},J=N,K=(i("9e0b"),Object(m["a"])(J,A,G,!1,null,"b2fe08ce",null)),X=K.exports;a["default"].use(f["a"]);var Y=new f["a"]({routes:[{path:"/",redirect:D},{path:"/Horizon",name:"Horizon",component:L,children:[{path:"/",name:"test",component:T},{path:"image",name:"image",component:T,children:[{path:"create_image/:open",name:"create_image_dialog",component:U}]},{path:"network",name:"network",component:X}]},{path:"/Login",name:"Login",component:D}]}),Z=i("7893"),ee=i.n(Z),te=(i("610a"),i("ed2c"),i("e7aa")),ie=i.n(te),ae=i("2427"),oe=i.n(ae);a["default"].use(ie.a,oe.a),a["default"].config.productionTip=!1,a["default"].use(ee.a),new a["default"]({router:Y,store:d,render:function(e){return e(c)}}).$mount("#app")},"93e9":function(e,t,i){},9790:function(e,t,i){"use strict";var a=i("93e9"),o=i.n(a);o.a},"9e0b":function(e,t,i){"use strict";var a=i("a336"),o=i.n(a);o.a},a091:function(e,t,i){},a336:function(e,t,i){},c37e:function(e,t,i){},c829:function(e,t,i){"use strict";var a=i("cc79"),o=i.n(a);o.a},cc79:function(e,t,i){},ed2c:function(e,t,i){}});
//# sourceMappingURL=app.2e878a5b.js.map