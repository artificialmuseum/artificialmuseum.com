import{az as n}from"../vendor.js";class r extends n{constructor(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n.vertexShader||(n.vertexShader=o),n.fragmentShader||(n.fragmentShader=a),super(n)}}var o="\nvarying vec3 vNormal;\nvoid main() {\n    vNormal = normalize( normalMatrix * normal );\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}\n",a="\nvarying vec3 vNormal;\nvoid main() {\n  float intensity = pow( 0.7 - dot( vNormal, vec3( 0.0, 0.0, 1.0 ) ), 4.0 );\n  gl_FragColor = vec4( 1.0, 1.0, 1.0, 1.0 ) * intensity;\n}\n";export{r as GlowMaterial};
