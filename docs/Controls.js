import{D as e,a$ as t}from"./vendor.js";class i{constructor(i){var{clickables:n,engine:s}=i;this.clickables=n,this.engine=s,this.rotationMatrix=new e,this.raycaster=new t,this.click=this.click.bind(this),this.select=this.select.bind(this)}click(e){var{clickables:t}=this;if(!0===t)this.handle();else{var{raycaster:i}=this,{camera:n,renderer:s}=this.engine,a=e.clientX/s.domElement.clientWidth*2-1,r=-e.clientY/s.domElement.clientHeight*2+1;i.setFromCamera({x:a,y:r},n);var c=i.intersectObjects(t,!0);this.handle(c)}}select(){var{clickables:e}=this;if(!0===e)this.handle();else{var{raycaster:t,rotationMatrix:i}=this,{controller:n}=this.engine;i.extractRotation(n.matrixWorld),t.ray.origin.setFromMatrixPosition(n.matrixWorld),t.ray.direction.set(0,0,-1).applyMatrix4(i);var s=t.intersectObjects(e,!0);this.handle(s)}}handle(){var e,t,i=[];return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).forEach((e=>{var{object:t}=e;t.name&&!i.find((e=>e.name===t.name))&&i.push(t)})),null!==(e=this.engine.sceneInstance)&&void 0!==e&&e.handleIntersects&&console.error("E_DEPRECATED","`CustomScene.handleIntersects` is deprecated, use `CustomScene.onTouch` instead."),null!==(t=this.engine.sceneInstance)&&void 0!==t&&t.onTouch?this.engine.sceneInstance.onTouch(i):i}}export{i as Controls};
