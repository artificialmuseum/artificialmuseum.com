import{K as a,c as t,aL as e,aZ as o,b3 as i,aD as r,aM as s,aF as n}from"./vendor.js";class d{constructor(t){var{artifact:e,model:o,preload:i}=t;this.preload=i,this.model=o,this.defaultBox={x:10,y:10,z:10},this.config=a(e,{particles:[{name:"snowflake.png",size:.1,box:this.defaultBox}]}),this.materials=[]}init(){var a=this;return t((function*(){var d=a.preload.textureLoader,l=new e;yield Promise.all(a.config.particles.map(function(){var e=t((function*(t){for(var{box:e=a.defaultBox,color:c=16777215,count:p=1e3,name:m,size:h,opacity:u=1}=t,f=yield a.preload.promisifiedLoad({loader:d,file:"https://static.artificialmuseum.com/textures/matcap/".concat(m)}),x=new o({size:h,map:f,color:c,blending:i,depthTest:!1,transparent:!0,opacity:u}),v=new r,M=[],y=0;y<p;y++){var z=void 0;if(0===e.xMin)z=Math.random()*e.x;else z=(Math.random()>.5?-1:1)*Math.random()*(2*e.x)-e.x;var w=Math.random()*e.y,b=void 0;if(0===e.zMin)b=Math.random()*e.z;else b=(Math.random()>.5?-1:1)*Math.random()*(2*e.z)-e.z;M.push(z,w,b)}v.setAttribute("position",new s(M,3));var g=new n(v,x);l.add(g)}));return function(a){return e.apply(this,arguments)}}())),a.model.add(l),a.particles=l}))()}update(a){this.particles.rotation.y+=.01*a}}export{d as Particles};