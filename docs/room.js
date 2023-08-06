import{_ as i,W as t,s as o,$ as a,w as e}from"./vendor.js";import{Preload as r}from"./Preload.js";import{S as n}from"./SCENE_TYPES.js";var s={slug:"gameoverorreplay",name:["Gameover or","Replay"],file:"gameoverorreplay",version:1,lat:52.5452,lng:13.3668,type:n.ArtificialRoom,artists:["litto"],sound:["manuelcyrillbachinger"],distance:5e3,frustumCulled:!1,audio:!0,location:"silentgreen",city:"berlin",sky:"silentgreeneingang",clickables:["cyborg_gameover_clicktarget","cyborg_replay_clicktarget"],fonts:["droid_sans_regular"],examples:["TextGeometry"],record3d:{doNotInit:!0},noShadowObjects:["interface_01"],portal:!0,animations:{noLoopAnimations:["doorOpen","KeyAction","inside","location","longLanding_LivingCity","shapekeys"],pausedAnimations:["doorOpen","KeyAction","longLanding_LivingCity","inside","location","shapekeys"]},artificialroom:{names:{assets:["clipDoor"]}},clip:!0,cam:{y:1.8,z:7},lookat:{y:1.5,z:-4},description:"\nVote for Gameover or Replay by tapping one of the characters.\n  "},c=function(){var n=i((function*(){window.APP_DB={SCENE_TYPES:{ArtificialRoom:23},MESH_TYPES:{PLANE:1,CIRCLE:2,RING:3,BOX:4,CUBE:4,SPHERE:5}},window.MAP_URL="https://map{s}.artificialmuseum.com",window.GLB_URL="https://glb.artificialmuseum.com",window.STATIC_URL="https://static.artificialmuseum.com",window.MEDIA_URL="https://media.artificialmuseum.com",window.ROOT_URL="https://artificialmuseum.com",t.SUPPORTS=yield o();var{XR:n}=t.SUPPORTS,c=a("#show-artifact");a.on(c,"click",(t=>{var{artifact:o}=t;return i((function*(){var i=new r({artifact:o}),t=a("#show-artifact");t.disabled=!0;try{i._isWorking||(yield i.init(),t.disabled=!1)}catch(t){t.toString().toLowerCase().includes("error creating webgl context")&&i.showWebglDisabledNotification()}}))})({artifact:s,XR:n})),e&&a("a").forEach((i=>{i.removeAttribute("target")}))}));return function(){return n.apply(this,arguments)}}();c();
