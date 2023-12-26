import{an as c,F as h,a6 as k,ao as z,b as f,e as x,m as G,q as t,w as u,U as e,N as w,Q as o,R as l,M as T,s as y}from"./index-0a5f1302.js";import{A as d}from"./appType-b1dd2b59.js";const L={themeColorButton:"主题色按钮",themeColorButtonGroup:"按钮组主题色",defaultButton:"默认按钮",primaryButton:"主要按钮",infoButton:"信息按钮",successButton:"成功按钮",warningButton:"警告按钮",dangerButton:"危险按钮",textButton:"文字按钮",modeButtonGroup:"按钮组模式",plainTextButton:"纯文字按钮",outlineButton:"外边框按钮",outline:"边框",disabledStatus:"禁用状态",loadingStatus:"加载状态",buttonSize:"按钮尺寸",buttonGroupSize:"按钮组尺寸",normalButton:"常规按钮",smallButton:"小型按钮",miniButton:"迷你按钮",largeButton:"大型按钮",blockButton:"块级按钮",customColor:"自定义颜色",customButtonGroupColor:"自定义按钮组颜色",backgroundTextColor:"背景/文字",linearGradientColor:"使用渐变",verticalButtonGroup:"按钮组竖直排列",roundButton:"圆形按钮",event:"注册事件",click:"点击",touchstart:"触摸",autoLoading:"自动加载",clickSuccess:"点击成功",touchstartSuccess:"触摸成功",button:"按钮",splitButton:"按钮拆分"},N={themeColorButton:"Theme Color Button",themeColorButtonGroup:"Button Group Theme Color",defaultButton:"Default Button",default:"Default",primaryButton:"Primary Button",infoButton:"Info Button",successButton:"Success Button",warningButton:"Warning Button",dangerButton:"Danger Button",textButton:"Text Button",modeButtonGroup:"Button Group Mode",plainTextButton:"Plain Text Button",outlineButton:"Outline Button",outline:"Outline",disabledStatus:"Disabled Status",loadingStatus:"Loading Status",buttonSize:"Button Size",buttonGroupSize:"Button Group Size",normalButton:"Normal Button",smallButton:"Small Button",miniButton:"Mini Button",largeButton:"Large Button",blockButton:"Block Button",customColor:"Custom Color",customButtonGroupColor:"Custom Button Group Color",textColor:"Text Color",backgroundTextColor:"Background/Text Color",verticalButtonGroup:"Vertical Button Group",linearGradientColor:"LinearGradient Color",roundButton:"Round Button",event:"Events",click:"Click",touchstart:"Touchstart",autoLoading:"Auto Loading",clickSuccess:"Click Success",touchstartSuccess:"Touchstart Success",button:"Button",splitButton:"Split Button"},{add:b,use:D,pack:n,packs:P,merge:V}=c.useLocale(),U=p=>{c.use(p),D(p)};c.add("zh-CN",c.zhCN);c.add("en-US",c.enUS);b("zh-CN",L);b("en-US",N);const E={__name:"index",setup(p){h(U),k(z.dark);function g(){y.success(n.value.clickSuccess)}function v(){y.success(n.value.touchstartSuccess)}function C(){return new Promise(m=>{setTimeout(m,2e3)})}return(m,B)=>{const a=f("var-button"),i=f("var-space"),s=f("var-icon"),r=f("var-button-group"),_=f("var-cell"),S=f("var-menu");return x(),G(w,null,[t(e(d),null,{default:u(()=>[o(l(e(n).themeColorButton),1)]),_:1}),t(i,{size:["2.666vmin","2.666vmin"]},{default:u(()=>[t(a,null,{default:u(()=>[o(l(e(n).defaultButton),1)]),_:1}),t(a,{type:"primary"},{default:u(()=>[o(l(e(n).primaryButton),1)]),_:1}),t(a,{type:"info"},{default:u(()=>[o(l(e(n).infoButton),1)]),_:1}),t(a,{type:"success"},{default:u(()=>[o(l(e(n).successButton),1)]),_:1}),t(a,{type:"warning"},{default:u(()=>[o(l(e(n).warningButton),1)]),_:1}),t(a,{type:"danger"},{default:u(()=>[o(l(e(n).dangerButton),1)]),_:1})]),_:1}),t(e(d),null,{default:u(()=>[o(l(e(n).textButton),1)]),_:1}),t(i,{size:["2.666vmin","2.666vmin"]},{default:u(()=>[t(a,{text:"",outline:"",type:"primary"},{default:u(()=>[o(l(e(n).outlineButton),1)]),_:1}),t(a,{text:"",type:"primary"},{default:u(()=>[o(l(e(n).plainTextButton),1)]),_:1})]),_:1}),t(e(d),null,{default:u(()=>[o(l(e(n).disabledStatus),1)]),_:1}),t(i,{size:["2.666vmin","2.666vmin"]},{default:u(()=>[t(a,{disabled:""},{default:u(()=>[o(l(e(n).disabledStatus),1)]),_:1}),t(a,{disabled:"",text:"",outline:""},{default:u(()=>[o(l(e(n).disabledStatus),1)]),_:1}),t(a,{disabled:"",text:""},{default:u(()=>[o(l(e(n).disabledStatus),1)]),_:1})]),_:1}),t(e(d),null,{default:u(()=>[o(l(e(n).loadingStatus),1)]),_:1}),t(i,{size:["2.666vmin","2.666vmin"]},{default:u(()=>[t(a,{loading:"",type:"primary"},{default:u(()=>[o(l(e(n).loadingStatus),1)]),_:1}),t(a,{loading:"",type:"info","loading-type":"rect"},{default:u(()=>[o(l(e(n).loadingStatus),1)]),_:1}),t(a,{loading:"",type:"success","loading-type":"disappear"},{default:u(()=>[o(l(e(n).loadingStatus),1)]),_:1}),t(a,{loading:"",type:"danger","loading-type":"cube"},{default:u(()=>[o(l(e(n).loadingStatus),1)]),_:1}),t(a,{loading:"",type:"warning","loading-type":"wave"},{default:u(()=>[o(l(e(n).loadingStatus),1)]),_:1})]),_:1}),t(e(d),null,{default:u(()=>[o(l(e(n).buttonSize),1)]),_:1}),t(i,{align:"center",size:["2.666vmin","2.666vmin"]},{default:u(()=>[t(a,{type:"primary"},{default:u(()=>[o(l(e(n).normalButton),1)]),_:1}),t(a,{type:"success",size:"small"},{default:u(()=>[o(l(e(n).smallButton),1)]),_:1}),t(a,{type:"warning",size:"mini"},{default:u(()=>[o(l(e(n).miniButton),1)]),_:1}),t(a,{type:"danger",size:"large"},{default:u(()=>[o(l(e(n).largeButton),1)]),_:1})]),_:1}),t(e(d),null,{default:u(()=>[o(l(e(n).blockButton),1)]),_:1}),t(a,{block:"",type:"primary"},{default:u(()=>[o(l(e(n).blockButton),1)]),_:1}),t(e(d),null,{default:u(()=>[o(l(e(n).customColor),1)]),_:1}),t(i,{size:["2.666vmin","2.666vmin"]},{default:u(()=>[t(a,{color:"#66bb6a","text-color":"#fff"},{default:u(()=>[o(l(e(n).backgroundTextColor),1)]),_:1}),t(a,{color:"linear-gradient(to right, #69dbaa, #3a7afe)","text-color":"#fff"},{default:u(()=>[o(l(e(n).linearGradientColor),1)]),_:1})]),_:1}),t(e(d),null,{default:u(()=>[o(l(e(n).roundButton),1)]),_:1}),t(i,{size:["2.666vmin","2.666vmin"]},{default:u(()=>[t(a,{type:"primary",round:""},{default:u(()=>[t(s,{name:"plus"})]),_:1}),t(a,{type:"info",round:""},{default:u(()=>[t(s,{name:"information"})]),_:1}),t(a,{type:"success",round:""},{default:u(()=>[t(s,{name:"check"})]),_:1}),t(a,{type:"warning",round:""},{default:u(()=>[t(s,{name:"warning"})]),_:1}),t(a,{type:"danger",round:""},{default:u(()=>[t(s,{name:"window-close"})]),_:1})]),_:1}),t(e(d),null,{default:u(()=>[o(l(e(n).event),1)]),_:1}),t(i,{size:["2.666vmin","2.666vmin"]},{default:u(()=>[t(a,{type:"success",onClick:g},{default:u(()=>[o(l(e(n).click),1)]),_:1}),t(a,{type:"success",onTouchstart:v},{default:u(()=>[o(l(e(n).touchstart),1)]),_:1}),t(a,{type:"success",onClick:C,"auto-loading":""},{default:u(()=>[o(l(e(n).autoLoading),1)]),_:1})]),_:1}),t(e(d),null,{default:u(()=>[o(l(e(n).themeColorButtonGroup),1)]),_:1}),t(i,{size:["2.666vmin","2.666vmin"]},{default:u(()=>[t(r,{type:"default"},{default:u(()=>[t(a,null,{default:u(()=>[o(l(e(n).button),1)]),_:1}),t(a,null,{default:u(()=>[o(l(e(n).button),1)]),_:1}),t(a,null,{default:u(()=>[o(l(e(n).button),1)]),_:1})]),_:1}),t(r,{type:"primary"},{default:u(()=>[t(a,{type:"primary"},{default:u(()=>[o(l(e(n).button),1)]),_:1}),t(a,{type:"primary"},{default:u(()=>[o(l(e(n).button),1)]),_:1}),t(a,{type:"primary"},{default:u(()=>[o(l(e(n).button),1)]),_:1})]),_:1})]),_:1}),t(e(d),null,{default:u(()=>[o(l(e(n).buttonGroupSize),1)]),_:1}),t(i,{size:["2.666vmin","2.666vmin"]},{default:u(()=>[t(r,{size:"normal",type:"primary"},{default:u(()=>[t(a,null,{default:u(()=>[o(l(e(n).button),1)]),_:1}),t(a,null,{default:u(()=>[o(l(e(n).button),1)]),_:1}),t(a,null,{default:u(()=>[o(l(e(n).button),1)]),_:1})]),_:1}),t(r,{size:"large",type:"primary"},{default:u(()=>[t(a,null,{default:u(()=>[o(l(e(n).button),1)]),_:1}),t(a,null,{default:u(()=>[o(l(e(n).button),1)]),_:1}),t(a,null,{default:u(()=>[o(l(e(n).button),1)]),_:1})]),_:1})]),_:1}),t(e(d),null,{default:u(()=>[o(l(e(n).splitButton),1)]),_:1}),t(S,{placement:"bottom","same-width":"","offset-y":6},{menu:u(()=>[t(_,{ripple:""},{default:u(()=>[o(l(e(n).splitButton),1)]),_:1}),t(_,{ripple:""},{default:u(()=>[o(l(e(n).splitButton),1)]),_:1}),t(_,{ripple:""},{default:u(()=>[o(l(e(n).splitButton),1)]),_:1})]),default:u(()=>[t(r,{type:"primary"},{default:u(()=>[t(a,{onClick:B[0]||(B[0]=T(()=>{},["stop"]))},{default:u(()=>[o(l(e(n).splitButton),1)]),_:1}),t(a,{style:{padding:"0 6px","border-left":"thin solid #1976d2"}},{default:u(()=>[t(s,{name:"menu-down",size:24})]),_:1})]),_:1})]),_:1}),t(e(d),null,{default:u(()=>[o(l(e(n).modeButtonGroup),1)]),_:1}),t(i,{size:["2.666vmin","2.666vmin"]},{default:u(()=>[t(r,{type:"primary",mode:"text"},{default:u(()=>[t(a,null,{default:u(()=>[o(l(e(n).button),1)]),_:1}),t(a,null,{default:u(()=>[o(l(e(n).button),1)]),_:1}),t(a,null,{default:u(()=>[o(l(e(n).button),1)]),_:1})]),_:1}),t(r,{type:"primary",mode:"outline"},{default:u(()=>[t(a,null,{default:u(()=>[o(l(e(n).button),1)]),_:1}),t(a,null,{default:u(()=>[o(l(e(n).button),1)]),_:1}),t(a,null,{default:u(()=>[o(l(e(n).button),1)]),_:1})]),_:1}),t(r,{type:"primary"},{default:u(()=>[t(a,null,{default:u(()=>[o(l(e(n).button),1)]),_:1}),t(a,null,{default:u(()=>[o(l(e(n).button),1)]),_:1}),t(a,null,{default:u(()=>[o(l(e(n).button),1)]),_:1})]),_:1})]),_:1}),t(e(d),null,{default:u(()=>[o(l(e(n).customButtonGroupColor),1)]),_:1}),t(r,{type:"primary",color:"linear-gradient(to right, #69dbaa, #3a7afe)"},{default:u(()=>[t(a,null,{default:u(()=>[o(l(e(n).button),1)]),_:1}),t(a,null,{default:u(()=>[o(l(e(n).button),1)]),_:1}),t(a,null,{default:u(()=>[o(l(e(n).button),1)]),_:1})]),_:1}),t(e(d),null,{default:u(()=>[o(l(e(n).verticalButtonGroup),1)]),_:1}),t(i,{size:["2.666vmin","2.666vmin"]},{default:u(()=>[t(r,{type:"primary",mode:"text",vertical:""},{default:u(()=>[t(a,null,{default:u(()=>[o(l(e(n).button),1)]),_:1}),t(a,null,{default:u(()=>[o(l(e(n).button),1)]),_:1}),t(a,null,{default:u(()=>[o(l(e(n).button),1)]),_:1})]),_:1}),t(r,{type:"primary",mode:"outline",vertical:""},{default:u(()=>[t(a,null,{default:u(()=>[o(l(e(n).button),1)]),_:1}),t(a,null,{default:u(()=>[o(l(e(n).button),1)]),_:1}),t(a,null,{default:u(()=>[o(l(e(n).button),1)]),_:1})]),_:1}),t(r,{type:"primary",vertical:""},{default:u(()=>[t(a,null,{default:u(()=>[o(l(e(n).button),1)]),_:1}),t(a,null,{default:u(()=>[o(l(e(n).button),1)]),_:1}),t(a,null,{default:u(()=>[o(l(e(n).button),1)]),_:1})]),_:1})]),_:1})],64)}}};export{E as default};
