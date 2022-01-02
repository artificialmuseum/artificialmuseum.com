import{B as zo,C as Sc,H as ms,I as Uo,J as Ho,K as gs,L as Tc,M as Ec,O as Ac,P as Lc,a as lh,b as rt,c as We,d as Me,e as Bo,k as xc,l as No,t as ps,u as _c,v as Ei,w as bc,x as wc,y as Mc}from"./chunk.js";var dt={HIT:1,FLOAT:2,POINT_CLOUD:3,DISPLACEMENT:4,BUBBLES:5,LIGHT_CUBE:6,RECORD3D:7,BRAIN_WAVE:8,LATK:9,MOLECULAR_VORTEX:10,PLY:11};var Tr={PLANE:1,CIRCLE:2,RING:3,BOX:4,CUBE:4,SPHERE:5};var Go=class{constructor(e){let{scene:n,sceneInstance:i,renderer:r,endSession:s}=e;this.endSession=s,this.engine=e,this.gui=Me(`#${Tc}`),this.hitSearch=Me("#hud-searching-hittest"),this.swipeToRemove=Me("#hud-swipe-to-remove"),this.XR=e.XR,this.XR&&(this.menu=Me("#hud-menu"),this.subMenu=Me("#hud-menu-sub"),this.menuVisible=!1,this.menuToggle=Me("#hud-menu-toggle"),Me.on(this.menuToggle,"click",this.onToggleMenu.bind(this)),Me.on("#hud-menu-reposition","click",this.onRepositionButtonClick.bind(this)),this.recordVideoButton=Me("#hud-menu-record-video"),Me.on(this.recordVideoButton,"click",this.onRecordButtonClick.bind(this))),this.scene=n,this.renderer=r,this.sceneInstance=i,Me.on(`#${Ec}`,"click",this.onExitButtonClick.bind(this)),Ac(this),this.animToggler=Me("#toggle-animation-button")}setCamera(e){this.cameraAccess=e,e?Me.show(this.recordVideoButton):Me.hide(this.recordVideoButton)}showAnimToggler(e){!this.animToggler||(this.animToggler.classList.remove("play"),Me.show(this.animToggler),this.animTogglerInit||(this.animTogglerInit=!0,this.eventListener=()=>{this.animToggler.classList.toggle("play"),e()},Me.on(this.animToggler,"click",this.eventListener)))}hideAnimToggler(){Me.hide(this.animToggler)}onToggleMenu(){let{subMenu:e}=this;e.classList.toggle("visible")}onRepositionButtonClick(){this.engine.unspawnModel()}async onRecordButtonClick(){this.engine.toggleRecording()}addSession(e){this.session=e}show(){Me.show(this.gui)}hide(){Me.hide(this.gui)}async onExitButtonClick(){if(this.session)try{await this.session.end()}catch{this.hide()}else await this.endSession();Me.off(this.animToggler,"click",this.eventListener),this.sceneInstance&&this.sceneInstance.exit&&this.sceneInstance.exit(this),Lc()}showHitSearch(){Me.show(this.hitSearch)}hideHitSearch(){Me.hide(this.hitSearch)}showElement(e){e.shown||(Me.show(e),e.shown=!0)}hideElement(e){!e.shown||(Me.hide(e),e.shown=!1)}};var Rc="125dev",mn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},gn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},uh=0,Cc=1,hh=2;var Pc=1,ko=2,Er=3,Pn=0,nt=1,pt=2,Ic=1;var In=0,Ar=1,Dn=2,Dc=3,Oc=4,fh=5,Ai=100,dh=101,ph=102,Fc=103,Bc=104,mh=200,gh=201,vh=202,yh=203,Nc=204,zc=205,xh=206,_h=207,bh=208,wh=209,Mh=210,Sh=0,Th=1,Eh=2,Vo=3,Ah=4,Lh=5,Rh=6,Ch=7,vs=0,Ph=1,Ih=2,Li=0,Dh=1,Oh=2,Fh=3,Wo=4,Bh=5,Uc=300,jo=301,qo=302,Hc=303,Gc=304,ys=306,Xo=307,ri=1e3,Tt=1001,Lr=1002,et=1003,xs=1004;var _s=1005;var je=1006,Yo=1007;var si=1008;var Rr=1009,Nh=1010,zh=1011,bs=1012,Uh=1013,ws=1014,On=1015,Ms=1016,Hh=1017,Gh=1018,kh=1019,Cr=1020,Vh=1021,Vt=1022,zt=1023,Wh=1024,jh=1025,qh=zt,Ri=1026,Pr=1027,Xh=1028,Yh=1029,Zh=1030,Jh=1031,Kh=1032,$h=1033,kc=33776,Vc=33777,Wc=33778,jc=33779,qc=35840,Xc=35841,Yc=35842,Zc=35843,Qh=36196,Jc=37492,Kc=37496,ef=37808,tf=37809,nf=37810,rf=37811,sf=37812,of=37813,af=37814,cf=37815,lf=37816,uf=37817,hf=37818,ff=37819,df=37820,pf=37821,mf=36492,gf=37840,vf=37841,yf=37842,xf=37843,_f=37844,bf=37845,wf=37846,Mf=37847,Sf=37848,Tf=37849,Ef=37850,Af=37851,Lf=37852,Rf=37853,Zo=2200,Cf=2201,Pf=2202,Ci=2300,oi=2301,Jo=2302,Pi=2400,Ii=2401,Ss=2402,Ko=2500,$c=2501,If=0,Qc=1,$o=2,yt=3e3,Wt=3001,Qo=3007,ea=3002,Df=3003,el=3004,tl=3005,nl=3006,Of=3200,Ff=3201,Fn=0,Bf=1;var ta=7680;var Nf=519,Ts=35044,Ir=35048;var il="300 es";function jt(){}Object.assign(jt.prototype,{addEventListener:function(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)},hasEventListener:function(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1},removeEventListener:function(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}},dispatchEvent:function(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,t)}}});var mt=[];for(let t=0;t<256;t++)mt[t]=(t<16?"0":"")+t.toString(16);var Es=1234567,Ee={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(mt[t&255]+mt[t>>8&255]+mt[t>>16&255]+mt[t>>24&255]+"-"+mt[e&255]+mt[e>>8&255]+"-"+mt[e>>16&15|64]+mt[e>>24&255]+"-"+mt[n&63|128]+mt[n>>8&255]+"-"+mt[n>>16&255]+mt[n>>24&255]+mt[i&255]+mt[i>>8&255]+mt[i>>16&255]+mt[i>>24&255]).toUpperCase()},clamp:function(t,e,n){return Math.max(e,Math.min(n,t))},euclideanModulo:function(t,e){return(t%e+e)%e},mapLinear:function(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)},lerp:function(t,e,n){return(1-n)*t+n*e},damp:function(t,e,n,i){return Ee.lerp(t,e,1-Math.exp(-n*i))},pingpong:function(t,e=1){return e-Math.abs(Ee.euclideanModulo(t,e*2)-e)},smoothstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))},smootherstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))},randInt:function(t,e){return t+Math.floor(Math.random()*(e-t+1))},randFloat:function(t,e){return t+Math.random()*(e-t)},randFloatSpread:function(t){return t*(.5-Math.random())},seededRandom:function(t){return t!==void 0&&(Es=t%2147483647),Es=Es*16807%2147483647,(Es-1)/2147483646},degToRad:function(t){return t*Ee.DEG2RAD},radToDeg:function(t){return t*Ee.RAD2DEG},isPowerOfTwo:function(t){return(t&t-1)===0&&t!==0},ceilPowerOfTwo:function(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))},floorPowerOfTwo:function(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))},setQuaternionFromProperEuler:function(t,e,n,i,r){let s=Math.cos,o=Math.sin,a=s(n/2),c=o(n/2),l=s((e+i)/2),h=o((e+i)/2),u=s((e-i)/2),f=o((e-i)/2),d=s((i-e)/2),p=o((i-e)/2);switch(r){case"XYX":t.set(a*h,c*u,c*f,a*l);break;case"YZY":t.set(c*f,a*h,c*u,a*l);break;case"ZXZ":t.set(c*u,c*f,a*h,a*l);break;case"XZX":t.set(a*h,c*p,c*d,a*l);break;case"YXY":t.set(c*d,a*h,c*p,a*l);break;case"ZYZ":t.set(c*p,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}},se=class{constructor(e=0,n=0){Object.defineProperty(this,"isVector2",{value:!0}),this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,n){return n!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,n)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e,n){return n!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,n)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}},Ct=class{constructor(){Object.defineProperty(this,"isMatrix3",{value:!0}),this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,n,i,r,s,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=n,h[4]=s,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}clone(){return new this.constructor().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],f=i[2],d=i[5],p=i[8],y=r[0],v=r[3],g=r[6],m=r[1],A=r[4],S=r[7],E=r[2],_=r[5],F=r[8];return s[0]=o*y+a*m+c*E,s[3]=o*v+a*A+c*_,s[6]=o*g+a*S+c*F,s[1]=l*y+h*m+u*E,s[4]=l*v+h*A+u*_,s[7]=l*g+h*S+u*F,s[2]=f*y+d*m+p*E,s[5]=f*v+d*A+p*_,s[8]=f*g+d*S+p*F,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return n*o*h-n*a*l-i*s*h+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*s,d=l*s-o*c,p=n*u+i*f+r*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/p;return e[0]=u*y,e[1]=(r*l-h*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(h*n-r*c)*y,e[5]=(r*s-a*n)*y,e[6]=d*y,e[7]=(i*c-l*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).copy(this).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+n,0,0,1),this}scale(e,n){let i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=n,i[4]*=n,i[7]*=n,this}rotate(e){let n=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],c=r[1],l=r[4],h=r[7];return r[0]=n*s+i*c,r[3]=n*o+i*l,r[6]=n*a+i*h,r[1]=-i*s+n*c,r[4]=-i*o+n*l,r[7]=-i*a+n*h,this}translate(e,n){let i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=n*i[2],i[4]+=n*i[5],i[7]+=n*i[8],this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}},Di,Oi={getDataURL:function(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Di===void 0&&(Di=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),Di.width=t.width,Di.height=t.height;let n=Di.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Di}return e.width>2048||e.height>2048?e.toDataURL("image/jpeg",.6):e.toDataURL("image/png")}},zf=0;function Xe(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,n=Tt,i=Tt,r=je,s=si,o=zt,a=Rr,c=1,l=yt){Object.defineProperty(this,"id",{value:zf++}),this.uuid=Ee.generateUUID(),this.name="",this.image=t,this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=a,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=l,this.version=0,this.onUpdate=null}Xe.DEFAULT_IMAGE=void 0;Xe.DEFAULT_MAPPING=Uc;Xe.prototype=Object.assign(Object.create(jt.prototype),{constructor:Xe,isTexture:!0,updateMatrix:function(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.name=t.name,this.image=t.image,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this},toJSON:function(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){let i=this.image;if(i.uuid===void 0&&(i.uuid=Ee.generateUUID()),!e&&t.images[i.uuid]===void 0){let r;if(Array.isArray(i)){r=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?r.push(na(i[s].image)):r.push(na(i[s]))}else r=na(i);t.images[i.uuid]={uuid:i.uuid,url:r}}n.image=i.uuid}return e||(t.textures[this.uuid]=n),n},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(t){if(this.mapping!==Uc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ri:t.x=t.x-Math.floor(t.x);break;case Tt:t.x=t.x<0?0:1;break;case Lr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ri:t.y=t.y-Math.floor(t.y);break;case Tt:t.y=t.y<0?0:1;break;case Lr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}});Object.defineProperty(Xe.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});function na(t){return typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap?Oi.getDataURL(t):t.data?{data:Array.prototype.slice.call(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ge=class{constructor(e=0,n=0,i=0,r=1){Object.defineProperty(this,"isVector4",{value:!0}),this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,n){return n!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,n)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e,n){return n!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,n)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s,o=.01,a=.1,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],p=c[9],y=c[2],v=c[6],g=c[10];if(Math.abs(h-f)<o&&Math.abs(u-y)<o&&Math.abs(p-v)<o){if(Math.abs(h+f)<a&&Math.abs(u+y)<a&&Math.abs(p+v)<a&&Math.abs(l+d+g-3)<a)return this.set(1,0,0,0),this;n=Math.PI;let A=(l+1)/2,S=(d+1)/2,E=(g+1)/2,_=(h+f)/4,F=(u+y)/4,Z=(p+v)/4;return A>S&&A>E?A<o?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(A),r=_/i,s=F/i):S>E?S<o?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=_/r,s=Z/r):E<o?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=F/s,r=Z/s),this.set(i,r,s,n),this}let m=Math.sqrt((v-p)*(v-p)+(u-y)*(u-y)+(f-h)*(f-h));return Math.abs(m)<.001&&(m=1),this.x=(v-p)/m,this.y=(u-y)/m,this.z=(f-h)/m,this.w=Math.acos((l+d+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}},vn=class extends jt{constructor(e,n,i){super();Object.defineProperty(this,"isWebGLRenderTarget",{value:!0}),this.width=e,this.height=n,this.scissor=new Ge(0,0,e,n),this.scissorTest=!1,this.viewport=new Ge(0,0,e,n),i=i||{},this.texture=new Xe(void 0,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.image={},this.texture.image.width=e,this.texture.image.height=n,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:je,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null}setSize(e,n){(this.width!==e||this.height!==n)&&(this.width=e,this.height=n,this.texture.image.width=e,this.texture.image.height=n,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};var ut=class{constructor(e=0,n=0,i=0,r=1){Object.defineProperty(this,"isQuaternion",{value:!0}),this._x=e,this._y=n,this._z=i,this._w=r}static slerp(e,n,i,r){return i.copy(e).slerp(n,r)}static slerpFlat(e,n,i,r,s,o,a){let c=i[r+0],l=i[r+1],h=i[r+2],u=i[r+3],f=s[o+0],d=s[o+1],p=s[o+2],y=s[o+3];if(u!==y||c!==f||l!==d||h!==p){let v=1-a,g=c*f+l*d+h*p+u*y,m=g>=0?1:-1,A=1-g*g;if(A>Number.EPSILON){let E=Math.sqrt(A),_=Math.atan2(E,g*m);v=Math.sin(v*_)/E,a=Math.sin(a*_)/E}let S=a*m;if(c=c*v+f*S,l=l*v+d*S,h=h*v+p*S,u=u*v+y*S,v===1-a){let E=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=E,l*=E,h*=E,u*=E}}e[n]=c,e[n+1]=l,e[n+2]=h,e[n+3]=u}static multiplyQuaternionsFlat(e,n,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],h=i[r+3],u=s[o],f=s[o+1],d=s[o+2],p=s[o+3];return e[n]=a*p+h*u+c*d-l*f,e[n+1]=c*p+h*f+l*u-a*d,e[n+2]=l*p+h*d+a*f-c*u,e[n+3]=h*p-a*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(r/2),u=a(s/2),f=c(i/2),d=c(r/2),p=c(s/2);switch(o){case"XYZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"YZX":this._x=f*h*u+l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u-f*d*p;break;case"XZY":this._x=f*h*u-l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],c=n[9],l=n[2],h=n[6],u=n[10],f=i+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(s-l)*d,this._z=(o-r)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(s-l)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-r)/d,this._x=(s+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=1e-6,r=e.dot(n)+1;return r<i?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ee.clamp(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,n){return n!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,n)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,c=n._y,l=n._z,h=n._w;return this._x=i*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-i*l,this._z=s*h+o*l+i*c-r*a,this._w=o*h-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-n;return this._w=d*o+n*this._w,this._x=d*i+n*this._x,this._y=d*r+n*this._y,this._z=d*s+n*this._z,this.normalize(),this._onChangeCallback(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-n)*h)/l,f=Math.sin(n*h)/l;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}},L=class{constructor(e=0,n=0,i=0){Object.defineProperty(this,"isVector3",{value:!0}),this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,n){return n!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,n)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e,n){return n!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,n)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e,n){return n!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,n)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(rl.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(rl.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*n+o*r-a*i,h=c*i+a*n-s*r,u=c*r+s*i-o*n,f=-s*n-o*i-a*r;return this.x=l*c+f*-s+h*-a-u*-o,this.y=h*c+f*-o+u*-s-l*-a,this.z=u*c+f*-a+l*-o-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e,n){return n!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,n)):this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,c=n.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ia.copy(this).projectOnVector(e),this.sub(ia)}reflect(e){return this.sub(ia.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(Ee.clamp(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}},ia=new L,rl=new ut,$t=class{constructor(e,n){Object.defineProperty(this,"isBox3",{value:!0}),this.min=e!==void 0?e:new L(1/0,1/0,1/0),this.max=n!==void 0?n:new L(-1/0,-1/0,-1/0)}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){let h=e[c],u=e[c+1],f=e[c+2];h<n&&(n=h),u<i&&(i=u),f<r&&(r=f),h>s&&(s=h),u>o&&(o=u),f>a&&(a=f)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){let h=e.getX(c),u=e.getY(c),f=e.getZ(c);h<n&&(n=h),u<i&&(i=u),f<r&&(r=f),h>s&&(s=h),u>o&&(o=u),f>a&&(a=f)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=Dr.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return e===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),e=new L),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),e=new L),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);let n=e.geometry;n!==void 0&&(n.boundingBox===null&&n.computeBoundingBox(),sa.copy(n.boundingBox),sa.applyMatrix4(e.matrixWorld),this.union(sa));let i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),n=new L),n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Dr),Dr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Or),As.subVectors(this.max,Or),Fi.subVectors(e.a,Or),Bi.subVectors(e.b,Or),Ni.subVectors(e.c,Or),Bn.subVectors(Bi,Fi),Nn.subVectors(Ni,Bi),ai.subVectors(Fi,Ni);let n=[0,-Bn.z,Bn.y,0,-Nn.z,Nn.y,0,-ai.z,ai.y,Bn.z,0,-Bn.x,Nn.z,0,-Nn.x,ai.z,0,-ai.x,-Bn.y,Bn.x,0,-Nn.y,Nn.x,0,-ai.y,ai.x,0];return!ra(n,Fi,Bi,Ni,As)||(n=[1,0,0,0,1,0,0,0,1],!ra(n,Fi,Bi,Ni,As))?!1:(Ls.crossVectors(Bn,Nn),n=[Ls.x,Ls.y,Ls.z],ra(n,Fi,Bi,Ni,As))}clampPoint(e,n){return n===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),n=new L),n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Dr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return e===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(e.center),e.radius=this.getSize(Dr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};function ra(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){ci.fromArray(t,s);let a=r.x*Math.abs(ci.x)+r.y*Math.abs(ci.y)+r.z*Math.abs(ci.z),c=e.dot(ci),l=n.dot(ci),h=i.dot(ci);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var yn=[new L,new L,new L,new L,new L,new L,new L,new L],Dr=new L,sa=new $t,Fi=new L,Bi=new L,Ni=new L,Bn=new L,Nn=new L,ai=new L,Or=new L,As=new L,Ls=new L,ci=new L,Uf=new $t,Qt=class{constructor(e,n){this.center=e!==void 0?e:new L,this.radius=n!==void 0?n:-1}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):Uf.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),n=new L),n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return e===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),e=new $t),this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}},xn=new L,oa=new L,Rs=new L,zn=new L,aa=new L,Cs=new L,ca=new L,zi=class{constructor(e,n){this.origin=e!==void 0?e:new L,this.direction=n!==void 0?n:new L(0,0,-1)}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n===void 0&&(console.warn("THREE.Ray: .at() target is now required"),n=new L),n.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xn)),this}closestPointToPoint(e,n){n===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),n=new L),n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=xn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(xn.copy(this.direction).multiplyScalar(n).add(this.origin),xn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){oa.copy(e).add(n).multiplyScalar(.5),Rs.copy(n).sub(e).normalize(),zn.copy(this.origin).sub(oa);let s=e.distanceTo(n)*.5,o=-this.direction.dot(Rs),a=zn.dot(this.direction),c=-zn.dot(Rs),l=zn.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*c-a,f=o*a-c,p=s*h,u>=0)if(f>=-p)if(f<=p){let y=1/h;u*=y,f*=y,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-p?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l):f<=p?(u=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return i&&i.copy(this.direction).multiplyScalar(u).add(this.origin),r&&r.copy(Rs).multiplyScalar(f).add(oa),d}intersectSphere(e,n){xn.subVectors(e.center,this.origin);let i=xn.dot(this.direction),r=xn.dot(xn)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return a<0&&c<0?null:a<0?this.at(c,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,xn)!==null}intersectTriangle(e,n,i,r,s){aa.subVectors(n,e),Cs.subVectors(i,e),ca.crossVectors(aa,Cs);let o=this.direction.dot(ca),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zn.subVectors(this.origin,e);let c=a*this.direction.dot(Cs.crossVectors(zn,Cs));if(c<0)return null;let l=a*this.direction.dot(aa.cross(zn));if(l<0||c+l>o)return null;let h=-a*zn.dot(ca);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}},Re=class{constructor(){Object.defineProperty(this,"isMatrix4",{value:!0}),this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,n,i,r,s,o,a,c,l,h,u,f,d,p,y,v){let g=this.elements;return g[0]=e,g[4]=n,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=p,g[11]=y,g[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Re().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){let n=this.elements,i=e.elements,r=1/Ui.setFromMatrixColumn(e,0).length(),s=1/Ui.setFromMatrixColumn(e,1).length(),o=1/Ui.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");let n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let f=o*h,d=o*u,p=a*h,y=a*u;n[0]=c*h,n[4]=-c*u,n[8]=l,n[1]=d+p*l,n[5]=f-y*l,n[9]=-a*c,n[2]=y-f*l,n[6]=p+d*l,n[10]=o*c}else if(e.order==="YXZ"){let f=c*h,d=c*u,p=l*h,y=l*u;n[0]=f+y*a,n[4]=p*a-d,n[8]=o*l,n[1]=o*u,n[5]=o*h,n[9]=-a,n[2]=d*a-p,n[6]=y+f*a,n[10]=o*c}else if(e.order==="ZXY"){let f=c*h,d=c*u,p=l*h,y=l*u;n[0]=f-y*a,n[4]=-o*u,n[8]=p+d*a,n[1]=d+p*a,n[5]=o*h,n[9]=y-f*a,n[2]=-o*l,n[6]=a,n[10]=o*c}else if(e.order==="ZYX"){let f=o*h,d=o*u,p=a*h,y=a*u;n[0]=c*h,n[4]=p*l-d,n[8]=f*l+y,n[1]=c*u,n[5]=y*l+f,n[9]=d*l-p,n[2]=-l,n[6]=a*c,n[10]=o*c}else if(e.order==="YZX"){let f=o*c,d=o*l,p=a*c,y=a*l;n[0]=c*h,n[4]=y-f*u,n[8]=p*u+d,n[1]=u,n[5]=o*h,n[9]=-a*h,n[2]=-l*h,n[6]=d*u+p,n[10]=f-y*u}else if(e.order==="XZY"){let f=o*c,d=o*l,p=a*c,y=a*l;n[0]=c*h,n[4]=-u,n[8]=l*h,n[1]=f*u+y,n[5]=o*h,n[9]=d*u-p,n[2]=p*u-d,n[6]=a*h,n[10]=y*u+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hf,e,Gf)}lookAt(e,n,i){let r=this.elements;return Pt.subVectors(e,n),Pt.lengthSq()===0&&(Pt.z=1),Pt.normalize(),Un.crossVectors(i,Pt),Un.lengthSq()===0&&(Math.abs(i.z)===1?Pt.x+=1e-4:Pt.z+=1e-4,Pt.normalize(),Un.crossVectors(i,Pt)),Un.normalize(),Ps.crossVectors(Pt,Un),r[0]=Un.x,r[4]=Ps.x,r[8]=Pt.x,r[1]=Un.y,r[5]=Ps.y,r[9]=Pt.y,r[2]=Un.z,r[6]=Ps.z,r[10]=Pt.z,this}multiply(e,n){return n!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,n)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],f=i[9],d=i[13],p=i[2],y=i[6],v=i[10],g=i[14],m=i[3],A=i[7],S=i[11],E=i[15],_=r[0],F=r[4],Z=r[8],k=r[12],V=r[1],G=r[5],$=r[9],j=r[13],H=r[2],q=r[6],J=r[10],oe=r[14],he=r[3],fe=r[7],_e=r[11],ve=r[15];return s[0]=o*_+a*V+c*H+l*he,s[4]=o*F+a*G+c*q+l*fe,s[8]=o*Z+a*$+c*J+l*_e,s[12]=o*k+a*j+c*oe+l*ve,s[1]=h*_+u*V+f*H+d*he,s[5]=h*F+u*G+f*q+d*fe,s[9]=h*Z+u*$+f*J+d*_e,s[13]=h*k+u*j+f*oe+d*ve,s[2]=p*_+y*V+v*H+g*he,s[6]=p*F+y*G+v*q+g*fe,s[10]=p*Z+y*$+v*J+g*_e,s[14]=p*k+y*j+v*oe+g*ve,s[3]=m*_+A*V+S*H+E*he,s[7]=m*F+A*G+S*q+E*fe,s[11]=m*Z+A*$+S*J+E*_e,s[15]=m*k+A*j+S*oe+E*ve,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],y=e[7],v=e[11],g=e[15];return p*(+s*c*u-r*l*u-s*a*f+i*l*f+r*a*d-i*c*d)+y*(+n*c*d-n*l*f+s*o*f-r*o*d+r*l*h-s*c*h)+v*(+n*l*u-n*a*d-s*o*u+i*o*d+s*a*h-i*l*h)+g*(-r*a*h-n*c*u+n*a*f+r*o*u-i*o*f+i*c*h)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],y=e[13],v=e[14],g=e[15],m=u*v*l-y*f*l+y*c*d-a*v*d-u*c*g+a*f*g,A=p*f*l-h*v*l-p*c*d+o*v*d+h*c*g-o*f*g,S=h*y*l-p*u*l+p*a*d-o*y*d-h*a*g+o*u*g,E=p*u*c-h*y*c-p*a*f+o*y*f+h*a*v-o*u*v,_=n*m+i*A+r*S+s*E;if(_===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/_;return e[0]=m*F,e[1]=(y*f*s-u*v*s-y*r*d+i*v*d+u*r*g-i*f*g)*F,e[2]=(a*v*s-y*c*s+y*r*l-i*v*l-a*r*g+i*c*g)*F,e[3]=(u*c*s-a*f*s-u*r*l+i*f*l+a*r*d-i*c*d)*F,e[4]=A*F,e[5]=(h*v*s-p*f*s+p*r*d-n*v*d-h*r*g+n*f*g)*F,e[6]=(p*c*s-o*v*s-p*r*l+n*v*l+o*r*g-n*c*g)*F,e[7]=(o*f*s-h*c*s+h*r*l-n*f*l-o*r*d+n*c*d)*F,e[8]=S*F,e[9]=(p*u*s-h*y*s-p*i*d+n*y*d+h*i*g-n*u*g)*F,e[10]=(o*y*s-p*a*s+p*i*l-n*y*l-o*i*g+n*a*g)*F,e[11]=(h*a*s-o*u*s-h*i*l+n*u*l+o*i*d-n*a*d)*F,e[12]=E*F,e[13]=(h*y*r-p*u*r+p*i*f-n*y*f-h*i*v+n*u*v)*F,e[14]=(p*a*r-o*y*r-p*i*c+n*y*c+o*i*v-n*a*v)*F,e[15]=(o*u*r-h*a*r+h*i*c-n*u*c-o*i*f+n*a*f)*F,this}scale(e){let n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+i,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i){return this.set(1,n,i,0,e,1,i,0,e,n,1,0,0,0,0,1),this}compose(e,n,i){let r=this.elements,s=n._x,o=n._y,a=n._z,c=n._w,l=s+s,h=o+o,u=a+a,f=s*l,d=s*h,p=s*u,y=o*h,v=o*u,g=a*u,m=c*l,A=c*h,S=c*u,E=i.x,_=i.y,F=i.z;return r[0]=(1-(y+g))*E,r[1]=(d+S)*E,r[2]=(p-A)*E,r[3]=0,r[4]=(d-S)*_,r[5]=(1-(f+g))*_,r[6]=(v+m)*_,r[7]=0,r[8]=(p+A)*F,r[9]=(v-m)*F,r[10]=(1-(f+y))*F,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){let r=this.elements,s=Ui.set(r[0],r[1],r[2]).length(),o=Ui.set(r[4],r[5],r[6]).length(),a=Ui.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],qt.copy(this);let l=1/s,h=1/o,u=1/a;return qt.elements[0]*=l,qt.elements[1]*=l,qt.elements[2]*=l,qt.elements[4]*=h,qt.elements[5]*=h,qt.elements[6]*=h,qt.elements[8]*=u,qt.elements[9]*=u,qt.elements[10]*=u,n.setFromRotationMatrix(qt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");let a=this.elements,c=2*s/(n-e),l=2*s/(i-r),h=(n+e)/(n-e),u=(i+r)/(i-r),f=-(o+s)/(o-s),d=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=l,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,r,s,o){let a=this.elements,c=1/(n-e),l=1/(i-r),h=1/(o-s),u=(n+e)*c,f=(i+r)*l,d=(o+s)*h;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},Ui=new L,qt=new Re,Hf=new L(0,0,0),Gf=new L(1,1,1),Un=new L,Ps=new L,Pt=new L,Hi=class{constructor(e=0,n=0,i=0,r=Hi.DefaultOrder){Object.defineProperty(this,"isEuler",{value:!0}),this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._order=r||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n,i){let r=Ee.clamp,s=e.elements,o=s[0],a=s[4],c=s[8],l=s[1],h=s[5],u=s[9],f=s[2],d=s[6],p=s[10];switch(n=n||this._order,n){case"XYZ":this._y=Math.asin(r(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-r(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(c,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(r(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-r(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(r(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(c,p));break;case"XZY":this._z=Math.asin(-r(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i!==!1&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return sl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sl,n,i)}setFromVector3(e,n){return this.set(e.x,e.y,e.z,n||this._order)}reorder(e){return ol.setFromEuler(this),this.setFromQuaternion(ol,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new L(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};Hi.DefaultOrder="XYZ";Hi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];var sl=new Re,ol=new ut,la=class{constructor(){this.mask=1|0}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=4294967295|0}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}},kf=0,al=new L,Gi=new ut,_n=new Re,Is=new L,Fr=new L,Vf=new L,Wf=new ut,cl=new L(1,0,0),ll=new L(0,1,0),ul=new L(0,0,1),jf={type:"added"},hl={type:"removed"};function ge(){Object.defineProperty(this,"id",{value:kf++}),this.uuid=Ee.generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DefaultUp.clone();let t=new L,e=new Hi,n=new ut,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function s(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Re},normalMatrix:{value:new Ct}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=ge.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new la,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}ge.DefaultUp=new L(0,1,0);ge.DefaultMatrixAutoUpdate=!0;ge.prototype=Object.assign(Object.create(jt.prototype),{constructor:ge,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix4:function(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(t){return this.quaternion.premultiply(t),this},setRotationFromAxisAngle:function(t,e){this.quaternion.setFromAxisAngle(t,e)},setRotationFromEuler:function(t){this.quaternion.setFromEuler(t,!0)},setRotationFromMatrix:function(t){this.quaternion.setFromRotationMatrix(t)},setRotationFromQuaternion:function(t){this.quaternion.copy(t)},rotateOnAxis:function(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.multiply(Gi),this},rotateOnWorldAxis:function(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.premultiply(Gi),this},rotateX:function(t){return this.rotateOnAxis(cl,t)},rotateY:function(t){return this.rotateOnAxis(ll,t)},rotateZ:function(t){return this.rotateOnAxis(ul,t)},translateOnAxis:function(t,e){return al.copy(t).applyQuaternion(this.quaternion),this.position.add(al.multiplyScalar(e)),this},translateX:function(t){return this.translateOnAxis(cl,t)},translateY:function(t){return this.translateOnAxis(ll,t)},translateZ:function(t){return this.translateOnAxis(ul,t)},localToWorld:function(t){return t.applyMatrix4(this.matrixWorld)},worldToLocal:function(t){return t.applyMatrix4(_n.copy(this.matrixWorld).invert())},lookAt:function(t,e,n){t.isVector3?Is.copy(t):Is.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(Fr,Is,this.up):_n.lookAt(Is,Fr,this.up),this.quaternion.setFromRotationMatrix(_n),i&&(_n.extractRotation(i.matrixWorld),Gi.setFromRotationMatrix(_n),this.quaternion.premultiply(Gi.invert()))},add:function(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(jf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)},remove:function(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hl)),this},clear:function(){for(let t=0;t<this.children.length;t++){let e=this.children[t];e.parent=null,e.dispatchEvent(hl)}return this.children.length=0,this},attach:function(t){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_n.multiply(t.parent.matrixWorld)),t.applyMatrix4(_n),t.updateWorldMatrix(!1,!1),this.add(t),this},getObjectById:function(t){return this.getObjectByProperty("id",t)},getObjectByName:function(t){return this.getObjectByProperty("name",t)},getObjectByProperty:function(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let s=this.children[n].getObjectByProperty(t,e);if(s!==void 0)return s}},getWorldPosition:function(t){return t===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),t=new L),this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(t){return t===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),t=new ut),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,t,Vf),t},getWorldScale:function(t){return t===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),t=new L),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,Wf,t),t},getWorldDirection:function(t){t===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),t=new L),this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()},raycast:function(){},traverse:function(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)},traverseVisible:function(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)},traverseAncestors:function(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)},updateWorldMatrix:function(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}},toJSON:function(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON());function r(o,a){return o[a.uuid]===void 0&&(o[a.uuid]=a.toJSON(t)),a.uuid}if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let a=o.shapes;if(Array.isArray(a))for(let c=0,l=a.length;c<l;c++){let h=a[c];r(t.shapes,h)}else r(t.shapes,a)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let a=0,c=this.material.length;a<c;a++)o.push(r(t.materials,this.material[a]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let a=this.animations[o];i.animations.push(r(t.animations,a))}}if(e){let o=s(t.geometries),a=s(t.materials),c=s(t.textures),l=s(t.images),h=s(t.shapes),u=s(t.skeletons),f=s(t.animations);o.length>0&&(n.geometries=o),a.length>0&&(n.materials=a),c.length>0&&(n.textures=c),l.length>0&&(n.images=l),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f)}return n.object=i,n;function s(o){let a=[];for(let c in o){let l=o[c];delete l.metadata,a.push(l)}return a}},clone:function(t){return new this.constructor().copy(this,t)},copy:function(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}});var ua=new L,qf=new L,Xf=new Ct,Ut=class{constructor(e,n){Object.defineProperty(this,"isPlane",{value:!0}),this.normal=e!==void 0?e:new L(1,0,0),this.constant=n!==void 0?n:0}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let r=ua.subVectors(i,n).cross(qf.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}clone(){return new this.constructor().copy(this)}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),n=new L),n.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,n){n===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),n=new L);let i=e.delta(ua),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):void 0;let s=-(e.start.dot(this.normal)+this.constant)/r;if(!(s<0||s>1))return n.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),e=new L),e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||Xf.getNormalMatrix(e),r=this.coplanarPoint(ua).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}},Xt=new L,bn=new L,ha=new L,wn=new L,ki=new L,Vi=new L,fl=new L,fa=new L,da=new L,pa=new L,xt=class{constructor(e,n,i){this.a=e!==void 0?e:new L,this.b=n!==void 0?n:new L,this.c=i!==void 0?i:new L}static getNormal(e,n,i,r){r===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),r=new L),r.subVectors(i,n),Xt.subVectors(e,n),r.cross(Xt);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Xt.subVectors(r,n),bn.subVectors(i,n),ha.subVectors(e,n);let o=Xt.dot(Xt),a=Xt.dot(bn),c=Xt.dot(ha),l=bn.dot(bn),h=bn.dot(ha),u=o*l-a*a;if(s===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),s=new L),u===0)return s.set(-2,-1,-1);let f=1/u,d=(l*c-a*h)*f,p=(o*h-a*c)*f;return s.set(1-d-p,p,d)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,wn),wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getUV(e,n,i,r,s,o,a,c){return this.getBarycoord(e,n,i,r,wn),c.set(0,0),c.addScaledVector(s,wn.x),c.addScaledVector(o,wn.y),c.addScaledVector(a,wn.z),c}static isFrontFacing(e,n,i,r){return Xt.subVectors(i,n),bn.subVectors(e,n),Xt.cross(bn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xt.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),Xt.cross(bn).length()*.5}getMidpoint(e){return e===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),e=new L),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),e=new Ut),e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return xt.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return xt.getUV(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return xt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){n===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),n=new L);let i=this.a,r=this.b,s=this.c,o,a;ki.subVectors(r,i),Vi.subVectors(s,i),fa.subVectors(e,i);let c=ki.dot(fa),l=Vi.dot(fa);if(c<=0&&l<=0)return n.copy(i);da.subVectors(e,r);let h=ki.dot(da),u=Vi.dot(da);if(h>=0&&u<=h)return n.copy(r);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),n.copy(i).addScaledVector(ki,o);pa.subVectors(e,s);let d=ki.dot(pa),p=Vi.dot(pa);if(p>=0&&d<=p)return n.copy(s);let y=d*l-c*p;if(y<=0&&l>=0&&p<=0)return a=l/(l-p),n.copy(i).addScaledVector(Vi,a);let v=h*p-d*u;if(v<=0&&u-h>=0&&d-p>=0)return fl.subVectors(s,r),a=(u-h)/(u-h+(d-p)),n.copy(r).addScaledVector(fl,a);let g=1/(v+y+f);return o=y*g,a=f*g,n.copy(i).addScaledVector(ki,o).addScaledVector(Vi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},dl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yt={h:0,s:0,l:0},Ds={h:0,s:0,l:0};function ma(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}function ga(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function va(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var ue=class{constructor(e,n,i){return Object.defineProperty(this,"isColor",{value:!0}),n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,n,i){return this.r=e,this.g=n,this.b=i,this}setHSL(e,n,i){if(e=Ee.euclideanModulo(e,1),n=Ee.clamp(n,0,1),i=Ee.clamp(i,0,1),n===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+n):i+n-i*n,s=2*i-r;this.r=ma(s,r,e+1/3),this.g=ma(s,r,e),this.b=ma(s,r,e-1/3)}return this}setStyle(e){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r,s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){let a=parseFloat(r[1])/360,c=parseInt(r[2],10)/100,l=parseInt(r[3],10)/100;return n(r[4]),this.setHSL(a,c,l)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){let n=dl[e];return n!==void 0?this.setHex(n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,n=2){return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this}copyLinearToGamma(e,n=2){let i=n>0?1/n:1;return this.r=Math.pow(e.r,i),this.g=Math.pow(e.g,i),this.b=Math.pow(e.b,i),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=ga(e.r),this.g=ga(e.g),this.b=ga(e.b),this}copyLinearToSRGB(e){return this.r=va(e.r),this.g=va(e.g),this.b=va(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){e===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),e={h:0,s:0,l:0});let n=this.r,i=this.g,r=this.b,s=Math.max(n,i,r),o=Math.min(n,i,r),a,c,l=(o+s)/2;if(o===s)a=0,c=0;else{let h=s-o;switch(c=l<=.5?h/(s+o):h/(2-s-o),s){case n:a=(i-r)/h+(i<r?6:0);break;case i:a=(r-n)/h+2;break;case r:a=(n-i)/h+4;break}a/=6}return e.h=a,e.s=c,e.l=l,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,n,i){return this.getHSL(Yt),Yt.h+=e,Yt.s+=n,Yt.l+=i,this.setHSL(Yt.h,Yt.s,Yt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Yt),e.getHSL(Ds);let i=Ee.lerp(Yt.h,Ds.h,n),r=Ee.lerp(Yt.s,Ds.s,n),s=Ee.lerp(Yt.l,Ds.l,n);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}};ue.NAMES=dl;ue.prototype.r=1;ue.prototype.g=1;ue.prototype.b=1;var pl=class{constructor(e,n,i,r,s,o=0){this.a=e,this.b=n,this.c=i,this.normal=r&&r.isVector3?r:new L,this.vertexNormals=Array.isArray(r)?r:[],this.color=s&&s.isColor?s:new ue,this.vertexColors=Array.isArray(s)?s:[],this.materialIndex=o}clone(){return new this.constructor().copy(this)}copy(e){this.a=e.a,this.b=e.b,this.c=e.c,this.normal.copy(e.normal),this.color.copy(e.color),this.materialIndex=e.materialIndex;for(let n=0,i=e.vertexNormals.length;n<i;n++)this.vertexNormals[n]=e.vertexNormals[n].clone();for(let n=0,i=e.vertexColors.length;n<i;n++)this.vertexColors[n]=e.vertexColors[n].clone();return this}},Yf=0;function Te(){Object.defineProperty(this,"id",{value:Yf++}),this.uuid=Ee.generateUUID(),this.name="",this.type="Material",this.fog=!0,this.blending=Ar,this.side=Pn,this.flatShading=!1,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Nc,this.blendDst=zc,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ta,this.stencilZFail=ta,this.stencilZPass=ta,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}Te.prototype=Object.assign(Object.create(jt.prototype),{constructor:Te,isMaterial:!0,onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Ic;continue}let i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}},toJSON:function(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(n.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,n.reflectivity=this.reflectivity,n.refractionRatio=this.refractionRatio,this.combine!==void 0&&(n.combine=this.combine),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity)),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ar&&(n.blending=this.blending),this.flatShading===!0&&(n.flatShading=this.flatShading),this.side!==Pn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(n.morphTargets=!0),this.morphNormals===!0&&(n.morphNormals=!0),this.skinning===!0&&(n.skinning=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){let s=[];for(let o in r){let a=r[o];delete a.metadata,s.push(a)}return s}if(e){let r=i(t.textures),s=i(t.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n},clone:function(){return new this.constructor().copy(this)},copy:function(t){this.name=t.name,this.fog=t.fog,this.blending=t.blending,this.side=t.side,this.flatShading=t.flatShading,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(Te.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});function ke(t){Te.call(this),this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(t)}ke.prototype=Object.create(Te.prototype);ke.prototype.constructor=ke;ke.prototype.isMeshBasicMaterial=!0;ke.prototype.copy=function(t){return Te.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this};var Ye=new L,Os=new se;function Ae(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=Ts,this.updateRange={offset:0,count:-1},this.version=0}Object.defineProperty(Ae.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});Object.assign(Ae.prototype,{isBufferAttribute:!0,onUploadCallback:function(){},setUsage:function(t){return this.usage=t,this},copy:function(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this},copyAt:function(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this},copyArray:function(t){return this.array.set(t),this},copyColorsArray:function(t){let e=this.array,n=0;for(let i=0,r=t.length;i<r;i++){let s=t[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),s=new ue),e[n++]=s.r,e[n++]=s.g,e[n++]=s.b}return this},copyVector2sArray:function(t){let e=this.array,n=0;for(let i=0,r=t.length;i<r;i++){let s=t[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),s=new se),e[n++]=s.x,e[n++]=s.y}return this},copyVector3sArray:function(t){let e=this.array,n=0;for(let i=0,r=t.length;i<r;i++){let s=t[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),s=new L),e[n++]=s.x,e[n++]=s.y,e[n++]=s.z}return this},copyVector4sArray:function(t){let e=this.array,n=0;for(let i=0,r=t.length;i<r;i++){let s=t[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),s=new Ge),e[n++]=s.x,e[n++]=s.y,e[n++]=s.z,e[n++]=s.w}return this},applyMatrix3:function(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Os.fromBufferAttribute(this,e),Os.applyMatrix3(t),this.setXY(e,Os.x,Os.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix3(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this},applyMatrix4:function(t){for(let e=0,n=this.count;e<n;e++)Ye.x=this.getX(e),Ye.y=this.getY(e),Ye.z=this.getZ(e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this},applyNormalMatrix:function(t){for(let e=0,n=this.count;e<n;e++)Ye.x=this.getX(e),Ye.y=this.getY(e),Ye.z=this.getZ(e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this},transformDirection:function(t){for(let e=0,n=this.count;e<n;e++)Ye.x=this.getX(e),Ye.y=this.getY(e),Ye.z=this.getZ(e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this},set:function(t,e=0){return this.array.set(t,e),this},getX:function(t){return this.array[t*this.itemSize]},setX:function(t,e){return this.array[t*this.itemSize]=e,this},getY:function(t){return this.array[t*this.itemSize+1]},setY:function(t,e){return this.array[t*this.itemSize+1]=e,this},getZ:function(t){return this.array[t*this.itemSize+2]},setZ:function(t,e){return this.array[t*this.itemSize+2]=e,this},getW:function(t){return this.array[t*this.itemSize+3]},setW:function(t,e){return this.array[t*this.itemSize+3]=e,this},setXY:function(t,e,n){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this},setXYZ:function(t,e,n,i){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this},setXYZW:function(t,e,n,i,r){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this},onUpload:function(t){return this.onUploadCallback=t,this},clone:function(){return new this.constructor(this.array,this.itemSize).copy(this)},toJSON:function(){return{itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized}}});function ya(t,e,n){Ae.call(this,new Int8Array(t),e,n)}ya.prototype=Object.create(Ae.prototype);ya.prototype.constructor=ya;function xa(t,e,n){Ae.call(this,new Uint8Array(t),e,n)}xa.prototype=Object.create(Ae.prototype);xa.prototype.constructor=xa;function _a(t,e,n){Ae.call(this,new Uint8ClampedArray(t),e,n)}_a.prototype=Object.create(Ae.prototype);_a.prototype.constructor=_a;function ba(t,e,n){Ae.call(this,new Int16Array(t),e,n)}ba.prototype=Object.create(Ae.prototype);ba.prototype.constructor=ba;function Br(t,e,n){Ae.call(this,new Uint16Array(t),e,n)}Br.prototype=Object.create(Ae.prototype);Br.prototype.constructor=Br;function wa(t,e,n){Ae.call(this,new Int32Array(t),e,n)}wa.prototype=Object.create(Ae.prototype);wa.prototype.constructor=wa;function li(t,e,n){Ae.call(this,new Uint32Array(t),e,n)}li.prototype=Object.create(Ae.prototype);li.prototype.constructor=li;function Fs(t,e,n){Ae.call(this,new Uint16Array(t),e,n)}Fs.prototype=Object.create(Ae.prototype);Fs.prototype.constructor=Fs;Fs.prototype.isFloat16BufferAttribute=!0;function Pe(t,e,n){Ae.call(this,new Float32Array(t),e,n)}Pe.prototype=Object.create(Ae.prototype);Pe.prototype.constructor=Pe;function Ma(t,e,n){Ae.call(this,new Float64Array(t),e,n)}Ma.prototype=Object.create(Ae.prototype);Ma.prototype.constructor=Ma;function ml(t){if(t.length===0)return-1/0;let e=t[0];for(let n=1,i=t.length;n<i;++n)t[n]>e&&(e=t[n]);return e}var Zf={Int8Array,Uint8Array,Uint8ClampedArray:typeof Uint8ClampedArray!="undefined"?Uint8ClampedArray:Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Bs(t,e){return new Zf[t](e)}var Jf=0,en=new Re,Sa=new ge,Wi=new L,It=new $t,Nr=new $t,ht=new L;function Ie(){Object.defineProperty(this,"id",{value:Jf++}),this.uuid=Ee.generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}Ie.prototype=Object.assign(Object.create(jt.prototype),{constructor:Ie,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(t){return Array.isArray(t)?this.index=new(ml(t)>65535?li:Br)(t,1):this.index=t,this},getAttribute:function(t){return this.attributes[t]},setAttribute:function(t,e){return this.attributes[t]=e,this},deleteAttribute:function(t){return delete this.attributes[t],this},hasAttribute:function(t){return this.attributes[t]!==void 0},addGroup:function(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})},clearGroups:function(){this.groups=[]},setDrawRange:function(t,e){this.drawRange.start=t,this.drawRange.count=e},applyMatrix4:function(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ct().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this},rotateX:function(t){return en.makeRotationX(t),this.applyMatrix4(en),this},rotateY:function(t){return en.makeRotationY(t),this.applyMatrix4(en),this},rotateZ:function(t){return en.makeRotationZ(t),this.applyMatrix4(en),this},translate:function(t,e,n){return en.makeTranslation(t,e,n),this.applyMatrix4(en),this},scale:function(t,e,n){return en.makeScale(t,e,n),this.applyMatrix4(en),this},lookAt:function(t){return Sa.lookAt(t),Sa.updateMatrix(),this.applyMatrix4(Sa.matrix),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this},setFromPoints:function(t){let e=[];for(let n=0,i=t.length;n<i;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Pe(e,3)),this},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new $t);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];It.setFromBufferAttribute(r),this.morphTargetsRelative?(ht.addVectors(this.boundingBox.min,It.min),this.boundingBox.expandByPoint(ht),ht.addVectors(this.boundingBox.max,It.max),this.boundingBox.expandByPoint(ht)):(this.boundingBox.expandByPoint(It.min),this.boundingBox.expandByPoint(It.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new Qt);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(It.setFromBufferAttribute(t),e)for(let r=0,s=e.length;r<s;r++){let o=e[r];Nr.setFromBufferAttribute(o),this.morphTargetsRelative?(ht.addVectors(It.min,Nr.min),It.expandByPoint(ht),ht.addVectors(It.max,Nr.max),It.expandByPoint(ht)):(It.expandByPoint(Nr.min),It.expandByPoint(Nr.max))}It.getCenter(n);let i=0;for(let r=0,s=t.count;r<s;r++)ht.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ht));if(e)for(let r=0,s=e.length;r<s;r++){let o=e[r],a=this.morphTargetsRelative;for(let c=0,l=o.count;c<l;c++)ht.fromBufferAttribute(o,c),a&&(Wi.fromBufferAttribute(t,c),ht.add(Wi)),i=Math.max(i,n.distanceToSquared(ht))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}},computeFaceNormals:function(){},computeTangents:function(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,i=e.position.array,r=e.normal.array,s=e.uv.array,o=i.length/3;e.tangent===void 0&&this.setAttribute("tangent",new Ae(new Float32Array(4*o),4));let a=e.tangent.array,c=[],l=[];for(let k=0;k<o;k++)c[k]=new L,l[k]=new L;let h=new L,u=new L,f=new L,d=new se,p=new se,y=new se,v=new L,g=new L;function m(k,V,G){h.fromArray(i,k*3),u.fromArray(i,V*3),f.fromArray(i,G*3),d.fromArray(s,k*2),p.fromArray(s,V*2),y.fromArray(s,G*2),u.sub(h),f.sub(h),p.sub(d),y.sub(d);let $=1/(p.x*y.y-y.x*p.y);!isFinite($)||(v.copy(u).multiplyScalar(y.y).addScaledVector(f,-p.y).multiplyScalar($),g.copy(f).multiplyScalar(p.x).addScaledVector(u,-y.x).multiplyScalar($),c[k].add(v),c[V].add(v),c[G].add(v),l[k].add(g),l[V].add(g),l[G].add(g))}let A=this.groups;A.length===0&&(A=[{start:0,count:n.length}]);for(let k=0,V=A.length;k<V;++k){let G=A[k],$=G.start,j=G.count;for(let H=$,q=$+j;H<q;H+=3)m(n[H+0],n[H+1],n[H+2])}let S=new L,E=new L,_=new L,F=new L;function Z(k){_.fromArray(r,k*3),F.copy(_);let V=c[k];S.copy(V),S.sub(_.multiplyScalar(_.dot(V))).normalize(),E.crossVectors(F,V);let $=E.dot(l[k])<0?-1:1;a[k*4]=S.x,a[k*4+1]=S.y,a[k*4+2]=S.z,a[k*4+3]=$}for(let k=0,V=A.length;k<V;++k){let G=A[k],$=G.start,j=G.count;for(let H=$,q=$+j;H<q;H+=3)Z(n[H+0]),Z(n[H+1]),Z(n[H+2])}},computeVertexNormals:function(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new L,r=new L,s=new L,o=new L,a=new L,c=new L,l=new L,h=new L;if(t)for(let u=0,f=t.count;u<f;u+=3){let d=t.getX(u+0),p=t.getX(u+1),y=t.getX(u+2);i.fromBufferAttribute(e,d),r.fromBufferAttribute(e,p),s.fromBufferAttribute(e,y),l.subVectors(s,r),h.subVectors(i,r),l.cross(h),o.fromBufferAttribute(n,d),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,y),o.add(l),a.add(l),c.add(l),n.setXYZ(d,o.x,o.y,o.z),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),s.fromBufferAttribute(e,u+2),l.subVectors(s,r),h.subVectors(i,r),l.cross(h),n.setXYZ(u+0,l.x,l.y,l.z),n.setXYZ(u+1,l.x,l.y,l.z),n.setXYZ(u+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}},merge:function(t,e){if(!(t&&t.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",t);return}e===void 0&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));let n=this.attributes;for(let i in n){if(t.attributes[i]===void 0)continue;let s=n[i].array,o=t.attributes[i],a=o.array,c=o.itemSize*e,l=Math.min(a.length,s.length-c);for(let h=0,u=c;h<l;h++,u++)s[u]=a[h]}return this},normalizeNormals:function(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ht.fromBufferAttribute(t,e),ht.normalize(),t.setXYZ(e,ht.x,ht.y,ht.z)},toNonIndexed:function(){function t(o,a){let c=o.array,l=o.itemSize,h=o.normalized,u=new c.constructor(a.length*l),f=0,d=0;for(let p=0,y=a.length;p<y;p++){f=a[p]*l;for(let v=0;v<l;v++)u[d++]=c[f++]}return new Ae(u,l,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new Ie,n=this.index.array,i=this.attributes;for(let o in i){let a=i[o],c=t(a,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let a=[],c=r[o];for(let l=0,h=c.length;l<h;l++){let u=c[l],f=t(u,n);a.push(f)}e.morphAttributes[o]=a}e.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,a=s.length;o<a;o++){let c=s[o];e.addGroup(c.start,c.count,c.materialIndex)}return e},toJSON:function(){let t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let a=this.parameters;for(let c in a)a[c]!==void 0&&(t[c]=a[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let a in n){let c=n[a],l=c.toJSON(t.data);c.name!==""&&(l.name=c.name),t.data.attributes[a]=l}let i={},r=!1;for(let a in this.morphAttributes){let c=this.morphAttributes[a],l=[];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=f.toJSON(t.data);f.name!==""&&(d.name=f.name),l.push(d)}l.length>0&&(i[a]=l,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t},clone:function(){return new Ie().copy(this)},copy:function(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let l=i[c];this.setAttribute(c,l.clone(e))}let r=t.morphAttributes;for(let c in r){let l=[],h=r[c];for(let u=0,f=h.length;u<f;u++)l.push(h[u].clone(e));this.morphAttributes[c]=l}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let c=0,l=s.length;c<l;c++){let h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let a=t.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});var gl=new Re,ji=new zi,Ta=new Qt,Hn=new L,Gn=new L,kn=new L,Ea=new L,Aa=new L,La=new L,Ns=new L,zs=new L,Us=new L,Hs=new se,Gs=new se,ks=new se,Ra=new L,Vs=new L;function Le(t=new Ie,e=new ke){ge.call(this),this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}Le.prototype=Object.assign(Object.create(ge.prototype),{constructor:Le,isMesh:!0,copy:function(t){return ge.prototype.copy.call(this,t),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this},updateMorphTargets:function(){let t=this.geometry;if(t.isBufferGeometry){let e=t.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{let e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}},raycast:function(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(r),t.ray.intersectsSphere(Ta)===!1)||(gl.copy(r).invert(),ji.copy(t.ray).applyMatrix4(gl),n.boundingBox!==null&&ji.intersectsBox(n.boundingBox)===!1))return;let s;if(n.isBufferGeometry){let o=n.index,a=n.attributes.position,c=n.morphAttributes.position,l=n.morphTargetsRelative,h=n.attributes.uv,u=n.attributes.uv2,f=n.groups,d=n.drawRange;if(o!==null)if(Array.isArray(i))for(let p=0,y=f.length;p<y;p++){let v=f[p],g=i[v.materialIndex],m=Math.max(v.start,d.start),A=Math.min(v.start+v.count,d.start+d.count);for(let S=m,E=A;S<E;S+=3){let _=o.getX(S),F=o.getX(S+1),Z=o.getX(S+2);s=Ws(this,g,t,ji,a,c,l,h,u,_,F,Z),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=v.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let v=p,g=y;v<g;v+=3){let m=o.getX(v),A=o.getX(v+1),S=o.getX(v+2);s=Ws(this,i,t,ji,a,c,l,h,u,m,A,S),s&&(s.faceIndex=Math.floor(v/3),e.push(s))}}else if(a!==void 0)if(Array.isArray(i))for(let p=0,y=f.length;p<y;p++){let v=f[p],g=i[v.materialIndex],m=Math.max(v.start,d.start),A=Math.min(v.start+v.count,d.start+d.count);for(let S=m,E=A;S<E;S+=3){let _=S,F=S+1,Z=S+2;s=Ws(this,g,t,ji,a,c,l,h,u,_,F,Z),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=v.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let v=p,g=y;v<g;v+=3){let m=v,A=v+1,S=v+2;s=Ws(this,i,t,ji,a,c,l,h,u,m,A,S),s&&(s.faceIndex=Math.floor(v/3),e.push(s))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}});function Kf(t,e,n,i,r,s,o,a){let c;if(e.side===nt?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side!==pt,a),c===null)return null;Vs.copy(a),Vs.applyMatrix4(t.matrixWorld);let l=n.ray.origin.distanceTo(Vs);return l<n.near||l>n.far?null:{distance:l,point:Vs.clone(),object:t}}function Ws(t,e,n,i,r,s,o,a,c,l,h,u){Hn.fromBufferAttribute(r,l),Gn.fromBufferAttribute(r,h),kn.fromBufferAttribute(r,u);let f=t.morphTargetInfluences;if(e.morphTargets&&s&&f){Ns.set(0,0,0),zs.set(0,0,0),Us.set(0,0,0);for(let p=0,y=s.length;p<y;p++){let v=f[p],g=s[p];v!==0&&(Ea.fromBufferAttribute(g,l),Aa.fromBufferAttribute(g,h),La.fromBufferAttribute(g,u),o?(Ns.addScaledVector(Ea,v),zs.addScaledVector(Aa,v),Us.addScaledVector(La,v)):(Ns.addScaledVector(Ea.sub(Hn),v),zs.addScaledVector(Aa.sub(Gn),v),Us.addScaledVector(La.sub(kn),v)))}Hn.add(Ns),Gn.add(zs),kn.add(Us)}t.isSkinnedMesh&&(t.boneTransform(l,Hn),t.boneTransform(h,Gn),t.boneTransform(u,kn));let d=Kf(t,e,n,i,Hn,Gn,kn,Ra);if(d){a&&(Hs.fromBufferAttribute(a,l),Gs.fromBufferAttribute(a,h),ks.fromBufferAttribute(a,u),d.uv=xt.getUV(Ra,Hn,Gn,kn,Hs,Gs,ks,new se)),c&&(Hs.fromBufferAttribute(c,l),Gs.fromBufferAttribute(c,h),ks.fromBufferAttribute(c,u),d.uv2=xt.getUV(Ra,Hn,Gn,kn,Hs,Gs,ks,new se));let p=new pl(l,h,u);xt.getNormal(Hn,Gn,kn,p.normal),d.face=p}return d}var Vn=class extends Ie{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super();this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,i,n,e,o,s,0),p("z","y","x",1,-1,i,n,-e,o,s,1),p("x","z","y",1,1,e,i,n,r,o,2),p("x","z","y",1,-1,e,i,-n,r,o,3),p("x","y","z",1,-1,e,n,i,r,s,4),p("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Pe(l,3)),this.setAttribute("normal",new Pe(h,3)),this.setAttribute("uv",new Pe(u,2));function p(y,v,g,m,A,S,E,_,F,Z,k){let V=S/F,G=E/Z,$=S/2,j=E/2,H=_/2,q=F+1,J=Z+1,oe=0,he=0,fe=new L;for(let _e=0;_e<J;_e++){let ve=_e*G-j;for(let ye=0;ye<q;ye++){let Ce=ye*V-$;fe[y]=Ce*m,fe[v]=ve*A,fe[g]=H,l.push(fe.x,fe.y,fe.z),fe[y]=0,fe[v]=0,fe[g]=_>0?1:-1,h.push(fe.x,fe.y,fe.z),u.push(ye/F),u.push(1-_e/Z),oe+=1}}for(let _e=0;_e<Z;_e++)for(let ve=0;ve<F;ve++){let ye=f+ve+q*_e,Ce=f+ve+q*(_e+1),He=f+(ve+1)+q*(_e+1),ie=f+(ve+1)+q*_e;c.push(ye,Ce,ie),c.push(Ce,He,ie),he+=6}a.addGroup(d,he,k),d+=he,f+=oe}}};function qi(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture)?e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function _t(t){let e={};for(let n=0;n<t.length;n++){let i=qi(t[n]);for(let r in i)e[r]=i[r]}return e}var $f={clone:qi,merge:_t},Qf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ed=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;function Ze(t){Te.call(this),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Qf,this.fragmentShader=ed,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&(t.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(t))}Ze.prototype=Object.create(Te.prototype);Ze.prototype.constructor=Ze;Ze.prototype.isShaderMaterial=!0;Ze.prototype.copy=function(t){return Te.prototype.copy.call(this,t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qi(t.uniforms),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.lights=t.lights,this.clipping=t.clipping,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this};Ze.prototype.toJSON=function(t){let e=Te.prototype.toJSON.call(this,t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let s=this.uniforms[i].value;s&&s.isTexture?e.uniforms[i]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[i]={type:"m4",value:s.toArray()}:e.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e};function Wn(){ge.call(this),this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re}Wn.prototype=Object.assign(Object.create(ge.prototype),{constructor:Wn,isCamera:!0,copy:function(t,e){return ge.prototype.copy.call(this,t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this},getWorldDirection:function(t){t===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),t=new L),this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()},updateMatrixWorld:function(t){ge.prototype.updateMatrixWorld.call(this,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()},updateWorldMatrix:function(t,e){ge.prototype.updateWorldMatrix.call(this,t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()},clone:function(){return new this.constructor().copy(this)}});function $e(t=50,e=1,n=.1,i=2e3){Wn.call(this),this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}$e.prototype=Object.assign(Object.create(Wn.prototype),{constructor:$e,isPerspectiveCamera:!0,copy:function(t,e){return Wn.prototype.copy.call(this,t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this},setFocalLength:function(t){let e=.5*this.getFilmHeight()/t;this.fov=Ee.RAD2DEG*2*Math.atan(e),this.updateProjectionMatrix()},getFocalLength:function(){let t=Math.tan(Ee.DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/t},getEffectiveFOV:function(){return Ee.RAD2DEG*2*Math.atan(Math.tan(Ee.DEG2RAD*.5*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(t,e,n,i,r,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){let t=this.near,e=t*Math.tan(Ee.DEG2RAD*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,s=this.view;if(this.view!==null&&this.view.enabled){let a=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/a,e-=s.offsetY*n/c,i*=s.width/a,n*=s.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()},toJSON:function(t){let e=ge.prototype.toJSON.call(this,t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}});var Xi=90,Yi=1;function Zi(t,e,n){if(ge.call(this),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;let i=new $e(Xi,Yi,t,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new L(1,0,0)),this.add(i);let r=new $e(Xi,Yi,t,e);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new L(-1,0,0)),this.add(r);let s=new $e(Xi,Yi,t,e);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new L(0,1,0)),this.add(s);let o=new $e(Xi,Yi,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new L(0,-1,0)),this.add(o);let a=new $e(Xi,Yi,t,e);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new L(0,0,1)),this.add(a);let c=new $e(Xi,Yi,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new L(0,0,-1)),this.add(c),this.update=function(l,h){this.parent===null&&this.updateMatrixWorld();let u=l.xr.enabled,f=l.getRenderTarget();l.xr.enabled=!1;let d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,l.setRenderTarget(n,0),l.render(h,i),l.setRenderTarget(n,1),l.render(h,r),l.setRenderTarget(n,2),l.render(h,s),l.setRenderTarget(n,3),l.render(h,o),l.setRenderTarget(n,4),l.render(h,a),n.texture.generateMipmaps=d,l.setRenderTarget(n,5),l.render(h,c),l.setRenderTarget(f),l.xr.enabled=u}}Zi.prototype=Object.create(ge.prototype);Zi.prototype.constructor=Zi;function jn(t,e,n,i,r,s,o,a,c,l){t=t!==void 0?t:[],e=e!==void 0?e:jo,o=o!==void 0?o:Vt,Xe.call(this,t,e,n,i,r,s,o,a,c,l),this.flipY=!1,this._needsFlipEnvMap=!0}jn.prototype=Object.create(Xe.prototype);jn.prototype.constructor=jn;jn.prototype.isCubeTexture=!0;Object.defineProperty(jn.prototype,"images",{get:function(){return this.image},set:function(t){this.image=t}});var vl=class extends vn{constructor(e,n,i){Number.isInteger(n)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),n=i);super(e,e,n);Object.defineProperty(this,"isWebGLCubeRenderTarget",{value:!0}),n=n||{},this.texture=new jn(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.format=zt,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Vn(5,5,5),s=new Ze({name:"CubemapFromEquirect",uniforms:qi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nt,blending:In});s.uniforms.tEquirect.value=n;let o=new Le(r,s),a=n.minFilter;return n.minFilter===si&&(n.minFilter=je),new Zi(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}};function Ji(t,e,n,i,r,s,o,a,c,l,h,u){Xe.call(this,null,s,o,a,c,l,i,r,h,u),this.image={data:t||null,width:e||1,height:n||1},this.magFilter=c!==void 0?c:et,this.minFilter=l!==void 0?l:et,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}Ji.prototype=Object.create(Xe.prototype);Ji.prototype.constructor=Ji;Ji.prototype.isDataTexture=!0;var Ki=new Qt,js=new L,zr=class{constructor(e,n,i,r,s,o){this.planes=[e!==void 0?e:new Ut,n!==void 0?n:new Ut,i!==void 0?i:new Ut,r!==void 0?r:new Ut,s!==void 0?s:new Ut,o!==void 0?o:new Ut]}set(e,n,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}clone(){return new this.constructor().copy(this)}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){let n=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],c=i[4],l=i[5],h=i[6],u=i[7],f=i[8],d=i[9],p=i[10],y=i[11],v=i[12],g=i[13],m=i[14],A=i[15];return n[0].setComponents(a-r,u-c,y-f,A-v).normalize(),n[1].setComponents(a+r,u+c,y+f,A+v).normalize(),n[2].setComponents(a+s,u+l,y+d,A+g).normalize(),n[3].setComponents(a-s,u-l,y-d,A-g).normalize(),n[4].setComponents(a-o,u-h,y-p,A-m).normalize(),n[5].setComponents(a+o,u+h,y+p,A+m).normalize(),this}intersectsObject(e){let n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),Ki.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ki)}intersectsSprite(e){return Ki.center.set(0,0,0),Ki.radius=.7071067811865476,Ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(e){let n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let r=n[i];if(js.x=r.normal.x>0?e.max.x:e.min.x,js.y=r.normal.y>0?e.max.y:e.min.y,js.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(js)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}};function yl(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function td(t,e){let n=e.isWebGL2,i=new WeakMap;function r(l,h){let u=l.array,f=l.usage,d=t.createBuffer();t.bindBuffer(h,d),t.bufferData(h,u,f),l.onUploadCallback();let p=5126;return u instanceof Float32Array?p=5126:u instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):u instanceof Uint16Array?l.isFloat16BufferAttribute?n?p=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):p=5123:u instanceof Int16Array?p=5122:u instanceof Uint32Array?p=5125:u instanceof Int32Array?p=5124:u instanceof Int8Array?p=5120:u instanceof Uint8Array&&(p=5121),{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function s(l,h,u){let f=h.array,d=h.updateRange;t.bindBuffer(u,l),d.count===-1?t.bufferSubData(u,0,f):(n?t.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):t.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=i.get(l);h&&(t.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let f=i.get(l);(!f||f.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);u===void 0?i.set(l,r(l,h)):u.version<l.version&&(s(u.buffer,l,h),u.version=l.version)}return{get:o,remove:a,update:c}}var ui=class extends Ie{constructor(e=1,n=1,i=1,r=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};let s=e/2,o=n/2,a=Math.floor(i),c=Math.floor(r),l=a+1,h=c+1,u=e/a,f=n/c,d=[],p=[],y=[],v=[];for(let g=0;g<h;g++){let m=g*f-o;for(let A=0;A<l;A++){let S=A*u-s;p.push(S,-m,0),y.push(0,0,1),v.push(A/a),v.push(1-g/c)}}for(let g=0;g<c;g++)for(let m=0;m<a;m++){let A=m+l*g,S=m+l*(g+1),E=m+1+l*(g+1),_=m+1+l*g;d.push(A,S,_),d.push(S,E,_)}this.setIndex(d),this.setAttribute("position",new Pe(p,3)),this.setAttribute("normal",new Pe(y,3)),this.setAttribute("uv",new Pe(v,2))}},nd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,id=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rd=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,sd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,od=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ad="vec3 transformed = vec3( position );",cd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ld=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,ud=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 );
		fDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,md=`#ifdef USE_COLOR
	diffuseColor.rgb *= vColor;
#endif`,gd=`#ifdef USE_COLOR
	varying vec3 vColor;
#endif`,vd=`#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,yd=`#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor.xyz *= color.xyz;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,xd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,_d=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bd=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,wd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Md=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Sd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Td=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ed="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ad=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,Ld=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Rd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Id=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Dd=`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,Od=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,Fd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,zd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,Ud=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hd=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Gd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,kd=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,Vd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wd=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,jd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qd=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Xd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,Yd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zd=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,Kd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,$d=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ep=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,tp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,np=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,ip=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,op=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ap=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,lp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,up=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,hp=`#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
			bitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,fp=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );
#endif`,dp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		float scale = sign( st1.t * st0.s - st0.t * st1.s );
		vec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );
		vec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );
		vec3 N = normalize( surf_norm );
		mat3 tsn = mat3( S, T, N );
		mapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		return normalize( tsn * mapN );
	}
#endif`,pp=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,mp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );
	#endif
#endif`,gp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,vp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,yp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_p=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sp=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Tp=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ep=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Ap=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Lp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,Cp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ip=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Op=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fp=`#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bp=`#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`,Np=`#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`,zp=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Up=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Hp=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Gp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,kp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Vp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Wp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,jp=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,qp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xp=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Jp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Kp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$p=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Qp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,im=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rm=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sm=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,om=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,am=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cm=`#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,um=`#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fm=`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dm=`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
	uniform float transmission;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#ifdef TRANSMISSION
		float totalTransmission = transmission;
	#endif
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <transmissionmap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSMISSION
		diffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pm=`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,gm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ym=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,_m=`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,wm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Be={alphamap_fragment:nd,alphamap_pars_fragment:id,alphatest_fragment:rd,aomap_fragment:sd,aomap_pars_fragment:od,begin_vertex:ad,beginnormal_vertex:cd,bsdfs:ld,bumpmap_pars_fragment:ud,clipping_planes_fragment:hd,clipping_planes_pars_fragment:fd,clipping_planes_pars_vertex:dd,clipping_planes_vertex:pd,color_fragment:md,color_pars_fragment:gd,color_pars_vertex:vd,color_vertex:yd,common:xd,cube_uv_reflection_fragment:_d,defaultnormal_vertex:bd,displacementmap_pars_vertex:wd,displacementmap_vertex:Md,emissivemap_fragment:Sd,emissivemap_pars_fragment:Td,encodings_fragment:Ed,encodings_pars_fragment:Ad,envmap_fragment:Ld,envmap_common_pars_fragment:Rd,envmap_pars_fragment:Cd,envmap_pars_vertex:Pd,envmap_physical_pars_fragment:kd,envmap_vertex:Id,fog_vertex:Dd,fog_pars_vertex:Od,fog_fragment:Fd,fog_pars_fragment:Bd,gradientmap_pars_fragment:Nd,lightmap_fragment:zd,lightmap_pars_fragment:Ud,lights_lambert_vertex:Hd,lights_pars_begin:Gd,lights_toon_fragment:Vd,lights_toon_pars_fragment:Wd,lights_phong_fragment:jd,lights_phong_pars_fragment:qd,lights_physical_fragment:Xd,lights_physical_pars_fragment:Yd,lights_fragment_begin:Zd,lights_fragment_maps:Jd,lights_fragment_end:Kd,logdepthbuf_fragment:$d,logdepthbuf_pars_fragment:Qd,logdepthbuf_pars_vertex:ep,logdepthbuf_vertex:tp,map_fragment:np,map_pars_fragment:ip,map_particle_fragment:rp,map_particle_pars_fragment:sp,metalnessmap_fragment:op,metalnessmap_pars_fragment:ap,morphnormal_vertex:cp,morphtarget_pars_vertex:lp,morphtarget_vertex:up,normal_fragment_begin:hp,normal_fragment_maps:fp,normalmap_pars_fragment:dp,clearcoat_normal_fragment_begin:pp,clearcoat_normal_fragment_maps:mp,clearcoat_pars_fragment:gp,packing:vp,premultiplied_alpha_fragment:yp,project_vertex:xp,dithering_fragment:_p,dithering_pars_fragment:bp,roughnessmap_fragment:wp,roughnessmap_pars_fragment:Mp,shadowmap_pars_fragment:Sp,shadowmap_pars_vertex:Tp,shadowmap_vertex:Ep,shadowmask_pars_fragment:Ap,skinbase_vertex:Lp,skinning_pars_vertex:Rp,skinning_vertex:Cp,skinnormal_vertex:Pp,specularmap_fragment:Ip,specularmap_pars_fragment:Dp,tonemapping_fragment:Op,tonemapping_pars_fragment:Fp,transmissionmap_fragment:Bp,transmissionmap_pars_fragment:Np,uv_pars_fragment:zp,uv_pars_vertex:Up,uv_vertex:Hp,uv2_pars_fragment:Gp,uv2_pars_vertex:kp,uv2_vertex:Vp,worldpos_vertex:Wp,background_frag:jp,background_vert:qp,cube_frag:Xp,cube_vert:Yp,depth_frag:Zp,depth_vert:Jp,distanceRGBA_frag:Kp,distanceRGBA_vert:$p,equirect_frag:Qp,equirect_vert:em,linedashed_frag:tm,linedashed_vert:nm,meshbasic_frag:im,meshbasic_vert:rm,meshlambert_frag:sm,meshlambert_vert:om,meshmatcap_frag:am,meshmatcap_vert:cm,meshtoon_frag:lm,meshtoon_vert:um,meshphong_frag:hm,meshphong_vert:fm,meshphysical_frag:dm,meshphysical_vert:pm,normal_frag:mm,normal_vert:gm,points_frag:vm,points_vert:ym,shadow_frag:xm,shadow_vert:_m,sprite_frag:bm,sprite_vert:wm},pe={common:{diffuse:{value:new ue(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ct},uv2Transform:{value:new Ct},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ue(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new Ct}},sprite:{diffuse:{value:new ue(15658734)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new Ct}}},tn={basic:{uniforms:_t([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:_t([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.fog,pe.lights,{emissive:{value:new ue(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:_t([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:_t([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:_t([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new ue(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:_t([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:_t([pe.points,pe.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:_t([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:_t([pe.common,pe.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:_t([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Be.normal_vert,fragmentShader:Be.normal_frag},sprite:{uniforms:_t([pe.sprite,pe.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ct},t2D:{value:null}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},cube:{uniforms:_t([pe.envmap,{opacity:{value:1}}]),vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:_t([pe.common,pe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:_t([pe.lights,pe.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};tn.physical={uniforms:_t([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new se(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new ue(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};function Mm(t,e,n,i,r){let s=new ue(0),o=0,a,c,l=null,h=0,u=null;function f(p,y,v,g){let m=y.isScene===!0?y.background:null;m&&m.isTexture&&(m=e.get(m));let A=t.xr,S=A.getSession&&A.getSession();S&&S.environmentBlendMode==="additive"&&(m=null),m===null?d(s,o):m&&m.isColor&&(d(m,1),g=!0),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),m&&(m.isCubeTexture||m.isWebGLCubeRenderTarget||m.mapping===ys)?(c===void 0&&(c=new Le(new Vn(1,1,1),new Ze({name:"BackgroundCubeMaterial",uniforms:qi(tn.cube.uniforms),vertexShader:tn.cube.vertexShader,fragmentShader:tn.cube.fragmentShader,side:nt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,_,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),m.isWebGLCubeRenderTarget&&(m=m.texture),c.material.uniforms.envMap.value=m,c.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m._needsFlipEnvMap?-1:1,(l!==m||h!==m.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,l=m,h=m.version,u=t.toneMapping),p.unshift(c,c.geometry,c.material,0,0,null)):m&&m.isTexture&&(a===void 0&&(a=new Le(new ui(2,2),new Ze({name:"BackgroundMaterial",uniforms:qi(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(a)),a.material.uniforms.t2D.value=m,m.matrixAutoUpdate===!0&&m.updateMatrix(),a.material.uniforms.uvTransform.value.copy(m.matrix),(l!==m||h!==m.version||u!==t.toneMapping)&&(a.material.needsUpdate=!0,l=m,h=m.version,u=t.toneMapping),p.unshift(a,a.geometry,a.material,0,0,null))}function d(p,y){n.buffers.color.setClear(p.r,p.g,p.b,y,r)}return{getClearColor:function(){return s},setClearColor:function(p,y=1){s.set(p),o=y,d(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,d(s,o)},render:f}}function Sm(t,e,n,i){let r=t.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=y(null),l=c;function h(j,H,q,J,oe){let he=!1;if(o){let fe=p(J,q,H);l!==fe&&(l=fe,f(l.object)),he=v(J,oe),he&&g(J,oe)}else{let fe=H.wireframe===!0;(l.geometry!==J.id||l.program!==q.id||l.wireframe!==fe)&&(l.geometry=J.id,l.program=q.id,l.wireframe=fe,he=!0)}j.isInstancedMesh===!0&&(he=!0),oe!==null&&n.update(oe,34963),he&&(F(j,H,q,J),oe!==null&&t.bindBuffer(34963,n.get(oe).buffer))}function u(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function f(j){return i.isWebGL2?t.bindVertexArray(j):s.bindVertexArrayOES(j)}function d(j){return i.isWebGL2?t.deleteVertexArray(j):s.deleteVertexArrayOES(j)}function p(j,H,q){let J=q.wireframe===!0,oe=a[j.id];oe===void 0&&(oe={},a[j.id]=oe);let he=oe[H.id];he===void 0&&(he={},oe[H.id]=he);let fe=he[J];return fe===void 0&&(fe=y(u()),he[J]=fe),fe}function y(j){let H=[],q=[],J=[];for(let oe=0;oe<r;oe++)H[oe]=0,q[oe]=0,J[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:q,attributeDivisors:J,object:j,attributes:{},index:null}}function v(j,H){let q=l.attributes,J=j.attributes,oe=0;for(let he in J){let fe=q[he],_e=J[he];if(fe===void 0||fe.attribute!==_e||fe.data!==_e.data)return!0;oe++}return l.attributesNum!==oe||l.index!==H}function g(j,H){let q={},J=j.attributes,oe=0;for(let he in J){let fe=J[he],_e={};_e.attribute=fe,fe.data&&(_e.data=fe.data),q[he]=_e,oe++}l.attributes=q,l.attributesNum=oe,l.index=H}function m(){let j=l.newAttributes;for(let H=0,q=j.length;H<q;H++)j[H]=0}function A(j){S(j,0)}function S(j,H){let q=l.newAttributes,J=l.enabledAttributes,oe=l.attributeDivisors;q[j]=1,J[j]===0&&(t.enableVertexAttribArray(j),J[j]=1),oe[j]!==H&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](j,H),oe[j]=H)}function E(){let j=l.newAttributes,H=l.enabledAttributes;for(let q=0,J=H.length;q<J;q++)H[q]!==j[q]&&(t.disableVertexAttribArray(q),H[q]=0)}function _(j,H,q,J,oe,he){i.isWebGL2===!0&&(q===5124||q===5125)?t.vertexAttribIPointer(j,H,q,oe,he):t.vertexAttribPointer(j,H,q,J,oe,he)}function F(j,H,q,J){if(i.isWebGL2===!1&&(j.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();let oe=J.attributes,he=q.getAttributes(),fe=H.defaultAttributeValues;for(let _e in he){let ve=he[_e];if(ve>=0){let ye=oe[_e];if(ye!==void 0){let Ce=ye.normalized,He=ye.itemSize,ie=n.get(ye);if(ie===void 0)continue;let T=ie.buffer,w=ie.type,D=ie.bytesPerElement;if(ye.isInterleavedBufferAttribute){let R=ye.data,O=R.stride,B=ye.offset;R&&R.isInstancedInterleavedBuffer?(S(ve,R.meshPerAttribute),J._maxInstanceCount===void 0&&(J._maxInstanceCount=R.meshPerAttribute*R.count)):A(ve),t.bindBuffer(34962,T),_(ve,He,w,Ce,O*D,B*D)}else ye.isInstancedBufferAttribute?(S(ve,ye.meshPerAttribute),J._maxInstanceCount===void 0&&(J._maxInstanceCount=ye.meshPerAttribute*ye.count)):A(ve),t.bindBuffer(34962,T),_(ve,He,w,Ce,0,0)}else if(_e==="instanceMatrix"){let Ce=n.get(j.instanceMatrix);if(Ce===void 0)continue;let He=Ce.buffer,ie=Ce.type;S(ve+0,1),S(ve+1,1),S(ve+2,1),S(ve+3,1),t.bindBuffer(34962,He),t.vertexAttribPointer(ve+0,4,ie,!1,64,0),t.vertexAttribPointer(ve+1,4,ie,!1,64,16),t.vertexAttribPointer(ve+2,4,ie,!1,64,32),t.vertexAttribPointer(ve+3,4,ie,!1,64,48)}else if(_e==="instanceColor"){let Ce=n.get(j.instanceColor);if(Ce===void 0)continue;let He=Ce.buffer,ie=Ce.type;S(ve,1),t.bindBuffer(34962,He),t.vertexAttribPointer(ve,3,ie,!1,12,0)}else if(fe!==void 0){let Ce=fe[_e];if(Ce!==void 0)switch(Ce.length){case 2:t.vertexAttrib2fv(ve,Ce);break;case 3:t.vertexAttrib3fv(ve,Ce);break;case 4:t.vertexAttrib4fv(ve,Ce);break;default:t.vertexAttrib1fv(ve,Ce)}}}}E()}function Z(){G();for(let j in a){let H=a[j];for(let q in H){let J=H[q];for(let oe in J)d(J[oe].object),delete J[oe];delete H[q]}delete a[j]}}function k(j){if(a[j.id]===void 0)return;let H=a[j.id];for(let q in H){let J=H[q];for(let oe in J)d(J[oe].object),delete J[oe];delete H[q]}delete a[j.id]}function V(j){for(let H in a){let q=a[H];if(q[j.id]===void 0)continue;let J=q[j.id];for(let oe in J)d(J[oe].object),delete J[oe];delete q[j.id]}}function G(){$(),l!==c&&(l=c,f(l.object))}function $(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:G,resetDefaultState:$,dispose:Z,releaseStatesOfGeometry:k,releaseStatesOfProgram:V,initAttributes:m,enableAttribute:A,disableUnusedAttributes:E}}function Tm(t,e,n,i){let r=i.isWebGL2,s;function o(l){s=l}function a(l,h){t.drawArrays(s,l,h),n.update(h,s,1)}function c(l,h,u){if(u===0)return;let f,d;if(r)f=t,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,l,h,u),n.update(h,s,u)}this.setMode=o,this.render=a,this.renderInstances=c}function Em(t,e,n){let i;function r(){if(i!==void 0)return i;let _=e.get("EXT_texture_filter_anisotropic");return _!==null?i=t.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT):i=0,i}function s(_){if(_==="highp"){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";_="mediump"}return _==="mediump"&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext!="undefined"&&t instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&t instanceof WebGL2ComputeRenderingContext,a=n.precision!==void 0?n.precision:"highp",c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=n.logarithmicDepthBuffer===!0,h=t.getParameter(34930),u=t.getParameter(35660),f=t.getParameter(3379),d=t.getParameter(34076),p=t.getParameter(34921),y=t.getParameter(36347),v=t.getParameter(36348),g=t.getParameter(36349),m=u>0,A=o||!!e.get("OES_texture_float"),S=m&&A,E=o?t.getParameter(36183):0;return{isWebGL2:o,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:l,maxTextures:h,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:g,vertexTextures:m,floatFragmentTextures:A,floatVertexTextures:S,maxSamples:E}}function Am(t){let e=this,n=null,i=0,r=!1,s=!1,o=new Ut,a=new Ct,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f,d){let p=u.length!==0||f||i!==0||r;return r=f,n=h(u,d,0),i=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,l()},this.setState=function(u,f,d){let p=u.clippingPlanes,y=u.clipIntersection,v=u.clipShadows,g=t.get(u);if(!r||p===null||p.length===0||s&&!v)s?h(null):l();else{let m=s?0:i,A=m*4,S=g.clippingState||null;c.value=S,S=h(p,f,A,d);for(let E=0;E!==A;++E)S[E]=n[E];g.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=m}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,p){let y=u!==null?u.length:0,v=null;if(y!==0){if(v=c.value,p!==!0||v===null){let g=d+y*4,m=f.matrixWorldInverse;a.getNormalMatrix(m),(v===null||v.length<g)&&(v=new Float32Array(g));for(let A=0,S=d;A!==y;++A,S+=4)o.copy(u[A]).applyMatrix4(m,a),o.normal.toArray(v,S),v[S+3]=o.constant}c.value=v,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,v}}function Lm(t){let e=new WeakMap;function n(o,a){return a===Hc?o.mapping=jo:a===Gc&&(o.mapping=qo),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Hc||a===Gc)if(e.has(o)){let c=e.get(o).texture;return n(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=t.getRenderList(),h=t.getRenderTarget(),u=new vl(c.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),t.setRenderTarget(h),t.setRenderList(l),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}function Rm(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float")},get:function(i){let r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Cm(t,e,n,i){let r={},s=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete r[f.id];let d=s.get(f);d&&(e.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function c(u){let f=u.attributes;for(let p in f)e.update(f[p],34962);let d=u.morphAttributes;for(let p in d){let y=d[p];for(let v=0,g=y.length;v<g;v++)e.update(y[v],34962)}}function l(u){let f=[],d=u.index,p=u.attributes.position,y=0;if(d!==null){let m=d.array;y=d.version;for(let A=0,S=m.length;A<S;A+=3){let E=m[A+0],_=m[A+1],F=m[A+2];f.push(E,_,_,F,F,E)}}else{let m=p.array;y=p.version;for(let A=0,S=m.length/3-1;A<S;A+=3){let E=A+0,_=A+1,F=A+2;f.push(E,_,_,F,F,E)}}let v=new(ml(f)>65535?li:Br)(f,1);v.version=y;let g=s.get(u);g&&e.remove(g),s.set(u,v)}function h(u){let f=s.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Pm(t,e,n,i){let r=i.isWebGL2,s;function o(f){s=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function h(f,d){t.drawElements(s,d,a,f*c),n.update(d,s,1)}function u(f,d,p){if(p===0)return;let y,v;if(r)y=t,v="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[v](s,d,a,f*c,p),n.update(d,s,p)}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u}function Im(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case 4:n.triangles+=a*(s/3);break;case 1:n.lines+=a*(s/2);break;case 3:n.lines+=a*(s-1);break;case 2:n.lines+=a*s;break;case 0:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Dm(t,e){return t[0]-e[0]}function Om(t,e){return Math.abs(e[1])-Math.abs(t[1])}function Fm(t){let e={},n=new Float32Array(8),i=[];for(let s=0;s<8;s++)i[s]=[s,0];function r(s,o,a,c){let l=s.morphTargetInfluences,h=l===void 0?0:l.length,u=e[o.id];if(u===void 0){u=[];for(let v=0;v<h;v++)u[v]=[v,0];e[o.id]=u}for(let v=0;v<h;v++){let g=u[v];g[0]=v,g[1]=l[v]}u.sort(Om);for(let v=0;v<8;v++)v<h&&u[v][1]?(i[v][0]=u[v][0],i[v][1]=u[v][1]):(i[v][0]=Number.MAX_SAFE_INTEGER,i[v][1]=0);i.sort(Dm);let f=a.morphTargets&&o.morphAttributes.position,d=a.morphNormals&&o.morphAttributes.normal,p=0;for(let v=0;v<8;v++){let g=i[v],m=g[0],A=g[1];m!==Number.MAX_SAFE_INTEGER&&A?(f&&o.getAttribute("morphTarget"+v)!==f[m]&&o.setAttribute("morphTarget"+v,f[m]),d&&o.getAttribute("morphNormal"+v)!==d[m]&&o.setAttribute("morphNormal"+v,d[m]),n[v]=A,p+=A):(f&&o.hasAttribute("morphTarget"+v)===!0&&o.deleteAttribute("morphTarget"+v),d&&o.hasAttribute("morphNormal"+v)===!0&&o.deleteAttribute("morphNormal"+v),n[v]=0)}let y=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(t,"morphTargetBaseInfluence",y),c.getUniforms().setValue(t,"morphTargetInfluences",n)}return{update:r}}function Bm(t,e,n,i){let r=new WeakMap;function s(c){let l=i.render.frame,h=c.geometry,u=e.get(c,h);return r.get(u)!==l&&(e.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),n.update(c.instanceMatrix,34962),c.instanceColor!==null&&n.update(c.instanceColor,34962)),u}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),n.remove(l.instanceMatrix),l.instanceColor!==null&&n.remove(l.instanceColor)}return{update:s,dispose:o}}function Ur(t=null,e=1,n=1,i=1){Xe.call(this,null),this.image={data:t,width:e,height:n,depth:i},this.magFilter=et,this.minFilter=et,this.wrapR=Tt,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}Ur.prototype=Object.create(Xe.prototype);Ur.prototype.constructor=Ur;Ur.prototype.isDataTexture2DArray=!0;function Hr(t=null,e=1,n=1,i=1){Xe.call(this,null),this.image={data:t,width:e,height:n,depth:i},this.magFilter=et,this.minFilter=et,this.wrapR=Tt,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}Hr.prototype=Object.create(Xe.prototype);Hr.prototype.constructor=Hr;Hr.prototype.isDataTexture3D=!0;var xl=new Xe,Nm=new Ur,zm=new Hr,_l=new jn,bl=[],wl=[],Ml=new Float32Array(16),Sl=new Float32Array(9),Tl=new Float32Array(4);function $i(t,e,n){let i=t[0];if(i<=0||i>0)return t;let r=e*n,s=bl[r];if(s===void 0&&(s=new Float32Array(r),bl[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ht(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Dt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function El(t,e){let n=wl[e];n===void 0&&(n=new Int32Array(e),wl[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Um(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Hm(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2fv(this.addr,e),Dt(n,e)}}function Gm(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ht(n,e))return;t.uniform3fv(this.addr,e),Dt(n,e)}}function km(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4fv(this.addr,e),Dt(n,e)}}function Vm(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Dt(n,e)}else{if(Ht(n,i))return;Tl.set(i),t.uniformMatrix2fv(this.addr,!1,Tl),Dt(n,i)}}function Wm(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Dt(n,e)}else{if(Ht(n,i))return;Sl.set(i),t.uniformMatrix3fv(this.addr,!1,Sl),Dt(n,i)}}function jm(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Dt(n,e)}else{if(Ht(n,i))return;Ml.set(i),t.uniformMatrix4fv(this.addr,!1,Ml),Dt(n,i)}}function qm(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.safeSetTexture2D(e||xl,r)}function Xm(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Nm,r)}function Ym(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||zm,r)}function Zm(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.safeSetTextureCube(e||_l,r)}function Jm(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Km(t,e){let n=this.cache;Ht(n,e)||(t.uniform2iv(this.addr,e),Dt(n,e))}function $m(t,e){let n=this.cache;Ht(n,e)||(t.uniform3iv(this.addr,e),Dt(n,e))}function Qm(t,e){let n=this.cache;Ht(n,e)||(t.uniform4iv(this.addr,e),Dt(n,e))}function eg(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function tg(t){switch(t){case 5126:return Um;case 35664:return Hm;case 35665:return Gm;case 35666:return km;case 35674:return Vm;case 35675:return Wm;case 35676:return jm;case 5124:case 35670:return Jm;case 35667:case 35671:return Km;case 35668:case 35672:return $m;case 35669:case 35673:return Qm;case 5125:return eg;case 35678:case 36198:case 36298:case 36306:case 35682:return qm;case 35679:case 36299:case 36307:return Ym;case 35680:case 36300:case 36308:case 36293:return Zm;case 36289:case 36303:case 36311:case 36292:return Xm}}function ng(t,e){t.uniform1fv(this.addr,e)}function ig(t,e){t.uniform1iv(this.addr,e)}function rg(t,e){t.uniform2iv(this.addr,e)}function sg(t,e){t.uniform3iv(this.addr,e)}function og(t,e){t.uniform4iv(this.addr,e)}function ag(t,e){let n=$i(e,this.size,2);t.uniform2fv(this.addr,n)}function cg(t,e){let n=$i(e,this.size,3);t.uniform3fv(this.addr,n)}function lg(t,e){let n=$i(e,this.size,4);t.uniform4fv(this.addr,n)}function ug(t,e){let n=$i(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function hg(t,e){let n=$i(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function fg(t,e){let n=$i(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function dg(t,e,n){let i=e.length,r=El(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.safeSetTexture2D(e[s]||xl,r[s])}function pg(t,e,n){let i=e.length,r=El(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.safeSetTextureCube(e[s]||_l,r[s])}function mg(t){switch(t){case 5126:return ng;case 35664:return ag;case 35665:return cg;case 35666:return lg;case 35674:return ug;case 35675:return hg;case 35676:return fg;case 5124:case 35670:return ig;case 35667:case 35671:return rg;case 35668:case 35672:return sg;case 35669:case 35673:return og;case 35678:case 36198:case 36298:case 36306:case 35682:return dg;case 35680:case 36300:case 36308:case 36293:return pg}}function gg(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=tg(e.type)}function Al(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=mg(e.type)}Al.prototype.updateCache=function(t){let e=this.cache;t instanceof Float32Array&&e.length!==t.length&&(this.cache=new Float32Array(t.length)),Dt(e,t)};function Ll(t){this.id=t,this.seq=[],this.map={}}Ll.prototype.setValue=function(t,e,n){let i=this.seq;for(let r=0,s=i.length;r!==s;++r){let o=i[r];o.setValue(t,e[o.id],n)}};var Ca=/(\w+)(\])?(\[|\.)?/g;function Rl(t,e){t.seq.push(e),t.map[e.id]=e}function vg(t,e,n){let i=t.name,r=i.length;for(Ca.lastIndex=0;;){let s=Ca.exec(i),o=Ca.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Rl(n,l===void 0?new gg(a,t,e):new Al(a,t,e));break}else{let u=n.map[a];u===void 0&&(u=new Ll(a),Rl(n,u)),n=u}}}function qn(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),s=t.getUniformLocation(e,r.name);vg(r,s,this)}}qn.prototype.setValue=function(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)};qn.prototype.setOptional=function(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)};qn.upload=function(t,e,n,i){for(let r=0,s=e.length;r!==s;++r){let o=e[r],a=n[o.id];a.needsUpdate!==!1&&o.setValue(t,a.value,i)}};qn.seqWithValue=function(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let s=t[i];s.id in e&&n.push(s)}return n};function Cl(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var yg=0;function xg(t){let e=t.split(`
`);for(let n=0;n<e.length;n++)e[n]=n+1+": "+e[n];return e.join(`
`)}function Pl(t){switch(t){case yt:return["Linear","( value )"];case Wt:return["sRGB","( value )"];case ea:return["RGBE","( value )"];case el:return["RGBM","( value, 7.0 )"];case tl:return["RGBM","( value, 16.0 )"];case nl:return["RGBD","( value, 256.0 )"];case Qo:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case Df:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}function Il(t,e,n){let i=t.getShaderParameter(e,35713),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=t.getShaderSource(e);return"THREE.WebGLShader: gl.getShaderInfoLog() "+n+`
`+r+xg(s)}function Gr(t,e){let n=Pl(e);return"vec4 "+t+"( vec4 value ) { return "+n[0]+"ToLinear"+n[1]+"; }"}function _g(t,e){let n=Pl(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function bg(t,e){let n;switch(e){case Dh:n="Linear";break;case Oh:n="Reinhard";break;case Fh:n="OptimizedCineon";break;case Wo:n="ACESFilmic";break;case Bh:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function wg(t){return[t.extensionDerivatives||t.envMapCubeUV||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(kr).join(`
`)}function Mg(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Sg(t,e){let n={},i=t.getProgramParameter(e,35721);for(let r=0;r<i;r++){let o=t.getActiveAttrib(e,r).name;n[o]=t.getAttribLocation(e,o)}return n}function kr(t){return t!==""}function Dl(t,e){return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ol(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Tg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pa(t){return t.replace(Tg,Eg)}function Eg(t,e){let n=Be[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Pa(n)}var Ag=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Lg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fl(t){return t.replace(Lg,Bl).replace(Ag,Rg)}function Rg(t,e,n,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Bl(t,e,n,i)}function Bl(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Nl(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Cg(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Pc?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===ko?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Er&&(e="SHADOWMAP_TYPE_VSM"),e}function Pg(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case jo:case qo:e="ENVMAP_TYPE_CUBE";break;case ys:case Xo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ig(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case qo:case Xo:e="ENVMAP_MODE_REFRACTION";break}return e}function Dg(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case vs:e="ENVMAP_BLENDING_MULTIPLY";break;case Ph:e="ENVMAP_BLENDING_MIX";break;case Ih:e="ENVMAP_BLENDING_ADD";break}return e}function Og(t,e,n,i){let r=t.getContext(),s=n.defines,o=n.vertexShader,a=n.fragmentShader,c=Cg(n),l=Pg(n),h=Ig(n),u=Dg(n),f=t.gammaFactor>0?t.gammaFactor:1,d=n.isWebGL2?"":wg(n),p=Mg(s),y=r.createProgram(),v,g,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=[p].filter(kr).join(`
`),v.length>0&&(v+=`
`),g=[d,p].filter(kr).join(`
`),g.length>0&&(g+=`
`)):(v=[Nl(n),"#define SHADER_NAME "+n.shaderName,p,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+f,"#define MAX_BONES "+n.maxBones,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.useVertexTexture?"#define BONE_TEXTURE":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#ifdef USE_COLOR","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kr).join(`
`),g=[d,Nl(n),"#define SHADER_NAME "+n.shaderName,p,n.alphaTest?"#define ALPHATEST "+n.alphaTest+(n.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+f,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+h:"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.sheen?"#define USE_SHEEN":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(n.extensionShaderTextureLOD||n.envMap)&&n.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Li?"#define TONE_MAPPING":"",n.toneMapping!==Li?Be.tonemapping_pars_fragment:"",n.toneMapping!==Li?bg("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",Be.encodings_pars_fragment,n.map?Gr("mapTexelToLinear",n.mapEncoding):"",n.matcap?Gr("matcapTexelToLinear",n.matcapEncoding):"",n.envMap?Gr("envMapTexelToLinear",n.envMapEncoding):"",n.emissiveMap?Gr("emissiveMapTexelToLinear",n.emissiveMapEncoding):"",n.lightMap?Gr("lightMapTexelToLinear",n.lightMapEncoding):"",_g("linearToOutputTexel",n.outputEncoding),n.depthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(kr).join(`
`)),o=Pa(o),o=Dl(o,n),o=Ol(o,n),a=Pa(a),a=Dl(a,n),a=Ol(a,n),o=Fl(o),a=Fl(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",n.glslVersion===il?"":"out highp vec4 pc_fragColor;",n.glslVersion===il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let A=m+v+o,S=m+g+a,E=Cl(r,35633,A),_=Cl(r,35632,S);if(r.attachShader(y,E),r.attachShader(y,_),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y),t.debug.checkShaderErrors){let k=r.getProgramInfoLog(y).trim(),V=r.getShaderInfoLog(E).trim(),G=r.getShaderInfoLog(_).trim(),$=!0,j=!0;if(r.getProgramParameter(y,35714)===!1){$=!1;let H=Il(r,E,"vertex"),q=Il(r,_,"fragment");console.error("THREE.WebGLProgram: shader error: ",r.getError(),"35715",r.getProgramParameter(y,35715),"gl.getProgramInfoLog",k,H,q)}else k!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",k):(V===""||G==="")&&(j=!1);j&&(this.diagnostics={runnable:$,programLog:k,vertexShader:{log:V,prefix:v},fragmentShader:{log:G,prefix:g}})}r.deleteShader(E),r.deleteShader(_);let F;this.getUniforms=function(){return F===void 0&&(F=new qn(r,y)),F};let Z;return this.getAttributes=function(){return Z===void 0&&(Z=Sg(r,y)),Z},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.name=n.shaderName,this.id=yg++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=E,this.fragmentShader=_,this}function Fg(t,e,n,i,r,s){let o=[],a=i.isWebGL2,c=i.logarithmicDepthBuffer,l=i.floatVertexTextures,h=i.maxVertexUniforms,u=i.vertexTextures,f=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},p=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","maxMorphTargets","maxMorphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function y(_){let Z=_.skeleton.bones;if(l)return 1024;{let V=Math.floor((h-20)/4),G=Math.min(V,Z.length);return G<Z.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+Z.length+" bones. This GPU supports "+G+"."),0):G}}function v(_){let F;return _&&_.isTexture?F=_.encoding:_&&_.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),F=_.texture.encoding):F=yt,F}function g(_,F,Z,k,V){let G=k.fog,$=_.isMeshStandardMaterial?k.environment:null,j=e.get(_.envMap||$),H=d[_.type],q=V.isSkinnedMesh?y(V):0;_.precision!==null&&(f=i.getMaxPrecision(_.precision),f!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let J,oe;if(H){let _e=tn[H];J=_e.vertexShader,oe=_e.fragmentShader}else J=_.vertexShader,oe=_.fragmentShader;let he=t.getRenderTarget();return{isWebGL2:a,shaderID:H,shaderName:_.type,vertexShader:J,fragmentShader:oe,defines:_.defines,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,instancing:V.isInstancedMesh===!0,instancingColor:V.isInstancedMesh===!0&&V.instanceColor!==null,supportsVertexTextures:u,outputEncoding:he!==null?v(he.texture):t.outputEncoding,map:!!_.map,mapEncoding:v(_.map),matcap:!!_.matcap,matcapEncoding:v(_.matcap),envMap:!!j,envMapMode:j&&j.mapping,envMapEncoding:v(j),envMapCubeUV:!!j&&(j.mapping===ys||j.mapping===Xo),lightMap:!!_.lightMap,lightMapEncoding:v(_.lightMap),aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,emissiveMapEncoding:v(_.emissiveMap),bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===Bf,tangentSpaceNormalMap:_.normalMapType===Fn,clearcoatMap:!!_.clearcoatMap,clearcoatRoughnessMap:!!_.clearcoatRoughnessMap,clearcoatNormalMap:!!_.clearcoatNormalMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,alphaMap:!!_.alphaMap,gradientMap:!!_.gradientMap,sheen:!!_.sheen,transmissionMap:!!_.transmissionMap,combine:_.combine,vertexTangents:_.normalMap&&_.vertexTangents,vertexColors:_.vertexColors,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.displacementMap||!!_.transmissionMap,uvsVertexOnly:!(!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatNormalMap||!!_.transmissionMap)&&!!_.displacementMap,fog:!!G,useFog:_.fog,fogExp2:G&&G.isFogExp2,flatShading:_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:c,skinning:_.skinning&&q>0,maxBones:q,useVertexTexture:l,morphTargets:_.morphTargets,morphNormals:_.morphNormals,maxMorphTargets:t.maxMorphTargets,maxMorphNormals:t.maxMorphNormals,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&Z.length>0,shadowMapType:t.shadowMap.type,toneMapping:_.toneMapped?t.toneMapping:Li,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,alphaTest:_.alphaTest,doubleSided:_.side===pt,flipSided:_.side===nt,depthPacking:_.depthPacking!==void 0?_.depthPacking:!1,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:a||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:a||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:a||n.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function m(_){let F=[];if(_.shaderID?F.push(_.shaderID):(F.push(_.fragmentShader),F.push(_.vertexShader)),_.defines!==void 0)for(let Z in _.defines)F.push(Z),F.push(_.defines[Z]);if(_.isRawShaderMaterial===!1){for(let Z=0;Z<p.length;Z++)F.push(_[p[Z]]);F.push(t.outputEncoding),F.push(t.gammaFactor)}return F.push(_.customProgramCacheKey),F.join()}function A(_){let F=d[_.type],Z;if(F){let k=tn[F];Z=$f.clone(k.uniforms)}else Z=_.uniforms;return Z}function S(_,F){let Z;for(let k=0,V=o.length;k<V;k++){let G=o[k];if(G.cacheKey===F){Z=G,++Z.usedTimes;break}}return Z===void 0&&(Z=new Og(t,F,_,r),o.push(Z)),Z}function E(_){if(--_.usedTimes===0){let F=o.indexOf(_);o[F]=o[o.length-1],o.pop(),_.destroy()}}return{getParameters:g,getProgramCacheKey:m,getUniforms:A,acquireProgram:S,releaseProgram:E,programs:o}}function Bg(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function Ng(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.program!==e.program?t.program.id-e.program.id:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function zg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function zl(t){let e=[],n=0,i=[],r=[],s={id:-1};function o(){n=0,i.length=0,r.length=0}function a(f,d,p,y,v,g){let m=e[n],A=t.get(p);return m===void 0?(m={id:f.id,object:f,geometry:d,material:p,program:A.program||s,groupOrder:y,renderOrder:f.renderOrder,z:v,group:g},e[n]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=p,m.program=A.program||s,m.groupOrder=y,m.renderOrder=f.renderOrder,m.z=v,m.group=g),n++,m}function c(f,d,p,y,v,g){let m=a(f,d,p,y,v,g);(p.transparent===!0?r:i).push(m)}function l(f,d,p,y,v,g){let m=a(f,d,p,y,v,g);(p.transparent===!0?r:i).unshift(m)}function h(f,d){i.length>1&&i.sort(f||Ng),r.length>1&&r.sort(d||zg)}function u(){for(let f=n,d=e.length;f<d;f++){let p=e[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.program=null,p.group=null}}return{opaque:i,transparent:r,init:o,push:c,unshift:l,finish:u,sort:h}}function Ug(t){let e=new WeakMap;function n(r,s){let o=e.get(r),a;return o===void 0?(a=new zl(t),e.set(r,new WeakMap),e.get(r).set(s,a)):(a=o.get(s),a===void 0&&(a=new zl(t),o.set(s,a))),a}function i(){e=new WeakMap}return{get:n,dispose:i}}function Hg(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new L,color:new ue};break;case"SpotLight":n={position:new L,direction:new L,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new L,color:new ue,distance:0,decay:0};break;case"HemisphereLight":n={direction:new L,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":n={color:new ue,position:new L,halfWidth:new L,halfHeight:new L};break}return t[e.id]=n,n}}}function Gg(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var kg=0;function Vg(t,e){return(e.castShadow?1:0)-(t.castShadow?1:0)}function Wg(t,e){let n=new Hg,i=Gg(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let h=0;h<9;h++)r.probe.push(new L);let s=new L,o=new Re,a=new Re;function c(h){let u=0,f=0,d=0;for(let F=0;F<9;F++)r.probe[F].set(0,0,0);let p=0,y=0,v=0,g=0,m=0,A=0,S=0,E=0;h.sort(Vg);for(let F=0,Z=h.length;F<Z;F++){let k=h[F],V=k.color,G=k.intensity,$=k.distance,j=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)u+=V.r*G,f+=V.g*G,d+=V.b*G;else if(k.isLightProbe)for(let H=0;H<9;H++)r.probe[H].addScaledVector(k.sh.coefficients[H],G);else if(k.isDirectionalLight){let H=n.get(k);if(H.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let q=k.shadow,J=i.get(k);J.shadowBias=q.bias,J.shadowNormalBias=q.normalBias,J.shadowRadius=q.radius,J.shadowMapSize=q.mapSize,r.directionalShadow[p]=J,r.directionalShadowMap[p]=j,r.directionalShadowMatrix[p]=k.shadow.matrix,A++}r.directional[p]=H,p++}else if(k.isSpotLight){let H=n.get(k);if(H.position.setFromMatrixPosition(k.matrixWorld),H.color.copy(V).multiplyScalar(G),H.distance=$,H.coneCos=Math.cos(k.angle),H.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),H.decay=k.decay,k.castShadow){let q=k.shadow,J=i.get(k);J.shadowBias=q.bias,J.shadowNormalBias=q.normalBias,J.shadowRadius=q.radius,J.shadowMapSize=q.mapSize,r.spotShadow[v]=J,r.spotShadowMap[v]=j,r.spotShadowMatrix[v]=k.shadow.matrix,E++}r.spot[v]=H,v++}else if(k.isRectAreaLight){let H=n.get(k);H.color.copy(V).multiplyScalar(G),H.halfWidth.set(k.width*.5,0,0),H.halfHeight.set(0,k.height*.5,0),r.rectArea[g]=H,g++}else if(k.isPointLight){let H=n.get(k);if(H.color.copy(k.color).multiplyScalar(k.intensity),H.distance=k.distance,H.decay=k.decay,k.castShadow){let q=k.shadow,J=i.get(k);J.shadowBias=q.bias,J.shadowNormalBias=q.normalBias,J.shadowRadius=q.radius,J.shadowMapSize=q.mapSize,J.shadowCameraNear=q.camera.near,J.shadowCameraFar=q.camera.far,r.pointShadow[y]=J,r.pointShadowMap[y]=j,r.pointShadowMatrix[y]=k.shadow.matrix,S++}r.point[y]=H,y++}else if(k.isHemisphereLight){let H=n.get(k);H.skyColor.copy(k.color).multiplyScalar(G),H.groundColor.copy(k.groundColor).multiplyScalar(G),r.hemi[m]=H,m++}}g>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=u,r.ambient[1]=f,r.ambient[2]=d;let _=r.hash;(_.directionalLength!==p||_.pointLength!==y||_.spotLength!==v||_.rectAreaLength!==g||_.hemiLength!==m||_.numDirectionalShadows!==A||_.numPointShadows!==S||_.numSpotShadows!==E)&&(r.directional.length=p,r.spot.length=v,r.rectArea.length=g,r.point.length=y,r.hemi.length=m,r.directionalShadow.length=A,r.directionalShadowMap.length=A,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=A,r.pointShadowMatrix.length=S,r.spotShadowMatrix.length=E,_.directionalLength=p,_.pointLength=y,_.spotLength=v,_.rectAreaLength=g,_.hemiLength=m,_.numDirectionalShadows=A,_.numPointShadows=S,_.numSpotShadows=E,r.version=kg++)}function l(h,u){let f=0,d=0,p=0,y=0,v=0,g=u.matrixWorldInverse;for(let m=0,A=h.length;m<A;m++){let S=h[m];if(S.isDirectionalLight){let E=r.directional[f];E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),f++}else if(S.isSpotLight){let E=r.spot[p];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),p++}else if(S.isRectAreaLight){let E=r.rectArea[y];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(g),a.identity(),o.copy(S.matrixWorld),o.premultiply(g),a.extractRotation(o),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),y++}else if(S.isPointLight){let E=r.point[d];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(g),d++}else if(S.isHemisphereLight){let E=r.hemi[v];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(g),E.direction.normalize(),v++}}}return{setup:c,setupView:l,state:r}}function Ul(t,e){let n=new Wg(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(u){i.push(u)}function a(u){r.push(u)}function c(){n.setup(i)}function l(u){n.setupView(i,u)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function jg(t,e){let n=new WeakMap;function i(s,o=0){let a;return n.has(s)===!1?(a=new Ul(t,e),n.set(s,[]),n.get(s).push(a)):o>=n.get(s).length?(a=new Ul(t,e),n.get(s).push(a)):a=n.get(s)[o],a}function r(){n=new WeakMap}return{get:i,dispose:r}}function hi(t){Te.call(this),this.type="MeshDepthMaterial",this.depthPacking=Of,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(t)}hi.prototype=Object.create(Te.prototype);hi.prototype.constructor=hi;hi.prototype.isMeshDepthMaterial=!0;hi.prototype.copy=function(t){return Te.prototype.copy.call(this,t),this.depthPacking=t.depthPacking,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this};function fi(t){Te.call(this),this.type="MeshDistanceMaterial",this.referencePosition=new L,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(t)}fi.prototype=Object.create(Te.prototype);fi.prototype.constructor=fi;fi.prototype.isMeshDistanceMaterial=!0;fi.prototype.copy=function(t){return Te.prototype.copy.call(this,t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this};var qg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,Xg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function Hl(t,e,n){let i=new zr,r=new se,s=new se,o=new Ge,a=[],c=[],l={},h={0:nt,1:Pn,2:pt},u=new Ze({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:Xg,fragmentShader:qg}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let d=new Ie;d.setAttribute("position",new Ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let p=new Le(d,u),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pc,this.render=function(E,_,F){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||E.length===0)return;let Z=t.getRenderTarget(),k=t.getActiveCubeFace(),V=t.getActiveMipmapLevel(),G=t.state;G.setBlending(In),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);for(let $=0,j=E.length;$<j;$++){let H=E[$],q=H.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);let J=q.getFrameExtents();if(r.multiply(J),s.copy(q.mapSize),(r.x>n||r.y>n)&&(r.x>n&&(s.x=Math.floor(n/J.x),r.x=s.x*J.x,q.mapSize.x=s.x),r.y>n&&(s.y=Math.floor(n/J.y),r.y=s.y*J.y,q.mapSize.y=s.y)),q.map===null&&!q.isPointLightShadow&&this.type===Er){let he={minFilter:je,magFilter:je,format:zt};q.map=new vn(r.x,r.y,he),q.map.texture.name=H.name+".shadowMap",q.mapPass=new vn(r.x,r.y,he),q.camera.updateProjectionMatrix()}if(q.map===null){let he={minFilter:et,magFilter:et,format:zt};q.map=new vn(r.x,r.y,he),q.map.texture.name=H.name+".shadowMap",q.camera.updateProjectionMatrix()}t.setRenderTarget(q.map),t.clear();let oe=q.getViewportCount();for(let he=0;he<oe;he++){let fe=q.getViewport(he);o.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),G.viewport(o),q.updateMatrices(H,he),i=q.getFrustum(),S(_,F,q.camera,H,this.type)}!q.isPointLightShadow&&this.type===Er&&v(q,F),q.needsUpdate=!1}y.needsUpdate=!1,t.setRenderTarget(Z,k,V)};function v(E,_){let F=e.update(p);u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(_,null,F,u,p,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(_,null,F,f,p,null)}function g(E,_,F){let Z=E<<0|_<<1|F<<2,k=a[Z];return k===void 0&&(k=new hi({depthPacking:Ff,morphTargets:E,skinning:_}),a[Z]=k),k}function m(E,_,F){let Z=E<<0|_<<1|F<<2,k=c[Z];return k===void 0&&(k=new fi({morphTargets:E,skinning:_}),c[Z]=k),k}function A(E,_,F,Z,k,V,G){let $=null,j=g,H=E.customDepthMaterial;if(Z.isPointLight===!0&&(j=m,H=E.customDistanceMaterial),H===void 0){let q=!1;F.morphTargets===!0&&(q=_.morphAttributes&&_.morphAttributes.position&&_.morphAttributes.position.length>0);let J=!1;E.isSkinnedMesh===!0&&(F.skinning===!0?J=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",E));let oe=E.isInstancedMesh===!0;$=j(q,J,oe)}else $=H;if(t.localClippingEnabled&&F.clipShadows===!0&&F.clippingPlanes.length!==0){let q=$.uuid,J=F.uuid,oe=l[q];oe===void 0&&(oe={},l[q]=oe);let he=oe[J];he===void 0&&(he=$.clone(),oe[J]=he),$=he}return $.visible=F.visible,$.wireframe=F.wireframe,G===Er?$.side=F.shadowSide!==null?F.shadowSide:F.side:$.side=F.shadowSide!==null?F.shadowSide:h[F.side],$.clipShadows=F.clipShadows,$.clippingPlanes=F.clippingPlanes,$.clipIntersection=F.clipIntersection,$.wireframeLinewidth=F.wireframeLinewidth,$.linewidth=F.linewidth,Z.isPointLight===!0&&$.isMeshDistanceMaterial===!0&&($.referencePosition.setFromMatrixPosition(Z.matrixWorld),$.nearDistance=k,$.farDistance=V),$}function S(E,_,F,Z,k){if(E.visible===!1)return;if(E.layers.test(_.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&k===Er)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,E.matrixWorld);let $=e.update(E),j=E.material;if(Array.isArray(j)){let H=$.groups;for(let q=0,J=H.length;q<J;q++){let oe=H[q],he=j[oe.materialIndex];if(he&&he.visible){let fe=A(E,$,he,Z,F.near,F.far,k);t.renderBufferDirect(F,null,$,fe,E,oe)}}}else if(j.visible){let H=A(E,$,j,Z,F.near,F.far,k);t.renderBufferDirect(F,null,$,H,E,null)}}let G=E.children;for(let $=0,j=G.length;$<j;$++)S(G[$],_,F,Z,k)}}function Yg(t,e,n){let i=n.isWebGL2;function r(){let N=!1,te=new Ge,ce=null,le=new Ge(0,0,0,0);return{setMask:function(ae){ce!==ae&&!N&&(t.colorMask(ae,ae,ae,ae),ce=ae)},setLocked:function(ae){N=ae},setClear:function(ae,xe,be,z,re){re===!0&&(ae*=z,xe*=z,be*=z),te.set(ae,xe,be,z),le.equals(te)===!1&&(t.clearColor(ae,xe,be,z),le.copy(te))},reset:function(){N=!1,ce=null,le.set(-1,0,0,0)}}}function s(){let N=!1,te=null,ce=null,le=null;return{setTest:function(ae){ae?_e(2929):ve(2929)},setMask:function(ae){te!==ae&&!N&&(t.depthMask(ae),te=ae)},setFunc:function(ae){if(ce!==ae){if(ae)switch(ae){case Sh:t.depthFunc(512);break;case Th:t.depthFunc(519);break;case Eh:t.depthFunc(513);break;case Vo:t.depthFunc(515);break;case Ah:t.depthFunc(514);break;case Lh:t.depthFunc(518);break;case Rh:t.depthFunc(516);break;case Ch:t.depthFunc(517);break;default:t.depthFunc(515)}else t.depthFunc(515);ce=ae}},setLocked:function(ae){N=ae},setClear:function(ae){le!==ae&&(t.clearDepth(ae),le=ae)},reset:function(){N=!1,te=null,ce=null,le=null}}}function o(){let N=!1,te=null,ce=null,le=null,ae=null,xe=null,be=null,z=null,re=null;return{setTest:function(de){N||(de?_e(2960):ve(2960))},setMask:function(de){te!==de&&!N&&(t.stencilMask(de),te=de)},setFunc:function(de,we,qe){(ce!==de||le!==we||ae!==qe)&&(t.stencilFunc(de,we,qe),ce=de,le=we,ae=qe)},setOp:function(de,we,qe){(xe!==de||be!==we||z!==qe)&&(t.stencilOp(de,we,qe),xe=de,be=we,z=qe)},setLocked:function(de){N=de},setClear:function(de){re!==de&&(t.clearStencil(de),re=de)},reset:function(){N=!1,te=null,ce=null,le=null,ae=null,xe=null,be=null,z=null,re=null}}}let a=new r,c=new s,l=new o,h={},u=null,f=null,d=null,p=null,y=null,v=null,g=null,m=null,A=null,S=!1,E=null,_=null,F=null,Z=null,k=null,V=t.getParameter(35661),G=!1,$=0,j=t.getParameter(7938);j.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(j)[1]),G=$>=1):j.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),G=$>=2);let H=null,q={},J=new Ge,oe=new Ge;function he(N,te,ce){let le=new Uint8Array(4),ae=t.createTexture();t.bindTexture(N,ae),t.texParameteri(N,10241,9728),t.texParameteri(N,10240,9728);for(let xe=0;xe<ce;xe++)t.texImage2D(te+xe,0,6408,1,1,0,6408,5121,le);return ae}let fe={};fe[3553]=he(3553,3553,1),fe[34067]=he(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),_e(2929),c.setFunc(Vo),w(!1),D(Cc),_e(2884),ie(In);function _e(N){h[N]!==!0&&(t.enable(N),h[N]=!0)}function ve(N){h[N]!==!1&&(t.disable(N),h[N]=!1)}function ye(N){return u!==N?(t.useProgram(N),u=N,!0):!1}let Ce={[Ai]:32774,[dh]:32778,[ph]:32779};if(i)Ce[Fc]=32775,Ce[Bc]=32776;else{let N=e.get("EXT_blend_minmax");N!==null&&(Ce[Fc]=N.MIN_EXT,Ce[Bc]=N.MAX_EXT)}let He={[mh]:0,[gh]:1,[vh]:768,[Nc]:770,[Mh]:776,[bh]:774,[xh]:772,[yh]:769,[zc]:771,[wh]:775,[_h]:773};function ie(N,te,ce,le,ae,xe,be,z){if(N===In){f&&(ve(3042),f=!1);return}if(f||(_e(3042),f=!0),N!==fh){if(N!==d||z!==S){if((p!==Ai||g!==Ai)&&(t.blendEquation(32774),p=Ai,g=Ai),z)switch(N){case Ar:t.blendFuncSeparate(1,771,1,771);break;case Dn:t.blendFunc(1,1);break;case Dc:t.blendFuncSeparate(0,0,769,771);break;case Oc:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ar:t.blendFuncSeparate(770,771,1,771);break;case Dn:t.blendFunc(770,1);break;case Dc:t.blendFunc(0,769);break;case Oc:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}y=null,v=null,m=null,A=null,d=N,S=z}return}ae=ae||te,xe=xe||ce,be=be||le,(te!==p||ae!==g)&&(t.blendEquationSeparate(Ce[te],Ce[ae]),p=te,g=ae),(ce!==y||le!==v||xe!==m||be!==A)&&(t.blendFuncSeparate(He[ce],He[le],He[xe],He[be]),y=ce,v=le,m=xe,A=be),d=N,S=null}function T(N,te){N.side===pt?ve(2884):_e(2884);let ce=N.side===nt;te&&(ce=!ce),w(ce),N.blending===Ar&&N.transparent===!1?ie(In):ie(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),c.setFunc(N.depthFunc),c.setTest(N.depthTest),c.setMask(N.depthWrite),a.setMask(N.colorWrite);let le=N.stencilWrite;l.setTest(le),le&&(l.setMask(N.stencilWriteMask),l.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),l.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),O(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits)}function w(N){E!==N&&(N?t.frontFace(2304):t.frontFace(2305),E=N)}function D(N){N!==uh?(_e(2884),N!==_&&(N===Cc?t.cullFace(1029):N===hh?t.cullFace(1028):t.cullFace(1032))):ve(2884),_=N}function R(N){N!==F&&(G&&t.lineWidth(N),F=N)}function O(N,te,ce){N?(_e(32823),(Z!==te||k!==ce)&&(t.polygonOffset(te,ce),Z=te,k=ce)):ve(32823)}function B(N){N?_e(3089):ve(3089)}function P(N){N===void 0&&(N=33984+V-1),H!==N&&(t.activeTexture(N),H=N)}function I(N,te){H===null&&P();let ce=q[H];ce===void 0&&(ce={type:void 0,texture:void 0},q[H]=ce),(ce.type!==N||ce.texture!==te)&&(t.bindTexture(N,te||fe[N]),ce.type=N,ce.texture=te)}function U(){let N=q[H];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function X(){try{t.compressedTexImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function W(){try{t.texImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function b(){try{t.texImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function x(N){J.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),J.copy(N))}function Q(N){oe.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),oe.copy(N))}function Y(){h={},H=null,q={},u=null,f=null,d=null,p=null,y=null,v=null,g=null,m=null,A=null,S=!1,E=null,_=null,F=null,Z=null,k=null,a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:_e,disable:ve,useProgram:ye,setBlending:ie,setMaterial:T,setFlipSided:w,setCullFace:D,setLineWidth:R,setPolygonOffset:O,setScissorTest:B,activeTexture:P,bindTexture:I,unbindTexture:U,compressedTexImage2D:X,texImage2D:W,texImage3D:b,scissor:x,viewport:Q,reset:Y}}function Zg(t,e,n,i,r,s,o){let a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,h=r.maxTextureSize,u=r.maxSamples,f=new WeakMap,d,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(b,x){return p?new OffscreenCanvas(b,x):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function v(b,x,Q,Y){let N=1;if((b.width>Y||b.height>Y)&&(N=Y/Math.max(b.width,b.height)),N<1||x===!0)if(typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&b instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&b instanceof ImageBitmap){let te=x?Ee.floorPowerOfTwo:Math.floor,ce=te(N*b.width),le=te(N*b.height);d===void 0&&(d=y(ce,le));let ae=Q?y(ce,le):d;return ae.width=ce,ae.height=le,ae.getContext("2d").drawImage(b,0,0,ce,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+ce+"x"+le+")."),ae}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function g(b){return Ee.isPowerOfTwo(b.width)&&Ee.isPowerOfTwo(b.height)}function m(b){return a?!1:b.wrapS!==Tt||b.wrapT!==Tt||b.minFilter!==et&&b.minFilter!==je}function A(b,x){return b.generateMipmaps&&x&&b.minFilter!==et&&b.minFilter!==je}function S(b,x,Q,Y){t.generateMipmap(b);let N=i.get(x);N.__maxMipLevel=Math.log(Math.max(Q,Y))*Math.LOG2E}function E(b,x,Q){if(a===!1)return x;if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Y=x;return x===6403&&(Q===5126&&(Y=33326),Q===5131&&(Y=33325),Q===5121&&(Y=33321)),x===6407&&(Q===5126&&(Y=34837),Q===5131&&(Y=34843),Q===5121&&(Y=32849)),x===6408&&(Q===5126&&(Y=34836),Q===5131&&(Y=34842),Q===5121&&(Y=32856)),(Y===33325||Y===33326||Y===34842||Y===34836)&&e.get("EXT_color_buffer_float"),Y}function _(b){return b===et||b===xs||b===_s?9728:9729}function F(b){let x=b.target;x.removeEventListener("dispose",F),k(x),x.isVideoTexture&&f.delete(x),o.memory.textures--}function Z(b){let x=b.target;x.removeEventListener("dispose",Z),V(x),o.memory.textures--}function k(b){let x=i.get(b);x.__webglInit!==void 0&&(t.deleteTexture(x.__webglTexture),i.remove(b))}function V(b){let x=i.get(b),Q=i.get(b.texture);if(!!b){if(Q.__webglTexture!==void 0&&t.deleteTexture(Q.__webglTexture),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++)t.deleteFramebuffer(x.__webglFramebuffer[Y]),x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[Y]);else t.deleteFramebuffer(x.__webglFramebuffer),x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer&&t.deleteRenderbuffer(x.__webglColorRenderbuffer),x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer);i.remove(b.texture),i.remove(b)}}let G=0;function $(){G=0}function j(){let b=G;return b>=c&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+c),G+=1,b}function H(b,x){let Q=i.get(b);if(b.isVideoTexture&&P(b),b.version>0&&Q.__version!==b.version){let Y=b.image;if(Y===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(Q,b,x);return}}n.activeTexture(33984+x),n.bindTexture(3553,Q.__webglTexture)}function q(b,x){let Q=i.get(b);if(b.version>0&&Q.__version!==b.version){ye(Q,b,x);return}n.activeTexture(33984+x),n.bindTexture(35866,Q.__webglTexture)}function J(b,x){let Q=i.get(b);if(b.version>0&&Q.__version!==b.version){ye(Q,b,x);return}n.activeTexture(33984+x),n.bindTexture(32879,Q.__webglTexture)}function oe(b,x){let Q=i.get(b);if(b.version>0&&Q.__version!==b.version){Ce(Q,b,x);return}n.activeTexture(33984+x),n.bindTexture(34067,Q.__webglTexture)}let he={[ri]:10497,[Tt]:33071,[Lr]:33648},fe={[et]:9728,[xs]:9984,[_s]:9986,[je]:9729,[Yo]:9985,[si]:9987};function _e(b,x,Q){Q?(t.texParameteri(b,10242,he[x.wrapS]),t.texParameteri(b,10243,he[x.wrapT]),(b===32879||b===35866)&&t.texParameteri(b,32882,he[x.wrapR]),t.texParameteri(b,10240,fe[x.magFilter]),t.texParameteri(b,10241,fe[x.minFilter])):(t.texParameteri(b,10242,33071),t.texParameteri(b,10243,33071),(b===32879||b===35866)&&t.texParameteri(b,32882,33071),(x.wrapS!==Tt||x.wrapT!==Tt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(b,10240,_(x.magFilter)),t.texParameteri(b,10241,_(x.minFilter)),x.minFilter!==et&&x.minFilter!==je&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));let Y=e.get("EXT_texture_filter_anisotropic");if(Y){if(x.type===On&&e.get("OES_texture_float_linear")===null||x.type===Ms&&(a||e.get("OES_texture_half_float_linear"))===null)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(t.texParameterf(b,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function ve(b,x){b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",F),b.__webglTexture=t.createTexture(),o.memory.textures++)}function ye(b,x,Q){let Y=3553;x.isDataTexture2DArray&&(Y=35866),x.isDataTexture3D&&(Y=32879),ve(b,x),n.activeTexture(33984+Q),n.bindTexture(Y,b.__webglTexture),t.pixelStorei(37440,x.flipY),t.pixelStorei(37441,x.premultiplyAlpha),t.pixelStorei(3317,x.unpackAlignment);let N=m(x)&&g(x.image)===!1,te=v(x.image,N,!1,h),ce=g(te)||a,le=s.convert(x.format),ae=s.convert(x.type),xe=E(x.internalFormat,le,ae);_e(Y,x,ce);let be,z=x.mipmaps;if(x.isDepthTexture)xe=6402,a?x.type===On?xe=36012:x.type===ws?xe=33190:x.type===Cr?xe=35056:xe=33189:x.type===On&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Ri&&xe===6402&&x.type!==bs&&x.type!==ws&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=bs,ae=s.convert(x.type)),x.format===Pr&&xe===6402&&(xe=34041,x.type!==Cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Cr,ae=s.convert(x.type))),n.texImage2D(3553,0,xe,te.width,te.height,0,le,ae,null);else if(x.isDataTexture)if(z.length>0&&ce){for(let re=0,de=z.length;re<de;re++)be=z[re],n.texImage2D(3553,re,xe,be.width,be.height,0,le,ae,be.data);x.generateMipmaps=!1,b.__maxMipLevel=z.length-1}else n.texImage2D(3553,0,xe,te.width,te.height,0,le,ae,te.data),b.__maxMipLevel=0;else if(x.isCompressedTexture){for(let re=0,de=z.length;re<de;re++)be=z[re],x.format!==zt&&x.format!==Vt?le!==null?n.compressedTexImage2D(3553,re,xe,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):n.texImage2D(3553,re,xe,be.width,be.height,0,le,ae,be.data);b.__maxMipLevel=z.length-1}else if(x.isDataTexture2DArray)n.texImage3D(35866,0,xe,te.width,te.height,te.depth,0,le,ae,te.data),b.__maxMipLevel=0;else if(x.isDataTexture3D)n.texImage3D(32879,0,xe,te.width,te.height,te.depth,0,le,ae,te.data),b.__maxMipLevel=0;else if(z.length>0&&ce){for(let re=0,de=z.length;re<de;re++)be=z[re],n.texImage2D(3553,re,xe,le,ae,be);x.generateMipmaps=!1,b.__maxMipLevel=z.length-1}else n.texImage2D(3553,0,xe,le,ae,te),b.__maxMipLevel=0;A(x,ce)&&S(Y,x,te.width,te.height),b.__version=x.version,x.onUpdate&&x.onUpdate(x)}function Ce(b,x,Q){if(x.image.length!==6)return;ve(b,x),n.activeTexture(33984+Q),n.bindTexture(34067,b.__webglTexture),t.pixelStorei(37440,x.flipY),t.pixelStorei(37441,x.premultiplyAlpha),t.pixelStorei(3317,x.unpackAlignment);let Y=x&&(x.isCompressedTexture||x.image[0].isCompressedTexture),N=x.image[0]&&x.image[0].isDataTexture,te=[];for(let re=0;re<6;re++)!Y&&!N?te[re]=v(x.image[re],!1,!0,l):te[re]=N?x.image[re].image:x.image[re];let ce=te[0],le=g(ce)||a,ae=s.convert(x.format),xe=s.convert(x.type),be=E(x.internalFormat,ae,xe);_e(34067,x,le);let z;if(Y){for(let re=0;re<6;re++){z=te[re].mipmaps;for(let de=0;de<z.length;de++){let we=z[de];x.format!==zt&&x.format!==Vt?ae!==null?n.compressedTexImage2D(34069+re,de,be,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):n.texImage2D(34069+re,de,be,we.width,we.height,0,ae,xe,we.data)}}b.__maxMipLevel=z.length-1}else{z=x.mipmaps;for(let re=0;re<6;re++)if(N){n.texImage2D(34069+re,0,be,te[re].width,te[re].height,0,ae,xe,te[re].data);for(let de=0;de<z.length;de++){let qe=z[de].image[re].image;n.texImage2D(34069+re,de+1,be,qe.width,qe.height,0,ae,xe,qe.data)}}else{n.texImage2D(34069+re,0,be,ae,xe,te[re]);for(let de=0;de<z.length;de++){let we=z[de];n.texImage2D(34069+re,de+1,be,ae,xe,we.image[re])}}b.__maxMipLevel=z.length}A(x,le)&&S(34067,x,ce.width,ce.height),b.__version=x.version,x.onUpdate&&x.onUpdate(x)}function He(b,x,Q,Y){let N=s.convert(x.texture.format),te=s.convert(x.texture.type),ce=E(x.texture.internalFormat,N,te);n.texImage2D(Y,0,ce,x.width,x.height,0,N,te,null),t.bindFramebuffer(36160,b),t.framebufferTexture2D(36160,Q,Y,i.get(x.texture).__webglTexture,0),t.bindFramebuffer(36160,null)}function ie(b,x,Q){if(t.bindRenderbuffer(36161,b),x.depthBuffer&&!x.stencilBuffer){let Y=33189;if(Q){let N=x.depthTexture;N&&N.isDepthTexture&&(N.type===On?Y=36012:N.type===ws&&(Y=33190));let te=B(x);t.renderbufferStorageMultisample(36161,te,Y,x.width,x.height)}else t.renderbufferStorage(36161,Y,x.width,x.height);t.framebufferRenderbuffer(36160,36096,36161,b)}else if(x.depthBuffer&&x.stencilBuffer){if(Q){let Y=B(x);t.renderbufferStorageMultisample(36161,Y,35056,x.width,x.height)}else t.renderbufferStorage(36161,34041,x.width,x.height);t.framebufferRenderbuffer(36160,33306,36161,b)}else{let Y=s.convert(x.texture.format),N=s.convert(x.texture.type),te=E(x.texture.internalFormat,Y,N);if(Q){let ce=B(x);t.renderbufferStorageMultisample(36161,ce,te,x.width,x.height)}else t.renderbufferStorage(36161,te,x.width,x.height)}t.bindRenderbuffer(36161,null)}function T(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H(x.depthTexture,0);let Y=i.get(x.depthTexture).__webglTexture;if(x.depthTexture.format===Ri)t.framebufferTexture2D(36160,36096,3553,Y,0);else if(x.depthTexture.format===Pr)t.framebufferTexture2D(36160,33306,3553,Y,0);else throw new Error("Unknown depthTexture format")}function w(b){let x=i.get(b),Q=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");T(x.__webglFramebuffer,b)}else if(Q){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)t.bindFramebuffer(36160,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]=t.createRenderbuffer(),ie(x.__webglDepthbuffer[Y],b,!1)}else t.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=t.createRenderbuffer(),ie(x.__webglDepthbuffer,b,!1);t.bindFramebuffer(36160,null)}function D(b){let x=i.get(b),Q=i.get(b.texture);b.addEventListener("dispose",Z),Q.__webglTexture=t.createTexture(),o.memory.textures++;let Y=b.isWebGLCubeRenderTarget===!0,N=b.isWebGLMultisampleRenderTarget===!0,te=g(b)||a;if(a&&b.texture.format===Vt&&(b.texture.type===On||b.texture.type===Ms)&&(b.texture.format=zt,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),Y){x.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)x.__webglFramebuffer[ce]=t.createFramebuffer()}else if(x.__webglFramebuffer=t.createFramebuffer(),N)if(a){x.__webglMultisampledFramebuffer=t.createFramebuffer(),x.__webglColorRenderbuffer=t.createRenderbuffer(),t.bindRenderbuffer(36161,x.__webglColorRenderbuffer);let ce=s.convert(b.texture.format),le=s.convert(b.texture.type),ae=E(b.texture.internalFormat,ce,le),xe=B(b);t.renderbufferStorageMultisample(36161,xe,ae,b.width,b.height),t.bindFramebuffer(36160,x.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064,36161,x.__webglColorRenderbuffer),t.bindRenderbuffer(36161,null),b.depthBuffer&&(x.__webglDepthRenderbuffer=t.createRenderbuffer(),ie(x.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(Y){n.bindTexture(34067,Q.__webglTexture),_e(34067,b.texture,te);for(let ce=0;ce<6;ce++)He(x.__webglFramebuffer[ce],b,36064,34069+ce);A(b.texture,te)&&S(34067,b.texture,b.width,b.height),n.bindTexture(34067,null)}else n.bindTexture(3553,Q.__webglTexture),_e(3553,b.texture,te),He(x.__webglFramebuffer,b,36064,3553),A(b.texture,te)&&S(3553,b.texture,b.width,b.height),n.bindTexture(3553,null);b.depthBuffer&&w(b)}function R(b){let x=b.texture,Q=g(b)||a;if(A(x,Q)){let Y=b.isWebGLCubeRenderTarget?34067:3553,N=i.get(x).__webglTexture;n.bindTexture(Y,N),S(Y,x,b.width,b.height),n.bindTexture(Y,null)}}function O(b){if(b.isWebGLMultisampleRenderTarget)if(a){let x=i.get(b);t.bindFramebuffer(36008,x.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,x.__webglFramebuffer);let Q=b.width,Y=b.height,N=16384;b.depthBuffer&&(N|=256),b.stencilBuffer&&(N|=1024),t.blitFramebuffer(0,0,Q,Y,0,0,Q,Y,N,9728),t.bindFramebuffer(36160,x.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function B(b){return a&&b.isWebGLMultisampleRenderTarget?Math.min(u,b.samples):0}function P(b){let x=o.render.frame;f.get(b)!==x&&(f.set(b,x),b.update())}let I=!1,U=!1;function X(b,x){b&&b.isWebGLRenderTarget&&(I===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),I=!0),b=b.texture),H(b,x)}function W(b,x){b&&b.isWebGLCubeRenderTarget&&(U===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),U=!0),b=b.texture),oe(b,x)}this.allocateTextureUnit=j,this.resetTextureUnits=$,this.setTexture2D=H,this.setTexture2DArray=q,this.setTexture3D=J,this.setTextureCube=oe,this.setupRenderTarget=D,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=O,this.safeSetTexture2D=X,this.safeSetTextureCube=W}function Jg(t,e,n){let i=n.isWebGL2;function r(s){let o;if(s===Rr)return 5121;if(s===Hh)return 32819;if(s===Gh)return 32820;if(s===kh)return 33635;if(s===Nh)return 5120;if(s===zh)return 5122;if(s===bs)return 5123;if(s===Uh)return 5124;if(s===ws)return 5125;if(s===On)return 5126;if(s===Ms)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Vh)return 6406;if(s===Vt)return 6407;if(s===zt)return 6408;if(s===Wh)return 6409;if(s===jh)return 6410;if(s===Ri)return 6402;if(s===Pr)return 34041;if(s===Xh)return 6403;if(s===Yh)return 36244;if(s===Zh)return 33319;if(s===Jh)return 33320;if(s===Kh)return 36248;if(s===$h)return 36249;if(s===kc||s===Vc||s===Wc||s===jc)if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===kc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Vc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Wc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===jc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===qc||s===Xc||s===Yc||s===Zc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===qc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Xc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Yc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Zc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Qh)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===Jc||s===Kc)&&(o=e.get("WEBGL_compressed_texture_etc"),o!==null)){if(s===Jc)return o.COMPRESSED_RGB8_ETC2;if(s===Kc)return o.COMPRESSED_RGBA8_ETC2_EAC}if(s===ef||s===tf||s===nf||s===rf||s===sf||s===of||s===af||s===cf||s===lf||s===uf||s===hf||s===ff||s===df||s===pf||s===gf||s===vf||s===yf||s===xf||s===_f||s===bf||s===wf||s===Mf||s===Sf||s===Tf||s===Ef||s===Af||s===Lf||s===Rf)return o=e.get("WEBGL_compressed_texture_astc"),o!==null?s:null;if(s===mf)return o=e.get("EXT_texture_compression_bptc"),o!==null?s:null;if(s===Cr)return i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:r}}function Ia(t=[]){$e.call(this),this.cameras=t}Ia.prototype=Object.assign(Object.create($e.prototype),{constructor:Ia,isArrayCamera:!0});function bt(){ge.call(this),this.type="Group"}bt.prototype=Object.assign(Object.create(ge.prototype),{constructor:bt,isGroup:!0});function Vr(){this._targetRay=null,this._grip=null,this._hand=null}Object.assign(Vr.prototype,{constructor:Vr,getHandSpace:function(){return this._hand===null&&(this._hand=new bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand},getTargetRaySpace:function(){return this._targetRay===null&&(this._targetRay=new bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1),this._targetRay},getGripSpace:function(){return this._grip===null&&(this._grip=new bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1),this._grip},dispatchEvent:function(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this},disconnect:function(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this},update:function(t,e,n){let i=null,r=null,s=null,o=this._targetRay,a=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred")if(c&&t.hand){s=!0;for(let p of t.hand.values()){let y=e.getJointPose(p,n);if(c.joints[p.jointName]===void 0){let g=new bt;g.matrixAutoUpdate=!1,g.visible=!1,c.joints[p.jointName]=g,c.add(g)}let v=c.joints[p.jointName];y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=y.radius),v.visible=y!==null}let l=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=l.position.distanceTo(h.position),f=.02,d=.005;c.inputState.pinching&&u>f+d?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-d&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else o!==null&&(i=e.getPose(t.targetRaySpace,n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale))),a!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale)));return o!==null&&(o.visible=i!==null),a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),this}});function Gl(t,e){let n=this,i=null,r=1,s=null,o="local-floor",a=null,c=[],l=new Map,h=new $e;h.layers.enable(1),h.viewport=new Ge;let u=new $e;u.layers.enable(2),u.viewport=new Ge;let f=[h,u],d=new Ia;d.layers.enable(1),d.layers.enable(2);let p=null,y=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let G=c[V];return G===void 0&&(G=new Vr,c[V]=G),G.getTargetRaySpace()},this.getControllerGrip=function(V){let G=c[V];return G===void 0&&(G=new Vr,c[V]=G),G.getGripSpace()},this.getHand=function(V){let G=c[V];return G===void 0&&(G=new Vr,c[V]=G),G.getHandSpace()};function v(V){let G=l.get(V.inputSource);G&&G.dispatchEvent({type:V.type,data:V.inputSource})}function g(){l.forEach(function(V,G){V.disconnect(G)}),l.clear(),p=null,y=null,t.setFramebuffer(null),t.setRenderTarget(t.getRenderTarget()),k.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return s},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){i.addEventListener("select",v),i.addEventListener("selectstart",v),i.addEventListener("selectend",v),i.addEventListener("squeeze",v),i.addEventListener("squeezestart",v),i.addEventListener("squeezeend",v),i.addEventListener("end",g),i.addEventListener("inputsourceschange",m);let G=e.getContextAttributes();G.xrCompatible!==!0&&await e.makeXRCompatible();let $={antialias:G.antialias,alpha:G.alpha,depth:G.depth,stencil:G.stencil,framebufferScaleFactor:r},j=new XRWebGLLayer(i,e,$);i.updateRenderState({baseLayer:j}),s=await i.requestReferenceSpace(o),k.setContext(i),k.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function m(V){let G=i.inputSources;for(let $=0;$<c.length;$++)l.set(G[$],c[$]);for(let $=0;$<V.removed.length;$++){let j=V.removed[$],H=l.get(j);H&&(H.dispatchEvent({type:"disconnected",data:j}),l.delete(j))}for(let $=0;$<V.added.length;$++){let j=V.added[$],H=l.get(j);H&&H.dispatchEvent({type:"connected",data:j})}}let A=new L,S=new L;function E(V,G,$){A.setFromMatrixPosition(G.matrixWorld),S.setFromMatrixPosition($.matrixWorld);let j=A.distanceTo(S),H=G.projectionMatrix.elements,q=$.projectionMatrix.elements,J=H[14]/(H[10]-1),oe=H[14]/(H[10]+1),he=(H[9]+1)/H[5],fe=(H[9]-1)/H[5],_e=(H[8]-1)/H[0],ve=(q[8]+1)/q[0],ye=J*_e,Ce=J*ve,He=j/(-_e+ve),ie=He*-_e;G.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(ie),V.translateZ(He),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();let T=J+He,w=oe+He,D=ye-ie,R=Ce+(j-ie),O=he*oe/w*T,B=fe*oe/w*T;V.projectionMatrix.makePerspective(D,R,O,B,T,w)}function _(V,G){G===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(G.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.getCamera=function(V){d.near=u.near=h.near=V.near,d.far=u.far=h.far=V.far,(p!==d.near||y!==d.far)&&(i.updateRenderState({depthNear:d.near,depthFar:d.far}),p=d.near,y=d.far);let G=V.parent,$=d.cameras;_(d,G);for(let H=0;H<$.length;H++)_($[H],G);V.matrixWorld.copy(d.matrixWorld),V.matrix.copy(d.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale);let j=V.children;for(let H=0,q=j.length;H<q;H++)j[H].updateMatrixWorld(!0);return $.length===2?E(d,h,u):d.projectionMatrix.copy(h.projectionMatrix),d};let F=null;function Z(V,G){if(a=G.getViewerPose(s),a!==null){let j=a.views,H=i.renderState.baseLayer;t.setFramebuffer(H.framebuffer);let q=!1;j.length!==d.cameras.length&&(d.cameras.length=0,q=!0);for(let J=0;J<j.length;J++){let oe=j[J],he=H.getViewport(oe),fe=f[J];fe.matrix.fromArray(oe.transform.matrix),fe.projectionMatrix.fromArray(oe.projectionMatrix),fe.viewport.set(he.x,he.y,he.width,he.height),J===0&&d.matrix.copy(fe.matrix),q===!0&&d.cameras.push(fe)}}let $=i.inputSources;for(let j=0;j<c.length;j++){let H=c[j],q=$[j];H.update(q,G,s)}F&&F(V,G)}let k=new yl;k.setAnimationLoop(Z),this.setAnimationLoop=function(V){F=V},this.dispose=function(){}}Object.assign(Gl.prototype,jt.prototype);function Kg(t){function e(g,m){g.fogColor.value.copy(m.color),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function n(g,m,A,S){m.isMeshBasicMaterial?i(g,m):m.isMeshLambertMaterial?(i(g,m),c(g,m)):m.isMeshToonMaterial?(i(g,m),h(g,m)):m.isMeshPhongMaterial?(i(g,m),l(g,m)):m.isMeshStandardMaterial?(i(g,m),m.isMeshPhysicalMaterial?f(g,m):u(g,m)):m.isMeshMatcapMaterial?(i(g,m),d(g,m)):m.isMeshDepthMaterial?(i(g,m),p(g,m)):m.isMeshDistanceMaterial?(i(g,m),y(g,m)):m.isMeshNormalMaterial?(i(g,m),v(g,m)):m.isLineBasicMaterial?(r(g,m),m.isLineDashedMaterial&&s(g,m)):m.isPointsMaterial?o(g,m,A,S):m.isSpriteMaterial?a(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap),m.specularMap&&(g.specularMap.value=m.specularMap);let A=t.get(m).envMap;if(A){g.envMap.value=A,g.flipEnvMap.value=A.isCubeTexture&&A._needsFlipEnvMap?-1:1,g.reflectivity.value=m.reflectivity,g.refractionRatio.value=m.refractionRatio;let _=t.get(A).__maxMipLevel;_!==void 0&&(g.maxMipLevel.value=_)}m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity);let S;m.map?S=m.map:m.specularMap?S=m.specularMap:m.displacementMap?S=m.displacementMap:m.normalMap?S=m.normalMap:m.bumpMap?S=m.bumpMap:m.roughnessMap?S=m.roughnessMap:m.metalnessMap?S=m.metalnessMap:m.alphaMap?S=m.alphaMap:m.emissiveMap?S=m.emissiveMap:m.clearcoatMap?S=m.clearcoatMap:m.clearcoatNormalMap?S=m.clearcoatNormalMap:m.clearcoatRoughnessMap&&(S=m.clearcoatRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),g.uvTransform.value.copy(S.matrix));let E;m.aoMap?E=m.aoMap:m.lightMap&&(E=m.lightMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),g.uv2Transform.value.copy(E.matrix))}function r(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity}function s(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function o(g,m,A,S){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*A,g.scale.value=S*.5,m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap);let E;m.map?E=m.map:m.alphaMap&&(E=m.alphaMap),E!==void 0&&(E.matrixAutoUpdate===!0&&E.updateMatrix(),g.uvTransform.value.copy(E.matrix))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap);let A;m.map?A=m.map:m.alphaMap&&(A=m.alphaMap),A!==void 0&&(A.matrixAutoUpdate===!0&&A.updateMatrix(),g.uvTransform.value.copy(A.matrix))}function c(g,m){m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap)}function l(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===nt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===nt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===nt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===nt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function u(g,m){g.roughness.value=m.roughness,g.metalness.value=m.metalness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===nt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===nt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),t.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m){u(g,m),g.reflectivity.value=m.reflectivity,g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.sheen&&g.sheen.value.copy(m.sheen),m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),g.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===nt&&g.clearcoatNormalScale.value.negate()),g.transmission.value=m.transmission,m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap)}function d(g,m){m.matcap&&(g.matcap.value=m.matcap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===nt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===nt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function p(g,m){m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function y(g,m){m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),g.referencePosition.value.copy(m.referencePosition),g.nearDistance.value=m.nearDistance,g.farDistance.value=m.farDistance}function v(g,m){m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===nt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===nt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function $g(){let t=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return t.style.display="block",t}function Qi(t){t=t||{};let e=t.canvas!==void 0?t.canvas:$g(),n=t.context!==void 0?t.context:null,i=t.alpha!==void 0?t.alpha:!1,r=t.depth!==void 0?t.depth:!0,s=t.stencil!==void 0?t.stencil:!0,o=t.antialias!==void 0?t.antialias:!1,a=t.premultipliedAlpha!==void 0?t.premultipliedAlpha:!0,c=t.preserveDrawingBuffer!==void 0?t.preserveDrawingBuffer:!1,l=t.powerPreference!==void 0?t.powerPreference:"default",h=t.failIfMajorPerformanceCaveat!==void 0?t.failIfMajorPerformanceCaveat:!1,u=null,f=null,d=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=yt,this.physicallyCorrectLights=!1,this.toneMapping=Li,this.toneMappingExposure=1,this.maxMorphTargets=8,this.maxMorphNormals=4;let p=this,y=!1,v=null,g=0,m=0,A=null,S=null,E=-1,_=null,F=new Ge,Z=new Ge,k=null,V=e.width,G=e.height,$=1,j=null,H=null,q=new Ge(0,0,V,G),J=new Ge(0,0,V,G),oe=!1,he=new zr,fe=!1,_e=!1,ve=new Re,ye=new L,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function He(){return A===null?$:1}let ie=n;function T(C,ee){for(let K=0;K<C.length;K++){let ne=C[K],me=e.getContext(ne,ee);if(me!==null)return me}return null}try{let C={alpha:i,depth:r,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:h};if(e.addEventListener("webglcontextlost",we,!1),e.addEventListener("webglcontextrestored",qe,!1),ie===null){let ee=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&ee.shift(),ie=T(ee,C),ie===null)throw T(ee)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}ie.getShaderPrecisionFormat===void 0&&(ie.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let w,D,R,O,B,P,I,U,X,W,b,x,Q,Y,N,te,ce,le,ae,xe,be;function z(){w=new Rm(ie),D=new Em(ie,w,t),w.init(D),xe=new Jg(ie,w,D),R=new Yg(ie,w,D),R.scissor(Z.copy(J).multiplyScalar($).floor()),R.viewport(F.copy(q).multiplyScalar($).floor()),O=new Im(ie),B=new Bg,P=new Zg(ie,w,R,B,D,xe,O),I=new Lm(p),U=new td(ie,D),be=new Sm(ie,w,U,D),X=new Cm(ie,U,O,be),W=new Bm(ie,X,U,O),ce=new Fm(ie),N=new Am(B),b=new Fg(p,I,w,D,be,N),x=new Kg(B),Q=new Ug(B),Y=new jg(w,D),te=new Mm(p,I,R,W,a),le=new Tm(ie,w,O,D),ae=new Pm(ie,w,O,D),O.programs=b.programs,p.capabilities=D,p.extensions=w,p.properties=B,p.renderLists=Q,p.state=R,p.info=O}z();let re=new Gl(p,ie);this.xr=re;let de=new Hl(p,W,D.maxTextureSize);this.shadowMap=de,this.getContext=function(){return ie},this.getContextAttributes=function(){return ie.getContextAttributes()},this.forceContextLoss=function(){let C=w.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=w.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(C){C!==void 0&&($=C,this.setSize(V,G,!1))},this.getSize=function(C){return C===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),C=new se),C.set(V,G)},this.setSize=function(C,ee,K){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=C,G=ee,e.width=Math.floor(C*$),e.height=Math.floor(ee*$),K!==!1&&(e.style.width=C+"px",e.style.height=ee+"px"),this.setViewport(0,0,C,ee)},this.getDrawingBufferSize=function(C){return C===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),C=new se),C.set(V*$,G*$).floor()},this.setDrawingBufferSize=function(C,ee,K){V=C,G=ee,$=K,e.width=Math.floor(C*K),e.height=Math.floor(ee*K),this.setViewport(0,0,C,ee)},this.getCurrentViewport=function(C){return C===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),C=new Ge),C.copy(F)},this.getViewport=function(C){return C.copy(q)},this.setViewport=function(C,ee,K,ne){C.isVector4?q.set(C.x,C.y,C.z,C.w):q.set(C,ee,K,ne),R.viewport(F.copy(q).multiplyScalar($).floor())},this.getScissor=function(C){return C.copy(J)},this.setScissor=function(C,ee,K,ne){C.isVector4?J.set(C.x,C.y,C.z,C.w):J.set(C,ee,K,ne),R.scissor(Z.copy(J).multiplyScalar($).floor())},this.getScissorTest=function(){return oe},this.setScissorTest=function(C){R.setScissorTest(oe=C)},this.setOpaqueSort=function(C){j=C},this.setTransparentSort=function(C){H=C},this.getClearColor=function(C){return C===void 0&&(console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"),C=new ue),C.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(C,ee,K){let ne=0;(C===void 0||C)&&(ne|=16384),(ee===void 0||ee)&&(ne|=256),(K===void 0||K)&&(ne|=1024),ie.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",we,!1),e.removeEventListener("webglcontextrestored",qe,!1),Q.dispose(),Y.dispose(),B.dispose(),I.dispose(),W.dispose(),be.dispose(),re.dispose(),Kt.stop()};function we(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function qe(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1,z()}function ft(C){let ee=C.target;ee.removeEventListener("dispose",ft),Jt(ee)}function Jt(C){dn(C),B.remove(C)}function dn(C){let ee=B.get(C).program;ee!==void 0&&b.releaseProgram(ee)}function vt(C,ee){C.render(function(K){p.renderBufferImmediate(K,ee)})}this.renderBufferImmediate=function(C,ee){be.initAttributes();let K=B.get(C);C.hasPositions&&!K.position&&(K.position=ie.createBuffer()),C.hasNormals&&!K.normal&&(K.normal=ie.createBuffer()),C.hasUvs&&!K.uv&&(K.uv=ie.createBuffer()),C.hasColors&&!K.color&&(K.color=ie.createBuffer());let ne=ee.getAttributes();C.hasPositions&&(ie.bindBuffer(34962,K.position),ie.bufferData(34962,C.positionArray,35048),be.enableAttribute(ne.position),ie.vertexAttribPointer(ne.position,3,5126,!1,0,0)),C.hasNormals&&(ie.bindBuffer(34962,K.normal),ie.bufferData(34962,C.normalArray,35048),be.enableAttribute(ne.normal),ie.vertexAttribPointer(ne.normal,3,5126,!1,0,0)),C.hasUvs&&(ie.bindBuffer(34962,K.uv),ie.bufferData(34962,C.uvArray,35048),be.enableAttribute(ne.uv),ie.vertexAttribPointer(ne.uv,2,5126,!1,0,0)),C.hasColors&&(ie.bindBuffer(34962,K.color),ie.bufferData(34962,C.colorArray,35048),be.enableAttribute(ne.color),ie.vertexAttribPointer(ne.color,3,5126,!1,0,0)),be.disableUnusedAttributes(),ie.drawArrays(4,0,C.count),C.count=0},this.renderBufferDirect=function(C,ee,K,ne,me,Ne){ee===null&&(ee=Ce);let Oe=me.isMesh&&me.matrixWorld.determinant()<0,ze=Si(C,ee,ne,me);R.setMaterial(ne,Oe);let Fe=K.index,st=K.attributes.position;if(Fe===null){if(st===void 0||st.count===0)return}else if(Fe.count===0)return;let it=1;ne.wireframe===!0&&(Fe=X.getWireframeAttribute(K),it=2),(ne.morphTargets||ne.morphNormals)&&ce.update(me,K,ne,ze),be.setup(me,ne,ze,K,Fe);let De,Ve=le;Fe!==null&&(De=U.get(Fe),Ve=ae,Ve.setIndex(De));let pn=Fe!==null?Fe.count:st.count,Ke=K.drawRange.start*it,ii=K.drawRange.count*it,lt=Ne!==null?Ne.start*it:0,Fo=Ne!==null?Ne.count*it:1/0,At=Math.max(Ke,lt),Mr=Math.min(pn,Ke+ii,lt+Fo)-1,Ti=Math.max(0,Mr-At+1);if(Ti!==0){if(me.isMesh)ne.wireframe===!0?(R.setLineWidth(ne.wireframeLinewidth*He()),Ve.setMode(1)):Ve.setMode(4);else if(me.isLine){let Sr=ne.linewidth;Sr===void 0&&(Sr=1),R.setLineWidth(Sr*He()),me.isLineSegments?Ve.setMode(1):me.isLineLoop?Ve.setMode(2):Ve.setMode(3)}else me.isPoints?Ve.setMode(0):me.isSprite&&Ve.setMode(4);if(me.isInstancedMesh)Ve.renderInstances(At,Ti,me.count);else if(K.isInstancedBufferGeometry){let Sr=Math.min(K.instanceCount,K._maxInstanceCount);Ve.renderInstances(At,Ti,Sr)}else Ve.render(At,Ti)}},this.compile=function(C,ee){f=Y.get(C),f.init(),C.traverseVisible(function(ne){ne.isLight&&ne.layers.test(ee.layers)&&(f.pushLight(ne),ne.castShadow&&f.pushShadow(ne))}),f.setupLights();let K=new WeakMap;C.traverse(function(ne){let me=ne.material;if(me)if(Array.isArray(me))for(let Ne=0;Ne<me.length;Ne++){let Oe=me[Ne];K.has(Oe)===!1&&(ct(Oe,C,ne),K.set(Oe))}else K.has(me)===!1&&(ct(me,C,ne),K.set(me))})};let St=null;function Do(C){re.isPresenting||St&&St(C)}let Kt=new yl;Kt.setAnimationLoop(Do),typeof window!="undefined"&&Kt.setContext(window),this.setAnimationLoop=function(C){St=C,re.setAnimationLoop(C),C===null?Kt.stop():Kt.start()},this.render=function(C,ee){let K,ne;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),K=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),ne=arguments[3]),ee!==void 0&&ee.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;be.resetDefaultState(),E=-1,_=null,C.autoUpdate===!0&&C.updateMatrixWorld(),ee.parent===null&&ee.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(ee=re.getCamera(ee)),C.isScene===!0&&C.onBeforeRender(p,C,ee,K||A),f=Y.get(C,d.length),f.init(),d.push(f),ve.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),he.setFromProjectionMatrix(ve),_e=this.localClippingEnabled,fe=N.init(this.clippingPlanes,_e,ee),u=Q.get(C,ee),u.init(),Nt(C,ee,0,p.sortObjects),u.finish(),p.sortObjects===!0&&u.sort(j,H),fe===!0&&N.beginShadows();let me=f.state.shadowsArray;de.render(me,C,ee),f.setupLights(),f.setupLightsView(ee),fe===!0&&N.endShadows(),this.info.autoReset===!0&&this.info.reset(),K!==void 0&&this.setRenderTarget(K),te.render(u,C,ee,ne);let Ne=u.opaque,Oe=u.transparent;Ne.length>0&&Cn(Ne,C,ee),Oe.length>0&&Cn(Oe,C,ee),C.isScene===!0&&C.onAfterRender(p,C,ee),A!==null&&(P.updateRenderTargetMipmap(A),P.updateMultisampleRenderTarget(A)),R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1),d.pop(),d.length>0?f=d[d.length-1]:f=null,u=null};function Nt(C,ee,K,ne){if(C.visible===!1)return;if(C.layers.test(ee.layers)){if(C.isGroup)K=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(ee);else if(C.isLight)f.pushLight(C),C.castShadow&&f.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||he.intersectsSprite(C)){ne&&ye.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ve);let Oe=W.update(C),ze=C.material;ze.visible&&u.push(C,Oe,ze,K,ye.z,null)}}else if(C.isImmediateRenderObject)ne&&ye.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ve),u.push(C,null,C.material,K,ye.z,null);else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==O.render.frame&&(C.skeleton.update(),C.skeleton.frame=O.render.frame),!C.frustumCulled||he.intersectsObject(C))){ne&&ye.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ve);let Oe=W.update(C),ze=C.material;if(Array.isArray(ze)){let Fe=Oe.groups;for(let st=0,it=Fe.length;st<it;st++){let De=Fe[st],Ve=ze[De.materialIndex];Ve&&Ve.visible&&u.push(C,Oe,Ve,K,ye.z,De)}}else ze.visible&&u.push(C,Oe,ze,K,ye.z,null)}}let Ne=C.children;for(let Oe=0,ze=Ne.length;Oe<ze;Oe++)Nt(Ne[Oe],ee,K,ne)}function Cn(C,ee,K){let ne=ee.isScene===!0?ee.overrideMaterial:null;for(let me=0,Ne=C.length;me<Ne;me++){let Oe=C[me],ze=Oe.object,Fe=Oe.geometry,st=ne===null?Oe.material:ne,it=Oe.group;if(K.isArrayCamera){let De=K.cameras;for(let Ve=0,pn=De.length;Ve<pn;Ve++){let Ke=De[Ve];ze.layers.test(Ke.layers)&&(R.viewport(F.copy(Ke.viewport)),f.setupLightsView(Ke),br(ze,ee,Ke,Fe,st,it))}}else br(ze,ee,K,Fe,st,it)}}function br(C,ee,K,ne,me,Ne){if(C.onBeforeRender(p,ee,K,ne,me,Ne),C.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),C.isImmediateRenderObject){let Oe=Si(K,ee,me,C);R.setMaterial(me),be.reset(),vt(C,Oe)}else p.renderBufferDirect(K,ee,ne,me,C,Ne);C.onAfterRender(p,ee,K,ne,me,Ne)}function ct(C,ee,K){ee.isScene!==!0&&(ee=Ce);let ne=B.get(C),me=f.state.lights,Ne=f.state.shadowsArray,Oe=me.state.version,ze=b.getParameters(C,me.state,Ne,ee,K),Fe=b.getProgramCacheKey(ze),st=ne.program,it=!0;if(ne.environment=C.isMeshStandardMaterial?ee.environment:null,ne.fog=ee.fog,ne.envMap=I.get(C.envMap||ne.environment),st===void 0)C.addEventListener("dispose",ft);else if(st.cacheKey!==Fe)dn(C);else if(ne.lightsStateVersion!==Oe)it=!1;else{if(ze.shaderID!==void 0)return;it=!1}it&&(ze.uniforms=b.getUniforms(C),C.onBeforeCompile(ze,p),st=b.acquireProgram(ze,Fe),ne.program=st,ne.uniforms=ze.uniforms,ne.outputEncoding=ze.outputEncoding);let De=ne.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ne.numClippingPlanes=N.numPlanes,ne.numIntersection=N.numIntersection,De.clippingPlanes=N.uniform),ne.needsLights=Oo(C),ne.lightsStateVersion=Oe,ne.needsLights&&(De.ambientLightColor.value=me.state.ambient,De.lightProbe.value=me.state.probe,De.directionalLights.value=me.state.directional,De.directionalLightShadows.value=me.state.directionalShadow,De.spotLights.value=me.state.spot,De.spotLightShadows.value=me.state.spotShadow,De.rectAreaLights.value=me.state.rectArea,De.ltc_1.value=me.state.rectAreaLTC1,De.ltc_2.value=me.state.rectAreaLTC2,De.pointLights.value=me.state.point,De.pointLightShadows.value=me.state.pointShadow,De.hemisphereLights.value=me.state.hemi,De.directionalShadowMap.value=me.state.directionalShadowMap,De.directionalShadowMatrix.value=me.state.directionalShadowMatrix,De.spotShadowMap.value=me.state.spotShadowMap,De.spotShadowMatrix.value=me.state.spotShadowMatrix,De.pointShadowMap.value=me.state.pointShadowMap,De.pointShadowMatrix.value=me.state.pointShadowMatrix);let Ve=ne.program.getUniforms(),pn=qn.seqWithValue(Ve.seq,De);ne.uniformsList=pn}function Si(C,ee,K,ne){ee.isScene!==!0&&(ee=Ce),P.resetTextureUnits();let me=ee.fog,Ne=K.isMeshStandardMaterial?ee.environment:null,Oe=A===null?p.outputEncoding:A.texture.encoding,ze=I.get(K.envMap||Ne),Fe=B.get(K),st=f.state.lights;if(fe===!0&&(_e===!0||C!==_)){let lt=C===_&&K.id===E;N.setState(K,C,lt)}K.version===Fe.__version?(K.fog&&Fe.fog!==me||Fe.environment!==Ne||Fe.needsLights&&Fe.lightsStateVersion!==st.state.version||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==N.numPlanes||Fe.numIntersection!==N.numIntersection)||Fe.outputEncoding!==Oe||Fe.envMap!==ze)&&ct(K,ee,ne):(ct(K,ee,ne),Fe.__version=K.version);let it=!1,De=!1,Ve=!1,pn=Fe.program,Ke=pn.getUniforms(),ii=Fe.uniforms;if(R.useProgram(pn.program)&&(it=!0,De=!0,Ve=!0),K.id!==E&&(E=K.id,De=!0),it||_!==C){if(Ke.setValue(ie,"projectionMatrix",C.projectionMatrix),D.logarithmicDepthBuffer&&Ke.setValue(ie,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),_!==C&&(_=C,De=!0,Ve=!0),K.isShaderMaterial||K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshStandardMaterial||K.envMap){let lt=Ke.map.cameraPosition;lt!==void 0&&lt.setValue(ie,ye.setFromMatrixPosition(C.matrixWorld))}(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ke.setValue(ie,"isOrthographic",C.isOrthographicCamera===!0),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial||K.isShadowMaterial||K.skinning)&&Ke.setValue(ie,"viewMatrix",C.matrixWorldInverse)}if(K.skinning){Ke.setOptional(ie,ne,"bindMatrix"),Ke.setOptional(ie,ne,"bindMatrixInverse");let lt=ne.skeleton;if(lt){let Fo=lt.bones;if(D.floatVertexTextures){if(lt.boneTexture===null){let At=Math.sqrt(Fo.length*4);At=Ee.ceilPowerOfTwo(At),At=Math.max(At,4);let Mr=new Float32Array(At*At*4);Mr.set(lt.boneMatrices);let Ti=new Ji(Mr,At,At,zt,On);lt.boneMatrices=Mr,lt.boneTexture=Ti,lt.boneTextureSize=At}Ke.setValue(ie,"boneTexture",lt.boneTexture,P),Ke.setValue(ie,"boneTextureSize",lt.boneTextureSize)}else Ke.setOptional(ie,lt,"boneMatrices")}}return(De||Fe.receiveShadow!==ne.receiveShadow)&&(Fe.receiveShadow=ne.receiveShadow,Ke.setValue(ie,"receiveShadow",ne.receiveShadow)),De&&(Ke.setValue(ie,"toneMappingExposure",p.toneMappingExposure),Fe.needsLights&&wr(ii,Ve),me&&K.fog&&x.refreshFogUniforms(ii,me),x.refreshMaterialUniforms(ii,K,$,G),qn.upload(ie,Fe.uniformsList,ii,P)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(qn.upload(ie,Fe.uniformsList,ii,P),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ke.setValue(ie,"center",ne.center),Ke.setValue(ie,"modelViewMatrix",ne.modelViewMatrix),Ke.setValue(ie,"normalMatrix",ne.normalMatrix),Ke.setValue(ie,"modelMatrix",ne.matrixWorld),pn}function wr(C,ee){C.ambientLightColor.needsUpdate=ee,C.lightProbe.needsUpdate=ee,C.directionalLights.needsUpdate=ee,C.directionalLightShadows.needsUpdate=ee,C.pointLights.needsUpdate=ee,C.pointLightShadows.needsUpdate=ee,C.spotLights.needsUpdate=ee,C.spotLightShadows.needsUpdate=ee,C.rectAreaLights.needsUpdate=ee,C.hemisphereLights.needsUpdate=ee}function Oo(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.setFramebuffer=function(C){v!==C&&A===null&&ie.bindFramebuffer(36160,C),v=C},this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return m},this.getRenderList=function(){return u},this.setRenderList=function(C){u=C},this.getRenderTarget=function(){return A},this.setRenderTarget=function(C,ee=0,K=0){A=C,g=ee,m=K,C&&B.get(C).__webglFramebuffer===void 0&&P.setupRenderTarget(C);let ne=v,me=!1;if(C){let Ne=B.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(ne=Ne[ee],me=!0):C.isWebGLMultisampleRenderTarget?ne=B.get(C).__webglMultisampledFramebuffer:ne=Ne,F.copy(C.viewport),Z.copy(C.scissor),k=C.scissorTest}else F.copy(q).multiplyScalar($).floor(),Z.copy(J).multiplyScalar($).floor(),k=oe;if(S!==ne&&(ie.bindFramebuffer(36160,ne),S=ne),R.viewport(F),R.scissor(Z),R.setScissorTest(k),me){let Ne=B.get(C.texture);ie.framebufferTexture2D(36160,36064,34069+ee,Ne.__webglTexture,K)}},this.readRenderTargetPixels=function(C,ee,K,ne,me,Ne,Oe){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=B.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Oe!==void 0&&(ze=ze[Oe]),ze){let Fe=!1;ze!==S&&(ie.bindFramebuffer(36160,ze),Fe=!0);try{let st=C.texture,it=st.format,De=st.type;if(it!==zt&&xe.convert(it)!==ie.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ve=De===Ms&&(w.has("EXT_color_buffer_half_float")||D.isWebGL2&&w.has("EXT_color_buffer_float"));if(De!==Rr&&xe.convert(De)!==ie.getParameter(35738)&&!(De===On&&(D.isWebGL2||w.has("OES_texture_float")||w.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ie.checkFramebufferStatus(36160)===36053?ee>=0&&ee<=C.width-ne&&K>=0&&K<=C.height-me&&ie.readPixels(ee,K,ne,me,xe.convert(it),xe.convert(De),Ne):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{Fe&&ie.bindFramebuffer(36160,S)}}},this.copyFramebufferToTexture=function(C,ee,K=0){let ne=Math.pow(2,-K),me=Math.floor(ee.image.width*ne),Ne=Math.floor(ee.image.height*ne),Oe=xe.convert(ee.format);P.setTexture2D(ee,0),ie.copyTexImage2D(3553,K,Oe,C.x,C.y,me,Ne,0),R.unbindTexture()},this.copyTextureToTexture=function(C,ee,K,ne=0){let me=ee.image.width,Ne=ee.image.height,Oe=xe.convert(K.format),ze=xe.convert(K.type);P.setTexture2D(K,0),ie.pixelStorei(37440,K.flipY),ie.pixelStorei(37441,K.premultiplyAlpha),ie.pixelStorei(3317,K.unpackAlignment),ee.isDataTexture?ie.texSubImage2D(3553,ne,C.x,C.y,me,Ne,Oe,ze,ee.image.data):ee.isCompressedTexture?ie.compressedTexSubImage2D(3553,ne,C.x,C.y,ee.mipmaps[0].width,ee.mipmaps[0].height,Oe,ee.mipmaps[0].data):ie.texSubImage2D(3553,ne,C.x,C.y,Oe,ze,ee.image),ne===0&&K.generateMipmaps&&ie.generateMipmap(3553),R.unbindTexture()},this.initTexture=function(C){P.setTexture2D(C,0),R.unbindTexture()},this.resetState=function(){R.reset(),be.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}function kl(t){Qi.call(this,t)}kl.prototype=Object.assign(Object.create(Qi.prototype),{constructor:kl,isWebGL1Renderer:!0});var qs=class extends ge{constructor(){super();Object.defineProperty(this,"isScene",{value:!0}),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.background!==null&&(n.object.background=this.background.toJSON(e)),this.environment!==null&&(n.object.environment=this.environment.toJSON(e)),this.fog!==null&&(n.object.fog=this.fog.toJSON()),n}};function Lt(t,e){this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ts,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Ee.generateUUID()}Object.defineProperty(Lt.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});Object.assign(Lt.prototype,{isInterleavedBuffer:!0,onUploadCallback:function(){},setUsage:function(t){return this.usage=t,this},copy:function(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this},copyAt:function(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this},set:function(t,e=0){return this.array.set(t,e),this},clone:function(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ee.generateUUID()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new Lt(e,this.stride);return n.setUsage(this.usage),n},onUpload:function(t){return this.onUploadCallback=t,this},toJSON:function(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ee.generateUUID()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}});var di=new L;function Mn(t,e,n,i){this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i===!0}Object.defineProperties(Mn.prototype,{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}},needsUpdate:{set:function(t){this.data.needsUpdate=t}}});Object.assign(Mn.prototype,{isInterleavedBufferAttribute:!0,applyMatrix4:function(t){for(let e=0,n=this.data.count;e<n;e++)di.x=this.getX(e),di.y=this.getY(e),di.z=this.getZ(e),di.applyMatrix4(t),this.setXYZ(e,di.x,di.y,di.z);return this},setX:function(t,e){return this.data.array[t*this.data.stride+this.offset]=e,this},setY:function(t,e){return this.data.array[t*this.data.stride+this.offset+1]=e,this},setZ:function(t,e){return this.data.array[t*this.data.stride+this.offset+2]=e,this},setW:function(t,e){return this.data.array[t*this.data.stride+this.offset+3]=e,this},getX:function(t){return this.data.array[t*this.data.stride+this.offset]},getY:function(t){return this.data.array[t*this.data.stride+this.offset+1]},getZ:function(t){return this.data.array[t*this.data.stride+this.offset+2]},getW:function(t){return this.data.array[t*this.data.stride+this.offset+3]},setXY:function(t,e,n){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this},setXYZ:function(t,e,n,i){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this},setXYZW:function(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this},clone:function(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Ae(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Mn(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)},toJSON:function(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}});function pi(t){Te.call(this),this.type="SpriteMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(t)}pi.prototype=Object.create(Te.prototype);pi.prototype.constructor=pi;pi.prototype.isSpriteMaterial=!0;pi.prototype.copy=function(t){return Te.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this};var er,Wr=new L,tr=new L,nr=new L,ir=new se,jr=new se,Vl=new Re,Xs=new L,qr=new L,Ys=new L,Wl=new se,Da=new se,jl=new se;function ql(t){if(ge.call(this),this.type="Sprite",er===void 0){er=new Ie;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Lt(e,5);er.setIndex([0,1,2,0,2,3]),er.setAttribute("position",new Mn(n,3,0,!1)),er.setAttribute("uv",new Mn(n,2,3,!1))}this.geometry=er,this.material=t!==void 0?t:new pi,this.center=new se(.5,.5)}ql.prototype=Object.assign(Object.create(ge.prototype),{constructor:ql,isSprite:!0,raycast:function(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),tr.setFromMatrixScale(this.matrixWorld),Vl.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),nr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&tr.multiplyScalar(-nr.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let s=this.center;Zs(Xs.set(-.5,-.5,0),nr,s,tr,i,r),Zs(qr.set(.5,-.5,0),nr,s,tr,i,r),Zs(Ys.set(.5,.5,0),nr,s,tr,i,r),Wl.set(0,0),Da.set(1,0),jl.set(1,1);let o=t.ray.intersectTriangle(Xs,qr,Ys,!1,Wr);if(o===null&&(Zs(qr.set(-.5,.5,0),nr,s,tr,i,r),Da.set(0,1),o=t.ray.intersectTriangle(Xs,Ys,qr,!1,Wr),o===null))return;let a=t.ray.origin.distanceTo(Wr);a<t.near||a>t.far||e.push({distance:a,point:Wr.clone(),uv:xt.getUV(Wr,Xs,qr,Ys,Wl,Da,jl,new se),face:null,object:this})},copy:function(t){return ge.prototype.copy.call(this,t),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}});function Zs(t,e,n,i,r,s){ir.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(jr.x=s*ir.x-r*ir.y,jr.y=r*ir.x+s*ir.y):jr.copy(ir),t.copy(e),t.x+=jr.x,t.y+=jr.y,t.applyMatrix4(Vl)}var Js=new L,Xl=new L;function Oa(){ge.call(this),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}Oa.prototype=Object.assign(Object.create(ge.prototype),{constructor:Oa,isLOD:!0,copy:function(t){ge.prototype.copy.call(this,t,!1);let e=t.levels;for(let n=0,i=e.length;n<i;n++){let r=e[n];this.addLevel(r.object.clone(),r.distance)}return this.autoUpdate=t.autoUpdate,this},addLevel:function(t,e=0){e=Math.abs(e);let n=this.levels,i;for(i=0;i<n.length&&!(e<n[i].distance);i++);return n.splice(i,0,{distance:e,object:t}),this.add(t),this},getCurrentLevel:function(){return this._currentLevel},getObjectForDistance:function(t){let e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i&&!(t<e[n].distance);n++);return e[n-1].object}return null},raycast:function(t,e){if(this.levels.length>0){Js.setFromMatrixPosition(this.matrixWorld);let i=t.ray.origin.distanceTo(Js);this.getObjectForDistance(i).raycast(t,e)}},update:function(t){let e=this.levels;if(e.length>1){Js.setFromMatrixPosition(t.matrixWorld),Xl.setFromMatrixPosition(this.matrixWorld);let n=Js.distanceTo(Xl)/t.zoom;e[0].object.visible=!0;let i,r;for(i=1,r=e.length;i<r&&n>=e[i].distance;i++)e[i-1].object.visible=!1,e[i].object.visible=!0;for(this._currentLevel=i-1;i<r;i++)e[i].object.visible=!1}},toJSON:function(t){let e=ge.prototype.toJSON.call(this,t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];let n=this.levels;for(let i=0,r=n.length;i<r;i++){let s=n[i];e.object.levels.push({object:s.object.uuid,distance:s.distance})}return e}});var Yl=new L,Zl=new Ge,Jl=new Ge,Qg=new L,Kl=new Re;function Xr(t,e){t&&t.isGeometry&&console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."),Le.call(this,t,e),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Re,this.bindMatrixInverse=new Re}Xr.prototype=Object.assign(Object.create(Le.prototype),{constructor:Xr,isSkinnedMesh:!0,copy:function(t){return Le.prototype.copy.call(this,t),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this},bind:function(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){let t=new Ge,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.x=e.getX(n),t.y=e.getY(n),t.z=e.getZ(n),t.w=e.getW(n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}},updateMatrixWorld:function(t){Le.prototype.updateMatrixWorld.call(this,t),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)},boneTransform:function(t,e){let n=this.skeleton,i=this.geometry;Zl.fromBufferAttribute(i.attributes.skinIndex,t),Jl.fromBufferAttribute(i.attributes.skinWeight,t),Yl.fromBufferAttribute(i.attributes.position,t).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){let s=Jl.getComponent(r);if(s!==0){let o=Zl.getComponent(r);Kl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(Qg.copy(Yl).applyMatrix4(Kl),s)}}return e.applyMatrix4(this.bindMatrixInverse)}});function Yr(){ge.call(this),this.type="Bone"}Yr.prototype=Object.assign(Object.create(ge.prototype),{constructor:Yr,isBone:!0});var $l=new Re,ev=new Re;function Zr(t=[],e=[]){this.uuid=Ee.generateUUID(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}Object.assign(Zr.prototype,{init:function(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Re)}},calculateInverses:function(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new Re;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}},pose:function(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}},update:function(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,s=t.length;r<s;r++){let o=t[r]?t[r].matrixWorld:ev;$l.multiplyMatrices(o,e[r]),$l.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)},clone:function(){return new Zr(this.bones,this.boneInverses)},getBoneByName:function(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}},dispose:function(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)},fromJSON:function(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){let r=t.bones[n],s=e[r];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),s=new Yr),this.bones.push(s),this.boneInverses.push(new Re().fromArray(t.boneInverses[n]))}return this.init(),this},toJSON:function(){let t={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){let s=e[i];t.bones.push(s.uuid);let o=n[i];t.boneInverses.push(o.toArray())}return t}});var Ql=new Re,eu=new Re,Ks=[],Jr=new Le;function tu(t,e,n){Le.call(this,t,e),this.instanceMatrix=new Ae(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}tu.prototype=Object.assign(Object.create(Le.prototype),{constructor:tu,isInstancedMesh:!0,copy:function(t){return Le.prototype.copy.call(this,t),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,this},getColorAt:function(t,e){e.fromArray(this.instanceColor.array,t*3)},getMatrixAt:function(t,e){e.fromArray(this.instanceMatrix.array,t*16)},raycast:function(t,e){let n=this.matrixWorld,i=this.count;if(Jr.geometry=this.geometry,Jr.material=this.material,Jr.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,Ql),eu.multiplyMatrices(n,Ql),Jr.matrixWorld=eu,Jr.raycast(t,Ks);for(let s=0,o=Ks.length;s<o;s++){let a=Ks[s];a.instanceId=r,a.object=this,e.push(a)}Ks.length=0}},setColorAt:function(t,e){this.instanceColor===null&&(this.instanceColor=new Ae(new Float32Array(this.count*3),3)),e.toArray(this.instanceColor.array,t*3)},setMatrixAt:function(t,e){e.toArray(this.instanceMatrix.array,t*16)},updateMorphTargets:function(){},dispose:function(){this.dispatchEvent({type:"dispose"})}});function wt(t){Te.call(this),this.type="LineBasicMaterial",this.color=new ue(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(t)}wt.prototype=Object.create(Te.prototype);wt.prototype.constructor=wt;wt.prototype.isLineBasicMaterial=!0;wt.prototype.copy=function(t){return Te.prototype.copy.call(this,t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.morphTargets=t.morphTargets,this};var nu=new L,iu=new L,ru=new Re,Fa=new zi,$s=new Qt;function Xn(t=new Ie,e=new wt){ge.call(this),this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}Xn.prototype=Object.assign(Object.create(ge.prototype),{constructor:Xn,isLine:!0,copy:function(t){return ge.prototype.copy.call(this,t),this.material=t.material,this.geometry=t.geometry,this},computeLineDistances:function(){let t=this.geometry;if(t.isBufferGeometry)if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)nu.fromBufferAttribute(e,i-1),iu.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=nu.distanceTo(iu);t.setAttribute("lineDistance",new Pe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else t.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this},raycast:function(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold;if(n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere),$s.applyMatrix4(i),$s.radius+=r,t.ray.intersectsSphere($s)===!1)return;ru.copy(i).invert(),Fa.copy(t.ray).applyMatrix4(ru);let s=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,a=new L,c=new L,l=new L,h=new L,u=this.isLineSegments?2:1;if(n.isBufferGeometry){let f=n.index,p=n.attributes.position;if(f!==null){let y=f.array;for(let v=0,g=y.length-1;v<g;v+=u){let m=y[v],A=y[v+1];if(a.fromBufferAttribute(p,m),c.fromBufferAttribute(p,A),Fa.distanceSqToSegment(a,c,h,l)>o)continue;h.applyMatrix4(this.matrixWorld);let E=t.ray.origin.distanceTo(h);E<t.near||E>t.far||e.push({distance:E,point:l.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else for(let y=0,v=p.count-1;y<v;y+=u){if(a.fromBufferAttribute(p,y),c.fromBufferAttribute(p,y+1),Fa.distanceSqToSegment(a,c,h,l)>o)continue;h.applyMatrix4(this.matrixWorld);let m=t.ray.origin.distanceTo(h);m<t.near||m>t.far||e.push({distance:m,point:l.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")},updateMorphTargets:function(){let t=this.geometry;if(t.isBufferGeometry){let e=t.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{let e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});var su=new L,ou=new L;function Yn(t,e){Xn.call(this,t,e),this.type="LineSegments"}Yn.prototype=Object.assign(Object.create(Xn.prototype),{constructor:Yn,isLineSegments:!0,computeLineDistances:function(){let t=this.geometry;if(t.isBufferGeometry)if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)su.fromBufferAttribute(e,i),ou.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+su.distanceTo(ou);t.setAttribute("lineDistance",new Pe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else t.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}});function Qs(t,e){Xn.call(this,t,e),this.type="LineLoop"}Qs.prototype=Object.assign(Object.create(Xn.prototype),{constructor:Qs,isLineLoop:!0});function Sn(t){Te.call(this),this.type="PointsMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(t)}Sn.prototype=Object.create(Te.prototype);Sn.prototype.constructor=Sn;Sn.prototype.isPointsMaterial=!0;Sn.prototype.copy=function(t){return Te.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.morphTargets=t.morphTargets,this};var au=new Re,Ba=new zi,eo=new Qt,to=new L;function nn(t=new Ie,e=new Sn){ge.call(this),this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}nn.prototype=Object.assign(Object.create(ge.prototype),{constructor:nn,isPoints:!0,copy:function(t){return ge.prototype.copy.call(this,t),this.material=t.material,this.geometry=t.geometry,this},raycast:function(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold;if(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(i),eo.radius+=r,t.ray.intersectsSphere(eo)===!1)return;au.copy(i).invert(),Ba.copy(t.ray).applyMatrix4(au);let s=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s;if(n.isBufferGeometry){let a=n.index,l=n.attributes.position;if(a!==null){let h=a.array;for(let u=0,f=h.length;u<f;u++){let d=h[u];to.fromBufferAttribute(l,d),cu(to,d,o,i,t,e,this)}}else for(let h=0,u=l.count;h<u;h++)to.fromBufferAttribute(l,h),cu(to,h,o,i,t,e,this)}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")},updateMorphTargets:function(){let t=this.geometry;if(t.isBufferGeometry){let e=t.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{let e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});function cu(t,e,n,i,r,s,o){let a=Ba.distanceSqToPoint(t);if(a<n){let c=new L;Ba.closestPointToPoint(t,c),c.applyMatrix4(i);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}function Gt(t,e,n,i,r,s,o,a,c){Xe.call(this,t,e,n,i,r,s,o,a,c),this.format=o!==void 0?o:Vt,this.minFilter=s!==void 0?s:je,this.magFilter=r!==void 0?r:je,this.generateMipmaps=!1;let l=this;function h(){l.needsUpdate=!0,t.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(h)}Gt.prototype=Object.assign(Object.create(Xe.prototype),{constructor:Gt,clone:function(){return new this.constructor(this.image).copy(this)},isVideoTexture:!0,update:function(){let t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}});function Kr(t,e,n,i,r,s,o,a,c,l,h,u){Xe.call(this,null,s,o,a,c,l,i,r,h,u),this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}Kr.prototype=Object.create(Xe.prototype);Kr.prototype.constructor=Kr;Kr.prototype.isCompressedTexture=!0;function Zn(t,e,n,i,r,s,o,a,c){Xe.call(this,t,e,n,i,r,s,o,a,c),this.needsUpdate=!0}Zn.prototype=Object.create(Xe.prototype);Zn.prototype.constructor=Zn;Zn.prototype.isCanvasTexture=!0;function no(t,e,n,i,r,s,o,a,c,l){if(l=l!==void 0?l:Ri,l!==Ri&&l!==Pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===Ri&&(n=bs),n===void 0&&l===Pr&&(n=Cr),Xe.call(this,null,i,r,s,o,a,l,n,c),this.image={width:t,height:e},this.magFilter=o!==void 0?o:et,this.minFilter=a!==void 0?a:et,this.flipY=!1,this.generateMipmaps=!1}no.prototype=Object.create(Xe.prototype);no.prototype.constructor=no;no.prototype.isDepthTexture=!0;var Na=class extends Ie{constructor(e=1,n=8,i=0,r=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);let s=[],o=[],a=[],c=[],l=new L,h=new se;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=n;u++,f+=3){let d=i+u/n*r;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=n;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Pe(o,3)),this.setAttribute("normal",new Pe(a,3)),this.setAttribute("uv",new Pe(c,2))}};var vy=new L,yy=new L,xy=new L,_y=new xt;var tv={triangulate:function(t,e,n){n=n||2;let i=e&&e.length,r=i?e[0]*n:t.length,s=lu(t,0,r,n,!0),o=[];if(!s||s.next===s.prev)return o;let a,c,l,h,u,f,d;if(i&&(s=ov(t,e,s,n)),t.length>80*n){a=l=t[0],c=h=t[1];for(let p=n;p<r;p+=n)u=t[p],f=t[p+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?1/d:0}return $r(s,o,n,a,c,d),o}};function lu(t,e,n,i,r){let s,o;if(r===vv(t,e,n,i)>0)for(s=e;s<n;s+=i)o=fu(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=fu(s,t[s],t[s+1],o);return o&&io(o,o.next)&&(es(o),o=o.next),o}function Jn(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(io(n,n.next)||tt(n.prev,n,n.next)===0)){if(es(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function $r(t,e,n,i,r,s,o){if(!t)return;!o&&s&&hv(t,i,r,s);let a=t,c,l;for(;t.prev!==t.next;){if(c=t.prev,l=t.next,s?iv(t,i,r,s):nv(t)){e.push(c.i/n),e.push(t.i/n),e.push(l.i/n),es(t),t=l.next,a=l.next;continue}if(t=l,t===a){o?o===1?(t=rv(Jn(t),e,n),$r(t,e,n,i,r,s,2)):o===2&&sv(t,e,n,i,r,s):$r(Jn(t),e,n,i,r,s,1);break}}}function nv(t){let e=t.prev,n=t,i=t.next;if(tt(e,n,i)>=0)return!1;let r=t.next.next;for(;r!==t.prev;){if(rr(e.x,e.y,n.x,n.y,i.x,i.y,r.x,r.y)&&tt(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function iv(t,e,n,i){let r=t.prev,s=t,o=t.next;if(tt(r,s,o)>=0)return!1;let a=r.x<s.x?r.x<o.x?r.x:o.x:s.x<o.x?s.x:o.x,c=r.y<s.y?r.y<o.y?r.y:o.y:s.y<o.y?s.y:o.y,l=r.x>s.x?r.x>o.x?r.x:o.x:s.x>o.x?s.x:o.x,h=r.y>s.y?r.y>o.y?r.y:o.y:s.y>o.y?s.y:o.y,u=za(a,c,e,n,i),f=za(l,h,e,n,i),d=t.prevZ,p=t.nextZ;for(;d&&d.z>=u&&p&&p.z<=f;){if(d!==t.prev&&d!==t.next&&rr(r.x,r.y,s.x,s.y,o.x,o.y,d.x,d.y)&&tt(d.prev,d,d.next)>=0||(d=d.prevZ,p!==t.prev&&p!==t.next&&rr(r.x,r.y,s.x,s.y,o.x,o.y,p.x,p.y)&&tt(p.prev,p,p.next)>=0))return!1;p=p.nextZ}for(;d&&d.z>=u;){if(d!==t.prev&&d!==t.next&&rr(r.x,r.y,s.x,s.y,o.x,o.y,d.x,d.y)&&tt(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;p&&p.z<=f;){if(p!==t.prev&&p!==t.next&&rr(r.x,r.y,s.x,s.y,o.x,o.y,p.x,p.y)&&tt(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function rv(t,e,n){let i=t;do{let r=i.prev,s=i.next.next;!io(r,s)&&uu(r,i,i.next,s)&&Qr(r,s)&&Qr(s,r)&&(e.push(r.i/n),e.push(i.i/n),e.push(s.i/n),es(i),es(i.next),i=t=s),i=i.next}while(i!==t);return Jn(i)}function sv(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&pv(o,a)){let c=hu(o,a);o=Jn(o,o.next),c=Jn(c,c.next),$r(o,e,n,i,r,s),$r(c,e,n,i,r,s);return}a=a.next}o=o.next}while(o!==t)}function ov(t,e,n,i){let r=[],s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*i,c=s<o-1?e[s+1]*i:t.length,l=lu(t,a,c,i,!1),l===l.next&&(l.steiner=!0),r.push(dv(l));for(r.sort(av),s=0;s<r.length;s++)cv(r[s],n),n=Jn(n,n.next);return n}function av(t,e){return t.x-e.x}function cv(t,e){if(e=lv(t,e),e){let n=hu(e,t);Jn(e,e.next),Jn(n,n.next)}}function lv(t,e){let n=e,i=t.x,r=t.y,s=-1/0,o;do{if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){let f=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(f<=i&&f>s){if(s=f,f===i){if(r===n.y)return n;if(r===n.next.y)return n.next}o=n.x<n.next.x?n:n.next}}n=n.next}while(n!==e);if(!o)return null;if(i===s)return o;let a=o,c=o.x,l=o.y,h=1/0,u;n=o;do i>=n.x&&n.x>=c&&i!==n.x&&rr(r<l?i:s,r,c,l,r<l?s:i,r,n.x,n.y)&&(u=Math.abs(r-n.y)/(i-n.x),Qr(n,t)&&(u<h||u===h&&(n.x>o.x||n.x===o.x&&uv(o,n)))&&(o=n,h=u)),n=n.next;while(n!==a);return o}function uv(t,e){return tt(t.prev,t,e.prev)<0&&tt(e.next,t,t.next)<0}function hv(t,e,n,i){let r=t;do r.z===null&&(r.z=za(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,fv(r)}function fv(t){let e,n,i,r,s,o,a,c,l=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<l&&(a++,i=i.nextZ,!!i);e++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,c--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,l*=2}while(o>1);return t}function za(t,e,n,i,r){return t=32767*(t-n)*r,e=32767*(e-i)*r,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function dv(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function rr(t,e,n,i,r,s,o,a){return(r-o)*(e-a)-(t-o)*(s-a)>=0&&(t-o)*(i-a)-(n-o)*(e-a)>=0&&(n-o)*(s-a)-(r-o)*(i-a)>=0}function pv(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!mv(t,e)&&(Qr(t,e)&&Qr(e,t)&&gv(t,e)&&(tt(t.prev,t,e.prev)||tt(t,e.prev,e))||io(t,e)&&tt(t.prev,t,t.next)>0&&tt(e.prev,e,e.next)>0)}function tt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function io(t,e){return t.x===e.x&&t.y===e.y}function uu(t,e,n,i){let r=so(tt(t,e,n)),s=so(tt(t,e,i)),o=so(tt(n,i,t)),a=so(tt(n,i,e));return!!(r!==s&&o!==a||r===0&&ro(t,n,e)||s===0&&ro(t,i,e)||o===0&&ro(n,t,i)||a===0&&ro(n,e,i))}function ro(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function so(t){return t>0?1:t<0?-1:0}function mv(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&uu(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Qr(t,e){return tt(t.prev,t,t.next)<0?tt(t,e,t.next)>=0&&tt(t,t.prev,e)>=0:tt(t,e,t.prev)<0||tt(t,t.next,e)<0}function gv(t,e){let n=t,i=!1,r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function hu(t,e){let n=new Ua(t.i,t.x,t.y),i=new Ua(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function fu(t,e,n,i){let r=new Ua(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function es(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Ua(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function vv(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}var Kn={area:function(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5},isClockWise:function(t){return Kn.area(t)<0},triangulateShape:function(t,e){let n=[],i=[],r=[];du(t),pu(n,t);let s=t.length;e.forEach(du);for(let a=0;a<e.length;a++)i.push(s),s+=e[a].length,pu(n,e[a]);let o=tv.triangulate(n,i);for(let a=0;a<o.length;a+=3)r.push(o.slice(a,a+3));return r}};function du(t){let e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function pu(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}var Ha=class extends Ie{constructor(e,n){super();this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new Pe(r,3)),this.setAttribute("uv",new Pe(s,2)),this.computeVertexNormals();function o(a){let c=[],l=n.curveSegments!==void 0?n.curveSegments:12,h=n.steps!==void 0?n.steps:1,u=n.depth!==void 0?n.depth:100,f=n.bevelEnabled!==void 0?n.bevelEnabled:!0,d=n.bevelThickness!==void 0?n.bevelThickness:6,p=n.bevelSize!==void 0?n.bevelSize:d-2,y=n.bevelOffset!==void 0?n.bevelOffset:0,v=n.bevelSegments!==void 0?n.bevelSegments:3,g=n.extrudePath,m=n.UVGenerator!==void 0?n.UVGenerator:yv;n.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),u=n.amount);let A,S=!1,E,_,F,Z;g&&(A=g.getSpacedPoints(h),S=!0,f=!1,E=g.computeFrenetFrames(h,!1),_=new L,F=new L,Z=new L),f||(v=0,d=0,p=0,y=0);let k=a.extractPoints(l),V=k.shape,G=k.holes;if(!Kn.isClockWise(V)){V=V.reverse();for(let P=0,I=G.length;P<I;P++){let U=G[P];Kn.isClockWise(U)&&(G[P]=U.reverse())}}let j=Kn.triangulateShape(V,G),H=V;for(let P=0,I=G.length;P<I;P++){let U=G[P];V=V.concat(U)}function q(P,I,U){return I||console.error("THREE.ExtrudeGeometry: vec does not exist"),I.clone().multiplyScalar(U).add(P)}let J=V.length,oe=j.length;function he(P,I,U){let X,W,b,x=P.x-I.x,Q=P.y-I.y,Y=U.x-P.x,N=U.y-P.y,te=x*x+Q*Q,ce=x*N-Q*Y;if(Math.abs(ce)>Number.EPSILON){let le=Math.sqrt(te),ae=Math.sqrt(Y*Y+N*N),xe=I.x-Q/le,be=I.y+x/le,z=U.x-N/ae,re=U.y+Y/ae,de=((z-xe)*N-(re-be)*Y)/(x*N-Q*Y);X=xe+x*de-P.x,W=be+Q*de-P.y;let we=X*X+W*W;if(we<=2)return new se(X,W);b=Math.sqrt(we/2)}else{let le=!1;x>Number.EPSILON?Y>Number.EPSILON&&(le=!0):x<-Number.EPSILON?Y<-Number.EPSILON&&(le=!0):Math.sign(Q)===Math.sign(N)&&(le=!0),le?(X=-Q,W=x,b=Math.sqrt(te)):(X=x,W=Q,b=Math.sqrt(te/2))}return new se(X/b,W/b)}let fe=[];for(let P=0,I=H.length,U=I-1,X=P+1;P<I;P++,U++,X++)U===I&&(U=0),X===I&&(X=0),fe[P]=he(H[P],H[U],H[X]);let _e=[],ve,ye=fe.concat();for(let P=0,I=G.length;P<I;P++){let U=G[P];ve=[];for(let X=0,W=U.length,b=W-1,x=X+1;X<W;X++,b++,x++)b===W&&(b=0),x===W&&(x=0),ve[X]=he(U[X],U[b],U[x]);_e.push(ve),ye=ye.concat(ve)}for(let P=0;P<v;P++){let I=P/v,U=d*Math.cos(I*Math.PI/2),X=p*Math.sin(I*Math.PI/2)+y;for(let W=0,b=H.length;W<b;W++){let x=q(H[W],fe[W],X);w(x.x,x.y,-U)}for(let W=0,b=G.length;W<b;W++){let x=G[W];ve=_e[W];for(let Q=0,Y=x.length;Q<Y;Q++){let N=q(x[Q],ve[Q],X);w(N.x,N.y,-U)}}}let Ce=p+y;for(let P=0;P<J;P++){let I=f?q(V[P],ye[P],Ce):V[P];S?(F.copy(E.normals[0]).multiplyScalar(I.x),_.copy(E.binormals[0]).multiplyScalar(I.y),Z.copy(A[0]).add(F).add(_),w(Z.x,Z.y,Z.z)):w(I.x,I.y,0)}for(let P=1;P<=h;P++)for(let I=0;I<J;I++){let U=f?q(V[I],ye[I],Ce):V[I];S?(F.copy(E.normals[P]).multiplyScalar(U.x),_.copy(E.binormals[P]).multiplyScalar(U.y),Z.copy(A[P]).add(F).add(_),w(Z.x,Z.y,Z.z)):w(U.x,U.y,u/h*P)}for(let P=v-1;P>=0;P--){let I=P/v,U=d*Math.cos(I*Math.PI/2),X=p*Math.sin(I*Math.PI/2)+y;for(let W=0,b=H.length;W<b;W++){let x=q(H[W],fe[W],X);w(x.x,x.y,u+U)}for(let W=0,b=G.length;W<b;W++){let x=G[W];ve=_e[W];for(let Q=0,Y=x.length;Q<Y;Q++){let N=q(x[Q],ve[Q],X);S?w(N.x,N.y+A[h-1].y,A[h-1].x+U):w(N.x,N.y,u+U)}}}He(),ie();function He(){let P=r.length/3;if(f){let I=0,U=J*I;for(let X=0;X<oe;X++){let W=j[X];D(W[2]+U,W[1]+U,W[0]+U)}I=h+v*2,U=J*I;for(let X=0;X<oe;X++){let W=j[X];D(W[0]+U,W[1]+U,W[2]+U)}}else{for(let I=0;I<oe;I++){let U=j[I];D(U[2],U[1],U[0])}for(let I=0;I<oe;I++){let U=j[I];D(U[0]+J*h,U[1]+J*h,U[2]+J*h)}}i.addGroup(P,r.length/3-P,0)}function ie(){let P=r.length/3,I=0;T(H,I),I+=H.length;for(let U=0,X=G.length;U<X;U++){let W=G[U];T(W,I),I+=W.length}i.addGroup(P,r.length/3-P,1)}function T(P,I){let U=P.length;for(;--U>=0;){let X=U,W=U-1;W<0&&(W=P.length-1);for(let b=0,x=h+v*2;b<x;b++){let Q=J*b,Y=J*(b+1),N=I+X+Q,te=I+W+Q,ce=I+W+Y,le=I+X+Y;R(N,te,ce,le)}}}function w(P,I,U){c.push(P),c.push(I),c.push(U)}function D(P,I,U){O(P),O(I),O(U);let X=r.length/3,W=m.generateTopUV(i,r,X-3,X-2,X-1);B(W[0]),B(W[1]),B(W[2])}function R(P,I,U,X){O(P),O(I),O(X),O(I),O(U),O(X);let W=r.length/3,b=m.generateSideWallUV(i,r,W-6,W-3,W-2,W-1);B(b[0]),B(b[1]),B(b[3]),B(b[1]),B(b[2]),B(b[3])}function O(P){r.push(c[P*3+0]),r.push(c[P*3+1]),r.push(c[P*3+2])}function B(P){s.push(P.x),s.push(P.y)}}}toJSON(){let e=Ie.prototype.toJSON.call(this),n=this.parameters.shapes,i=this.parameters.options;return xv(n,i,e)}},yv={generateTopUV:function(t,e,n,i,r){let s=e[n*3],o=e[n*3+1],a=e[i*3],c=e[i*3+1],l=e[r*3],h=e[r*3+1];return[new se(s,o),new se(a,c),new se(l,h)]},generateSideWallUV:function(t,e,n,i,r,s){let o=e[n*3],a=e[n*3+1],c=e[n*3+2],l=e[i*3],h=e[i*3+1],u=e[i*3+2],f=e[r*3],d=e[r*3+1],p=e[r*3+2],y=e[s*3],v=e[s*3+1],g=e[s*3+2];return Math.abs(a-h)<.01?[new se(o,1-c),new se(l,1-u),new se(f,1-p),new se(y,1-g)]:[new se(a,1-c),new se(h,1-u),new se(d,1-p),new se(v,1-g)]}};function xv(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){let s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}function Ga(t,e,n){Ie.call(this),this.type="ParametricGeometry",this.parameters={func:t,slices:e,stacks:n};let i=[],r=[],s=[],o=[],a=1e-5,c=new L,l=new L,h=new L,u=new L,f=new L;t.length<3&&console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");let d=e+1;for(let p=0;p<=n;p++){let y=p/n;for(let v=0;v<=e;v++){let g=v/e;t(g,y,l),r.push(l.x,l.y,l.z),g-a>=0?(t(g-a,y,h),u.subVectors(l,h)):(t(g+a,y,h),u.subVectors(h,l)),y-a>=0?(t(g,y-a,h),f.subVectors(l,h)):(t(g,y+a,h),f.subVectors(h,l)),c.crossVectors(u,f).normalize(),s.push(c.x,c.y,c.z),o.push(g,y)}}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let v=p*d+y,g=p*d+y+1,m=(p+1)*d+y+1,A=(p+1)*d+y;i.push(v,g,A),i.push(g,m,A)}this.setIndex(i),this.setAttribute("position",new Pe(r,3)),this.setAttribute("normal",new Pe(s,3)),this.setAttribute("uv",new Pe(o,2))}Ga.prototype=Object.create(Ie.prototype);Ga.prototype.constructor=Ga;var oo=class extends Ie{constructor(e=.5,n=1,i=8,r=1,s=0,o=Math.PI*2){super();this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);let a=[],c=[],l=[],h=[],u=e,f=(n-e)/r,d=new L,p=new se;for(let y=0;y<=r;y++){for(let v=0;v<=i;v++){let g=s+v/i*o;d.x=u*Math.cos(g),d.y=u*Math.sin(g),c.push(d.x,d.y,d.z),l.push(0,0,1),p.x=(d.x/n+1)/2,p.y=(d.y/n+1)/2,h.push(p.x,p.y)}u+=f}for(let y=0;y<r;y++){let v=y*(i+1);for(let g=0;g<i;g++){let m=g+v,A=m,S=m+i+1,E=m+i+2,_=m+1;a.push(A,S,_),a.push(S,E,_)}}this.setIndex(a),this.setAttribute("position",new Pe(c,3)),this.setAttribute("normal",new Pe(l,3)),this.setAttribute("uv",new Pe(h,2))}},mu=class extends Ie{constructor(e,n=12){super();this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:n};let i=[],r=[],s=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new Pe(r,3)),this.setAttribute("normal",new Pe(s,3)),this.setAttribute("uv",new Pe(o,2));function l(h){let u=r.length/3,f=h.extractPoints(n),d=f.shape,p=f.holes;Kn.isClockWise(d)===!1&&(d=d.reverse());for(let v=0,g=p.length;v<g;v++){let m=p[v];Kn.isClockWise(m)===!0&&(p[v]=m.reverse())}let y=Kn.triangulateShape(d,p);for(let v=0,g=p.length;v<g;v++){let m=p[v];d=d.concat(m)}for(let v=0,g=d.length;v<g;v++){let m=d[v];r.push(m.x,m.y,0),s.push(0,0,1),o.push(m.x,m.y)}for(let v=0,g=y.length;v<g;v++){let m=y[v],A=m[0]+u,S=m[1]+u,E=m[2]+u;i.push(A,S,E),c+=3}}}toJSON(){let e=Ie.prototype.toJSON.call(this),n=this.parameters.shapes;return _v(n,e)}};function _v(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){let r=t[n];e.shapes.push(r.uuid)}else e.shapes.push(t.uuid);return e}var Ot=class extends Ie{constructor(e=1,n=8,i=6,r=0,s=Math.PI*2,o=0,a=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new L,f=new L,d=[],p=[],y=[],v=[];for(let g=0;g<=i;g++){let m=[],A=g/i,S=0;g==0&&o==0?S=.5/n:g==i&&c==Math.PI&&(S=-.5/n);for(let E=0;E<=n;E++){let _=E/n;u.x=-e*Math.cos(r+_*s)*Math.sin(o+A*a),u.y=e*Math.cos(o+A*a),u.z=e*Math.sin(r+_*s)*Math.sin(o+A*a),p.push(u.x,u.y,u.z),f.copy(u).normalize(),y.push(f.x,f.y,f.z),v.push(_+S,1-A),m.push(l++)}h.push(m)}for(let g=0;g<i;g++)for(let m=0;m<n;m++){let A=h[g][m+1],S=h[g][m],E=h[g+1][m],_=h[g+1][m+1];(g!==0||o>0)&&d.push(A,S,_),(g!==i-1||c<Math.PI)&&d.push(S,E,_)}this.setIndex(d),this.setAttribute("position",new Pe(p,3)),this.setAttribute("normal",new Pe(y,3)),this.setAttribute("uv",new Pe(v,2))}};var mi=class extends Ie{constructor(e,n=64,i=1,r=8,s=!1){super();this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};let o=e.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,c=new L,l=new se,h=new L,u=[],f=[],d=[],p=[];y(),this.setIndex(p),this.setAttribute("position",new Pe(u,3)),this.setAttribute("normal",new Pe(f,3)),this.setAttribute("uv",new Pe(d,2));function y(){for(let A=0;A<n;A++)v(A);v(s===!1?n:0),m(),g()}function v(A){h=e.getPointAt(A/n,h);let S=o.normals[A],E=o.binormals[A];for(let _=0;_<=r;_++){let F=_/r*Math.PI*2,Z=Math.sin(F),k=-Math.cos(F);c.x=k*S.x+Z*E.x,c.y=k*S.y+Z*E.y,c.z=k*S.z+Z*E.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+i*c.x,a.y=h.y+i*c.y,a.z=h.z+i*c.z,u.push(a.x,a.y,a.z)}}function g(){for(let A=1;A<=n;A++)for(let S=1;S<=r;S++){let E=(r+1)*(A-1)+(S-1),_=(r+1)*A+(S-1),F=(r+1)*A+S,Z=(r+1)*(A-1)+S;p.push(E,_,Z),p.push(_,F,Z)}}function m(){for(let A=0;A<=n;A++)for(let S=0;S<=r;S++)l.x=A/n,l.y=S/r,d.push(l.x,l.y)}}toJSON(){let e=Ie.prototype.toJSON.call(this);return e.path=this.parameters.path.toJSON(),e}};function $n(t){Te.call(this),this.type="ShadowMaterial",this.color=new ue(0),this.transparent=!0,this.setValues(t)}$n.prototype=Object.create(Te.prototype);$n.prototype.constructor=$n;$n.prototype.isShadowMaterial=!0;$n.prototype.copy=function(t){return Te.prototype.copy.call(this,t),this.color.copy(t.color),this};function Qn(t){Ze.call(this,t),this.type="RawShaderMaterial"}Qn.prototype=Object.create(Ze.prototype);Qn.prototype.constructor=Qn;Qn.prototype.isRawShaderMaterial=!0;function at(t){Te.call(this),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fn,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.vertexTangents=!1,this.setValues(t)}at.prototype=Object.create(Te.prototype);at.prototype.constructor=at;at.prototype.isMeshStandardMaterial=!0;at.prototype.copy=function(t){return Te.prototype.copy.call(this,t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.vertexTangents=t.vertexTangents,this};function rn(t){at.call(this),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(e){this.reflectivity=Ee.clamp(2.5*(e-1)/(e+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.setValues(t)}rn.prototype=Object.create(at.prototype);rn.prototype.constructor=rn;rn.prototype.isMeshPhysicalMaterial=!0;rn.prototype.copy=function(t){return at.prototype.copy.call(this,t),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.reflectivity=t.reflectivity,t.sheen?this.sheen=(this.sheen||new ue).copy(t.sheen):this.sheen=null,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this};function gi(t){Te.call(this),this.type="MeshPhongMaterial",this.color=new ue(16777215),this.specular=new ue(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fn,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}gi.prototype=Object.create(Te.prototype);gi.prototype.constructor=gi;gi.prototype.isMeshPhongMaterial=!0;gi.prototype.copy=function(t){return Te.prototype.copy.call(this,t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function sr(t){Te.call(this),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ue(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fn,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}sr.prototype=Object.create(Te.prototype);sr.prototype.constructor=sr;sr.prototype.isMeshToonMaterial=!0;sr.prototype.copy=function(t){return Te.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function or(t){Te.call(this),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fn,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}or.prototype=Object.create(Te.prototype);or.prototype.constructor=or;or.prototype.isMeshNormalMaterial=!0;or.prototype.copy=function(t){return Te.prototype.copy.call(this,t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function ar(t){Te.call(this),this.type="MeshLambertMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}ar.prototype=Object.create(Te.prototype);ar.prototype.constructor=ar;ar.prototype.isMeshLambertMaterial=!0;ar.prototype.copy=function(t){return Te.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function ei(t){Te.call(this),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ue(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fn,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}ei.prototype=Object.create(Te.prototype);ei.prototype.constructor=ei;ei.prototype.isMeshMatcapMaterial=!0;ei.prototype.copy=function(t){return Te.prototype.copy.call(this,t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function cr(t){wt.call(this),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}cr.prototype=Object.create(wt.prototype);cr.prototype.constructor=cr;cr.prototype.isLineDashedMaterial=!0;cr.prototype.copy=function(t){return wt.prototype.copy.call(this,t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this};var bv=Object.freeze({__proto__:null,ShadowMaterial:$n,SpriteMaterial:pi,RawShaderMaterial:Qn,ShaderMaterial:Ze,PointsMaterial:Sn,MeshPhysicalMaterial:rn,MeshStandardMaterial:at,MeshPhongMaterial:gi,MeshToonMaterial:sr,MeshNormalMaterial:or,MeshLambertMaterial:ar,MeshDepthMaterial:hi,MeshDistanceMaterial:fi,MeshBasicMaterial:ke,MeshMatcapMaterial:ei,LineDashedMaterial:cr,LineBasicMaterial:wt,Material:Te}),Qe={arraySlice:function(t,e,n){return Qe.isTypedArray(t)?new t.constructor(t.subarray(e,n!==void 0?n:t.length)):t.slice(e,n)},convertArray:function(t,e,n){return!t||!n&&t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)},isTypedArray:function(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)},getKeyframeOrder:function(t){function e(r,s){return t[r]-t[s]}let n=t.length,i=new Array(n);for(let r=0;r!==n;++r)i[r]=r;return i.sort(e),i},sortedArray:function(t,e,n){let i=t.length,r=new t.constructor(i);for(let s=0,o=0;o!==i;++s){let a=n[s]*e;for(let c=0;c!==e;++c)r[o++]=t[a+c]}return r},flattenJSON:function(t,e,n,i){let r=1,s=t[0];for(;s!==void 0&&s[i]===void 0;)s=t[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),n.push.apply(n,o)),s=t[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(n,n.length)),s=t[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),n.push(o)),s=t[r++];while(s!==void 0)},subclip:function(t,e,n,i,r=30){let s=t.clone();s.name=e;let o=[];for(let c=0;c<s.tracks.length;++c){let l=s.tracks[c],h=l.getValueSize(),u=[],f=[];for(let d=0;d<l.times.length;++d){let p=l.times[d]*r;if(!(p<n||p>=i)){u.push(l.times[d]);for(let y=0;y<h;++y)f.push(l.values[d*h+y])}}u.length!==0&&(l.times=Qe.convertArray(u,l.times.constructor),l.values=Qe.convertArray(f,l.values.constructor),o.push(l))}s.tracks=o;let a=1/0;for(let c=0;c<s.tracks.length;++c)a>s.tracks[c].times[0]&&(a=s.tracks[c].times[0]);for(let c=0;c<s.tracks.length;++c)s.tracks[c].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(t,e=0,n=t,i=30){i<=0&&(i=30);let r=n.tracks.length,s=e/i;for(let o=0;o<r;++o){let a=n.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;let l=t.tracks.find(function(g){return g.name===a.name&&g.ValueTypeName===c});if(l===void 0)continue;let h=0,u=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let f=0,d=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=d/3);let p=a.times.length-1,y;if(s<=a.times[0]){let g=h,m=u-h;y=Qe.arraySlice(a.values,g,m)}else if(s>=a.times[p]){let g=p*u+h,m=g+u-h;y=Qe.arraySlice(a.values,g,m)}else{let g=a.createInterpolant(),m=h,A=u-h;g.evaluate(s),y=Qe.arraySlice(g.resultBuffer,m,A)}c==="quaternion"&&new ut().fromArray(y).normalize().conjugate().toArray(y);let v=l.times.length;for(let g=0;g<v;++g){let m=g*d+f;if(c==="quaternion")ut.multiplyQuaternionsFlat(l.values,m,y,0,l.values,m);else{let A=d-f*2;for(let S=0;S<A;++S)l.values[m+S]-=y[S]}}}return t.blendMode=$c,t}};function Et(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n}Object.assign(Et.prototype,{evaluate:function(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];e:{t:{let s;n:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,t,r)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}s=e.length;break n}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let a=n-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(n===a)break;if(i=r,r=e[--n-1],t>=r)break t}s=n,n=0;break n}break e}for(;n<s;){let o=n+s>>>1;t<e[o]?s=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(i===void 0)return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,r,t)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let s=0;s!==i;++s)e[s]=n[r+s];return e},interpolate_:function(){throw new Error("call to abstract method")},intervalChanged_:function(){}});Object.assign(Et.prototype,{beforeStart_:Et.prototype.copySampleValue_,afterEnd_:Et.prototype.copySampleValue_});function ka(t,e,n,i){Et.call(this,t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0}ka.prototype=Object.assign(Object.create(Et.prototype),{constructor:ka,DefaultSettings_:{endingStart:Pi,endingEnd:Pi},intervalChanged_:function(t,e,n){let i=this.parameterPositions,r=t-2,s=t+1,o=i[r],a=i[s];if(o===void 0)switch(this.getSettings_().endingStart){case Ii:r=t,o=2*e-n;break;case Ss:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(a===void 0)switch(this.getSettings_().endingEnd){case Ii:s=t,a=2*n-e;break;case Ss:s=1,a=n+i[1]-i[0];break;default:s=t-1,a=e}let c=(n-e)*.5,l=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(a-n),this._offsetPrev=r*l,this._offsetNext=s*l},interpolate_:function(t,e,n,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=t*o,c=a-o,l=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,f=this._weightNext,d=(n-e)/(i-e),p=d*d,y=p*d,v=-u*y+2*u*p-u*d,g=(1+u)*y+(-1.5-2*u)*p+(-.5+u)*d+1,m=(-1-f)*y+(1.5+f)*p+.5*d,A=f*y-f*p;for(let S=0;S!==o;++S)r[S]=v*s[l+S]+g*s[c+S]+m*s[a+S]+A*s[h+S];return r}});function ao(t,e,n,i){Et.call(this,t,e,n,i)}ao.prototype=Object.assign(Object.create(Et.prototype),{constructor:ao,interpolate_:function(t,e,n,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=t*o,c=a-o,l=(n-e)/(i-e),h=1-l;for(let u=0;u!==o;++u)r[u]=s[c+u]*h+s[a+u]*l;return r}});function Va(t,e,n,i){Et.call(this,t,e,n,i)}Va.prototype=Object.assign(Object.create(Et.prototype),{constructor:Va,interpolate_:function(t){return this.copySampleValue_(t-1)}});function Mt(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Qe.convertArray(e,this.TimeBufferType),this.values=Qe.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}Object.assign(Mt,{toJSON:function(t){let e=t.constructor,n;if(e.toJSON!==void 0)n=e.toJSON(t);else{n={name:t.name,times:Qe.convertArray(t.times,Array),values:Qe.convertArray(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}});Object.assign(Mt.prototype,{constructor:Mt,TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:oi,InterpolantFactoryMethodDiscrete:function(t){return new Va(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodLinear:function(t){return new ao(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodSmooth:function(t){return new ka(this.times,this.values,this.getValueSize(),t)},setInterpolation:function(t){let e;switch(t){case Ci:e=this.InterpolantFactoryMethodDiscrete;break;case oi:e=this.InterpolantFactoryMethodLinear;break;case Jo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ci;case this.InterpolantFactoryMethodLinear:return oi;case this.InterpolantFactoryMethodSmooth:return Jo}},getValueSize:function(){return this.values.length/this.times.length},shift:function(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this},scale:function(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this},trim:function(t,e){let n=this.times,i=n.length,r=0,s=i-1;for(;r!==i&&n[r]<t;)++r;for(;s!==-1&&n[s]>e;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);let o=this.getValueSize();this.times=Qe.arraySlice(n,r,s),this.values=Qe.arraySlice(this.values,r*o,s*o)}return this},validate:function(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let s=null;for(let o=0;o!==r;o++){let a=n[o];if(typeof a=="number"&&isNaN(a)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,a),t=!1;break}if(s!==null&&s>a){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,a,s),t=!1;break}s=a}if(i!==void 0&&Qe.isTypedArray(i))for(let o=0,a=i.length;o!==a;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t},optimize:function(){let t=Qe.arraySlice(this.times),e=Qe.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===Jo,r=t.length-1,s=1;for(let o=1;o<r;++o){let a=!1,c=t[o],l=t[o+1];if(c!==l&&(o!==1||c!==t[0]))if(i)a=!0;else{let h=o*n,u=h-n,f=h+n;for(let d=0;d!==n;++d){let p=e[h+d];if(p!==e[u+d]||p!==e[f+d]){a=!0;break}}}if(a){if(o!==s){t[s]=t[o];let h=o*n,u=s*n;for(let f=0;f!==n;++f)e[u+f]=e[h+f]}++s}}if(r>0){t[s]=t[r];for(let o=r*n,a=s*n,c=0;c!==n;++c)e[a+c]=e[o+c];++s}return s!==t.length?(this.times=Qe.arraySlice(t,0,s),this.values=Qe.arraySlice(e,0,s*n)):(this.times=t,this.values=e),this},clone:function(){let t=Qe.arraySlice(this.times,0),e=Qe.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}});function Wa(t,e,n){Mt.call(this,t,e,n)}Wa.prototype=Object.assign(Object.create(Mt.prototype),{constructor:Wa,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:Ci,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function ja(t,e,n,i){Mt.call(this,t,e,n,i)}ja.prototype=Object.assign(Object.create(Mt.prototype),{constructor:ja,ValueTypeName:"color"});function vi(t,e,n,i){Mt.call(this,t,e,n,i)}vi.prototype=Object.assign(Object.create(Mt.prototype),{constructor:vi,ValueTypeName:"number"});function qa(t,e,n,i){Et.call(this,t,e,n,i)}qa.prototype=Object.assign(Object.create(Et.prototype),{constructor:qa,interpolate_:function(t,e,n,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=(n-e)/(i-e),c=t*o;for(let l=c+o;c!==l;c+=4)ut.slerpFlat(r,0,s,c-o,s,c,a);return r}});function lr(t,e,n,i){Mt.call(this,t,e,n,i)}lr.prototype=Object.assign(Object.create(Mt.prototype),{constructor:lr,ValueTypeName:"quaternion",DefaultInterpolation:oi,InterpolantFactoryMethodLinear:function(t){return new qa(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodSmooth:void 0});function Xa(t,e,n,i){Mt.call(this,t,e,n,i)}Xa.prototype=Object.assign(Object.create(Mt.prototype),{constructor:Xa,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:Ci,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function yi(t,e,n,i){Mt.call(this,t,e,n,i)}yi.prototype=Object.assign(Object.create(Mt.prototype),{constructor:yi,ValueTypeName:"vector"});function Ft(t,e=-1,n,i=Ko){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Ee.generateUUID(),this.duration<0&&this.resetDuration()}function wv(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return vi;case"vector":case"vector2":case"vector3":case"vector4":return yi;case"color":return ja;case"quaternion":return lr;case"bool":case"boolean":return Wa;case"string":return Xa}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}function Mv(t){if(t.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=wv(t.type);if(t.times===void 0){let n=[],i=[];Qe.flattenJSON(t.keys,n,i,"value"),t.times=n,t.values=i}return e.parse!==void 0?e.parse(t):new e(t.name,t.times,t.values,t.interpolation)}Object.assign(Ft,{parse:function(t){let e=[],n=t.tracks,i=1/(t.fps||1);for(let s=0,o=n.length;s!==o;++s)e.push(Mv(n[s]).scale(i));let r=new Ft(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r},toJSON:function(t){let e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,s=n.length;r!==s;++r)e.push(Mt.toJSON(n[r]));return i},CreateFromMorphTargetSequence:function(t,e,n,i){let r=e.length,s=[];for(let o=0;o<r;o++){let a=[],c=[];a.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let l=Qe.getKeyframeOrder(a);a=Qe.sortedArray(a,1,l),c=Qe.sortedArray(c,1,l),!i&&a[0]===0&&(a.push(r),c.push(c[0])),s.push(new vi(".morphTargetInfluences["+e[o].name+"]",a,c).scale(1/n))}return new Ft(t,-1,s)},findByName:function(t,e){let n=t;if(!Array.isArray(t)){let i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null},CreateClipsFromMorphTargetSequences:function(t,e,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,a=t.length;o<a;o++){let c=t[o],l=c.name.match(r);if(l&&l.length>1){let h=l[1],u=i[h];u||(i[h]=u=[]),u.push(c)}}let s=[];for(let o in i)s.push(Ft.CreateFromMorphTargetSequence(o,i[o],e,n));return s},parseAnimation:function(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,u,f,d,p){if(f.length!==0){let y=[],v=[];Qe.flattenJSON(f,y,v,d),y.length!==0&&p.push(new h(u,y,v))}},i=[],r=t.name||"default",s=t.fps||30,o=t.blendMode,a=t.length||-1,c=t.hierarchy||[];for(let h=0;h<c.length;h++){let u=c[h].keys;if(!(!u||u.length===0))if(u[0].morphTargets){let f={},d;for(d=0;d<u.length;d++)if(u[d].morphTargets)for(let p=0;p<u[d].morphTargets.length;p++)f[u[d].morphTargets[p]]=-1;for(let p in f){let y=[],v=[];for(let g=0;g!==u[d].morphTargets.length;++g){let m=u[d];y.push(m.time),v.push(m.morphTarget===p?1:0)}i.push(new vi(".morphTargetInfluence["+p+"]",y,v))}a=f.length*(s||1)}else{let f=".bones["+e[h].name+"]";n(yi,f+".position",u,"pos",i),n(lr,f+".quaternion",u,"rot",i),n(yi,f+".scale",u,"scl",i)}}return i.length===0?null:new Ft(r,a,i,o)}});Object.assign(Ft.prototype,{resetDuration:function(){let t=this.tracks,e=0;for(let n=0,i=t.length;n!==i;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this},trim:function(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this},validate:function(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t},optimize:function(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this},clone:function(){let t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new Ft(this.name,this.duration,t,this.blendMode)},toJSON:function(){return Ft.toJSON(this)}});var ur={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function Sv(t,e,n){let i=this,r=!1,s=0,o=0,a,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(l){o++,r===!1&&i.onStart!==void 0&&i.onStart(l,s,o),r=!0},this.itemEnd=function(l){s++,i.onProgress!==void 0&&i.onProgress(l,s,o),s===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(l){i.onError!==void 0&&i.onError(l)},this.resolveURL=function(l){return a?a(l):l},this.setURLModifier=function(l){return a=l,this},this.addHandler=function(l,h){return c.push(l,h),this},this.removeHandler=function(l){let h=c.indexOf(l);return h!==-1&&c.splice(h,2),this},this.getHandler=function(l){for(let h=0,u=c.length;h<u;h+=2){let f=c[h],d=c[h+1];if(f.global&&(f.lastIndex=0),f.test(l))return d}return null}}var Tv=new Sv;function Ue(t){this.manager=t!==void 0?t:Tv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}Object.assign(Ue.prototype,{load:function(){},loadAsync:function(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})},parse:function(){},setCrossOrigin:function(t){return this.crossOrigin=t,this},setWithCredentials:function(t){return this.withCredentials=t,this},setPath:function(t){return this.path=t,this},setResourcePath:function(t){return this.resourcePath=t,this},setRequestHeader:function(t){return this.requestHeader=t,this}});var Zt={};function Rt(t){Ue.call(this,t)}Rt.prototype=Object.assign(Object.create(Ue.prototype),{constructor:Rt,load:function(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,s=ur.get(t);if(s!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s;if(Zt[t]!==void 0){Zt[t].push({onLoad:e,onProgress:n,onError:i});return}let o=/^data:(.*?)(;base64)?,(.*)$/,a=t.match(o),c;if(a){let l=a[1],h=!!a[2],u=a[3];u=decodeURIComponent(u),h&&(u=atob(u));try{let f,d=(this.responseType||"").toLowerCase();switch(d){case"arraybuffer":case"blob":let p=new Uint8Array(u.length);for(let v=0;v<u.length;v++)p[v]=u.charCodeAt(v);d==="blob"?f=new Blob([p.buffer],{type:l}):f=p.buffer;break;case"document":f=new DOMParser().parseFromString(u,l);break;case"json":f=JSON.parse(u);break;default:f=u;break}setTimeout(function(){e&&e(f),r.manager.itemEnd(t)},0)}catch(f){setTimeout(function(){i&&i(f),r.manager.itemError(t),r.manager.itemEnd(t)},0)}}else{Zt[t]=[],Zt[t].push({onLoad:e,onProgress:n,onError:i}),c=new XMLHttpRequest,c.open("GET",t,!0),c.addEventListener("load",function(l){let h=this.response,u=Zt[t];if(delete Zt[t],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),ur.add(t,h);for(let f=0,d=u.length;f<d;f++){let p=u[f];p.onLoad&&p.onLoad(h)}r.manager.itemEnd(t)}else{for(let f=0,d=u.length;f<d;f++){let p=u[f];p.onError&&p.onError(l)}r.manager.itemError(t),r.manager.itemEnd(t)}},!1),c.addEventListener("progress",function(l){let h=Zt[t];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onProgress&&d.onProgress(l)}},!1),c.addEventListener("error",function(l){let h=Zt[t];delete Zt[t];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(l)}r.manager.itemError(t),r.manager.itemEnd(t)},!1),c.addEventListener("abort",function(l){let h=Zt[t];delete Zt[t];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(l)}r.manager.itemError(t),r.manager.itemEnd(t)},!1),this.responseType!==void 0&&(c.responseType=this.responseType),this.withCredentials!==void 0&&(c.withCredentials=this.withCredentials),c.overrideMimeType&&c.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(let l in this.requestHeader)c.setRequestHeader(l,this.requestHeader[l]);c.send(null)}return r.manager.itemStart(t),c},setResponseType:function(t){return this.responseType=t,this},setMimeType:function(t){return this.mimeType=t,this}});function gu(t){Ue.call(this,t)}gu.prototype=Object.assign(Object.create(Ue.prototype),{constructor:gu,load:function(t,e,n,i){let r=this,s=new Rt(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(a){i?i(a):console.error(a),r.manager.itemError(t)}},n,i)},parse:function(t){let e=[];for(let n=0;n<t.length;n++){let i=Ft.parse(t[n]);e.push(i)}return e}});function vu(t){Ue.call(this,t)}vu.prototype=Object.assign(Object.create(Ue.prototype),{constructor:vu,load:function(t,e,n,i){let r=this,s=[],o=new Kr,a=new Rt(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(r.withCredentials);let c=0;function l(h){a.load(t[h],function(u){let f=r.parse(u,!0);s[h]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(o.minFilter=je),o.image=s,o.format=f.format,o.needsUpdate=!0,e&&e(o))},n,i)}if(Array.isArray(t))for(let h=0,u=t.length;h<u;++h)l(h);else a.load(t,function(h){let u=r.parse(h,!0);if(u.isCubemap){let f=u.mipmaps.length/u.mipmapCount;for(let d=0;d<f;d++){s[d]={mipmaps:[]};for(let p=0;p<u.mipmapCount;p++)s[d].mipmaps.push(u.mipmaps[d*u.mipmapCount+p]),s[d].format=u.format,s[d].width=u.width,s[d].height=u.height}o.image=s}else o.image.width=u.width,o.image.height=u.height,o.mipmaps=u.mipmaps;u.mipmapCount===1&&(o.minFilter=je),o.format=u.format,o.needsUpdate=!0,e&&e(o)},n,i);return o}});function co(t){Ue.call(this,t)}co.prototype=Object.assign(Object.create(Ue.prototype),{constructor:co,load:function(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,s=ur.get(t);if(s!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s;let o=document.createElementNS("http://www.w3.org/1999/xhtml","img");function a(){o.removeEventListener("load",a,!1),o.removeEventListener("error",c,!1),ur.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(l){o.removeEventListener("load",a,!1),o.removeEventListener("error",c,!1),i&&i(l),r.manager.itemError(t),r.manager.itemEnd(t)}return o.addEventListener("load",a,!1),o.addEventListener("error",c,!1),t.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}});function Ya(t){Ue.call(this,t)}Ya.prototype=Object.assign(Object.create(Ue.prototype),{constructor:Ya,load:function(t,e,n,i){let r=new jn,s=new co(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let o=0;function a(c){s.load(t[c],function(l){r.images[c]=l,o++,o===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let c=0;c<t.length;++c)a(c);return r}});function yu(t){Ue.call(this,t)}yu.prototype=Object.assign(Object.create(Ue.prototype),{constructor:yu,load:function(t,e,n,i){let r=this,s=new Ji,o=new Rt(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(t,function(a){let c=r.parse(a);!c||(c.image!==void 0?s.image=c.image:c.data!==void 0&&(s.image.width=c.width,s.image.height=c.height,s.image.data=c.data),s.wrapS=c.wrapS!==void 0?c.wrapS:Tt,s.wrapT=c.wrapT!==void 0?c.wrapT:Tt,s.magFilter=c.magFilter!==void 0?c.magFilter:je,s.minFilter=c.minFilter!==void 0?c.minFilter:je,s.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.encoding!==void 0&&(s.encoding=c.encoding),c.flipY!==void 0&&(s.flipY=c.flipY),c.format!==void 0&&(s.format=c.format),c.type!==void 0&&(s.type=c.type),c.mipmaps!==void 0&&(s.mipmaps=c.mipmaps,s.minFilter=si),c.mipmapCount===1&&(s.minFilter=je),s.needsUpdate=!0,e&&e(s,c))},n,i),s}});function Tn(t){Ue.call(this,t)}Tn.prototype=Object.assign(Object.create(Ue.prototype),{constructor:Tn,load:function(t,e,n,i){let r=new Xe,s=new co(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(o){r.image=o;let a=t.search(/\.jpe?g($|\?)/i)>0||t.search(/^data\:image\/jpeg/)===0;r.format=a?Vt:zt,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}});function Se(){this.type="Curve",this.arcLengthDivisions=200}Object.assign(Se.prototype,{getPoint:function(){return console.warn("THREE.Curve: .getPoint() not implemented."),null},getPointAt:function(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)},getPoints:function(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e},getSpacedPoints:function(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e},getLength:function(){let t=this.getLengths();return t[t.length-1]},getLengths:function(t){if(t===void 0&&(t=this.arcLengthDivisions),this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let s=1;s<=t;s++)n=this.getPoint(s/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e},updateArcLengths:function(){this.needsUpdate=!0,this.getLengths()},getUtoTmapping:function(t,e){let n=this.getLengths(),i=0,r=n.length,s;e?s=e:s=t*n[r-1];let o=0,a=r-1,c;for(;o<=a;)if(i=Math.floor(o+(a-o)/2),c=n[i]-s,c<0)o=i+1;else if(c>0)a=i-1;else{a=i;break}if(i=a,n[i]===s)return i/(r-1);let l=n[i],u=n[i+1]-l,f=(s-l)/u;return(i+f)/(r-1)},getTangent:function(t,e){let n=1e-4,i=t-n,r=t+n;i<0&&(i=0),r>1&&(r=1);let s=this.getPoint(i),o=this.getPoint(r),a=e||(s.isVector2?new se:new L);return a.copy(o).sub(s).normalize(),a},getTangentAt:function(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)},computeFrenetFrames:function(t,e){let n=new L,i=[],r=[],s=[],o=new L,a=new Re;for(let f=0;f<=t;f++){let d=f/t;i[f]=this.getTangentAt(d,new L),i[f].normalize()}r[0]=new L,s[0]=new L;let c=Number.MAX_VALUE,l=Math.abs(i[0].x),h=Math.abs(i[0].y),u=Math.abs(i[0].z);l<=c&&(c=l,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),s[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),s[f]=s[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let d=Math.acos(Ee.clamp(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(a.makeRotationAxis(o,d))}s[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Ee.clamp(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let d=1;d<=t;d++)r[d].applyMatrix4(a.makeRotationAxis(i[d],f*d)),s[d].crossVectors(i[d],r[d])}return{tangents:i,normals:r,binormals:s}},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.arcLengthDivisions=t.arcLengthDivisions,this},toJSON:function(){let t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t},fromJSON:function(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}});function kt(t,e,n,i,r,s,o,a){Se.call(this),this.type="EllipseCurve",this.aX=t||0,this.aY=e||0,this.xRadius=n||1,this.yRadius=i||1,this.aStartAngle=r||0,this.aEndAngle=s||2*Math.PI,this.aClockwise=o||!1,this.aRotation=a||0}kt.prototype=Object.create(Se.prototype);kt.prototype.constructor=kt;kt.prototype.isEllipseCurve=!0;kt.prototype.getPoint=function(t,e){let n=e||new se,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(s?r=0:r=i),this.aClockwise===!0&&!s&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+t*r,a=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let l=Math.cos(this.aRotation),h=Math.sin(this.aRotation),u=a-this.aX,f=c-this.aY;a=u*l-f*h+this.aX,c=u*h+f*l+this.aY}return n.set(a,c)};kt.prototype.copy=function(t){return Se.prototype.copy.call(this,t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this};kt.prototype.toJSON=function(){let t=Se.prototype.toJSON.call(this);return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t};kt.prototype.fromJSON=function(t){return Se.prototype.fromJSON.call(this,t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this};function ts(t,e,n,i,r,s){kt.call(this,t,e,n,n,i,r,s),this.type="ArcCurve"}ts.prototype=Object.create(kt.prototype);ts.prototype.constructor=ts;ts.prototype.isArcCurve=!0;function Za(){let t=0,e=0,n=0,i=0;function r(s,o,a,c){t=s,e=a,n=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,h,u){let f=(o-s)/l-(a-s)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,r(o,a,f,d)},calc:function(s){let o=s*s,a=o*s;return t+e*s+n*o+i*a}}}var lo=new L,Ja=new Za,Ka=new Za,$a=new Za;function ot(t=[],e=!1,n="centripetal",i=.5){Se.call(this),this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}ot.prototype=Object.create(Se.prototype);ot.prototype.constructor=ot;ot.prototype.isCatmullRomCurve3=!0;ot.prototype.getPoint=function(t,e=new L){let n=e,i=this.points,r=i.length,s=(r-(this.closed?0:1))*t,o=Math.floor(s),a=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:a===0&&o===r-1&&(o=r-2,a=1);let c,l;this.closed||o>0?c=i[(o-1)%r]:(lo.subVectors(i[0],i[1]).add(i[0]),c=lo);let h=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?l=i[(o+2)%r]:(lo.subVectors(i[r-1],i[r-2]).add(i[r-1]),l=lo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,d=Math.pow(c.distanceToSquared(h),f),p=Math.pow(h.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(l),f);p<1e-4&&(p=1),d<1e-4&&(d=p),y<1e-4&&(y=p),Ja.initNonuniformCatmullRom(c.x,h.x,u.x,l.x,d,p,y),Ka.initNonuniformCatmullRom(c.y,h.y,u.y,l.y,d,p,y),$a.initNonuniformCatmullRom(c.z,h.z,u.z,l.z,d,p,y)}else this.curveType==="catmullrom"&&(Ja.initCatmullRom(c.x,h.x,u.x,l.x,this.tension),Ka.initCatmullRom(c.y,h.y,u.y,l.y,this.tension),$a.initCatmullRom(c.z,h.z,u.z,l.z,this.tension));return n.set(Ja.calc(a),Ka.calc(a),$a.calc(a)),n};ot.prototype.copy=function(t){Se.prototype.copy.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this};ot.prototype.toJSON=function(){let t=Se.prototype.toJSON.call(this);t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t};ot.prototype.fromJSON=function(t){Se.prototype.fromJSON.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new L().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this};function xu(t,e,n,i,r){let s=(i-e)*.5,o=(r-n)*.5,a=t*t,c=t*a;return(2*n-2*i+s+o)*c+(-3*n+3*i-2*s-o)*a+s*t+n}function Ev(t,e){let n=1-t;return n*n*e}function Av(t,e){return 2*(1-t)*t*e}function Lv(t,e){return t*t*e}function ns(t,e,n,i){return Ev(t,e)+Av(t,n)+Lv(t,i)}function Rv(t,e){let n=1-t;return n*n*n*e}function Cv(t,e){let n=1-t;return 3*n*n*t*e}function Pv(t,e){return 3*(1-t)*t*t*e}function Iv(t,e){return t*t*t*e}function is(t,e,n,i,r){return Rv(t,e)+Cv(t,n)+Pv(t,i)+Iv(t,r)}function sn(t=new se,e=new se,n=new se,i=new se){Se.call(this),this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}sn.prototype=Object.create(Se.prototype);sn.prototype.constructor=sn;sn.prototype.isCubicBezierCurve=!0;sn.prototype.getPoint=function(t,e=new se){let n=e,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(is(t,i.x,r.x,s.x,o.x),is(t,i.y,r.y,s.y,o.y)),n};sn.prototype.copy=function(t){return Se.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this};sn.prototype.toJSON=function(){let t=Se.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t};sn.prototype.fromJSON=function(t){return Se.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this};function En(t=new L,e=new L,n=new L,i=new L){Se.call(this),this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}En.prototype=Object.create(Se.prototype);En.prototype.constructor=En;En.prototype.isCubicBezierCurve3=!0;En.prototype.getPoint=function(t,e=new L){let n=e,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(is(t,i.x,r.x,s.x,o.x),is(t,i.y,r.y,s.y,o.y),is(t,i.z,r.z,s.z,o.z)),n};En.prototype.copy=function(t){return Se.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this};En.prototype.toJSON=function(){let t=Se.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t};En.prototype.fromJSON=function(t){return Se.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this};function Bt(t=new se,e=new se){Se.call(this),this.type="LineCurve",this.v1=t,this.v2=e}Bt.prototype=Object.create(Se.prototype);Bt.prototype.constructor=Bt;Bt.prototype.isLineCurve=!0;Bt.prototype.getPoint=function(t,e=new se){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n};Bt.prototype.getPointAt=function(t,e){return this.getPoint(t,e)};Bt.prototype.getTangent=function(t,e){let n=e||new se;return n.copy(this.v2).sub(this.v1).normalize(),n};Bt.prototype.copy=function(t){return Se.prototype.copy.call(this,t),this.v1.copy(t.v1),this.v2.copy(t.v2),this};Bt.prototype.toJSON=function(){let t=Se.prototype.toJSON.call(this);return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t};Bt.prototype.fromJSON=function(t){return Se.prototype.fromJSON.call(this,t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this};function on(t=new L,e=new L){Se.call(this),this.type="LineCurve3",this.v1=t,this.v2=e}on.prototype=Object.create(Se.prototype);on.prototype.constructor=on;on.prototype.isLineCurve3=!0;on.prototype.getPoint=function(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n};on.prototype.getPointAt=function(t,e){return this.getPoint(t,e)};on.prototype.copy=function(t){return Se.prototype.copy.call(this,t),this.v1.copy(t.v1),this.v2.copy(t.v2),this};on.prototype.toJSON=function(){let t=Se.prototype.toJSON.call(this);return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t};on.prototype.fromJSON=function(t){return Se.prototype.fromJSON.call(this,t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this};function an(t=new se,e=new se,n=new se){Se.call(this),this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}an.prototype=Object.create(Se.prototype);an.prototype.constructor=an;an.prototype.isQuadraticBezierCurve=!0;an.prototype.getPoint=function(t,e=new se){let n=e,i=this.v0,r=this.v1,s=this.v2;return n.set(ns(t,i.x,r.x,s.x),ns(t,i.y,r.y,s.y)),n};an.prototype.copy=function(t){return Se.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this};an.prototype.toJSON=function(){let t=Se.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t};an.prototype.fromJSON=function(t){return Se.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this};function An(t=new L,e=new L,n=new L){Se.call(this),this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}An.prototype=Object.create(Se.prototype);An.prototype.constructor=An;An.prototype.isQuadraticBezierCurve3=!0;An.prototype.getPoint=function(t,e=new L){let n=e,i=this.v0,r=this.v1,s=this.v2;return n.set(ns(t,i.x,r.x,s.x),ns(t,i.y,r.y,s.y),ns(t,i.z,r.z,s.z)),n};An.prototype.copy=function(t){return Se.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this};An.prototype.toJSON=function(){let t=Se.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t};An.prototype.fromJSON=function(t){return Se.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this};function cn(t=[]){Se.call(this),this.type="SplineCurve",this.points=t}cn.prototype=Object.create(Se.prototype);cn.prototype.constructor=cn;cn.prototype.isSplineCurve=!0;cn.prototype.getPoint=function(t,e=new se){let n=e,i=this.points,r=(i.length-1)*t,s=Math.floor(r),o=r-s,a=i[s===0?s:s-1],c=i[s],l=i[s>i.length-2?i.length-1:s+1],h=i[s>i.length-3?i.length-1:s+2];return n.set(xu(o,a.x,c.x,l.x,h.x),xu(o,a.y,c.y,l.y,h.y)),n};cn.prototype.copy=function(t){Se.prototype.copy.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this};cn.prototype.toJSON=function(){let t=Se.prototype.toJSON.call(this);t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t};cn.prototype.fromJSON=function(t){Se.prototype.fromJSON.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new se().fromArray(i))}return this};var Dv=Object.freeze({__proto__:null,ArcCurve:ts,CatmullRomCurve3:ot,CubicBezierCurve:sn,CubicBezierCurve3:En,EllipseCurve:kt,LineCurve:Bt,LineCurve3:on,QuadraticBezierCurve:an,QuadraticBezierCurve3:An,SplineCurve:cn});function xi(){Se.call(this),this.type="CurvePath",this.curves=[],this.autoClose=!1}xi.prototype=Object.assign(Object.create(Se.prototype),{constructor:xi,add:function(t){this.curves.push(t)},closePath:function(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new Bt(e,t))},getPoint:function(t){let e=t*this.getLength(),n=this.getCurveLengths(),i=0;for(;i<n.length;){if(n[i]>=e){let r=n[i]-e,s=this.curves[i],o=s.getLength(),a=o===0?0:1-r/o;return s.getPointAt(a)}i++}return null},getLength:function(){let t=this.getCurveLengths();return t[t.length-1]},updateArcLengths:function(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t},getSpacedPoints:function(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e},getPoints:function(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let s=r[i],o=s&&s.isEllipseCurve?t*2:s&&(s.isLineCurve||s.isLineCurve3)?1:s&&s.isSplineCurve?t*s.points.length:t,a=s.getPoints(o);for(let c=0;c<a.length;c++){let l=a[c];n&&n.equals(l)||(e.push(l),n=l)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e},copy:function(t){Se.prototype.copy.call(this,t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this},toJSON:function(){let t=Se.prototype.toJSON.call(this);t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t},fromJSON:function(t){Se.prototype.fromJSON.call(this,t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Dv[i.type]().fromJSON(i))}return this}});function ln(t){xi.call(this),this.type="Path",this.currentPoint=new se,t&&this.setFromPoints(t)}ln.prototype=Object.assign(Object.create(xi.prototype),{constructor:ln,setFromPoints:function(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this},moveTo:function(t,e){return this.currentPoint.set(t,e),this},lineTo:function(t,e){let n=new Bt(this.currentPoint.clone(),new se(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this},quadraticCurveTo:function(t,e,n,i){let r=new an(this.currentPoint.clone(),new se(t,e),new se(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this},bezierCurveTo:function(t,e,n,i,r,s){let o=new sn(this.currentPoint.clone(),new se(t,e),new se(n,i),new se(r,s));return this.curves.push(o),this.currentPoint.set(r,s),this},splineThru:function(t){let e=[this.currentPoint.clone()].concat(t),n=new cn(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this},arc:function(t,e,n,i,r,s){let o=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(t+o,e+a,n,i,r,s),this},absarc:function(t,e,n,i,r,s){return this.absellipse(t,e,n,n,i,r,s),this},ellipse:function(t,e,n,i,r,s,o,a){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(t+c,e+l,n,i,r,s,o,a),this},absellipse:function(t,e,n,i,r,s,o,a){let c=new kt(t,e,n,i,r,s,o,a);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this},copy:function(t){return xi.prototype.copy.call(this,t),this.currentPoint.copy(t.currentPoint),this},toJSON:function(){let t=xi.prototype.toJSON.call(this);return t.currentPoint=this.currentPoint.toArray(),t},fromJSON:function(t){return xi.prototype.fromJSON.call(this,t),this.currentPoint.fromArray(t.currentPoint),this}});function hr(t){ln.call(this,t),this.uuid=Ee.generateUUID(),this.type="Shape",this.holes=[]}hr.prototype=Object.assign(Object.create(ln.prototype),{constructor:hr,getPointsHoles:function(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e},extractPoints:function(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}},copy:function(t){ln.prototype.copy.call(this,t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this},toJSON:function(){let t=ln.prototype.toJSON.call(this);t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t},fromJSON:function(t){ln.prototype.fromJSON.call(this,t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new ln().fromJSON(i))}return this}});function Je(t,e=1){ge.call(this),this.type="Light",this.color=new ue(t),this.intensity=e}Je.prototype=Object.assign(Object.create(ge.prototype),{constructor:Je,isLight:!0,copy:function(t){return ge.prototype.copy.call(this,t),this.color.copy(t.color),this.intensity=t.intensity,this},toJSON:function(t){let e=ge.prototype.toJSON.call(this,t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}});function _u(t,e,n){Je.call(this,t,n),this.type="HemisphereLight",this.position.copy(ge.DefaultUp),this.updateMatrix(),this.groundColor=new ue(e)}_u.prototype=Object.assign(Object.create(Je.prototype),{constructor:_u,isHemisphereLight:!0,copy:function(t){return Je.prototype.copy.call(this,t),this.groundColor.copy(t.groundColor),this}});function Ln(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new se(512,512),this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zr,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new Ge(0,0,1,1)]}Object.assign(Ln.prototype,{_projScreenMatrix:new Re,_lightPositionWorld:new L,_lookTarget:new L,getViewportCount:function(){return this._viewportCount},getFrustum:function(){return this._frustum},updateMatrices:function(t){let e=this.camera,n=this.matrix,i=this._projScreenMatrix,r=this._lookTarget,s=this._lightPositionWorld;s.setFromMatrixPosition(t.matrixWorld),e.position.copy(s),r.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(r),e.updateMatrixWorld(),i.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(i),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(e.projectionMatrix),n.multiply(e.matrixWorldInverse)},getViewport:function(t){return this._viewports[t]},getFrameExtents:function(){return this._frameExtents},copy:function(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}});function Qa(){Ln.call(this,new $e(50,1,.5,500)),this.focus=1}Qa.prototype=Object.assign(Object.create(Ln.prototype),{constructor:Qa,isSpotLightShadow:!0,updateMatrices:function(t){let e=this.camera,n=Ee.RAD2DEG*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),Ln.prototype.updateMatrices.call(this,t)}});function uo(t,e,n,i,r,s){Je.call(this,t,e),this.type="SpotLight",this.position.copy(ge.DefaultUp),this.updateMatrix(),this.target=new ge,Object.defineProperty(this,"power",{get:function(){return this.intensity*Math.PI},set:function(o){this.intensity=o/Math.PI}}),this.distance=n!==void 0?n:0,this.angle=i!==void 0?i:Math.PI/3,this.penumbra=r!==void 0?r:0,this.decay=s!==void 0?s:1,this.shadow=new Qa}uo.prototype=Object.assign(Object.create(Je.prototype),{constructor:uo,isSpotLight:!0,copy:function(t){return Je.prototype.copy.call(this,t),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}});function ec(){Ln.call(this,new $e(90,1,.5,500)),this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new Ge(2,1,1,1),new Ge(0,1,1,1),new Ge(3,1,1,1),new Ge(1,1,1,1),new Ge(3,0,1,1),new Ge(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}ec.prototype=Object.assign(Object.create(Ln.prototype),{constructor:ec,isPointLightShadow:!0,updateMatrices:function(t,e=0){let n=this.camera,i=this.matrix,r=this._lightPositionWorld,s=this._lookTarget,o=this._projScreenMatrix;r.setFromMatrixPosition(t.matrixWorld),n.position.copy(r),s.copy(n.position),s.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(s),n.updateMatrixWorld(),i.makeTranslation(-r.x,-r.y,-r.z),o.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(o)}});function fr(t,e,n,i){Je.call(this,t,e),this.type="PointLight",Object.defineProperty(this,"power",{get:function(){return this.intensity*4*Math.PI},set:function(r){this.intensity=r/(4*Math.PI)}}),this.distance=n!==void 0?n:0,this.decay=i!==void 0?i:1,this.shadow=new ec}fr.prototype=Object.assign(Object.create(Je.prototype),{constructor:fr,isPointLight:!0,copy:function(t){return Je.prototype.copy.call(this,t),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}});function dr(t=-1,e=1,n=1,i=-1,r=.1,s=2e3){Wn.call(this),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}dr.prototype=Object.assign(Object.create(Wn.prototype),{constructor:dr,isOrthographicCamera:!0,copy:function(t,e){return Wn.prototype.copy.call(this,t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this},setViewOffset:function(t,e,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,s=n+t,o=i+e,a=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=l*this.view.offsetY,a=o-l*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,a,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()},toJSON:function(t){let e=ge.prototype.toJSON.call(this,t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}});function tc(){Ln.call(this,new dr(-5,5,5,-5,.5,500))}tc.prototype=Object.assign(Object.create(Ln.prototype),{constructor:tc,isDirectionalLightShadow:!0,updateMatrices:function(t){Ln.prototype.updateMatrices.call(this,t)}});function pr(t,e){Je.call(this,t,e),this.type="DirectionalLight",this.position.copy(ge.DefaultUp),this.updateMatrix(),this.target=new ge,this.shadow=new tc}pr.prototype=Object.assign(Object.create(Je.prototype),{constructor:pr,isDirectionalLight:!0,copy:function(t){return Je.prototype.copy.call(this,t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}});function ho(t,e){Je.call(this,t,e),this.type="AmbientLight"}ho.prototype=Object.assign(Object.create(Je.prototype),{constructor:ho,isAmbientLight:!0});function bu(t,e,n,i){Je.call(this,t,e),this.type="RectAreaLight",this.width=n!==void 0?n:10,this.height=i!==void 0?i:10}bu.prototype=Object.assign(Object.create(Je.prototype),{constructor:bu,isRectAreaLight:!0,copy:function(t){return Je.prototype.copy.call(this,t),this.width=t.width,this.height=t.height,this},toJSON:function(t){let e=Je.prototype.toJSON.call(this,t);return e.object.width=this.width,e.object.height=this.height,e}});var wu=class{constructor(){Object.defineProperty(this,"isSphericalHarmonics3",{value:!0}),this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new L)}set(e){for(let n=0;n<9;n++)this.coefficients[n].copy(e[n]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,n){let i=e.x,r=e.y,s=e.z,o=this.coefficients;return n.copy(o[0]).multiplyScalar(.282095),n.addScaledVector(o[1],.488603*r),n.addScaledVector(o[2],.488603*s),n.addScaledVector(o[3],.488603*i),n.addScaledVector(o[4],1.092548*(i*r)),n.addScaledVector(o[5],1.092548*(r*s)),n.addScaledVector(o[6],.315392*(3*s*s-1)),n.addScaledVector(o[7],1.092548*(i*s)),n.addScaledVector(o[8],.546274*(i*i-r*r)),n}getIrradianceAt(e,n){let i=e.x,r=e.y,s=e.z,o=this.coefficients;return n.copy(o[0]).multiplyScalar(.886227),n.addScaledVector(o[1],2*.511664*r),n.addScaledVector(o[2],2*.511664*s),n.addScaledVector(o[3],2*.511664*i),n.addScaledVector(o[4],2*.429043*i*r),n.addScaledVector(o[5],2*.429043*r*s),n.addScaledVector(o[6],.743125*s*s-.247708),n.addScaledVector(o[7],2*.429043*i*s),n.addScaledVector(o[8],.429043*(i*i-r*r)),n}add(e){for(let n=0;n<9;n++)this.coefficients[n].add(e.coefficients[n]);return this}addScaledSH(e,n){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],n);return this}scale(e){for(let n=0;n<9;n++)this.coefficients[n].multiplyScalar(e);return this}lerp(e,n){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],n);return this}equals(e){for(let n=0;n<9;n++)if(!this.coefficients[n].equals(e.coefficients[n]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,n=0){let i=this.coefficients;for(let r=0;r<9;r++)i[r].fromArray(e,n+r*3);return this}toArray(e=[],n=0){let i=this.coefficients;for(let r=0;r<9;r++)i[r].toArray(e,n+r*3);return e}static getBasisAt(e,n){let i=e.x,r=e.y,s=e.z;n[0]=.282095,n[1]=.488603*r,n[2]=.488603*s,n[3]=.488603*i,n[4]=1.092548*i*r,n[5]=1.092548*r*s,n[6]=.315392*(3*s*s-1),n[7]=1.092548*i*s,n[8]=.546274*(i*i-r*r)}};function un(t,e){Je.call(this,void 0,e),this.type="LightProbe",this.sh=t!==void 0?t:new wu}un.prototype=Object.assign(Object.create(Je.prototype),{constructor:un,isLightProbe:!0,copy:function(t){return Je.prototype.copy.call(this,t),this.sh.copy(t.sh),this},fromJSON:function(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this},toJSON:function(t){let e=Je.prototype.toJSON.call(this,t);return e.object.sh=this.sh.toArray(),e}});function Mu(t){Ue.call(this,t),this.textures={}}Mu.prototype=Object.assign(Object.create(Ue.prototype),{constructor:Mu,load:function(t,e,n,i){let r=this,s=new Rt(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(a){i?i(a):console.error(a),r.manager.itemError(t)}},n,i)},parse:function(t){let e=this.textures;function n(r){return e[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),e[r]}let i=new bv[t.type];if(t.uuid!==void 0&&(i.uuid=t.uuid),t.name!==void 0&&(i.name=t.name),t.color!==void 0&&i.color!==void 0&&i.color.setHex(t.color),t.roughness!==void 0&&(i.roughness=t.roughness),t.metalness!==void 0&&(i.metalness=t.metalness),t.sheen!==void 0&&(i.sheen=new ue().setHex(t.sheen)),t.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(t.emissive),t.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(t.specular),t.shininess!==void 0&&(i.shininess=t.shininess),t.clearcoat!==void 0&&(i.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=t.clearcoatRoughness),t.fog!==void 0&&(i.fog=t.fog),t.flatShading!==void 0&&(i.flatShading=t.flatShading),t.blending!==void 0&&(i.blending=t.blending),t.combine!==void 0&&(i.combine=t.combine),t.side!==void 0&&(i.side=t.side),t.opacity!==void 0&&(i.opacity=t.opacity),t.transparent!==void 0&&(i.transparent=t.transparent),t.alphaTest!==void 0&&(i.alphaTest=t.alphaTest),t.depthTest!==void 0&&(i.depthTest=t.depthTest),t.depthWrite!==void 0&&(i.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(i.colorWrite=t.colorWrite),t.stencilWrite!==void 0&&(i.stencilWrite=t.stencilWrite),t.stencilWriteMask!==void 0&&(i.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(i.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(i.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(i.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(i.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(i.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(i.stencilZPass=t.stencilZPass),t.wireframe!==void 0&&(i.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(i.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(i.rotation=t.rotation),t.linewidth!==1&&(i.linewidth=t.linewidth),t.dashSize!==void 0&&(i.dashSize=t.dashSize),t.gapSize!==void 0&&(i.gapSize=t.gapSize),t.scale!==void 0&&(i.scale=t.scale),t.polygonOffset!==void 0&&(i.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=t.polygonOffsetUnits),t.skinning!==void 0&&(i.skinning=t.skinning),t.morphTargets!==void 0&&(i.morphTargets=t.morphTargets),t.morphNormals!==void 0&&(i.morphNormals=t.morphNormals),t.dithering!==void 0&&(i.dithering=t.dithering),t.vertexTangents!==void 0&&(i.vertexTangents=t.vertexTangents),t.visible!==void 0&&(i.visible=t.visible),t.toneMapped!==void 0&&(i.toneMapped=t.toneMapped),t.userData!==void 0&&(i.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?i.vertexColors=t.vertexColors>0:i.vertexColors=t.vertexColors),t.uniforms!==void 0)for(let r in t.uniforms){let s=t.uniforms[r];switch(i.uniforms[r]={},s.type){case"t":i.uniforms[r].value=n(s.value);break;case"c":i.uniforms[r].value=new ue().setHex(s.value);break;case"v2":i.uniforms[r].value=new se().fromArray(s.value);break;case"v3":i.uniforms[r].value=new L().fromArray(s.value);break;case"v4":i.uniforms[r].value=new Ge().fromArray(s.value);break;case"m3":i.uniforms[r].value=new Ct().fromArray(s.value);break;case"m4":i.uniforms[r].value=new Re().fromArray(s.value);break;default:i.uniforms[r].value=s.value}}if(t.defines!==void 0&&(i.defines=t.defines),t.vertexShader!==void 0&&(i.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(i.fragmentShader=t.fragmentShader),t.extensions!==void 0)for(let r in t.extensions)i.extensions[r]=t.extensions[r];if(t.shading!==void 0&&(i.flatShading=t.shading===1),t.size!==void 0&&(i.size=t.size),t.sizeAttenuation!==void 0&&(i.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(i.map=n(t.map)),t.matcap!==void 0&&(i.matcap=n(t.matcap)),t.alphaMap!==void 0&&(i.alphaMap=n(t.alphaMap)),t.bumpMap!==void 0&&(i.bumpMap=n(t.bumpMap)),t.bumpScale!==void 0&&(i.bumpScale=t.bumpScale),t.normalMap!==void 0&&(i.normalMap=n(t.normalMap)),t.normalMapType!==void 0&&(i.normalMapType=t.normalMapType),t.normalScale!==void 0){let r=t.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new se().fromArray(r)}return t.displacementMap!==void 0&&(i.displacementMap=n(t.displacementMap)),t.displacementScale!==void 0&&(i.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(i.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(i.roughnessMap=n(t.roughnessMap)),t.metalnessMap!==void 0&&(i.metalnessMap=n(t.metalnessMap)),t.emissiveMap!==void 0&&(i.emissiveMap=n(t.emissiveMap)),t.emissiveIntensity!==void 0&&(i.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(i.specularMap=n(t.specularMap)),t.envMap!==void 0&&(i.envMap=n(t.envMap)),t.envMapIntensity!==void 0&&(i.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(i.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(i.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(i.lightMap=n(t.lightMap)),t.lightMapIntensity!==void 0&&(i.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(i.aoMap=n(t.aoMap)),t.aoMapIntensity!==void 0&&(i.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(i.gradientMap=n(t.gradientMap)),t.clearcoatMap!==void 0&&(i.clearcoatMap=n(t.clearcoatMap)),t.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(t.clearcoatRoughnessMap)),t.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(t.clearcoatNormalMap)),t.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new se().fromArray(t.clearcoatNormalScale)),t.transmission!==void 0&&(i.transmission=t.transmission),t.transmissionMap!==void 0&&(i.transmissionMap=n(t.transmissionMap)),i},setTextures:function(t){return this.textures=t,this}});var Rn={decodeText:function(t){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}},extractUrlBase:function(t){let e=t.lastIndexOf("/");return e===-1?"./":t.substr(0,e+1)}};function fo(){Ie.call(this),this.type="InstancedBufferGeometry",this.instanceCount=1/0}fo.prototype=Object.assign(Object.create(Ie.prototype),{constructor:fo,isInstancedBufferGeometry:!0,copy:function(t){return Ie.prototype.copy.call(this,t),this.instanceCount=t.instanceCount,this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){let t=Ie.prototype.toJSON.call(this);return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}});function nc(t,e,n,i){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),Ae.call(this,t,e,n),this.meshPerAttribute=i||1}nc.prototype=Object.assign(Object.create(Ae.prototype),{constructor:nc,isInstancedBufferAttribute:!0,copy:function(t){return Ae.prototype.copy.call(this,t),this.meshPerAttribute=t.meshPerAttribute,this},toJSON:function(){let t=Ae.prototype.toJSON.call(this);return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}});function Su(t){Ue.call(this,t)}Su.prototype=Object.assign(Object.create(Ue.prototype),{constructor:Su,load:function(t,e,n,i){let r=this,s=new Rt(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(a){i?i(a):console.error(a),r.manager.itemError(t)}},n,i)},parse:function(t){let e={},n={};function i(f,d){if(e[d]!==void 0)return e[d];let y=f.interleavedBuffers[d],v=r(f,y.buffer),g=Bs(y.type,v),m=new Lt(g,y.stride);return m.uuid=y.uuid,e[d]=m,m}function r(f,d){if(n[d]!==void 0)return n[d];let y=f.arrayBuffers[d],v=new Uint32Array(y).buffer;return n[d]=v,v}let s=t.isInstancedBufferGeometry?new fo:new Ie,o=t.data.index;if(o!==void 0){let f=Bs(o.type,o.array);s.setIndex(new Ae(f,1))}let a=t.data.attributes;for(let f in a){let d=a[f],p;if(d.isInterleavedBufferAttribute){let y=i(t.data,d.data);p=new Mn(y,d.itemSize,d.offset,d.normalized)}else{let y=Bs(d.type,d.array),v=d.isInstancedBufferAttribute?nc:Ae;p=new v(y,d.itemSize,d.normalized)}d.name!==void 0&&(p.name=d.name),s.setAttribute(f,p)}let c=t.data.morphAttributes;if(c)for(let f in c){let d=c[f],p=[];for(let y=0,v=d.length;y<v;y++){let g=d[y],m;if(g.isInterleavedBufferAttribute){let A=i(t.data,g.data);m=new Mn(A,g.itemSize,g.offset,g.normalized)}else{let A=Bs(g.type,g.array);m=new Ae(A,g.itemSize,g.normalized)}g.name!==void 0&&(m.name=g.name),p.push(m)}s.morphAttributes[f]=p}t.data.morphTargetsRelative&&(s.morphTargetsRelative=!0);let h=t.data.groups||t.data.drawcalls||t.data.offsets;if(h!==void 0)for(let f=0,d=h.length;f!==d;++f){let p=h[f];s.addGroup(p.start,p.count,p.materialIndex)}let u=t.data.boundingSphere;if(u!==void 0){let f=new L;u.center!==void 0&&f.fromArray(u.center),s.boundingSphere=new Qt(f,u.radius)}return t.name&&(s.name=t.name),t.userData&&(s.userData=t.userData),s}});function po(t){typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),Ue.call(this,t),this.options={premultiplyAlpha:"none"}}po.prototype=Object.assign(Object.create(Ue.prototype),{constructor:po,isImageBitmapLoader:!0,setOptions:function(e){return this.options=e,this},load:function(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,s=ur.get(t);if(s!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s;let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",fetch(t,o).then(function(a){return a.blob()}).then(function(a){return createImageBitmap(a,r.options)}).then(function(a){ur.add(t,a),e&&e(a),r.manager.itemEnd(t)}).catch(function(a){i&&i(a),r.manager.itemError(t),r.manager.itemEnd(t)}),r.manager.itemStart(t)}});function Tu(){this.type="ShapePath",this.color=new ue,this.subPaths=[],this.currentPath=null}Object.assign(Tu.prototype,{moveTo:function(t,e){return this.currentPath=new ln,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this},lineTo:function(t,e){return this.currentPath.lineTo(t,e),this},quadraticCurveTo:function(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this},bezierCurveTo:function(t,e,n,i,r,s){return this.currentPath.bezierCurveTo(t,e,n,i,r,s),this},splineThru:function(t){return this.currentPath.splineThru(t),this},toShapes:function(t,e){function n(g){let m=[];for(let A=0,S=g.length;A<S;A++){let E=g[A],_=new hr;_.curves=E.curves,m.push(_)}return m}function i(g,m){let A=m.length,S=!1;for(let E=A-1,_=0;_<A;E=_++){let F=m[E],Z=m[_],k=Z.x-F.x,V=Z.y-F.y;if(Math.abs(V)>Number.EPSILON){if(V<0&&(F=m[_],k=-k,Z=m[E],V=-V),g.y<F.y||g.y>Z.y)continue;if(g.y===F.y){if(g.x===F.x)return!0}else{let G=V*(g.x-F.x)-k*(g.y-F.y);if(G===0)return!0;if(G<0)continue;S=!S}}else{if(g.y!==F.y)continue;if(Z.x<=g.x&&g.x<=F.x||F.x<=g.x&&g.x<=Z.x)return!0}}return S}let r=Kn.isClockWise,s=this.subPaths;if(s.length===0)return[];if(e===!0)return n(s);let o,a,c,l=[];if(s.length===1)return a=s[0],c=new hr,c.curves=a.curves,l.push(c),l;let h=!r(s[0].getPoints());h=t?!h:h;let u=[],f=[],d=[],p=0,y;f[p]=void 0,d[p]=[];for(let g=0,m=s.length;g<m;g++)a=s[g],y=a.getPoints(),o=r(y),o=t?!o:o,o?(!h&&f[p]&&p++,f[p]={s:new hr,p:y},f[p].s.curves=a.curves,h&&p++,d[p]=[]):d[p].push({h:a,p:y[0]});if(!f[0])return n(s);if(f.length>1){let g=!1,m=[];for(let A=0,S=f.length;A<S;A++)u[A]=[];for(let A=0,S=f.length;A<S;A++){let E=d[A];for(let _=0;_<E.length;_++){let F=E[_],Z=!0;for(let k=0;k<f.length;k++)i(F.p,f[k].p)&&(A!==k&&m.push({froms:A,tos:k,hole:_}),Z?(Z=!1,u[k].push(F)):g=!0);Z&&u[A].push(F)}}m.length>0&&(g||(d=u))}let v;for(let g=0,m=f.length;g<m;g++){c=f[g].s,l.push(c),v=d[g];for(let A=0,S=v.length;A<S;A++)c.holes.push(v[A].h)}return l}});var Eu=class{constructor(e){Object.defineProperty(this,"isFont",{value:!0}),this.type="Font",this.data=e}generateShapes(e,n=100){let i=[],r=Ov(e,n,this.data);for(let s=0,o=r.length;s<o;s++)Array.prototype.push.apply(i,r[s].toShapes());return i}};function Ov(t,e,n){let i=Array.from?Array.from(t):String(t).split(""),r=e/n.resolution,s=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*r,o=[],a=0,c=0;for(let l=0;l<i.length;l++){let h=i[l];if(h===`
`)a=0,c-=s;else{let u=Fv(h,r,a,c,n);a+=u.offsetX,o.push(u.path)}}return o}function Fv(t,e,n,i,r){let s=r.glyphs[t]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+t+'" does not exists in font family '+r.familyName+".");return}let o=new Tu,a,c,l,h,u,f,d,p;if(s.o){let y=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let v=0,g=y.length;v<g;)switch(y[v++]){case"m":a=y[v++]*e+n,c=y[v++]*e+i,o.moveTo(a,c);break;case"l":a=y[v++]*e+n,c=y[v++]*e+i,o.lineTo(a,c);break;case"q":l=y[v++]*e+n,h=y[v++]*e+i,u=y[v++]*e+n,f=y[v++]*e+i,o.quadraticCurveTo(u,f,l,h);break;case"b":l=y[v++]*e+n,h=y[v++]*e+i,u=y[v++]*e+n,f=y[v++]*e+i,d=y[v++]*e+n,p=y[v++]*e+i,o.bezierCurveTo(u,f,d,p,l,h);break}}return{offsetX:s.ha*e,path:o}}function Au(t){Ue.call(this,t)}Au.prototype=Object.assign(Object.create(Ue.prototype),{constructor:Au,load:function(t,e,n,i){let r=this,s=new Rt(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){let a;try{a=JSON.parse(o)}catch{console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),a=JSON.parse(o.substring(65,o.length-2))}let c=r.parse(a);e&&e(c)},n,i)},parse:function(t){return new Eu(t)}});var mo,Lu={getContext:function(){return mo===void 0&&(mo=new(window.AudioContext||window.webkitAudioContext)),mo},setContext:function(t){mo=t}};function rs(t){Ue.call(this,t)}rs.prototype=Object.assign(Object.create(Ue.prototype),{constructor:rs,load:function(t,e,n,i){let r=this,s=new Rt(r.manager);s.setResponseType("arraybuffer"),s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){try{let a=o.slice(0);Lu.getContext().decodeAudioData(a,function(l){e(l)})}catch(a){i?i(a):console.error(a),r.manager.itemError(t)}},n,i)}});function Ru(t,e,n){un.call(this,void 0,n);let i=new ue().set(t),r=new ue().set(e),s=new L(i.r,i.g,i.b),o=new L(r.r,r.g,r.b),a=Math.sqrt(Math.PI),c=a*Math.sqrt(.75);this.sh.coefficients[0].copy(s).add(o).multiplyScalar(a),this.sh.coefficients[1].copy(s).sub(o).multiplyScalar(c)}Ru.prototype=Object.assign(Object.create(un.prototype),{constructor:Ru,isHemisphereLightProbe:!0,copy:function(t){return un.prototype.copy.call(this,t),this},toJSON:function(t){return un.prototype.toJSON.call(this,t)}});function Cu(t,e){un.call(this,void 0,e);let n=new ue().set(t);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}Cu.prototype=Object.assign(Object.create(un.prototype),{constructor:Cu,isAmbientLightProbe:!0,copy:function(t){return un.prototype.copy.call(this,t),this},toJSON:function(t){return un.prototype.toJSON.call(this,t)}});var Pu=new Re,Iu=new Re;function Bv(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new $e,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new $e,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}Object.assign(Bv.prototype,{update:function(t){let e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep;let i=t.projectionMatrix.clone(),r=e.eyeSep/2,s=r*e.near/e.focus,o=e.near*Math.tan(Ee.DEG2RAD*e.fov*.5)/e.zoom,a,c;Iu.elements[12]=-r,Pu.elements[12]=r,a=-o*e.aspect+s,c=o*e.aspect+s,i.elements[0]=2*e.near/(c-a),i.elements[8]=(c+a)/(c-a),this.cameraL.projectionMatrix.copy(i),a=-o*e.aspect-s,c=o*e.aspect-s,i.elements[0]=2*e.near/(c-a),i.elements[8]=(c+a)/(c-a),this.cameraR.projectionMatrix.copy(i)}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(Iu),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(Pu)}});var go=class{constructor(e){this.autoStart=e!==void 0?e:!0,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Du(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let n=Du();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}};function Du(){return(typeof performance=="undefined"?Date:performance).now()}var _i=new L,Ou=new ut,Nv=new L,bi=new L,ss=class extends ge{constructor(){super();this.type="AudioListener",this.context=Lu.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new go}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);let n=this.context.listener,i=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(_i,Ou,Nv),bi.set(0,0,-1).applyQuaternion(Ou),n.positionX){let r=this.context.currentTime+this.timeDelta;n.positionX.linearRampToValueAtTime(_i.x,r),n.positionY.linearRampToValueAtTime(_i.y,r),n.positionZ.linearRampToValueAtTime(_i.z,r),n.forwardX.linearRampToValueAtTime(bi.x,r),n.forwardY.linearRampToValueAtTime(bi.y,r),n.forwardZ.linearRampToValueAtTime(bi.z,r),n.upX.linearRampToValueAtTime(i.x,r),n.upY.linearRampToValueAtTime(i.y,r),n.upZ.linearRampToValueAtTime(i.z,r)}else n.setPosition(_i.x,_i.y,_i.z),n.setOrientation(bi.x,bi.y,bi.z,i.x,i.y,i.z)}},os=class extends ge{constructor(e){super();this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let n=this.context.createBufferSource();return n.buffer=this.buffer,n.loop=this.loop,n.loopStart=this.loopStart,n.loopEnd=this.loopEnd,n.onended=this.onEnded.bind(this),n.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=n,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,n=this.filters.length;e<n;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,n=this.filters.length;e<n;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}};var Fu=class{constructor(e,n=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=n,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0,n=this.getFrequencyData();for(let i=0;i<n.length;i++)e+=n[i];return e/n.length}};function Bu(t,e,n){this.binding=t,this.valueSize=n;let i,r,s;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,s=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}Object.assign(Bu.prototype,{accumulate:function(t,e){let n=this.buffer,i=this.valueSize,r=t*i+i,s=this.cumulativeWeight;if(s===0){for(let o=0;o!==i;++o)n[r+o]=n[o];s=e}else{s+=e;let o=e/s;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=s},accumulateAdditive:function(t){let e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t},apply:function(t){let e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,s=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let a=e*this._origIndex;this._mixBufferRegion(n,i,a,1-r,e)}s>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let a=e,c=e+e;a!==c;++a)if(n[a]!==n[a+e]){o.setValue(n,i);break}},saveOriginalState:function(){let t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,s=i;r!==s;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0},restoreOriginalState:function(){let t=this.valueSize*3;this.binding.setValue(this.buffer,t)},_setAdditiveIdentityNumeric:function(){let t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0},_setAdditiveIdentityQuaternion:function(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1},_setAdditiveIdentityOther:function(){let t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]},_select:function(t,e,n,i,r){if(i>=.5)for(let s=0;s!==r;++s)t[e+s]=t[n+s]},_slerp:function(t,e,n,i){ut.slerpFlat(t,e,t,e,t,n,i)},_slerpAdditive:function(t,e,n,i,r){let s=this._workIndex*r;ut.multiplyQuaternionsFlat(t,s,t,e,t,n),ut.slerpFlat(t,e,t,e,t,s,i)},_lerp:function(t,e,n,i,r){let s=1-i;for(let o=0;o!==r;++o){let a=e+o;t[a]=t[a]*s+t[n+o]*i}},_lerpAdditive:function(t,e,n,i,r){for(let s=0;s!==r;++s){let o=e+s;t[o]=t[o]+t[n+s]*i}}});var ic="\\[\\]\\.:\\/",zv=new RegExp("["+ic+"]","g"),rc="[^"+ic+"]",Uv="[^"+ic.replace("\\.","")+"]",Hv=/((?:WC+[\/:])*)/.source.replace("WC",rc),Gv=/(WCOD+)?/.source.replace("WCOD",Uv),kv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rc),Vv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rc),Wv=new RegExp("^"+Hv+Gv+kv+Vv+"$"),jv=["material","materials","bones"];function Nu(t,e,n){let i=n||gt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}Object.assign(Nu.prototype,{getValue:function(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)},setValue:function(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)},bind:function(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()},unbind:function(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}});function gt(t,e,n){this.path=e,this.parsedPath=n||gt.parseTrackName(e),this.node=gt.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t}Object.assign(gt,{Composite:Nu,create:function(t,e,n){return t&&t.isAnimationObjectGroup?new gt.Composite(t,e,n):new gt(t,e,n)},sanitizeNodeName:function(t){return t.replace(/\s/g,"_").replace(zv,"")},parseTrackName:function(t){let e=Wv.exec(t);if(!e)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);jv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n},findNode:function(t,e){if(!e||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let s=0;s<r.length;s++){let o=r[s];if(o.name===e||o.uuid===e)return o;let a=n(o.children);if(a)return a}return null},i=n(t.children);if(i)return i}return null}});Object.assign(gt.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(e,n){e[n]=this.node[this.propertyName]},function(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[n++]=i[r]},function(e,n){e[n]=this.resolvedProperty[this.propertyIndex]},function(e,n){this.resolvedProperty.toArray(e,n)}],SetterByBindingTypeAndVersioning:[[function(e,n){this.targetObject[this.propertyName]=e[n]},function(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0},function(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++]},function(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0},function(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,n){this.resolvedProperty[this.propertyIndex]=e[n]},function(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0},function(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,n){this.resolvedProperty.fromArray(e,n)},function(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0},function(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}]],getValue:function(e,n){this.bind(),this.getValue(e,n)},setValue:function(e,n){this.bind(),this.setValue(e,n)},bind:function(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=gt.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let l=0;l<t.length;l++)if(t[l].name===c){c=l;break}break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let s=t[i];if(s===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(t.geometry.isBufferGeometry){if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}a=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(a=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]},unbind:function(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}});Object.assign(gt.prototype,{_getValue_unbound:gt.prototype.getValue,_setValue_unbound:gt.prototype.setValue});function qv(){this.uuid=Ee.generateUUID(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let t={};this._indicesByUUID=t;for(let n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}Object.assign(qv.prototype,{isAnimationObjectGroup:!0,add:function(){let t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,s=r.length,o,a=t.length,c=this.nCachedObjects_;for(let l=0,h=arguments.length;l!==h;++l){let u=arguments[l],f=u.uuid,d=e[f];if(d===void 0){d=a++,e[f]=d,t.push(u);for(let p=0,y=s;p!==y;++p)r[p].push(new gt(u,n[p],i[p]))}else if(d<c){o=t[d];let p=--c,y=t[p];e[y.uuid]=d,t[d]=y,e[f]=p,t[p]=u;for(let v=0,g=s;v!==g;++v){let m=r[v],A=m[p],S=m[d];m[d]=A,S===void 0&&(S=new gt(u,n[v],i[v])),m[p]=S}}else t[d]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c},remove:function(){let t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_;for(let s=0,o=arguments.length;s!==o;++s){let a=arguments[s],c=a.uuid,l=e[c];if(l!==void 0&&l>=r){let h=r++,u=t[h];e[u.uuid]=l,t[l]=u,e[c]=h,t[h]=a;for(let f=0,d=i;f!==d;++f){let p=n[f],y=p[h],v=p[l];p[l]=y,p[h]=v}}}this.nCachedObjects_=r},uncache:function(){let t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_,s=t.length;for(let o=0,a=arguments.length;o!==a;++o){let c=arguments[o],l=c.uuid,h=e[l];if(h!==void 0)if(delete e[l],h<r){let u=--r,f=t[u],d=--s,p=t[d];e[f.uuid]=h,t[h]=f,e[p.uuid]=u,t[u]=p,t.pop();for(let y=0,v=i;y!==v;++y){let g=n[y],m=g[u],A=g[d];g[h]=m,g[u]=A,g.pop()}}else{let u=--s,f=t[u];u>0&&(e[f.uuid]=h),t[h]=f,t.pop();for(let d=0,p=i;d!==p;++d){let y=n[d];y[h]=y[u],y.pop()}}}this.nCachedObjects_=r},subscribe_:function(t,e){let n=this._bindingsIndicesByPath,i=n[t],r=this._bindings;if(i!==void 0)return r[i];let s=this._paths,o=this._parsedPaths,a=this._objects,c=a.length,l=this.nCachedObjects_,h=new Array(c);i=r.length,n[t]=i,s.push(t),o.push(e),r.push(h);for(let u=l,f=a.length;u!==f;++u){let d=a[u];h[u]=new gt(d,t,e)}return h},unsubscribe_:function(t){let e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){let i=this._paths,r=this._parsedPaths,s=this._bindings,o=s.length-1,a=s[o],c=t[o];e[c]=n,s[n]=a,s.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}});var zu=class{constructor(e,n,i=null,r=n.blendMode){this._mixer=e,this._clip=n,this._localRoot=i,this.blendMode=r;let s=n.tracks,o=s.length,a=new Array(o),c={endingStart:Pi,endingEnd:Pi};for(let l=0;l!==o;++l){let h=s[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Cf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,n){return this.loop=e,this.repetitions=n,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,n,i){if(e.fadeOut(n),this.fadeIn(n),i){let r=this._clip.duration,s=e._clip.duration,o=s/r,a=r/s;e.warp(1,o,n),this.warp(a,1,n)}return this}crossFadeTo(e,n,i){return e.crossFadeFrom(this,n,i)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,n,i){let r=this._mixer,s=r.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+i,l[0]=e/o,l[1]=n/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,n,i,r){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let c=(e-s)*i;if(c<0||i===0)return;this._startTime=null,n=i*c}n*=this._updateTimeScale(e);let o=this._updateTime(n),a=this._updateWeight(e);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case $c:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case Ko:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(r,a)}}}_updateWeight(e){let n=0;if(this.enabled){n=this.weight;let i=this._weightInterpolant;if(i!==null){let r=i.evaluate(e)[0];n*=r,e>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=n,n}_updateTimeScale(e){let n=0;if(!this.paused){n=this.timeScale;let i=this._timeScaleInterpolant;i!==null&&(n*=i.evaluate(e)[0],e>i.parameterPositions[1]&&(this.stopWarping(),n===0?this.paused=!0:this.timeScale=n))}return this._effectiveTimeScale=n,n}_updateTime(e){let n=this._clip.duration,i=this.loop,r=this.time+e,s=this._loopCount,o=i===Pf;if(e===0)return s===-1?r:o&&(s&1)===1?n-r:r;if(i===Zo){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=n)r=n;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=n||r<0){let a=Math.floor(r/n);r-=n*a,s+=Math.abs(a);let c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?n:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=r;if(o&&(s&1)===1)return n-r}return r}_setEndings(e,n,i){let r=this._interpolantSettings;i?(r.endingStart=Ii,r.endingEnd=Ii):(e?r.endingStart=this.zeroSlopeAtStart?Ii:Pi:r.endingStart=Ss,n?r.endingEnd=this.zeroSlopeAtEnd?Ii:Pi:r.endingEnd=Ss)}_scheduleFading(e,n,i){let r=this._mixer,s=r.time,o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=n,a[1]=s+e,c[1]=i,this}};function vo(t){this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}vo.prototype=Object.assign(Object.create(jt.prototype),{constructor:vo,_bindAction:function(t,e){let n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,s=t._propertyBindings,o=t._interpolants,a=n.uuid,c=this._bindingsByRootAndName,l=c[a];l===void 0&&(l={},c[a]=l);for(let h=0;h!==r;++h){let u=i[h],f=u.name,d=l[f];if(d!==void 0)s[h]=d;else{if(d=s[h],d!==void 0){d._cacheIndex===null&&(++d.referenceCount,this._addInactiveBinding(d,a,f));continue}let p=e&&e._propertyBindings[h].binding.parsedPath;d=new Bu(gt.create(n,f,p),u.ValueTypeName,u.getValueSize()),++d.referenceCount,this._addInactiveBinding(d,a,f),s[h]=d}o[h].resultBuffer=d.buffer}},_activateAction:function(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){let n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}},_deactivateAction:function(t){if(this._isActiveAction(t)){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}},_initMemoryManager:function(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}},_isActiveAction:function(t){let e=t._cacheIndex;return e!==null&&e<this._nActiveActions},_addInactiveAction:function(t,e,n){let i=this._actions,r=this._actionsByClip,s=r[e];if(s===void 0)s={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=s;else{let o=s.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=i.length,i.push(t),s.actionByRoot[n]=t},_removeInactiveAction:function(t){let e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;let r=t._clip.uuid,s=this._actionsByClip,o=s[r],a=o.knownActions,c=a[a.length-1],l=t._byClipCacheIndex;c._byClipCacheIndex=l,a[l]=c,a.pop(),t._byClipCacheIndex=null;let h=o.actionByRoot,u=(t._localRoot||this._root).uuid;delete h[u],a.length===0&&delete s[r],this._removeInactiveBindingsForAction(t)},_removeInactiveBindingsForAction:function(t){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}},_lendAction:function(t){let e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_takeBackAction:function(t){let e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_addInactiveBinding:function(t,e,n){let i=this._bindingsByRootAndName,r=this._bindings,s=i[e];s===void 0&&(s={},i[e]=s),s[n]=t,t._cacheIndex=r.length,r.push(t)},_removeInactiveBinding:function(t){let e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,s=this._bindingsByRootAndName,o=s[i],a=e[e.length-1],c=t._cacheIndex;a._cacheIndex=c,e[c]=a,e.pop(),delete o[r],Object.keys(o).length===0&&delete s[i]},_lendBinding:function(t){let e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_takeBackBinding:function(t){let e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_lendControlInterpolant:function(){let t=this._controlInterpolants,e=this._nActiveControlInterpolants++,n=t[e];return n===void 0&&(n=new ao(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=e,t[e]=n),n},_takeBackControlInterpolant:function(t){let e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r},_controlInterpolantsResultBuffer:new Float32Array(1),clipAction:function(t,e,n){let i=e||this._root,r=i.uuid,s=typeof t=="string"?Ft.findByName(i,t):t,o=s!==null?s.uuid:t,a=this._actionsByClip[o],c=null;if(n===void 0&&(s!==null?n=s.blendMode:n=Ko),a!==void 0){let h=a.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=a.knownActions[0],s===null&&(s=c._clip)}if(s===null)return null;let l=new zu(this,s,e,n);return this._bindAction(l,c),this._addInactiveAction(l,o,r),l},existingAction:function(t,e){let n=e||this._root,i=n.uuid,r=typeof t=="string"?Ft.findByName(n,t):t,s=r?r.uuid:t,o=this._actionsByClip[s];return o!==void 0&&o.actionByRoot[i]||null},stopAllAction:function(){let t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this},update:function(t){t*=this.timeScale;let e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),s=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,r,s);let o=this._bindings,a=this._nActiveBindings;for(let c=0;c!==a;++c)o[c].apply(s);return this},setTime:function(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)},getRoot:function(){return this._root},uncacheClip:function(t){let e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let s=r.knownActions;for(let o=0,a=s.length;o!==a;++o){let c=s[o];this._deactivateAction(c);let l=c._cacheIndex,h=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=l,e[l]=h,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}},uncacheRoot:function(t){let e=t.uuid,n=this._actionsByClip;for(let s in n){let o=n[s].actionByRoot,a=o[e];a!==void 0&&(this._deactivateAction(a),this._removeInactiveAction(a))}let i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(let s in r){let o=r[s];o.restoreOriginalState(),this._removeInactiveBinding(o)}},uncacheAction:function(t,e){let n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}});var yo=class{constructor(e){typeof e=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),e=arguments[1]),this.value=e}clone(){return new yo(this.value.clone===void 0?this.value:this.value.clone())}};function Uu(t,e,n){Lt.call(this,t,e),this.meshPerAttribute=n||1}Uu.prototype=Object.assign(Object.create(Lt.prototype),{constructor:Uu,isInstancedInterleavedBuffer:!0,copy:function(t){return Lt.prototype.copy.call(this,t),this.meshPerAttribute=t.meshPerAttribute,this},clone:function(t){let e=Lt.prototype.clone.call(this,t);return e.meshPerAttribute=this.meshPerAttribute,e},toJSON:function(t){let e=Lt.prototype.toJSON.call(this,t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}});function Hu(t,e,n,i,r){this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}Object.defineProperty(Hu.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});Object.assign(Hu.prototype,{isGLBufferAttribute:!0,setBuffer:function(t){return this.buffer=t,this},setType:function(t,e){return this.type=t,this.elementSize=e,this},setItemSize:function(t){return this.itemSize=t,this},setCount:function(t){return this.count=t,this}});function Gu(t,e,n,i){this.ray=new zi(t,e),this.near=n||0,this.far=i||1/0,this.camera=null,this.layers=new la,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}},Object.defineProperties(this.params,{PointCloud:{get:function(){return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),this.Points}}})}function ku(t,e){return t.distance-e.distance}function sc(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){let r=t.children;for(let s=0,o=r.length;s<o;s++)sc(r[s],e,n,!0)}}Object.assign(Gu.prototype,{set:function(t,e){this.ray.set(t,e)},setFromCamera:function(t,e){e&&e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e&&e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)},intersectObject:function(t,e,n){let i=n||[];return sc(t,this,i,e),i.sort(ku),i},intersectObjects:function(t,e,n){let i=n||[];if(Array.isArray(t)===!1)return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),i;for(let r=0,s=t.length;r<s;r++)sc(t[r],this,i,e);return i.sort(ku),i}});var xo=class{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}clone(){return new this.constructor().copy(this)}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=Math.max(e,Math.min(Math.PI-e,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ee.clamp(n/this.radius,-1,1))),this}};var Vu=new se,Wu=class{constructor(e,n){Object.defineProperty(this,"isBox2",{value:!0}),this.min=e!==void 0?e:new se(1/0,1/0),this.max=n!==void 0?n:new se(-1/0,-1/0)}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=Vu.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return e===void 0&&(console.warn("THREE.Box2: .getCenter() target is now required"),e=new se),this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box2: .getSize() target is now required"),e=new se),this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,n){return n===void 0&&(console.warn("THREE.Box2: .getParameter() target is now required"),n=new se),n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,n){return n===void 0&&(console.warn("THREE.Box2: .clampPoint() target is now required"),n=new se),n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Vu.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ju=new L,_o=new L,qu=class{constructor(e,n){this.start=e!==void 0?e:new L,this.end=n!==void 0?n:new L}set(e,n){return this.start.copy(e),this.end.copy(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e===void 0&&(console.warn("THREE.Line3: .getCenter() target is now required"),e=new L),e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e===void 0&&(console.warn("THREE.Line3: .delta() target is now required"),e=new L),e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,n){return n===void 0&&(console.warn("THREE.Line3: .at() target is now required"),n=new L),this.delta(n).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,n){ju.subVectors(e,this.start),_o.subVectors(this.end,this.start);let i=_o.dot(_o),s=_o.dot(ju)/i;return n&&(s=Ee.clamp(s,0,1)),s}closestPointToPoint(e,n,i){let r=this.closestPointToPointParameter(e,n);return i===void 0&&(console.warn("THREE.Line3: .closestPointToPoint() target is now required"),i=new L),this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}};function bo(t){ge.call(this),this.material=t,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}bo.prototype=Object.create(ge.prototype);bo.prototype.constructor=bo;bo.prototype.isImmediateRenderObject=!0;var ti=new L,wo=new Re,oc=new Re,Xu=class extends Yn{constructor(e){let n=Yu(e),i=new Ie,r=[],s=[],o=new ue(0,0,1),a=new ue(0,1,0);for(let l=0;l<n.length;l++){let h=n[l];h.parent&&h.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}i.setAttribute("position",new Pe(r,3)),i.setAttribute("color",new Pe(s,3));let c=new wt({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,c);this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=n,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){let n=this.bones,i=this.geometry,r=i.getAttribute("position");oc.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<n.length;s++){let a=n[s];a.parent&&a.parent.isBone&&(wo.multiplyMatrices(oc,a.matrixWorld),ti.setFromMatrixPosition(wo),r.setXYZ(o,ti.x,ti.y,ti.z),wo.multiplyMatrices(oc,a.parent.matrixWorld),ti.setFromMatrixPosition(wo),r.setXYZ(o+1,ti.x,ti.y,ti.z),o+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}};function Yu(t){let e=[];t&&t.isBone&&e.push(t);for(let n=0;n<t.children.length;n++)e.push.apply(e,Yu(t.children[n]));return e}var Zu=class extends Yn{constructor(e=10,n=10,i=4473924,r=8947848){i=new ue(i),r=new ue(r);let s=n/2,o=e/n,a=e/2,c=[],l=[];for(let f=0,d=0,p=-a;f<=n;f++,p+=o){c.push(-a,0,p,a,0,p),c.push(p,0,-a,p,0,a);let y=f===s?i:r;y.toArray(l,d),d+=3,y.toArray(l,d),d+=3,y.toArray(l,d),d+=3,y.toArray(l,d),d+=3}let h=new Ie;h.setAttribute("position",new Pe(c,3)),h.setAttribute("color",new Pe(l,3));let u=new wt({vertexColors:!0,toneMapped:!1});super(h,u);this.type="GridHelper"}};var Xv=new Float32Array(1),by=new Int32Array(Xv.buffer);var mr=4,ni=8,hn=Math.pow(2,ni),Ju=[.125,.215,.35,.446,.526,.582],Ku=ni-mr+1+Ju.length,gr=20,fn={[yt]:0,[Wt]:1,[ea]:2,[el]:3,[tl]:4,[nl]:5,[Qo]:6},wi=new ke({side:nt,depthWrite:!1,depthTest:!1}),Yv=new Le(new Vn,wi),ac=new dr,{_lodPlanes:as,_sizeLods:$u,_sigmas:Mo}=Jv(),Qu=new ue,cc=null,Mi=(1+Math.sqrt(5))/2,vr=1/Mi,eh=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Mi,vr),new L(0,Mi,-vr),new L(vr,0,Mi),new L(-vr,0,Mi),new L(Mi,vr,0),new L(-Mi,vr,0)];function th(t){let e=Math.max(t.r,t.g,t.b),n=Math.min(Math.max(Math.ceil(Math.log2(e)),-128),127);return t.multiplyScalar(Math.pow(2,-n)),(n+128)/255}var lc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=Kv(gr),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){cc=this._renderer.getRenderTarget();let s=this._allocateTargets();return this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=rh(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=ih(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<as.length;e++)as[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(cc),e.scissorTest=!1,So(e,0,0,e.width,e.height)}_fromTexture(e){cc=this._renderer.getRenderTarget();let n=this._allocateTargets(e);return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(e){let n={magFilter:et,minFilter:et,generateMipmaps:!1,type:Rr,format:qh,encoding:Zv(e)?e.encoding:ea,depthBuffer:!1},i=nh(n);return i.depthBuffer=!e,this._pingPongRenderTarget=nh(n),i}_compileMaterial(e){let n=new Le(as[0],e);this._renderer.compile(n,ac)}_sceneToCubeUV(e,n,i,r){let s=90,o=1,a=new $e(s,o,n,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.outputEncoding,d=h.toneMapping;h.getClearColor(Qu),h.toneMapping=Li,h.outputEncoding=yt,h.autoClear=!1;let p=!1,y=e.background;if(y){if(y.isColor){wi.color.copy(y).convertSRGBToLinear(),e.background=null;let v=th(wi.color);wi.opacity=v,p=!0}}else{wi.color.copy(Qu).convertSRGBToLinear();let v=th(wi.color);wi.opacity=v,p=!0}for(let v=0;v<6;v++){let g=v%3;g==0?(a.up.set(0,c[v],0),a.lookAt(l[v],0,0)):g==1?(a.up.set(0,0,c[v]),a.lookAt(0,l[v],0)):(a.up.set(0,c[v],0),a.lookAt(0,0,l[v])),So(r,g*hn,v>2?hn:0,hn,hn),h.setRenderTarget(r),p&&h.render(Yv,a),h.render(e,a)}h.toneMapping=d,h.outputEncoding=f,h.autoClear=u}_textureToCubeUV(e,n){let i=this._renderer;e.isCubeTexture?this._cubemapShader==null&&(this._cubemapShader=rh()):this._equirectShader==null&&(this._equirectShader=ih());let r=e.isCubeTexture?this._cubemapShader:this._equirectShader,s=new Le(as[0],r),o=r.uniforms;o.envMap.value=e,e.isCubeTexture||o.texelSize.value.set(1/e.image.width,1/e.image.height),o.inputEncoding.value=fn[e.encoding],o.outputEncoding.value=fn[n.texture.encoding],So(n,0,0,3*hn,2*hn),i.setRenderTarget(n),i.render(s,ac)}_applyPMREM(e){let n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<Ku;r++){let s=Math.sqrt(Mo[r]*Mo[r]-Mo[r-1]*Mo[r-1]),o=eh[(r-1)%eh.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Le(as[r],l),f=l.uniforms,d=$u[i]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*gr-1),y=s/p,v=isFinite(s)?1+Math.floor(h*y):gr;v>gr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${gr}`);let g=[],m=0;for(let _=0;_<gr;++_){let F=_/y,Z=Math.exp(-F*F/2);g.push(Z),_==0?m+=Z:_<v&&(m+=2*Z)}for(let _=0;_<g.length;_++)g[_]=g[_]/m;f.envMap.value=e.texture,f.samples.value=v,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a),f.dTheta.value=p,f.mipInt.value=ni-i,f.inputEncoding.value=fn[e.texture.encoding],f.outputEncoding.value=fn[e.texture.encoding];let A=$u[r],S=3*Math.max(0,hn-2*A),E=(r===0?0:2*hn)+2*A*(r>ni-mr?r-ni+mr:0);So(n,S,E,3*A,2*A),c.setRenderTarget(n),c.render(u,ac)}};function Zv(t){return t===void 0||t.type!==Rr?!1:t.encoding===yt||t.encoding===Wt||t.encoding===Qo}function Jv(){let t=[],e=[],n=[],i=ni;for(let r=0;r<Ku;r++){let s=Math.pow(2,i);e.push(s);let o=1/s;r>ni-mr?o=Ju[r-ni+mr-1]:r==0&&(o=0),n.push(o);let a=1/(s-1),c=-a/2,l=1+a/2,h=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,f=6,d=3,p=2,y=1,v=new Float32Array(d*f*u),g=new Float32Array(p*f*u),m=new Float32Array(y*f*u);for(let S=0;S<u;S++){let E=S%3*2/3-1,_=S>2?0:-1,F=[E,_,0,E+2/3,_,0,E+2/3,_+1,0,E,_,0,E+2/3,_+1,0,E,_+1,0];v.set(F,d*f*S),g.set(h,p*f*S);let Z=[S,S,S,S,S,S];m.set(Z,y*f*S)}let A=new Ie;A.setAttribute("position",new Ae(v,d)),A.setAttribute("uv",new Ae(g,p)),A.setAttribute("faceIndex",new Ae(m,y)),t.push(A),i>mr&&i--}return{_lodPlanes:t,_sizeLods:e,_sigmas:n}}function nh(t){let e=new vn(3*hn,3*hn,t);return e.texture.mapping=ys,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function So(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Kv(t){let e=new Float32Array(t),n=new L(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:t},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n},inputEncoding:{value:fn[yt]},outputEncoding:{value:fn[yt]}},vertexShader:uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			${hc()}

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function ih(){let t=new se(1,1);return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:t},inputEncoding:{value:fn[yt]},outputEncoding:{value:fn[yt]}},vertexShader:uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${hc()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function rh(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:fn[yt]},outputEncoding:{value:fn[yt]}},vertexShader:uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${hc()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function uc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hc(){return`

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}Se.create=function(t,e){return console.log("THREE.Curve.create() has been deprecated"),t.prototype=Object.create(Se.prototype),t.prototype.constructor=t,t.prototype.getPoint=e,t};Object.assign(ln.prototype,{fromPoints:function(t){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(t)}});function $v(t){console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."),ot.call(this,t),this.type="catmullrom",this.closed=!0}$v.prototype=Object.create(ot.prototype);function Qv(t){console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."),ot.call(this,t),this.type="catmullrom"}Qv.prototype=Object.create(ot.prototype);function sh(t){console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."),ot.call(this,t),this.type="catmullrom"}sh.prototype=Object.create(ot.prototype);Object.assign(sh.prototype,{initFromArray:function(){console.error("THREE.Spline: .initFromArray() has been removed.")},getControlPointsArray:function(){console.error("THREE.Spline: .getControlPointsArray() has been removed.")},reparametrizeByArcLength:function(){console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")}});Zu.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};Xu.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Object.assign(Ue.prototype,{extractUrlBase:function(t){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Rn.extractUrlBase(t)}});Ue.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Object.assign(Wu.prototype,{center:function(t){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(t)},empty:function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(t){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},size:function(t){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(t)}});Object.assign($t.prototype,{center:function(t){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(t)},empty:function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(t){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},isIntersectionSphere:function(t){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(t)},size:function(t){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(t)}});Object.assign(Qt.prototype,{empty:function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()}});zr.prototype.setFromMatrix=function(t){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(t)};qu.prototype.center=function(t){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(t)};Object.assign(Ee,{random16:function(){return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."),Math.random()},nearestPowerOfTwo:function(t){return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."),Ee.floorPowerOfTwo(t)},nextPowerOfTwo:function(t){return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."),Ee.ceilPowerOfTwo(t)}});Object.assign(Ct.prototype,{flattenToArrayOffset:function(t,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(t,e)},multiplyVector3:function(t){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),t.applyMatrix3(this)},multiplyVector3Array:function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},applyToBufferAttribute:function(t){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),t.applyMatrix3(this)},applyToVector3Array:function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")},getInverse:function(t){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(t).invert()}});Object.assign(Re.prototype,{extractPosition:function(t){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(t)},flattenToArrayOffset:function(t,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(t,e)},getPosition:function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new L().setFromMatrixColumn(this,3)},setRotationFromQuaternion:function(t){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(t)},multiplyToArray:function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},multiplyVector3:function(t){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},multiplyVector4:function(t){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},multiplyVector3Array:function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},rotateAxis:function(t){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),t.transformDirection(this)},crossVector:function(t){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},translate:function(){console.error("THREE.Matrix4: .translate() has been removed.")},rotateX:function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},rotateByAxis:function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},applyToBufferAttribute:function(t){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},applyToVector3Array:function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},makeFrustum:function(t,e,n,i,r,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(t,e,i,n,r,s)},getInverse:function(t){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(t).invert()}});Ut.prototype.isIntersectionLine=function(t){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(t)};Object.assign(ut.prototype,{multiplyVector3:function(t){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),t.applyQuaternion(this)},inverse:function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()}});Object.assign(zi.prototype,{isIntersectionBox:function(t){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},isIntersectionPlane:function(t){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(t)},isIntersectionSphere:function(t){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(t)}});Object.assign(xt.prototype,{area:function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()},barycoordFromPoint:function(t,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(t,e)},midpoint:function(t){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(t)},normal:function(t){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(t)},plane:function(t){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(t)}});Object.assign(xt,{barycoordFromPoint:function(t,e,n,i,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),xt.getBarycoord(t,e,n,i,r)},normal:function(t,e,n,i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),xt.getNormal(t,e,n,i)}});Object.assign(hr.prototype,{extractAllPoints:function(t){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(t)},extrude:function(t){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Ha(this,t)},makeGeometry:function(t){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new mu(this,t)}});Object.assign(se.prototype,{fromAttribute:function(t,e,n){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,e,n)},distanceToManhattan:function(t){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(t)},lengthManhattan:function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(L.prototype,{setEulerFromRotationMatrix:function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},setEulerFromQuaternion:function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},getPositionFromMatrix:function(t){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(t)},getScaleFromMatrix:function(t){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(t)},getColumnFromMatrix:function(t,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,t)},applyProjection:function(t){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(t)},fromAttribute:function(t,e,n){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,e,n)},distanceToManhattan:function(t){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(t)},lengthManhattan:function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(Ge.prototype,{fromAttribute:function(t,e,n){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,e,n)},lengthManhattan:function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(ge.prototype,{getChildByName:function(t){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(t)},renderDepth:function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},translate:function(t,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,t)},getWorldRotation:function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")},applyMatrix:function(t){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(t)}});Object.defineProperties(ge.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(t){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=t}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Object.assign(Le.prototype,{setDrawMode:function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}});Object.defineProperties(Le.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),If},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Object.defineProperties(Oa.prototype,{objects:{get:function(){return console.warn("THREE.LOD: .objects has been renamed to .levels."),this.levels}}});Object.defineProperty(Zr.prototype,"useVertexTexture",{get:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")},set:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")}});Xr.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Object.defineProperty(Se.prototype,"__arcLengthDivisions",{get:function(){return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions},set:function(t){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions=t}});$e.prototype.setLens=function(t,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(t)};Object.defineProperties(Je.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(t){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=t}},shadowCameraLeft:{set:function(t){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=t}},shadowCameraRight:{set:function(t){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=t}},shadowCameraTop:{set:function(t){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=t}},shadowCameraBottom:{set:function(t){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=t}},shadowCameraNear:{set:function(t){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=t}},shadowCameraFar:{set:function(t){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=t}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(t){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=t}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(t){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=t}},shadowMapHeight:{set:function(t){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=t}}});Object.defineProperties(Ae.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Ir},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Ir)}}});Object.assign(Ae.prototype,{setDynamic:function(t){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(t===!0?Ir:Ts),this},copyIndicesArray:function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},setArray:function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}});Object.assign(Ie.prototype,{addIndex:function(t){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(t)},addAttribute:function(t,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(t,new Ae(arguments[1],arguments[2]))):t==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(t,e)},addDrawCall:function(t,e,n){n!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(t,e)},clearDrawCalls:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()},computeOffsets:function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")},removeAttribute:function(t){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(t)},applyMatrix:function(t){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(t)}});Object.defineProperties(Ie.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Object.defineProperties(fo.prototype,{maxInstancedCount:{get:function(){return console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount},set:function(t){console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount=t}}});Object.defineProperties(Gu.prototype,{linePrecision:{get:function(){return console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold},set:function(t){console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold=t}}});Object.defineProperties(Lt.prototype,{dynamic:{get:function(){return console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.usage===Ir},set:function(t){console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.setUsage(t)}}});Object.assign(Lt.prototype,{setDynamic:function(t){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(t===!0?Ir:Ts),this},setArray:function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}});Object.assign(Ha.prototype,{getArrays:function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")},addShapeList:function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")},addShape:function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")}});Object.assign(qs.prototype,{dispose:function(){console.error("THREE.Scene: .dispose() has been removed.")}});Object.defineProperties(yo.prototype,{dynamic:{set:function(){console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")}},onUpdate:{value:function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this}}});Object.defineProperties(Te.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new ue}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(t){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=t===Ic}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(t){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=t}}});Object.defineProperties(gi.prototype,{metal:{get:function(){return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."),!1},set:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")}}});Object.defineProperties(rn.prototype,{transparency:{get:function(){return console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission},set:function(t){console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission=t}}});Object.defineProperties(Ze.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(t){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=t}}});Object.assign(Qi.prototype,{clearTarget:function(t,e,n,i){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(t),this.clear(e,n,i)},animate:function(t){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(t)},getCurrentRenderTarget:function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()},getMaxAnisotropy:function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()},getPrecision:function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision},resetGLState:function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()},supportsFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},supportsHalfFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},supportsStandardDerivatives:function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},supportsCompressedTextureS3TC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},supportsCompressedTexturePVRTC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},supportsBlendMinMax:function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},supportsVertexTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},supportsInstancedArrays:function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},enableScissorTest:function(t){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(t)},initMaterial:function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},addPrePlugin:function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},addPostPlugin:function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},updateShadowMap:function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},setFaceCulling:function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")},allocTextureUnit:function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")},setTexture:function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")},setTexture2D:function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")},setTextureCube:function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")},getActiveMipMapLevel:function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()}});Object.defineProperties(Qi.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(t){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=t}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(t){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=t}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(t){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=t===!0?Wt:yt}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(Hl.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(vn.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(t){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=t}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(t){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=t}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(t){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=t}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(t){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=t}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(t){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=t}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(t){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=t}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(t){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=t}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(t){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=t}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(t){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=t}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(t){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=t}}});Object.defineProperties(os.prototype,{load:{value:function(t){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");let e=this;return new rs().load(t,function(i){e.setBuffer(i)}),this}},startTime:{set:function(){console.warn("THREE.Audio: .startTime is now .play( delay ).")}}});Fu.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()};Zi.prototype.updateCubeMap=function(t,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(t,e)};Zi.prototype.clear=function(t,e,n,i){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(t,e,n,i)};Oi.crossOrigin=void 0;Oi.loadTexture=function(t,e,n,i){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");let r=new Tn;r.setCrossOrigin(this.crossOrigin);let s=r.load(t,n,void 0,i);return e&&(s.mapping=e),s};Oi.loadTextureCube=function(t,e,n,i){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");let r=new Ya;r.setCrossOrigin(this.crossOrigin);let s=r.load(t,n,void 0,i);return e&&(s.mapping=e),s};Oi.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Oi.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rc);var To=(t,e=!1,n=0,i=1/0)=>{let s=(t.getIndex()||t.getAttribute("position")).count/3,o=[];for(let l=n;l<s&&l<=i;l++){let h=l%2===0,u=e?1:0;h?o.push(0,0,1,0,1,0,1,0,u):o.push(0,1,0,0,0,1,1,0,u)}let a=new Float32Array(o),c=new Ae(a,3);t.setAttribute("barycentric",c)};var fc=(t={})=>{t&&t.dispose&&rt.fn(t.dispose)&&t.dispose()},cs=(t={})=>{rt.arr(t)&&t.forEach(e=>cs(e)),t.type==="Audio"&&t.isPlaying&&t.stop(),fc(t.geometry),t.material&&(rt.arr(t.material)?t.material:[t.material]).forEach(n=>{Object.values(n).forEach(fc),fc(n)}),t.children.length&&t.children.forEach(cs),!t.isScene&&t.dispose&&rt.fn(t.dispose)&&t.dispose(),t.parent&&t.parent.remove(t)};var ls=({loader:t,file:e,preload:n})=>new Promise((i,r)=>{let s=c=>{let l="",h="";c.lengthComputable&&(l=`${Math.ceil(c.loaded/c.total*100)}% `,h=`/${c.total}`)},o=c=>{i(c)},a=c=>{n.setError(c,"Error loading artifact.",5e3),console.log("error loading artifact",c),r(c)};t.load(e,o,s,a)});var dc=async t=>{let{file:e,preload:n}=t,i=new Tn;return await ls({loader:i,file:e,preload:n})};var xr={};lh(xr,{BrainwaveScene:()=>us,LatkScene:()=>hs,LightCubeScene:()=>pc,MolecularVortex:()=>gc,PlyScene:()=>fs,Record3DScene:()=>yr,bubbles:()=>Lo,chromaKey:()=>Ro,displacement:()=>Ao,pointcloud:()=>Eo});var ey=`
uniform sampler2D map;

uniform float width;
uniform float height;
uniform float nearClipping, farClipping;

uniform float pointSize;
uniform float zOffset;

varying vec2 vUv;

const float XtoZ = 1.11146;
const float YtoZ = 0.83359;

void main() {
  vUv = vec2(position.x / width, position.y / height);

  vec4 color = texture2D( map, vUv );
  float depth = (color.r + color.g + color.b) / 3.0;

  float z = (1.0 - depth) * (farClipping - nearClipping) + nearClipping;

  vec4 pos = vec4(
    (position.x / width - 0.5) * z * XtoZ * 2.0,
    (position.y / height - 0.5) * z * YtoZ * 2.0,
    - z + zOffset,
    1.0);

  gl_PointSize = pointSize;
  gl_Position = projectionMatrix * modelViewMatrix * pos;
}
`,ty=`
uniform sampler2D map;

varying vec2 vUv;

void main() {
  vec4 color = texture2D(map, vUv);
  gl_FragColor = vec4(color.r, color.g, color.b, 1);
}
`,Eo=({artifact:t,videoElement:e})=>{let n=new Gt(e);n.minFilter=et;let i=800,r=600,s=2,o=5,a=3,c=0,l=new Ie,h=new Float32Array(i*r*3);for(let p=0,y=0;p<h.length;p+=3,y++)h[p]=y%i,h[p+1]=Math.floor(y/i);l.setAttribute("position",new Ae(h,3));let u=new Ze({uniforms:{map:{value:n},width:{value:i},height:{value:r},nearClipping:{value:s},farClipping:{value:o},pointSize:{value:a},zOffset:{value:c}},vertexShader:ey,fragmentShader:ty});t.alpha&&(u.blending=Dn,u.depthTest=!1,u.depthWrite=!1,u.transparent=!0);let f=new nn(l,u);f.position.set(0,.5,0);let d=new ge;return d.add(f),d};var Ao=async({videoElement:t})=>{let e=new Gt(t);e.minFilter=et;let n=new at({map:e,displacementMap:e,displacementScale:1,side:pt}),i=new ui(3,1.66,50,32),r=new Le(i,n);r.position.set(0,1.5,-.5);let s=new ge;return s.add(r),s};var Lo=async({model:t,videoElement:e})=>{let n=[0,1.2,0],i=new Gt(e),r=new at({map:i,side:nt}),s=new Ot(.698,30,30),o=new Le(s,r);o.position.set(...n),t.getObjectByName("bubble_reflect").position.set(...n);let c=new Ot(.699,30,30),l=new ke({color:0,side:Pn}),h=new Le(c,l);h.name="clip",h.material=l,h.position.set(...n);let u=new ge;return u.add(h),u.add(o),u.add(t),u};var oh=class extends Ze{constructor(e,n={}){super({depthTest:!1});let{range:i=.5,mult:r=7,chromaKey:s=54322}=n;e.minFilter=je,e.magFilter=je,this.setValues({uniforms:{tex:{type:"t",value:e},chromaKey:{type:"c",value:s}},vertexShader:`
varying vec2 vUv;
void main() {
  vUv = uv;
  vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
  gl_Position = projectionMatrix * mvPosition;
}
    `.trim(),fragmentShader:`
uniform sampler2D tex;
uniform vec3 chromaKey;
uniform float mult;
varying vec2 vUv;
void main() {
  vec3 tColor = texture2D(tex, vUv).rgb;
  float a = (length(tColor - chromaKey) - ${i.toFixed(1)}) * ${r.toFixed(1)};
  gl_FragColor = vec4(tColor, a);
}
    `.trim(),transparent:!0})}},Ro=({artifact:t,videoTexture:e})=>{let n=new ue(rt.bool(t.chromaKey)?54322:t.chromaKey);return new oh(e,{chromaKey:n})};var yr=class{constructor(e){this.engine=e;let{artifact:n={},videoElement:i}=e,{videoWidth:r,videoHeight:s}=i,{filterSize:o="1",minDepth:a="0.1",maxDepth:c="2.8",depthThresholdFilter:l="0.9",scale:h="7.0",ptSize:u="1.0",pixelDepth:f="2.0",permanentSeconds:d=[],useBone:p=!1}=n;this.shaderConfig={filterSize:o,minDepth:a,maxDepth:c,depthThresholdFilter:l,scale:h,ptSize:u,pixelDepth:f},this.permanentSeconds=d,this.currentSecondId=0,this.useBone=p;let y=new Gt(i,{minFilter:je});this.boneChild=this.createPoints(y,"1.0"),this.pointCopies=[],this.canvases=[],this.permanentSeconds.forEach((v,g)=>{let m=Me.create("canvas",{height:s,width:r,style:{position:"fixed",left:"100vw"},parent:We.B});this.canvases.push(m);let A=new Zn(m,{minFilter:je}),S=this.createPoints(A);S.visible=!1,this.pointCopies.push(S),this.engine.scene.add(S)})}createPoints(e,n="1.0"){let{artifact:i={},videoElement:r}=this.engine,{videoWidth:s,videoHeight:o}=r,a=new bt,{ifx:c=.00125,ify:l=.00125,itx:h=-.4,ity:u=-.6}=i,f={texImg:{type:"t",value:e},texSize:{type:"i2",value:[s,o]},iK:{type:"f4",value:[c,l,h,u]},alpha:{type:"f",value:n}},{fragmentShader:d,vertexShader:p}=this.shaders(),y=new Ze({uniforms:f,side:pt,transparent:!0,vertexShader:p,fragmentShader:d}),v=s/2*o,g=new Uint32Array(v),m=new Float32Array(v);for(let E=0;E<v;E++)g[E]=E,m[E]=E;let A=new Ie;A.setAttribute("vertexIdx",new Pe(m,1)),A.setIndex(new li(new Uint32Array(g),1));let S=new nn(A,y);return S.frustumCulled=!1,a.add(S),a}shaders(){let{filterSize:e,minDepth:n,maxDepth:i,depthThresholdFilter:r,scale:s,ptSize:o,pixelDepth:a}=this.shaderConfig;return{vertexShader:`
 attribute float vertexIdx;

varying float vVertexIdx;
varying vec2 vPtPos;

uniform ivec2 texSize;
uniform sampler2D texImg;
uniform vec4 iK;

const float depthThresholdFilter = ${r}; // original 0.5 In meters. Smaller values = more aggressive filtering

float rgb2hue(vec3 c) {
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

  float d = q.x - min(q.w, q.y);
  float e = 1.0e-10;
  return abs(q.z + (q.w - q.y) / (6.0 * d + e));
}

float getPixelDepth(ivec2 pixel) {
  vec2 lookupPt = (vec2(pixel) + vec2(0.5)) / vec2(texSize);
  float hue = rgb2hue( texture2D(texImg, lookupPt).rgb );
  float pixelDepth = ${a} * hue; //original 3.0
  return pixelDepth;
}

bool shouldDiscard(ivec2 currPixel) {
  float centerPixelDepth = getPixelDepth(currPixel);

  for (int i = -${e}; i <= ${e}; i++) {
    for (int j = -${e}; j <= ${e}; j++) {
      if (i == 0 && j == 0) {
        continue;
      }

      float currDepth = getPixelDepth(currPixel + ivec2(j, i));

      if (currDepth < ${n}
          || currDepth >= ${i}
          || abs(centerPixelDepth - currDepth) > depthThresholdFilter ) {
        return true;
      }
    }
  }

  return false;
}

void main() {
  ivec2 frameSize = ivec2(texSize.x / 2, texSize.y);
  int vertIdx = int(vertexIdx);

  int actualNumPts = frameSize.x * frameSize.y;
  if (vertIdx >= actualNumPts) {
    gl_Position = vec4(0.0);
    return;
  }

  int ptY = vertIdx / int(frameSize.x);
  int ptX = vertIdx - ptY * int(frameSize.x);
  ivec2 pt = ivec2(ptX, ptY);

  if (shouldDiscard(pt)) {
    gl_Position = vec4(0.0);
    return;
  }

  float currDepth = getPixelDepth(pt);

  vec3 ptPos = ${s} * vec3(
    (iK.x * float(ptX) + iK.z) * currDepth,
    (iK.y * float(ptY) + iK.w) * currDepth,
    -currDepth
  );

  vec4 mvPos = modelViewMatrix * vec4(ptPos, 1.0);
  gl_Position = projectionMatrix * mvPos;

  vPtPos = vec2(float(ptX), float(ptY));
  vVertexIdx = vertexIdx;
  gl_PointSize = ${o};
}
`,fragmentShader:`
varying float vVertexIdx;
varying vec2 vPtPos;

uniform ivec2 texSize;
uniform sampler2D texImg;
uniform float alpha;

void main() {
  vec2 frameSizeF = vec2(texSize.x / 2, texSize.y);
  ivec2 frameSize = ivec2(frameSizeF);

  int vertIdx = int(vVertexIdx);
  int actualNumPts = frameSize.x * frameSize.y;
  if (vertIdx >= actualNumPts) {
    discard;
  }

  vec2 lookupPt = (vec2(vPtPos.x + frameSizeF.x, vPtPos.y) + vec2(0.5)) / vec2(texSize);
  vec3 currColor = texture2D(texImg, lookupPt).rgb;

  gl_FragColor = vec4(currColor, alpha);
}
 `}}exit(){Me.remove(this.canvasImgs)}renderCopies(){new Promise(e=>{let{videoElement:n}=this.engine,{videoHeight:i,videoWidth:r}=n;if(!this.waitForSecond)this.waitForSecond=this.permanentSeconds[this.currentSecondId];else if(n.currentTime>this.waitForSecond){this.canvases[this.currentSecondId].getContext("2d").drawImage(n,0,0,r,i);let o=this.pointCopies[this.currentSecondId];o.visible=!0,this.boneChild.matrixWorld.decompose(o.position,o.rotation,o.scale),this.currentSecondId++,this.waitForSecond=this.permanentSeconds[this.currentSecondId]}e()})}render(){let{camera:e,renderer:n,scene:i}=this.engine;this.currentSecondId<this.permanentSeconds.length&&this.renderCopies(),n.render(i,e)}};var Co=class extends Ze{constructor(e={}){let{fill:n,stroke:i}=e.uniforms;(rt.str(n.value)||rt.num(n.value))&&(e.uniforms.fill.value=new ue(n.value)),(rt.str(i.value)||rt.num(i.value))&&(e.uniforms.stroke.value=new ue(i.value)),e.vertexShader||(e.vertexShader=ny),e.fragmentShader||(e.fragmentShader=iy);let{extensions:r={}}=e;e.extensions={...r,derivatives:!0};super(e)}},ny=`
attribute vec3 barycentric;
attribute float even;

varying vec3 vBarycentric;

varying vec3 vPosition;
varying float vEven;
varying vec2 vUv;

void main () {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position.xyz, 1.0);
  vBarycentric = barycentric;
  vPosition = position.xyz;
  vEven = even;
  vUv = uv;
}
`,iy=`
varying vec3 vBarycentric;
varying float vEven;
varying vec2 vUv;
varying vec3 vPosition;

uniform float time;
uniform float thickness;
uniform float secondThickness;

uniform float dashRepeats;
uniform float dashLength;
uniform bool dashOverlap;
uniform bool dashEnabled;
uniform bool dashAnimate;

uniform bool seeThrough;
uniform bool insideAltColor;
uniform bool dualStroke;
uniform bool noiseA;
uniform bool noiseB;

uniform bool squeeze;
uniform float squeezeMin;
uniform float squeezeMax;

uniform vec3 stroke;
uniform vec3 fill;

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0; }

float mod289(float x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0; }

vec4 permute(vec4 x) {
  return mod289(((x*34.0)+1.0)*x);
}

float permute(float x) {
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

float taylorInvSqrt(float r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec4 grad4(float j, vec4 ip) {
  const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);
  vec4 p,s;

  p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;
  p.w = 1.5 - dot(abs(p.xyz), ones.xyz);
  s = vec4(lessThan(p, vec4(0.0)));
  p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;

  return p;
}

// (sqrt(5) - 1) / 4 = F4, used once below
#define F4 0.309016994374947451

float noise(vec4 v) {
  const vec4  C = vec4( 0.138196601125011,  // (5 - sqrt(5))/20  G4
                        0.276393202250021,  // 2 * G4
                        0.414589803375032,  // 3 * G4
                       -0.447213595499958); // -1 + 4 * G4

  // First corner
  vec4 i  = floor(v + dot(v, vec4(F4)) );
  vec4 x0 = v -   i + dot(i, C.xxxx);

  // Other corners

  // Rank sorting originally contributed by Bill Licea-Kane, AMD (formerly ATI)
  vec4 i0;
  vec3 isX = step( x0.yzw, x0.xxx );
  vec3 isYZ = step( x0.zww, x0.yyz );
  i0.x = isX.x + isX.y + isX.z;
  i0.yzw = 1.0 - isX;
  i0.y += isYZ.x + isYZ.y;
  i0.zw += 1.0 - isYZ.xy;
  i0.z += isYZ.z;
  i0.w += 1.0 - isYZ.z;

  // i0 now contains the unique values 0,1,2,3 in each channel
  vec4 i3 = clamp( i0, 0.0, 1.0 );
  vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );
  vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );

  vec4 x1 = x0 - i1 + C.xxxx;
  vec4 x2 = x0 - i2 + C.yyyy;
  vec4 x3 = x0 - i3 + C.zzzz;
  vec4 x4 = x0 + C.wwww;

  // Permutations
  i = mod289(i);
  float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);
  vec4 j1 = permute( permute( permute( permute (
             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))
           + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))
           + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))
           + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));

  // Gradients: 7x7x6 points over a cube, mapped onto a 4-cross polytope
  // 7*7*6 = 294, which is close to the ring size 17*17 = 289.
  vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;

  vec4 p0 = grad4(j0,   ip);
  vec4 p1 = grad4(j1.x, ip);
  vec4 p2 = grad4(j1.y, ip);
  vec4 p3 = grad4(j1.z, ip);
  vec4 p4 = grad4(j1.w, ip);

  // Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;
  p4 *= taylorInvSqrt(dot(p4,p4));

  // Mix contributions from the five corners
  vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);
  vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);
  m0 = m0 * m0;
  m1 = m1 * m1;
  return 49.0 * ( dot(m0*m0, vec3(dot(p0, x0), dot(p1, x1), dot(p2, x2)))
               + dot(m1*m1, vec2(dot(p3, x3), dot(p4, x4))));
}

float PI = 3.14159265359;

// This is like
float aastep (float threshold, float dist) {
  float afwidth = fwidth(dist) * 0.5;
  return smoothstep(threshold - afwidth, threshold + afwidth, dist);
}

// This function is not currently used, but it can be useful
// to achieve a fixed width wireframe regardless of z-depth
float computeScreenSpaceWireframe (vec3 barycentric, float lineWidth) {
  vec3 dist = fwidth(barycentric);
  vec3 smoothed = smoothstep(dist * ((lineWidth * 0.5) - 0.5), dist * ((lineWidth * 0.5) + 0.5), barycentric);
  return 1.0 - min(min(smoothed.x, smoothed.y), smoothed.z);
}

// This function returns the fragment color for our styled wireframe effect
// based on the barycentric coordinates for this fragment
vec4 getStyledWireframe (vec3 barycentric) {
  // this will be our signed distance for the wireframe edge
  float d = min(min(barycentric.x, barycentric.y), barycentric.z);

  // we can modify the distance field to create interesting effects & masking
  float noiseOff = 0.0;
  if (noiseA) {
    noiseOff += noise(vec4(vPosition.xyz * 1.0, time * 0.35)) * 0.15;
  }

  if (noiseB) {
    noiseOff += noise(vec4(vPosition.xyz * 80.0, time * 0.5)) * 0.12;
  }
  d += noiseOff;

  // for dashed rendering, we can use this to get the 0 .. 1 value of the line length
  float positionAlong = max(barycentric.x, barycentric.y);
  if (barycentric.y < barycentric.x && barycentric.y < barycentric.z) {
    positionAlong = 1.0 - positionAlong;
  }

  // the thickness of the stroke
  float computedThickness = thickness;

  // if we want to shrink the thickness toward the center of the line segment
  if (squeeze) {
    computedThickness *= mix(squeezeMin, squeezeMax, (1.0 - sin(positionAlong * PI)));
  }

  // if we should create a dash pattern
  if (dashEnabled) {
    // here we offset the stroke position depending on whether it
    // should overlap or not
    float offset = 1.0 / dashRepeats * dashLength / 2.0;
    if (!dashOverlap) {
      offset += 1.0 / dashRepeats / 2.0;
    }

    // if we should animate the dash or not
    if (dashAnimate) {
      offset += time * 0.22;
    }

    // create the repeating dash pattern
    float pattern = fract((positionAlong + offset) * dashRepeats);
    computedThickness *= 1.0 - aastep(dashLength, pattern);
  }

  // compute the anti-aliased stroke edge
  float edge = 1.0 - aastep(computedThickness, d);

  // now compute the final color of the mesh
  vec4 outColor = vec4(0.0);
  if (seeThrough) {
    outColor = vec4(stroke, edge);

    if (insideAltColor && !gl_FrontFacing) {
      outColor.rgb = fill;
    }
  } else {
    vec3 mainStroke = mix(fill, stroke, edge);
    outColor.a = 1.0;
    if (dualStroke) {
      float inner = 1.0 - aastep(secondThickness, d);
      vec3 wireColor = mix(fill, stroke, abs(inner - edge));
      outColor.rgb = wireColor;
    } else {
      outColor.rgb = mainStroke;
    }
  }

  return outColor;
}

void main () {
  gl_FragColor = getStyledWireframe(vBarycentric);
}
`;var us=class{constructor(e={}){let{artifact:n,camera:i,modelSpawned:r,renderer:s,scene:o,listener:a,XR:c}=e;this.listener=a,this.XR=c,this.scene=o,this.artifact=n,this.modelSpawned=r,this.props=e,this.model=e.model,this.camera=i,i.far=1e3,i.updateProjectionMatrix(),this.renderer=s,s.toneMapping=Wo,s.outputEncoding=yt;let{radiusSegments:l=5,tube1Radius:h=.4,tube2Radius:u=.37,growSteps:f=1,edgeRemoval:d=!1,positionScaleFactor:p=1,tubeScale:y=.1,tube1Rotation:v=90,tube2Rotation:g=-Math.PI*2,audioTreshold:m=.02,fps:A=60,maximalSplineLength:S=5e3}=n;this.radiusSegments=l,this.tube1Radius=h*p,this.tube2Radius=u*p,this.growSteps=f,this.positionScaleFactor=p,this.audioTreshold=m,this.tubeScale=y,this.tube1Rotation=v,this.tube2Rotation=g,this.edgeRemoval=d,this.currentDrawRangeMin=0,this.direction=1,this.msBetweenSplineExpansions=1e3/A,this.maximalSplineLength=S,this.audioDistanceMaxMeters=8}async init(){let{artifact:e}=this,i=`https://static.artificialmuseum.com/data/${e.data?e.data:e.slug}.js`,{data:r}=await import(i);this.data=r;let s=o=>new Promise(a=>{new Tn().load(o,l=>a(l))});this.matcapTexture=await s("https://static.artificialmuseum.com/textures/matcap/grey-white-light.jpg"),this.createCubes(),this.create3dSplines(),await this.loadAudio()}spawnModel(){this.audioTarget1.play(),this.audioTarget2.play()}async loadAudio(){let{artifact:e,camera:n,model:i,parent1:r,parent2:s}=this;return new Promise(o=>{let a=new ss;n.add(a);let c=r.position,l=new os(a);l.name="audiotarget_1",l.position.set(c.x,c.y,c.z);let h=s.position,u=new os(a);u.name="audiotarget_2",u.position.set(h.x,h.y,h.z),i.add(l),i.add(u),this.audioTarget1=l,this.audioTarget2=u;let f=new rs,p=`https://media.artificialmuseum.com/audio/${rt.str(e.audio)?e.audio:e.slug}.mp3`;f.load(p,y=>{l.setBuffer(y),l.setLoop(!0),l.setVolume(0),u.setBuffer(y),u.setLoop(!0),u.setVolume(0),u.offset=.1,o(y)})})}createCubes(){let e=this.positionScaleFactor,n=e*1.1,i=new Vn(n,n,n),r=new ei({matcap:this.matcapTexture});this.cubeGroup=new bt,this.cubeGroup.position.set(0,0,0);for(let s=0;s<5;s++)for(let o=0;o<28;o++){let a=new Le(i,r);a.name=`Cube_${s}_${o}`,a.rotateY(2*Math.PI/28*o),a.position.x=e*Math.sin(2*Math.PI/28*o)*Math.sqrt(28),a.position.z=e*Math.cos(2*Math.PI/28*o)*Math.sqrt(28),a.position.y=e*s*1.2+n*.5+.01,this.cubeGroup.add(a)}this.model.add(this.cubeGroup),this.collisionMaxDistance=n/2}create3dSplines(){let{artifact:e,radiusSegments:n,tube1Radius:i,tube2Radius:r,tube1Rotation:s,tube2Rotation:o,tubeScale:a,positionScaleFactor:c}=this,l=c*a;this.points=[{x:0,y:0,z:0},...this.data.map(([A,S,E])=>({x:A*l,y:S*l,z:E*l}))];let h=this.points.length*2,u=!1,f="catmullrom";this.spline=new ot(this.points,u,f),this.parent1=new ge,this.parent1.position.set(0,c*7,0),this.parent2=new ge,this.parent2.position.set(0,c*5,0),this.tube1Geometry=new mi(this.spline,h,i,n,!1).toNonIndexed(),this.tube1Geometry.rotateY(s),this.tube1Geometry.setDrawRange(0,this.maximalSplineLength),this.tube2Geometry=new mi(this.spline,h,r,n,!1).toNonIndexed(),this.tube2Geometry.rotateY(o),this.tube2Geometry.setDrawRange(0,this.maximalSplineLength);let{spline1RemoveEdges:d=!0,spline2RemoveEdges:p=!0}=e;To(this.tube1Geometry,d),To(this.tube2Geometry,p);let{spline1Uniforms:y={time:{value:0},fill:{value:new ue(14138052)},stroke:{value:new ue(16711680)},noiseA:{value:!1},noiseB:{value:!0},dualStroke:{value:!1},seeThrough:{value:!0},insideAltColor:{value:!1},thickness:{value:.1},secondThickness:{value:.05},dashEnabled:{value:!1},dashRepeats:{value:1},dashOverlap:{value:!1},dashLength:{value:.7},dashAnimate:{value:!1},squeeze:{value:!0},squeezeMin:{value:.28},squeezeMax:{value:1}}}=e;this.spline1material=new Co({uniforms:y,side:pt,transparent:!0});let{spline2Uniforms:v={time:{value:0},fill:{value:new ue(12802834)},stroke:{value:new ue(16711680)},noiseA:{value:!1},noiseB:{value:!0},dualStroke:{value:!1},seeThrough:{value:!0},insideAltColor:{value:!1},thickness:{value:.1},secondThickness:{value:.05},dashEnabled:{value:!1},dashRepeats:{value:1},dashOverlap:{value:!1},dashLength:{value:.7},dashAnimate:{value:!1},squeeze:{value:!0},squeezeMin:{value:.28},squeezeMax:{value:1}}}=e;this.spline2material=new Co({uniforms:v,side:pt,transparent:!0});let g=new Le(this.tube1Geometry,this.spline1material);g.name="tube_1";let m=new Le(this.tube2Geometry,this.spline2material);m.name="tube_2",this.parent1.add(g),this.parent2.add(m),this.model.add(this.parent1),this.model.add(this.parent2)}removeCubeIfTouchedBySpline(e){this.cubeGroup.traverse(n=>{n.isMesh&&n.visible&&e.forEach(i=>{n.position.distanceToSquared(i)<this.collisionMaxDistance&&(n.visible=!1)})})}exit(){this.tube1Geometry.setDrawRange(0,this.maximalSplineLength),this.tube2Geometry.setDrawRange(0,this.maximalSplineLength),this.audioTarget1?.isPlaying&&this.audioTarget1.stop(),this.audioTarget2?.isPlaying&&this.audioTarget2.stop(),this.cubeGroup.traverse(e=>{e.visible=!0})}render(e,n){this.props.modelSpawned&&(this.lastTimeStamp||(this.lastTimeStamp=this.msBetweenSplineExpansions+1),e-this.lastTimeStamp>=this.msBetweenSplineExpansions&&(this.lastTimeStamp=e,this.expandSpline())),this.renderer.render(this.scene,this.camera)}expandSpline(){let e=this.growSteps*this.radiusSegments*3*this.direction;this.currentDrawRangeMin+=e,this.tube1Geometry.setDrawRange(this.currentDrawRangeMin,this.maximalSplineLength),this.tube2Geometry.setDrawRange(this.currentDrawRangeMin,this.maximalSplineLength);let n=[],i=this.tube1Geometry.getAttribute("position").array,r=this.tube2Geometry.getAttribute("position").array,s=this.currentDrawRangeMin*3,o=(this.maximalSplineLength+this.currentDrawRangeMin)*3;for(let l=s;l<o;l+=3){let h={x:i[l],y:i[l+1]+this.parent1.position.y,z:i[l+2]};h.y>=0&&n.push(h);let u={x:r[l],y:r[l+1]+this.parent2.position.y,z:r[l+2]};u.y>=0&&n.push(u)}let a=n[n.length-2],c=n[n.length-1];this.repositionAudioTarget(this.audioTarget1,a),this.repositionAudioTarget(this.audioTarget2,c),this.removeCubeIfTouchedBySpline(n)}repositionAudioTarget(e,n){if(n&&e){let i=this.camera.position.distanceToSquared(n),r=e.getVolume(),s=Math.max(.1,Math.min(1,this.audioDistanceMaxMeters/i));Math.abs(r-s)>this.audioTreshold&&e.setVolume(s.toFixed(2))}}};var pc=class{constructor({artifact:e,model:n,renderer:i,scene:r,camera:s}){this.model=n,this.lightDistance=.4,this.yOffset=1.45,this.showLights=e.showLights,this.renderer=i,this.scene=r,this.camera=s,this.pointLight=this.createLight(16733525),n.add(this.pointLight),this.pointLight2=this.createLight(11184895),n.add(this.pointLight2)}createLight(e){let n=new fr(e,2,30);if(n.castShadow=!0,n.shadow.camera.near=.1,n.shadow.camera.far=30,this.showLights){let i=new Ot(.005,6,6),r=new ke({color:e}),s=new Le(i,r);n.add(s)}return n}render(e){let n=this.lightDistance,i=e*5e-4;{let s=Math.sin(i)*n,o=Math.sin(i*1.1)*n+this.yOffset,a=Math.sin(i*1.2)*n;this.pointLight.position.set(s,o,a)}let r=i+1e4;{let s=M.sin(r)*n,o=M.sin(r*1.1)*n+this.yOffset,a=M.sin(r*1.2)*n;this.pointLight2.position.set(s,o,a)}this.renderer.render(this.scene,this.camera)}};var ry=(t,e={})=>(e.reverse&&(t=t.reverse()),new L(...t)),hs=class{constructor(e){let n=[{mat:{color:16711680},pos:[0,0,0]}],{file:i=e.artifact.slug}=e.artifact,{fps:r=12,layers:s=n,reverse:o=!1}=e.artifact.latk;this.file=i;let a=1e3;this.frameMsInterval=a/r,this.layers=s,this.reverse=o,e.model?this.model=e.model:(this.model=new ge,this.model.position.set(0,0,0),e.model=this.model),this.longestLayer=-1,this.currentFrame=0,this.renderer=e.renderer,this.camera=e.camera,this.scene=e.scene,this.buffer=new Ie,this.lineGroup=new bt,this.model.add(this.lineGroup),this.layers.forEach(c=>{let l=this.createLayer(c);this.lineGroup.add(l)})}async init(){this.latk=await this.loadLatk()}createLayer(e){let{mat:n,pos:i}=e,r=new wt(n),s=new Yn(this.buffer,r);return s.frustumCulled=!1,i&&s.position.add(new L(...i)),s}async loadLatk(){let{latk:e}=await import(`https://static.artificialmuseum.com/latk/${this.file}.js`);return e.forEach(n=>{n.layers.forEach(i=>{i.frames.length>this.longestLayer&&(this.longestLayer=i.frames.length),i.frames.forEach(r=>{r.strokes.forEach(s=>{let o=s.points.map(a=>(a=Array.isArray(a)?a:a.co,ry(a,this)));s.points=o})})})}),e}render(e){this.updateLatk(e),this.renderer.render(this.scene,this.camera)}updateLatk(e){let{latk:n}=this;if(!(!n||!n.length)&&(!this.lastTick||this.lastTick+this.frameMsInterval<=e)){let i=[];n.forEach(s=>{let{layers:o}=s;o.forEach(a=>{let{frames:c={}}=a,{strokes:l=[]}=c[this.currentFrame];l.forEach(h=>{let u=this.drawStroke(h);i.push(...u)})})}),this.buffer.setFromPoints(i),this.currentFrame+=1,this.lastTick=e,this.lineGroup.traverse(s=>{s.geometry=this.buffer});let r=this.longestLayer-1;this.currentFrame>r&&(this.currentFrame=0)}}drawStroke(e){let n=[];for(let i=0;i<e.points.length-1;i++)n.push(e.points[i]),n.push(e.points[i+1]);return n}};var mc=(t,e,n)=>{let i=e.clone().sub(t).normalize().multiplyScalar(n);return t.clone().add(i)};mc.percent=(t,e,n)=>{let i=e.clone().sub(t),r=i.length(),s=i.normalize().multiplyScalar(r*n);return t.clone().add(s)};var gc=class{constructor(e){this.engine=e;let{sphereCount:n=1e3,blackMolCount:i=100,whiteMolCount:r=100,parentCount:s=10,spawnCircleYOffset:o=.5,spawnCircleHeight:a=15,sphereScaleFactor:c=.1,spawnCircleDistance:l=2,spawnCircleWidth:h=5,upMolSpawnY:u=-7,molYSpeedMod:f=.02,upMolTargetPos:d=2.2}=this.engine.artifact;this.sphereCount=n,this.whiteMolCount=r,this.blackMolCount=i,this.parentCount=s,this.spawnCircleYOffset=o,this.spawnCircleHeight=a,this.sphereScaleFactor=c,this.spawnCircleDistance=l,this.spawnCircleWidth=h,this.upMolSpawnY=u,this.molYSpeedMod=f,this.upMolTargetPos=d,this.spawnCircleParents=[],this.upCircleParents=[],this.parentVelocities=[],this.rotators=[],this.upMols=[],this.sphereMaterials=[new ke({color:new ue(0)}),new ke({color:new ue(16777215)})];let p=[15134221,3210255,12860729,16777173,16712446,8230640,15603985,458740,16340742,4709478,3543287,15689147];p.forEach(v=>{let g=new ke({color:new ue(v)});this.sphereMaterials.push(g)});let y=5;for(let v=0;v<y;v++)p.forEach(g=>{let m=new ke({color:new ue(g),transparent:!0,opacity:v+1*(1/y)+.2});this.sphereMaterials.push(m)});this.portal=this.engine.model.getObjectByName("portal")}async init(){let{blackMolCount:e,parentCount:n,sphereCount:i,upMolSpawnY:r,whiteMolCount:s}=this,o=this.portal.position;for(let c=0;c<n;c++){let l=new ge;this.spawnCircleParents.push(l),l.position.set(o.x,0,o.z),this.engine.model.add(l);let h=l.clone();h.position.set(o.x,r,o.z),this.upCircleParents.push(h),this.engine.model.add(h);let u=Math.random()*.002+.001;this.parentVelocities.push(u)}for(let c=0;c<i;c++){let l=this.createSphere(),{x:h,y:u,z:f}=this.getRandomCirclePosition();l.position.set(h,u,f);let d=c%this.spawnCircleParents.length;this.spawnCircleParents[d].add(l)}for(let c=0;c<s;c++){let l=this.createWhiteMol(),{x:h,y:u,z:f}=this.getRandomCirclePosition();l.position.set(h,u,f);let d=c%this.spawnCircleParents.length;this.spawnCircleParents[d].add(l)}for(let c=0;c<e;c++){let l=this.createBlackMol(),{x:h,y:u,z:f}=this.getRandomCirclePosition();l.position.set(h,u,f);let d=c%this.spawnCircleParents.length;this.spawnCircleParents[d].add(l)}for(let c=0;c<i/5;c++){let l=this.createSphere(),h=c%this.upCircleParents.length;this.upCircleParents[h].add(l),this.addUpMol(l)}for(let c=0;c<e/7;c++){let l=this.createBlackMol(),h=c%this.upCircleParents.length;this.upCircleParents[h].add(l),this.addUpMol(l)}let a=2;for(let c=0;c<s/7;c++){let l=this.createWhiteMol(a),h=c%this.upCircleParents.length;this.upCircleParents[h].add(l),this.addUpMol(l)}}getRandomCirclePosition(){let{spawnCircleDistance:e,spawnCircleWidth:n,spawnCircleHeight:i,spawnCircleYOffset:r}=this,s=Math.random()*n+e,o=Math.random()*360,a=s*Math.cos(o),c=s*Math.sin(o),l=Math.random()*(i/2)+r;return{x:a,y:l,z:c}}createSphere(e=Math.random()*this.sphereScaleFactor+.05){let n=new Ot(e,32,16),i=Math.floor(Math.random()*30-.001),r=this.sphereMaterials[i];return new Le(n,r)}createBlackMol(){let e=new ke({color:new ue(0)}),n=new ge,i=new Ot(.5,64,64),r=new Le(i,e),s=Math.random()*.1+.05;r.scale.set(s,s,s),n.add(r);let o=r.position,a=Math.round(Math.random()*5);for(let c=0;c<=a;c++){let l=(Math.random()-.5)*.7,h=(Math.random()-.5)*.7,u=(Math.random()-.5)*.7,f=new L(o.x+l,o.y+h,o.z+u),d=new Le(i,e);d.position.set(f.x,f.y,f.z);let p=Math.random()*.1+.05;d.scale.set(p,p,p);let y=2,v=.005,g=4,m=new ot([o,f]),A=new mi(m,y,v,g),S=new Le(A,e);n.add(S),n.add(d)}return this.addRotator(n),n}createWhiteMol(e=5){let n=new ke({color:new ue(16777215)}),i=new Ot(.3,64,64),r=new ge,s=new Le(i,n),o=Math.random()*.1+.05;s.scale.set(o,o,o),r.add(s);let a=Math.ceil(Math.random()*e),c=s.position;for(let f=0;f<a;f++){let d=(Math.random()-.5)*.5,p=Math.random()*.3+.1,y=(Math.random()-.5)*.5,v=new L(c.x+d,c.y+p,c.z+y),g=new Le(i,n);g.position.set(v.x,v.y,v.z);let m=Math.random()*.1+.05;g.scale.set(m,m,m);let A=2,S=.005,E=4,_=new ot([c,v]),F=new mi(_,A,S,E),Z=new Le(F,n);r.add(Z),r.add(g),c=v}r.position.set(Math.random()*3,Math.random()*3,Math.random()*3);let l=Math.random()*360*(Math.PI/180),h=Math.random()*360*(Math.PI/180),u=Math.random()*360*(Math.PI/180);return r.rotation.set(l,h,u),this.addRotator(r),r}addRotator(e){this.rotators.push({mesh:e,speed:Math.random()*.01,axis:new L(Math.random(),Math.random(),Math.random())})}addUpMol(e){let{upMolTargetPos:n}=this,i={mesh:e,speed:Math.random()*this.molYSpeedMod,target:new L(Math.random()*n-n/2,this.spawnCircleHeight,Math.random()*n-n/2)};this.upMols.push(i)}repositionUpMol(e){let n=e.parent.position;e.position.set(n.x,n.y,0)}render(){let{renderer:e,camera:n,scene:i}=this.engine;this.spawnCircleParents.forEach((s,o)=>{s.rotateY(this.parentVelocities[o])}),this.upCircleParents.forEach((s,o)=>{s.rotateY(this.parentVelocities[o]*5)}),this.rotators.forEach(s=>{s.mesh.rotateOnAxis(s.axis,s.speed)});let r=this.portal.position;this.upMols.forEach(s=>{let{mesh:o,speed:a,target:c}=s;if(o.position.y<this.spawnCircleHeight){let l=o.position.y+a,h=this.spawnCircleHeight-this.upMolSpawnY,u=this.spawnCircleHeight-l,f=h-u,{x:d,z:p}=mc(new L(0,this.upMolSpawnY,0),c,f);o.position.set(d,l,p)}else this.repositionUpMol(o),s.speed=Math.random()*this.molYSpeedMod}),e.render(i,n)}};var Po=function(t){Ue.call(this,t),this.propertyNameMapping={}};Po.prototype=Object.assign(Object.create(Ue.prototype),{constructor:Po,load:function(t,e,n,i){var r=this,s=new Rt(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(t,function(o){try{e(r.parse(o))}catch(a){i?i(a):console.error(a),r.manager.itemError(t)}},n,i)},setPropertyNameMapping:function(t){this.propertyNameMapping=t},parse:function(t){function e(p){var y=/ply([\s\S]*)end_header\r?\n/,v="",g=0,m=y.exec(p);m!==null&&(v=m[1],g=new Blob([m[0]]).size);var A={comments:[],elements:[],headerLength:g,objInfo:""},S=v.split(`
`),E,_,F;function Z(G,$){var j={type:G[0]};return j.type==="list"?(j.name=G[3],j.countType=G[1],j.itemType=G[2]):j.name=G[1],j.name in $&&(j.name=$[j.name]),j}for(var k=0;k<S.length;k++){var V=S[k];if(V=V.trim(),V!=="")switch(F=V.split(/\s+/),_=F.shift(),V=F.join(" "),_){case"format":A.format=F[0],A.version=F[1];break;case"comment":A.comments.push(V);break;case"element":E!==void 0&&A.elements.push(E),E={},E.name=F[0],E.count=parseInt(F[1]),E.properties=[];break;case"property":E.properties.push(Z(F,u.propertyNameMapping));break;case"obj_info":A.objInfo=V;break;default:console.log("unhandled",_,F)}}return E!==void 0&&A.elements.push(E),A}function n(p,y){switch(y){case"char":case"uchar":case"short":case"ushort":case"int":case"uint":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":return parseInt(p);case"float":case"double":case"float32":case"float64":return parseFloat(p)}}function i(p,y){for(var v=y.split(/\s+/),g={},m=0;m<p.length;m++)if(p[m].type==="list"){for(var A=[],S=n(v.shift(),p[m].countType),E=0;E<S;E++)A.push(n(v.shift(),p[m].itemType));g[p[m].name]=A}else g[p[m].name]=n(v.shift(),p[m].type);return g}function r(p,y){var v={indices:[],vertices:[],normals:[],uvs:[],faceVertexUvs:[],colors:[]},g,m=/end_header\s([\s\S]*)$/,A="";(g=m.exec(p))!==null&&(A=g[1]);for(var S=A.split(`
`),E=0,_=0,F=0;F<S.length;F++){var Z=S[F];if(Z=Z.trim(),Z!==""){_>=y.elements[E].count&&(E++,_=0);var k=i(y.elements[E].properties,Z);o(v,y.elements[E].name,k),_++}}return s(v)}function s(p){var y=new Ie;return p.indices.length>0&&y.setIndex(p.indices),y.setAttribute("position",new Pe(p.vertices,3)),p.normals.length>0&&y.setAttribute("normal",new Pe(p.normals,3)),p.uvs.length>0&&y.setAttribute("uv",new Pe(p.uvs,2)),p.colors.length>0&&y.setAttribute("color",new Pe(p.colors,3)),p.faceVertexUvs.length>0&&(y=y.toNonIndexed(),y.setAttribute("uv",new Pe(p.faceVertexUvs,2))),y.computeBoundingSphere(),y}function o(p,y,v){if(y==="vertex")p.vertices.push(v.x,v.y,v.z),"nx"in v&&"ny"in v&&"nz"in v&&p.normals.push(v.nx,v.ny,v.nz),"s"in v&&"t"in v&&p.uvs.push(v.s,v.t),"red"in v&&"green"in v&&"blue"in v&&p.colors.push(v.red/255,v.green/255,v.blue/255);else if(y==="face"){var g=v.vertex_indices||v.vertex_index,m=v.texcoord;g.length===3?(p.indices.push(g[0],g[1],g[2]),m&&m.length===6&&(p.faceVertexUvs.push(m[0],m[1]),p.faceVertexUvs.push(m[2],m[3]),p.faceVertexUvs.push(m[4],m[5]))):g.length===4&&(p.indices.push(g[0],g[1],g[3]),p.indices.push(g[1],g[2],g[3]))}}function a(p,y,v,g){switch(v){case"int8":case"char":return[p.getInt8(y),1];case"uint8":case"uchar":return[p.getUint8(y),1];case"int16":case"short":return[p.getInt16(y,g),2];case"uint16":case"ushort":return[p.getUint16(y,g),2];case"int32":case"int":return[p.getInt32(y,g),4];case"uint32":case"uint":return[p.getUint32(y,g),4];case"float32":case"float":return[p.getFloat32(y,g),4];case"float64":case"double":return[p.getFloat64(y,g),8]}}function c(p,y,v,g){for(var m={},A,S=0,E=0;E<v.length;E++)if(v[E].type==="list"){var _=[];A=a(p,y+S,v[E].countType,g);var F=A[0];S+=A[1];for(var Z=0;Z<F;Z++)A=a(p,y+S,v[E].itemType,g),_.push(A[0]),S+=A[1];m[v[E].name]=_}else A=a(p,y+S,v[E].type,g),m[v[E].name]=A[0],S+=A[1];return[m,S]}function l(p,y){for(var v={indices:[],vertices:[],normals:[],uvs:[],faceVertexUvs:[],colors:[]},g=y.format==="binary_little_endian",m=new DataView(p,y.headerLength),A,S=0,E=0;E<y.elements.length;E++)for(var _=0;_<y.elements[E].count;_++){A=c(m,S,y.elements[E].properties,g),S+=A[1];var F=A[0];o(v,y.elements[E].name,F)}return s(v)}var h,u=this;if(t instanceof ArrayBuffer){var f=Rn.decodeText(new Uint8Array(t)),d=e(f);h=d.format==="ascii"?r(f,d):l(t,d)}else h=r(t,e(t));return h}});var sy=`
precision highp float;

uniform float uSize;


void main() {
  gl_PointSize = uSize;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`,oy=`
precision highp float;

uniform vec3 uColor;

void main() {
  vec4 col = vec4(uColor, 1.0);
  gl_FragColor = col;
}
`,fs=class{constructor(e){this.engine=e;let n=["yellow"],{ply:i={}}=e.artifact;this.config={file:e.artifact.slug,materials:n,positionOffset:0,pointSize:2,scaleOffset:.01,...i}}async init(){let{file:e,materials:n,pointSize:i,positionOffset:r,scaleOffset:s}=this.config;this.engine.model=new ge;let o=await new Promise((c,l)=>{let h=new Po,u=`https://static.artificialmuseum.com/ply/${e}.ply`;h.load(u,c,()=>{},l)});o.computeVertexNormals();let a={fragmentShader:oy,vertexShader:sy,depthTest:!1,blending:Dn,uniforms:{uSize:{value:i*We.devicePixelRatio,type:"f"}}};this.clouds=n.map((c,l)=>{let h=new Ze({...a,uniforms:{...a.uniforms,uColor:{value:new ue(c),type:"f3"}}}),u=new nn(o,h),f=1+l*s;return u.scale.set(f,f,f),u.position.x=l*r,this.engine.model.add(u),u})}};var ds=(t="",e="no")=>t.toLowerCase().includes(e.toLowerCase());var _r=function(t,e){e===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),e===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=t,this.domElement=e,this.enabled=!0,this.target=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},this.mouseButtons={LEFT:mn.ROTATE,MIDDLE:mn.DOLLY,RIGHT:mn.PAN},this.touches={ONE:gn.ROTATE,TWO:gn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return l.phi},this.getAzimuthalAngle=function(){return l.theta},this.listenToKeyEvents=function(z){z.addEventListener("keydown",ce),this._domElementKeyEvents=z},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(i),n.update(),a=o.NONE},this.update=function(){var z=new L,re=new ut().setFromUnitVectors(t.up,new L(0,1,0)),de=re.clone().invert(),we=new L,qe=new ut,ft=2*Math.PI;return function(){var dn=n.object.position;z.copy(dn).sub(n.target),z.applyQuaternion(re),l.setFromVector3(z),n.autoRotate&&a===o.NONE&&k(F()),n.enableDamping?(l.theta+=h.theta*n.dampingFactor,l.phi+=h.phi*n.dampingFactor):(l.theta+=h.theta,l.phi+=h.phi);var vt=n.minAzimuthAngle,St=n.maxAzimuthAngle;return isFinite(vt)&&isFinite(St)&&(vt<-Math.PI?vt+=ft:vt>Math.PI&&(vt-=ft),St<-Math.PI?St+=ft:St>Math.PI&&(St-=ft),vt<=St?l.theta=Math.max(vt,Math.min(St,l.theta)):l.theta=l.theta>(vt+St)/2?Math.max(vt,l.theta):Math.min(St,l.theta)),l.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,l.phi)),l.makeSafe(),l.radius*=u,l.radius=Math.max(n.minDistance,Math.min(n.maxDistance,l.radius)),n.enableDamping===!0?n.target.addScaledVector(f,n.dampingFactor):n.target.add(f),z.setFromSpherical(l),z.applyQuaternion(de),dn.copy(n.target).add(z),n.object.lookAt(n.target),n.enableDamping===!0?(h.theta*=1-n.dampingFactor,h.phi*=1-n.dampingFactor,f.multiplyScalar(1-n.dampingFactor)):(h.set(0,0,0),f.set(0,0,0)),u=1,d||we.distanceToSquared(n.object.position)>c||8*(1-qe.dot(n.object.quaternion))>c?(n.dispatchEvent(i),we.copy(n.object.position),qe.copy(n.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",be),n.domElement.removeEventListener("pointerdown",W),n.domElement.removeEventListener("wheel",te),n.domElement.removeEventListener("touchstart",le),n.domElement.removeEventListener("touchend",xe),n.domElement.removeEventListener("touchmove",ae),n.domElement.ownerDocument.removeEventListener("pointermove",b),n.domElement.ownerDocument.removeEventListener("pointerup",x),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",ce)};var n=this,i={type:"change"},r={type:"start"},s={type:"end"},o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},a=o.NONE,c=1e-6,l=new xo,h=new xo,u=1,f=new L,d=!1,p=new se,y=new se,v=new se,g=new se,m=new se,A=new se,S=new se,E=new se,_=new se;function F(){return 2*Math.PI/60/60*n.autoRotateSpeed}function Z(){return Math.pow(.95,n.zoomSpeed)}function k(z){h.theta-=z}function V(z){h.phi-=z}var G=function(){var z=new L;return function(de,we){z.setFromMatrixColumn(we,0),z.multiplyScalar(-de),f.add(z)}}(),$=function(){var z=new L;return function(de,we){n.screenSpacePanning===!0?z.setFromMatrixColumn(we,1):(z.setFromMatrixColumn(we,0),z.crossVectors(n.object.up,z)),z.multiplyScalar(de),f.add(z)}}(),j=function(){var z=new L;return function(de,we){var qe=n.domElement;if(n.object.isPerspectiveCamera){var ft=n.object.position;z.copy(ft).sub(n.target);var Jt=z.length();Jt*=Math.tan(n.object.fov/2*Math.PI/180),G(2*de*Jt/qe.clientHeight,n.object.matrix),$(2*we*Jt/qe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(G(de*(n.object.right-n.object.left)/n.object.zoom/qe.clientWidth,n.object.matrix),$(we*(n.object.top-n.object.bottom)/n.object.zoom/qe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function H(z){n.object.isPerspectiveCamera?u/=z:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*z)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(z){n.object.isPerspectiveCamera?u*=z:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/z)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(z){p.set(z.clientX,z.clientY)}function oe(z){S.set(z.clientX,z.clientY)}function he(z){g.set(z.clientX,z.clientY)}function fe(z){y.set(z.clientX,z.clientY),v.subVectors(y,p).multiplyScalar(n.rotateSpeed);var re=n.domElement;k(2*Math.PI*v.x/re.clientHeight),V(2*Math.PI*v.y/re.clientHeight),p.copy(y),n.update()}function _e(z){E.set(z.clientX,z.clientY),_.subVectors(E,S),_.y>0?H(Z()):_.y<0&&q(Z()),S.copy(E),n.update()}function ve(z){m.set(z.clientX,z.clientY),A.subVectors(m,g).multiplyScalar(n.panSpeed),j(A.x,A.y),g.copy(m),n.update()}function ye(){}function Ce(z){z.deltaY<0?q(Z()):z.deltaY>0&&H(Z()),n.update()}function He(z){var re=!1;switch(z.keyCode){case n.keys.UP:j(0,n.keyPanSpeed),re=!0;break;case n.keys.BOTTOM:j(0,-n.keyPanSpeed),re=!0;break;case n.keys.LEFT:j(n.keyPanSpeed,0),re=!0;break;case n.keys.RIGHT:j(-n.keyPanSpeed,0),re=!0;break}re&&(z.preventDefault(),n.update())}function ie(z){if(z.touches.length==1)p.set(z.touches[0].pageX,z.touches[0].pageY);else{var re=.5*(z.touches[0].pageX+z.touches[1].pageX),de=.5*(z.touches[0].pageY+z.touches[1].pageY);p.set(re,de)}}function T(z){if(z.touches.length==1)g.set(z.touches[0].pageX,z.touches[0].pageY);else{var re=.5*(z.touches[0].pageX+z.touches[1].pageX),de=.5*(z.touches[0].pageY+z.touches[1].pageY);g.set(re,de)}}function w(z){var re=z.touches[0].pageX-z.touches[1].pageX,de=z.touches[0].pageY-z.touches[1].pageY,we=Math.sqrt(re*re+de*de);S.set(0,we)}function D(z){n.enableZoom&&w(z),n.enablePan&&T(z)}function R(z){n.enableZoom&&w(z),n.enableRotate&&ie(z)}function O(z){if(z.touches.length==1)y.set(z.touches[0].pageX,z.touches[0].pageY);else{var re=.5*(z.touches[0].pageX+z.touches[1].pageX),de=.5*(z.touches[0].pageY+z.touches[1].pageY);y.set(re,de)}v.subVectors(y,p).multiplyScalar(n.rotateSpeed);var we=n.domElement;k(2*Math.PI*v.x/we.clientHeight),V(2*Math.PI*v.y/we.clientHeight),p.copy(y)}function B(z){if(z.touches.length==1)m.set(z.touches[0].pageX,z.touches[0].pageY);else{var re=.5*(z.touches[0].pageX+z.touches[1].pageX),de=.5*(z.touches[0].pageY+z.touches[1].pageY);m.set(re,de)}A.subVectors(m,g).multiplyScalar(n.panSpeed),j(A.x,A.y),g.copy(m)}function P(z){var re=z.touches[0].pageX-z.touches[1].pageX,de=z.touches[0].pageY-z.touches[1].pageY,we=Math.sqrt(re*re+de*de);E.set(0,we),_.set(0,Math.pow(E.y/S.y,n.zoomSpeed)),H(_.y),S.copy(E)}function I(z){n.enableZoom&&P(z),n.enablePan&&B(z)}function U(z){n.enableZoom&&P(z),n.enableRotate&&O(z)}function X(){}function W(z){if(n.enabled!==!1)switch(z.pointerType){case"mouse":case"pen":Q(z);break}}function b(z){if(n.enabled!==!1)switch(z.pointerType){case"mouse":case"pen":Y(z);break}}function x(z){switch(z.pointerType){case"mouse":case"pen":N(z);break}}function Q(z){z.preventDefault(),n.domElement.focus?n.domElement.focus():window.focus();var re;switch(z.button){case 0:re=n.mouseButtons.LEFT;break;case 1:re=n.mouseButtons.MIDDLE;break;case 2:re=n.mouseButtons.RIGHT;break;default:re=-1}switch(re){case mn.DOLLY:if(n.enableZoom===!1)return;oe(z),a=o.DOLLY;break;case mn.ROTATE:if(z.ctrlKey||z.metaKey||z.shiftKey){if(n.enablePan===!1)return;he(z),a=o.PAN}else{if(n.enableRotate===!1)return;J(z),a=o.ROTATE}break;case mn.PAN:if(z.ctrlKey||z.metaKey||z.shiftKey){if(n.enableRotate===!1)return;J(z),a=o.ROTATE}else{if(n.enablePan===!1)return;he(z),a=o.PAN}break;default:a=o.NONE}a!==o.NONE&&(n.domElement.ownerDocument.addEventListener("pointermove",b),n.domElement.ownerDocument.addEventListener("pointerup",x),n.dispatchEvent(r))}function Y(z){if(n.enabled!==!1)switch(z.preventDefault(),a){case o.ROTATE:if(n.enableRotate===!1)return;fe(z);break;case o.DOLLY:if(n.enableZoom===!1)return;_e(z);break;case o.PAN:if(n.enablePan===!1)return;ve(z);break}}function N(z){n.domElement.ownerDocument.removeEventListener("pointermove",b),n.domElement.ownerDocument.removeEventListener("pointerup",x),n.enabled!==!1&&(n.dispatchEvent(s),a=o.NONE)}function te(z){n.enabled===!1||n.enableZoom===!1||a!==o.NONE&&a!==o.ROTATE||(z.preventDefault(),z.stopPropagation(),n.dispatchEvent(r),Ce(z),n.dispatchEvent(s))}function ce(z){n.enabled===!1||n.enablePan===!1||He(z)}function le(z){if(n.enabled!==!1){switch(z.preventDefault(),z.touches.length){case 1:switch(n.touches.ONE){case gn.ROTATE:if(n.enableRotate===!1)return;ie(z),a=o.TOUCH_ROTATE;break;case gn.PAN:if(n.enablePan===!1)return;T(z),a=o.TOUCH_PAN;break;default:a=o.NONE}break;case 2:switch(n.touches.TWO){case gn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;D(z),a=o.TOUCH_DOLLY_PAN;break;case gn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;R(z),a=o.TOUCH_DOLLY_ROTATE;break;default:a=o.NONE}break;default:a=o.NONE}a!==o.NONE&&n.dispatchEvent(r)}}function ae(z){if(n.enabled!==!1)switch(z.preventDefault(),z.stopPropagation(),a){case o.TOUCH_ROTATE:if(n.enableRotate===!1)return;O(z),n.update();break;case o.TOUCH_PAN:if(n.enablePan===!1)return;B(z),n.update();break;case o.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;I(z),n.update();break;case o.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;U(z),n.update();break;default:a=o.NONE}}function xe(z){n.enabled!==!1&&(n.dispatchEvent(s),a=o.NONE)}function be(z){n.enabled!==!1&&z.preventDefault()}n.domElement.addEventListener("contextmenu",be),n.domElement.addEventListener("pointerdown",W),n.domElement.addEventListener("wheel",te),n.domElement.addEventListener("touchstart",le),n.domElement.addEventListener("touchend",xe),n.domElement.addEventListener("touchmove",ae),this.update()};_r.prototype=Object.create(jt.prototype);_r.prototype.constructor=_r;var vc=function(t,e){_r.call(this,t,e),this.screenSpacePanning=!1,this.mouseButtons.LEFT=mn.PAN,this.mouseButtons.RIGHT=mn.ROTATE,this.touches.ONE=gn.PAN,this.touches.TWO=gn.DOLLY_ROTATE};vc.prototype=Object.create(jt.prototype);vc.prototype.constructor=vc;var ah=function(){function t(T){Ue.call(this,T),this.dracoLoader=null,this.ddsLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(w){return new o(w)}),this.register(function(w){return new c(w)}),this.register(function(w){return new l(w)}),this.register(function(w){return new a(w)}),this.register(function(w){return new r(w)}),this.register(function(w){return new h(w)})}t.prototype=Object.assign(Object.create(Ue.prototype),{constructor:t,load:function(T,w,D,R){var O=this,B;this.resourcePath!==""?B=this.resourcePath:this.path!==""?B=this.path:B=Rn.extractUrlBase(T),this.manager.itemStart(T);var P=function(U){R?R(U):console.error(U),O.manager.itemError(T),O.manager.itemEnd(T)},I=new Rt(this.manager);I.setPath(this.path),I.setResponseType("arraybuffer"),I.setRequestHeader(this.requestHeader),I.setWithCredentials(this.withCredentials),I.load(T,function(U){try{O.parse(U,B,function(X){w(X),O.manager.itemEnd(T)},P)}catch(X){P(X)}},D,P)},setDRACOLoader:function(T){return this.dracoLoader=T,this},setDDSLoader:function(T){return this.ddsLoader=T,this},setKTX2Loader:function(T){return this.ktx2Loader=T,this},setMeshoptDecoder:function(T){return this.meshoptDecoder=T,this},register:function(T){return this.pluginCallbacks.indexOf(T)===-1&&this.pluginCallbacks.push(T),this},unregister:function(T){return this.pluginCallbacks.indexOf(T)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(T),1),this},parse:function(T,w,D,R){var O,B={},P={};if(typeof T=="string")O=T;else{var I=Rn.decodeText(new Uint8Array(T,0,4));if(I===u){try{B[n.KHR_BINARY_GLTF]=new p(T)}catch(Y){R&&R(Y);return}O=B[n.KHR_BINARY_GLTF].content}else O=Rn.decodeText(new Uint8Array(T))}var U=JSON.parse(O);if(U.asset===void 0||U.asset.version[0]<2){R&&R(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}var X=new ye(U,{path:w||this.resourcePath||"",crossOrigin:this.crossOrigin,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});X.fileLoader.setRequestHeader(this.requestHeader);for(var W=0;W<this.pluginCallbacks.length;W++){var b=this.pluginCallbacks[W](X);P[b.name]=b,B[b.name]=!0}if(U.extensionsUsed)for(var W=0;W<U.extensionsUsed.length;++W){var x=U.extensionsUsed[W],Q=U.extensionsRequired||[];switch(x){case n.KHR_MATERIALS_UNLIT:B[x]=new s;break;case n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:B[x]=new m;break;case n.KHR_DRACO_MESH_COMPRESSION:B[x]=new y(U,this.dracoLoader);break;case n.MSFT_TEXTURE_DDS:B[x]=new i(this.ddsLoader);break;case n.KHR_TEXTURE_TRANSFORM:B[x]=new v;break;case n.KHR_MESH_QUANTIZATION:B[x]=new A;break;default:Q.indexOf(x)>=0&&P[x]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+x+'".')}}X.setExtensions(B),X.setPlugins(P),X.parse(D,R)}});function e(){var T={};return{get:function(w){return T[w]},add:function(w,D){T[w]=D},remove:function(w){delete T[w]},removeAll:function(){T={}}}}var n={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",MSFT_TEXTURE_DDS:"MSFT_texture_dds"};function i(T){if(!T)throw new Error("THREE.GLTFLoader: Attempting to load .dds texture without importing DDSLoader");this.name=n.MSFT_TEXTURE_DDS,this.ddsLoader=T}function r(T){this.parser=T,this.name=n.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}r.prototype._markDefs=function(){for(var T=this.parser,w=this.parser.json.nodes||[],D=0,R=w.length;D<R;D++){var O=w[D];O.extensions&&O.extensions[this.name]&&O.extensions[this.name].light!==void 0&&T._addNodeRef(this.cache,O.extensions[this.name].light)}},r.prototype._loadLight=function(T){var w=this.parser,D="light:"+T,R=w.cache.get(D);if(R)return R;var O=w.json,B=O.extensions&&O.extensions[this.name]||{},P=B.lights||[],I=P[T],U,X=new ue(16777215);I.color!==void 0&&X.fromArray(I.color);var W=I.range!==void 0?I.range:0;switch(I.type){case"directional":U=new pr(X),U.target.position.set(0,0,-1),U.add(U.target);break;case"point":U=new fr(X),U.distance=W;break;case"spot":U=new uo(X),U.distance=W,I.spot=I.spot||{},I.spot.innerConeAngle=I.spot.innerConeAngle!==void 0?I.spot.innerConeAngle:0,I.spot.outerConeAngle=I.spot.outerConeAngle!==void 0?I.spot.outerConeAngle:Math.PI/4,U.angle=I.spot.outerConeAngle,U.penumbra=1-I.spot.innerConeAngle/I.spot.outerConeAngle,U.target.position.set(0,0,-1),U.add(U.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+I.type)}return U.position.set(0,0,0),U.decay=2,I.intensity!==void 0&&(U.intensity=I.intensity),U.name=w.createUniqueName(I.name||"light_"+T),R=Promise.resolve(U),w.cache.add(D,R),R},r.prototype.createNodeAttachment=function(T){var w=this,D=this.parser,R=D.json,O=R.nodes[T],B=O.extensions&&O.extensions[this.name]||{},P=B.light;return P===void 0?null:this._loadLight(P).then(function(I){return D._getNodeRef(w.cache,P,I)})};function s(){this.name=n.KHR_MATERIALS_UNLIT}s.prototype.getMaterialType=function(){return ke},s.prototype.extendParams=function(T,w,D){var R=[];T.color=new ue(1,1,1),T.opacity=1;var O=w.pbrMetallicRoughness;if(O){if(Array.isArray(O.baseColorFactor)){var B=O.baseColorFactor;T.color.fromArray(B),T.opacity=B[3]}O.baseColorTexture!==void 0&&R.push(D.assignTexture(T,"map",O.baseColorTexture))}return Promise.all(R)};function o(T){this.parser=T,this.name=n.KHR_MATERIALS_CLEARCOAT}o.prototype.getMaterialType=function(T){var w=this.parser,D=w.json.materials[T];return!D.extensions||!D.extensions[this.name]?null:rn},o.prototype.extendMaterialParams=function(T,w){var D=this.parser,R=D.json.materials[T];if(!R.extensions||!R.extensions[this.name])return Promise.resolve();var O=[],B=R.extensions[this.name];if(B.clearcoatFactor!==void 0&&(w.clearcoat=B.clearcoatFactor),B.clearcoatTexture!==void 0&&O.push(D.assignTexture(w,"clearcoatMap",B.clearcoatTexture)),B.clearcoatRoughnessFactor!==void 0&&(w.clearcoatRoughness=B.clearcoatRoughnessFactor),B.clearcoatRoughnessTexture!==void 0&&O.push(D.assignTexture(w,"clearcoatRoughnessMap",B.clearcoatRoughnessTexture)),B.clearcoatNormalTexture!==void 0&&(O.push(D.assignTexture(w,"clearcoatNormalMap",B.clearcoatNormalTexture)),B.clearcoatNormalTexture.scale!==void 0)){var P=B.clearcoatNormalTexture.scale;w.clearcoatNormalScale=new se(P,-P)}return Promise.all(O)};function a(T){this.parser=T,this.name=n.KHR_MATERIALS_TRANSMISSION}a.prototype.getMaterialType=function(T){var w=this.parser,D=w.json.materials[T];return!D.extensions||!D.extensions[this.name]?null:rn},a.prototype.extendMaterialParams=function(T,w){var D=this.parser,R=D.json.materials[T];if(!R.extensions||!R.extensions[this.name])return Promise.resolve();var O=[],B=R.extensions[this.name];return B.transmissionFactor!==void 0&&(w.transmission=B.transmissionFactor),B.transmissionTexture!==void 0&&O.push(D.assignTexture(w,"transmissionMap",B.transmissionTexture)),Promise.all(O)};function c(T){this.parser=T,this.name=n.KHR_TEXTURE_BASISU}c.prototype.loadTexture=function(T){var w=this.parser,D=w.json,R=D.textures[T];if(!R.extensions||!R.extensions[this.name])return null;var O=R.extensions[this.name],B=D.images[O.source],P=w.options.ktx2Loader;if(!P){if(D.extensionsRequired&&D.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return w.loadTextureImage(T,B,P)};function l(T){this.parser=T,this.name=n.EXT_TEXTURE_WEBP,this.isSupported=null}l.prototype.loadTexture=function(T){var w=this.name,D=this.parser,R=D.json,O=R.textures[T];if(!O.extensions||!O.extensions[w])return null;var B=O.extensions[w],P=R.images[B.source],I=P.uri?D.options.manager.getHandler(P.uri):D.textureLoader;return this.detectSupport().then(function(U){if(U)return D.loadTextureImage(T,P,I);if(R.extensionsRequired&&R.extensionsRequired.indexOf(w)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return D.loadTexture(T)})},l.prototype.detectSupport=function(){return this.isSupported||(this.isSupported=new Promise(function(T){var w=new Image;w.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",w.onload=w.onerror=function(){T(w.height===1)}})),this.isSupported};function h(T){this.name=n.EXT_MESHOPT_COMPRESSION,this.parser=T}h.prototype.loadBufferView=function(T){var w=this.parser.json,D=w.bufferViews[T];if(D.extensions&&D.extensions[this.name]){var R=D.extensions[this.name],O=this.parser.getDependency("buffer",R.buffer),B=this.parser.options.meshoptDecoder;if(!B||!B.supported){if(w.extensionsRequired&&w.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return Promise.all([O,B.ready]).then(function(P){var I=R.byteOffset||0,U=R.byteLength||0,X=R.count,W=R.byteStride,b=new ArrayBuffer(X*W),x=new Uint8Array(P[0],I,U);return B.decodeGltfBuffer(new Uint8Array(b),X,W,x,R.mode,R.filter),b})}else return null};var u="glTF",f=12,d={JSON:1313821514,BIN:5130562};function p(T){this.name=n.KHR_BINARY_GLTF,this.content=null,this.body=null;var w=new DataView(T,0,f);if(this.header={magic:Rn.decodeText(new Uint8Array(T.slice(0,4))),version:w.getUint32(4,!0),length:w.getUint32(8,!0)},this.header.magic!==u)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");for(var D=this.header.length-f,R=new DataView(T,f),O=0;O<D;){var B=R.getUint32(O,!0);O+=4;var P=R.getUint32(O,!0);if(O+=4,P===d.JSON){var I=new Uint8Array(T,f+O,B);this.content=Rn.decodeText(I)}else if(P===d.BIN){var U=f+O;this.body=T.slice(U,U+B)}O+=B}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}function y(T,w){if(!w)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=n.KHR_DRACO_MESH_COMPRESSION,this.json=T,this.dracoLoader=w,this.dracoLoader.preload()}y.prototype.decodePrimitive=function(T,w){var D=this.json,R=this.dracoLoader,O=T.extensions[this.name].bufferView,B=T.extensions[this.name].attributes,P={},I={},U={};for(var X in B){var W=V[X]||X.toLowerCase();P[W]=B[X]}for(X in T.attributes){var W=V[X]||X.toLowerCase();if(B[X]!==void 0){var b=D.accessors[T.attributes[X]],x=_[b.componentType];U[W]=x,I[W]=b.normalized===!0}}return w.getDependency("bufferView",O).then(function(Q){return new Promise(function(Y){R.decodeDracoFile(Q,function(N){for(var te in N.attributes){var ce=N.attributes[te],le=I[te];le!==void 0&&(ce.normalized=le)}Y(N)},P,U)})})};function v(){this.name=n.KHR_TEXTURE_TRANSFORM}v.prototype.extendTexture=function(T,w){return T=T.clone(),w.offset!==void 0&&T.offset.fromArray(w.offset),w.rotation!==void 0&&(T.rotation=w.rotation),w.scale!==void 0&&T.repeat.fromArray(w.scale),w.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),T.needsUpdate=!0,T};function g(T){at.call(this),this.isGLTFSpecularGlossinessMaterial=!0;var w=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),D=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),R=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	texelSpecular = sRGBToLinear( texelSpecular );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),O=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),B=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.specularRoughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.specularRoughness += geometryRoughness;","material.specularRoughness = min( material.specularRoughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),P={specular:{value:new ue().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=P,this.onBeforeCompile=function(I){for(var U in P)I.uniforms[U]=P[U];I.fragmentShader=I.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",w).replace("#include <metalnessmap_pars_fragment>",D).replace("#include <roughnessmap_fragment>",R).replace("#include <metalnessmap_fragment>",O).replace("#include <lights_physical_fragment>",B)},Object.defineProperties(this,{specular:{get:function(){return P.specular.value},set:function(I){P.specular.value=I}},specularMap:{get:function(){return P.specularMap.value},set:function(I){P.specularMap.value=I,I?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return P.glossiness.value},set:function(I){P.glossiness.value=I}},glossinessMap:{get:function(){return P.glossinessMap.value},set:function(I){P.glossinessMap.value=I,I?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(T)}g.prototype=Object.create(at.prototype),g.prototype.constructor=g,g.prototype.copy=function(T){return at.prototype.copy.call(this,T),this.specularMap=T.specularMap,this.specular.copy(T.specular),this.glossinessMap=T.glossinessMap,this.glossiness=T.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this};function m(){return{name:n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,specularGlossinessParams:["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity","refractionRatio"],getMaterialType:function(){return g},extendParams:function(T,w,D){var R=w.extensions[this.name];T.color=new ue(1,1,1),T.opacity=1;var O=[];if(Array.isArray(R.diffuseFactor)){var B=R.diffuseFactor;T.color.fromArray(B),T.opacity=B[3]}if(R.diffuseTexture!==void 0&&O.push(D.assignTexture(T,"map",R.diffuseTexture)),T.emissive=new ue(0,0,0),T.glossiness=R.glossinessFactor!==void 0?R.glossinessFactor:1,T.specular=new ue(1,1,1),Array.isArray(R.specularFactor)&&T.specular.fromArray(R.specularFactor),R.specularGlossinessTexture!==void 0){var P=R.specularGlossinessTexture;O.push(D.assignTexture(T,"glossinessMap",P)),O.push(D.assignTexture(T,"specularMap",P))}return Promise.all(O)},createMaterial:function(T){var w=new g(T);return w.fog=!0,w.color=T.color,w.map=T.map===void 0?null:T.map,w.lightMap=null,w.lightMapIntensity=1,w.aoMap=T.aoMap===void 0?null:T.aoMap,w.aoMapIntensity=1,w.emissive=T.emissive,w.emissiveIntensity=1,w.emissiveMap=T.emissiveMap===void 0?null:T.emissiveMap,w.bumpMap=T.bumpMap===void 0?null:T.bumpMap,w.bumpScale=1,w.normalMap=T.normalMap===void 0?null:T.normalMap,w.normalMapType=Fn,T.normalScale&&(w.normalScale=T.normalScale),w.displacementMap=null,w.displacementScale=1,w.displacementBias=0,w.specularMap=T.specularMap===void 0?null:T.specularMap,w.specular=T.specular,w.glossinessMap=T.glossinessMap===void 0?null:T.glossinessMap,w.glossiness=T.glossiness,w.alphaMap=null,w.envMap=T.envMap===void 0?null:T.envMap,w.envMapIntensity=1,w.refractionRatio=.98,w}}}function A(){this.name=n.KHR_MESH_QUANTIZATION}function S(T,w,D,R){Et.call(this,T,w,D,R)}S.prototype=Object.create(Et.prototype),S.prototype.constructor=S,S.prototype.copySampleValue_=function(T){for(var w=this.resultBuffer,D=this.sampleValues,R=this.valueSize,O=T*R*3+R,B=0;B!==R;B++)w[B]=D[O+B];return w},S.prototype.beforeStart_=S.prototype.copySampleValue_,S.prototype.afterEnd_=S.prototype.copySampleValue_,S.prototype.interpolate_=function(T,w,D,R){for(var O=this.resultBuffer,B=this.sampleValues,P=this.valueSize,I=P*2,U=P*3,X=R-w,W=(D-w)/X,b=W*W,x=b*W,Q=T*U,Y=Q-U,N=-2*x+3*b,te=x-b,ce=1-N,le=te-b+W,ae=0;ae!==P;ae++){var xe=B[Y+ae+P],be=B[Y+ae+I]*X,z=B[Q+ae+P],re=B[Q+ae]*X;O[ae]=ce*xe+le*be+N*z+te*re}return O};var E={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},_={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},F={9728:et,9729:je,9984:xs,9985:Yo,9986:_s,9987:si},Z={33071:Tt,33648:Lr,10497:ri},k={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},V={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},G={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},$={CUBICSPLINE:void 0,LINEAR:oi,STEP:Ci},j={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function H(T,w){return typeof T!="string"||T===""?"":(/^https?:\/\//i.test(w)&&/^\//.test(T)&&(w=w.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(T)||/^data:.*,.*$/i.test(T)||/^blob:.*$/i.test(T)?T:w+T)}function q(T){return T.DefaultMaterial===void 0&&(T.DefaultMaterial=new at({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Pn})),T.DefaultMaterial}function J(T,w,D){for(var R in D.extensions)T[R]===void 0&&(w.userData.gltfExtensions=w.userData.gltfExtensions||{},w.userData.gltfExtensions[R]=D.extensions[R])}function oe(T,w){w.extras!==void 0&&(typeof w.extras=="object"?Object.assign(T.userData,w.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+w.extras))}function he(T,w,D){for(var R=!1,O=!1,B=0,P=w.length;B<P;B++){var I=w[B];if(I.POSITION!==void 0&&(R=!0),I.NORMAL!==void 0&&(O=!0),R&&O)break}if(!R&&!O)return Promise.resolve(T);for(var U=[],X=[],B=0,P=w.length;B<P;B++){var I=w[B];if(R){var W=I.POSITION!==void 0?D.getDependency("accessor",I.POSITION):T.attributes.position;U.push(W)}if(O){var W=I.NORMAL!==void 0?D.getDependency("accessor",I.NORMAL):T.attributes.normal;X.push(W)}}return Promise.all([Promise.all(U),Promise.all(X)]).then(function(b){var x=b[0],Q=b[1];return R&&(T.morphAttributes.position=x),O&&(T.morphAttributes.normal=Q),T.morphTargetsRelative=!0,T})}function fe(T,w){if(T.updateMorphTargets(),w.weights!==void 0)for(var D=0,R=w.weights.length;D<R;D++)T.morphTargetInfluences[D]=w.weights[D];if(w.extras&&Array.isArray(w.extras.targetNames)){var O=w.extras.targetNames;if(T.morphTargetInfluences.length===O.length){T.morphTargetDictionary={};for(var D=0,R=O.length;D<R;D++)T.morphTargetDictionary[O[D]]=D}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function _e(T){var w=T.extensions&&T.extensions[n.KHR_DRACO_MESH_COMPRESSION],D;return w?D="draco:"+w.bufferView+":"+w.indices+":"+ve(w.attributes):D=T.indices+":"+ve(T.attributes)+":"+T.mode,D}function ve(T){for(var w="",D=Object.keys(T).sort(),R=0,O=D.length;R<O;R++)w+=D[R]+":"+T[D[R]]+";";return w}function ye(T,w){this.json=T||{},this.extensions={},this.plugins={},this.options=w||{},this.cache=new e,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.nodeNamesUsed={},typeof createImageBitmap!="undefined"&&/Firefox/.test(navigator.userAgent)===!1?this.textureLoader=new po(this.options.manager):this.textureLoader=new Tn(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.fileLoader=new Rt(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}ye.prototype.setExtensions=function(T){this.extensions=T},ye.prototype.setPlugins=function(T){this.plugins=T},ye.prototype.parse=function(T,w){var D=this,R=this.json,O=this.extensions;this.cache.removeAll(),this._invokeAll(function(B){return B._markDefs&&B._markDefs()}),Promise.all([this.getDependencies("scene"),this.getDependencies("animation"),this.getDependencies("camera")]).then(function(B){var P={scene:B[0][R.scene||0],scenes:B[0],animations:B[1],cameras:B[2],asset:R.asset,parser:D,userData:{}};J(O,P,R),oe(P,R),T(P)}).catch(w)},ye.prototype._markDefs=function(){for(var T=this.json.nodes||[],w=this.json.skins||[],D=this.json.meshes||[],R=0,O=w.length;R<O;R++)for(var B=w[R].joints,P=0,I=B.length;P<I;P++)T[B[P]].isBone=!0;for(var U=0,X=T.length;U<X;U++){var W=T[U];W.mesh!==void 0&&(this._addNodeRef(this.meshCache,W.mesh),W.skin!==void 0&&(D[W.mesh].isSkinnedMesh=!0)),W.camera!==void 0&&this._addNodeRef(this.cameraCache,W.camera)}},ye.prototype._addNodeRef=function(T,w){w!==void 0&&(T.refs[w]===void 0&&(T.refs[w]=T.uses[w]=0),T.refs[w]++)},ye.prototype._getNodeRef=function(T,w,D){if(T.refs[w]<=1)return D;var R=D.clone();return R.name+="_instance_"+T.uses[w]++,R},ye.prototype._invokeOne=function(T){var w=Object.values(this.plugins);w.push(this);for(var D=0;D<w.length;D++){var R=T(w[D]);if(R)return R}},ye.prototype._invokeAll=function(T){var w=Object.values(this.plugins);w.unshift(this);for(var D=[],R=0;R<w.length;R++){var O=T(w[R]);O&&D.push(O)}return D},ye.prototype.getDependency=function(T,w){var D=T+":"+w,R=this.cache.get(D);if(!R){switch(T){case"scene":R=this.loadScene(w);break;case"node":R=this.loadNode(w);break;case"mesh":R=this._invokeOne(function(O){return O.loadMesh&&O.loadMesh(w)});break;case"accessor":R=this.loadAccessor(w);break;case"bufferView":R=this._invokeOne(function(O){return O.loadBufferView&&O.loadBufferView(w)});break;case"buffer":R=this.loadBuffer(w);break;case"material":R=this._invokeOne(function(O){return O.loadMaterial&&O.loadMaterial(w)});break;case"texture":R=this._invokeOne(function(O){return O.loadTexture&&O.loadTexture(w)});break;case"skin":R=this.loadSkin(w);break;case"animation":R=this.loadAnimation(w);break;case"camera":R=this.loadCamera(w);break;default:throw new Error("Unknown type: "+T)}this.cache.add(D,R)}return R},ye.prototype.getDependencies=function(T){var w=this.cache.get(T);if(!w){var D=this,R=this.json[T+(T==="mesh"?"es":"s")]||[];w=Promise.all(R.map(function(O,B){return D.getDependency(T,B)})),this.cache.add(T,w)}return w},ye.prototype.loadBuffer=function(T){var w=this.json.buffers[T],D=this.fileLoader;if(w.type&&w.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+w.type+" buffer type is not supported.");if(w.uri===void 0&&T===0)return Promise.resolve(this.extensions[n.KHR_BINARY_GLTF].body);var R=this.options;return new Promise(function(O,B){D.load(H(w.uri,R.path),O,void 0,function(){B(new Error('THREE.GLTFLoader: Failed to load buffer "'+w.uri+'".'))})})},ye.prototype.loadBufferView=function(T){var w=this.json.bufferViews[T];return this.getDependency("buffer",w.buffer).then(function(D){var R=w.byteLength||0,O=w.byteOffset||0;return D.slice(O,O+R)})},ye.prototype.loadAccessor=function(T){var w=this,D=this.json,R=this.json.accessors[T];if(R.bufferView===void 0&&R.sparse===void 0)return Promise.resolve(null);var O=[];return R.bufferView!==void 0?O.push(this.getDependency("bufferView",R.bufferView)):O.push(null),R.sparse!==void 0&&(O.push(this.getDependency("bufferView",R.sparse.indices.bufferView)),O.push(this.getDependency("bufferView",R.sparse.values.bufferView))),Promise.all(O).then(function(B){var P=B[0],I=k[R.type],U=_[R.componentType],X=U.BYTES_PER_ELEMENT,W=X*I,b=R.byteOffset||0,x=R.bufferView!==void 0?D.bufferViews[R.bufferView].byteStride:void 0,Q=R.normalized===!0,Y,N;if(x&&x!==W){var te=Math.floor(b/x),ce="InterleavedBuffer:"+R.bufferView+":"+R.componentType+":"+te+":"+R.count,le=w.cache.get(ce);le||(Y=new U(P,te*x,R.count*x/X),le=new Lt(Y,x/X),w.cache.add(ce,le)),N=new Mn(le,I,b%x/X,Q)}else P===null?Y=new U(R.count*I):Y=new U(P,b,R.count*I),N=new Ae(Y,I,Q);if(R.sparse!==void 0){var ae=k.SCALAR,xe=_[R.sparse.indices.componentType],be=R.sparse.indices.byteOffset||0,z=R.sparse.values.byteOffset||0,re=new xe(B[1],be,R.sparse.count*ae),de=new U(B[2],z,R.sparse.count*I);P!==null&&(N=new Ae(N.array.slice(),N.itemSize,N.normalized));for(var we=0,qe=re.length;we<qe;we++){var ft=re[we];if(N.setX(ft,de[we*I]),I>=2&&N.setY(ft,de[we*I+1]),I>=3&&N.setZ(ft,de[we*I+2]),I>=4&&N.setW(ft,de[we*I+3]),I>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return N})},ye.prototype.loadTexture=function(T){var w=this,D=this.json,R=this.options,O=D.textures[T],B=O.extensions||{},P;B[n.MSFT_TEXTURE_DDS]?P=D.images[B[n.MSFT_TEXTURE_DDS].source]:P=D.images[O.source];var I;return P.uri&&(I=R.manager.getHandler(P.uri)),I||(I=B[n.MSFT_TEXTURE_DDS]?w.extensions[n.MSFT_TEXTURE_DDS].ddsLoader:this.textureLoader),this.loadTextureImage(T,P,I)},ye.prototype.loadTextureImage=function(T,w,D){var R=this,O=this.json,B=this.options,P=O.textures[T],I=self.URL||self.webkitURL,U=w.uri,X=!1,W=!0;return w.mimeType==="image/jpeg"&&(W=!1),w.bufferView!==void 0&&(U=R.getDependency("bufferView",w.bufferView).then(function(b){if(w.mimeType==="image/png"){var x=new DataView(b,25,1).getUint8(0,!1);W=x===6||x===4||x===3}X=!0;var Q=new Blob([b],{type:w.mimeType});return U=I.createObjectURL(Q),U})),Promise.resolve(U).then(function(b){return new Promise(function(x,Q){var Y=x;D.isImageBitmapLoader===!0&&(Y=function(N){x(new Zn(N))}),D.load(H(b,B.path),Y,void 0,Q)})}).then(function(b){X===!0&&I.revokeObjectURL(U),b.flipY=!1,P.name&&(b.name=P.name),W||(b.format=Vt);var x=O.samplers||{},Q=x[P.sampler]||{};return b.magFilter=F[Q.magFilter]||je,b.minFilter=F[Q.minFilter]||si,b.wrapS=Z[Q.wrapS]||ri,b.wrapT=Z[Q.wrapT]||ri,R.associations.set(b,{type:"textures",index:T}),b})},ye.prototype.assignTexture=function(T,w,D){var R=this;return this.getDependency("texture",D.index).then(function(O){if(D.texCoord!==void 0&&D.texCoord!=0&&!(w==="aoMap"&&D.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+D.texCoord+" for texture "+w+" not yet supported."),R.extensions[n.KHR_TEXTURE_TRANSFORM]){var B=D.extensions!==void 0?D.extensions[n.KHR_TEXTURE_TRANSFORM]:void 0;if(B){var P=R.associations.get(O);O=R.extensions[n.KHR_TEXTURE_TRANSFORM].extendTexture(O,B),R.associations.set(O,P)}}T[w]=O})},ye.prototype.assignFinalMaterial=function(T){var w=T.geometry,D=T.material,R=w.attributes.tangent!==void 0,O=w.attributes.color!==void 0,B=w.attributes.normal===void 0,P=T.isSkinnedMesh===!0,I=Object.keys(w.morphAttributes).length>0,U=I&&w.morphAttributes.normal!==void 0;if(T.isPoints){var X="PointsMaterial:"+D.uuid,W=this.cache.get(X);W||(W=new Sn,Te.prototype.copy.call(W,D),W.color.copy(D.color),W.map=D.map,W.sizeAttenuation=!1,this.cache.add(X,W)),D=W}else if(T.isLine){var X="LineBasicMaterial:"+D.uuid,b=this.cache.get(X);b||(b=new wt,Te.prototype.copy.call(b,D),b.color.copy(D.color),this.cache.add(X,b)),D=b}if(R||O||B||P||I){var X="ClonedMaterial:"+D.uuid+":";D.isGLTFSpecularGlossinessMaterial&&(X+="specular-glossiness:"),P&&(X+="skinning:"),R&&(X+="vertex-tangents:"),O&&(X+="vertex-colors:"),B&&(X+="flat-shading:"),I&&(X+="morph-targets:"),U&&(X+="morph-normals:");var x=this.cache.get(X);x||(x=D.clone(),P&&(x.skinning=!0),O&&(x.vertexColors=!0),B&&(x.flatShading=!0),I&&(x.morphTargets=!0),U&&(x.morphNormals=!0),R&&(x.vertexTangents=!0,D.normalScale&&(D.normalScale.y*=-1),D.clearcoatNormalScale&&(D.clearcoatNormalScale.y*=-1)),this.cache.add(X,x),this.associations.set(x,this.associations.get(D))),D=x}D.aoMap&&w.attributes.uv2===void 0&&w.attributes.uv!==void 0&&w.setAttribute("uv2",w.attributes.uv),T.material=D},ye.prototype.getMaterialType=function(){return at},ye.prototype.loadMaterial=function(T){var w=this,D=this.json,R=this.extensions,O=D.materials[T],B,P={},I=O.extensions||{},U=[];if(I[n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){var X=R[n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];B=X.getMaterialType(),U.push(X.extendParams(P,O,w))}else if(I[n.KHR_MATERIALS_UNLIT]){var W=R[n.KHR_MATERIALS_UNLIT];B=W.getMaterialType(),U.push(W.extendParams(P,O,w))}else{var b=O.pbrMetallicRoughness||{};if(P.color=new ue(1,1,1),P.opacity=1,Array.isArray(b.baseColorFactor)){var x=b.baseColorFactor;P.color.fromArray(x),P.opacity=x[3]}b.baseColorTexture!==void 0&&U.push(w.assignTexture(P,"map",b.baseColorTexture)),P.metalness=b.metallicFactor!==void 0?b.metallicFactor:1,P.roughness=b.roughnessFactor!==void 0?b.roughnessFactor:1,b.metallicRoughnessTexture!==void 0&&(U.push(w.assignTexture(P,"metalnessMap",b.metallicRoughnessTexture)),U.push(w.assignTexture(P,"roughnessMap",b.metallicRoughnessTexture))),B=this._invokeOne(function(Y){return Y.getMaterialType&&Y.getMaterialType(T)}),U.push(Promise.all(this._invokeAll(function(Y){return Y.extendMaterialParams&&Y.extendMaterialParams(T,P)})))}O.doubleSided===!0&&(P.side=pt);var Q=O.alphaMode||j.OPAQUE;return Q===j.BLEND?(P.transparent=!0,P.depthWrite=!1):(P.transparent=!1,Q===j.MASK&&(P.alphaTest=O.alphaCutoff!==void 0?O.alphaCutoff:.5)),O.normalTexture!==void 0&&B!==ke&&(U.push(w.assignTexture(P,"normalMap",O.normalTexture)),P.normalScale=new se(1,-1),O.normalTexture.scale!==void 0&&P.normalScale.set(O.normalTexture.scale,-O.normalTexture.scale)),O.occlusionTexture!==void 0&&B!==ke&&(U.push(w.assignTexture(P,"aoMap",O.occlusionTexture)),O.occlusionTexture.strength!==void 0&&(P.aoMapIntensity=O.occlusionTexture.strength)),O.emissiveFactor!==void 0&&B!==ke&&(P.emissive=new ue().fromArray(O.emissiveFactor)),O.emissiveTexture!==void 0&&B!==ke&&U.push(w.assignTexture(P,"emissiveMap",O.emissiveTexture)),Promise.all(U).then(function(){var Y;return B===g?Y=R[n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(P):Y=new B(P),O.name&&(Y.name=O.name),Y.map&&(Y.map.encoding=Wt),Y.emissiveMap&&(Y.emissiveMap.encoding=Wt),oe(Y,O),w.associations.set(Y,{type:"materials",index:T}),O.extensions&&J(R,Y,O),Y})},ye.prototype.createUniqueName=function(T){for(var w=gt.sanitizeNodeName(T||""),D=w,R=1;this.nodeNamesUsed[D];++R)D=w+"_"+R;return this.nodeNamesUsed[D]=!0,D};function Ce(T,w,D){var R=w.attributes,O=new $t;if(R.POSITION!==void 0){var B=D.json.accessors[R.POSITION],P=B.min,I=B.max;if(P!==void 0&&I!==void 0)O.set(new L(P[0],P[1],P[2]),new L(I[0],I[1],I[2]));else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;var U=w.targets;if(U!==void 0){for(var X=new L,W=new L,b=0,x=U.length;b<x;b++){var Q=U[b];if(Q.POSITION!==void 0){var B=D.json.accessors[Q.POSITION],P=B.min,I=B.max;P!==void 0&&I!==void 0?(W.setX(Math.max(Math.abs(P[0]),Math.abs(I[0]))),W.setY(Math.max(Math.abs(P[1]),Math.abs(I[1]))),W.setZ(Math.max(Math.abs(P[2]),Math.abs(I[2]))),X.max(W)):console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}O.expandByVector(X)}T.boundingBox=O;var Y=new Qt;O.getCenter(Y.center),Y.radius=O.min.distanceTo(O.max)/2,T.boundingSphere=Y}function He(T,w,D){var R=w.attributes,O=[];function B(X,W){return D.getDependency("accessor",X).then(function(b){T.setAttribute(W,b)})}for(var P in R){var I=V[P]||P.toLowerCase();I in T.attributes||O.push(B(R[P],I))}if(w.indices!==void 0&&!T.index){var U=D.getDependency("accessor",w.indices).then(function(X){T.setIndex(X)});O.push(U)}return oe(T,w),Ce(T,w,D),Promise.all(O).then(function(){return w.targets!==void 0?he(T,w.targets,D):T})}function ie(T,w){var D=T.getIndex();if(D===null){var R=[],O=T.getAttribute("position");if(O!==void 0){for(var B=0;B<O.count;B++)R.push(B);T.setIndex(R),D=T.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),T}var P=D.count-2,I=[];if(w===$o)for(var B=1;B<=P;B++)I.push(D.getX(0)),I.push(D.getX(B)),I.push(D.getX(B+1));else for(var B=0;B<P;B++)B%2===0?(I.push(D.getX(B)),I.push(D.getX(B+1)),I.push(D.getX(B+2))):(I.push(D.getX(B+2)),I.push(D.getX(B+1)),I.push(D.getX(B)));I.length/3!==P&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");var U=T.clone();return U.setIndex(I),U}return ye.prototype.loadGeometries=function(T){var w=this,D=this.extensions,R=this.primitiveCache;function O(x){return D[n.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(x,w).then(function(Q){return He(Q,x,w)})}for(var B=[],P=0,I=T.length;P<I;P++){var U=T[P],X=_e(U),W=R[X];if(W)B.push(W.promise);else{var b;U.extensions&&U.extensions[n.KHR_DRACO_MESH_COMPRESSION]?b=O(U):b=He(new Ie,U,w),R[X]={primitive:U,promise:b},B.push(b)}}return Promise.all(B)},ye.prototype.loadMesh=function(T){for(var w=this,D=this.json,R=this.extensions,O=D.meshes[T],B=O.primitives,P=[],I=0,U=B.length;I<U;I++){var X=B[I].material===void 0?q(this.cache):this.getDependency("material",B[I].material);P.push(X)}return P.push(w.loadGeometries(B)),Promise.all(P).then(function(W){for(var b=W.slice(0,W.length-1),x=W[W.length-1],Q=[],Y=0,N=x.length;Y<N;Y++){var te=x[Y],ce=B[Y],le,ae=b[Y];if(ce.mode===E.TRIANGLES||ce.mode===E.TRIANGLE_STRIP||ce.mode===E.TRIANGLE_FAN||ce.mode===void 0)le=O.isSkinnedMesh===!0?new Xr(te,ae):new Le(te,ae),ae.isMeshStandardMaterial===!0&&ae.side===pt&&te.getIndex()!==null&&te.hasAttribute("position")===!0&&te.hasAttribute("normal")===!0&&te.hasAttribute("uv")===!0&&te.hasAttribute("tangent")===!1&&(te.computeTangents(),ae.vertexTangents=!0),le.isSkinnedMesh===!0&&!le.geometry.attributes.skinWeight.normalized&&le.normalizeSkinWeights(),ce.mode===E.TRIANGLE_STRIP?le.geometry=ie(le.geometry,Qc):ce.mode===E.TRIANGLE_FAN&&(le.geometry=ie(le.geometry,$o));else if(ce.mode===E.LINES)le=new Yn(te,ae);else if(ce.mode===E.LINE_STRIP)le=new Xn(te,ae);else if(ce.mode===E.LINE_LOOP)le=new Qs(te,ae);else if(ce.mode===E.POINTS)le=new nn(te,ae);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+ce.mode);Object.keys(le.geometry.morphAttributes).length>0&&fe(le,O),le.name=w.createUniqueName(O.name||"mesh_"+T),oe(le,O),ce.extensions&&J(R,le,ce),w.assignFinalMaterial(le),Q.push(le)}if(Q.length===1)return Q[0];for(var xe=new bt,Y=0,N=Q.length;Y<N;Y++)xe.add(Q[Y]);return xe})},ye.prototype.loadCamera=function(T){var w,D=this.json.cameras[T],R=D[D.type];if(!R){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return D.type==="perspective"?w=new $e(Ee.radToDeg(R.yfov),R.aspectRatio||1,R.znear||1,R.zfar||2e6):D.type==="orthographic"&&(w=new dr(-R.xmag,R.xmag,R.ymag,-R.ymag,R.znear,R.zfar)),D.name&&(w.name=this.createUniqueName(D.name)),oe(w,D),Promise.resolve(w)},ye.prototype.loadSkin=function(T){var w=this.json.skins[T],D={joints:w.joints};return w.inverseBindMatrices===void 0?Promise.resolve(D):this.getDependency("accessor",w.inverseBindMatrices).then(function(R){return D.inverseBindMatrices=R,D})},ye.prototype.loadAnimation=function(T){for(var w=this.json,D=w.animations[T],R=[],O=[],B=[],P=[],I=[],U=0,X=D.channels.length;U<X;U++){var W=D.channels[U],b=D.samplers[W.sampler],x=W.target,Q=x.node!==void 0?x.node:x.id,Y=D.parameters!==void 0?D.parameters[b.input]:b.input,N=D.parameters!==void 0?D.parameters[b.output]:b.output;R.push(this.getDependency("node",Q)),O.push(this.getDependency("accessor",Y)),B.push(this.getDependency("accessor",N)),P.push(b),I.push(x)}return Promise.all([Promise.all(R),Promise.all(O),Promise.all(B),Promise.all(P),Promise.all(I)]).then(function(te){for(var ce=te[0],le=te[1],ae=te[2],xe=te[3],be=te[4],z=[],re=0,de=ce.length;re<de;re++){var we=ce[re],qe=le[re],ft=ae[re],Jt=xe[re],dn=be[re];if(we!==void 0){we.updateMatrix(),we.matrixAutoUpdate=!0;var vt;switch(G[dn.path]){case G.weights:vt=vi;break;case G.rotation:vt=lr;break;case G.position:case G.scale:default:vt=yi;break}var St=we.name?we.name:we.uuid,Do=Jt.interpolation!==void 0?$[Jt.interpolation]:oi,Kt=[];G[dn.path]===G.weights?we.traverse(function(C){C.isMesh===!0&&C.morphTargetInfluences&&Kt.push(C.name?C.name:C.uuid)}):Kt.push(St);var Nt=ft.array;if(ft.normalized){var Cn;if(Nt.constructor===Int8Array)Cn=1/127;else if(Nt.constructor===Uint8Array)Cn=1/255;else if(Nt.constructor==Int16Array)Cn=1/32767;else if(Nt.constructor===Uint16Array)Cn=1/65535;else throw new Error("THREE.GLTFLoader: Unsupported output accessor component type.");for(var br=new Float32Array(Nt.length),ct=0,Si=Nt.length;ct<Si;ct++)br[ct]=Nt[ct]*Cn;Nt=br}for(var ct=0,Si=Kt.length;ct<Si;ct++){var wr=new vt(Kt[ct]+"."+G[dn.path],qe.array,Nt,Do);Jt.interpolation==="CUBICSPLINE"&&(wr.createInterpolant=function(ne){return new S(this.times,this.values,this.getValueSize()/3,ne)},wr.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),z.push(wr)}}}var Oo=D.name?D.name:"animation_"+T;return new Ft(Oo,void 0,z)})},ye.prototype.loadNode=function(T){var w=this.json,D=this.extensions,R=this,O=w.nodes[T],B=O.name?R.createUniqueName(O.name):"";return function(){var P=[];return O.mesh!==void 0&&P.push(R.getDependency("mesh",O.mesh).then(function(I){var U=R._getNodeRef(R.meshCache,O.mesh,I);return O.weights!==void 0&&U.traverse(function(X){if(!!X.isMesh)for(var W=0,b=O.weights.length;W<b;W++)X.morphTargetInfluences[W]=O.weights[W]}),U})),O.camera!==void 0&&P.push(R.getDependency("camera",O.camera).then(function(I){return R._getNodeRef(R.cameraCache,O.camera,I)})),R._invokeAll(function(I){return I.createNodeAttachment&&I.createNodeAttachment(T)}).forEach(function(I){P.push(I)}),Promise.all(P)}().then(function(P){var I;if(O.isBone===!0?I=new Yr:P.length>1?I=new bt:P.length===1?I=P[0]:I=new ge,I!==P[0])for(var U=0,X=P.length;U<X;U++)I.add(P[U]);if(O.name&&(I.userData.name=O.name,I.name=B),oe(I,O),O.extensions&&J(D,I,O),O.matrix!==void 0){var W=new Re;W.fromArray(O.matrix),I.applyMatrix4(W)}else O.translation!==void 0&&I.position.fromArray(O.translation),O.rotation!==void 0&&I.quaternion.fromArray(O.rotation),O.scale!==void 0&&I.scale.fromArray(O.scale);return R.associations.set(I,{type:"nodes",index:T}),I})},ye.prototype.loadScene=function(){function T(w,D,R,O){var B=R.nodes[w];return O.getDependency("node",w).then(function(P){if(B.skin===void 0)return P;var I;return O.getDependency("skin",B.skin).then(function(U){I=U;for(var X=[],W=0,b=I.joints.length;W<b;W++)X.push(O.getDependency("node",I.joints[W]));return Promise.all(X)}).then(function(U){return P.traverse(function(X){if(!!X.isMesh){for(var W=[],b=[],x=0,Q=U.length;x<Q;x++){var Y=U[x];if(Y){W.push(Y);var N=new Re;I.inverseBindMatrices!==void 0&&N.fromArray(I.inverseBindMatrices.array,x*16),b.push(N)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',I.joints[x])}X.bind(new Zr(W,b),X.matrixWorld)}}),P})}).then(function(P){D.add(P);var I=[];if(B.children)for(var U=B.children,X=0,W=U.length;X<W;X++){var b=U[X];I.push(T(b,P,R,O))}return Promise.all(I)})}return function(D){var R=this.json,O=this.extensions,B=this.json.scenes[D],P=this,I=new bt;B.name&&(I.name=P.createUniqueName(B.name)),oe(I,B),B.extensions&&J(O,I,B);for(var U=B.nodes||[],X=[],W=0,b=U.length;W<b;W++)X.push(T(U[W],I,R,P));return Promise.all(X).then(function(){return I})}}(),t}();var Io=class extends Le{constructor(e,n={},i){super(e);this.type="Reflector",this.XR=i.XR,this.skybox=i.skybox,this.shadowPlane=i.shadowPlane;let r=this,{textureHeight:s=512,textureWidth:o=512,clipBias:a=0,fragmentShader:c=cy,vertexShader:l=ay}=n,h=n.color!==void 0?new ue(n.color):new ue(8355711),u=new Ut,f=new L,d=new L,p=new L,y=new Re,v=new L(0,0,-1),g=new Ge,m=new L,A=new L,S=new Ge,E=new Re,_=new $e,F={minFilter:je,magFilter:je,format:Vt},Z=new vn(o,s,F);(!Ee.isPowerOfTwo(o)||!Ee.isPowerOfTwo(s))&&(Z.texture.generateMipmaps=!1);let k={tDiffuse:{value:Z.texture},color:{value:h},textureMatrix:{value:E}},V=new Ze({uniforms:k,fragmentShader:c,vertexShader:l});this.material=V,this.onBeforeRender=(G,$,j)=>{if(d.setFromMatrixPosition(r.matrixWorld),p.setFromMatrixPosition(j.matrixWorld),y.extractRotation(r.matrixWorld),f.set(0,0,1),f.applyMatrix4(y),m.subVectors(d,p),m.dot(f)>0)return;m.reflect(f).negate(),m.add(d),y.extractRotation(j.matrixWorld),v.set(0,0,-1),v.applyMatrix4(y),v.add(p),A.subVectors(d,v),A.reflect(f).negate(),A.add(d),_.position.copy(m),_.up.set(0,1,0),_.up.applyMatrix4(y),_.up.reflect(f),_.lookAt(A),_.far=j.far,_.updateMatrixWorld(),_.projectionMatrix.copy(j.projectionMatrix),E.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),E.multiply(_.projectionMatrix),E.multiply(_.matrixWorldInverse),E.multiply(r.matrixWorld),u.setFromNormalAndCoplanarPoint(f,d),u.applyMatrix4(_.matrixWorldInverse),g.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let H=_.projectionMatrix;S.x=(Math.sign(g.x)+H.elements[8])/H.elements[0],S.y=(Math.sign(g.y)+H.elements[9])/H.elements[5],S.z=-1,S.w=(1+H.elements[10])/H.elements[14],g.multiplyScalar(2/g.dot(S)),H.elements[2]=g.x,H.elements[6]=g.y,H.elements[10]=g.z+1-a,H.elements[14]=g.w,Z.texture.encoding=G.outputEncoding,r.visible=!1;let q=G.getRenderTarget(),J=G.xr.enabled,oe=G.shadowMap.autoUpdate;G.xr.enabled=!1,G.shadowMap.autoUpdate=!1,G.setRenderTarget(Z),G.state.buffers.depth.setMask(!0),G.autoClear===!1&&G.clear(),this.XR&&this.skybox&&(this.skybox.visible=!0);let he=!1;this.shadowPlane?.visible&&(this.shadowPlane.visible=!1,he=!0),G.render($,_),G.xr.enabled=J,G.shadowMap.autoUpdate=oe,G.setRenderTarget(q),this.XR&&this.skybox&&(this.skybox.visible=!1),he&&(this.shadowPlane.visible=!0);let fe=j.viewport;fe!==void 0&&G.state.viewport(fe),r.visible=!0},this.getRenderTarget=()=>Z}};Io.prototype.isReflector=!0;var ay=`
uniform mat4 textureMatrix;
varying vec4 vUv;

#include <common>
#include <logdepthbuf_pars_vertex>

void main() {
  vUv = textureMatrix * vec4( position, 1.0 );

  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

  #include <logdepthbuf_vertex>
}`,cy=`
uniform vec3 color;
uniform sampler2D tDiffuse;
varying vec4 vUv;

#include <logdepthbuf_pars_fragment>

float blendOverlay( float base, float blend ) {
  return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );
}

vec3 blendOverlay( vec3 base, vec3 blend ) {
  return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );
}

void main() {
  #include <logdepthbuf_fragment>

  vec4 base = texture2DProj( tDiffuse, vUv );
  gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );
}
`;var yc=class{constructor(e){this.canvas=Me.create("canvas",{width:We.innerWidth,height:We.innerHeight,id:"recorder-canvas"}),this.context=this.canvas.getContext("2d"),this.refSpace=e.refSpace,this.contextXR=e.renderer.domElement.getContext("webgl2"),this.artifact=e.artifact}async start(){if(!this.canvas)return;let e=this.canvas.captureStream(),n=[],i="video/webm",r=new We.MediaRecorder(e,{mimeType:i});this.recorder=r;let s=o=>n.push(o.data);r.ondataavailable=s,r.start(),console.log(r.state),r.onstop=()=>{let o=new Blob(n,{type:"video/webm"});this.save(o)},r.onerror=o=>{console.error(o),this.recorder=!1}}save(e){let n=new Date,i=n.getFullYear(),r=n.getMonth()+1,s=n.getDate(),o=n.getHours(),a=n.getMinutes(),c=n.getSeconds(),l=`${s}-${r}-${i}-${o}-${a}-${c}`,{artifact:h}=this,u={href:We.URL.createObjectURL(e),download:`artificial-museum-recording-${h.slug}-${l}.webm`,innerText:"Download Screen Capture"};console.log("saving",u.download),console.log(`Recorded ${e.size} bytes of ${e.type} media.`);let f=Me.create("a",u);f.click(),Me.remove(f),We.URL.revokeObjectURL(u.href),this.recorder=!1}stop(){this.recorder&&this.recorder.state==="recording"&&(this.recorder.stop(),console.log("stop recording"))}remove(){this.stop(),Me.remove(this.canvas),this.canvas=null}render(e,n){if(n&&this.canvas){let h=function({gl:S,object:E,background:_,width:F,height:Z}){let k=F*Z,V=new Uint8Array(k*4);for(let $=0;$<k;$++){let[j,H,q,J]=l(E,$);j===0&&H===0&&q===0&&([j,H,q,J]=l(_,$));let oe=a($,colorCount),he=a($+1,colorCount),fe=a($+2,colorCount),_e=a($+3,colorCount);V[oe]=j,V[he]=H,V[fe]=q,V[_e]=J}let G=S.createImageData(F,Z);G.data.set(V),S.putImageData(G,0,0)},i=new XRWebGLBinding(n.session,this.contextXR),s=n.getViewerPose(this.refSpace).views.find(S=>S.camera);if(!s)return;let o=i.getCameraImage(s.camera),a=(S,E)=>E-S-1,c=({gl:S,texture:E,width:_,height:F})=>{let Z=S.getParameter(S.FRAMEBUFFER_BINDING),k=new Uint8Array(_*F*4);S.readPixels(0,0,_,F,S.RGBA,S.UNSIGNED_BYTE,k);let V=S.createFramebuffer();S.bindFramebuffer(S.FRAMEBUFFER,V),S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,E,0);let G=new Uint8Array(_*F*4);return S.readPixels(0,0,_,F,S.RGBA,S.UNSIGNED_BYTE,G),S.deleteFramebuffer(V),S.bindFramebuffer(S.FRAMEBUFFER,Z),{background:G,object:k}},l=(S,E)=>[S[E],S[E+1],S[E+2],S[E+3]],u=performance.now(),f=We.innerWidth,d=We.innerHeight;console.log(f,d);let{object:p,background:y}=c({gl:this.contextXR,texture:o,width:f,height:d}),v=performance.now();h({gl:this.context,object:p,background:y,width:f,height:d});let g=performance.now(),m=v-u,A=g-u;console.log(`took ${A}, imagedata ${m}, paint: ${g-v} `)}}};var ch=class{constructor({artifact:e,preload:n,XR:i}){this.XR=i,this.artifact=e,this.preload=n;let{type:r=dt.HIT}=e;this.type=r,this.clock=new go,this.scene=new qs,this.onResize=this.onResize.bind(this),this.render=this.render.bind(this),this.initFallbackSession=this.initFallbackSession.bind(this),this.toggleAnimations=this.toggleAnimations.bind(this),this.endSession=this.endSession.bind(this)}async init(){let{artifact:e,scene:n,type:i,XR:r}=this,s=We.innerWidth/We.innerHeight;this.camera=new $e(ps.fov,s,ps.near,ps.far),this.camera.updateProjectionMatrix(),n.add(this.camera);let o=new Qi({antialias:!0,alpha:!0});this.renderer=o,o.setPixelRatio(We.devicePixelRatio),o.domElement.id=Ho,o.physicallyCorrectLights=!0,o.outputEncoding=Wt,o.toneMappingExposure=1,e.shadow!==!1&&(o.shadowMap.enabled=!0,o.shadowMap.type=ko);let[a,c,l]=await Promise.all([await this.appendAudio(),await this.appendVideo(),await this.addSkybox()]);if(this.audioElement=a,this.videoElement=c,this.skybox=l,e.hideLight||this.addLights(),await this.loadModel(),this.addVideoTrigger(),o.setSize(We.innerWidth,We.innerHeight),Me.append(o.domElement,`#${gs}`),this.hud=new Go(this),this.glow(),this.clip(),this.nosort(),this.mirror(),r)try{let h=o.xr.getController(0);if(this.controller=h,!e.hideLight&&e.shadow!==!1&&this.addShadowPlane(),this.isHittestScene())i!==dt.FLOAT&&this.spawnReticle(),Me.on(h,"select",()=>{if(this.justUnspawned)return;let u=!1;this.spawnModel(u),e.clickable?this.hud.showAnimToggler(this.toggleAnimations):this.hud.hideAnimToggler()}),e.clickable||this.hud.hideAnimToggler();else throw new Error(`Unknown scene type ${i}`);n.add(h),this.initScene=async()=>{let u,f=["hit-test","dom-overlay"];return Me.hide("#Locator"),u=await We.NAV.xr.requestSession("immersive-ar",{requiredFeatures:f,domOverlay:{root:Me("#hud")}}),Me.on(u,"end",()=>{this.endSession()}),this.hud.addSession(u),this.refSpace=await u.requestReferenceSpace("viewer"),this.renderer.xr.enabled=!0,this.renderer.xr.setReferenceSpaceType("local"),await this.renderer.xr.setSession(u),u.initFallbackSession=this.initFallbackSession.bind(this),u}}catch{this.initScene=this.initFallbackSession}else this.initScene=this.initFallbackSession;return Me.on(We,"resize",this.onResize),this.onResize(),o.setAnimationLoop(this.render),this}onResize(){let{innerWidth:e,innerHeight:n}=We;this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n)}addLights(){let e=new pr(Ei.directionalColor,Ei.directionalIntensity);e.position.set(...Ei.directionalPosition),e.castShadow=!0,this.artifact.shadow!==!1&&(e.shadow.mapSize.width=512,e.shadow.mapSize.height=512,e.shadow.camera.near=1,e.shadow.camera.far=50),this.directionalLight=e,this.scene.add(e),this.ambientLight=new ho(Ei.ambientColor,Ei.ambientIntensity),this.scene.add(this.ambientLight)}addShadowPlane(){let e=new ui(200,200,32,32),n=new $n;n.opacity=bc;let i=new Le(e,n);i.receiveShadow=!0,i.lookAt(0,100,0),i.position.set(0,0,0),this.shadowPlane=i}spawnReticle(){let e=new oo(.15,.2,32).rotateX(-M.PI/2),n=new ke;this.reticle=new Le(e,n),this.reticle.matrixAutoUpdate=!1,this.reticle.visible=!1,this.scene.add(this.reticle)}glow(){let{glow:e}=this.artifact;e&&this.model.traverse(n=>{if(ds(n.name,"glow")){let i=rt.bool(e)?238:e,r=new ke({color:i,side:pt,blending:Dn,transparent:!0});n.material=r}})}nosort(){this.artifact.nosort&&(this.renderer.sortObjects=!1)}clip(){let{model:e,artifact:{clip:n,clipSide:i}}=this;e&&n&&this.model.traverse(r=>{ds(r.name,"clip")&&(r.material.colorWrite=!1,r.castShadow=!1,r.receiveShadow=!1,i==="back"?r.material.side=nt:i==="double"&&(r.material.side=pt))})}mirror(){let{mirrors:e}=this.artifact;if(!e||!e.length)return;let n=We.devicePixelRatio,i=We.innerWidth*n,r=We.innerHeight*n;this.mirrors=e.map(s=>{let{clipBias:o=.003,color:a=7829367,type:c,params:l=[4,32],rotation:h={},position:u={}}=s,f;c===Tr.CIRCLE?f=new Na(...l):c===Tr.RING?f=new oo(...l):c===Tr.BOX?f=new Vn(...l):c===Tr.SPHERE?f=new Ot(...l):f=new ui(...l);let d=new Io(f,{clipBias:o,textureWidth:i,textureHeight:r,color:a},this);{let{x:p,y,z:v}=h;p&&d.rotateX(p),y&&d.rotateY(y),v&&d.rotateZ(v)}{let{x:p,y,z:v}=u;p&&d.position.setX(p),y&&d.position.setY(y),v&&d.position.setZ(v)}return this.model.add(d),d})}async addSkybox(){let{artifact:e,preload:n,renderer:i,scene:r,XR:s}=this,{city:o,light:a,sky:c,slug:l}=e,h=c;c===!1?h="default":c||(h=l),h=`${o}/${h}`;let u="jpg";We.SUPPORTS.WEBP&&(u="webp");let f=wc,d=e?.skySphere;rt.arr(d)&&d.length&&(f=d);let p=new Ot(...f);e.scaleSky!==!1&&p.scale(-1,1,1);let y=`https://static.artificialmuseum.com/${Mc}/${h}.${u}`,v=await dc({file:y,preload:n}),g=new lc(i);g.compileEquirectangularShader();let m=g.fromEquirectangular(v).texture;g.dispose();let A=new ke({map:v}),S=new Le(p,A);return S.visible=!s,r.add(S),a!==!1&&(r.environment=m),S}appendAudio(){let{slug:e,audio:n}=this.artifact;if(!n)return!1;let i=`https://media.artificialmuseum.com/audio/${n===!0?e:n}`;this.listener=new ss,this.camera.add(this.listener),Me.remove(`#${ms}`);let r=Me.create("audio",{id:ms,loop:!0,crossorigin:"anonymous"});["ogg","mp4","mp3"].forEach(a=>{Me.create("source",{src:`${i}.${a}?v=${No}`,type:`audio/${a}`,parent:r})}),Me.append(r);let{duration:o}=r;if(rt.num(o)&&o>0)return r;{let a="canplaythrough";return Bo&&(a="loadedmetadata"),new Promise(c=>{Me.on(r,a,l=>c(l.target))})}}appendVideo(){let{slug:e,video:n}=this.artifact;if(!n)return!1;let i=n===!0?e:n,r=Me.create("video",{id:Uo,loop:!0,playsinline:!0,preload:"auto",crossorigin:"anonymous"}),s=`https://media.artificialmuseum.com/video/${i}/${i}`;[["webm","webm"],["mp4","mp4"]].forEach(([c,l])=>{Me.create("source",{src:`${s}.${c}?v=${No}`,type:`video/${l}`,parent:r})}),Me.append(r);let{videoWidth:a}=r;if(a>0)return r;{let c="canplaythrough";return Bo&&(c="loadedmetadata"),new Promise(l=>{Me.on(r,c,h=>l(h.target))})}}addVideoTrigger(){!this.artifact.triggerVideo||this.model.traverse(e=>{if(this.videoTrigger)return;["videotarget","videotrigger"].some(i=>ds(e.name,i))&&(this.videoTrigger=e,this.videoTrigger.visible=!1)})}startMedia(e=!0){if(this.isMediaPlaying)return;let{actions:n=[],artifact:i,audioElement:r,videoElement:s}=this;r&&!i.triggerAudio&&(e&&(r.currentTime=0),r.play()),s&&!i.triggerVideo&&(e&&(s.currentTime=0),s.play()),n.forEach(o=>o.play()),this.isMediaPlaying=!0}stopMedia(){let{audioElement:e,videoElement:n,actions:i=[]}=this;e&&e.pause(),n&&n.pause(),i&&i.length&&i.forEach(r=>r.stop()),this.isMediaPlaying=!1}toggleAnimations(){this.actions.forEach(e=>e.paused=!e.paused)}initFallbackSession(){this.XR=!1,We.B.classList.add(zo);let{camera:e,artifact:n,model:i,renderer:r}=this,s=new _r(e,r.domElement);this.controller=s,this.skybox.visible=!0,Object.entries(_c).forEach(([h,u])=>{s[h]=u});let{cam:o={},orbit:a={},clickable:c}=n;rt.num(a.min)&&(s.minDistance=a.min),rt.num(a.max)&&(s.maxDistance=a.max),rt.num(o.maxPolar)&&(s.maxPolarAngle=Math.PI/o.maxPolar),c?this.hud.showAnimToggler(this.toggleAnimations):this.hud.hideAnimToggler();{let{cam:h={}}=n,u=Sc,{x:f=u.x,y:d=u.y,z:p=u.z}=h;e.position.set(f,d,p)}{let{lookat:h={}}=n,{x:u=0,y:f=0,z:d=0}=h;s.target=new L(u,f,d)}if(i){let{x:h,y:u,z:f}=i.scale,{scale:d}=n;d&&i.scale.set(h*d,u*d,f*d)}s.update();let l=!0;this.spawnModel(l),r.domElement.focus()}async loadModel(){let{artifact:e,preload:n,type:i,XR:r}=this;if(i===dt.POINT_CLOUD?this.model=await Eo(this):i===dt.DISPLACEMENT?this.model=await Ao(this):i===dt.RECORD3D&&!e.glb?(this.sceneInstance=new yr(this),this.model=this.sceneInstance.boneChild):i===dt.BRAIN_WAVE&&!e.glb?this.sceneInstance=new us(this):i===dt.LATK&&!e.glb?this.sceneInstance=new hs(this):i===dt.PLY&&!e.glb&&(this.sceneInstance=new fs(this)),this.sceneInstance)this.sceneInstance.init&&await this.sceneInstance.init();else{let{file:s,version:o=1}=e,c=`https://glb.artificialmuseum.com/${s}.glb?v=${o}${r?"&xr=1":""}`,l=new ah,{scene:h,animations:u}=await ls({loader:l,file:c,preload:n});if(this.model=h,i===dt.RECORD3D&&(this.sceneInstance=new yr(this)),this.model.traverse(f=>{if(f.isMesh){let{frustumCulled:d,transparent:p,castShadow:y,receiveShadow:v}=e;d===!1&&(f.frustumCulled=!1),p===!1&&(f.material.transparent=!1),ds(f.name,"noshadow")||(f.castShadow=y!==!1,f.receiveShadow=v!==!1),f.material.map&&(f.material.map.anisotropy=16,f.material.map.encoding=Wt),f.material.emissiveMap&&(f.material.emissiveMap.encoding=Wt),(f.material.map||f.material.emissiveMap)&&(f.material.needsUpdate=!0)}else if(f.isLight){let{castShadow:d,shadowBias:p=.01,lightIntensity:y=.01,shadowCam:v={}}=e;if(f.intensity=f.intensity*y,e.shadow!==!1){f.castShadow=d!==!1,f.shadow.bias=p;let{near:g=.1,far:m=30}=v;f.shadow.camera.near=g,f.shadow.camera.far=m}}else f.type==="Bone"&&f.name.toLowerCase()==="parent"&&this.sceneInstance.useBone&&f.add(this.sceneInstance.boneChild)}),this.mixer=null,this.actions=[],u&&u.length){this.mixer=new vo(this.model);let{loop:f,clickable:d}=e;u.forEach(p=>{let y=this.mixer.clipAction(p);f===!1&&(y.clampWhenFinished=!0,y.loop=Zo),d&&(y.paused=!0),this.actions.push(y)})}if(i===dt.LIGHT_CUBE){let{LightCubeScene:f}=xr;this.sceneInstance=new f(this)}else if(i===dt.BRAIN_WAVE){let{BrainwaveScene:f}=xr;this.sceneInstance=new f(this)}else if(i===dt.LATK){let{LatkScene:f}=xr;this.sceneInstance=new f(this)}else if(i===dt.MOLECULAR_VORTEX){let{MolecularVortex:f}=xr;this.sceneInstance=new f(this)}if(this.sceneInstance?.init&&await this.sceneInstance.init(),this.videoElement){let f=this.model.getObjectByName("videotarget");if(f){let d=new Gt(this.videoElement),{flipVideo:p,chromaKey:y}=e;p!==!1&&(d.flipY=!1),f.material.map=d,y&&(f.material=Ro({artifact:e,videoTexture:d}))}}i===dt.BUBBLES&&(this.model=await Lo({model:this.model,videoElement:this.videoElement}))}}spawnModel(e){let{camera:n,controller:i,model:r,reticle:s,scene:o,shadowPlane:a,type:c,XR:l,sceneInstance:h={}}=this;if(!l||e){this.applyPositionAndRotation(),o.add(r),this.modelSpawned=!0,h.spawnModel&&h.spawnModel(this),this.startMedia();return}if(this.isHittestScene()){if(!this.modelSpawned&&this.lastHit){s.updateMatrixWorld(),r.position.setFromMatrixPosition(s.matrixWorld),r.updateMatrixWorld();let u=n.position,f=r.position,d=u.x-f.x,p=u.z-f.z,y=Math.atan2(d,p);r.rotation.y=y,a&&(a.position.setFromMatrixPosition(s.matrixWorld),o.add(a)),o.add(r),h?.spawnModel&&h.spawnModel(this),s.visible=!1,this.modelSpawned=!0,this.startMedia()}this.applyPositionAndRotation()}else if(c===dt.FLOAT){let u=r.clone();u.position.set(0,0,-1).applyMatrix4(i.matrixWorld),this.applyPositionAndRotation(),o.add(u),this.startMedia()}}unspawnModel(){this.modelSpawned&&(this.scene.remove(this.model),this.modelSpawned=!1,this.isAnimationRunning=!1,this.stopMedia(),this.sceneInstance?.exit&&this.sceneInstance.exit(),this.justUnspawned=!0,setTimeout(()=>{this.justUnspawned=!1},200))}applyPositionAndRotation(){let{artifact:e,model:n}=this,{pos:i={}}=e;i.x&&(n.position.x+=i.x),i.y&&(n.position.y+=i.y),i.z&&(n.position.z+=i.z)}async endSession(){this.hud.hide(),this.renderer.setAnimationLoop(null),Me(`#${gs}`).classList.remove("visible"),this.sceneInstance?.exit&&this.sceneInstance.exit(),this.scene&&cs(this.scene),Me.remove(`#${ms}`),Me.remove(`#${Uo}`);let n=Me(`#${Ho}`);if(n){let i=n.parentNode;i.id===gs?Me.remove(n):Me.remove(i)}if(We.B.classList.remove(zo),Me(".start-experience-button").forEach(i=>{i.removeAttribute("disabled")}),xc){We.location.reload();return}}isHittestScene(){let e=dt;return[e.HIT,e.FLOAT,e.POINT_CLOUD,e.BUBBLES,e.DISPLACEMENT,e.LIGHT_CUBE,e.RECORD3D,e.BRAIN_WAVE,e.LATK,e.MOLECULAR_VORTEX,e.PLY].includes(this.type)}async render(e,n){this.renderHittest(n),this.mixer&&this.mixer.update(this.clock.getDelta()),this.renderVideoTrigger(),this.sceneInstance?.render?this.sceneInstance.render(e,n):this.renderer.render(this.scene,this.camera),this.recorder&&this.recorder.render(e,n)}renderVideoTrigger(){if(!this.modelSpawned||!this.artifact.triggerVideo||!this.videoTrigger)return;let{triggerVideoDistance:e=1.1,triggerAudio:n}=this.artifact,i=e*e,r=this.videoTrigger.position.clone();r.add(this.videoTrigger.parent.position),this.camera.position.distanceToSquared(r)<=i?this.videoElement.paused&&(this.videoElement.play(),this.videoTrigger.visible=!0,n&&this.audioElement&&this.audioElement.play()):this.videoElement.paused||(this.videoElement.pause(),this.videoTrigger.visible=!1,n&&this.audioElement&&this.audioElement.pause())}async renderHittest(e){if(e&&this.XR){let n=this.renderer.xr.getSession();this.hitTestSourceRequested||(this.hitTestSource=await n.requestHitTestSource({space:this.refSpace}),Me.on(n,"end",()=>{this.hitTestSourceRequested=!1,this.hitTestSource=null}),this.hitTestSourceRequested=!0);let i=e.getHitTestResults(this.hitTestSource);if(i.length){if(this.lastHit=i[0],!this.modelSpawned){this.reticle.visible=!0;let r=this.renderer.xr.getReferenceSpace();this.reticle.matrix.fromArray(this.lastHit.getPose(r).transform.matrix)}this.hud.hideHitSearch()}else this.reticle.visible=!1,this.modelSpawned||this.hud.showHitSearch(),this.lastHit=void 0}}startRecording(){this.recorder||(this.recorder=new yc(this),this.recorder.start())}stopRecording(){!this.recorder||this.recorder.remove()}toggleRecording(){this.recorder?this.stopRecording():this.startRecording()}};export{ch as ArmEngine};
