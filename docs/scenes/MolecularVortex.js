import{c as e,a5 as r,C as a,aC as t,ab as n,M as o,V as s,aP as i,aQ as h,aV as d}from"../vendor.js";class l{constructor(e){var{artifact:r}=e,{sphereCount:a=1e3,blackMolCount:t=100,whiteMolCount:n=100,parentCount:o=10,spawnCircleYOffset:s=.5,spawnCircleHeight:i=15,sphereScaleFactor:h=.1,spawnCircleDistance:d=2,spawnCircleWidth:l=5,upMolSpawnY:p=-7,molYSpeedMod:c=.02,upMolTargetPos:M=2.2}=r;this.sphereCount=a,this.whiteMolCount=n,this.blackMolCount=t,this.parentCount=o,this.spawnCircleYOffset=s,this.spawnCircleHeight=i,this.sphereScaleFactor=h,this.spawnCircleDistance=d,this.spawnCircleWidth=l,this.upMolSpawnY=p,this.molYSpeedMod=c,this.upMolTargetPos=M,this.spawnCircleParents=[],this.upCircleParents=[],this.parentVelocities=[],this.rotators=[],this.upMols=[]}init(n){var o=this;return e((function*(){var{preload:e}=n;o.sphereMaterials=[new r({color:new a(0)}),new r({color:new a(16777215)})];var s=[15134221,3210255,12860729,16777173,16712446,8230640,15603985,458740,16340742,4709478,3543287,15689147];s.forEach((e=>{var t=new r({color:new a(e)});o.sphereMaterials.push(t)}));for(var i=function(e){s.forEach((t=>{var n=new r({color:new a(t),transparent:!0,opacity:e+.2+.2});o.sphereMaterials.push(n)}))},h=0;h<5;h++)i(h);o.model=e.assets.gltf.scene,o.portal=o.model.getObjectByName("portal"),o.portal.renderOrder=1;for(var{blackMolCount:d,parentCount:l,sphereCount:p,upMolSpawnY:c,whiteMolCount:M}=o,w=o.portal.position,m=0;m<l;m++){var C=new t;o.spawnCircleParents.push(C),C.position.set(w.x,0,w.z),C.renderOrder=1,o.model.add(C);var u=C.clone();u.position.set(w.x,c,w.z),o.upCircleParents.push(u),u.renderOrder=1,o.model.add(u);var v=.002*Math.random()+.001;o.parentVelocities.push(v)}for(var f=0;f<p;f++){var P=o.createSphere(),{x:g,y:O,z:x}=o.getRandomCirclePosition();P.position.set(g,O,x);var S=f%o.spawnCircleParents.length;o.spawnCircleParents[S].add(P)}for(var Y=0;Y<M;Y++){var y=o.createWhiteMol(),{x:z,y:H,z:R}=o.getRandomCirclePosition();y.position.set(z,H,R);var k=Y%o.spawnCircleParents.length;o.spawnCircleParents[k].add(y)}for(var E=0;E<d;E++){var U=o.createBlackMol(),{x:V,y:W,z:b}=o.getRandomCirclePosition();U.position.set(V,W,b);var B=E%o.spawnCircleParents.length;o.spawnCircleParents[B].add(U)}for(var D=0;D<p/5;D++){var F=o.createSphere(),I=D%o.upCircleParents.length;o.upCircleParents[I].add(F),o.addUpMol(F)}for(var T=0;T<d/7;T++){var j=o.createBlackMol(),A=T%o.upCircleParents.length;o.upCircleParents[A].add(j),o.addUpMol(j)}for(var N=0;N<M/7;N++){var Q=o.createWhiteMol(2),q=N%o.upCircleParents.length;o.upCircleParents[q].add(Q),o.addUpMol(Q)}}))()}getRandomCirclePosition(){var{spawnCircleDistance:e,spawnCircleWidth:r,spawnCircleHeight:a,spawnCircleYOffset:t}=this,n=Math.random()*r+e,o=360*Math.random(),s=n*Math.cos(o),i=n*Math.sin(o);return{x:s,y:Math.random()*(a/2)+t,z:i}}createSphere(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Math.random()*this.sphereScaleFactor+.05,r=new n(e,32,16),a=Math.floor(30*Math.random()-.001),t=this.sphereMaterials[a],s=new o(r,t);return s.renderOrder=1,s}createBlackMol(){var e=new r({color:new a(0)}),d=new t;d.renderOrder=1;var l=new n(.5,64,64),p=new o(l,e),c=.1*Math.random()+.05;p.scale.set(c,c,c),p.renderOrder=1,d.add(p);for(var M=p.position,w=Math.round(5*Math.random()),m=0;m<=w;m++){var C=.7*(Math.random()-.5),u=.7*(Math.random()-.5),v=.7*(Math.random()-.5),f=new s(M.x+C,M.y+u,M.z+v),P=new o(l,e);P.renderOrder=1,P.position.set(f.x,f.y,f.z);var g=.1*Math.random()+.05;P.scale.set(g,g,g);var O=new i([M,f]),x=new h(O,2,.005,4),S=new o(x,e);S.renderOrder=1,d.add(S),d.add(P)}return this.addRotator(d),d}createWhiteMol(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,d=new r({color:new a(16777215)}),l=new n(.3,64,64),p=new t;p.renderOrder=1;var c=new o(l,d),M=.1*Math.random()+.05;c.scale.set(M,M,M),c.renderOrder=1,p.add(c);for(var w=Math.ceil(Math.random()*e),m=c.position,C=0;C<w;C++){var u=.5*(Math.random()-.5),v=.3*Math.random()+.1,f=.5*(Math.random()-.5),P=new s(m.x+u,m.y+v,m.z+f),g=new o(l,d);g.renderOrder=1,g.position.set(P.x,P.y,P.z);var O=.1*Math.random()+.05;g.scale.set(O,O,O);var x=new i([m,P]),S=new h(x,2,.005,4),Y=new o(S,d);Y.renderOrder=1,p.add(Y),p.add(g),m=P}p.position.set(3*Math.random(),3*Math.random(),3*Math.random());var y=360*Math.random()*(Math.PI/180),z=360*Math.random()*(Math.PI/180),H=360*Math.random()*(Math.PI/180);return p.rotation.set(y,z,H),this.addRotator(p),p}addRotator(e){this.rotators.push({mesh:e,speed:.01*Math.random(),axis:new s(Math.random(),Math.random(),Math.random())})}addUpMol(e){var{upMolTargetPos:r}=this,a={mesh:e,speed:Math.random()*this.molYSpeedMod,target:new s(Math.random()*r-r/2,this.spawnCircleHeight,Math.random()*r-r/2)};this.upMols.push(a)}repositionUpMol(e){var r=e.parent.position;e.position.set(r.x,r.y,0)}render(e,r,a){var{engine:t}=a,{renderer:n,camera:o,scene:i}=t;this.spawnCircleParents.forEach(((e,r)=>{e.rotateY(this.parentVelocities[r])})),this.upCircleParents.forEach(((e,r)=>{e.rotateY(5*this.parentVelocities[r])})),this.rotators.forEach((e=>{e.mesh.rotateOnAxis(e.axis,e.speed)})),this.upMols.forEach((e=>{var{mesh:r,speed:a,target:t}=e;if(r.position.y<this.spawnCircleHeight){var n=r.position.y+a,o=this.spawnCircleHeight-this.upMolSpawnY-(this.spawnCircleHeight-n),{x:i,z:h}=d(new s(0,this.upMolSpawnY,0),t,o);r.position.set(i,n,h)}else this.repositionUpMol(r),e.speed=Math.random()*this.molYSpeedMod})),n.render(i,o)}}export{l as default};
