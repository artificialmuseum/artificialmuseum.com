import{a7 as e}from"../vendor.js";class s{constructor(e){var{artifact:s}=e,{skyName:a="sky"}=s;this.skyName=a}beforeLoadModel(s){var{engine:a,preload:t}=s,{XR:i}=a,r=t.assets.gltf.scene.getObjectByName(this.skyName);if(i)r.material.map=t.assets.skybox,r.material.side=e,r.receiveShadow=!1,r.castShadow=!1;else{r.visible=!1;var o=t.assets.gltf.scene.getObjectByName("clip");o&&(o.visible=!1)}}}export{s as default};
