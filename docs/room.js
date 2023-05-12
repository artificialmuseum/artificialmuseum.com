import{c as i,W as a,s as t,$ as o,w as e}from"./vendor.js";import{Preload as r}from"./Preload.js";import{S as n}from"./SCENE_TYPES.js";var s={slug:"gameoverorreplay",name:["Gameover or","Replay"],file:"gameoverorreplay",version:1,lat:52.5452,lng:13.3668,type:n.ArtificialRoom,artists:["litto"],sound:["manuelcyrillbachinger"],distance:5e3,frustumCulled:!1,audio:!0,location:"silentgreen",city:"berlin",sky:"silentgreeneingang",clickables:["cyborg_gameover_clicktarget","cyborg_replay_clicktarget"],fonts:["droid_sans_regular"],examples:["TextGeometry"],record3d:!0,noShadowObjects:["interface_01"],portal:!0,animations:{noLoopAnimations:["doorOpen","KeyAction","inside","location","longLanding_LivingCity","shapekeys"],pausedAnimations:["doorOpen","KeyAction","longLanding_LivingCity","inside","location","shapekeys"]},artificialroom:{names:{assets:["clipDoor"]}},clip:!0,cam:{y:1.8,z:7},lookat:{y:1.5,z:-4},description:"\nA room.\n  "},c=function(){var n=i((function*(){window.APP_DB={SCENE_TYPES:{ArtificialRoom:23},MESH_TYPES:{PLANE:1,CIRCLE:2,RING:3,BOX:4,CUBE:4,SPHERE:5}},window.MAP_URL="https://map{s}.artificialmuseum.com",window.GLB_URL="https://glb.artificialmuseum.com",window.STATIC_URL="https://static.artificialmuseum.com",window.MEDIA_URL="https://media.artificialmuseum.com",window.ROOT_URL="https://artificialmuseum.com",a.SUPPORTS=yield t();var{XR:n}=a.SUPPORTS,c=o("#show-artifact");o.on(c,"click",(a=>{var{artifact:t,map:e,XR:n=!1}=a;return i((function*(){var i=new r({artifact:t}),a=o("#show-artifact");a.disabled=!0;try{i._isWorking||(yield i.init({artifact:t,map:e,XR:n}),yield i.startEngine({artifact:t,map:e,XR:n}),a.disabled=!1)}catch(a){a.toString().toLowerCase().includes("error creating webgl context")&&i.showWebglDisabledNotification()}}))})({artifact:s,XR:n})),e&&o("a").forEach((i=>{i.removeAttribute("target")}))}));return function(){return n.apply(this,arguments)}}();c();
