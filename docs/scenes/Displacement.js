import{am as e,aC as a,aH as s,a8 as t,a2 as i,M as n,aG as d}from"../vendor.js";class o{beforeLoadModel(o){var{engine:l}=o,{videoElement:m}=l,{plane:p={}}=l.artifact,{width:r=3,height:c=1.66,widthSegments:h=50,heightSegments:w=32,displacementScale:g=1,position:v={x:0,y:1.5,z:-.5}}=p,{x:f=0,y:S=1.5,z:x=-.5}=v,M=new e(m);M.minFilter=a;var y=new s({map:M,displacementMap:M,displacementScale:g,side:t}),z=new i(r,c,h,w),b=new n(z,y);b.position.set(f,S,x);var j=new d;j.add(b),this.model=j}}export{o as default};
