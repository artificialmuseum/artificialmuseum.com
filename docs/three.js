import{B as No,C as Fl,H as ir,I as Bo,J as Oo,K as sr,L as Nl,M as Bl,O as Ol,P as zl,a as od,b as lt,c as Ze,d as ve,e as Do,k as Ll,l as Fo,t as nr,u as Cl,v as yi,w as Pl,x as Il,y as Dl}from"./chunk.js";var gt={HIT:1,FLOAT:2,POINT_CLOUD:3,DISPLACEMENT:4,BUBBLES:5,LIGHT_CUBE:6,RECORD3D:7,BRAIN_WAVE:8,LATK:9,MOLECULAR_VORTEX:10,PLY:11};var rs={PLANE:1,CIRCLE:2,RING:3,BOX:4,CUBE:4,SPHERE:5};var zo=class{constructor(e){let{scene:t,sceneInstance:n,renderer:i,endSession:s}=e;this.endSession=s,this.engine=e,this.gui=ve(`#${Nl}`),this.hittestSearch=ve("#hud-searching-hittest"),this.swipeToRemove=ve("#hud-swipe-to-remove"),this.XR=e.XR,this.XR&&(this.menu=ve("#hud-menu"),this.subMenu=ve("#hud-menu-sub"),this.menuVisible=!1,this.menuToggle=ve("#hud-menu-toggle"),ve.on(this.menuToggle,"click",this.onToggleMenu.bind(this)),ve.on("#hud-menu-reposition","click",this.onRepositionButtonClick.bind(this)),this.recordVideoButton=ve("#hud-menu-record-video"),ve.on(this.recordVideoButton,"click",this.onRecordButtonClick.bind(this))),this.scene=t,this.renderer=i,this.sceneInstance=n,ve.on(`#${Bl}`,"click",this.onExitButtonClick.bind(this)),Ol(this),this.animToggler=ve("#toggle-animation-button")}setCamera(e){this.cameraAccess=e,e?ve.show(this.recordVideoButton):ve.hide(this.recordVideoButton)}showAnimToggler(e){!this.animToggler||(this.animToggler.classList.remove("play"),ve.show(this.animToggler),this.animTogglerInit||(this.animTogglerInit=!0,this.eventListener=()=>{this.animToggler.classList.toggle("play"),e()},ve.on(this.animToggler,"click",this.eventListener)))}hideAnimToggler(){ve.hide(this.animToggler)}onToggleMenu(){let{subMenu:e}=this;e.classList.toggle("visible")}onRepositionButtonClick(){this.engine.unspawnModel()}async onRecordButtonClick(){this.engine.toggleRecording()}addSession(e){this.session=e}show(){ve.show(this.gui)}hide(){ve.hide(this.gui)}async onExitButtonClick(){if(this.session)try{await this.session.end()}catch{this.hide()}else await this.endSession();ve.off(this.animToggler,"click",this.eventListener),this.sceneInstance&&this.sceneInstance.exit&&this.sceneInstance.exit(this),zl()}showElement(e){e.shown||(ve.show(e),e.shown=!0)}hideElement(e){!e.shown||(ve.hide(e),e.shown=!1)}};var Uo="135",Yn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Zn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ad=0,Ul=1,ld=2;var Hl=1,Ho=2,os=3,sn=0,tt=1,xt=2,kl=1;var wn=0,as=1,Mn=2,Gl=3,Vl=4,cd=5,vi=100,ud=101,hd=102,Wl=103,ql=104,dd=200,fd=201,pd=202,md=203,Xl=204,jl=205,gd=206,xd=207,yd=208,vd=209,_d=210,wd=0,Md=1,bd=2,ko=3,Sd=4,Td=5,Ed=6,Ad=7,rr=0,Rd=1,Ld=2,$n=0,Cd=1,Pd=2,Id=3,Go=4,Dd=5,Yl=300,ls=301,cs=302,Vo=303,Wo=304,or=306,qo=307,Jn=1e3,At=1001,us=1002,Qe=1003,ar=1004;var lr=1005;var nt=1006,Xo=1007;var Kn=1008;var bn=1009,Fd=1010,Nd=1011,hs=1012,Bd=1013,cr=1014,rn=1015,_i=1016,Od=1017,zd=1018,Ud=1019,wi=1020,Hd=1021,Vt=1022,wt=1023,kd=1024,Gd=1025,Vd=wt,Qn=1026,Mi=1027,Wd=1028,qd=1029,Xd=1030,jd=1031,Yd=1032,Zd=1033,Zl=33776,$l=33777,Jl=33778,Kl=33779,Ql=35840,ec=35841,tc=35842,nc=35843,$d=36196,ic=37492,sc=37496,Jd=37808,Kd=37809,Qd=37810,ef=37811,tf=37812,nf=37813,sf=37814,rf=37815,of=37816,af=37817,lf=37818,cf=37819,uf=37820,hf=37821,df=36492,ff=37840,pf=37841,mf=37842,gf=37843,xf=37844,yf=37845,vf=37846,_f=37847,wf=37848,Mf=37849,bf=37850,Sf=37851,Tf=37852,Ef=37853,jo=2200,Af=2201,Rf=2202,bi=2300,ei=2301,Yo=2302,Si=2400,Ti=2401,ur=2402,Zo=2500,rc=2501,Lf=0,oc=1,$o=2,Mt=3e3,Ot=3001,Jo=3007,Ko=3002,ac=3004,lc=3005,cc=3006,Cf=3200,Pf=3201,Sn=0,If=1;var Qo=7680;var Df=519,ds=35044,hr=35048;var uc="300 es",Jt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}},_t=[];for(let r=0;r<256;r++)_t[r]=(r<16?"0":"")+r.toString(16);var dr=1234567,fs=Math.PI/180,ps=180/Math.PI;function It(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_t[r&255]+_t[r>>8&255]+_t[r>>16&255]+_t[r>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[t&63|128]+_t[t>>8&255]+"-"+_t[t>>16&255]+_t[t>>24&255]+_t[n&255]+_t[n>>8&255]+_t[n>>16&255]+_t[n>>24&255]).toUpperCase()}function bt(r,e,t){return Math.max(e,Math.min(t,r))}function ea(r,e){return(r%e+e)%e}function Ff(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Nf(r,e,t){return r!==e?(t-r)/(e-r):0}function ms(r,e,t){return(1-t)*r+t*e}function Bf(r,e,t,n){return ms(r,e,1-Math.exp(-t*n))}function Of(r,e=1){return e-Math.abs(ea(r,e*2)-e)}function zf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Uf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Hf(r,e){return r+Math.floor(Math.random()*(e-r+1))}function kf(r,e){return r+Math.random()*(e-r)}function Gf(r){return r*(.5-Math.random())}function Vf(r){return r!==void 0&&(dr=r%2147483647),dr=dr*16807%2147483647,(dr-1)/2147483646}function Wf(r){return r*fs}function qf(r){return r*ps}function ta(r){return(r&r-1)==0&&r!==0}function hc(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function dc(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Xf(r,e,t,n,i){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*d,a*c);break;case"YZY":r.set(l*d,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*d,a*u,a*c);break;case"XZX":r.set(a*u,l*m,l*f,a*c);break;case"YXY":r.set(l*f,a*u,l*m,a*c);break;case"ZYZ":r.set(l*m,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}var gs=Object.freeze({__proto__:null,DEG2RAD:fs,RAD2DEG:ps,generateUUID:It,clamp:bt,euclideanModulo:ea,mapLinear:Ff,inverseLerp:Nf,lerp:ms,damp:Bf,pingpong:Of,smoothstep:zf,smootherstep:Uf,randInt:Hf,randFloat:kf,randFloatSpread:Gf,seededRandom:Vf,degToRad:Wf,radToDeg:qf,isPowerOfTwo:ta,ceilPowerOfTwo:hc,floorPowerOfTwo:dc,setQuaternionFromProperEuler:Xf}),j=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};j.prototype.isVector2=!0;var yt=class{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],m=n[8],x=i[0],y=i[3],p=i[6],g=i[1],w=i[4],v=i[7],b=i[2],R=i[5],_=i[8];return s[0]=o*x+a*g+l*b,s[3]=o*y+a*w+l*R,s[6]=o*p+a*v+l*_,s[1]=c*x+u*g+h*b,s[4]=c*y+u*w+h*R,s[7]=c*p+u*v+h*_,s[2]=d*x+f*g+m*b,s[5]=d*y+f*w+m*R,s[8]=d*p+f*v+m*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,f=c*s-o*l,m=t*h+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=h*x,e[1]=(i*c-u*n)*x,e[2]=(a*n-i*o)*x,e[3]=d*x,e[4]=(u*t-i*l)*x,e[5]=(i*s-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){let t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],o=i[3],a=i[6],l=i[1],c=i[4],u=i[7];return i[0]=t*s+n*l,i[3]=t*o+n*c,i[6]=t*a+n*u,i[1]=-n*s+t*l,i[4]=-n*o+t*c,i[7]=-n*a+t*u,this}translate(e,t){let n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};yt.prototype.isMatrix3=!0;function fc(r){if(r.length===0)return-1/0;let e=r[0];for(let t=1,n=r.length;t<n;++t)r[t]>e&&(e=r[t]);return e}function fr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function pc(r,e=0){let t=3735928559^e,n=1103547991^e;for(let i=0,s;i<r.length;i++)s=r.charCodeAt(i),t=Math.imul(t^s,2654435761),n=Math.imul(n^s,1597334677);return t=Math.imul(t^t>>>16,2246822507)^Math.imul(n^n>>>13,3266489909),n=Math.imul(n^n>>>16,2246822507)^Math.imul(t^t>>>13,3266489909),4294967296*(2097151&n)+(t>>>0)}var Ei,ti=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ei===void 0&&(Ei=fr("canvas")),Ei.width=e.width,Ei.height=e.height;let n=Ei.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ei}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}},jf=0,ct=class extends Jt{constructor(e=ct.DEFAULT_IMAGE,t=ct.DEFAULT_MAPPING,n=At,i=At,s=nt,o=Kn,a=wt,l=bn,c=1,u=Mt){super();Object.defineProperty(this,"id",{value:jf++}),this.uuid=It(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new j(0,0),this.repeat=new j(1,1),this.center=new j(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){let i=this.image;if(i.uuid===void 0&&(i.uuid=It()),!t&&e.images[i.uuid]===void 0){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(na(i[o].image)):s.push(na(i[o]))}else s=na(i);e.images[i.uuid]={uuid:i.uuid,url:s}}n.image=i.uuid}return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jn:e.x=e.x-Math.floor(e.x);break;case At:e.x=e.x<0?0:1;break;case us:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jn:e.y=e.y-Math.floor(e.y);break;case At:e.y=e.y<0?0:1;break;case us:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}};ct.DEFAULT_IMAGE=void 0;ct.DEFAULT_MAPPING=Yl;ct.prototype.isTexture=!0;function na(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?ti.getDataURL(r):r.data?{data:Array.prototype.slice.call(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var We=class{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,o=.01,a=.1,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],m=l[9],x=l[2],y=l[6],p=l[10];if(Math.abs(u-d)<o&&Math.abs(h-x)<o&&Math.abs(m-y)<o){if(Math.abs(u+d)<a&&Math.abs(h+x)<a&&Math.abs(m+y)<a&&Math.abs(c+f+p-3)<a)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,v=(f+1)/2,b=(p+1)/2,R=(u+d)/4,_=(h+x)/4,P=(m+y)/4;return w>v&&w>b?w<o?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=R/n,s=_/n):v>b?v<o?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=R/i,s=P/i):b<o?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=_/s,i=P/s),this.set(n,i,s,t),this}let g=Math.sqrt((y-m)*(y-m)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(g)<.001&&(g=1),this.x=(y-m)/g,this.y=(h-x)/g,this.z=(d-u)/g,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};We.prototype.isVector4=!0;var Rt=class extends Jt{constructor(e,t,n={}){super();this.width=e,this.height=t,this.depth=1,this.scissor=new We(0,0,e,t),this.scissorTest=!1,this.viewport=new We(0,0,e,t),this.texture=new ct(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:e,height:t,depth:1},this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:nt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image={...this.texture.image},this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};Rt.prototype.isWebGLRenderTarget=!0;var mc=class extends Rt{constructor(e,t,n){super(e,t);let i=this.texture;this.texture=[];for(let s=0;s<n;s++)this.texture[s]=i.clone()}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.texture.length;i<s;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone();return this}};mc.prototype.isWebGLMultipleRenderTargets=!0;var pr=class extends Rt{constructor(e,t,n={}){super(e,t,n);this.samples=4,this.ignoreDepthForMultisampleCopy=n.ignoreDepth!==void 0?n.ignoreDepth:!0,this.useRenderToTexture=n.useRenderToTexture!==void 0?n.useRenderToTexture:!1,this.useRenderbuffer=this.useRenderToTexture===!1}copy(e){return super.copy.call(this,e),this.samples=e.samples,this.useRenderToTexture=e.useRenderToTexture,this.useRenderbuffer=e.useRenderbuffer,this}};pr.prototype.isWebGLMultisampleRenderTarget=!0;var ut=class{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],d=s[o+0],f=s[o+1],m=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=x;return}if(h!==x||l!==d||c!==f||u!==m){let y=1-a,p=l*d+c*f+u*m+h*x,g=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){let b=Math.sqrt(w),R=Math.atan2(b,p*g);y=Math.sin(y*R)/b,a=Math.sin(a*R)/b}let v=a*g;if(l=l*y+d*v,c=c*y+f*v,u=u*y+m*v,h=h*y+x*v,y===1-a){let b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],d=s[o+1],f=s[o+2],m=s[o+3];return e[t]=a*m+u*h+l*f-c*d,e[t+1]=l*m+u*d+c*h-a*f,e[t+2]=c*m+u*f+a*d-l*h,e[t+3]=u*m-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");let n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),d=l(n/2),f=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"YZX":this._x=d*u*h+c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h-d*f*m;break;case"XZY":this._x=d*u*h-c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};ut.prototype.isQuaternion=!0;var S=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(gc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,u=l*n+a*t-s*i,h=l*i+s*n-o*t,d=-s*t-o*n-a*i;return this.x=c*l+d*-s+u*-a-h*-o,this.y=u*l+d*-o+h*-s-c*-a,this.z=h*l+d*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ia.copy(this).projectOnVector(e),this.sub(ia)}reflect(e){return this.sub(ia.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};S.prototype.isVector3=!0;var ia=new S,gc=new ut,Pt=class{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){let u=e[l],h=e[l+1],d=e[l+2];u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){let u=e.getX(l),h=e.getY(l),d=e.getZ(l);u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=xs.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);let t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),sa.copy(t.boundingBox),sa.applyMatrix4(e.matrixWorld),this.union(sa));let n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,xs),xs.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ys),mr.subVectors(this.max,ys),Ai.subVectors(e.a,ys),Ri.subVectors(e.b,ys),Li.subVectors(e.c,ys),Tn.subVectors(Ri,Ai),En.subVectors(Li,Ri),ni.subVectors(Ai,Li);let t=[0,-Tn.z,Tn.y,0,-En.z,En.y,0,-ni.z,ni.y,Tn.z,0,-Tn.x,En.z,0,-En.x,ni.z,0,-ni.x,-Tn.y,Tn.x,0,-En.y,En.x,0,-ni.y,ni.x,0];return!ra(t,Ai,Ri,Li,mr)||(t=[1,0,0,0,1,0,0,0,1],!ra(t,Ai,Ri,Li,mr))?!1:(gr.crossVectors(Tn,En),t=[gr.x,gr.y,gr.z],ra(t,Ai,Ri,Li,mr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return xs.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(xs).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(on),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};Pt.prototype.isBox3=!0;var on=[new S,new S,new S,new S,new S,new S,new S,new S],xs=new S,sa=new Pt,Ai=new S,Ri=new S,Li=new S,Tn=new S,En=new S,ni=new S,ys=new S,mr=new S,gr=new S,ii=new S;function ra(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ii.fromArray(r,s);let a=i.x*Math.abs(ii.x)+i.y*Math.abs(ii.y)+i.z*Math.abs(ii.z),l=e.dot(ii),c=t.dot(ii),u=n.dot(ii);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Yf=new Pt,xc=new S,oa=new S,aa=new S,an=class{constructor(e=new S,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Yf.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){aa.subVectors(e,this.center);let t=aa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(aa.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return oa.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(xc.copy(e.center).add(oa)),this.expandByPoint(xc.copy(e.center).sub(oa)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ln=new S,la=new S,xr=new S,An=new S,ca=new S,yr=new S,ua=new S,si=class{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ln.copy(this.direction).multiplyScalar(t).add(this.origin),ln.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){la.copy(e).add(t).multiplyScalar(.5),xr.copy(t).sub(e).normalize(),An.copy(this.origin).sub(la);let s=e.distanceTo(t)*.5,o=-this.direction.dot(xr),a=An.dot(this.direction),l=-An.dot(xr),c=An.lengthSq(),u=Math.abs(1-o*o),h,d,f,m;if(u>0)if(h=o*l-a,d=o*a-l,m=s*u,h>=0)if(d>=-m)if(d<=m){let x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-m?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=m?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(xr).multiplyScalar(d).add(la),f}intersectSphere(e,t){ln.subVectors(e.center,this.origin);let n=ln.dot(this.direction),i=ln.dot(ln)-n*n,s=e.radius*e.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||n!==n)&&(n=s),(o<i||i!==i)&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ln)!==null}intersectTriangle(e,t,n,i,s){ca.subVectors(t,e),yr.subVectors(n,e),ua.crossVectors(ca,yr);let o=this.direction.dot(ua),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;An.subVectors(this.origin,e);let l=a*this.direction.dot(yr.crossVectors(An,yr));if(l<0)return null;let c=a*this.direction.dot(ca.cross(An));if(c<0||l+c>o)return null;let u=-a*An.dot(ua);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pe=class{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,o,a,l,c,u,h,d,f,m,x,y){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Ci.setFromMatrixColumn(e,0).length(),s=1/Ci.setFromMatrixColumn(e,1).length(),o=1/Ci.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");let t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let d=o*u,f=o*h,m=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+m*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,m=c*u,x=c*h;t[0]=d+x*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-m,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,m=c*u,x=c*h;t[0]=d-x*a,t[4]=-o*h,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,f=o*h,m=a*u,x=a*h;t[0]=l*u,t[4]=m*c-f,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,m=a*l,x=a*c;t[0]=l*u,t[4]=x-d*h,t[8]=m*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+m,t[10]=d-x*h}else if(e.order==="XZY"){let d=o*l,f=o*c,m=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=o*u,t[9]=f*h-m,t[2]=m*h-f,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zf,e,$f)}lookAt(e,t,n){let i=this.elements;return Dt.subVectors(e,t),Dt.lengthSq()===0&&(Dt.z=1),Dt.normalize(),Rn.crossVectors(n,Dt),Rn.lengthSq()===0&&(Math.abs(n.z)===1?Dt.x+=1e-4:Dt.z+=1e-4,Dt.normalize(),Rn.crossVectors(n,Dt)),Rn.normalize(),vr.crossVectors(Dt,Rn),i[0]=Rn.x,i[4]=vr.x,i[8]=Dt.x,i[1]=Rn.y,i[5]=vr.y,i[9]=Dt.y,i[2]=Rn.z,i[6]=vr.z,i[10]=Dt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],m=n[2],x=n[6],y=n[10],p=n[14],g=n[3],w=n[7],v=n[11],b=n[15],R=i[0],_=i[4],P=i[8],k=i[12],G=i[1],C=i[5],Y=i[9],D=i[13],F=i[2],B=i[6],O=i[10],U=i[14],ne=i[3],ue=i[7],q=i[11],X=i[15];return s[0]=o*R+a*G+l*F+c*ne,s[4]=o*_+a*C+l*B+c*ue,s[8]=o*P+a*Y+l*O+c*q,s[12]=o*k+a*D+l*U+c*X,s[1]=u*R+h*G+d*F+f*ne,s[5]=u*_+h*C+d*B+f*ue,s[9]=u*P+h*Y+d*O+f*q,s[13]=u*k+h*D+d*U+f*X,s[2]=m*R+x*G+y*F+p*ne,s[6]=m*_+x*C+y*B+p*ue,s[10]=m*P+x*Y+y*O+p*q,s[14]=m*k+x*D+y*U+p*X,s[3]=g*R+w*G+v*F+b*ne,s[7]=g*_+w*C+v*B+b*ue,s[11]=g*P+w*Y+v*O+b*q,s[15]=g*k+w*D+v*U+b*X,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],m=e[3],x=e[7],y=e[11],p=e[15];return m*(+s*l*h-i*c*h-s*a*d+n*c*d+i*a*f-n*l*f)+x*(+t*l*f-t*c*d+s*o*d-i*o*f+i*c*u-s*l*u)+y*(+t*c*h-t*a*f-s*o*h+n*o*f+s*a*u-n*c*u)+p*(-i*a*u-t*l*h+t*a*d+i*o*h-n*o*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],m=e[12],x=e[13],y=e[14],p=e[15],g=h*y*c-x*d*c+x*l*f-a*y*f-h*l*p+a*d*p,w=m*d*c-u*y*c-m*l*f+o*y*f+u*l*p-o*d*p,v=u*x*c-m*h*c+m*a*f-o*x*f-u*a*p+o*h*p,b=m*h*l-u*x*l-m*a*d+o*x*d+u*a*y-o*h*y,R=t*g+n*w+i*v+s*b;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let _=1/R;return e[0]=g*_,e[1]=(x*d*s-h*y*s-x*i*f+n*y*f+h*i*p-n*d*p)*_,e[2]=(a*y*s-x*l*s+x*i*c-n*y*c-a*i*p+n*l*p)*_,e[3]=(h*l*s-a*d*s-h*i*c+n*d*c+a*i*f-n*l*f)*_,e[4]=w*_,e[5]=(u*y*s-m*d*s+m*i*f-t*y*f-u*i*p+t*d*p)*_,e[6]=(m*l*s-o*y*s-m*i*c+t*y*c+o*i*p-t*l*p)*_,e[7]=(o*d*s-u*l*s+u*i*c-t*d*c-o*i*f+t*l*f)*_,e[8]=v*_,e[9]=(m*h*s-u*x*s-m*n*f+t*x*f+u*n*p-t*h*p)*_,e[10]=(o*x*s-m*a*s+m*n*c-t*x*c-o*n*p+t*a*p)*_,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*f-t*a*f)*_,e[12]=b*_,e[13]=(u*x*i-m*h*i+m*n*d-t*x*d-u*n*y+t*h*y)*_,e[14]=(m*a*i-o*x*i-m*n*l+t*x*l+o*n*y-t*a*y)*_,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*d+t*a*d)*_,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,f=s*u,m=s*h,x=o*u,y=o*h,p=a*h,g=l*c,w=l*u,v=l*h,b=n.x,R=n.y,_=n.z;return i[0]=(1-(x+p))*b,i[1]=(f+v)*b,i[2]=(m-w)*b,i[3]=0,i[4]=(f-v)*R,i[5]=(1-(d+p))*R,i[6]=(y+g)*R,i[7]=0,i[8]=(m+w)*_,i[9]=(y-g)*_,i[10]=(1-(d+x))*_,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=Ci.set(i[0],i[1],i[2]).length(),o=Ci.set(i[4],i[5],i[6]).length(),a=Ci.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Wt.copy(this);let c=1/s,u=1/o,h=1/a;return Wt.elements[0]*=c,Wt.elements[1]*=c,Wt.elements[2]*=c,Wt.elements[4]*=u,Wt.elements[5]*=u,Wt.elements[6]*=u,Wt.elements[8]*=h,Wt.elements[9]*=h,Wt.elements[10]*=h,t.setFromRotationMatrix(Wt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");let a=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),d=-(o+s)/(o-s),f=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){let a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(o-s),h=(t+e)*l,d=(n+i)*c,f=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};pe.prototype.isMatrix4=!0;var Ci=new S,Wt=new pe,Zf=new S(0,0,0),$f=new S(1,1,1),Rn=new S,vr=new S,Dt=new S,yc=new pe,vc=new ut,ri=class{constructor(e=0,t=0,n=0,i=ri.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return yc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vc.setFromEuler(this),this.setFromQuaternion(vc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new S(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};ri.prototype.isEuler=!0;ri.DefaultOrder="XYZ";ri.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];var _c=class{constructor(){this.mask=1|0}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=4294967295|0}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},Jf=0,wc=new S,Pi=new ut,cn=new pe,_r=new S,vs=new S,Kf=new S,Qf=new ut,Mc=new S(1,0,0),bc=new S(0,1,0),Sc=new S(0,0,1),ep={type:"added"},Tc={type:"removed"},_e=class extends Jt{constructor(){super();Object.defineProperty(this,"id",{value:Jf++}),this.uuid=It(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_e.DefaultUp.clone();let e=new S,t=new ri,n=new ut,i=new S(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new pe},normalMatrix:{value:new yt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=_e.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new _c,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.premultiply(Pi),this}rotateX(e){return this.rotateOnAxis(Mc,e)}rotateY(e){return this.rotateOnAxis(bc,e)}rotateZ(e){return this.rotateOnAxis(Sc,e)}translateOnAxis(e,t){return wc.copy(e).applyQuaternion(this.quaternion),this.position.add(wc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mc,e)}translateY(e){return this.translateOnAxis(bc,e)}translateZ(e){return this.translateOnAxis(Sc,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_r.copy(e):_r.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(vs,_r,this.up):cn.lookAt(_r,vs,this.up),this.quaternion.setFromRotationMatrix(cn),i&&(cn.extractRotation(i.matrixWorld),Pi.setFromRotationMatrix(cn),this.quaternion.premultiply(Pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ep)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tc)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(Tc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(cn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,e,Kf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,Qf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f)}return n.object=i,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};_e.DefaultUp=new S(0,1,0);_e.DefaultMatrixAutoUpdate=!0;_e.prototype.isObject3D=!0;var qt=new S,un=new S,ha=new S,hn=new S,Ii=new S,Di=new S,Ec=new S,da=new S,fa=new S,pa=new S,ht=class{constructor(e=new S,t=new S,n=new S){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),qt.subVectors(e,t),i.cross(qt);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){qt.subVectors(i,t),un.subVectors(n,t),ha.subVectors(e,t);let o=qt.dot(qt),a=qt.dot(un),l=qt.dot(ha),c=un.dot(un),u=un.dot(ha),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);let d=1/h,f=(c*l-a*u)*d,m=(o*u-a*l)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,hn),hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getUV(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,hn),l.set(0,0),l.addScaledVector(s,hn.x),l.addScaledVector(o,hn.y),l.addScaledVector(a,hn.z),l}static isFrontFacing(e,t,n,i){return qt.subVectors(n,t),un.subVectors(e,t),qt.cross(un).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),un.subVectors(this.a,this.b),qt.cross(un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ht.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ht.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return ht.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ht.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ht.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,o,a;Ii.subVectors(i,n),Di.subVectors(s,n),da.subVectors(e,n);let l=Ii.dot(da),c=Di.dot(da);if(l<=0&&c<=0)return t.copy(n);fa.subVectors(e,i);let u=Ii.dot(fa),h=Di.dot(fa);if(u>=0&&h<=u)return t.copy(i);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ii,o);pa.subVectors(e,s);let f=Ii.dot(pa),m=Di.dot(pa);if(m>=0&&f<=m)return t.copy(s);let x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(Di,a);let y=u*m-f*h;if(y<=0&&h-u>=0&&f-m>=0)return Ec.subVectors(s,i),a=(h-u)/(h-u+(f-m)),t.copy(i).addScaledVector(Ec,a);let p=1/(y+x+d);return o=x*p,a=d*p,t.copy(n).addScaledVector(Ii,o).addScaledVector(Di,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},tp=0,dt=class extends Jt{constructor(){super();Object.defineProperty(this,"id",{value:tp++}),this.uuid=It(),this.name="",this.type="Material",this.fog=!0,this.blending=as,this.side=sn,this.vertexColors=!1,this.opacity=1,this.format=wt,this.transparent=!1,this.blendSrc=Xl,this.blendDst=jl,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ko,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Df,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qo,this.stencilZFail=Qo,this.stencilZPass=Qo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===kl;continue}let i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(n.blending=this.blending),this.side!==sn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.format!==wt&&(n.format=this.format),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.format=e.format,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};dt.prototype.isMaterial=!0;var Ac={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xt={h:0,s:0,l:0},wr={h:0,s:0,l:0};function ma(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function ga(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function xa(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var ee=class{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=ea(e,1),t=bt(t,0,1),n=bt(n,0,1),t===0)this.r=this.g=this.b=n;else{let i=n<=.5?n*(1+t):n+t-n*t,s=2*n-i;this.r=ma(s,i,e+1/3),this.g=ma(s,i,e),this.b=ma(s,i,e-1/3)}return this}setStyle(e){function t(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i,s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){let a=parseFloat(i[1])/360,l=parseInt(i[2],10)/100,c=parseInt(i[3],10)/100;return t(i[4]),this.setHSL(a,l,c)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let i=n[1],s=i.length;if(s===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){let t=Ac[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){let n=t>0?1/t:1;return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=ga(e.r),this.g=ga(e.g),this.b=ga(e.b),this}copyLinearToSRGB(e){return this.r=xa(e.r),this.g=xa(e.g),this.b=xa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){let t=this.r,n=this.g,i=this.b,s=Math.max(t,n,i),o=Math.min(t,n,i),a,l,c=(o+s)/2;if(o===s)a=0,l=0;else{let u=s-o;switch(l=c<=.5?u/(s+o):u/(2-s-o),s){case t:a=(n-i)/u+(n<i?6:0);break;case n:a=(i-t)/u+2;break;case i:a=(t-n)/u+4;break}a/=6}return e.h=a,e.s=l,e.l=c,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(Xt),Xt.h+=e,Xt.s+=t,Xt.l+=n,this.setHSL(Xt.h,Xt.s,Xt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xt),e.getHSL(wr);let n=ms(Xt.h,wr.h,t),i=ms(Xt.s,wr.s,t),s=ms(Xt.l,wr.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}};ee.NAMES=Ac;ee.prototype.isColor=!0;ee.prototype.r=1;ee.prototype.g=1;ee.prototype.b=1;var Ke=class extends dt{constructor(e){super();this.type="MeshBasicMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=rr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}};Ke.prototype.isMeshBasicMaterial=!0;var $e=new S,Mr=new j,je=class{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=ds,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){let t=this.array,n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new ee),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){let t=this.array,n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new j),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){let t=this.array,n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new S),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){let t=this.array,n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new We),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Mr.fromBufferAttribute(this,t),Mr.applyMatrix3(e),this.setXY(t,Mr.x,Mr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$e.fromBufferAttribute(this,t),$e.applyMatrix3(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$e.x=this.getX(t),$e.y=this.getY(t),$e.z=this.getZ(t),$e.applyMatrix4(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$e.x=this.getX(t),$e.y=this.getY(t),$e.z=this.getZ(t),$e.applyNormalMatrix(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$e.x=this.getX(t),$e.y=this.getY(t),$e.z=this.getZ(t),$e.transformDirection(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ds&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}};je.prototype.isBufferAttribute=!0;var ya=class extends je{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var _s=class extends je{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Rc=class extends je{constructor(e,t,n){super(new Uint16Array(e),t,n)}};Rc.prototype.isFloat16BufferAttribute=!0;var Ce=class extends je{constructor(e,t,n){super(new Float32Array(e),t,n)}};var np=0,zt=new pe,va=new _e,Fi=new S,Ft=new Pt,ws=new Pt,vt=new S,Pe=class extends Jt{constructor(){super();Object.defineProperty(this,"id",{value:np++}),this.uuid=It(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fc(e)>65535?_s:ya)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new yt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zt.makeRotationFromQuaternion(e),this.applyMatrix4(zt),this}rotateX(e){return zt.makeRotationX(e),this.applyMatrix4(zt),this}rotateY(e){return zt.makeRotationY(e),this.applyMatrix4(zt),this}rotateZ(e){return zt.makeRotationZ(e),this.applyMatrix4(zt),this}translate(e,t,n){return zt.makeTranslation(e,t,n),this.applyMatrix4(zt),this}scale(e,t,n){return zt.makeScale(e,t,n),this.applyMatrix4(zt),this}lookAt(e){return va.lookAt(e),va.updateMatrix(),this.applyMatrix4(va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ce(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];Ft.setFromBufferAttribute(s),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new an);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new S,1/0);return}if(e){let n=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];ws.setFromBufferAttribute(a),this.morphTargetsRelative?(vt.addVectors(Ft.min,ws.min),Ft.expandByPoint(vt),vt.addVectors(Ft.max,ws.max),Ft.expandByPoint(vt)):(Ft.expandByPoint(ws.min),Ft.expandByPoint(ws.max))}Ft.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)vt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(vt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)vt.fromBufferAttribute(a,c),l&&(Fi.fromBufferAttribute(e,c),vt.add(Fi)),i=Math.max(i,n.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;t.tangent===void 0&&this.setAttribute("tangent",new je(new Float32Array(4*a),4));let l=t.tangent.array,c=[],u=[];for(let G=0;G<a;G++)c[G]=new S,u[G]=new S;let h=new S,d=new S,f=new S,m=new j,x=new j,y=new j,p=new S,g=new S;function w(G,C,Y){h.fromArray(i,G*3),d.fromArray(i,C*3),f.fromArray(i,Y*3),m.fromArray(o,G*2),x.fromArray(o,C*2),y.fromArray(o,Y*2),d.sub(h),f.sub(h),x.sub(m),y.sub(m);let D=1/(x.x*y.y-y.x*x.y);!isFinite(D)||(p.copy(d).multiplyScalar(y.y).addScaledVector(f,-x.y).multiplyScalar(D),g.copy(f).multiplyScalar(x.x).addScaledVector(d,-y.x).multiplyScalar(D),c[G].add(p),c[C].add(p),c[Y].add(p),u[G].add(g),u[C].add(g),u[Y].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let G=0,C=v.length;G<C;++G){let Y=v[G],D=Y.start,F=Y.count;for(let B=D,O=D+F;B<O;B+=3)w(n[B+0],n[B+1],n[B+2])}let b=new S,R=new S,_=new S,P=new S;function k(G){_.fromArray(s,G*3),P.copy(_);let C=c[G];b.copy(C),b.sub(_.multiplyScalar(_.dot(C))).normalize(),R.crossVectors(P,C);let D=R.dot(u[G])<0?-1:1;l[G*4]=b.x,l[G*4+1]=b.y,l[G*4+2]=b.z,l[G*4+3]=D}for(let G=0,C=v.length;G<C;++G){let Y=v[G],D=Y.start,F=Y.count;for(let B=D,O=D+F;B<O;B+=3)k(n[B+0]),k(n[B+1]),k(n[B+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new je(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new S,s=new S,o=new S,a=new S,l=new S,c=new S,u=new S,h=new S;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),x=e.getX(d+1),y=e.getX(d+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,y),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,y),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(y,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));let n=this.attributes;for(let i in n){if(e.attributes[i]===void 0)continue;let o=n[i].array,a=e.attributes[i],l=a.array,c=a.itemSize*t,u=Math.min(l.length,o.length-c);for(let h=0,d=c;h<u;h++,d++)o[d]=l[h]}return this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,m=0;for(let x=0,y=l.length;x<y;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let p=0;p<u;p++)d[m++]=c[f++]}return new je(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new Pe,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}};Pe.prototype.isBufferGeometry=!0;var Lc=new pe,Ni=new si,_a=new an,Ln=new S,Cn=new S,Pn=new S,wa=new S,Ma=new S,ba=new S,br=new S,Sr=new S,Tr=new S,Er=new j,Ar=new j,Rr=new j,Sa=new S,Lr=new S,Re=class extends _e{constructor(e=new Pe,t=new Ke){super();this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(s),e.ray.intersectsSphere(_a)===!1)||(Lc.copy(s).invert(),Ni.copy(e.ray).applyMatrix4(Lc),n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1))return;let o;if(n.isBufferGeometry){let a=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,d=n.attributes.uv2,f=n.groups,m=n.drawRange;if(a!==null)if(Array.isArray(i))for(let x=0,y=f.length;x<y;x++){let p=f[x],g=i[p.materialIndex],w=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let b=w,R=v;b<R;b+=3){let _=a.getX(b),P=a.getX(b+1),k=a.getX(b+2);o=Cr(this,g,e,Ni,l,c,u,h,d,_,P,k),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{let x=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let p=x,g=y;p<g;p+=3){let w=a.getX(p),v=a.getX(p+1),b=a.getX(p+2);o=Cr(this,i,e,Ni,l,c,u,h,d,w,v,b),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let x=0,y=f.length;x<y;x++){let p=f[x],g=i[p.materialIndex],w=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let b=w,R=v;b<R;b+=3){let _=b,P=b+1,k=b+2;o=Cr(this,g,e,Ni,l,c,u,h,d,_,P,k),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{let x=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let p=x,g=y;p<g;p+=3){let w=p,v=p+1,b=p+2;o=Cr(this,i,e,Ni,l,c,u,h,d,w,v,b),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}};Re.prototype.isMesh=!0;function ip(r,e,t,n,i,s,o,a){let l;if(e.side===tt?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side!==xt,a),l===null)return null;Lr.copy(a),Lr.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(Lr);return c<t.near||c>t.far?null:{distance:c,point:Lr.clone(),object:r}}function Cr(r,e,t,n,i,s,o,a,l,c,u,h){Ln.fromBufferAttribute(i,c),Cn.fromBufferAttribute(i,u),Pn.fromBufferAttribute(i,h);let d=r.morphTargetInfluences;if(s&&d){br.set(0,0,0),Sr.set(0,0,0),Tr.set(0,0,0);for(let m=0,x=s.length;m<x;m++){let y=d[m],p=s[m];y!==0&&(wa.fromBufferAttribute(p,c),Ma.fromBufferAttribute(p,u),ba.fromBufferAttribute(p,h),o?(br.addScaledVector(wa,y),Sr.addScaledVector(Ma,y),Tr.addScaledVector(ba,y)):(br.addScaledVector(wa.sub(Ln),y),Sr.addScaledVector(Ma.sub(Cn),y),Tr.addScaledVector(ba.sub(Pn),y)))}Ln.add(br),Cn.add(Sr),Pn.add(Tr)}r.isSkinnedMesh&&(r.boneTransform(c,Ln),r.boneTransform(u,Cn),r.boneTransform(h,Pn));let f=ip(r,e,t,n,Ln,Cn,Pn,Sa);if(f){a&&(Er.fromBufferAttribute(a,c),Ar.fromBufferAttribute(a,u),Rr.fromBufferAttribute(a,h),f.uv=ht.getUV(Sa,Ln,Cn,Pn,Er,Ar,Rr,new j)),l&&(Er.fromBufferAttribute(l,c),Ar.fromBufferAttribute(l,u),Rr.fromBufferAttribute(l,h),f.uv2=ht.getUV(Sa,Ln,Cn,Pn,Er,Ar,Rr,new j));let m={a:c,b:u,c:h,normal:new S,materialIndex:0};ht.getNormal(Ln,Cn,Pn,m.normal),f.face=m}return f}var Kt=class extends Pe{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(u,3)),this.setAttribute("uv",new Ce(h,2));function m(x,y,p,g,w,v,b,R,_,P,k){let G=v/_,C=b/P,Y=v/2,D=b/2,F=R/2,B=_+1,O=P+1,U=0,ne=0,ue=new S;for(let q=0;q<O;q++){let X=q*C-D;for(let he=0;he<B;he++){let le=he*G-Y;ue[x]=le*g,ue[y]=X*w,ue[p]=F,c.push(ue.x,ue.y,ue.z),ue[x]=0,ue[y]=0,ue[p]=R>0?1:-1,u.push(ue.x,ue.y,ue.z),h.push(he/_),h.push(1-q/P),U+=1}}for(let q=0;q<P;q++)for(let X=0;X<_;X++){let he=d+X+B*q,le=d+X+B*(q+1),me=d+(X+1)+B*(q+1),Oe=d+(X+1)+B*q;l.push(he,le,Oe),l.push(le,me,Oe),ne+=6}a.addGroup(f,ne,k),f+=ne,d+=U}}static fromJSON(e){return new Kt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Bi(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function St(r){let e={};for(let t=0;t<r.length;t++){let n=Bi(r[t]);for(let i in n)e[i]=n[i]}return e}var sp={clone:Bi,merge:St},rp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,op=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mt=class extends dt{constructor(e){super();this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=rp,this.fragmentShader=op,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bi(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}};mt.prototype.isShaderMaterial=!0;var Pr=class extends _e{constructor(){super();this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};Pr.prototype.isCamera=!0;var ft=class extends Pr{constructor(e=50,t=1,n=.1,i=2e3){super();this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(fs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ps*2*Math.atan(Math.tan(fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(fs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};ft.prototype.isPerspectiveCamera=!0;var Oi=90,zi=1,Ir=class extends _e{constructor(e,t,n){super();if(this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;let i=new ft(Oi,zi,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new S(1,0,0)),this.add(i);let s=new ft(Oi,zi,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new S(-1,0,0)),this.add(s);let o=new ft(Oi,zi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new S(0,1,0)),this.add(o);let a=new ft(Oi,zi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new S(0,-1,0)),this.add(a);let l=new ft(Oi,zi,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new S(0,0,1)),this.add(l);let c=new ft(Oi,zi,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new S(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();let n=this.renderTarget,[i,s,o,a,l,c]=this.children,u=e.xr.enabled,h=e.getRenderTarget();e.xr.enabled=!1;let d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.xr.enabled=u}},Ms=class extends ct{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ls;super(e,t,n,i,s,o,a,l,c,u);this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};Ms.prototype.isCubeTexture=!0;var Ta=class extends Rt{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n);super(e,e,t);t=t||{},this.texture=new Ms(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:nt,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=wt,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Kt(5,5,5),s=new mt({name:"CubemapFromEquirect",uniforms:Bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tt,blending:wn});s.uniforms.tEquirect.value=t;let o=new Re(i,s),a=t.minFilter;return t.minFilter===Kn&&(t.minFilter=nt),new Ir(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}};Ta.prototype.isWebGLCubeRenderTarget=!0;var Ea=new S,ap=new S,lp=new yt,Ut=class{constructor(e=new S(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Ea.subVectors(n,t).cross(ap.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){let n=e.delta(Ea),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||lp.getNormalMatrix(e),i=this.coplanarPoint(Ea).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};Ut.prototype.isPlane=!0;var Ui=new an,Dr=new S,bs=class{constructor(e=new Ut,t=new Ut,n=new Ut,i=new Ut,s=new Ut,o=new Ut){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){let t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],d=n[8],f=n[9],m=n[10],x=n[11],y=n[12],p=n[13],g=n[14],w=n[15];return t[0].setComponents(a-i,h-l,x-d,w-y).normalize(),t[1].setComponents(a+i,h+l,x+d,w+y).normalize(),t[2].setComponents(a+s,h+c,x+f,w+p).normalize(),t[3].setComponents(a-s,h-c,x-f,w-p).normalize(),t[4].setComponents(a-o,h-u,x-m,w-g).normalize(),t[5].setComponents(a+o,h+u,x+m,w+g).normalize(),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSprite(e){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Dr.x=i.normal.x>0?e.max.x:e.min.x,Dr.y=i.normal.y>0?e.max.y:e.min.y,Dr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Dr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Cc(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function cp(r,e){let t=e.isWebGL2,n=new WeakMap;function i(c,u){let h=c.array,d=c.usage,f=r.createBuffer();r.bindBuffer(u,f),r.bufferData(u,h,d),c.onUploadCallback();let m=5126;return h instanceof Float32Array?m=5126:h instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):h instanceof Uint16Array?c.isFloat16BufferAttribute?t?m=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):m=5123:h instanceof Int16Array?m=5122:h instanceof Uint32Array?m=5125:h instanceof Int32Array?m=5124:h instanceof Int8Array?m=5120:(h instanceof Uint8Array||h instanceof Uint8ClampedArray)&&(m=5121),{buffer:f,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){let d=u.array,f=u.updateRange;r.bindBuffer(h,c),f.count===-1?r.bufferSubData(h,0,d):(t?r.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):r.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}var dn=class extends Pe{constructor(e=1,t=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],m=[],x=[],y=[];for(let p=0;p<u;p++){let g=p*d-o;for(let w=0;w<c;w++){let v=w*h-s;m.push(v,-g,0),x.push(0,0,1),y.push(w/a),y.push(1-p/l)}}for(let p=0;p<l;p++)for(let g=0;g<a;g++){let w=g+c*p,v=g+c*(p+1),b=g+1+c*(p+1),R=g+1+c*p;f.push(w,v,R),f.push(v,b,R)}this.setIndex(f),this.setAttribute("position",new Ce(m,3)),this.setAttribute("normal",new Ce(x,3)),this.setAttribute("uv",new Ce(y,2))}static fromJSON(e){return new dn(e.width,e.height,e.widthSegments,e.heightSegments)}},up=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,hp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,fp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gp="vec3 transformed = vec3( position );",xp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yp=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,vp=`#ifdef USE_BUMPMAP
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
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Rp=`#define PI 3.141592653589793
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
}`,Lp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cp=`vec3 transformedNormal = objectNormal;
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
#endif`,Pp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ip=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Dp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Np="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bp=`
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
}`,Op=`#ifdef USE_ENVMAP
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
#endif`,zp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Up=`#ifdef USE_ENVMAP
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
#endif`,Hp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kp=`#ifdef USE_ENVMAP
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
#endif`,Gp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xp=`#ifdef USE_GRADIENTMAP
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
}`,jp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Yp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zp=`vec3 diffuse = vec3( 1.0 );
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
#endif`,$p=`uniform bool receiveShadow;
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
#endif`,Jp=`#if defined( USE_ENVMAP )
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
#endif`,Kp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qp=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tm=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,nm=`PhysicalMaterial material;
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
#endif`,im=`struct PhysicalMaterial {
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
		reflectedLight.directSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
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
}`,sm=`
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
#endif`,rm=`#if defined( RE_IndirectDiffuse )
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
#endif`,om=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,am=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,um=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,hm=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,dm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xm=`#ifdef USE_MORPHNORMALS
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
#endif`,ym=`#ifdef USE_MORPHTARGETS
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
#endif`,vm=`#ifdef USE_MORPHTARGETS
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
#endif`,_m=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,wm=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tm=`#ifdef USE_NORMALMAP
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
#endif`,Em=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Am=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Rm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Lm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Im=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Om=`#ifdef USE_SHADOWMAP
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
#endif`,zm=`#ifdef USE_SHADOWMAP
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
#endif`,Um=`#ifdef USE_SHADOWMAP
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
#endif`,Hm=`float getShadowMask() {
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
}`,km=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gm=`#ifdef USE_SKINNING
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
#endif`,Vm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wm=`#ifdef USE_SKINNING
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
#endif`,qm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ym=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zm=`#ifdef USE_TRANSMISSION
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
#endif`,$m=`#ifdef USE_TRANSMISSION
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
#endif`,Jm=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Km=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Qm=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,eg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,tg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,ng=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,ig=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rg=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ag=`#include <envmap_common_pars_fragment>
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
}`,lg=`#include <common>
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
}`,cg=`#if DEPTH_PACKING == 3200
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
}`,ug=`#define DISTANCE
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
}`,hg=`#define DISTANCE
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
}`,dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,pg=`uniform float scale;
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
}`,mg=`uniform vec3 diffuse;
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
}`,gg=`#include <common>
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
}`,xg=`uniform vec3 diffuse;
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
}`,yg=`#define LAMBERT
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
}`,vg=`uniform vec3 diffuse;
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
}`,_g=`#define MATCAP
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
}`,wg=`#define MATCAP
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
}`,Mg=`#define NORMAL
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
}`,bg=`#define NORMAL
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
}`,Sg=`#define PHONG
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
}`,Tg=`#define PHONG
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
}`,Eg=`#define STANDARD
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
}`,Ag=`#define STANDARD
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
}`,Rg=`#define TOON
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
}`,Lg=`#define TOON
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
}`,Cg=`uniform float size;
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
}`,Pg=`uniform vec3 diffuse;
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
}`,Ig=`#include <common>
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
}`,Dg=`uniform vec3 color;
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
}`,Fg=`uniform float rotation;
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
}`,Ng=`uniform vec3 diffuse;
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
}`,Ne={alphamap_fragment:up,alphamap_pars_fragment:hp,alphatest_fragment:dp,alphatest_pars_fragment:fp,aomap_fragment:pp,aomap_pars_fragment:mp,begin_vertex:gp,beginnormal_vertex:xp,bsdfs:yp,bumpmap_pars_fragment:vp,clipping_planes_fragment:_p,clipping_planes_pars_fragment:wp,clipping_planes_pars_vertex:Mp,clipping_planes_vertex:bp,color_fragment:Sp,color_pars_fragment:Tp,color_pars_vertex:Ep,color_vertex:Ap,common:Rp,cube_uv_reflection_fragment:Lp,defaultnormal_vertex:Cp,displacementmap_pars_vertex:Pp,displacementmap_vertex:Ip,emissivemap_fragment:Dp,emissivemap_pars_fragment:Fp,encodings_fragment:Np,encodings_pars_fragment:Bp,envmap_fragment:Op,envmap_common_pars_fragment:zp,envmap_pars_fragment:Up,envmap_pars_vertex:Hp,envmap_physical_pars_fragment:Jp,envmap_vertex:kp,fog_vertex:Gp,fog_pars_vertex:Vp,fog_fragment:Wp,fog_pars_fragment:qp,gradientmap_pars_fragment:Xp,lightmap_fragment:jp,lightmap_pars_fragment:Yp,lights_lambert_vertex:Zp,lights_pars_begin:$p,lights_toon_fragment:Kp,lights_toon_pars_fragment:Qp,lights_phong_fragment:em,lights_phong_pars_fragment:tm,lights_physical_fragment:nm,lights_physical_pars_fragment:im,lights_fragment_begin:sm,lights_fragment_maps:rm,lights_fragment_end:om,logdepthbuf_fragment:am,logdepthbuf_pars_fragment:lm,logdepthbuf_pars_vertex:cm,logdepthbuf_vertex:um,map_fragment:hm,map_pars_fragment:dm,map_particle_fragment:fm,map_particle_pars_fragment:pm,metalnessmap_fragment:mm,metalnessmap_pars_fragment:gm,morphnormal_vertex:xm,morphtarget_pars_vertex:ym,morphtarget_vertex:vm,normal_fragment_begin:_m,normal_fragment_maps:wm,normal_pars_fragment:Mm,normal_pars_vertex:bm,normal_vertex:Sm,normalmap_pars_fragment:Tm,clearcoat_normal_fragment_begin:Em,clearcoat_normal_fragment_maps:Am,clearcoat_pars_fragment:Rm,output_fragment:Lm,packing:Cm,premultiplied_alpha_fragment:Pm,project_vertex:Im,dithering_fragment:Dm,dithering_pars_fragment:Fm,roughnessmap_fragment:Nm,roughnessmap_pars_fragment:Bm,shadowmap_pars_fragment:Om,shadowmap_pars_vertex:zm,shadowmap_vertex:Um,shadowmask_pars_fragment:Hm,skinbase_vertex:km,skinning_pars_vertex:Gm,skinning_vertex:Vm,skinnormal_vertex:Wm,specularmap_fragment:qm,specularmap_pars_fragment:Xm,tonemapping_fragment:jm,tonemapping_pars_fragment:Ym,transmission_fragment:Zm,transmission_pars_fragment:$m,uv_pars_fragment:Jm,uv_pars_vertex:Km,uv_vertex:Qm,uv2_pars_fragment:eg,uv2_pars_vertex:tg,uv2_vertex:ng,worldpos_vertex:ig,background_vert:sg,background_frag:rg,cube_vert:og,cube_frag:ag,depth_vert:lg,depth_frag:cg,distanceRGBA_vert:ug,distanceRGBA_frag:hg,equirect_vert:dg,equirect_frag:fg,linedashed_vert:pg,linedashed_frag:mg,meshbasic_vert:gg,meshbasic_frag:xg,meshlambert_vert:yg,meshlambert_frag:vg,meshmatcap_vert:_g,meshmatcap_frag:wg,meshnormal_vert:Mg,meshnormal_frag:bg,meshphong_vert:Sg,meshphong_frag:Tg,meshphysical_vert:Eg,meshphysical_frag:Ag,meshtoon_vert:Rg,meshtoon_frag:Lg,points_vert:Cg,points_frag:Pg,shadow_vert:Ig,shadow_frag:Dg,sprite_vert:Fg,sprite_frag:Ng},ae={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new yt},uv2Transform:{value:new yt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new j(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new j(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new yt}}},Qt={basic:{uniforms:St([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:St([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.fog,ae.lights,{emissive:{value:new ee(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:St([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:St([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:St([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new ee(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:St([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:St([ae.points,ae.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:St([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:St([ae.common,ae.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:St([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:St([ae.sprite,ae.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},cube:{uniforms:St([ae.envmap,{opacity:{value:1}}]),vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:St([ae.common,ae.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:St([ae.lights,ae.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};Qt.physical={uniforms:St([Qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new j(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenRoughness:{value:0},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new j},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularIntensity:{value:0},specularIntensityMap:{value:null},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};function Bg(r,e,t,n,i){let s=new ee(0),o=0,a,l,c=null,u=0,h=null;function d(m,x){let y=!1,p=x.isScene===!0?x.background:null;p&&p.isTexture&&(p=e.get(p));let g=r.xr,w=g.getSession&&g.getSession();w&&w.environmentBlendMode==="additive"&&(p=null),p===null?f(s,o):p&&p.isColor&&(f(p,1),y=!0),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),p&&(p.isCubeTexture||p.mapping===or)?(l===void 0&&(l=new Re(new Kt(1,1,1),new mt({name:"BackgroundCubeMaterial",uniforms:Bi(Qt.cube.uniforms),vertexShader:Qt.cube.vertexShader,fragmentShader:Qt.cube.fragmentShader,side:tt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(v,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=p,l.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,(c!==p||u!==p.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,c=p,u=p.version,h=r.toneMapping),m.unshift(l,l.geometry,l.material,0,0,null)):p&&p.isTexture&&(a===void 0&&(a=new Re(new dn(2,2),new mt({name:"BackgroundMaterial",uniforms:Bi(Qt.background.uniforms),vertexShader:Qt.background.vertexShader,fragmentShader:Qt.background.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(a)),a.material.uniforms.t2D.value=p,p.matrixAutoUpdate===!0&&p.updateMatrix(),a.material.uniforms.uvTransform.value.copy(p.matrix),(c!==p||u!==p.version||h!==r.toneMapping)&&(a.material.needsUpdate=!0,c=p,u=p.version,h=r.toneMapping),m.unshift(a,a.geometry,a.material,0,0,null))}function f(m,x){t.buffers.color.setClear(m.r,m.g,m.b,x,i)}return{getClearColor:function(){return s},setClearColor:function(m,x=1){s.set(m),o=x,f(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,f(s,o)},render:d}}function Og(r,e,t,n){let i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=x(null),c=l;function u(D,F,B,O,U){let ne=!1;if(o){let ue=m(O,B,F);c!==ue&&(c=ue,d(c.object)),ne=y(O,U),ne&&p(O,U)}else{let ue=F.wireframe===!0;(c.geometry!==O.id||c.program!==B.id||c.wireframe!==ue)&&(c.geometry=O.id,c.program=B.id,c.wireframe=ue,ne=!0)}D.isInstancedMesh===!0&&(ne=!0),U!==null&&t.update(U,34963),ne&&(_(D,F,B,O),U!==null&&r.bindBuffer(34963,t.get(U).buffer))}function h(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(D){return n.isWebGL2?r.bindVertexArray(D):s.bindVertexArrayOES(D)}function f(D){return n.isWebGL2?r.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function m(D,F,B){let O=B.wireframe===!0,U=a[D.id];U===void 0&&(U={},a[D.id]=U);let ne=U[F.id];ne===void 0&&(ne={},U[F.id]=ne);let ue=ne[O];return ue===void 0&&(ue=x(h()),ne[O]=ue),ue}function x(D){let F=[],B=[],O=[];for(let U=0;U<i;U++)F[U]=0,B[U]=0,O[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:B,attributeDivisors:O,object:D,attributes:{},index:null}}function y(D,F){let B=c.attributes,O=D.attributes,U=0;for(let ne in O){let ue=B[ne],q=O[ne];if(ue===void 0||ue.attribute!==q||ue.data!==q.data)return!0;U++}return c.attributesNum!==U||c.index!==F}function p(D,F){let B={},O=D.attributes,U=0;for(let ne in O){let ue=O[ne],q={};q.attribute=ue,ue.data&&(q.data=ue.data),B[ne]=q,U++}c.attributes=B,c.attributesNum=U,c.index=F}function g(){let D=c.newAttributes;for(let F=0,B=D.length;F<B;F++)D[F]=0}function w(D){v(D,0)}function v(D,F){let B=c.newAttributes,O=c.enabledAttributes,U=c.attributeDivisors;B[D]=1,O[D]===0&&(r.enableVertexAttribArray(D),O[D]=1),U[D]!==F&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,F),U[D]=F)}function b(){let D=c.newAttributes,F=c.enabledAttributes;for(let B=0,O=F.length;B<O;B++)F[B]!==D[B]&&(r.disableVertexAttribArray(B),F[B]=0)}function R(D,F,B,O,U,ne){n.isWebGL2===!0&&(B===5124||B===5125)?r.vertexAttribIPointer(D,F,B,U,ne):r.vertexAttribPointer(D,F,B,O,U,ne)}function _(D,F,B,O){if(n.isWebGL2===!1&&(D.isInstancedMesh||O.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();let U=O.attributes,ne=B.getAttributes(),ue=F.defaultAttributeValues;for(let q in ne){let X=ne[q];if(X.location>=0){let he=U[q];if(he===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(he=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(he=D.instanceColor)),he!==void 0){let le=he.normalized,me=he.itemSize,Oe=t.get(he);if(Oe===void 0)continue;let K=Oe.buffer,Le=Oe.type,we=Oe.bytesPerElement;if(he.isInterleavedBufferAttribute){let ge=he.data,ye=ge.stride,Be=he.offset;if(ge&&ge.isInstancedInterleavedBuffer){for(let W=0;W<X.locationSize;W++)v(X.location+W,ge.meshPerAttribute);D.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let W=0;W<X.locationSize;W++)w(X.location+W);r.bindBuffer(34962,K);for(let W=0;W<X.locationSize;W++)R(X.location+W,me/X.locationSize,Le,le,ye*we,(Be+me/X.locationSize*W)*we)}else{if(he.isInstancedBufferAttribute){for(let ge=0;ge<X.locationSize;ge++)v(X.location+ge,he.meshPerAttribute);D.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ge=0;ge<X.locationSize;ge++)w(X.location+ge);r.bindBuffer(34962,K);for(let ge=0;ge<X.locationSize;ge++)R(X.location+ge,me/X.locationSize,Le,le,me*we,me/X.locationSize*ge*we)}}else if(ue!==void 0){let le=ue[q];if(le!==void 0)switch(le.length){case 2:r.vertexAttrib2fv(X.location,le);break;case 3:r.vertexAttrib3fv(X.location,le);break;case 4:r.vertexAttrib4fv(X.location,le);break;default:r.vertexAttrib1fv(X.location,le)}}}}b()}function P(){C();for(let D in a){let F=a[D];for(let B in F){let O=F[B];for(let U in O)f(O[U].object),delete O[U];delete F[B]}delete a[D]}}function k(D){if(a[D.id]===void 0)return;let F=a[D.id];for(let B in F){let O=F[B];for(let U in O)f(O[U].object),delete O[U];delete F[B]}delete a[D.id]}function G(D){for(let F in a){let B=a[F];if(B[D.id]===void 0)continue;let O=B[D.id];for(let U in O)f(O[U].object),delete O[U];delete B[D.id]}}function C(){Y(),c!==l&&(c=l,d(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:C,resetDefaultState:Y,dispose:P,releaseStatesOfGeometry:k,releaseStatesOfProgram:G,initAttributes:g,enableAttribute:w,disableUnusedAttributes:b}}function zg(r,e,t,n){let i=n.isWebGL2,s;function o(c){s=c}function a(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let d,f;if(i)d=r,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,c,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function Ug(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(_){if(_==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";_="mediump"}return _==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext!="undefined"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&r instanceof WebGL2ComputeRenderingContext,a=t.precision!==void 0?t.precision:"highp",l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(34930),d=r.getParameter(35660),f=r.getParameter(3379),m=r.getParameter(34076),x=r.getParameter(34921),y=r.getParameter(36347),p=r.getParameter(36348),g=r.getParameter(36349),w=d>0,v=o||e.has("OES_texture_float"),b=w&&v,R=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:m,maxAttributes:x,maxVertexUniforms:y,maxVaryings:p,maxFragmentUniforms:g,vertexTextures:w,floatFragmentTextures:v,floatVertexTextures:b,maxSamples:R}}function Hg(r){let e=this,t=null,n=0,i=!1,s=!1,o=new Ut,a=new yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,f){let m=h.length!==0||d||n!==0||i;return i=d,t=u(h,f,0),n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(h,d,f){let m=h.clippingPlanes,x=h.clipIntersection,y=h.clipShadows,p=r.get(h);if(!i||m===null||m.length===0||s&&!y)s?u(null):c();else{let g=s?0:n,w=g*4,v=p.clippingState||null;l.value=v,v=u(m,d,w,f);for(let b=0;b!==w;++b)v[b]=t[b];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,m){let x=h!==null?h.length:0,y=null;if(x!==0){if(y=l.value,m!==!0||y===null){let p=f+x*4,g=d.matrixWorldInverse;a.getNormalMatrix(g),(y===null||y.length<p)&&(y=new Float32Array(p));for(let w=0,v=f;w!==x;++w,v+=4)o.copy(h[w]).applyMatrix4(g,a),o.normal.toArray(y,v),y[v+3]=o.constant}l.value=y,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,y}}function kg(r){let e=new WeakMap;function t(o,a){return a===Vo?o.mapping=ls:a===Wo&&(o.mapping=cs),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){let a=o.mapping;if(a===Vo||a===Wo)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=r.getRenderTarget(),u=new Ta(l.height/2);return u.fromEquirectangularTexture(r,o),e.set(o,u),r.setRenderTarget(c),o.addEventListener("dispose",i),t(u.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var Hi=class extends Pr{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super();this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};Hi.prototype.isOrthographicCamera=!0;var Ss=class extends mt{constructor(e){super(e);this.type="RawShaderMaterial"}};Ss.prototype.isRawShaderMaterial=!0;var ki=4,In=8,en=Math.pow(2,In),Pc=[.125,.215,.35,.446,.526,.582],Ic=In-ki+1+Pc.length,Gi=20,oi={[Mt]:0,[Ot]:1,[Ko]:2,[ac]:3,[lc]:4,[cc]:5,[Jo]:6},Aa=new Hi,{_lodPlanes:Ts,_sizeLods:Dc,_sigmas:Fr}=Vg(),Fc=new ee,Ra=null,ai=(1+Math.sqrt(5))/2,Vi=1/ai,Nc=[new S(1,1,1),new S(-1,1,1),new S(1,1,-1),new S(-1,1,-1),new S(0,ai,Vi),new S(0,ai,-Vi),new S(Vi,0,ai),new S(-Vi,0,ai),new S(ai,Vi,0),new S(-ai,Vi,0)],Nr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=Wg(Gi),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ra=this._renderer.getRenderTarget();let s=this._allocateTargets();return this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=zc(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=Oc(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<Ts.length;e++)Ts[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(Ra),e.scissorTest=!1,Br(e,0,0,e.width,e.height)}_fromTexture(e){Ra=this._renderer.getRenderTarget();let t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(e){let t={magFilter:Qe,minFilter:Qe,generateMipmaps:!1,type:bn,format:Vd,encoding:Gg(e)?e.encoding:Ko,depthBuffer:!1},n=Bc(t);return n.depthBuffer=!e,this._pingPongRenderTarget=Bc(t),n}_compileMaterial(e){let t=new Re(Ts[0],e);this._renderer.compile(t,Aa)}_sceneToCubeUV(e,t,n,i){let s=90,o=1,a=new ft(s,o,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.outputEncoding,f=u.toneMapping;u.getClearColor(Fc),u.toneMapping=$n,u.outputEncoding=Mt,u.autoClear=!1;let m=new Ke({name:"PMREM.Background",side:tt,depthWrite:!1,depthTest:!1}),x=new Re(new Kt,m),y=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,y=!0):(m.color.copy(Fc),y=!0);for(let g=0;g<6;g++){let w=g%3;w==0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):w==1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g])),Br(i,w*en,g>2?en:0,en,en),u.setRenderTarget(i),y&&u.render(x,a),u.render(e,a)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=f,u.outputEncoding=d,u.autoClear=h,e.background=p}_setEncoding(e,t){e.value=oi[t.encoding]}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===ls||e.mapping===cs;i?this._cubemapShader==null&&(this._cubemapShader=zc()):this._equirectShader==null&&(this._equirectShader=Oc());let s=i?this._cubemapShader:this._equirectShader,o=new Re(Ts[0],s),a=s.uniforms;a.envMap.value=e,i||a.texelSize.value.set(1/e.image.width,1/e.image.height),this._setEncoding(a.inputEncoding,e),this._setEncoding(a.outputEncoding,t.texture),Br(t,0,0,3*en,2*en),n.setRenderTarget(t),n.render(o,Aa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<Ic;i++){let s=Math.sqrt(Fr[i]*Fr[i]-Fr[i-1]*Fr[i-1]),o=Nc[(i-1)%Nc.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Re(Ts[i],c),d=c.uniforms,f=Dc[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Gi-1),x=s/m,y=isFinite(s)?1+Math.floor(u*x):Gi;y>Gi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Gi}`);let p=[],g=0;for(let R=0;R<Gi;++R){let _=R/x,P=Math.exp(-_*_/2);p.push(P),R==0?g+=P:R<y&&(g+=2*P)}for(let R=0;R<p.length;R++)p[R]=p[R]/g;d.envMap.value=e.texture,d.samples.value=y,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a),d.dTheta.value=m,d.mipInt.value=In-n,this._setEncoding(d.inputEncoding,e.texture),this._setEncoding(d.outputEncoding,e.texture);let w=Dc[i],v=3*Math.max(0,en-2*w),b=(i===0?0:2*en)+2*w*(i>In-ki?i-In+ki:0);Br(t,v,b,3*w,2*w),l.setRenderTarget(t),l.render(h,Aa)}};function Gg(r){return r===void 0||r.type!==bn?!1:r.encoding===Mt||r.encoding===Ot||r.encoding===Jo}function Vg(){let r=[],e=[],t=[],n=In;for(let i=0;i<Ic;i++){let s=Math.pow(2,n);e.push(s);let o=1/s;i>In-ki?o=Pc[i-In+ki-1]:i==0&&(o=0),t.push(o);let a=1/(s-1),l=-a/2,c=1+a/2,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,d=6,f=3,m=2,x=1,y=new Float32Array(f*d*h),p=new Float32Array(m*d*h),g=new Float32Array(x*d*h);for(let v=0;v<h;v++){let b=v%3*2/3-1,R=v>2?0:-1,_=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];y.set(_,f*d*v),p.set(u,m*d*v);let P=[v,v,v,v,v,v];g.set(P,x*d*v)}let w=new Pe;w.setAttribute("position",new je(y,f)),w.setAttribute("uv",new je(p,m)),w.setAttribute("faceIndex",new je(g,x)),r.push(w),n>ki&&n--}return{_lodPlanes:r,_sizeLods:e,_sigmas:t}}function Bc(r){let e=new Rt(3*en,3*en,r);return e.texture.mapping=or,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function Br(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Wg(r){let e=new Float32Array(r),t=new S(0,1,0);return new Ss({name:"SphericalGaussianBlur",defines:{n:r},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:t},inputEncoding:{value:oi[Mt]},outputEncoding:{value:oi[Mt]}},vertexShader:La(),fragmentShader:`

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

			${Ca()}

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Oc(){let r=new j(1,1);return new Ss({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:r},inputEncoding:{value:oi[Mt]},outputEncoding:{value:oi[Mt]}},vertexShader:La(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${Ca()}

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function zc(){return new Ss({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:oi[Mt]},outputEncoding:{value:oi[Mt]}},vertexShader:La(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${Ca()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function La(){return`

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
	`}function Ca(){return`

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
	`}function qg(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){let l=a.mapping,c=l===Vo||l===Wo,u=l===ls||l===cs;if(c||u){if(e.has(a))return e.get(a).texture;{let h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){let d=r.getRenderTarget();t===null&&(t=new Nr(r));let f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),r.setRenderTarget(d),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Xg(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function jg(r,e,t,n){let i={},s=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete i[d.id];let f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let m in d)e.update(d[m],34962);let f=h.morphAttributes;for(let m in f){let x=f[m];for(let y=0,p=x.length;y<p;y++)e.update(x[y],34962)}}function c(h){let d=[],f=h.index,m=h.attributes.position,x=0;if(f!==null){let g=f.array;x=f.version;for(let w=0,v=g.length;w<v;w+=3){let b=g[w+0],R=g[w+1],_=g[w+2];d.push(b,R,R,_,_,b)}}else{let g=m.array;x=m.version;for(let w=0,v=g.length/3-1;w<v;w+=3){let b=w+0,R=w+1,_=w+2;d.push(b,R,R,_,_,b)}}let y=new(fc(d)>65535?_s:ya)(d,1);y.version=x;let p=s.get(h);p&&e.remove(p),s.set(h,y)}function u(h){let d=s.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Yg(r,e,t,n){let i=n.isWebGL2,s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,f){r.drawElements(s,f,a,d*l),t.update(f,s,1)}function h(d,f,m){if(m===0)return;let x,y;if(i)x=r,y="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),y="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[y](s,f,a,d*l,m),t.update(f,s,m)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function Zg(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}var Or=class extends ct{constructor(e=null,t=1,n=1,i=1){super(null);this.image={data:e,width:t,height:n,depth:i},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=At,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}};Or.prototype.isDataTexture2DArray=!0;function $g(r,e){return r[0]-e[0]}function Jg(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Uc(r,e){let t=1,n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),r.divideScalar(t)}function Kg(r,e,t){let n={},i=new Float32Array(8),s=new WeakMap,o=new S,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,d){let f=c.morphTargetInfluences;if(e.isWebGL2===!0){let m=u.morphAttributes.position.length,x=s.get(u);if(x===void 0||x.count!==m){x!==void 0&&x.texture.dispose();let g=u.morphAttributes.normal!==void 0,w=u.morphAttributes.position,v=u.morphAttributes.normal||[],b=u.attributes.position.count,R=g===!0?2:1,_=b*R,P=1;_>e.maxTextureSize&&(P=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let k=new Float32Array(_*P*4*m),G=new Or(k,_,P,m);G.format=wt,G.type=rn;let C=R*4;for(let Y=0;Y<m;Y++){let D=w[Y],F=v[Y],B=_*P*4*Y;for(let O=0;O<D.count;O++){o.fromBufferAttribute(D,O),D.normalized===!0&&Uc(o,D);let U=O*C;k[B+U+0]=o.x,k[B+U+1]=o.y,k[B+U+2]=o.z,k[B+U+3]=0,g===!0&&(o.fromBufferAttribute(F,O),F.normalized===!0&&Uc(o,F),k[B+U+4]=o.x,k[B+U+5]=o.y,k[B+U+6]=o.z,k[B+U+7]=0)}}x={count:m,texture:G,size:new j(_,P)},s.set(u,x)}let y=0;for(let g=0;g<f.length;g++)y+=f[g];let p=u.morphTargetsRelative?1:1-y;d.getUniforms().setValue(r,"morphTargetBaseInfluence",p),d.getUniforms().setValue(r,"morphTargetInfluences",f),d.getUniforms().setValue(r,"morphTargetsTexture",x.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}else{let m=f===void 0?0:f.length,x=n[u.id];if(x===void 0||x.length!==m){x=[];for(let v=0;v<m;v++)x[v]=[v,0];n[u.id]=x}for(let v=0;v<m;v++){let b=x[v];b[0]=v,b[1]=f[v]}x.sort(Jg);for(let v=0;v<8;v++)v<m&&x[v][1]?(a[v][0]=x[v][0],a[v][1]=x[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort($g);let y=u.morphAttributes.position,p=u.morphAttributes.normal,g=0;for(let v=0;v<8;v++){let b=a[v],R=b[0],_=b[1];R!==Number.MAX_SAFE_INTEGER&&_?(y&&u.getAttribute("morphTarget"+v)!==y[R]&&u.setAttribute("morphTarget"+v,y[R]),p&&u.getAttribute("morphNormal"+v)!==p[R]&&u.setAttribute("morphNormal"+v,p[R]),i[v]=_,g+=_):(y&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),p&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}let w=u.morphTargetsRelative?1:1-g;d.getUniforms().setValue(r,"morphTargetBaseInfluence",w),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Qg(r,e,t,n){let i=new WeakMap;function s(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var Pa=class extends ct{constructor(e=null,t=1,n=1,i=1){super(null);this.image={data:e,width:t,height:n,depth:i},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=At,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}};Pa.prototype.isDataTexture3D=!0;var Hc=new ct,kc=new Or,Gc=new Pa,Vc=new Ms,Wc=[],qc=[],Xc=new Float32Array(16),jc=new Float32Array(9),Yc=new Float32Array(4);function Wi(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Wc[i];if(s===void 0&&(s=new Float32Array(i),Wc[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Lt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Tt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function zr(r,e){let t=qc[e];t===void 0&&(t=new Int32Array(e),qc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function ex(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function tx(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;r.uniform2fv(this.addr,e),Tt(t,e)}}function nx(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;r.uniform3fv(this.addr,e),Tt(t,e)}}function ix(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;r.uniform4fv(this.addr,e),Tt(t,e)}}function sx(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(Lt(t,n))return;Yc.set(n),r.uniformMatrix2fv(this.addr,!1,Yc),Tt(t,n)}}function rx(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(Lt(t,n))return;jc.set(n),r.uniformMatrix3fv(this.addr,!1,jc),Tt(t,n)}}function ox(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(Lt(t,n))return;Xc.set(n),r.uniformMatrix4fv(this.addr,!1,Xc),Tt(t,n)}}function ax(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function lx(r,e){let t=this.cache;Lt(t,e)||(r.uniform2iv(this.addr,e),Tt(t,e))}function cx(r,e){let t=this.cache;Lt(t,e)||(r.uniform3iv(this.addr,e),Tt(t,e))}function ux(r,e){let t=this.cache;Lt(t,e)||(r.uniform4iv(this.addr,e),Tt(t,e))}function hx(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function dx(r,e){let t=this.cache;Lt(t,e)||(r.uniform2uiv(this.addr,e),Tt(t,e))}function fx(r,e){let t=this.cache;Lt(t,e)||(r.uniform3uiv(this.addr,e),Tt(t,e))}function px(r,e){let t=this.cache;Lt(t,e)||(r.uniform4uiv(this.addr,e),Tt(t,e))}function mx(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.safeSetTexture2D(e||Hc,i)}function gx(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Gc,i)}function xx(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.safeSetTextureCube(e||Vc,i)}function yx(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||kc,i)}function vx(r){switch(r){case 5126:return ex;case 35664:return tx;case 35665:return nx;case 35666:return ix;case 35674:return sx;case 35675:return rx;case 35676:return ox;case 5124:case 35670:return ax;case 35667:case 35671:return lx;case 35668:case 35672:return cx;case 35669:case 35673:return ux;case 5125:return hx;case 36294:return dx;case 36295:return fx;case 36296:return px;case 35678:case 36198:case 36298:case 36306:case 35682:return mx;case 35679:case 36299:case 36307:return gx;case 35680:case 36300:case 36308:case 36293:return xx;case 36289:case 36303:case 36311:case 36292:return yx}}function _x(r,e){r.uniform1fv(this.addr,e)}function wx(r,e){let t=Wi(e,this.size,2);r.uniform2fv(this.addr,t)}function Mx(r,e){let t=Wi(e,this.size,3);r.uniform3fv(this.addr,t)}function bx(r,e){let t=Wi(e,this.size,4);r.uniform4fv(this.addr,t)}function Sx(r,e){let t=Wi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Tx(r,e){let t=Wi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Ex(r,e){let t=Wi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Ax(r,e){r.uniform1iv(this.addr,e)}function Rx(r,e){r.uniform2iv(this.addr,e)}function Lx(r,e){r.uniform3iv(this.addr,e)}function Cx(r,e){r.uniform4iv(this.addr,e)}function Px(r,e){r.uniform1uiv(this.addr,e)}function Ix(r,e){r.uniform2uiv(this.addr,e)}function Dx(r,e){r.uniform3uiv(this.addr,e)}function Fx(r,e){r.uniform4uiv(this.addr,e)}function Nx(r,e,t){let n=e.length,i=zr(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.safeSetTexture2D(e[s]||Hc,i[s])}function Bx(r,e,t){let n=e.length,i=zr(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture3D(e[s]||Gc,i[s])}function Ox(r,e,t){let n=e.length,i=zr(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.safeSetTextureCube(e[s]||Vc,i[s])}function zx(r,e,t){let n=e.length,i=zr(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||kc,i[s])}function Ux(r){switch(r){case 5126:return _x;case 35664:return wx;case 35665:return Mx;case 35666:return bx;case 35674:return Sx;case 35675:return Tx;case 35676:return Ex;case 5124:case 35670:return Ax;case 35667:case 35671:return Rx;case 35668:case 35672:return Lx;case 35669:case 35673:return Cx;case 5125:return Px;case 36294:return Ix;case 36295:return Dx;case 36296:return Fx;case 35678:case 36198:case 36298:case 36306:case 35682:return Nx;case 35679:case 36299:case 36307:return Bx;case 35680:case 36300:case 36308:case 36293:return Ox;case 36289:case 36303:case 36311:case 36292:return zx}}function Hx(r,e,t){this.id=r,this.addr=t,this.cache=[],this.setValue=vx(e.type)}function Zc(r,e,t){this.id=r,this.addr=t,this.cache=[],this.size=e.size,this.setValue=Ux(e.type)}Zc.prototype.updateCache=function(r){let e=this.cache;r instanceof Float32Array&&e.length!==r.length&&(this.cache=new Float32Array(r.length)),Tt(e,r)};function $c(r){this.id=r,this.seq=[],this.map={}}$c.prototype.setValue=function(r,e,t){let n=this.seq;for(let i=0,s=n.length;i!==s;++i){let o=n[i];o.setValue(r,e[o.id],t)}};var Ia=/(\w+)(\])?(\[|\.)?/g;function Jc(r,e){r.seq.push(e),r.map[e.id]=e}function kx(r,e,t){let n=r.name,i=n.length;for(Ia.lastIndex=0;;){let s=Ia.exec(n),o=Ia.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Jc(t,c===void 0?new Hx(a,r,e):new Zc(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new $c(a),Jc(t,h)),t=h}}}function Dn(r,e){this.seq=[],this.map={};let t=r.getProgramParameter(e,35718);for(let n=0;n<t;++n){let i=r.getActiveUniform(e,n),s=r.getUniformLocation(e,i.name);kx(i,s,this)}}Dn.prototype.setValue=function(r,e,t,n){let i=this.map[e];i!==void 0&&i.setValue(r,t,n)};Dn.prototype.setOptional=function(r,e,t){let n=e[t];n!==void 0&&this.setValue(r,t,n)};Dn.upload=function(r,e,t,n){for(let i=0,s=e.length;i!==s;++i){let o=e[i],a=t[o.id];a.needsUpdate!==!1&&o.setValue(r,a.value,n)}};Dn.seqWithValue=function(r,e){let t=[];for(let n=0,i=r.length;n!==i;++n){let s=r[n];s.id in e&&t.push(s)}return t};function Kc(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var Gx=0;function Vx(r){let e=r.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function Qc(r){switch(r){case Mt:return["Linear","( value )"];case Ot:return["sRGB","( value )"];case Ko:return["RGBE","( value )"];case ac:return["RGBM","( value, 7.0 )"];case lc:return["RGBM","( value, 16.0 )"];case cc:return["RGBD","( value, 256.0 )"];case Jo:return["Gamma","( value, float( GAMMA_FACTOR ) )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function eu(r,e,t){let n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();return n&&i===""?"":t.toUpperCase()+`

`+i+`

`+Vx(r.getShaderSource(e))}function li(r,e){let t=Qc(e);return"vec4 "+r+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function Wx(r,e){let t=Qc(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function qx(r,e){let t;switch(e){case Cd:t="Linear";break;case Pd:t="Reinhard";break;case Id:t="OptimizedCineon";break;case Go:t="ACESFilmic";break;case Dd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Xx(r){return[r.extensionDerivatives||r.envMapCubeUV||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Es).join(`
`)}function jx(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Yx(r,e){let t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),o=s.name,a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Es(r){return r!==""}function tu(r,e){return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Zx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Da(r){return r.replace(Zx,$x)}function $x(r,e){let t=Ne[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Da(t)}var Jx=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Kx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function iu(r){return r.replace(Kx,su).replace(Jx,Qx)}function Qx(r,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),su(r,e,t,n)}function su(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ru(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function e0(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Hl?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ho?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===os&&(e="SHADOWMAP_TYPE_VSM"),e}function t0(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ls:case cs:e="ENVMAP_TYPE_CUBE";break;case or:case qo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function n0(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case cs:case qo:e="ENVMAP_MODE_REFRACTION";break}return e}function i0(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case rr:e="ENVMAP_BLENDING_MULTIPLY";break;case Rd:e="ENVMAP_BLENDING_MIX";break;case Ld:e="ENVMAP_BLENDING_ADD";break}return e}function s0(r,e,t,n){let i=r.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=e0(t),c=t0(t),u=n0(t),h=i0(t),d=r.gammaFactor>0?r.gammaFactor:1,f=t.isWebGL2?"":Xx(t),m=jx(s),x=i.createProgram(),y,p,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=[m].filter(Es).join(`
`),y.length>0&&(y+=`
`),p=[f,m].filter(Es).join(`
`),p.length>0&&(p+=`
`)):(y=[ru(t),"#define SHADER_NAME "+t.shaderName,m,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+d,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),p=[f,ru(t),"#define SHADER_NAME "+t.shaderName,m,"#define GAMMA_FACTOR "+d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$n?"#define TONE_MAPPING":"",t.toneMapping!==$n?Ne.tonemapping_pars_fragment:"",t.toneMapping!==$n?qx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.format===Vt?"#define OPAQUE":"",Ne.encodings_pars_fragment,t.map?li("mapTexelToLinear",t.mapEncoding):"",t.matcap?li("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?li("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?li("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.specularColorMap?li("specularColorMapTexelToLinear",t.specularColorMapEncoding):"",t.sheenColorMap?li("sheenColorMapTexelToLinear",t.sheenColorMapEncoding):"",t.lightMap?li("lightMapTexelToLinear",t.lightMapEncoding):"",Wx("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Es).join(`
`)),o=Da(o),o=tu(o,t),o=nu(o,t),a=Da(a),a=tu(a,t),a=nu(a,t),o=iu(o),a=iu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,y=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,p=["#define varying in",t.glslVersion===uc?"":"out highp vec4 pc_fragColor;",t.glslVersion===uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=g+y+o,v=g+p+a,b=Kc(i,35633,w),R=Kc(i,35632,v);if(i.attachShader(x,b),i.attachShader(x,R),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x),r.debug.checkShaderErrors){let k=i.getProgramInfoLog(x).trim(),G=i.getShaderInfoLog(b).trim(),C=i.getShaderInfoLog(R).trim(),Y=!0,D=!0;if(i.getProgramParameter(x,35714)===!1){Y=!1;let F=eu(i,b,"vertex"),B=eu(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,35715)+`

Program Info Log: `+k+`
`+F+`
`+B)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(G===""||C==="")&&(D=!1);D&&(this.diagnostics={runnable:Y,programLog:k,vertexShader:{log:G,prefix:y},fragmentShader:{log:C,prefix:p}})}i.deleteShader(b),i.deleteShader(R);let _;this.getUniforms=function(){return _===void 0&&(_=new Dn(i,x)),_};let P;return this.getAttributes=function(){return P===void 0&&(P=Yx(i,x)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.name=t.shaderName,this.id=Gx++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=R,this}function r0(r,e,t,n,i,s,o){let a=[],l=i.isWebGL2,c=i.logarithmicDepthBuffer,u=i.floatVertexTextures,h=i.maxVertexUniforms,d=i.vertexTextures,f=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},x=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoat","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap",,"roughnessMap","metalnessMap","gradientMap","alphaMap","alphaTest","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","morphTargetsCount","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","format","specularIntensityMap","specularColorMap","specularColorMapEncoding","transmission","transmissionMap","thicknessMap","sheen","sheenColorMap","sheenColorMapEncoding","sheenRoughnessMap"];function y(_){let k=_.skeleton.bones;if(u)return 1024;{let C=Math.floor((h-20)/4),Y=Math.min(C,k.length);return Y<k.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+k.length+" bones. This GPU supports "+Y+"."),0):Y}}function p(_){let P;return _&&_.isTexture?P=_.encoding:_&&_.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),P=_.texture.encoding):P=Mt,P}function g(_,P,k,G,C){let Y=G.fog,D=_.isMeshStandardMaterial?G.environment:null,F=(_.isMeshStandardMaterial?t:e).get(_.envMap||D),B=m[_.type],O=C.isSkinnedMesh?y(C):0;_.precision!==null&&(f=i.getMaxPrecision(_.precision),f!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let U,ne;if(B){let le=Qt[B];U=le.vertexShader,ne=le.fragmentShader}else U=_.vertexShader,ne=_.fragmentShader;let ue=r.getRenderTarget(),q=_.alphaTest>0,X=_.clearcoat>0;return{isWebGL2:l,shaderID:B,shaderName:_.type,vertexShader:U,fragmentShader:ne,defines:_.defines,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,instancing:C.isInstancedMesh===!0,instancingColor:C.isInstancedMesh===!0&&C.instanceColor!==null,supportsVertexTextures:d,outputEncoding:ue!==null?p(ue.texture):r.outputEncoding,map:!!_.map,mapEncoding:p(_.map),matcap:!!_.matcap,matcapEncoding:p(_.matcap),envMap:!!F,envMapMode:F&&F.mapping,envMapEncoding:p(F),envMapCubeUV:!!F&&(F.mapping===or||F.mapping===qo),lightMap:!!_.lightMap,lightMapEncoding:p(_.lightMap),aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,emissiveMapEncoding:p(_.emissiveMap),bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===If,tangentSpaceNormalMap:_.normalMapType===Sn,clearcoat:X,clearcoatMap:X&&!!_.clearcoatMap,clearcoatRoughnessMap:X&&!!_.clearcoatRoughnessMap,clearcoatNormalMap:X&&!!_.clearcoatNormalMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,specularIntensityMap:!!_.specularIntensityMap,specularColorMap:!!_.specularColorMap,specularColorMapEncoding:p(_.specularColorMap),alphaMap:!!_.alphaMap,alphaTest:q,gradientMap:!!_.gradientMap,sheen:_.sheen>0,sheenColorMap:!!_.sheenColorMap,sheenColorMapEncoding:p(_.sheenColorMap),sheenRoughnessMap:!!_.sheenRoughnessMap,transmission:_.transmission>0,transmissionMap:!!_.transmissionMap,thicknessMap:!!_.thicknessMap,combine:_.combine,vertexTangents:!!_.normalMap&&!!C.geometry&&!!C.geometry.attributes.tangent,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!C.geometry&&!!C.geometry.attributes.color&&C.geometry.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.displacementMap||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||!!_.sheenColorMap||_.sheenRoughnessMap,uvsVertexOnly:!(!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatNormalMap||_.transmission>0||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||_.sheen>0||!!_.sheenColorMap||!!_.sheenRoughnessMap)&&!!_.displacementMap,fog:!!Y,useFog:_.fog,fogExp2:Y&&Y.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:c,skinning:C.isSkinnedMesh===!0&&O>0,maxBones:O,useVertexTexture:u,morphTargets:!!C.geometry&&!!C.geometry.morphAttributes.position,morphNormals:!!C.geometry&&!!C.geometry.morphAttributes.normal,morphTargetsCount:!!C.geometry&&!!C.geometry.morphAttributes.position?C.geometry.morphAttributes.position.length:0,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,format:_.format,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:_.toneMapped?r.toneMapping:$n,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===xt,flipSided:_.side===tt,depthPacking:_.depthPacking!==void 0?_.depthPacking:!1,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:l||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||n.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function w(_){let P=[];if(_.shaderID?P.push(_.shaderID):(P.push(pc(_.fragmentShader)),P.push(pc(_.vertexShader))),_.defines!==void 0)for(let k in _.defines)P.push(k),P.push(_.defines[k]);if(_.isRawShaderMaterial===!1){for(let k=0;k<x.length;k++)P.push(_[x[k]]);P.push(r.outputEncoding),P.push(r.gammaFactor)}return P.push(_.customProgramCacheKey),P.join()}function v(_){let P=m[_.type],k;if(P){let G=Qt[P];k=sp.clone(G.uniforms)}else k=_.uniforms;return k}function b(_,P){let k;for(let G=0,C=a.length;G<C;G++){let Y=a[G];if(Y.cacheKey===P){k=Y,++k.usedTimes;break}}return k===void 0&&(k=new s0(r,P,_,s),a.push(k)),k}function R(_){if(--_.usedTimes==0){let P=a.indexOf(_);a[P]=a[a.length-1],a.pop(),_.destroy()}}return{getParameters:g,getProgramCacheKey:w,getUniforms:v,acquireProgram:b,releaseProgram:R,programs:a}}function o0(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function a0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.program!==e.program?r.program.id-e.program.id:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ou(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function au(r){let e=[],t=0,n=[],i=[],s=[],o={id:-1};function a(){t=0,n.length=0,i.length=0,s.length=0}function l(f,m,x,y,p,g){let w=e[t],v=r.get(x);return w===void 0?(w={id:f.id,object:f,geometry:m,material:x,program:v.program||o,groupOrder:y,renderOrder:f.renderOrder,z:p,group:g},e[t]=w):(w.id=f.id,w.object=f,w.geometry=m,w.material=x,w.program=v.program||o,w.groupOrder=y,w.renderOrder=f.renderOrder,w.z=p,w.group=g),t++,w}function c(f,m,x,y,p,g){let w=l(f,m,x,y,p,g);x.transmission>0?i.push(w):x.transparent===!0?s.push(w):n.push(w)}function u(f,m,x,y,p,g){let w=l(f,m,x,y,p,g);x.transmission>0?i.unshift(w):x.transparent===!0?s.unshift(w):n.unshift(w)}function h(f,m){n.length>1&&n.sort(f||a0),i.length>1&&i.sort(m||ou),s.length>1&&s.sort(m||ou)}function d(){for(let f=t,m=e.length;f<m;f++){let x=e[f];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.program=null,x.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:c,unshift:u,finish:d,sort:h}}function l0(r){let e=new WeakMap;function t(i,s){let o;return e.has(i)===!1?(o=new au(r),e.set(i,[o])):s>=e.get(i).length?(o=new au(r),e.get(i).push(o)):o=e.get(i)[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function c0(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new S,color:new ee};break;case"SpotLight":t={position:new S,direction:new S,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new S,color:new ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new S,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":t={color:new ee,position:new S,halfWidth:new S,halfHeight:new S};break}return r[e.id]=t,t}}}function u0(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var h0=0;function d0(r,e){return(e.castShadow?1:0)-(r.castShadow?1:0)}function f0(r,e){let t=new c0,n=u0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new S);let s=new S,o=new pe,a=new pe;function l(u,h){let d=0,f=0,m=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let x=0,y=0,p=0,g=0,w=0,v=0,b=0,R=0;u.sort(d0);let _=h!==!0?Math.PI:1;for(let k=0,G=u.length;k<G;k++){let C=u[k],Y=C.color,D=C.intensity,F=C.distance,B=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)d+=Y.r*D*_,f+=Y.g*D*_,m+=Y.b*D*_;else if(C.isLightProbe)for(let O=0;O<9;O++)i.probe[O].addScaledVector(C.sh.coefficients[O],D);else if(C.isDirectionalLight){let O=t.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity*_),C.castShadow){let U=C.shadow,ne=n.get(C);ne.shadowBias=U.bias,ne.shadowNormalBias=U.normalBias,ne.shadowRadius=U.radius,ne.shadowMapSize=U.mapSize,i.directionalShadow[x]=ne,i.directionalShadowMap[x]=B,i.directionalShadowMatrix[x]=C.shadow.matrix,v++}i.directional[x]=O,x++}else if(C.isSpotLight){let O=t.get(C);if(O.position.setFromMatrixPosition(C.matrixWorld),O.color.copy(Y).multiplyScalar(D*_),O.distance=F,O.coneCos=Math.cos(C.angle),O.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),O.decay=C.decay,C.castShadow){let U=C.shadow,ne=n.get(C);ne.shadowBias=U.bias,ne.shadowNormalBias=U.normalBias,ne.shadowRadius=U.radius,ne.shadowMapSize=U.mapSize,i.spotShadow[p]=ne,i.spotShadowMap[p]=B,i.spotShadowMatrix[p]=C.shadow.matrix,R++}i.spot[p]=O,p++}else if(C.isRectAreaLight){let O=t.get(C);O.color.copy(Y).multiplyScalar(D),O.halfWidth.set(C.width*.5,0,0),O.halfHeight.set(0,C.height*.5,0),i.rectArea[g]=O,g++}else if(C.isPointLight){let O=t.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity*_),O.distance=C.distance,O.decay=C.decay,C.castShadow){let U=C.shadow,ne=n.get(C);ne.shadowBias=U.bias,ne.shadowNormalBias=U.normalBias,ne.shadowRadius=U.radius,ne.shadowMapSize=U.mapSize,ne.shadowCameraNear=U.camera.near,ne.shadowCameraFar=U.camera.far,i.pointShadow[y]=ne,i.pointShadowMap[y]=B,i.pointShadowMatrix[y]=C.shadow.matrix,b++}i.point[y]=O,y++}else if(C.isHemisphereLight){let O=t.get(C);O.skyColor.copy(C.color).multiplyScalar(D*_),O.groundColor.copy(C.groundColor).multiplyScalar(D*_),i.hemi[w]=O,w++}}g>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=m;let P=i.hash;(P.directionalLength!==x||P.pointLength!==y||P.spotLength!==p||P.rectAreaLength!==g||P.hemiLength!==w||P.numDirectionalShadows!==v||P.numPointShadows!==b||P.numSpotShadows!==R)&&(i.directional.length=x,i.spot.length=p,i.rectArea.length=g,i.point.length=y,i.hemi.length=w,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=b,i.spotShadowMatrix.length=R,P.directionalLength=x,P.pointLength=y,P.spotLength=p,P.rectAreaLength=g,P.hemiLength=w,P.numDirectionalShadows=v,P.numPointShadows=b,P.numSpotShadows=R,i.version=h0++)}function c(u,h){let d=0,f=0,m=0,x=0,y=0,p=h.matrixWorldInverse;for(let g=0,w=u.length;g<w;g++){let v=u[g];if(v.isDirectionalLight){let b=i.directional[d];b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),d++}else if(v.isSpotLight){let b=i.spot[m];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),m++}else if(v.isRectAreaLight){let b=i.rectArea[x];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),a.identity(),o.copy(v.matrixWorld),o.premultiply(p),a.extractRotation(o),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){let b=i.point[f];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let b=i.hemi[y];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(p),b.direction.normalize(),y++}}}return{setup:l,setupView:c,state:i}}function lu(r,e){let t=new f0(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function p0(r,e){let t=new WeakMap;function n(s,o=0){let a;return t.has(s)===!1?(a=new lu(r,e),t.set(s,[a])):o>=t.get(s).length?(a=new lu(r,e),t.get(s).push(a)):a=t.get(s)[o],a}function i(){t=new WeakMap}return{get:n,dispose:i}}var Fa=class extends dt{constructor(e){super();this.type="MeshDepthMaterial",this.depthPacking=Cf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};Fa.prototype.isMeshDepthMaterial=!0;var Na=class extends dt{constructor(e){super();this.type="MeshDistanceMaterial",this.referencePosition=new S,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Na.prototype.isMeshDistanceMaterial=!0;var m0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g0=`uniform sampler2D shadow_pass;
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
}`;function cu(r,e,t){let n=new bs,i=new j,s=new j,o=new We,a=new Fa({depthPacking:Pf}),l=new Na,c={},u=t.maxTextureSize,h={0:tt,1:sn,2:xt},d=new mt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new j},radius:{value:4}},vertexShader:m0,fragmentShader:g0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new Pe;m.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Re(m,d),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hl,this.render=function(v,b,R){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||v.length===0)return;let _=r.getRenderTarget(),P=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),G=r.state;G.setBlending(wn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);for(let C=0,Y=v.length;C<Y;C++){let D=v[C],F=D.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);let B=F.getFrameExtents();if(i.multiply(B),s.copy(F.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/B.x),i.x=s.x*B.x,F.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/B.y),i.y=s.y*B.y,F.mapSize.y=s.y)),F.map===null&&!F.isPointLightShadow&&this.type===os){let U={minFilter:nt,magFilter:nt,format:wt};F.map=new Rt(i.x,i.y,U),F.map.texture.name=D.name+".shadowMap",F.mapPass=new Rt(i.x,i.y,U),F.camera.updateProjectionMatrix()}if(F.map===null){let U={minFilter:Qe,magFilter:Qe,format:wt};F.map=new Rt(i.x,i.y,U),F.map.texture.name=D.name+".shadowMap",F.camera.updateProjectionMatrix()}r.setRenderTarget(F.map),r.clear();let O=F.getViewportCount();for(let U=0;U<O;U++){let ne=F.getViewport(U);o.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),G.viewport(o),F.updateMatrices(D,U),n=F.getFrustum(),w(b,R,F.camera,D,this.type)}!F.isPointLightShadow&&this.type===os&&p(F,R),F.needsUpdate=!1}y.needsUpdate=!1,r.setRenderTarget(_,P,k)};function p(v,b){let R=e.update(x);d.defines.VSM_SAMPLES!==v.blurSamples&&(d.defines.VSM_SAMPLES=v.blurSamples,f.defines.VSM_SAMPLES=v.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),d.uniforms.shadow_pass.value=v.map.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,r.setRenderTarget(v.mapPass),r.clear(),r.renderBufferDirect(b,null,R,d,x,null),f.uniforms.shadow_pass.value=v.mapPass.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,r.setRenderTarget(v.map),r.clear(),r.renderBufferDirect(b,null,R,f,x,null)}function g(v,b,R,_,P,k,G){let C=null,Y=_.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(Y!==void 0?C=Y:C=_.isPointLight===!0?l:a,r.localClippingEnabled&&R.clipShadows===!0&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0){let D=C.uuid,F=R.uuid,B=c[D];B===void 0&&(B={},c[D]=B);let O=B[F];O===void 0&&(O=C.clone(),B[F]=O),C=O}return C.visible=R.visible,C.wireframe=R.wireframe,G===os?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:h[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaTest,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0&&(C.referencePosition.setFromMatrixPosition(_.matrixWorld),C.nearDistance=P,C.farDistance=k),C}function w(v,b,R,_,P){if(v.visible===!1)return;if(v.layers.test(b.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&P===os)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,v.matrixWorld);let C=e.update(v),Y=v.material;if(Array.isArray(Y)){let D=C.groups;for(let F=0,B=D.length;F<B;F++){let O=D[F],U=Y[O.materialIndex];if(U&&U.visible){let ne=g(v,C,U,_,R.near,R.far,P);r.renderBufferDirect(R,null,C,ne,v,O)}}}else if(Y.visible){let D=g(v,C,Y,_,R.near,R.far,P);r.renderBufferDirect(R,null,C,D,v,null)}}let G=v.children;for(let C=0,Y=G.length;C<Y;C++)w(G[C],b,R,_,P)}}function x0(r,e,t){let n=t.isWebGL2;function i(){let I=!1,se=new We,A=null,V=new We(0,0,0,0);return{setMask:function(Q){A!==Q&&!I&&(r.colorMask(Q,Q,Q,Q),A=Q)},setLocked:function(Q){I=Q},setClear:function(Q,re,ce,be,Ye){Ye===!0&&(Q*=be,re*=be,ce*=be),se.set(Q,re,ce,be),V.equals(se)===!1&&(r.clearColor(Q,re,ce,be),V.copy(se))},reset:function(){I=!1,A=null,V.set(-1,0,0,0)}}}function s(){let I=!1,se=null,A=null,V=null;return{setTest:function(Q){Q?le(2929):me(2929)},setMask:function(Q){se!==Q&&!I&&(r.depthMask(Q),se=Q)},setFunc:function(Q){if(A!==Q){if(Q)switch(Q){case wd:r.depthFunc(512);break;case Md:r.depthFunc(519);break;case bd:r.depthFunc(513);break;case ko:r.depthFunc(515);break;case Sd:r.depthFunc(514);break;case Td:r.depthFunc(518);break;case Ed:r.depthFunc(516);break;case Ad:r.depthFunc(517);break;default:r.depthFunc(515)}else r.depthFunc(515);A=Q}},setLocked:function(Q){I=Q},setClear:function(Q){V!==Q&&(r.clearDepth(Q),V=Q)},reset:function(){I=!1,se=null,A=null,V=null}}}function o(){let I=!1,se=null,A=null,V=null,Q=null,re=null,ce=null,be=null,Ye=null;return{setTest:function(He){I||(He?le(2960):me(2960))},setMask:function(He){se!==He&&!I&&(r.stencilMask(He),se=He)},setFunc:function(He,ot,at){(A!==He||V!==ot||Q!==at)&&(r.stencilFunc(He,ot,at),A=He,V=ot,Q=at)},setOp:function(He,ot,at){(re!==He||ce!==ot||be!==at)&&(r.stencilOp(He,ot,at),re=He,ce=ot,be=at)},setLocked:function(He){I=He},setClear:function(He){Ye!==He&&(r.clearStencil(He),Ye=He)},reset:function(){I=!1,se=null,A=null,V=null,Q=null,re=null,ce=null,be=null,Ye=null}}}let a=new i,l=new s,c=new o,u={},h={},d=null,f=!1,m=null,x=null,y=null,p=null,g=null,w=null,v=null,b=!1,R=null,_=null,P=null,k=null,G=null,C=r.getParameter(35661),Y=!1,D=0,F=r.getParameter(7938);F.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(F)[1]),Y=D>=1):F.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),Y=D>=2);let B=null,O={},U=r.getParameter(3088),ne=r.getParameter(2978),ue=new We().fromArray(U),q=new We().fromArray(ne);function X(I,se,A){let V=new Uint8Array(4),Q=r.createTexture();r.bindTexture(I,Q),r.texParameteri(I,10241,9728),r.texParameteri(I,10240,9728);for(let re=0;re<A;re++)r.texImage2D(se+re,0,6408,1,1,0,6408,5121,V);return Q}let he={};he[3553]=X(3553,3553,1),he[34067]=X(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),le(2929),l.setFunc(ko),Be(!1),W(Ul),le(2884),ge(wn);function le(I){u[I]!==!0&&(r.enable(I),u[I]=!0)}function me(I){u[I]!==!1&&(r.disable(I),u[I]=!1)}function Oe(I,se){return h[I]!==se?(r.bindFramebuffer(I,se),h[I]=se,n&&(I===36009&&(h[36160]=se),I===36160&&(h[36009]=se)),!0):!1}function K(I){return d!==I?(r.useProgram(I),d=I,!0):!1}let Le={[vi]:32774,[ud]:32778,[hd]:32779};if(n)Le[Wl]=32775,Le[ql]=32776;else{let I=e.get("EXT_blend_minmax");I!==null&&(Le[Wl]=I.MIN_EXT,Le[ql]=I.MAX_EXT)}let we={[dd]:0,[fd]:1,[pd]:768,[Xl]:770,[_d]:776,[yd]:774,[gd]:772,[md]:769,[jl]:771,[vd]:775,[xd]:773};function ge(I,se,A,V,Q,re,ce,be){if(I===wn){f===!0&&(me(3042),f=!1);return}if(f===!1&&(le(3042),f=!0),I!==cd){if(I!==m||be!==b){if((x!==vi||g!==vi)&&(r.blendEquation(32774),x=vi,g=vi),be)switch(I){case as:r.blendFuncSeparate(1,771,1,771);break;case Mn:r.blendFunc(1,1);break;case Gl:r.blendFuncSeparate(0,0,769,771);break;case Vl:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case as:r.blendFuncSeparate(770,771,1,771);break;case Mn:r.blendFunc(770,1);break;case Gl:r.blendFunc(0,769);break;case Vl:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,p=null,w=null,v=null,m=I,b=be}return}Q=Q||se,re=re||A,ce=ce||V,(se!==x||Q!==g)&&(r.blendEquationSeparate(Le[se],Le[Q]),x=se,g=Q),(A!==y||V!==p||re!==w||ce!==v)&&(r.blendFuncSeparate(we[A],we[V],we[re],we[ce]),y=A,p=V,w=re,v=ce),m=I,b=null}function ye(I,se){I.side===xt?me(2884):le(2884);let A=I.side===tt;se&&(A=!A),Be(A),I.blending===as&&I.transparent===!1?ge(wn):ge(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);let V=I.stencilWrite;c.setTest(V),V&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ie(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?le(32926):me(32926)}function Be(I){R!==I&&(I?r.frontFace(2304):r.frontFace(2305),R=I)}function W(I){I!==ad?(le(2884),I!==_&&(I===Ul?r.cullFace(1029):I===ld?r.cullFace(1028):r.cullFace(1032))):me(2884),_=I}function te(I){I!==P&&(Y&&r.lineWidth(I),P=I)}function ie(I,se,A){I?(le(32823),(k!==se||G!==A)&&(r.polygonOffset(se,A),k=se,G=A)):me(32823)}function de(I){I?le(3089):me(3089)}function oe(I){I===void 0&&(I=33984+C-1),B!==I&&(r.activeTexture(I),B=I)}function Se(I,se){B===null&&oe();let A=O[B];A===void 0&&(A={type:void 0,texture:void 0},O[B]=A),(A.type!==I||A.texture!==se)&&(r.bindTexture(I,se||he[I]),A.type=I,A.texture=se)}function Te(){let I=O[B];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Ie(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Xe(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function L(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function E(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(I){ue.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),ue.copy(I))}function xe(I){q.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),q.copy(I))}function fe(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},B=null,O={},h={},d=null,f=!1,m=null,x=null,y=null,p=null,g=null,w=null,v=null,b=!1,R=null,_=null,P=null,k=null,G=null,ue.set(0,0,r.canvas.width,r.canvas.height),q.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:le,disable:me,bindFramebuffer:Oe,useProgram:K,setBlending:ge,setMaterial:ye,setFlipSided:Be,setCullFace:W,setLineWidth:te,setPolygonOffset:ie,setScissorTest:de,activeTexture:oe,bindTexture:Se,unbindTexture:Te,compressedTexImage2D:Ie,texImage2D:E,texImage3D:J,texStorage2D:L,texSubImage2D:Xe,scissor:$,viewport:xe,reset:fe}}function y0(r,e,t,n,i,s,o){let a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):void 0,m=new WeakMap,x,y=!1;try{y=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(L,E){return y?new OffscreenCanvas(L,E):fr("canvas")}function g(L,E,J,$){let xe=1;if((L.width>$||L.height>$)&&(xe=$/Math.max(L.width,L.height)),xe<1||E===!0)if(typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&L instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&L instanceof ImageBitmap){let fe=E?dc:Math.floor,I=fe(xe*L.width),se=fe(xe*L.height);x===void 0&&(x=p(I,se));let A=J?p(I,se):x;return A.width=I,A.height=se,A.getContext("2d").drawImage(L,0,0,I,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+I+"x"+se+")."),A}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function w(L){return ta(L.width)&&ta(L.height)}function v(L){return a?!1:L.wrapS!==At||L.wrapT!==At||L.minFilter!==Qe&&L.minFilter!==nt}function b(L,E){return L.generateMipmaps&&E&&L.minFilter!==Qe&&L.minFilter!==nt}function R(L){r.generateMipmap(L)}function _(L,E,J){if(a===!1)return E;if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let $=E;return E===6403&&(J===5126&&($=33326),J===5131&&($=33325),J===5121&&($=33321)),E===6407&&(J===5126&&($=34837),J===5131&&($=34843),J===5121&&($=32849)),E===6408&&(J===5126&&($=34836),J===5131&&($=34842),J===5121&&($=32856)),($===33325||$===33326||$===34842||$===34836)&&e.get("EXT_color_buffer_float"),$}function P(L,E,J){return b(L,J)===!0?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps.length>0?L.mipmaps.length:1}function k(L){return L===Qe||L===ar||L===lr?9728:9729}function G(L){let E=L.target;E.removeEventListener("dispose",G),Y(E),E.isVideoTexture&&m.delete(E),o.memory.textures--}function C(L){let E=L.target;E.removeEventListener("dispose",C),D(E)}function Y(L){let E=n.get(L);E.__webglInit!==void 0&&(r.deleteTexture(E.__webglTexture),n.remove(L))}function D(L){let E=L.texture,J=n.get(L),$=n.get(E);if(!!L){if($.__webglTexture!==void 0&&(r.deleteTexture($.__webglTexture),o.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++)r.deleteFramebuffer(J.__webglFramebuffer[xe]),J.__webglDepthbuffer&&r.deleteRenderbuffer(J.__webglDepthbuffer[xe]);else r.deleteFramebuffer(J.__webglFramebuffer),J.__webglDepthbuffer&&r.deleteRenderbuffer(J.__webglDepthbuffer),J.__webglMultisampledFramebuffer&&r.deleteFramebuffer(J.__webglMultisampledFramebuffer),J.__webglColorRenderbuffer&&r.deleteRenderbuffer(J.__webglColorRenderbuffer),J.__webglDepthRenderbuffer&&r.deleteRenderbuffer(J.__webglDepthRenderbuffer);if(L.isWebGLMultipleRenderTargets)for(let xe=0,fe=E.length;xe<fe;xe++){let I=n.get(E[xe]);I.__webglTexture&&(r.deleteTexture(I.__webglTexture),o.memory.textures--),n.remove(E[xe])}n.remove(E),n.remove(L)}}let F=0;function B(){F=0}function O(){let L=F;return L>=l&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l),F+=1,L}function U(L,E){let J=n.get(L);if(L.isVideoTexture&&oe(L),L.version>0&&J.__version!==L.version){let $=L.image;if($===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(J,L,E);return}}t.activeTexture(33984+E),t.bindTexture(3553,J.__webglTexture)}function ne(L,E){let J=n.get(L);if(L.version>0&&J.__version!==L.version){Oe(J,L,E);return}t.activeTexture(33984+E),t.bindTexture(35866,J.__webglTexture)}function ue(L,E){let J=n.get(L);if(L.version>0&&J.__version!==L.version){Oe(J,L,E);return}t.activeTexture(33984+E),t.bindTexture(32879,J.__webglTexture)}function q(L,E){let J=n.get(L);if(L.version>0&&J.__version!==L.version){K(J,L,E);return}t.activeTexture(33984+E),t.bindTexture(34067,J.__webglTexture)}let X={[Jn]:10497,[At]:33071,[us]:33648},he={[Qe]:9728,[ar]:9984,[lr]:9986,[nt]:9729,[Xo]:9985,[Kn]:9987};function le(L,E,J){if(J?(r.texParameteri(L,10242,X[E.wrapS]),r.texParameteri(L,10243,X[E.wrapT]),(L===32879||L===35866)&&r.texParameteri(L,32882,X[E.wrapR]),r.texParameteri(L,10240,he[E.magFilter]),r.texParameteri(L,10241,he[E.minFilter])):(r.texParameteri(L,10242,33071),r.texParameteri(L,10243,33071),(L===32879||L===35866)&&r.texParameteri(L,32882,33071),(E.wrapS!==At||E.wrapT!==At)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(L,10240,k(E.magFilter)),r.texParameteri(L,10241,k(E.minFilter)),E.minFilter!==Qe&&E.minFilter!==nt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){let $=e.get("EXT_texture_filter_anisotropic");if(E.type===rn&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===_i&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(r.texParameterf(L,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function me(L,E){L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",G),L.__webglTexture=r.createTexture(),o.memory.textures++)}function Oe(L,E,J){let $=3553;E.isDataTexture2DArray&&($=35866),E.isDataTexture3D&&($=32879),me(L,E),t.activeTexture(33984+J),t.bindTexture($,L.__webglTexture),r.pixelStorei(37440,E.flipY),r.pixelStorei(37441,E.premultiplyAlpha),r.pixelStorei(3317,E.unpackAlignment),r.pixelStorei(37443,0);let xe=v(E)&&w(E.image)===!1,fe=g(E.image,xe,!1,u),I=w(fe)||a,se=s.convert(E.format),A=s.convert(E.type),V=_(E.internalFormat,se,A,E.encoding);le($,E,I);let Q,re=E.mipmaps;if(E.isDepthTexture)V=6402,a?E.type===rn?V=36012:E.type===cr?V=33190:E.type===wi?V=35056:V=33189:E.type===rn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Qn&&V===6402&&E.type!==hs&&E.type!==cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=hs,A=s.convert(E.type)),E.format===Mi&&V===6402&&(V=34041,E.type!==wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=wi,A=s.convert(E.type))),t.texImage2D(3553,0,V,fe.width,fe.height,0,se,A,null);else if(E.isDataTexture)if(re.length>0&&I){for(let ce=0,be=re.length;ce<be;ce++)Q=re[ce],t.texImage2D(3553,ce,V,Q.width,Q.height,0,se,A,Q.data);E.generateMipmaps=!1}else t.texImage2D(3553,0,V,fe.width,fe.height,0,se,A,fe.data);else if(E.isCompressedTexture)for(let ce=0,be=re.length;ce<be;ce++)Q=re[ce],E.format!==wt&&E.format!==Vt?se!==null?t.compressedTexImage2D(3553,ce,V,Q.width,Q.height,0,Q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,ce,V,Q.width,Q.height,0,se,A,Q.data);else if(E.isDataTexture2DArray)t.texImage3D(35866,0,V,fe.width,fe.height,fe.depth,0,se,A,fe.data);else if(E.isDataTexture3D)t.texImage3D(32879,0,V,fe.width,fe.height,fe.depth,0,se,A,fe.data);else{let ce=P(E,fe,I),be=a&&E.isVideoTexture!==!0,Ye=L.__version===void 0;if(re.length>0&&I){be&&Ye&&t.texStorage2D(3553,ce,V,re[0].width,re[0].height);for(let He=0,ot=re.length;He<ot;He++)Q=re[He],be?t.texSubImage2D(3553,He,0,0,se,A,Q):t.texImage2D(3553,He,V,se,A,Q);E.generateMipmaps=!1}else be?(Ye&&t.texStorage2D(3553,ce,V,fe.width,fe.height),t.texSubImage2D(3553,0,0,0,se,A,fe)):t.texImage2D(3553,0,V,se,A,fe)}b(E,I)&&R($),L.__version=E.version,E.onUpdate&&E.onUpdate(E)}function K(L,E,J){if(E.image.length!==6)return;me(L,E),t.activeTexture(33984+J),t.bindTexture(34067,L.__webglTexture),r.pixelStorei(37440,E.flipY),r.pixelStorei(37441,E.premultiplyAlpha),r.pixelStorei(3317,E.unpackAlignment),r.pixelStorei(37443,0);let $=E&&(E.isCompressedTexture||E.image[0].isCompressedTexture),xe=E.image[0]&&E.image[0].isDataTexture,fe=[];for(let ce=0;ce<6;ce++)!$&&!xe?fe[ce]=g(E.image[ce],!1,!0,c):fe[ce]=xe?E.image[ce].image:E.image[ce];let I=fe[0],se=w(I)||a,A=s.convert(E.format),V=s.convert(E.type),Q=_(E.internalFormat,A,V,E.encoding);le(34067,E,se);let re;if($)for(let ce=0;ce<6;ce++){re=fe[ce].mipmaps;for(let be=0;be<re.length;be++){let Ye=re[be];E.format!==wt&&E.format!==Vt?A!==null?t.compressedTexImage2D(34069+ce,be,Q,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+ce,be,Q,Ye.width,Ye.height,0,A,V,Ye.data)}}else{re=E.mipmaps;for(let ce=0;ce<6;ce++)if(xe){t.texImage2D(34069+ce,0,Q,fe[ce].width,fe[ce].height,0,A,V,fe[ce].data);for(let be=0;be<re.length;be++){let He=re[be].image[ce].image;t.texImage2D(34069+ce,be+1,Q,He.width,He.height,0,A,V,He.data)}}else{t.texImage2D(34069+ce,0,Q,A,V,fe[ce]);for(let be=0;be<re.length;be++){let Ye=re[be];t.texImage2D(34069+ce,be+1,Q,A,V,Ye.image[ce])}}}b(E,se)&&R(34067),L.__version=E.version,E.onUpdate&&E.onUpdate(E)}function Le(L,E,J,$,xe){let fe=s.convert(J.format),I=s.convert(J.type),se=_(J.internalFormat,fe,I,J.encoding);n.get(E).__hasExternalTextures||(xe===32879||xe===35866?t.texImage3D(xe,0,se,E.width,E.height,E.depth,0,fe,I,null):t.texImage2D(xe,0,se,E.width,E.height,0,fe,I,null)),t.bindFramebuffer(36160,L),E.useRenderToTexture?f.framebufferTexture2DMultisampleEXT(36160,$,xe,n.get(J).__webglTexture,0,de(E)):r.framebufferTexture2D(36160,$,xe,n.get(J).__webglTexture,0),t.bindFramebuffer(36160,null)}function we(L,E,J){if(r.bindRenderbuffer(36161,L),E.depthBuffer&&!E.stencilBuffer){let $=33189;if(J||E.useRenderToTexture){let xe=E.depthTexture;xe&&xe.isDepthTexture&&(xe.type===rn?$=36012:xe.type===cr&&($=33190));let fe=de(E);E.useRenderToTexture?f.renderbufferStorageMultisampleEXT(36161,fe,$,E.width,E.height):r.renderbufferStorageMultisample(36161,fe,$,E.width,E.height)}else r.renderbufferStorage(36161,$,E.width,E.height);r.framebufferRenderbuffer(36160,36096,36161,L)}else if(E.depthBuffer&&E.stencilBuffer){let $=de(E);J&&E.useRenderbuffer?r.renderbufferStorageMultisample(36161,$,35056,E.width,E.height):E.useRenderToTexture?f.renderbufferStorageMultisampleEXT(36161,$,35056,E.width,E.height):r.renderbufferStorage(36161,34041,E.width,E.height),r.framebufferRenderbuffer(36160,33306,36161,L)}else{let $=E.isWebGLMultipleRenderTargets===!0?E.texture[0]:E.texture,xe=s.convert($.format),fe=s.convert($.type),I=_($.internalFormat,xe,fe,$.encoding),se=de(E);J&&E.useRenderbuffer?r.renderbufferStorageMultisample(36161,se,I,E.width,E.height):E.useRenderToTexture?f.renderbufferStorageMultisampleEXT(36161,se,I,E.width,E.height):r.renderbufferStorage(36161,I,E.width,E.height)}r.bindRenderbuffer(36161,null)}function ge(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),U(E.depthTexture,0);let $=n.get(E.depthTexture).__webglTexture,xe=de(E);if(E.depthTexture.format===Qn)E.useRenderToTexture?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,$,0,xe):r.framebufferTexture2D(36160,36096,3553,$,0);else if(E.depthTexture.format===Mi)E.useRenderToTexture?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,$,0,xe):r.framebufferTexture2D(36160,33306,3553,$,0);else throw new Error("Unknown depthTexture format")}function ye(L){let E=n.get(L),J=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");ge(E.__webglFramebuffer,L)}else if(J){E.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(36160,E.__webglFramebuffer[$]),E.__webglDepthbuffer[$]=r.createRenderbuffer(),we(E.__webglDepthbuffer[$],L,!1)}else t.bindFramebuffer(36160,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),we(E.__webglDepthbuffer,L,!1);t.bindFramebuffer(36160,null)}function Be(L,E,J){let $=n.get(L);E!==void 0&&Le($.__webglFramebuffer,L,L.texture,36064,3553),J!==void 0&&ye(L)}function W(L){let E=L.texture,J=n.get(L),$=n.get(E);L.addEventListener("dispose",C),L.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=r.createTexture()),$.__version=E.version,o.memory.textures++);let xe=L.isWebGLCubeRenderTarget===!0,fe=L.isWebGLMultipleRenderTargets===!0,I=E.isDataTexture3D||E.isDataTexture2DArray,se=w(L)||a;if(a&&E.format===Vt&&(E.type===rn||E.type===_i)&&(E.format=wt,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),xe){J.__webglFramebuffer=[];for(let A=0;A<6;A++)J.__webglFramebuffer[A]=r.createFramebuffer()}else if(J.__webglFramebuffer=r.createFramebuffer(),fe)if(i.drawBuffers){let A=L.texture;for(let V=0,Q=A.length;V<Q;V++){let re=n.get(A[V]);re.__webglTexture===void 0&&(re.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(L.useRenderbuffer)if(a){J.__webglMultisampledFramebuffer=r.createFramebuffer(),J.__webglColorRenderbuffer=r.createRenderbuffer(),r.bindRenderbuffer(36161,J.__webglColorRenderbuffer);let A=s.convert(E.format),V=s.convert(E.type),Q=_(E.internalFormat,A,V,E.encoding),re=de(L);r.renderbufferStorageMultisample(36161,re,Q,L.width,L.height),t.bindFramebuffer(36160,J.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064,36161,J.__webglColorRenderbuffer),r.bindRenderbuffer(36161,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=r.createRenderbuffer(),we(J.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(xe){t.bindTexture(34067,$.__webglTexture),le(34067,E,se);for(let A=0;A<6;A++)Le(J.__webglFramebuffer[A],L,E,36064,34069+A);b(E,se)&&R(34067),t.unbindTexture()}else if(fe){let A=L.texture;for(let V=0,Q=A.length;V<Q;V++){let re=A[V],ce=n.get(re);t.bindTexture(3553,ce.__webglTexture),le(3553,re,se),Le(J.__webglFramebuffer,L,re,36064+V,3553),b(re,se)&&R(3553)}t.unbindTexture()}else{let A=3553;I&&(a?A=E.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(A,$.__webglTexture),le(A,E,se),Le(J.__webglFramebuffer,L,E,36064,A),b(E,se)&&R(A),t.unbindTexture()}L.depthBuffer&&ye(L)}function te(L){let E=w(L)||a,J=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let $=0,xe=J.length;$<xe;$++){let fe=J[$];if(b(fe,E)){let I=L.isWebGLCubeRenderTarget?34067:3553,se=n.get(fe).__webglTexture;t.bindTexture(I,se),R(I),t.unbindTexture()}}}function ie(L){if(L.useRenderbuffer)if(a){let E=L.width,J=L.height,$=16384,xe=[36064],fe=L.stencilBuffer?33306:36096;L.depthBuffer&&xe.push(fe),L.ignoreDepthForMultisampleCopy||(L.depthBuffer&&($|=256),L.stencilBuffer&&($|=1024));let I=n.get(L);t.bindFramebuffer(36008,I.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,I.__webglFramebuffer),L.ignoreDepthForMultisampleCopy&&(r.invalidateFramebuffer(36008,[fe]),r.invalidateFramebuffer(36009,[fe])),r.blitFramebuffer(0,0,E,J,0,0,E,J,$,9728),r.invalidateFramebuffer(36008,xe),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,I.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function de(L){return a&&(L.useRenderbuffer||L.useRenderToTexture)?Math.min(h,L.samples):0}function oe(L){let E=o.render.frame;m.get(L)!==E&&(m.set(L,E),L.update())}let Se=!1,Te=!1;function Ie(L,E){L&&L.isWebGLRenderTarget&&(Se===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),Se=!0),L=L.texture),U(L,E)}function Xe(L,E){L&&L.isWebGLCubeRenderTarget&&(Te===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),Te=!0),L=L.texture),q(L,E)}this.allocateTextureUnit=O,this.resetTextureUnits=B,this.setTexture2D=U,this.setTexture2DArray=ne,this.setTexture3D=ue,this.setTextureCube=q,this.rebindTextures=Be,this.setupRenderTarget=W,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=Le,this.safeSetTexture2D=Ie,this.safeSetTextureCube=Xe}function v0(r,e,t){let n=t.isWebGL2;function i(s){let o;if(s===bn)return 5121;if(s===Od)return 32819;if(s===zd)return 32820;if(s===Ud)return 33635;if(s===Fd)return 5120;if(s===Nd)return 5122;if(s===hs)return 5123;if(s===Bd)return 5124;if(s===cr)return 5125;if(s===rn)return 5126;if(s===_i)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Hd)return 6406;if(s===Vt)return 6407;if(s===wt)return 6408;if(s===kd)return 6409;if(s===Gd)return 6410;if(s===Qn)return 6402;if(s===Mi)return 34041;if(s===Wd)return 6403;if(s===qd)return 36244;if(s===Xd)return 33319;if(s===jd)return 33320;if(s===Yd)return 36248;if(s===Zd)return 36249;if(s===Zl||s===$l||s===Jl||s===Kl)if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Zl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===$l)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Jl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Kl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ql||s===ec||s===tc||s===nc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Ql)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ec)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===tc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===nc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===$d)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===ic||s===sc)&&(o=e.get("WEBGL_compressed_texture_etc"),o!==null)){if(s===ic)return o.COMPRESSED_RGB8_ETC2;if(s===sc)return o.COMPRESSED_RGBA8_ETC2_EAC}if(s===Jd||s===Kd||s===Qd||s===ef||s===tf||s===nf||s===sf||s===rf||s===of||s===af||s===lf||s===cf||s===uf||s===hf||s===ff||s===pf||s===mf||s===gf||s===xf||s===yf||s===vf||s===_f||s===wf||s===Mf||s===bf||s===Sf||s===Tf||s===Ef)return o=e.get("WEBGL_compressed_texture_astc"),o!==null?s:null;if(s===df)return o=e.get("EXT_texture_compression_bptc"),o!==null?s:null;if(s===wi)return n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}var Ba=class extends ft{constructor(e=[]){super();this.cameras=e}};Ba.prototype.isArrayCamera=!0;var Et=class extends _e{constructor(){super();this.type="Group"}};Et.prototype.isGroup=!0;var _0={type:"move"},Ur=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_0))),c&&e.hand){o=!0;for(let x of e.hand.values()){let y=t.getJointPose(x,n);if(c.joints[x.jointName]===void 0){let g=new Et;g.matrixAutoUpdate=!1,g.visible=!1,c.joints[x.jointName]=g,c.add(g)}let p=c.joints[x.jointName];y!==null&&(p.matrix.fromArray(y.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.jointRadius=y.radius),p.visible=y!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}},Hr=class extends ct{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:Qn,u!==Qn&&u!==Mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Qn&&(n=hs),n===void 0&&u===Mi&&(n=wi);super(null,i,s,o,a,l,u,n,c);this.image={width:e,height:t},this.magFilter=a!==void 0?a:Qe,this.minFilter=l!==void 0?l:Qe,this.flipY=!1,this.generateMipmaps=!1}};Hr.prototype.isDepthTexture=!0;var uu=class extends Jt{constructor(e,t){super();let n=this,i=null,s=1,o=null,a="local-floor",l=e.extensions.has("WEBGL_multisampled_render_to_texture"),c=null,u=null,h=null,d=null,f=!1,m=null,x=t.getContextAttributes(),y=null,p=null,g=[],w=new Map,v=new ft;v.layers.enable(1),v.viewport=new We;let b=new ft;b.layers.enable(2),b.viewport=new We;let R=[v,b],_=new Ba;_.layers.enable(1),_.layers.enable(2);let P=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let X=g[q];return X===void 0&&(X=new Ur,g[q]=X),X.getTargetRaySpace()},this.getControllerGrip=function(q){let X=g[q];return X===void 0&&(X=new Ur,g[q]=X),X.getGripSpace()},this.getHand=function(q){let X=g[q];return X===void 0&&(X=new Ur,g[q]=X),X.getHandSpace()};function G(q){let X=w.get(q.inputSource);X&&X.dispatchEvent({type:q.type,data:q.inputSource})}function C(){w.forEach(function(q,X){q.disconnect(X)}),w.clear(),P=null,k=null,e.setRenderTarget(y),d=null,h=null,u=null,i=null,p=null,ue.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",C),i.addEventListener("inputsourceschange",Y),x.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let X={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:x.alpha,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,X),i.updateRenderState({baseLayer:d}),p=new Rt(d.framebufferWidth,d.framebufferHeight)}else{f=x.antialias;let X=null,he=null,le=null;x.depth&&(le=x.stencil?35056:33189,X=x.stencil?Mi:Qn,he=x.stencil?wi:hs);let me={colorFormat:x.alpha||f?32856:32849,depthFormat:le,scaleFactor:s};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(me),i.updateRenderState({layers:[h]}),f?p=new pr(h.textureWidth,h.textureHeight,{format:wt,type:bn,depthTexture:new Hr(h.textureWidth,h.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:x.stencil,ignoreDepth:h.ignoreDepthValues,useRenderToTexture:l}):p=new Rt(h.textureWidth,h.textureHeight,{format:x.alpha?wt:Vt,type:bn,depthTexture:new Hr(h.textureWidth,h.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:x.stencil,ignoreDepth:h.ignoreDepthValues})}this.setFoveation(0),o=await i.requestReferenceSpace(a),ue.setContext(i),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function Y(q){let X=i.inputSources;for(let he=0;he<g.length;he++)w.set(X[he],g[he]);for(let he=0;he<q.removed.length;he++){let le=q.removed[he],me=w.get(le);me&&(me.dispatchEvent({type:"disconnected",data:le}),w.delete(le))}for(let he=0;he<q.added.length;he++){let le=q.added[he],me=w.get(le);me&&me.dispatchEvent({type:"connected",data:le})}}let D=new S,F=new S;function B(q,X,he){D.setFromMatrixPosition(X.matrixWorld),F.setFromMatrixPosition(he.matrixWorld);let le=D.distanceTo(F),me=X.projectionMatrix.elements,Oe=he.projectionMatrix.elements,K=me[14]/(me[10]-1),Le=me[14]/(me[10]+1),we=(me[9]+1)/me[5],ge=(me[9]-1)/me[5],ye=(me[8]-1)/me[0],Be=(Oe[8]+1)/Oe[0],W=K*ye,te=K*Be,ie=le/(-ye+Be),de=ie*-ye;X.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(de),q.translateZ(ie),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();let oe=K+ie,Se=Le+ie,Te=W-de,Ie=te+(le-de),Xe=we*Le/Se*oe,L=ge*Le/Se*oe;q.projectionMatrix.makePerspective(Te,Ie,Xe,L,oe,Se)}function O(q,X){X===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(X.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;_.near=b.near=v.near=q.near,_.far=b.far=v.far=q.far,(P!==_.near||k!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),P=_.near,k=_.far);let X=q.parent,he=_.cameras;O(_,X);for(let me=0;me<he.length;me++)O(he[me],X);_.matrixWorld.decompose(_.position,_.quaternion,_.scale),q.position.copy(_.position),q.quaternion.copy(_.quaternion),q.scale.copy(_.scale),q.matrix.copy(_.matrix),q.matrixWorld.copy(_.matrixWorld);let le=q.children;for(let me=0,Oe=le.length;me<Oe;me++)le[me].updateMatrixWorld(!0);he.length===2?B(_,v,b):_.projectionMatrix.copy(v.projectionMatrix)},this.getCamera=function(){return _},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(q){h!==null&&(h.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)};let U=null;function ne(q,X){if(c=X.getViewerPose(o),m=X,c!==null){let le=c.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let me=!1;le.length!==_.cameras.length&&(_.cameras.length=0,me=!0);for(let Oe=0;Oe<le.length;Oe++){let K=le[Oe],Le=null;if(d!==null)Le=d.getViewport(K);else{let ge=u.getViewSubImage(h,K);Le=ge.viewport,Oe===0&&(e.setRenderTargetTextures(p,ge.colorTexture,h.ignoreDepthValues?void 0:ge.depthStencilTexture),e.setRenderTarget(p))}let we=R[Oe];we.matrix.fromArray(K.transform.matrix),we.projectionMatrix.fromArray(K.projectionMatrix),we.viewport.set(Le.x,Le.y,Le.width,Le.height),Oe===0&&_.matrix.copy(we.matrix),me===!0&&_.cameras.push(we)}}let he=i.inputSources;for(let le=0;le<g.length;le++){let me=g[le],Oe=he[le];me.update(Oe,X,o)}U&&U(q,X),m=null}let ue=new Cc;ue.setAnimationLoop(ne),this.setAnimationLoop=function(q){U=q},this.dispose=function(){}}};function w0(r){function e(p,g){p.fogColor.value.copy(g.color),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function t(p,g,w,v,b){g.isMeshBasicMaterial?n(p,g):g.isMeshLambertMaterial?(n(p,g),l(p,g)):g.isMeshToonMaterial?(n(p,g),u(p,g)):g.isMeshPhongMaterial?(n(p,g),c(p,g)):g.isMeshStandardMaterial?(n(p,g),g.isMeshPhysicalMaterial?d(p,g,b):h(p,g)):g.isMeshMatcapMaterial?(n(p,g),f(p,g)):g.isMeshDepthMaterial?(n(p,g),m(p,g)):g.isMeshDistanceMaterial?(n(p,g),x(p,g)):g.isMeshNormalMaterial?(n(p,g),y(p,g)):g.isLineBasicMaterial?(i(p,g),g.isLineDashedMaterial&&s(p,g)):g.isPointsMaterial?o(p,g,w,v):g.isSpriteMaterial?a(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function n(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map),g.alphaMap&&(p.alphaMap.value=g.alphaMap),g.specularMap&&(p.specularMap.value=g.specularMap),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let w=r.get(g).envMap;w&&(p.envMap.value=w,p.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity);let v;g.map?v=g.map:g.specularMap?v=g.specularMap:g.displacementMap?v=g.displacementMap:g.normalMap?v=g.normalMap:g.bumpMap?v=g.bumpMap:g.roughnessMap?v=g.roughnessMap:g.metalnessMap?v=g.metalnessMap:g.alphaMap?v=g.alphaMap:g.emissiveMap?v=g.emissiveMap:g.clearcoatMap?v=g.clearcoatMap:g.clearcoatNormalMap?v=g.clearcoatNormalMap:g.clearcoatRoughnessMap?v=g.clearcoatRoughnessMap:g.specularIntensityMap?v=g.specularIntensityMap:g.specularColorMap?v=g.specularColorMap:g.transmissionMap?v=g.transmissionMap:g.thicknessMap?v=g.thicknessMap:g.sheenColorMap?v=g.sheenColorMap:g.sheenRoughnessMap&&(v=g.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix));let b;g.aoMap?b=g.aoMap:g.lightMap&&(b=g.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uv2Transform.value.copy(b.matrix))}function i(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity}function s(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function o(p,g,w,v){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*w,p.scale.value=v*.5,g.map&&(p.map.value=g.map),g.alphaMap&&(p.alphaMap.value=g.alphaMap),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let b;g.map?b=g.map:g.alphaMap&&(b=g.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map),g.alphaMap&&(p.alphaMap.value=g.alphaMap),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let w;g.map?w=g.map:g.alphaMap&&(w=g.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),p.uvTransform.value.copy(w.matrix))}function l(p,g){g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap)}function c(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap),g.bumpMap&&(p.bumpMap.value=g.bumpMap,p.bumpScale.value=g.bumpScale,g.side===tt&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,p.normalScale.value.copy(g.normalScale),g.side===tt&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap),g.bumpMap&&(p.bumpMap.value=g.bumpMap,p.bumpScale.value=g.bumpScale,g.side===tt&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,p.normalScale.value.copy(g.normalScale),g.side===tt&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias)}function h(p,g){p.roughness.value=g.roughness,p.metalness.value=g.metalness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap),g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap),g.bumpMap&&(p.bumpMap.value=g.bumpMap,p.bumpScale.value=g.bumpScale,g.side===tt&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,p.normalScale.value.copy(g.normalScale),g.side===tt&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),r.get(g).envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,w){h(p,g),p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap)),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap),g.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),p.clearcoatNormalMap.value=g.clearcoatNormalMap,g.side===tt&&p.clearcoatNormalScale.value.negate())),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap)}function f(p,g){g.matcap&&(p.matcap.value=g.matcap),g.bumpMap&&(p.bumpMap.value=g.bumpMap,p.bumpScale.value=g.bumpScale,g.side===tt&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,p.normalScale.value.copy(g.normalScale),g.side===tt&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias)}function m(p,g){g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias)}function x(p,g){g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),p.referencePosition.value.copy(g.referencePosition),p.nearDistance.value=g.nearDistance,p.farDistance.value=g.farDistance}function y(p,g){g.bumpMap&&(p.bumpMap.value=g.bumpMap,p.bumpScale.value=g.bumpScale,g.side===tt&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,p.normalScale.value.copy(g.normalScale),g.side===tt&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function M0(){let r=fr("canvas");return r.style.display="block",r}function qe(r={}){let e=r.canvas!==void 0?r.canvas:M0(),t=r.context!==void 0?r.context:null,n=r.alpha!==void 0?r.alpha:!1,i=r.depth!==void 0?r.depth:!0,s=r.stencil!==void 0?r.stencil:!0,o=r.antialias!==void 0?r.antialias:!1,a=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,l=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",u=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1,h=null,d=null,f=[],m=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=Mt,this.physicallyCorrectLights=!1,this.toneMapping=$n,this.toneMappingExposure=1;let x=this,y=!1,p=0,g=0,w=null,v=-1,b=null,R=new We,_=new We,P=null,k=e.width,G=e.height,C=1,Y=null,D=null,F=new We(0,0,k,G),B=new We(0,0,k,G),O=!1,U=[],ne=new bs,ue=!1,q=!1,X=null,he=new pe,le=new S,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Oe(){return w===null?C:1}let K=t;function Le(T,N){for(let H=0;H<T.length;H++){let z=T[H],Z=e.getContext(z,N);if(Z!==null)return Z}return null}try{let T={alpha:n,depth:i,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Uo}`),e.addEventListener("webglcontextlost",ce,!1),e.addEventListener("webglcontextrestored",be,!1),K===null){let N=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&N.shift(),K=Le(N,T),K===null)throw Le(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}K.getShaderPrecisionFormat===void 0&&(K.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let we,ge,ye,Be,W,te,ie,de,oe,Se,Te,Ie,Xe,L,E,J,$,xe,fe,I,se,A,V;function Q(){we=new Xg(K),ge=new Ug(K,we,r),we.init(ge),A=new v0(K,we,ge),ye=new x0(K,we,ge),U[0]=1029,Be=new Zg(K),W=new o0,te=new y0(K,we,ye,W,ge,A,Be),ie=new kg(x),de=new qg(x),oe=new cp(K,ge),V=new Og(K,we,oe,ge),Se=new jg(K,oe,Be,V),Te=new Qg(K,Se,oe,Be),fe=new Kg(K,ge,te),J=new Hg(W),Ie=new r0(x,ie,de,we,ge,V,J),Xe=new w0(W),L=new l0(W),E=new p0(we,ge),xe=new Bg(x,ie,ye,Te,a),$=new cu(x,Te,ge),I=new zg(K,we,Be,ge),se=new Yg(K,we,Be,ge),Be.programs=Ie.programs,x.capabilities=ge,x.extensions=we,x.properties=W,x.renderLists=L,x.shadowMap=$,x.state=ye,x.info=Be}Q();let re=new uu(x,K);this.xr=re,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){let T=we.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=we.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return C},this.setPixelRatio=function(T){T!==void 0&&(C=T,this.setSize(k,G,!1))},this.getSize=function(T){return T.set(k,G)},this.setSize=function(T,N,H){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=T,G=N,e.width=Math.floor(T*C),e.height=Math.floor(N*C),H!==!1&&(e.style.width=T+"px",e.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(k*C,G*C).floor()},this.setDrawingBufferSize=function(T,N,H){k=T,G=N,C=H,e.width=Math.floor(T*H),e.height=Math.floor(N*H),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(R)},this.getViewport=function(T){return T.copy(F)},this.setViewport=function(T,N,H,z){T.isVector4?F.set(T.x,T.y,T.z,T.w):F.set(T,N,H,z),ye.viewport(R.copy(F).multiplyScalar(C).floor())},this.getScissor=function(T){return T.copy(B)},this.setScissor=function(T,N,H,z){T.isVector4?B.set(T.x,T.y,T.z,T.w):B.set(T,N,H,z),ye.scissor(_.copy(B).multiplyScalar(C).floor())},this.getScissorTest=function(){return O},this.setScissorTest=function(T){ye.setScissorTest(O=T)},this.setOpaqueSort=function(T){Y=T},this.setTransparentSort=function(T){D=T},this.getClearColor=function(T){return T.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor.apply(xe,arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha.apply(xe,arguments)},this.clear=function(T,N,H){let z=0;(T===void 0||T)&&(z|=16384),(N===void 0||N)&&(z|=256),(H===void 0||H)&&(z|=1024),K.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ce,!1),e.removeEventListener("webglcontextrestored",be,!1),L.dispose(),E.dispose(),W.dispose(),ie.dispose(),de.dispose(),Te.dispose(),V.dispose(),re.dispose(),re.removeEventListener("sessionstart",Sl),re.removeEventListener("sessionend",Tl),X&&(X.dispose(),X=null),Vn.stop()};function ce(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let T=Be.autoReset,N=$.enabled,H=$.autoUpdate,z=$.needsUpdate,Z=$.type;Q(),Be.autoReset=T,$.enabled=N,$.autoUpdate=H,$.needsUpdate=z,$.type=Z}function Ye(T){let N=T.target;N.removeEventListener("dispose",Ye),He(N)}function He(T){ot(T),W.remove(T)}function ot(T){let N=W.get(T).programs;N!==void 0&&N.forEach(function(H){Ie.releaseProgram(H)})}this.renderBufferDirect=function(T,N,H,z,Z,Ee){N===null&&(N=me);let Me=Z.isMesh&&Z.matrixWorld.determinant()<0,De=id(T,N,H,z,Z);ye.setMaterial(z,Me);let Ae=H.index,Ge=H.attributes.position;if(Ae===null){if(Ge===void 0||Ge.count===0)return}else if(Ae.count===0)return;let Fe=1;z.wireframe===!0&&(Ae=Se.getWireframeAttribute(H),Fe=2),V.setup(Z,z,De,H,Ae);let ke,st=I;Ae!==null&&(ke=oe.get(Ae),st=se,st.setIndex(ke));let Wn=Ae!==null?Ae.count:Ge.count,Ve=H.drawRange.start*Fe,is=H.drawRange.count*Fe,Je=Ee!==null?Ee.start*Fe:0,qn=Ee!==null?Ee.count*Fe:1/0,Xn=Math.max(Ve,Je),jn=Math.min(Wn,Ve+is,Je+qn)-1,_n=Math.max(0,jn-Xn+1);if(_n!==0){if(Z.isMesh)z.wireframe===!0?(ye.setLineWidth(z.wireframeLinewidth*Oe()),st.setMode(1)):st.setMode(4);else if(Z.isLine){let rt=z.linewidth;rt===void 0&&(rt=1),ye.setLineWidth(rt*Oe()),Z.isLineSegments?st.setMode(1):Z.isLineLoop?st.setMode(2):st.setMode(3)}else Z.isPoints?st.setMode(0):Z.isSprite&&st.setMode(4);if(Z.isInstancedMesh)st.renderInstances(Xn,_n,Z.count);else if(H.isInstancedBufferGeometry){let rt=Math.min(H.instanceCount,H._maxInstanceCount);st.renderInstances(Xn,_n,rt)}else st.render(Xn,_n)}},this.compile=function(T,N){d=E.get(T),d.init(),m.push(d),T.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(d.pushLight(H),H.castShadow&&d.pushShadow(H))}),d.setupLights(x.physicallyCorrectLights),T.traverse(function(H){let z=H.material;if(z)if(Array.isArray(z))for(let Z=0;Z<z.length;Z++){let Ee=z[Z];Io(Ee,T,H)}else Io(z,T,H)}),m.pop(),d=null};let at=null;function ed(T){at&&at(T)}function Sl(){Vn.stop()}function Tl(){Vn.start()}let Vn=new Cc;Vn.setAnimationLoop(ed),typeof window!="undefined"&&Vn.setContext(window),this.setAnimationLoop=function(T){at=T,re.setAnimationLoop(T),T===null?Vn.stop():Vn.start()},re.addEventListener("sessionstart",Sl),re.addEventListener("sessionend",Tl),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;T.autoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(N),N=re.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,N,w),d=E.get(T,m.length),d.init(),m.push(d),he.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ne.setFromProjectionMatrix(he),q=this.localClippingEnabled,ue=J.init(this.clippingPlanes,q,N),h=L.get(T,f.length),h.init(),f.push(h),El(T,N,0,x.sortObjects),h.finish(),x.sortObjects===!0&&h.sort(Y,D),ue===!0&&J.beginShadows();let H=d.state.shadowsArray;if($.render(H,T,N),ue===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset(),xe.render(h,T),d.setupLights(x.physicallyCorrectLights),N.isArrayCamera){let z=N.cameras;for(let Z=0,Ee=z.length;Z<Ee;Z++){let Me=z[Z];Al(h,T,Me,Me.viewport)}}else Al(h,T,N);w!==null&&(te.updateMultisampleRenderTarget(w),te.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(x,T,N),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1),V.resetDefaultState(),v=-1,b=null,m.pop(),m.length>0?d=m[m.length-1]:d=null,f.pop(),f.length>0?h=f[f.length-1]:h=null};function El(T,N,H,z){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)H=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ne.intersectsSprite(T)){z&&le.setFromMatrixPosition(T.matrixWorld).applyMatrix4(he);let Me=Te.update(T),De=T.material;De.visible&&h.push(T,Me,De,H,le.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Be.render.frame&&(T.skeleton.update(),T.skeleton.frame=Be.render.frame),!T.frustumCulled||ne.intersectsObject(T))){z&&le.setFromMatrixPosition(T.matrixWorld).applyMatrix4(he);let Me=Te.update(T),De=T.material;if(Array.isArray(De)){let Ae=Me.groups;for(let Ge=0,Fe=Ae.length;Ge<Fe;Ge++){let ke=Ae[Ge],st=De[ke.materialIndex];st&&st.visible&&h.push(T,Me,st,H,le.z,ke)}}else De.visible&&h.push(T,Me,De,H,le.z,null)}}let Ee=T.children;for(let Me=0,De=Ee.length;Me<De;Me++)El(Ee[Me],N,H,z)}function Al(T,N,H,z){let Z=T.opaque,Ee=T.transmissive,Me=T.transparent;d.setupLightsView(H),Ee.length>0&&td(Z,N,H),z&&ye.viewport(R.copy(z)),Z.length>0&&tr(Z,N,H),Ee.length>0&&tr(Ee,N,H),Me.length>0&&tr(Me,N,H)}function td(T,N,H){if(X===null){let Me=o===!0&&ge.isWebGL2===!0?pr:Rt;X=new Me(1024,1024,{generateMipmaps:!0,type:A.convert(_i)!==null?_i:bn,minFilter:Kn,magFilter:Qe,wrapS:At,wrapT:At,useRenderToTexture:we.has("WEBGL_multisampled_render_to_texture")})}let z=x.getRenderTarget();x.setRenderTarget(X),x.clear();let Z=x.toneMapping;x.toneMapping=$n,tr(T,N,H),x.toneMapping=Z,te.updateMultisampleRenderTarget(X),te.updateRenderTargetMipmap(X),x.setRenderTarget(z)}function tr(T,N,H){let z=N.isScene===!0?N.overrideMaterial:null;for(let Z=0,Ee=T.length;Z<Ee;Z++){let Me=T[Z],De=Me.object,Ae=Me.geometry,Ge=z===null?Me.material:z,Fe=Me.group;De.layers.test(H.layers)&&nd(De,N,H,Ae,Ge,Fe)}}function nd(T,N,H,z,Z,Ee){T.onBeforeRender(x,N,H,z,Z,Ee),T.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Z.onBeforeRender(x,N,H,z,T,Ee),Z.transparent===!0&&Z.side===xt?(Z.side=tt,Z.needsUpdate=!0,x.renderBufferDirect(H,N,z,Z,T,Ee),Z.side=sn,Z.needsUpdate=!0,x.renderBufferDirect(H,N,z,Z,T,Ee),Z.side=xt):x.renderBufferDirect(H,N,z,Z,T,Ee),T.onAfterRender(x,N,H,z,Z,Ee)}function Io(T,N,H){N.isScene!==!0&&(N=me);let z=W.get(T),Z=d.state.lights,Ee=d.state.shadowsArray,Me=Z.state.version,De=Ie.getParameters(T,Z.state,Ee,N,H),Ae=Ie.getProgramCacheKey(De),Ge=z.programs;z.environment=T.isMeshStandardMaterial?N.environment:null,z.fog=N.fog,z.envMap=(T.isMeshStandardMaterial?de:ie).get(T.envMap||z.environment),Ge===void 0&&(T.addEventListener("dispose",Ye),Ge=new Map,z.programs=Ge);let Fe=Ge.get(Ae);if(Fe!==void 0){if(z.currentProgram===Fe&&z.lightsStateVersion===Me)return Rl(T,De),Fe}else De.uniforms=Ie.getUniforms(T),T.onBuild(H,De,x),T.onBeforeCompile(De,x),Fe=Ie.acquireProgram(De,Ae),Ge.set(Ae,Fe),z.uniforms=De.uniforms;let ke=z.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ke.clippingPlanes=J.uniform),Rl(T,De),z.needsLights=rd(T),z.lightsStateVersion=Me,z.needsLights&&(ke.ambientLightColor.value=Z.state.ambient,ke.lightProbe.value=Z.state.probe,ke.directionalLights.value=Z.state.directional,ke.directionalLightShadows.value=Z.state.directionalShadow,ke.spotLights.value=Z.state.spot,ke.spotLightShadows.value=Z.state.spotShadow,ke.rectAreaLights.value=Z.state.rectArea,ke.ltc_1.value=Z.state.rectAreaLTC1,ke.ltc_2.value=Z.state.rectAreaLTC2,ke.pointLights.value=Z.state.point,ke.pointLightShadows.value=Z.state.pointShadow,ke.hemisphereLights.value=Z.state.hemi,ke.directionalShadowMap.value=Z.state.directionalShadowMap,ke.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,ke.spotShadowMap.value=Z.state.spotShadowMap,ke.spotShadowMatrix.value=Z.state.spotShadowMatrix,ke.pointShadowMap.value=Z.state.pointShadowMap,ke.pointShadowMatrix.value=Z.state.pointShadowMatrix);let st=Fe.getUniforms(),Wn=Dn.seqWithValue(st.seq,ke);return z.currentProgram=Fe,z.uniformsList=Wn,Fe}function Rl(T,N){let H=W.get(T);H.outputEncoding=N.outputEncoding,H.instancing=N.instancing,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents}function id(T,N,H,z,Z){N.isScene!==!0&&(N=me),te.resetTextureUnits();let Ee=N.fog,Me=z.isMeshStandardMaterial?N.environment:null,De=w===null?x.outputEncoding:w.texture.encoding,Ae=(z.isMeshStandardMaterial?de:ie).get(z.envMap||Me),Ge=z.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Fe=!!z.normalMap&&!!H.attributes.tangent,ke=!!H.morphAttributes.position,st=!!H.morphAttributes.normal,Wn=H.morphAttributes.position?H.morphAttributes.position.length:0,Ve=W.get(z),is=d.state.lights;if(ue===!0&&(q===!0||T!==b)){let Gt=T===b&&z.id===v;J.setState(z,T,Gt)}let Je=!1;z.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==is.state.version||Ve.outputEncoding!==De||Z.isInstancedMesh&&Ve.instancing===!1||!Z.isInstancedMesh&&Ve.instancing===!0||Z.isSkinnedMesh&&Ve.skinning===!1||!Z.isSkinnedMesh&&Ve.skinning===!0||Ve.envMap!==Ae||z.fog&&Ve.fog!==Ee||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==J.numPlanes||Ve.numIntersection!==J.numIntersection)||Ve.vertexAlphas!==Ge||Ve.vertexTangents!==Fe||Ve.morphTargets!==ke||Ve.morphNormals!==st||ge.isWebGL2===!0&&Ve.morphTargetsCount!==Wn)&&(Je=!0):(Je=!0,Ve.__version=z.version);let qn=Ve.currentProgram;Je===!0&&(qn=Io(z,N,Z));let Xn=!1,jn=!1,_n=!1,rt=qn.getUniforms(),ss=Ve.uniforms;if(ye.useProgram(qn.program)&&(Xn=!0,jn=!0,_n=!0),z.id!==v&&(v=z.id,jn=!0),Xn||b!==T){if(rt.setValue(K,"projectionMatrix",T.projectionMatrix),ge.logarithmicDepthBuffer&&rt.setValue(K,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),b!==T&&(b=T,jn=!0,_n=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){let Gt=rt.map.cameraPosition;Gt!==void 0&&Gt.setValue(K,le.setFromMatrixPosition(T.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&rt.setValue(K,"isOrthographic",T.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||Z.isSkinnedMesh)&&rt.setValue(K,"viewMatrix",T.matrixWorldInverse)}if(Z.isSkinnedMesh){rt.setOptional(K,Z,"bindMatrix"),rt.setOptional(K,Z,"bindMatrixInverse");let Gt=Z.skeleton;Gt&&(ge.floatVertexTextures?(Gt.boneTexture===null&&Gt.computeBoneTexture(),rt.setValue(K,"boneTexture",Gt.boneTexture,te),rt.setValue(K,"boneTextureSize",Gt.boneTextureSize)):rt.setOptional(K,Gt,"boneMatrices"))}return!!H&&(H.morphAttributes.position!==void 0||H.morphAttributes.normal!==void 0)&&fe.update(Z,H,z,qn),(jn||Ve.receiveShadow!==Z.receiveShadow)&&(Ve.receiveShadow=Z.receiveShadow,rt.setValue(K,"receiveShadow",Z.receiveShadow)),jn&&(rt.setValue(K,"toneMappingExposure",x.toneMappingExposure),Ve.needsLights&&sd(ss,_n),Ee&&z.fog&&Xe.refreshFogUniforms(ss,Ee),Xe.refreshMaterialUniforms(ss,z,C,G,X),Dn.upload(K,Ve.uniformsList,ss,te)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Dn.upload(K,Ve.uniformsList,ss,te),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&rt.setValue(K,"center",Z.center),rt.setValue(K,"modelViewMatrix",Z.modelViewMatrix),rt.setValue(K,"normalMatrix",Z.normalMatrix),rt.setValue(K,"modelMatrix",Z.matrixWorld),qn}function sd(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function rd(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return p},this.getActiveMipmapLevel=function(){return g},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,N,H){W.get(T.texture).__webglTexture=N,W.get(T.depthTexture).__webglTexture=H;let z=W.get(T);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=H===void 0,z.__autoAllocateDepthBuffer||T.useRenderToTexture&&(console.warn("render-to-texture extension was disabled because an external texture was provided"),T.useRenderToTexture=!1,T.useRenderbuffer=!0))},this.setRenderTargetFramebuffer=function(T,N){let H=W.get(T);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,H=0){w=T,p=N,g=H;let z=!0;if(T){let Ae=W.get(T);Ae.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(36160,null),z=!1):Ae.__webglFramebuffer===void 0?te.setupRenderTarget(T):Ae.__hasExternalTextures&&te.rebindTextures(T,W.get(T.texture).__webglTexture,W.get(T.depthTexture).__webglTexture)}let Z=null,Ee=!1,Me=!1;if(T){let Ae=T.texture;(Ae.isDataTexture3D||Ae.isDataTexture2DArray)&&(Me=!0);let Ge=W.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Z=Ge[N],Ee=!0):T.useRenderbuffer?Z=W.get(T).__webglMultisampledFramebuffer:Z=Ge,R.copy(T.viewport),_.copy(T.scissor),P=T.scissorTest}else R.copy(F).multiplyScalar(C).floor(),_.copy(B).multiplyScalar(C).floor(),P=O;if(ye.bindFramebuffer(36160,Z)&&ge.drawBuffers&&z){let Ae=!1;if(T)if(T.isWebGLMultipleRenderTargets){let Ge=T.texture;if(U.length!==Ge.length||U[0]!==36064){for(let Fe=0,ke=Ge.length;Fe<ke;Fe++)U[Fe]=36064+Fe;U.length=Ge.length,Ae=!0}}else(U.length!==1||U[0]!==36064)&&(U[0]=36064,U.length=1,Ae=!0);else(U.length!==1||U[0]!==1029)&&(U[0]=1029,U.length=1,Ae=!0);Ae&&(ge.isWebGL2?K.drawBuffers(U):we.get("WEBGL_draw_buffers").drawBuffersWEBGL(U))}if(ye.viewport(R),ye.scissor(_),ye.setScissorTest(P),Ee){let Ae=W.get(T.texture);K.framebufferTexture2D(36160,36064,34069+N,Ae.__webglTexture,H)}else if(Me){let Ae=W.get(T.texture),Ge=N||0;K.framebufferTextureLayer(36160,36064,Ae.__webglTexture,H||0,Ge)}v=-1},this.readRenderTargetPixels=function(T,N,H,z,Z,Ee,Me){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=W.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(De=De[Me]),De){ye.bindFramebuffer(36160,De);try{let Ae=T.texture,Ge=Ae.format,Fe=Ae.type;if(Ge!==wt&&A.convert(Ge)!==K.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let ke=Fe===_i&&(we.has("EXT_color_buffer_half_float")||ge.isWebGL2&&we.has("EXT_color_buffer_float"));if(Fe!==bn&&A.convert(Fe)!==K.getParameter(35738)&&!(Fe===rn&&(ge.isWebGL2||we.has("OES_texture_float")||we.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K.checkFramebufferStatus(36160)===36053?N>=0&&N<=T.width-z&&H>=0&&H<=T.height-Z&&K.readPixels(N,H,z,Z,A.convert(Ge),A.convert(Fe),Ee):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{let Ae=w!==null?W.get(w).__webglFramebuffer:null;ye.bindFramebuffer(36160,Ae)}}},this.copyFramebufferToTexture=function(T,N,H=0){let z=Math.pow(2,-H),Z=Math.floor(N.image.width*z),Ee=Math.floor(N.image.height*z),Me=A.convert(N.format);ge.isWebGL2&&(Me===6407&&(Me=32849),Me===6408&&(Me=32856)),te.setTexture2D(N,0),K.copyTexImage2D(3553,H,Me,T.x,T.y,Z,Ee,0),ye.unbindTexture()},this.copyTextureToTexture=function(T,N,H,z=0){let Z=N.image.width,Ee=N.image.height,Me=A.convert(H.format),De=A.convert(H.type);te.setTexture2D(H,0),K.pixelStorei(37440,H.flipY),K.pixelStorei(37441,H.premultiplyAlpha),K.pixelStorei(3317,H.unpackAlignment),N.isDataTexture?K.texSubImage2D(3553,z,T.x,T.y,Z,Ee,Me,De,N.image.data):N.isCompressedTexture?K.compressedTexSubImage2D(3553,z,T.x,T.y,N.mipmaps[0].width,N.mipmaps[0].height,Me,N.mipmaps[0].data):K.texSubImage2D(3553,z,T.x,T.y,Me,De,N.image),z===0&&H.generateMipmaps&&K.generateMipmap(3553),ye.unbindTexture()},this.copyTextureToTexture3D=function(T,N,H,z,Z=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ee=T.max.x-T.min.x+1,Me=T.max.y-T.min.y+1,De=T.max.z-T.min.z+1,Ae=A.convert(z.format),Ge=A.convert(z.type),Fe;if(z.isDataTexture3D)te.setTexture3D(z,0),Fe=32879;else if(z.isDataTexture2DArray)te.setTexture2DArray(z,0),Fe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}K.pixelStorei(37440,z.flipY),K.pixelStorei(37441,z.premultiplyAlpha),K.pixelStorei(3317,z.unpackAlignment);let ke=K.getParameter(3314),st=K.getParameter(32878),Wn=K.getParameter(3316),Ve=K.getParameter(3315),is=K.getParameter(32877),Je=H.isCompressedTexture?H.mipmaps[0]:H.image;K.pixelStorei(3314,Je.width),K.pixelStorei(32878,Je.height),K.pixelStorei(3316,T.min.x),K.pixelStorei(3315,T.min.y),K.pixelStorei(32877,T.min.z),H.isDataTexture||H.isDataTexture3D?K.texSubImage3D(Fe,Z,N.x,N.y,N.z,Ee,Me,De,Ae,Ge,Je.data):H.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),K.compressedTexSubImage3D(Fe,Z,N.x,N.y,N.z,Ee,Me,De,Ae,Je.data)):K.texSubImage3D(Fe,Z,N.x,N.y,N.z,Ee,Me,De,Ae,Ge,Je),K.pixelStorei(3314,ke),K.pixelStorei(32878,st),K.pixelStorei(3316,Wn),K.pixelStorei(3315,Ve),K.pixelStorei(32877,is),Z===0&&z.generateMipmaps&&K.generateMipmap(Fe),ye.unbindTexture()},this.initTexture=function(T){te.setTexture2D(T,0),ye.unbindTexture()},this.resetState=function(){p=0,g=0,w=null,ye.reset(),V.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}qe.prototype.isWebGLRenderer=!0;var hu=class extends qe{};hu.prototype.isWebGL1Renderer=!0;var kr=class{constructor(e,t=25e-5){this.name="",this.color=new ee(e),this.density=t}clone(){return new kr(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}};kr.prototype.isFogExp2=!0;var Gr=class{constructor(e,t=1,n=1e3){this.name="",this.color=new ee(e),this.near=t,this.far=n}clone(){return new Gr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}};Gr.prototype.isFog=!0;var As=class extends _e{constructor(){super();this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}};As.prototype.isScene=!0;var Fn=class{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ds,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=It()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=It()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=It()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}};Fn.prototype.isInterleavedBuffer=!0;var pt=new S,Nn=class{constructor(e,t,n,i=!1){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)pt.x=this.getX(t),pt.y=this.getY(t),pt.z=this.getZ(t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pt.x=this.getX(t),pt.y=this.getY(t),pt.z=this.getZ(t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pt.x=this.getX(t),pt.y=this.getY(t),pt.z=this.getZ(t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new je(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Nn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};Nn.prototype.isInterleavedBufferAttribute=!0;var Oa=class extends dt{constructor(e){super();this.type="SpriteMaterial",this.color=new ee(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}};Oa.prototype.isSpriteMaterial=!0;var qi,Rs=new S,Xi=new S,ji=new S,Yi=new j,Ls=new j,du=new pe,Vr=new S,Cs=new S,Wr=new S,fu=new j,za=new j,pu=new j,mu=class extends _e{constructor(e){super();if(this.type="Sprite",qi===void 0){qi=new Pe;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Fn(t,5);qi.setIndex([0,1,2,0,2,3]),qi.setAttribute("position",new Nn(n,3,0,!1)),qi.setAttribute("uv",new Nn(n,2,3,!1))}this.geometry=qi,this.material=e!==void 0?e:new Oa,this.center=new j(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xi.setFromMatrixScale(this.matrixWorld),du.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ji.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xi.multiplyScalar(-ji.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let o=this.center;qr(Vr.set(-.5,-.5,0),ji,o,Xi,i,s),qr(Cs.set(.5,-.5,0),ji,o,Xi,i,s),qr(Wr.set(.5,.5,0),ji,o,Xi,i,s),fu.set(0,0),za.set(1,0),pu.set(1,1);let a=e.ray.intersectTriangle(Vr,Cs,Wr,!1,Rs);if(a===null&&(qr(Cs.set(-.5,.5,0),ji,o,Xi,i,s),za.set(0,1),a=e.ray.intersectTriangle(Vr,Wr,Cs,!1,Rs),a===null))return;let l=e.ray.origin.distanceTo(Rs);l<e.near||l>e.far||t.push({distance:l,point:Rs.clone(),uv:ht.getUV(Rs,Vr,Cs,Wr,fu,za,pu,new j),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};mu.prototype.isSprite=!0;function qr(r,e,t,n,i,s){Yi.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Ls.x=s*Yi.x-i*Yi.y,Ls.y=i*Yi.x+s*Yi.y):Ls.copy(Yi),r.copy(e),r.x+=Ls.x,r.y+=Ls.y,r.applyMatrix4(du)}var gu=new S,xu=new We,yu=new We,b0=new S,vu=new pe,Ps=class extends Re{constructor(e,t){super(e,t);this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new pe,this.bindMatrixInverse=new pe}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new We,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){let n=this.skeleton,i=this.geometry;xu.fromBufferAttribute(i.attributes.skinIndex,e),yu.fromBufferAttribute(i.attributes.skinWeight,e),gu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let o=yu.getComponent(s);if(o!==0){let a=xu.getComponent(s);vu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(b0.copy(gu).applyMatrix4(vu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}};Ps.prototype.isSkinnedMesh=!0;var Is=class extends _e{constructor(){super();this.type="Bone"}};Is.prototype.isBone=!0;var Ua=class extends ct{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Qe,u=Qe,h,d){super(null,o,a,l,c,u,i,s,h,d);this.image={data:e,width:t,height:n},this.magFilter=c,this.minFilter=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}};Ua.prototype.isDataTexture=!0;var _u=new pe,S0=new pe,Ds=class{constructor(e=[],t=[]){this.uuid=It(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new pe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new pe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){let a=e[s]?e[s].matrixWorld:S0;_u.multiplyMatrices(a,t[s]),_u.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ds(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=hc(e),e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ua(t,e,e,wt,rn);return this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Is),this.bones.push(o),this.boneInverses.push(new pe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},Xr=class extends je{constructor(e,t,n,i=1){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."));super(e,t,n);this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};Xr.prototype.isInstancedBufferAttribute=!0;var wu=new pe,Mu=new pe,jr=[],Fs=new Re,bu=class extends Re{constructor(e,t,n){super(e,t);this.instanceMatrix=new Xr(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Fs.geometry=this.geometry,Fs.material=this.material,Fs.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,wu),Mu.multiplyMatrices(n,wu),Fs.matrixWorld=Mu,Fs.raycast(e,jr);for(let o=0,a=jr.length;o<a;o++){let l=jr[o];l.instanceId=s,l.object=this,t.push(l)}jr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Xr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};bu.prototype.isInstancedMesh=!0;var tn=class extends dt{constructor(e){super();this.type="LineBasicMaterial",this.color=new ee(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this}};tn.prototype.isLineBasicMaterial=!0;var Su=new S,Tu=new S,Eu=new pe,Ha=new si,Yr=new an,Zi=class extends _e{constructor(e=new Pe,t=new tn){super();this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.isBufferGeometry)if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Su.fromBufferAttribute(t,i-1),Tu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Su.distanceTo(Tu);e.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(i),Yr.radius+=s,e.ray.intersectsSphere(Yr)===!1)return;Eu.copy(i).invert(),Ha.copy(e.ray).applyMatrix4(Eu);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new S,u=new S,h=new S,d=new S,f=this.isLineSegments?2:1;if(n.isBufferGeometry){let m=n.index,y=n.attributes.position;if(m!==null){let p=Math.max(0,o.start),g=Math.min(m.count,o.start+o.count);for(let w=p,v=g-1;w<v;w+=f){let b=m.getX(w),R=m.getX(w+1);if(c.fromBufferAttribute(y,b),u.fromBufferAttribute(y,R),Ha.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);let P=e.ray.origin.distanceTo(d);P<e.near||P>e.far||t.push({distance:P,point:h.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),g=Math.min(y.count,o.start+o.count);for(let w=p,v=g-1;w<v;w+=f){if(c.fromBufferAttribute(y,w),u.fromBufferAttribute(y,w+1),Ha.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);let R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:h.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}};Zi.prototype.isLine=!0;var Au=new S,Ru=new S,Bn=class extends Zi{constructor(e,t){super(e,t);this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.isBufferGeometry)if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Au.fromBufferAttribute(t,i),Ru.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Au.distanceTo(Ru);e.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}};Bn.prototype.isLineSegments=!0;var Zr=class extends Zi{constructor(e,t){super(e,t);this.type="LineLoop"}};Zr.prototype.isLineLoop=!0;var Ns=class extends dt{constructor(e){super();this.type="PointsMaterial",this.color=new ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}};Ns.prototype.isPointsMaterial=!0;var Lu=new pe,ka=new si,$r=new an,Jr=new S,nn=class extends _e{constructor(e=new Pe,t=new Ns){super();this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(i),$r.radius+=s,e.ray.intersectsSphere($r)===!1)return;Lu.copy(i).invert(),ka.copy(e.ray).applyMatrix4(Lu);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a;if(n.isBufferGeometry){let c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,x=f;m<x;m++){let y=c.getX(m);Jr.fromBufferAttribute(h,y),Cu(Jr,y,l,i,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let m=d,x=f;m<x;m++)Jr.fromBufferAttribute(h,m),Cu(Jr,m,l,i,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}};nn.prototype.isPoints=!0;function Cu(r,e,t,n,i,s,o){let a=ka.distanceSqToPoint(r);if(a<t){let l=new S;ka.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}var Ht=class extends ct{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c);this.format=a!==void 0?a:Vt,this.minFilter=o!==void 0?o:nt,this.magFilter=s!==void 0?s:nt,this.generateMipmaps=!1;let u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}};Ht.prototype.isVideoTexture=!0;var Pu=class extends ct{constructor(e,t,n,i,s,o,a,l,c,u,h,d){super(null,o,a,l,c,u,i,s,h,d);this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}};Pu.prototype.isCompressedTexture=!0;var Iu=class extends ct{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c);this.needsUpdate=!0}};Iu.prototype.isCanvasTexture=!0;var Bs=class extends Pe{constructor(e=1,t=8,n=0,i=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],o=[],a=[],l=[],c=new S,u=new j;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=n+h/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Ce(o,3)),this.setAttribute("normal",new Ce(a,3)),this.setAttribute("uv",new Ce(l,2))}static fromJSON(e){return new Bs(e.radius,e.segments,e.thetaStart,e.thetaLength)}};var By=new S,Oy=new S,zy=new S,Uy=new ht;var Nt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);let u=n[i],d=n[i+1]-u,f=(o-u)/d;return(i+f)/(s-1)}getTangent(e,t){let n=1e-4,i=e-n,s=e+n;i<0&&(i=0),s>1&&(s=1);let o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new j:new S);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new S,i=[],s=[],o=[],a=new S,l=new pe;for(let f=0;f<=e;f++){let m=f/e;i[f]=this.getTangentAt(m,new S)}s[0]=new S,o[0]=new S;let c=Number.MAX_VALUE,u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(bt(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(bt(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Os=class extends Nt{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super();this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let n=t||new j,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}};Os.prototype.isEllipseCurve=!0;var Ga=class extends Os{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o);this.type="ArcCurve"}};Ga.prototype.isArcCurve=!0;function Va(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,i(o,a,d,f)},calc:function(s){let o=s*s,a=o*s;return r+e*s+t*o+n*a}}}var Kr=new S,Wa=new Va,qa=new Va,Xa=new Va,On=class extends Nt{constructor(e=[],t=!1,n="centripetal",i=.5){super();this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new S){let n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(Kr.subVectors(i[0],i[1]).add(i[0]),c=Kr);let h=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(Kr.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Kr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),m<1e-4&&(m=x),y<1e-4&&(y=x),Wa.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,m,x,y),qa.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,m,x,y),Xa.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,m,x,y)}else this.curveType==="catmullrom"&&(Wa.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),qa.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Xa.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Wa.calc(l),qa.calc(l),Xa.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new S().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};On.prototype.isCatmullRomCurve3=!0;function Du(r,e,t,n,i){let s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function T0(r,e){let t=1-r;return t*t*e}function E0(r,e){return 2*(1-r)*r*e}function A0(r,e){return r*r*e}function zs(r,e,t,n){return T0(r,e)+E0(r,t)+A0(r,n)}function R0(r,e){let t=1-r;return t*t*t*e}function L0(r,e){let t=1-r;return 3*t*t*r*e}function C0(r,e){return 3*(1-r)*r*r*e}function P0(r,e){return r*r*r*e}function Us(r,e,t,n,i){return R0(r,e)+L0(r,t)+C0(r,n)+P0(r,i)}var Qr=class extends Nt{constructor(e=new j,t=new j,n=new j,i=new j){super();this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new j){let n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Us(e,i.x,s.x,o.x,a.x),Us(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};Qr.prototype.isCubicBezierCurve=!0;var ja=class extends Nt{constructor(e=new S,t=new S,n=new S,i=new S){super();this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new S){let n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Us(e,i.x,s.x,o.x,a.x),Us(e,i.y,s.y,o.y,a.y),Us(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};ja.prototype.isCubicBezierCurve3=!0;var Hs=class extends Nt{constructor(e=new j,t=new j){super();this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new j){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){let n=t||new j;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};Hs.prototype.isLineCurve=!0;var Fu=class extends Nt{constructor(e=new S,t=new S){super();this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new S){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},eo=class extends Nt{constructor(e=new j,t=new j,n=new j){super();this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new j){let n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(zs(e,i.x,s.x,o.x),zs(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};eo.prototype.isQuadraticBezierCurve=!0;var to=class extends Nt{constructor(e=new S,t=new S,n=new S){super();this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new S){let n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(zs(e,i.x,s.x,o.x),zs(e,i.y,s.y,o.y),zs(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};to.prototype.isQuadraticBezierCurve3=!0;var no=class extends Nt{constructor(e=[]){super();this.type="SplineCurve",this.points=e}getPoint(e,t=new j){let n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(Du(a,l.x,c.x,u.x,h.x),Du(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new j().fromArray(i))}return this}};no.prototype.isSplineCurve=!0;var Ya=Object.freeze({__proto__:null,ArcCurve:Ga,CatmullRomCurve3:On,CubicBezierCurve:Qr,CubicBezierCurve3:ja,EllipseCurve:Os,LineCurve:Hs,LineCurve3:Fu,QuadraticBezierCurve:eo,QuadraticBezierCurve3:to,SplineCurve:no}),Nu=class extends Nt{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Hs(t,e))}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let o=s[i],a=o&&o.isEllipseCurve?e*2:o&&(o.isLineCurve||o.isLineCurve3)?1:o&&o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Ya[i.type]().fromJSON(i))}return this}},io=class extends Nu{constructor(e){super();this.type="Path",this.currentPoint=new j,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Hs(this.currentPoint.clone(),new j(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new eo(this.currentPoint.clone(),new j(e,t),new j(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){let a=new Qr(this.currentPoint.clone(),new j(e,t),new j(n,i),new j(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new no(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){let c=new Os(e,t,n,i,s,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},$i=class extends io{constructor(e){super(e);this.uuid=It(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new io().fromJSON(i))}return this}},I0={triangulate:function(r,e,t=2){let n=e&&e.length,i=n?e[0]*t:r.length,s=Bu(r,0,i,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,d,f;if(n&&(s=O0(r,e,s,t)),r.length>80*t){a=c=r[0],l=u=r[1];for(let m=t;m<i;m+=t)h=r[m],d=r[m+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-a,u-l),f=f!==0?1/f:0}return ks(s,o,t,a,l,f),o}};function Bu(r,e,t,n,i){let s,o;if(i===Y0(r,e,t,n)>0)for(s=e;s<t;s+=n)o=Uu(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=Uu(s,r[s],r[s+1],o);return o&&so(o,o.next)&&(Vs(o),o=o.next),o}function zn(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(so(t,t.next)||it(t.prev,t,t.next)===0)){if(Vs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ks(r,e,t,n,i,s,o){if(!r)return;!o&&s&&G0(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?F0(r,n,i,s):D0(r)){e.push(l.i/t),e.push(r.i/t),e.push(c.i/t),Vs(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=N0(zn(r),e,t),ks(r,e,t,n,i,s,2)):o===2&&B0(r,e,t,n,i,s):ks(zn(r),e,t,n,i,s,1);break}}}function D0(r){let e=r.prev,t=r,n=r.next;if(it(e,t,n)>=0)return!1;let i=r.next.next;for(;i!==r.prev;){if(Ji(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&it(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function F0(r,e,t,n){let i=r.prev,s=r,o=r.next;if(it(i,s,o)>=0)return!1;let a=i.x<s.x?i.x<o.x?i.x:o.x:s.x<o.x?s.x:o.x,l=i.y<s.y?i.y<o.y?i.y:o.y:s.y<o.y?s.y:o.y,c=i.x>s.x?i.x>o.x?i.x:o.x:s.x>o.x?s.x:o.x,u=i.y>s.y?i.y>o.y?i.y:o.y:s.y>o.y?s.y:o.y,h=Za(a,l,e,t,n),d=Za(c,u,e,t,n),f=r.prevZ,m=r.nextZ;for(;f&&f.z>=h&&m&&m.z<=d;){if(f!==r.prev&&f!==r.next&&Ji(i.x,i.y,s.x,s.y,o.x,o.y,f.x,f.y)&&it(f.prev,f,f.next)>=0||(f=f.prevZ,m!==r.prev&&m!==r.next&&Ji(i.x,i.y,s.x,s.y,o.x,o.y,m.x,m.y)&&it(m.prev,m,m.next)>=0))return!1;m=m.nextZ}for(;f&&f.z>=h;){if(f!==r.prev&&f!==r.next&&Ji(i.x,i.y,s.x,s.y,o.x,o.y,f.x,f.y)&&it(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;m&&m.z<=d;){if(m!==r.prev&&m!==r.next&&Ji(i.x,i.y,s.x,s.y,o.x,o.y,m.x,m.y)&&it(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function N0(r,e,t){let n=r;do{let i=n.prev,s=n.next.next;!so(i,s)&&Ou(i,n,n.next,s)&&Gs(i,s)&&Gs(s,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(s.i/t),Vs(n),Vs(n.next),n=r=s),n=n.next}while(n!==r);return zn(n)}function B0(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&q0(o,a)){let l=zu(o,a);o=zn(o,o.next),l=zn(l,l.next),ks(o,e,t,n,i,s),ks(l,e,t,n,i,s);return}a=a.next}o=o.next}while(o!==r)}function O0(r,e,t,n){let i=[],s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=Bu(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(W0(c));for(i.sort(z0),s=0;s<i.length;s++)U0(i[s],t),t=zn(t,t.next);return t}function z0(r,e){return r.x-e.x}function U0(r,e){if(e=H0(r,e),e){let t=zu(e,r);zn(e,e.next),zn(t,t.next)}}function H0(r,e){let t=e,n=r.x,i=r.y,s=-1/0,o;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>s){if(s=d,d===n){if(i===t.y)return t;if(i===t.next.y)return t.next}o=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!o)return null;if(n===s)return o;let a=o,l=o.x,c=o.y,u=1/0,h;t=o;do n>=t.x&&t.x>=l&&n!==t.x&&Ji(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)&&(h=Math.abs(i-t.y)/(n-t.x),Gs(t,r)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&k0(o,t)))&&(o=t,u=h)),t=t.next;while(t!==a);return o}function k0(r,e){return it(r.prev,r,e.prev)<0&&it(e.next,r,r.next)<0}function G0(r,e,t,n){let i=r;do i.z===null&&(i.z=Za(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,V0(i)}function V0(r){let e,t,n,i,s,o,a,l,c=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(o>1);return r}function Za(r,e,t,n,i){return r=32767*(r-t)*i,e=32767*(e-n)*i,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function W0(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Ji(r,e,t,n,i,s,o,a){return(i-o)*(e-a)-(r-o)*(s-a)>=0&&(r-o)*(n-a)-(t-o)*(e-a)>=0&&(t-o)*(s-a)-(i-o)*(n-a)>=0}function q0(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!X0(r,e)&&(Gs(r,e)&&Gs(e,r)&&j0(r,e)&&(it(r.prev,r,e.prev)||it(r,e.prev,e))||so(r,e)&&it(r.prev,r,r.next)>0&&it(e.prev,e,e.next)>0)}function it(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function so(r,e){return r.x===e.x&&r.y===e.y}function Ou(r,e,t,n){let i=oo(it(r,e,t)),s=oo(it(r,e,n)),o=oo(it(t,n,r)),a=oo(it(t,n,e));return!!(i!==s&&o!==a||i===0&&ro(r,t,e)||s===0&&ro(r,n,e)||o===0&&ro(t,r,n)||a===0&&ro(t,e,n))}function ro(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function oo(r){return r>0?1:r<0?-1:0}function X0(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Ou(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Gs(r,e){return it(r.prev,r,r.next)<0?it(r,e,r.next)>=0&&it(r,r.prev,e)>=0:it(r,e,r.prev)<0||it(r,r.next,e)<0}function j0(r,e){let t=r,n=!1,i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function zu(r,e){let t=new $a(r.i,r.x,r.y),n=new $a(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Uu(r,e,t,n){let i=new $a(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Vs(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function $a(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Y0(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}var fn=class{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return fn.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];Hu(e),ku(n,e);let o=e.length;t.forEach(Hu);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,ku(n,t[l]);let a=I0.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Hu(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function ku(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var ci=class extends Pe{constructor(e=new $i([new j(.5,.5),new j(-.5,.5),new j(-.5,-.5),new j(.5,-.5)]),t={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],s=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Ce(i,3)),this.setAttribute("uv",new Ce(s,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,y=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,g=t.UVGenerator!==void 0?t.UVGenerator:Z0;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),h=t.amount);let w,v=!1,b,R,_,P;p&&(w=p.getSpacedPoints(u),v=!0,d=!1,b=p.computeFrenetFrames(u,!1),R=new S,_=new S,P=new S),d||(y=0,f=0,m=0,x=0);let k=a.extractPoints(c),G=k.shape,C=k.holes;if(!fn.isClockWise(G)){G=G.reverse();for(let W=0,te=C.length;W<te;W++){let ie=C[W];fn.isClockWise(ie)&&(C[W]=ie.reverse())}}let D=fn.triangulateShape(G,C),F=G;for(let W=0,te=C.length;W<te;W++){let ie=C[W];G=G.concat(ie)}function B(W,te,ie){return te||console.error("THREE.ExtrudeGeometry: vec does not exist"),te.clone().multiplyScalar(ie).add(W)}let O=G.length,U=D.length;function ne(W,te,ie){let de,oe,Se,Te=W.x-te.x,Ie=W.y-te.y,Xe=ie.x-W.x,L=ie.y-W.y,E=Te*Te+Ie*Ie,J=Te*L-Ie*Xe;if(Math.abs(J)>Number.EPSILON){let $=Math.sqrt(E),xe=Math.sqrt(Xe*Xe+L*L),fe=te.x-Ie/$,I=te.y+Te/$,se=ie.x-L/xe,A=ie.y+Xe/xe,V=((se-fe)*L-(A-I)*Xe)/(Te*L-Ie*Xe);de=fe+Te*V-W.x,oe=I+Ie*V-W.y;let Q=de*de+oe*oe;if(Q<=2)return new j(de,oe);Se=Math.sqrt(Q/2)}else{let $=!1;Te>Number.EPSILON?Xe>Number.EPSILON&&($=!0):Te<-Number.EPSILON?Xe<-Number.EPSILON&&($=!0):Math.sign(Ie)===Math.sign(L)&&($=!0),$?(de=-Ie,oe=Te,Se=Math.sqrt(E)):(de=Te,oe=Ie,Se=Math.sqrt(E/2))}return new j(de/Se,oe/Se)}let ue=[];for(let W=0,te=F.length,ie=te-1,de=W+1;W<te;W++,ie++,de++)ie===te&&(ie=0),de===te&&(de=0),ue[W]=ne(F[W],F[ie],F[de]);let q=[],X,he=ue.concat();for(let W=0,te=C.length;W<te;W++){let ie=C[W];X=[];for(let de=0,oe=ie.length,Se=oe-1,Te=de+1;de<oe;de++,Se++,Te++)Se===oe&&(Se=0),Te===oe&&(Te=0),X[de]=ne(ie[de],ie[Se],ie[Te]);q.push(X),he=he.concat(X)}for(let W=0;W<y;W++){let te=W/y,ie=f*Math.cos(te*Math.PI/2),de=m*Math.sin(te*Math.PI/2)+x;for(let oe=0,Se=F.length;oe<Se;oe++){let Te=B(F[oe],ue[oe],de);Le(Te.x,Te.y,-ie)}for(let oe=0,Se=C.length;oe<Se;oe++){let Te=C[oe];X=q[oe];for(let Ie=0,Xe=Te.length;Ie<Xe;Ie++){let L=B(Te[Ie],X[Ie],de);Le(L.x,L.y,-ie)}}}let le=m+x;for(let W=0;W<O;W++){let te=d?B(G[W],he[W],le):G[W];v?(_.copy(b.normals[0]).multiplyScalar(te.x),R.copy(b.binormals[0]).multiplyScalar(te.y),P.copy(w[0]).add(_).add(R),Le(P.x,P.y,P.z)):Le(te.x,te.y,0)}for(let W=1;W<=u;W++)for(let te=0;te<O;te++){let ie=d?B(G[te],he[te],le):G[te];v?(_.copy(b.normals[W]).multiplyScalar(ie.x),R.copy(b.binormals[W]).multiplyScalar(ie.y),P.copy(w[W]).add(_).add(R),Le(P.x,P.y,P.z)):Le(ie.x,ie.y,h/u*W)}for(let W=y-1;W>=0;W--){let te=W/y,ie=f*Math.cos(te*Math.PI/2),de=m*Math.sin(te*Math.PI/2)+x;for(let oe=0,Se=F.length;oe<Se;oe++){let Te=B(F[oe],ue[oe],de);Le(Te.x,Te.y,h+ie)}for(let oe=0,Se=C.length;oe<Se;oe++){let Te=C[oe];X=q[oe];for(let Ie=0,Xe=Te.length;Ie<Xe;Ie++){let L=B(Te[Ie],X[Ie],de);v?Le(L.x,L.y+w[u-1].y,w[u-1].x+ie):Le(L.x,L.y,h+ie)}}}me(),Oe();function me(){let W=i.length/3;if(d){let te=0,ie=O*te;for(let de=0;de<U;de++){let oe=D[de];we(oe[2]+ie,oe[1]+ie,oe[0]+ie)}te=u+y*2,ie=O*te;for(let de=0;de<U;de++){let oe=D[de];we(oe[0]+ie,oe[1]+ie,oe[2]+ie)}}else{for(let te=0;te<U;te++){let ie=D[te];we(ie[2],ie[1],ie[0])}for(let te=0;te<U;te++){let ie=D[te];we(ie[0]+O*u,ie[1]+O*u,ie[2]+O*u)}}n.addGroup(W,i.length/3-W,0)}function Oe(){let W=i.length/3,te=0;K(F,te),te+=F.length;for(let ie=0,de=C.length;ie<de;ie++){let oe=C[ie];K(oe,te),te+=oe.length}n.addGroup(W,i.length/3-W,1)}function K(W,te){let ie=W.length;for(;--ie>=0;){let de=ie,oe=ie-1;oe<0&&(oe=W.length-1);for(let Se=0,Te=u+y*2;Se<Te;Se++){let Ie=O*Se,Xe=O*(Se+1),L=te+de+Ie,E=te+oe+Ie,J=te+oe+Xe,$=te+de+Xe;ge(L,E,J,$)}}}function Le(W,te,ie){l.push(W),l.push(te),l.push(ie)}function we(W,te,ie){ye(W),ye(te),ye(ie);let de=i.length/3,oe=g.generateTopUV(n,i,de-3,de-2,de-1);Be(oe[0]),Be(oe[1]),Be(oe[2])}function ge(W,te,ie,de){ye(W),ye(te),ye(de),ye(te),ye(ie),ye(de);let oe=i.length/3,Se=g.generateSideWallUV(n,i,oe-6,oe-3,oe-2,oe-1);Be(Se[0]),Be(Se[1]),Be(Se[3]),Be(Se[1]),Be(Se[2]),Be(Se[3])}function ye(W){i.push(l[W*3+0]),i.push(l[W*3+1]),i.push(l[W*3+2])}function Be(W){s.push(W.x),s.push(W.y)}}}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return $0(t,n,e)}static fromJSON(e,t){let n=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Ya[i.type]().fromJSON(i)),new ci(n,e.options)}},Z0={generateTopUV:function(r,e,t,n,i){let s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new j(s,o),new j(a,l),new j(c,u)]},generateSideWallUV:function(r,e,t,n,i,s){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[i*3],f=e[i*3+1],m=e[i*3+2],x=e[s*3],y=e[s*3+1],p=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new j(o,1-l),new j(c,1-h),new j(d,1-m),new j(x,1-p)]:[new j(a,1-l),new j(u,1-h),new j(f,1-m),new j(y,1-p)]}};function $0(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){let s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ki=class extends Pe{constructor(e=.5,t=1,n=8,i=1,s=0,o=Math.PI*2){super();this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],u=[],h=e,d=(t-e)/i,f=new S,m=new j;for(let x=0;x<=i;x++){for(let y=0;y<=n;y++){let p=s+y/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,u.push(m.x,m.y)}h+=d}for(let x=0;x<i;x++){let y=x*(n+1);for(let p=0;p<n;p++){let g=p+y,w=g,v=g+n+1,b=g+n+2,R=g+1;a.push(w,v,R),a.push(v,b,R)}}this.setIndex(a),this.setAttribute("position",new Ce(l,3)),this.setAttribute("normal",new Ce(c,3)),this.setAttribute("uv",new Ce(u,2))}static fromJSON(e){return new Ki(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},ao=class extends Pe{constructor(e=new $i([new j(0,.5),new j(-.5,-.5),new j(.5,-.5)]),t=12){super();this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],s=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ce(i,3)),this.setAttribute("normal",new Ce(s,3)),this.setAttribute("uv",new Ce(o,2));function c(u){let h=i.length/3,d=u.extractPoints(t),f=d.shape,m=d.holes;fn.isClockWise(f)===!1&&(f=f.reverse());for(let y=0,p=m.length;y<p;y++){let g=m[y];fn.isClockWise(g)===!0&&(m[y]=g.reverse())}let x=fn.triangulateShape(f,m);for(let y=0,p=m.length;y<p;y++){let g=m[y];f=f.concat(g)}for(let y=0,p=f.length;y<p;y++){let g=f[y];i.push(g.x,g.y,0),s.push(0,0,1),o.push(g.x,g.y)}for(let y=0,p=x.length;y<p;y++){let g=x[y],w=g[0]+h,v=g[1]+h,b=g[2]+h;n.push(w,v,b),l+=3}}}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return J0(t,e)}static fromJSON(e,t){let n=[];for(let i=0,s=e.shapes.length;i<s;i++){let o=t[e.shapes[i]];n.push(o)}return new ao(n,e.curveSegments)}};function J0(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){let i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}var Ct=class extends Pe{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new S,d=new S,f=[],m=[],x=[],y=[];for(let p=0;p<=n;p++){let g=[],w=p/n,v=0;p==0&&o==0?v=.5/t:p==n&&l==Math.PI&&(v=-.5/t);for(let b=0;b<=t;b++){let R=b/t;h.x=-e*Math.cos(i+R*s)*Math.sin(o+w*a),h.y=e*Math.cos(o+w*a),h.z=e*Math.sin(i+R*s)*Math.sin(o+w*a),m.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),y.push(R+v,1-w),g.push(c++)}u.push(g)}for(let p=0;p<n;p++)for(let g=0;g<t;g++){let w=u[p][g+1],v=u[p][g],b=u[p+1][g],R=u[p+1][g+1];(p!==0||o>0)&&f.push(w,v,R),(p!==n-1||l<Math.PI)&&f.push(v,b,R)}this.setIndex(f),this.setAttribute("position",new Ce(m,3)),this.setAttribute("normal",new Ce(x,3)),this.setAttribute("uv",new Ce(y,2))}static fromJSON(e){return new Ct(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var pn=class extends Pe{constructor(e=new to(new S(-1,-1,0),new S(-1,1,0),new S(1,1,0)),t=64,n=1,i=8,s=!1){super();this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};let o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new S,l=new S,c=new j,u=new S,h=[],d=[],f=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new Ce(h,3)),this.setAttribute("normal",new Ce(d,3)),this.setAttribute("uv",new Ce(f,2));function x(){for(let w=0;w<t;w++)y(w);y(s===!1?t:0),g(),p()}function y(w){u=e.getPointAt(w/t,u);let v=o.normals[w],b=o.binormals[w];for(let R=0;R<=i;R++){let _=R/i*Math.PI*2,P=Math.sin(_),k=-Math.cos(_);l.x=k*v.x+P*b.x,l.y=k*v.y+P*b.y,l.z=k*v.z+P*b.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function p(){for(let w=1;w<=t;w++)for(let v=1;v<=i;v++){let b=(i+1)*(w-1)+(v-1),R=(i+1)*w+(v-1),_=(i+1)*w+v,P=(i+1)*(w-1)+v;m.push(b,R,P),m.push(R,_,P)}}function g(){for(let w=0;w<=t;w++)for(let v=0;v<=i;v++)c.x=w/t,c.y=v/i,f.push(c.x,c.y)}}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new pn(new Ya[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var lo=class extends dt{constructor(e){super();this.type="ShadowMaterial",this.color=new ee(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}};lo.prototype.isShadowMaterial=!0;var jt=class extends dt{constructor(e){super();this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sn,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}};jt.prototype.isMeshStandardMaterial=!0;var mn=class extends jt{constructor(e){super();this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new j(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenColor=new ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ee(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};mn.prototype.isMeshPhysicalMaterial=!0;var Gu=class extends dt{constructor(e){super();this.type="MeshPhongMaterial",this.color=new ee(16777215),this.specular=new ee(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sn,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=rr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}};Gu.prototype.isMeshPhongMaterial=!0;var Vu=class extends dt{constructor(e){super();this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ee(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sn,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}};Vu.prototype.isMeshToonMaterial=!0;var Wu=class extends dt{constructor(e){super();this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sn,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};Wu.prototype.isMeshNormalMaterial=!0;var qu=class extends dt{constructor(e){super();this.type="MeshLambertMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=rr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}};qu.prototype.isMeshLambertMaterial=!0;var co=class extends dt{constructor(e){super();this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ee(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sn,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this}};co.prototype.isMeshMatcapMaterial=!0;var Xu=class extends tn{constructor(e){super();this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};Xu.prototype.isLineDashedMaterial=!0;var et={arraySlice:function(r,e,t){return et.isTypedArray(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)},convertArray:function(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)},isTypedArray:function(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)},getKeyframeOrder:function(r){function e(i,s){return r[i]-r[s]}let t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n},sortedArray:function(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){let a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i},flattenJSON:function(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)},subclip:function(r,e,t,n,i=30){let s=r.clone();s.name=e;let o=[];for(let l=0;l<s.tracks.length;++l){let c=s.tracks[l],u=c.getValueSize(),h=[],d=[];for(let f=0;f<c.times.length;++f){let m=c.times[f]*i;if(!(m<t||m>=n)){h.push(c.times[f]);for(let x=0;x<u;++x)d.push(c.values[f*u+x])}}h.length!==0&&(c.times=et.convertArray(h,c.times.constructor),c.values=et.convertArray(d,c.values.constructor),o.push(c))}s.tracks=o;let a=1/0;for(let l=0;l<s.tracks.length;++l)a>s.tracks[l].times[0]&&(a=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(r,e=0,t=r,n=30){n<=0&&(n=30);let i=t.tracks.length,s=e/n;for(let o=0;o<i;++o){let a=t.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;let c=r.tracks.find(function(p){return p.name===a.name&&p.ValueTypeName===l});if(c===void 0)continue;let u=0,h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let d=0,f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);let m=a.times.length-1,x;if(s<=a.times[0]){let p=u,g=h-u;x=et.arraySlice(a.values,p,g)}else if(s>=a.times[m]){let p=m*h+u,g=p+h-u;x=et.arraySlice(a.values,p,g)}else{let p=a.createInterpolant(),g=u,w=h-u;p.evaluate(s),x=et.arraySlice(p.resultBuffer,g,w)}l==="quaternion"&&new ut().fromArray(x).normalize().conjugate().toArray(x);let y=c.times.length;for(let p=0;p<y;++p){let g=p*f+d;if(l==="quaternion")ut.multiplyQuaternionsFlat(c.values,g,x,0,c.values,g);else{let w=f-d*2;for(let v=0;v<w;++v)c.values[g+v]-=x[v]}}}return r.blendMode=rc,r}},Yt=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,s)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,s,e)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}};Yt.prototype.beforeStart_=Yt.prototype.copySampleValue_;Yt.prototype.afterEnd_=Yt.prototype.copySampleValue_;var ju=class extends Yt{constructor(e,t,n,i){super(e,t,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Si,endingEnd:Si}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ti:s=e,a=2*t-n;break;case ur:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ti:o=e,l=2*n-t;break;case ur:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),x=m*m,y=x*m,p=-d*y+2*d*x-d*m,g=(1+d)*y+(-1.5-2*d)*x+(-.5+d)*m+1,w=(-1-f)*y+(1.5+f)*x+.5*m,v=f*y-f*x;for(let b=0;b!==a;++b)s[b]=p*o[u+b]+g*o[c+b]+w*o[l+b]+v*o[h+b];return s}},Ja=class extends Yt{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*h+o[l+d]*u;return s}},Yu=class extends Yt{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Zt=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=et.convertArray(t,this.TimeBufferType),this.values=et.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:et.convertArray(e.times,Array),values:et.convertArray(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Yu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ju(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case bi:t=this.InterpolantFactoryMethodDiscrete;break;case ei:t=this.InterpolantFactoryMethodLinear;break;case Yo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bi;case this.InterpolantFactoryMethodLinear:return ei;case this.InterpolantFactoryMethodSmooth:return Yo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=et.arraySlice(n,s,o),this.values=et.arraySlice(this.values,s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&et.isTypedArray(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=et.arraySlice(this.times),t=et.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===Yo,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{let h=a*n,d=h-n,f=h+n;for(let m=0;m!==n;++m){let x=t[h+m];if(x!==t[d+m]||x!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=et.arraySlice(e,0,o),this.values=et.arraySlice(t,0,o*n)):(this.times=e,this.values=t),this}clone(){let e=et.arraySlice(this.times,0),t=et.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Zt.prototype.TimeBufferType=Float32Array;Zt.prototype.ValueBufferType=Float32Array;Zt.prototype.DefaultInterpolation=ei;var ui=class extends Zt{};ui.prototype.ValueTypeName="bool";ui.prototype.ValueBufferType=Array;ui.prototype.DefaultInterpolation=bi;ui.prototype.InterpolantFactoryMethodLinear=void 0;ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Ka=class extends Zt{};Ka.prototype.ValueTypeName="color";var hi=class extends Zt{};hi.prototype.ValueTypeName="number";var Zu=class extends Yt{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let u=c+a;c!==u;c+=4)ut.slerpFlat(s,0,o,c-a,o,c,l);return s}},gn=class extends Zt{InterpolantFactoryMethodLinear(e){return new Zu(this.times,this.values,this.getValueSize(),e)}};gn.prototype.ValueTypeName="quaternion";gn.prototype.DefaultInterpolation=ei;gn.prototype.InterpolantFactoryMethodSmooth=void 0;var di=class extends Zt{};di.prototype.ValueTypeName="string";di.prototype.ValueBufferType=Array;di.prototype.DefaultInterpolation=bi;di.prototype.InterpolantFactoryMethodLinear=void 0;di.prototype.InterpolantFactoryMethodSmooth=void 0;var fi=class extends Zt{};fi.prototype.ValueTypeName="vector";var Ws=class{constructor(e,t=-1,n,i=Zo){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=It(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Q0(n[o]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Zt.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);let u=et.getKeyframeOrder(l);l=et.sortedArray(l,1,u),c=et.sortedArray(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new hi(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(s);if(u&&u.length>1){let h=u[1],d=i[h];d||(i[h]=d=[]),d.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,f,m,x){if(f.length!==0){let y=[],p=[];et.flattenJSON(f,y,p,m),y.length!==0&&x.push(new h(d,y,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let x=0;x<d[m].morphTargets.length;x++)f[d[m].morphTargets[x]]=-1;for(let x in f){let y=[],p=[];for(let g=0;g!==d[m].morphTargets.length;++g){let w=d[m];y.push(w.time),p.push(w.morphTarget===x?1:0)}i.push(new hi(".morphTargetInfluence["+x+"]",y,p))}l=f.length*(o||1)}else{let f=".bones["+t[h].name+"]";n(fi,f+".position",d,"pos",i),n(gn,f+".quaternion",d,"rot",i),n(fi,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function K0(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return hi;case"vector":case"vector2":case"vector3":case"vector4":return fi;case"color":return Ka;case"quaternion":return gn;case"bool":case"boolean":return ui;case"string":return di}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Q0(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=K0(r.type);if(r.times===void 0){let t=[],n=[];et.flattenJSON(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}var Qi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},$u=class{constructor(e,t,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],m=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null}}},ey=new $u,Bt=class{constructor(e){this.manager=e!==void 0?e:ey,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}},xn={},pi=class extends Bt{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Qi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(xn[e]!==void 0){xn[e].push({onLoad:t,onProgress:n,onError:i});return}xn[e]=[],xn[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"});fetch(o).then(a=>{if(a.status===200||a.status===0){a.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received.");let l=xn[e],c=a.body.getReader(),u=a.headers.get("Content-Length"),h=u?parseInt(u):0,d=h!==0,f=0;return new ReadableStream({start(m){x();function x(){c.read().then(({done:y,value:p})=>{if(y)m.close();else{f+=p.byteLength;let g=new ProgressEvent("progress",{lengthComputable:d,loaded:f,total:h});for(let w=0,v=l.length;w<v;w++){let b=l[w];b.onProgress&&b.onProgress(g)}m.enqueue(p),x()}})}}})}else throw Error(`fetch for "${a.url}" responded with ${a.status}: ${a.statusText}`)}).then(a=>{let l=new Response(a);switch(this.responseType){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(c=>new DOMParser().parseFromString(c,this.mimeType));case"json":return l.json();default:return l.text()}}).then(a=>{Qi.add(e,a);let l=xn[e];delete xn[e];for(let c=0,u=l.length;c<u;c++){let h=l[c];h.onLoad&&h.onLoad(a)}this.manager.itemEnd(e)}).catch(a=>{let l=xn[e];delete xn[e];for(let c=0,u=l.length;c<u;c++){let h=l[c];h.onError&&h.onError(a)}this.manager.itemError(e),this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Qa=class extends Bt{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=Qi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=fr("img");function l(){u(),Qi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}},Ju=class extends Bt{constructor(e){super(e)}load(e,t,n,i){let s=new Ms,o=new Qa(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(u){s.images[c]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return s}};var Un=class extends Bt{constructor(e){super(e)}load(e,t,n,i){let s=new ct,o=new Qa(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},$t=class extends _e{constructor(e,t=1){super();this.type="Light",this.color=new ee(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};$t.prototype.isLight=!0;var Ku=class extends $t{constructor(e,t,n){super(e,n);this.type="HemisphereLight",this.position.copy(_e.DefaultUp),this.updateMatrix(),this.groundColor=new ee(t)}copy(e){return $t.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}};Ku.prototype.isHemisphereLight=!0;var Qu=new pe,eh=new S,th=new S,uo=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new j(512,512),this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bs,this._frameExtents=new j(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;eh.setFromMatrixPosition(e.matrixWorld),t.position.copy(eh),th.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(th),t.updateMatrixWorld(),Qu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},el=class extends uo{constructor(){super(new ft(50,1,.5,500));this.focus=1}updateMatrices(e){let t=this.camera,n=ps*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}};el.prototype.isSpotLightShadow=!0;var ho=class extends $t{constructor(e,t,n=0,i=Math.PI/3,s=0,o=1){super(e,t);this.type="SpotLight",this.position.copy(_e.DefaultUp),this.updateMatrix(),this.target=new _e,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.shadow=new el}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};ho.prototype.isSpotLight=!0;var nh=new pe,qs=new S,tl=new S,nl=class extends uo{constructor(){super(new ft(90,1,.5,500));this._frameExtents=new j(4,2),this._viewportCount=6,this._viewports=[new We(2,1,1,1),new We(0,1,1,1),new We(3,1,1,1),new We(1,1,1,1),new We(3,0,1,1),new We(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),qs.setFromMatrixPosition(e.matrixWorld),n.position.copy(qs),tl.copy(n.position),tl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(tl),n.updateMatrixWorld(),i.makeTranslation(-qs.x,-qs.y,-qs.z),nh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nh)}};nl.prototype.isPointLightShadow=!0;var es=class extends $t{constructor(e,t,n=0,i=1){super(e,t);this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new nl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}};es.prototype.isPointLight=!0;var il=class extends uo{constructor(){super(new Hi(-5,5,5,-5,.5,500))}};il.prototype.isDirectionalLightShadow=!0;var ts=class extends $t{constructor(e,t){super(e,t);this.type="DirectionalLight",this.position.copy(_e.DefaultUp),this.updateMatrix(),this.target=new _e,this.shadow=new il}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};ts.prototype.isDirectionalLight=!0;var fo=class extends $t{constructor(e,t){super(e,t);this.type="AmbientLight"}};fo.prototype.isAmbientLight=!0;var ih=class extends $t{constructor(e,t,n=10,i=10){super(e,t);this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}};ih.prototype.isRectAreaLight=!0;var sl=class{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new S)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){let n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*i),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*i)),t.addScaledVector(o[5],1.092548*(i*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(n*s)),t.addScaledVector(o[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){let n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*i),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*i),t.addScaledVector(o[5],2*.429043*i*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*n*s),t.addScaledVector(o[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){let n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}};sl.prototype.isSphericalHarmonics3=!0;var po=class extends $t{constructor(e=new sl,t=1){super(void 0,t);this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){let t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}};po.prototype.isLightProbe=!0;var kt=class{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},sh=class extends Pe{constructor(){super();this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){let e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};sh.prototype.isInstancedBufferGeometry=!0;var mo=class extends Bt{constructor(e){super(e);typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=Qi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){Qi.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}};mo.prototype.isImageBitmapLoader=!0;var go,rh={getContext:function(){return go===void 0&&(go=new(window.AudioContext||window.webkitAudioContext)),go},setContext:function(r){go=r}},xo=class extends Bt{constructor(e){super(e)}load(e,t,n,i){let s=this,o=new pi(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{let l=a.slice(0);rh.getContext().decodeAudioData(l,function(u){t(u)})}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}},oh=class extends po{constructor(e,t,n=1){super(void 0,n);let i=new ee().set(e),s=new ee().set(t),o=new S(i.r,i.g,i.b),a=new S(s.r,s.g,s.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(a).multiplyScalar(l),this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(c)}};oh.prototype.isHemisphereLightProbe=!0;var ah=class extends po{constructor(e,t=1){super(void 0,t);let n=new ee().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}};ah.prototype.isAmbientLightProbe=!0;var yo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=lh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=lh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function lh(){return(typeof performance=="undefined"?Date:performance).now()}var mi=new S,ch=new ut,ty=new S,gi=new S,Xs=class extends _e{constructor(){super();this.type="AudioListener",this.context=rh.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new yo}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);let t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(mi,ch,ty),gi.set(0,0,-1).applyQuaternion(ch),t.positionX){let i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(mi.x,i),t.positionY.linearRampToValueAtTime(mi.y,i),t.positionZ.linearRampToValueAtTime(mi.z,i),t.forwardX.linearRampToValueAtTime(gi.x,i),t.forwardY.linearRampToValueAtTime(gi.y,i),t.forwardZ.linearRampToValueAtTime(gi.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(mi.x,mi.y,mi.z),t.setOrientation(gi.x,gi.y,gi.z,n.x,n.y,n.z)}},js=class extends _e{constructor(e){super();this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}};var uh=class{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0,t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}},hh=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,s=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){ut.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){let o=this._workIndex*s;ut.multiplyQuaternionsFlat(e,o,e,t,e,n),ut.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){let o=1-i;for(let a=0;a!==s;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}},rl="\\[\\]\\.:\\/",ny=new RegExp("["+rl+"]","g"),ol="[^"+rl+"]",iy="[^"+rl.replace("\\.","")+"]",sy=/((?:WC+[\/:])*)/.source.replace("WC",ol),ry=/(WCOD+)?/.source.replace("WCOD",iy),oy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ol),ay=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ol),ly=new RegExp("^"+sy+ry+oy+ay+"$"),cy=["material","materials","bones"],dh=class{constructor(e,t,n){let i=n||ze.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ze=class{constructor(e,t,n){this.path=t,this.parsedPath=n||ze.parseTrackName(t),this.node=ze.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ze.Composite(e,t,n):new ze(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ny,"")}static parseTrackName(e){let t=ly.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);cy.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=ze.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ze.Composite=dh;ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ze.prototype.GetterByBindingType=[ze.prototype._getValue_direct,ze.prototype._getValue_array,ze.prototype._getValue_arrayElement,ze.prototype._getValue_toArray];ze.prototype.SetterByBindingTypeAndVersioning=[[ze.prototype._setValue_direct,ze.prototype._setValue_direct_setNeedsUpdate,ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_array,ze.prototype._setValue_array_setNeedsUpdate,ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_arrayElement,ze.prototype._setValue_arrayElement_setNeedsUpdate,ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_fromArray,ze.prototype._setValue_fromArray_setNeedsUpdate,ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fh=class{constructor(){this.uuid=It(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){let e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,s=this._bindings,o=s.length,a,l=e.length,c=this.nCachedObjects_;for(let u=0,h=arguments.length;u!==h;++u){let d=arguments[u],f=d.uuid,m=t[f];if(m===void 0){m=l++,t[f]=m,e.push(d);for(let x=0,y=o;x!==y;++x)s[x].push(new ze(d,n[x],i[x]))}else if(m<c){a=e[m];let x=--c,y=e[x];t[y.uuid]=m,e[m]=y,t[f]=x,e[x]=d;for(let p=0,g=o;p!==g;++p){let w=s[p],v=w[x],b=w[m];w[m]=v,b===void 0&&(b=new ze(d,n[p],i[p])),w[x]=b}}else e[m]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length,s=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){let l=arguments[o],c=l.uuid,u=t[c];if(u!==void 0&&u>=s){let h=s++,d=e[h];t[d.uuid]=u,e[u]=d,t[c]=h,e[h]=l;for(let f=0,m=i;f!==m;++f){let x=n[f],y=x[h],p=x[u];x[u]=y,x[h]=p}}}this.nCachedObjects_=s}uncache(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length,s=this.nCachedObjects_,o=e.length;for(let a=0,l=arguments.length;a!==l;++a){let c=arguments[a],u=c.uuid,h=t[u];if(h!==void 0)if(delete t[u],h<s){let d=--s,f=e[d],m=--o,x=e[m];t[f.uuid]=h,e[h]=f,t[x.uuid]=d,e[d]=x,e.pop();for(let y=0,p=i;y!==p;++y){let g=n[y],w=g[d],v=g[m];g[h]=w,g[d]=v,g.pop()}}else{let d=--o,f=e[d];d>0&&(t[f.uuid]=h),e[h]=f,e.pop();for(let m=0,x=i;m!==x;++m){let y=n[m];y[h]=y[d],y.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){let n=this._bindingsIndicesByPath,i=n[e],s=this._bindings;if(i!==void 0)return s[i];let o=this._paths,a=this._parsedPaths,l=this._objects,c=l.length,u=this.nCachedObjects_,h=new Array(c);i=s.length,n[e]=i,o.push(e),a.push(t),s.push(h);for(let d=u,f=l.length;d!==f;++d){let m=l[d];h[d]=new ze(m,e,t)}return h}unsubscribe_(e){let t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){let i=this._paths,s=this._parsedPaths,o=this._bindings,a=o.length-1,l=o[a],c=e[a];t[c]=n,o[n]=l,o.pop(),s[n]=s[a],s.pop(),i[n]=i[a],i.pop()}}};fh.prototype.isAnimationObjectGroup=!0;var ph=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let s=t.tracks,o=s.length,a=new Array(o),l={endingStart:Si,endingEnd:Si};for(let c=0;c!==o;++c){let u=s[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Af,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,s=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let l=(e-s)*n;if(l<0||n===0)return;this._startTime=null,t=n*l}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case rc:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case Zo:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;n!==null&&(t*=n.evaluate(e)[0],e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,s=this._loopCount,o=n===Rf;if(e===0)return s===-1?i:o&&(s&1)==1?t-i:i;if(n===jo){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);let l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)==1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=Ti,i.endingEnd=Ti):(e?i.endingStart=this.zeroSlopeAtStart?Ti:Si:i.endingStart=ur,t?i.endingEnd=this.zeroSlopeAtEnd?Ti:Si:i.endingEnd=ur)}_scheduleFading(e,t,n){let i=this._mixer,s=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}},vo=class extends Jt{constructor(e){super();this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==s;++h){let d=i[h],f=d.name,m=u[f];if(m!==void 0)o[h]=m;else{if(m=o[h],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}let x=t&&t._propertyBindings[h].binding.parsedPath;m=new hh(ze.create(n,f,x),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),o[h]=m}a[h].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];s.useCount++==0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.useCount==0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,s=this._actionsByClip,o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.referenceCount==0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,s=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Ja(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){let i=t||this._root,s=i.uuid,o=typeof e=="string"?Ws.findByName(i,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Zo),l!==void 0){let h=l.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let u=new ph(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,s),u}existingAction(e,t){let n=t||this._root,i=n.uuid,s=typeof e=="string"?Ws.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){let o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(let o in s){let a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};vo.prototype._controlInterpolantsResultBuffer=new Float32Array(1);var _o=class{constructor(e){typeof e=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),e=arguments[1]),this.value=e}clone(){return new _o(this.value.clone===void 0?this.value:this.value.clone())}},mh=class extends Fn{constructor(e,t,n=1){super(e,t);this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};mh.prototype.isInstancedInterleavedBuffer=!0;var gh=class{constructor(e,t,n,i,s){this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}};gh.prototype.isGLBufferAttribute=!0;var wo=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=Math.max(e,Math.min(Math.PI-e,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var xh=new j,ns=class{constructor(e=new j(1/0,1/0),t=new j(-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=xh.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return xh.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};ns.prototype.isBox2=!0;var yh=new S,Mo=new S,vh=class{constructor(e=new S,t=new S){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){yh.subVectors(e,this.start),Mo.subVectors(this.end,this.start);let n=Mo.dot(Mo),s=Mo.dot(yh)/n;return t&&(s=bt(s,0,1)),s}closestPointToPoint(e,t,n){let i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Hn=new S,bo=new pe,al=new pe,_h=class extends Bn{constructor(e){let t=wh(e),n=new Pe,i=[],s=[],o=new ee(0,0,1),a=new ee(0,1,0);for(let c=0;c<t.length;c++){let u=t[c];u.parent&&u.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}n.setAttribute("position",new Ce(i,3)),n.setAttribute("color",new Ce(s,3));let l=new tn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l);this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){let t=this.bones,n=this.geometry,i=n.getAttribute("position");al.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){let a=t[s];a.parent&&a.parent.isBone&&(bo.multiplyMatrices(al,a.matrixWorld),Hn.setFromMatrixPosition(bo),i.setXYZ(o,Hn.x,Hn.y,Hn.z),bo.multiplyMatrices(al,a.parent.matrixWorld),Hn.setFromMatrixPosition(bo),i.setXYZ(o+1,Hn.x,Hn.y,Hn.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}};function wh(r){let e=[];r&&r.isBone&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,wh(r.children[t]));return e}var Mh=class extends Bn{constructor(e=10,t=10,n=4473924,i=8947848){n=new ee(n),i=new ee(i);let s=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,f=0,m=-a;d<=t;d++,m+=o){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);let x=d===s?n:i;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}let u=new Pe;u.setAttribute("position",new Ce(l,3)),u.setAttribute("color",new Ce(c,3));let h=new tn({vertexColors:!0,toneMapped:!1});super(u,h);this.type="GridHelper"}};var uy=new Float32Array(1),Hy=new Int32Array(uy.buffer);Nt.create=function(r,e){return console.log("THREE.Curve.create() has been deprecated"),r.prototype=Object.create(Nt.prototype),r.prototype.constructor=r,r.prototype.getPoint=e,r};io.prototype.fromPoints=function(r){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(r)};Mh.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};_h.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Bt.prototype.extractUrlBase=function(r){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),kt.extractUrlBase(r)};Bt.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};ns.prototype.center=function(r){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(r)};ns.prototype.empty=function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()};ns.prototype.isIntersectionBox=function(r){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};ns.prototype.size=function(r){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(r)};Pt.prototype.center=function(r){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(r)};Pt.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Pt.prototype.isIntersectionBox=function(r){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};Pt.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};Pt.prototype.size=function(r){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(r)};an.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};bs.prototype.setFromMatrix=function(r){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(r)};vh.prototype.center=function(r){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(r)};yt.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)};yt.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};yt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};yt.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};yt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};yt.prototype.getInverse=function(r){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};pe.prototype.extractPosition=function(r){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(r)};pe.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)};pe.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new S().setFromMatrixColumn(this,3)};pe.prototype.setRotationFromQuaternion=function(r){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(r)};pe.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};pe.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};pe.prototype.multiplyVector4=function(r){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};pe.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};pe.prototype.rotateAxis=function(r){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),r.transformDirection(this)};pe.prototype.crossVector=function(r){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};pe.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};pe.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};pe.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};pe.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};pe.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};pe.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};pe.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};pe.prototype.makeFrustum=function(r,e,t,n,i,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(r,e,n,t,i,s)};pe.prototype.getInverse=function(r){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};Ut.prototype.isIntersectionLine=function(r){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(r)};ut.prototype.multiplyVector3=function(r){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),r.applyQuaternion(this)};ut.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};si.prototype.isIntersectionBox=function(r){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};si.prototype.isIntersectionPlane=function(r){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(r)};si.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};ht.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};ht.prototype.barycoordFromPoint=function(r,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(r,e)};ht.prototype.midpoint=function(r){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(r)};ht.prototypenormal=function(r){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(r)};ht.prototype.plane=function(r){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(r)};ht.barycoordFromPoint=function(r,e,t,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),ht.getBarycoord(r,e,t,n,i)};ht.normal=function(r,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),ht.getNormal(r,e,t,n)};$i.prototype.extractAllPoints=function(r){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(r)};$i.prototype.extrude=function(r){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new ci(this,r)};$i.prototype.makeGeometry=function(r){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new ao(this,r)};j.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};j.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};j.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};S.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};S.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};S.prototype.getPositionFromMatrix=function(r){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(r)};S.prototype.getScaleFromMatrix=function(r){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(r)};S.prototype.getColumnFromMatrix=function(r,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,r)};S.prototype.applyProjection=function(r){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(r)};S.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};S.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};S.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};We.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};We.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};_e.prototype.getChildByName=function(r){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(r)};_e.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};_e.prototype.translate=function(r,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,r)};_e.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};_e.prototype.applyMatrix=function(r){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(_e.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(r){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=r}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Re.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(Re.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),Lf},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Ps.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};ft.prototype.setLens=function(r,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(r)};Object.defineProperties($t.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(r){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=r}},shadowCameraLeft:{set:function(r){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=r}},shadowCameraRight:{set:function(r){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=r}},shadowCameraTop:{set:function(r){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=r}},shadowCameraBottom:{set:function(r){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=r}},shadowCameraNear:{set:function(r){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=r}},shadowCameraFar:{set:function(r){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=r}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(r){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=r}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(r){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=r}},shadowMapHeight:{set:function(r){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=r}}});Object.defineProperties(je.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===hr},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(hr)}}});je.prototype.setDynamic=function(r){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?hr:ds),this};je.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},je.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Pe.prototype.addIndex=function(r){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(r)};Pe.prototype.addAttribute=function(r,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(r,new je(arguments[1],arguments[2]))):r==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(r,e)};Pe.prototype.addDrawCall=function(r,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(r,e)};Pe.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};Pe.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};Pe.prototype.removeAttribute=function(r){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(r)};Pe.prototype.applyMatrix=function(r){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(Pe.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Fn.prototype.setDynamic=function(r){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?hr:ds),this};Fn.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};ci.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};ci.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};ci.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};As.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};_o.prototype.onUpdate=function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this};Object.defineProperties(dt.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new ee}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(r){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=r===kl}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(r){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=r}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(mt.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(r){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=r}}});qe.prototype.clearTarget=function(r,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(r),this.clear(e,t,n)};qe.prototype.animate=function(r){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(r)};qe.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};qe.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};qe.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};qe.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};qe.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};qe.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};qe.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};qe.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};qe.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};qe.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};qe.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};qe.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};qe.prototype.enableScissorTest=function(r){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(r)};qe.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};qe.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};qe.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};qe.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};qe.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};qe.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};qe.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};qe.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};qe.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};qe.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(qe.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=r}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=r}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(r){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=r===!0?Ot:Mt}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(cu.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Rt.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=r}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=r}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=r}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=r}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(r){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=r}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(r){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=r}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(r){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=r}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(r){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=r}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(r){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=r}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(r){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=r}}});js.prototype.load=function(r){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");let e=this;return new xo().load(r,function(n){e.setBuffer(n)}),this};uh.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()};Ir.prototype.updateCubeMap=function(r,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(r,e)};Ir.prototype.clear=function(r,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(r,e,t,n)};ti.crossOrigin=void 0;ti.loadTexture=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");let i=new Un;i.setCrossOrigin(this.crossOrigin);let s=i.load(r,t,void 0,n);return e&&(s.mapping=e),s};ti.loadTextureCube=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");let i=new Ju;i.setCrossOrigin(this.crossOrigin);let s=i.load(r,t,void 0,n);return e&&(s.mapping=e),s};ti.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};ti.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uo}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uo);var So=(r,e=!1,t=0,n=1/0)=>{let s=(r.getIndex()||r.getAttribute("position")).count/3,o=[];for(let c=t;c<s&&c<=n;c++){let u=c%2==0,h=e?1:0;u?o.push(0,0,1,0,1,0,1,0,h):o.push(0,1,0,0,0,1,1,0,h)}let a=new Float32Array(o),l=new je(a,3);r.setAttribute("barycentric",l)};var ll=(r={})=>{r&&r.dispose&&lt.fn(r.dispose)&&r.dispose()},Ys=(r={})=>{lt.arr(r)&&r.forEach(e=>Ys(e)),r.type==="Audio"&&r.isPlaying&&r.stop(),ll(r.geometry),r.material&&(lt.arr(r.material)?r.material:[r.material]).forEach(t=>{Object.values(t).forEach(ll),ll(t)}),r.children.length&&r.children.forEach(Ys),!r.isScene&&r.dispose&&lt.fn(r.dispose)&&r.dispose(),r.parent&&r.parent.remove(r)};var Zs=({loader:r,file:e,preload:t})=>new Promise((n,i)=>{let s=l=>{let c="",u="";l.lengthComputable&&(c=`${Math.ceil(l.loaded/l.total*100)}% `,u=`/${l.total}`)},o=l=>{n(l)},a=l=>{t.setError(l,"Error loading artifact.",5e3),console.log("error loading artifact",l),i(l)};r.load(e,o,s,a)});var cl=async r=>{let{file:e,preload:t}=r,n=new Un;return await Zs({loader:n,file:e,preload:t})};var yn={};od(yn,{BrainwaveScene:()=>ul,LatkScene:()=>dl,LightCubeScene:()=>hl,MolecularVortex:()=>pl,PlyScene:()=>gl,bubbles:()=>Ao,chromaKey:()=>Ro,displacement:()=>Eo,pointcloud:()=>To,record3D:()=>$s});var hy=`
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
`,dy=`
uniform sampler2D map;

varying vec2 vUv;

void main() {
  vec4 color = texture2D(map, vUv);
  gl_FragColor = vec4(color.r, color.g, color.b, 1);
}
`,To=({artifact:r,videoElement:e})=>{let t=new Ht(e);t.minFilter=Qe;let n=800,i=600,s=2,o=5,a=3,l=0,c=new Pe,u=new Float32Array(n*i*3);for(let m=0,x=0;m<u.length;m+=3,x++)u[m]=x%n,u[m+1]=Math.floor(x/n);c.setAttribute("position",new je(u,3));let h=new mt({uniforms:{map:{value:t},width:{value:n},height:{value:i},nearClipping:{value:s},farClipping:{value:o},pointSize:{value:a},zOffset:{value:l}},vertexShader:hy,fragmentShader:dy});r.alpha&&(h.blending=Mn,h.depthTest=!1,h.depthWrite=!1,h.transparent=!0);let d=new nn(c,h);d.position.set(0,.5,0);let f=new _e;return f.add(d),f};var Eo=async({videoElement:r})=>{let e=new Ht(r);e.minFilter=Qe;let t=new jt({map:e,displacementMap:e,displacementScale:1,side:xt}),n=new dn(3,1.66,50,32),i=new Re(n,t);i.position.set(0,1.5,-.5);let s=new _e;return s.add(i),s};var Ao=async({model:r,videoElement:e})=>{let t=[0,1.2,0],n=new Ht(e),i=new jt({map:n,side:tt}),s=new Ct(.698,30,30),o=new Re(s,i);o.position.set(...t),r.getObjectByName("bubble_reflect").position.set(...t);let l=new Ct(.699,30,30),c=new Ke({color:0,side:sn}),u=new Re(l,c);u.name="clip",u.material=c,u.position.set(...t);let h=new _e;return h.add(u),h.add(o),h.add(r),h};var $s=r=>{let{artifact:e={},videoElement:t}=r,{videoWidth:n,videoHeight:i}=t,{filterSize:s="1",minDepth:o="0.1",maxDepth:a="2.8",depthThresholdFilter:l="0.9",scale:c="7.0",ptSize:u="1.0",pixelDepth:h="2.0"}=e,d=`
 attribute float vertexIdx;

varying float vVertexIdx;
varying vec2 vPtPos;

uniform ivec2 texSize;
uniform sampler2D texImg;
uniform vec4 iK;

const int filterSize = ${s};
const float depthThresholdFilter = ${l}; // original 0.5 In meters. Smaller values = more aggressive filtering
const vec2 absoluteDepthRangeFilter = vec2(${o}, ${a}); // original 0.1, 2.8

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
  float pixelDepth = ${h} * hue; //original 3.0
  return pixelDepth;
}

bool shouldDiscard(ivec2 currPixel) {
  float centerPixelDepth = getPixelDepth(currPixel);

  for (int i = -filterSize; i <= filterSize; i++) {
    for (int j = -filterSize; j <= filterSize; j++) {
      if (i == 0 && j == 0) {
        continue;
      }

      float currDepth = getPixelDepth(currPixel + ivec2(j, i));

      if (currDepth < ${o}
          || currDepth >= ${a}
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

  vec3 ptPos = ${c} * vec3(
    (iK.x * float(ptX) + iK.z) * currDepth,
    (iK.y * float(ptY) + iK.w) * currDepth,
    -currDepth
  );

  vec4 mvPos = modelViewMatrix * vec4(ptPos, 1.0);
  gl_Position = projectionMatrix * mvPos;

  vPtPos = vec2(float(ptX), float(ptY));
  vVertexIdx = vertexIdx;
  gl_PointSize = ${u};
}
`,f=`
varying float vVertexIdx;
varying vec2 vPtPos;

uniform ivec2 texSize;
uniform sampler2D texImg;

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

  gl_FragColor = vec4(currColor, 1.0);
}
 `,m=new Et,x=new Ht(t);x.minFilter=nt;let{ifx:y=.00125,ify:p=.00125,itx:g=-.4,ity:w=-.6}=e,v={texImg:{type:"t",value:x},texSize:{type:"i2",value:[n,i]},iK:{type:"f4",value:[y,p,g,w]}},b=new mt({uniforms:v,side:xt,transparent:!1,vertexShader:d,fragmentShader:f}),R=n/2*i,_=new Uint32Array(R),P=new Float32Array(R);for(let C=0;C<R;C++)_[C]=C,P[C]=C;let k=new Pe;k.setAttribute("vertexIdx",new Ce(P,1)),k.setIndex(new _s(new Uint32Array(_),1));let G=new nn(k,b);return G.frustumCulled=!1,m.add(G),r.child=m,m};var bh=class extends mt{constructor(e,t={}){super({depthTest:!1});let{range:n=.5,mult:i=7,chromaKey:s=54322}=t;e.minFilter=nt,e.magFilter=nt,this.setValues({uniforms:{tex:{type:"t",value:e},chromaKey:{type:"c",value:s}},vertexShader:`
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
    `.trim(),transparent:!0})}},Ro=({artifact:r,videoTexture:e})=>{let t=new ee(lt.bool(r.chromaKey)?54322:r.chromaKey);return new bh(e,{chromaKey:t})};var Lo=class extends mt{constructor(e={}){let{fill:t,stroke:n}=e.uniforms;(lt.str(t.value)||lt.num(t.value))&&(e.uniforms.fill.value=new ee(t.value)),(lt.str(n.value)||lt.num(n.value))&&(e.uniforms.stroke.value=new ee(n.value)),e.vertexShader||(e.vertexShader=fy),e.fragmentShader||(e.fragmentShader=py);let{extensions:i={}}=e;e.extensions={...i,derivatives:!0};super(e)}},fy=`
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
`,py=`
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
`;var ul=class{constructor(e={}){let{artifact:t,camera:n,modelSpawned:i,renderer:s,scene:o,listener:a,XR:l}=e;this.listener=a,this.XR=l,this.scene=o,this.artifact=t,this.modelSpawned=i,this.props=e,this.model=e.model,this.camera=n,n.far=1e3,n.updateProjectionMatrix(),this.renderer=s,s.toneMapping=Go,s.outputEncoding=Mt;let{radiusSegments:c=5,tube1Radius:u=.4,tube2Radius:h=.37,growSteps:d=1,edgeRemoval:f=!1,positionScaleFactor:m=1,tubeScale:x=.1,tube1Rotation:y=90,tube2Rotation:p=-Math.PI*2,audioTreshold:g=.02,fps:w=60,maximalSplineLength:v=5e3}=t;this.radiusSegments=c,this.tube1Radius=u*m,this.tube2Radius=h*m,this.growSteps=d,this.positionScaleFactor=m,this.audioTreshold=g,this.tubeScale=x,this.tube1Rotation=y,this.tube2Rotation=p,this.edgeRemoval=f,this.currentDrawRangeMin=0,this.direction=1,this.msBetweenSplineExpansions=1e3/w,this.maximalSplineLength=v,this.audioDistanceMaxMeters=8}async init(){let{artifact:e}=this,n=`https://static.artificialmuseum.com/data/${e.data?e.data:e.slug}.js`,{data:i}=await import(n);this.data=i;let s=o=>new Promise(a=>{new Un().load(o,c=>a(c))});this.matcapTexture=await s("https://static.artificialmuseum.com/textures/matcap/grey-white-light.jpg"),this.createCubes(),this.create3dSplines(),await this.loadAudio()}spawnModel(){this.audioTarget1.play(),this.audioTarget2.play()}async loadAudio(){let{artifact:e,camera:t,model:n,parent1:i,parent2:s}=this;return new Promise(o=>{let a=new Xs;t.add(a);let l=i.position,c=new js(a);c.name="audiotarget_1",c.position.set(l.x,l.y,l.z);let u=s.position,h=new js(a);h.name="audiotarget_2",h.position.set(u.x,u.y,u.z),n.add(c),n.add(h),this.audioTarget1=c,this.audioTarget2=h;let d=new xo,m=`https://media.artificialmuseum.com/audio/${lt.str(e.audio)?e.audio:e.slug}.mp3`;d.load(m,x=>{c.setBuffer(x),c.setLoop(!0),c.setVolume(0),h.setBuffer(x),h.setLoop(!0),h.setVolume(0),h.offset=.1,o(x)})})}createCubes(){let e=this.positionScaleFactor,t=e*1.1,n=new Kt(t,t,t),i=new co({matcap:this.matcapTexture});this.cubeGroup=new Et,this.cubeGroup.position.set(0,0,0);for(let s=0;s<5;s++)for(let o=0;o<28;o++){let a=new Re(n,i);a.name=`Cube_${s}_${o}`,a.rotateY(2*Math.PI/28*o),a.position.x=e*Math.sin(2*Math.PI/28*o)*Math.sqrt(28),a.position.z=e*Math.cos(2*Math.PI/28*o)*Math.sqrt(28),a.position.y=e*s*1.2+t*.5+.01,this.cubeGroup.add(a)}this.model.add(this.cubeGroup),this.collisionMaxDistance=t/2}create3dSplines(){let{artifact:e,radiusSegments:t,tube1Radius:n,tube2Radius:i,tube1Rotation:s,tube2Rotation:o,tubeScale:a,positionScaleFactor:l}=this,c=l*a;this.points=[{x:0,y:0,z:0},...this.data.map(([w,v,b])=>({x:w*c,y:v*c,z:b*c}))];let u=this.points.length*2,h=!1,d="catmullrom";this.spline=new On(this.points,h,d),this.parent1=new _e,this.parent1.position.set(0,l*7,0),this.parent2=new _e,this.parent2.position.set(0,l*5,0),this.tube1Geometry=new pn(this.spline,u,n,t,!1).toNonIndexed(),this.tube1Geometry.rotateY(s),this.tube1Geometry.setDrawRange(0,this.maximalSplineLength),this.tube2Geometry=new pn(this.spline,u,i,t,!1).toNonIndexed(),this.tube2Geometry.rotateY(o),this.tube2Geometry.setDrawRange(0,this.maximalSplineLength);let{spline1RemoveEdges:f=!0,spline2RemoveEdges:m=!0}=e;So(this.tube1Geometry,f),So(this.tube2Geometry,m);let{spline1Uniforms:x={time:{value:0},fill:{value:new ee(14138052)},stroke:{value:new ee(16711680)},noiseA:{value:!1},noiseB:{value:!0},dualStroke:{value:!1},seeThrough:{value:!0},insideAltColor:{value:!1},thickness:{value:.1},secondThickness:{value:.05},dashEnabled:{value:!1},dashRepeats:{value:1},dashOverlap:{value:!1},dashLength:{value:.7},dashAnimate:{value:!1},squeeze:{value:!0},squeezeMin:{value:.28},squeezeMax:{value:1}}}=e;this.spline1material=new Lo({uniforms:x,side:xt,transparent:!0});let{spline2Uniforms:y={time:{value:0},fill:{value:new ee(12802834)},stroke:{value:new ee(16711680)},noiseA:{value:!1},noiseB:{value:!0},dualStroke:{value:!1},seeThrough:{value:!0},insideAltColor:{value:!1},thickness:{value:.1},secondThickness:{value:.05},dashEnabled:{value:!1},dashRepeats:{value:1},dashOverlap:{value:!1},dashLength:{value:.7},dashAnimate:{value:!1},squeeze:{value:!0},squeezeMin:{value:.28},squeezeMax:{value:1}}}=e;this.spline2material=new Lo({uniforms:y,side:xt,transparent:!0});let p=new Re(this.tube1Geometry,this.spline1material);p.name="tube_1";let g=new Re(this.tube2Geometry,this.spline2material);g.name="tube_2",this.parent1.add(p),this.parent2.add(g),this.model.add(this.parent1),this.model.add(this.parent2)}removeCubeIfTouchedBySpline(e){this.cubeGroup.traverse(t=>{t.isMesh&&t.visible&&e.forEach(n=>{t.position.distanceToSquared(n)<this.collisionMaxDistance&&(t.visible=!1)})})}exit(){this.tube1Geometry.setDrawRange(0,this.maximalSplineLength),this.tube2Geometry.setDrawRange(0,this.maximalSplineLength),this.audioTarget1?.isPlaying&&this.audioTarget1.stop(),this.audioTarget2?.isPlaying&&this.audioTarget2.stop(),this.cubeGroup.traverse(e=>{e.visible=!0})}render(e,t){this.props.modelSpawned&&(this.lastTimeStamp||(this.lastTimeStamp=this.msBetweenSplineExpansions+1),e-this.lastTimeStamp>=this.msBetweenSplineExpansions&&(this.lastTimeStamp=e,this.expandSpline())),this.renderer.render(this.scene,this.camera)}expandSpline(){let e=this.growSteps*this.radiusSegments*3*this.direction;this.currentDrawRangeMin+=e,this.tube1Geometry.setDrawRange(this.currentDrawRangeMin,this.maximalSplineLength),this.tube2Geometry.setDrawRange(this.currentDrawRangeMin,this.maximalSplineLength);let t=[],n=this.tube1Geometry.getAttribute("position").array,i=this.tube2Geometry.getAttribute("position").array,s=this.currentDrawRangeMin*3,o=(this.maximalSplineLength+this.currentDrawRangeMin)*3;for(let c=s;c<o;c+=3){let u={x:n[c],y:n[c+1]+this.parent1.position.y,z:n[c+2]};u.y>=0&&t.push(u);let h={x:i[c],y:i[c+1]+this.parent2.position.y,z:i[c+2]};h.y>=0&&t.push(h)}let a=t[t.length-2],l=t[t.length-1];this.repositionAudioTarget(this.audioTarget1,a),this.repositionAudioTarget(this.audioTarget2,l),this.removeCubeIfTouchedBySpline(t)}repositionAudioTarget(e,t){if(t&&e){let n=this.camera.position.distanceToSquared(t),i=e.getVolume(),s=Math.max(.1,Math.min(1,this.audioDistanceMaxMeters/n));Math.abs(i-s)>this.audioTreshold&&e.setVolume(s.toFixed(2))}}};var hl=class{constructor({artifact:e,model:t,renderer:n,scene:i,camera:s}){this.model=t,this.lightDistance=.4,this.yOffset=1.45,this.showLights=e.showLights,this.renderer=n,this.scene=i,this.camera=s,this.pointLight=this.createLight(16733525),t.add(this.pointLight),this.pointLight2=this.createLight(11184895),t.add(this.pointLight2)}createLight(e){let t=new es(e,2,30);if(t.castShadow=!0,t.shadow.camera.near=.1,t.shadow.camera.far=30,this.showLights){let n=new Ct(.005,6,6),i=new Ke({color:e}),s=new Re(n,i);t.add(s)}return t}render(e){let t=this.lightDistance,n=e*5e-4;{let s=Math.sin(n)*t,o=Math.sin(n*1.1)*t+this.yOffset,a=Math.sin(n*1.2)*t;this.pointLight.position.set(s,o,a)}let i=n+1e4;{let s=M.sin(i)*t,o=M.sin(i*1.1)*t+this.yOffset,a=M.sin(i*1.2)*t;this.pointLight2.position.set(s,o,a)}this.renderer.render(this.scene,this.camera)}};var my=(r,e={})=>(e.reverse&&(r=r.reverse()),new S(...r)),dl=class{constructor(e){let t=[{mat:{color:16711680},pos:[0,0,0]}],{file:n=e.artifact.slug}=e.artifact,{fps:i=12,layers:s=t,reverse:o=!1}=e.artifact.latk;this.file=n;let a=1e3;this.frameMsInterval=a/i,this.layers=s,this.reverse=o,e.model?this.model=e.model:(this.model=new _e,this.model.position.set(0,0,0),e.model=this.model),this.longestLayer=-1,this.currentFrame=0,this.renderer=e.renderer,this.camera=e.camera,this.scene=e.scene,this.buffer=new Pe,this.lineGroup=new Et,this.model.add(this.lineGroup),this.layers.forEach(l=>{let c=this.createLayer(l);this.lineGroup.add(c)})}async init(){this.latk=await this.loadLatk()}createLayer(e){let{mat:t,pos:n}=e,i=new tn(t),s=new Bn(this.buffer,i);return s.frustumCulled=!1,n&&s.position.add(new S(...n)),s}async loadLatk(){let{latk:e}=await import(`https://static.artificialmuseum.com/latk/${this.file}.js`);return e.forEach(t=>{t.layers.forEach(n=>{n.frames.length>this.longestLayer&&(this.longestLayer=n.frames.length),n.frames.forEach(i=>{i.strokes.forEach(s=>{let o=s.points.map(a=>(a=Array.isArray(a)?a:a.co,my(a,this)));s.points=o})})})}),e}render(e){this.updateLatk(e),this.renderer.render(this.scene,this.camera)}updateLatk(e){let{latk:t}=this;if(!(!t||!t.length)&&(!this.lastTick||this.lastTick+this.frameMsInterval<=e)){let n=[];t.forEach(s=>{let{layers:o}=s;o.forEach(a=>{let{frames:l={}}=a,{strokes:c=[]}=l[this.currentFrame];c.forEach(u=>{let h=this.drawStroke(u);n.push(...h)})})}),this.buffer.setFromPoints(n),this.currentFrame+=1,this.lastTick=e,this.lineGroup.traverse(s=>{s.geometry=this.buffer});let i=this.longestLayer-1;this.currentFrame>i&&(this.currentFrame=0)}}drawStroke(e){let t=[];for(let n=0;n<e.points.length-1;n++)t.push(e.points[n]),t.push(e.points[n+1]);return t}};var fl=(r,e,t)=>{let n=e.clone().sub(r).normalize().multiplyScalar(t);return r.clone().add(n)};fl.percent=(r,e,t)=>{let n=e.clone().sub(r),i=n.length(),s=n.normalize().multiplyScalar(i*t);return r.clone().add(s)};var pl=class{constructor(e){this.engine=e;let{sphereCount:t=1e3,blackMolCount:n=100,whiteMolCount:i=100,parentCount:s=10,spawnCircleYOffset:o=.5,spawnCircleHeight:a=15,sphereScaleFactor:l=.1,spawnCircleDistance:c=2,spawnCircleWidth:u=5,upMolSpawnY:h=-7,molYSpeedMod:d=.02,upMolTargetPos:f=2.2}=this.engine.artifact;this.sphereCount=t,this.whiteMolCount=i,this.blackMolCount=n,this.parentCount=s,this.spawnCircleYOffset=o,this.spawnCircleHeight=a,this.sphereScaleFactor=l,this.spawnCircleDistance=c,this.spawnCircleWidth=u,this.upMolSpawnY=h,this.molYSpeedMod=d,this.upMolTargetPos=f,this.spawnCircleParents=[],this.upCircleParents=[],this.parentVelocities=[],this.rotators=[],this.upMols=[],this.sphereMaterials=[new Ke({color:new ee(0)}),new Ke({color:new ee(16777215)})];let m=[15134221,3210255,12860729,16777173,16712446,8230640,15603985,458740,16340742,4709478,3543287,15689147];m.forEach(y=>{let p=new Ke({color:new ee(y)});this.sphereMaterials.push(p)});let x=5;for(let y=0;y<x;y++)m.forEach(p=>{let g=new Ke({color:new ee(p),transparent:!0,opacity:y+1*(1/x)+.2});this.sphereMaterials.push(g)});this.portal=this.engine.model.getObjectByName("portal")}async init(){let{blackMolCount:e,parentCount:t,sphereCount:n,upMolSpawnY:i,whiteMolCount:s}=this,o=this.portal.position;for(let l=0;l<t;l++){let c=new _e;this.spawnCircleParents.push(c),c.position.set(o.x,0,o.z),this.engine.model.add(c);let u=c.clone();u.position.set(o.x,i,o.z),this.upCircleParents.push(u),this.engine.model.add(u);let h=Math.random()*.002+.001;this.parentVelocities.push(h)}for(let l=0;l<n;l++){let c=this.createSphere(),{x:u,y:h,z:d}=this.getRandomCirclePosition();c.position.set(u,h,d);let f=l%this.spawnCircleParents.length;this.spawnCircleParents[f].add(c)}for(let l=0;l<s;l++){let c=this.createWhiteMol(),{x:u,y:h,z:d}=this.getRandomCirclePosition();c.position.set(u,h,d);let f=l%this.spawnCircleParents.length;this.spawnCircleParents[f].add(c)}for(let l=0;l<e;l++){let c=this.createBlackMol(),{x:u,y:h,z:d}=this.getRandomCirclePosition();c.position.set(u,h,d);let f=l%this.spawnCircleParents.length;this.spawnCircleParents[f].add(c)}for(let l=0;l<n/5;l++){let c=this.createSphere(),u=l%this.upCircleParents.length;this.upCircleParents[u].add(c),this.addUpMol(c)}for(let l=0;l<e/7;l++){let c=this.createBlackMol(),u=l%this.upCircleParents.length;this.upCircleParents[u].add(c),this.addUpMol(c)}let a=2;for(let l=0;l<s/7;l++){let c=this.createWhiteMol(a),u=l%this.upCircleParents.length;this.upCircleParents[u].add(c),this.addUpMol(c)}}getRandomCirclePosition(){let{spawnCircleDistance:e,spawnCircleWidth:t,spawnCircleHeight:n,spawnCircleYOffset:i}=this,s=Math.random()*t+e,o=Math.random()*360,a=s*Math.cos(o),l=s*Math.sin(o),c=Math.random()*(n/2)+i;return{x:a,y:c,z:l}}createSphere(e=Math.random()*this.sphereScaleFactor+.05){let t=new Ct(e,32,16),n=Math.floor(Math.random()*30-.001),i=this.sphereMaterials[n];return new Re(t,i)}createBlackMol(){let e=new Ke({color:new ee(0)}),t=new _e,n=new Ct(.5,64,64),i=new Re(n,e),s=Math.random()*.1+.05;i.scale.set(s,s,s),t.add(i);let o=i.position,a=Math.round(Math.random()*5);for(let l=0;l<=a;l++){let c=(Math.random()-.5)*.7,u=(Math.random()-.5)*.7,h=(Math.random()-.5)*.7,d=new S(o.x+c,o.y+u,o.z+h),f=new Re(n,e);f.position.set(d.x,d.y,d.z);let m=Math.random()*.1+.05;f.scale.set(m,m,m);let x=2,y=.005,p=4,g=new On([o,d]),w=new pn(g,x,y,p),v=new Re(w,e);t.add(v),t.add(f)}return this.addRotator(t),t}createWhiteMol(e=5){let t=new Ke({color:new ee(16777215)}),n=new Ct(.3,64,64),i=new _e,s=new Re(n,t),o=Math.random()*.1+.05;s.scale.set(o,o,o),i.add(s);let a=Math.ceil(Math.random()*e),l=s.position;for(let d=0;d<a;d++){let f=(Math.random()-.5)*.5,m=Math.random()*.3+.1,x=(Math.random()-.5)*.5,y=new S(l.x+f,l.y+m,l.z+x),p=new Re(n,t);p.position.set(y.x,y.y,y.z);let g=Math.random()*.1+.05;p.scale.set(g,g,g);let w=2,v=.005,b=4,R=new On([l,y]),_=new pn(R,w,v,b),P=new Re(_,t);i.add(P),i.add(p),l=y}i.position.set(Math.random()*3,Math.random()*3,Math.random()*3);let c=Math.random()*360*(Math.PI/180),u=Math.random()*360*(Math.PI/180),h=Math.random()*360*(Math.PI/180);return i.rotation.set(c,u,h),this.addRotator(i),i}addRotator(e){this.rotators.push({mesh:e,speed:Math.random()*.01,axis:new S(Math.random(),Math.random(),Math.random())})}addUpMol(e){let{upMolTargetPos:t}=this,n={mesh:e,speed:Math.random()*this.molYSpeedMod,target:new S(Math.random()*t-t/2,this.spawnCircleHeight,Math.random()*t-t/2)};this.upMols.push(n)}repositionUpMol(e){let t=e.parent.position;e.position.set(t.x,t.y,0)}render(){let{renderer:e,camera:t,scene:n}=this.engine;this.spawnCircleParents.forEach((s,o)=>{s.rotateY(this.parentVelocities[o])}),this.upCircleParents.forEach((s,o)=>{s.rotateY(this.parentVelocities[o]*5)}),this.rotators.forEach(s=>{s.mesh.rotateOnAxis(s.axis,s.speed)});let i=this.portal.position;this.upMols.forEach(s=>{let{mesh:o,speed:a,target:l}=s;if(o.position.y<this.spawnCircleHeight){let c=o.position.y+a,u=this.spawnCircleHeight-this.upMolSpawnY,h=this.spawnCircleHeight-c,d=u-h,{x:f,z:m}=fl(new S(0,this.upMolSpawnY,0),l,d);o.position.set(f,c,m)}else this.repositionUpMol(o),s.speed=Math.random()*this.molYSpeedMod}),e.render(n,t)}};var ml=class extends Bt{constructor(e){super(e);this.propertyNameMapping={}}load(e,t,n,i){let s=this,o=new pi(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}setPropertyNameMapping(e){this.propertyNameMapping=e}parse(e){function t(f){let m=/ply([\s\S]*)end_header\r?\n/,x="",y=0,p=m.exec(f);p!==null&&(x=p[1],y=new Blob([p[0]]).size);let g={comments:[],elements:[],headerLength:y,objInfo:""},w=x.split(`
`),v;function b(R,_){let P={type:R[0]};return P.type==="list"?(P.name=R[3],P.countType=R[1],P.itemType=R[2]):P.name=R[1],P.name in _&&(P.name=_[P.name]),P}for(let R=0;R<w.length;R++){let _=w[R];if(_=_.trim(),_==="")continue;let P=_.split(/\s+/),k=P.shift();switch(_=P.join(" "),k){case"format":g.format=P[0],g.version=P[1];break;case"comment":g.comments.push(_);break;case"element":v!==void 0&&g.elements.push(v),v={},v.name=P[0],v.count=parseInt(P[1]),v.properties=[];break;case"property":v.properties.push(b(P,d.propertyNameMapping));break;case"obj_info":g.objInfo=_;break;default:console.log("unhandled",k,P)}}return v!==void 0&&g.elements.push(v),g}function n(f,m){switch(m){case"char":case"uchar":case"short":case"ushort":case"int":case"uint":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":return parseInt(f);case"float":case"double":case"float32":case"float64":return parseFloat(f)}}function i(f,m){let x=m.split(/\s+/),y={};for(let p=0;p<f.length;p++)if(f[p].type==="list"){let g=[],w=n(x.shift(),f[p].countType);for(let v=0;v<w;v++)g.push(n(x.shift(),f[p].itemType));y[f[p].name]=g}else y[f[p].name]=n(x.shift(),f[p].type);return y}function s(f,m){let x={indices:[],vertices:[],normals:[],uvs:[],faceVertexUvs:[],colors:[]},y,p=/end_header\s([\s\S]*)$/,g="";(y=p.exec(f))!==null&&(g=y[1]);let w=g.split(`
`),v=0,b=0;for(let R=0;R<w.length;R++){let _=w[R];if(_=_.trim(),_==="")continue;b>=m.elements[v].count&&(v++,b=0);let P=i(m.elements[v].properties,_);a(x,m.elements[v].name,P),b++}return o(x)}function o(f){let m=new Pe;return f.indices.length>0&&m.setIndex(f.indices),m.setAttribute("position",new Ce(f.vertices,3)),f.normals.length>0&&m.setAttribute("normal",new Ce(f.normals,3)),f.uvs.length>0&&m.setAttribute("uv",new Ce(f.uvs,2)),f.colors.length>0&&m.setAttribute("color",new Ce(f.colors,3)),f.faceVertexUvs.length>0&&(m=m.toNonIndexed(),m.setAttribute("uv",new Ce(f.faceVertexUvs,2))),m.computeBoundingSphere(),m}function a(f,m,x){function y(Y){for(let D=0,F=Y.length;D<F;D++){let B=Y[D];if(B in x)return B}return null}let p=y(["x","px","posx"])||"x",g=y(["y","py","posy"])||"y",w=y(["z","pz","posz"])||"z",v=y(["nx","normalx"]),b=y(["ny","normaly"]),R=y(["nz","normalz"]),_=y(["s","u","texture_u","tx"]),P=y(["t","v","texture_v","ty"]),k=y(["red","diffuse_red","r","diffuse_r"]),G=y(["green","diffuse_green","g","diffuse_g"]),C=y(["blue","diffuse_blue","b","diffuse_b"]);if(m==="vertex")f.vertices.push(x[p],x[g],x[w]),v!==null&&b!==null&&R!==null&&f.normals.push(x[v],x[b],x[R]),_!==null&&P!==null&&f.uvs.push(x[_],x[P]),k!==null&&G!==null&&C!==null&&f.colors.push(x[k]/255,x[G]/255,x[C]/255);else if(m==="face"){let Y=x.vertex_indices||x.vertex_index,D=x.texcoord;Y.length===3?(f.indices.push(Y[0],Y[1],Y[2]),D&&D.length===6&&(f.faceVertexUvs.push(D[0],D[1]),f.faceVertexUvs.push(D[2],D[3]),f.faceVertexUvs.push(D[4],D[5]))):Y.length===4&&(f.indices.push(Y[0],Y[1],Y[3]),f.indices.push(Y[1],Y[2],Y[3]))}}function l(f,m,x,y){switch(x){case"int8":case"char":return[f.getInt8(m),1];case"uint8":case"uchar":return[f.getUint8(m),1];case"int16":case"short":return[f.getInt16(m,y),2];case"uint16":case"ushort":return[f.getUint16(m,y),2];case"int32":case"int":return[f.getInt32(m,y),4];case"uint32":case"uint":return[f.getUint32(m,y),4];case"float32":case"float":return[f.getFloat32(m,y),4];case"float64":case"double":return[f.getFloat64(m,y),8]}}function c(f,m,x,y){let p={},g,w=0;for(let v=0;v<x.length;v++)if(x[v].type==="list"){let b=[];g=l(f,m+w,x[v].countType,y);let R=g[0];w+=g[1];for(let _=0;_<R;_++)g=l(f,m+w,x[v].itemType,y),b.push(g[0]),w+=g[1];p[x[v].name]=b}else g=l(f,m+w,x[v].type,y),p[x[v].name]=g[0],w+=g[1];return[p,w]}function u(f,m){let x={indices:[],vertices:[],normals:[],uvs:[],faceVertexUvs:[],colors:[]},y=m.format==="binary_little_endian",p=new DataView(f,m.headerLength),g,w=0;for(let v=0;v<m.elements.length;v++)for(let b=0;b<m.elements[v].count;b++){g=c(p,w,m.elements[v].properties,y),w+=g[1];let R=g[0];a(x,m.elements[v].name,R)}return o(x)}let h,d=this;if(e instanceof ArrayBuffer){let f=kt.decodeText(new Uint8Array(e)),m=t(f);h=m.format==="ascii"?s(f,m):u(e,m)}else h=s(e,t(e));return h}};var gy=`
precision highp float;

uniform float uSize;


void main() {
  gl_PointSize = uSize;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`,xy=`
precision highp float;

uniform vec3 uColor;

void main() {
  vec4 col = vec4(uColor, 1.0);
  gl_FragColor = col;
}
`,gl=class{constructor(e){this.engine=e;let t=["yellow"],{ply:n={}}=e.artifact;this.config={file:e.artifact.slug,materials:t,positionOffset:0,pointSize:2,scaleOffset:.01,...n}}async init(){let{file:e,materials:t,pointSize:n,positionOffset:i,scaleOffset:s}=this.config;this.engine.model=new _e;let o=await new Promise((l,c)=>{let u=new ml,h=`https://static.artificialmuseum.com/ply/${e}.ply`;u.load(h,l,()=>{},c)});o.computeVertexNormals();let a={fragmentShader:xy,vertexShader:gy,depthTest:!1,blending:Mn,uniforms:{uSize:{value:n*Ze.devicePixelRatio,type:"f"}}};this.clouds=t.map((l,c)=>{let u=new mt({...a,uniforms:{...a.uniforms,uColor:{value:new ee(l),type:"f3"}}}),h=new nn(o,u),d=1+c*s;return h.scale.set(d,d,d),h.position.x=c*i,this.engine.model.add(h),h})}};var Js=(r="",e="no")=>r.toLowerCase().includes(e.toLowerCase());var Sh={type:"change"},xl={type:"start"},Th={type:"end"},yl=class extends Jt{constructor(e,t){super();t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new S,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Yn.ROTATE,MIDDLE:Yn.DOLLY,RIGHT:Yn.PAN},this.touches={ONE:Zn.ROTATE,TWO:Zn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",L),this._domElementKeyEvents=A},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Sh),n.update(),s=i.NONE},this.update=function(){let A=new S,V=new ut().setFromUnitVectors(e.up,new S(0,1,0)),Q=V.clone().invert(),re=new S,ce=new ut,be=2*Math.PI;return function(){let He=n.object.position;A.copy(He).sub(n.target),A.applyQuaternion(V),a.setFromVector3(A),n.autoRotate&&s===i.NONE&&k(_()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ot=n.minAzimuthAngle,at=n.maxAzimuthAngle;return isFinite(ot)&&isFinite(at)&&(ot<-Math.PI?ot+=be:ot>Math.PI&&(ot-=be),at<-Math.PI?at+=be:at>Math.PI&&(at-=be),ot<=at?a.theta=Math.max(ot,Math.min(at,a.theta)):a.theta=a.theta>(ot+at)/2?Math.max(ot,a.theta):Math.min(at,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),A.setFromSpherical(a),A.applyQuaternion(Q),He.copy(n.target).add(A),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||re.distanceToSquared(n.object.position)>o||8*(1-ce.dot(n.object.quaternion))>o?(n.dispatchEvent(Sh),re.copy(n.object.position),ce.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",$),n.domElement.removeEventListener("pointerdown",ie),n.domElement.removeEventListener("pointercancel",Se),n.domElement.removeEventListener("wheel",Xe),n.domElement.removeEventListener("pointermove",de),n.domElement.removeEventListener("pointerup",oe),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",L)};let n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},s=i.NONE,o=1e-6,a=new wo,l=new wo,c=1,u=new S,h=!1,d=new j,f=new j,m=new j,x=new j,y=new j,p=new j,g=new j,w=new j,v=new j,b=[],R={};function _(){return 2*Math.PI/60/60*n.autoRotateSpeed}function P(){return Math.pow(.95,n.zoomSpeed)}function k(A){l.theta-=A}function G(A){l.phi-=A}let C=function(){let A=new S;return function(Q,re){A.setFromMatrixColumn(re,0),A.multiplyScalar(-Q),u.add(A)}}(),Y=function(){let A=new S;return function(Q,re){n.screenSpacePanning===!0?A.setFromMatrixColumn(re,1):(A.setFromMatrixColumn(re,0),A.crossVectors(n.object.up,A)),A.multiplyScalar(Q),u.add(A)}}(),D=function(){let A=new S;return function(Q,re){let ce=n.domElement;if(n.object.isPerspectiveCamera){let be=n.object.position;A.copy(be).sub(n.target);let Ye=A.length();Ye*=Math.tan(n.object.fov/2*Math.PI/180),C(2*Q*Ye/ce.clientHeight,n.object.matrix),Y(2*re*Ye/ce.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(C(Q*(n.object.right-n.object.left)/n.object.zoom/ce.clientWidth,n.object.matrix),Y(re*(n.object.top-n.object.bottom)/n.object.zoom/ce.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function F(A){n.object.isPerspectiveCamera?c/=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*A)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(A){n.object.isPerspectiveCamera?c*=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/A)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function O(A){d.set(A.clientX,A.clientY)}function U(A){g.set(A.clientX,A.clientY)}function ne(A){x.set(A.clientX,A.clientY)}function ue(A){f.set(A.clientX,A.clientY),m.subVectors(f,d).multiplyScalar(n.rotateSpeed);let V=n.domElement;k(2*Math.PI*m.x/V.clientHeight),G(2*Math.PI*m.y/V.clientHeight),d.copy(f),n.update()}function q(A){w.set(A.clientX,A.clientY),v.subVectors(w,g),v.y>0?F(P()):v.y<0&&B(P()),g.copy(w),n.update()}function X(A){y.set(A.clientX,A.clientY),p.subVectors(y,x).multiplyScalar(n.panSpeed),D(p.x,p.y),x.copy(y),n.update()}function he(A){A.deltaY<0?B(P()):A.deltaY>0&&F(P()),n.update()}function le(A){let V=!1;switch(A.code){case n.keys.UP:D(0,n.keyPanSpeed),V=!0;break;case n.keys.BOTTOM:D(0,-n.keyPanSpeed),V=!0;break;case n.keys.LEFT:D(n.keyPanSpeed,0),V=!0;break;case n.keys.RIGHT:D(-n.keyPanSpeed,0),V=!0;break}V&&(A.preventDefault(),n.update())}function me(){if(b.length===1)d.set(b[0].pageX,b[0].pageY);else{let A=.5*(b[0].pageX+b[1].pageX),V=.5*(b[0].pageY+b[1].pageY);d.set(A,V)}}function Oe(){if(b.length===1)x.set(b[0].pageX,b[0].pageY);else{let A=.5*(b[0].pageX+b[1].pageX),V=.5*(b[0].pageY+b[1].pageY);x.set(A,V)}}function K(){let A=b[0].pageX-b[1].pageX,V=b[0].pageY-b[1].pageY,Q=Math.sqrt(A*A+V*V);g.set(0,Q)}function Le(){n.enableZoom&&K(),n.enablePan&&Oe()}function we(){n.enableZoom&&K(),n.enableRotate&&me()}function ge(A){if(b.length==1)f.set(A.pageX,A.pageY);else{let Q=se(A),re=.5*(A.pageX+Q.x),ce=.5*(A.pageY+Q.y);f.set(re,ce)}m.subVectors(f,d).multiplyScalar(n.rotateSpeed);let V=n.domElement;k(2*Math.PI*m.x/V.clientHeight),G(2*Math.PI*m.y/V.clientHeight),d.copy(f)}function ye(A){if(b.length===1)y.set(A.pageX,A.pageY);else{let V=se(A),Q=.5*(A.pageX+V.x),re=.5*(A.pageY+V.y);y.set(Q,re)}p.subVectors(y,x).multiplyScalar(n.panSpeed),D(p.x,p.y),x.copy(y)}function Be(A){let V=se(A),Q=A.pageX-V.x,re=A.pageY-V.y,ce=Math.sqrt(Q*Q+re*re);w.set(0,ce),v.set(0,Math.pow(w.y/g.y,n.zoomSpeed)),F(v.y),g.copy(w)}function W(A){n.enableZoom&&Be(A),n.enablePan&&ye(A)}function te(A){n.enableZoom&&Be(A),n.enableRotate&&ge(A)}function ie(A){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(A.pointerId),n.domElement.addEventListener("pointermove",de),n.domElement.addEventListener("pointerup",oe)),xe(A),A.pointerType==="touch"?E(A):Te(A))}function de(A){n.enabled!==!1&&(A.pointerType==="touch"?J(A):Ie(A))}function oe(A){fe(A),b.length===0&&(n.domElement.releasePointerCapture(A.pointerId),n.domElement.removeEventListener("pointermove",de),n.domElement.removeEventListener("pointerup",oe)),n.dispatchEvent(Th),s=i.NONE}function Se(A){fe(A)}function Te(A){let V;switch(A.button){case 0:V=n.mouseButtons.LEFT;break;case 1:V=n.mouseButtons.MIDDLE;break;case 2:V=n.mouseButtons.RIGHT;break;default:V=-1}switch(V){case Yn.DOLLY:if(n.enableZoom===!1)return;U(A),s=i.DOLLY;break;case Yn.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enablePan===!1)return;ne(A),s=i.PAN}else{if(n.enableRotate===!1)return;O(A),s=i.ROTATE}break;case Yn.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enableRotate===!1)return;O(A),s=i.ROTATE}else{if(n.enablePan===!1)return;ne(A),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(xl)}function Ie(A){if(n.enabled!==!1)switch(s){case i.ROTATE:if(n.enableRotate===!1)return;ue(A);break;case i.DOLLY:if(n.enableZoom===!1)return;q(A);break;case i.PAN:if(n.enablePan===!1)return;X(A);break}}function Xe(A){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(A.preventDefault(),n.dispatchEvent(xl),he(A),n.dispatchEvent(Th))}function L(A){n.enabled===!1||n.enablePan===!1||le(A)}function E(A){switch(I(A),b.length){case 1:switch(n.touches.ONE){case Zn.ROTATE:if(n.enableRotate===!1)return;me(),s=i.TOUCH_ROTATE;break;case Zn.PAN:if(n.enablePan===!1)return;Oe(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Zn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Le(),s=i.TOUCH_DOLLY_PAN;break;case Zn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;we(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(xl)}function J(A){switch(I(A),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ge(A),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ye(A),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;W(A),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;te(A),n.update();break;default:s=i.NONE}}function $(A){n.enabled!==!1&&A.preventDefault()}function xe(A){b.push(A)}function fe(A){delete R[A.pointerId];for(let V=0;V<b.length;V++)if(b[V].pointerId==A.pointerId){b.splice(V,1);return}}function I(A){let V=R[A.pointerId];V===void 0&&(V=new j,R[A.pointerId]=V),V.set(A.pageX,A.pageY)}function se(A){let V=A.pointerId===b[0].pointerId?b[1]:b[0];return R[V.pointerId]}n.domElement.addEventListener("contextmenu",$),n.domElement.addEventListener("pointerdown",ie),n.domElement.addEventListener("pointercancel",Se),n.domElement.addEventListener("wheel",Xe,{passive:!1}),this.update()}};var vl=class extends Bt{constructor(e){super(e);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Rh(t)}),this.register(function(t){return new Fh(t)}),this.register(function(t){return new Nh(t)}),this.register(function(t){return new Lh(t)}),this.register(function(t){return new Ch(t)}),this.register(function(t){return new Ph(t)}),this.register(function(t){return new Ih(t)}),this.register(function(t){return new Dh(t)}),this.register(function(t){return new Eh(t)}),this.register(function(t){return new Bh(t)})}load(e,t,n,i){let s=this,o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=kt.extractUrlBase(e),this.manager.itemStart(e);let a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new pi(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s,o={},a={};if(typeof e=="string")s=e;else if(kt.decodeText(new Uint8Array(e,0,4))===Oh){try{o[Ue.KHR_BINARY_GLTF]=new Uh(e)}catch(h){i&&i(h);return}s=o[Ue.KHR_BINARY_GLTF].content}else s=kt.decodeText(new Uint8Array(e));let l=JSON.parse(s);if(l.asset===void 0||l.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Zh(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);a[h.name]=h,o[h.name]=!0}if(l.extensionsUsed)for(let u=0;u<l.extensionsUsed.length;++u){let h=l.extensionsUsed[u],d=l.extensionsRequired||[];switch(h){case Ue.KHR_MATERIALS_UNLIT:o[h]=new Ah;break;case Ue.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:o[h]=new Gh;break;case Ue.KHR_DRACO_MESH_COMPRESSION:o[h]=new Hh(l,this.dracoLoader);break;case Ue.KHR_TEXTURE_TRANSFORM:o[h]=new kh;break;case Ue.KHR_MESH_QUANTIZATION:o[h]=new Vh;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}};function yy(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}var Ue={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"},Eh=class{constructor(e){this.parser=e,this.name=Ue.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],c,u=new ee(16777215);l.color!==void 0&&u.fromArray(l.color);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ts(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new es(u),c.distance=h;break;case"spot":c=new ho(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Ah=class{constructor(){this.name=Ue.KHR_MATERIALS_UNLIT}getMaterialType(){return Ke}extendParams(e,t,n){let i=[];e.color=new ee(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let o=s.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture))}return Promise.all(i)}},Rh=class{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new j(a,a)}return Promise.all(s)}},Lh=class{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[];t.sheenColor=new ee(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}},Ch=class{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}},Ph=class{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ee(a[0],a[1],a[2]),Promise.all(s)}},Ih=class{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},Dh=class{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new ee(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture).then(function(l){l.encoding=Ot})),Promise.all(s)}},Fh=class{constructor(e){this.parser=e,this.name=Ue.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],o=n.images[s.source],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,o,a)}},Nh=class{constructor(e){this.parser=e,this.name=Ue.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Bh=class{constructor(e){this.name=Ue.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return Promise.all([s,o.ready]).then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new ArrayBuffer(u*h),f=new Uint8Array(a[0],l,c);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})}else return null}},Oh="glTF",Ks=12,zh={JSON:1313821514,BIN:5130562},Uh=class{constructor(e){this.name=Ue.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ks);if(this.header={magic:kt.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Oh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let n=this.header.length-Ks,i=new DataView(e,Ks),s=0;for(;s<n;){let o=i.getUint32(s,!0);s+=4;let a=i.getUint32(s,!0);if(s+=4,a===zh.JSON){let l=new Uint8Array(e,Ks+s,o);this.content=kt.decodeText(l)}else if(a===zh.BIN){let l=Ks+s;this.body=e.slice(l,l+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Hh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ue.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=_l[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=_l[u]||u.toLowerCase();if(o[u]!==void 0){let d=n.accessors[e.attributes[u]],f=Qs[d.componentType];c[h]=f,l[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(d){for(let f in d.attributes){let m=d.attributes[f],x=l[f];x!==void 0&&(m.normalized=x)}h(d)},a,c)})})}},kh=class{constructor(){this.name=Ue.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Co=class extends jt{constructor(e){super();this.isGLTFSpecularGlossinessMaterial=!0;let t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),n=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),i=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	texelSpecular = sRGBToLinear( texelSpecular );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),s=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),o=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),a={specular:{value:new ee().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=a,this.onBeforeCompile=function(l){for(let c in a)l.uniforms[c]=a[c];l.fragmentShader=l.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",n).replace("#include <roughnessmap_fragment>",i).replace("#include <metalnessmap_fragment>",s).replace("#include <lights_physical_fragment>",o)},Object.defineProperties(this,{specular:{get:function(){return a.specular.value},set:function(l){a.specular.value=l}},specularMap:{get:function(){return a.specularMap.value},set:function(l){a.specularMap.value=l,l?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return a.glossiness.value},set:function(l){a.glossiness.value=l}},glossinessMap:{get:function(){return a.glossinessMap.value},set:function(l){a.glossinessMap.value=l,l?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}},Gh=class{constructor(){this.name=Ue.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity","refractionRatio"]}getMaterialType(){return Co}extendParams(e,t,n){let i=t.extensions[this.name];e.color=new ee(1,1,1),e.opacity=1;let s=[];if(Array.isArray(i.diffuseFactor)){let o=i.diffuseFactor;e.color.fromArray(o),e.opacity=o[3]}if(i.diffuseTexture!==void 0&&s.push(n.assignTexture(e,"map",i.diffuseTexture)),e.emissive=new ee(0,0,0),e.glossiness=i.glossinessFactor!==void 0?i.glossinessFactor:1,e.specular=new ee(1,1,1),Array.isArray(i.specularFactor)&&e.specular.fromArray(i.specularFactor),i.specularGlossinessTexture!==void 0){let o=i.specularGlossinessTexture;s.push(n.assignTexture(e,"glossinessMap",o)),s.push(n.assignTexture(e,"specularMap",o))}return Promise.all(s)}createMaterial(e){let t=new Co(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=1,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=Sn,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t.refractionRatio=.98,t}},Vh=class{constructor(){this.name=Ue.KHR_MESH_QUANTIZATION}},kn=class extends Yt{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}};kn.prototype.beforeStart_=kn.prototype.copySampleValue_;kn.prototype.afterEnd_=kn.prototype.copySampleValue_;kn.prototype.interpolate_=function(r,e,t,n){let i=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=o*2,l=o*3,c=n-e,u=(t-e)/c,h=u*u,d=h*u,f=r*l,m=f-l,x=-2*d+3*h,y=d-h,p=1-x,g=y-h+u;for(let w=0;w!==o;w++){let v=s[m+w+o],b=s[m+w+a]*c,R=s[f+w+o],_=s[f+w]*c;i[w]=p*v+g*b+x*R+y*_}return i};var vy=new ut,Wh=class extends kn{interpolate_(e,t,n,i){let s=super.interpolate_(e,t,n,i);return vy.fromArray(s).normalize().toArray(s),s}},vn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Qs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},qh={9728:Qe,9729:nt,9984:ar,9985:Xo,9986:lr,9987:Kn},Xh={33071:At,33648:us,10497:Jn},jh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},_l={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Gn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},_y={CUBICSPLINE:void 0,LINEAR:ei,STEP:bi},wl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function wy(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new jt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:sn})),r.DefaultMaterial}function er(r,e,t){for(let n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function xi(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function My(r,e,t){let n=!1,i=!1;for(let a=0,l=e.length;a<l;a++){let c=e[a];if(c.POSITION!==void 0&&(n=!0),c.NORMAL!==void 0&&(i=!0),n&&i)break}if(!n&&!i)return Promise.resolve(r);let s=[],o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];if(n){let u=c.POSITION!==void 0?t.getDependency("accessor",c.POSITION):r.attributes.position;s.push(u)}if(i){let u=c.NORMAL!==void 0?t.getDependency("accessor",c.NORMAL):r.attributes.normal;o.push(u)}}return Promise.all([Promise.all(s),Promise.all(o)]).then(function(a){let l=a[0],c=a[1];return n&&(r.morphAttributes.position=l),i&&(r.morphAttributes.normal=c),r.morphTargetsRelative=!0,r})}function by(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Sy(r){let e=r.extensions&&r.extensions[Ue.KHR_DRACO_MESH_COMPRESSION],t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Yh(e.attributes):t=r.indices+":"+Yh(r.attributes)+":"+r.mode,t}function Yh(r){let e="",t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Ml(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}var Zh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new yy,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.textureCache={},this.nodeNamesUsed={},typeof createImageBitmap!="undefined"&&/Firefox/.test(navigator.userAgent)===!1?this.textureLoader=new mo(this.options.manager):this.textureLoader=new Un(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new pi(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};er(s,a,i),xi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),s=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this.loadNode(t);break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this.loadAnimation(t);break;case"camera":i=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ue.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,o){n.load(kt.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0)return Promise.resolve(null);let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){let a=o[0],l=jh[i.type],c=Qs[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,x,y;if(f&&f!==h){let p=Math.floor(d/f),g="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,w=t.cache.get(g);w||(x=new c(a,p*f,i.count*f/u),w=new Fn(x,f/u),t.cache.add(g,w)),y=new Nn(w,l,d%f/u,m)}else a===null?x=new c(i.count*l):x=new c(a,d,i.count*l),y=new je(x,l,m);if(i.sparse!==void 0){let p=jh.SCALAR,g=Qs[i.sparse.indices.componentType],w=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,b=new g(o[1],w,i.sparse.count*p),R=new c(o[2],v,i.sparse.count*l);a!==null&&(y=new je(y.array.slice(),y.itemSize,y.normalized));for(let _=0,P=b.length;_<P;_++){let k=b[_];if(y.setX(k,R[_*l]),l>=2&&y.setY(k,R[_*l+1]),l>=3&&y.setZ(k,R[_*l+2]),l>=4&&y.setW(k,R[_*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return y})}loadTexture(e){let t=this.json,n=this.options,i=t.textures[e],s=t.images[i.source],o=this.textureLoader;if(s.uri){let a=n.manager.getHandler(s.uri);a!==null&&(o=a)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let i=this,s=this.json,o=this.options,a=s.textures[e],l=(t.uri||t.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=self.URL||self.webkitURL,u=t.uri||"",h=!1;if(t.bufferView!==void 0)u=i.getDependency("bufferView",t.bufferView).then(function(f){h=!0;let m=new Blob([f],{type:t.mimeType});return u=c.createObjectURL(m),u});else if(t.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let d=Promise.resolve(u).then(function(f){return new Promise(function(m,x){let y=m;n.isImageBitmapLoader===!0&&(y=function(p){let g=new ct(p);g.needsUpdate=!0,m(g)}),n.load(kt.resolveURL(f,o.path),y,void 0,x)})}).then(function(f){h===!0&&c.revokeObjectURL(u),f.flipY=!1,a.name&&(f.name=a.name);let x=(s.samplers||{})[a.sampler]||{};return f.magFilter=qh[x.magFilter]||nt,f.minFilter=qh[x.minFilter]||Kn,f.wrapS=Xh[x.wrapS]||Jn,f.wrapT=Xh[x.wrapT]||Jn,i.associations.set(f,{textures:e}),f}).catch(function(){return console.error("THREE.GLTFLoader: Couldn't load texture",u),null});return this.textureCache[l]=d,d}assignTexture(e,t,n){let i=this;return this.getDependency("texture",n.index).then(function(s){if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),i.extensions[Ue.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Ue.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let a=i.associations.get(s);s=i.extensions[Ue.KHR_TEXTURE_TRANSFORM].extendTexture(s,o),i.associations.set(s,a)}}return e[t]=s,s})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Ns,dt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new tn,dt.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";n.isGLTFSpecularGlossinessMaterial&&(a+="specular-glossiness:"),i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return jt}loadMaterial(e){let t=this,n=this.json,i=this.extensions,s=n.materials[e],o,a={},l=s.extensions||{},c=[];if(l[Ue.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){let h=i[Ue.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else if(l[Ue.KHR_MATERIALS_UNLIT]){let h=i[Ue.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{let h=s.pbrMetallicRoughness||{};if(a.color=new ee(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;a.color.fromArray(d),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=xt);let u=s.alphaMode||wl.OPAQUE;if(u===wl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.format=Vt,a.transparent=!1,u===wl.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Ke&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new j(1,1),s.normalTexture.scale!==void 0)){let h=s.normalTexture.scale;a.normalScale.set(h,h)}return s.occlusionTexture!==void 0&&o!==Ke&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Ke&&(a.emissive=new ee().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&o!==Ke&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture)),Promise.all(c).then(function(){let h;return o===Co?h=i[Ue.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(a):h=new o(a),s.name&&(h.name=s.name),h.map&&(h.map.encoding=Ot),h.emissiveMap&&(h.emissiveMap.encoding=Ot),xi(h,s),t.associations.set(h,{materials:e}),s.extensions&&er(i,h,s),h})}createUniqueName(e){let t=ze.sanitizeNodeName(e||""),n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[Ue.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Jh(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=Sy(c),h=i[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[Ue.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Jh(new Pe,c,t),i[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?wy(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,m=u.length;f<m;f++){let x=u[f],y=o[f],p,g=c[f];if(y.mode===vn.TRIANGLES||y.mode===vn.TRIANGLE_STRIP||y.mode===vn.TRIANGLE_FAN||y.mode===void 0)p=s.isSkinnedMesh===!0?new Ps(x,g):new Re(x,g),p.isSkinnedMesh===!0&&!p.geometry.attributes.skinWeight.normalized&&p.normalizeSkinWeights(),y.mode===vn.TRIANGLE_STRIP?p.geometry=Kh(p.geometry,oc):y.mode===vn.TRIANGLE_FAN&&(p.geometry=Kh(p.geometry,$o));else if(y.mode===vn.LINES)p=new Bn(x,g);else if(y.mode===vn.LINE_STRIP)p=new Zi(x,g);else if(y.mode===vn.LINE_LOOP)p=new Zr(x,g);else if(y.mode===vn.POINTS)p=new nn(x,g);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+y.mode);Object.keys(p.geometry.morphAttributes).length>0&&by(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),xi(p,s),y.extensions&&er(i,p,y),t.assignFinalMaterial(p),h.push(p)}for(let f=0,m=h.length;f<m;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return h[0];let d=new Et;t.associations.set(d,{meshes:e});for(let f=0,m=h.length;f<m;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new ft(gs.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Hi(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),xi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(n):this.getDependency("accessor",t.inverseBindMatrices).then(function(i){return n.inverseBindMatrices=i,n})}loadAnimation(e){let n=this.json.animations[e],i=[],s=[],o=[],a=[],l=[];for(let c=0,u=n.channels.length;c<u;c++){let h=n.channels[c],d=n.samplers[h.sampler],f=h.target,m=f.node!==void 0?f.node:f.id,x=n.parameters!==void 0?n.parameters[d.input]:d.input,y=n.parameters!==void 0?n.parameters[d.output]:d.output;i.push(this.getDependency("node",m)),s.push(this.getDependency("accessor",x)),o.push(this.getDependency("accessor",y)),a.push(d),l.push(f)}return Promise.all([Promise.all(i),Promise.all(s),Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2],f=c[3],m=c[4],x=[];for(let p=0,g=u.length;p<g;p++){let w=u[p],v=h[p],b=d[p],R=f[p],_=m[p];if(w===void 0)continue;w.updateMatrix(),w.matrixAutoUpdate=!0;let P;switch(Gn[_.path]){case Gn.weights:P=hi;break;case Gn.rotation:P=gn;break;case Gn.position:case Gn.scale:default:P=fi;break}let k=w.name?w.name:w.uuid,G=R.interpolation!==void 0?_y[R.interpolation]:ei,C=[];Gn[_.path]===Gn.weights?w.traverse(function(D){D.morphTargetInfluences&&C.push(D.name?D.name:D.uuid)}):C.push(k);let Y=b.array;if(b.normalized){let D=Ml(Y.constructor),F=new Float32Array(Y.length);for(let B=0,O=Y.length;B<O;B++)F[B]=Y[B]*D;Y=F}for(let D=0,F=C.length;D<F;D++){let B=new P(C[D]+"."+Gn[_.path],v.array,Y,G);R.interpolation==="CUBICSPLINE"&&(B.createInterpolant=function(U){let ne=this instanceof gn?Wh:kn;return new ne(this.times,this.values,this.getValueSize()/3,U)},B.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),x.push(B)}}let y=n.name?n.name:"animation_"+e;return new Ws(y,void 0,x)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(!!a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this.extensions,i=this,s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"";return function(){let a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),Promise.all(a)}().then(function(a){let l;if(s.isBone===!0?l=new Is:a.length>1?l=new Et:a.length===1?l=a[0]:l=new _e,l!==a[0])for(let c=0,u=a.length;c<u;c++)l.add(a[c]);if(s.name&&(l.userData.name=s.name,l.name=o),xi(l,s),s.extensions&&er(n,l,s),s.matrix!==void 0){let c=new pe;c.fromArray(s.matrix),l.applyMatrix4(c)}else s.translation!==void 0&&l.position.fromArray(s.translation),s.rotation!==void 0&&l.quaternion.fromArray(s.rotation),s.scale!==void 0&&l.scale.fromArray(s.scale);return i.associations.has(l)||i.associations.set(l,{}),i.associations.get(l).nodes=e,l})}loadScene(e){let t=this.json,n=this.extensions,i=this.json.scenes[e],s=this,o=new Et;i.name&&(o.name=s.createUniqueName(i.name)),xi(o,i),i.extensions&&er(n,o,i);let a=i.nodes||[],l=[];for(let c=0,u=a.length;c<u;c++)l.push($h(a[c],o,t,s));return Promise.all(l).then(function(){let c=u=>{let h=new Map;for(let[d,f]of s.associations)(d instanceof dt||d instanceof ct)&&h.set(d,f);return u.traverse(d=>{let f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=c(o),o})}};function $h(r,e,t,n){let i=t.nodes[r];return n.getDependency("node",r).then(function(s){if(i.skin===void 0)return s;let o;return n.getDependency("skin",i.skin).then(function(a){o=a;let l=[];for(let c=0,u=o.joints.length;c<u;c++)l.push(n.getDependency("node",o.joints[c]));return Promise.all(l)}).then(function(a){return s.traverse(function(l){if(!l.isMesh)return;let c=[],u=[];for(let h=0,d=a.length;h<d;h++){let f=a[h];if(f){c.push(f);let m=new pe;o.inverseBindMatrices!==void 0&&m.fromArray(o.inverseBindMatrices.array,h*16),u.push(m)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',o.joints[h])}l.bind(new Ds(c,u),l.matrixWorld)}),s})}).then(function(s){e.add(s);let o=[];if(i.children){let a=i.children;for(let l=0,c=a.length;l<c;l++){let u=a[l];o.push($h(u,s,t,n))}}return Promise.all(o)})}function Ty(r,e,t){let n=e.attributes,i=new Pt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new S(l[0],l[1],l[2]),new S(c[0],c[1],c[2])),a.normalized){let u=Ml(Qs[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let a=new S,l=new S;for(let c=0,u=s.length;c<u;c++){let h=s[c];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let x=Ml(Qs[d.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;let o=new an;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Jh(r,e,t){let n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(let o in n){let a=_l[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){let o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return xi(r,e),Ty(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?My(r,e.targets,t):r})}function Kh(r,e){let t=r.getIndex();if(t===null){let o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=t.count-2,i=[];if(e===$o)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2==0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=r.clone();return s.setIndex(i),s}var Po=class extends Re{constructor(e,t={},n){super(e);this.type="Reflector",this.XR=n.XR,this.skybox=n.skybox,this.shadowPlane=n.shadowPlane;let i=this,{textureHeight:s=512,textureWidth:o=512,clipBias:a=0,fragmentShader:l=Ay,vertexShader:c=Ey}=t,u=t.color!==void 0?new ee(t.color):new ee(8355711),h=new Ut,d=new S,f=new S,m=new S,x=new pe,y=new S(0,0,-1),p=new We,g=new S,w=new S,v=new We,b=new pe,R=new ft,_={minFilter:nt,magFilter:nt,format:Vt},P=new Rt(o,s,_);(!gs.isPowerOfTwo(o)||!gs.isPowerOfTwo(s))&&(P.texture.generateMipmaps=!1);let k={tDiffuse:{value:P.texture},color:{value:u},textureMatrix:{value:b}},G=new mt({uniforms:k,fragmentShader:l,vertexShader:c});this.material=G,this.onBeforeRender=(C,Y,D)=>{if(f.setFromMatrixPosition(i.matrixWorld),m.setFromMatrixPosition(D.matrixWorld),x.extractRotation(i.matrixWorld),d.set(0,0,1),d.applyMatrix4(x),g.subVectors(f,m),g.dot(d)>0)return;g.reflect(d).negate(),g.add(f),x.extractRotation(D.matrixWorld),y.set(0,0,-1),y.applyMatrix4(x),y.add(m),w.subVectors(f,y),w.reflect(d).negate(),w.add(f),R.position.copy(g),R.up.set(0,1,0),R.up.applyMatrix4(x),R.up.reflect(d),R.lookAt(w),R.far=D.far,R.updateMatrixWorld(),R.projectionMatrix.copy(D.projectionMatrix),b.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),b.multiply(R.projectionMatrix),b.multiply(R.matrixWorldInverse),b.multiply(i.matrixWorld),h.setFromNormalAndCoplanarPoint(d,f),h.applyMatrix4(R.matrixWorldInverse),p.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let F=R.projectionMatrix;v.x=(Math.sign(p.x)+F.elements[8])/F.elements[0],v.y=(Math.sign(p.y)+F.elements[9])/F.elements[5],v.z=-1,v.w=(1+F.elements[10])/F.elements[14],p.multiplyScalar(2/p.dot(v)),F.elements[2]=p.x,F.elements[6]=p.y,F.elements[10]=p.z+1-a,F.elements[14]=p.w,P.texture.encoding=C.outputEncoding,i.visible=!1;let B=C.getRenderTarget(),O=C.xr.enabled,U=C.shadowMap.autoUpdate;C.xr.enabled=!1,C.shadowMap.autoUpdate=!1,C.setRenderTarget(P),C.state.buffers.depth.setMask(!0),C.autoClear===!1&&C.clear(),this.XR&&this.skybox&&(this.skybox.visible=!0);let ne=!1;this.shadowPlane?.visible&&(this.shadowPlane.visible=!1,ne=!0),C.render(Y,R),C.xr.enabled=O,C.shadowMap.autoUpdate=U,C.setRenderTarget(B),this.XR&&this.skybox&&(this.skybox.visible=!1),ne&&(this.shadowPlane.visible=!0);let ue=D.viewport;ue!==void 0&&C.state.viewport(ue),i.visible=!0},this.getRenderTarget=()=>P}};Po.prototype.isReflector=!0;var Ey=`
uniform mat4 textureMatrix;
varying vec4 vUv;

#include <common>
#include <logdepthbuf_pars_vertex>

void main() {
  vUv = textureMatrix * vec4( position, 1.0 );

  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

  #include <logdepthbuf_vertex>
}`,Ay=`
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
`;var bl=class{constructor(e){this.canvas=ve.create("canvas",{width:Ze.innerWidth,height:Ze.innerHeight,id:"recorder-canvas"}),this.context=this.canvas.getContext("2d"),this.refSpace=e.refSpace,this.contextXR=e.renderer.domElement.getContext("webgl2"),this.artifact=e.artifact}async start(){if(!this.canvas)return;let e=this.canvas.captureStream(),t=[],n="video/webm",i=new Ze.MediaRecorder(e,{mimeType:n});this.recorder=i;let s=o=>t.push(o.data);i.ondataavailable=s,i.start(),console.log(i.state),i.onstop=()=>{let o=new Blob(t,{type:"video/webm"});this.save(o)},i.onerror=o=>{console.error(o),this.recorder=!1}}save(e){let t=new Date,n=t.getFullYear(),i=t.getMonth()+1,s=t.getDate(),o=t.getHours(),a=t.getMinutes(),l=t.getSeconds(),c=`${s}-${i}-${n}-${o}-${a}-${l}`,{artifact:u}=this,h={href:Ze.URL.createObjectURL(e),download:`artificial-museum-recording-${u.slug}-${c}.webm`,innerText:"Download Screen Capture"};console.log("saving",h.download),console.log(`Recorded ${e.size} bytes of ${e.type} media.`);let d=ve.create("a",h);d.click(),ve.remove(d),Ze.URL.revokeObjectURL(h.href),this.recorder=!1}stop(){this.recorder&&this.recorder.state==="recording"&&(this.recorder.stop(),console.log("stop recording"))}remove(){this.stop(),ve.remove(this.canvas),this.canvas=null}render(e,t){if(t&&this.canvas){let u=function({gl:v,object:b,background:R,width:_,height:P}){let k=_*P,G=new Uint8Array(k*4);for(let Y=0;Y<k;Y++){let[D,F,B,O]=c(b,Y);D===0&&F===0&&B===0&&([D,F,B,O]=c(R,Y));let U=a(Y,colorCount),ne=a(Y+1,colorCount),ue=a(Y+2,colorCount),q=a(Y+3,colorCount);G[U]=D,G[ne]=F,G[ue]=B,G[q]=O}let C=v.createImageData(_,P);C.data.set(G),v.putImageData(C,0,0)},n=new XRWebGLBinding(t.session,this.contextXR),s=t.getViewerPose(this.refSpace).views.find(v=>v.camera);if(!s)return;let o=n.getCameraImage(s.camera),a=(v,b)=>b-v-1,l=({gl:v,texture:b,width:R,height:_})=>{let P=v.getParameter(v.FRAMEBUFFER_BINDING),k=new Uint8Array(R*_*4);v.readPixels(0,0,R,_,v.RGBA,v.UNSIGNED_BYTE,k);let G=v.createFramebuffer();v.bindFramebuffer(v.FRAMEBUFFER,G),v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,b,0);let C=new Uint8Array(R*_*4);return v.readPixels(0,0,R,_,v.RGBA,v.UNSIGNED_BYTE,C),v.deleteFramebuffer(G),v.bindFramebuffer(v.FRAMEBUFFER,P),{background:C,object:k}},c=(v,b)=>[v[b],v[b+1],v[b+2],v[b+3]],h=performance.now(),d=Ze.innerWidth,f=Ze.innerHeight;console.log(d,f);let{object:m,background:x}=l({gl:this.contextXR,texture:o,width:d,height:f}),y=performance.now();u({gl:this.context,object:m,background:x,width:d,height:f});let p=performance.now(),g=y-h,w=p-h;console.log(`took ${w}, imagedata ${g}, paint: ${p-y} `)}}};var Qh=class{constructor({artifact:e,preload:t,XR:n}){this.XR=n,this.artifact=e,this.preload=t;let{type:i=gt.HIT}=e;this.type=i,this.clock=new yo,this.scene=new As,this.onResize=this.onResize.bind(this),this.render=this.render.bind(this),this.initFallbackSession=this.initFallbackSession.bind(this),this.toggleAnimations=this.toggleAnimations.bind(this),this.endSession=this.endSession.bind(this)}async init(){let{artifact:e,scene:t,type:n,XR:i}=this,s=Ze.innerWidth/Ze.innerHeight;this.camera=new ft(nr.fov,s,nr.near,nr.far),this.camera.updateProjectionMatrix(),t.add(this.camera);let o=new qe({antialias:!0,alpha:!0});this.renderer=o,o.setPixelRatio(Ze.devicePixelRatio),o.domElement.id=Oo,o.physicallyCorrectLights=!0,o.outputEncoding=Ot,o.toneMappingExposure=1,e.shadow!==!1&&(o.shadowMap.enabled=!0,o.shadowMap.type=Ho);let[a,l,c]=await Promise.all([await this.appendAudio(),await this.appendVideo(),await this.addSkybox()]);if(this.audioElement=a,this.videoElement=l,this.skybox=c,e.hideLight||this.addLights(),await this.loadModel(),this.addVideoTrigger(),o.setSize(Ze.innerWidth,Ze.innerHeight),ve.append(o.domElement,`#${sr}`),this.hud=new zo(this),this.glow(),this.clip(),this.nosort(),this.mirror(),i)try{let u=o.xr.getController(0);if(this.controller=u,!e.hideLight&&e.shadow!==!1&&this.addShadowPlane(),this.isHittestScene())n!==gt.FLOAT&&this.spawnReticle(),ve.on(u,"select",()=>{if(this.justUnspawned)return;let h=!1;this.spawnModel(h),e.clickable?this.hud.showAnimToggler(this.toggleAnimations):this.hud.hideAnimToggler()}),e.clickable||this.hud.hideAnimToggler();else throw new Error(`Unknown scene type ${n}`);t.add(u),this.initScene=async()=>{let h,d=["hit-test","dom-overlay"];return ve.hide("#Locator"),h=await Ze.NAV.xr.requestSession("immersive-ar",{requiredFeatures:d,domOverlay:{root:ve("#hud")}}),ve.on(h,"end",()=>{this.endSession()}),this.hud.addSession(h),this.refSpace=await h.requestReferenceSpace("viewer"),this.renderer.xr.enabled=!0,this.renderer.xr.setReferenceSpaceType("local"),await this.renderer.xr.setSession(h),h.initFallbackSession=this.initFallbackSession.bind(this),h}}catch{this.initScene=this.initFallbackSession}else this.initScene=this.initFallbackSession;return ve.on(Ze,"resize",this.onResize),this.onResize(),o.setAnimationLoop(this.render),this}onResize(){let{innerWidth:e,innerHeight:t}=Ze;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}addLights(){let e=new ts(yi.directionalColor,yi.directionalIntensity);e.position.set(...yi.directionalPosition),e.castShadow=!0,this.artifact.shadow!==!1&&(e.shadow.mapSize.width=512,e.shadow.mapSize.height=512,e.shadow.camera.near=1,e.shadow.camera.far=50),this.directionalLight=e,this.scene.add(e),this.ambientLight=new fo(yi.ambientColor,yi.ambientIntensity),this.scene.add(this.ambientLight)}addShadowPlane(){let e=new dn(200,200,32,32),t=new lo;t.opacity=Pl;let n=new Re(e,t);n.receiveShadow=!0,n.lookAt(0,100,0),n.position.set(0,0,0),this.shadowPlane=n}spawnReticle(){let e=new Ki(.15,.2,32).rotateX(-M.PI/2),t=new Ke;this.reticle=new Re(e,t),this.reticle.matrixAutoUpdate=!1,this.reticle.visible=!1,this.scene.add(this.reticle)}glow(){let{glow:e}=this.artifact;e&&this.model.traverse(t=>{if(Js(t.name,"glow")){let n=lt.bool(e)?238:e,i=new Ke({color:n,side:xt,blending:Mn,transparent:!0});t.material=i}})}nosort(){this.artifact.nosort&&(this.renderer.sortObjects=!1)}clip(){let{model:e,artifact:{clip:t,clipSide:n}}=this;e&&t&&this.model.traverse(i=>{Js(i.name,"clip")&&(i.material.colorWrite=!1,i.castShadow=!1,i.receiveShadow=!1,n==="back"?i.material.side=tt:n==="double"&&(i.material.side=xt))})}mirror(){let{mirrors:e}=this.artifact;if(!e||!e.length)return;let t=Ze.devicePixelRatio,n=Ze.innerWidth*t,i=Ze.innerHeight*t;this.mirrors=e.map(s=>{let{clipBias:o=.003,color:a=7829367,type:l,params:c=[4,32],rotation:u={},position:h={}}=s,d;l===rs.CIRCLE?d=new Bs(...c):l===rs.RING?d=new Ki(...c):l===rs.BOX?d=new Kt(...c):l===rs.SPHERE?d=new Ct(...c):d=new dn(...c);let f=new Po(d,{clipBias:o,textureWidth:n,textureHeight:i,color:a},this);{let{x:m,y:x,z:y}=u;m&&f.rotateX(m),x&&f.rotateY(x),y&&f.rotateZ(y)}{let{x:m,y:x,z:y}=h;m&&f.position.setX(m),x&&f.position.setY(x),y&&f.position.setZ(y)}return this.model.add(f),f})}async addSkybox(){let{artifact:e,preload:t,renderer:n,scene:i,XR:s}=this,{city:o,light:a,sky:l,slug:c}=e,u=l;l===!1?u="default":l||(u=c),u=`${o}/${u}`;let h="jpg";Ze.SUPPORTS.WEBP&&(h="webp");let d=Il,f=e?.skySphere;lt.arr(f)&&f.length&&(d=f);let m=new Ct(...d);e.scaleSky!==!1&&m.scale(-1,1,1);let x=`https://static.artificialmuseum.com/${Dl}/${u}.${h}`,y=await cl({file:x,preload:t}),p=new Nr(n);p.compileEquirectangularShader();let g=p.fromEquirectangular(y).texture;p.dispose();let w=new Ke({map:y}),v=new Re(m,w);return v.visible=!s,i.add(v),a!==!1&&(i.environment=g),v}appendAudio(){let{slug:e,audio:t}=this.artifact;if(!t)return!1;let n=`https://media.artificialmuseum.com/audio/${t===!0?e:t}`;this.listener=new Xs,this.camera.add(this.listener),ve.remove(`#${ir}`);let i=ve.create("audio",{id:ir,loop:!0,crossorigin:"anonymous"});["ogg","mp4","mp3"].forEach(a=>{ve.create("source",{src:`${n}.${a}?v=${Fo}`,type:`audio/${a}`,parent:i})}),ve.append(i);let{duration:o}=i;if(lt.num(o)&&o>0)return i;{let a="canplaythrough";return Do&&(a="loadedmetadata"),new Promise(l=>{ve.on(i,a,c=>l(c.target))})}}appendVideo(){let{slug:e,video:t}=this.artifact;if(!t)return!1;let n=t===!0?e:t,i=ve.create("video",{id:Bo,loop:!0,playsinline:!0,preload:"auto",crossorigin:"anonymous"}),s=`https://media.artificialmuseum.com/video/${n}/${n}`;[["webm","webm"],["mp4","mp4"]].forEach(([l,c])=>{ve.create("source",{src:`${s}.${l}?v=${Fo}`,type:`video/${c}`,parent:i})}),ve.append(i);let{videoWidth:a}=i;if(a>0)return i;{let l="canplaythrough";return Do&&(l="loadedmetadata"),new Promise(c=>{ve.on(i,l,u=>c(u.target))})}}addVideoTrigger(){!this.artifact.triggerVideo||this.model.traverse(e=>{if(this.videoTrigger)return;["videotarget","videotrigger"].some(n=>Js(e.name,n))&&(this.videoTrigger=e,this.videoTrigger.visible=!1)})}startMedia(e=!0){if(this.isMediaPlaying)return;let{actions:t=[],artifact:n,audioElement:i,videoElement:s}=this;i&&!n.triggerAudio&&(e&&(i.currentTime=0),i.play()),s&&!n.triggerVideo&&(e&&(s.currentTime=0),s.play()),t.forEach(o=>o.play()),this.isMediaPlaying=!0}stopMedia(){let{audioElement:e,videoElement:t,actions:n=[]}=this;e&&e.pause(),t&&t.pause(),n&&n.length&&n.forEach(i=>i.stop()),this.isMediaPlaying=!1}toggleAnimations(){this.actions.forEach(e=>e.paused=!e.paused)}initFallbackSession(){this.XR=!1,Ze.B.classList.add(No);let{camera:e,artifact:t,model:n,renderer:i}=this,s=new yl(e,i.domElement);this.controller=s,this.skybox.visible=!0,Object.entries(Cl).forEach(([u,h])=>{s[u]=h});let{cam:o={},orbit:a={},clickable:l}=t;lt.num(a.min)&&(s.minDistance=a.min),lt.num(a.max)&&(s.maxDistance=a.max),lt.num(o.maxPolar)&&(s.maxPolarAngle=Math.PI/o.maxPolar),l?this.hud.showAnimToggler(this.toggleAnimations):this.hud.hideAnimToggler();{let{cam:u={}}=t,h=Fl,{x:d=h.x,y:f=h.y,z:m=h.z}=u;e.position.set(d,f,m)}{let{lookat:u={}}=t,{x:h=0,y:d=0,z:f=0}=u;s.target=new S(h,d,f)}if(n){let{x:u,y:h,z:d}=n.scale,{scale:f}=t;f&&n.scale.set(u*f,h*f,d*f)}s.update();let c=!0;this.spawnModel(c),i.domElement.focus()}async loadModel(){let{artifact:e,preload:t,type:n,XR:i}=this;if(n===gt.POINT_CLOUD)this.model=await To(this);else if(n===gt.DISPLACEMENT)this.model=await Eo(this);else if(n===gt.RECORD3D&&!e.glb)this.model=await $s(this);else if(n===gt.BRAIN_WAVE&&!e.glb){let{BrainwaveScene:s}=yn;this.sceneInstance=new s(this),await this.sceneInstance.init()}else if(n===gt.LATK&&!e.glb){let{LatkScene:s}=yn;this.sceneInstance=new s(this),await this.sceneInstance.init()}else if(n===gt.PLY&&!e.glb){let{PlyScene:s}=yn;this.sceneInstance=new s(this),await this.sceneInstance.init()}else{let{file:s,version:o=1}=e,l=`https://glb.artificialmuseum.com/${s}.glb?v=${o}${i?"&xr=1":""}`,c=new vl,{scene:u,animations:h}=await Zs({loader:c,file:l,preload:t});if(this.model=u,n===gt.RECORD3D&&await $s(this),this.model.traverse(d=>{if(d.isMesh){let{frustumCulled:f,transparent:m,castShadow:x,receiveShadow:y}=e;f===!1&&(d.frustumCulled=!1),m===!1&&(d.material.transparent=!1),Js(d.name,"noshadow")||(d.castShadow=x!==!1,d.receiveShadow=y!==!1),d.material.map&&(d.material.map.anisotropy=16,d.material.map.encoding=Ot),d.material.emissiveMap&&(d.material.emissiveMap.encoding=Ot),(d.material.map||d.material.emissiveMap)&&(d.material.needsUpdate=!0)}else if(d.isLight){let{castShadow:f,shadowBias:m=.01,lightIntensity:x=.01,shadowCam:y={}}=e;if(d.intensity=d.intensity*x,e.shadow!==!1){d.castShadow=f!==!1,d.shadow.bias=m;let{near:p=.1,far:g=30}=y;d.shadow.camera.near=p,d.shadow.camera.far=g}}else d.type==="Bone"&&d.name.toLowerCase()==="parent"&&this.child&&n===gt.RECORD3D&&d.add(this.child)}),this.mixer=null,this.actions=[],h&&h.length){this.mixer=new vo(this.model);let{loop:d,clickable:f}=e;h.forEach(m=>{let x=this.mixer.clipAction(m);d===!1&&(x.clampWhenFinished=!0,x.loop=jo),f&&(x.paused=!0),this.actions.push(x)})}if(n===gt.LIGHT_CUBE){let{LightCubeScene:d}=yn;this.sceneInstance=new d(this)}else if(n===gt.BRAIN_WAVE){let{BrainwaveScene:d}=yn;this.sceneInstance=new d(this),await this.sceneInstance.init(this)}else if(n===gt.LATK){let{LatkScene:d}=yn;this.sceneInstance=new d(this),await this.sceneInstance.init()}else if(n===gt.MOLECULAR_VORTEX){let{MolecularVortex:d}=yn;this.sceneInstance=new d(this),await this.sceneInstance.init()}if(this.videoElement){let d=this.model.getObjectByName("videotarget");if(d){let f=new Ht(this.videoElement),{flipVideo:m,chromaKey:x}=e;m!==!1&&(f.flipY=!1),d.material.map=f,x&&(d.material=Ro({artifact:e,videoTexture:f}))}}n===gt.BUBBLES&&(this.model=await Ao({model:this.model,videoElement:this.videoElement}))}}spawnModel(e){let{camera:t,controller:n,model:i,reticle:s,scene:o,shadowPlane:a,type:l,XR:c,sceneInstance:u={}}=this;if(!c||e){this.applyPositionAndRotation(),o.add(i),this.modelSpawned=!0,u.spawnModel&&u.spawnModel(this),this.startMedia();return}if(this.isHittestScene()){if(!this.modelSpawned&&this.lastHit){s.updateMatrixWorld(),i.position.setFromMatrixPosition(s.matrixWorld),i.updateMatrixWorld();let h=t.position,d=i.position,f=h.x-d.x,m=h.z-d.z,x=Math.atan2(f,m);i.rotation.y=x,a&&(a.position.setFromMatrixPosition(s.matrixWorld),o.add(a)),o.add(i),u?.spawnModel&&u.spawnModel(this),s.visible=!1,this.modelSpawned=!0,this.startMedia()}this.applyPositionAndRotation()}else if(l===gt.FLOAT){let h=i.clone();h.position.set(0,0,-1).applyMatrix4(n.matrixWorld),this.applyPositionAndRotation(),o.add(h),this.startMedia()}}unspawnModel(){this.modelSpawned&&(this.scene.remove(this.model),this.modelSpawned=!1,this.isAnimationRunning=!1,this.stopMedia(),this.sceneInstance?.exit&&this.sceneInstance.exit(),this.justUnspawned=!0,setTimeout(()=>{this.justUnspawned=!1},200))}applyPositionAndRotation(){let{artifact:e,model:t}=this,{pos:n={}}=e;n.x&&(t.position.x+=n.x),n.y&&(t.position.y+=n.y),n.z&&(t.position.z+=n.z)}async endSession(){let{hud:e,renderer:t,scene:n,sceneInstance:i={}}=this;e.hide(),t.setAnimationLoop(null),ve(`#${sr}`).classList.remove("visible"),i.exit&&i.exit(),n&&Ys(n),ve.remove(`#${ir}`),ve.remove(`#${Bo}`);let o=ve(`#${Oo}`);if(o){let a=o.parentNode;a.id===sr?ve.remove(o):ve.remove(a)}if(Ze.B.classList.remove(No),ve(".start-experience-button").forEach(a=>{a.removeAttribute("disabled")}),Ll){Ze.location.reload();return}}isHittestScene(){let e=gt;return[e.HIT,e.FLOAT,e.POINT_CLOUD,e.BUBBLES,e.DISPLACEMENT,e.LIGHT_CUBE,e.RECORD3D,e.BRAIN_WAVE,e.LATK,e.MOLECULAR_VORTEX,e.PLY].includes(this.type)}async render(e,t){let{camera:n,scene:i,sceneInstance:s={}}=this;this.renderHittest(t),this.mixer&&this.mixer.update(this.clock.getDelta()),this.renderVideoTrigger(),s.render?s.render(e,t):this.renderer.render(i,n),this.recorder&&this.recorder.render(e,t)}renderVideoTrigger(){if(!this.modelSpawned||!this.artifact.triggerVideo||!this.videoTrigger)return;let{triggerVideoDistance:e=1.1,triggerAudio:t}=this.artifact,n=this.videoTrigger.position.clone();n.add(this.videoTrigger.parent.position);let i=this.camera.position.distanceToSquared(n),s=e*e;i<=s?this.videoElement.paused&&(this.videoElement.play(),this.videoTrigger.visible=!0,t&&this.audioElement&&this.audioElement.play()):this.videoElement.paused||(this.videoElement.pause(),this.videoTrigger.visible=!1,t&&this.audioElement&&this.audioElement.pause())}async renderHittest(e){let{hud:t,renderer:n,reticle:i,XR:s}=this;if(e&&s){let o=n.xr.getSession();this.hitTestSourceRequested||(this.hitTestSource=await o.requestHitTestSource({space:this.refSpace}),ve.on(o,"end",()=>{this.hitTestSourceRequested=!1,this.hitTestSource=null}),this.hitTestSourceRequested=!0);let a=e.getHitTestResults(this.hitTestSource);if(a.length){if(this.lastHit=a[0],!this.modelSpawned){i.visible=!0;let l=n.xr.getReferenceSpace();i.matrix.fromArray(this.lastHit.getPose(l).transform.matrix)}t.hideElement(t.hittestSearch)}else i.visible=!1,this.modelSpawned||t.showElement(t.hittestSearch),this.lastHit=void 0}}startRecording(){this.recorder||(this.recorder=new bl(this),this.recorder.start())}stopRecording(){!this.recorder||this.recorder.remove()}toggleRecording(){this.recorder?this.stopRecording():this.startRecording()}};export{Qh as ArmEngine};
/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
