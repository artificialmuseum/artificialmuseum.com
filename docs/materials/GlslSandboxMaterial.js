import{S as e,N as s,a9 as a,c as r}from"../vendor.js";class t extends e{constructor(e){var{config:r}=e,t=s(r,{resolution:{x:512,y:512},startTime:0,shader:"82051"});super({transparent:!0,side:a,uniforms:{uTime:{value:t.startTime,type:"f"},uRes:{value:t.resolution,type:"f2"}}}),this.config=t}preload(){var e=this;return r((function*(){var{fragmentShader:s}=yield import("./shaders/glslsandbox/".concat(e.config.shader,".js"));e.setValues({fragmentShader:s})}))()}}export{t as default};
