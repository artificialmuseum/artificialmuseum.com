import{c as i,W as a,n as t,$ as o,w as e}from"./vendor.js";import{Preload as r}from"./Preload.js";import"./materials/ChromaKeyMaterial.js";var n={slug:"artificialroom",name:"Artificial Room",file:"artificialroom",version:3,lat:48.21,lng:16.3812,type:23,artists:["litto"],published:!1,distance:-1,frustumCulled:!1,location:"psk",city:"vienna",sky:"civa",spatialObjects:[{target:"*_area",distance:{min:0,max:1},yDistanceTest:!1,fn:"distanceMatch"}],animations:{noLoopAnimations:["clippDoor_opens","landing","location","shapekeys"],pausedAnimations:["clippDoor_opens","landing","location","shapekeys","active_replay","active_gameover"]},clip:!0,cam:{x:.8,y:1.8,z:7},lookat:{y:1.5},description:"\nA room.\n  "},s=function(){var s=i((function*(){window.APP_DB={SCENE_TYPES:{Hit:1,Float:2,KinectCloud:3,Displacement:4,Bubbles:5,LightCube:6,FakeMirror:7,BrainWave:8,Latk:9,MolecularVortex:10,Ply:11,LiquidDisplacement:12,GreenscreenPlane:13,LiquidLitto:14,GameoverOrReplay:15,Moon:16,NadiasVision:17,AudioAnalyserLights:18,PinkBlobs:19,Portal:20,Boids:21,FakeMirrorImages:22,ArtificialRoom:23},MESH_TYPES:{PLANE:1,CIRCLE:2,RING:3,BOX:4,CUBE:4,SPHERE:5}},window.MAP_URL="https://map{s}.localhost:8003",window.GLB_URL="https://glb.artificialmuseum.com",window.STATIC_URL="https://static.artificialmuseum.com",window.MEDIA_URL="https://media.artificialmuseum.com",window.ROOT_URL="https://artificialmuseum.com",a.SUPPORTS=yield t();var{XR:s}=a.SUPPORTS,c=o("#show-artifact");o.on(c,"click",(a=>{var{artifact:t,map:e,XR:n=!1}=a;return i((function*(){var i=new r({artifact:t}),a=o("#show-artifact");a.disabled=!0;try{i._isWorking||(yield i.init({artifact:t,map:e,XR:n}),yield i.startEngine({artifact:t,map:e,XR:n}),a.disabled=!1)}catch(a){a.toString().toLowerCase().includes("error creating webgl context")&&i.showWebglDisabledNotification()}}))})({artifact:n,XR:s})),e&&o("a").forEach((i=>{i.removeAttribute("target")}))}));return function(){return s.apply(this,arguments)}}();s();
