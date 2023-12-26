import{an as c,W as N,s as d,ar as B,aF as I,F as M,a6 as V,ao as F,b as h,e as R,m as H,q as l,w as n,U as o,p as q,as as f,N as A,Q as s,R as i,aq as D,aG as E,aH as W}from"./index-0a5f1302.js";import{A as C}from"./appType-b1dd2b59.js";const G={functionCall:"函数调用",componentCall:"组件调用",type:"Snackbar 类型",success:"成功",info:"消息",warning:"警告",error:"错误",loading:"加载",text:"这是一个消息条！！",loaded:"加载成功！！",wait:"等待中...",close:"关闭",basicUsage:"基本使用",multiLine:"垂直排列",bottomDisplay:"底部显示",hiddenTime:"显示时长",customIcon:"自定义图标",forbidClick:"禁止穿透点击",multiple:"多例模式",custom:"自定义"},Q={functionCall:"Function Call",componentCall:"Component Call",type:"Snackbar Type",success:"Success",warning:"Warning",info:"Info",error:"Error",loading:"Loading",text:"Hello, I'm a snackbar",loaded:"Loaded",wait:"waiting...",close:"Close",basicUsage:"Basic Usage",multiLine:"Multi-Line",bottomDisplay:"Bottom Display",hiddenTime:"Display Duration",customIcon:"Custom Icon",forbidClick:"Forbid Click",multiple:"Multiple",custom:"Custom"},{add:T,use:j,pack:e,packs:X,merge:Y}=c.useLocale(),J=y=>{c.use(y),j(y)};c.add("zh-CN",c.zhCN);c.add("en-US",c.enUS);T("zh-CN",G);T("en-US",Q);const K={class:"snackbar-demo"},Z={__name:"index",setup(y){const g=N({show1:!1,show2:!1,show3:!1,show4:!1,show5:!1,show9:!1}),m=d.Component,{show1:$,show2:w,show3:v,show4:x,show5:U,show9:S}=B(g);function p(r){g[r]=!g[r]}function k(r){const t=r==="loading"?e.value.wait:e.value.text,u=d[r](t);r==="loading"&&setTimeout(()=>{u.clear(),d.success(e.value.loaded)},2e3)}function b(r){if(r==="time"&&d({content:e.value.text,duration:1e3}),r==="position"&&d({content:e.value.text,position:"bottom"}),r==="custom"){const t=d({content:"Hello, Varlet",icon:()=>D(E,{name:"heart",style:{paddingRight:"12px"}}),action:()=>D(W,{size:"small",type:"primary",onClick:()=>t.clear()},{default:()=>e.value.close})})}r||d(e.value.text)}function _(){d.allowMultiple(!0);const r=d("Snackbar 1");d.success("Snackbar 2"),setTimeout(()=>{r.clear()},1e3)}return I(()=>{d.allowMultiple(!1)}),M(J),V(F.dark),(r,t)=>{const u=h("var-button"),z=h("var-space"),L=h("var-icon");return R(),H(A,null,[l(o(C),null,{default:n(()=>[s(i(o(e).componentCall),1)]),_:1}),l(z,{direction:"column",size:["3vmin","4vmin"]},{default:n(()=>[l(u,{type:"primary",block:"",onClick:t[0]||(t[0]=a=>p("show1"))},{default:n(()=>[s(i(o(e).basicUsage),1)]),_:1}),l(u,{type:"primary",block:"",onClick:t[1]||(t[1]=a=>p("show3"))},{default:n(()=>[s(i(o(e).multiLine),1)]),_:1}),l(u,{type:"primary",block:"",onClick:t[2]||(t[2]=a=>p("show2"))},{default:n(()=>[s(i(o(e).bottomDisplay),1)]),_:1}),l(u,{type:"primary",block:"",onClick:t[3]||(t[3]=a=>p("show4"))},{default:n(()=>[s(i(o(e).hiddenTime),1)]),_:1}),l(u,{type:"primary",block:"",onClick:t[4]||(t[4]=a=>p("show5"))},{default:n(()=>[s(i(o(e).customIcon),1)]),_:1}),l(u,{type:"primary",block:"",onClick:t[5]||(t[5]=a=>p("show9"))},{default:n(()=>[s(i(o(e).forbidClick),1)]),_:1})]),_:1}),l(o(C),null,{default:n(()=>[s(i(o(e).functionCall),1)]),_:1}),l(z,{direction:"column",size:["3vmin","4vmin"]},{default:n(()=>[l(u,{type:"warning",block:"",onClick:t[6]||(t[6]=a=>b())},{default:n(()=>[s(i(o(e).basicUsage),1)]),_:1}),l(u,{type:"warning",block:"",onClick:t[7]||(t[7]=a=>b("time"))},{default:n(()=>[s(i(o(e).hiddenTime),1)]),_:1}),l(u,{type:"warning",block:"",onClick:t[8]||(t[8]=a=>b("position"))},{default:n(()=>[s(i(o(e).bottomDisplay),1)]),_:1}),l(u,{type:"warning",block:"",onClick:t[9]||(t[9]=a=>b("custom"))},{default:n(()=>[s(i(o(e).custom),1)]),_:1})]),_:1}),l(o(C),null,{default:n(()=>[s(i(o(e).type),1)]),_:1}),l(z,{direction:"column",size:["3vmin","4vmin"]},{default:n(()=>[l(u,{type:"success",block:"",onClick:t[10]||(t[10]=a=>k("success"))},{default:n(()=>[s(i(o(e).success),1)]),_:1}),l(u,{type:"warning",block:"",onClick:t[11]||(t[11]=a=>k("warning"))},{default:n(()=>[s(i(o(e).warning),1)]),_:1}),l(u,{type:"info",block:"",onClick:t[12]||(t[12]=a=>k("info"))},{default:n(()=>[s(i(o(e).info),1)]),_:1}),l(u,{type:"danger",block:"",onClick:t[13]||(t[13]=a=>k("error"))},{default:n(()=>[s(i(o(e).error),1)]),_:1}),l(u,{type:"primary",block:"",onClick:t[14]||(t[14]=a=>k("loading"))},{default:n(()=>[s(i(o(e).loading),1)]),_:1})]),_:1}),l(o(C),null,{default:n(()=>[s(i(o(e).multiple),1)]),_:1}),l(u,{type:"primary",block:"",onClick:_},{default:n(()=>[s(i(o(e).multiple),1)]),_:1}),q("div",K,[l(o(m),{show:o($),"onUpdate:show":t[15]||(t[15]=a=>f($)?$.value=a:null)},{default:n(()=>[s(i(o(e).text),1)]),_:1},8,["show"]),l(o(m),{show:o(w),"onUpdate:show":t[17]||(t[17]=a=>f(w)?w.value=a:null),position:"bottom"},{action:n(()=>[l(u,{type:"primary",size:"small",onClick:t[16]||(t[16]=a=>w.value=!1)},{default:n(()=>[s(i(o(e).close),1)]),_:1})]),default:n(()=>[s(i(o(e).text)+" ",1)]),_:1},8,["show"]),l(o(m),{show:o(v),"onUpdate:show":t[19]||(t[19]=a=>f(v)?v.value=a:null),vertical:!0},{action:n(()=>[l(u,{type:"primary",size:"small",onClick:t[18]||(t[18]=a=>v.value=!1)},{default:n(()=>[s(i(o(e).close),1)]),_:1})]),default:n(()=>[s(i(o(e).text)+" ",1)]),_:1},8,["show"]),l(o(m),{show:o(x),"onUpdate:show":t[20]||(t[20]=a=>f(x)?x.value=a:null),duration:1e3},{default:n(()=>[s(i(o(e).text),1)]),_:1},8,["show"]),l(o(m),{show:o(U),"onUpdate:show":t[21]||(t[21]=a=>f(U)?U.value=a:null),duration:1e3},{icon:n(()=>[l(L,{name:"heart-outline"})]),default:n(()=>[s(i(o(e).text)+" ",1)]),_:1},8,["show"]),l(o(m),{show:o(S),"onUpdate:show":t[22]||(t[22]=a=>f(S)?S.value=a:null),"forbid-click":!0},{default:n(()=>[s(i(o(e).text),1)]),_:1},8,["show"])])],64)}}};export{Z as default};
