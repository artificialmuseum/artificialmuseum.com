import{aj as e,ax as a,aC as i,a7 as s,a1 as t,M as n,aB as d}from"../vendor.js";class l{init(l){var{engine:m}=l,{videoElement:o}=m,{plane:p={}}=m.artifact,{width:r=3,height:c=1.66,widthSegments:h=50,heightSegments:w=32,displacementScale:g=1,position:v={x:0,y:1.5,z:-.5}}=p,{x:x=0,y:S=1.5,z:f=-.5}=v,j=new e(o);j.minFilter=a;var y=new i({map:j,displacementMap:j,displacementScale:g,side:s}),z=new t(r,c,h,w),M=new n(z,y);M.position.set(x,S,f);var u=new d;u.add(M),this.model=u}}export{l as default};
