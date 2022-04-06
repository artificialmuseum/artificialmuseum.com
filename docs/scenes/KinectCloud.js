import{c as n,aj as a,aA as o,aB as t,aC as e,S as i,a8 as r,aD as l,aE as p}from"../vendor.js";class s{constructor(n){var{artifact:a}=n;this.alpha=a.alpha}init(s){var v=this;return n((function*(){var{preload:n}=s,{videoElement:f}=n.assets,c=new a(f);c.minFilter=o;for(var h=800,m=new t,g=new Float32Array(144e4),u=0,d=0;u<g.length;u+=3,d++)g[u]=d%h,g[u+1]=Math.floor(d/h);m.setAttribute("position",new e(g,3));var w=new i({uniforms:{map:{value:c},width:{value:h},height:{value:600},nearClipping:{value:2},farClipping:{value:5},pointSize:{value:3},zOffset:{value:0}},vertexShader:"\nuniform sampler2D map;\n\nuniform float width;\nuniform float height;\nuniform float nearClipping, farClipping;\n\nuniform float pointSize;\nuniform float zOffset;\n\nvarying vec2 vUv;\n\nconst float XtoZ = 1.11146;\nconst float YtoZ = 0.83359;\n\nvoid main() {\n  vUv = vec2(position.x / width, position.y / height);\n\n  vec4 color = texture2D( map, vUv );\n  float depth = (color.r + color.g + color.b) / 3.0;\n\n  float z = (1.0 - depth) * (farClipping - nearClipping) + nearClipping;\n\n  vec4 pos = vec4(\n    (position.x / width - 0.5) * z * XtoZ * 2.0,\n    (position.y / height - 0.5) * z * YtoZ * 2.0,\n    - z + zOffset,\n    1.0);\n\n  gl_PointSize = pointSize;\n  gl_Position = projectionMatrix * modelViewMatrix * pos;\n}\n",fragmentShader:"\nuniform sampler2D map;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vec4 color = texture2D(map, vUv);\n  gl_FragColor = vec4(color.r, color.g, color.b, 1);\n}\n"});v.alpha&&(w.blending=r,w.depthTest=!1,w.depthWrite=!1,w.transparent=!0);var z=new l(m,w);z.position.set(0,.5,0);var C=new p;C.add(z),v.model=C}))()}}export{s as default};
