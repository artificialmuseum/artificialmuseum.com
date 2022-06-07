import{$ as e,ar as t,L as i,W as a,aP as s,aQ as o,aR as h,S as d,a9 as n,aK as r,aS as l,aT as p,aM as c}from"../vendor.js";import{v,f}from"../FakeMirrorVertex.js";class u{constructor(e){var{artifact:t}=e,{filterSize:i="1",minDepth:a="0.1",maxDepth:s="5.0",depthThresholdFilter:o="0.9",scale:h="7.0",ptSize:d=1,depthScale:n="1.0",pixelDepth:r="2.0",permanentSeconds:l=[],useBone:p=!1,parentName:c="parent",playbackRate:v=1,loopVideo:f=!0,continueVideoSound:u=!1,useFog:m=!1,addFog:g=1e-4,fogColor:S=16448250,rotation:y={},videoAlpha:x=1,permanentAlpha:w=.1,hideModelsOnVideoEnded:F=[],addReflector:C=!1}=t;this.shaderConfig={filterSize:i,minDepth:a,maxDepth:s,depthThresholdFilter:o,scale:h,depthScale:n,ptSize:(d*window.devicePixelRatio).toFixed(1).toString(),pixelDepth:r},this.permanentSeconds=l,this.currentSecondId=0,this.useBone=p,this.parentName=c,this.useFog=m,this.addFog=g,this.fogColor=S,this.loopVideo=f,this.continueVideoSound=u,this.hideModelsOnVideoEnded=F,this.addReflector=C,this.videoAlpha=x,this.permanentAlpha=w,this.rotation=y,this.playbackRate=v,this.hideCharacter=this.hideCharacter.bind(this)}beforeLoadModel(h){var{engine:d,preload:n}=h;this.engine=d,this.preload=n;var{videoElement:r}=n.assets,{videoWidth:l,videoHeight:p}=r;if(r){r.playbackRate=this.playbackRate,this.modelsToHide=[],(this.hideModelsOnVideoEnded.length||!1===this.loopVideo)&&(e.on(r,"seeked",this.hideCharacter),this.hideModelsOnVideoEnded.forEach((e=>{var t=n.assets.gltf.scene.getObjectByName(e);t.material.transparent=!0,this.modelsToHide.push(t)})));var c=new t(r,{minFilter:i});this.pointCopies=[],this.canvases=[],this.permanentSeconds.forEach(((t,o)=>{var h=e.create("canvas",{height:p,width:l,style:{position:"fixed",left:"100vw"},parent:a.B});this.canvases.push(h);var n=new s(h,{minFilter:i}),r=this.createPoints(n,this.permanentAlpha);r.visible=!1,this.pointCopies.push(r),d.scene.add(r)}));var v=this.createPoints(c,this.videoAlpha),f=this.rotation;f.x&&v.rotateX(f.x),f.y&&v.rotateY(f.y),f.z&&v.rotateZ(f.z),this.useBone?this.child=v:this.model=v,this.useFog&&(this.fog=new o(this.fogColor,.005),this.engine.scene.fog=this.fog)}}hideCharacter(){this.hasTriggeredOnce?this.fadeOutModel=!0:this.hasTriggeredOnce=!0}createPoints(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"1.0",{artifact:i={}}=this.engine,{videoElement:a}=this.preload,{videoWidth:s,videoHeight:o}=a,u=new h,{ifx:m=.00125,ify:g=.00125,itx:S=-.4,ity:y=-.6}=i,{filterSize:x,minDepth:w,maxDepth:F,depthScale:C,depthThresholdFilter:b,scale:D,ptSize:I,pixelDepth:z}=this.shaderConfig,E=new d({uniforms:{texImg:{type:"t",value:e},texSize:{type:"i2",value:[s,o]},iK:{type:"f4",value:[m,g,S,y]},alpha:{type:"f",value:t},filterSize:{type:"f",value:x},minDepth:{type:"f",value:w},maxDepth:{type:"f",value:F},depthThresholdFilter:{type:"f",value:b},scale:{type:"f",value:D},ptSize:{type:"f",value:I},pixelDepth:{type:"f",value:z},depthScale:{type:"f",value:C}},side:n,transparent:!0,vertexShader:v,fragmentShader:f}),T=s/2*o,V=new Uint32Array(T),A=new Float32Array(T),M=0;M<T;M++)V[M]=M,A[M]=M;var O=new r;O.setAttribute("vertexIdx",new l(A,1)),O.setIndex(new p(new Uint32Array(V),1));var R=new c(O,E);return R.frustumCulled=!1,u.add(R),u}exit(){e.remove(this.canvasImgs)}renderCopies(e){new Promise((t=>{var{videoElement:i}=e,{videoHeight:a,videoWidth:s}=i;if(this.waitForSecond){if(i.currentTime>this.waitForSecond){this.canvases[this.currentSecondId].getContext("2d").drawImage(i,0,0,s,a);var o=this.pointCopies[this.currentSecondId];o.visible=!0,this.child.matrixWorld.decompose(o.position,o.rotation,o.scale),this.currentSecondId++,this.waitForSecond=this.permanentSeconds[this.currentSecondId]}}else this.waitForSecond=this.permanentSeconds[this.currentSecondId];t()}))}tick(e){var{engine:t}=e;if(this.currentSecondId<this.permanentSeconds.length&&this.renderCopies(t),this.fog&&this.addFog&&(this.fog.density+=this.addFog),this.fadeOutModel&&!this.hasFaded){this.modelsToHide.forEach((e=>{e.material.opacity>0?e.material.opacity-=.05:e.visible&&(e.visible=!1)}));var i=this.model||this.child;if(i&&i.visible){var a,s,o,h=null==i?void 0:i.children[0];(null==h||null===(a=h.material)||void 0===a||null===(s=a.uniforms)||void 0===s||null===(o=s.alpha)||void 0===o?void 0:o.value)>0?h.material.uniforms.alpha.value-=.05:i.visible&&(i.visible=!1,this.continuePlayingNonLoopedVideo&&this.preload.videoElement.pause())}}}}export{u as default};
