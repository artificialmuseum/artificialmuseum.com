import{ak as e,aH as a,a7 as s,ac as o,M as t,a5 as d,aq as n,aG as i}from"../vendor.js";class l{beforeLoadModel(l){var{preload:r}=l,{gltf:m,videoElement:p}=r.assets,{scene:w}=m,c=[0,1.2,0],b=new e(p),f=new a({map:b,side:s}),v=new o(.698,30,30),g=new t(v,f);g.position.set(...c),w.getObjectByName("bubble_reflect").position.set(...c);var j=new o(.699,30,30),u=new d({color:0,side:n}),M=new t(j,u);M.name="clip",M.material=u,M.position.set(...c);var h=new i;h.add(M),h.add(g),h.add(w),this.model=h}}export{l as default};
