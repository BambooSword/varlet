import{an as i,F as v,r as y,b as r,e as w,m as h,q as t,w as n,U as e,N as k,Q as l,R as a}from"./index-0a5f1302.js";import{A as p}from"./appType-b1dd2b59.js";const C={line:"单行省略",multipleLine:"多行省略",twoWayBinding:"双向绑定",expand:"点击文字展开",tooltip:"自定义 Tooltip",text:"其实没有什么事情是不可能的，我都拿到世界冠军了，真的没有什么事情是不可能的。",toggle:"切换"},T={line:"Single Line Ellipsis",multipleLine:"Multiple Line Ellipsis",twoWayBinding:"Two-way Binding",expand:"Click On Text To Expand",tooltip:"Custom Tooltip",text:"I want to say english to everyone like, even you still are normal people, you still can work a world champion and no one trust you!",toggle:"Toggle"},{add:_,use:L,pack:o,packs:z,merge:b}=i.useLocale(),N=m=>{i.use(m),L(m)};i.add("zh-CN",i.zhCN);i.add("en-US",i.enUS);_("zh-CN",C);_("en-US",T);const E={__name:"index",setup(m){v(N);const d=y(!1);return(U,u)=>{const s=r("var-ellipsis"),x=r("var-button"),f=r("var-space"),g=r("var-icon");return w(),h(k,null,[t(e(p),null,{default:n(()=>[l(a(e(o).line),1)]),_:1}),t(s,{style:{"max-width":"50vmin"}},{default:n(()=>[l(a(e(o).text),1)]),_:1}),t(e(p),null,{default:n(()=>[l(a(e(o).multipleLine),1)]),_:1}),t(s,{style:{"max-width":"50vmin"},"line-clamp":3},{default:n(()=>[l(a(e(o).text),1)]),_:1}),t(e(p),null,{default:n(()=>[l(a(e(o).twoWayBinding),1)]),_:1}),t(f,{direction:"column",size:"large"},{default:n(()=>[t(x,{type:"primary",onClick:u[0]||(u[0]=c=>d.value=!d.value)},{default:n(()=>[l(a(e(o).toggle),1)]),_:1}),t(s,{style:{"max-width":"50vmin"},expand:d.value,"onUpdate:expand":u[1]||(u[1]=c=>d.value=c)},{default:n(()=>[l(a(e(o).text),1)]),_:1},8,["expand"])]),_:1}),t(e(p),null,{default:n(()=>[l(a(e(o).expand),1)]),_:1}),t(s,{style:{"max-width":"50vmin"},"line-clamp":3,"expand-trigger":"click",tooltip:!1},{default:n(()=>[l(a(e(o).text),1)]),_:1}),t(e(p),null,{default:n(()=>[l(a(e(o).tooltip),1)]),_:1}),t(s,{style:{"max-width":"50vmin"},tooltip:{type:"primary",sameWidth:!1}},{"tooltip-content":n(()=>[t(g,{name:"github"})]),default:n(()=>[l(a(e(o).text)+" ",1)]),_:1})],64)}}};export{E as default};
