import{S as e,_ as a,Y as o,bb as r,D as t,al as l}from"../vendor.js";class n extends e{constructor(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{range:v=.5,mult:u=7,chromaKey:m=54322,chromaKeyDepthTest:s=!0}=e;super(a(a({side:t},i),{},{transparent:!0,uniforms:{uTex:{type:"t",value:n},uChromaKey:{type:"c",value:new o(m)},uRange:{type:"f",value:r(v)},uAlphaMult:{type:"f",value:r(u)}},vertexShader:"#define GLSLIFY 1\nvarying vec2 vUv;void main(){vUv=uv;vec4 mvPosition=modelViewMatrix*vec4(position,1.0);gl_Position=projectionMatrix*mvPosition;}",fragmentShader:"#define GLSLIFY 1\nuniform sampler2D uTex;uniform vec3 uChromaKey;uniform float uAlphaMult;uniform float uRange;varying vec2 vUv;void main(){vec3 lColor=texture2D(uTex,vUv).rgb;float lAlpha=(length(lColor-uChromaKey)-uRange)*uAlphaMult;gl_FragColor=vec4(lColor,lAlpha);}",depthTest:s})),n.minFilter=l,n.magFilter=l}}export{n as ChromaKeyMaterial};
