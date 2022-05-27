import{S as e,C as o}from"../vendor.js";class r extends e{constructor(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.vertexShader||(e.vertexShader="#define GLSLIFY 1\nuniform float fresnelBias;uniform float fresnelScale;uniform float fresnelPower;varying float vReflectionFactor;void main(){vec4 mvPosition=modelViewMatrix*vec4(position,1.0);vec4 worldPosition=modelMatrix*vec4(position,1.0);vec3 worldNormal=normalize(mat3(modelMatrix[0].xyz,modelMatrix[1].xyz,modelMatrix[2].xyz)*normal);vec3 I=worldPosition.xyz-cameraPosition;vReflectionFactor=fresnelBias+fresnelScale*pow(1.0+dot(normalize(I),worldNormal),fresnelPower);gl_Position=projectionMatrix*mvPosition;}"),e.fragmentShader||(e.fragmentShader="#define GLSLIFY 1\nuniform vec3 color1;uniform vec3 color2;varying float vReflectionFactor;void main(){gl_FragColor=vec4(mix(color2,color1,vec3(clamp(vReflectionFactor,0.0,1.0))),1.0);}"),e.uniforms||(e.uniforms={});var r=e.diffuseColor||16777215,l=e.fresnelColor||0,i=e.fresnelBias||.1,a=e.fresnelScale||1,n=e.fresnelPower||2;e.uniforms={color1:{type:"c",value:new o(r)},color2:{type:"c",value:new o(l)},fresnelBias:{type:"f",value:i},fresnelScale:{type:"f",value:a},fresnelPower:{type:"f",value:n}},super(e)}}export{r as FresnelMaterial};