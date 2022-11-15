import{aB as e,_ as a,a0 as t,aY as r,V as o,aH as n}from"../vendor.js";class i extends e{constructor(e,i){var v=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{range:m=.5,mult:l=7,chromaKey:s=54322,chromaKeyDepthTest:c=!0}=e;super(a(a({side:o},v),{},{transparent:!0,uniforms:{tex:{type:"t",value:i},chromaKey:{type:"c",value:new t(s)},range:{type:"f",value:r(m)},mult:{type:"f",value:r(l)}},vertexShader:"#define GLSLIFY 1\nvarying vec2 vUv;void main(){vUv=uv;vec4 mvPosition=modelViewMatrix*vec4(position,1.0);gl_Position=projectionMatrix*mvPosition;}",fragmentShader:"#define GLSLIFY 1\nuniform sampler2D tex;uniform vec3 chromaKey;uniform float mult;uniform float range;varying vec2 vUv;void main(){vec3 tColor=texture2D(tex,vUv).rgb;float a=(length(tColor-chromaKey)-range)*mult;gl_FragColor=vec4(tColor,a);}",depthTest:c})),i.minFilter=n,i.magFilter=n}}export{i as ChromaKeyMaterial};
