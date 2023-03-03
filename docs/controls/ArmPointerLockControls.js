import{aw as e,aa as o,ap as t,ax as n,$ as i}from"../vendor.js";const r=new e(0,0,0,"YXZ"),s=new o,c={type:"change"},l={type:"lock"},a={type:"unlock"},h=Math.PI/2;class d extends t{constructor(e,t){super(),this.domElement=t,this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1;const n=this;function i(o){if(!1===n.isLocked)return;const t=o.movementX||o.mozMovementX||o.webkitMovementX||0,i=o.movementY||o.mozMovementY||o.webkitMovementY||0;r.setFromQuaternion(e.quaternion),r.y-=.002*t*n.pointerSpeed,r.x-=.002*i*n.pointerSpeed,r.x=Math.max(h-n.maxPolarAngle,Math.min(h-n.minPolarAngle,r.x)),e.quaternion.setFromEuler(r),n.dispatchEvent(c)}function d(){n.domElement.ownerDocument.pointerLockElement===n.domElement?(n.dispatchEvent(l),n.isLocked=!0):(n.dispatchEvent(a),n.isLocked=!1)}function m(){}this.connect=function(){n.domElement.ownerDocument.addEventListener("mousemove",i),n.domElement.ownerDocument.addEventListener("pointerlockchange",d),n.domElement.ownerDocument.addEventListener("pointerlockerror",m)},this.disconnect=function(){n.domElement.ownerDocument.removeEventListener("mousemove",i),n.domElement.ownerDocument.removeEventListener("pointerlockchange",d),n.domElement.ownerDocument.removeEventListener("pointerlockerror",m)},this.dispose=function(){this.disconnect()},this.getObject=function(){return e},this.getDirection=function(){const t=new o(0,0,-1);return function(o){return o.copy(t).applyQuaternion(e.quaternion)}}(),this.moveForward=function(o){s.setFromMatrixColumn(e.matrix,0),s.crossVectors(e.up,s),e.position.addScaledVector(s,o)},this.moveRight=function(o){s.setFromMatrixColumn(e.matrix,0),e.position.addScaledVector(s,o)},this.lock=function(){this.domElement.requestPointerLock()},this.unlock=function(){n.domElement.ownerDocument.exitPointerLock()},this.connect()}}class m extends d{constructor(e,t,r){var{lookat:s={}}=r;super(e,t),this.onKeyDown=this.onKeyDown.bind(this),this.onKeyUp=this.onKeyUp.bind(this),this.onLock=this.onLock.bind(this),this.onUnlock=this.onUnlock.bind(this),this.keyboard={},this.config={speed:.1},Object.entries(n).forEach((e=>{var[o,t]=e;this[o]=t}));var{x:c=0,y:l=0,z:a=0}=s,h=new o(c,l,a);e.lookAt(h),this.lockMenuPanel=i.create("div",{parent:document.body,style:{position:"fixed",left:"50%",top:"50%",fontSize:"2em",zIndex:5e10},children:[i.create("button",{style:{color:"#000",backgroundColor:"green"},innerText:"testing",on:{click:()=>this.controller.lock()}})]}),i.on(this.controller,"lock",this.onLock),i.on(this.controller,"unlock",this.onUnlock),i.on(document,"keydown",this.onKeyDown,!1),i.on(document,"keyup",this.onKeyUp,!1)}onLock(){this.lockMenuPanel.style.display="none"}onUnlock(){this.lockMenuPanel.style.display="block"}onKeyDown(e){var{code:o,repeat:t}=e;t||("KeyW"!==o&&"ArrowUp"!==o||(this.keyboard.w=!0),"KeyA"!==o&&"ArrowLeft"!==o||(this.keyboard.a=!0),"KeyS"!==o&&"ArrowDown"!==o||(this.keyboard.s=!0),"KeyD"!==o&&"ArrowRight"!==o||(this.keyboard.d=!0))}onKeyUp(e){var{code:o}=e;"KeyW"!==o&&"ArrowUp"!==o||(this.keyboard.w=!1),"KeyA"!==o&&"ArrowLeft"!==o||(this.keyboard.a=!1),"KeyS"!==o&&"ArrowDown"!==o||(this.keyboard.s=!1),"KeyD"!==o&&"ArrowRight"!==o||(this.keyboard.d=!1)}unspawn(){i.remove(this.lockMenuPanel),i.off(this.controller,"lock",this.onLock),i.off(this.controller,"unlock",this.onUnlock),i.off(document,"keydown",this.onKeyDown,!1),i.off(document,"keyup",this.onKeyUp,!1)}render(e){if(this.keyboard){var{speed:o}=this.config;this.keyboard.w&&this.controller.moveForward(o*e),this.keyboard.a&&this.controller.moveRight(-o*e),this.keyboard.s&&this.controller.moveForward(-o*e),this.keyboard.d&&this.controller.moveRight(o*e)}}}export{m as ArmPointerLockControls};
