import{c as e,aB as r,ay as a,aG as t,aR as s,aS as i,V as n,W as o}from"../vendor.js";class l{constructor(e){var{artifact:r}=e,a=[{mat:{color:16711680},pos:[0,0,0]}],{file:t=r.slug}=r,{fps:s=12,layers:i=a,reverse:n=!1}=r.latk;this.file=t;this.frameMsInterval=1e3/s,this.layers=i,this.reverse=n,this.longestLayer=-1,this.currentFrame=0}init(s){var i=this;return e((function*(){var{engine:e,preload:n}=s;n.assets.gltf?i.model=n.assets.gltf.scene:(i.model=new r,i.model.position.set(0,0,0)),i.renderer=e.renderer,i.camera=e.camera,i.scene=e.scene,i.buffer=new a,i.lineGroup=new t,i.model.add(i.lineGroup),i.layers.forEach((e=>{var r=i.createLayer(e);i.lineGroup.add(r)}))}))()}createLayer(e){var{mat:r,pos:a}=e,t=new s(r),o=new i(this.buffer,t);return o.frustumCulled=!1,a&&o.position.add(new n(...a)),o}preload(){var r=this;return e((function*(){var{latk:e}=yield import("".concat(o.STATIC_URL,"/latk/").concat(r.file,".js"));e.forEach((e=>{e.layers.forEach((e=>{e.frames.length>r.longestLayer&&(r.longestLayer=e.frames.length),e.frames.forEach((e=>{e.strokes.forEach((e=>{var a=e.points.map((e=>r.point2Vec(e)));e.points=a}))}))}))})),r.latk=e}))()}point2Vec(e){return e=Array.isArray(e)?e:e.co,this.reverse&&(e=e.reverse()),new n(...e)}render(e){this.updateLatk(e),this.renderer.render(this.scene,this.camera)}updateLatk(e){var{latk:r}=this;if(r&&r.length&&(!this.lastTick||this.lastTick+this.frameMsInterval<=e)){var a=[];r.forEach((e=>{var{layers:r}=e;r.forEach((e=>{var{frames:r={}}=e,{strokes:t=[]}=r[this.currentFrame];t.forEach((e=>{var r=this.drawStroke(e);a.push(...r)}))}))})),this.buffer.setFromPoints(a),this.currentFrame+=1,this.lastTick=e,this.lineGroup.traverse((e=>{e.geometry=this.buffer}));var t=this.longestLayer-1;this.currentFrame>t&&(this.currentFrame=0)}}drawStroke(e){for(var r=[],a=0;a<e.points.length-1;a++)r.push(e.points[a]),r.push(e.points[a+1]);return r}}export{l as default};
