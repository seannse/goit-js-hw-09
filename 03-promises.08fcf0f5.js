var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var i=n("iQIUW");function r(e,t){const o=Math.random()>.3;return new Promise(((n,i)=>{setTimeout((()=>{o?n({position:e,delay:t}):i({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const{amount:t,delay:o,step:n}=e.target.elements;let l=+o.value;for(let e=0;e<+t.value;e+=1)l+=+n.value*(e>0?1:0),r(e,l).then((({position:e,delay:t})=>{i.Notify.success(`✅ Fulfilled promise ${e+1} in ${t}ms`,{width:"320px",fontSize:"20px"})})).catch((({position:e,delay:t})=>{i.Notify.failure(`❌ Rejected promise ${e+1} in ${t}ms`,{width:"320px",fontSize:"20px"})}))}));
//# sourceMappingURL=03-promises.08fcf0f5.js.map
