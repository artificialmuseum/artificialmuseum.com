import{c as t,W as r,s as i,w as a,$ as e}from"./vendor.js";import{Preload as o}from"./Preload.js";var n=i=>{var{artifact:a,button:e}=i;return t((function*(){var t=new o({artifact:a,root:r.ROOT_URL});e.disabled=!0;try{t._isWorking||(yield t.init({artifact:a}),yield t.startEngine({artifact:a}),e.disabled=!1)}catch(r){r.toString().toLowerCase().includes("error creating webgl context")&&t.showWebglDisabledNotification()}}))},c=function(){var o=t((function*(){return r.SUPPORTS=yield i(),a&&e("a").forEach((t=>{t.removeAttribute("target")})),n}));return function(){return o.apply(this,arguments)}}();export{c as sandbox};