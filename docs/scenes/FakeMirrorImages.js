import{aI as e,az as t,V as a,ax as r,aJ as i,aK as l,aA as p}from"../vendor.js";import{v as s,f as o}from"../FakeMirrorVertex.js";class n{constructor(e){var{artifact:t,mergeConfig:a}=e;this.shaderConfig=a(t,{filterSize:"1.0",minDepth:"0.1",maxDepth:"5.0",depthThresholdFilter:"0.9",scale:"2.0",ptSize:"1.0",depthScale:"0.1",pixelDepth:"1.0",ifx:.00125,ify:.00125,itx:-.4,ity:-.6,ptSize:"1.0",textures:{}})}afterLoadModel(t){var{engine:a,preload:r}=t,{model:i}=a,{textures:l}=r.assets,p=Object.entries(l);if(null!=p&&p.length){var s=new e;s.name="textureGroup";var{target:o}=a.artifact.textures;p.forEach(((e,t)=>{var[a,r]=e,l=i.getObjectByName("".concat(o,"_").concat(t+1)),p=this.createPoints(r,l);s.add(p)})),i.add(s)}}createPoints(n,h){var d=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"1.0",{image:f}=n,{width:v,height:c}=f,u=new e;u.position.copy(h.position),u.rotation.copy(h.rotation),u.scale.copy(h.scale);for(var{ifx:x=.00125,ify:y=.00125,itx:m=-.4,ity:g=-.6,filterSize:S,minDepth:w,maxDepth:z,depthScale:D,depthThresholdFilter:F,scale:A,ptSize:j,pixelDepth:C}=this.shaderConfig,I={texImg:{type:"t",value:n},texSize:{type:"i2",value:[v,c]},iK:{type:"f4",value:[x,y,m,g]},alpha:{type:"f",value:d},filterSize:{type:"f",value:S},minDepth:{type:"f",value:w},maxDepth:{type:"f",value:z},depthThresholdFilter:{type:"f",value:F},scale:{type:"f",value:A},ptSize:{type:"f",value:(j*window.devicePixelRatio).toFixed(1).toString()},pixelDepth:{type:"f",value:C},depthScale:{type:"f",value:D}},b=new t({uniforms:I,side:a,transparent:!0,vertexShader:s,fragmentShader:o}),P=v/2*c,T=new Uint32Array(P),K=new Float32Array(P),M=0;M<P;M++)T[M]=M,K[M]=M;var O=new r;O.setAttribute("vertexIdx",new i(K,1)),O.setIndex(new l(new Uint32Array(T),1));var U=new p(O,b);return U.frustumCulled=!1,u.add(U),u}}export{n as default};
