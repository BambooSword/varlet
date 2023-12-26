import{an as f,_ as B,r,F,a6 as L,ao as P,b as s,e as q,m as H,q as e,w as l,y as I,U as a,M as N,N as Q,Q as t,R as u}from"./index-0a5f1302.js";import{A as c}from"./appType-b1dd2b59.js";const R={type:"主题色按钮",trigger:"触发方式",direction:"动作菜单弹出方向",position:"触发器位置",default:"默认",primary:"主要",info:"信息",success:"成功",warning:"警告",danger:"危险",drag:"拖拽",disabled:"禁用",elevation:"海拔效果",triggerToggle:"触发器显示/隐藏",actionsToggle:"动作菜单展开/收起",toggle:"切换"},$={type:"Theme Color Button",trigger:"Trigger Method",direction:"Action Menu Popup Direction",position:"Trigger Position",default:"default",primary:"primary",info:"info",success:"success",warning:"warning",danger:"danger",drag:"Drag",disabled:"Disabled",elevation:"Elevation Effect",triggerToggle:"Trigger Show/Hide",actionsToggle:"Action Menu Expand/Collapse",toggle:"Toggle"},{add:S,use:j,pack:o,packs:X,merge:Y}=f.useLocale(),G=y=>{f.use(y),j(y)};f.add("zh-CN",f.zhCN);f.add("en-US",f.enUS);S("zh-CN",R);S("en-US",$);const J={__name:"index",setup(y){const k=r("primary"),V=r("click"),h=r("top"),m=r("right-bottom"),w=r(!0),_=r(!1),T=r(!1),g=r(!1),U=r(2);function M(){w.value=!w.value}function z(){_.value=!_.value}return F(G),L(P.dark),(K,n)=>{const v=s("var-option"),A=s("var-select"),i=s("var-radio"),x=s("var-radio-group"),C=s("var-switch"),D=s("var-slider"),p=s("var-button"),b=s("var-icon"),E=s("var-fab");return q(),H(Q,null,[e(a(c),{style:I({marginTop:m.value.includes("top")?"20vmin":void 0})},{default:l(()=>[t(u(a(o).type),1)]),_:1},8,["style"]),e(A,{hint:!1,modelValue:k.value,"onUpdate:modelValue":n[0]||(n[0]=d=>k.value=d)},{default:l(()=>[e(v,{label:a(o).default,value:"default"},null,8,["label"]),e(v,{label:a(o).primary,value:"primary"},null,8,["label"]),e(v,{label:a(o).info,value:"info"},null,8,["label"]),e(v,{label:a(o).success,value:"success"},null,8,["label"]),e(v,{label:a(o).warning,value:"warning"},null,8,["label"]),e(v,{label:a(o).danger,value:"danger"},null,8,["label"])]),_:1},8,["modelValue"]),e(a(c),null,{default:l(()=>[t(u(a(o).position),1)]),_:1}),e(x,{modelValue:m.value,"onUpdate:modelValue":n[1]||(n[1]=d=>m.value=d)},{default:l(()=>[e(i,{"checked-value":"left-top"},{default:l(()=>[t("left-top")]),_:1}),e(i,{"checked-value":"right-top"},{default:l(()=>[t("right-top")]),_:1}),e(i,{"checked-value":"left-bottom"},{default:l(()=>[t("left-bottom")]),_:1}),e(i,{"checked-value":"right-bottom"},{default:l(()=>[t("right-bottom")]),_:1})]),_:1},8,["modelValue"]),e(a(c),null,{default:l(()=>[t(u(a(o).trigger),1)]),_:1}),e(x,{modelValue:V.value,"onUpdate:modelValue":n[2]||(n[2]=d=>V.value=d)},{default:l(()=>[e(i,{"checked-value":"click"},{default:l(()=>[t("click")]),_:1}),e(i,{"checked-value":"hover"},{default:l(()=>[t("hover")]),_:1})]),_:1},8,["modelValue"]),e(a(c),null,{default:l(()=>[t(u(a(o).direction),1)]),_:1}),e(x,{modelValue:h.value,"onUpdate:modelValue":n[3]||(n[3]=d=>h.value=d)},{default:l(()=>[e(i,{"checked-value":"top"},{default:l(()=>[t("top")]),_:1}),e(i,{"checked-value":"right"},{default:l(()=>[t("right")]),_:1}),e(i,{"checked-value":"bottom"},{default:l(()=>[t("bottom")]),_:1}),e(i,{"checked-value":"left"},{default:l(()=>[t("left")]),_:1})]),_:1},8,["modelValue"]),e(a(c),null,{default:l(()=>[t(u(a(o).drag),1)]),_:1}),e(C,{modelValue:T.value,"onUpdate:modelValue":n[4]||(n[4]=d=>T.value=d)},null,8,["modelValue"]),e(a(c),null,{default:l(()=>[t(u(a(o).disabled),1)]),_:1}),e(C,{modelValue:g.value,"onUpdate:modelValue":n[5]||(n[5]=d=>g.value=d)},null,8,["modelValue"]),e(a(c),null,{default:l(()=>[t(u(a(o).elevation),1)]),_:1}),e(D,{max:"24",modelValue:U.value,"onUpdate:modelValue":n[6]||(n[6]=d=>U.value=d)},null,8,["modelValue"]),e(a(c),null,{default:l(()=>[t(u(a(o).triggerToggle),1)]),_:1}),e(p,{type:"primary",onClick:N(M,["stop"])},{default:l(()=>[t(u(a(o).toggle),1)]),_:1},8,["onClick"]),e(a(c),null,{default:l(()=>[t(u(a(o).actionsToggle),1)]),_:1}),e(p,{type:"primary",onClick:N(z,["stop"])},{default:l(()=>[t(u(a(o).toggle),1)]),_:1},8,["onClick"]),e(E,{active:_.value,"onUpdate:active":n[7]||(n[7]=d=>_.value=d),show:w.value,type:k.value,position:m.value,direction:h.value,trigger:V.value,drag:T.value,disabled:g.value,elevation:U.value},{default:l(()=>[e(p,{class:"action",type:"info",round:"",disabled:g.value},{default:l(()=>[e(b,{name:"account-circle"})]),_:1},8,["disabled"]),e(p,{class:"action",type:"success",round:"",disabled:g.value},{default:l(()=>[e(b,{name:"checkbox-marked-circle"})]),_:1},8,["disabled"]),e(p,{class:"action",type:"warning",round:"",disabled:g.value},{default:l(()=>[e(b,{name:"bell"})]),_:1},8,["disabled"]),e(p,{class:"action",type:"danger",round:"",disabled:g.value},{default:l(()=>[e(b,{name:"delete"})]),_:1},8,["disabled"])]),_:1},8,["active","show","type","position","direction","trigger","drag","disabled","elevation"])],64)}}},Z=B(J,[["__scopeId","data-v-7ec9694f"]]);export{Z as default};
