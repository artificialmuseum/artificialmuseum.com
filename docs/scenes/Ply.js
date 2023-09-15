import{A as e,O as i,_ as a,W as o,n as t,S as r,a as l,P as s,p as n,ad as f}from"../vendor.js";class p{constructor(a){var{artifact:o,mergeConfig:t}=a;this.config=t(o.ply,{blending:e,depthTest:!1,file:o.slug,materials:["yellow"],positionOffset:.05,size:.01,sizeAttenuation:!0,scaleOffset:.01,opacity:"1.0",fallbackAlphaDivisor:3,vertexColors:!1}),this.model=new i}preload(e){var i=this;return a((function*(){var{preload:a}=e,{file:o}=i.config;o.startsWith("/")||(o="https://static.artificialmuseum.com/ply/".concat(o,".ply")),o.endsWith(".ply")||(o+=".ply");var t=a.plyLoader;i.geo=yield a.promisifiedLoad({loader:t,file:o})}))()}beforeLoadModel(e){var{engine:i}=e,{blending:a,depthTest:p,materials:d,size:u,sizeAttenuation:c,positionOffset:v,scaleOffset:m,opacity:h,fallbackAlphaDivisor:g,vertexColors:y}=this.config;if(y){var x=new f({vertexColors:y,size:u,sizeAttenuation:c,opacity:h,transparent:"1.0"!==h}),z=new s(this.geo,x);this.model.add(z)}else{var A={fragmentShader:"precision highp float;\n#define GLSLIFY 1\nuniform vec3 uColor;uniform float uAlpha;void main(){vec4 col=vec4(uColor,uAlpha);gl_FragColor=col;}",vertexShader:"precision highp float;\n#define GLSLIFY 1\nuniform float uSize;void main(){gl_PointSize=uSize;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",depthTest:p,blending:a,uniforms:{uSize:{value:u*o.pxRatio,type:"f"},uColor:{value:new t(16711680),type:"f3"},uAlpha:{value:1,type:"f"}}},S=i.XR?1:g,w=new r(l(l({},A),{},{uniforms:l({},A.uniforms)})),C=new s(this.geo,w);d.forEach(((e,i)=>{var a=h;if(n.arr(e)){var[o,r=h]=e;a=r,e=o}a=(parseFloat(a)/S).toFixed(2).toString();var l=C.clone();l.material=l.material.clone(),l.material.uniforms.uColor.value=new t(e),l.material.uniforms.uAlpha.value=a;var s=1+i*m;l.scale.set(s,s,s),l.position.x=i*v,this.model.add(l)}))}}}export{p as default};
