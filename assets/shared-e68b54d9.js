import{ay as t}from"./index-0a5f1302.js";const a=h=>{const c=[];return{cache:c,has(e){return this.cache.includes(e)},add(e){this.has(e)||(this.cache.length===h&&c.shift(),this.cache.push(e))},remove(e){this.has(e)&&t(this.cache,e)},clear(){this.cache.length=0}}},r=h=>h;export{a as c,r as l};
