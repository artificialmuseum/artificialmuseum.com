import{A as e,O as a,c as i,W as o,a3 as t,S as r,_ as l,P as s,a as n,ac as f}from"../vendor.js";class p{constructor(i){var{artifact:o,mergeConfig:t}=i;this.config=t(o.ply,{blending:e,depthTest:!1,file:o.slug,materials:["yellow"],positionOffset:.05,size:1,sizeAttenuation:0,scaleOffset:.01,opacity:"1.0",fallbackAlphaDivisor:3,vertexColors:!1}),this.model=new a}preload(e){var a=this;return i((function*(){var{preload:i}=e,{file:t}=a.config;t.startsWith("/")||(t="".concat(o.STATIC_URL,"/ply/").concat(t,".ply")),t.endsWith(".ply")||(t+=".ply");var r=i.plyLoader;a.geo=yield i.promisifiedLoad({loader:r,file:t})}))()}beforeLoadModel(e){var{engine:a}=e,{blending:i,depthTest:p,materials:c,size:d,sizeAttenuation:u,positionOffset:v,scaleOffset:h,opacity:m,fallbackAlphaDivisor:g,vertexColors:y}=this.config;if(y){var A=new f({vertexColors:y,size:d,sizeAttenuation:u,opacity:m,transparent:"1.0"!==m}),S=new s(this.geo,A);this.model.add(S)}else{var x={fragmentShader:"precision highp float;\n#define GLSLIFY 1\nuniform vec3 uColor;uniform float uAlpha;void main(){vec4 col=vec4(uColor,uAlpha);gl_FragColor=col;}",vertexShader:"precision highp float;\n#define GLSLIFY 1\nuniform float uSize;void main(){gl_PointSize=uSize;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",depthTest:p,blending:i,uniforms:{uSize:{value:d*o.pxRatio,type:"f"},uColor:{value:new t(16711680),type:"f3"},uAlpha:{value:1,type:"f"}}},z=a.XR?1:g,C=new r(l(l({},x),{},{uniforms:l({},x.uniforms)})),w=new s(this.geo,C);c.forEach(((e,a)=>{var i=m;if(n.arr(e)){var[o,r=m]=e;i=r,e=o}i=(parseFloat(i)/z).toFixed(2).toString();var l=w.clone();l.material=l.material.clone(),l.material.uniforms.uColor.value=new t(e),l.material.uniforms.uAlpha.value=i;var s=1+a*h;l.scale.set(s,s,s),l.position.x=a*v,this.model.add(l)}))}}}export{p as default};
