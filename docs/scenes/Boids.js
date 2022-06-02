import{V as i,b2 as t,H as e,aP as s,aZ as a,b3 as o,a8 as n,M as h,b4 as r,b5 as d,b6 as c,a_ as l,b7 as g,T as m,aM as p,b8 as u}from"../vendor.js";class v{constructor(t,e,s,a,o){var n=arguments.length>5&&void 0!==arguments[5]&&arguments[5],h=arguments.length>6?arguments[6]:void 0;this.scene=t,this.config=h;var{mesh:r,geometry:d}=this.getBoid(s,a,o);this.mesh=r,this.geometry=d,this.target=e,this.origin=new i,this.acceleration=new i,this.velocity=new i(.2*(Math.random()-.5),.2*(Math.random()-.5),.2*(Math.random()-.5)),this.followLure=n,this.velocitySamples=[],this.wanderTarget=new i(r.position.x,r.position.y,this.config.maxInitPos),this.debug=!1,this.counter=0,this.wanderCounter=0,this.arrows=[];var c=(1+Math.sqrt(5))/2,l=2*Math.PI*c;this.sphereCastDirections=[];for(var g=0;g<300;g++){var m=g/300,p=Math.acos(1-2*m),u=l*g,v=Math.sin(p)*Math.cos(u),f=Math.sin(p)*Math.sin(u),w=Math.cos(p);this.sphereCastDirections.push(new i(v,f,w))}}getBoid(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new i(0,0,0),d=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,{w:c=.3,h:l=.6}=this.config.boidSize,g=new t(c,l,5,1);g.rotateX(e.degToRad(90));var m=new s;new a({color:16777215,transparent:!0,opacity:.1});var p=new o({color:1118481,side:n,flatShading:!0});return m.add(new h(g,p)),m.position.copy(r),d&&m.quaternion.copy(d),{mesh:m,geometry:g}}update(t,e,s){if(this.counter++,this.wanderCounter++,this.target&&this.followLure){var a=this.seek(t,this.target.position).multiplyScalar(.09);this.acceleration.add(a)}else this.mesh.position.x>15||this.mesh.position.x<-15||this.mesh.position.z>15||this.mesh.position.z<-15||this.mesh.position.y<1?this.acceleration.add(this.wander(t).multiplyScalar(this.config.outOfBoundsSpeed)):this.acceleration.add(this.wander(t).multiplyScalar(this.config.wanderWeight));this.acceleration.add(this.alignment(t,e).multiplyScalar(this.config.alignmentWeight)),this.acceleration.add(this.cohesion(t,e).multiplyScalar(this.config.cohesionWeight)),this.acceleration.add(this.separation(t,e).multiplyScalar(this.config.separationWeight));var o=this.mesh.position.clone(),n=new i;n.fromBufferAttribute(this.geometry.attributes.position,0).clone();var h=n.applyMatrix4(this.mesh.matrix).sub(this.mesh.position),c=new r(o,h.clone().normalize(),0,this.config.visionRange);if(this.debug){var l=new d(c.ray.direction,c.ray.origin,50,16711680);if(this.counter%50==0&&(l.name=Math.random().toString(36).substring(2,15),this.arrows.push(l),this.scene.add(l),this.arrows.length>3)){var g=this.arrows.shift();this.scene.remove(this.scene.getObjectByName(g.name))}}var m=c.intersectObjects(s.map((i=>i.mesh.children[0])));if(m.length>0)for(var p=0;p<this.sphereCastDirections.length;p++){var u=this.sphereCastDirections[p];if(0===(c=new r(o,u,0,this.config.visionRange)).intersectObject(m[0].object).length){this.acceleration.add(u.clone().multiplyScalar(this.config.dodgeWeight));break}}this.applyAcceleration(t),this.lookWhereGoing()}applyAcceleration(){this.velocity.add(this.acceleration),this.acceleration.set(0,0,0),this.velocity.clampLength(this.config.minSpeed,this.config.maxSpeed),this.mesh.position.add(this.velocity)}seek(i,t){var e=t.clone().sub(this.mesh.position);e.normalize(),e.multiplyScalar(this.config.maxSpeed),e.sub(this.velocity);var s=5*i;return e.clampLength(0,s),e}separation(t,e){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.config.separationRange,a=new i,o=0;if(e.forEach((i=>{if(i.mesh.id!==this.mesh.id){var t=i.mesh.position.distanceTo(this.mesh.position);if(t<=s){var e=this.mesh.position.clone().sub(i.mesh.position);e.divideScalar(t),a.add(e),o++}}})),0!==o){a.divideScalar(o),a.normalize(),a.multiplyScalar(this.config.maxSpeed);var n=5*t;a.clampLength(0,n)}return a}alignment(t,e){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.config.alignmentRange,a=new i,o=new i,n=0;if(e.forEach((i=>{i.mesh.id!==this.mesh.id&&(i.mesh.position.distanceTo(this.mesh.position)<=s&&(n++,o.add(i.velocity.clone())))})),n>0){o.divideScalar(n),o.normalize(),o.multiplyScalar(this.config.maxSpeed);var h=5*t;(a=o.sub(this.velocity)).clampLength(0,h)}return a}cohesion(t,e){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.config.cohesionRange,a=new i,o=0;return e.forEach((i=>{i.mesh.id!==this.mesh.id&&(i.mesh.position.distanceTo(this.mesh.position)<=s&&(o++,a.add(i.mesh.position)))})),o>0?(a.divideScalar(o),this.seek(t,a)):new i}rndCoord(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:30;return(Math.random()-.5)*i}rndCoordy(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:15;return(Math.random()+.2)*i}wander(t){return(this.mesh.position.distanceTo(this.wanderTarget)<1||this.wanderCounter>100)&&(this.wanderTarget=new i(this.rndCoord(),this.rndCoordy(),this.rndCoord()),this.wanderCounter=0),this.seek(t,this.wanderTarget)}lookWhereGoing(){var i=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=this.velocity.clone();i&&(this.velocitySamples.length===this.config.numSamplesForSmoothing&&this.velocitySamples.shift(),this.velocitySamples.push(this.velocity.clone()),t.set(0,0,0),this.velocitySamples.forEach((i=>{t.add(i)})),t.divideScalar(this.velocitySamples.length)),t.add(this.mesh.position),this.mesh.lookAt(t)}}class f{constructor(i,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;this.obstacles=e,this.config=t,this.initBoids(i,s)}initBoids(t,e){this.boids=this.boids||[];for(var s=0;s<this.config.numberOfBoids;s++){var a=Math.random()*(2*this.config.maxInitPos)-this.config.maxInitPos,o=Math.random()*this.config.maxInitPos,n=Math.random()*(2*this.config.maxInitPos)-this.config.maxInitPos,h=new i(a,o,n),r=new v(t,e,h,null,null,!1,this.config);this.boids.push(r)}}update(i){this.boids.forEach((t=>{t.update(i,this.boids,this.obstacles)}))}}class w{constructor(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:16777215,{Mesh:o,BoxGeometry:n,Group:h,MeshBasicMaterial:r}=m,d=new n(i,t,e,1,1,1);this.mesh=new h;var p=new a({color:16777215,transparent:!0,opacity:0}),u=new r({color:s,transparent:!0,opacity:0,wireframe:!1,depthWrite:!1,blending:c});this.mesh.add(new o(d,u)),this.mesh.add(new l(new g(d),p))}}class b{constructor(i){var{artifact:t,mergeConfig:e}=i;this.config=e(t.boids,{hasObstacles:!0,numberOfBoids:300,useLure:!1,minSpeed:.1,maxSpeed:.33,numSamplesForSmoothing:20,wanderWeight:.07,cohesionRange:3,cohesionWeight:.035,separationRange:1.2,separationWeight:.05,alignmentRange:3,alignmentWeight:.12,outOfBoundsSpeed:.15,dodgeWeight:.15,visionRange:5,boundaryRadius:18,maxInitPos:12.5,boidSize:{w:.15,h:.5}}),this.counter=0,this.obstacles=[]}beforeLoadModel(){this.model=new s}afterLoadModel(i){var{engine:t}=i,{model:e}=t;if(this.config.hasObstacles&&(this.addObstacle(e,.5,1.8,.5,10721774,0,.9,0),this.addObstacle(e,2,15,2,327424,0,7.5,0),this.addObstacle(e,2,6,2,5592405,8,9,-8),this.addObstacle(e,2,6,2,5592405,-8,9,-8),this.addObstacle(e,2,6,2,5592405,-8,9,8),this.addObstacle(e,2,6,2,5592405,8,9,8)),this.config.useLure){var s=new p(16777215,3,500);s.position.set(0,10,0),e.add(s);var a=new u(s);e.add(a),this.lure=s}this.boidManager=new f(e,this.config,this.obstacles,this.lure),this.boidManager.boids.forEach((i=>{e.add(i.mesh)}))}addObstacle(i,t,e,s,a,o,n,h){var r=new w(t,e,s,a);r.mesh.position.set(o,n,h),i.add(r.mesh),this.obstacles.push(r)}tick(i){var{delta:t}=i,{lure:e}=this;this.counter+=.001,this.boidManager.update(t),e&&(e.position.x=15*Math.sin(10*this.counter),e.position.y=15*(Math.sin(15*this.counter)+1),e.position.z=15*Math.cos(10*this.counter))}}export{b as default};
