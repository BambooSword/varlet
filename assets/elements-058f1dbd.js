import{ac as f,ad as x,ae as p,af as d,ag as g,ah as o,a8 as S,ai as T,aj as b,ak as M}from"./index-0a5f1302.js";function A(t){const{top:n}=p(t);return n+(document.body.scrollTop||document.documentElement.scrollTop)}function N(t){let n=t;for(;n&&!(!n.parentNode||(n=n.parentNode,n===document.body||n===document.documentElement));){const r=/(scroll|auto)/,{overflowY:e,overflow:s}=d(n);if(r.test(e)||r.test(s))return n}return window}function L(t){const n=[];let r=t;for(;!x(r);)r=N(r),n.push(r);return n}function W(){const{width:t,height:n}=p(window);return{vw:t,vh:n,vMin:Math.min(t,n),vMax:Math.max(t,n)}}const z=t=>o(t)&&t.endsWith("rem"),P=t=>o(t)&&t.endsWith("px")||M(t),F=t=>o(t)&&t.endsWith("vw"),V=t=>o(t)&&t.endsWith("vh"),y=t=>o(t)&&t.endsWith("vmin"),E=t=>o(t)&&t.endsWith("vmax"),R=t=>{if(f(t))return Number(t);if(P(t))return+t.replace("px","");if(!g())return 0;const{vw:n,vh:r,vMin:e,vMax:s}=W();if(F(t))return+t.replace("vw","")*n/100;if(V(t))return+t.replace("vh","")*r/100;if(y(t))return+t.replace("vmin","")*e/100;if(E(t))return+t.replace("vmax","")*s/100;if(z(t)){const c=+t.replace("rem",""),i=d(document.documentElement).fontSize;return c*parseFloat(i)}return o(t)?S(t):0},$=t=>{if(t!=null)return f(t)?`${t}px`:String(t)},q=(t,n=1)=>{if(t==null)return;const r=$(t),e=r.match(/(vh|%|r?em|px|vw|vmin|vmax)$/)[0];return`${parseFloat(r)*n}${e}`};function D(t,{top:n=0,left:r=0,duration:e=300,animation:s}){const c=Date.now(),i=T(t),a=b(t);return new Promise(h=>{const l=()=>{const m=(Date.now()-c)/e;if(m<1){const u=i+(n-i)*s(m),w=a+(r-a)*s(m);t.scrollTo(w,u),requestAnimationFrame(l)}else t.scrollTo(r,n),h()};requestAnimationFrame(l)})}export{A as a,R as b,L as c,N as g,q as m,D as s,$ as t};
