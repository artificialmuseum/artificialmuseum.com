import{c as e,W as t,s as i,w as o,$ as a}from"./vendor.js";import{Preload as r}from"./Preload.js";var n=function(){var i=e((function*(e){var{artifact:i,button:o}=e,a=new r({artifact:i,root:t.ROOT_URL});o.disabled=!0;try{a._isWorking||(yield a.init({artifact:i}),yield a.startEngine({artifact:i}),o.disabled=!1)}catch(e){e.toString().toLowerCase().includes("error creating webgl context")&&a.showWebglDisabledNotification()}}));return function(e){return i.apply(this,arguments)}}(),s={"01":{slug:"howtodisappear01",city:"vienna",sky:"deserteursdenkmal",ply:{size:.05,sizeAttenuation:!0,file:"howtodisappear01",position:{y:1,z:-1}},glb:!1,audio:!0,video:!0,lookat:{y:1.7},record3d:{filterSize:"1",minDepth:"0.1",maxDepth:"5.0",depthThresholdFilter:"2.5",scale:"1.5",ptSize:"3.0",zOffset:"0.0",pixelDepth:"4.0",depthScale:"-1",hueRedReducer:"1.1",sizeAttenuation:"10.0",position:{y:3,z:-3.2}}},"02":{slug:"howtodisappear02",city:"vienna",sky:"deserteursdenkmal",glb:!1,video:!0,lookat:{y:1.7},record3d:{filterSize:"1",minDepth:"0.1",maxDepth:"5.0",depthThresholdFilter:"2.5",scale:"10.0",ptSize:"3.0",zOffset:"0.0",pixelDepth:"1.5",depthScale:"-1",hueRedReducer:"1.6",sizeAttenuation:"15.0",position:{x:-3.5,y:2.7,z:-11}}},"03":{slug:"howtodisappear03",city:"vienna",sky:"deserteursdenkmal",distance:-1,glb:!1,audio:!0,video:!0,lookat:{y:1.7},record3d:{filterSize:"1",minDepth:"0.1",maxDepth:"5.0",depthThresholdFilter:"0.05",scale:"13.0",ptSize:"3",zOffset:"0.0",pixelDepth:"0.88",depthScale:"-1",hueRedReducer:"1.1",sizeAttenuation:"10.0",position:{y:2.8,z:-6}}},"04":{slug:"howtodisappear04",city:"vienna",sky:"deserteursdenkmal",distance:-1,audio:!0,video:!0,glb:!1,lookat:{y:1.7},record3d:{filterSize:"1",minDepth:"0.1",maxDepth:"5.0",depthThresholdFilter:"2.5",scale:"2.0",ptSize:"3",zOffset:"0.0",pixelDepth:"4.2",depthScale:"-1",hueRedReducer:"1.1",sizeAttenuation:"10.0",position:{y:3.5,z:-4}},ply:{size:.02,sizeAttenuation:!0,file:"howtodisappear04",position:{y:1.5}}}},d={isLoading:!1};(function(){var r=e((function*(){t.SUPPORTS=yield i(),o&&a("a").forEach((e=>{e.removeAttribute("target")})),a.on(".show-artifact","click",function(){var t=e((function*(e){if(!d.isLoading){d.isLoading=!0;var t=e.target.id.split("-").pop(),i=s[t];i&&(yield n({artifact:i,button:e.target}),d.isLoading=!1)}}));return function(e){return t.apply(this,arguments)}}())}));return function(){return r.apply(this,arguments)}})()();
