import{a8 as e,aG as a,c as o,W as i,C as t,S as r,_ as l,aF as n,a as s,a_ as f}from"../vendor.js";class p{constructor(o){var{artifact:i,mergeConfig:t}=o;this.config=t(i.ply,{blending:e,depthTest:!1,file:i.slug,materials:["yellow"],positionOffset:.05,size:1,sizeAttenuation:0,scaleOffset:.01,opacity:"1.0",fallbackAlphaDivisor:3,computeVertexNormals:!1,vertexColors:!1}),this.model=new a}preload(e){var a=this;return o((function*(){var{preload:o}=e,{file:t,computeVertexNormals:r}=a.config;t.startsWith("/")||(t="".concat(i.STATIC_URL,"/ply/").concat(t,".ply")),t.endsWith(".ply")||(t+=".ply");var l=o.plyLoader;a.geo=yield o.promisifiedLoad({loader:l,file:t}),r&&a.geo.computeVertexNormals()}))()}beforeLoadModel(e){var a=this;return o((function*(){var{engine:o}=e,{blending:p,depthTest:c,materials:u,size:d,sizeAttenuation:m,positionOffset:v,scaleOffset:g,opacity:h,fallbackAlphaDivisor:y,vertexColors:x}=a.config;if(x){var C=new f({vertexColors:x,size:d,sizeAttenuation:m,opacity:h,transparent:"1.0"!==h}),S=new n(a.geo,C);a.model.add(S)}else{var z={fragmentShader:"precision highp float;\n#define GLSLIFY 1\nuniform vec3 uColor;uniform float uAlpha;void main(){vec4 col=vec4(uColor,uAlpha);gl_FragColor=col;}",vertexShader:"precision highp float;\n#define GLSLIFY 1\nuniform float uSize;void main(){gl_PointSize=uSize;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",depthTest:c,blending:p,uniforms:{uSize:{value:d*i.pxRatio,type:"f"},uColor:{value:new t(16711680),type:"f3"},uAlpha:{value:1,type:"f"}}},A=o.XR?1:y,w=new r(l(l({},z),{},{uniforms:l({},z.uniforms)})),L=new n(a.geo,w);u.forEach(((e,o)=>{var i=h;if(s.arr(e)){var[r,l=h]=e;i=l,e=r}i=(parseFloat(i)/A).toFixed(2).toString();var n=L.clone();n.material=n.material.clone(),n.material.uniforms.uColor.value=new t(e),n.material.uniforms.uAlpha.value=i;var f=1+o*g;n.scale.set(f,f,f),n.position.x=o*v,a.model.add(n)}))}}))()}}export{p as default};
