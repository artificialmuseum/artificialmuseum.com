import{_ as t,W as r,s as a,T as i,w as o,$ as e}from"./vendor.js";import{Preload as n}from"./Preload.js";var c=function(){var c=t((function*(t){var{artifact:c,root:s}=t;r.SUPPORTS=yield a();var{XR:f}=r.SUPPORTS;r.SUPPORTS.WEBP=!1,r.SUPPORTS.WEBM=!1;var E=new n({artifact:c,root:s,THREE:i});try{E._isWorking||(yield E.init({artifact:c,THREE:i,XR:f}),yield E.startEngine({artifact:c,THREE:i,XR:f}))}catch(t){t.toString().toLowerCase().includes("error creating webgl context")&&E.showWebglDisabledNotification()}o&&e("a").forEach((t=>{t.removeAttribute("target")}))}));return function(t){return c.apply(this,arguments)}}();export{c as cms};
