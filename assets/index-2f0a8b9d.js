import{an as c,_ as z,W as D,ar as M,F,a6 as P,ao as R,b as g,e as H,m as I,q as a,w as n,U as e,as as y,N as L,at as d,s as r,Q as t,R as l}from"./index-0a5f1302.js";import{A as B}from"./appType-b1dd2b59.js";const V={functionCall:"函数调用",basicUsage:"基本使用",modifyTitle:"修改标题",hideButton:"隐藏按钮",handleUserBehavior:"处理用户行为",asyncClose:"异步关闭",componentCall:"组件调用",title:"兰亭序",message:"兰亭临帖 行书如行云流水",customSlots:"自定义插槽",asyncCloseProgress:"正在异步关闭"},W={functionCall:"Function Call",basicUsage:"Basic Usage",modifyTitle:"Modify Title",hideButton:"Hide Button",handleUserBehavior:"Handle User Behavior",asyncClose:"Asynchronous closing",componentCall:"Component Call",title:"Beat It",message:"Don't Wanna See No Blood, Don't Be A Macho Man",customSlots:"Custom Slots",asyncCloseProgress:"Asynchronous shutdown in progress"},{add:U,use:q,pack:s,packs:J,merge:K}=c.useLocale(),E=C=>{c.use(C),q(C)};c.add("zh-CN",c.zhCN);c.add("en-US",c.enUS);U("zh-CN",V);U("en-US",W);const Q={__name:"index",setup(C){const b=D({show:!1,show1:!1,show2:!1}),{show:m,show1:f,show2:p}=M(b),w={confirm:()=>r.success("confirm"),cancel:()=>r.error("cancel"),close:()=>r.info("close")};function x(){d(s.value.message)}async function S(){w[await d(s.value.message)]()}function N(){d({title:s.value.title,message:s.value.message})}function T(){d({message:s.value.message,confirmButton:!1,cancelButton:!1})}function k(h,o){r.loading(s.value.asyncCloseProgress),setTimeout(()=>{w[h](),o()},1e3)}function A(){d({message:s.value.message,onBeforeClose:k})}return F(E),P(R.dark),(h,o)=>{const i=g("var-button"),v=g("var-dialog"),$=g("var-icon"),_=g("var-cell");return H(),I(L,null,[a(e(B),null,{default:n(()=>[t(l(e(s).functionCall),1)]),_:1}),a(i,{type:"primary",block:"",onClick:x},{default:n(()=>[t(l(e(s).basicUsage),1)]),_:1}),a(i,{type:"primary",block:"",onClick:N},{default:n(()=>[t(l(e(s).modifyTitle),1)]),_:1}),a(i,{type:"primary",block:"",onClick:T},{default:n(()=>[t(l(e(s).hideButton),1)]),_:1}),a(i,{type:"primary",block:"",onClick:S},{default:n(()=>[t(l(e(s).handleUserBehavior),1)]),_:1}),a(i,{type:"primary",block:"",onClick:A},{default:n(()=>[t(l(e(s).asyncClose),1)]),_:1}),a(e(B),null,{default:n(()=>[t(l(e(s).componentCall),1)]),_:1}),a(i,{type:"warning",block:"",onClick:o[0]||(o[0]=u=>m.value=!0)},{default:n(()=>[t(l(e(s).basicUsage),1)]),_:1}),a(v,{show:e(m),"onUpdate:show":o[1]||(o[1]=u=>y(m)?m.value=u:null),title:e(s).title,message:e(s).message,onConfirm:o[2]||(o[2]=()=>e(r).success("confirm")),onCancel:o[3]||(o[3]=()=>e(r).error("cancel")),onClosed:o[4]||(o[4]=()=>e(r).info("closed"))},null,8,["show","title","message"]),a(i,{type:"warning",block:"",onClick:o[5]||(o[5]=u=>f.value=!0)},{default:n(()=>[t(l(e(s).asyncClose),1)]),_:1}),a(v,{show:e(f),"onUpdate:show":o[6]||(o[6]=u=>y(f)?f.value=u:null),title:e(s).title,message:e(s).message,onBeforeClose:k},null,8,["show","title","message"]),a(i,{type:"warning",block:"",onClick:o[7]||(o[7]=u=>p.value=!0)},{default:n(()=>[t(l(e(s).customSlots),1)]),_:1}),a(v,{show:e(p),"onUpdate:show":o[8]||(o[8]=u=>y(p)?p.value=u:null)},{title:n(()=>[a($,{name:"information",color:"#2979ff"})]),default:n(()=>[a(_,null,{default:n(()=>[t(l(e(s).message),1)]),_:1}),a(_,null,{default:n(()=>[t(l(e(s).message),1)]),_:1}),a(_,null,{default:n(()=>[t(l(e(s).message),1)]),_:1})]),_:1},8,["show"])],64)}}},O=z(Q,[["__scopeId","data-v-653a0128"]]);export{O as default};
