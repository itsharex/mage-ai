(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6780],{74395:function(e,n,t){"use strict";t.d(n,{M:function(){return a},W:function(){return l}});var r=t(38626),i=t(46684),l=34*t(70515).iI,a=r.default.div.withConfig({displayName:"indexstyle__BeforeStyle",componentId:"sc-12ee2ib-0"})(["min-height:calc(100vh - ","px);"],i.Mz)},8955:function(e,n,t){"use strict";t.d(n,{G7:function(){return P},ZP:function(){return O},u$:function(){return x}});var r=t(75582),i=t(82394),l=t(26304),a=t(90299),c=t(9134),s=t(24138),o=t(38276),u=t(30160),d=t(75499),p=t(70515),f=t(16488),b=t(42122),v=t(28598),h=["height","heightOffset","pipeline","selectedRun","selectedTab","setSelectedTab"];function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function j(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var x=44,g={uuid:"Run details"},Z={uuid:"Dependency tree"},P=[Z,g];function O(e){var n=e.height,t=e.heightOffset,i=e.pipeline,m=e.selectedRun,O=e.selectedTab,y=e.setSelectedTab,k=j({},(0,l.Z)(e,h));m?k.blockStatus=(0,f.IJ)(null===m||void 0===m?void 0:m.block_runs):k.noStatus=!0;var _=(0,b.Kn)(null===m||void 0===m?void 0:m.variables)?j({},null===m||void 0===m?void 0:m.variables):(null===m||void 0===m?void 0:m.variables)||{},w=null===m||void 0===m?void 0:m.event_variables;if(w&&(0,b.Kn)(w)&&!(0,b.Qr)(w))if((0,b.Kn)(_)&&_.hasOwnProperty("event")){var I=(0,b.Kn)(_.event)?_.event:{};_.event=j(j({},I),w)}else _.event=j({},w);var S=[];_&&JSON.stringify(_,null,2).split("\n").forEach((function(e){S.push("    ".concat(e))}));var D=m&&[["Run ID",null===m||void 0===m?void 0:m.id],["Variables",(0,v.jsx)(c.Z,{language:"json",small:!0,source:S.join("\n")},"variable_value")]],C=m&&(0,v.jsx)(o.Z,{pb:p.cd,px:p.cd,children:(0,v.jsx)(d.Z,{alignTop:!0,columnFlex:[null,1],columnMaxWidth:function(e){return 1===e?"100px":null},rows:D.map((function(e,n){var t=(0,r.Z)(e,2),i=t[0],l=t[1];return[(0,v.jsx)(u.ZP,{monospace:!0,muted:!0,children:i},"key_".concat(n)),(0,v.jsx)(u.ZP,{monospace:!0,textOverflow:!0,children:l},"val_".concat(n))]})),uuid:"LogDetail"})}),E=O&&y;return(0,v.jsxs)(v.Fragment,{children:[E&&(0,v.jsx)(o.Z,{py:p.cd,children:(0,v.jsx)(a.Z,{onClickTab:y,selectedTabUUID:null===O||void 0===O?void 0:O.uuid,tabs:P,underlineStyle:!0})}),(!E||Z.uuid===(null===O||void 0===O?void 0:O.uuid))&&(0,v.jsx)(s.ZP,j(j({},k),{},{height:n,heightOffset:(t||0)+(E?x:0),pipeline:i})),g.uuid===(null===O||void 0===O?void 0:O.uuid)&&C]})}},8916:function(e,n,t){"use strict";t.d(n,{FS:function(){return o},JZ:function(){return p},Tt:function(){return d},e7:function(){return f},wx:function(){return u}});var r=t(75582),i=t(82394),l=t(83784),a=t(30229);function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e){return"string"===typeof e?e:JSON.stringify(e)}function u(e,n){var t,r;return null===e||void 0===e||null===(t=e.find((function(e){var t=e.block;return n(t)})))||void 0===t||null===(r=t.variables)||void 0===r?void 0:r.map((function(e){var n=e.value;return s(s({},e),{},{value:o(n)})}))}function d(e){var n;return null===(n=u(e,(function(e){return e.uuid===l.C})))||void 0===n?void 0:n.reduce((function(e,n){var t=n.uuid,r=n.value;return s(s({},e),{},(0,i.Z)({},t,r))}),{})}function p(e,n){return n===a.Xm.TIME?e.push({uuid:"execution_date",value:"<run datetime>"}):n===a.Xm.EVENT&&e.push({uuid:"event",value:"<trigger event>"}),e}function f(e){return e?Object.entries(e).reduce((function(e,n){var t=(0,r.Z)(n,2),l=t[0],a=t[1],c=a;try{c=JSON.parse(a)}catch(o){}return s(s({},e),{},(0,i.Z)({},l,c))}),{}):e}},88785:function(e,n,t){"use strict";t.d(n,{J:function(){return s},U:function(){return c}});var r=t(38626),i=t(44897),l=t(42631),a=t(70515),c=r.default.div.withConfig({displayName:"indexstyle__CardStyle",componentId:"sc-m7tlau-0"})(["border-radius:","px;border-style:solid;border-width:2px;height:","px;margin-right:","px;padding:","px;width:","px;"," ",""],l.TR,14*a.iI,a.cd*a.iI,a.cd*a.iI,40*a.iI,(function(e){return!e.selected&&"\n    border-color: ".concat((e.theme.borders||i.Z.borders).light,";\n  ")}),(function(e){return e.selected&&"\n    border-color: ".concat((e.theme.interactive||i.Z.interactive).linkPrimary,";\n  ")})),s=r.default.div.withConfig({displayName:"indexstyle__DateSelectionContainer",componentId:"sc-m7tlau-1"})(["border-radius:","px;padding:","px;"," "," ",""],l.n_,a.tr,(function(e){return"\n    background-color: ".concat((e.theme.interactive||i.Z.interactive).defaultBackground,";\n  ")}),(function(e){return e.absolute&&"\n    position: absolute;\n    z-index: 2;\n    right: 0;\n    top: ".concat(2.5*a.iI,"px;\n  ")}),(function(e){return e.topPosition&&"\n    top: -".concat(42*a.iI,"px;\n  ")}))},37899:function(e,n,t){"use strict";var r=t(82394),i=t(75582),l=t(82684),a=t(71180),c=t(15338),s=t(97618),o=t(55485),u=t(38276),d=t(75499),p=t(30160),f=t(35576),b=t(17488),v=t(72473),h=t(70515),m=t(42122),j=t(81728),x=t(28598);function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){e.borderless,e.compact;var n=e.enableVariablesOverwrite,t=e.originalVariables,g=e.runtimeVariables,P=(e.setEnableVariablesOverwrite,e.setRuntimeVariables),O=(0,l.useState)({}),y=O[0],k=O[1],_=(0,l.useState)(null),w=_[0],I=_[1],S=(0,l.useState)(null),D=S[0],C=S[1];(0,l.useEffect)((function(){var e=Object.entries(g||{}).reduce((function(e,n){var t=(0,i.Z)(n,2),l=t[0],a=t[1],c=(0,j.Pb)(a)&&"object"===typeof JSON.parse(a)&&!Array.isArray(JSON.parse(a))&&null!==JSON.parse(a);return Z(Z({},e),{},(0,r.Z)({},l,c))}),{});k(e)}),[]);var E=function(e,n){var t={borderless:!0,key:"variable_uuid_input_".concat(e),monospace:!0,onChange:function(n){n.preventDefault(),P((function(t){return Z(Z({},t),{},(0,r.Z)({},e,n.target.value))}))},paddingHorizontal:0,placeholder:"Variable value",value:n};return y[e]?(0,x.jsx)(f.Z,Z(Z({},t),{},{rows:1,value:n})):(0,x.jsx)(b.Z,Z({},t))};return(0,x.jsxs)(x.Fragment,{children:[n&&g&&Object.entries(g).length>0&&(0,x.jsx)(d.Z,{columnFlex:[null,1,null],columns:[{uuid:"Variable"},{uuid:"Value"},{label:function(){return""},uuid:"Action"}],rows:Object.entries(g).map((function(e){var n=(0,i.Z)(e,2),r=n[0],l=n[1];return[(0,x.jsx)(p.ZP,{default:!0,monospace:!0,children:r},"variable_".concat(r)),E(r,l),!(null!==t&&void 0!==t&&t[r])&&(0,x.jsx)(a.ZP,{iconOnly:!0,onClick:function(){P((function(e){return(0,m.gR)(e,[r])}))},children:(0,x.jsx)(v.rF,{default:!0})})]}))}),(0,x.jsx)(u.Z,{p:h.cd,children:(0,x.jsxs)(o.ZP,{alignItems:"center",children:[(0,x.jsx)(s.Z,{flex:1,children:(0,x.jsx)(b.Z,{fullWidth:!0,monospace:!0,onChange:function(e){return I(e.target.value)},placeholder:"New variable UUID",value:w||""})}),(0,x.jsx)(u.Z,{mr:1}),(0,x.jsx)(s.Z,{flex:1,children:(0,x.jsx)(b.Z,{fullWidth:!0,monospace:!0,onChange:function(e){return C(e.target.value)},placeholder:"Variable value",value:D||""})}),(0,x.jsx)(u.Z,{mr:1}),(0,x.jsx)(a.ZP,{beforeIcon:(0,x.jsx)(v.mm,{}),disabled:!w||!D,onClick:function(){P((function(e){return Z(Z({},e),{},(0,r.Z)({},w,D))})),I(null),C(null)},children:"Add runtime variable"})]})}),(0,x.jsx)(c.Z,{light:!0})]})}},55072:function(e,n,t){"use strict";t.d(n,{Et:function(){return p},Q:function(){return d}});t(82684);var r=t(71180),i=t(55485),l=t(38276),a=t(31748),c=t(72473),s=t(79633),o=t(70515),u=t(28598),d=30,p=9;n.ZP=function(e){var n=e.page,t=e.maxPages,d=e.onUpdate,p=e.totalPages,f=[],b=t;if(b>p)f=Array.from({length:p},(function(e,n){return n}));else{var v=Math.floor(b/2),h=n-v;n+v>=p?(h=p-b+2,b-=2):n-v<=0?(h=0,b-=2):(b-=4,h=n-Math.floor(b/2)),f=Array.from({length:b},(function(e,n){return n+h}))}return(0,u.jsx)(u.Fragment,{children:p>0&&(0,u.jsxs)(i.ZP,{alignItems:"center",children:[(0,u.jsx)(r.ZP,{disabled:0===n,onClick:function(){return d(n-1)},children:(0,u.jsx)(c.Hd,{size:1.5*o.iI,stroke:a.Av})}),!f.includes(0)&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l.Z,{ml:1,children:(0,u.jsx)(r.ZP,{borderLess:!0,noBackground:!0,onClick:function(){return d(0)},children:1})},0),!f.includes(1)&&(0,u.jsx)(l.Z,{ml:1,children:(0,u.jsx)(r.ZP,{noBackground:!0,noPadding:!0,notClickable:!0,children:"..."})},0)]}),f.map((function(e){return(0,u.jsx)(l.Z,{ml:1,children:(0,u.jsx)(r.ZP,{backgroundColor:e===n&&s.a$,borderLess:!0,noBackground:!0,notClickable:e===n,onClick:function(){e!==n&&d(e)},children:e+1})},e)})),!f.includes(p-1)&&(0,u.jsxs)(u.Fragment,{children:[!f.includes(p-2)&&(0,u.jsx)(l.Z,{ml:1,children:(0,u.jsx)(r.ZP,{noBackground:!0,noPadding:!0,notClickable:!0,children:"..."})},0),(0,u.jsx)(l.Z,{ml:1,children:(0,u.jsx)(r.ZP,{borderLess:!0,noBackground:!0,onClick:function(){return d(p-1)},children:p})},p-1)]}),(0,u.jsx)(l.Z,{ml:1}),(0,u.jsx)(r.ZP,{disabled:n===p-1,onClick:function(){return d(n+1)},children:(0,u.jsx)(c.Kw,{size:1.5*o.iI,stroke:a.Av})})]})})}},83641:function(e,n,t){"use strict";t.d(n,{I7:function(){return r},IB:function(){return s},VV:function(){return l},_7:function(){return a},rn:function(){return c}});var r,i=t(41143),l="datetime",a="code",c=i.V;!function(e){e.SECOND="second",e.MINUTE="minute",e.HOUR="hour",e.DAY="day",e.WEEK="week",e.MONTH="month",e.YEAR="year",e.CUSTOM="custom"}(r||(r={}));var s=[r.MINUTE,r.HOUR,r.DAY,r.WEEK,r.MONTH,r.YEAR,r.CUSTOM]},83784:function(e,n,t){"use strict";t.d(n,{C:function(){return r}});var r="global"},14805:function(e,n,t){"use strict";var r=t(82394),i=t(44495),l=t(55485),a=t(44085),c=t(38276),s=t(30160),o=t(88785),u=t(70515),d=t(86735),p=t(28598);function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.localTime,t=e.selectedDate,r=e.selectedTime,f=e.setSelectedDate,v=e.setSelectedTime,h=e.topPosition;return(0,p.jsxs)(o.J,{absolute:!0,topPosition:h,children:[(0,p.jsx)(i.ZP,{onChange:f,value:t}),(0,p.jsx)(c.Z,{mb:2}),(0,p.jsxs)(l.ZP,{alignItems:"center",children:[(0,p.jsxs)(s.ZP,{default:!0,large:!0,children:["Time (",n?"Local":"UTC","):"]}),(0,p.jsx)(c.Z,{pr:2}),(0,p.jsx)(a.Z,{compact:!0,monospace:!0,onChange:function(e){e.preventDefault(),v((function(n){return b(b({},n),{},{hour:e.target.value})}))},paddingRight:5*u.iI,placeholder:"HH",value:null===r||void 0===r?void 0:r.hour,children:(0,d.m5)(24,0).map((function(e){return String(e).padStart(2,"0")})).map((function(e){return(0,p.jsx)("option",{value:e,children:e},"hour_".concat(e))}))}),(0,p.jsx)(c.Z,{px:1,children:(0,p.jsx)(s.ZP,{bold:!0,large:!0,children:":"})}),(0,p.jsx)(a.Z,{compact:!0,monospace:!0,onChange:function(e){e.preventDefault(),v((function(n){return b(b({},n),{},{minute:e.target.value})}))},paddingRight:5*u.iI,placeholder:"MM",value:null===r||void 0===r?void 0:r.minute,children:(0,d.m5)(60,0).map((function(e){return String(e).padStart(2,"0")})).map((function(e){return(0,p.jsx)("option",{value:e,children:e},"minute_".concat(e))}))})]})]})}},79500:function(e,n,t){"use strict";t.d(n,{a:function(){return l}});var r=t(16488),i=t(3917);function l(e,n){var t,l;if(null!==n&&void 0!==n&&n.localTimezone)t=(0,i.n$)(e),l={hour:(0,i.lJ)(String(t.getHours())),minute:(0,i.lJ)(String(t.getMinutes()))};else{var a=e.split(" ")[1];t=(0,r.eI)(e),l={hour:a.substring(0,2),minute:a.substring(3,5)}}return{date:t,time:l}}},9134:function(e,n,t){"use strict";var r=t(82684),i=t(21124),l=t(68432),a=t(38626),c=t(65292),s=t(44897),o=t(95363),u=t(70515),d=t(28598);n.Z=function(e){var n=e.language,t=e.maxWidth,p=e.showLineNumbers,f=e.small,b=e.source,v=e.wrapLines,h=(0,r.useContext)(a.ThemeContext);function m(e){var r=e.value;return(0,d.jsx)(l.Z,{customStyle:{backgroundColor:(h.background||s.Z.background).popup,border:"none",borderRadius:"none",boxShadow:"none",fontFamily:o.Vp,fontSize:f?12:14,marginBottom:0,marginTop:0,maxWidth:t,paddingBottom:2*u.iI,paddingTop:2*u.iI},language:n,lineNumberStyle:{color:(h.content||s.Z.content).muted},showLineNumbers:p,style:c._4,useInlineStyles:!0,wrapLines:v,children:r})}return(0,d.jsx)(i.D,{components:{code:function(e){var n=e.children;return(0,d.jsx)(m,{value:n})}},children:b})}},51532:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return se}});var r=t(75582),i=t(77837),l=t(82394),a=t(38860),c=t.n(a),s=t(82684),o=t(69864),u=t(34376),d=t(83641),p=t(71180),f=t(15338),b=t(55485),v=t(85854),h=t(55072),m=t(75457),j=t(53943),x=t(44265),g=t(83784),Z=t(44085),P=t(38276),O=t(4190),y=t(75499),k=t(30160),_=t(35686),w=t(8955),I=t(72473),S=t(74395),D=t(70515),C=t(28795),E=t(81728),T=t(16488),M=t(8916),N=t(81655),L=t(15610),F=t(42122),A=t(50178),U=t(72619),R=t(3314),V=t(69419),B=t(70320),H=t(28598);function z(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function J(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?z(Object(t),!0).forEach((function(n){(0,l.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):z(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Y=function(e){var n=e.backfill,t=e.errors,i=e.fetchBackfill,l=e.pipeline,a=e.setErrors,c=e.variables,z=(0,A.Ct)(),Y=(0,B.qB)(),K=(0,u.useRouter)(),W=n||{},X=W.block_uuid,q=W.end_datetime,Q=W.id,G=W.interval_type,$=W.interval_units,ee=W.name,ne=W.pipeline_run_dates,te=W.start_datetime,re=W.status,ie=W.total_run_count,le=W.variables,ae=void 0===le?{}:le,ce=l.uuid,se=(0,V.iV)(),oe={_limit:40,_offset:40*(null!==se&&void 0!==se&&se.page?se.page:0)};null!==se&&void 0!==se&&se.status&&(oe.status=se.status);var ue=_.ZP.pipeline_runs.list(J(J({},oe),{},{backfill_id:Q}),{refreshInterval:3e3,revalidateOnFocus:!0},{pauseFetch:!Q}),de=ue.data,pe=ue.mutate,fe=!(te&&q&&G&&$),be=!re,ve=(0,s.useMemo)((function(){return(be?ne:null===de||void 0===de?void 0:de.pipeline_runs)||[]}),[de,ne,be]),he=(0,s.useMemo)((function(){var e;return(null===de||void 0===de||null===(e=de.metadata)||void 0===e?void 0:e.count)||[]}),[de]),me=(0,s.useState)(null),je=me[0],xe=me[1],ge=(0,s.useMemo)((function(){var e=null!==se&&void 0!==se&&se.page?se.page:0;return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(j.Z,{disableRowSelect:be,emptyMessage:null!==se&&void 0!==se&&se.status?"No runs available":'No runs available. Please complete backfill configuration by clicking "Edit backfill" above.',fetchPipelineRuns:pe,onClickRow:function(e){return xe((function(n){var t=ve[e];return(null===n||void 0===n?void 0:n.id)!==t.id?t:null}))},pipelineRuns:ve,selectedRun:je,setErrors:a,setSelectedRun:xe}),(0,H.jsx)(P.Z,{p:2,children:(0,H.jsx)(h.ZP,{maxPages:9,onUpdate:function(e){var n=Number(e),t=J(J({},se),{},{page:n>=0?n:0});K.push("/pipelines/[pipeline]/backfills/[...slug]","/pipelines/".concat(ce,"/backfills/").concat(Q,"?").concat((0,V.uM)(t)))},page:Number(e),totalPages:Math.ceil(he/40)})})]})}),[pe,Q,ve,ce,se,K,je,a,be,he]),Ze=(0,s.useState)(w.G7[0]),Pe=Ze[0],Oe=Ze[1],ye=(0,o.Db)(_.ZP.backfills.useUpdate(Q),{onSuccess:function(e){return(0,U.wD)(e,{callback:function(){i(),pe()},onErrorCallback:function(e,n){return a({errors:n,response:e})}})}}),ke=(0,r.Z)(ye,2),_e=ke[0],we=ke[1].isLoading,Ie=(0,s.useMemo)((function(){return!!re&&(d.rn.CANCELLED!==re&&d.rn.FAILED!==re)}),[re]),Se=(0,s.useMemo)((function(){return re&&d.rn.CANCELLED!==re&&d.rn.FAILED!==re&&d.rn.INITIAL!==re&&d.rn.RUNNING!==re}),[re]),De=(0,s.useMemo)((function(){var e={default:!0,size:1.5*D.iI},n=[[(0,H.jsxs)(b.ZP,{alignItems:"center",children:[(0,H.jsx)(I.VW,J({},e)),(0,H.jsx)(P.Z,{mr:1}),(0,H.jsx)(k.ZP,{default:!0,children:"Backfill type"})]},"backfill_type_label"),(0,H.jsx)(k.ZP,{monospace:!0,children:X?d._7:d.VV},"backfill_type")],[(0,H.jsxs)(b.ZP,{alignItems:"center",children:[(0,H.jsx)(I.rs,J({},e)),(0,H.jsx)(P.Z,{mr:1}),(0,H.jsx)(k.ZP,{default:!0,children:"Status"})]},"backfill_status_label"),(0,s.createElement)(k.ZP,J(J({},(0,N.NC)(re)),{},{key:"backfill_status"}),re||"inactive")]];return X||n.push.apply(n,[[(0,H.jsxs)(b.ZP,{alignItems:"center",children:[(0,H.jsx)(I.aw,J({},e)),(0,H.jsx)(P.Z,{mr:1}),(0,H.jsx)(k.ZP,{default:!0,children:"Start date and time"})]},"backfill_start_date_label"),(0,H.jsx)(k.ZP,{monospace:!0,small:!0,children:(0,T.Uc)(te,Y)},"backfill_start_date")],[(0,H.jsxs)(b.ZP,{alignItems:"center",children:[(0,H.jsx)(I.aw,J({},e)),(0,H.jsx)(P.Z,{mr:1}),(0,H.jsx)(k.ZP,{default:!0,children:"End date and time"})]},"backfill_end_date_label"),(0,H.jsx)(k.ZP,{monospace:!0,small:!0,children:(0,T.Uc)(q,Y)},"backfill_end_date")],[(0,H.jsxs)(b.ZP,{alignItems:"center",children:[(0,H.jsx)(I.Pf,J({},e)),(0,H.jsx)(P.Z,{mr:1}),(0,H.jsx)(k.ZP,{default:!0,children:"Interval type"})]},"interval_type_label"),(0,H.jsx)(k.ZP,{monospace:!0,children:G&&(0,E.kC)(G)},"interval_type")],[(0,H.jsxs)(b.ZP,{alignItems:"center",children:[(0,H.jsx)(I.Pf,J({},e)),(0,H.jsx)(P.Z,{mr:1}),(0,H.jsx)(k.ZP,{default:!0,children:"Interval units"})]},"interval_units_label"),(0,H.jsx)(k.ZP,{monospace:!0,children:$},"interval_units")],[(0,H.jsxs)(b.ZP,{alignItems:"center",children:[(0,H.jsx)(I.qZ,J({},e)),(0,H.jsx)(P.Z,{mr:1}),(0,H.jsx)(k.ZP,{default:!0,children:"Total runs"})]},"total_runs_label"),(0,H.jsx)(k.ZP,{monospace:!0,children:ie},"total_runs")]]),(0,H.jsx)(y.Z,{columnFlex:[null,1],rows:n})}),[X,Y,q,G,$,te,re,ie]),Ce=(0,s.useMemo)((function(){return ae||{}}),[ae]),Ee=(0,s.useMemo)((function(){var e=(0,M.wx)(c,(function(e){return e.uuid===g.C}))||[];return(0,F.Qr)(Ce)||Object.entries(Ce).forEach((function(n){var t=(0,r.Z)(n,2),i=t[0],l=t[1],a=e.findIndex((function(e){return(null===e||void 0===e?void 0:e.uuid)===i}));-1!==a?e.splice(a,1,{uuid:i,value:(0,M.FS)(l)}):e.push({uuid:i,value:(0,M.FS)(l)})})),"undefined"!==typeof e&&null!==e&&void 0!==e&&e.length?(0,H.jsx)(y.Z,{columnFlex:[null,1],rows:e.map((function(e){var n=e.uuid,t=e.value;return[(0,H.jsx)(k.ZP,{default:!0,monospace:!0,small:!0,children:n},"settings_variable_label_".concat(n)),(0,H.jsx)(k.ZP,{monospace:!0,small:!0,children:t},"settings_variable_".concat(n))]}))}):null}),[Ce,c]);return(0,H.jsx)(H.Fragment,{children:(0,H.jsxs)(m.Z,{afterHidden:!je,before:(0,H.jsxs)(S.M,{children:[(0,H.jsxs)(P.Z,{mb:D.HN,pt:D.cd,px:D.cd,children:[(0,H.jsx)(P.Z,{mb:D.cd,children:(0,H.jsx)(I.yg,{size:5*D.iI})}),(0,H.jsx)(v.Z,{children:ee})]}),(0,H.jsx)(P.Z,{px:D.cd,children:(0,H.jsx)(v.Z,{level:5,children:"Settings"})}),(0,H.jsx)(f.Z,{light:!0,mt:1,short:!0}),De,Ee&&(0,H.jsxs)(P.Z,{my:D.HN,children:[(0,H.jsx)(P.Z,{px:D.cd,children:(0,H.jsx)(v.Z,{level:5,children:"Runtime variables"})}),(0,H.jsx)(f.Z,{light:!0,mt:1,short:!0}),Ee]})]}),beforeWidth:34*D.iI,breadcrumbs:[{label:function(){return"Backfills"},linkProps:{as:"/pipelines/".concat(ce,"/backfills"),href:"/pipelines/[pipeline]/backfills"}},{label:function(){return ee},linkProps:{as:"/pipelines/".concat(ce,"/backfills/").concat(Q),href:"/pipelines/[pipeline]/backfills/[...slug]"}}],buildSidekick:function(e){return(0,w.ZP)(J(J({},e),{},{selectedRun:je,selectedTab:Pe,setSelectedTab:Oe}))},errors:t,pageName:C.M.BACKFILLS,pipeline:l,setErrors:a,subheader:(0,H.jsxs)(b.ZP,{alignItems:"center",children:[!Se&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(p.ZP,{beforeIcon:Ie?(0,H.jsx)(I.dz,{size:2*D.iI}):(0,H.jsx)(I.Py,{inverted:!(d.rn.CANCELLED===re||d.rn.FAILED===re),size:2*D.iI}),danger:Ie,disabled:fe,loading:we,onClick:function(e){(0,R.j)(e),_e({backfill:{status:Ie?d.rn.CANCELLED:d.rn.INITIAL}})},outline:!0,success:!Ie&&!(d.rn.CANCELLED===re||d.rn.FAILED===re)&&!fe,children:Ie?"Cancel backfill":d.rn.CANCELLED===re||d.rn.FAILED===re?"Retry backfill":"Start backfill"}),(0,H.jsx)(P.Z,{mr:D.cd})]}),!z&&(0,H.jsxs)(H.Fragment,{children:[re===x.VO.COMPLETED?(0,H.jsx)(k.ZP,{bold:!0,default:!0,large:!0,children:"Filter runs by status:"}):(0,H.jsx)(p.ZP,{linkProps:{as:"/pipelines/".concat(ce,"/backfills/").concat(Q,"/edit"),href:"/pipelines/[pipeline]/backfills/[...slug]"},noHoverUnderline:!0,outline:!0,sameColorAsText:!0,children:"Edit backfill"}),(0,H.jsx)(P.Z,{mr:D.cd})]}),!be&&(0,H.jsxs)(Z.Z,{compact:!0,defaultColor:!0,onChange:function(e){e.preventDefault(),"all"===e.target.value?K.push("/pipelines/[pipeline]/backfills/[...slug]","/pipelines/".concat(ce,"/backfills/").concat(Q)):(0,L.u7)({page:0,status:e.target.value})},paddingRight:4*D.iI,placeholder:"Select run status",value:(null===se||void 0===se?void 0:se.status)||"all",children:[(0,H.jsx)("option",{value:"all",children:"All statuses"},"all_statuses"),x.IK.map((function(e){return(0,H.jsx)("option",{value:e,children:x.Do[e]},e)}))]})]}),title:function(){return ee},uuid:"backfill/detail",children:[(0,H.jsx)(P.Z,{mt:D.cd,px:D.cd,children:(0,H.jsx)(v.Z,{level:5,children:"Runs for this backfill"})}),(0,H.jsx)(f.Z,{light:!0,mt:D.cd,short:!0}),de?ge:(0,H.jsx)(P.Z,{m:2,children:(0,H.jsx)(O.Z,{inverted:!0})})]})})},K=t(14805),W=t(50724),X=t(97618),q=t(37899),Q=t(17488),G=[{label:function(){return"Date and time window"},description:function(){return"Backfill between a date and time range."},uuid:d.VV}],$=t(88785),ee=t(79500);function ne(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function te(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ne(Object(t),!0).forEach((function(n){(0,l.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ne(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var re=function(e){var n=e.backfill,t=e.errors,i=e.fetchBackfill,l=e.pipeline,a=e.setErrors,c=e.variables,h=(0,u.useRouter)(),j=(0,B.qB)(),x=(0,s.useState)(),g=x[0],O=x[1],w=g||{},S=w.block_uuid,N=w.id,L=w.interval_type,A=w.interval_units,R=w.name,V=l.uuid,z=(0,s.useMemo)((function(){return(0,F.Qr)((null===n||void 0===n?void 0:n.variables)||{})?(0,M.Tt)(c)||{}:(0,F.Xc)(n.variables,(function(e){return(0,M.FS)(e)}))}),[null===n||void 0===n?void 0:n.variables,c]),J=(0,s.useState)(!1),Y=J[0],ne=J[1],re=(0,s.useState)(z),ie=re[0],le=re[1],ae=(0,s.useState)(S?d._7:d.VV),ce=ae[0],se=ae[1],oe=(0,s.useState)(!1),ue=oe[0],de=oe[1],pe=(0,s.useState)(!1),fe=pe[0],be=pe[1],ve=(0,s.useState)(null),he=ve[0],me=ve[1],je=(0,s.useState)(null),xe=je[0],ge=je[1],Ze=(0,s.useState)({hour:"00",minute:"00"}),Pe=Ze[0],Oe=Ze[1],ye=(0,s.useState)({hour:"00",minute:"00"}),ke=ye[0],_e=ye[1];(0,s.useEffect)((function(){if(n){O(n);var e=n.start_datetime;if(e){var t=(0,ee.a)(e,{localTimezone:j});ge(null===t||void 0===t?void 0:t.date),_e(t.time)}var r=n.end_datetime;if(r){var i=(0,ee.a)(r,{localTimezone:j});me(null===i||void 0===i?void 0:i.date),Oe(null===i||void 0===i?void 0:i.time)}}}),[j,n]);var we=(0,s.useMemo)((function(){var e=[[(0,H.jsxs)(b.ZP,{alignItems:"center",children:[(0,H.jsx)(I.KJ,{default:!0}),(0,H.jsx)(P.Z,{mr:1}),(0,H.jsx)(k.ZP,{default:!0,children:"Backfill name"})]},"model_name_detail"),(0,H.jsx)(Q.Z,{monospace:!0,onChange:function(e){e.preventDefault(),O((function(n){return te(te({},n),{},{name:e.target.value})}))},placeholder:"Name this backfill",value:R},"model_name_input_detail")]];return d.VV===ce&&e.push.apply(e,[[(0,H.jsxs)(b.ZP,{alignItems:"center",children:[(0,H.jsx)(I.aw,{default:!0}),(0,H.jsx)(P.Z,{mr:1}),(0,H.jsx)(k.ZP,{default:!0,children:"Start date and time"})]},"start_time"),(0,H.jsxs)("div",{style:{minHeight:"".concat(5.75*D.iI,"px")},children:[!ue&&(0,H.jsx)(Q.Z,{monospace:!0,onClick:function(){return de((function(e){return!e}))},onFocus:function(){return de(!0)},placeholder:"YYYY-MM-DD HH:MM",value:xe?(0,T.XM)(xe,ke,{localTimezone:j}):""}),(0,H.jsx)("div",{style:{width:"400px"},children:(0,H.jsx)(W.Z,{disableEscape:!0,onClickOutside:function(){return de(!1)},open:ue,style:{position:"relative"},children:(0,H.jsx)(K.Z,{localTime:j,selectedDate:xe,selectedTime:ke,setSelectedDate:ge,setSelectedTime:_e,topPosition:!0})})})]},"start_time_input")],[(0,H.jsxs)(b.ZP,{alignItems:"center",children:[(0,H.jsx)(I.aw,{default:!0}),(0,H.jsx)(P.Z,{mr:1}),(0,H.jsx)(k.ZP,{default:!0,children:"End date and time"})]},"end_time"),(0,H.jsxs)("div",{style:{minHeight:"".concat(5.75*D.iI,"px")},children:[!fe&&(0,H.jsx)(Q.Z,{monospace:!0,onClick:function(){return be((function(e){return!e}))},onFocus:function(){return be(!0)},placeholder:"YYYY-MM-DD HH:MM",value:he?(0,T.XM)(he,Pe,{localTimezone:j}):""}),(0,H.jsx)("div",{style:{width:"400px"},children:(0,H.jsx)(W.Z,{disableEscape:!0,onClickOutside:function(){return be(!1)},open:fe,style:{position:"relative"},children:(0,H.jsx)(K.Z,{localTime:j,selectedDate:he,selectedTime:Pe,setSelectedDate:me,setSelectedTime:Oe,topPosition:!0})})})]},"end_time_input")],[(0,H.jsxs)(b.ZP,{alignItems:"center",children:[(0,H.jsx)(I.Pf,{default:!0}),(0,H.jsx)(P.Z,{mr:1}),(0,H.jsx)(k.ZP,{default:!0,children:"Interval type"})]},"interval_type"),(0,H.jsx)(Z.Z,{monospace:!0,onChange:function(e){e.preventDefault(),O((function(n){return te(te({},n),{},{interval_type:e.target.value})}))},placeholder:"Time spacing between each backfill",value:L,children:d.IB.map((function(e){return(0,H.jsx)("option",{value:e,children:(0,E.kC)(e)},e)}))},"interval_type_input")],[(0,H.jsxs)(b.ZP,{alignItems:"center",children:[(0,H.jsx)(I.Pf,{default:!0}),(0,H.jsx)(P.Z,{mr:1}),(0,H.jsx)(k.ZP,{default:!0,children:"Interval units"})]},"interval_units"),(0,H.jsx)(Q.Z,{disabled:!L,monospace:!0,onChange:function(e){e.preventDefault(),O((function(n){return te(te({},n),{},{interval_units:e.target.value})}))},placeholder:L?"Number of ".concat(L).concat(L!==d.I7.CUSTOM?"s":""," between each backfill"):"Interval type is required",type:"number",value:A},"interval_unit_input")]]),(0,F.Qr)(z)||e.push([(0,H.jsxs)(b.ZP,{alignItems:"center",children:[(0,H.jsx)(I.LO,{default:!0}),(0,H.jsx)(P.Z,{mr:1}),(0,H.jsx)(k.ZP,{default:!0,children:"Runtime variables"})]},"overwrite_runtime_variables"),(0,H.jsx)(q.Z,{borderless:!0,compact:!0,enableVariablesOverwrite:Y,runtimeVariables:ie,setEnableVariablesOverwrite:ne,setRuntimeVariables:le},"overwrite_runtime_variables_table")]),(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(P.Z,{mb:2,px:D.cd,children:(0,H.jsx)(v.Z,{children:"Settings"})}),(0,H.jsx)(f.Z,{light:!0,short:!0}),(0,H.jsx)(y.Z,{columnFlex:[null,1],rows:e})]})}),[he,xe,j,Y,L,A,R,ie,z,ce,ue,fe,Pe,ke]),Ie=(0,o.Db)(_.ZP.backfills.useUpdate(N),{onSuccess:function(e){return(0,U.wD)(e,{callback:function(){i(),h.push("/pipelines/[pipeline]/backfills/[...slug]","/pipelines/".concat(V,"/backfills/").concat(N))},onErrorCallback:function(e,n){return a({errors:n,response:e})}})}}),Se=(0,r.Z)(Ie,2),De=Se[0],Ce=Se[1].isLoading,Ee=(0,s.useCallback)((function(){var e=te(te({},(0,F.GL)(g,["name"])),{},{end_datetime:null,interval_type:null,interval_units:null,start_datetime:null,variables:Y?(0,M.e7)(ie):{}});return d._7===ce||(e.interval_type=L,e.interval_units=A,e.end_datetime=he&&null!==Pe&&void 0!==Pe&&Pe.hour&&null!==Pe&&void 0!==Pe&&Pe.minute?(0,T.XM)(he,Pe,{convertToUtc:j,includeSeconds:!0,localTimezone:j}):null,e.start_datetime=xe&&null!==ke&&void 0!==ke&&ke.hour&&null!==ke&&void 0!==ke&&ke.minute?(0,T.XM)(xe,ke,{convertToUtc:j,includeSeconds:!0,localTimezone:j}):null),De({backfill:e})}),[he,xe,j,Y,L,A,g,ie,ce,Pe,ke,De]),Te=(0,s.useMemo)((function(){return d._7===ce?!S:!(he&&xe&&L&&A)}),[S,he,xe,L,A,ce]);return(0,H.jsxs)(m.Z,{breadcrumbs:[{label:function(){return"Backfills"},linkProps:{as:"/pipelines/".concat(V,"/backfills"),href:"/pipelines/[pipeline]/backfills"}},{label:function(){return null===g||void 0===g?void 0:g.name},linkProps:{as:"/pipelines/".concat(V,"/backfills/").concat(N),href:"/pipelines/[pipeline]/backfills/[...slug]"}}],errors:t,pageName:C.M.BACKFILLS,pipeline:l,setErrors:a,subheader:(0,H.jsxs)(b.ZP,{alignItems:"center",children:[(0,H.jsx)(p.ZP,{disabled:Te,loading:Ce,onClick:Ee,outline:!0,primary:!0,children:"Save changes"}),(0,H.jsx)(P.Z,{mr:1}),(0,H.jsx)(p.ZP,{linkProps:{href:"/pipelines/[pipeline]/backfills/[...slug]",as:"/pipelines/".concat(V,"/backfills/").concat(N)},noHoverUnderline:!0,outline:!0,sameColorAsText:!0,children:"Cancel"})]}),title:function(){return"Edit ".concat(null===g||void 0===g?void 0:g.name)},uuid:"backfill/edit",children:[(0,H.jsxs)(P.Z,{p:D.cd,children:[(0,H.jsxs)(P.Z,{mb:2,children:[(0,H.jsx)(v.Z,{children:"Backfill type"}),(0,H.jsx)(k.ZP,{muted:!0,children:"How would you like this pipeline to be backfilled?"})]}),(0,H.jsx)(b.ZP,{children:G.map((function(e){var n=e.label,t=e.description,r=e.uuid,i=ce===r,l=ce&&!i;return(0,H.jsx)(p.ZP,{noBackground:!0,noBorder:!0,noPadding:!0,onClick:function(){se(r)},children:(0,H.jsx)($.U,{selected:i,children:(0,H.jsxs)(b.ZP,{alignItems:"center",children:[(0,H.jsx)(X.Z,{children:(0,H.jsx)("input",{checked:i,type:"radio"})}),(0,H.jsx)(P.Z,{mr:D.cd}),(0,H.jsxs)(X.Z,{alignItems:"flex-start",flexDirection:"column",children:[(0,H.jsx)(v.Z,{bold:!0,default:!i&&!l,level:5,muted:!i&&l,children:n()}),(0,H.jsx)(k.ZP,{default:!i&&!l,leftAligned:!0,muted:l,children:t()})]})]})})},r)}))})]}),(0,H.jsx)(P.Z,{mt:5,children:we})]})},ie=t(93808);function le(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ae(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?le(Object(t),!0).forEach((function(n){(0,l.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):le(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function ce(e){var n=e.backfillId,t=e.pipelineUUID,r=e.subpath,i=(0,s.useState)(null),l=i[0],a=i[1],c=_.ZP.variables.pipelines.list(t,{},{revalidateOnFocus:!1}).data,o=(0,s.useMemo)((function(){return null===c||void 0===c?void 0:c.variables}),[c]),u=_.ZP.pipelines.detail(t,{includes_content:!1,includes_outputs:!1},{revalidateOnFocus:!1}).data,d=(0,s.useMemo)((function(){return ae(ae({},null===u||void 0===u?void 0:u.pipeline),{},{uuid:t})}),[u,t]),p=_.ZP.backfills.detail(n,{include_preview_runs:!0}),f=p.data,b=p.mutate,v=(0,s.useMemo)((function(){return null===f||void 0===f?void 0:f.backfill}),[f]);return"edit"===r?(0,H.jsx)(re,{backfill:v,errors:l,fetchBackfill:b,pipeline:d,setErrors:a,variables:o}):(0,H.jsx)(Y,{backfill:v,errors:l,fetchBackfill:b,pipeline:d,setErrors:a,variables:o})}ce.getInitialProps=function(){var e=(0,i.Z)(c().mark((function e(n){var t,i,l,a,s,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.query,i=t.pipeline,l=t.slug,!Array.isArray(l)){e.next=4;break}return a=(0,r.Z)(l,2),s=a[0],o=a[1],e.abrupt("return",{backfillId:s,pipelineUUID:i,subpath:o});case 4:return e.abrupt("return",{pipelineUUID:i});case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();var se=(0,ie.Z)(ce)},53664:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/backfills/[...slug]",function(){return t(51532)}])}},function(e){e.O(0,[2678,1154,844,5820,1124,9161,4495,4267,9266,8487,8264,7858,5499,5283,5457,3745,3943,9774,2888,179],(function(){return n=53664,e(e.s=n);var n}));var n=e.O();_N_E=n}]);