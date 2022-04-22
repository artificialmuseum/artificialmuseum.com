import{$ as e,x as t,y as i,A as a,c as n,B as o,M as r,C as s,P as l,V as d,D as c,E as h,F as u,L as m,R as p,G as v,H as g,S as f,W as w,I as b,J as y,K as x,N as k,O as S,Q as C,U as A,X as T,Y as _,Z as E,a0 as B,a1 as R,a2 as P,a3 as F,a4 as L,a5 as W,a6 as I,a as D,a7 as H,a8 as O,a9 as j,aa as X,ab as z,ac as U,ad as V,ae as q,af as N,ag as Y,ah as G,ai as Z,aj as K,ak as J,al as Q,am as $,an as ee,ao as te,ap as ie,w as ae,aq as ne,ar as oe,as as re,at as se,au as le,av as de,aw as ce,ax as he,ay as ue,az as me,aA as pe,aB as ve,u as ge}from"./vendor.js";class fe{constructor(n){var{scene:o,sceneInstance:r,renderer:s,endSession:l}=n;this.endSession=l,this.engine=n,this.gui=e("#".concat(t)),this.hitSearch=e("#hud-searching-hittest"),this.swipeToRemove=e("#hud-swipe-to-remove"),this.XR=n.XR,this.XR&&(this.menu=e("#hud-menu"),this.subMenu=e("#hud-menu-sub"),this.menuVisible=!1,this.menuToggle=e("#hud-menu-toggle"),e.on(this.menuToggle,"click",this.onToggleMenu.bind(this)),e.on("#hud-menu-reposition","click",this.onRepositionButtonClick.bind(this)),this.recordVideoButton=e("#hud-menu-record-video"),e.on(this.recordVideoButton,"click",this.onRecordButtonClick.bind(this))),this.scene=o,this.renderer=s,this.sceneInstance=r,e.on("#".concat(i),"click",this.onExitButtonClick.bind(this)),a(this),this.animToggler=e("#toggle-animation-button")}setCamera(t){this.cameraAccess=t,t?e.show(this.recordVideoButton):e.hide(this.recordVideoButton)}showAnimToggler(t){this.animToggler&&(this.animToggler.classList.remove("play"),e.show(this.animToggler),this.animTogglerInit||(this.animTogglerInit=!0,this.eventListener=()=>{this.animToggler.classList.toggle("play"),t()},e.on(this.animToggler,"click",this.eventListener)))}hideAnimToggler(){e.hide(this.animToggler)}onToggleMenu(){var{subMenu:e}=this;e.classList.toggle("visible")}onRepositionButtonClick(){this.engine.unspawnModel()}onRecordButtonClick(){return n((function*(){}))()}addSession(e){this.session=e}show(){e.show(this.gui)}hide(){e.hide(this.gui)}onExitButtonClick(){var t=this;return n((function*(){if(t.session)try{yield t.session.end()}catch(e){t.hide()}else yield t.endSession();e.off(t.animToggler,"click",t.eventListener),t.sceneInstance&&t.sceneInstance.exit&&t.sceneInstance.exit(t),o()}))()}showHitSearch(){e.show(this.hitSearch)}hideHitSearch(){e.hide(this.hitSearch)}showElement(t){t.shown||(e.show(t),t.shown=!0)}hideElement(t){t.shown&&(e.hide(t),t.shown=!1)}}class we extends r{constructor(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2?arguments[2]:void 0;super(e),this.type="Reflector",this.XR=i.XR,this.skybox=i.skybox,this.shadowPlane=i.shadowPlane;var a=this,{textureHeight:n=512,textureWidth:o=512,clipBias:r=0,fragmentShader:w=ye,vertexShader:b=be}=t,y=void 0!==t.color?new s(t.color):new s(8355711),x=new l,k=new d,S=new d,C=new d,A=new c,T=new d(0,0,-1),_=new h,E=new d,B=new d,M=new h,R=new c,P=new u,F=new v(o,n,{minFilter:m,magFilter:m,format:p});g.isPowerOfTwo(o)&&g.isPowerOfTwo(n)||(F.texture.generateMipmaps=!1);var L={tDiffuse:{value:F.texture},color:{value:y},textureMatrix:{value:R}},W=new f({uniforms:L,fragmentShader:w,vertexShader:b});this.material=W,this.onBeforeRender=(e,t,i)=>{var n;if(S.setFromMatrixPosition(a.matrixWorld),C.setFromMatrixPosition(i.matrixWorld),A.extractRotation(a.matrixWorld),k.set(0,0,1),k.applyMatrix4(A),E.subVectors(S,C),!(E.dot(k)>0)){E.reflect(k).negate(),E.add(S),A.extractRotation(i.matrixWorld),T.set(0,0,-1),T.applyMatrix4(A),T.add(C),B.subVectors(S,T),B.reflect(k).negate(),B.add(S),P.position.copy(E),P.up.set(0,1,0),P.up.applyMatrix4(A),P.up.reflect(k),P.lookAt(B),P.far=i.far,P.updateMatrixWorld(),P.projectionMatrix.copy(i.projectionMatrix),R.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),R.multiply(P.projectionMatrix),R.multiply(P.matrixWorldInverse),R.multiply(a.matrixWorld),x.setFromNormalAndCoplanarPoint(k,S),x.applyMatrix4(P.matrixWorldInverse),_.set(x.normal.x,x.normal.y,x.normal.z,x.constant);var o=P.projectionMatrix;M.x=(Math.sign(_.x)+o.elements[8])/o.elements[0],M.y=(Math.sign(_.y)+o.elements[9])/o.elements[5],M.z=-1,M.w=(1+o.elements[10])/o.elements[14],_.multiplyScalar(2/_.dot(M)),o.elements[2]=_.x,o.elements[6]=_.y,o.elements[10]=_.z+1-r,o.elements[14]=_.w,F.texture.encoding=e.outputEncoding,a.visible=!1;var s=e.getRenderTarget(),l=e.xr.enabled,d=e.shadowMap.autoUpdate;e.xr.enabled=!1,e.shadowMap.autoUpdate=!1,e.setRenderTarget(F),e.state.buffers.depth.setMask(!0),!1===e.autoClear&&e.clear(),this.XR&&this.skybox&&(this.skybox.visible=!0);var c=!1;null!==(n=this.shadowPlane)&&void 0!==n&&n.visible&&(this.shadowPlane.visible=!1,c=!0),e.render(t,P),e.xr.enabled=l,e.shadowMap.autoUpdate=d,e.setRenderTarget(s),this.XR&&this.skybox&&(this.skybox.visible=!1),c&&(this.shadowPlane.visible=!0);var h=i.viewport;void 0!==h&&e.state.viewport(h),a.visible=!0}},this.getRenderTarget=()=>F}}we.prototype.isReflector=!0;var be="\nuniform mat4 textureMatrix;\nvarying vec4 vUv;\n\n#include <common>\n#include <logdepthbuf_pars_vertex>\n\nvoid main() {\n  vUv = textureMatrix * vec4( position, 1.0 );\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n  #include <logdepthbuf_vertex>\n}",ye="\nuniform vec3 color;\nuniform sampler2D tDiffuse;\nvarying vec4 vUv;\n\n#include <logdepthbuf_pars_fragment>\n\nfloat blendOverlay( float base, float blend ) {\n  return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );\n}\n\nvec3 blendOverlay( vec3 base, vec3 blend ) {\n  return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );\n}\n\nvoid main() {\n  #include <logdepthbuf_fragment>\n\n  vec4 base = texture2DProj( tDiffuse, vUv );\n  gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );\n}\n",xe=w.APP_DB.SCENE_TYPES;class ke{constructor(e){var{artifact:t,preload:i,XR:a}=e;this.XR=a,this.artifact=t,this.preload=i;var{type:n=xe.Hit}=t;this.type=n,this.clock=new b,this.scene=new y,this.onResize=this.onResize.bind(this),this.render=this.render.bind(this),this.initFallbackSession=this.initFallbackSession.bind(this),this.toggleAnimations=this.toggleAnimations.bind(this),this.endSession=this.endSession.bind(this)}init(t){var i=this;return n((function*(){var{artifact:a,preload:o,scene:r,type:s,XR:l}=i;t&&(i.sceneInstance=t);var d=w.innerWidth/w.innerHeight;i.camera=new u(x.fov,d,x.near,x.far),i.camera.updateProjectionMatrix(),r.add(i.camera);var c=new k({antialias:!0,alpha:!0});if(i.renderer=c,c.setPixelRatio(w.devicePixelRatio),c.domElement.id=S,c.physicallyCorrectLights=!0,c.outputEncoding=C,c.toneMappingExposure=1,!1!==a.shadow&&(c.shadowMap.enabled=!0,c.shadowMap.type=A),i.addAudio(),i.addSkybox(),a.hideLight||i.addLights(),i.videoElement=o.assets.videoElement,null!=t&&t.init&&(yield t.init({engine:i,preload:o})),null!=t&&t.beforeLoadModel&&(yield t.beforeLoadModel({engine:i,preload:o})),i.loadModel(),null!=t&&t.afterLoadModel&&(yield t.afterLoadModel({engine:i,preload:o})),i.addVideoTrigger(),c.setSize(w.innerWidth,w.innerHeight),e.append(c.domElement,"#".concat(T)),i.hud=new fe(i),l)try{var h=c.xr.getController(0);if(i.controller=h,!1!==a.shadow&&!1!==a.shadowPlane&&i.addShadowPlane(),!i.isHittestScene())throw new Error("Unknown scene type ".concat(s));s!==xe.Float&&i.spawnReticle(),e.on(h,"select",(()=>{if(!i.justUnspawned){i.spawnModel(!1),a.clickable?i.hud.showAnimToggler(i.toggleAnimations):i.hud.hideAnimToggler()}})),a.clickable||i.hud.hideAnimToggler(),r.add(h),i.initScene=n((function*(){var t;return e.hide("#Locator"),t=yield w.NAV.xr.requestSession("immersive-ar",{requiredFeatures:["hit-test","dom-overlay"],domOverlay:{root:e("#hud")}}),e.on(t,"end",(()=>{i.endSession()})),i.hud.addSession(t),i.refSpace=yield t.requestReferenceSpace("viewer"),i.renderer.xr.enabled=!0,i.renderer.xr.setReferenceSpaceType("local"),yield i.renderer.xr.setSession(t),t.initFallbackSession=i.initFallbackSession.bind(i),t}))}catch(e){i.initScene=i.initFallbackSession}else i.initScene=i.initFallbackSession;return yield i.addClickables(),e.on(w,"resize",i.onResize),i.onResize(),c.setAnimationLoop(i.render),i}))()}onResize(){var{innerWidth:e,innerHeight:t}=w;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}addLights(){var{directionalLightPosition:e=E.directionalPosition}=this.artifact,t=new _(E.directionalColor,E.directionalIntensity);t.position.set(...e),t.castShadow=!0,!1!==this.artifact.shadow&&(t.shadow.bias=-1e-4,t.shadow.mapSize.width=256,t.shadow.mapSize.height=256,t.shadow.camera.near=2,t.shadow.camera.far=300),this.directionalLight=t,this.scene.add(t),this.ambientLight=new B(E.ambientColor,E.ambientIntensity),this.scene.add(this.ambientLight)}addShadowPlane(){var e=new R(200,200,32,32),t=new P;t.opacity=F;var i=new r(e,t);i.receiveShadow=!0,i.lookAt(0,100,0),i.position.set(0,0,0),this.shadowPlane=i}spawnReticle(){var e=new L(.15,.2,32).rotateX(-M.PI/2),t=new W;this.reticle=new r(e,t),this.reticle.matrixAutoUpdate=!1,this.reticle.visible=!1,this.scene.add(this.reticle)}glow(){var{glow:e}=this.artifact;e&&this.model.traverse((t=>{if(I(t.name,"glow")){var i=D.bool(e)?238:e,a=new W({color:i,side:H,blending:O,transparent:!0});t.material=a}}))}addClickables(){var t=this;return n((function*(){var{artifact:i,model:a}=t,{clickables:n=[]}=i;if(n&&n.length){var o=[];if(a.traverse((e=>{j({node:e,search:n})&&o.push(e)})),o.length){var{Controls:r}=yield import("./Controls.js");t.controls=new r({clickables:o,engine:t}),t.controller?e.on(t.controller,"select",t.controls.select,!1):e.on(t.renderer.domElement,"mousedown",t.controls.click,!1)}}}))()}nosort(){this.artifact.nosort&&(this.renderer.sortObjects=!1)}clip(){var{model:e,artifact:{clip:t,clipSide:i}}=this;e&&t&&this.model.traverse((e=>{if(I(e.name,"clip")){var t=H;"back"===i?t=ne:"front"===i&&(t=oe),e.material=new W({color:"green",colorWrite:!1,side:t}),e.castShadow=!1,e.receiveShadow=!1,e.renderOrder=1}else e.renderOrder=2}))}mirror(){var{mirrors:e}=this.artifact;if(e&&e.length){var t=w.devicePixelRatio,i=w.innerWidth*t,a=w.innerHeight*t;this.mirrors=e.map((e=>{var t,{clipBias:n=.003,color:o=7829367,type:r,params:s=[4,32],rotation:l={},position:d={}}=e,c=APP_DB.MESH_TYPES;t=r===c.CIRCLE?new X(...s):r===c.RING?new L(...s):r===c.BOX?new z(...s):r===c.SPHERE?new U(...s):new R(...s);var h=new we(t,{clipBias:n,textureWidth:i,textureHeight:a,color:o},this),{x:u,y:m,z:p}=l;u&&h.rotateX(u),m&&h.rotateY(m),p&&h.rotateZ(p);var{x:v,y:g,z:f}=d;return v&&h.position.setX(v),g&&h.position.setY(g),f&&h.position.setZ(f),this.model.add(h),h}))}}analyseAudio(){if(this.artifact.analyseAudio){this.audioCtx=new AudioContext;var{audioElement:e}=this.preload.assets;this.audioSource=this.audioCtx.createMediaElementSource(e),this.analyser=this.audioCtx.createAnalyser(),this.audioSource.connect(this.analyser),this.audioSource.connect(this.audioCtx.destination),this.analyserArray=new Uint8Array(this.analyser.frequencyBinCount),this.analyser.getByteFrequencyData(this.analyserArray)}}addSkybox(){var e=this;return n((function*(){var{artifact:t,preload:i,renderer:a,scene:n,XR:o}=e,s=re,l=null==t?void 0:t.skySphere;D.arr(l)&&l.length&&(s=l);var d=new U(...s);!1!==t.scaleSky&&d.scale(-1,1,1);var c=i.assets.skybox,h=new V(a);h.compileEquirectangularShader();var u=h.fromEquirectangular(c).texture;h.dispose();var m=new W({map:c}),p=new r(d,m);p.visible=!o,n.add(p),!1===t.light||t.hideEnvironment||(n.environment=u),e.skybox=p}))()}addAudio(){if(!this.artifact.audio)return!1;this.listener=new q,this.camera.add(this.listener)}addVideoTrigger(){this.artifact.triggerVideo&&this.model.traverse((e=>{this.videoTrigger||["videotarget","videotrigger"].some((t=>I(e.name,t)))&&(this.videoTrigger=e,this.videoTrigger.visible=!1)}))}startMedia(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(!this.isMediaPlaying){var{actions:t=[],artifact:i,preload:a}=this,{audioElement:n,videoElement:o}=a.assets;n&&!i.triggerAudio&&(e&&(n.currentTime=0),n.play()),o&&!i.triggerVideo&&(e&&(o.currentTime=0),o.play()),t.forEach((e=>e.play())),this.isMediaPlaying=!0}}stopMedia(){var{audioElement:e,videoElement:t,actions:i=[]}=this;e&&e.pause(),t&&t.pause(),i&&i.length&&i.forEach((e=>e.stop())),this.isMediaPlaying=!1}toggleAnimations(){this.actions.forEach((e=>e.paused=!e.paused))}initFallbackSession(){this.XR=!1,w.B.classList.add(N);var{camera:e,artifact:t,model:i,renderer:a}=this,n=new Y(e,a.domElement);this.controller=n,this.skybox.visible=!0,Object.entries(G).forEach((e=>{var[t,i]=e;n[t]=i}));var{cam:o={},orbit:r={},clickable:s}=t;D.num(r.min)&&(n.minDistance=r.min),D.num(r.max)&&(n.maxDistance=r.max),D.num(o.maxPolar)&&(n.maxPolarAngle=Math.PI/o.maxPolar),s?this.hud.showAnimToggler(this.toggleAnimations):this.hud.hideAnimToggler();var{cam:l={}}=t,c=se,{x:h=c.x,y:u=c.y,z:m=c.z}=l;e.position.set(h,u,m);var{lookat:p={}}=t,{x:v=0,y:g=0,z:f=0}=p;if(n.target=new d(v,g,f),i){var{x:b,y:y,z:x}=i.scale,{scale:k}=t;k&&i.scale.set(b*k,y*k,x*k)}n.update();this.spawnModel(!0),a.domElement.focus()}loadModel(){var e,t,i,a,{artifact:n,preload:o,sceneInstance:r={}}=this;(null!=r&&r.model?this.model=r.model:null!==(e=o.assets.gltf)&&void 0!==e&&e.scene&&(this.model=o.assets.gltf.scene),null!=r&&r.animations?this.animations=r.animations:null!==(t=o.assets.gltf)&&void 0!==t&&t.animations&&(this.animations=o.assets.gltf.animations),this.model)&&(this.model.traverse((e=>{var t;if(r.parentName&&I(e.name,r.parentName)&&r.child&&(a=e),e.isMesh){var{frustumCulled:i,transparent:o,castShadow:s,receiveShadow:l}=n;!1===i&&(e.frustumCulled=!1),!1===o&&(e.material.transparent=!1),I(e.name,"noshadow")||(e.castShadow=!1!==s,e.receiveShadow=!1!==l),e.material.map&&(e.material.map.anisotropy=16,e.material.map.encoding=C),e.material.emissiveMap&&(e.material.emissiveMap.encoding=C),(e.material.map||e.material.emissiveMap)&&(e.material.needsUpdate=!0)}else if(e.isLight){var{castShadow:d,shadowBias:c=-1e-4,lightIntensity:h=.01,shadowCam:u={}}=n;if(e.intensity=e.intensity*h,!1!==n.shadow){e.castShadow=!1!==d,e.shadow.bias=c;var{near:m=.1,far:p=30}=u;e.shadow.camera.near=m,e.shadow.camera.far=p}}null!==(t=n.lookAtCameraObjects)&&void 0!==t&&t.length&&j({node:e,search:n.lookAtCameraObjects})&&(this.lookAtCameraObjects||(this.lookAtCameraObjects=[]),D.num(this.lookAtAlpha)||(this.lookAtAlpha=0),this.lookAtCameraObjects.push(e))})),a&&a.add(r.child));if(this.actions=[],null!==(i=this.animations)&&void 0!==i&&i.length){this.mixer=new Z(this.model);var{animations:s={}}=n,{loop:l,startOnTouch:d,clampWhenFinished:c=!0,autoplay:h=!0}=s;this.animations.forEach((e=>{var t=this.mixer.clipAction(e);!1===l&&(t.clampWhenFinished=c,t.loop=K),!d&&h||(t.paused=!0),this.actions.push(t)}))}if(this.videoElement&&this.model){var u=[];this.model.traverse((e=>{I(e.name,"videotarget")&&u.push(e)})),u.length&&u.forEach((e=>{var t=new J(this.videoElement),{flipVideo:i,chromaKey:a}=n;!1!==i&&(t.flipY=!1),e.material.map=t,a&&(e.material=new Q(n.chromaKey,t))}))}this.glow(),this.clip(),this.nosort(),this.mirror(),this.analyseAudio()}spawnModel(e){var{artifact:t,camera:i,controller:a,model:n,reticle:o,scene:r,shadowPlane:s,type:l,XR:d,sceneInstance:c={}}=this,{showSkybox:h}=t;if(!d||e)return n&&(this.applyPositionAndRotation(),r.add(n)),this.modelSpawned=!0,null!=c&&c.spawnModel&&c.spawnModel({engine:this}),null!=c&&c.afterSpawnModel&&c.afterSpawnModel({engine:this}),void this.startMedia();if(this.isHittestScene()){if(!this.modelSpawned&&this.lastHit){o.updateMatrixWorld(),n.position.setFromMatrixPosition(o.matrixWorld),n.updateMatrixWorld();var u=i.position,m=n.position,p=u.x-m.x,v=u.z-m.z,g=Math.atan2(p,v);n.rotation.y=g,s&&(s.position.setFromMatrixPosition(o.matrixWorld),r.add(s)),r.add(n),null!=c&&c.spawnModel&&c.spawnModel({engine:this}),o.visible=!1,this.modelSpawned=!0,this.startMedia()}this.applyPositionAndRotation()}else if(l===xe.Float){var f=n.clone();f.position.set(0,0,-1).applyMatrix4(a.matrixWorld),this.applyPositionAndRotation(),r.add(f),this.startMedia()}h&&(this.skybox.visible=!0)}unspawnModel(){var e;this.modelSpawned&&(this.scene.remove(this.model),this.modelSpawned=!1,this.isAnimationRunning=!1,this.stopMedia(),null!==(e=this.sceneInstance)&&void 0!==e&&e.exit&&this.sceneInstance.exit({engine:this}),this.justUnspawned=!0,setTimeout((()=>{this.justUnspawned=!1}),200))}applyPositionAndRotation(){var{artifact:e,model:t}=this;if(t){var{pos:i={},rot:a={}}=e;i.x&&(t.position.x+=i.x),i.y&&(t.position.y+=i.y),i.z&&(t.position.z+=i.z),a.x&&t.rotateX($(a.x)),a.y&&t.rotateY($(a.y)),a.z&&t.rotateZ($(a.z))}}endSession(){var t=this;return n((function*(){var i;t.hud.hide(),t.renderer.setAnimationLoop(null),e("#".concat(T)).classList.remove("visible"),null!==(i=t.sceneInstance)&&void 0!==i&&i.exit&&t.sceneInstance.exit({engine:t}),t.scene&&ee(t.scene),e.remove("#".concat(te)),e.remove("#".concat(ie));var a=e("#".concat(S));if(a){var n=a.parentNode;n.id===T?e.remove(a):e.remove(n)}w.B.classList.remove(N),e(".start-experience-button").forEach((e=>{e.removeAttribute("disabled")})),ae&&w.location.reload()}))()}isHittestScene(){return![xe.Float].includes(this.type)}render(e,t){var i=this;return n((function*(){var a,n,o=i.clock.getDelta();i.renderHittest(t),i.mixer&&i.mixer.update(o),i.renderVideoTrigger(),null!==(a=i.sceneInstance)&&void 0!==a&&a.tick&&i.sceneInstance.tick({delta:o,engine:i,timestamp:e,frame:t}),null!==(n=i.sceneInstance)&&void 0!==n&&n.render?i.sceneInstance.render({delta:o,engine:i,timestamp:e,frame:t}):i.renderer.render(i.scene,i.camera),i.recorder&&i.recorder.render(e,t),i.renderAnalyseAudio(),i.renderLookAtCamera(o)}))()}renderLookAtCamera(e){var{camera:t,lookAtCameraObjects:i=[]}=this;null!=i&&i.length&&i.forEach((i=>{var a=new d(0,.1,i.position.distanceTo(t.position));i.localToWorld(a);var n=a.clone(),o=this.artifact.lookAtSpeed||.001;this.lookAtAlpha+=e*o,n.lerp(t.position,this.lookAtAlpha),i.lookAt(n)}))}renderVideoTrigger(){if(this.modelSpawned&&this.artifact.triggerVideo&&this.videoTrigger){var{triggerVideoDistance:e=1.1,triggerAudio:t}=this.artifact,i=e*e,a=this.videoTrigger.position.clone();a.add(this.videoTrigger.parent.position),this.camera.position.distanceToSquared(a)<=i?this.videoElement.paused&&(this.videoElement.play(),this.videoTrigger.visible=!0,t&&this.audioElement&&this.audioElement.play()):this.videoElement.paused||(this.videoElement.pause(),this.videoTrigger.visible=!1,t&&this.audioElement&&this.audioElement.pause())}}renderHittest(t){var i=this;return n((function*(){if(t&&i.XR){var a=i.renderer.xr.getSession();i.hitTestSourceRequested||(i.hitTestSource=yield a.requestHitTestSource({space:i.refSpace}),e.on(a,"end",(()=>{i.hitTestSourceRequested=!1,i.hitTestSource=null})),i.hitTestSourceRequested=!0);var n=t.getHitTestResults(i.hitTestSource);if(n.length){if(i.lastHit=n[0],!i.modelSpawned){i.reticle.visible=!0;var o=i.renderer.xr.getReferenceSpace();i.reticle.matrix.fromArray(i.lastHit.getPose(o).transform.matrix)}i.hud.hideHitSearch()}else i.reticle.visible=!1,i.modelSpawned||i.hud.showHitSearch(),i.lastHit=void 0}}))()}renderAnalyseAudio(){var e;if(this.artifact.analyseAudio){var{audioAnalyserThreshold:t=0,waves:i=[]}=this.artifact;this.analyser.getByteFrequencyData(this.analyserArray);var a=0;this.analyserArray.forEach(((e,n)=>{e>=t&&(e=>i.some((t=>e>=t[0]&&e<=t[1])))(n)&&(a+=e)}));var n=0;i.map((e=>{n+=e[1]-(e[0]-1)})),this.audioAverage=a/n/255,D.fn(null===(e=this.sceneInstance)||void 0===e?void 0:e.renderAudioAnalyser)&&this.sceneInstance.renderAudioAnalyser(this.audioAverage,this)}}}class Se{constructor(t){var{artifact:i,root:a,THREE:n}=t;this.artifact=i,this.root=a,n&&(this.THREE=n);var{android:o,chrome:r}=ge;this.isAndroidChrome=o&&r,this._warningContainer=e("#timeout-warning"),this._header=e("#timeout-warning-header"),this._headerDone=e("#timeout-warning-header-done"),this._preloadInfo=e("#timeout-warning-info"),this._cancelButton=e("#timeout-warning-cancel"),this._confirmButton=e("#timeout-warning-confirm"),this._tooFarContainer=e("#toofar-warning"),this._tooFarPreviewButton=e("#toofar-warning-load-preview-button"),this._tooFarDistanceInfo=e("#toofar-warning-distance"),this._tooFarCancelButton=e("#toofar-warning-cancel-button"),this._tooFarAbortButton=e("#toofar-warning-abort-button"),this._webglDisabledContainer=e("#timeout-warning-webgl-disabled"),this._webglDisabledOkButton=e("#timeout-warning-webgl-disabled-ok-button"),this.confirmButtonClickHandler=this.confirmButtonClickHandler.bind(this),e.on(this._confirmButton,"click",this.confirmButtonClickHandler),this.onTooFarCancelButtonClick=this.onTooFarCancelButtonClick.bind(this),this.onTooFarPreviewButtonClick=this.onTooFarPreviewButtonClick.bind(this),this.onWebglDisabledOkButtonClick=this.onWebglDisabledOkButtonClick.bind(this),this.textureLoader=new le,this.gltfLoader=new de,this.plyLoader=new ce,this.promises={audioElement:this.loadAudio(),gltf:this.loadGltf(),scene:this.loadScene(),skybox:this.loadSkybox(),videoElement:this.loadVideo()},this.startEngine=this.startEngine.bind(this)}init(){var t=arguments,i=this;return n((function*(){var a=t.length>0&&void 0!==t[0]?t[0]:{},{map:n,XR:o}=a;i._isWorking=!0,i._isCancelled=!1,i._session=!1,i.map=n,i.XR=o,e.on(i._cancelButton,"click",(()=>{i._isCancelled=!0,i.finished()})),e.show([i._warningContainer,i._header]),i.timeout=w.setTimeout(i.showTimeoutWarning,he)}))()}loadScene(){var t=this;return n((function*(){var{artifact:i}=t,a=APP_DB.SCENE_TYPES,{type:n=a.Hit}=i;if([a.Float,a.Hit].includes(n))return!1;var o=Object.entries(a).find((e=>{var[t,i]=e;return i===n})),r="".concat(t.root,"/CustomScene.js");if(D.arr(o)){var s=o[0];r="./scenes/".concat(s,".js")}var{default:l}=yield import(r),d=new l({artifact:i,mergeConfig:ue,preload:t,$:e,W:w,is:D});return null!=d&&d.preload&&(yield d.preload({artifact:i,preload:t})),d}))()}loadSkybox(){var e=this;return n((function*(){var{city:t,sky:i,slug:a}=e.artifact,n=i||a,o="jpg";w.SUPPORTS.WEBP&&(o="webp");var r=n;return n.startsWith("/")||(r=[w.STATIC_URL,"skybox",t,n].filter((e=>e)).join("/")),r.endsWith(".".concat(o))||(r+=".".concat(o)),yield e.promisifiedLoad({loader:e.textureLoader,file:r})}))()}loadVideo(){var t=this;return n((function*(){var{slug:i,video:a}=t.artifact;if(!a)return!1;var n=!0===a?i:a,o=e.create("video",{id:ie,loop:!0,playsinline:!0,preload:"auto",crossorigin:"anonymous"});t.videoElement=o;var r=["webm","mp4"],s=D.str(n)?n:i;s.startsWith("/")||(s.endsWith(".mp4")?(r=["mp4"],s=s.slice(0,-4)):s="/video/".concat(s,"/").concat(s)),s.endsWith(".mp4")&&(r=["mp4"],s=s.slice(0,-4));var l="".concat(w.MEDIA_URL).concat(s);r.forEach((t=>{e.create("source",{src:"".concat(l,".").concat(t,"?v=").concat(me),type:"video/".concat(t),parent:o})})),e.append(o);var{videoWidth:d}=o;if(d>0)return o;var c="canplaythrough";return pe&&(c="loadedmetadata"),new Promise((t=>{e.on(o,c,(e=>{pe?setTimeout((()=>{t(e.target)}),ve):t(e.target)}))}))}))()}loadAudio(){var t=this;return n((function*(){var{slug:i,audio:a}=t.artifact;if(!a)return!1;e.remove("#".concat(te));var n=e.create("audio",{id:te,loop:!0,crossorigin:"anonymous"});t.audioElement=n;var o=D.str(a)?a:i;o.startsWith("/")||(o="/audio/".concat(o));var r=["ogg","mp4","mp3"];o.endsWith(".mp3")&&(r=["mp3"],o=o.slice(0,-4));var s="".concat(w.MEDIA_URL).concat(o);r.forEach((t=>{e.create("source",{src:"".concat(s,".").concat(t,"?v=").concat(me),type:"audio/".concat(t),parent:n})})),e.append(n);var{duration:l}=n;if(D.num(l)&&l>0)return n;var d="canplaythrough";return pe&&(d="loadedmetadata"),new Promise((t=>{e.on(n,d,(e=>t(e.target)))}))}))()}loadGltf(){var e=this;return n((function*(){var{artifact:t,XR:i}=e;if(!1!==t.glb){var{file:a,version:n=1}=t,o=i?"&xr=1":"",r="".concat(w.GLB_URL,"/").concat(a,".glb?v=").concat(n).concat(o);return yield e.promisifiedLoad({loader:e.gltfLoader,file:r})}}))()}promisifiedLoad(e){var{loader:t,file:i}=e;return new Promise(((e,a)=>{t.load(i,(t=>{e(t)}),(e=>{e.lengthComputable&&(Math.ceil(e.loaded/e.total*100),"/".concat(e.total))}),(e=>{this.setError(e,"Error loading artifact.",5e3),console.error("error loading artifact",e),a(e)}))}))}startEngine(){var t=this;return n((function*(){var{artifact:i,XR:a}=t,o=yield Promise.all(Object.entries(t.promises).map(function(){var e=n((function*(e){var[t,i]=e;return[t,yield i]}));return function(t){return e.apply(this,arguments)}}()));t.assets=Object.fromEntries(o);var r=new ke({artifact:i,preload:t,XR:a}),s=yield r.init(t.assets.scene);if(!s)throw new Error("Session undefined.");e.hide(t._header),e.hide(t._preloadInfo),e.show(t._headerDone),t._session=s,t._timeoutShown&&t.isAndroidChrome?e.prop(t._confirmButton,{disabled:!1}):t._isCancelled||(yield t.finishLoad())}))()}showTimeoutWarning(){e.show(this._preloadInfo),this.isAndroidChrome&&(e.show(this._confirmButton),this._confirmButton.setAttribute("disabled",!0),this._timeoutShown=!0)}confirmButtonClickHandler(){var t=this;return n((function*(){t._session?(e.off(t._confirmButton,"click",t.confirmButtonClickHandler),yield t.finishLoad(),t.finished()):console.error("confirmButtonClickHandler: session not defined",t)}))()}finishLoad(){var t=this;return n((function*(){if(t._session){var{hud:i,initFallbackSession:a,initScene:n}=t._session;try{yield n(),i.show(),e.show("#".concat(T)),t.finished()}catch(n){"InvalidStateError"===n.name||"NotSupportedError"===n.name?(yield a(),i.show(),e.show("#".concat(T)),t.finished()):"SecurityError"===n.name?(e.show(t._confirmButton),e.prop(t._confirmButton,{disabled:!1})):(console.error("Unexpected Preload.finishLoad error"),console.error(n))}}}))()}setError(e,t){w.clearTimeout(this.timeout),this.finished()}showTooFarNotification(t){var{distance:i,artifact:a,map:n}=t,o="meter",r=i;r>=1e3?(o="kilometer",r>=2e3&&(o+="s"),r=Math.round(r/1e3)):r>=2&&(o+="s"),this.artifact=a,this.map=n,this.XR=!1,this._tooFarDistanceInfo.innerText="This artifact is ".concat(r," ").concat(o," away."),e.show(this._tooFarContainer),e.on(this._tooFarPreviewButton,"click",this.onTooFarPreviewButtonClick),e.on(this._tooFarCancelButton,"click",this.onTooFarCancelButtonClick),e.on(this._tooFarAbortButton,"click",this.onTooFarCancelButtonClick)}onTooFarCancelButtonClick(){e.off(this._tooFarPreviewButton,"click",this.onTooFarPreviewButtonClick),this._isCancelled=!0,e.hide(this._tooFarContainer),this.finished()}onTooFarPreviewButtonClick(){var t=this;return n((function*(){e.off(t._tooFarPreviewButton,"click",t.onTooFarPreviewButtonClick),e.off(t._tooFarCancelButton,"click",t.onTooFarCancelButtonClick),e.off(t._tooFarAbortButton,"click",t.onTooFarCancelButtonClick),e.hide(t._tooFarContainer);var{artifact:i,map:a,XR:n}=t;yield t.init({artifact:i,map:a,XR:n}),yield t.startEngine()}))()}showWebglDisabledNotification(){e.show(this._webglDisabledContainer),e.hide([this._header,this._headerDone,this._preloadInfo,this._cancelButton,this._confirmButton]),e.on(this._webglDisabledOkButton,"click",this.onWebglDisabledOkButtonClick)}onWebglDisabledOkButtonClick(){e.off(this._webglDisabledOkButton,"click",this.onWebglDisabledOkButtonClick),this._isCancelled=!0,e.hide(this._webglDisabledContainer),this.finished()}finished(){this._isWorking=!1,this._timeoutShown=!1,e(".start-experience-button").forEach((e=>{e.removeAttribute("disabled")})),e.hide([this._warningContainer,this._confirmButton,this._preloadInfo,this._headerDone]),e.prop(this._confirmButton,{disabled:!0}),e.show(this._header),w.clearTimeout(this.timeout)}}export{Se as Preload};
