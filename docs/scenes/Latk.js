import{t as e,O as t,B as s,G as r,u as a,v as i,x as o,_ as h}from"../vendor.js";class n{constructor(t){var{artifact:s}=t,r=[{mat:{color:16711680},pos:[0,0,0]}],{file:a=s.slug}=s.latk,{fps:i=12,layers:o=r,reverse:h=!1}=s.latk;this.file=a;this.frameMsInterval=1e3/i,this.layers=o,this.reverse=h,this.longestLayer=-1,this.currentFrame=0,this.light=new e(8421504)}beforeLoadModel(e){var{engine:a,preload:i}=e;this.model=new t,this.model.position.set(0,0,0),i.assets.gltf&&(i.assets.gltf.scene.position.set(0,1,0),this.model.add(i.assets.gltf.scene),this.light.color.setRGB(.25,1,1),this.model.add(this.light)),this.renderer=a.renderer,this.camera=a.camera,this.scene=a.scene,this.buffer=new s,this.lineGroup=new r,this.lineGroup.scale.set(1,1,2),this.lineGroup.position.set(0,-1,-2),this.model.add(this.lineGroup),this.layers.forEach((e=>{var t=this.createLayer(e);this.lineGroup.add(t)}))}createLayer(e){var{mat:t,pos:s}=e,r=new a(t),h=new i(this.buffer,r);return h.frustumCulled=!1,s&&h.position.add(new o(...s)),h}preload(){var e=this;return h((function*(){var{file:t}=e;t.endsWith(".js")||(t+=".js"),t.startsWith("/")||(t="https://static.artificialmuseum.com/latk/".concat(t));var{latk:s}=yield import(t);s.forEach((t=>{t.layers.forEach((t=>{t.frames.length>e.longestLayer&&(e.longestLayer=t.frames.length),t.frames.forEach((t=>{t.strokes.forEach((t=>{var s=t.points.map((t=>e.point2Vec(t)));t.points=s}))}))}))})),e.latk=s}))()}point2Vec(e){return e=Array.isArray(e)?e:e.co,this.reverse&&(e=e.reverse()),new o(...e)}tick(e){var{timestamp:t}=e;this.light.intensity=Math.random()+1;var{latk:s}=this;if(s&&s.length&&(!this.lastTick||this.lastTick+this.frameMsInterval<=t)){var r=[];s.forEach((e=>{var{layers:t}=e;t.forEach((e=>{var{frames:t={}}=e,{strokes:s=[]}=t[this.currentFrame];s.forEach((e=>{var t=this.drawStroke(e);r.push(...t)}))}))})),this.buffer.setFromPoints(r),this.currentFrame+=1,this.lastTick=t,this.lineGroup.traverse((e=>{e.geometry=this.buffer}));var a=this.longestLayer-1;this.currentFrame>a&&(this.currentFrame=0)}}drawStroke(e){for(var t=[],s=0;s<e.points.length-1;s++)t.push(e.points[s]),t.push(e.points[s+1]);return t}}export{n as default};
