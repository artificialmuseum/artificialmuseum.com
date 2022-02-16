import{_ as a,aC as e,c as o,aW as i,a8 as t,W as l,a as r,S as n,C as s,aB as f}from"../vendor.js";class p{constructor(o){var{artifact:i}=o,{ply:t={}}=i;this.config=a({file:i.slug,materials:["yellow"],positionOffset:.05,pointSize:1,scaleOffset:.01,defaultAlpha:i.alpha||"1.0",fallbackAlphaDivisor:3},t),this.model=new e}preload(){var a=this;return o((function*(){var{file:e}=a.config,o="".concat(l.STATIC_URL,"/ply/").concat(e,".ply"),t=new i;a.geo=yield new Promise(((a,e)=>{t.load(o,a,(()=>{}),e)})),a.geo.computeVertexNormals()}))()}init(e){var i=this;return o((function*(){var{engine:o}=e,{materials:p,pointSize:c,positionOffset:u,scaleOffset:d,defaultAlpha:v,fallbackAlphaDivisor:h}=i.config,m={fragmentShader:"precision highp float;\n#define GLSLIFY 1\nuniform vec3 uColor;uniform float uAlpha;void main(){vec4 col=vec4(uColor,uAlpha);gl_FragColor=col;}",vertexShader:"precision highp float;\n#define GLSLIFY 1\nuniform float uSize;void main(){gl_PointSize=uSize;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",depthTest:!1,blending:t,uniforms:{uSize:{value:c*l.pxRatio,type:"f"}}},g=o.XR?1:h;p.forEach(((e,o)=>{var t=v;if(r.arr(e)){var[l,p=v]=e;t=p,e=l}t=(parseFloat(t).toFixed(2)/g).toString();var c=new n(a(a({},m),{},{uniforms:a(a({},m.uniforms),{},{uColor:{value:new s(e),type:"f3"},uAlpha:{value:t,type:"f"}})})),h=new f(i.geo,c),S=1+o*d;h.scale.set(S,S,S),h.position.x=o*u,i.model.add(h)}))}))()}}export{p as default};
