import{aE as t,ab as s,a5 as i,M as e}from"../vendor.js";class h{constructor(t){var{artifact:s}=t,{lightDistance:i=.45,yOffset:e=1.45,showLights:h=s.showLights}=s;this.lightDistance=i,this.yOffset=e,this.showLights=h}init(t){var{engine:s,preload:i}=t,{renderer:e,scene:h,camera:a}=s,{gltf:r}=i.assets;this.model=r.scene,this.renderer=e,this.scene=h,this.camera=a,this.pointLight=this.createLight(16733525),this.model.add(this.pointLight),this.pointLight2=this.createLight(11184895),this.model.add(this.pointLight2)}createLight(h){var a=new t(h,50,1);if(a.castShadow=!0,a.shadow.camera.near=.1,a.shadow.camera.far=5,this.showLights){var r=new s(.005,6,6),n=new i({color:h}),o=new e(r,n);a.add(o)}return a}render(t){var s=this.lightDistance,i=5e-4*t,e=Math.sin(i)*s,h=Math.sin(1.1*i)*s+this.yOffset,a=Math.sin(1.2*i)*s;this.pointLight.position.set(e,h,a);var r=i+1e4,n=M.sin(r)*s,o=M.sin(1.1*r)*s+this.yOffset,c=M.sin(1.2*r)*s;this.pointLight2.position.set(n,o,c),this.renderer.render(this.scene,this.camera)}}export{h as default};
