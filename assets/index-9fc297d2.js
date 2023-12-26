import{an as r,W as y,F as S,a6 as _,ao as x,b,e as w,m as z,q as u,w as t,U as o,N as C,Q as m,R as n,p as V}from"./index-0a5f1302.js";import{A as i}from"./appType-b1dd2b59.js";const k={basicUsage:"基本使用",stepSize:"指定步长",dualThumb:"双滑块",range:"选择范围",disable:"禁用",readonly:"只读",sliderSize:"不同大小",customStyle:"自定义样式",showLabel:"显示标签",customBtn:"自定义按钮",validateValue:"值的校验",errMsg:"错误信息",vertical:"垂直方向"},B={basicUsage:"Basic Usage",stepSize:"Step Size",dualThumb:"Dual Thumbs",disable:"Disable",readonly:"Readonly",range:"Range",sliderSize:"Slider Size",customStyle:"Custom Style",showLabel:"Show Label",customBtn:"Custom Button",validateValue:"Validate Value",errMsg:"error message",vertical:"Vertical"},{add:g,use:N,pack:s,packs:A,merge:F}=r.useLocale(),c=v=>{r.use(v),N(v)};r.add("zh-CN",r.zhCN);r.add("en-US",r.enUS);g("zh-CN",k);g("en-US",B);const L={class:"slider-example__block"},T={style:{height:"300px"}},D={style:{height:"300px"}},j={__name:"index",setup(v){const l=y({value:3,value1:[24,50],value2:25,value3:40,value4:20,value5:20,value6:70,value7:50,value8:20,value9:[5,38],value10:[7,64],value11:0,value12:50,value13:[7,64]});function U(p){console.log(p)}return S(c),_(x.dark),(p,a)=>{const d=b("var-slider"),f=b("var-space");return w(),z(C,null,[u(o(i),null,{default:t(()=>[m(n(o(s).basicUsage),1)]),_:1}),u(d,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value=e)},null,8,["modelValue"]),u(o(i),null,{default:t(()=>[m(n(o(s).stepSize),1)]),_:1}),u(d,{modelValue:l.value2,"onUpdate:modelValue":a[1]||(a[1]=e=>l.value2=e),step:"10"},null,8,["modelValue"]),u(o(i),null,{default:t(()=>[m(n(o(s).dualThumb),1)]),_:1}),u(d,{modelValue:l.value1,"onUpdate:modelValue":a[2]||(a[2]=e=>l.value1=e),range:"",onChange:U,"label-visible":"always"},null,8,["modelValue"]),u(o(i),null,{default:t(()=>[m(n(o(s).range),1)]),_:1}),u(d,{modelValue:l.value11,"onUpdate:modelValue":a[3]||(a[3]=e=>l.value11=e),max:"210",min:"-50","label-visible":"always"},null,8,["modelValue"]),u(o(i),null,{default:t(()=>[m(n(o(s).disable),1)]),_:1}),u(d,{modelValue:l.value3,"onUpdate:modelValue":a[4]||(a[4]=e=>l.value3=e),disabled:""},null,8,["modelValue"]),u(o(i),null,{default:t(()=>[m(n(o(s).readonly),1)]),_:1}),u(d,{modelValue:l.value3,"onUpdate:modelValue":a[5]||(a[5]=e=>l.value3=e),readonly:""},null,8,["modelValue"]),u(o(i),null,{default:t(()=>[m(n(o(s).sliderSize),1)]),_:1}),u(d,{modelValue:l.value10,"onUpdate:modelValue":a[6]||(a[6]=e=>l.value10=e),"track-height":"1.5vmin",range:""},null,8,["modelValue"]),u(o(i),null,{default:t(()=>[m(n(o(s).customStyle),1)]),_:1}),u(d,{modelValue:l.value4,"onUpdate:modelValue":a[7]||(a[7]=e=>l.value4=e),"label-color":"purple","active-color":"#e0732c","track-color":"#3a68b4","thumb-color":"#e25241","label-text-color":"#ededed"},null,8,["modelValue"]),u(o(i),null,{default:t(()=>[m(n(o(s).customBtn),1)]),_:1}),u(d,{modelValue:l.value9,"onUpdate:modelValue":a[8]||(a[8]=e=>l.value9=e),range:"","active-color":"#52af77"},{button:t(({currentValue:e})=>[V("div",L,n(e),1)]),_:1},8,["modelValue"]),u(o(i),null,{default:t(()=>[m(n(o(s).showLabel),1)]),_:1}),u(d,{modelValue:l.value5,"onUpdate:modelValue":a[9]||(a[9]=e=>l.value5=e),"label-visible":"never"},null,8,["modelValue"]),u(d,{modelValue:l.value6,"onUpdate:modelValue":a[10]||(a[10]=e=>l.value6=e)},null,8,["modelValue"]),u(d,{modelValue:l.value7,"onUpdate:modelValue":a[11]||(a[11]=e=>l.value7=e),"label-visible":"always"},null,8,["modelValue"]),u(o(i),null,{default:t(()=>[m(n(o(s).validateValue),1)]),_:1}),u(d,{modelValue:l.value8,"onUpdate:modelValue":a[12]||(a[12]=e=>l.value8=e),rules:[e=>e>35||o(s).errMsg]},null,8,["modelValue","rules"]),u(o(i),null,{default:t(()=>[m(n(o(s).vertical),1)]),_:1}),u(f,{justify:"space-around"},{default:t(()=>[V("div",T,[u(d,{modelValue:l.value12,"onUpdate:modelValue":a[13]||(a[13]=e=>l.value12=e),direction:"vertical"},null,8,["modelValue"])]),V("div",D,[u(d,{modelValue:l.value13,"onUpdate:modelValue":a[14]||(a[14]=e=>l.value13=e),range:"","label-visible":"always",direction:"vertical"},null,8,["modelValue"])])]),_:1})],64)}}};export{j as default};
