import{$ as e,x as t,y as i,A as a,c as n,B as o,a as r,M as s,C as l,P as d,V as c,D as h,E as u,F as m,L as p,R as v,G as g,H as f,S as w,W as b,I as y,J as x,K as S,N as k,O as _,Q as T,U as E,X as C,Y as B,Z as R,a0 as P,a1 as F,a2 as A,a3 as I,a4 as L,a5 as W,a6 as H,a7 as D,a8 as O,a9 as X,aa as z,ab as j,ac as V,ad as U,ae as N,af as q,ag as Y,ah as G,ai as Z,aj as K,ak as J,al as Q,am as $,an as ee,w as te,ao as ie,ap as ae,aq as ne,ar as oe,as as re,at as se,au as le,av as de,u as ce,aw as he}from"./vendor.js";class ue{constructor(n){var{scene:o,sceneInstance:r,renderer:s,endSession:l}=n;this.endSession=l,this.engine=n,this.gui=e("#".concat(t)),this.hitSearch=e("#hud-searching-hittest"),this.swipeToRemove=e("#hud-swipe-to-remove"),this.XR=n.XR,this.XR&&(this.menu=e("#hud-menu"),this.subMenu=e("#hud-menu-sub"),this.menuVisible=!1,this.menuToggle=e("#hud-menu-toggle"),e.on(this.menuToggle,"click",this.onToggleMenu.bind(this)),e.on("#hud-menu-reposition","click",this.onRepositionButtonClick.bind(this)),this.recordVideoButton=e("#hud-menu-record-video"),e.on(this.recordVideoButton,"click",this.onRecordButtonClick.bind(this))),this.scene=o,this.renderer=s,this.sceneInstance=r,e.on("#".concat(i),"click",this.onExitButtonClick.bind(this)),a(this),this.animToggler=e("#toggle-animation-button")}setCamera(t){this.cameraAccess=t,t?e.show(this.recordVideoButton):e.hide(this.recordVideoButton)}showAnimToggler(t){this.animToggler&&(this.animToggler.classList.remove("play"),e.show(this.animToggler),this.animTogglerInit||(this.animTogglerInit=!0,this.eventListener=()=>{this.animToggler.classList.toggle("play"),t()},e.on(this.animToggler,"click",this.eventListener)))}hideAnimToggler(){e.hide(this.animToggler)}onToggleMenu(){var{subMenu:e}=this;e.classList.toggle("visible")}onRepositionButtonClick(){this.engine.unspawnModel()}onRecordButtonClick(){return n((function*(){}))()}addSession(e){this.session=e}show(){e.show(this.gui)}hide(){e.hide(this.gui)}onExitButtonClick(){var t=this;return n((function*(){if(t.session)try{yield t.session.end()}catch(e){t.hide()}else yield t.endSession();e.off(t.animToggler,"click",t.eventListener),t.sceneInstance&&t.sceneInstance.exit&&t.sceneInstance.exit(t),o()}))()}showHitSearch(){e.show(this.hitSearch)}hideHitSearch(){e.hide(this.hitSearch)}showElement(t){t.shown||(e.show(t),t.shown=!0)}hideElement(t){t.shown&&(e.hide(t),t.shown=!1)}}var me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e&&e.dispose&&r.fn(e.dispose)&&e.dispose()},pe=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(r.arr(t)&&t.forEach((t=>e(t))),"Audio"===t.type&&t.isPlaying&&t.stop(),me(t.geometry),t.material){var i=r.arr(t.material)?t.material:[t.material];i.forEach((e=>{Object.values(e).forEach(me),me(e)}))}t.children.length&&t.children.forEach(e),!t.isScene&&t.dispose&&r.fn(t.dispose)&&t.dispose(),t.parent&&t.parent.remove(t)};class ve extends s{constructor(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2?arguments[2]:void 0;super(e),this.type="Reflector",this.XR=i.XR,this.skybox=i.skybox,this.shadowPlane=i.shadowPlane;var a=this,{textureHeight:n=512,textureWidth:o=512,clipBias:r=0,fragmentShader:s=fe,vertexShader:b=ge}=t,y=void 0!==t.color?new l(t.color):new l(8355711),x=new d,S=new c,k=new c,_=new c,T=new h,E=new c(0,0,-1),C=new u,B=new c,M=new c,R=new u,P=new h,F=new m,A=new g(o,n,{minFilter:p,magFilter:p,format:v});f.isPowerOfTwo(o)&&f.isPowerOfTwo(n)||(A.texture.generateMipmaps=!1);var I={tDiffuse:{value:A.texture},color:{value:y},textureMatrix:{value:P}},L=new w({uniforms:I,fragmentShader:s,vertexShader:b});this.material=L,this.onBeforeRender=(e,t,i)=>{var n;if(k.setFromMatrixPosition(a.matrixWorld),_.setFromMatrixPosition(i.matrixWorld),T.extractRotation(a.matrixWorld),S.set(0,0,1),S.applyMatrix4(T),B.subVectors(k,_),!(B.dot(S)>0)){B.reflect(S).negate(),B.add(k),T.extractRotation(i.matrixWorld),E.set(0,0,-1),E.applyMatrix4(T),E.add(_),M.subVectors(k,E),M.reflect(S).negate(),M.add(k),F.position.copy(B),F.up.set(0,1,0),F.up.applyMatrix4(T),F.up.reflect(S),F.lookAt(M),F.far=i.far,F.updateMatrixWorld(),F.projectionMatrix.copy(i.projectionMatrix),P.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),P.multiply(F.projectionMatrix),P.multiply(F.matrixWorldInverse),P.multiply(a.matrixWorld),x.setFromNormalAndCoplanarPoint(S,k),x.applyMatrix4(F.matrixWorldInverse),C.set(x.normal.x,x.normal.y,x.normal.z,x.constant);var o=F.projectionMatrix;R.x=(Math.sign(C.x)+o.elements[8])/o.elements[0],R.y=(Math.sign(C.y)+o.elements[9])/o.elements[5],R.z=-1,R.w=(1+o.elements[10])/o.elements[14],C.multiplyScalar(2/C.dot(R)),o.elements[2]=C.x,o.elements[6]=C.y,o.elements[10]=C.z+1-r,o.elements[14]=C.w,A.texture.encoding=e.outputEncoding,a.visible=!1;var s=e.getRenderTarget(),l=e.xr.enabled,d=e.shadowMap.autoUpdate;e.xr.enabled=!1,e.shadowMap.autoUpdate=!1,e.setRenderTarget(A),e.state.buffers.depth.setMask(!0),!1===e.autoClear&&e.clear(),this.XR&&this.skybox&&(this.skybox.visible=!0);var c=!1;null!==(n=this.shadowPlane)&&void 0!==n&&n.visible&&(this.shadowPlane.visible=!1,c=!0),e.render(t,F),e.xr.enabled=l,e.shadowMap.autoUpdate=d,e.setRenderTarget(s),this.XR&&this.skybox&&(this.skybox.visible=!1),c&&(this.shadowPlane.visible=!0);var h=i.viewport;void 0!==h&&e.state.viewport(h),a.visible=!0}},this.getRenderTarget=()=>A}}ve.prototype.isReflector=!0;var ge="\nuniform mat4 textureMatrix;\nvarying vec4 vUv;\n\n#include <common>\n#include <logdepthbuf_pars_vertex>\n\nvoid main() {\n  vUv = textureMatrix * vec4( position, 1.0 );\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n  #include <logdepthbuf_vertex>\n}",fe="\nuniform vec3 color;\nuniform sampler2D tDiffuse;\nvarying vec4 vUv;\n\n#include <logdepthbuf_pars_fragment>\n\nfloat blendOverlay( float base, float blend ) {\n  return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );\n}\n\nvec3 blendOverlay( vec3 base, vec3 blend ) {\n  return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );\n}\n\nvoid main() {\n  #include <logdepthbuf_fragment>\n\n  vec4 base = texture2DProj( tDiffuse, vUv );\n  gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );\n}\n",we=b.APP_DB.SCENE_TYPES;class be{constructor(e){var{artifact:t,preload:i,XR:a}=e;this.XR=a,this.artifact=t,this.preload=i;var{type:n=we.Hit}=t;this.type=n,this.clock=new y,this.scene=new x,this.onResize=this.onResize.bind(this),this.render=this.render.bind(this),this.initFallbackSession=this.initFallbackSession.bind(this),this.toggleAnimations=this.toggleAnimations.bind(this),this.endSession=this.endSession.bind(this)}init(t){var i=this;return n((function*(){var{artifact:a,preload:o,scene:r,type:s,XR:l}=i;t&&(i.sceneInstance=t);var d=b.innerWidth/b.innerHeight;i.camera=new m(S.fov,d,S.near,S.far),i.camera.updateProjectionMatrix(),r.add(i.camera);var c=new k({antialias:!0,alpha:!0});if(i.renderer=c,c.setPixelRatio(b.devicePixelRatio),c.domElement.id=_,c.physicallyCorrectLights=!0,c.outputEncoding=T,c.toneMappingExposure=1,!1!==a.shadow&&(c.shadowMap.enabled=!0,c.shadowMap.type=E),i.addAudio(),i.addSkybox(),a.hideLight||i.addLights(),i.videoElement=o.assets.videoElement,null!=t&&t.init&&(yield t.init({engine:i,preload:o})),i.loadModel(),i.addVideoTrigger(),c.setSize(b.innerWidth,b.innerHeight),e.append(c.domElement,"#".concat(C)),i.hud=new ue(i),l)try{var h=c.xr.getController(0);if(i.controller=h,!1!==a.shadow&&i.addShadowPlane(),!i.isHittestScene())throw new Error("Unknown scene type ".concat(s));s!==we.Float&&i.spawnReticle(),e.on(h,"select",(()=>{if(!i.justUnspawned){i.spawnModel(!1),a.clickable?i.hud.showAnimToggler(i.toggleAnimations):i.hud.hideAnimToggler()}})),a.clickable||i.hud.hideAnimToggler(),r.add(h),i.initScene=n((function*(){var t;return e.hide("#Locator"),t=yield b.NAV.xr.requestSession("immersive-ar",{requiredFeatures:["hit-test","dom-overlay"],domOverlay:{root:e("#hud")}}),e.on(t,"end",(()=>{i.endSession()})),i.hud.addSession(t),i.refSpace=yield t.requestReferenceSpace("viewer"),i.renderer.xr.enabled=!0,i.renderer.xr.setReferenceSpaceType("local"),yield i.renderer.xr.setSession(t),t.initFallbackSession=i.initFallbackSession.bind(i),t}))}catch(e){i.initScene=i.initFallbackSession}else i.initScene=i.initFallbackSession;return e.on(b,"resize",i.onResize),i.onResize(),c.setAnimationLoop(i.render),i}))()}onResize(){var{innerWidth:e,innerHeight:t}=b;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}addLights(){var e=new B(R.directionalColor,R.directionalIntensity);e.position.set(...R.directionalPosition),e.castShadow=!0,!1!==this.artifact.shadow&&(e.shadow.bias=-1e-4,e.shadow.mapSize.width=512,e.shadow.mapSize.height=512,e.shadow.camera.near=2,e.shadow.camera.far=300),this.directionalLight=e,this.scene.add(e),this.ambientLight=new P(R.ambientColor,R.ambientIntensity),this.scene.add(this.ambientLight)}addShadowPlane(){var e=new F(200,200,32,32),t=new A;t.opacity=I;var i=new s(e,t);i.receiveShadow=!0,i.lookAt(0,100,0),i.position.set(0,0,0),this.shadowPlane=i}spawnReticle(){var e=new L(.15,.2,32).rotateX(-M.PI/2),t=new W;this.reticle=new s(e,t),this.reticle.matrixAutoUpdate=!1,this.reticle.visible=!1,this.scene.add(this.reticle)}glow(){var{glow:e}=this.artifact;e&&this.model.traverse((t=>{if(H(t.name,"glow")){var i=r.bool(e)?238:e,a=new W({color:i,side:D,blending:O,transparent:!0});t.material=a}}))}nosort(){this.artifact.nosort&&(this.renderer.sortObjects=!1)}clip(){var{model:e,artifact:{clip:t,clipSide:i}}=this;e&&t&&this.model.traverse((e=>{if(H(e.name,"clip")){var t=D;"back"===i?t=ie:"front"===i&&(t=ae),e.material=new W({color:"green",colorWrite:!1,side:t}),e.castShadow=!1,e.receiveShadow=!1,e.renderOrder=1}else e.renderOrder=2}))}mirror(){var{mirrors:e}=this.artifact;if(console.log({mirrors:e}),e&&e.length){var t=b.devicePixelRatio,i=b.innerWidth*t,a=b.innerHeight*t;this.mirrors=e.map((e=>{var t,{clipBias:n=.003,color:o=7829367,type:r,params:s=[4,32],rotation:l={},position:d={}}=e,c=APP_DB.MESH_TYPES;t=r===c.CIRCLE?new X(...s):r===c.RING?new L(...s):r===c.BOX?new z(...s):r===c.SPHERE?new j(...s):new F(...s);var h=new ve(t,{clipBias:n,textureWidth:i,textureHeight:a,color:o},this),{x:u,y:m,z:p}=l;u&&h.rotateX(u),m&&h.rotateY(m),p&&h.rotateZ(p);var{x:v,y:g,z:f}=d;return v&&h.position.setX(v),g&&h.position.setY(g),f&&h.position.setZ(f),this.model.add(h),h}))}}addSkybox(){var e=this;return n((function*(){var{artifact:t,preload:i,renderer:a,scene:n,XR:o}=e,{light:l}=t,d=ne,c=null==t?void 0:t.skySphere;r.arr(c)&&c.length&&(d=c);var h=new j(...d);!1!==t.scaleSky&&h.scale(-1,1,1);var u=i.assets.skybox,m=new V(a);m.compileEquirectangularShader();var p=m.fromEquirectangular(u).texture;m.dispose();var v=new W({map:u}),g=new s(h,v);g.visible=!o,n.add(g),!1!==l&&(n.environment=p),e.skybox=g}))()}addAudio(){if(!this.artifact.audio)return!1;this.listener=new U,this.camera.add(this.listener)}addVideoTrigger(){this.artifact.triggerVideo&&this.model.traverse((e=>{this.videoTrigger||["videotarget","videotrigger"].some((t=>H(e.name,t)))&&(this.videoTrigger=e,this.videoTrigger.visible=!1)}))}startMedia(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(!this.isMediaPlaying){var{actions:t=[],artifact:i,preload:a}=this,{audioElement:n,videoElement:o}=a.assets;n&&!i.triggerAudio&&(e&&(n.currentTime=0),n.play()),o&&!i.triggerVideo&&(e&&(o.currentTime=0),o.play()),t.forEach((e=>e.play())),this.isMediaPlaying=!0}}stopMedia(){var{audioElement:e,videoElement:t,actions:i=[]}=this;e&&e.pause(),t&&t.pause(),i&&i.length&&i.forEach((e=>e.stop())),this.isMediaPlaying=!1}toggleAnimations(){this.actions.forEach((e=>e.paused=!e.paused))}initFallbackSession(){this.XR=!1,b.B.classList.add(N);var{camera:e,artifact:t,model:i,renderer:a}=this,n=new q(e,a.domElement);this.controller=n,this.skybox.visible=!0,Object.entries(Y).forEach((e=>{var[t,i]=e;n[t]=i}));var{cam:o={},orbit:s={},clickable:l}=t;r.num(s.min)&&(n.minDistance=s.min),r.num(s.max)&&(n.maxDistance=s.max),r.num(o.maxPolar)&&(n.maxPolarAngle=Math.PI/o.maxPolar),l?this.hud.showAnimToggler(this.toggleAnimations):this.hud.hideAnimToggler();var{cam:d={}}=t,h=oe,{x:u=h.x,y:m=h.y,z:p=h.z}=d;e.position.set(u,m,p);var{lookat:v={}}=t,{x:g=0,y:f=0,z:w=0}=v;if(n.target=new c(g,f,w),i){var{x:y,y:x,z:S}=i.scale,{scale:k}=t;k&&i.scale.set(y*k,x*k,S*k)}n.update();this.spawnModel(!0),a.domElement.focus()}loadModel(){var e,t,i,{artifact:a,preload:n,sceneInstance:o={}}=this;(null!=o&&o.model?this.model=o.model:null!==(e=n.assets.gltf)&&void 0!==e&&e.scene&&(this.model=n.assets.gltf.scene),null!=o&&o.animations?this.animations=o.animations:null!==(t=n.assets.gltf)&&void 0!==t&&t.animations&&(this.animations=n.assets.gltf.animations),console.log({sceneInstance:o,preload:n,model:this.model,animations:this.animations}),this.model)&&(this.model.traverse((e=>{if(o.parentName&&H(e.name,o.parentName)&&o.child&&(i=e),e.isMesh){var{frustumCulled:t,transparent:n,castShadow:r,receiveShadow:s}=a;!1===t&&(e.frustumCulled=!1),!1===n&&(e.material.transparent=!1),H(e.name,"noshadow")||(e.castShadow=!1!==r,e.receiveShadow=!1!==s),e.material.map&&(e.material.map.anisotropy=16,e.material.map.encoding=T),e.material.emissiveMap&&(e.material.emissiveMap.encoding=T),(e.material.map||e.material.emissiveMap)&&(e.material.needsUpdate=!0)}else if(e.isLight){var{castShadow:l,shadowBias:d=-1e-4,lightIntensity:c=.01,shadowCam:h={}}=a;if(e.intensity=e.intensity*c,!1!==a.shadow){e.castShadow=!1!==l,e.shadow.bias=d;var{near:u=.1,far:m=30}=h;e.shadow.camera.near=u,e.shadow.camera.far=m}}})),i&&i.add(o.child));if(this.actions=[],this.animations&&this.animations.length){this.mixer=new G(this.model);var{loop:r,clickable:s}=a;this.animations.forEach((e=>{var t=this.mixer.clipAction(e);!1===r&&(t.clampWhenFinished=!0,t.loop=Z),s&&(t.paused=!0),this.actions.push(t)}))}if(this.videoElement&&this.model){var l=this.model.getObjectByName("videotarget");if(l){var d=new K(this.videoElement),{flipVideo:c,chromaKey:h}=a;!1!==c&&(d.flipY=!1),l.material.map=d,h&&(l.material=new J(a.chromaKey,d))}}this.glow(),this.clip(),this.nosort(),this.mirror()}spawnModel(e){var{camera:t,controller:i,model:a,reticle:n,scene:o,shadowPlane:r,type:s,XR:l,sceneInstance:d={}}=this;if(!l||e)return a&&(this.applyPositionAndRotation(),o.add(a)),this.modelSpawned=!0,d.spawnModel&&d.spawnModel({engine:this}),void this.startMedia();if(this.isHittestScene()){if(!this.modelSpawned&&this.lastHit){n.updateMatrixWorld(),a.position.setFromMatrixPosition(n.matrixWorld),a.updateMatrixWorld();var c=t.position,h=a.position,u=c.x-h.x,m=c.z-h.z,p=Math.atan2(u,m);a.rotation.y=p,r&&(r.position.setFromMatrixPosition(n.matrixWorld),o.add(r)),o.add(a),null!=d&&d.spawnModel&&d.spawnModel({engine:this}),n.visible=!1,this.modelSpawned=!0,this.startMedia()}this.applyPositionAndRotation()}else if(s===we.Float){var v=a.clone();v.position.set(0,0,-1).applyMatrix4(i.matrixWorld),this.applyPositionAndRotation(),o.add(v),this.startMedia()}}unspawnModel(){var e;this.modelSpawned&&(this.scene.remove(this.model),this.modelSpawned=!1,this.isAnimationRunning=!1,this.stopMedia(),null!==(e=this.sceneInstance)&&void 0!==e&&e.exit&&this.sceneInstance.exit({engine:this}),this.justUnspawned=!0,setTimeout((()=>{this.justUnspawned=!1}),200))}applyPositionAndRotation(){var{artifact:e,model:t}=this;if(t){var{pos:i={},rot:a={}}=e;i.x&&(t.position.x+=i.x),i.y&&(t.position.y+=i.y),i.z&&(t.position.z+=i.z),a.x&&t.rotateX(Q(a.x)),a.y&&t.rotateY(Q(a.y)),a.z&&t.rotateZ(Q(a.z))}}endSession(){var t=this;return n((function*(){var i;t.hud.hide(),t.renderer.setAnimationLoop(null),e("#".concat(C)).classList.remove("visible"),null!==(i=t.sceneInstance)&&void 0!==i&&i.exit&&t.sceneInstance.exit({engine:t}),t.scene&&pe(t.scene),e.remove("#".concat($)),e.remove("#".concat(ee));var a=e("#".concat(_));if(a){var n=a.parentNode;n.id===C?e.remove(a):e.remove(n)}b.B.classList.remove(N),e(".start-experience-button").forEach((e=>{e.removeAttribute("disabled")})),te&&b.location.reload()}))()}isHittestScene(){return![we.Float].includes(this.type)}render(e,t){var i=this;return n((function*(){var a;i.renderHittest(t),i.mixer&&i.mixer.update(i.clock.getDelta()),i.renderVideoTrigger(),null!==(a=i.sceneInstance)&&void 0!==a&&a.render?i.sceneInstance.render(e,t,{engine:i}):i.renderer.render(i.scene,i.camera),i.recorder&&i.recorder.render(e,t)}))()}renderVideoTrigger(){if(this.modelSpawned&&this.artifact.triggerVideo&&this.videoTrigger){var{triggerVideoDistance:e=1.1,triggerAudio:t}=this.artifact,i=e*e,a=this.videoTrigger.position.clone();a.add(this.videoTrigger.parent.position),this.camera.position.distanceToSquared(a)<=i?this.videoElement.paused&&(this.videoElement.play(),this.videoTrigger.visible=!0,t&&this.audioElement&&this.audioElement.play()):this.videoElement.paused||(this.videoElement.pause(),this.videoTrigger.visible=!1,t&&this.audioElement&&this.audioElement.pause())}}renderHittest(t){var i=this;return n((function*(){if(t&&i.XR){var a=i.renderer.xr.getSession();i.hitTestSourceRequested||(i.hitTestSource=yield a.requestHitTestSource({space:i.refSpace}),e.on(a,"end",(()=>{i.hitTestSourceRequested=!1,i.hitTestSource=null})),i.hitTestSourceRequested=!0);var n=t.getHitTestResults(i.hitTestSource);if(n.length){if(i.lastHit=n[0],!i.modelSpawned){i.reticle.visible=!0;var o=i.renderer.xr.getReferenceSpace();i.reticle.matrix.fromArray(i.lastHit.getPose(o).transform.matrix)}i.hud.hideHitSearch()}else i.reticle.visible=!1,i.modelSpawned||i.hud.showHitSearch(),i.lastHit=void 0}}))()}}class ye{constructor(t){var{artifact:i,root:a,THREE:n}=t;this.artifact=i,this.root=a,n&&(this.THREE=n);var{android:o,chrome:r}=ce;this.isAndroidChrome=o&&r,this._warningContainer=e("#timeout-warning"),this._header=e("#timeout-warning-header"),this._headerDone=e("#timeout-warning-header-done"),this._preloadInfo=e("#timeout-warning-info"),this._cancelButton=e("#timeout-warning-cancel"),this._confirmButton=e("#timeout-warning-confirm"),this._tooFarContainer=e("#toofar-warning"),this._tooFarPreviewButton=e("#toofar-warning-load-preview-button"),this._tooFarDistanceInfo=e("#toofar-warning-distance"),this._tooFarCancelButton=e("#toofar-warning-cancel-button"),this._tooFarAbortButton=e("#toofar-warning-abort-button"),this._webglDisabledContainer=e("#timeout-warning-webgl-disabled"),this._webglDisabledOkButton=e("#timeout-warning-webgl-disabled-ok-button"),this.confirmButtonClickHandler=this.confirmButtonClickHandler.bind(this),e.on(this._confirmButton,"click",this.confirmButtonClickHandler),this.onTooFarCancelButtonClick=this.onTooFarCancelButtonClick.bind(this),this.onTooFarPreviewButtonClick=this.onTooFarPreviewButtonClick.bind(this),this.onWebglDisabledOkButtonClick=this.onWebglDisabledOkButtonClick.bind(this),this.textureLoader=new re,this.gltfLoader=new se,this.promises={audioElement:this.loadAudio(),gltf:this.loadGltf(),scene:this.loadScene(),skybox:this.loadSkybox(),videoElement:this.loadVideo()},this.startEngine=this.startEngine.bind(this)}init(){var t=arguments,i=this;return n((function*(){var a=t.length>0&&void 0!==t[0]?t[0]:{},{map:n,XR:o}=a;i._isWorking=!0,i._isCancelled=!1,i._session=!1,i.map=n,i.XR=o,e.on(i._cancelButton,"click",(()=>{i._isCancelled=!0,i.finished()})),e.show([i._warningContainer,i._header]),i.timeout=b.setTimeout(i.showTimeoutWarning,le)}))()}loadScene(){var t=this;return n((function*(){var{artifact:i}=t,a=APP_DB.SCENE_TYPES,{type:n=a.Hit}=i;if([a.Float,a.Hit].includes(n))return!1;var o=Object.entries(a).find((e=>{var[t,i]=e;return i===n})),s="".concat(t.root,"/CustomScene.js");if(r.arr(o)){var l=o[0];s="./scenes/".concat(l,".js")}var{default:d}=yield import(s),c=new d({artifact:i,preload:t,$:e,W:b,is:r});return c.preload&&(yield c.preload({artifact:i,preload:t})),c}))()}loadSkybox(){var e=this;return n((function*(){var{city:t,sky:i,slug:a}=e.artifact,n=i||a,o=b.SUPPORTS.WEBP?"webp":"jpg",r=n;return n.startsWith("/")||(r=[b.STATIC_URL,"skybox",t,n].filter((e=>e)).join("/")),r.endsWith(".".concat(o))||(r+=".".concat(o)),yield e.promisifiedLoad({loader:e.textureLoader,file:r})}))()}loadVideo(){var t=this;return n((function*(){var{slug:i,video:a}=t.artifact;if(!a)return!1;var n=!0===a?i:a,o=e.create("video",{id:ee,loop:!0,playsinline:!0,preload:"auto",crossorigin:"anonymous"});t.videoElement=o;var r=n.startsWith("/")?n:"/video/".concat(n,"/").concat(n),s="".concat(b.MEDIA_URL).concat(r);["webm","mp4"].forEach((t=>{e.create("source",{src:"".concat(s,".").concat(t,"?v=").concat(de),type:"video/".concat(t),parent:o})})),e.append(o);var{videoWidth:l}=o;if(l>0)return o;var d="canplaythrough";return he&&(d="loadedmetadata"),new Promise((t=>{e.on(o,d,(e=>t(e.target)))}))}))()}loadAudio(){var t=this;return n((function*(){var{slug:i,audio:a}=t.artifact;if(!a)return!1;e.remove("#".concat($));var n=e.create("audio",{id:$,loop:!0,crossorigin:"anonymous"});t.audioElement=n;var o=r.str(a)&&a.startsWith("/")?a:"/audio/".concat(i),s="".concat(b.MEDIA_URL).concat(o);["ogg","mp4","mp3"].forEach((t=>{e.create("source",{src:"".concat(s,".").concat(t,"?v=").concat(de),type:"audio/".concat(t),parent:n})})),e.append(n);var{duration:l}=n;if(r.num(l)&&l>0)return n;var d="canplaythrough";return he&&(d="loadedmetadata"),new Promise((t=>{e.on(n,d,(e=>t(e.target)))}))}))()}loadGltf(){var e=this;return n((function*(){var{artifact:t,XR:i}=e;if(!1!==t.glb){var{file:a,version:n=1}=t,o=i?"&xr=1":"",r="".concat(b.GLB_URL,"/").concat(a,".glb?v=").concat(n).concat(o);return yield e.promisifiedLoad({loader:e.gltfLoader,file:r})}}))()}promisifiedLoad(e){var{loader:t,file:i}=e;return new Promise(((e,a)=>{t.load(i,(t=>{e(t)}),(e=>{e.lengthComputable&&(Math.ceil(e.loaded/e.total*100),"/".concat(e.total))}),(e=>{this.setError(e,"Error loading artifact.",5e3),console.error("error loading artifact",e),a(e)}))}))}startEngine(){var t=this;return n((function*(){var{artifact:i,XR:a}=t,o=yield Promise.all(Object.entries(t.promises).map(function(){var e=n((function*(e){var[t,i]=e;return[t,yield i]}));return function(t){return e.apply(this,arguments)}}()));t.assets=Object.fromEntries(o);var r=new be({artifact:i,preload:t,XR:a}),s=yield r.init(t.assets.scene);if(!s)throw new Error("Session undefined.");e.hide(t._header),e.hide(t._preloadInfo),e.show(t._headerDone),t._session=s,t._timeoutShown&&t.isAndroidChrome?e.prop(t._confirmButton,{disabled:!1}):t._isCancelled||(yield t.finishLoad())}))()}showTimeoutWarning(){e.show(this._preloadInfo),this.isAndroidChrome&&(e.show(this._confirmButton),this._confirmButton.setAttribute("disabled",!0),this._timeoutShown=!0)}confirmButtonClickHandler(){var t=this;return n((function*(){t._session?(e.off(t._confirmButton,"click",t.confirmButtonClickHandler),yield t.finishLoad(),t.finished()):console.error("confirmButtonClickHandler: session not defined",t)}))()}finishLoad(){var t=this;return n((function*(){if(t._session){var{hud:i,initFallbackSession:a,initScene:n}=t._session;try{yield n(),i.show(),e.show("#".concat(C)),t.finished()}catch(n){"InvalidStateError"===n.name||"NotSupportedError"===n.name?(yield a(),i.show(),e.show("#".concat(C)),t.finished()):"SecurityError"===n.name?(e.show(t._confirmButton),e.prop(t._confirmButton,{disabled:!1})):(console.error("Unexpected Preload.finishLoad error"),console.error(n))}}}))()}setError(e,t){console.warn(e,t),b.clearTimeout(this.timeout),this.finished()}showTooFarNotification(t){var{distance:i,artifact:a,map:n}=t,o="meter",r=i;r>=1e3?(o="kilometer",r>=2e3&&(o+="s"),r=Math.round(r/1e3)):r>=2&&(o+="s"),this.artifact=a,this.map=n,this.XR=!1,this._tooFarDistanceInfo.innerText="This artifact is ".concat(r," ").concat(o," away."),e.show(this._tooFarContainer),e.on(this._tooFarPreviewButton,"click",this.onTooFarPreviewButtonClick),e.on(this._tooFarCancelButton,"click",this.onTooFarCancelButtonClick),e.on(this._tooFarAbortButton,"click",this.onTooFarCancelButtonClick)}onTooFarCancelButtonClick(){e.off(this._tooFarPreviewButton,"click",this.onTooFarPreviewButtonClick),this._isCancelled=!0,e.hide(this._tooFarContainer),this.finished()}onTooFarPreviewButtonClick(){var t=this;return n((function*(){e.off(t._tooFarPreviewButton,"click",t.onTooFarPreviewButtonClick),e.off(t._tooFarCancelButton,"click",t.onTooFarCancelButtonClick),e.off(t._tooFarAbortButton,"click",t.onTooFarCancelButtonClick),e.hide(t._tooFarContainer);var{artifact:i,map:a,XR:n}=t;yield t.init({artifact:i,map:a,XR:n}),yield t.startEngine()}))()}showWebglDisabledNotification(){e.show(this._webglDisabledContainer),e.hide([this._header,this._headerDone,this._preloadInfo,this._cancelButton,this._confirmButton]),e.on(this._webglDisabledOkButton,"click",this.onWebglDisabledOkButtonClick)}onWebglDisabledOkButtonClick(){e.off(this._webglDisabledOkButton,"click",this.onWebglDisabledOkButtonClick),this._isCancelled=!0,e.hide(this._webglDisabledContainer),this.finished()}finished(){this._isWorking=!1,this._timeoutShown=!1,e(".start-experience-button").forEach((e=>{e.removeAttribute("disabled")})),e.hide([this._warningContainer,this._confirmButton,this._preloadInfo,this._headerDone]),e.prop(this._confirmButton,{disabled:!0}),e.show(this._header),b.clearTimeout(this.timeout)}}export{ye as Preload};
