(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8867],{59739:function(e,n,t){"use strict";var r=t(56669);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,n,t,o,i,c){if(c!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},47329:function(e,n,t){e.exports=t(59739)()},56669:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},1210:function(e,n,t){"use strict";t.d(n,{Z:function(){return g}});var r=t(82394),o=t(21831),i=t(82684),c=t(47999),a=t(49894),s=t(93461),u=t(57384),l=t(41424),d=t(72454),f=t(28598);function p(e,n){var t=e.children;return(0,f.jsx)(d.HS,{ref:n,children:t})}var h=i.forwardRef(p),m=t(32063),b=t(85019),O=t(82531),v=t(66166),x=t(3055),A=t(49125),R=t(91427),S=t(24141);function E(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function T(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?E(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var g=function(e){var n,t=e.after,r=e.afterHidden,p=e.afterWidth,E=e.afterWidthOverride,g=e.before,Z=e.beforeWidth,_=e.breadcrumbs,k=e.children,C=e.errors,w=e.headerMenuItems,j=e.headerOffset,D=e.mainContainerHeader,P=e.navigationItems,y=e.setErrors,N=e.subheaderChildren,I=e.title,M=e.uuid,L=(0,S.i)().width,W="dashboard_after_width_".concat(M),H="dashboard_before_width_".concat(M),F=(0,i.useRef)(null),U=(0,i.useState)(E?p:(0,R.U2)(W,p)),X=U[0],K=U[1],Y=(0,i.useState)(!1),B=Y[0],z=Y[1],G=(0,i.useState)(g?Math.max((0,R.U2)(H,Z),13*A.iI):null),V=G[0],q=G[1],Q=(0,i.useState)(!1),$=Q[0],J=Q[1],ee=(0,i.useState)(null)[1],ne=O.ZP.projects.list({},{revalidateOnFocus:!1}).data,te=null===ne||void 0===ne?void 0:ne.projects,re=[];_?re.push.apply(re,(0,o.Z)(_)):(null===te||void 0===te?void 0:te.length)>=1&&re.push.apply(re,[{label:function(){var e;return null===(e=te[0])||void 0===e?void 0:e.name},linkProps:{href:"/"}},{bold:!0,label:function(){return I}}]),(0,i.useEffect)((function(){null===F||void 0===F||!F.current||B||$||null===ee||void 0===ee||ee(F.current.getBoundingClientRect().width)}),[B,X,$,V,F,ee,L]),(0,i.useEffect)((function(){B||(0,R.t8)(W,X)}),[r,B,X,W]),(0,i.useEffect)((function(){$||(0,R.t8)(H,V)}),[$,V,H]);var oe=(0,v.Z)(p);return(0,i.useEffect)((function(){E&&oe!==p&&K(p)}),[E,p,oe]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(u.Z,{title:I}),(0,f.jsx)(l.Z,{breadcrumbs:re,menuItems:w,project:null===te||void 0===te?void 0:te[0],version:null===te||void 0===te||null===(n=te[0])||void 0===n?void 0:n.version}),(0,f.jsxs)(d.Nk,{children:[0!==(null===P||void 0===P?void 0:P.length)&&(0,f.jsx)(d.lm,{showMore:!0,children:(0,f.jsx)(b.Z,{navigationItems:P,showMore:!0})}),(0,f.jsx)(s.Z,{flex:1,flexDirection:"column",children:(0,f.jsxs)(m.Z,{after:t,afterHeightOffset:x.Mz,afterHidden:r,afterMousedownActive:B,afterWidth:X,before:g,beforeHeightOffset:x.Mz,beforeMousedownActive:$,beforeWidth:d.k1+(g?V:0),headerOffset:j,hideAfterCompletely:!0,leftOffset:g?d.k1:null,mainContainerHeader:D,mainContainerRef:F,setAfterMousedownActive:z,setAfterWidth:K,setBeforeMousedownActive:J,setBeforeWidth:q,children:[N&&(0,f.jsx)(h,{children:N}),k]})})]}),C&&(0,f.jsx)(c.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===y||void 0===y?void 0:y(null)},children:(0,f.jsx)(a.Z,T(T({},C),{},{onClose:function(){return null===y||void 0===y?void 0:y(null)}}))})]})}},85307:function(e,n,t){"use strict";t.d(n,{$W:function(){return u},cl:function(){return l},cv:function(){return d},dE:function(){return s}});var r=t(9518),o=t(23831),i=t(73942),c=t(49125),a=t(37391),s=r.default.div.withConfig({displayName:"indexstyle__SectionStyle",componentId:"sc-7a1uhf-0"})(["border-radius:","px;padding:","px;",""],i.n_,c.cd*c.iI,(function(e){return"\n    background-color: ".concat((e.theme.background||o.Z.background).popup,";\n  ")})),u=r.default.div.withConfig({displayName:"indexstyle__CodeEditorStyle",componentId:"sc-7a1uhf-1"})(["padding-top:","px;",""],c.cd*c.iI,(function(e){return"\n    background-color: ".concat((e.theme.background||o.Z.background).codeTextarea,";\n  ")})),l=r.default.div.withConfig({displayName:"indexstyle__TableContainerStyle",componentId:"sc-7a1uhf-2"})(["overflow:auto;max-height:90vh;width:100%;"," "," "," "," ",""],a.w5,(function(e){return e.hideHorizontalScrollbar&&"\n    overflow-x: hidden;\n  "}),(function(e){return e.width&&"\n    width: ".concat(e.width,";\n  ")}),(function(e){return e.height&&"\n    height: ".concat(e.height,";\n  ")}),(function(e){return e.maxHeight&&"\n    max-height: ".concat(e.maxHeight,";\n  ")})),d=r.default.div.withConfig({displayName:"indexstyle__HeaderRowStyle",componentId:"sc-7a1uhf-3"})(["padding:","px;"," "," ",""],2*c.iI,(function(e){return"\n    background-color: ".concat((e.theme||o.Z).interactive.defaultBackground,";\n    border-bottom: ").concat(i.YF,"px ").concat(i.M8," ").concat((e.theme||o.Z).borders.medium,";\n  ")}),(function(e){return e.padding&&"\n    padding: ".concat(e.padding,"px;\n  ")}),(function(e){return e.rounded&&"\n    border-top-left-radius: ".concat(i.n_,"px;\n    border-top-right-radius: ").concat(i.n_,"px;\n  ")}))},65597:function(e,n,t){"use strict";t.d(n,{f:function(){return a}});var r=t(9518),o=t(23831),i=t(49125),c=t(73942),a=r.default.div.withConfig({displayName:"Tablestyle__PopupContainerStyle",componentId:"sc-8ammqd-0"})(["position:absolute;max-height:","px;z-index:10;border-radius:","px;padding:","px;"," "," "," ",""],58*i.iI,c.TR,2*i.iI,(function(e){return"\n    box-shadow: ".concat((e.theme.shadow||o.Z.shadow).popup,";\n    background-color: ").concat((e.theme.interactive||o.Z.interactive).defaultBackground,";\n  ")}),(function(e){return e.leftOffset&&"\n    left: ".concat(e.leftOffset,"px;\n  ")}),(function(e){return e.topOffset&&"\n    top: ".concat(e.topOffset,"px;\n  ")}),(function(e){return e.width&&"\n    width: ".concat(e.width,"px;\n  ")}))},84392:function(e,n,t){"use strict";t.d(n,{HF:function(){return a},L6:function(){return r}});var r,o=t(81132),i=t(10503),c=t(9736);function a(e,n){var t=e.owner,a=e.roles,s=[{Icon:i.Vz,id:r.WORKSPACES,isSelected:function(){return r.WORKSPACES===n},label:function(){return"Workspaces"},linkProps:{href:"/manage"}}];return(t||a===o.No.ADMIN)&&s.push({Icon:i.NO,id:r.USERS,isSelected:function(){return r.USERS===n},label:function(){return"Users"},linkProps:{href:"/manage/users"}}),(!(0,c.YB)()||a<=o.No.EDITOR)&&s.push({Icon:i.Zr,id:r.SETTINGS,isSelected:function(){return r.SETTINGS===n},label:function(){return"Settings"},linkProps:{href:"/manage/settings"}}),s}!function(e){e.WORKSPACES="workspaces",e.USERS="users",e.SETTINGS="settings"}(r||(r={}))},3849:function(e,n,t){"use strict";t(82684);var r=t(1210),o=t(49125),i=t(84392),c=t(9736),a=t(28598);n.Z=function(e){var n=e.before,t=e.breadcrumbs,s=void 0===t?[]:t,u=e.children,l=e.pageName,d=e.subheaderChildren,f=(0,c.PR)()||{};return(0,a.jsx)(r.Z,{before:n,beforeWidth:n?50*o.iI:0,breadcrumbs:s,navigationItems:(0,i.HF)(f,l),subheaderChildren:d,title:"Workspaces",uuid:"workspaces/index",children:u})}},86422:function(e,n,t){"use strict";t.d(n,{$W:function(){return h},DA:function(){return p},HX:function(){return O},J8:function(){return b},L8:function(){return c},Lq:function(){return d},M5:function(){return f},Qj:function(){return v},Ut:function(){return S},V4:function(){return R},VZ:function(){return m},dO:function(){return l},f2:function(){return A},iZ:function(){return x},t6:function(){return a},tf:function(){return u}});var r,o,i,c,a,s=t(82394);!function(e){e.CONDITION="condition",e.DBT_SNAPSHOT="snapshot",e.DYNAMIC="dynamic",e.DYNAMIC_CHILD="dynamic_child",e.REDUCE_OUTPUT="reduce_output",e.REPLICA="replica"}(c||(c={})),function(e){e.MARKDOWN="markdown",e.PYTHON="python",e.R="r",e.SQL="sql",e.YAML="yaml"}(a||(a={}));var u,l=(r={},(0,s.Z)(r,a.MARKDOWN,"MD"),(0,s.Z)(r,a.PYTHON,"PY"),(0,s.Z)(r,a.R,"R"),(0,s.Z)(r,a.SQL,"SQL"),(0,s.Z)(r,a.YAML,"YAML"),r);!function(e){e.CALLBACK="callback",e.CHART="chart",e.CONDITIONAL="conditional",e.CUSTOM="custom",e.DATA_EXPORTER="data_exporter",e.DATA_LOADER="data_loader",e.DBT="dbt",e.EXTENSION="extension",e.SCRATCHPAD="scratchpad",e.SENSOR="sensor",e.MARKDOWN="markdown",e.TRANSFORMER="transformer"}(u||(u={}));var d,f=[u.CALLBACK,u.CONDITIONAL,u.EXTENSION];!function(e){e.BLUE="blue",e.GREY="grey",e.PINK="pink",e.PURPLE="purple",e.TEAL="teal",e.YELLOW="yellow"}(d||(d={}));var p,h=[u.CHART,u.CUSTOM,u.DATA_EXPORTER,u.DATA_LOADER,u.SCRATCHPAD,u.SENSOR,u.MARKDOWN,u.TRANSFORMER],m=[u.DATA_EXPORTER,u.DATA_LOADER],b=[u.DATA_EXPORTER,u.DATA_LOADER,u.TRANSFORMER],O=[u.DATA_EXPORTER,u.DATA_LOADER,u.DBT,u.TRANSFORMER],v=[u.CHART,u.SCRATCHPAD,u.SENSOR,u.MARKDOWN],x=[u.CALLBACK,u.CHART,u.EXTENSION,u.SCRATCHPAD,u.MARKDOWN];!function(e){e.EXECUTED="executed",e.FAILED="failed",e.NOT_EXECUTED="not_executed",e.UPDATED="updated"}(p||(p={}));var A=[u.CUSTOM,u.DATA_EXPORTER,u.DATA_LOADER,u.TRANSFORMER],R=(o={},(0,s.Z)(o,u.EXTENSION,"Callback"),(0,s.Z)(o,u.CUSTOM,"Custom"),(0,s.Z)(o,u.DATA_EXPORTER,"Data exporter"),(0,s.Z)(o,u.DATA_LOADER,"Data loader"),(0,s.Z)(o,u.EXTENSION,"Extension"),(0,s.Z)(o,u.SCRATCHPAD,"Scratchpad"),(0,s.Z)(o,u.SENSOR,"Sensor"),(0,s.Z)(o,u.MARKDOWN,"Markdown"),(0,s.Z)(o,u.TRANSFORMER,"Transformer"),o),S=[u.DATA_LOADER,u.TRANSFORMER,u.DATA_EXPORTER,u.SENSOR];i={},(0,s.Z)(i,u.DATA_EXPORTER,"DE"),(0,s.Z)(i,u.DATA_LOADER,"DL"),(0,s.Z)(i,u.SCRATCHPAD,"SP"),(0,s.Z)(i,u.SENSOR,"SR"),(0,s.Z)(i,u.MARKDOWN,"MD"),(0,s.Z)(i,u.TRANSFORMER,"TF")},46983:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return W}});var r=t(77837),o=t(75582),i=t(38860),c=t.n(i),a=t(82684),s=t(83455),u=t(60328),l=t(47999),d=t(57722),f=t(67971),p=t(87372),h=t(11135),m=t(86673),b=t(58180),O=t(19711),v=t(82944),x=t(70902),A=t(82531),R=t(10503),S=t(86422),E=t(73899),T=t(99994),g=t(85307),Z=t(49125),_=t(96510),k=t(90211),C=t(28598);var w=function(e){var n=e.clusterType,t=e.fetchWorkspaces,r=(0,a.useState)(),i=r[0],c=r[1],u=(0,a.useState)(),l=u[0],w=u[1],j=(0,a.useState)(),D=j[0],P=j[1],y=(0,a.useState)(null),N=y[0],I=y[1],M=(0,a.useState)(),L=M[0],W=M[1],H=(0,a.useState)(),F=H[0],U=H[1],X=(0,s.Db)(A.ZP.workspaces.useCreate(),{onSuccess:function(e){return(0,_.wD)(e,{callback:function(e){e.success?(t(),c(!1)):w(e.error_message)},onErrorCallback:function(e){var n=e.error,t=n.errors,r=n.message;console.log(t,r)}})}}),K=(0,o.Z)(X,2),Y=K[0],B=K[1].isLoading,z=[[(0,C.jsx)(O.ZP,{bold:!0,color:E.cM,children:"Workspace name"},"workspace_name_label"),(0,C.jsx)(v.Z,{label:"ecs"===n?"Spaces will be replaced by underscores":"Spaces will be replaced by hyphens",monospace:!0,onChange:function(e){e.preventDefault(),W(e.target.value)},placeholder:"Name your new workspace",value:L},"workspace_name_input")]];return"k8s"===n&&z.push([(0,C.jsx)(O.ZP,{bold:!0,color:E.cM,children:"Service account name (optional)"},"service_account_name"),(0,C.jsx)(v.Z,{label:"Name of service account to be attached to stateful set",monospace:!0,onChange:function(e){e.preventDefault(),U(e.target.value)},placeholder:"Service account name",value:F},"service_account_name_label")]),(0,C.jsx)(C.Fragment,{children:i?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(p.Z,{default:!0,level:5,monospace:!0,children:"Configure your workspace"}),(0,C.jsx)(b.Z,{columnFlex:[null,3],rows:z}),"k8s"===n&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(m.Z,{mt:1,children:(0,C.jsxs)(f.Z,{alignItems:"center",children:[(0,C.jsx)(O.ZP,{default:!0,monospace:!0,children:"Configure container"}),(0,C.jsx)(m.Z,{ml:1}),(0,C.jsx)(x.Z,{checked:D,onCheck:function(){return P((function(e){return!e}))}})]})}),D&&(0,C.jsx)(m.Z,{mt:1,children:(0,C.jsx)(g.$W,{children:(0,C.jsx)(d.Z,{autoHeight:!0,language:S.t6.YAML,onChange:function(e){I(e)},tabSize:2,value:N||void 0,width:"100%"})})})]}),B&&(0,C.jsx)(m.Z,{mt:1,children:(0,C.jsx)(O.ZP,{small:!0,warning:!0,children:"This may take up to a few minutes... Once the service is created, it may take another 5-10 minutes for the service to be accessible."})}),!B&&l&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(m.Z,{mt:1,children:(0,C.jsx)(O.ZP,{danger:!0,small:!0,children:"Failed to create instance, see error below."})}),(0,C.jsx)(m.Z,{mt:1,children:(0,C.jsx)(O.ZP,{danger:!0,small:!0,children:l})})]}),(0,C.jsx)(m.Z,{my:2,children:(0,C.jsxs)(f.Z,{children:[(0,C.jsx)(h.ZP,{background:E.a$,bold:!0,inline:!0,loading:B,onClick:function(){return Y({workspace:{cluster_type:n,container_config:D&&N,name:(e=L,"ecs"===n?(0,k.We)(e,"_"):(0,k.We)(e,"-")),service_account_name:F}});var e},uuid:"workspaces/create",children:"Create"}),(0,C.jsx)(m.Z,{ml:1}),(0,C.jsx)(h.ZP,{bold:!0,inline:!0,onClick:function(){return c(!1)},uuid:"workspaces/cancel",children:"Cancel"})]})})]}):(0,C.jsx)(h.ZP,{background:T.eW,beforeElement:(0,C.jsx)(R.mm,{size:2.5*Z.iI}),bold:!0,inline:!0,onClick:function(){W((0,k.Y6)()),c(!0)},uuid:"workspaces/new",children:"Create new workspace"})})},j=t(62084),D=t(41788),P=t(3849),y=t(73942),N=t(65597),I=t(84392);function M(e){var n=e.fetchWorkspaces,t=e.instance,r=e.clusterType,i=(0,a.useRef)(null),c=(0,a.useState)(),d=c[0],p=c[1],h=(0,a.useState)(),b=h[0],v=h[1],x=t.name,S=(t.task_arn,{cluster_type:r}),E=(0,s.Db)(A.ZP.workspaces.useUpdate(x,S),{onSuccess:function(e){return(0,_.wD)(e,{callback:function(){n(),p(!1)},onErrorCallback:function(e){var n=e.error,t=n.errors,r=n.message;console.log(t,r)}})}}),T=(0,o.Z)(E,1)[0],g=(0,s.Db)(A.ZP.workspaces.useDelete(x,S),{onSuccess:function(e){return(0,_.wD)(e,{callback:function(){n(),p(!1)},onErrorCallback:function(e){var n=e.error,t=n.errors,r=n.message;console.log(t,r)}})}}),k=(0,o.Z)(g,1)[0],w=(0,a.useMemo)((function(){var e=t.status,n=[{label:function(){return(0,C.jsx)(O.ZP,{children:"Delete workspace"})},onClick:function(){return v(!0)},uuid:"delete_workspace"}];return"STOPPED"===e?n.unshift({label:function(){return(0,C.jsx)(O.ZP,{children:"Resume instance"})},onClick:function(){return T({workspace:{action:"resume",cluster_type:r,name:t.name,task_arn:t.task_arn}})},uuid:"resume_instance"}):"RUNNING"===e&&n.unshift({label:function(){return(0,C.jsx)(O.ZP,{children:"Stop instance"})},onClick:function(){return T({workspace:{action:"stop",cluster_type:r,name:t.name,task_arn:t.task_arn}})},uuid:"stop_instance"}),n}),[r,t,T]);return(0,C.jsx)(C.Fragment,{children:"ecs"===r&&(0,C.jsxs)("div",{ref:i,style:{position:"relative",zIndex:"1"},children:[(0,C.jsx)(u.Z,{iconOnly:!0,onClick:function(){return p(!d)},children:(0,C.jsx)(R.mH,{size:2*Z.iI})}),(0,C.jsx)(l.Z,{disableEscape:!0,onClickOutside:function(){p(!1),v(!1)},open:d,children:b?(0,C.jsxs)(N.f,{leftOffset:30*-Z.iI,topOffset:3*-Z.iI,width:30*Z.iI,children:[(0,C.jsx)(O.ZP,{children:"Are you sure you want to delete"}),(0,C.jsx)(O.ZP,{children:"this instance? You may not be"}),(0,C.jsx)(O.ZP,{children:"able to recover your data."}),(0,C.jsx)(m.Z,{mt:1}),(0,C.jsxs)(f.Z,{children:[(0,C.jsx)(u.Z,{danger:!0,onClick:k,children:"Confirm"}),(0,C.jsx)(m.Z,{ml:1}),(0,C.jsx)(u.Z,{default:!0,onClick:function(){return v(!1)},children:"Cancel"})]})]}):(0,C.jsx)(j.Z,{items:w,left:25*-Z.iI,open:d,parentRef:i,topOffset:3*-Z.iI,uuid:"workspaces/more_actions",width:25*Z.iI})})]})})}function L(){var e=A.ZP.statuses.list().data,n=(0,a.useMemo)((function(){var n,t;return(null===e||void 0===e||null===(n=e.statuses)||void 0===n||null===(t=n[0])||void 0===t?void 0:t.instance_type)||"ecs"}),[e]),t=A.ZP.workspaces.list({cluster_type:n},{refreshInterval:5e3,revalidateOnFocus:!0}),r=t.data,o=t.mutate,i=(0,a.useMemo)((function(){var e;return null===r||void 0===r||null===(e=r.workspaces)||void 0===e?void 0:e.filter((function(e){return e.name}))}),[r]);return(0,C.jsx)(P.Z,{breadcrumbs:[{bold:!0,label:function(){return"Workspaces"}}],pageName:I.L6.WORKSPACES,subheaderChildren:(0,C.jsx)(w,{clusterType:n,fetchWorkspaces:o}),children:(0,C.jsx)(b.Z,{columnFlex:[2,4,2,3,1,null],columns:[{uuid:"Status"},{uuid:"Instance Name"},{uuid:"Type"},{uuid:"Public IP address"},{uuid:"Open"},{label:function(){return""},uuid:"Actions"}],rows:null===i||void 0===i?void 0:i.map((function(e){var t=e.instance,r=t.ip,i=t.name,c=t.status,a=t.type,s="http://".concat(r);return"ecs"===n&&(s="http://".concat(r,":6789")),[(0,C.jsx)(u.Z,{borderRadius:y.D7,danger:"STOPPED"===c,default:"PROVISIONING"===c,notClickable:!0,padding:"6px",primary:"RUNNING"===c,warning:"PENDING"===c,children:(0,k.vg)(c)},"status"),(0,C.jsx)(O.ZP,{children:i},"name"),(0,C.jsx)(O.ZP,{children:(0,k.vg)(a)},"type"),(0,C.jsx)(O.ZP,{children:r},"ip"),(0,C.jsx)(u.Z,{iconOnly:!0,onClick:function(){return window.open(s)},children:(0,C.jsx)(R.M0,{size:2*Z.iI})},"open_button"),(0,C.jsx)(M,{clusterType:n,fetchWorkspaces:o,instance:t},"more_actions")]}))})})}L.getInitialProps=(0,r.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)})));var W=(0,D.Z)(L)},13157:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manage",function(){return t(46983)}])}},function(e){e.O(0,[844,7607,8789,1424,1005,8180,9270,9774,2888,179],(function(){return n=13157,e(e.s=n);var n}));var n=e.O();_N_E=n}]);