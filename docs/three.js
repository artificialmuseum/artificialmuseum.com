import{B as Wo,C as Bl,H as cr,I as qo,J as Xo,K as hr,L as Ol,M as zl,O as Ul,P as Hl,a as sd,b as lt,c as $e,d as xe,e as Go,k as Pl,l as Vo,t as lr,u as Il,v as wi,w as Dl,x as Fl,y as Nl}from"./chunk.js";var _t={HIT:1,FLOAT:2,POINT_CLOUD:3,DISPLACEMENT:4,BUBBLES:5,LIGHT_CUBE:6,RECORD3D:7,BRAIN_WAVE:8,LATK:9,MOLECULAR_VORTEX:10,PLY:11};var ls={PLANE:1,CIRCLE:2,RING:3,BOX:4,CUBE:4,SPHERE:5};var Yo=class{constructor(e){let{scene:t,sceneInstance:n,renderer:i,endSession:s}=e;this.endSession=s,this.engine=e,this.gui=xe(`#${Ol}`),this.hitSearch=xe("#hud-searching-hittest"),this.swipeToRemove=xe("#hud-swipe-to-remove"),this.XR=e.XR,this.XR&&(this.menu=xe("#hud-menu"),this.subMenu=xe("#hud-menu-sub"),this.menuVisible=!1,this.menuToggle=xe("#hud-menu-toggle"),xe.on(this.menuToggle,"click",this.onToggleMenu.bind(this)),xe.on("#hud-menu-reposition","click",this.onRepositionButtonClick.bind(this)),this.recordVideoButton=xe("#hud-menu-record-video"),xe.on(this.recordVideoButton,"click",this.onRecordButtonClick.bind(this))),this.scene=t,this.renderer=i,this.sceneInstance=n,xe.on(`#${zl}`,"click",this.onExitButtonClick.bind(this)),Ul(this),this.animToggler=xe("#toggle-animation-button")}setCamera(e){this.cameraAccess=e,e?xe.show(this.recordVideoButton):xe.hide(this.recordVideoButton)}showAnimToggler(e){!this.animToggler||(this.animToggler.classList.remove("play"),xe.show(this.animToggler),this.animTogglerInit||(this.animTogglerInit=!0,this.eventListener=()=>{this.animToggler.classList.toggle("play"),e()},xe.on(this.animToggler,"click",this.eventListener)))}hideAnimToggler(){xe.hide(this.animToggler)}onToggleMenu(){let{subMenu:e}=this;e.classList.toggle("visible")}onRepositionButtonClick(){this.engine.unspawnModel()}async onRecordButtonClick(){this.engine.toggleRecording()}addSession(e){this.session=e}show(){xe.show(this.gui)}hide(){xe.hide(this.gui)}async onExitButtonClick(){if(this.session)try{await this.session.end()}catch{this.hide()}else await this.endSession();xe.off(this.animToggler,"click",this.eventListener),this.sceneInstance&&this.sceneInstance.exit&&this.sceneInstance.exit(this),Hl()}showHitSearch(){xe.show(this.hitSearch)}hideHitSearch(){xe.hide(this.hitSearch)}showElement(e){e.shown||(xe.show(e),e.shown=!0)}hideElement(e){!e.shown||(xe.hide(e),e.shown=!1)}};var jo="136",$n={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Kn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rd=0,kl=1,od=2;var Gl=1,Zo=2,cs=3,un=0,st=1,xt=2,Vl=1;var An=0,hs=1,Rn=2,Wl=3,ql=4,ad=5,bi=100,ld=101,cd=102,Xl=103,Yl=104,hd=200,ud=201,dd=202,fd=203,jl=204,Zl=205,pd=206,md=207,gd=208,xd=209,yd=210,vd=0,_d=1,wd=2,Jo=3,bd=4,Md=5,Sd=6,Td=7,ur=0,Ed=1,Ad=2,Ln=0,Rd=1,Ld=2,Cd=3,$o=4,Pd=5,Jl=300,us=301,ds=302,Ko=303,Qo=304,dr=306,ea=307,Qn=1e3,At=1001,fs=1002,tt=1003,fr=1004;var pr=1005;var Ke=1006,ta=1007;var ei=1008;var dn=1009,Id=1010,Dd=1011,ps=1012,Fd=1013,mr=1014,fn=1015,ti=1016,Nd=1017,Bd=1018,Od=1019,Mi=1020,zd=1021,Wt=1022,gt=1023,Ud=1024,Hd=1025,ni=1026,Si=1027,kd=1028,Gd=1029,Vd=1030,Wd=1031,qd=1032,Xd=1033,$l=33776,Kl=33777,Ql=33778,ec=33779,tc=35840,nc=35841,ic=35842,sc=35843,Yd=36196,rc=37492,oc=37496,jd=37808,Zd=37809,Jd=37810,$d=37811,Kd=37812,Qd=37813,ef=37814,tf=37815,nf=37816,sf=37817,rf=37818,of=37819,af=37820,lf=37821,cf=36492,hf=37840,uf=37841,df=37842,ff=37843,pf=37844,mf=37845,gf=37846,xf=37847,yf=37848,vf=37849,_f=37850,wf=37851,bf=37852,Mf=37853,na=2200,Sf=2201,Tf=2202,Ti=2300,ii=2301,ia=2302,Ei=2400,Ai=2401,gr=2402,sa=2500,ac=2501,Ef=0,lc=1,ra=2,Dt=3e3,Pt=3001,Af=3200,Rf=3201,Cn=0,Lf=1;var oa=7680;var Cf=519,ms=35044,xr=35048;var cc="300 es",sn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}},wt=[];for(let r=0;r<256;r++)wt[r]=(r<16?"0":"")+r.toString(16);var yr=1234567,gs=Math.PI/180,xs=180/Math.PI;function Ft(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wt[r&255]+wt[r>>8&255]+wt[r>>16&255]+wt[r>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]).toUpperCase()}function Mt(r,e,t){return Math.max(e,Math.min(t,r))}function aa(r,e){return(r%e+e)%e}function Pf(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function If(r,e,t){return r!==e?(t-r)/(e-r):0}function ys(r,e,t){return(1-t)*r+t*e}function Df(r,e,t,n){return ys(r,e,1-Math.exp(-t*n))}function Ff(r,e=1){return e-Math.abs(aa(r,e*2)-e)}function Nf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Bf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Of(r,e){return r+Math.floor(Math.random()*(e-r+1))}function zf(r,e){return r+Math.random()*(e-r)}function Uf(r){return r*(.5-Math.random())}function Hf(r){return r!==void 0&&(yr=r%2147483647),yr=yr*16807%2147483647,(yr-1)/2147483646}function kf(r){return r*gs}function Gf(r){return r*xs}function la(r){return(r&r-1)===0&&r!==0}function hc(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function uc(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Vf(r,e,t,n,i){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":r.set(a*h,l*u,l*d,a*c);break;case"YZY":r.set(l*d,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*d,a*h,a*c);break;case"XZX":r.set(a*h,l*m,l*f,a*c);break;case"YXY":r.set(l*f,a*h,l*m,a*c);break;case"ZYZ":r.set(l*m,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}var vs=Object.freeze({__proto__:null,DEG2RAD:gs,RAD2DEG:xs,generateUUID:Ft,clamp:Mt,euclideanModulo:aa,mapLinear:Pf,inverseLerp:If,lerp:ys,damp:Df,pingpong:Ff,smoothstep:Nf,smootherstep:Bf,randInt:Of,randFloat:zf,randFloatSpread:Uf,seededRandom:Hf,degToRad:kf,radToDeg:Gf,isPowerOfTwo:la,ceilPowerOfTwo:hc,floorPowerOfTwo:uc,setQuaternionFromProperEuler:Vf}),q=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};q.prototype.isVector2=!0;var yt=class{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=i[0],y=i[3],p=i[6],g=i[1],w=i[4],v=i[7],_=i[2],L=i[5],I=i[8];return s[0]=o*x+a*g+l*_,s[3]=o*y+a*w+l*L,s[6]=o*p+a*v+l*I,s[1]=c*x+h*g+u*_,s[4]=c*y+h*w+u*L,s[7]=c*p+h*v+u*I,s[2]=d*x+f*g+m*_,s[5]=d*y+f*w+m*L,s[8]=d*p+f*v+m*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,m=t*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=u*x,e[1]=(i*c-h*n)*x,e[2]=(a*n-i*o)*x,e[3]=d*x,e[4]=(h*t-i*l)*x,e[5]=(i*s-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){let t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],o=i[3],a=i[6],l=i[1],c=i[4],h=i[7];return i[0]=t*s+n*l,i[3]=t*o+n*c,i[6]=t*a+n*h,i[1]=-n*s+t*l,i[4]=-n*o+t*c,i[7]=-n*a+t*h,this}translate(e,t){let n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};yt.prototype.isMatrix3=!0;function dc(r){if(r.length===0)return-1/0;let e=r[0];for(let t=1,n=r.length;t<n;++t)r[t]>e&&(e=r[t]);return e}function vr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}var Ri,si=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ri===void 0&&(Ri=vr("canvas")),Ri.width=e.width,Ri.height=e.height;let n=Ri.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ri}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}},Wf=0,at=class extends sn{constructor(e=at.DEFAULT_IMAGE,t=at.DEFAULT_MAPPING,n=At,i=At,s=Ke,o=ei,a=gt,l=dn,c=1,h=Dt){super();Object.defineProperty(this,"id",{value:Wf++}),this.uuid=Ft(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new q(0,0),this.repeat=new q(1,1),this.center=new q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){let i=this.image;if(i.uuid===void 0&&(i.uuid=Ft()),!t&&e.images[i.uuid]===void 0){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(ca(i[o].image)):s.push(ca(i[o]))}else s=ca(i);e.images[i.uuid]={uuid:i.uuid,url:s}}n.image=i.uuid}return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qn:e.x=e.x-Math.floor(e.x);break;case At:e.x=e.x<0?0:1;break;case fs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qn:e.y=e.y-Math.floor(e.y);break;case At:e.y=e.y<0?0:1;break;case fs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}};at.DEFAULT_IMAGE=void 0;at.DEFAULT_MAPPING=Jl;at.prototype.isTexture=!0;function ca(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?si.getDataURL(r):r.data?{data:Array.prototype.slice.call(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ye=class{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,o=.01,a=.1,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],x=l[2],y=l[6],p=l[10];if(Math.abs(h-d)<o&&Math.abs(u-x)<o&&Math.abs(m-y)<o){if(Math.abs(h+d)<a&&Math.abs(u+x)<a&&Math.abs(m+y)<a&&Math.abs(c+f+p-3)<a)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,v=(f+1)/2,_=(p+1)/2,L=(h+d)/4,I=(u+x)/4,B=(m+y)/4;return w>v&&w>_?w<o?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=L/n,s=I/n):v>_?v<o?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=L/i,s=B/i):_<o?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(_),n=I/s,i=B/s),this.set(n,i,s,t),this}let g=Math.sqrt((y-m)*(y-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(g)<.001&&(g=1),this.x=(y-m)/g,this.y=(u-x)/g,this.z=(d-h)/g,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ye.prototype.isVector4=!0;var Rt=class extends sn{constructor(e,t,n={}){super();this.width=e,this.height=t,this.depth=1,this.scissor=new Ye(0,0,e,t),this.scissorTest=!1,this.viewport=new Ye(0,0,e,t),this.texture=new at(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:e,height:t,depth:1},this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ke,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image={...this.texture.image},this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};Rt.prototype.isWebGLRenderTarget=!0;var fc=class extends Rt{constructor(e,t,n){super(e,t);let i=this.texture;this.texture=[];for(let s=0;s<n;s++)this.texture[s]=i.clone()}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.texture.length;i<s;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone();return this}};fc.prototype.isWebGLMultipleRenderTargets=!0;var _r=class extends Rt{constructor(e,t,n={}){super(e,t,n);this.samples=4,this.ignoreDepthForMultisampleCopy=n.ignoreDepth!==void 0?n.ignoreDepth:!0,this.useRenderToTexture=n.useRenderToTexture!==void 0?n.useRenderToTexture:!1,this.useRenderbuffer=this.useRenderToTexture===!1}copy(e){return super.copy.call(this,e),this.samples=e.samples,this.useRenderToTexture=e.useRenderToTexture,this.useRenderbuffer=e.useRenderbuffer,this}};_r.prototype.isWebGLMultisampleRenderTarget=!0;var ct=class{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[o+0],f=s[o+1],m=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=x;return}if(u!==x||l!==d||c!==f||h!==m){let y=1-a,p=l*d+c*f+h*m+u*x,g=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){let _=Math.sqrt(w),L=Math.atan2(_,p*g);y=Math.sin(y*L)/_,a=Math.sin(a*L)/_}let v=a*g;if(l=l*y+d*v,c=c*y+f*v,h=h*y+m*v,u=u*y+x*v,y===1-a){let _=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=_,c*=_,h*=_,u*=_}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],m=s[o+3];return e[t]=a*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-a*f,e[t+2]=c*m+h*f+a*d-l*u,e[t+3]=h*m-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");let n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),f=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};ct.prototype.isQuaternion=!0;var T=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(pc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,h=l*n+a*t-s*i,u=l*i+s*n-o*t,d=-s*t-o*n-a*i;return this.x=c*l+d*-s+h*-a-u*-o,this.y=h*l+d*-o+u*-s-c*-a,this.z=u*l+d*-a+c*-o-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ha.copy(this).projectOnVector(e),this.sub(ha)}reflect(e){return this.sub(ha.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};T.prototype.isVector3=!0;var ha=new T,pc=new ct,It=class{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){let h=e[l],u=e[l+1],d=e[l+2];h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){let h=e.getX(l),u=e.getY(l),d=e.getZ(l);h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=_s.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);let t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),ua.copy(t.boundingBox),ua.applyMatrix4(e.matrixWorld),this.union(ua));let n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,_s),_s.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ws),wr.subVectors(this.max,ws),Li.subVectors(e.a,ws),Ci.subVectors(e.b,ws),Pi.subVectors(e.c,ws),Pn.subVectors(Ci,Li),In.subVectors(Pi,Ci),ri.subVectors(Li,Pi);let t=[0,-Pn.z,Pn.y,0,-In.z,In.y,0,-ri.z,ri.y,Pn.z,0,-Pn.x,In.z,0,-In.x,ri.z,0,-ri.x,-Pn.y,Pn.x,0,-In.y,In.x,0,-ri.y,ri.x,0];return!da(t,Li,Ci,Pi,wr)||(t=[1,0,0,0,1,0,0,0,1],!da(t,Li,Ci,Pi,wr))?!1:(br.crossVectors(Pn,In),t=[br.x,br.y,br.z],da(t,Li,Ci,Pi,wr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return _s.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(_s).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};It.prototype.isBox3=!0;var pn=[new T,new T,new T,new T,new T,new T,new T,new T],_s=new T,ua=new It,Li=new T,Ci=new T,Pi=new T,Pn=new T,In=new T,ri=new T,ws=new T,wr=new T,br=new T,oi=new T;function da(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){oi.fromArray(r,s);let a=i.x*Math.abs(oi.x)+i.y*Math.abs(oi.y)+i.z*Math.abs(oi.z),l=e.dot(oi),c=t.dot(oi),h=n.dot(oi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var qf=new It,mc=new T,Mr=new T,fa=new T,mn=class{constructor(e=new T,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):qf.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){fa.subVectors(e,this.center);let t=fa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(fa.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?Mr.set(0,0,1).multiplyScalar(e.radius):Mr.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(mc.copy(e.center).add(Mr)),this.expandByPoint(mc.copy(e.center).sub(Mr)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},gn=new T,pa=new T,Sr=new T,Dn=new T,ma=new T,Tr=new T,ga=new T,ai=class{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gn.copy(this.direction).multiplyScalar(t).add(this.origin),gn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){pa.copy(e).add(t).multiplyScalar(.5),Sr.copy(t).sub(e).normalize(),Dn.copy(this.origin).sub(pa);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Sr),a=Dn.dot(this.direction),l=-Dn.dot(Sr),c=Dn.lengthSq(),h=Math.abs(1-o*o),u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=s*h,u>=0)if(d>=-m)if(d<=m){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(Sr).multiplyScalar(d).add(pa),f}intersectSphere(e,t){gn.subVectors(e.center,this.origin);let n=gn.dot(this.direction),i=gn.dot(gn)-n*n,s=e.radius*e.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>i||((s>n||n!==n)&&(n=s),(o<i||i!==i)&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,gn)!==null}intersectTriangle(e,t,n,i,s){ma.subVectors(t,e),Tr.subVectors(n,e),ga.crossVectors(ma,Tr);let o=this.direction.dot(ga),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Dn.subVectors(this.origin,e);let l=a*this.direction.dot(Tr.crossVectors(Dn,Tr));if(l<0)return null;let c=a*this.direction.dot(ma.cross(Dn));if(c<0||l+c>o)return null;let h=-a*Dn.dot(ga);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},me=class{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,o,a,l,c,h,u,d,f,m,x,y){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Ii.setFromMatrixColumn(e,0).length(),s=1/Ii.setFromMatrixColumn(e,1).length(),o=1/Ii.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");let t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=o*h,f=o*u,m=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,m=c*h,x=c*u;t[0]=d+x*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-m,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,m=c*h,x=c*u;t[0]=d-x*a,t[4]=-o*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,m=a*h,x=a*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,m=a*l,x=a*c;t[0]=l*h,t[4]=x-d*u,t[8]=m*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-x*u}else if(e.order==="XZY"){let d=o*l,f=o*c,m=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xf,e,Yf)}lookAt(e,t,n){let i=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),Fn.crossVectors(n,Nt),Fn.lengthSq()===0&&(Math.abs(n.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),Fn.crossVectors(n,Nt)),Fn.normalize(),Er.crossVectors(Nt,Fn),i[0]=Fn.x,i[4]=Er.x,i[8]=Nt.x,i[1]=Fn.y,i[5]=Er.y,i[9]=Nt.y,i[2]=Fn.z,i[6]=Er.z,i[10]=Nt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],y=n[10],p=n[14],g=n[3],w=n[7],v=n[11],_=n[15],L=i[0],I=i[4],B=i[8],K=i[12],W=i[1],D=i[5],S=i[9],b=i[13],F=i[2],O=i[6],N=i[10],U=i[14],ie=i[3],ae=i[7],V=i[11],X=i[15];return s[0]=o*L+a*W+l*F+c*ie,s[4]=o*I+a*D+l*O+c*ae,s[8]=o*B+a*S+l*N+c*V,s[12]=o*K+a*b+l*U+c*X,s[1]=h*L+u*W+d*F+f*ie,s[5]=h*I+u*D+d*O+f*ae,s[9]=h*B+u*S+d*N+f*V,s[13]=h*K+u*b+d*U+f*X,s[2]=m*L+x*W+y*F+p*ie,s[6]=m*I+x*D+y*O+p*ae,s[10]=m*B+x*S+y*N+p*V,s[14]=m*K+x*b+y*U+p*X,s[3]=g*L+w*W+v*F+_*ie,s[7]=g*I+w*D+v*O+_*ae,s[11]=g*B+w*S+v*N+_*V,s[15]=g*K+w*b+v*U+_*X,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],x=e[7],y=e[11],p=e[15];return m*(+s*l*u-i*c*u-s*a*d+n*c*d+i*a*f-n*l*f)+x*(+t*l*f-t*c*d+s*o*d-i*o*f+i*c*h-s*l*h)+y*(+t*c*u-t*a*f-s*o*u+n*o*f+s*a*h-n*c*h)+p*(-i*a*h-t*l*u+t*a*d+i*o*u-n*o*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],x=e[13],y=e[14],p=e[15],g=u*y*c-x*d*c+x*l*f-a*y*f-u*l*p+a*d*p,w=m*d*c-h*y*c-m*l*f+o*y*f+h*l*p-o*d*p,v=h*x*c-m*u*c+m*a*f-o*x*f-h*a*p+o*u*p,_=m*u*l-h*x*l-m*a*d+o*x*d+h*a*y-o*u*y,L=t*g+n*w+i*v+s*_;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/L;return e[0]=g*I,e[1]=(x*d*s-u*y*s-x*i*f+n*y*f+u*i*p-n*d*p)*I,e[2]=(a*y*s-x*l*s+x*i*c-n*y*c-a*i*p+n*l*p)*I,e[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*f-n*l*f)*I,e[4]=w*I,e[5]=(h*y*s-m*d*s+m*i*f-t*y*f-h*i*p+t*d*p)*I,e[6]=(m*l*s-o*y*s-m*i*c+t*y*c+o*i*p-t*l*p)*I,e[7]=(o*d*s-h*l*s+h*i*c-t*d*c-o*i*f+t*l*f)*I,e[8]=v*I,e[9]=(m*u*s-h*x*s-m*n*f+t*x*f+h*n*p-t*u*p)*I,e[10]=(o*x*s-m*a*s+m*n*c-t*x*c-o*n*p+t*a*p)*I,e[11]=(h*a*s-o*u*s-h*n*c+t*u*c+o*n*f-t*a*f)*I,e[12]=_*I,e[13]=(h*x*i-m*u*i+m*n*d-t*x*d-h*n*y+t*u*y)*I,e[14]=(m*a*i-o*x*i-m*n*l+t*x*l+o*n*y-t*a*y)*I,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*d+t*a*d)*I,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,m=s*u,x=o*h,y=o*u,p=a*u,g=l*c,w=l*h,v=l*u,_=n.x,L=n.y,I=n.z;return i[0]=(1-(x+p))*_,i[1]=(f+v)*_,i[2]=(m-w)*_,i[3]=0,i[4]=(f-v)*L,i[5]=(1-(d+p))*L,i[6]=(y+g)*L,i[7]=0,i[8]=(m+w)*I,i[9]=(y-g)*I,i[10]=(1-(d+x))*I,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=Ii.set(i[0],i[1],i[2]).length(),o=Ii.set(i[4],i[5],i[6]).length(),a=Ii.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],qt.copy(this);let c=1/s,h=1/o,u=1/a;return qt.elements[0]*=c,qt.elements[1]*=c,qt.elements[2]*=c,qt.elements[4]*=h,qt.elements[5]*=h,qt.elements[6]*=h,qt.elements[8]*=u,qt.elements[9]*=u,qt.elements[10]*=u,t.setFromRotationMatrix(qt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");let a=this.elements,l=2*s/(t-e),c=2*s/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i),d=-(o+s)/(o-s),f=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){let a=this.elements,l=1/(t-e),c=1/(n-i),h=1/(o-s),u=(t+e)*l,d=(n+i)*c,f=(o+s)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};me.prototype.isMatrix4=!0;var Ii=new T,qt=new me,Xf=new T(0,0,0),Yf=new T(1,1,1),Fn=new T,Er=new T,Nt=new T,gc=new me,xc=new ct,li=class{constructor(e=0,t=0,n=0,i=li.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return gc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xc.setFromEuler(this),this.setFromQuaternion(xc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new T(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};li.prototype.isEuler=!0;li.DefaultOrder="XYZ";li.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];var xa=class{constructor(){this.mask=1|0}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=4294967295|0}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},jf=0,yc=new T,Di=new ct,xn=new me,Ar=new T,bs=new T,Zf=new T,Jf=new ct,vc=new T(1,0,0),_c=new T(0,1,0),wc=new T(0,0,1),$f={type:"added"},bc={type:"removed"},Me=class extends sn{constructor(){super();Object.defineProperty(this,"id",{value:jf++}),this.uuid=Ft(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DefaultUp.clone();let e=new T,t=new li,n=new ct,i=new T(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new me},normalMatrix:{value:new yt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=Me.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new xa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.multiply(Di),this}rotateOnWorldAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.premultiply(Di),this}rotateX(e){return this.rotateOnAxis(vc,e)}rotateY(e){return this.rotateOnAxis(_c,e)}rotateZ(e){return this.rotateOnAxis(wc,e)}translateOnAxis(e,t){return yc.copy(e).applyQuaternion(this.quaternion),this.position.add(yc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vc,e)}translateY(e){return this.translateOnAxis(_c,e)}translateZ(e){return this.translateOnAxis(wc,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ar.copy(e):Ar.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(bs,Ar,this.up):xn.lookAt(Ar,bs,this.up),this.quaternion.setFromRotationMatrix(xn),i&&(xn.extractRotation(i.matrixWorld),Di.setFromRotationMatrix(xn),this.quaternion.premultiply(Di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent($f)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bc)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(bc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(xn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,e,Zf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,Jf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Me.DefaultUp=new T(0,1,0);Me.DefaultMatrixAutoUpdate=!0;Me.prototype.isObject3D=!0;var Xt=new T,yn=new T,ya=new T,vn=new T,Fi=new T,Ni=new T,Mc=new T,va=new T,_a=new T,wa=new T,ht=class{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Xt.subVectors(e,t),i.cross(Xt);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Xt.subVectors(i,t),yn.subVectors(n,t),ya.subVectors(e,t);let o=Xt.dot(Xt),a=Xt.dot(yn),l=Xt.dot(ya),c=yn.dot(yn),h=yn.dot(ya),u=o*c-a*a;if(u===0)return s.set(-2,-1,-1);let d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,vn),vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getUV(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,vn),l.set(0,0),l.addScaledVector(s,vn.x),l.addScaledVector(o,vn.y),l.addScaledVector(a,vn.z),l}static isFrontFacing(e,t,n,i){return Xt.subVectors(n,t),yn.subVectors(e,t),Xt.cross(yn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xt.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),Xt.cross(yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ht.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ht.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return ht.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ht.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ht.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,o,a;Fi.subVectors(i,n),Ni.subVectors(s,n),va.subVectors(e,n);let l=Fi.dot(va),c=Ni.dot(va);if(l<=0&&c<=0)return t.copy(n);_a.subVectors(e,i);let h=Fi.dot(_a),u=Ni.dot(_a);if(h>=0&&u<=h)return t.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Fi,o);wa.subVectors(e,s);let f=Fi.dot(wa),m=Ni.dot(wa);if(m>=0&&f<=m)return t.copy(s);let x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(Ni,a);let y=h*m-f*u;if(y<=0&&u-h>=0&&f-m>=0)return Mc.subVectors(s,i),a=(u-h)/(u-h+(f-m)),t.copy(i).addScaledVector(Mc,a);let p=1/(y+x+d);return o=x*p,a=d*p,t.copy(n).addScaledVector(Fi,o).addScaledVector(Ni,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Kf=0,ut=class extends sn{constructor(){super();Object.defineProperty(this,"id",{value:Kf++}),this.uuid=Ft(),this.name="",this.type="Material",this.fog=!0,this.blending=hs,this.side=un,this.vertexColors=!1,this.opacity=1,this.format=gt,this.transparent=!1,this.blendSrc=jl,this.blendDst=Zl,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Jo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oa,this.stencilZFail=oa,this.stencilZPass=oa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Vl;continue}let i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(n.blending=this.blending),this.side!==un&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.format!==gt&&(n.format=this.format),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.format=e.format,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};ut.prototype.isMaterial=!0;var Sc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yt={h:0,s:0,l:0},Rr={h:0,s:0,l:0};function ba(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Ma(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Sa(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var te=class{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=aa(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{let i=n<=.5?n*(1+t):n+t-n*t,s=2*n-i;this.r=ba(s,i,e+1/3),this.g=ba(s,i,e),this.b=ba(s,i,e-1/3)}return this}setStyle(e){function t(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i,s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){let a=parseFloat(i[1])/360,l=parseInt(i[2],10)/100,c=parseInt(i[3],10)/100;return t(i[4]),this.setHSL(a,l,c)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let i=n[1],s=i.length;if(s===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){let t=Sc[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ma(e.r),this.g=Ma(e.g),this.b=Ma(e.b),this}copyLinearToSRGB(e){return this.r=Sa(e.r),this.g=Sa(e.g),this.b=Sa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){let t=this.r,n=this.g,i=this.b,s=Math.max(t,n,i),o=Math.min(t,n,i),a,l,c=(o+s)/2;if(o===s)a=0,l=0;else{let h=s-o;switch(l=c<=.5?h/(s+o):h/(2-s-o),s){case t:a=(n-i)/h+(n<i?6:0);break;case n:a=(i-t)/h+2;break;case i:a=(t-n)/h+4;break}a/=6}return e.h=a,e.s=l,e.l=c,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(Yt),Yt.h+=e,Yt.s+=t,Yt.l+=n,this.setHSL(Yt.h,Yt.s,Yt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yt),e.getHSL(Rr);let n=ys(Yt.h,Rr.h,t),i=ys(Yt.s,Rr.s,t),s=ys(Yt.l,Rr.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}};te.NAMES=Sc;te.prototype.isColor=!0;te.prototype.r=1;te.prototype.g=1;te.prototype.b=1;var nt=class extends ut{constructor(e){super();this.type="MeshBasicMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ur,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}};nt.prototype.isMeshBasicMaterial=!0;var et=new T,Lr=new q,Qe=class{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=ms,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){let t=this.array,n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new te),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){let t=this.array,n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new q),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){let t=this.array,n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new T),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){let t=this.array,n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new Ye),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Lr.fromBufferAttribute(this,t),Lr.applyMatrix3(e),this.setXY(t,Lr.x,Lr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)et.fromBufferAttribute(this,t),et.applyMatrix3(e),this.setXYZ(t,et.x,et.y,et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)et.x=this.getX(t),et.y=this.getY(t),et.z=this.getZ(t),et.applyMatrix4(e),this.setXYZ(t,et.x,et.y,et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)et.x=this.getX(t),et.y=this.getY(t),et.z=this.getZ(t),et.applyNormalMatrix(e),this.setXYZ(t,et.x,et.y,et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)et.x=this.getX(t),et.y=this.getY(t),et.z=this.getZ(t),et.transformDirection(e),this.setXYZ(t,et.x,et.y,et.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ms&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}};Qe.prototype.isBufferAttribute=!0;var Ta=class extends Qe{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ms=class extends Qe{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Tc=class extends Qe{constructor(e,t,n){super(new Uint16Array(e),t,n)}};Tc.prototype.isFloat16BufferAttribute=!0;var Fe=class extends Qe{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Qf=0,Ut=new me,Ea=new Me,Bi=new T,Bt=new It,Ss=new It,vt=new T,Ne=class extends sn{constructor(){super();Object.defineProperty(this,"id",{value:Qf++}),this.uuid=Ft(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dc(e)>65535?Ms:Ta)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new yt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ut.makeRotationFromQuaternion(e),this.applyMatrix4(Ut),this}rotateX(e){return Ut.makeRotationX(e),this.applyMatrix4(Ut),this}rotateY(e){return Ut.makeRotationY(e),this.applyMatrix4(Ut),this}rotateZ(e){return Ut.makeRotationZ(e),this.applyMatrix4(Ut),this}translate(e,t,n){return Ut.makeTranslation(e,t,n),this.applyMatrix4(Ut),this}scale(e,t,n){return Ut.makeScale(e,t,n),this.applyMatrix4(Ut),this}lookAt(e){return Ea.lookAt(e),Ea.updateMatrix(),this.applyMatrix4(Ea.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Fe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new It);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];Bt.setFromBufferAttribute(s),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new T,1/0);return}if(e){let n=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Ss.setFromBufferAttribute(a),this.morphTargetsRelative?(vt.addVectors(Bt.min,Ss.min),Bt.expandByPoint(vt),vt.addVectors(Bt.max,Ss.max),Bt.expandByPoint(vt)):(Bt.expandByPoint(Ss.min),Bt.expandByPoint(Ss.max))}Bt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)vt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(vt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)vt.fromBufferAttribute(a,c),l&&(Bi.fromBufferAttribute(e,c),vt.add(Bi)),i=Math.max(i,n.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;t.tangent===void 0&&this.setAttribute("tangent",new Qe(new Float32Array(4*a),4));let l=t.tangent.array,c=[],h=[];for(let W=0;W<a;W++)c[W]=new T,h[W]=new T;let u=new T,d=new T,f=new T,m=new q,x=new q,y=new q,p=new T,g=new T;function w(W,D,S){u.fromArray(i,W*3),d.fromArray(i,D*3),f.fromArray(i,S*3),m.fromArray(o,W*2),x.fromArray(o,D*2),y.fromArray(o,S*2),d.sub(u),f.sub(u),x.sub(m),y.sub(m);let b=1/(x.x*y.y-y.x*x.y);!isFinite(b)||(p.copy(d).multiplyScalar(y.y).addScaledVector(f,-x.y).multiplyScalar(b),g.copy(f).multiplyScalar(x.x).addScaledVector(d,-y.x).multiplyScalar(b),c[W].add(p),c[D].add(p),c[S].add(p),h[W].add(g),h[D].add(g),h[S].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let W=0,D=v.length;W<D;++W){let S=v[W],b=S.start,F=S.count;for(let O=b,N=b+F;O<N;O+=3)w(n[O+0],n[O+1],n[O+2])}let _=new T,L=new T,I=new T,B=new T;function K(W){I.fromArray(s,W*3),B.copy(I);let D=c[W];_.copy(D),_.sub(I.multiplyScalar(I.dot(D))).normalize(),L.crossVectors(B,D);let b=L.dot(h[W])<0?-1:1;l[W*4]=_.x,l[W*4+1]=_.y,l[W*4+2]=_.z,l[W*4+3]=b}for(let W=0,D=v.length;W<D;++W){let S=v[W],b=S.start,F=S.count;for(let O=b,N=b+F;O<N;O+=3)K(n[O+0]),K(n[O+1]),K(n[O+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qe(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new T,s=new T,o=new T,a=new T,l=new T,c=new T,h=new T,u=new T;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),x=e.getX(d+1),y=e.getX(d+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,y),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,y),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(y,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));let n=this.attributes;for(let i in n){if(e.attributes[i]===void 0)continue;let o=n[i].array,a=e.attributes[i],l=a.array,c=a.itemSize*t,h=Math.min(l.length,o.length-c);for(let u=0,d=c;u<h;u++,d++)o[d]=l[u]}return this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let x=0,y=l.length;x<y;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new Qe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new Ne,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}};Ne.prototype.isBufferGeometry=!0;var Ec=new me,Oi=new ai,Aa=new mn,Nn=new T,Bn=new T,On=new T,Ra=new T,La=new T,Ca=new T,Cr=new T,Pr=new T,Ir=new T,Dr=new q,Fr=new q,Nr=new q,Pa=new T,Br=new T,Ie=class extends Me{constructor(e=new Ne,t=new nt){super();this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(s),e.ray.intersectsSphere(Aa)===!1)||(Ec.copy(s).invert(),Oi.copy(e.ray).applyMatrix4(Ec),n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1))return;let o;if(n.isBufferGeometry){let a=n.index,l=n.attributes.position,c=n.morphAttributes.position,h=n.morphTargetsRelative,u=n.attributes.uv,d=n.attributes.uv2,f=n.groups,m=n.drawRange;if(a!==null)if(Array.isArray(i))for(let x=0,y=f.length;x<y;x++){let p=f[x],g=i[p.materialIndex],w=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let _=w,L=v;_<L;_+=3){let I=a.getX(_),B=a.getX(_+1),K=a.getX(_+2);o=Or(this,g,e,Oi,l,c,h,u,d,I,B,K),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{let x=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let p=x,g=y;p<g;p+=3){let w=a.getX(p),v=a.getX(p+1),_=a.getX(p+2);o=Or(this,i,e,Oi,l,c,h,u,d,w,v,_),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let x=0,y=f.length;x<y;x++){let p=f[x],g=i[p.materialIndex],w=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let _=w,L=v;_<L;_+=3){let I=_,B=_+1,K=_+2;o=Or(this,g,e,Oi,l,c,h,u,d,I,B,K),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{let x=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let p=x,g=y;p<g;p+=3){let w=p,v=p+1,_=p+2;o=Or(this,i,e,Oi,l,c,h,u,d,w,v,_),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}};Ie.prototype.isMesh=!0;function ep(r,e,t,n,i,s,o,a){let l;if(e.side===st?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side!==xt,a),l===null)return null;Br.copy(a),Br.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(Br);return c<t.near||c>t.far?null:{distance:c,point:Br.clone(),object:r}}function Or(r,e,t,n,i,s,o,a,l,c,h,u){Nn.fromBufferAttribute(i,c),Bn.fromBufferAttribute(i,h),On.fromBufferAttribute(i,u);let d=r.morphTargetInfluences;if(s&&d){Cr.set(0,0,0),Pr.set(0,0,0),Ir.set(0,0,0);for(let m=0,x=s.length;m<x;m++){let y=d[m],p=s[m];y!==0&&(Ra.fromBufferAttribute(p,c),La.fromBufferAttribute(p,h),Ca.fromBufferAttribute(p,u),o?(Cr.addScaledVector(Ra,y),Pr.addScaledVector(La,y),Ir.addScaledVector(Ca,y)):(Cr.addScaledVector(Ra.sub(Nn),y),Pr.addScaledVector(La.sub(Bn),y),Ir.addScaledVector(Ca.sub(On),y)))}Nn.add(Cr),Bn.add(Pr),On.add(Ir)}r.isSkinnedMesh&&(r.boneTransform(c,Nn),r.boneTransform(h,Bn),r.boneTransform(u,On));let f=ep(r,e,t,n,Nn,Bn,On,Pa);if(f){a&&(Dr.fromBufferAttribute(a,c),Fr.fromBufferAttribute(a,h),Nr.fromBufferAttribute(a,u),f.uv=ht.getUV(Pa,Nn,Bn,On,Dr,Fr,Nr,new q)),l&&(Dr.fromBufferAttribute(l,c),Fr.fromBufferAttribute(l,h),Nr.fromBufferAttribute(l,u),f.uv2=ht.getUV(Pa,Nn,Bn,On,Dr,Fr,Nr,new q));let m={a:c,b:h,c:u,normal:new T,materialIndex:0};ht.getNormal(Nn,Bn,On,m.normal),f.face=m}return f}var rn=class extends Ne{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Fe(c,3)),this.setAttribute("normal",new Fe(h,3)),this.setAttribute("uv",new Fe(u,2));function m(x,y,p,g,w,v,_,L,I,B,K){let W=v/I,D=_/B,S=v/2,b=_/2,F=L/2,O=I+1,N=B+1,U=0,ie=0,ae=new T;for(let V=0;V<N;V++){let X=V*D-b;for(let ue=0;ue<O;ue++){let he=ue*W-S;ae[x]=he*g,ae[y]=X*w,ae[p]=F,c.push(ae.x,ae.y,ae.z),ae[x]=0,ae[y]=0,ae[p]=L>0?1:-1,h.push(ae.x,ae.y,ae.z),u.push(ue/I),u.push(1-V/B),U+=1}}for(let V=0;V<B;V++)for(let X=0;X<I;X++){let ue=d+X+O*V,he=d+X+O*(V+1),pe=d+(X+1)+O*(V+1),Be=d+(X+1)+O*V;l.push(ue,he,Be),l.push(he,pe,Be),ie+=6}a.addGroup(f,ie,K),f+=ie,d+=U}}static fromJSON(e){return new rn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function zi(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function St(r){let e={};for(let t=0;t<r.length;t++){let n=zi(r[t]);for(let i in n)e[i]=n[i]}return e}var tp={clone:zi,merge:St},np=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ip=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pt=class extends ut{constructor(e){super();this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=np,this.fragmentShader=ip,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zi(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}};pt.prototype.isShaderMaterial=!0;var zr=class extends Me{constructor(){super();this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};zr.prototype.isCamera=!0;var dt=class extends zr{constructor(e=50,t=1,n=.1,i=2e3){super();this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=xs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(gs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xs*2*Math.atan(Math.tan(gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(gs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};dt.prototype.isPerspectiveCamera=!0;var Ui=90,Hi=1,Ur=class extends Me{constructor(e,t,n){super();if(this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;let i=new dt(Ui,Hi,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new T(1,0,0)),this.add(i);let s=new dt(Ui,Hi,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new T(-1,0,0)),this.add(s);let o=new dt(Ui,Hi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new T(0,1,0)),this.add(o);let a=new dt(Ui,Hi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new T(0,-1,0)),this.add(a);let l=new dt(Ui,Hi,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new T(0,0,1)),this.add(l);let c=new dt(Ui,Hi,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new T(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();let n=this.renderTarget,[i,s,o,a,l,c]=this.children,h=e.xr.enabled,u=e.getRenderTarget();e.xr.enabled=!1;let d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=h}},Ts=class extends at{constructor(e,t,n,i,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:us;super(e,t,n,i,s,o,a,l,c,h);this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};Ts.prototype.isCubeTexture=!0;var Ia=class extends Rt{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n);super(e,e,t);t=t||{},this.texture=new Ts(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ke,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=gt,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new rn(5,5,5),s=new pt({name:"CubemapFromEquirect",uniforms:zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:st,blending:An});s.uniforms.tEquirect.value=t;let o=new Ie(i,s),a=t.minFilter;return t.minFilter===ei&&(t.minFilter=Ke),new Ur(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}};Ia.prototype.isWebGLCubeRenderTarget=!0;var Da=new T,sp=new T,rp=new yt,Ht=class{constructor(e=new T(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Da.subVectors(n,t).cross(sp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){let n=e.delta(Da),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||rp.getNormalMatrix(e),i=this.coplanarPoint(Da).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};Ht.prototype.isPlane=!0;var ki=new mn,Hr=new T,Es=class{constructor(e=new Ht,t=new Ht,n=new Ht,i=new Ht,s=new Ht,o=new Ht){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){let t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7],d=n[8],f=n[9],m=n[10],x=n[11],y=n[12],p=n[13],g=n[14],w=n[15];return t[0].setComponents(a-i,u-l,x-d,w-y).normalize(),t[1].setComponents(a+i,u+l,x+d,w+y).normalize(),t[2].setComponents(a+s,u+c,x+f,w+p).normalize(),t[3].setComponents(a-s,u-c,x-f,w-p).normalize(),t[4].setComponents(a-o,u-h,x-m,w-g).normalize(),t[5].setComponents(a+o,u+h,x+m,w+g).normalize(),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSprite(e){return ki.center.set(0,0,0),ki.radius=.7071067811865476,ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Hr.x=i.normal.x>0?e.max.x:e.min.x,Hr.y=i.normal.y>0?e.max.y:e.min.y,Hr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Hr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ac(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function op(r,e){let t=e.isWebGL2,n=new WeakMap;function i(c,h){let u=c.array,d=c.usage,f=r.createBuffer();r.bindBuffer(h,f),r.bufferData(h,u,d),c.onUploadCallback();let m=5126;return u instanceof Float32Array?m=5126:u instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):u instanceof Uint16Array?c.isFloat16BufferAttribute?t?m=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):m=5123:u instanceof Int16Array?m=5122:u instanceof Uint32Array?m=5125:u instanceof Int32Array?m=5124:u instanceof Int8Array?m=5120:(u instanceof Uint8Array||u instanceof Uint8ClampedArray)&&(m=5121),{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,u){let d=h.array,f=h.updateRange;r.bindBuffer(u,c),f.count===-1?r.bufferSubData(u,0,d):(t?r.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):r.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);u===void 0?n.set(c,i(c,h)):u.version<c.version&&(s(u.buffer,c,h),u.version=c.version)}return{get:o,remove:a,update:l}}var _n=class extends Ne{constructor(e=1,t=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],m=[],x=[],y=[];for(let p=0;p<h;p++){let g=p*d-o;for(let w=0;w<c;w++){let v=w*u-s;m.push(v,-g,0),x.push(0,0,1),y.push(w/a),y.push(1-p/l)}}for(let p=0;p<l;p++)for(let g=0;g<a;g++){let w=g+c*p,v=g+c*(p+1),_=g+1+c*(p+1),L=g+1+c*p;f.push(w,v,L),f.push(v,_,L)}this.setIndex(f),this.setAttribute("position",new Fe(m,3)),this.setAttribute("normal",new Fe(x,3)),this.setAttribute("uv",new Fe(y,2))}static fromJSON(e){return new _n(e.width,e.height,e.widthSegments,e.heightSegments)}},ap=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,lp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,hp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,up=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fp="vec3 transformed = vec3( position );",pp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mp=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
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
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,gp=`#ifdef USE_BUMPMAP
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
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Sp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Tp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
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
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
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
}`,Ep=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 ) + 0.5;
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
		return texture2D( envMap, uv ).rgb;
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
#endif`,Ap=`vec3 transformedNormal = objectNormal;
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
#endif`,Rp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Cp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ip="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dp=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fp=`#ifdef USE_ENVMAP
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
		envColor = envMapTexelToLinear( envColor );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Np=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bp=`#ifdef USE_ENVMAP
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
#endif`,Op=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zp=`#ifdef USE_ENVMAP
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
#endif`,Up=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Wp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,qp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xp=`vec3 diffuse = vec3( 1.0 );
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
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Yp=`uniform bool receiveShadow;
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
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
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
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,jp=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Zp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,$p=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Qp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= specularColorMapTexelToLinear( texture2D( specularColorMap, vUv ) ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
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
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= sheenColorMapTexelToLinear( texture2D( sheenColorMap, vUv ) ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,em=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
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
		float roughness = material.roughness;
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
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tm=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
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
		getPointLightInfo( pointLight, geometry, directLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
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
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,im=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,sm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,om=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,am=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,lm=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,cm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,um=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] > 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,mm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {
			float texelIndex = float( vertexIndex * stride + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV ).xyz;
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,gm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			#ifndef USE_MORPHNORMALS
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];
			#else
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];
			#endif
		}
	#else
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
	#endif
#endif`,xm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,ym=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Mm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Sm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Tm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Em=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Am=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
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
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Rm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Im=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fm=`#ifdef USE_SHADOWMAP
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
#endif`,Nm=`#ifdef USE_SHADOWMAP
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
#endif`,Bm=`#ifdef USE_SHADOWMAP
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
#endif`,Om=`float getShadowMask() {
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
}`,zm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Um=`#ifdef USE_SKINNING
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
#endif`,Hm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,km=`#ifdef USE_SKINNING
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
#endif`,Gm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xm=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,Ym=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( float roughness, float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( vec2 fragCoord, float roughness, float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef TEXTURE_LOD_EXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 diffuseColor, vec3 specularColor, float specularF90,
		vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness,
		vec3 attenuationColor, float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,jm=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Zm=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Jm=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,$m=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Km=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Qm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,eg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,tg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ng=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sg=`#include <envmap_common_pars_fragment>
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
}`,rg=`#include <common>
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
}`,og=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
}`,ag=`#define DISTANCE
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
}`,lg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
}`,cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ug=`uniform float scale;
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
}`,dg=`uniform vec3 diffuse;
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fg=`#include <common>
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
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pg=`uniform vec3 diffuse;
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
#include <alphatest_pars_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mg=`#define LAMBERT
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
}`,gg=`uniform vec3 diffuse;
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
#include <alphatest_pars_fragment>
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
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
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
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
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
	#include <normal_vertex>
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
}`,_g=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
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
}`,wg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
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
	#include <normal_vertex>
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
}`,bg=`#define PHONG
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
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
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
	#include <normal_vertex>
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
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Sg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
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
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
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
	#include <normal_vertex>
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
}`,Eg=`#define TOON
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
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ag=`uniform float size;
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
}`,Rg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lg=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cg=`uniform vec3 color;
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
}`,Pg=`uniform float rotation;
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
}`,Ig=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ue={alphamap_fragment:ap,alphamap_pars_fragment:lp,alphatest_fragment:cp,alphatest_pars_fragment:hp,aomap_fragment:up,aomap_pars_fragment:dp,begin_vertex:fp,beginnormal_vertex:pp,bsdfs:mp,bumpmap_pars_fragment:gp,clipping_planes_fragment:xp,clipping_planes_pars_fragment:yp,clipping_planes_pars_vertex:vp,clipping_planes_vertex:_p,color_fragment:wp,color_pars_fragment:bp,color_pars_vertex:Mp,color_vertex:Sp,common:Tp,cube_uv_reflection_fragment:Ep,defaultnormal_vertex:Ap,displacementmap_pars_vertex:Rp,displacementmap_vertex:Lp,emissivemap_fragment:Cp,emissivemap_pars_fragment:Pp,encodings_fragment:Ip,encodings_pars_fragment:Dp,envmap_fragment:Fp,envmap_common_pars_fragment:Np,envmap_pars_fragment:Bp,envmap_pars_vertex:Op,envmap_physical_pars_fragment:jp,envmap_vertex:zp,fog_vertex:Up,fog_pars_vertex:Hp,fog_fragment:kp,fog_pars_fragment:Gp,gradientmap_pars_fragment:Vp,lightmap_fragment:Wp,lightmap_pars_fragment:qp,lights_lambert_vertex:Xp,lights_pars_begin:Yp,lights_toon_fragment:Zp,lights_toon_pars_fragment:Jp,lights_phong_fragment:$p,lights_phong_pars_fragment:Kp,lights_physical_fragment:Qp,lights_physical_pars_fragment:em,lights_fragment_begin:tm,lights_fragment_maps:nm,lights_fragment_end:im,logdepthbuf_fragment:sm,logdepthbuf_pars_fragment:rm,logdepthbuf_pars_vertex:om,logdepthbuf_vertex:am,map_fragment:lm,map_pars_fragment:cm,map_particle_fragment:hm,map_particle_pars_fragment:um,metalnessmap_fragment:dm,metalnessmap_pars_fragment:fm,morphnormal_vertex:pm,morphtarget_pars_vertex:mm,morphtarget_vertex:gm,normal_fragment_begin:xm,normal_fragment_maps:ym,normal_pars_fragment:vm,normal_pars_vertex:_m,normal_vertex:wm,normalmap_pars_fragment:bm,clearcoat_normal_fragment_begin:Mm,clearcoat_normal_fragment_maps:Sm,clearcoat_pars_fragment:Tm,output_fragment:Em,packing:Am,premultiplied_alpha_fragment:Rm,project_vertex:Lm,dithering_fragment:Cm,dithering_pars_fragment:Pm,roughnessmap_fragment:Im,roughnessmap_pars_fragment:Dm,shadowmap_pars_fragment:Fm,shadowmap_pars_vertex:Nm,shadowmap_vertex:Bm,shadowmask_pars_fragment:Om,skinbase_vertex:zm,skinning_pars_vertex:Um,skinning_vertex:Hm,skinnormal_vertex:km,specularmap_fragment:Gm,specularmap_pars_fragment:Vm,tonemapping_fragment:Wm,tonemapping_pars_fragment:qm,transmission_fragment:Xm,transmission_pars_fragment:Ym,uv_pars_fragment:jm,uv_pars_vertex:Zm,uv_vertex:Jm,uv2_pars_fragment:$m,uv2_pars_vertex:Km,uv2_vertex:Qm,worldpos_vertex:eg,background_vert:tg,background_frag:ng,cube_vert:ig,cube_frag:sg,depth_vert:rg,depth_frag:og,distanceRGBA_vert:ag,distanceRGBA_frag:lg,equirect_vert:cg,equirect_frag:hg,linedashed_vert:ug,linedashed_frag:dg,meshbasic_vert:fg,meshbasic_frag:pg,meshlambert_vert:mg,meshlambert_frag:gg,meshmatcap_vert:xg,meshmatcap_frag:yg,meshnormal_vert:vg,meshnormal_frag:_g,meshphong_vert:wg,meshphong_frag:bg,meshphysical_vert:Mg,meshphysical_frag:Sg,meshtoon_vert:Tg,meshtoon_frag:Eg,points_vert:Ag,points_frag:Rg,shadow_vert:Lg,shadow_frag:Cg,sprite_vert:Pg,sprite_frag:Ig},ce={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new yt},uv2Transform:{value:new yt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new q(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new q(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new yt}}},on={basic:{uniforms:St([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:St([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.fog,ce.lights,{emissive:{value:new te(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:St([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:St([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:St([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new te(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:St([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:St([ce.points,ce.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:St([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:St([ce.common,ce.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:St([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:St([ce.sprite,ce.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},cube:{uniforms:St([ce.envmap,{opacity:{value:1}}]),vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:St([ce.common,ce.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:St([ce.lights,ce.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};on.physical={uniforms:St([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new q(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenRoughness:{value:0},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularIntensity:{value:0},specularIntensityMap:{value:null},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};function Dg(r,e,t,n,i){let s=new te(0),o=0,a,l,c=null,h=0,u=null;function d(m,x){let y=!1,p=x.isScene===!0?x.background:null;p&&p.isTexture&&(p=e.get(p));let g=r.xr,w=g.getSession&&g.getSession();w&&w.environmentBlendMode==="additive"&&(p=null),p===null?f(s,o):p&&p.isColor&&(f(p,1),y=!0),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),p&&(p.isCubeTexture||p.mapping===dr)?(l===void 0&&(l=new Ie(new rn(1,1,1),new pt({name:"BackgroundCubeMaterial",uniforms:zi(on.cube.uniforms),vertexShader:on.cube.vertexShader,fragmentShader:on.cube.fragmentShader,side:st,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(v,_,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=p,l.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,(c!==p||h!==p.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,c=p,h=p.version,u=r.toneMapping),m.unshift(l,l.geometry,l.material,0,0,null)):p&&p.isTexture&&(a===void 0&&(a=new Ie(new _n(2,2),new pt({name:"BackgroundMaterial",uniforms:zi(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(a)),a.material.uniforms.t2D.value=p,p.matrixAutoUpdate===!0&&p.updateMatrix(),a.material.uniforms.uvTransform.value.copy(p.matrix),(c!==p||h!==p.version||u!==r.toneMapping)&&(a.material.needsUpdate=!0,c=p,h=p.version,u=r.toneMapping),m.unshift(a,a.geometry,a.material,0,0,null))}function f(m,x){t.buffers.color.setClear(m.r,m.g,m.b,x,i)}return{getClearColor:function(){return s},setClearColor:function(m,x=1){s.set(m),o=x,f(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,f(s,o)},render:d}}function Fg(r,e,t,n){let i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=x(null),c=l;function h(b,F,O,N,U){let ie=!1;if(o){let ae=m(N,O,F);c!==ae&&(c=ae,d(c.object)),ie=y(N,U),ie&&p(N,U)}else{let ae=F.wireframe===!0;(c.geometry!==N.id||c.program!==O.id||c.wireframe!==ae)&&(c.geometry=N.id,c.program=O.id,c.wireframe=ae,ie=!0)}b.isInstancedMesh===!0&&(ie=!0),U!==null&&t.update(U,34963),ie&&(I(b,F,O,N),U!==null&&r.bindBuffer(34963,t.get(U).buffer))}function u(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(b){return n.isWebGL2?r.bindVertexArray(b):s.bindVertexArrayOES(b)}function f(b){return n.isWebGL2?r.deleteVertexArray(b):s.deleteVertexArrayOES(b)}function m(b,F,O){let N=O.wireframe===!0,U=a[b.id];U===void 0&&(U={},a[b.id]=U);let ie=U[F.id];ie===void 0&&(ie={},U[F.id]=ie);let ae=ie[N];return ae===void 0&&(ae=x(u()),ie[N]=ae),ae}function x(b){let F=[],O=[],N=[];for(let U=0;U<i;U++)F[U]=0,O[U]=0,N[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:O,attributeDivisors:N,object:b,attributes:{},index:null}}function y(b,F){let O=c.attributes,N=b.attributes,U=0;for(let ie in N){let ae=O[ie],V=N[ie];if(ae===void 0||ae.attribute!==V||ae.data!==V.data)return!0;U++}return c.attributesNum!==U||c.index!==F}function p(b,F){let O={},N=b.attributes,U=0;for(let ie in N){let ae=N[ie],V={};V.attribute=ae,ae.data&&(V.data=ae.data),O[ie]=V,U++}c.attributes=O,c.attributesNum=U,c.index=F}function g(){let b=c.newAttributes;for(let F=0,O=b.length;F<O;F++)b[F]=0}function w(b){v(b,0)}function v(b,F){let O=c.newAttributes,N=c.enabledAttributes,U=c.attributeDivisors;O[b]=1,N[b]===0&&(r.enableVertexAttribArray(b),N[b]=1),U[b]!==F&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](b,F),U[b]=F)}function _(){let b=c.newAttributes,F=c.enabledAttributes;for(let O=0,N=F.length;O<N;O++)F[O]!==b[O]&&(r.disableVertexAttribArray(O),F[O]=0)}function L(b,F,O,N,U,ie){n.isWebGL2===!0&&(O===5124||O===5125)?r.vertexAttribIPointer(b,F,O,U,ie):r.vertexAttribPointer(b,F,O,N,U,ie)}function I(b,F,O,N){if(n.isWebGL2===!1&&(b.isInstancedMesh||N.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();let U=N.attributes,ie=O.getAttributes(),ae=F.defaultAttributeValues;for(let V in ie){let X=ie[V];if(X.location>=0){let ue=U[V];if(ue===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(ue=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(ue=b.instanceColor)),ue!==void 0){let he=ue.normalized,pe=ue.itemSize,Be=t.get(ue);if(Be===void 0)continue;let Z=Be.buffer,Ce=Be.type,we=Be.bytesPerElement;if(ue.isInterleavedBufferAttribute){let ge=ue.data,ye=ge.stride,He=ue.offset;if(ge&&ge.isInstancedInterleavedBuffer){for(let G=0;G<X.locationSize;G++)v(X.location+G,ge.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let G=0;G<X.locationSize;G++)w(X.location+G);r.bindBuffer(34962,Z);for(let G=0;G<X.locationSize;G++)L(X.location+G,pe/X.locationSize,Ce,he,ye*we,(He+pe/X.locationSize*G)*we)}else{if(ue.isInstancedBufferAttribute){for(let ge=0;ge<X.locationSize;ge++)v(X.location+ge,ue.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ge=0;ge<X.locationSize;ge++)w(X.location+ge);r.bindBuffer(34962,Z);for(let ge=0;ge<X.locationSize;ge++)L(X.location+ge,pe/X.locationSize,Ce,he,pe*we,pe/X.locationSize*ge*we)}}else if(ae!==void 0){let he=ae[V];if(he!==void 0)switch(he.length){case 2:r.vertexAttrib2fv(X.location,he);break;case 3:r.vertexAttrib3fv(X.location,he);break;case 4:r.vertexAttrib4fv(X.location,he);break;default:r.vertexAttrib1fv(X.location,he)}}}}_()}function B(){D();for(let b in a){let F=a[b];for(let O in F){let N=F[O];for(let U in N)f(N[U].object),delete N[U];delete F[O]}delete a[b]}}function K(b){if(a[b.id]===void 0)return;let F=a[b.id];for(let O in F){let N=F[O];for(let U in N)f(N[U].object),delete N[U];delete F[O]}delete a[b.id]}function W(b){for(let F in a){let O=a[F];if(O[b.id]===void 0)continue;let N=O[b.id];for(let U in N)f(N[U].object),delete N[U];delete O[b.id]}}function D(){S(),c!==l&&(c=l,d(c.object))}function S(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:D,resetDefaultState:S,dispose:B,releaseStatesOfGeometry:K,releaseStatesOfProgram:W,initAttributes:g,enableAttribute:w,disableUnusedAttributes:_}}function Ng(r,e,t,n){let i=n.isWebGL2,s;function o(c){s=c}function a(c,h){r.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,u){if(u===0)return;let d,f;if(i)d=r,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,c,h,u),t.update(h,s,u)}this.setMode=o,this.render=a,this.renderInstances=l}function Bg(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(I){if(I==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext!="undefined"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&r instanceof WebGL2ComputeRenderingContext,a=t.precision!==void 0?t.precision:"highp",l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=r.getParameter(34930),d=r.getParameter(35660),f=r.getParameter(3379),m=r.getParameter(34076),x=r.getParameter(34921),y=r.getParameter(36347),p=r.getParameter(36348),g=r.getParameter(36349),w=d>0,v=o||e.has("OES_texture_float"),_=w&&v,L=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:m,maxAttributes:x,maxVertexUniforms:y,maxVaryings:p,maxFragmentUniforms:g,vertexTextures:w,floatFragmentTextures:v,floatVertexTextures:_,maxSamples:L}}function Og(r){let e=this,t=null,n=0,i=!1,s=!1,o=new Ht,a=new yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,f){let m=u.length!==0||d||n!==0||i;return i=d,t=h(u,f,0),n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,c()},this.setState=function(u,d,f){let m=u.clippingPlanes,x=u.clipIntersection,y=u.clipShadows,p=r.get(u);if(!i||m===null||m.length===0||s&&!y)s?h(null):c();else{let g=s?0:n,w=g*4,v=p.clippingState||null;l.value=v,v=h(m,d,w,f);for(let _=0;_!==w;++_)v[_]=t[_];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){let x=u!==null?u.length:0,y=null;if(x!==0){if(y=l.value,m!==!0||y===null){let p=f+x*4,g=d.matrixWorldInverse;a.getNormalMatrix(g),(y===null||y.length<p)&&(y=new Float32Array(p));for(let w=0,v=f;w!==x;++w,v+=4)o.copy(u[w]).applyMatrix4(g,a),o.normal.toArray(y,v),y[v+3]=o.constant}l.value=y,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,y}}function zg(r){let e=new WeakMap;function t(o,a){return a===Ko?o.mapping=us:a===Qo&&(o.mapping=ds),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){let a=o.mapping;if(a===Ko||a===Qo)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=r.getRenderTarget(),h=new Ia(l.height/2);return h.fromEquirectangularTexture(r,o),e.set(o,h),r.setRenderTarget(c),o.addEventListener("dispose",i),t(h.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var Gi=class extends zr{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super();this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};Gi.prototype.isOrthographicCamera=!0;var As=class extends pt{constructor(e){super(e);this.type="RawShaderMaterial"}};As.prototype.isRawShaderMaterial=!0;var Vi=4,zn=8,an=Math.pow(2,zn),Rc=[.125,.215,.35,.446,.526,.582],Lc=zn-Vi+1+Rc.length,Wi=20,kr={[Dt]:0,[Pt]:1},Fa=new Gi,{_lodPlanes:Rs,_sizeLods:Cc,_sigmas:Gr}=Ug(),Pc=new te,Na=null,ci=(1+Math.sqrt(5))/2,qi=1/ci,Ic=[new T(1,1,1),new T(-1,1,1),new T(1,1,-1),new T(-1,1,-1),new T(0,ci,qi),new T(0,ci,-qi),new T(qi,0,ci),new T(-qi,0,ci),new T(ci,qi,0),new T(-ci,qi,0)],Vr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=Hg(Wi),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Na=this._renderer.getRenderTarget();let s=this._allocateTargets();return this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=Nc(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=Fc(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<Rs.length;e++)Rs[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(Na),e.scissorTest=!1,Wr(e,0,0,e.width,e.height)}_fromTexture(e){Na=this._renderer.getRenderTarget();let t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(e){let t={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:ti,format:gt,encoding:Dt,depthBuffer:!1},n=Dc(t);return n.depthBuffer=!e,this._pingPongRenderTarget=Dc(t),n}_compileMaterial(e){let t=new Ie(Rs[0],e);this._renderer.compile(t,Fa)}_sceneToCubeUV(e,t,n,i){let s=90,o=1,a=new dt(s,o,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Pc),h.toneMapping=Ln,h.autoClear=!1;let f=new nt({name:"PMREM.Background",side:st,depthWrite:!1,depthTest:!1}),m=new Ie(new rn,f),x=!1,y=e.background;y?y.isColor&&(f.color.copy(y),e.background=null,x=!0):(f.color.copy(Pc),x=!0);for(let p=0;p<6;p++){let g=p%3;g==0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):g==1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p])),Wr(i,g*an,p>2?an:0,an,an),h.setRenderTarget(i),x&&h.render(m,a),h.render(e,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=y}_setEncoding(e,t){this._renderer.capabilities.isWebGL2===!0&&t.format===gt&&t.type===dn&&t.encoding===Pt?e.value=kr[Dt]:e.value=kr[t.encoding]}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===us||e.mapping===ds;i?this._cubemapShader==null&&(this._cubemapShader=Nc()):this._equirectShader==null&&(this._equirectShader=Fc());let s=i?this._cubemapShader:this._equirectShader,o=new Ie(Rs[0],s),a=s.uniforms;a.envMap.value=e,i||a.texelSize.value.set(1/e.image.width,1/e.image.height),this._setEncoding(a.inputEncoding,e),Wr(t,0,0,3*an,2*an),n.setRenderTarget(t),n.render(o,Fa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<Lc;i++){let s=Math.sqrt(Gr[i]*Gr[i]-Gr[i-1]*Gr[i-1]),o=Ic[(i-1)%Ic.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ie(Rs[i],c),d=c.uniforms,f=Cc[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Wi-1),x=s/m,y=isFinite(s)?1+Math.floor(h*x):Wi;y>Wi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Wi}`);let p=[],g=0;for(let L=0;L<Wi;++L){let I=L/x,B=Math.exp(-I*I/2);p.push(B),L==0?g+=B:L<y&&(g+=2*B)}for(let L=0;L<p.length;L++)p[L]=p[L]/g;d.envMap.value=e.texture,d.samples.value=y,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a),d.dTheta.value=m,d.mipInt.value=zn-n;let w=Cc[i],v=3*Math.max(0,an-2*w),_=(i===0?0:2*an)+2*w*(i>zn-Vi?i-zn+Vi:0);Wr(t,v,_,3*w,2*w),l.setRenderTarget(t),l.render(u,Fa)}};function Ug(){let r=[],e=[],t=[],n=zn;for(let i=0;i<Lc;i++){let s=Math.pow(2,n);e.push(s);let o=1/s;i>zn-Vi?o=Rc[i-zn+Vi-1]:i==0&&(o=0),t.push(o);let a=1/(s-1),l=-a/2,c=1+a/2,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,m=2,x=1,y=new Float32Array(f*d*u),p=new Float32Array(m*d*u),g=new Float32Array(x*d*u);for(let v=0;v<u;v++){let _=v%3*2/3-1,L=v>2?0:-1,I=[_,L,0,_+2/3,L,0,_+2/3,L+1,0,_,L,0,_+2/3,L+1,0,_,L+1,0];y.set(I,f*d*v),p.set(h,m*d*v);let B=[v,v,v,v,v,v];g.set(B,x*d*v)}let w=new Ne;w.setAttribute("position",new Qe(y,f)),w.setAttribute("uv",new Qe(p,m)),w.setAttribute("faceIndex",new Qe(g,x)),r.push(w),n>Vi&&n--}return{_lodPlanes:r,_sizeLods:e,_sigmas:t}}function Dc(r){let e=new Rt(3*an,3*an,r);return e.texture.mapping=dr,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function Wr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Hg(r){let e=new Float32Array(r),t=new T(0,1,0);return new As({name:"SphericalGaussianBlur",defines:{n:r},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:t}},vertexShader:Ba(),fragmentShader:`

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

			${Oa()}

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

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function Fc(){let r=new q(1,1);return new As({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:r},inputEncoding:{value:kr[Dt]}},vertexShader:Ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${Oa()}

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

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function Nc(){return new As({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:kr[Dt]}},vertexShader:Ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${Oa()}

			void main() {

				gl_FragColor = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function Ba(){return`

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
	`}function Oa(){return`

		uniform int inputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else {

				return sRGBToLinear( value );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}function kg(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){let l=a.mapping,c=l===Ko||l===Qo,h=l===us||l===ds;if(c||h){if(e.has(a))return e.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){let d=r.getRenderTarget();t===null&&(t=new Vr(r));let f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),r.setRenderTarget(d),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Gg(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Vg(r,e,t,n){let i={},s=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete i[d.id];let f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let m in d)e.update(d[m],34962);let f=u.morphAttributes;for(let m in f){let x=f[m];for(let y=0,p=x.length;y<p;y++)e.update(x[y],34962)}}function c(u){let d=[],f=u.index,m=u.attributes.position,x=0;if(f!==null){let g=f.array;x=f.version;for(let w=0,v=g.length;w<v;w+=3){let _=g[w+0],L=g[w+1],I=g[w+2];d.push(_,L,L,I,I,_)}}else{let g=m.array;x=m.version;for(let w=0,v=g.length/3-1;w<v;w+=3){let _=w+0,L=w+1,I=w+2;d.push(_,L,L,I,I,_)}}let y=new(dc(d)>65535?Ms:Ta)(d,1);y.version=x;let p=s.get(u);p&&e.remove(p),s.set(u,y)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Wg(r,e,t,n){let i=n.isWebGL2,s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,f){r.drawElements(s,f,a,d*l),t.update(f,s,1)}function u(d,f,m){if(m===0)return;let x,y;if(i)x=r,y="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),y="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[y](s,f,a,d*l,m),t.update(f,s,m)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u}function qg(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}var qr=class extends at{constructor(e=null,t=1,n=1,i=1){super(null);this.image={data:e,width:t,height:n,depth:i},this.magFilter=tt,this.minFilter=tt,this.wrapR=At,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};qr.prototype.isDataTexture2DArray=!0;function Xg(r,e){return r[0]-e[0]}function Yg(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Bc(r,e){let t=1,n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),r.divideScalar(t)}function jg(r,e,t){let n={},i=new Float32Array(8),s=new WeakMap,o=new T,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u,d){let f=c.morphTargetInfluences;if(e.isWebGL2===!0){let m=h.morphAttributes.position.length,x=s.get(h);if(x===void 0||x.count!==m){x!==void 0&&x.texture.dispose();let g=h.morphAttributes.normal!==void 0,w=h.morphAttributes.position,v=h.morphAttributes.normal||[],_=h.attributes.position.count,L=g===!0?2:1,I=_*L,B=1;I>e.maxTextureSize&&(B=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);let K=new Float32Array(I*B*4*m),W=new qr(K,I,B,m);W.format=gt,W.type=fn,W.needsUpdate=!0;let D=L*4;for(let S=0;S<m;S++){let b=w[S],F=v[S],O=I*B*4*S;for(let N=0;N<b.count;N++){o.fromBufferAttribute(b,N),b.normalized===!0&&Bc(o,b);let U=N*D;K[O+U+0]=o.x,K[O+U+1]=o.y,K[O+U+2]=o.z,K[O+U+3]=0,g===!0&&(o.fromBufferAttribute(F,N),F.normalized===!0&&Bc(o,F),K[O+U+4]=o.x,K[O+U+5]=o.y,K[O+U+6]=o.z,K[O+U+7]=0)}}x={count:m,texture:W,size:new q(I,B)},s.set(h,x)}let y=0;for(let g=0;g<f.length;g++)y+=f[g];let p=h.morphTargetsRelative?1:1-y;d.getUniforms().setValue(r,"morphTargetBaseInfluence",p),d.getUniforms().setValue(r,"morphTargetInfluences",f),d.getUniforms().setValue(r,"morphTargetsTexture",x.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}else{let m=f===void 0?0:f.length,x=n[h.id];if(x===void 0||x.length!==m){x=[];for(let v=0;v<m;v++)x[v]=[v,0];n[h.id]=x}for(let v=0;v<m;v++){let _=x[v];_[0]=v,_[1]=f[v]}x.sort(Yg);for(let v=0;v<8;v++)v<m&&x[v][1]?(a[v][0]=x[v][0],a[v][1]=x[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(Xg);let y=h.morphAttributes.position,p=h.morphAttributes.normal,g=0;for(let v=0;v<8;v++){let _=a[v],L=_[0],I=_[1];L!==Number.MAX_SAFE_INTEGER&&I?(y&&h.getAttribute("morphTarget"+v)!==y[L]&&h.setAttribute("morphTarget"+v,y[L]),p&&h.getAttribute("morphNormal"+v)!==p[L]&&h.setAttribute("morphNormal"+v,p[L]),i[v]=I,g+=I):(y&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),p&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}let w=h.morphTargetsRelative?1:1-g;d.getUniforms().setValue(r,"morphTargetBaseInfluence",w),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Zg(r,e,t,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);return i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var za=class extends at{constructor(e=null,t=1,n=1,i=1){super(null);this.image={data:e,width:t,height:n,depth:i},this.magFilter=tt,this.minFilter=tt,this.wrapR=At,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};za.prototype.isDataTexture3D=!0;var Oc=new at,zc=new qr,Uc=new za,Hc=new Ts,kc=[],Gc=[],Vc=new Float32Array(16),Wc=new Float32Array(9),qc=new Float32Array(4);function Xi(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=kc[i];if(s===void 0&&(s=new Float32Array(i),kc[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Lt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Tt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Xr(r,e){let t=Gc[e];t===void 0&&(t=new Int32Array(e),Gc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Jg(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function $g(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;r.uniform2fv(this.addr,e),Tt(t,e)}}function Kg(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;r.uniform3fv(this.addr,e),Tt(t,e)}}function Qg(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;r.uniform4fv(this.addr,e),Tt(t,e)}}function ex(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(Lt(t,n))return;qc.set(n),r.uniformMatrix2fv(this.addr,!1,qc),Tt(t,n)}}function tx(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(Lt(t,n))return;Wc.set(n),r.uniformMatrix3fv(this.addr,!1,Wc),Tt(t,n)}}function nx(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(Lt(t,n))return;Vc.set(n),r.uniformMatrix4fv(this.addr,!1,Vc),Tt(t,n)}}function ix(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function sx(r,e){let t=this.cache;Lt(t,e)||(r.uniform2iv(this.addr,e),Tt(t,e))}function rx(r,e){let t=this.cache;Lt(t,e)||(r.uniform3iv(this.addr,e),Tt(t,e))}function ox(r,e){let t=this.cache;Lt(t,e)||(r.uniform4iv(this.addr,e),Tt(t,e))}function ax(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function lx(r,e){let t=this.cache;Lt(t,e)||(r.uniform2uiv(this.addr,e),Tt(t,e))}function cx(r,e){let t=this.cache;Lt(t,e)||(r.uniform3uiv(this.addr,e),Tt(t,e))}function hx(r,e){let t=this.cache;Lt(t,e)||(r.uniform4uiv(this.addr,e),Tt(t,e))}function ux(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.safeSetTexture2D(e||Oc,i)}function dx(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Uc,i)}function fx(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.safeSetTextureCube(e||Hc,i)}function px(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||zc,i)}function mx(r){switch(r){case 5126:return Jg;case 35664:return $g;case 35665:return Kg;case 35666:return Qg;case 35674:return ex;case 35675:return tx;case 35676:return nx;case 5124:case 35670:return ix;case 35667:case 35671:return sx;case 35668:case 35672:return rx;case 35669:case 35673:return ox;case 5125:return ax;case 36294:return lx;case 36295:return cx;case 36296:return hx;case 35678:case 36198:case 36298:case 36306:case 35682:return ux;case 35679:case 36299:case 36307:return dx;case 35680:case 36300:case 36308:case 36293:return fx;case 36289:case 36303:case 36311:case 36292:return px}}function gx(r,e){r.uniform1fv(this.addr,e)}function xx(r,e){let t=Xi(e,this.size,2);r.uniform2fv(this.addr,t)}function yx(r,e){let t=Xi(e,this.size,3);r.uniform3fv(this.addr,t)}function vx(r,e){let t=Xi(e,this.size,4);r.uniform4fv(this.addr,t)}function _x(r,e){let t=Xi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function wx(r,e){let t=Xi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function bx(r,e){let t=Xi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Mx(r,e){r.uniform1iv(this.addr,e)}function Sx(r,e){r.uniform2iv(this.addr,e)}function Tx(r,e){r.uniform3iv(this.addr,e)}function Ex(r,e){r.uniform4iv(this.addr,e)}function Ax(r,e){r.uniform1uiv(this.addr,e)}function Rx(r,e){r.uniform2uiv(this.addr,e)}function Lx(r,e){r.uniform3uiv(this.addr,e)}function Cx(r,e){r.uniform4uiv(this.addr,e)}function Px(r,e,t){let n=e.length,i=Xr(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.safeSetTexture2D(e[s]||Oc,i[s])}function Ix(r,e,t){let n=e.length,i=Xr(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture3D(e[s]||Uc,i[s])}function Dx(r,e,t){let n=e.length,i=Xr(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.safeSetTextureCube(e[s]||Hc,i[s])}function Fx(r,e,t){let n=e.length,i=Xr(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||zc,i[s])}function Nx(r){switch(r){case 5126:return gx;case 35664:return xx;case 35665:return yx;case 35666:return vx;case 35674:return _x;case 35675:return wx;case 35676:return bx;case 5124:case 35670:return Mx;case 35667:case 35671:return Sx;case 35668:case 35672:return Tx;case 35669:case 35673:return Ex;case 5125:return Ax;case 36294:return Rx;case 36295:return Lx;case 36296:return Cx;case 35678:case 36198:case 36298:case 36306:case 35682:return Px;case 35679:case 36299:case 36307:return Ix;case 35680:case 36300:case 36308:case 36293:return Dx;case 36289:case 36303:case 36311:case 36292:return Fx}}function Bx(r,e,t){this.id=r,this.addr=t,this.cache=[],this.setValue=mx(e.type)}function Xc(r,e,t){this.id=r,this.addr=t,this.cache=[],this.size=e.size,this.setValue=Nx(e.type)}Xc.prototype.updateCache=function(r){let e=this.cache;r instanceof Float32Array&&e.length!==r.length&&(this.cache=new Float32Array(r.length)),Tt(e,r)};function Yc(r){this.id=r,this.seq=[],this.map={}}Yc.prototype.setValue=function(r,e,t){let n=this.seq;for(let i=0,s=n.length;i!==s;++i){let o=n[i];o.setValue(r,e[o.id],t)}};var Ua=/(\w+)(\])?(\[|\.)?/g;function jc(r,e){r.seq.push(e),r.map[e.id]=e}function Ox(r,e,t){let n=r.name,i=n.length;for(Ua.lastIndex=0;;){let s=Ua.exec(n),o=Ua.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){jc(t,c===void 0?new Bx(a,r,e):new Xc(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new Yc(a),jc(t,u)),t=u}}}function Un(r,e){this.seq=[],this.map={};let t=r.getProgramParameter(e,35718);for(let n=0;n<t;++n){let i=r.getActiveUniform(e,n),s=r.getUniformLocation(e,i.name);Ox(i,s,this)}}Un.prototype.setValue=function(r,e,t,n){let i=this.map[e];i!==void 0&&i.setValue(r,t,n)};Un.prototype.setOptional=function(r,e,t){let n=e[t];n!==void 0&&this.setValue(r,t,n)};Un.upload=function(r,e,t,n){for(let i=0,s=e.length;i!==s;++i){let o=e[i],a=t[o.id];a.needsUpdate!==!1&&o.setValue(r,a.value,n)}};Un.seqWithValue=function(r,e){let t=[];for(let n=0,i=r.length;n!==i;++n){let s=r[n];s.id in e&&t.push(s)}return t};function Zc(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var zx=0;function Ux(r){let e=r.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function Jc(r){switch(r){case Dt:return["Linear","( value )"];case Pt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function $c(r,e,t){let n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();return n&&i===""?"":t.toUpperCase()+`

`+i+`

`+Ux(r.getShaderSource(e))}function hi(r,e){let t=Jc(e);return"vec4 "+r+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function Hx(r,e){let t=Jc(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function kx(r,e){let t;switch(e){case Rd:t="Linear";break;case Ld:t="Reinhard";break;case Cd:t="OptimizedCineon";break;case $o:t="ACESFilmic";break;case Pd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Gx(r){return[r.extensionDerivatives||r.envMapCubeUV||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ls).join(`
`)}function Vx(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Wx(r,e){let t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),o=s.name,a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Ls(r){return r!==""}function Kc(r,e){return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var qx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ha(r){return r.replace(qx,Xx)}function Xx(r,e){let t=Ue[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ha(t)}var Yx=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,jx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eh(r){return r.replace(jx,th).replace(Yx,Zx)}function Zx(r,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),th(r,e,t,n)}function th(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function nh(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Jx(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Gl?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Zo?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===cs&&(e="SHADOWMAP_TYPE_VSM"),e}function $x(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case us:case ds:e="ENVMAP_TYPE_CUBE";break;case dr:case ea:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Kx(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ds:case ea:e="ENVMAP_MODE_REFRACTION";break}return e}function Qx(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ur:e="ENVMAP_BLENDING_MULTIPLY";break;case Ed:e="ENVMAP_BLENDING_MIX";break;case Ad:e="ENVMAP_BLENDING_ADD";break}return e}function e0(r,e,t,n){let i=r.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Jx(t),c=$x(t),h=Kx(t),u=Qx(t),d=t.isWebGL2?"":Gx(t),f=Vx(s),m=i.createProgram(),x,y,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=[f].filter(Ls).join(`
`),x.length>0&&(x+=`
`),y=[d,f].filter(Ls).join(`
`),y.length>0&&(y+=`
`)):(x=[nh(t),"#define SHADER_NAME "+t.shaderName,f,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),y=[d,nh(t),"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ln?"#define TONE_MAPPING":"",t.toneMapping!==Ln?Ue.tonemapping_pars_fragment:"",t.toneMapping!==Ln?kx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.format===Wt?"#define OPAQUE":"",Ue.encodings_pars_fragment,t.map?hi("mapTexelToLinear",t.mapEncoding):"",t.matcap?hi("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?hi("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?hi("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.specularColorMap?hi("specularColorMapTexelToLinear",t.specularColorMapEncoding):"",t.sheenColorMap?hi("sheenColorMapTexelToLinear",t.sheenColorMapEncoding):"",t.lightMap?hi("lightMapTexelToLinear",t.lightMapEncoding):"",Hx("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ls).join(`
`)),o=Ha(o),o=Kc(o,t),o=Qc(o,t),a=Ha(a),a=Kc(a,t),a=Qc(a,t),o=eh(o),a=eh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,x=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",t.glslVersion===cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let g=p+x+o,w=p+y+a,v=Zc(i,35633,g),_=Zc(i,35632,w);if(i.attachShader(m,v),i.attachShader(m,_),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),r.debug.checkShaderErrors){let B=i.getProgramInfoLog(m).trim(),K=i.getShaderInfoLog(v).trim(),W=i.getShaderInfoLog(_).trim(),D=!0,S=!0;if(i.getProgramParameter(m,35714)===!1){D=!1;let b=$c(i,v,"vertex"),F=$c(i,_,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+B+`
`+b+`
`+F)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(K===""||W==="")&&(S=!1);S&&(this.diagnostics={runnable:D,programLog:B,vertexShader:{log:K,prefix:x},fragmentShader:{log:W,prefix:y}})}i.deleteShader(v),i.deleteShader(_);let L;this.getUniforms=function(){return L===void 0&&(L=new Un(i,m)),L};let I;return this.getAttributes=function(){return I===void 0&&(I=Wx(i,m)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=zx++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=v,this.fragmentShader=_,this}var t0=0,ih=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){let t=this.shaderCache;if(t.has(e)===!1){let n=new sh;t.set(e,n)}return t.get(e)}},sh=class{constructor(){this.id=t0++,this.usedTimes=0}};function n0(r,e,t,n,i,s,o){let a=new xa,l=new ih,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.floatVertexTextures,f=i.maxVertexUniforms,m=i.vertexTextures,x=i.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(S){let F=S.skeleton.bones;if(d)return 1024;{let N=Math.floor((f-20)/4),U=Math.min(N,F.length);return U<F.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+F.length+" bones. This GPU supports "+U+"."),0):U}}function g(S){let b;return S&&S.isTexture?b=S.encoding:S&&S.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),b=S.texture.encoding):b=Dt,h&&S&&S.isTexture&&S.format===gt&&S.type===dn&&S.encoding===Pt&&(b=Dt),b}function w(S,b,F,O,N){let U=O.fog,ie=S.isMeshStandardMaterial?O.environment:null,ae=(S.isMeshStandardMaterial?t:e).get(S.envMap||ie),V=y[S.type],X=N.isSkinnedMesh?p(N):0;S.precision!==null&&(x=i.getMaxPrecision(S.precision),x!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",x,"instead."));let ue,he,pe,Be;if(V){let ye=on[V];ue=ye.vertexShader,he=ye.fragmentShader}else ue=S.vertexShader,he=S.fragmentShader,l.update(S),pe=l.getVertexShaderID(S),Be=l.getFragmentShaderID(S);let Z=r.getRenderTarget(),Ce=S.alphaTest>0,we=S.clearcoat>0;return{isWebGL2:h,shaderID:V,shaderName:S.type,vertexShader:ue,fragmentShader:he,defines:S.defines,customVertexShaderID:pe,customFragmentShaderID:Be,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:x,instancing:N.isInstancedMesh===!0,instancingColor:N.isInstancedMesh===!0&&N.instanceColor!==null,supportsVertexTextures:m,outputEncoding:Z!==null?g(Z.texture):r.outputEncoding,map:!!S.map,mapEncoding:g(S.map),matcap:!!S.matcap,matcapEncoding:g(S.matcap),envMap:!!ae,envMapMode:ae&&ae.mapping,envMapEncoding:g(ae),envMapCubeUV:!!ae&&(ae.mapping===dr||ae.mapping===ea),lightMap:!!S.lightMap,lightMapEncoding:g(S.lightMap),aoMap:!!S.aoMap,emissiveMap:!!S.emissiveMap,emissiveMapEncoding:g(S.emissiveMap),bumpMap:!!S.bumpMap,normalMap:!!S.normalMap,objectSpaceNormalMap:S.normalMapType===Lf,tangentSpaceNormalMap:S.normalMapType===Cn,clearcoat:we,clearcoatMap:we&&!!S.clearcoatMap,clearcoatRoughnessMap:we&&!!S.clearcoatRoughnessMap,clearcoatNormalMap:we&&!!S.clearcoatNormalMap,displacementMap:!!S.displacementMap,roughnessMap:!!S.roughnessMap,metalnessMap:!!S.metalnessMap,specularMap:!!S.specularMap,specularIntensityMap:!!S.specularIntensityMap,specularColorMap:!!S.specularColorMap,specularColorMapEncoding:g(S.specularColorMap),alphaMap:!!S.alphaMap,alphaTest:Ce,gradientMap:!!S.gradientMap,sheen:S.sheen>0,sheenColorMap:!!S.sheenColorMap,sheenColorMapEncoding:g(S.sheenColorMap),sheenRoughnessMap:!!S.sheenRoughnessMap,transmission:S.transmission>0,transmissionMap:!!S.transmissionMap,thicknessMap:!!S.thicknessMap,combine:S.combine,vertexTangents:!!S.normalMap&&!!N.geometry&&!!N.geometry.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!N.geometry&&!!N.geometry.attributes.color&&N.geometry.attributes.color.itemSize===4,vertexUvs:!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatMap||!!S.clearcoatRoughnessMap||!!S.clearcoatNormalMap||!!S.displacementMap||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||!!S.sheenColorMap||!!S.sheenRoughnessMap,uvsVertexOnly:!(!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatNormalMap||S.transmission>0||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||S.sheen>0||!!S.sheenColorMap||!!S.sheenRoughnessMap)&&!!S.displacementMap,fog:!!U,useFog:S.fog,fogExp2:U&&U.isFogExp2,flatShading:!!S.flatShading,sizeAttenuation:S.sizeAttenuation,logarithmicDepthBuffer:u,skinning:N.isSkinnedMesh===!0&&X>0,maxBones:X,useVertexTexture:d,morphTargets:!!N.geometry&&!!N.geometry.morphAttributes.position,morphNormals:!!N.geometry&&!!N.geometry.morphAttributes.normal,morphTargetsCount:!!N.geometry&&!!N.geometry.morphAttributes.position?N.geometry.morphAttributes.position.length:0,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,format:S.format,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:S.toneMapped?r.toneMapping:Ln,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===xt,flipSided:S.side===st,depthPacking:S.depthPacking!==void 0?S.depthPacking:!1,index0AttributeName:S.index0AttributeName,extensionDerivatives:S.extensions&&S.extensions.derivatives,extensionFragDepth:S.extensions&&S.extensions.fragDepth,extensionDrawBuffers:S.extensions&&S.extensions.drawBuffers,extensionShaderTextureLOD:S.extensions&&S.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function v(S){let b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(let F in S.defines)b.push(F),b.push(S.defines[F]);return S.isRawShaderMaterial===!1&&(_(b,S),L(b,S),b.push(r.outputEncoding)),b.push(S.customProgramCacheKey),b.join()}function _(S,b){S.push(b.precision),S.push(b.outputEncoding),S.push(b.mapEncoding),S.push(b.matcapEncoding),S.push(b.envMapMode),S.push(b.envMapEncoding),S.push(b.lightMapEncoding),S.push(b.emissiveMapEncoding),S.push(b.combine),S.push(b.vertexUvs),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.maxBones),S.push(b.morphTargetsCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.format),S.push(b.specularColorMapEncoding),S.push(b.sheenColorMapEncoding)}function L(S,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.map&&a.enable(4),b.matcap&&a.enable(5),b.envMap&&a.enable(6),b.envMapCubeUV&&a.enable(7),b.lightMap&&a.enable(8),b.aoMap&&a.enable(9),b.emissiveMap&&a.enable(10),b.bumpMap&&a.enable(11),b.normalMap&&a.enable(12),b.objectSpaceNormalMap&&a.enable(13),b.tangentSpaceNormalMap&&a.enable(14),b.clearcoat&&a.enable(15),b.clearcoatMap&&a.enable(16),b.clearcoatRoughnessMap&&a.enable(17),b.clearcoatNormalMap&&a.enable(18),b.displacementMap&&a.enable(19),b.specularMap&&a.enable(20),b.roughnessMap&&a.enable(21),b.metalnessMap&&a.enable(22),b.gradientMap&&a.enable(23),b.alphaMap&&a.enable(24),b.alphaTest&&a.enable(25),b.vertexColors&&a.enable(26),b.vertexAlphas&&a.enable(27),b.vertexUvs&&a.enable(28),b.vertexTangents&&a.enable(29),b.uvsVertexOnly&&a.enable(30),b.fog&&a.enable(31),S.push(a.mask),a.disableAll(),b.useFog&&a.enable(0),b.flatShading&&a.enable(1),b.logarithmicDepthBuffer&&a.enable(2),b.skinning&&a.enable(3),b.useVertexTexture&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.premultipliedAlpha&&a.enable(7),b.shadowMapEnabled&&a.enable(8),b.physicallyCorrectLights&&a.enable(9),b.doubleSided&&a.enable(10),b.flipSided&&a.enable(11),b.depthPacking&&a.enable(12),b.dithering&&a.enable(13),b.specularIntensityMap&&a.enable(14),b.specularColorMap&&a.enable(15),b.transmission&&a.enable(16),b.transmissionMap&&a.enable(17),b.thicknessMap&&a.enable(18),b.sheen&&a.enable(19),b.sheenColorMap&&a.enable(20),b.sheenRoughnessMap&&a.enable(21),S.push(a.mask)}function I(S){let b=y[S.type],F;if(b){let O=on[b];F=tp.clone(O.uniforms)}else F=S.uniforms;return F}function B(S,b){let F;for(let O=0,N=c.length;O<N;O++){let U=c[O];if(U.cacheKey===b){F=U,++F.usedTimes;break}}return F===void 0&&(F=new e0(r,b,S,s),c.push(F)),F}function K(S){if(--S.usedTimes===0){let b=c.indexOf(S);c[b]=c[c.length-1],c.pop(),S.destroy()}}function W(S){l.remove(S)}function D(){l.dispose()}return{getParameters:w,getProgramCacheKey:v,getUniforms:I,acquireProgram:B,releaseProgram:K,releaseShaderCache:W,programs:c,dispose:D}}function i0(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function s0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function rh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function oh(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,m,x,y){let p=r[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:x,group:y},r[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=x,p.group=y),e++,p}function a(u,d,f,m,x,y){let p=o(u,d,f,m,x,y);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(u,d,f,m,x,y){let p=o(u,d,f,m,x,y);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||s0),n.length>1&&n.sort(d||rh),i.length>1&&i.sort(d||rh)}function h(){for(let u=e,d=r.length;u<d;u++){let f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function r0(){let r=new WeakMap;function e(n,i){let s;return r.has(n)===!1?(s=new oh,r.set(n,[s])):i>=r.get(n).length?(s=new oh,r.get(n).push(s)):s=r.get(n)[i],s}function t(){r=new WeakMap}return{get:e,dispose:t}}function o0(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new te};break;case"SpotLight":t={position:new T,direction:new T,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new te,groundColor:new te};break;case"RectAreaLight":t={color:new te,position:new T,halfWidth:new T,halfHeight:new T};break}return r[e.id]=t,t}}}function a0(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var l0=0;function c0(r,e){return(e.castShadow?1:0)-(r.castShadow?1:0)}function h0(r,e){let t=new o0,n=a0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let h=0;h<9;h++)i.probe.push(new T);let s=new T,o=new me,a=new me;function l(h,u){let d=0,f=0,m=0;for(let K=0;K<9;K++)i.probe[K].set(0,0,0);let x=0,y=0,p=0,g=0,w=0,v=0,_=0,L=0;h.sort(c0);let I=u!==!0?Math.PI:1;for(let K=0,W=h.length;K<W;K++){let D=h[K],S=D.color,b=D.intensity,F=D.distance,O=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=S.r*b*I,f+=S.g*b*I,m+=S.b*b*I;else if(D.isLightProbe)for(let N=0;N<9;N++)i.probe[N].addScaledVector(D.sh.coefficients[N],b);else if(D.isDirectionalLight){let N=t.get(D);if(N.color.copy(D.color).multiplyScalar(D.intensity*I),D.castShadow){let U=D.shadow,ie=n.get(D);ie.shadowBias=U.bias,ie.shadowNormalBias=U.normalBias,ie.shadowRadius=U.radius,ie.shadowMapSize=U.mapSize,i.directionalShadow[x]=ie,i.directionalShadowMap[x]=O,i.directionalShadowMatrix[x]=D.shadow.matrix,v++}i.directional[x]=N,x++}else if(D.isSpotLight){let N=t.get(D);if(N.position.setFromMatrixPosition(D.matrixWorld),N.color.copy(S).multiplyScalar(b*I),N.distance=F,N.coneCos=Math.cos(D.angle),N.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),N.decay=D.decay,D.castShadow){let U=D.shadow,ie=n.get(D);ie.shadowBias=U.bias,ie.shadowNormalBias=U.normalBias,ie.shadowRadius=U.radius,ie.shadowMapSize=U.mapSize,i.spotShadow[p]=ie,i.spotShadowMap[p]=O,i.spotShadowMatrix[p]=D.shadow.matrix,L++}i.spot[p]=N,p++}else if(D.isRectAreaLight){let N=t.get(D);N.color.copy(S).multiplyScalar(b),N.halfWidth.set(D.width*.5,0,0),N.halfHeight.set(0,D.height*.5,0),i.rectArea[g]=N,g++}else if(D.isPointLight){let N=t.get(D);if(N.color.copy(D.color).multiplyScalar(D.intensity*I),N.distance=D.distance,N.decay=D.decay,D.castShadow){let U=D.shadow,ie=n.get(D);ie.shadowBias=U.bias,ie.shadowNormalBias=U.normalBias,ie.shadowRadius=U.radius,ie.shadowMapSize=U.mapSize,ie.shadowCameraNear=U.camera.near,ie.shadowCameraFar=U.camera.far,i.pointShadow[y]=ie,i.pointShadowMap[y]=O,i.pointShadowMatrix[y]=D.shadow.matrix,_++}i.point[y]=N,y++}else if(D.isHemisphereLight){let N=t.get(D);N.skyColor.copy(D.color).multiplyScalar(b*I),N.groundColor.copy(D.groundColor).multiplyScalar(b*I),i.hemi[w]=N,w++}}g>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=m;let B=i.hash;(B.directionalLength!==x||B.pointLength!==y||B.spotLength!==p||B.rectAreaLength!==g||B.hemiLength!==w||B.numDirectionalShadows!==v||B.numPointShadows!==_||B.numSpotShadows!==L)&&(i.directional.length=x,i.spot.length=p,i.rectArea.length=g,i.point.length=y,i.hemi.length=w,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotShadowMatrix.length=L,B.directionalLength=x,B.pointLength=y,B.spotLength=p,B.rectAreaLength=g,B.hemiLength=w,B.numDirectionalShadows=v,B.numPointShadows=_,B.numSpotShadows=L,i.version=l0++)}function c(h,u){let d=0,f=0,m=0,x=0,y=0,p=u.matrixWorldInverse;for(let g=0,w=h.length;g<w;g++){let v=h[g];if(v.isDirectionalLight){let _=i.directional[d];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),d++}else if(v.isSpotLight){let _=i.spot[m];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),m++}else if(v.isRectAreaLight){let _=i.rectArea[x];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(p),a.identity(),o.copy(v.matrixWorld),o.premultiply(p),a.extractRotation(o),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){let _=i.point[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let _=i.hemi[y];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(p),_.direction.normalize(),y++}}}return{setup:l,setupView:c,state:i}}function ah(r,e){let t=new h0(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function u0(r,e){let t=new WeakMap;function n(s,o=0){let a;return t.has(s)===!1?(a=new ah(r,e),t.set(s,[a])):o>=t.get(s).length?(a=new ah(r,e),t.get(s).push(a)):a=t.get(s)[o],a}function i(){t=new WeakMap}return{get:n,dispose:i}}var ka=class extends ut{constructor(e){super();this.type="MeshDepthMaterial",this.depthPacking=Af,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};ka.prototype.isMeshDepthMaterial=!0;var Ga=class extends ut{constructor(e){super();this.type="MeshDistanceMaterial",this.referencePosition=new T,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Ga.prototype.isMeshDistanceMaterial=!0;var d0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,f0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function lh(r,e,t){let n=new Es,i=new q,s=new q,o=new Ye,a=new ka({depthPacking:Rf}),l=new Ga,c={},h=t.maxTextureSize,u={0:st,1:un,2:xt},d=new pt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new q},radius:{value:4}},vertexShader:d0,fragmentShader:f0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new Ne;m.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ie(m,d),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gl,this.render=function(v,_,L){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||v.length===0)return;let I=r.getRenderTarget(),B=r.getActiveCubeFace(),K=r.getActiveMipmapLevel(),W=r.state;W.setBlending(An),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);for(let D=0,S=v.length;D<S;D++){let b=v[D],F=b.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",b,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);let O=F.getFrameExtents();if(i.multiply(O),s.copy(F.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/O.x),i.x=s.x*O.x,F.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/O.y),i.y=s.y*O.y,F.mapSize.y=s.y)),F.map===null&&!F.isPointLightShadow&&this.type===cs){let U={minFilter:Ke,magFilter:Ke,format:gt};F.map=new Rt(i.x,i.y,U),F.map.texture.name=b.name+".shadowMap",F.mapPass=new Rt(i.x,i.y,U),F.camera.updateProjectionMatrix()}if(F.map===null){let U={minFilter:tt,magFilter:tt,format:gt};F.map=new Rt(i.x,i.y,U),F.map.texture.name=b.name+".shadowMap",F.camera.updateProjectionMatrix()}r.setRenderTarget(F.map),r.clear();let N=F.getViewportCount();for(let U=0;U<N;U++){let ie=F.getViewport(U);o.set(s.x*ie.x,s.y*ie.y,s.x*ie.z,s.y*ie.w),W.viewport(o),F.updateMatrices(b,U),n=F.getFrustum(),w(_,L,F.camera,b,this.type)}!F.isPointLightShadow&&this.type===cs&&p(F,L),F.needsUpdate=!1}y.needsUpdate=!1,r.setRenderTarget(I,B,K)};function p(v,_){let L=e.update(x);d.defines.VSM_SAMPLES!==v.blurSamples&&(d.defines.VSM_SAMPLES=v.blurSamples,f.defines.VSM_SAMPLES=v.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),d.uniforms.shadow_pass.value=v.map.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,r.setRenderTarget(v.mapPass),r.clear(),r.renderBufferDirect(_,null,L,d,x,null),f.uniforms.shadow_pass.value=v.mapPass.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,r.setRenderTarget(v.map),r.clear(),r.renderBufferDirect(_,null,L,f,x,null)}function g(v,_,L,I,B,K,W){let D=null,S=I.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(S!==void 0?D=S:D=I.isPointLight===!0?l:a,r.localClippingEnabled&&L.clipShadows===!0&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0){let b=D.uuid,F=L.uuid,O=c[b];O===void 0&&(O={},c[b]=O);let N=O[F];N===void 0&&(N=D.clone(),O[F]=N),D=N}return D.visible=L.visible,D.wireframe=L.wireframe,W===cs?D.side=L.shadowSide!==null?L.shadowSide:L.side:D.side=L.shadowSide!==null?L.shadowSide:u[L.side],D.alphaMap=L.alphaMap,D.alphaTest=L.alphaTest,D.clipShadows=L.clipShadows,D.clippingPlanes=L.clippingPlanes,D.clipIntersection=L.clipIntersection,D.displacementMap=L.displacementMap,D.displacementScale=L.displacementScale,D.displacementBias=L.displacementBias,D.wireframeLinewidth=L.wireframeLinewidth,D.linewidth=L.linewidth,I.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(I.matrixWorld),D.nearDistance=B,D.farDistance=K),D}function w(v,_,L,I,B){if(v.visible===!1)return;if(v.layers.test(_.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&B===cs)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,v.matrixWorld);let D=e.update(v),S=v.material;if(Array.isArray(S)){let b=D.groups;for(let F=0,O=b.length;F<O;F++){let N=b[F],U=S[N.materialIndex];if(U&&U.visible){let ie=g(v,D,U,I,L.near,L.far,B);r.renderBufferDirect(L,null,D,ie,v,N)}}}else if(S.visible){let b=g(v,D,S,I,L.near,L.far,B);r.renderBufferDirect(L,null,D,b,v,null)}}let W=v.children;for(let D=0,S=W.length;D<S;D++)w(W[D],_,L,I,B)}}function p0(r,e,t){let n=t.isWebGL2;function i(){let R=!1,$=new Ye,J=null,_e=new Ye(0,0,0,0);return{setMask:function(fe){J!==fe&&!R&&(r.colorMask(fe,fe,fe,fe),J=fe)},setLocked:function(fe){R=fe},setClear:function(fe,Ae,le,be,ke){ke===!0&&(fe*=be,Ae*=be,le*=be),$.set(fe,Ae,le,be),_e.equals($)===!1&&(r.clearColor(fe,Ae,le,be),_e.copy($))},reset:function(){R=!1,J=null,_e.set(-1,0,0,0)}}}function s(){let R=!1,$=null,J=null,_e=null;return{setTest:function(fe){fe?he(2929):pe(2929)},setMask:function(fe){$!==fe&&!R&&(r.depthMask(fe),$=fe)},setFunc:function(fe){if(J!==fe){if(fe)switch(fe){case vd:r.depthFunc(512);break;case _d:r.depthFunc(519);break;case wd:r.depthFunc(513);break;case Jo:r.depthFunc(515);break;case bd:r.depthFunc(514);break;case Md:r.depthFunc(518);break;case Sd:r.depthFunc(516);break;case Td:r.depthFunc(517);break;default:r.depthFunc(515)}else r.depthFunc(515);J=fe}},setLocked:function(fe){R=fe},setClear:function(fe){_e!==fe&&(r.clearDepth(fe),_e=fe)},reset:function(){R=!1,$=null,J=null,_e=null}}}function o(){let R=!1,$=null,J=null,_e=null,fe=null,Ae=null,le=null,be=null,ke=null;return{setTest:function(Je){R||(Je?he(2960):pe(2960))},setMask:function(Je){$!==Je&&!R&&(r.stencilMask(Je),$=Je)},setFunc:function(Je,Kt,Qt){(J!==Je||_e!==Kt||fe!==Qt)&&(r.stencilFunc(Je,Kt,Qt),J=Je,_e=Kt,fe=Qt)},setOp:function(Je,Kt,Qt){(Ae!==Je||le!==Kt||be!==Qt)&&(r.stencilOp(Je,Kt,Qt),Ae=Je,le=Kt,be=Qt)},setLocked:function(Je){R=Je},setClear:function(Je){ke!==Je&&(r.clearStencil(Je),ke=Je)},reset:function(){R=!1,$=null,J=null,_e=null,fe=null,Ae=null,le=null,be=null,ke=null}}}let a=new i,l=new s,c=new o,h={},u={},d=null,f=!1,m=null,x=null,y=null,p=null,g=null,w=null,v=null,_=!1,L=null,I=null,B=null,K=null,W=null,D=r.getParameter(35661),S=!1,b=0,F=r.getParameter(7938);F.indexOf("WebGL")!==-1?(b=parseFloat(/^WebGL (\d)/.exec(F)[1]),S=b>=1):F.indexOf("OpenGL ES")!==-1&&(b=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),S=b>=2);let O=null,N={},U=r.getParameter(3088),ie=r.getParameter(2978),ae=new Ye().fromArray(U),V=new Ye().fromArray(ie);function X(R,$,J){let _e=new Uint8Array(4),fe=r.createTexture();r.bindTexture(R,fe),r.texParameteri(R,10241,9728),r.texParameteri(R,10240,9728);for(let Ae=0;Ae<J;Ae++)r.texImage2D($+Ae,0,6408,1,1,0,6408,5121,_e);return fe}let ue={};ue[3553]=X(3553,3553,1),ue[34067]=X(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),he(2929),l.setFunc(Jo),He(!1),G(kl),he(2884),ge(An);function he(R){h[R]!==!0&&(r.enable(R),h[R]=!0)}function pe(R){h[R]!==!1&&(r.disable(R),h[R]=!1)}function Be(R,$){return u[R]!==$?(r.bindFramebuffer(R,$),u[R]=$,n&&(R===36009&&(u[36160]=$),R===36160&&(u[36009]=$)),!0):!1}function Z(R){return d!==R?(r.useProgram(R),d=R,!0):!1}let Ce={[bi]:32774,[ld]:32778,[cd]:32779};if(n)Ce[Xl]=32775,Ce[Yl]=32776;else{let R=e.get("EXT_blend_minmax");R!==null&&(Ce[Xl]=R.MIN_EXT,Ce[Yl]=R.MAX_EXT)}let we={[hd]:0,[ud]:1,[dd]:768,[jl]:770,[yd]:776,[gd]:774,[pd]:772,[fd]:769,[Zl]:771,[xd]:775,[md]:773};function ge(R,$,J,_e,fe,Ae,le,be){if(R===An){f===!0&&(pe(3042),f=!1);return}if(f===!1&&(he(3042),f=!0),R!==ad){if(R!==m||be!==_){if((x!==bi||g!==bi)&&(r.blendEquation(32774),x=bi,g=bi),be)switch(R){case hs:r.blendFuncSeparate(1,771,1,771);break;case Rn:r.blendFunc(1,1);break;case Wl:r.blendFuncSeparate(0,0,769,771);break;case ql:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case hs:r.blendFuncSeparate(770,771,1,771);break;case Rn:r.blendFunc(770,1);break;case Wl:r.blendFunc(0,769);break;case ql:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}y=null,p=null,w=null,v=null,m=R,_=be}return}fe=fe||$,Ae=Ae||J,le=le||_e,($!==x||fe!==g)&&(r.blendEquationSeparate(Ce[$],Ce[fe]),x=$,g=fe),(J!==y||_e!==p||Ae!==w||le!==v)&&(r.blendFuncSeparate(we[J],we[_e],we[Ae],we[le]),y=J,p=_e,w=Ae,v=le),m=R,_=null}function ye(R,$){R.side===xt?pe(2884):he(2884);let J=R.side===st;$&&(J=!J),He(J),R.blending===hs&&R.transparent===!1?ge(An):ge(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);let _e=R.stencilWrite;c.setTest(_e),_e&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),se(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?he(32926):pe(32926)}function He(R){L!==R&&(R?r.frontFace(2304):r.frontFace(2305),L=R)}function G(R){R!==rd?(he(2884),R!==I&&(R===kl?r.cullFace(1029):R===od?r.cullFace(1028):r.cullFace(1032))):pe(2884),I=R}function ne(R){R!==B&&(S&&r.lineWidth(R),B=R)}function se(R,$,J){R?(he(32823),(K!==$||W!==J)&&(r.polygonOffset($,J),K=$,W=J)):pe(32823)}function de(R){R?he(3089):pe(3089)}function re(R){R===void 0&&(R=33984+D-1),O!==R&&(r.activeTexture(R),O=R)}function Te(R,$){O===null&&re();let J=N[O];J===void 0&&(J={type:void 0,texture:void 0},N[O]=J),(J.type!==R||J.texture!==$)&&(r.bindTexture(R,$||ue[R]),J.type=R,J.texture=$)}function Ee(){let R=N[O];R!==void 0&&R.type!==void 0&&(r.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function De(){try{r.compressedTexImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ze(){try{r.texSubImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function C(){try{r.texSubImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function E(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function j(){try{r.texStorage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ee(){try{r.texStorage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function oe(){try{r.texImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Q(){try{r.texImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Se(R){ae.equals(R)===!1&&(r.scissor(R.x,R.y,R.z,R.w),ae.copy(R))}function ve(R){V.equals(R)===!1&&(r.viewport(R.x,R.y,R.z,R.w),V.copy(R))}function P(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},O=null,N={},u={},d=null,f=!1,m=null,x=null,y=null,p=null,g=null,w=null,v=null,_=!1,L=null,I=null,B=null,K=null,W=null,ae.set(0,0,r.canvas.width,r.canvas.height),V.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:he,disable:pe,bindFramebuffer:Be,useProgram:Z,setBlending:ge,setMaterial:ye,setFlipSided:He,setCullFace:G,setLineWidth:ne,setPolygonOffset:se,setScissorTest:de,activeTexture:re,bindTexture:Te,unbindTexture:Ee,compressedTexImage2D:De,texImage2D:oe,texImage3D:Q,texStorage2D:j,texStorage3D:ee,texSubImage2D:Ze,texSubImage3D:C,compressedTexSubImage2D:E,scissor:Se,viewport:ve,reset:P}}function m0(r,e,t,n,i,s,o){let a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):void 0,m=new WeakMap,x,y=!1;try{y=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,E){return y?new OffscreenCanvas(C,E):vr("canvas")}function g(C,E,j,ee){let oe=1;if((C.width>ee||C.height>ee)&&(oe=ee/Math.max(C.width,C.height)),oe<1||E===!0)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap){let Q=E?uc:Math.floor,Se=Q(oe*C.width),ve=Q(oe*C.height);x===void 0&&(x=p(Se,ve));let P=j?p(Se,ve):x;return P.width=Se,P.height=ve,P.getContext("2d").drawImage(C,0,0,Se,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Se+"x"+ve+")."),P}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function w(C){return la(C.width)&&la(C.height)}function v(C){return a?!1:C.wrapS!==At||C.wrapT!==At||C.minFilter!==tt&&C.minFilter!==Ke}function _(C,E){return C.generateMipmaps&&E&&C.minFilter!==tt&&C.minFilter!==Ke}function L(C){r.generateMipmap(C)}function I(C,E,j,ee){if(a===!1)return E;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let oe=E;return E===6403&&(j===5126&&(oe=33326),j===5131&&(oe=33325),j===5121&&(oe=33321)),E===6407&&(j===5126&&(oe=34837),j===5131&&(oe=34843),j===5121&&(oe=32849)),E===6408&&(j===5126&&(oe=34836),j===5131&&(oe=34842),j===5121&&(oe=ee===Pt?35907:32856)),(oe===33325||oe===33326||oe===34842||oe===34836)&&e.get("EXT_color_buffer_float"),oe}function B(C,E,j){return _(C,j)===!0||C.isFramebufferTexture&&C.minFilter!==tt&&C.minFilter!==Ke?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function K(C){return C===tt||C===fr||C===pr?9728:9729}function W(C){let E=C.target;E.removeEventListener("dispose",W),S(E),E.isVideoTexture&&m.delete(E),o.memory.textures--}function D(C){let E=C.target;E.removeEventListener("dispose",D),b(E)}function S(C){let E=n.get(C);E.__webglInit!==void 0&&(r.deleteTexture(E.__webglTexture),n.remove(C))}function b(C){let E=C.texture,j=n.get(C),ee=n.get(E);if(!!C){if(ee.__webglTexture!==void 0&&(r.deleteTexture(ee.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++)r.deleteFramebuffer(j.__webglFramebuffer[oe]),j.__webglDepthbuffer&&r.deleteRenderbuffer(j.__webglDepthbuffer[oe]);else r.deleteFramebuffer(j.__webglFramebuffer),j.__webglDepthbuffer&&r.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&r.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer&&r.deleteRenderbuffer(j.__webglColorRenderbuffer),j.__webglDepthRenderbuffer&&r.deleteRenderbuffer(j.__webglDepthRenderbuffer);if(C.isWebGLMultipleRenderTargets)for(let oe=0,Q=E.length;oe<Q;oe++){let Se=n.get(E[oe]);Se.__webglTexture&&(r.deleteTexture(Se.__webglTexture),o.memory.textures--),n.remove(E[oe])}n.remove(E),n.remove(C)}}let F=0;function O(){F=0}function N(){let C=F;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),F+=1,C}function U(C,E){let j=n.get(C);if(C.isVideoTexture&&re(C),C.version>0&&j.__version!==C.version){let ee=C.image;if(ee===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Be(j,C,E);return}}t.activeTexture(33984+E),t.bindTexture(3553,j.__webglTexture)}function ie(C,E){let j=n.get(C);if(C.version>0&&j.__version!==C.version){Be(j,C,E);return}t.activeTexture(33984+E),t.bindTexture(35866,j.__webglTexture)}function ae(C,E){let j=n.get(C);if(C.version>0&&j.__version!==C.version){Be(j,C,E);return}t.activeTexture(33984+E),t.bindTexture(32879,j.__webglTexture)}function V(C,E){let j=n.get(C);if(C.version>0&&j.__version!==C.version){Z(j,C,E);return}t.activeTexture(33984+E),t.bindTexture(34067,j.__webglTexture)}let X={[Qn]:10497,[At]:33071,[fs]:33648},ue={[tt]:9728,[fr]:9984,[pr]:9986,[Ke]:9729,[ta]:9985,[ei]:9987};function he(C,E,j){if(j?(r.texParameteri(C,10242,X[E.wrapS]),r.texParameteri(C,10243,X[E.wrapT]),(C===32879||C===35866)&&r.texParameteri(C,32882,X[E.wrapR]),r.texParameteri(C,10240,ue[E.magFilter]),r.texParameteri(C,10241,ue[E.minFilter])):(r.texParameteri(C,10242,33071),r.texParameteri(C,10243,33071),(C===32879||C===35866)&&r.texParameteri(C,32882,33071),(E.wrapS!==At||E.wrapT!==At)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,10240,K(E.magFilter)),r.texParameteri(C,10241,K(E.minFilter)),E.minFilter!==tt&&E.minFilter!==Ke&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){let ee=e.get("EXT_texture_filter_anisotropic");if(E.type===fn&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===ti&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(r.texParameterf(C,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function pe(C,E){C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",W),C.__webglTexture=r.createTexture(),o.memory.textures++)}function Be(C,E,j){let ee=3553;E.isDataTexture2DArray&&(ee=35866),E.isDataTexture3D&&(ee=32879),pe(C,E),t.activeTexture(33984+j),t.bindTexture(ee,C.__webglTexture),r.pixelStorei(37440,E.flipY),r.pixelStorei(37441,E.premultiplyAlpha),r.pixelStorei(3317,E.unpackAlignment),r.pixelStorei(37443,0);let oe=v(E)&&w(E.image)===!1,Q=g(E.image,oe,!1,h),Se=w(Q)||a,ve=s.convert(E.format),P=s.convert(E.type),R=I(E.internalFormat,ve,P,E.encoding);he(ee,E,Se);let $,J=E.mipmaps,_e=a&&E.isVideoTexture!==!0,fe=C.__version===void 0,Ae=B(E,Q,Se);if(E.isDepthTexture)R=6402,a?E.type===fn?R=36012:E.type===mr?R=33190:E.type===Mi?R=35056:R=33189:E.type===fn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===ni&&R===6402&&E.type!==ps&&E.type!==mr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=ps,P=s.convert(E.type)),E.format===Si&&R===6402&&(R=34041,E.type!==Mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Mi,P=s.convert(E.type))),_e&&fe?t.texStorage2D(3553,1,R,Q.width,Q.height):t.texImage2D(3553,0,R,Q.width,Q.height,0,ve,P,null);else if(E.isDataTexture)if(J.length>0&&Se){_e&&fe&&t.texStorage2D(3553,Ae,R,J[0].width,J[0].height);for(let le=0,be=J.length;le<be;le++)$=J[le],_e?t.texSubImage2D(3553,0,0,0,$.width,$.height,ve,P,$.data):t.texImage2D(3553,le,R,$.width,$.height,0,ve,P,$.data);E.generateMipmaps=!1}else _e?(fe&&t.texStorage2D(3553,Ae,R,Q.width,Q.height),t.texSubImage2D(3553,0,0,0,Q.width,Q.height,ve,P,Q.data)):t.texImage2D(3553,0,R,Q.width,Q.height,0,ve,P,Q.data);else if(E.isCompressedTexture){_e&&fe&&t.texStorage2D(3553,Ae,R,J[0].width,J[0].height);for(let le=0,be=J.length;le<be;le++)$=J[le],E.format!==gt&&E.format!==Wt?ve!==null?_e?t.compressedTexSubImage2D(3553,le,0,0,$.width,$.height,ve,$.data):t.compressedTexImage2D(3553,le,R,$.width,$.height,0,$.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_e?t.texSubImage2D(3553,le,0,0,$.width,$.height,ve,P,$.data):t.texImage2D(3553,le,R,$.width,$.height,0,ve,P,$.data)}else if(E.isDataTexture2DArray)_e?(fe&&t.texStorage3D(35866,Ae,R,Q.width,Q.height,Q.depth),t.texSubImage3D(35866,0,0,0,0,Q.width,Q.height,Q.depth,ve,P,Q.data)):t.texImage3D(35866,0,R,Q.width,Q.height,Q.depth,0,ve,P,Q.data);else if(E.isDataTexture3D)_e?(fe&&t.texStorage3D(32879,Ae,R,Q.width,Q.height,Q.depth),t.texSubImage3D(32879,0,0,0,0,Q.width,Q.height,Q.depth,ve,P,Q.data)):t.texImage3D(32879,0,R,Q.width,Q.height,Q.depth,0,ve,P,Q.data);else if(E.isFramebufferTexture)_e&&fe?t.texStorage2D(3553,Ae,R,Q.width,Q.height):t.texImage2D(3553,0,R,Q.width,Q.height,0,ve,P,null);else if(J.length>0&&Se){_e&&fe&&t.texStorage2D(3553,Ae,R,J[0].width,J[0].height);for(let le=0,be=J.length;le<be;le++)$=J[le],_e?t.texSubImage2D(3553,le,0,0,ve,P,$):t.texImage2D(3553,le,R,ve,P,$);E.generateMipmaps=!1}else _e?(fe&&t.texStorage2D(3553,Ae,R,Q.width,Q.height),t.texSubImage2D(3553,0,0,0,ve,P,Q)):t.texImage2D(3553,0,R,ve,P,Q);_(E,Se)&&L(ee),C.__version=E.version,E.onUpdate&&E.onUpdate(E)}function Z(C,E,j){if(E.image.length!==6)return;pe(C,E),t.activeTexture(33984+j),t.bindTexture(34067,C.__webglTexture),r.pixelStorei(37440,E.flipY),r.pixelStorei(37441,E.premultiplyAlpha),r.pixelStorei(3317,E.unpackAlignment),r.pixelStorei(37443,0);let ee=E&&(E.isCompressedTexture||E.image[0].isCompressedTexture),oe=E.image[0]&&E.image[0].isDataTexture,Q=[];for(let le=0;le<6;le++)!ee&&!oe?Q[le]=g(E.image[le],!1,!0,c):Q[le]=oe?E.image[le].image:E.image[le];let Se=Q[0],ve=w(Se)||a,P=s.convert(E.format),R=s.convert(E.type),$=I(E.internalFormat,P,R,E.encoding),J=a&&E.isVideoTexture!==!0,_e=C.__version===void 0,fe=B(E,Se,ve);he(34067,E,ve);let Ae;if(ee){J&&_e&&t.texStorage2D(34067,fe,$,Se.width,Se.height);for(let le=0;le<6;le++){Ae=Q[le].mipmaps;for(let be=0;be<Ae.length;be++){let ke=Ae[be];E.format!==gt&&E.format!==Wt?P!==null?J?t.compressedTexSubImage2D(34069+le,be,0,0,ke.width,ke.height,P,ke.data):t.compressedTexImage2D(34069+le,be,$,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?t.texSubImage2D(34069+le,be,0,0,ke.width,ke.height,P,R,ke.data):t.texImage2D(34069+le,be,$,ke.width,ke.height,0,P,R,ke.data)}}}else{Ae=E.mipmaps,J&&_e&&(Ae.length>0&&fe++,t.texStorage2D(34067,fe,$,Q[0].width,Q[0].height));for(let le=0;le<6;le++)if(oe){J?t.texSubImage2D(34069+le,0,0,0,Q[le].width,Q[le].height,P,R,Q[le].data):t.texImage2D(34069+le,0,$,Q[le].width,Q[le].height,0,P,R,Q[le].data);for(let be=0;be<Ae.length;be++){let Je=Ae[be].image[le].image;J?t.texSubImage2D(34069+le,be+1,0,0,Je.width,Je.height,P,R,Je.data):t.texImage2D(34069+le,be+1,$,Je.width,Je.height,0,P,R,Je.data)}}else{J?t.texSubImage2D(34069+le,0,0,0,P,R,Q[le]):t.texImage2D(34069+le,0,$,P,R,Q[le]);for(let be=0;be<Ae.length;be++){let ke=Ae[be];J?t.texSubImage2D(34069+le,be+1,0,0,P,R,ke.image[le]):t.texImage2D(34069+le,be+1,$,P,R,ke.image[le])}}}_(E,ve)&&L(34067),C.__version=E.version,E.onUpdate&&E.onUpdate(E)}function Ce(C,E,j,ee,oe){let Q=s.convert(j.format),Se=s.convert(j.type),ve=I(j.internalFormat,Q,Se,j.encoding);n.get(E).__hasExternalTextures||(oe===32879||oe===35866?t.texImage3D(oe,0,ve,E.width,E.height,E.depth,0,Q,Se,null):t.texImage2D(oe,0,ve,E.width,E.height,0,Q,Se,null)),t.bindFramebuffer(36160,C),E.useRenderToTexture?f.framebufferTexture2DMultisampleEXT(36160,ee,oe,n.get(j).__webglTexture,0,de(E)):r.framebufferTexture2D(36160,ee,oe,n.get(j).__webglTexture,0),t.bindFramebuffer(36160,null)}function we(C,E,j){if(r.bindRenderbuffer(36161,C),E.depthBuffer&&!E.stencilBuffer){let ee=33189;if(j||E.useRenderToTexture){let oe=E.depthTexture;oe&&oe.isDepthTexture&&(oe.type===fn?ee=36012:oe.type===mr&&(ee=33190));let Q=de(E);E.useRenderToTexture?f.renderbufferStorageMultisampleEXT(36161,Q,ee,E.width,E.height):r.renderbufferStorageMultisample(36161,Q,ee,E.width,E.height)}else r.renderbufferStorage(36161,ee,E.width,E.height);r.framebufferRenderbuffer(36160,36096,36161,C)}else if(E.depthBuffer&&E.stencilBuffer){let ee=de(E);j&&E.useRenderbuffer?r.renderbufferStorageMultisample(36161,ee,35056,E.width,E.height):E.useRenderToTexture?f.renderbufferStorageMultisampleEXT(36161,ee,35056,E.width,E.height):r.renderbufferStorage(36161,34041,E.width,E.height),r.framebufferRenderbuffer(36160,33306,36161,C)}else{let ee=E.isWebGLMultipleRenderTargets===!0?E.texture[0]:E.texture,oe=s.convert(ee.format),Q=s.convert(ee.type),Se=I(ee.internalFormat,oe,Q,ee.encoding),ve=de(E);j&&E.useRenderbuffer?r.renderbufferStorageMultisample(36161,ve,Se,E.width,E.height):E.useRenderToTexture?f.renderbufferStorageMultisampleEXT(36161,ve,Se,E.width,E.height):r.renderbufferStorage(36161,Se,E.width,E.height)}r.bindRenderbuffer(36161,null)}function ge(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),U(E.depthTexture,0);let ee=n.get(E.depthTexture).__webglTexture,oe=de(E);if(E.depthTexture.format===ni)E.useRenderToTexture?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,oe):r.framebufferTexture2D(36160,36096,3553,ee,0);else if(E.depthTexture.format===Si)E.useRenderToTexture?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,oe):r.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function ye(C){let E=n.get(C),j=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");ge(E.__webglFramebuffer,C)}else if(j){E.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(36160,E.__webglFramebuffer[ee]),E.__webglDepthbuffer[ee]=r.createRenderbuffer(),we(E.__webglDepthbuffer[ee],C,!1)}else t.bindFramebuffer(36160,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),we(E.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function He(C,E,j){let ee=n.get(C);E!==void 0&&Ce(ee.__webglFramebuffer,C,C.texture,36064,3553),j!==void 0&&ye(C)}function G(C){let E=C.texture,j=n.get(C),ee=n.get(E);C.addEventListener("dispose",D),C.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture()),ee.__version=E.version,o.memory.textures++);let oe=C.isWebGLCubeRenderTarget===!0,Q=C.isWebGLMultipleRenderTargets===!0,Se=E.isDataTexture3D||E.isDataTexture2DArray,ve=w(C)||a;if(a&&E.format===Wt&&(E.type===fn||E.type===ti)&&(E.format=gt,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),oe){j.__webglFramebuffer=[];for(let P=0;P<6;P++)j.__webglFramebuffer[P]=r.createFramebuffer()}else if(j.__webglFramebuffer=r.createFramebuffer(),Q)if(i.drawBuffers){let P=C.texture;for(let R=0,$=P.length;R<$;R++){let J=n.get(P[R]);J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(C.useRenderbuffer)if(a){j.__webglMultisampledFramebuffer=r.createFramebuffer(),j.__webglColorRenderbuffer=r.createRenderbuffer(),r.bindRenderbuffer(36161,j.__webglColorRenderbuffer);let P=s.convert(E.format),R=s.convert(E.type),$=I(E.internalFormat,P,R,E.encoding),J=de(C);r.renderbufferStorageMultisample(36161,J,$,C.width,C.height),t.bindFramebuffer(36160,j.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064,36161,j.__webglColorRenderbuffer),r.bindRenderbuffer(36161,null),C.depthBuffer&&(j.__webglDepthRenderbuffer=r.createRenderbuffer(),we(j.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(oe){t.bindTexture(34067,ee.__webglTexture),he(34067,E,ve);for(let P=0;P<6;P++)Ce(j.__webglFramebuffer[P],C,E,36064,34069+P);_(E,ve)&&L(34067),t.unbindTexture()}else if(Q){let P=C.texture;for(let R=0,$=P.length;R<$;R++){let J=P[R],_e=n.get(J);t.bindTexture(3553,_e.__webglTexture),he(3553,J,ve),Ce(j.__webglFramebuffer,C,J,36064+R,3553),_(J,ve)&&L(3553)}t.unbindTexture()}else{let P=3553;Se&&(a?P=E.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(P,ee.__webglTexture),he(P,E,ve),Ce(j.__webglFramebuffer,C,E,36064,P),_(E,ve)&&L(P),t.unbindTexture()}C.depthBuffer&&ye(C)}function ne(C){let E=w(C)||a,j=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ee=0,oe=j.length;ee<oe;ee++){let Q=j[ee];if(_(Q,E)){let Se=C.isWebGLCubeRenderTarget?34067:3553,ve=n.get(Q).__webglTexture;t.bindTexture(Se,ve),L(Se),t.unbindTexture()}}}function se(C){if(C.useRenderbuffer)if(a){let E=C.width,j=C.height,ee=16384,oe=[36064],Q=C.stencilBuffer?33306:36096;C.depthBuffer&&oe.push(Q),C.ignoreDepthForMultisampleCopy||(C.depthBuffer&&(ee|=256),C.stencilBuffer&&(ee|=1024));let Se=n.get(C);t.bindFramebuffer(36008,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,Se.__webglFramebuffer),C.ignoreDepthForMultisampleCopy&&(r.invalidateFramebuffer(36008,[Q]),r.invalidateFramebuffer(36009,[Q])),r.blitFramebuffer(0,0,E,j,0,0,E,j,ee,9728),r.invalidateFramebuffer(36008,oe),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,Se.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function de(C){return a&&(C.useRenderbuffer||C.useRenderToTexture)?Math.min(u,C.samples):0}function re(C){let E=o.render.frame;m.get(C)!==E&&(m.set(C,E),C.update())}let Te=!1,Ee=!1;function De(C,E){C&&C.isWebGLRenderTarget&&(Te===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),Te=!0),C=C.texture),U(C,E)}function Ze(C,E){C&&C.isWebGLCubeRenderTarget&&(Ee===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),Ee=!0),C=C.texture),V(C,E)}this.allocateTextureUnit=N,this.resetTextureUnits=O,this.setTexture2D=U,this.setTexture2DArray=ie,this.setTexture3D=ae,this.setTextureCube=V,this.rebindTextures=He,this.setupRenderTarget=G,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=Ce,this.safeSetTexture2D=De,this.safeSetTextureCube=Ze}function g0(r,e,t){let n=t.isWebGL2;function i(s){let o;if(s===dn)return 5121;if(s===Nd)return 32819;if(s===Bd)return 32820;if(s===Od)return 33635;if(s===Id)return 5120;if(s===Dd)return 5122;if(s===ps)return 5123;if(s===Fd)return 5124;if(s===mr)return 5125;if(s===fn)return 5126;if(s===ti)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===zd)return 6406;if(s===Wt)return 6407;if(s===gt)return 6408;if(s===Ud)return 6409;if(s===Hd)return 6410;if(s===ni)return 6402;if(s===Si)return 34041;if(s===kd)return 6403;if(s===Gd)return 36244;if(s===Vd)return 33319;if(s===Wd)return 33320;if(s===qd)return 36248;if(s===Xd)return 36249;if(s===$l||s===Kl||s===Ql||s===ec)if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===$l)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Kl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ql)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ec)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===tc||s===nc||s===ic||s===sc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===tc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===nc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ic)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===sc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Yd)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===rc||s===oc)&&(o=e.get("WEBGL_compressed_texture_etc"),o!==null)){if(s===rc)return o.COMPRESSED_RGB8_ETC2;if(s===oc)return o.COMPRESSED_RGBA8_ETC2_EAC}if(s===jd||s===Zd||s===Jd||s===$d||s===Kd||s===Qd||s===ef||s===tf||s===nf||s===sf||s===rf||s===of||s===af||s===lf||s===hf||s===uf||s===df||s===ff||s===pf||s===mf||s===gf||s===xf||s===yf||s===vf||s===_f||s===wf||s===bf||s===Mf)return o=e.get("WEBGL_compressed_texture_astc"),o!==null?s:null;if(s===cf)return o=e.get("EXT_texture_compression_bptc"),o!==null?s:null;if(s===Mi)return n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}var Va=class extends dt{constructor(e=[]){super();this.cameras=e}};Va.prototype.isArrayCamera=!0;var Et=class extends Me{constructor(){super();this.type="Group"}};Et.prototype.isGroup=!0;var x0={type:"move"},Yr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(x0))),c&&e.hand){o=!0;for(let x of e.hand.values()){let y=t.getJointPose(x,n);if(c.joints[x.jointName]===void 0){let g=new Et;g.matrixAutoUpdate=!1,g.visible=!1,c.joints[x.jointName]=g,c.add(g)}let p=c.joints[x.jointName];y!==null&&(p.matrix.fromArray(y.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.jointRadius=y.radius),p.visible=y!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}},jr=class extends at{constructor(e,t,n,i,s,o,a,l,c,h){if(h=h!==void 0?h:ni,h!==ni&&h!==Si)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ni&&(n=ps),n===void 0&&h===Si&&(n=Mi);super(null,i,s,o,a,l,h,n,c);this.image={width:e,height:t},this.magFilter=a!==void 0?a:tt,this.minFilter=l!==void 0?l:tt,this.flipY=!1,this.generateMipmaps=!1}};jr.prototype.isDepthTexture=!0;var ch=class extends sn{constructor(e,t){super();let n=this,i=null,s=1,o=null,a="local-floor",l=e.extensions.has("WEBGL_multisampled_render_to_texture"),c=null,h=null,u=null,d=null,f=!1,m=null,x=t.getContextAttributes(),y=null,p=null,g=[],w=new Map,v=new dt;v.layers.enable(1),v.viewport=new Ye;let _=new dt;_.layers.enable(2),_.viewport=new Ye;let L=[v,_],I=new Va;I.layers.enable(1),I.layers.enable(2);let B=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let X=g[V];return X===void 0&&(X=new Yr,g[V]=X),X.getTargetRaySpace()},this.getControllerGrip=function(V){let X=g[V];return X===void 0&&(X=new Yr,g[V]=X),X.getGripSpace()},this.getHand=function(V){let X=g[V];return X===void 0&&(X=new Yr,g[V]=X),X.getHandSpace()};function W(V){let X=w.get(V.inputSource);X&&X.dispatchEvent({type:V.type,data:V.inputSource})}function D(){w.forEach(function(V,X){V.disconnect(X)}),w.clear(),B=null,K=null,e.setRenderTarget(y),d=null,u=null,h=null,i=null,p=null,ae.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",D),i.addEventListener("inputsourceschange",S),x.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let X={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:x.alpha,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,X),i.updateRenderState({baseLayer:d}),p=new Rt(d.framebufferWidth,d.framebufferHeight,{format:gt,type:dn,encoding:e.outputEncoding})}else{f=x.antialias;let X=null,ue=null,he=null;x.depth&&(he=x.stencil?35056:33190,X=x.stencil?Si:ni,ue=x.stencil?Mi:ps);let pe={colorFormat:x.alpha||f?32856:32849,depthFormat:he,scaleFactor:s};h=new XRWebGLBinding(i,t),u=h.createProjectionLayer(pe),i.updateRenderState({layers:[u]}),f?p=new _r(u.textureWidth,u.textureHeight,{format:gt,type:dn,depthTexture:new jr(u.textureWidth,u.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:x.stencil,ignoreDepth:u.ignoreDepthValues,useRenderToTexture:l,encoding:e.outputEncoding}):p=new Rt(u.textureWidth,u.textureHeight,{format:x.alpha?gt:Wt,type:dn,depthTexture:new jr(u.textureWidth,u.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:x.stencil,ignoreDepth:u.ignoreDepthValues,encoding:e.outputEncoding})}this.setFoveation(1),o=await i.requestReferenceSpace(a),ae.setContext(i),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function S(V){let X=i.inputSources;for(let ue=0;ue<g.length;ue++)w.set(X[ue],g[ue]);for(let ue=0;ue<V.removed.length;ue++){let he=V.removed[ue],pe=w.get(he);pe&&(pe.dispatchEvent({type:"disconnected",data:he}),w.delete(he))}for(let ue=0;ue<V.added.length;ue++){let he=V.added[ue],pe=w.get(he);pe&&pe.dispatchEvent({type:"connected",data:he})}}let b=new T,F=new T;function O(V,X,ue){b.setFromMatrixPosition(X.matrixWorld),F.setFromMatrixPosition(ue.matrixWorld);let he=b.distanceTo(F),pe=X.projectionMatrix.elements,Be=ue.projectionMatrix.elements,Z=pe[14]/(pe[10]-1),Ce=pe[14]/(pe[10]+1),we=(pe[9]+1)/pe[5],ge=(pe[9]-1)/pe[5],ye=(pe[8]-1)/pe[0],He=(Be[8]+1)/Be[0],G=Z*ye,ne=Z*He,se=he/(-ye+He),de=se*-ye;X.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(de),V.translateZ(se),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();let re=Z+se,Te=Ce+se,Ee=G-de,De=ne+(he-de),Ze=we*Ce/Te*re,C=ge*Ce/Te*re;V.projectionMatrix.makePerspective(Ee,De,Ze,C,re,Te)}function N(V,X){X===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(X.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;I.near=_.near=v.near=V.near,I.far=_.far=v.far=V.far,(B!==I.near||K!==I.far)&&(i.updateRenderState({depthNear:I.near,depthFar:I.far}),B=I.near,K=I.far);let X=V.parent,ue=I.cameras;N(I,X);for(let pe=0;pe<ue.length;pe++)N(ue[pe],X);I.matrixWorld.decompose(I.position,I.quaternion,I.scale),V.position.copy(I.position),V.quaternion.copy(I.quaternion),V.scale.copy(I.scale),V.matrix.copy(I.matrix),V.matrixWorld.copy(I.matrixWorld);let he=V.children;for(let pe=0,Be=he.length;pe<Be;pe++)he[pe].updateMatrixWorld(!0);ue.length===2?O(I,v,_):I.projectionMatrix.copy(v.projectionMatrix)},this.getCamera=function(){return I},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(V){u!==null&&(u.fixedFoveation=V),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=V)};let U=null;function ie(V,X){if(c=X.getViewerPose(o),m=X,c!==null){let he=c.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let pe=!1;he.length!==I.cameras.length&&(I.cameras.length=0,pe=!0);for(let Be=0;Be<he.length;Be++){let Z=he[Be],Ce=null;if(d!==null)Ce=d.getViewport(Z);else{let ge=h.getViewSubImage(u,Z);Ce=ge.viewport,Be===0&&(e.setRenderTargetTextures(p,ge.colorTexture,u.ignoreDepthValues?void 0:ge.depthStencilTexture),e.setRenderTarget(p))}let we=L[Be];we.matrix.fromArray(Z.transform.matrix),we.projectionMatrix.fromArray(Z.projectionMatrix),we.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),Be===0&&I.matrix.copy(we.matrix),pe===!0&&I.cameras.push(we)}}let ue=i.inputSources;for(let he=0;he<g.length;he++){let pe=g[he],Be=ue[he];pe.update(Be,X,o)}U&&U(V,X),m=null}let ae=new Ac;ae.setAnimationLoop(ie),this.setAnimationLoop=function(V){U=V},this.dispose=function(){}}};function y0(r){function e(p,g){p.fogColor.value.copy(g.color),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function t(p,g,w,v,_){g.isMeshBasicMaterial?n(p,g):g.isMeshLambertMaterial?(n(p,g),l(p,g)):g.isMeshToonMaterial?(n(p,g),h(p,g)):g.isMeshPhongMaterial?(n(p,g),c(p,g)):g.isMeshStandardMaterial?(n(p,g),g.isMeshPhysicalMaterial?d(p,g,_):u(p,g)):g.isMeshMatcapMaterial?(n(p,g),f(p,g)):g.isMeshDepthMaterial?(n(p,g),m(p,g)):g.isMeshDistanceMaterial?(n(p,g),x(p,g)):g.isMeshNormalMaterial?(n(p,g),y(p,g)):g.isLineBasicMaterial?(i(p,g),g.isLineDashedMaterial&&s(p,g)):g.isPointsMaterial?o(p,g,w,v):g.isSpriteMaterial?a(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function n(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map),g.alphaMap&&(p.alphaMap.value=g.alphaMap),g.specularMap&&(p.specularMap.value=g.specularMap),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let w=r.get(g).envMap;w&&(p.envMap.value=w,p.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity);let v;g.map?v=g.map:g.specularMap?v=g.specularMap:g.displacementMap?v=g.displacementMap:g.normalMap?v=g.normalMap:g.bumpMap?v=g.bumpMap:g.roughnessMap?v=g.roughnessMap:g.metalnessMap?v=g.metalnessMap:g.alphaMap?v=g.alphaMap:g.emissiveMap?v=g.emissiveMap:g.clearcoatMap?v=g.clearcoatMap:g.clearcoatNormalMap?v=g.clearcoatNormalMap:g.clearcoatRoughnessMap?v=g.clearcoatRoughnessMap:g.specularIntensityMap?v=g.specularIntensityMap:g.specularColorMap?v=g.specularColorMap:g.transmissionMap?v=g.transmissionMap:g.thicknessMap?v=g.thicknessMap:g.sheenColorMap?v=g.sheenColorMap:g.sheenRoughnessMap&&(v=g.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix));let _;g.aoMap?_=g.aoMap:g.lightMap&&(_=g.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uv2Transform.value.copy(_.matrix))}function i(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity}function s(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function o(p,g,w,v){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*w,p.scale.value=v*.5,g.map&&(p.map.value=g.map),g.alphaMap&&(p.alphaMap.value=g.alphaMap),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let _;g.map?_=g.map:g.alphaMap&&(_=g.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map),g.alphaMap&&(p.alphaMap.value=g.alphaMap),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let w;g.map?w=g.map:g.alphaMap&&(w=g.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),p.uvTransform.value.copy(w.matrix))}function l(p,g){g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap)}function c(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap),g.bumpMap&&(p.bumpMap.value=g.bumpMap,p.bumpScale.value=g.bumpScale,g.side===st&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,p.normalScale.value.copy(g.normalScale),g.side===st&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias)}function h(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap),g.bumpMap&&(p.bumpMap.value=g.bumpMap,p.bumpScale.value=g.bumpScale,g.side===st&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,p.normalScale.value.copy(g.normalScale),g.side===st&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias)}function u(p,g){p.roughness.value=g.roughness,p.metalness.value=g.metalness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap),g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap),g.bumpMap&&(p.bumpMap.value=g.bumpMap,p.bumpScale.value=g.bumpScale,g.side===st&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,p.normalScale.value.copy(g.normalScale),g.side===st&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),r.get(g).envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,w){u(p,g),p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap)),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap),g.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),p.clearcoatNormalMap.value=g.clearcoatNormalMap,g.side===st&&p.clearcoatNormalScale.value.negate())),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap)}function f(p,g){g.matcap&&(p.matcap.value=g.matcap),g.bumpMap&&(p.bumpMap.value=g.bumpMap,p.bumpScale.value=g.bumpScale,g.side===st&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,p.normalScale.value.copy(g.normalScale),g.side===st&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias)}function m(p,g){g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias)}function x(p,g){g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),p.referencePosition.value.copy(g.referencePosition),p.nearDistance.value=g.nearDistance,p.farDistance.value=g.farDistance}function y(p,g){g.bumpMap&&(p.bumpMap.value=g.bumpMap,p.bumpScale.value=g.bumpScale,g.side===st&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,p.normalScale.value.copy(g.normalScale),g.side===st&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function v0(){let r=vr("canvas");return r.style.display="block",r}function je(r={}){let e=r.canvas!==void 0?r.canvas:v0(),t=r.context!==void 0?r.context:null,n=r.alpha!==void 0?r.alpha:!1,i=r.depth!==void 0?r.depth:!0,s=r.stencil!==void 0?r.stencil:!0,o=r.antialias!==void 0?r.antialias:!1,a=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,l=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",h=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1,u=null,d=null,f=[],m=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Dt,this.physicallyCorrectLights=!1,this.toneMapping=Ln,this.toneMappingExposure=1;let x=this,y=!1,p=0,g=0,w=null,v=-1,_=null,L=new Ye,I=new Ye,B=null,K=e.width,W=e.height,D=1,S=null,b=null,F=new Ye(0,0,K,W),O=new Ye(0,0,K,W),N=!1,U=[],ie=new Es,ae=!1,V=!1,X=null,ue=new me,he=new T,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Be(){return w===null?D:1}let Z=t;function Ce(A,z){for(let k=0;k<A.length;k++){let H=A[k],Y=e.getContext(H,z);if(Y!==null)return Y}return null}try{let A={alpha:n,depth:i,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${jo}`),e.addEventListener("webglcontextlost",_e,!1),e.addEventListener("webglcontextrestored",fe,!1),Z===null){let z=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&z.shift(),Z=Ce(z,A),Z===null)throw Ce(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let we,ge,ye,He,G,ne,se,de,re,Te,Ee,De,Ze,C,E,j,ee,oe,Q,Se,ve,P,R;function $(){we=new Gg(Z),ge=new Bg(Z,we,r),we.init(ge),P=new g0(Z,we,ge),ye=new p0(Z,we,ge),U[0]=1029,He=new qg(Z),G=new i0,ne=new m0(Z,we,ye,G,ge,P,He),se=new zg(x),de=new kg(x),re=new op(Z,ge),R=new Fg(Z,we,re,ge),Te=new Vg(Z,re,He,R),Ee=new Zg(Z,Te,re,He),Q=new jg(Z,ge,ne),j=new Og(G),De=new n0(x,se,de,we,ge,R,j),Ze=new y0(G),C=new r0,E=new u0(we,ge),oe=new Dg(x,se,ye,Ee,a),ee=new lh(x,Ee,ge),Se=new Ng(Z,we,He,ge),ve=new Wg(Z,we,He,ge),He.programs=De.programs,x.capabilities=ge,x.extensions=we,x.properties=G,x.renderLists=C,x.shadowMap=ee,x.state=ye,x.info=He}$();let J=new ch(x,Z);this.xr=J,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){let A=we.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=we.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(A){A!==void 0&&(D=A,this.setSize(K,W,!1))},this.getSize=function(A){return A.set(K,W)},this.setSize=function(A,z,k){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=A,W=z,e.width=Math.floor(A*D),e.height=Math.floor(z*D),k!==!1&&(e.style.width=A+"px",e.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(K*D,W*D).floor()},this.setDrawingBufferSize=function(A,z,k){K=A,W=z,D=k,e.width=Math.floor(A*k),e.height=Math.floor(z*k),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(F)},this.setViewport=function(A,z,k,H){A.isVector4?F.set(A.x,A.y,A.z,A.w):F.set(A,z,k,H),ye.viewport(L.copy(F).multiplyScalar(D).floor())},this.getScissor=function(A){return A.copy(O)},this.setScissor=function(A,z,k,H){A.isVector4?O.set(A.x,A.y,A.z,A.w):O.set(A,z,k,H),ye.scissor(I.copy(O).multiplyScalar(D).floor())},this.getScissorTest=function(){return N},this.setScissorTest=function(A){ye.setScissorTest(N=A)},this.setOpaqueSort=function(A){S=A},this.setTransparentSort=function(A){b=A},this.getClearColor=function(A){return A.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor.apply(oe,arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha.apply(oe,arguments)},this.clear=function(A,z,k){let H=0;(A===void 0||A)&&(H|=16384),(z===void 0||z)&&(H|=256),(k===void 0||k)&&(H|=1024),Z.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_e,!1),e.removeEventListener("webglcontextrestored",fe,!1),C.dispose(),E.dispose(),G.dispose(),se.dispose(),de.dispose(),Ee.dispose(),R.dispose(),De.dispose(),J.dispose(),J.removeEventListener("sessionstart",Kt),J.removeEventListener("sessionend",Qt),X&&(X.dispose(),X=null),Zn.stop()};function _e(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let A=He.autoReset,z=ee.enabled,k=ee.autoUpdate,H=ee.needsUpdate,Y=ee.type;$(),He.autoReset=A,ee.enabled=z,ee.autoUpdate=k,ee.needsUpdate=H,ee.type=Y}function Ae(A){let z=A.target;z.removeEventListener("dispose",Ae),le(z)}function le(A){be(A),G.remove(A)}function be(A){let z=G.get(A).programs;z!==void 0&&(z.forEach(function(k){De.releaseProgram(k)}),A.isShaderMaterial&&De.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,k,H,Y,Re){z===null&&(z=pe);let Pe=Y.isMesh&&Y.matrixWorld.determinant()<0,Oe=td(A,z,k,H,Y);ye.setMaterial(H,Pe);let Le=k.index,qe=k.attributes.position;if(Le===null){if(qe===void 0||qe.count===0)return}else if(Le.count===0)return;let ze=1;H.wireframe===!0&&(Le=Te.getWireframeAttribute(k),ze=2),R.setup(Y,H,Oe,k,Le);let We,ot=Se;Le!==null&&(We=re.get(Le),ot=ve,ot.setIndex(We));let Jn=Le!==null?Le.count:qe.count,_i=k.drawRange.start*ze,Xe=k.drawRange.count*ze,en=Re!==null?Re.start*ze:0,mt=Re!==null?Re.count*ze:1/0,tn=Math.max(_i,en),ar=Math.min(Jn,_i+Xe,en+mt)-1,nn=Math.max(0,ar-tn+1);if(nn!==0){if(Y.isMesh)H.wireframe===!0?(ye.setLineWidth(H.wireframeLinewidth*Be()),ot.setMode(1)):ot.setMode(4);else if(Y.isLine){let hn=H.linewidth;hn===void 0&&(hn=1),ye.setLineWidth(hn*Be()),Y.isLineSegments?ot.setMode(1):Y.isLineLoop?ot.setMode(2):ot.setMode(3)}else Y.isPoints?ot.setMode(0):Y.isSprite&&ot.setMode(4);if(Y.isInstancedMesh)ot.renderInstances(tn,nn,Y.count);else if(k.isInstancedBufferGeometry){let hn=Math.min(k.instanceCount,k._maxInstanceCount);ot.renderInstances(tn,nn,hn)}else ot.render(tn,nn)}},this.compile=function(A,z){d=E.get(A),d.init(),m.push(d),A.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),d.setupLights(x.physicallyCorrectLights),A.traverse(function(k){let H=k.material;if(H)if(Array.isArray(H))for(let Y=0;Y<H.length;Y++){let Re=H[Y];ko(Re,A,k)}else ko(H,A,k)}),m.pop(),d=null};let ke=null;function Je(A){ke&&ke(A)}function Kt(){Zn.stop()}function Qt(){Zn.start()}let Zn=new Ac;Zn.setAnimationLoop(Je),typeof window!="undefined"&&Zn.setContext(window),this.setAnimationLoop=function(A){ke=A,J.setAnimationLoop(A),A===null?Zn.stop():Zn.start()},J.addEventListener("sessionstart",Kt),J.addEventListener("sessionend",Qt),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;A.autoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(z),z=J.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,z,w),d=E.get(A,m.length),d.init(),m.push(d),ue.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ie.setFromProjectionMatrix(ue),V=this.localClippingEnabled,ae=j.init(this.clippingPlanes,V,z),u=C.get(A,f.length),u.init(),f.push(u),Rl(A,z,0,x.sortObjects),u.finish(),x.sortObjects===!0&&u.sort(S,b),ae===!0&&j.beginShadows();let k=d.state.shadowsArray;if(ee.render(k,A,z),ae===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset(),oe.render(u,A),d.setupLights(x.physicallyCorrectLights),z.isArrayCamera){let H=z.cameras;for(let Y=0,Re=H.length;Y<Re;Y++){let Pe=H[Y];Ll(u,A,Pe,Pe.viewport)}}else Ll(u,A,z);w!==null&&(ne.updateMultisampleRenderTarget(w),ne.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(x,A,z),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1),R.resetDefaultState(),v=-1,_=null,m.pop(),m.length>0?d=m[m.length-1]:d=null,f.pop(),f.length>0?u=f[f.length-1]:u=null};function Rl(A,z,k,H){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)k=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)d.pushLight(A),A.castShadow&&d.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ie.intersectsSprite(A)){H&&he.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ue);let Pe=Ee.update(A),Oe=A.material;Oe.visible&&u.push(A,Pe,Oe,k,he.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==He.render.frame&&(A.skeleton.update(),A.skeleton.frame=He.render.frame),!A.frustumCulled||ie.intersectsObject(A))){H&&he.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ue);let Pe=Ee.update(A),Oe=A.material;if(Array.isArray(Oe)){let Le=Pe.groups;for(let qe=0,ze=Le.length;qe<ze;qe++){let We=Le[qe],ot=Oe[We.materialIndex];ot&&ot.visible&&u.push(A,Pe,ot,k,he.z,We)}}else Oe.visible&&u.push(A,Pe,Oe,k,he.z,null)}}let Re=A.children;for(let Pe=0,Oe=Re.length;Pe<Oe;Pe++)Rl(Re[Pe],z,k,H)}function Ll(A,z,k,H){let Y=A.opaque,Re=A.transmissive,Pe=A.transparent;d.setupLightsView(k),Re.length>0&&Qu(Y,z,k),H&&ye.viewport(L.copy(H)),Y.length>0&&or(Y,z,k),Re.length>0&&or(Re,z,k),Pe.length>0&&or(Pe,z,k)}function Qu(A,z,k){if(X===null){let Pe=o===!0&&ge.isWebGL2===!0?_r:Rt;X=new Pe(1024,1024,{generateMipmaps:!0,type:P.convert(ti)!==null?ti:dn,minFilter:ei,magFilter:tt,wrapS:At,wrapT:At,useRenderToTexture:we.has("WEBGL_multisampled_render_to_texture")})}let H=x.getRenderTarget();x.setRenderTarget(X),x.clear();let Y=x.toneMapping;x.toneMapping=Ln,or(A,z,k),x.toneMapping=Y,ne.updateMultisampleRenderTarget(X),ne.updateRenderTargetMipmap(X),x.setRenderTarget(H)}function or(A,z,k){let H=z.isScene===!0?z.overrideMaterial:null;for(let Y=0,Re=A.length;Y<Re;Y++){let Pe=A[Y],Oe=Pe.object,Le=Pe.geometry,qe=H===null?Pe.material:H,ze=Pe.group;Oe.layers.test(k.layers)&&ed(Oe,z,k,Le,qe,ze)}}function ed(A,z,k,H,Y,Re){A.onBeforeRender(x,z,k,H,Y,Re),A.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(x,z,k,H,A,Re),Y.transparent===!0&&Y.side===xt?(Y.side=st,Y.needsUpdate=!0,x.renderBufferDirect(k,z,H,Y,A,Re),Y.side=un,Y.needsUpdate=!0,x.renderBufferDirect(k,z,H,Y,A,Re),Y.side=xt):x.renderBufferDirect(k,z,H,Y,A,Re),A.onAfterRender(x,z,k,H,Y,Re)}function ko(A,z,k){z.isScene!==!0&&(z=pe);let H=G.get(A),Y=d.state.lights,Re=d.state.shadowsArray,Pe=Y.state.version,Oe=De.getParameters(A,Y.state,Re,z,k),Le=De.getProgramCacheKey(Oe),qe=H.programs;H.environment=A.isMeshStandardMaterial?z.environment:null,H.fog=z.fog,H.envMap=(A.isMeshStandardMaterial?de:se).get(A.envMap||H.environment),qe===void 0&&(A.addEventListener("dispose",Ae),qe=new Map,H.programs=qe);let ze=qe.get(Le);if(ze!==void 0){if(H.currentProgram===ze&&H.lightsStateVersion===Pe)return Cl(A,Oe),ze}else Oe.uniforms=De.getUniforms(A),A.onBuild(k,Oe,x),A.onBeforeCompile(Oe,x),ze=De.acquireProgram(Oe,Le),qe.set(Le,ze),H.uniforms=Oe.uniforms;let We=H.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(We.clippingPlanes=j.uniform),Cl(A,Oe),H.needsLights=id(A),H.lightsStateVersion=Pe,H.needsLights&&(We.ambientLightColor.value=Y.state.ambient,We.lightProbe.value=Y.state.probe,We.directionalLights.value=Y.state.directional,We.directionalLightShadows.value=Y.state.directionalShadow,We.spotLights.value=Y.state.spot,We.spotLightShadows.value=Y.state.spotShadow,We.rectAreaLights.value=Y.state.rectArea,We.ltc_1.value=Y.state.rectAreaLTC1,We.ltc_2.value=Y.state.rectAreaLTC2,We.pointLights.value=Y.state.point,We.pointLightShadows.value=Y.state.pointShadow,We.hemisphereLights.value=Y.state.hemi,We.directionalShadowMap.value=Y.state.directionalShadowMap,We.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,We.spotShadowMap.value=Y.state.spotShadowMap,We.spotShadowMatrix.value=Y.state.spotShadowMatrix,We.pointShadowMap.value=Y.state.pointShadowMap,We.pointShadowMatrix.value=Y.state.pointShadowMatrix);let ot=ze.getUniforms(),Jn=Un.seqWithValue(ot.seq,We);return H.currentProgram=ze,H.uniformsList=Jn,ze}function Cl(A,z){let k=G.get(A);k.outputEncoding=z.outputEncoding,k.instancing=z.instancing,k.skinning=z.skinning,k.morphTargets=z.morphTargets,k.morphNormals=z.morphNormals,k.morphTargetsCount=z.morphTargetsCount,k.numClippingPlanes=z.numClippingPlanes,k.numIntersection=z.numClipIntersection,k.vertexAlphas=z.vertexAlphas,k.vertexTangents=z.vertexTangents,k.toneMapping=z.toneMapping}function td(A,z,k,H,Y){z.isScene!==!0&&(z=pe),ne.resetTextureUnits();let Re=z.fog,Pe=H.isMeshStandardMaterial?z.environment:null,Oe=w===null?x.outputEncoding:w.texture.encoding,Le=(H.isMeshStandardMaterial?de:se).get(H.envMap||Pe),qe=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,ze=!!H.normalMap&&!!k.attributes.tangent,We=!!k.morphAttributes.position,ot=!!k.morphAttributes.normal,Jn=k.morphAttributes.position?k.morphAttributes.position.length:0,_i=H.toneMapped?x.toneMapping:Ln,Xe=G.get(H),en=d.state.lights;if(ae===!0&&(V===!0||A!==_)){let Vt=A===_&&H.id===v;j.setState(H,A,Vt)}let mt=!1;H.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==en.state.version||Xe.outputEncoding!==Oe||Y.isInstancedMesh&&Xe.instancing===!1||!Y.isInstancedMesh&&Xe.instancing===!0||Y.isSkinnedMesh&&Xe.skinning===!1||!Y.isSkinnedMesh&&Xe.skinning===!0||Xe.envMap!==Le||H.fog&&Xe.fog!==Re||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==j.numPlanes||Xe.numIntersection!==j.numIntersection)||Xe.vertexAlphas!==qe||Xe.vertexTangents!==ze||Xe.morphTargets!==We||Xe.morphNormals!==ot||Xe.toneMapping!==_i||ge.isWebGL2===!0&&Xe.morphTargetsCount!==Jn)&&(mt=!0):(mt=!0,Xe.__version=H.version);let tn=Xe.currentProgram;mt===!0&&(tn=ko(H,z,Y));let ar=!1,nn=!1,hn=!1,bt=tn.getUniforms(),as=Xe.uniforms;if(ye.useProgram(tn.program)&&(ar=!0,nn=!0,hn=!0),H.id!==v&&(v=H.id,nn=!0),ar||_!==A){if(bt.setValue(Z,"projectionMatrix",A.projectionMatrix),ge.logarithmicDepthBuffer&&bt.setValue(Z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),_!==A&&(_=A,nn=!0,hn=!0),H.isShaderMaterial||H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshStandardMaterial||H.envMap){let Vt=bt.map.cameraPosition;Vt!==void 0&&Vt.setValue(Z,he.setFromMatrixPosition(A.matrixWorld))}(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&bt.setValue(Z,"isOrthographic",A.isOrthographicCamera===!0),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial||H.isShadowMaterial||Y.isSkinnedMesh)&&bt.setValue(Z,"viewMatrix",A.matrixWorldInverse)}if(Y.isSkinnedMesh){bt.setOptional(Z,Y,"bindMatrix"),bt.setOptional(Z,Y,"bindMatrixInverse");let Vt=Y.skeleton;Vt&&(ge.floatVertexTextures?(Vt.boneTexture===null&&Vt.computeBoneTexture(),bt.setValue(Z,"boneTexture",Vt.boneTexture,ne),bt.setValue(Z,"boneTextureSize",Vt.boneTextureSize)):bt.setOptional(Z,Vt,"boneMatrices"))}return!!k&&(k.morphAttributes.position!==void 0||k.morphAttributes.normal!==void 0)&&Q.update(Y,k,H,tn),(nn||Xe.receiveShadow!==Y.receiveShadow)&&(Xe.receiveShadow=Y.receiveShadow,bt.setValue(Z,"receiveShadow",Y.receiveShadow)),nn&&(bt.setValue(Z,"toneMappingExposure",x.toneMappingExposure),Xe.needsLights&&nd(as,hn),Re&&H.fog&&Ze.refreshFogUniforms(as,Re),Ze.refreshMaterialUniforms(as,H,D,W,X),Un.upload(Z,Xe.uniformsList,as,ne)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Un.upload(Z,Xe.uniformsList,as,ne),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&bt.setValue(Z,"center",Y.center),bt.setValue(Z,"modelViewMatrix",Y.modelViewMatrix),bt.setValue(Z,"normalMatrix",Y.normalMatrix),bt.setValue(Z,"modelMatrix",Y.matrixWorld),tn}function nd(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function id(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return p},this.getActiveMipmapLevel=function(){return g},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,z,k){G.get(A.texture).__webglTexture=z,G.get(A.depthTexture).__webglTexture=k;let H=G.get(A);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||A.useRenderToTexture&&(console.warn("render-to-texture extension was disabled because an external texture was provided"),A.useRenderToTexture=!1,A.useRenderbuffer=!0))},this.setRenderTargetFramebuffer=function(A,z){let k=G.get(A);k.__webglFramebuffer=z,k.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,k=0){w=A,p=z,g=k;let H=!0;if(A){let Le=G.get(A);Le.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(36160,null),H=!1):Le.__webglFramebuffer===void 0?ne.setupRenderTarget(A):Le.__hasExternalTextures&&ne.rebindTextures(A,G.get(A.texture).__webglTexture,G.get(A.depthTexture).__webglTexture)}let Y=null,Re=!1,Pe=!1;if(A){let Le=A.texture;(Le.isDataTexture3D||Le.isDataTexture2DArray)&&(Pe=!0);let qe=G.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Y=qe[z],Re=!0):A.useRenderbuffer?Y=G.get(A).__webglMultisampledFramebuffer:Y=qe,L.copy(A.viewport),I.copy(A.scissor),B=A.scissorTest}else L.copy(F).multiplyScalar(D).floor(),I.copy(O).multiplyScalar(D).floor(),B=N;if(ye.bindFramebuffer(36160,Y)&&ge.drawBuffers&&H){let Le=!1;if(A)if(A.isWebGLMultipleRenderTargets){let qe=A.texture;if(U.length!==qe.length||U[0]!==36064){for(let ze=0,We=qe.length;ze<We;ze++)U[ze]=36064+ze;U.length=qe.length,Le=!0}}else(U.length!==1||U[0]!==36064)&&(U[0]=36064,U.length=1,Le=!0);else(U.length!==1||U[0]!==1029)&&(U[0]=1029,U.length=1,Le=!0);Le&&(ge.isWebGL2?Z.drawBuffers(U):we.get("WEBGL_draw_buffers").drawBuffersWEBGL(U))}if(ye.viewport(L),ye.scissor(I),ye.setScissorTest(B),Re){let Le=G.get(A.texture);Z.framebufferTexture2D(36160,36064,34069+z,Le.__webglTexture,k)}else if(Pe){let Le=G.get(A.texture),qe=z||0;Z.framebufferTextureLayer(36160,36064,Le.__webglTexture,k||0,qe)}v=-1},this.readRenderTargetPixels=function(A,z,k,H,Y,Re,Pe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=G.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pe!==void 0&&(Oe=Oe[Pe]),Oe){ye.bindFramebuffer(36160,Oe);try{let Le=A.texture,qe=Le.format,ze=Le.type;if(qe!==gt&&P.convert(qe)!==Z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let We=ze===ti&&(we.has("EXT_color_buffer_half_float")||ge.isWebGL2&&we.has("EXT_color_buffer_float"));if(ze!==dn&&P.convert(ze)!==Z.getParameter(35738)&&!(ze===fn&&(ge.isWebGL2||we.has("OES_texture_float")||we.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z.checkFramebufferStatus(36160)===36053?z>=0&&z<=A.width-H&&k>=0&&k<=A.height-Y&&Z.readPixels(z,k,H,Y,P.convert(qe),P.convert(ze),Re):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{let Le=w!==null?G.get(w).__webglFramebuffer:null;ye.bindFramebuffer(36160,Le)}}},this.copyFramebufferToTexture=function(A,z,k=0){if(z.isFramebufferTexture!==!0){console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");return}let H=Math.pow(2,-k),Y=Math.floor(z.image.width*H),Re=Math.floor(z.image.height*H);ne.setTexture2D(z,0),Z.copyTexSubImage2D(3553,k,0,0,A.x,A.y,Y,Re),ye.unbindTexture()},this.copyTextureToTexture=function(A,z,k,H=0){let Y=z.image.width,Re=z.image.height,Pe=P.convert(k.format),Oe=P.convert(k.type);ne.setTexture2D(k,0),Z.pixelStorei(37440,k.flipY),Z.pixelStorei(37441,k.premultiplyAlpha),Z.pixelStorei(3317,k.unpackAlignment),z.isDataTexture?Z.texSubImage2D(3553,H,A.x,A.y,Y,Re,Pe,Oe,z.image.data):z.isCompressedTexture?Z.compressedTexSubImage2D(3553,H,A.x,A.y,z.mipmaps[0].width,z.mipmaps[0].height,Pe,z.mipmaps[0].data):Z.texSubImage2D(3553,H,A.x,A.y,Pe,Oe,z.image),H===0&&k.generateMipmaps&&Z.generateMipmap(3553),ye.unbindTexture()},this.copyTextureToTexture3D=function(A,z,k,H,Y=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Re=A.max.x-A.min.x+1,Pe=A.max.y-A.min.y+1,Oe=A.max.z-A.min.z+1,Le=P.convert(H.format),qe=P.convert(H.type),ze;if(H.isDataTexture3D)ne.setTexture3D(H,0),ze=32879;else if(H.isDataTexture2DArray)ne.setTexture2DArray(H,0),ze=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(37440,H.flipY),Z.pixelStorei(37441,H.premultiplyAlpha),Z.pixelStorei(3317,H.unpackAlignment);let We=Z.getParameter(3314),ot=Z.getParameter(32878),Jn=Z.getParameter(3316),_i=Z.getParameter(3315),Xe=Z.getParameter(32877),en=k.isCompressedTexture?k.mipmaps[0]:k.image;Z.pixelStorei(3314,en.width),Z.pixelStorei(32878,en.height),Z.pixelStorei(3316,A.min.x),Z.pixelStorei(3315,A.min.y),Z.pixelStorei(32877,A.min.z),k.isDataTexture||k.isDataTexture3D?Z.texSubImage3D(ze,Y,z.x,z.y,z.z,Re,Pe,Oe,Le,qe,en.data):k.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Z.compressedTexSubImage3D(ze,Y,z.x,z.y,z.z,Re,Pe,Oe,Le,en.data)):Z.texSubImage3D(ze,Y,z.x,z.y,z.z,Re,Pe,Oe,Le,qe,en),Z.pixelStorei(3314,We),Z.pixelStorei(32878,ot),Z.pixelStorei(3316,Jn),Z.pixelStorei(3315,_i),Z.pixelStorei(32877,Xe),Y===0&&H.generateMipmaps&&Z.generateMipmap(ze),ye.unbindTexture()},this.initTexture=function(A){ne.setTexture2D(A,0),ye.unbindTexture()},this.resetState=function(){p=0,g=0,w=null,ye.reset(),R.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}je.prototype.isWebGLRenderer=!0;var hh=class extends je{};hh.prototype.isWebGL1Renderer=!0;var Zr=class{constructor(e,t=25e-5){this.name="",this.color=new te(e),this.density=t}clone(){return new Zr(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}};Zr.prototype.isFogExp2=!0;var Jr=class{constructor(e,t=1,n=1e3){this.name="",this.color=new te(e),this.near=t,this.far=n}clone(){return new Jr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}};Jr.prototype.isFog=!0;var Cs=class extends Me{constructor(){super();this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}};Cs.prototype.isScene=!0;var Hn=class{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ms,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Ft()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ft()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ft()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}};Hn.prototype.isInterleavedBuffer=!0;var ft=new T,kn=class{constructor(e,t,n,i=!1){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ft.x=this.getX(t),ft.y=this.getY(t),ft.z=this.getZ(t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ft.x=this.getX(t),ft.y=this.getY(t),ft.z=this.getZ(t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ft.x=this.getX(t),ft.y=this.getY(t),ft.z=this.getZ(t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Qe(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new kn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};kn.prototype.isInterleavedBufferAttribute=!0;var Wa=class extends ut{constructor(e){super();this.type="SpriteMaterial",this.color=new te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}};Wa.prototype.isSpriteMaterial=!0;var Yi,Ps=new T,ji=new T,Zi=new T,Ji=new q,Is=new q,uh=new me,$r=new T,Ds=new T,Kr=new T,dh=new q,qa=new q,fh=new q,ph=class extends Me{constructor(e){super();if(this.type="Sprite",Yi===void 0){Yi=new Ne;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Hn(t,5);Yi.setIndex([0,1,2,0,2,3]),Yi.setAttribute("position",new kn(n,3,0,!1)),Yi.setAttribute("uv",new kn(n,2,3,!1))}this.geometry=Yi,this.material=e!==void 0?e:new Wa,this.center=new q(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ji.setFromMatrixScale(this.matrixWorld),uh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Zi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ji.multiplyScalar(-Zi.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let o=this.center;Qr($r.set(-.5,-.5,0),Zi,o,ji,i,s),Qr(Ds.set(.5,-.5,0),Zi,o,ji,i,s),Qr(Kr.set(.5,.5,0),Zi,o,ji,i,s),dh.set(0,0),qa.set(1,0),fh.set(1,1);let a=e.ray.intersectTriangle($r,Ds,Kr,!1,Ps);if(a===null&&(Qr(Ds.set(-.5,.5,0),Zi,o,ji,i,s),qa.set(0,1),a=e.ray.intersectTriangle($r,Kr,Ds,!1,Ps),a===null))return;let l=e.ray.origin.distanceTo(Ps);l<e.near||l>e.far||t.push({distance:l,point:Ps.clone(),uv:ht.getUV(Ps,$r,Ds,Kr,dh,qa,fh,new q),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};ph.prototype.isSprite=!0;function Qr(r,e,t,n,i,s){Ji.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Is.x=s*Ji.x-i*Ji.y,Is.y=i*Ji.x+s*Ji.y):Is.copy(Ji),r.copy(e),r.x+=Is.x,r.y+=Is.y,r.applyMatrix4(uh)}var mh=new T,gh=new Ye,xh=new Ye,_0=new T,yh=new me,Fs=class extends Ie{constructor(e,t){super(e,t);this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new me,this.bindMatrixInverse=new me}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Ye,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){let n=this.skeleton,i=this.geometry;gh.fromBufferAttribute(i.attributes.skinIndex,e),xh.fromBufferAttribute(i.attributes.skinWeight,e),mh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let o=xh.getComponent(s);if(o!==0){let a=gh.getComponent(s);yh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(_0.copy(mh).applyMatrix4(yh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}};Fs.prototype.isSkinnedMesh=!0;var Ns=class extends Me{constructor(){super();this.type="Bone"}};Ns.prototype.isBone=!0;var Xa=class extends at{constructor(e=null,t=1,n=1,i,s,o,a,l,c=tt,h=tt,u,d){super(null,o,a,l,c,h,i,s,u,d);this.image={data:e,width:t,height:n},this.magFilter=c,this.minFilter=h,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};Xa.prototype.isDataTexture=!0;var vh=new me,w0=new me,Bs=class{constructor(e=[],t=[]){this.uuid=Ft(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new me)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new me;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){let a=e[s]?e[s].matrixWorld:w0;vh.multiplyMatrices(a,t[s]),vh.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Bs(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=hc(e),e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Xa(t,e,e,gt,fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Ns),this.bones.push(o),this.boneInverses.push(new me().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},eo=class extends Qe{constructor(e,t,n,i=1){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."));super(e,t,n);this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};eo.prototype.isInstancedBufferAttribute=!0;var _h=new me,wh=new me,to=[],Os=new Ie,bh=class extends Ie{constructor(e,t,n){super(e,t);this.instanceMatrix=new eo(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Os.geometry=this.geometry,Os.material=this.material,Os.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,_h),wh.multiplyMatrices(n,_h),Os.matrixWorld=wh,Os.raycast(e,to);for(let o=0,a=to.length;o<a;o++){let l=to[o];l.instanceId=s,l.object=this,t.push(l)}to.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new eo(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};bh.prototype.isInstancedMesh=!0;var ln=class extends ut{constructor(e){super();this.type="LineBasicMaterial",this.color=new te(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this}};ln.prototype.isLineBasicMaterial=!0;var Mh=new T,Sh=new T,Th=new me,Ya=new ai,no=new mn,$i=class extends Me{constructor(e=new Ne,t=new ln){super();this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.isBufferGeometry)if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Mh.fromBufferAttribute(t,i-1),Sh.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Mh.distanceTo(Sh);e.setAttribute("lineDistance",new Fe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(i),no.radius+=s,e.ray.intersectsSphere(no)===!1)return;Th.copy(i).invert(),Ya.copy(e.ray).applyMatrix4(Th);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new T,h=new T,u=new T,d=new T,f=this.isLineSegments?2:1;if(n.isBufferGeometry){let m=n.index,y=n.attributes.position;if(m!==null){let p=Math.max(0,o.start),g=Math.min(m.count,o.start+o.count);for(let w=p,v=g-1;w<v;w+=f){let _=m.getX(w),L=m.getX(w+1);if(c.fromBufferAttribute(y,_),h.fromBufferAttribute(y,L),Ya.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let B=e.ray.origin.distanceTo(d);B<e.near||B>e.far||t.push({distance:B,point:u.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),g=Math.min(y.count,o.start+o.count);for(let w=p,v=g-1;w<v;w+=f){if(c.fromBufferAttribute(y,w),h.fromBufferAttribute(y,w+1),Ya.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let L=e.ray.origin.distanceTo(d);L<e.near||L>e.far||t.push({distance:L,point:u.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}};$i.prototype.isLine=!0;var Eh=new T,Ah=new T,Gn=class extends $i{constructor(e,t){super(e,t);this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.isBufferGeometry)if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Eh.fromBufferAttribute(t,i),Ah.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Eh.distanceTo(Ah);e.setAttribute("lineDistance",new Fe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}};Gn.prototype.isLineSegments=!0;var io=class extends $i{constructor(e,t){super(e,t);this.type="LineLoop"}};io.prototype.isLineLoop=!0;var zs=class extends ut{constructor(e){super();this.type="PointsMaterial",this.color=new te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}};zs.prototype.isPointsMaterial=!0;var Rh=new me,ja=new ai,so=new mn,ro=new T,cn=class extends Me{constructor(e=new Ne,t=new zs){super();this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(i),so.radius+=s,e.ray.intersectsSphere(so)===!1)return;Rh.copy(i).invert(),ja.copy(e.ray).applyMatrix4(Rh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a;if(n.isBufferGeometry){let c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,x=f;m<x;m++){let y=c.getX(m);ro.fromBufferAttribute(u,y),Lh(ro,y,l,i,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,x=f;m<x;m++)ro.fromBufferAttribute(u,m),Lh(ro,m,l,i,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}};cn.prototype.isPoints=!0;function Lh(r,e,t,n,i,s,o){let a=ja.distanceSqToPoint(r);if(a<t){let l=new T;ja.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}var kt=class extends at{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c);this.format=a!==void 0?a:Wt,this.minFilter=o!==void 0?o:Ke,this.magFilter=s!==void 0?s:Ke,this.generateMipmaps=!1;let h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}};kt.prototype.isVideoTexture=!0;var Ch=class extends at{constructor(e,t,n){super({width:e,height:t});this.format=n,this.magFilter=tt,this.minFilter=tt,this.generateMipmaps=!1,this.needsUpdate=!0}};Ch.prototype.isFramebufferTexture=!0;var Ph=class extends at{constructor(e,t,n,i,s,o,a,l,c,h,u,d){super(null,o,a,l,c,h,i,s,u,d);this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}};Ph.prototype.isCompressedTexture=!0;var oo=class extends at{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c);this.needsUpdate=!0}};oo.prototype.isCanvasTexture=!0;var Us=class extends Ne{constructor(e=1,t=8,n=0,i=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],o=[],a=[],l=[],c=new T,h=new q;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Fe(o,3)),this.setAttribute("normal",new Fe(a,3)),this.setAttribute("uv",new Fe(l,2))}static fromJSON(e){return new Us(e.radius,e.segments,e.thetaStart,e.thetaLength)}};var Dy=new T,Fy=new T,Ny=new T,By=new ht;var Ot=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);let h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(s-1)}getTangent(e,t){let n=1e-4,i=e-n,s=e+n;i<0&&(i=0),s>1&&(s=1);let o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new q:new T);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new T,i=[],s=[],o=[],a=new T,l=new me;for(let f=0;f<=e;f++){let m=f/e;i[f]=this.getTangentAt(m,new T)}s[0]=new T,o[0]=new T;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Mt(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(Mt(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Hs=class extends Ot{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super();this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let n=t||new q,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}};Hs.prototype.isEllipseCurve=!0;var Za=class extends Hs{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o);this.type="ArcCurve"}};Za.prototype.isArcCurve=!0;function Ja(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(s){let o=s*s,a=o*s;return r+e*s+t*o+n*a}}}var ao=new T,$a=new Ja,Ka=new Ja,Qa=new Ja,Vn=class extends Ot{constructor(e=[],t=!1,n="centripetal",i=.5){super();this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new T){let n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(ao.subVectors(i[0],i[1]).add(i[0]),c=ao);let u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(ao.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=ao),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),y<1e-4&&(y=x),$a.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,x,y),Ka.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,x,y),Qa.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,x,y)}else this.curveType==="catmullrom"&&($a.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ka.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Qa.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set($a.calc(l),Ka.calc(l),Qa.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new T().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};Vn.prototype.isCatmullRomCurve3=!0;function Ih(r,e,t,n,i){let s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function b0(r,e){let t=1-r;return t*t*e}function M0(r,e){return 2*(1-r)*r*e}function S0(r,e){return r*r*e}function ks(r,e,t,n){return b0(r,e)+M0(r,t)+S0(r,n)}function T0(r,e){let t=1-r;return t*t*t*e}function E0(r,e){let t=1-r;return 3*t*t*r*e}function A0(r,e){return 3*(1-r)*r*r*e}function R0(r,e){return r*r*r*e}function Gs(r,e,t,n,i){return T0(r,e)+E0(r,t)+A0(r,n)+R0(r,i)}var lo=class extends Ot{constructor(e=new q,t=new q,n=new q,i=new q){super();this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new q){let n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Gs(e,i.x,s.x,o.x,a.x),Gs(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};lo.prototype.isCubicBezierCurve=!0;var el=class extends Ot{constructor(e=new T,t=new T,n=new T,i=new T){super();this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new T){let n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Gs(e,i.x,s.x,o.x,a.x),Gs(e,i.y,s.y,o.y,a.y),Gs(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};el.prototype.isCubicBezierCurve3=!0;var Vs=class extends Ot{constructor(e=new q,t=new q){super();this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new q){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){let n=t||new q;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};Vs.prototype.isLineCurve=!0;var Dh=class extends Ot{constructor(e=new T,t=new T){super();this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new T){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},co=class extends Ot{constructor(e=new q,t=new q,n=new q){super();this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new q){let n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(ks(e,i.x,s.x,o.x),ks(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};co.prototype.isQuadraticBezierCurve=!0;var ho=class extends Ot{constructor(e=new T,t=new T,n=new T){super();this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new T){let n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(ks(e,i.x,s.x,o.x),ks(e,i.y,s.y,o.y),ks(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};ho.prototype.isQuadraticBezierCurve3=!0;var uo=class extends Ot{constructor(e=[]){super();this.type="SplineCurve",this.points=e}getPoint(e,t=new q){let n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Ih(a,l.x,c.x,h.x,u.x),Ih(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new q().fromArray(i))}return this}};uo.prototype.isSplineCurve=!0;var tl=Object.freeze({__proto__:null,ArcCurve:Za,CatmullRomCurve3:Vn,CubicBezierCurve:lo,CubicBezierCurve3:el,EllipseCurve:Hs,LineCurve:Vs,LineCurve3:Dh,QuadraticBezierCurve:co,QuadraticBezierCurve3:ho,SplineCurve:uo}),Fh=class extends Ot{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Vs(t,e))}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let o=s[i],a=o&&o.isEllipseCurve?e*2:o&&(o.isLineCurve||o.isLineCurve3)?1:o&&o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new tl[i.type]().fromJSON(i))}return this}},fo=class extends Fh{constructor(e){super();this.type="Path",this.currentPoint=new q,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Vs(this.currentPoint.clone(),new q(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new co(this.currentPoint.clone(),new q(e,t),new q(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){let a=new lo(this.currentPoint.clone(),new q(e,t),new q(n,i),new q(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new uo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){let c=new Hs(e,t,n,i,s,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ki=class extends fo{constructor(e){super(e);this.uuid=Ft(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new fo().fromJSON(i))}return this}},L0={triangulate:function(r,e,t=2){let n=e&&e.length,i=n?e[0]*t:r.length,s=Nh(r,0,i,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,u,d,f;if(n&&(s=F0(r,e,s,t)),r.length>80*t){a=c=r[0],l=h=r[1];for(let m=t;m<i;m+=t)u=r[m],d=r[m+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?1/f:0}return Ws(s,o,t,a,l,f),o}};function Nh(r,e,t,n,i){let s,o;if(i===q0(r,e,t,n)>0)for(s=e;s<t;s+=n)o=zh(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=zh(s,r[s],r[s+1],o);return o&&po(o,o.next)&&(Xs(o),o=o.next),o}function Wn(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(po(t,t.next)||rt(t.prev,t,t.next)===0)){if(Xs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ws(r,e,t,n,i,s,o){if(!r)return;!o&&s&&U0(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?P0(r,n,i,s):C0(r)){e.push(l.i/t),e.push(r.i/t),e.push(c.i/t),Xs(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=I0(Wn(r),e,t),Ws(r,e,t,n,i,s,2)):o===2&&D0(r,e,t,n,i,s):Ws(Wn(r),e,t,n,i,s,1);break}}}function C0(r){let e=r.prev,t=r,n=r.next;if(rt(e,t,n)>=0)return!1;let i=r.next.next;for(;i!==r.prev;){if(Qi(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&rt(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function P0(r,e,t,n){let i=r.prev,s=r,o=r.next;if(rt(i,s,o)>=0)return!1;let a=i.x<s.x?i.x<o.x?i.x:o.x:s.x<o.x?s.x:o.x,l=i.y<s.y?i.y<o.y?i.y:o.y:s.y<o.y?s.y:o.y,c=i.x>s.x?i.x>o.x?i.x:o.x:s.x>o.x?s.x:o.x,h=i.y>s.y?i.y>o.y?i.y:o.y:s.y>o.y?s.y:o.y,u=nl(a,l,e,t,n),d=nl(c,h,e,t,n),f=r.prevZ,m=r.nextZ;for(;f&&f.z>=u&&m&&m.z<=d;){if(f!==r.prev&&f!==r.next&&Qi(i.x,i.y,s.x,s.y,o.x,o.y,f.x,f.y)&&rt(f.prev,f,f.next)>=0||(f=f.prevZ,m!==r.prev&&m!==r.next&&Qi(i.x,i.y,s.x,s.y,o.x,o.y,m.x,m.y)&&rt(m.prev,m,m.next)>=0))return!1;m=m.nextZ}for(;f&&f.z>=u;){if(f!==r.prev&&f!==r.next&&Qi(i.x,i.y,s.x,s.y,o.x,o.y,f.x,f.y)&&rt(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;m&&m.z<=d;){if(m!==r.prev&&m!==r.next&&Qi(i.x,i.y,s.x,s.y,o.x,o.y,m.x,m.y)&&rt(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function I0(r,e,t){let n=r;do{let i=n.prev,s=n.next.next;!po(i,s)&&Bh(i,n,n.next,s)&&qs(i,s)&&qs(s,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(s.i/t),Xs(n),Xs(n.next),n=r=s),n=n.next}while(n!==r);return Wn(n)}function D0(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&G0(o,a)){let l=Oh(o,a);o=Wn(o,o.next),l=Wn(l,l.next),Ws(o,e,t,n,i,s),Ws(l,e,t,n,i,s);return}a=a.next}o=o.next}while(o!==r)}function F0(r,e,t,n){let i=[],s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=Nh(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(k0(c));for(i.sort(N0),s=0;s<i.length;s++)B0(i[s],t),t=Wn(t,t.next);return t}function N0(r,e){return r.x-e.x}function B0(r,e){if(e=O0(r,e),e){let t=Oh(e,r);Wn(e,e.next),Wn(t,t.next)}}function O0(r,e){let t=e,n=r.x,i=r.y,s=-1/0,o;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>s){if(s=d,d===n){if(i===t.y)return t;if(i===t.next.y)return t.next}o=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!o)return null;if(n===s)return o;let a=o,l=o.x,c=o.y,h=1/0,u;t=o;do n>=t.x&&t.x>=l&&n!==t.x&&Qi(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)&&(u=Math.abs(i-t.y)/(n-t.x),qs(t,r)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&z0(o,t)))&&(o=t,h=u)),t=t.next;while(t!==a);return o}function z0(r,e){return rt(r.prev,r,e.prev)<0&&rt(e.next,r,r.next)<0}function U0(r,e,t,n){let i=r;do i.z===null&&(i.z=nl(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,H0(i)}function H0(r){let e,t,n,i,s,o,a,l,c=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(o>1);return r}function nl(r,e,t,n,i){return r=32767*(r-t)*i,e=32767*(e-n)*i,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function k0(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Qi(r,e,t,n,i,s,o,a){return(i-o)*(e-a)-(r-o)*(s-a)>=0&&(r-o)*(n-a)-(t-o)*(e-a)>=0&&(t-o)*(s-a)-(i-o)*(n-a)>=0}function G0(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!V0(r,e)&&(qs(r,e)&&qs(e,r)&&W0(r,e)&&(rt(r.prev,r,e.prev)||rt(r,e.prev,e))||po(r,e)&&rt(r.prev,r,r.next)>0&&rt(e.prev,e,e.next)>0)}function rt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function po(r,e){return r.x===e.x&&r.y===e.y}function Bh(r,e,t,n){let i=go(rt(r,e,t)),s=go(rt(r,e,n)),o=go(rt(t,n,r)),a=go(rt(t,n,e));return!!(i!==s&&o!==a||i===0&&mo(r,t,e)||s===0&&mo(r,n,e)||o===0&&mo(t,r,n)||a===0&&mo(t,e,n))}function mo(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function go(r){return r>0?1:r<0?-1:0}function V0(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Bh(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function qs(r,e){return rt(r.prev,r,r.next)<0?rt(r,e,r.next)>=0&&rt(r,r.prev,e)>=0:rt(r,e,r.prev)<0||rt(r,r.next,e)<0}function W0(r,e){let t=r,n=!1,i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Oh(r,e){let t=new il(r.i,r.x,r.y),n=new il(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function zh(r,e,t,n){let i=new il(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Xs(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function il(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function q0(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}var wn=class{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return wn.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];Uh(e),Hh(n,e);let o=e.length;t.forEach(Uh);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Hh(n,t[l]);let a=L0.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Uh(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Hh(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var ui=class extends Ne{constructor(e=new Ki([new q(.5,.5),new q(-.5,.5),new q(-.5,-.5),new q(.5,-.5)]),t={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],s=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Fe(i,3)),this.setAttribute("uv",new Fe(s,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,y=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,g=t.UVGenerator!==void 0?t.UVGenerator:X0;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),u=t.amount);let w,v=!1,_,L,I,B;p&&(w=p.getSpacedPoints(h),v=!0,d=!1,_=p.computeFrenetFrames(h,!1),L=new T,I=new T,B=new T),d||(y=0,f=0,m=0,x=0);let K=a.extractPoints(c),W=K.shape,D=K.holes;if(!wn.isClockWise(W)){W=W.reverse();for(let G=0,ne=D.length;G<ne;G++){let se=D[G];wn.isClockWise(se)&&(D[G]=se.reverse())}}let b=wn.triangulateShape(W,D),F=W;for(let G=0,ne=D.length;G<ne;G++){let se=D[G];W=W.concat(se)}function O(G,ne,se){return ne||console.error("THREE.ExtrudeGeometry: vec does not exist"),ne.clone().multiplyScalar(se).add(G)}let N=W.length,U=b.length;function ie(G,ne,se){let de,re,Te,Ee=G.x-ne.x,De=G.y-ne.y,Ze=se.x-G.x,C=se.y-G.y,E=Ee*Ee+De*De,j=Ee*C-De*Ze;if(Math.abs(j)>Number.EPSILON){let ee=Math.sqrt(E),oe=Math.sqrt(Ze*Ze+C*C),Q=ne.x-De/ee,Se=ne.y+Ee/ee,ve=se.x-C/oe,P=se.y+Ze/oe,R=((ve-Q)*C-(P-Se)*Ze)/(Ee*C-De*Ze);de=Q+Ee*R-G.x,re=Se+De*R-G.y;let $=de*de+re*re;if($<=2)return new q(de,re);Te=Math.sqrt($/2)}else{let ee=!1;Ee>Number.EPSILON?Ze>Number.EPSILON&&(ee=!0):Ee<-Number.EPSILON?Ze<-Number.EPSILON&&(ee=!0):Math.sign(De)===Math.sign(C)&&(ee=!0),ee?(de=-De,re=Ee,Te=Math.sqrt(E)):(de=Ee,re=De,Te=Math.sqrt(E/2))}return new q(de/Te,re/Te)}let ae=[];for(let G=0,ne=F.length,se=ne-1,de=G+1;G<ne;G++,se++,de++)se===ne&&(se=0),de===ne&&(de=0),ae[G]=ie(F[G],F[se],F[de]);let V=[],X,ue=ae.concat();for(let G=0,ne=D.length;G<ne;G++){let se=D[G];X=[];for(let de=0,re=se.length,Te=re-1,Ee=de+1;de<re;de++,Te++,Ee++)Te===re&&(Te=0),Ee===re&&(Ee=0),X[de]=ie(se[de],se[Te],se[Ee]);V.push(X),ue=ue.concat(X)}for(let G=0;G<y;G++){let ne=G/y,se=f*Math.cos(ne*Math.PI/2),de=m*Math.sin(ne*Math.PI/2)+x;for(let re=0,Te=F.length;re<Te;re++){let Ee=O(F[re],ae[re],de);Ce(Ee.x,Ee.y,-se)}for(let re=0,Te=D.length;re<Te;re++){let Ee=D[re];X=V[re];for(let De=0,Ze=Ee.length;De<Ze;De++){let C=O(Ee[De],X[De],de);Ce(C.x,C.y,-se)}}}let he=m+x;for(let G=0;G<N;G++){let ne=d?O(W[G],ue[G],he):W[G];v?(I.copy(_.normals[0]).multiplyScalar(ne.x),L.copy(_.binormals[0]).multiplyScalar(ne.y),B.copy(w[0]).add(I).add(L),Ce(B.x,B.y,B.z)):Ce(ne.x,ne.y,0)}for(let G=1;G<=h;G++)for(let ne=0;ne<N;ne++){let se=d?O(W[ne],ue[ne],he):W[ne];v?(I.copy(_.normals[G]).multiplyScalar(se.x),L.copy(_.binormals[G]).multiplyScalar(se.y),B.copy(w[G]).add(I).add(L),Ce(B.x,B.y,B.z)):Ce(se.x,se.y,u/h*G)}for(let G=y-1;G>=0;G--){let ne=G/y,se=f*Math.cos(ne*Math.PI/2),de=m*Math.sin(ne*Math.PI/2)+x;for(let re=0,Te=F.length;re<Te;re++){let Ee=O(F[re],ae[re],de);Ce(Ee.x,Ee.y,u+se)}for(let re=0,Te=D.length;re<Te;re++){let Ee=D[re];X=V[re];for(let De=0,Ze=Ee.length;De<Ze;De++){let C=O(Ee[De],X[De],de);v?Ce(C.x,C.y+w[h-1].y,w[h-1].x+se):Ce(C.x,C.y,u+se)}}}pe(),Be();function pe(){let G=i.length/3;if(d){let ne=0,se=N*ne;for(let de=0;de<U;de++){let re=b[de];we(re[2]+se,re[1]+se,re[0]+se)}ne=h+y*2,se=N*ne;for(let de=0;de<U;de++){let re=b[de];we(re[0]+se,re[1]+se,re[2]+se)}}else{for(let ne=0;ne<U;ne++){let se=b[ne];we(se[2],se[1],se[0])}for(let ne=0;ne<U;ne++){let se=b[ne];we(se[0]+N*h,se[1]+N*h,se[2]+N*h)}}n.addGroup(G,i.length/3-G,0)}function Be(){let G=i.length/3,ne=0;Z(F,ne),ne+=F.length;for(let se=0,de=D.length;se<de;se++){let re=D[se];Z(re,ne),ne+=re.length}n.addGroup(G,i.length/3-G,1)}function Z(G,ne){let se=G.length;for(;--se>=0;){let de=se,re=se-1;re<0&&(re=G.length-1);for(let Te=0,Ee=h+y*2;Te<Ee;Te++){let De=N*Te,Ze=N*(Te+1),C=ne+de+De,E=ne+re+De,j=ne+re+Ze,ee=ne+de+Ze;ge(C,E,j,ee)}}}function Ce(G,ne,se){l.push(G),l.push(ne),l.push(se)}function we(G,ne,se){ye(G),ye(ne),ye(se);let de=i.length/3,re=g.generateTopUV(n,i,de-3,de-2,de-1);He(re[0]),He(re[1]),He(re[2])}function ge(G,ne,se,de){ye(G),ye(ne),ye(de),ye(ne),ye(se),ye(de);let re=i.length/3,Te=g.generateSideWallUV(n,i,re-6,re-3,re-2,re-1);He(Te[0]),He(Te[1]),He(Te[3]),He(Te[1]),He(Te[2]),He(Te[3])}function ye(G){i.push(l[G*3+0]),i.push(l[G*3+1]),i.push(l[G*3+2])}function He(G){s.push(G.x),s.push(G.y)}}}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Y0(t,n,e)}static fromJSON(e,t){let n=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new tl[i.type]().fromJSON(i)),new ui(n,e.options)}},X0={generateTopUV:function(r,e,t,n,i){let s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new q(s,o),new q(a,l),new q(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],m=e[i*3+2],x=e[s*3],y=e[s*3+1],p=e[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new q(o,1-l),new q(c,1-u),new q(d,1-m),new q(x,1-p)]:[new q(a,1-l),new q(h,1-u),new q(f,1-m),new q(y,1-p)]}};function Y0(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){let s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var es=class extends Ne{constructor(e=.5,t=1,n=8,i=1,s=0,o=Math.PI*2){super();this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],u=e,d=(t-e)/i,f=new T,m=new q;for(let x=0;x<=i;x++){for(let y=0;y<=n;y++){let p=s+y/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let x=0;x<i;x++){let y=x*(n+1);for(let p=0;p<n;p++){let g=p+y,w=g,v=g+n+1,_=g+n+2,L=g+1;a.push(w,v,L),a.push(v,_,L)}}this.setIndex(a),this.setAttribute("position",new Fe(l,3)),this.setAttribute("normal",new Fe(c,3)),this.setAttribute("uv",new Fe(h,2))}static fromJSON(e){return new es(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},xo=class extends Ne{constructor(e=new Ki([new q(0,.5),new q(-.5,-.5),new q(.5,-.5)]),t=12){super();this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],s=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Fe(i,3)),this.setAttribute("normal",new Fe(s,3)),this.setAttribute("uv",new Fe(o,2));function c(h){let u=i.length/3,d=h.extractPoints(t),f=d.shape,m=d.holes;wn.isClockWise(f)===!1&&(f=f.reverse());for(let y=0,p=m.length;y<p;y++){let g=m[y];wn.isClockWise(g)===!0&&(m[y]=g.reverse())}let x=wn.triangulateShape(f,m);for(let y=0,p=m.length;y<p;y++){let g=m[y];f=f.concat(g)}for(let y=0,p=f.length;y<p;y++){let g=f[y];i.push(g.x,g.y,0),s.push(0,0,1),o.push(g.x,g.y)}for(let y=0,p=x.length;y<p;y++){let g=x[y],w=g[0]+u,v=g[1]+u,_=g[2]+u;n.push(w,v,_),l+=3}}}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return j0(t,e)}static fromJSON(e,t){let n=[];for(let i=0,s=e.shapes.length;i<s;i++){let o=t[e.shapes[i]];n.push(o)}return new xo(n,e.curveSegments)}};function j0(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){let i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}var Ct=class extends Ne{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new T,d=new T,f=[],m=[],x=[],y=[];for(let p=0;p<=n;p++){let g=[],w=p/n,v=0;p==0&&o==0?v=.5/t:p==n&&l==Math.PI&&(v=-.5/t);for(let _=0;_<=t;_++){let L=_/t;u.x=-e*Math.cos(i+L*s)*Math.sin(o+w*a),u.y=e*Math.cos(o+w*a),u.z=e*Math.sin(i+L*s)*Math.sin(o+w*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),y.push(L+v,1-w),g.push(c++)}h.push(g)}for(let p=0;p<n;p++)for(let g=0;g<t;g++){let w=h[p][g+1],v=h[p][g],_=h[p+1][g],L=h[p+1][g+1];(p!==0||o>0)&&f.push(w,v,L),(p!==n-1||l<Math.PI)&&f.push(v,_,L)}this.setIndex(f),this.setAttribute("position",new Fe(m,3)),this.setAttribute("normal",new Fe(x,3)),this.setAttribute("uv",new Fe(y,2))}static fromJSON(e){return new Ct(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var bn=class extends Ne{constructor(e=new ho(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),t=64,n=1,i=8,s=!1){super();this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};let o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new T,l=new T,c=new q,h=new T,u=[],d=[],f=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new Fe(u,3)),this.setAttribute("normal",new Fe(d,3)),this.setAttribute("uv",new Fe(f,2));function x(){for(let w=0;w<t;w++)y(w);y(s===!1?t:0),g(),p()}function y(w){h=e.getPointAt(w/t,h);let v=o.normals[w],_=o.binormals[w];for(let L=0;L<=i;L++){let I=L/i*Math.PI*2,B=Math.sin(I),K=-Math.cos(I);l.x=K*v.x+B*_.x,l.y=K*v.y+B*_.y,l.z=K*v.z+B*_.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let w=1;w<=t;w++)for(let v=1;v<=i;v++){let _=(i+1)*(w-1)+(v-1),L=(i+1)*w+(v-1),I=(i+1)*w+v,B=(i+1)*(w-1)+v;m.push(_,L,B),m.push(L,I,B)}}function g(){for(let w=0;w<=t;w++)for(let v=0;v<=i;v++)c.x=w/t,c.y=v/i,f.push(c.x,c.y)}}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new bn(new tl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var yo=class extends ut{constructor(e){super();this.type="ShadowMaterial",this.color=new te(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}};yo.prototype.isShadowMaterial=!0;var jt=class extends ut{constructor(e){super();this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cn,this.normalScale=new q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}};jt.prototype.isMeshStandardMaterial=!0;var Mn=class extends jt{constructor(e){super();this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new q(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenColor=new te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new te(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};Mn.prototype.isMeshPhysicalMaterial=!0;var kh=class extends ut{constructor(e){super();this.type="MeshPhongMaterial",this.color=new te(16777215),this.specular=new te(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cn,this.normalScale=new q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ur,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}};kh.prototype.isMeshPhongMaterial=!0;var Gh=class extends ut{constructor(e){super();this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new te(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cn,this.normalScale=new q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}};Gh.prototype.isMeshToonMaterial=!0;var Vh=class extends ut{constructor(e){super();this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cn,this.normalScale=new q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};Vh.prototype.isMeshNormalMaterial=!0;var Wh=class extends ut{constructor(e){super();this.type="MeshLambertMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ur,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}};Wh.prototype.isMeshLambertMaterial=!0;var vo=class extends ut{constructor(e){super();this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new te(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cn,this.normalScale=new q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this}};vo.prototype.isMeshMatcapMaterial=!0;var qh=class extends ln{constructor(e){super();this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};qh.prototype.isLineDashedMaterial=!0;var it={arraySlice:function(r,e,t){return it.isTypedArray(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)},convertArray:function(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)},isTypedArray:function(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)},getKeyframeOrder:function(r){function e(i,s){return r[i]-r[s]}let t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n},sortedArray:function(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){let a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i},flattenJSON:function(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)},subclip:function(r,e,t,n,i=30){let s=r.clone();s.name=e;let o=[];for(let l=0;l<s.tracks.length;++l){let c=s.tracks[l],h=c.getValueSize(),u=[],d=[];for(let f=0;f<c.times.length;++f){let m=c.times[f]*i;if(!(m<t||m>=n)){u.push(c.times[f]);for(let x=0;x<h;++x)d.push(c.values[f*h+x])}}u.length!==0&&(c.times=it.convertArray(u,c.times.constructor),c.values=it.convertArray(d,c.values.constructor),o.push(c))}s.tracks=o;let a=1/0;for(let l=0;l<s.tracks.length;++l)a>s.tracks[l].times[0]&&(a=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(r,e=0,t=r,n=30){n<=0&&(n=30);let i=t.tracks.length,s=e/n;for(let o=0;o<i;++o){let a=t.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;let c=r.tracks.find(function(p){return p.name===a.name&&p.ValueTypeName===l});if(c===void 0)continue;let h=0,u=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0,f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);let m=a.times.length-1,x;if(s<=a.times[0]){let p=h,g=u-h;x=it.arraySlice(a.values,p,g)}else if(s>=a.times[m]){let p=m*u+h,g=p+u-h;x=it.arraySlice(a.values,p,g)}else{let p=a.createInterpolant(),g=h,w=u-h;p.evaluate(s),x=it.arraySlice(p.resultBuffer,g,w)}l==="quaternion"&&new ct().fromArray(x).normalize().conjugate().toArray(x);let y=c.times.length;for(let p=0;p<y;++p){let g=p*f+d;if(l==="quaternion")ct.multiplyQuaternionsFlat(c.values,g,x,0,c.values,g);else{let w=f-d*2;for(let v=0;v<w;++v)c.values[g+v]-=x[v]}}}return r.blendMode=ac,r}},Zt=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,s)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,s,e)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}};Zt.prototype.beforeStart_=Zt.prototype.copySampleValue_;Zt.prototype.afterEnd_=Zt.prototype.copySampleValue_;var Xh=class extends Zt{constructor(e,t,n,i){super(e,t,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ei,endingEnd:Ei}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ai:s=e,a=2*t-n;break;case gr:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ai:o=e,l=2*n-t;break;case gr:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),x=m*m,y=x*m,p=-d*y+2*d*x-d*m,g=(1+d)*y+(-1.5-2*d)*x+(-.5+d)*m+1,w=(-1-f)*y+(1.5+f)*x+.5*m,v=f*y-f*x;for(let _=0;_!==a;++_)s[_]=p*o[h+_]+g*o[c+_]+w*o[l+_]+v*o[u+_];return s}},sl=class extends Zt{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}},Yh=class extends Zt{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Jt=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=it.convertArray(t,this.TimeBufferType),this.values=it.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:it.convertArray(e.times,Array),values:it.convertArray(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Yh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new sl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Xh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ti:t=this.InterpolantFactoryMethodDiscrete;break;case ii:t=this.InterpolantFactoryMethodLinear;break;case ia:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ti;case this.InterpolantFactoryMethodLinear:return ii;case this.InterpolantFactoryMethodSmooth:return ia}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=it.arraySlice(n,s,o),this.values=it.arraySlice(this.values,s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&it.isTypedArray(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=it.arraySlice(this.times),t=it.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===ia,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let x=t[u+m];if(x!==t[d+m]||x!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=it.arraySlice(e,0,o),this.values=it.arraySlice(t,0,o*n)):(this.times=e,this.values=t),this}clone(){let e=it.arraySlice(this.times,0),t=it.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Jt.prototype.TimeBufferType=Float32Array;Jt.prototype.ValueBufferType=Float32Array;Jt.prototype.DefaultInterpolation=ii;var di=class extends Jt{};di.prototype.ValueTypeName="bool";di.prototype.ValueBufferType=Array;di.prototype.DefaultInterpolation=Ti;di.prototype.InterpolantFactoryMethodLinear=void 0;di.prototype.InterpolantFactoryMethodSmooth=void 0;var rl=class extends Jt{};rl.prototype.ValueTypeName="color";var fi=class extends Jt{};fi.prototype.ValueTypeName="number";var jh=class extends Zt{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)ct.slerpFlat(s,0,o,c-a,o,c,l);return s}},Sn=class extends Jt{InterpolantFactoryMethodLinear(e){return new jh(this.times,this.values,this.getValueSize(),e)}};Sn.prototype.ValueTypeName="quaternion";Sn.prototype.DefaultInterpolation=ii;Sn.prototype.InterpolantFactoryMethodSmooth=void 0;var pi=class extends Jt{};pi.prototype.ValueTypeName="string";pi.prototype.ValueBufferType=Array;pi.prototype.DefaultInterpolation=Ti;pi.prototype.InterpolantFactoryMethodLinear=void 0;pi.prototype.InterpolantFactoryMethodSmooth=void 0;var mi=class extends Jt{};mi.prototype.ValueTypeName="vector";var Ys=class{constructor(e,t=-1,n,i=sa){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ft(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(J0(n[o]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Jt.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);let h=it.getKeyframeOrder(l);l=it.sortedArray(l,1,h),c=it.sortedArray(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new fi(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(s);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,m,x){if(f.length!==0){let y=[],p=[];it.flattenJSON(f,y,p,m),y.length!==0&&x.push(new u(d,y,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let x=0;x<d[m].morphTargets.length;x++)f[d[m].morphTargets[x]]=-1;for(let x in f){let y=[],p=[];for(let g=0;g!==d[m].morphTargets.length;++g){let w=d[m];y.push(w.time),p.push(w.morphTarget===x?1:0)}i.push(new fi(".morphTargetInfluence["+x+"]",y,p))}l=f.length*(o||1)}else{let f=".bones["+t[u].name+"]";n(mi,f+".position",d,"pos",i),n(Sn,f+".quaternion",d,"rot",i),n(mi,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Z0(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return fi;case"vector":case"vector2":case"vector3":case"vector4":return mi;case"color":return rl;case"quaternion":return Sn;case"bool":case"boolean":return di;case"string":return pi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function J0(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Z0(r.type);if(r.times===void 0){let t=[],n=[];it.flattenJSON(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}var ts={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},Zh=class{constructor(e,t,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},$0=new Zh,zt=class{constructor(e){this.manager=e!==void 0?e:$0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}},Tn={},gi=class extends zt{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=ts.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Tn[e]!==void 0){Tn[e].push({onLoad:t,onProgress:n,onError:i});return}Tn[e]=[],Tn[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"});fetch(o).then(a=>{if(a.status===200||a.status===0){if(a.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||a.body.getReader===void 0)return a;let l=Tn[e],c=a.body.getReader(),h=a.headers.get("Content-Length"),u=h?parseInt(h):0,d=u!==0,f=0,m=new ReadableStream({start(x){y();function y(){c.read().then(({done:p,value:g})=>{if(p)x.close();else{f+=g.byteLength;let w=new ProgressEvent("progress",{lengthComputable:d,loaded:f,total:u});for(let v=0,_=l.length;v<_;v++){let L=l[v];L.onProgress&&L.onProgress(w)}x.enqueue(g),y()}})}}});return new Response(m)}else throw Error(`fetch for "${a.url}" responded with ${a.status}: ${a.statusText}`)}).then(a=>{switch(this.responseType){case"arraybuffer":return a.arrayBuffer();case"blob":return a.blob();case"document":return a.text().then(l=>new DOMParser().parseFromString(l,this.mimeType));case"json":return a.json();default:return a.text()}}).then(a=>{ts.add(e,a);let l=Tn[e];delete Tn[e];for(let c=0,h=l.length;c<h;c++){let u=l[c];u.onLoad&&u.onLoad(a)}}).catch(a=>{let l=Tn[e];if(l===void 0)throw this.manager.itemError(e),a;delete Tn[e];for(let c=0,h=l.length;c<h;c++){let u=l[c];u.onError&&u.onError(a)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var ol=class extends zt{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=ts.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=vr("img");function l(){h(),ts.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}},Jh=class extends zt{constructor(e){super(e)}load(e,t,n,i){let s=new Ts,o=new ol(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(h){s.images[c]=h,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return s}};var qn=class extends zt{constructor(e){super(e)}load(e,t,n,i){let s=new at,o=new ol(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},$t=class extends Me{constructor(e,t=1){super();this.type="Light",this.color=new te(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};$t.prototype.isLight=!0;var $h=class extends $t{constructor(e,t,n){super(e,n);this.type="HemisphereLight",this.position.copy(Me.DefaultUp),this.updateMatrix(),this.groundColor=new te(t)}copy(e){return $t.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}};$h.prototype.isHemisphereLight=!0;var Kh=new me,Qh=new T,eu=new T,_o=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new q(512,512),this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Es,this._frameExtents=new q(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Qh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qh),eu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(eu),t.updateMatrixWorld(),Kh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},al=class extends _o{constructor(){super(new dt(50,1,.5,500));this.focus=1}updateMatrices(e){let t=this.camera,n=xs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}};al.prototype.isSpotLightShadow=!0;var wo=class extends $t{constructor(e,t,n=0,i=Math.PI/3,s=0,o=1){super(e,t);this.type="SpotLight",this.position.copy(Me.DefaultUp),this.updateMatrix(),this.target=new Me,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.shadow=new al}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};wo.prototype.isSpotLight=!0;var tu=new me,js=new T,ll=new T,cl=class extends _o{constructor(){super(new dt(90,1,.5,500));this._frameExtents=new q(4,2),this._viewportCount=6,this._viewports=[new Ye(2,1,1,1),new Ye(0,1,1,1),new Ye(3,1,1,1),new Ye(1,1,1,1),new Ye(3,0,1,1),new Ye(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),js.setFromMatrixPosition(e.matrixWorld),n.position.copy(js),ll.copy(n.position),ll.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ll),n.updateMatrixWorld(),i.makeTranslation(-js.x,-js.y,-js.z),tu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tu)}};cl.prototype.isPointLightShadow=!0;var ns=class extends $t{constructor(e,t,n=0,i=1){super(e,t);this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new cl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}};ns.prototype.isPointLight=!0;var hl=class extends _o{constructor(){super(new Gi(-5,5,5,-5,.5,500))}};hl.prototype.isDirectionalLightShadow=!0;var is=class extends $t{constructor(e,t){super(e,t);this.type="DirectionalLight",this.position.copy(Me.DefaultUp),this.updateMatrix(),this.target=new Me,this.shadow=new hl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};is.prototype.isDirectionalLight=!0;var bo=class extends $t{constructor(e,t){super(e,t);this.type="AmbientLight"}};bo.prototype.isAmbientLight=!0;var nu=class extends $t{constructor(e,t,n=10,i=10){super(e,t);this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}};nu.prototype.isRectAreaLight=!0;var ul=class{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new T)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){let n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*i),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*i)),t.addScaledVector(o[5],1.092548*(i*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(n*s)),t.addScaledVector(o[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){let n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*i),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*i),t.addScaledVector(o[5],2*.429043*i*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*n*s),t.addScaledVector(o[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){let n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}};ul.prototype.isSphericalHarmonics3=!0;var Mo=class extends $t{constructor(e=new ul,t=1){super(void 0,t);this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){let t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}};Mo.prototype.isLightProbe=!0;var Gt=class{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},iu=class extends Ne{constructor(){super();this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){let e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};iu.prototype.isInstancedBufferGeometry=!0;var So=class extends zt{constructor(e){super(e);typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=ts.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){ts.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}};So.prototype.isImageBitmapLoader=!0;var To,su={getContext:function(){return To===void 0&&(To=new(window.AudioContext||window.webkitAudioContext)),To},setContext:function(r){To=r}},Eo=class extends zt{constructor(e){super(e)}load(e,t,n,i){let s=this,o=new gi(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{let l=a.slice(0);su.getContext().decodeAudioData(l,function(h){t(h)})}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}},ru=class extends Mo{constructor(e,t,n=1){super(void 0,n);let i=new te().set(e),s=new te().set(t),o=new T(i.r,i.g,i.b),a=new T(s.r,s.g,s.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(a).multiplyScalar(l),this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(c)}};ru.prototype.isHemisphereLightProbe=!0;var ou=class extends Mo{constructor(e,t=1){super(void 0,t);let n=new te().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}};ou.prototype.isAmbientLightProbe=!0;var Ao=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=au(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=au();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function au(){return(typeof performance=="undefined"?Date:performance).now()}var xi=new T,lu=new ct,K0=new T,yi=new T,Zs=class extends Me{constructor(){super();this.type="AudioListener",this.context=su.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Ao}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);let t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(xi,lu,K0),yi.set(0,0,-1).applyQuaternion(lu),t.positionX){let i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(xi.x,i),t.positionY.linearRampToValueAtTime(xi.y,i),t.positionZ.linearRampToValueAtTime(xi.z,i),t.forwardX.linearRampToValueAtTime(yi.x,i),t.forwardY.linearRampToValueAtTime(yi.y,i),t.forwardZ.linearRampToValueAtTime(yi.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(xi.x,xi.y,xi.z),t.setOrientation(yi.x,yi.y,yi.z,n.x,n.y,n.z)}},Js=class extends Me{constructor(e){super();this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}};var cu=class{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0,t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}},hu=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,s=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){ct.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){let o=this._workIndex*s;ct.multiplyQuaternionsFlat(e,o,e,t,e,n),ct.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){let o=1-i;for(let a=0;a!==s;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}},dl="\\[\\]\\.:\\/",Q0=new RegExp("["+dl+"]","g"),fl="[^"+dl+"]",ey="[^"+dl.replace("\\.","")+"]",ty=/((?:WC+[\/:])*)/.source.replace("WC",fl),ny=/(WCOD+)?/.source.replace("WCOD",ey),iy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fl),sy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fl),ry=new RegExp("^"+ty+ny+iy+sy+"$"),oy=["material","materials","bones"],uu=class{constructor(e,t,n){let i=n||Ge.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ge=class{constructor(e,t,n){this.path=t,this.parsedPath=n||Ge.parseTrackName(t),this.node=Ge.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ge.Composite(e,t,n):new Ge(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Q0,"")}static parseTrackName(e){let t=ry.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);oy.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=Ge.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ge.Composite=uu;Ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ge.prototype.GetterByBindingType=[Ge.prototype._getValue_direct,Ge.prototype._getValue_array,Ge.prototype._getValue_arrayElement,Ge.prototype._getValue_toArray];Ge.prototype.SetterByBindingTypeAndVersioning=[[Ge.prototype._setValue_direct,Ge.prototype._setValue_direct_setNeedsUpdate,Ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_array,Ge.prototype._setValue_array_setNeedsUpdate,Ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_arrayElement,Ge.prototype._setValue_arrayElement_setNeedsUpdate,Ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_fromArray,Ge.prototype._setValue_fromArray_setNeedsUpdate,Ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var du=class{constructor(){this.uuid=Ft(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){let e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,s=this._bindings,o=s.length,a,l=e.length,c=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){let d=arguments[h],f=d.uuid,m=t[f];if(m===void 0){m=l++,t[f]=m,e.push(d);for(let x=0,y=o;x!==y;++x)s[x].push(new Ge(d,n[x],i[x]))}else if(m<c){a=e[m];let x=--c,y=e[x];t[y.uuid]=m,e[m]=y,t[f]=x,e[x]=d;for(let p=0,g=o;p!==g;++p){let w=s[p],v=w[x],_=w[m];w[m]=v,_===void 0&&(_=new Ge(d,n[p],i[p])),w[x]=_}}else e[m]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length,s=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){let l=arguments[o],c=l.uuid,h=t[c];if(h!==void 0&&h>=s){let u=s++,d=e[u];t[d.uuid]=h,e[h]=d,t[c]=u,e[u]=l;for(let f=0,m=i;f!==m;++f){let x=n[f],y=x[u],p=x[h];x[h]=y,x[u]=p}}}this.nCachedObjects_=s}uncache(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length,s=this.nCachedObjects_,o=e.length;for(let a=0,l=arguments.length;a!==l;++a){let c=arguments[a],h=c.uuid,u=t[h];if(u!==void 0)if(delete t[h],u<s){let d=--s,f=e[d],m=--o,x=e[m];t[f.uuid]=u,e[u]=f,t[x.uuid]=d,e[d]=x,e.pop();for(let y=0,p=i;y!==p;++y){let g=n[y],w=g[d],v=g[m];g[u]=w,g[d]=v,g.pop()}}else{let d=--o,f=e[d];d>0&&(t[f.uuid]=u),e[u]=f,e.pop();for(let m=0,x=i;m!==x;++m){let y=n[m];y[u]=y[d],y.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){let n=this._bindingsIndicesByPath,i=n[e],s=this._bindings;if(i!==void 0)return s[i];let o=this._paths,a=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,u=new Array(c);i=s.length,n[e]=i,o.push(e),a.push(t),s.push(u);for(let d=h,f=l.length;d!==f;++d){let m=l[d];u[d]=new Ge(m,e,t)}return u}unsubscribe_(e){let t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){let i=this._paths,s=this._parsedPaths,o=this._bindings,a=o.length-1,l=o[a],c=e[a];t[c]=n,o[n]=l,o.pop(),s[n]=s[a],s.pop(),i[n]=i[a],i.pop()}}};du.prototype.isAnimationObjectGroup=!0;var fu=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let s=t.tracks,o=s.length,a=new Array(o),l={endingStart:Ei,endingEnd:Ei};for(let c=0;c!==o;++c){let h=s[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Sf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,s=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let l=(e-s)*n;if(l<0||n===0)return;this._startTime=null,t=n*l}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case ac:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case sa:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;n!==null&&(t*=n.evaluate(e)[0],e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,s=this._loopCount,o=n===Tf;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===na){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);let l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=Ai,i.endingEnd=Ai):(e?i.endingStart=this.zeroSlopeAtStart?Ai:Ei:i.endingStart=gr,t?i.endingEnd=this.zeroSlopeAtEnd?Ai:Ei:i.endingEnd=gr)}_scheduleFading(e,t,n){let i=this._mixer,s=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}},Ro=class extends sn{constructor(e){super();this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){let d=i[u],f=d.name,m=h[f];if(m!==void 0)o[u]=m;else{if(m=o[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}let x=t&&t._propertyBindings[u].binding.parsedPath;m=new hu(Ge.create(n,f,x),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),o[u]=m}a[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,s=this._actionsByClip,o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,s=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new sl(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){let i=t||this._root,s=i.uuid,o=typeof e=="string"?Ys.findByName(i,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=sa),l!==void 0){let u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let h=new fu(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,s),h}existingAction(e,t){let n=t||this._root,i=n.uuid,s=typeof e=="string"?Ys.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){let o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(let o in s){let a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};Ro.prototype._controlInterpolantsResultBuffer=new Float32Array(1);var Lo=class{constructor(e){typeof e=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),e=arguments[1]),this.value=e}clone(){return new Lo(this.value.clone===void 0?this.value:this.value.clone())}},pu=class extends Hn{constructor(e,t,n=1){super(e,t);this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};pu.prototype.isInstancedInterleavedBuffer=!0;var mu=class{constructor(e,t,n,i,s){this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}};mu.prototype.isGLBufferAttribute=!0;var Co=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=Math.max(e,Math.min(Math.PI-e,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var gu=new q,ss=class{constructor(e=new q(1/0,1/0),t=new q(-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=gu.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return gu.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};ss.prototype.isBox2=!0;var xu=new T,Po=new T,yu=class{constructor(e=new T,t=new T){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){xu.subVectors(e,this.start),Po.subVectors(this.end,this.start);let n=Po.dot(Po),s=Po.dot(xu)/n;return t&&(s=Mt(s,0,1)),s}closestPointToPoint(e,t,n){let i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Xn=new T,Io=new me,pl=new me,vu=class extends Gn{constructor(e){let t=_u(e),n=new Ne,i=[],s=[],o=new te(0,0,1),a=new te(0,1,0);for(let c=0;c<t.length;c++){let h=t[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}n.setAttribute("position",new Fe(i,3)),n.setAttribute("color",new Fe(s,3));let l=new ln({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l);this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){let t=this.bones,n=this.geometry,i=n.getAttribute("position");pl.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){let a=t[s];a.parent&&a.parent.isBone&&(Io.multiplyMatrices(pl,a.matrixWorld),Xn.setFromMatrixPosition(Io),i.setXYZ(o,Xn.x,Xn.y,Xn.z),Io.multiplyMatrices(pl,a.parent.matrixWorld),Xn.setFromMatrixPosition(Io),i.setXYZ(o+1,Xn.x,Xn.y,Xn.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}};function _u(r){let e=[];r&&r.isBone&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,_u(r.children[t]));return e}var wu=class extends Gn{constructor(e=10,t=10,n=4473924,i=8947848){n=new te(n),i=new te(i);let s=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,f=0,m=-a;d<=t;d++,m+=o){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);let x=d===s?n:i;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}let h=new Ne;h.setAttribute("position",new Fe(l,3)),h.setAttribute("color",new Fe(c,3));let u=new ln({vertexColors:!0,toneMapped:!1});super(h,u);this.type="GridHelper"}};var ay=new Float32Array(1),Oy=new Int32Array(ay.buffer);Ot.create=function(r,e){return console.log("THREE.Curve.create() has been deprecated"),r.prototype=Object.create(Ot.prototype),r.prototype.constructor=r,r.prototype.getPoint=e,r};fo.prototype.fromPoints=function(r){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(r)};wu.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};vu.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};zt.prototype.extractUrlBase=function(r){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Gt.extractUrlBase(r)};zt.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};ss.prototype.center=function(r){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(r)};ss.prototype.empty=function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()};ss.prototype.isIntersectionBox=function(r){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};ss.prototype.size=function(r){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(r)};It.prototype.center=function(r){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(r)};It.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};It.prototype.isIntersectionBox=function(r){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};It.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};It.prototype.size=function(r){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(r)};mn.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Es.prototype.setFromMatrix=function(r){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(r)};yu.prototype.center=function(r){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(r)};yt.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)};yt.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};yt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};yt.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};yt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};yt.prototype.getInverse=function(r){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};me.prototype.extractPosition=function(r){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(r)};me.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)};me.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new T().setFromMatrixColumn(this,3)};me.prototype.setRotationFromQuaternion=function(r){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(r)};me.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};me.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};me.prototype.multiplyVector4=function(r){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};me.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};me.prototype.rotateAxis=function(r){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),r.transformDirection(this)};me.prototype.crossVector=function(r){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};me.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};me.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};me.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};me.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};me.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};me.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};me.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};me.prototype.makeFrustum=function(r,e,t,n,i,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(r,e,n,t,i,s)};me.prototype.getInverse=function(r){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};Ht.prototype.isIntersectionLine=function(r){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(r)};ct.prototype.multiplyVector3=function(r){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),r.applyQuaternion(this)};ct.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};ai.prototype.isIntersectionBox=function(r){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};ai.prototype.isIntersectionPlane=function(r){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(r)};ai.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};ht.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};ht.prototype.barycoordFromPoint=function(r,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(r,e)};ht.prototype.midpoint=function(r){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(r)};ht.prototypenormal=function(r){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(r)};ht.prototype.plane=function(r){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(r)};ht.barycoordFromPoint=function(r,e,t,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),ht.getBarycoord(r,e,t,n,i)};ht.normal=function(r,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),ht.getNormal(r,e,t,n)};Ki.prototype.extractAllPoints=function(r){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(r)};Ki.prototype.extrude=function(r){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new ui(this,r)};Ki.prototype.makeGeometry=function(r){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new xo(this,r)};q.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};q.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};q.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};T.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};T.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};T.prototype.getPositionFromMatrix=function(r){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(r)};T.prototype.getScaleFromMatrix=function(r){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(r)};T.prototype.getColumnFromMatrix=function(r,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,r)};T.prototype.applyProjection=function(r){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(r)};T.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};T.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};T.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Ye.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};Ye.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Me.prototype.getChildByName=function(r){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(r)};Me.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};Me.prototype.translate=function(r,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,r)};Me.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};Me.prototype.applyMatrix=function(r){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(Me.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(r){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=r}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Ie.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(Ie.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),Ef},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Fs.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};dt.prototype.setLens=function(r,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(r)};Object.defineProperties($t.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(r){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=r}},shadowCameraLeft:{set:function(r){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=r}},shadowCameraRight:{set:function(r){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=r}},shadowCameraTop:{set:function(r){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=r}},shadowCameraBottom:{set:function(r){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=r}},shadowCameraNear:{set:function(r){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=r}},shadowCameraFar:{set:function(r){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=r}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(r){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=r}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(r){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=r}},shadowMapHeight:{set:function(r){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=r}}});Object.defineProperties(Qe.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===xr},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(xr)}}});Qe.prototype.setDynamic=function(r){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?xr:ms),this};Qe.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},Qe.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Ne.prototype.addIndex=function(r){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(r)};Ne.prototype.addAttribute=function(r,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(r,new Qe(arguments[1],arguments[2]))):r==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(r,e)};Ne.prototype.addDrawCall=function(r,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(r,e)};Ne.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};Ne.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};Ne.prototype.removeAttribute=function(r){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(r)};Ne.prototype.applyMatrix=function(r){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(Ne.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Hn.prototype.setDynamic=function(r){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?xr:ms),this};Hn.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};ui.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};ui.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};ui.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};Cs.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Lo.prototype.onUpdate=function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this};Object.defineProperties(ut.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new te}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(r){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=r===Vl}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(r){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=r}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(pt.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(r){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=r}}});je.prototype.clearTarget=function(r,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(r),this.clear(e,t,n)};je.prototype.animate=function(r){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(r)};je.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};je.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};je.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};je.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};je.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};je.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};je.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};je.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};je.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};je.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};je.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};je.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};je.prototype.enableScissorTest=function(r){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(r)};je.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};je.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};je.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};je.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};je.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};je.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};je.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};je.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};je.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};je.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(je.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=r}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=r}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(r){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=r===!0?Pt:Dt}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}},gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});Object.defineProperties(lh.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Rt.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=r}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=r}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=r}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=r}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(r){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=r}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(r){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=r}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(r){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=r}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(r){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=r}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(r){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=r}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(r){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=r}}});Js.prototype.load=function(r){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");let e=this;return new Eo().load(r,function(n){e.setBuffer(n)}),this};cu.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()};Ur.prototype.updateCubeMap=function(r,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(r,e)};Ur.prototype.clear=function(r,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(r,e,t,n)};si.crossOrigin=void 0;si.loadTexture=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");let i=new qn;i.setCrossOrigin(this.crossOrigin);let s=i.load(r,t,void 0,n);return e&&(s.mapping=e),s};si.loadTextureCube=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");let i=new Jh;i.setCrossOrigin(this.crossOrigin);let s=i.load(r,t,void 0,n);return e&&(s.mapping=e),s};si.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};si.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jo}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jo);var Do=(r,e=!1,t=0,n=1/0)=>{let s=(r.getIndex()||r.getAttribute("position")).count/3,o=[];for(let c=t;c<s&&c<=n;c++){let h=c%2===0,u=e?1:0;h?o.push(0,0,1,0,1,0,1,0,u):o.push(0,1,0,0,0,1,1,0,u)}let a=new Float32Array(o),l=new Qe(a,3);r.setAttribute("barycentric",l)};var ml=(r={})=>{r&&r.dispose&&lt.fn(r.dispose)&&r.dispose()},$s=(r={})=>{lt.arr(r)&&r.forEach(e=>$s(e)),r.type==="Audio"&&r.isPlaying&&r.stop(),ml(r.geometry),r.material&&(lt.arr(r.material)?r.material:[r.material]).forEach(t=>{Object.values(t).forEach(ml),ml(t)}),r.children.length&&r.children.forEach($s),!r.isScene&&r.dispose&&lt.fn(r.dispose)&&r.dispose(),r.parent&&r.parent.remove(r)};var Ks=({loader:r,file:e,preload:t})=>new Promise((n,i)=>{let s=l=>{let c="",h="";l.lengthComputable&&(c=`${Math.ceil(l.loaded/l.total*100)}% `,h=`/${l.total}`)},o=l=>{n(l)},a=l=>{t.setError(l,"Error loading artifact.",5e3),console.log("error loading artifact",l),i(l)};r.load(e,o,s,a)});var gl=async r=>{let{file:e,preload:t}=r,n=new qn;return await Ks({loader:n,file:e,preload:t})};var os={};sd(os,{BrainwaveScene:()=>Qs,LatkScene:()=>er,LightCubeScene:()=>xl,MolecularVortex:()=>vl,PlyScene:()=>tr,Record3DScene:()=>rs,bubbles:()=>Bo,chromaKey:()=>Oo,displacement:()=>No,pointcloud:()=>Fo});var ly=`
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
`,cy=`
uniform sampler2D map;

varying vec2 vUv;

void main() {
  vec4 color = texture2D(map, vUv);
  gl_FragColor = vec4(color.r, color.g, color.b, 1);
}
`,Fo=({artifact:r,videoElement:e})=>{let t=new kt(e);t.minFilter=tt;let n=800,i=600,s=2,o=5,a=3,l=0,c=new Ne,h=new Float32Array(n*i*3);for(let m=0,x=0;m<h.length;m+=3,x++)h[m]=x%n,h[m+1]=Math.floor(x/n);c.setAttribute("position",new Qe(h,3));let u=new pt({uniforms:{map:{value:t},width:{value:n},height:{value:i},nearClipping:{value:s},farClipping:{value:o},pointSize:{value:a},zOffset:{value:l}},vertexShader:ly,fragmentShader:cy});r.alpha&&(u.blending=Rn,u.depthTest=!1,u.depthWrite=!1,u.transparent=!0);let d=new cn(c,u);d.position.set(0,.5,0);let f=new Me;return f.add(d),f};var No=async({videoElement:r})=>{let e=new kt(r);e.minFilter=tt;let t=new jt({map:e,displacementMap:e,displacementScale:1,side:xt}),n=new _n(3,1.66,50,32),i=new Ie(n,t);i.position.set(0,1.5,-.5);let s=new Me;return s.add(i),s};var Bo=async({model:r,videoElement:e})=>{let t=[0,1.2,0],n=new kt(e),i=new jt({map:n,side:st}),s=new Ct(.698,30,30),o=new Ie(s,i);o.position.set(...t),r.getObjectByName("bubble_reflect").position.set(...t);let l=new Ct(.699,30,30),c=new nt({color:0,side:un}),h=new Ie(l,c);h.name="clip",h.material=c,h.position.set(...t);let u=new Me;return u.add(h),u.add(o),u.add(r),u};var bu=class extends pt{constructor(e,t={}){super({depthTest:!1});let{range:n=.5,mult:i=7,chromaKey:s=54322}=t;e.minFilter=Ke,e.magFilter=Ke,this.setValues({uniforms:{tex:{type:"t",value:e},chromaKey:{type:"c",value:s}},vertexShader:`
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
  float a = (length(tColor - chromaKey) - ${n.toFixed(1)}) * ${i.toFixed(1)};
  gl_FragColor = vec4(tColor, a);
}
    `.trim(),transparent:!0})}},Oo=({artifact:r,videoTexture:e})=>{let t=new te(lt.bool(r.chromaKey)?54322:r.chromaKey);return new bu(e,{chromaKey:t})};var rs=class{constructor(e){this.engine=e;let{artifact:t={},videoElement:n}=e,{videoWidth:i,videoHeight:s}=n,{filterSize:o="1",minDepth:a="0.1",maxDepth:l="2.8",depthThresholdFilter:c="0.9",scale:h="7.0",ptSize:u="1.0",pixelDepth:d="2.0",permanentSeconds:f=[],useBone:m=!1}=t;this.shaderConfig={filterSize:o,minDepth:a,maxDepth:l,depthThresholdFilter:c,scale:h,ptSize:u,pixelDepth:d},this.permanentSeconds=f,this.currentSecondId=0,this.useBone=m;let x=new kt(n,{minFilter:Ke});this.boneChild=this.createPoints(x,"1.0"),this.pointCopies=[],this.canvases=[],this.permanentSeconds.forEach((y,p)=>{let g=xe.create("canvas",{height:s,width:i,style:{position:"fixed",left:"100vw"},parent:$e.B});this.canvases.push(g);let w=new oo(g,{minFilter:Ke}),v=this.createPoints(w);v.visible=!1,this.pointCopies.push(v),this.engine.scene.add(v)})}createPoints(e,t="1.0"){let{artifact:n={},videoElement:i}=this.engine,{videoWidth:s,videoHeight:o}=i,a=new Et,{ifx:l=.00125,ify:c=.00125,itx:h=-.4,ity:u=-.6}=n,d={texImg:{type:"t",value:e},texSize:{type:"i2",value:[s,o]},iK:{type:"f4",value:[l,c,h,u]},alpha:{type:"f",value:t}},{fragmentShader:f,vertexShader:m}=this.shaders(),x=new pt({uniforms:d,side:xt,transparent:!0,vertexShader:m,fragmentShader:f}),y=s/2*o,p=new Uint32Array(y),g=new Float32Array(y);for(let _=0;_<y;_++)p[_]=_,g[_]=_;let w=new Ne;w.setAttribute("vertexIdx",new Fe(g,1)),w.setIndex(new Ms(new Uint32Array(p),1));let v=new cn(w,x);return v.frustumCulled=!1,a.add(v),a}shaders(){let{filterSize:e,minDepth:t,maxDepth:n,depthThresholdFilter:i,scale:s,ptSize:o,pixelDepth:a}=this.shaderConfig;return{vertexShader:`
 attribute float vertexIdx;

varying float vVertexIdx;
varying vec2 vPtPos;

uniform ivec2 texSize;
uniform sampler2D texImg;
uniform vec4 iK;

const float depthThresholdFilter = ${i}; // original 0.5 In meters. Smaller values = more aggressive filtering

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

      if (currDepth < ${t}
          || currDepth >= ${n}
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
 `}}exit(){xe.remove(this.canvasImgs)}renderCopies(){new Promise(e=>{let{videoElement:t}=this.engine,{videoHeight:n,videoWidth:i}=t;if(!this.waitForSecond)this.waitForSecond=this.permanentSeconds[this.currentSecondId];else if(t.currentTime>this.waitForSecond){this.canvases[this.currentSecondId].getContext("2d").drawImage(t,0,0,i,n);let o=this.pointCopies[this.currentSecondId];o.visible=!0,this.boneChild.matrixWorld.decompose(o.position,o.rotation,o.scale),this.currentSecondId++,this.waitForSecond=this.permanentSeconds[this.currentSecondId]}e()})}render(){let{camera:e,renderer:t,scene:n}=this.engine;this.currentSecondId<this.permanentSeconds.length&&this.renderCopies(),t.render(n,e)}};var zo=class extends pt{constructor(e={}){let{fill:t,stroke:n}=e.uniforms;(lt.str(t.value)||lt.num(t.value))&&(e.uniforms.fill.value=new te(t.value)),(lt.str(n.value)||lt.num(n.value))&&(e.uniforms.stroke.value=new te(n.value)),e.vertexShader||(e.vertexShader=hy),e.fragmentShader||(e.fragmentShader=uy);let{extensions:i={}}=e;e.extensions={...i,derivatives:!0};super(e)}},hy=`
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
`,uy=`
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
`;var Qs=class{constructor(e={}){let{artifact:t,camera:n,modelSpawned:i,renderer:s,scene:o,listener:a,XR:l}=e;this.listener=a,this.XR=l,this.scene=o,this.artifact=t,this.modelSpawned=i,this.props=e,this.model=e.model,this.camera=n,n.far=1e3,n.updateProjectionMatrix(),this.renderer=s,s.toneMapping=$o,s.outputEncoding=Dt;let{radiusSegments:c=5,tube1Radius:h=.4,tube2Radius:u=.37,growSteps:d=1,edgeRemoval:f=!1,positionScaleFactor:m=1,tubeScale:x=.1,tube1Rotation:y=90,tube2Rotation:p=-Math.PI*2,audioTreshold:g=.02,fps:w=60,maximalSplineLength:v=5e3}=t;this.radiusSegments=c,this.tube1Radius=h*m,this.tube2Radius=u*m,this.growSteps=d,this.positionScaleFactor=m,this.audioTreshold=g,this.tubeScale=x,this.tube1Rotation=y,this.tube2Rotation=p,this.edgeRemoval=f,this.currentDrawRangeMin=0,this.direction=1,this.msBetweenSplineExpansions=1e3/w,this.maximalSplineLength=v,this.audioDistanceMaxMeters=8}async init(){let{artifact:e}=this,n=`https://static.artificialmuseum.com/data/${e.data?e.data:e.slug}.js`,{data:i}=await import(n);this.data=i;let s=o=>new Promise(a=>{new qn().load(o,c=>a(c))});this.matcapTexture=await s("https://static.artificialmuseum.com/textures/matcap/grey-white-light.jpg"),this.createCubes(),this.create3dSplines(),await this.loadAudio()}spawnModel(){this.audioTarget1.play(),this.audioTarget2.play()}async loadAudio(){let{artifact:e,camera:t,model:n,parent1:i,parent2:s}=this;return new Promise(o=>{let a=new Zs;t.add(a);let l=i.position,c=new Js(a);c.name="audiotarget_1",c.position.set(l.x,l.y,l.z);let h=s.position,u=new Js(a);u.name="audiotarget_2",u.position.set(h.x,h.y,h.z),n.add(c),n.add(u),this.audioTarget1=c,this.audioTarget2=u;let d=new Eo,m=`https://media.artificialmuseum.com/audio/${lt.str(e.audio)?e.audio:e.slug}.mp3`;d.load(m,x=>{c.setBuffer(x),c.setLoop(!0),c.setVolume(0),u.setBuffer(x),u.setLoop(!0),u.setVolume(0),u.offset=.1,o(x)})})}createCubes(){let e=this.positionScaleFactor,t=e*1.1,n=new rn(t,t,t),i=new vo({matcap:this.matcapTexture});this.cubeGroup=new Et,this.cubeGroup.position.set(0,0,0);for(let s=0;s<5;s++)for(let o=0;o<28;o++){let a=new Ie(n,i);a.name=`Cube_${s}_${o}`,a.rotateY(2*Math.PI/28*o),a.position.x=e*Math.sin(2*Math.PI/28*o)*Math.sqrt(28),a.position.z=e*Math.cos(2*Math.PI/28*o)*Math.sqrt(28),a.position.y=e*s*1.2+t*.5+.01,this.cubeGroup.add(a)}this.model.add(this.cubeGroup),this.collisionMaxDistance=t/2}create3dSplines(){let{artifact:e,radiusSegments:t,tube1Radius:n,tube2Radius:i,tube1Rotation:s,tube2Rotation:o,tubeScale:a,positionScaleFactor:l}=this,c=l*a;this.points=[{x:0,y:0,z:0},...this.data.map(([w,v,_])=>({x:w*c,y:v*c,z:_*c}))];let h=this.points.length*2,u=!1,d="catmullrom";this.spline=new Vn(this.points,u,d),this.parent1=new Me,this.parent1.position.set(0,l*7,0),this.parent2=new Me,this.parent2.position.set(0,l*5,0),this.tube1Geometry=new bn(this.spline,h,n,t,!1).toNonIndexed(),this.tube1Geometry.rotateY(s),this.tube1Geometry.setDrawRange(0,this.maximalSplineLength),this.tube2Geometry=new bn(this.spline,h,i,t,!1).toNonIndexed(),this.tube2Geometry.rotateY(o),this.tube2Geometry.setDrawRange(0,this.maximalSplineLength);let{spline1RemoveEdges:f=!0,spline2RemoveEdges:m=!0}=e;Do(this.tube1Geometry,f),Do(this.tube2Geometry,m);let{spline1Uniforms:x={time:{value:0},fill:{value:new te(14138052)},stroke:{value:new te(16711680)},noiseA:{value:!1},noiseB:{value:!0},dualStroke:{value:!1},seeThrough:{value:!0},insideAltColor:{value:!1},thickness:{value:.1},secondThickness:{value:.05},dashEnabled:{value:!1},dashRepeats:{value:1},dashOverlap:{value:!1},dashLength:{value:.7},dashAnimate:{value:!1},squeeze:{value:!0},squeezeMin:{value:.28},squeezeMax:{value:1}}}=e;this.spline1material=new zo({uniforms:x,side:xt,transparent:!0});let{spline2Uniforms:y={time:{value:0},fill:{value:new te(12802834)},stroke:{value:new te(16711680)},noiseA:{value:!1},noiseB:{value:!0},dualStroke:{value:!1},seeThrough:{value:!0},insideAltColor:{value:!1},thickness:{value:.1},secondThickness:{value:.05},dashEnabled:{value:!1},dashRepeats:{value:1},dashOverlap:{value:!1},dashLength:{value:.7},dashAnimate:{value:!1},squeeze:{value:!0},squeezeMin:{value:.28},squeezeMax:{value:1}}}=e;this.spline2material=new zo({uniforms:y,side:xt,transparent:!0});let p=new Ie(this.tube1Geometry,this.spline1material);p.name="tube_1";let g=new Ie(this.tube2Geometry,this.spline2material);g.name="tube_2",this.parent1.add(p),this.parent2.add(g),this.model.add(this.parent1),this.model.add(this.parent2)}removeCubeIfTouchedBySpline(e){this.cubeGroup.traverse(t=>{t.isMesh&&t.visible&&e.forEach(n=>{t.position.distanceToSquared(n)<this.collisionMaxDistance&&(t.visible=!1)})})}exit(){this.tube1Geometry.setDrawRange(0,this.maximalSplineLength),this.tube2Geometry.setDrawRange(0,this.maximalSplineLength),this.audioTarget1?.isPlaying&&this.audioTarget1.stop(),this.audioTarget2?.isPlaying&&this.audioTarget2.stop(),this.cubeGroup.traverse(e=>{e.visible=!0})}render(e,t){this.props.modelSpawned&&(this.lastTimeStamp||(this.lastTimeStamp=this.msBetweenSplineExpansions+1),e-this.lastTimeStamp>=this.msBetweenSplineExpansions&&(this.lastTimeStamp=e,this.expandSpline())),this.renderer.render(this.scene,this.camera)}expandSpline(){let e=this.growSteps*this.radiusSegments*3*this.direction;this.currentDrawRangeMin+=e,this.tube1Geometry.setDrawRange(this.currentDrawRangeMin,this.maximalSplineLength),this.tube2Geometry.setDrawRange(this.currentDrawRangeMin,this.maximalSplineLength);let t=[],n=this.tube1Geometry.getAttribute("position").array,i=this.tube2Geometry.getAttribute("position").array,s=this.currentDrawRangeMin*3,o=(this.maximalSplineLength+this.currentDrawRangeMin)*3;for(let c=s;c<o;c+=3){let h={x:n[c],y:n[c+1]+this.parent1.position.y,z:n[c+2]};h.y>=0&&t.push(h);let u={x:i[c],y:i[c+1]+this.parent2.position.y,z:i[c+2]};u.y>=0&&t.push(u)}let a=t[t.length-2],l=t[t.length-1];this.repositionAudioTarget(this.audioTarget1,a),this.repositionAudioTarget(this.audioTarget2,l),this.removeCubeIfTouchedBySpline(t)}repositionAudioTarget(e,t){if(t&&e){let n=this.camera.position.distanceToSquared(t),i=e.getVolume(),s=Math.max(.1,Math.min(1,this.audioDistanceMaxMeters/n));Math.abs(i-s)>this.audioTreshold&&e.setVolume(s.toFixed(2))}}};var xl=class{constructor({artifact:e,model:t,renderer:n,scene:i,camera:s}){this.model=t,this.lightDistance=.4,this.yOffset=1.45,this.showLights=e.showLights,this.renderer=n,this.scene=i,this.camera=s,this.pointLight=this.createLight(16733525),t.add(this.pointLight),this.pointLight2=this.createLight(11184895),t.add(this.pointLight2)}createLight(e){let t=new ns(e,2,30);if(t.castShadow=!0,t.shadow.camera.near=.1,t.shadow.camera.far=30,this.showLights){let n=new Ct(.005,6,6),i=new nt({color:e}),s=new Ie(n,i);t.add(s)}return t}render(e){let t=this.lightDistance,n=e*5e-4;{let s=Math.sin(n)*t,o=Math.sin(n*1.1)*t+this.yOffset,a=Math.sin(n*1.2)*t;this.pointLight.position.set(s,o,a)}let i=n+1e4;{let s=M.sin(i)*t,o=M.sin(i*1.1)*t+this.yOffset,a=M.sin(i*1.2)*t;this.pointLight2.position.set(s,o,a)}this.renderer.render(this.scene,this.camera)}};var dy=(r,e={})=>(e.reverse&&(r=r.reverse()),new T(...r)),er=class{constructor(e){let t=[{mat:{color:16711680},pos:[0,0,0]}],{file:n=e.artifact.slug}=e.artifact,{fps:i=12,layers:s=t,reverse:o=!1}=e.artifact.latk;this.file=n;let a=1e3;this.frameMsInterval=a/i,this.layers=s,this.reverse=o,e.model?this.model=e.model:(this.model=new Me,this.model.position.set(0,0,0),e.model=this.model),this.longestLayer=-1,this.currentFrame=0,this.renderer=e.renderer,this.camera=e.camera,this.scene=e.scene,this.buffer=new Ne,this.lineGroup=new Et,this.model.add(this.lineGroup),this.layers.forEach(l=>{let c=this.createLayer(l);this.lineGroup.add(c)})}async init(){this.latk=await this.loadLatk()}createLayer(e){let{mat:t,pos:n}=e,i=new ln(t),s=new Gn(this.buffer,i);return s.frustumCulled=!1,n&&s.position.add(new T(...n)),s}async loadLatk(){let{latk:e}=await import(`https://static.artificialmuseum.com/latk/${this.file}.js`);return e.forEach(t=>{t.layers.forEach(n=>{n.frames.length>this.longestLayer&&(this.longestLayer=n.frames.length),n.frames.forEach(i=>{i.strokes.forEach(s=>{let o=s.points.map(a=>(a=Array.isArray(a)?a:a.co,dy(a,this)));s.points=o})})})}),e}render(e){this.updateLatk(e),this.renderer.render(this.scene,this.camera)}updateLatk(e){let{latk:t}=this;if(!(!t||!t.length)&&(!this.lastTick||this.lastTick+this.frameMsInterval<=e)){let n=[];t.forEach(s=>{let{layers:o}=s;o.forEach(a=>{let{frames:l={}}=a,{strokes:c=[]}=l[this.currentFrame];c.forEach(h=>{let u=this.drawStroke(h);n.push(...u)})})}),this.buffer.setFromPoints(n),this.currentFrame+=1,this.lastTick=e,this.lineGroup.traverse(s=>{s.geometry=this.buffer});let i=this.longestLayer-1;this.currentFrame>i&&(this.currentFrame=0)}}drawStroke(e){let t=[];for(let n=0;n<e.points.length-1;n++)t.push(e.points[n]),t.push(e.points[n+1]);return t}};var yl=(r,e,t)=>{let n=e.clone().sub(r).normalize().multiplyScalar(t);return r.clone().add(n)};yl.percent=(r,e,t)=>{let n=e.clone().sub(r),i=n.length(),s=n.normalize().multiplyScalar(i*t);return r.clone().add(s)};var vl=class{constructor(e){this.engine=e;let{sphereCount:t=1e3,blackMolCount:n=100,whiteMolCount:i=100,parentCount:s=10,spawnCircleYOffset:o=.5,spawnCircleHeight:a=15,sphereScaleFactor:l=.1,spawnCircleDistance:c=2,spawnCircleWidth:h=5,upMolSpawnY:u=-7,molYSpeedMod:d=.02,upMolTargetPos:f=2.2}=this.engine.artifact;this.sphereCount=t,this.whiteMolCount=i,this.blackMolCount=n,this.parentCount=s,this.spawnCircleYOffset=o,this.spawnCircleHeight=a,this.sphereScaleFactor=l,this.spawnCircleDistance=c,this.spawnCircleWidth=h,this.upMolSpawnY=u,this.molYSpeedMod=d,this.upMolTargetPos=f,this.spawnCircleParents=[],this.upCircleParents=[],this.parentVelocities=[],this.rotators=[],this.upMols=[],this.sphereMaterials=[new nt({color:new te(0)}),new nt({color:new te(16777215)})];let m=[15134221,3210255,12860729,16777173,16712446,8230640,15603985,458740,16340742,4709478,3543287,15689147];m.forEach(y=>{let p=new nt({color:new te(y)});this.sphereMaterials.push(p)});let x=5;for(let y=0;y<x;y++)m.forEach(p=>{let g=new nt({color:new te(p),transparent:!0,opacity:y+1*(1/x)+.2});this.sphereMaterials.push(g)});this.portal=this.engine.model.getObjectByName("portal")}async init(){let{blackMolCount:e,parentCount:t,sphereCount:n,upMolSpawnY:i,whiteMolCount:s}=this,o=this.portal.position;for(let l=0;l<t;l++){let c=new Me;this.spawnCircleParents.push(c),c.position.set(o.x,0,o.z),this.engine.model.add(c);let h=c.clone();h.position.set(o.x,i,o.z),this.upCircleParents.push(h),this.engine.model.add(h);let u=Math.random()*.002+.001;this.parentVelocities.push(u)}for(let l=0;l<n;l++){let c=this.createSphere(),{x:h,y:u,z:d}=this.getRandomCirclePosition();c.position.set(h,u,d);let f=l%this.spawnCircleParents.length;this.spawnCircleParents[f].add(c)}for(let l=0;l<s;l++){let c=this.createWhiteMol(),{x:h,y:u,z:d}=this.getRandomCirclePosition();c.position.set(h,u,d);let f=l%this.spawnCircleParents.length;this.spawnCircleParents[f].add(c)}for(let l=0;l<e;l++){let c=this.createBlackMol(),{x:h,y:u,z:d}=this.getRandomCirclePosition();c.position.set(h,u,d);let f=l%this.spawnCircleParents.length;this.spawnCircleParents[f].add(c)}for(let l=0;l<n/5;l++){let c=this.createSphere(),h=l%this.upCircleParents.length;this.upCircleParents[h].add(c),this.addUpMol(c)}for(let l=0;l<e/7;l++){let c=this.createBlackMol(),h=l%this.upCircleParents.length;this.upCircleParents[h].add(c),this.addUpMol(c)}let a=2;for(let l=0;l<s/7;l++){let c=this.createWhiteMol(a),h=l%this.upCircleParents.length;this.upCircleParents[h].add(c),this.addUpMol(c)}}getRandomCirclePosition(){let{spawnCircleDistance:e,spawnCircleWidth:t,spawnCircleHeight:n,spawnCircleYOffset:i}=this,s=Math.random()*t+e,o=Math.random()*360,a=s*Math.cos(o),l=s*Math.sin(o),c=Math.random()*(n/2)+i;return{x:a,y:c,z:l}}createSphere(e=Math.random()*this.sphereScaleFactor+.05){let t=new Ct(e,32,16),n=Math.floor(Math.random()*30-.001),i=this.sphereMaterials[n];return new Ie(t,i)}createBlackMol(){let e=new nt({color:new te(0)}),t=new Me,n=new Ct(.5,64,64),i=new Ie(n,e),s=Math.random()*.1+.05;i.scale.set(s,s,s),t.add(i);let o=i.position,a=Math.round(Math.random()*5);for(let l=0;l<=a;l++){let c=(Math.random()-.5)*.7,h=(Math.random()-.5)*.7,u=(Math.random()-.5)*.7,d=new T(o.x+c,o.y+h,o.z+u),f=new Ie(n,e);f.position.set(d.x,d.y,d.z);let m=Math.random()*.1+.05;f.scale.set(m,m,m);let x=2,y=.005,p=4,g=new Vn([o,d]),w=new bn(g,x,y,p),v=new Ie(w,e);t.add(v),t.add(f)}return this.addRotator(t),t}createWhiteMol(e=5){let t=new nt({color:new te(16777215)}),n=new Ct(.3,64,64),i=new Me,s=new Ie(n,t),o=Math.random()*.1+.05;s.scale.set(o,o,o),i.add(s);let a=Math.ceil(Math.random()*e),l=s.position;for(let d=0;d<a;d++){let f=(Math.random()-.5)*.5,m=Math.random()*.3+.1,x=(Math.random()-.5)*.5,y=new T(l.x+f,l.y+m,l.z+x),p=new Ie(n,t);p.position.set(y.x,y.y,y.z);let g=Math.random()*.1+.05;p.scale.set(g,g,g);let w=2,v=.005,_=4,L=new Vn([l,y]),I=new bn(L,w,v,_),B=new Ie(I,t);i.add(B),i.add(p),l=y}i.position.set(Math.random()*3,Math.random()*3,Math.random()*3);let c=Math.random()*360*(Math.PI/180),h=Math.random()*360*(Math.PI/180),u=Math.random()*360*(Math.PI/180);return i.rotation.set(c,h,u),this.addRotator(i),i}addRotator(e){this.rotators.push({mesh:e,speed:Math.random()*.01,axis:new T(Math.random(),Math.random(),Math.random())})}addUpMol(e){let{upMolTargetPos:t}=this,n={mesh:e,speed:Math.random()*this.molYSpeedMod,target:new T(Math.random()*t-t/2,this.spawnCircleHeight,Math.random()*t-t/2)};this.upMols.push(n)}repositionUpMol(e){let t=e.parent.position;e.position.set(t.x,t.y,0)}render(){let{renderer:e,camera:t,scene:n}=this.engine;this.spawnCircleParents.forEach((s,o)=>{s.rotateY(this.parentVelocities[o])}),this.upCircleParents.forEach((s,o)=>{s.rotateY(this.parentVelocities[o]*5)}),this.rotators.forEach(s=>{s.mesh.rotateOnAxis(s.axis,s.speed)});let i=this.portal.position;this.upMols.forEach(s=>{let{mesh:o,speed:a,target:l}=s;if(o.position.y<this.spawnCircleHeight){let c=o.position.y+a,h=this.spawnCircleHeight-this.upMolSpawnY,u=this.spawnCircleHeight-c,d=h-u,{x:f,z:m}=yl(new T(0,this.upMolSpawnY,0),l,d);o.position.set(f,c,m)}else this.repositionUpMol(o),s.speed=Math.random()*this.molYSpeedMod}),e.render(n,t)}};var _l=class extends zt{constructor(e){super(e);this.propertyNameMapping={}}load(e,t,n,i){let s=this,o=new gi(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}setPropertyNameMapping(e){this.propertyNameMapping=e}parse(e){function t(f){let m=/^ply([\s\S]*)end_header\r?\n/,x="",y=0,p=m.exec(f);p!==null&&(x=p[1],y=new Blob([p[0]]).size);let g={comments:[],elements:[],headerLength:y,objInfo:""},w=x.split(`
`),v;function _(L,I){let B={type:L[0]};return B.type==="list"?(B.name=L[3],B.countType=L[1],B.itemType=L[2]):B.name=L[1],B.name in I&&(B.name=I[B.name]),B}for(let L=0;L<w.length;L++){let I=w[L];if(I=I.trim(),I==="")continue;let B=I.split(/\s+/),K=B.shift();switch(I=B.join(" "),K){case"format":g.format=B[0],g.version=B[1];break;case"comment":g.comments.push(I);break;case"element":v!==void 0&&g.elements.push(v),v={},v.name=B[0],v.count=parseInt(B[1]),v.properties=[];break;case"property":v.properties.push(_(B,d.propertyNameMapping));break;case"obj_info":g.objInfo=I;break;default:console.log("unhandled",K,B)}}return v!==void 0&&g.elements.push(v),g}function n(f,m){switch(m){case"char":case"uchar":case"short":case"ushort":case"int":case"uint":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":return parseInt(f);case"float":case"double":case"float32":case"float64":return parseFloat(f)}}function i(f,m){let x=m.split(/\s+/),y={};for(let p=0;p<f.length;p++)if(f[p].type==="list"){let g=[],w=n(x.shift(),f[p].countType);for(let v=0;v<w;v++)g.push(n(x.shift(),f[p].itemType));y[f[p].name]=g}else y[f[p].name]=n(x.shift(),f[p].type);return y}function s(f,m){let x={indices:[],vertices:[],normals:[],uvs:[],faceVertexUvs:[],colors:[]},y,p=/end_header\s([\s\S]*)$/,g="";(y=p.exec(f))!==null&&(g=y[1]);let w=g.split(`
`),v=0,_=0;for(let L=0;L<w.length;L++){let I=w[L];if(I=I.trim(),I==="")continue;_>=m.elements[v].count&&(v++,_=0);let B=i(m.elements[v].properties,I);a(x,m.elements[v].name,B),_++}return o(x)}function o(f){let m=new Ne;return f.indices.length>0&&m.setIndex(f.indices),m.setAttribute("position",new Fe(f.vertices,3)),f.normals.length>0&&m.setAttribute("normal",new Fe(f.normals,3)),f.uvs.length>0&&m.setAttribute("uv",new Fe(f.uvs,2)),f.colors.length>0&&m.setAttribute("color",new Fe(f.colors,3)),f.faceVertexUvs.length>0&&(m=m.toNonIndexed(),m.setAttribute("uv",new Fe(f.faceVertexUvs,2))),m.computeBoundingSphere(),m}function a(f,m,x){function y(S){for(let b=0,F=S.length;b<F;b++){let O=S[b];if(O in x)return O}return null}let p=y(["x","px","posx"])||"x",g=y(["y","py","posy"])||"y",w=y(["z","pz","posz"])||"z",v=y(["nx","normalx"]),_=y(["ny","normaly"]),L=y(["nz","normalz"]),I=y(["s","u","texture_u","tx"]),B=y(["t","v","texture_v","ty"]),K=y(["red","diffuse_red","r","diffuse_r"]),W=y(["green","diffuse_green","g","diffuse_g"]),D=y(["blue","diffuse_blue","b","diffuse_b"]);if(m==="vertex")f.vertices.push(x[p],x[g],x[w]),v!==null&&_!==null&&L!==null&&f.normals.push(x[v],x[_],x[L]),I!==null&&B!==null&&f.uvs.push(x[I],x[B]),K!==null&&W!==null&&D!==null&&f.colors.push(x[K]/255,x[W]/255,x[D]/255);else if(m==="face"){let S=x.vertex_indices||x.vertex_index,b=x.texcoord;S.length===3?(f.indices.push(S[0],S[1],S[2]),b&&b.length===6&&(f.faceVertexUvs.push(b[0],b[1]),f.faceVertexUvs.push(b[2],b[3]),f.faceVertexUvs.push(b[4],b[5]))):S.length===4&&(f.indices.push(S[0],S[1],S[3]),f.indices.push(S[1],S[2],S[3]))}}function l(f,m,x,y){switch(x){case"int8":case"char":return[f.getInt8(m),1];case"uint8":case"uchar":return[f.getUint8(m),1];case"int16":case"short":return[f.getInt16(m,y),2];case"uint16":case"ushort":return[f.getUint16(m,y),2];case"int32":case"int":return[f.getInt32(m,y),4];case"uint32":case"uint":return[f.getUint32(m,y),4];case"float32":case"float":return[f.getFloat32(m,y),4];case"float64":case"double":return[f.getFloat64(m,y),8]}}function c(f,m,x,y){let p={},g,w=0;for(let v=0;v<x.length;v++)if(x[v].type==="list"){let _=[];g=l(f,m+w,x[v].countType,y);let L=g[0];w+=g[1];for(let I=0;I<L;I++)g=l(f,m+w,x[v].itemType,y),_.push(g[0]),w+=g[1];p[x[v].name]=_}else g=l(f,m+w,x[v].type,y),p[x[v].name]=g[0],w+=g[1];return[p,w]}function h(f,m){let x={indices:[],vertices:[],normals:[],uvs:[],faceVertexUvs:[],colors:[]},y=m.format==="binary_little_endian",p=new DataView(f,m.headerLength),g,w=0;for(let v=0;v<m.elements.length;v++)for(let _=0;_<m.elements[v].count;_++){g=c(p,w,m.elements[v].properties,y),w+=g[1];let L=g[0];a(x,m.elements[v].name,L)}return o(x)}let u,d=this;if(e instanceof ArrayBuffer){let f=Gt.decodeText(new Uint8Array(e)),m=t(f);u=m.format==="ascii"?s(f,m):h(e,m)}else u=s(e,t(e));return u}};var fy=`
precision highp float;

uniform float uSize;


void main() {
  gl_PointSize = uSize;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`,py=`
precision highp float;

uniform vec3 uColor;

void main() {
  vec4 col = vec4(uColor, 1.0);
  gl_FragColor = col;
}
`,tr=class{constructor(e){this.engine=e;let t=["yellow"],{ply:n={}}=e.artifact;this.config={file:e.artifact.slug,materials:t,positionOffset:0,pointSize:2,scaleOffset:.01,...n}}async init(){let{file:e,materials:t,pointSize:n,positionOffset:i,scaleOffset:s}=this.config;this.engine.model=new Me;let o=await new Promise((l,c)=>{let h=new _l,u=`https://static.artificialmuseum.com/ply/${e}.ply`;h.load(u,l,()=>{},c)});o.computeVertexNormals();let a={fragmentShader:py,vertexShader:fy,depthTest:!1,blending:Rn,uniforms:{uSize:{value:n*$e.devicePixelRatio,type:"f"}}};this.clouds=t.map((l,c)=>{let h=new pt({...a,uniforms:{...a.uniforms,uColor:{value:new te(l),type:"f3"}}}),u=new cn(o,h),d=1+c*s;return u.scale.set(d,d,d),u.position.x=c*i,this.engine.model.add(u),u})}};var nr=(r="",e="no")=>r.toLowerCase().includes(e.toLowerCase());var Mu={type:"change"},wl={type:"start"},Su={type:"end"},bl=class extends sn{constructor(e,t){super();t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$n.ROTATE,MIDDLE:$n.DOLLY,RIGHT:$n.PAN},this.touches={ONE:Kn.ROTATE,TWO:Kn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",C),this._domElementKeyEvents=P},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Mu),n.update(),s=i.NONE},this.update=function(){let P=new T,R=new ct().setFromUnitVectors(e.up,new T(0,1,0)),$=R.clone().invert(),J=new T,_e=new ct,fe=2*Math.PI;return function(){let le=n.object.position;P.copy(le).sub(n.target),P.applyQuaternion(R),a.setFromVector3(P),n.autoRotate&&s===i.NONE&&K(I()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let be=n.minAzimuthAngle,ke=n.maxAzimuthAngle;return isFinite(be)&&isFinite(ke)&&(be<-Math.PI?be+=fe:be>Math.PI&&(be-=fe),ke<-Math.PI?ke+=fe:ke>Math.PI&&(ke-=fe),be<=ke?a.theta=Math.max(be,Math.min(ke,a.theta)):a.theta=a.theta>(be+ke)/2?Math.max(be,a.theta):Math.min(ke,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),P.setFromSpherical(a),P.applyQuaternion($),le.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),c=1,u||J.distanceToSquared(n.object.position)>o||8*(1-_e.dot(n.object.quaternion))>o?(n.dispatchEvent(Mu),J.copy(n.object.position),_e.copy(n.object.quaternion),u=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ee),n.domElement.removeEventListener("pointerdown",se),n.domElement.removeEventListener("pointercancel",Te),n.domElement.removeEventListener("wheel",Ze),n.domElement.removeEventListener("pointermove",de),n.domElement.removeEventListener("pointerup",re),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",C)};let n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},s=i.NONE,o=1e-6,a=new Co,l=new Co,c=1,h=new T,u=!1,d=new q,f=new q,m=new q,x=new q,y=new q,p=new q,g=new q,w=new q,v=new q,_=[],L={};function I(){return 2*Math.PI/60/60*n.autoRotateSpeed}function B(){return Math.pow(.95,n.zoomSpeed)}function K(P){l.theta-=P}function W(P){l.phi-=P}let D=function(){let P=new T;return function($,J){P.setFromMatrixColumn(J,0),P.multiplyScalar(-$),h.add(P)}}(),S=function(){let P=new T;return function($,J){n.screenSpacePanning===!0?P.setFromMatrixColumn(J,1):(P.setFromMatrixColumn(J,0),P.crossVectors(n.object.up,P)),P.multiplyScalar($),h.add(P)}}(),b=function(){let P=new T;return function($,J){let _e=n.domElement;if(n.object.isPerspectiveCamera){let fe=n.object.position;P.copy(fe).sub(n.target);let Ae=P.length();Ae*=Math.tan(n.object.fov/2*Math.PI/180),D(2*$*Ae/_e.clientHeight,n.object.matrix),S(2*J*Ae/_e.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(D($*(n.object.right-n.object.left)/n.object.zoom/_e.clientWidth,n.object.matrix),S(J*(n.object.top-n.object.bottom)/n.object.zoom/_e.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function F(P){n.object.isPerspectiveCamera?c/=P:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*P)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function O(P){n.object.isPerspectiveCamera?c*=P:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/P)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function N(P){d.set(P.clientX,P.clientY)}function U(P){g.set(P.clientX,P.clientY)}function ie(P){x.set(P.clientX,P.clientY)}function ae(P){f.set(P.clientX,P.clientY),m.subVectors(f,d).multiplyScalar(n.rotateSpeed);let R=n.domElement;K(2*Math.PI*m.x/R.clientHeight),W(2*Math.PI*m.y/R.clientHeight),d.copy(f),n.update()}function V(P){w.set(P.clientX,P.clientY),v.subVectors(w,g),v.y>0?F(B()):v.y<0&&O(B()),g.copy(w),n.update()}function X(P){y.set(P.clientX,P.clientY),p.subVectors(y,x).multiplyScalar(n.panSpeed),b(p.x,p.y),x.copy(y),n.update()}function ue(P){P.deltaY<0?O(B()):P.deltaY>0&&F(B()),n.update()}function he(P){let R=!1;switch(P.code){case n.keys.UP:b(0,n.keyPanSpeed),R=!0;break;case n.keys.BOTTOM:b(0,-n.keyPanSpeed),R=!0;break;case n.keys.LEFT:b(n.keyPanSpeed,0),R=!0;break;case n.keys.RIGHT:b(-n.keyPanSpeed,0),R=!0;break}R&&(P.preventDefault(),n.update())}function pe(){if(_.length===1)d.set(_[0].pageX,_[0].pageY);else{let P=.5*(_[0].pageX+_[1].pageX),R=.5*(_[0].pageY+_[1].pageY);d.set(P,R)}}function Be(){if(_.length===1)x.set(_[0].pageX,_[0].pageY);else{let P=.5*(_[0].pageX+_[1].pageX),R=.5*(_[0].pageY+_[1].pageY);x.set(P,R)}}function Z(){let P=_[0].pageX-_[1].pageX,R=_[0].pageY-_[1].pageY,$=Math.sqrt(P*P+R*R);g.set(0,$)}function Ce(){n.enableZoom&&Z(),n.enablePan&&Be()}function we(){n.enableZoom&&Z(),n.enableRotate&&pe()}function ge(P){if(_.length==1)f.set(P.pageX,P.pageY);else{let $=ve(P),J=.5*(P.pageX+$.x),_e=.5*(P.pageY+$.y);f.set(J,_e)}m.subVectors(f,d).multiplyScalar(n.rotateSpeed);let R=n.domElement;K(2*Math.PI*m.x/R.clientHeight),W(2*Math.PI*m.y/R.clientHeight),d.copy(f)}function ye(P){if(_.length===1)y.set(P.pageX,P.pageY);else{let R=ve(P),$=.5*(P.pageX+R.x),J=.5*(P.pageY+R.y);y.set($,J)}p.subVectors(y,x).multiplyScalar(n.panSpeed),b(p.x,p.y),x.copy(y)}function He(P){let R=ve(P),$=P.pageX-R.x,J=P.pageY-R.y,_e=Math.sqrt($*$+J*J);w.set(0,_e),v.set(0,Math.pow(w.y/g.y,n.zoomSpeed)),F(v.y),g.copy(w)}function G(P){n.enableZoom&&He(P),n.enablePan&&ye(P)}function ne(P){n.enableZoom&&He(P),n.enableRotate&&ge(P)}function se(P){n.enabled!==!1&&(_.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",de),n.domElement.addEventListener("pointerup",re)),oe(P),P.pointerType==="touch"?E(P):Ee(P))}function de(P){n.enabled!==!1&&(P.pointerType==="touch"?j(P):De(P))}function re(P){Q(P),_.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",de),n.domElement.removeEventListener("pointerup",re)),n.dispatchEvent(Su),s=i.NONE}function Te(P){Q(P)}function Ee(P){let R;switch(P.button){case 0:R=n.mouseButtons.LEFT;break;case 1:R=n.mouseButtons.MIDDLE;break;case 2:R=n.mouseButtons.RIGHT;break;default:R=-1}switch(R){case $n.DOLLY:if(n.enableZoom===!1)return;U(P),s=i.DOLLY;break;case $n.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;ie(P),s=i.PAN}else{if(n.enableRotate===!1)return;N(P),s=i.ROTATE}break;case $n.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;N(P),s=i.ROTATE}else{if(n.enablePan===!1)return;ie(P),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(wl)}function De(P){if(n.enabled!==!1)switch(s){case i.ROTATE:if(n.enableRotate===!1)return;ae(P);break;case i.DOLLY:if(n.enableZoom===!1)return;V(P);break;case i.PAN:if(n.enablePan===!1)return;X(P);break}}function Ze(P){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(P.preventDefault(),n.dispatchEvent(wl),ue(P),n.dispatchEvent(Su))}function C(P){n.enabled===!1||n.enablePan===!1||he(P)}function E(P){switch(Se(P),_.length){case 1:switch(n.touches.ONE){case Kn.ROTATE:if(n.enableRotate===!1)return;pe(),s=i.TOUCH_ROTATE;break;case Kn.PAN:if(n.enablePan===!1)return;Be(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Kn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ce(),s=i.TOUCH_DOLLY_PAN;break;case Kn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;we(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(wl)}function j(P){switch(Se(P),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ge(P),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ye(P),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;G(P),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ne(P),n.update();break;default:s=i.NONE}}function ee(P){n.enabled!==!1&&P.preventDefault()}function oe(P){_.push(P)}function Q(P){delete L[P.pointerId];for(let R=0;R<_.length;R++)if(_[R].pointerId==P.pointerId){_.splice(R,1);return}}function Se(P){let R=L[P.pointerId];R===void 0&&(R=new q,L[P.pointerId]=R),R.set(P.pageX,P.pageY)}function ve(P){let R=P.pointerId===_[0].pointerId?_[1]:_[0];return L[R.pointerId]}n.domElement.addEventListener("contextmenu",ee),n.domElement.addEventListener("pointerdown",se),n.domElement.addEventListener("pointercancel",Te),n.domElement.addEventListener("wheel",Ze,{passive:!1}),this.update()}};var Ml=class extends zt{constructor(e){super(e);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Au(t)}),this.register(function(t){return new Du(t)}),this.register(function(t){return new Fu(t)}),this.register(function(t){return new Ru(t)}),this.register(function(t){return new Lu(t)}),this.register(function(t){return new Cu(t)}),this.register(function(t){return new Pu(t)}),this.register(function(t){return new Iu(t)}),this.register(function(t){return new Tu(t)}),this.register(function(t){return new Nu(t)})}load(e,t,n,i){let s=this,o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=Gt.extractUrlBase(e),this.manager.itemStart(e);let a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new gi(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s,o={},a={};if(typeof e=="string")s=e;else if(Gt.decodeText(new Uint8Array(e,0,4))===Bu){try{o[Ve.KHR_BINARY_GLTF]=new zu(e)}catch(u){i&&i(u);return}s=o[Ve.KHR_BINARY_GLTF].content}else s=Gt.decodeText(new Uint8Array(e));let l=JSON.parse(s);if(l.asset===void 0||l.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new ju(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);a[u.name]=u,o[u.name]=!0}if(l.extensionsUsed)for(let h=0;h<l.extensionsUsed.length;++h){let u=l.extensionsUsed[h],d=l.extensionsRequired||[];switch(u){case Ve.KHR_MATERIALS_UNLIT:o[u]=new Eu;break;case Ve.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:o[u]=new ku;break;case Ve.KHR_DRACO_MESH_COMPRESSION:o[u]=new Uu(l,this.dracoLoader);break;case Ve.KHR_TEXTURE_TRANSFORM:o[u]=new Hu;break;case Ve.KHR_MESH_QUANTIZATION:o[u]=new Gu;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}};function my(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}var Ve={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"},Tu=class{constructor(e){this.parser=e,this.name=Ve.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],c,h=new te(16777215);l.color!==void 0&&h.fromArray(l.color);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new is(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ns(h),c.distance=u;break;case"spot":c=new wo(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Eu=class{constructor(){this.name=Ve.KHR_MATERIALS_UNLIT}getMaterialType(){return nt}extendParams(e,t,n){let i=[];e.color=new te(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let o=s.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture))}return Promise.all(i)}},Au=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new q(a,a)}return Promise.all(s)}},Ru=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[];t.sheenColor=new te(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}},Lu=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}},Cu=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new te(a[0],a[1],a[2]),Promise.all(s)}},Pu=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},Iu=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new te(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture).then(function(l){l.encoding=Pt})),Promise.all(s)}},Du=class{constructor(e){this.parser=e,this.name=Ve.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],o=n.images[s.source],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,o,a)}},Fu=class{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Nu=class{constructor(e){this.name=Ve.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return Promise.all([s,o.ready]).then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new ArrayBuffer(h*u),f=new Uint8Array(a[0],l,c);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})}else return null}},Bu="glTF",ir=12,Ou={JSON:1313821514,BIN:5130562},zu=class{constructor(e){this.name=Ve.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ir);if(this.header={magic:Gt.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Bu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let n=this.header.length-ir,i=new DataView(e,ir),s=0;for(;s<n;){let o=i.getUint32(s,!0);s+=4;let a=i.getUint32(s,!0);if(s+=4,a===Ou.JSON){let l=new Uint8Array(e,ir+s,o);this.content=Gt.decodeText(l)}else if(a===Ou.BIN){let l=ir+s;this.body=e.slice(l,l+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Uu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ve.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=Sl[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Sl[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=sr[d.componentType];c[u]=f,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u){i.decodeDracoFile(h,function(d){for(let f in d.attributes){let m=d.attributes[f],x=l[f];x!==void 0&&(m.normalized=x)}u(d)},a,c)})})}},Hu=class{constructor(){this.name=Ve.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Uo=class extends jt{constructor(e){super();this.isGLTFSpecularGlossinessMaterial=!0;let t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),n=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),i=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	texelSpecular = sRGBToLinear( texelSpecular );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),s=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),o=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),a={specular:{value:new te().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=a,this.onBeforeCompile=function(l){for(let c in a)l.uniforms[c]=a[c];l.fragmentShader=l.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",n).replace("#include <roughnessmap_fragment>",i).replace("#include <metalnessmap_fragment>",s).replace("#include <lights_physical_fragment>",o)},Object.defineProperties(this,{specular:{get:function(){return a.specular.value},set:function(l){a.specular.value=l}},specularMap:{get:function(){return a.specularMap.value},set:function(l){a.specularMap.value=l,l?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return a.glossiness.value},set:function(l){a.glossiness.value=l}},glossinessMap:{get:function(){return a.glossinessMap.value},set:function(l){a.glossinessMap.value=l,l?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}},ku=class{constructor(){this.name=Ve.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity","refractionRatio"]}getMaterialType(){return Uo}extendParams(e,t,n){let i=t.extensions[this.name];e.color=new te(1,1,1),e.opacity=1;let s=[];if(Array.isArray(i.diffuseFactor)){let o=i.diffuseFactor;e.color.fromArray(o),e.opacity=o[3]}if(i.diffuseTexture!==void 0&&s.push(n.assignTexture(e,"map",i.diffuseTexture)),e.emissive=new te(0,0,0),e.glossiness=i.glossinessFactor!==void 0?i.glossinessFactor:1,e.specular=new te(1,1,1),Array.isArray(i.specularFactor)&&e.specular.fromArray(i.specularFactor),i.specularGlossinessTexture!==void 0){let o=i.specularGlossinessTexture;s.push(n.assignTexture(e,"glossinessMap",o)),s.push(n.assignTexture(e,"specularMap",o))}return Promise.all(s)}createMaterial(e){let t=new Uo(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=1,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=Cn,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t.refractionRatio=.98,t}},Gu=class{constructor(){this.name=Ve.KHR_MESH_QUANTIZATION}},Yn=class extends Zt{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}};Yn.prototype.beforeStart_=Yn.prototype.copySampleValue_;Yn.prototype.afterEnd_=Yn.prototype.copySampleValue_;Yn.prototype.interpolate_=function(r,e,t,n){let i=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=o*2,l=o*3,c=n-e,h=(t-e)/c,u=h*h,d=u*h,f=r*l,m=f-l,x=-2*d+3*u,y=d-u,p=1-x,g=y-u+h;for(let w=0;w!==o;w++){let v=s[m+w+o],_=s[m+w+a]*c,L=s[f+w+o],I=s[f+w]*c;i[w]=p*v+g*_+x*L+y*I}return i};var gy=new ct,Vu=class extends Yn{interpolate_(e,t,n,i){let s=super.interpolate_(e,t,n,i);return gy.fromArray(s).normalize().toArray(s),s}},En={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},sr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Wu={9728:tt,9729:Ke,9984:fr,9985:ta,9986:pr,9987:ei},qu={33071:At,33648:fs,10497:Qn},Xu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Sl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},jn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},xy={CUBICSPLINE:void 0,LINEAR:ii,STEP:Ti},Tl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function yy(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new jt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:un})),r.DefaultMaterial}function rr(r,e,t){for(let n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function vi(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function vy(r,e,t){let n=!1,i=!1;for(let a=0,l=e.length;a<l;a++){let c=e[a];if(c.POSITION!==void 0&&(n=!0),c.NORMAL!==void 0&&(i=!0),n&&i)break}if(!n&&!i)return Promise.resolve(r);let s=[],o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];if(n){let h=c.POSITION!==void 0?t.getDependency("accessor",c.POSITION):r.attributes.position;s.push(h)}if(i){let h=c.NORMAL!==void 0?t.getDependency("accessor",c.NORMAL):r.attributes.normal;o.push(h)}}return Promise.all([Promise.all(s),Promise.all(o)]).then(function(a){let l=a[0],c=a[1];return n&&(r.morphAttributes.position=l),i&&(r.morphAttributes.normal=c),r.morphTargetsRelative=!0,r})}function _y(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function wy(r){let e=r.extensions&&r.extensions[Ve.KHR_DRACO_MESH_COMPRESSION],t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Yu(e.attributes):t=r.indices+":"+Yu(r.attributes)+":"+r.mode,t}function Yu(r){let e="",t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function El(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}var ju=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new my,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.textureCache={},this.nodeNamesUsed={},typeof createImageBitmap!="undefined"&&/Firefox|Safari/.test(navigator.userAgent)===!1?this.textureLoader=new So(this.options.manager):this.textureLoader=new qn(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new gi(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};rr(s,a,i),vi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),s=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())s(h,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this.loadNode(t);break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this.loadAnimation(t);break;case"camera":i=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ve.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,o){n.load(Gt.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0)return Promise.resolve(null);let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){let a=o[0],l=Xu[i.type],c=sr[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,x,y;if(f&&f!==u){let p=Math.floor(d/f),g="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,w=t.cache.get(g);w||(x=new c(a,p*f,i.count*f/h),w=new Hn(x,f/h),t.cache.add(g,w)),y=new kn(w,l,d%f/h,m)}else a===null?x=new c(i.count*l):x=new c(a,d,i.count*l),y=new Qe(x,l,m);if(i.sparse!==void 0){let p=Xu.SCALAR,g=sr[i.sparse.indices.componentType],w=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,_=new g(o[1],w,i.sparse.count*p),L=new c(o[2],v,i.sparse.count*l);a!==null&&(y=new Qe(y.array.slice(),y.itemSize,y.normalized));for(let I=0,B=_.length;I<B;I++){let K=_[I];if(y.setX(K,L[I*l]),l>=2&&y.setY(K,L[I*l+1]),l>=3&&y.setZ(K,L[I*l+2]),l>=4&&y.setW(K,L[I*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return y})}loadTexture(e){let t=this.json,n=this.options,i=t.textures[e],s=t.images[i.source],o=this.textureLoader;if(s.uri){let a=n.manager.getHandler(s.uri);a!==null&&(o=a)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let i=this,s=this.json,o=this.options,a=s.textures[e],l=(t.uri||t.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=self.URL||self.webkitURL,h=t.uri||"",u=!1;if(t.bufferView!==void 0)h=i.getDependency("bufferView",t.bufferView).then(function(f){u=!0;let m=new Blob([f],{type:t.mimeType});return h=c.createObjectURL(m),h});else if(t.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let d=Promise.resolve(h).then(function(f){return new Promise(function(m,x){let y=m;n.isImageBitmapLoader===!0&&(y=function(p){let g=new at(p);g.needsUpdate=!0,m(g)}),n.load(Gt.resolveURL(f,o.path),y,void 0,x)})}).then(function(f){u===!0&&c.revokeObjectURL(h),f.flipY=!1,a.name&&(f.name=a.name);let x=(s.samplers||{})[a.sampler]||{};return f.magFilter=Wu[x.magFilter]||Ke,f.minFilter=Wu[x.minFilter]||ei,f.wrapS=qu[x.wrapS]||Qn,f.wrapT=qu[x.wrapT]||Qn,i.associations.set(f,{textures:e}),f}).catch(function(){return console.error("THREE.GLTFLoader: Couldn't load texture",h),null});return this.textureCache[l]=d,d}assignTexture(e,t,n){let i=this;return this.getDependency("texture",n.index).then(function(s){if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),i.extensions[Ve.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Ve.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let a=i.associations.get(s);s=i.extensions[Ve.KHR_TEXTURE_TRANSFORM].extendTexture(s,o),i.associations.set(s,a)}}return e[t]=s,s})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new zs,ut.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new ln,ut.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";n.isGLTFSpecularGlossinessMaterial&&(a+="specular-glossiness:"),i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return jt}loadMaterial(e){let t=this,n=this.json,i=this.extensions,s=n.materials[e],o,a={},l=s.extensions||{},c=[];if(l[Ve.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){let u=i[Ve.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];o=u.getMaterialType(),c.push(u.extendParams(a,s,t))}else if(l[Ve.KHR_MATERIALS_UNLIT]){let u=i[Ve.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,s,t))}else{let u=s.pbrMetallicRoughness||{};if(a.color=new te(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.fromArray(d),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=xt);let h=s.alphaMode||Tl.OPAQUE;if(h===Tl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.format=Wt,a.transparent=!1,h===Tl.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==nt&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new q(1,1),s.normalTexture.scale!==void 0)){let u=s.normalTexture.scale;a.normalScale.set(u,u)}return s.occlusionTexture!==void 0&&o!==nt&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==nt&&(a.emissive=new te().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&o!==nt&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture)),Promise.all(c).then(function(){let u;return o===Uo?u=i[Ve.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(a):u=new o(a),s.name&&(u.name=s.name),u.map&&(u.map.encoding=Pt),u.emissiveMap&&(u.emissiveMap.encoding=Pt),vi(u,s),t.associations.set(u,{materials:e}),s.extensions&&rr(i,u,s),u})}createUniqueName(e){let t=Ge.sanitizeNodeName(e||""),n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[Ve.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Ju(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=wy(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[Ve.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Ju(new Ne,c,t),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?yy(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,m=h.length;f<m;f++){let x=h[f],y=o[f],p,g=c[f];if(y.mode===En.TRIANGLES||y.mode===En.TRIANGLE_STRIP||y.mode===En.TRIANGLE_FAN||y.mode===void 0)p=s.isSkinnedMesh===!0?new Fs(x,g):new Ie(x,g),p.isSkinnedMesh===!0&&!p.geometry.attributes.skinWeight.normalized&&p.normalizeSkinWeights(),y.mode===En.TRIANGLE_STRIP?p.geometry=$u(p.geometry,lc):y.mode===En.TRIANGLE_FAN&&(p.geometry=$u(p.geometry,ra));else if(y.mode===En.LINES)p=new Gn(x,g);else if(y.mode===En.LINE_STRIP)p=new $i(x,g);else if(y.mode===En.LINE_LOOP)p=new io(x,g);else if(y.mode===En.POINTS)p=new cn(x,g);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+y.mode);Object.keys(p.geometry.morphAttributes).length>0&&_y(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),vi(p,s),y.extensions&&rr(i,p,y),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return u[0];let d=new Et;t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new dt(vs.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Gi(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),vi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(n):this.getDependency("accessor",t.inverseBindMatrices).then(function(i){return n.inverseBindMatrices=i,n})}loadAnimation(e){let n=this.json.animations[e],i=[],s=[],o=[],a=[],l=[];for(let c=0,h=n.channels.length;c<h;c++){let u=n.channels[c],d=n.samplers[u.sampler],f=u.target,m=f.node!==void 0?f.node:f.id,x=n.parameters!==void 0?n.parameters[d.input]:d.input,y=n.parameters!==void 0?n.parameters[d.output]:d.output;i.push(this.getDependency("node",m)),s.push(this.getDependency("accessor",x)),o.push(this.getDependency("accessor",y)),a.push(d),l.push(f)}return Promise.all([Promise.all(i),Promise.all(s),Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2],f=c[3],m=c[4],x=[];for(let p=0,g=h.length;p<g;p++){let w=h[p],v=u[p],_=d[p],L=f[p],I=m[p];if(w===void 0)continue;w.updateMatrix(),w.matrixAutoUpdate=!0;let B;switch(jn[I.path]){case jn.weights:B=fi;break;case jn.rotation:B=Sn;break;case jn.position:case jn.scale:default:B=mi;break}let K=w.name?w.name:w.uuid,W=L.interpolation!==void 0?xy[L.interpolation]:ii,D=[];jn[I.path]===jn.weights?w.traverse(function(b){b.morphTargetInfluences&&D.push(b.name?b.name:b.uuid)}):D.push(K);let S=_.array;if(_.normalized){let b=El(S.constructor),F=new Float32Array(S.length);for(let O=0,N=S.length;O<N;O++)F[O]=S[O]*b;S=F}for(let b=0,F=D.length;b<F;b++){let O=new B(D[b]+"."+jn[I.path],v.array,S,W);L.interpolation==="CUBICSPLINE"&&(O.createInterpolant=function(U){let ie=this instanceof Sn?Vu:Yn;return new ie(this.times,this.values,this.getValueSize()/3,U)},O.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),x.push(O)}}let y=n.name?n.name:"animation_"+e;return new Ys(y,void 0,x)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(!!a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this.extensions,i=this,s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"";return function(){let a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),Promise.all(a)}().then(function(a){let l;if(s.isBone===!0?l=new Ns:a.length>1?l=new Et:a.length===1?l=a[0]:l=new Me,l!==a[0])for(let c=0,h=a.length;c<h;c++)l.add(a[c]);if(s.name&&(l.userData.name=s.name,l.name=o),vi(l,s),s.extensions&&rr(n,l,s),s.matrix!==void 0){let c=new me;c.fromArray(s.matrix),l.applyMatrix4(c)}else s.translation!==void 0&&l.position.fromArray(s.translation),s.rotation!==void 0&&l.quaternion.fromArray(s.rotation),s.scale!==void 0&&l.scale.fromArray(s.scale);return i.associations.has(l)||i.associations.set(l,{}),i.associations.get(l).nodes=e,l})}loadScene(e){let t=this.json,n=this.extensions,i=this.json.scenes[e],s=this,o=new Et;i.name&&(o.name=s.createUniqueName(i.name)),vi(o,i),i.extensions&&rr(n,o,i);let a=i.nodes||[],l=[];for(let c=0,h=a.length;c<h;c++)l.push(Zu(a[c],o,t,s));return Promise.all(l).then(function(){let c=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof ut||d instanceof at)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(o),o})}};function Zu(r,e,t,n){let i=t.nodes[r];return n.getDependency("node",r).then(function(s){if(i.skin===void 0)return s;let o;return n.getDependency("skin",i.skin).then(function(a){o=a;let l=[];for(let c=0,h=o.joints.length;c<h;c++)l.push(n.getDependency("node",o.joints[c]));return Promise.all(l)}).then(function(a){return s.traverse(function(l){if(!l.isMesh)return;let c=[],h=[];for(let u=0,d=a.length;u<d;u++){let f=a[u];if(f){c.push(f);let m=new me;o.inverseBindMatrices!==void 0&&m.fromArray(o.inverseBindMatrices.array,u*16),h.push(m)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',o.joints[u])}l.bind(new Bs(c,h),l.matrixWorld)}),s})}).then(function(s){e.add(s);let o=[];if(i.children){let a=i.children;for(let l=0,c=a.length;l<c;l++){let h=a[l];o.push(Zu(h,s,t,n))}}return Promise.all(o)})}function by(r,e,t){let n=e.attributes,i=new It;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new T(l[0],l[1],l[2]),new T(c[0],c[1],c[2])),a.normalized){let h=El(sr[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let a=new T,l=new T;for(let c=0,h=s.length;c<h;c++){let u=s[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let x=El(sr[d.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;let o=new mn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Ju(r,e,t){let n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(let o in n){let a=Sl[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){let o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return vi(r,e),by(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?vy(r,e.targets,t):r})}function $u(r,e){let t=r.getIndex();if(t===null){let o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=t.count-2,i=[];if(e===ra)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=r.clone();return s.setIndex(i),s}var Ho=class extends Ie{constructor(e,t={},n){super(e);this.type="Reflector",this.XR=n.XR,this.skybox=n.skybox,this.shadowPlane=n.shadowPlane;let i=this,{textureHeight:s=512,textureWidth:o=512,clipBias:a=0,fragmentShader:l=Sy,vertexShader:c=My}=t,h=t.color!==void 0?new te(t.color):new te(8355711),u=new Ht,d=new T,f=new T,m=new T,x=new me,y=new T(0,0,-1),p=new Ye,g=new T,w=new T,v=new Ye,_=new me,L=new dt,I={minFilter:Ke,magFilter:Ke,format:Wt},B=new Rt(o,s,I);(!vs.isPowerOfTwo(o)||!vs.isPowerOfTwo(s))&&(B.texture.generateMipmaps=!1);let K={tDiffuse:{value:B.texture},color:{value:h},textureMatrix:{value:_}},W=new pt({uniforms:K,fragmentShader:l,vertexShader:c});this.material=W,this.onBeforeRender=(D,S,b)=>{if(f.setFromMatrixPosition(i.matrixWorld),m.setFromMatrixPosition(b.matrixWorld),x.extractRotation(i.matrixWorld),d.set(0,0,1),d.applyMatrix4(x),g.subVectors(f,m),g.dot(d)>0)return;g.reflect(d).negate(),g.add(f),x.extractRotation(b.matrixWorld),y.set(0,0,-1),y.applyMatrix4(x),y.add(m),w.subVectors(f,y),w.reflect(d).negate(),w.add(f),L.position.copy(g),L.up.set(0,1,0),L.up.applyMatrix4(x),L.up.reflect(d),L.lookAt(w),L.far=b.far,L.updateMatrixWorld(),L.projectionMatrix.copy(b.projectionMatrix),_.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),_.multiply(L.projectionMatrix),_.multiply(L.matrixWorldInverse),_.multiply(i.matrixWorld),u.setFromNormalAndCoplanarPoint(d,f),u.applyMatrix4(L.matrixWorldInverse),p.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let F=L.projectionMatrix;v.x=(Math.sign(p.x)+F.elements[8])/F.elements[0],v.y=(Math.sign(p.y)+F.elements[9])/F.elements[5],v.z=-1,v.w=(1+F.elements[10])/F.elements[14],p.multiplyScalar(2/p.dot(v)),F.elements[2]=p.x,F.elements[6]=p.y,F.elements[10]=p.z+1-a,F.elements[14]=p.w,B.texture.encoding=D.outputEncoding,i.visible=!1;let O=D.getRenderTarget(),N=D.xr.enabled,U=D.shadowMap.autoUpdate;D.xr.enabled=!1,D.shadowMap.autoUpdate=!1,D.setRenderTarget(B),D.state.buffers.depth.setMask(!0),D.autoClear===!1&&D.clear(),this.XR&&this.skybox&&(this.skybox.visible=!0);let ie=!1;this.shadowPlane?.visible&&(this.shadowPlane.visible=!1,ie=!0),D.render(S,L),D.xr.enabled=N,D.shadowMap.autoUpdate=U,D.setRenderTarget(O),this.XR&&this.skybox&&(this.skybox.visible=!1),ie&&(this.shadowPlane.visible=!0);let ae=b.viewport;ae!==void 0&&D.state.viewport(ae),i.visible=!0},this.getRenderTarget=()=>B}};Ho.prototype.isReflector=!0;var My=`
uniform mat4 textureMatrix;
varying vec4 vUv;

#include <common>
#include <logdepthbuf_pars_vertex>

void main() {
  vUv = textureMatrix * vec4( position, 1.0 );

  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

  #include <logdepthbuf_vertex>
}`,Sy=`
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
`;var Al=class{constructor(e){this.canvas=xe.create("canvas",{width:$e.innerWidth,height:$e.innerHeight,id:"recorder-canvas"}),this.context=this.canvas.getContext("2d"),this.refSpace=e.refSpace,this.contextXR=e.renderer.domElement.getContext("webgl2"),this.artifact=e.artifact}async start(){if(!this.canvas)return;let e=this.canvas.captureStream(),t=[],n="video/webm",i=new $e.MediaRecorder(e,{mimeType:n});this.recorder=i;let s=o=>t.push(o.data);i.ondataavailable=s,i.start(),console.log(i.state),i.onstop=()=>{let o=new Blob(t,{type:"video/webm"});this.save(o)},i.onerror=o=>{console.error(o),this.recorder=!1}}save(e){let t=new Date,n=t.getFullYear(),i=t.getMonth()+1,s=t.getDate(),o=t.getHours(),a=t.getMinutes(),l=t.getSeconds(),c=`${s}-${i}-${n}-${o}-${a}-${l}`,{artifact:h}=this,u={href:$e.URL.createObjectURL(e),download:`artificial-museum-recording-${h.slug}-${c}.webm`,innerText:"Download Screen Capture"};console.log("saving",u.download),console.log(`Recorded ${e.size} bytes of ${e.type} media.`);let d=xe.create("a",u);d.click(),xe.remove(d),$e.URL.revokeObjectURL(u.href),this.recorder=!1}stop(){this.recorder&&this.recorder.state==="recording"&&(this.recorder.stop(),console.log("stop recording"))}remove(){this.stop(),xe.remove(this.canvas),this.canvas=null}render(e,t){if(t&&this.canvas){let h=function({gl:v,object:_,background:L,width:I,height:B}){let K=I*B,W=new Uint8Array(K*4);for(let S=0;S<K;S++){let[b,F,O,N]=c(_,S);b===0&&F===0&&O===0&&([b,F,O,N]=c(L,S));let U=a(S,colorCount),ie=a(S+1,colorCount),ae=a(S+2,colorCount),V=a(S+3,colorCount);W[U]=b,W[ie]=F,W[ae]=O,W[V]=N}let D=v.createImageData(I,B);D.data.set(W),v.putImageData(D,0,0)},n=new XRWebGLBinding(t.session,this.contextXR),s=t.getViewerPose(this.refSpace).views.find(v=>v.camera);if(!s)return;let o=n.getCameraImage(s.camera),a=(v,_)=>_-v-1,l=({gl:v,texture:_,width:L,height:I})=>{let B=v.getParameter(v.FRAMEBUFFER_BINDING),K=new Uint8Array(L*I*4);v.readPixels(0,0,L,I,v.RGBA,v.UNSIGNED_BYTE,K);let W=v.createFramebuffer();v.bindFramebuffer(v.FRAMEBUFFER,W),v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,_,0);let D=new Uint8Array(L*I*4);return v.readPixels(0,0,L,I,v.RGBA,v.UNSIGNED_BYTE,D),v.deleteFramebuffer(W),v.bindFramebuffer(v.FRAMEBUFFER,B),{background:D,object:K}},c=(v,_)=>[v[_],v[_+1],v[_+2],v[_+3]],u=performance.now(),d=$e.innerWidth,f=$e.innerHeight;console.log(d,f);let{object:m,background:x}=l({gl:this.contextXR,texture:o,width:d,height:f}),y=performance.now();h({gl:this.context,object:m,background:x,width:d,height:f});let p=performance.now(),g=y-u,w=p-u;console.log(`took ${w}, imagedata ${g}, paint: ${p-y} `)}}};var Ku=class{constructor({artifact:e,preload:t,XR:n}){this.XR=n,this.artifact=e,this.preload=t;let{type:i=_t.HIT}=e;this.type=i,this.clock=new Ao,this.scene=new Cs,this.onResize=this.onResize.bind(this),this.render=this.render.bind(this),this.initFallbackSession=this.initFallbackSession.bind(this),this.toggleAnimations=this.toggleAnimations.bind(this),this.endSession=this.endSession.bind(this)}async init(){let{artifact:e,scene:t,type:n,XR:i}=this,s=$e.innerWidth/$e.innerHeight;this.camera=new dt(lr.fov,s,lr.near,lr.far),this.camera.updateProjectionMatrix(),t.add(this.camera);let o=new je({antialias:!0,alpha:!0});this.renderer=o,o.setPixelRatio($e.devicePixelRatio),o.domElement.id=Xo,o.physicallyCorrectLights=!0,o.outputEncoding=Pt,o.toneMappingExposure=1,e.shadow!==!1&&(o.shadowMap.enabled=!0,o.shadowMap.type=Zo);let[a,l,c]=await Promise.all([await this.appendAudio(),await this.appendVideo(),await this.addSkybox()]);if(this.audioElement=a,this.videoElement=l,this.skybox=c,e.hideLight||this.addLights(),await this.loadModel(),this.addVideoTrigger(),o.setSize($e.innerWidth,$e.innerHeight),xe.append(o.domElement,`#${hr}`),this.hud=new Yo(this),this.glow(),this.clip(),this.nosort(),this.mirror(),i)try{let h=o.xr.getController(0);if(this.controller=h,!e.hideLight&&e.shadow!==!1&&this.addShadowPlane(),this.isHittestScene())n!==_t.FLOAT&&this.spawnReticle(),xe.on(h,"select",()=>{if(this.justUnspawned)return;let u=!1;this.spawnModel(u),e.clickable?this.hud.showAnimToggler(this.toggleAnimations):this.hud.hideAnimToggler()}),e.clickable||this.hud.hideAnimToggler();else throw new Error(`Unknown scene type ${n}`);t.add(h),this.initScene=async()=>{let u,d=["hit-test","dom-overlay"];return xe.hide("#Locator"),u=await $e.NAV.xr.requestSession("immersive-ar",{requiredFeatures:d,domOverlay:{root:xe("#hud")}}),xe.on(u,"end",()=>{this.endSession()}),this.hud.addSession(u),this.refSpace=await u.requestReferenceSpace("viewer"),this.renderer.xr.enabled=!0,this.renderer.xr.setReferenceSpaceType("local"),await this.renderer.xr.setSession(u),u.initFallbackSession=this.initFallbackSession.bind(this),u}}catch{this.initScene=this.initFallbackSession}else this.initScene=this.initFallbackSession;return xe.on($e,"resize",this.onResize),this.onResize(),o.setAnimationLoop(this.render),this}onResize(){let{innerWidth:e,innerHeight:t}=$e;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}addLights(){let e=new is(wi.directionalColor,wi.directionalIntensity);e.position.set(...wi.directionalPosition),e.castShadow=!0,this.artifact.shadow!==!1&&(e.shadow.mapSize.width=512,e.shadow.mapSize.height=512,e.shadow.camera.near=1,e.shadow.camera.far=50),this.directionalLight=e,this.scene.add(e),this.ambientLight=new bo(wi.ambientColor,wi.ambientIntensity),this.scene.add(this.ambientLight)}addShadowPlane(){let e=new _n(200,200,32,32),t=new yo;t.opacity=Dl;let n=new Ie(e,t);n.receiveShadow=!0,n.lookAt(0,100,0),n.position.set(0,0,0),this.shadowPlane=n}spawnReticle(){let e=new es(.15,.2,32).rotateX(-M.PI/2),t=new nt;this.reticle=new Ie(e,t),this.reticle.matrixAutoUpdate=!1,this.reticle.visible=!1,this.scene.add(this.reticle)}glow(){let{glow:e}=this.artifact;e&&this.model.traverse(t=>{if(nr(t.name,"glow")){let n=lt.bool(e)?238:e,i=new nt({color:n,side:xt,blending:Rn,transparent:!0});t.material=i}})}nosort(){this.artifact.nosort&&(this.renderer.sortObjects=!1)}clip(){let{model:e,artifact:{clip:t,clipSide:n}}=this;e&&t&&this.model.traverse(i=>{nr(i.name,"clip")&&(i.material.colorWrite=!1,i.castShadow=!1,i.receiveShadow=!1,n==="back"?i.material.side=st:n==="double"&&(i.material.side=xt))})}mirror(){let{mirrors:e}=this.artifact;if(!e||!e.length)return;let t=$e.devicePixelRatio,n=$e.innerWidth*t,i=$e.innerHeight*t;this.mirrors=e.map(s=>{let{clipBias:o=.003,color:a=7829367,type:l,params:c=[4,32],rotation:h={},position:u={}}=s,d;l===ls.CIRCLE?d=new Us(...c):l===ls.RING?d=new es(...c):l===ls.BOX?d=new rn(...c):l===ls.SPHERE?d=new Ct(...c):d=new _n(...c);let f=new Ho(d,{clipBias:o,textureWidth:n,textureHeight:i,color:a},this);{let{x:m,y:x,z:y}=h;m&&f.rotateX(m),x&&f.rotateY(x),y&&f.rotateZ(y)}{let{x:m,y:x,z:y}=u;m&&f.position.setX(m),x&&f.position.setY(x),y&&f.position.setZ(y)}return this.model.add(f),f})}async addSkybox(){let{artifact:e,preload:t,renderer:n,scene:i,XR:s}=this,{city:o,light:a,sky:l,slug:c}=e,h=l;l===!1?h="default":l||(h=c),h=`${o}/${h}`;let u="jpg";$e.SUPPORTS.WEBP&&(u="webp");let d=Fl,f=e?.skySphere;lt.arr(f)&&f.length&&(d=f);let m=new Ct(...d);e.scaleSky!==!1&&m.scale(-1,1,1);let x=`https://static.artificialmuseum.com/${Nl}/${h}.${u}`,y=await gl({file:x,preload:t}),p=new Vr(n);p.compileEquirectangularShader();let g=p.fromEquirectangular(y).texture;p.dispose();let w=new nt({map:y}),v=new Ie(m,w);return v.visible=!s,i.add(v),a!==!1&&(i.environment=g),v}appendAudio(){let{slug:e,audio:t}=this.artifact;if(!t)return!1;let n=`https://media.artificialmuseum.com/audio/${t===!0?e:t}`;this.listener=new Zs,this.camera.add(this.listener),xe.remove(`#${cr}`);let i=xe.create("audio",{id:cr,loop:!0,crossorigin:"anonymous"});["ogg","mp4","mp3"].forEach(a=>{xe.create("source",{src:`${n}.${a}?v=${Vo}`,type:`audio/${a}`,parent:i})}),xe.append(i);let{duration:o}=i;if(lt.num(o)&&o>0)return i;{let a="canplaythrough";return Go&&(a="loadedmetadata"),new Promise(l=>{xe.on(i,a,c=>l(c.target))})}}appendVideo(){let{slug:e,video:t}=this.artifact;if(!t)return!1;let n=t===!0?e:t,i=xe.create("video",{id:qo,loop:!0,playsinline:!0,preload:"auto",crossorigin:"anonymous"}),s=`https://media.artificialmuseum.com/video/${n}/${n}`;[["webm","webm"],["mp4","mp4"]].forEach(([l,c])=>{xe.create("source",{src:`${s}.${l}?v=${Vo}`,type:`video/${c}`,parent:i})}),xe.append(i);let{videoWidth:a}=i;if(a>0)return i;{let l="canplaythrough";return Go&&(l="loadedmetadata"),new Promise(c=>{xe.on(i,l,h=>c(h.target))})}}addVideoTrigger(){!this.artifact.triggerVideo||this.model.traverse(e=>{if(this.videoTrigger)return;["videotarget","videotrigger"].some(n=>nr(e.name,n))&&(this.videoTrigger=e,this.videoTrigger.visible=!1)})}startMedia(e=!0){if(this.isMediaPlaying)return;let{actions:t=[],artifact:n,audioElement:i,videoElement:s}=this;i&&!n.triggerAudio&&(e&&(i.currentTime=0),i.play()),s&&!n.triggerVideo&&(e&&(s.currentTime=0),s.play()),t.forEach(o=>o.play()),this.isMediaPlaying=!0}stopMedia(){let{audioElement:e,videoElement:t,actions:n=[]}=this;e&&e.pause(),t&&t.pause(),n&&n.length&&n.forEach(i=>i.stop()),this.isMediaPlaying=!1}toggleAnimations(){this.actions.forEach(e=>e.paused=!e.paused)}initFallbackSession(){this.XR=!1,$e.B.classList.add(Wo);let{camera:e,artifact:t,model:n,renderer:i}=this,s=new bl(e,i.domElement);this.controller=s,this.skybox.visible=!0,Object.entries(Il).forEach(([h,u])=>{s[h]=u});let{cam:o={},orbit:a={},clickable:l}=t;lt.num(a.min)&&(s.minDistance=a.min),lt.num(a.max)&&(s.maxDistance=a.max),lt.num(o.maxPolar)&&(s.maxPolarAngle=Math.PI/o.maxPolar),l?this.hud.showAnimToggler(this.toggleAnimations):this.hud.hideAnimToggler();{let{cam:h={}}=t,u=Bl,{x:d=u.x,y:f=u.y,z:m=u.z}=h;e.position.set(d,f,m)}{let{lookat:h={}}=t,{x:u=0,y:d=0,z:f=0}=h;s.target=new T(u,d,f)}if(n){let{x:h,y:u,z:d}=n.scale,{scale:f}=t;f&&n.scale.set(h*f,u*f,d*f)}s.update();let c=!0;this.spawnModel(c),i.domElement.focus()}async loadModel(){let{artifact:e,preload:t,type:n,XR:i}=this;if(n===_t.POINT_CLOUD?this.model=await Fo(this):n===_t.DISPLACEMENT?this.model=await No(this):n===_t.RECORD3D&&!e.glb?(this.sceneInstance=new rs(this),this.model=this.sceneInstance.boneChild):n===_t.BRAIN_WAVE&&!e.glb?this.sceneInstance=new Qs(this):n===_t.LATK&&!e.glb?this.sceneInstance=new er(this):n===_t.PLY&&!e.glb&&(this.sceneInstance=new tr(this)),this.sceneInstance)this.sceneInstance.init&&await this.sceneInstance.init();else{let{file:s,version:o=1}=e,l=`https://glb.artificialmuseum.com/${s}.glb?v=${o}${i?"&xr=1":""}`,c=new Ml,{scene:h,animations:u}=await Ks({loader:c,file:l,preload:t});if(this.model=h,n===_t.RECORD3D&&(this.sceneInstance=new rs(this)),this.model.traverse(d=>{if(d.isMesh){let{frustumCulled:f,transparent:m,castShadow:x,receiveShadow:y}=e;f===!1&&(d.frustumCulled=!1),m===!1&&(d.material.transparent=!1),nr(d.name,"noshadow")||(d.castShadow=x!==!1,d.receiveShadow=y!==!1),d.material.map&&(d.material.map.anisotropy=16,d.material.map.encoding=Pt),d.material.emissiveMap&&(d.material.emissiveMap.encoding=Pt),(d.material.map||d.material.emissiveMap)&&(d.material.needsUpdate=!0)}else if(d.isLight){let{castShadow:f,shadowBias:m=.01,lightIntensity:x=.01,shadowCam:y={}}=e;if(d.intensity=d.intensity*x,e.shadow!==!1){d.castShadow=f!==!1,d.shadow.bias=m;let{near:p=.1,far:g=30}=y;d.shadow.camera.near=p,d.shadow.camera.far=g}}else d.type==="Bone"&&d.name.toLowerCase()==="parent"&&this.sceneInstance.useBone&&d.add(this.sceneInstance.boneChild)}),this.mixer=null,this.actions=[],u&&u.length){this.mixer=new Ro(this.model);let{loop:d,clickable:f}=e;u.forEach(m=>{let x=this.mixer.clipAction(m);d===!1&&(x.clampWhenFinished=!0,x.loop=na),f&&(x.paused=!0),this.actions.push(x)})}if(n===_t.LIGHT_CUBE){let{LightCubeScene:d}=os;this.sceneInstance=new d(this)}else if(n===_t.BRAIN_WAVE){let{BrainwaveScene:d}=os;this.sceneInstance=new d(this)}else if(n===_t.LATK){let{LatkScene:d}=os;this.sceneInstance=new d(this)}else if(n===_t.MOLECULAR_VORTEX){let{MolecularVortex:d}=os;this.sceneInstance=new d(this)}if(this.sceneInstance?.init&&await this.sceneInstance.init(),this.videoElement){let d=this.model.getObjectByName("videotarget");if(d){let f=new kt(this.videoElement),{flipVideo:m,chromaKey:x}=e;m!==!1&&(f.flipY=!1),d.material.map=f,x&&(d.material=Oo({artifact:e,videoTexture:f}))}}n===_t.BUBBLES&&(this.model=await Bo({model:this.model,videoElement:this.videoElement}))}}spawnModel(e){let{camera:t,controller:n,model:i,reticle:s,scene:o,shadowPlane:a,type:l,XR:c,sceneInstance:h={}}=this;if(!c||e){this.applyPositionAndRotation(),o.add(i),this.modelSpawned=!0,h.spawnModel&&h.spawnModel(this),this.startMedia();return}if(this.isHittestScene()){if(!this.modelSpawned&&this.lastHit){s.updateMatrixWorld(),i.position.setFromMatrixPosition(s.matrixWorld),i.updateMatrixWorld();let u=t.position,d=i.position,f=u.x-d.x,m=u.z-d.z,x=Math.atan2(f,m);i.rotation.y=x,a&&(a.position.setFromMatrixPosition(s.matrixWorld),o.add(a)),o.add(i),h?.spawnModel&&h.spawnModel(this),s.visible=!1,this.modelSpawned=!0,this.startMedia()}this.applyPositionAndRotation()}else if(l===_t.FLOAT){let u=i.clone();u.position.set(0,0,-1).applyMatrix4(n.matrixWorld),this.applyPositionAndRotation(),o.add(u),this.startMedia()}}unspawnModel(){this.modelSpawned&&(this.scene.remove(this.model),this.modelSpawned=!1,this.isAnimationRunning=!1,this.stopMedia(),this.sceneInstance?.exit&&this.sceneInstance.exit(),this.justUnspawned=!0,setTimeout(()=>{this.justUnspawned=!1},200))}applyPositionAndRotation(){let{artifact:e,model:t}=this,{pos:n={}}=e;n.x&&(t.position.x+=n.x),n.y&&(t.position.y+=n.y),n.z&&(t.position.z+=n.z)}async endSession(){this.hud.hide(),this.renderer.setAnimationLoop(null),xe(`#${hr}`).classList.remove("visible"),this.sceneInstance?.exit&&this.sceneInstance.exit(),this.scene&&$s(this.scene),xe.remove(`#${cr}`),xe.remove(`#${qo}`);let t=xe(`#${Xo}`);if(t){let n=t.parentNode;n.id===hr?xe.remove(t):xe.remove(n)}if($e.B.classList.remove(Wo),xe(".start-experience-button").forEach(n=>{n.removeAttribute("disabled")}),Pl){$e.location.reload();return}}isHittestScene(){let e=_t;return[e.HIT,e.FLOAT,e.POINT_CLOUD,e.BUBBLES,e.DISPLACEMENT,e.LIGHT_CUBE,e.RECORD3D,e.BRAIN_WAVE,e.LATK,e.MOLECULAR_VORTEX,e.PLY].includes(this.type)}async render(e,t){this.renderHittest(t),this.mixer&&this.mixer.update(this.clock.getDelta()),this.renderVideoTrigger(),this.sceneInstance?.render?this.sceneInstance.render(e,t):this.renderer.render(this.scene,this.camera),this.recorder&&this.recorder.render(e,t)}renderVideoTrigger(){if(!this.modelSpawned||!this.artifact.triggerVideo||!this.videoTrigger)return;let{triggerVideoDistance:e=1.1,triggerAudio:t}=this.artifact,n=e*e,i=this.videoTrigger.position.clone();i.add(this.videoTrigger.parent.position),this.camera.position.distanceToSquared(i)<=n?this.videoElement.paused&&(this.videoElement.play(),this.videoTrigger.visible=!0,t&&this.audioElement&&this.audioElement.play()):this.videoElement.paused||(this.videoElement.pause(),this.videoTrigger.visible=!1,t&&this.audioElement&&this.audioElement.pause())}async renderHittest(e){if(e&&this.XR){let t=this.renderer.xr.getSession();this.hitTestSourceRequested||(this.hitTestSource=await t.requestHitTestSource({space:this.refSpace}),xe.on(t,"end",()=>{this.hitTestSourceRequested=!1,this.hitTestSource=null}),this.hitTestSourceRequested=!0);let n=e.getHitTestResults(this.hitTestSource);if(n.length){if(this.lastHit=n[0],!this.modelSpawned){this.reticle.visible=!0;let i=this.renderer.xr.getReferenceSpace();this.reticle.matrix.fromArray(this.lastHit.getPose(i).transform.matrix)}this.hud.hideHitSearch()}else this.reticle.visible=!1,this.modelSpawned||this.hud.showHitSearch(),this.lastHit=void 0}}startRecording(){this.recorder||(this.recorder=new Al(this),this.recorder.start())}stopRecording(){!this.recorder||this.recorder.remove()}toggleRecording(){this.recorder?this.stopRecording():this.startRecording()}};export{Ku as ArmEngine};
/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
