import{d as p,r as l,G as f,a7 as c,a8 as o,n as g,_ as d,e as S,f as z,x as C,y as h,a9 as y}from"./index-0a5f1302.js";import{d as U,c as k,w as v,a as $}from"./components-060d0e52.js";import{t as L}from"./elements-058f1dbd.js";const m={name:String,size:[Number,String],color:String,namespace:{type:String,default:"var-icon"},transition:{type:[Number,String],default:0},animationClass:String,onClick:U()},{name:N,n:I,classes:R}=k("icon"),w=p({name:N,props:m,setup(e){const n=l(""),a=l(!1);f(()=>e.name,r,{immediate:!0});async function r(s,i){const{transition:t}=e;if(i==null||o(t)===0){n.value=s;return}a.value=!0,await g(),setTimeout(()=>{i!=null&&(n.value=s),a.value=!1},o(t))}return{nextName:n,animateInProgress:a,n:I,classes:R,isURL:c,toNumber:o,toSizeUnit:L}}});function b(e,n,a,r,s,i){return S(),z(y(e.isURL(e.name)?"img":"i"),{class:C(e.classes(e.n(),[e.namespace!==e.n(),e.namespace],`${e.namespace}--set`,[e.isURL(e.name),e.n("image"),`${e.namespace}-${e.nextName}`],[e.animateInProgress,e.animationClass==null?e.n("--shrinking"):e.animationClass])),style:h({color:e.color,"transition-duration":`${e.toNumber(e.transition)}ms`,width:e.isURL(e.name)?e.toSizeUnit(e.size):null,height:e.isURL(e.name)?e.toSizeUnit(e.size):null,fontSize:e.toSizeUnit(e.size)}),src:e.isURL(e.name)?e.nextName:null,onClick:e.onClick},null,8,["class","style","src","onClick"])}const u=d(w,[["render",b]]);v(u);$(u,m);export{u as I};
