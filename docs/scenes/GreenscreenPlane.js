import{ak as e,aC as a,al as t,a1 as i,M as n,aG as s}from"../vendor.js";class o{init(o){var{engine:r}=o,{artifact:d,videoElement:h}=r,{plane:l={}}=d,{width:m=1.66,height:w=3,widthSegments:g=32,heightSegments:p=50,position:v={x:0,y:1.5,z:-.5}}=l,{x:f=0,y:x=1.5,z:c=-.5}=v,y=new e(h);y.minFilter=a;var z=new t(d,y),S=new i(m,w,g,p),j=new n(S,z);j.position.set(f,x,c);var k=new s;k.add(j),this.model=k}}export{o as default};
