(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rl="170",Hh=0,Bl=1,Gh=2,_u=1,xu=2,Nn=3,ei=0,We=1,sn=2,zn=0,Yi=1,Yr=2,zl=3,kl=4,Wh=5,di=100,Xh=101,$h=102,qh=103,Yh=104,jh=200,Zh=201,Kh=202,Jh=203,no=204,io=205,Qh=206,tf=207,ef=208,nf=209,sf=210,rf=211,af=212,of=213,lf=214,so=0,ro=1,ao=2,Ji=3,oo=4,lo=5,co=6,uo=7,yu=0,cf=1,uf=2,Qn=0,Mu=1,bu=2,Su=3,al=4,hf=5,wu=6,Eu=7,Tu=300,Qi=301,ts=302,ho=303,fo=304,ia=306,po=1e3,mi=1001,mo=1002,tn=1003,ff=1004,er=1005,bn=1006,da=1007,gi=1008,Vn=1009,Au=1010,Cu=1011,Vs=1012,ol=1013,xi=1014,Sn=1015,wn=1016,ll=1017,cl=1018,es=1020,Ru=35902,Pu=1021,Lu=1022,vn=1023,Du=1024,Iu=1025,ji=1026,ns=1027,ul=1028,hl=1029,Uu=1030,fl=1031,dl=1033,zr=33776,kr=33777,Vr=33778,Hr=33779,go=35840,vo=35841,_o=35842,xo=35843,yo=36196,Mo=37492,bo=37496,So=37808,wo=37809,Eo=37810,To=37811,Ao=37812,Co=37813,Ro=37814,Po=37815,Lo=37816,Do=37817,Io=37818,Uo=37819,No=37820,Fo=37821,Gr=36492,Oo=36494,Bo=36495,Nu=36283,zo=36284,ko=36285,Vo=36286,df=3200,pf=3201,Fu=0,mf=1,Jn="",Ze="srgb",rs="srgb-linear",sa="linear",oe="srgb",wi=7680,Vl=519,gf=512,vf=513,_f=514,Ou=515,xf=516,yf=517,Mf=518,bf=519,Hl=35044,Gl="300 es",On=2e3,jr=2001;class as{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pa=Math.PI/180,Ho=180/Math.PI;function os(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function Le(i,t,e){return Math.max(t,Math.min(e,i))}function Sf(i,t){return(i%t+t)%t}function ma(i,t,e){return(1-e)*i+e*t}function ms(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ke(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class St{constructor(t=0,e=0){St.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zt{constructor(t,e,n,s,r,o,a,l,c){Zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],v=s[0],p=s[3],m=s[6],M=s[1],w=s[4],y=s[7],W=s[2],C=s[5],I=s[8];return r[0]=o*v+a*M+l*W,r[3]=o*p+a*w+l*C,r[6]=o*m+a*y+l*I,r[1]=c*v+u*M+h*W,r[4]=c*p+u*w+h*C,r[7]=c*m+u*y+h*I,r[2]=f*v+d*M+g*W,r[5]=f*p+d*w+g*C,r[8]=f*m+d*y+g*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=e*h+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=h*v,t[1]=(s*c-u*n)*v,t[2]=(a*n-s*o)*v,t[3]=f*v,t[4]=(u*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=d*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ga.makeScale(t,e)),this}rotate(t){return this.premultiply(ga.makeRotation(-t)),this}translate(t,e){return this.premultiply(ga.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ga=new Zt;function Bu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wf(){const i=Zr("canvas");return i.style.display="block",i}const Wl={};function Ls(i){i in Wl||(Wl[i]=!0,console.warn(i))}function Ef(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Tf(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Af(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Qt={enabled:!0,workingColorSpace:rs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===oe&&(i.r=kn(i.r),i.g=kn(i.g),i.b=kn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===oe&&(i.r=Zi(i.r),i.g=Zi(i.g),i.b=Zi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Jn?sa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Xl=[.64,.33,.3,.6,.15,.06],$l=[.2126,.7152,.0722],ql=[.3127,.329],Yl=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jl=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qt.define({[rs]:{primaries:Xl,whitePoint:ql,transfer:sa,toXYZ:Yl,fromXYZ:jl,luminanceCoefficients:$l,workingColorSpaceConfig:{unpackColorSpace:Ze},outputColorSpaceConfig:{drawingBufferColorSpace:Ze}},[Ze]:{primaries:Xl,whitePoint:ql,transfer:oe,toXYZ:Yl,fromXYZ:jl,luminanceCoefficients:$l,outputColorSpaceConfig:{drawingBufferColorSpace:Ze}}});let Ei;class Cf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ei===void 0&&(Ei=Zr("canvas")),Ei.width=t.width,Ei.height=t.height;const n=Ei.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ei}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Zr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=kn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(kn(e[n]/255)*255):e[n]=kn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Rf=0;class zu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=os(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(va(s[o].image)):r.push(va(s[o]))}else r=va(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function va(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Cf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pf=0;class Fe extends as{constructor(t=Fe.DEFAULT_IMAGE,e=Fe.DEFAULT_MAPPING,n=mi,s=mi,r=bn,o=gi,a=vn,l=Vn,c=Fe.DEFAULT_ANISOTROPY,u=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=os(),this.name="",this.source=new zu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Tu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case po:t.x=t.x-Math.floor(t.x);break;case mi:t.x=t.x<0?0:1;break;case mo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case po:t.y=t.y-Math.floor(t.y);break;case mi:t.y=t.y<0?0:1;break;case mo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=Tu;Fe.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,n=0,s=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,y=(d+1)/2,W=(m+1)/2,C=(u+f)/4,I=(h+v)/4,S=(g+p)/4;return w>y&&w>W?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=C/n,r=I/n):y>W?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=C/s,r=S/s):W<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(W),n=I/r,s=S/r),this.set(n,s,r,e),this}let M=Math.sqrt((p-g)*(p-g)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(h-v)/M,this.z=(f-u)/M,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lf extends as{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Fe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new zu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class on extends Lf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ku extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Df extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ls{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=v;return}if(h!==v||l!==f||c!==d||u!==g){let p=1-a;const m=l*f+c*d+u*g+h*v,M=m>=0?1:-1,w=1-m*m;if(w>Number.EPSILON){const W=Math.sqrt(w),C=Math.atan2(W,m*M);p=Math.sin(p*C)/W,a=Math.sin(a*C)/W}const y=a*M;if(l=l*p+f*y,c=c*p+d*y,u=u*p+g*y,h=h*p+v*y,p===1-a){const W=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=W,c*=W,u*=W,h*=W}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*h+l*d-c*f,t[e+1]=l*g+u*f+c*h-a*d,t[e+2]=c*g+u*d+a*f-l*h,t[e+3]=u*g-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Le(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(t=0,e=0,n=0){B.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _a.copy(this).projectOnVector(t),this.sub(_a)}reflect(t){return this.sub(_a.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _a=new B,Zl=new ls;class bi{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,hn):hn.fromBufferAttribute(r,o),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),nr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),nr.copy(n.boundingBox)),nr.applyMatrix4(t.matrixWorld),this.union(nr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gs),ir.subVectors(this.max,gs),Ti.subVectors(t.a,gs),Ai.subVectors(t.b,gs),Ci.subVectors(t.c,gs),Xn.subVectors(Ai,Ti),$n.subVectors(Ci,Ai),si.subVectors(Ti,Ci);let e=[0,-Xn.z,Xn.y,0,-$n.z,$n.y,0,-si.z,si.y,Xn.z,0,-Xn.x,$n.z,0,-$n.x,si.z,0,-si.x,-Xn.y,Xn.x,0,-$n.y,$n.x,0,-si.y,si.x,0];return!xa(e,Ti,Ai,Ci,ir)||(e=[1,0,0,0,1,0,0,0,1],!xa(e,Ti,Ai,Ci,ir))?!1:(sr.crossVectors(Xn,$n),e=[sr.x,sr.y,sr.z],xa(e,Ti,Ai,Ci,ir))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Rn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Rn=[new B,new B,new B,new B,new B,new B,new B,new B],hn=new B,nr=new bi,Ti=new B,Ai=new B,Ci=new B,Xn=new B,$n=new B,si=new B,gs=new B,ir=new B,sr=new B,ri=new B;function xa(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ri.fromArray(i,r);const a=s.x*Math.abs(ri.x)+s.y*Math.abs(ri.y)+s.z*Math.abs(ri.z),l=t.dot(ri),c=e.dot(ri),u=n.dot(ri);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const If=new bi,vs=new B,ya=new B;class cs{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):If.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vs.subVectors(t,this.center);const e=vs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(vs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ya.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vs.copy(t.center).add(ya)),this.expandByPoint(vs.copy(t.center).sub(ya))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pn=new B,Ma=new B,rr=new B,qn=new B,ba=new B,ar=new B,Sa=new B;class pl{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pn.copy(this.origin).addScaledVector(this.direction,e),Pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ma.copy(t).add(e).multiplyScalar(.5),rr.copy(e).sub(t).normalize(),qn.copy(this.origin).sub(Ma);const r=t.distanceTo(e)*.5,o=-this.direction.dot(rr),a=qn.dot(this.direction),l=-qn.dot(rr),c=qn.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const v=1/u;h*=v,f*=v,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ma).addScaledVector(rr,f),d}intersectSphere(t,e){Pn.subVectors(t.center,this.origin);const n=Pn.dot(this.direction),s=Pn.dot(Pn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Pn)!==null}intersectTriangle(t,e,n,s,r){ba.subVectors(e,t),ar.subVectors(n,t),Sa.crossVectors(ba,ar);let o=this.direction.dot(Sa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qn.subVectors(this.origin,t);const l=a*this.direction.dot(ar.crossVectors(qn,ar));if(l<0)return null;const c=a*this.direction.dot(ba.cross(qn));if(c<0||l+c>o)return null;const u=-a*qn.dot(Sa);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(t,e,n,s,r,o,a,l,c,u,h,f,d,g,v,p){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,h,f,d,g,v,p)}set(t,e,n,s,r,o,a,l,c,u,h,f,d,g,v,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ri.setFromMatrixColumn(t,0).length(),r=1/Ri.setFromMatrixColumn(t,1).length(),o=1/Ri.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,d=o*h,g=a*u,v=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+g*c,e[5]=f-v*c,e[9]=-a*l,e[2]=v-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,g=c*u,v=c*h;e[0]=f+v*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=v+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,g=c*u,v=c*h;e[0]=f-v*a,e[4]=-o*h,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=v-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,d=o*h,g=a*u,v=a*h;e[0]=l*u,e[4]=g*c-d,e[8]=f*c+v,e[1]=l*h,e[5]=v*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,g=a*l,v=a*c;e[0]=l*u,e[4]=v-f*h,e[8]=g*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+g,e[10]=f-v*h}else if(t.order==="XZY"){const f=o*l,d=o*c,g=a*l,v=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+v,e[5]=o*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=a*u,e[10]=v*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Uf,t,Nf)}lookAt(t,e,n){const s=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),Yn.crossVectors(n,qe),Yn.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),Yn.crossVectors(n,qe)),Yn.normalize(),or.crossVectors(qe,Yn),s[0]=Yn.x,s[4]=or.x,s[8]=qe.x,s[1]=Yn.y,s[5]=or.y,s[9]=qe.y,s[2]=Yn.z,s[6]=or.z,s[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],v=n[6],p=n[10],m=n[14],M=n[3],w=n[7],y=n[11],W=n[15],C=s[0],I=s[4],S=s[8],x=s[12],_=s[1],T=s[5],V=s[9],H=s[13],tt=s[2],N=s[6],D=s[10],X=s[14],z=s[3],rt=s[7],it=s[11],at=s[15];return r[0]=o*C+a*_+l*tt+c*z,r[4]=o*I+a*T+l*N+c*rt,r[8]=o*S+a*V+l*D+c*it,r[12]=o*x+a*H+l*X+c*at,r[1]=u*C+h*_+f*tt+d*z,r[5]=u*I+h*T+f*N+d*rt,r[9]=u*S+h*V+f*D+d*it,r[13]=u*x+h*H+f*X+d*at,r[2]=g*C+v*_+p*tt+m*z,r[6]=g*I+v*T+p*N+m*rt,r[10]=g*S+v*V+p*D+m*it,r[14]=g*x+v*H+p*X+m*at,r[3]=M*C+w*_+y*tt+W*z,r[7]=M*I+w*T+y*N+W*rt,r[11]=M*S+w*V+y*D+W*it,r[15]=M*x+w*H+y*X+W*at,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],v=t[7],p=t[11],m=t[15];return g*(+r*l*h-s*c*h-r*a*f+n*c*f+s*a*d-n*l*d)+v*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+p*(+e*c*h-e*a*d-r*o*h+n*o*d+r*a*u-n*c*u)+m*(-s*a*u-e*l*h+e*a*f+s*o*h-n*o*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],v=t[13],p=t[14],m=t[15],M=h*p*c-v*f*c+v*l*d-a*p*d-h*l*m+a*f*m,w=g*f*c-u*p*c-g*l*d+o*p*d+u*l*m-o*f*m,y=u*v*c-g*h*c+g*a*d-o*v*d-u*a*m+o*h*m,W=g*h*l-u*v*l-g*a*f+o*v*f+u*a*p-o*h*p,C=e*M+n*w+s*y+r*W;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/C;return t[0]=M*I,t[1]=(v*f*r-h*p*r-v*s*d+n*p*d+h*s*m-n*f*m)*I,t[2]=(a*p*r-v*l*r+v*s*c-n*p*c-a*s*m+n*l*m)*I,t[3]=(h*l*r-a*f*r-h*s*c+n*f*c+a*s*d-n*l*d)*I,t[4]=w*I,t[5]=(u*p*r-g*f*r+g*s*d-e*p*d-u*s*m+e*f*m)*I,t[6]=(g*l*r-o*p*r-g*s*c+e*p*c+o*s*m-e*l*m)*I,t[7]=(o*f*r-u*l*r+u*s*c-e*f*c-o*s*d+e*l*d)*I,t[8]=y*I,t[9]=(g*h*r-u*v*r-g*n*d+e*v*d+u*n*m-e*h*m)*I,t[10]=(o*v*r-g*a*r+g*n*c-e*v*c-o*n*m+e*a*m)*I,t[11]=(u*a*r-o*h*r-u*n*c+e*h*c+o*n*d-e*a*d)*I,t[12]=W*I,t[13]=(u*v*s-g*h*s+g*n*f-e*v*f-u*n*p+e*h*p)*I,t[14]=(g*a*s-o*v*s-g*n*l+e*v*l+o*n*p-e*a*p)*I,t[15]=(o*h*s-u*a*s+u*n*l-e*h*l-o*n*f+e*a*f)*I,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,v=o*u,p=o*h,m=a*h,M=l*c,w=l*u,y=l*h,W=n.x,C=n.y,I=n.z;return s[0]=(1-(v+m))*W,s[1]=(d+y)*W,s[2]=(g-w)*W,s[3]=0,s[4]=(d-y)*C,s[5]=(1-(f+m))*C,s[6]=(p+M)*C,s[7]=0,s[8]=(g+w)*I,s[9]=(p-M)*I,s[10]=(1-(f+v))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ri.set(s[0],s[1],s[2]).length();const o=Ri.set(s[4],s[5],s[6]).length(),a=Ri.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],fn.copy(this);const c=1/r,u=1/o,h=1/a;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=u,fn.elements[5]*=u,fn.elements[6]*=u,fn.elements[8]*=h,fn.elements[9]*=h,fn.elements[10]*=h,e.setFromRotationMatrix(fn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=On){const l=this.elements,c=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s);let d,g;if(a===On)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===jr)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=On){const l=this.elements,c=1/(e-t),u=1/(n-s),h=1/(o-r),f=(e+t)*c,d=(n+s)*u;let g,v;if(a===On)g=(o+r)*h,v=-2*h;else if(a===jr)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ri=new B,fn=new ae,Uf=new B(0,0,0),Nf=new B(1,1,1),Yn=new B,or=new B,qe=new B,Kl=new ae,Jl=new ls;class xn{constructor(t=0,e=0,n=0,s=xn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Le(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Le(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Kl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Jl.setFromEuler(this),this.setFromQuaternion(Jl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xn.DEFAULT_ORDER="XYZ";class ml{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ff=0;const Ql=new B,Pi=new ls,Ln=new ae,lr=new B,_s=new B,Of=new B,Bf=new ls,tc=new B(1,0,0),ec=new B(0,1,0),nc=new B(0,0,1),ic={type:"added"},zf={type:"removed"},Li={type:"childadded",child:null},wa={type:"childremoved",child:null};class Te extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new B,e=new xn,n=new ls,s=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new Zt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ml,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.premultiply(Pi),this}rotateX(t){return this.rotateOnAxis(tc,t)}rotateY(t){return this.rotateOnAxis(ec,t)}rotateZ(t){return this.rotateOnAxis(nc,t)}translateOnAxis(t,e){return Ql.copy(t).applyQuaternion(this.quaternion),this.position.add(Ql.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(tc,t)}translateY(t){return this.translateOnAxis(ec,t)}translateZ(t){return this.translateOnAxis(nc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?lr.copy(t):lr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(_s,lr,this.up):Ln.lookAt(lr,_s,this.up),this.quaternion.setFromRotationMatrix(Ln),s&&(Ln.extractRotation(s.matrixWorld),Pi.setFromRotationMatrix(Ln),this.quaternion.premultiply(Pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ic),Li.child=t,this.dispatchEvent(Li),Li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zf),wa.child=t,this.dispatchEvent(wa),wa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ln),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ic),Li.child=t,this.dispatchEvent(Li),Li.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,t,Of),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,Bf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Te.DEFAULT_UP=new B(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new B,Dn=new B,Ea=new B,In=new B,Di=new B,Ii=new B,sc=new B,Ta=new B,Aa=new B,Ca=new B,Ra=new ce,Pa=new ce,La=new ce;class gn{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),dn.subVectors(t,e),s.cross(dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){dn.subVectors(s,e),Dn.subVectors(n,e),Ea.subVectors(t,e);const o=dn.dot(dn),a=dn.dot(Dn),l=dn.dot(Ea),c=Dn.dot(Dn),u=Dn.dot(Ea),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,In)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,In.x),l.addScaledVector(o,In.y),l.addScaledVector(a,In.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ra.setScalar(0),Pa.setScalar(0),La.setScalar(0),Ra.fromBufferAttribute(t,e),Pa.fromBufferAttribute(t,n),La.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ra,r.x),o.addScaledVector(Pa,r.y),o.addScaledVector(La,r.z),o}static isFrontFacing(t,e,n,s){return dn.subVectors(n,e),Dn.subVectors(t,e),dn.cross(Dn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),dn.cross(Dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return gn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return gn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return gn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Di.subVectors(s,n),Ii.subVectors(r,n),Ta.subVectors(t,n);const l=Di.dot(Ta),c=Ii.dot(Ta);if(l<=0&&c<=0)return e.copy(n);Aa.subVectors(t,s);const u=Di.dot(Aa),h=Ii.dot(Aa);if(u>=0&&h<=u)return e.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Di,o);Ca.subVectors(t,r);const d=Di.dot(Ca),g=Ii.dot(Ca);if(g>=0&&d<=g)return e.copy(r);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ii,a);const p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return sc.subVectors(r,s),a=(h-u)/(h-u+(d-g)),e.copy(s).addScaledVector(sc,a);const m=1/(p+v+f);return o=v*m,a=f*m,e.copy(n).addScaledVector(Di,o).addScaledVector(Ii,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},cr={h:0,s:0,l:0};function Da(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ot{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Qt.workingColorSpace){if(t=Sf(t,1),e=Le(e,0,1),n=Le(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Da(o,r,t+1/3),this.g=Da(o,r,t),this.b=Da(o,r,t-1/3)}return Qt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ze){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ze){const n=Vu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=kn(t.r),this.g=kn(t.g),this.b=kn(t.b),this}copyLinearToSRGB(t){return this.r=Zi(t.r),this.g=Zi(t.g),this.b=Zi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ze){return Qt.fromWorkingColorSpace(Ue.copy(this),t),Math.round(Le(Ue.r*255,0,255))*65536+Math.round(Le(Ue.g*255,0,255))*256+Math.round(Le(Ue.b*255,0,255))}getHexString(t=Ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Ue.copy(this),e);const n=Ue.r,s=Ue.g,r=Ue.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=Ze){Qt.fromWorkingColorSpace(Ue.copy(this),t);const e=Ue.r,n=Ue.g,s=Ue.b;return t!==Ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(jn),this.setHSL(jn.h+t,jn.s+e,jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(jn),t.getHSL(cr);const n=ma(jn.h,cr.h,e),s=ma(jn.s,cr.s,e),r=ma(jn.l,cr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ue=new Ot;Ot.NAMES=Vu;let kf=0;class us extends as{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=os(),this.name="",this.blending=Yi,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=no,this.blendDst=io,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wi,this.stencilZFail=wi,this.stencilZPass=wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(n.blending=this.blending),this.side!==ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==no&&(n.blendSrc=this.blendSrc),this.blendDst!==io&&(n.blendDst=this.blendDst),this.blendEquation!==di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class _n extends us{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=yu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new B,ur=new St;class we{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Hl,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ur.fromBufferAttribute(this,e),ur.applyMatrix3(t),this.setXY(e,ur.x,ur.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ms(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ke(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ms(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ms(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ms(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ms(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),s=ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),s=ke(s,this.array),r=ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Hl&&(t.usage=this.usage),t}}class Hu extends we{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Gu extends we{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class te extends we{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Vf=0;const nn=new ae,Ia=new Te,Ui=new B,Ye=new bi,xs=new bi,Re=new B;class xe extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=os(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bu(t)?Gu:Hu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,n){return nn.makeTranslation(t,e,n),this.applyMatrix4(nn),this}scale(t,e,n){return nn.makeScale(t,e,n),this.applyMatrix4(nn),this}lookAt(t){return Ia.lookAt(t),Ia.updateMatrix(),this.applyMatrix4(Ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new te(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ye.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];xs.setFromBufferAttribute(a),this.morphTargetsRelative?(Re.addVectors(Ye.min,xs.min),Ye.expandByPoint(Re),Re.addVectors(Ye.max,xs.max),Ye.expandByPoint(Re)):(Ye.expandByPoint(xs.min),Ye.expandByPoint(xs.max))}Ye.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Re.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Re));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Re.fromBufferAttribute(a,c),l&&(Ui.fromBufferAttribute(t,c),Re.add(Ui)),s=Math.max(s,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new we(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let S=0;S<n.count;S++)a[S]=new B,l[S]=new B;const c=new B,u=new B,h=new B,f=new St,d=new St,g=new St,v=new B,p=new B;function m(S,x,_){c.fromBufferAttribute(n,S),u.fromBufferAttribute(n,x),h.fromBufferAttribute(n,_),f.fromBufferAttribute(r,S),d.fromBufferAttribute(r,x),g.fromBufferAttribute(r,_),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const T=1/(d.x*g.y-g.x*d.y);isFinite(T)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(T),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(T),a[S].add(v),a[x].add(v),a[_].add(v),l[S].add(p),l[x].add(p),l[_].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let S=0,x=M.length;S<x;++S){const _=M[S],T=_.start,V=_.count;for(let H=T,tt=T+V;H<tt;H+=3)m(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const w=new B,y=new B,W=new B,C=new B;function I(S){W.fromBufferAttribute(s,S),C.copy(W);const x=a[S];w.copy(x),w.sub(W.multiplyScalar(W.dot(x))).normalize(),y.crossVectors(C,x);const T=y.dot(l[S])<0?-1:1;o.setXYZW(S,w.x,w.y,w.z,T)}for(let S=0,x=M.length;S<x;++S){const _=M[S],T=_.start,V=_.count;for(let H=T,tt=T+V;H<tt;H+=3)I(t.getX(H+0)),I(t.getX(H+1)),I(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new we(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new B,r=new B,o=new B,a=new B,l=new B,c=new B,u=new B,h=new B;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),v=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*u;for(let m=0;m<u;m++)f[g++]=c[d++]}return new we(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new xe,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rc=new ae,ai=new pl,hr=new cs,ac=new B,fr=new B,dr=new B,pr=new B,Ua=new B,mr=new B,oc=new B,gr=new B;class Jt extends Te{constructor(t=new xe,e=new _n){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){mr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Ua.fromBufferAttribute(h,t),o?mr.addScaledVector(Ua,u):mr.addScaledVector(Ua.sub(e),u))}e.add(mr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(r),ai.copy(t.ray).recast(t.near),!(hr.containsPoint(ai.origin)===!1&&(ai.intersectSphere(hr,ac)===null||ai.origin.distanceToSquared(ac)>(t.far-t.near)**2))&&(rc.copy(r).invert(),ai.copy(t.ray).applyMatrix4(rc),!(n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ai)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const p=f[g],m=o[p.materialIndex],M=Math.max(p.start,d.start),w=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let y=M,W=w;y<W;y+=3){const C=a.getX(y),I=a.getX(y+1),S=a.getX(y+2);s=vr(this,m,t,n,c,u,h,C,I,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let p=g,m=v;p<m;p+=3){const M=a.getX(p),w=a.getX(p+1),y=a.getX(p+2);s=vr(this,o,t,n,c,u,h,M,w,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const p=f[g],m=o[p.materialIndex],M=Math.max(p.start,d.start),w=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let y=M,W=w;y<W;y+=3){const C=y,I=y+1,S=y+2;s=vr(this,m,t,n,c,u,h,C,I,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let p=g,m=v;p<m;p+=3){const M=p,w=p+1,y=p+2;s=vr(this,o,t,n,c,u,h,M,w,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Hf(i,t,e,n,s,r,o,a){let l;if(t.side===We?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ei,a),l===null)return null;gr.copy(a),gr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(gr);return c<e.near||c>e.far?null:{distance:c,point:gr.clone(),object:i}}function vr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,fr),i.getVertexPosition(l,dr),i.getVertexPosition(c,pr);const u=Hf(i,t,e,n,fr,dr,pr,oc);if(u){const h=new B;gn.getBarycoord(oc,fr,dr,pr,h),s&&(u.uv=gn.getInterpolatedAttribute(s,a,l,c,h,new St)),r&&(u.uv1=gn.getInterpolatedAttribute(r,a,l,c,h,new St)),o&&(u.normal=gn.getInterpolatedAttribute(o,a,l,c,h,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new B,materialIndex:0};gn.getNormal(fr,dr,pr,f.normal),u.face=f,u.barycoord=h}return u}class ln extends xe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(u,3)),this.setAttribute("uv",new te(h,2));function g(v,p,m,M,w,y,W,C,I,S,x){const _=y/I,T=W/S,V=y/2,H=W/2,tt=C/2,N=I+1,D=S+1;let X=0,z=0;const rt=new B;for(let it=0;it<D;it++){const at=it*T-H;for(let Mt=0;Mt<N;Mt++){const Bt=Mt*_-V;rt[v]=Bt*M,rt[p]=at*w,rt[m]=tt,c.push(rt.x,rt.y,rt.z),rt[v]=0,rt[p]=0,rt[m]=C>0?1:-1,u.push(rt.x,rt.y,rt.z),h.push(Mt/I),h.push(1-it/S),X+=1}}for(let it=0;it<S;it++)for(let at=0;at<I;at++){const Mt=f+at+N*it,Bt=f+at+N*(it+1),U=f+(at+1)+N*(it+1),Z=f+(at+1)+N*it;l.push(Mt,Bt,Z),l.push(Bt,U,Z),z+=6}a.addGroup(d,z,x),d+=z,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ln(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function is(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Oe(i){const t={};for(let e=0;e<i.length;e++){const n=is(i[e]);for(const s in n)t[s]=n[s]}return t}function Gf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Wu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const Hs={clone:is,merge:Oe};var Wf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Se extends us{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wf,this.fragmentShader=Xf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=is(t.uniforms),this.uniformsGroups=Gf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Xu extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=On}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zn=new B,lc=new St,cc=new St;class Ke extends Xu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ho*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(pa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ho*2*Math.atan(Math.tan(pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z)}getViewSize(t,e){return this.getViewBounds(t,lc,cc),e.subVectors(cc,lc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(pa*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ni=-90,Fi=1;class $f extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ke(Ni,Fi,t,e);s.layers=this.layers,this.add(s);const r=new Ke(Ni,Fi,t,e);r.layers=this.layers,this.add(r);const o=new Ke(Ni,Fi,t,e);o.layers=this.layers,this.add(o);const a=new Ke(Ni,Fi,t,e);a.layers=this.layers,this.add(a);const l=new Ke(Ni,Fi,t,e);l.layers=this.layers,this.add(l);const c=new Ke(Ni,Fi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===On)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===jr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class $u extends Fe{constructor(t,e,n,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Qi,super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class qf extends on{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new $u(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:bn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ln(5,5,5),r=new Se({name:"CubemapFromEquirect",uniforms:is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:zn});r.uniforms.tEquirect.value=e;const o=new Jt(s,r),a=e.minFilter;return e.minFilter===gi&&(e.minFilter=bn),new $f(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Na=new B,Yf=new B,jf=new Zt;class ui{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Na.subVectors(n,e).cross(Yf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Na),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||jf.getNormalMatrix(t),s=this.coplanarPoint(Na).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const oi=new cs,_r=new B;class gl{constructor(t=new ui,e=new ui,n=new ui,s=new ui,r=new ui,o=new ui){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=On){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],d=s[8],g=s[9],v=s[10],p=s[11],m=s[12],M=s[13],w=s[14],y=s[15];if(n[0].setComponents(l-r,f-c,p-d,y-m).normalize(),n[1].setComponents(l+r,f+c,p+d,y+m).normalize(),n[2].setComponents(l+o,f+u,p+g,y+M).normalize(),n[3].setComponents(l-o,f-u,p-g,y-M).normalize(),n[4].setComponents(l-a,f-h,p-v,y-w).normalize(),e===On)n[5].setComponents(l+a,f+h,p+v,y+w).normalize();else if(e===jr)n[5].setComponents(a,h,v,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(t){return oi.center.set(0,0,0),oi.radius=.7071067811865476,oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(_r.x=s.normal.x>0?t.max.x:t.min.x,_r.y=s.normal.y>0?t.max.y:t.min.y,_r.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(_r)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Zf(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],v=h[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,h[f]=v)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const v=h[d];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class js extends xe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=t/a,f=e/l,d=[],g=[],v=[],p=[];for(let m=0;m<u;m++){const M=m*f-o;for(let w=0;w<c;w++){const y=w*h-r;g.push(y,-M,0),v.push(0,0,1),p.push(w/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){const w=M+c*m,y=M+c*(m+1),W=M+1+c*(m+1),C=M+1+c*m;d.push(w,y,C),d.push(y,W,C)}this.setIndex(d),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(v,3)),this.setAttribute("uv",new te(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new js(t.width,t.height,t.widthSegments,t.heightSegments)}}var Kf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Qf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,td=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ed=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,id=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ad=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,od=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ld=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ud=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_d=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,yd=`#define PI 3.141592653589793
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
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Md=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
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
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Sd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ed=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Td=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ad="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rd=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Pd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ld=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Dd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
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
#endif`,Ud=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Od=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,Gd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Wd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$d=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,jd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
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
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
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
}`,Zd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Kd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ep=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,np=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ip=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ap=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,op=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,up=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,dp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_p=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ep=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Tp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ap=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ip=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Up=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Np=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Op=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Bp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zp=`#ifdef USE_SKINNING
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
#endif`,kp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xp=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,i0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,s0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,r0=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,a0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,o0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,c0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,u0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,h0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,d0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,m0=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,v0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,x0=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,M0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
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
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,S0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
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
}`,E0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,T0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,C0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,R0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kt={alphahash_fragment:Kf,alphahash_pars_fragment:Jf,alphamap_fragment:Qf,alphamap_pars_fragment:td,alphatest_fragment:ed,alphatest_pars_fragment:nd,aomap_fragment:id,aomap_pars_fragment:sd,batching_pars_vertex:rd,batching_vertex:ad,begin_vertex:od,beginnormal_vertex:ld,bsdfs:cd,iridescence_fragment:ud,bumpmap_pars_fragment:hd,clipping_planes_fragment:fd,clipping_planes_pars_fragment:dd,clipping_planes_pars_vertex:pd,clipping_planes_vertex:md,color_fragment:gd,color_pars_fragment:vd,color_pars_vertex:_d,color_vertex:xd,common:yd,cube_uv_reflection_fragment:Md,defaultnormal_vertex:bd,displacementmap_pars_vertex:Sd,displacementmap_vertex:wd,emissivemap_fragment:Ed,emissivemap_pars_fragment:Td,colorspace_fragment:Ad,colorspace_pars_fragment:Cd,envmap_fragment:Rd,envmap_common_pars_fragment:Pd,envmap_pars_fragment:Ld,envmap_pars_vertex:Dd,envmap_physical_pars_fragment:Gd,envmap_vertex:Id,fog_vertex:Ud,fog_pars_vertex:Nd,fog_fragment:Fd,fog_pars_fragment:Od,gradientmap_pars_fragment:Bd,lightmap_pars_fragment:zd,lights_lambert_fragment:kd,lights_lambert_pars_fragment:Vd,lights_pars_begin:Hd,lights_toon_fragment:Wd,lights_toon_pars_fragment:Xd,lights_phong_fragment:$d,lights_phong_pars_fragment:qd,lights_physical_fragment:Yd,lights_physical_pars_fragment:jd,lights_fragment_begin:Zd,lights_fragment_maps:Kd,lights_fragment_end:Jd,logdepthbuf_fragment:Qd,logdepthbuf_pars_fragment:tp,logdepthbuf_pars_vertex:ep,logdepthbuf_vertex:np,map_fragment:ip,map_pars_fragment:sp,map_particle_fragment:rp,map_particle_pars_fragment:ap,metalnessmap_fragment:op,metalnessmap_pars_fragment:lp,morphinstance_vertex:cp,morphcolor_vertex:up,morphnormal_vertex:hp,morphtarget_pars_vertex:fp,morphtarget_vertex:dp,normal_fragment_begin:pp,normal_fragment_maps:mp,normal_pars_fragment:gp,normal_pars_vertex:vp,normal_vertex:_p,normalmap_pars_fragment:xp,clearcoat_normal_fragment_begin:yp,clearcoat_normal_fragment_maps:Mp,clearcoat_pars_fragment:bp,iridescence_pars_fragment:Sp,opaque_fragment:wp,packing:Ep,premultiplied_alpha_fragment:Tp,project_vertex:Ap,dithering_fragment:Cp,dithering_pars_fragment:Rp,roughnessmap_fragment:Pp,roughnessmap_pars_fragment:Lp,shadowmap_pars_fragment:Dp,shadowmap_pars_vertex:Ip,shadowmap_vertex:Up,shadowmask_pars_fragment:Np,skinbase_vertex:Fp,skinning_pars_vertex:Op,skinning_vertex:Bp,skinnormal_vertex:zp,specularmap_fragment:kp,specularmap_pars_fragment:Vp,tonemapping_fragment:Hp,tonemapping_pars_fragment:Gp,transmission_fragment:Wp,transmission_pars_fragment:Xp,uv_pars_fragment:$p,uv_pars_vertex:qp,uv_vertex:Yp,worldpos_vertex:jp,background_vert:Zp,background_frag:Kp,backgroundCube_vert:Jp,backgroundCube_frag:Qp,cube_vert:t0,cube_frag:e0,depth_vert:n0,depth_frag:i0,distanceRGBA_vert:s0,distanceRGBA_frag:r0,equirect_vert:a0,equirect_frag:o0,linedashed_vert:l0,linedashed_frag:c0,meshbasic_vert:u0,meshbasic_frag:h0,meshlambert_vert:f0,meshlambert_frag:d0,meshmatcap_vert:p0,meshmatcap_frag:m0,meshnormal_vert:g0,meshnormal_frag:v0,meshphong_vert:_0,meshphong_frag:x0,meshphysical_vert:y0,meshphysical_frag:M0,meshtoon_vert:b0,meshtoon_frag:S0,points_vert:w0,points_frag:E0,shadow_vert:T0,shadow_frag:A0,sprite_vert:C0,sprite_frag:R0},Ft={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Mn={basic:{uniforms:Oe([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:Oe([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:Oe([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:Oe([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:Oe([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:Oe([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:Oe([Ft.points,Ft.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:Oe([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:Oe([Ft.common,Ft.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:Oe([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:Oe([Ft.sprite,Ft.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:Oe([Ft.common,Ft.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:Oe([Ft.lights,Ft.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Mn.physical={uniforms:Oe([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const xr={r:0,b:0,g:0},li=new xn,P0=new ae;function L0(i,t,e,n,s,r,o){const a=new Ot(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(M){let w=M.isScene===!0?M.background:null;return w&&w.isTexture&&(w=(M.backgroundBlurriness>0?e:t).get(w)),w}function v(M){let w=!1;const y=g(M);y===null?m(a,l):y&&y.isColor&&(m(y,1),w=!0);const W=i.xr.getEnvironmentBlendMode();W==="additive"?n.buffers.color.setClear(0,0,0,1,o):W==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(M,w){const y=g(w);y&&(y.isCubeTexture||y.mapping===ia)?(u===void 0&&(u=new Jt(new ln(1,1,1),new Se({name:"BackgroundCubeMaterial",uniforms:is(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(W,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),li.copy(w.backgroundRotation),li.x*=-1,li.y*=-1,li.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(P0.makeRotationFromEuler(li)),u.material.toneMapped=Qt.getTransfer(y.colorSpace)!==oe,(h!==y||f!==y.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,d=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Jt(new js(2,2),new Se({name:"BackgroundMaterial",uniforms:is(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(y.colorSpace)!==oe,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,w){M.getRGB(xr,Wu(i)),n.buffers.color.setClear(xr.r,xr.g,xr.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(M,w=1){a.set(M),l=w,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(a,l)},render:v,addToRenderList:p}}function D0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(_,T,V,H,tt){let N=!1;const D=h(H,V,T);r!==D&&(r=D,c(r.object)),N=d(_,H,V,tt),N&&g(_,H,V,tt),tt!==null&&t.update(tt,i.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,y(_,T,V,H),tt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(tt).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function u(_){return i.deleteVertexArray(_)}function h(_,T,V){const H=V.wireframe===!0;let tt=n[_.id];tt===void 0&&(tt={},n[_.id]=tt);let N=tt[T.id];N===void 0&&(N={},tt[T.id]=N);let D=N[H];return D===void 0&&(D=f(l()),N[H]=D),D}function f(_){const T=[],V=[],H=[];for(let tt=0;tt<e;tt++)T[tt]=0,V[tt]=0,H[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:V,attributeDivisors:H,object:_,attributes:{},index:null}}function d(_,T,V,H){const tt=r.attributes,N=T.attributes;let D=0;const X=V.getAttributes();for(const z in X)if(X[z].location>=0){const it=tt[z];let at=N[z];if(at===void 0&&(z==="instanceMatrix"&&_.instanceMatrix&&(at=_.instanceMatrix),z==="instanceColor"&&_.instanceColor&&(at=_.instanceColor)),it===void 0||it.attribute!==at||at&&it.data!==at.data)return!0;D++}return r.attributesNum!==D||r.index!==H}function g(_,T,V,H){const tt={},N=T.attributes;let D=0;const X=V.getAttributes();for(const z in X)if(X[z].location>=0){let it=N[z];it===void 0&&(z==="instanceMatrix"&&_.instanceMatrix&&(it=_.instanceMatrix),z==="instanceColor"&&_.instanceColor&&(it=_.instanceColor));const at={};at.attribute=it,it&&it.data&&(at.data=it.data),tt[z]=at,D++}r.attributes=tt,r.attributesNum=D,r.index=H}function v(){const _=r.newAttributes;for(let T=0,V=_.length;T<V;T++)_[T]=0}function p(_){m(_,0)}function m(_,T){const V=r.newAttributes,H=r.enabledAttributes,tt=r.attributeDivisors;V[_]=1,H[_]===0&&(i.enableVertexAttribArray(_),H[_]=1),tt[_]!==T&&(i.vertexAttribDivisor(_,T),tt[_]=T)}function M(){const _=r.newAttributes,T=r.enabledAttributes;for(let V=0,H=T.length;V<H;V++)T[V]!==_[V]&&(i.disableVertexAttribArray(V),T[V]=0)}function w(_,T,V,H,tt,N,D){D===!0?i.vertexAttribIPointer(_,T,V,tt,N):i.vertexAttribPointer(_,T,V,H,tt,N)}function y(_,T,V,H){v();const tt=H.attributes,N=V.getAttributes(),D=T.defaultAttributeValues;for(const X in N){const z=N[X];if(z.location>=0){let rt=tt[X];if(rt===void 0&&(X==="instanceMatrix"&&_.instanceMatrix&&(rt=_.instanceMatrix),X==="instanceColor"&&_.instanceColor&&(rt=_.instanceColor)),rt!==void 0){const it=rt.normalized,at=rt.itemSize,Mt=t.get(rt);if(Mt===void 0)continue;const Bt=Mt.buffer,U=Mt.type,Z=Mt.bytesPerElement,Y=U===i.INT||U===i.UNSIGNED_INT||rt.gpuType===ol;if(rt.isInterleavedBufferAttribute){const F=rt.data,j=F.stride,ot=rt.offset;if(F.isInstancedInterleavedBuffer){for(let ft=0;ft<z.locationSize;ft++)m(z.location+ft,F.meshPerAttribute);_.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let ft=0;ft<z.locationSize;ft++)p(z.location+ft);i.bindBuffer(i.ARRAY_BUFFER,Bt);for(let ft=0;ft<z.locationSize;ft++)w(z.location+ft,at/z.locationSize,U,it,j*Z,(ot+at/z.locationSize*ft)*Z,Y)}else{if(rt.isInstancedBufferAttribute){for(let F=0;F<z.locationSize;F++)m(z.location+F,rt.meshPerAttribute);_.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let F=0;F<z.locationSize;F++)p(z.location+F);i.bindBuffer(i.ARRAY_BUFFER,Bt);for(let F=0;F<z.locationSize;F++)w(z.location+F,at/z.locationSize,U,it,at*Z,at/z.locationSize*F*Z,Y)}}else if(D!==void 0){const it=D[X];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv(z.location,it);break;case 3:i.vertexAttrib3fv(z.location,it);break;case 4:i.vertexAttrib4fv(z.location,it);break;default:i.vertexAttrib1fv(z.location,it)}}}}M()}function W(){S();for(const _ in n){const T=n[_];for(const V in T){const H=T[V];for(const tt in H)u(H[tt].object),delete H[tt];delete T[V]}delete n[_]}}function C(_){if(n[_.id]===void 0)return;const T=n[_.id];for(const V in T){const H=T[V];for(const tt in H)u(H[tt].object),delete H[tt];delete T[V]}delete n[_.id]}function I(_){for(const T in n){const V=n[T];if(V[_.id]===void 0)continue;const H=V[_.id];for(const tt in H)u(H[tt].object),delete H[tt];delete V[_.id]}}function S(){x(),o=!0,r!==s&&(r=s,c(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:S,resetDefaultState:x,dispose:W,releaseStatesOfGeometry:C,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:p,disableUnusedAttributes:M}}function I0(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];e.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*f[v];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function U0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==vn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const S=I===wn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Vn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Sn&&!S)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),W=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:y,vertexTextures:W,maxSamples:C}}function N0(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ui,a=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,m=i.get(h);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{const M=r?0:n,w=M*4;let y=m.clippingState||null;l.value=y,y=u(g,f,w,d);for(let W=0;W!==w;++W)y[W]=e[W];m.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,g){const v=h!==null?h.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const m=d+v*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let w=0,y=d;w!==v;++w,y+=4)o.copy(h[w]).applyMatrix4(M,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function F0(i){let t=new WeakMap;function e(o,a){return a===ho?o.mapping=Qi:a===fo&&(o.mapping=ts),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ho||a===fo)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new qf(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class ra extends Xu{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Gi=4,uc=[.125,.215,.35,.446,.526,.582],pi=20,Fa=new ra,hc=new Ot;let Oa=null,Ba=0,za=0,ka=!1;const hi=(1+Math.sqrt(5))/2,Oi=1/hi,fc=[new B(-hi,Oi,0),new B(hi,Oi,0),new B(-Oi,0,hi),new B(Oi,0,hi),new B(0,hi,-Oi),new B(0,hi,Oi),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class dc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Oa=this._renderer.getRenderTarget(),Ba=this._renderer.getActiveCubeFace(),za=this._renderer.getActiveMipmapLevel(),ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Oa,Ba,za),this._renderer.xr.enabled=ka,t.scissorTest=!1,yr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qi||t.mapping===ts?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Oa=this._renderer.getRenderTarget(),Ba=this._renderer.getActiveCubeFace(),za=this._renderer.getActiveMipmapLevel(),ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:wn,format:vn,colorSpace:rs,depthBuffer:!1},s=pc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=O0(r)),this._blurMaterial=B0(r,t,e)}return s}_compileMaterial(t){const e=new Jt(this._lodPlanes[0],t);this._renderer.compile(e,Fa)}_sceneToCubeUV(t,e,n,s){const a=new Ke(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(hc),u.toneMapping=Qn,u.autoClear=!1;const d=new _n({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),g=new Jt(new ln,d);let v=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,v=!0):(d.color.copy(hc),v=!0);for(let m=0;m<6;m++){const M=m%3;M===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):M===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const w=this._cubeSize;yr(s,M*w,m>2?w:0,w,w),u.setRenderTarget(s),v&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Qi||t.mapping===ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Jt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;yr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Fa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=fc[(s-r-1)%fc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Jt(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*pi-1),v=r/g,p=isFinite(r)?1+Math.floor(u*v):pi;p>pi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${pi}`);const m=[];let M=0;for(let I=0;I<pi;++I){const S=I/v,x=Math.exp(-S*S/2);m.push(x),I===0?M+=x:I<p&&(M+=2*x)}for(let I=0;I<m.length;I++)m[I]=m[I]/M;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:w}=this;f.dTheta.value=g,f.mipInt.value=w-n;const y=this._sizeLods[s],W=3*y*(s>w-Gi?s-w+Gi:0),C=4*(this._cubeSize-y);yr(e,W,C,3*y,2*y),l.setRenderTarget(e),l.render(h,Fa)}}function O0(i){const t=[],e=[],n=[];let s=i;const r=i-Gi+1+uc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Gi?l=uc[o-i+Gi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,v=3,p=2,m=1,M=new Float32Array(v*g*d),w=new Float32Array(p*g*d),y=new Float32Array(m*g*d);for(let C=0;C<d;C++){const I=C%3*2/3-1,S=C>2?0:-1,x=[I,S,0,I+2/3,S,0,I+2/3,S+1,0,I,S,0,I+2/3,S+1,0,I,S+1,0];M.set(x,v*g*C),w.set(f,p*g*C);const _=[C,C,C,C,C,C];y.set(_,m*g*C)}const W=new xe;W.setAttribute("position",new we(M,v)),W.setAttribute("uv",new we(w,p)),W.setAttribute("faceIndex",new we(y,m)),t.push(W),s>Gi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function pc(i,t,e){const n=new on(i,t,e);return n.texture.mapping=ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function B0(i,t,e){const n=new Float32Array(pi),s=new B(0,1,0);return new Se({name:"SphericalGaussianBlur",defines:{n:pi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vl(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function mc(){return new Se({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function gc(){return new Se({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function vl(){return`

		precision mediump float;
		precision mediump int;

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
	`}function z0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ho||l===fo,u=l===Qi||l===ts;if(c||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new dc(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new dc(i)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function k0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ls("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function V0(i,t,e,n){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let p=0,m=v.length;p<m;p++)t.remove(v[p])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const v=d[g];for(let p=0,m=v.length;p<m;p++)t.update(v[p],i.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let v=0;if(d!==null){const M=d.array;v=d.version;for(let w=0,y=M.length;w<y;w+=3){const W=M[w+0],C=M[w+1],I=M[w+2];f.push(W,C,C,I,I,W)}}else if(g!==void 0){const M=g.array;v=g.version;for(let w=0,y=M.length/3-1;w<y;w+=3){const W=w+0,C=w+1,I=w+2;f.push(W,C,C,I,I,W)}}else return;const p=new(Bu(f)?Gu:Hu)(f,1);p.version=v;const m=r.get(h);m&&t.remove(m),r.set(h,p)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function H0(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),e.update(d,n,g))}function u(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];e.update(p,n,1)}function h(f,d,g,v){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],v[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,v,0,g);let m=0;for(let M=0;M<g;M++)m+=d[M]*v[M];e.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function G0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function W0(i,t,e){const n=new WeakMap,s=new ce;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let _=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",_)};var d=_;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),p===!0&&(y=3);let W=a.attributes.position.count*y,C=1;W>t.maxTextureSize&&(C=Math.ceil(W/t.maxTextureSize),W=t.maxTextureSize);const I=new Float32Array(W*C*4*h),S=new ku(I,W,C,h);S.type=Sn,S.needsUpdate=!0;const x=y*4;for(let T=0;T<h;T++){const V=m[T],H=M[T],tt=w[T],N=W*C*4*T;for(let D=0;D<V.count;D++){const X=D*x;g===!0&&(s.fromBufferAttribute(V,D),I[N+X+0]=s.x,I[N+X+1]=s.y,I[N+X+2]=s.z,I[N+X+3]=0),v===!0&&(s.fromBufferAttribute(H,D),I[N+X+4]=s.x,I[N+X+5]=s.y,I[N+X+6]=s.z,I[N+X+7]=0),p===!0&&(s.fromBufferAttribute(tt,D),I[N+X+8]=s.x,I[N+X+9]=s.y,I[N+X+10]=s.z,I[N+X+11]=tt.itemSize===4?s.w:1)}}f={count:h,texture:S,size:new St(W,C)},n.set(a,f),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function X0(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Yu extends Fe{constructor(t,e,n,s,r,o,a,l,c,u=ji){if(u!==ji&&u!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ji&&(n=xi),n===void 0&&u===ns&&(n=es),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ju=new Fe,vc=new Yu(1,1),Zu=new ku,Ku=new Df,Ju=new $u,_c=[],xc=[],yc=new Float32Array(16),Mc=new Float32Array(9),bc=new Float32Array(4);function hs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=_c[s];if(r===void 0&&(r=new Float32Array(s),_c[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function aa(i,t){let e=xc[t];e===void 0&&(e=new Int32Array(t),xc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function $0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function q0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function Y0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function j0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function Z0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,n))return;bc.set(n),i.uniformMatrix2fv(this.addr,!1,bc),Ce(e,n)}}function K0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,n))return;Mc.set(n),i.uniformMatrix3fv(this.addr,!1,Mc),Ce(e,n)}}function J0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,n))return;yc.set(n),i.uniformMatrix4fv(this.addr,!1,yc),Ce(e,n)}}function Q0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function tm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function em(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function nm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function im(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function rm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function am(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function om(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(vc.compareFunction=Ou,r=vc):r=ju,e.setTexture2D(t||r,s)}function lm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ku,s)}function cm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ju,s)}function um(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Zu,s)}function hm(i){switch(i){case 5126:return $0;case 35664:return q0;case 35665:return Y0;case 35666:return j0;case 35674:return Z0;case 35675:return K0;case 35676:return J0;case 5124:case 35670:return Q0;case 35667:case 35671:return tm;case 35668:case 35672:return em;case 35669:case 35673:return nm;case 5125:return im;case 36294:return sm;case 36295:return rm;case 36296:return am;case 35678:case 36198:case 36298:case 36306:case 35682:return om;case 35679:case 36299:case 36307:return lm;case 35680:case 36300:case 36308:case 36293:return cm;case 36289:case 36303:case 36311:case 36292:return um}}function fm(i,t){i.uniform1fv(this.addr,t)}function dm(i,t){const e=hs(t,this.size,2);i.uniform2fv(this.addr,e)}function pm(i,t){const e=hs(t,this.size,3);i.uniform3fv(this.addr,e)}function mm(i,t){const e=hs(t,this.size,4);i.uniform4fv(this.addr,e)}function gm(i,t){const e=hs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function vm(i,t){const e=hs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function _m(i,t){const e=hs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function xm(i,t){i.uniform1iv(this.addr,t)}function ym(i,t){i.uniform2iv(this.addr,t)}function Mm(i,t){i.uniform3iv(this.addr,t)}function bm(i,t){i.uniform4iv(this.addr,t)}function Sm(i,t){i.uniform1uiv(this.addr,t)}function wm(i,t){i.uniform2uiv(this.addr,t)}function Em(i,t){i.uniform3uiv(this.addr,t)}function Tm(i,t){i.uniform4uiv(this.addr,t)}function Am(i,t,e){const n=this.cache,s=t.length,r=aa(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||ju,r[o])}function Cm(i,t,e){const n=this.cache,s=t.length,r=aa(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ku,r[o])}function Rm(i,t,e){const n=this.cache,s=t.length,r=aa(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Ju,r[o])}function Pm(i,t,e){const n=this.cache,s=t.length,r=aa(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Zu,r[o])}function Lm(i){switch(i){case 5126:return fm;case 35664:return dm;case 35665:return pm;case 35666:return mm;case 35674:return gm;case 35675:return vm;case 35676:return _m;case 5124:case 35670:return xm;case 35667:case 35671:return ym;case 35668:case 35672:return Mm;case 35669:case 35673:return bm;case 5125:return Sm;case 36294:return wm;case 36295:return Em;case 36296:return Tm;case 35678:case 36198:case 36298:case 36306:case 35682:return Am;case 35679:case 36299:case 36307:return Cm;case 35680:case 36300:case 36308:case 36293:return Rm;case 36289:case 36303:case 36311:case 36292:return Pm}}class Dm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=hm(e.type)}}class Im{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Lm(e.type)}}class Um{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Va=/(\w+)(\])?(\[|\.)?/g;function Sc(i,t){i.seq.push(t),i.map[t.id]=t}function Nm(i,t,e){const n=i.name,s=n.length;for(Va.lastIndex=0;;){const r=Va.exec(n),o=Va.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Sc(e,c===void 0?new Dm(a,i,t):new Im(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new Um(a),Sc(e,h)),e=h}}}class Wr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Nm(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function wc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Fm=37297;let Om=0;function Bm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Ec=new Zt;function zm(i){Qt._getMatrix(Ec,Qt.workingColorSpace,i);const t=`mat3( ${Ec.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(i)){case sa:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Tc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Bm(i.getShaderSource(t),o)}else return s}function km(i,t){const e=zm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Vm(i,t){let e;switch(t){case Mu:e="Linear";break;case bu:e="Reinhard";break;case Su:e="Cineon";break;case al:e="ACESFilmic";break;case wu:e="AgX";break;case Eu:e="Neutral";break;case hf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Mr=new B;function Hm(){Qt.getLuminanceCoefficients(Mr);const i=Mr.x.toFixed(4),t=Mr.y.toFixed(4),e=Mr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ds).join(`
`)}function Wm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Xm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ds(i){return i!==""}function Ac(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const $m=/^[ \t]*#include +<([\w\d./]+)>/gm;function Go(i){return i.replace($m,Ym)}const qm=new Map;function Ym(i,t){let e=Kt[t];if(e===void 0){const n=qm.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Go(e)}const jm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rc(i){return i.replace(jm,Zm)}function Zm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Pc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Km(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===_u?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===xu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Nn&&(t="SHADOWMAP_TYPE_VSM"),t}function Jm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Qi:case ts:t="ENVMAP_TYPE_CUBE";break;case ia:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Qm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ts:t="ENVMAP_MODE_REFRACTION";break}return t}function tg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case yu:t="ENVMAP_BLENDING_MULTIPLY";break;case cf:t="ENVMAP_BLENDING_MIX";break;case uf:t="ENVMAP_BLENDING_ADD";break}return t}function eg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function ng(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Km(e),c=Jm(e),u=Qm(e),h=tg(e),f=eg(e),d=Gm(e),g=Wm(r),v=s.createProgram();let p,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ds).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ds).join(`
`),m.length>0&&(m+=`
`)):(p=[Pc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ds).join(`
`),m=[Pc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qn?"#define TONE_MAPPING":"",e.toneMapping!==Qn?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Qn?Vm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,km("linearToOutputTexel",e.outputColorSpace),Hm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ds).join(`
`)),o=Go(o),o=Ac(o,e),o=Cc(o,e),a=Go(a),a=Ac(a,e),a=Cc(a,e),o=Rc(o),a=Rc(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Gl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Gl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const w=M+p+o,y=M+m+a,W=wc(s,s.VERTEX_SHADER,w),C=wc(s,s.FRAGMENT_SHADER,y);s.attachShader(v,W),s.attachShader(v,C),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function I(T){if(i.debug.checkShaderErrors){const V=s.getProgramInfoLog(v).trim(),H=s.getShaderInfoLog(W).trim(),tt=s.getShaderInfoLog(C).trim();let N=!0,D=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(N=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,W,C);else{const X=Tc(s,W,"vertex"),z=Tc(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+V+`
`+X+`
`+z)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(H===""||tt==="")&&(D=!1);D&&(T.diagnostics={runnable:N,programLog:V,vertexShader:{log:H,prefix:p},fragmentShader:{log:tt,prefix:m}})}s.deleteShader(W),s.deleteShader(C),S=new Wr(s,v),x=Xm(s,v)}let S;this.getUniforms=function(){return S===void 0&&I(this),S};let x;this.getAttributes=function(){return x===void 0&&I(this),x};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,Fm)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Om++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=W,this.fragmentShader=C,this}let ig=0;class sg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new rg(t),e.set(t,n)),n}}class rg{constructor(t){this.id=ig++,this.code=t,this.usedTimes=0}}function ag(i,t,e,n,s,r,o){const a=new ml,l=new sg,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,_,T,V,H){const tt=V.fog,N=H.geometry,D=x.isMeshStandardMaterial?V.environment:null,X=(x.isMeshStandardMaterial?e:t).get(x.envMap||D),z=X&&X.mapping===ia?X.image.height:null,rt=g[x.type];x.precision!==null&&(d=s.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const it=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,at=it!==void 0?it.length:0;let Mt=0;N.morphAttributes.position!==void 0&&(Mt=1),N.morphAttributes.normal!==void 0&&(Mt=2),N.morphAttributes.color!==void 0&&(Mt=3);let Bt,U,Z,Y;if(rt){const ee=Mn[rt];Bt=ee.vertexShader,U=ee.fragmentShader}else Bt=x.vertexShader,U=x.fragmentShader,l.update(x),Z=l.getVertexShaderID(x),Y=l.getFragmentShaderID(x);const F=i.getRenderTarget(),j=i.state.buffers.depth.getReversed(),ot=H.isInstancedMesh===!0,ft=H.isBatchedMesh===!0,$=!!x.map,G=!!x.matcap,ct=!!X,P=!!x.aoMap,Tt=!!x.lightMap,pt=!!x.bumpMap,At=!!x.normalMap,wt=!!x.displacementMap,kt=!!x.emissiveMap,Lt=!!x.metalnessMap,R=!!x.roughnessMap,b=x.anisotropy>0,et=x.clearcoat>0,lt=x.dispersion>0,_t=x.iridescence>0,mt=x.sheen>0,bt=x.transmission>0,vt=b&&!!x.anisotropyMap,gt=et&&!!x.clearcoatMap,Dt=et&&!!x.clearcoatNormalMap,E=et&&!!x.clearcoatRoughnessMap,O=_t&&!!x.iridescenceMap,L=_t&&!!x.iridescenceThicknessMap,q=mt&&!!x.sheenColorMap,nt=mt&&!!x.sheenRoughnessMap,dt=!!x.specularMap,yt=!!x.specularColorMap,Pt=!!x.specularIntensityMap,k=bt&&!!x.transmissionMap,Et=bt&&!!x.thicknessMap,st=!!x.gradientMap,xt=!!x.alphaMap,Nt=x.alphaTest>0,Ut=!!x.alphaHash,qt=!!x.extensions;let ie=Qn;x.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(ie=i.toneMapping);const ye={shaderID:rt,shaderType:x.type,shaderName:x.name,vertexShader:Bt,fragmentShader:U,defines:x.defines,customVertexShaderID:Z,customFragmentShaderID:Y,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:ft,batchingColor:ft&&H._colorsTexture!==null,instancing:ot,instancingColor:ot&&H.instanceColor!==null,instancingMorph:ot&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:F===null?i.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:rs,alphaToCoverage:!!x.alphaToCoverage,map:$,matcap:G,envMap:ct,envMapMode:ct&&X.mapping,envMapCubeUVHeight:z,aoMap:P,lightMap:Tt,bumpMap:pt,normalMap:At,displacementMap:f&&wt,emissiveMap:kt,normalMapObjectSpace:At&&x.normalMapType===mf,normalMapTangentSpace:At&&x.normalMapType===Fu,metalnessMap:Lt,roughnessMap:R,anisotropy:b,anisotropyMap:vt,clearcoat:et,clearcoatMap:gt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:E,dispersion:lt,iridescence:_t,iridescenceMap:O,iridescenceThicknessMap:L,sheen:mt,sheenColorMap:q,sheenRoughnessMap:nt,specularMap:dt,specularColorMap:yt,specularIntensityMap:Pt,transmission:bt,transmissionMap:k,thicknessMap:Et,gradientMap:st,opaque:x.transparent===!1&&x.blending===Yi&&x.alphaToCoverage===!1,alphaMap:xt,alphaTest:Nt,alphaHash:Ut,combine:x.combine,mapUv:$&&v(x.map.channel),aoMapUv:P&&v(x.aoMap.channel),lightMapUv:Tt&&v(x.lightMap.channel),bumpMapUv:pt&&v(x.bumpMap.channel),normalMapUv:At&&v(x.normalMap.channel),displacementMapUv:wt&&v(x.displacementMap.channel),emissiveMapUv:kt&&v(x.emissiveMap.channel),metalnessMapUv:Lt&&v(x.metalnessMap.channel),roughnessMapUv:R&&v(x.roughnessMap.channel),anisotropyMapUv:vt&&v(x.anisotropyMap.channel),clearcoatMapUv:gt&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:E&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:O&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:L&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:q&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:nt&&v(x.sheenRoughnessMap.channel),specularMapUv:dt&&v(x.specularMap.channel),specularColorMapUv:yt&&v(x.specularColorMap.channel),specularIntensityMapUv:Pt&&v(x.specularIntensityMap.channel),transmissionMapUv:k&&v(x.transmissionMap.channel),thicknessMapUv:Et&&v(x.thicknessMap.channel),alphaMapUv:xt&&v(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(At||b),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!N.attributes.uv&&($||xt),fog:!!tt,useFog:x.fog===!0,fogExp2:!!tt&&tt.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:j,skinning:H.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:Mt,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:ie,decodeVideoTexture:$&&x.map.isVideoTexture===!0&&Qt.getTransfer(x.map.colorSpace)===oe,decodeVideoTextureEmissive:kt&&x.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(x.emissiveMap.colorSpace)===oe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===sn,flipSided:x.side===We,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:qt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&x.extensions.multiDraw===!0||ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ye.vertexUv1s=c.has(1),ye.vertexUv2s=c.has(2),ye.vertexUv3s=c.has(3),c.clear(),ye}function m(x){const _=[];if(x.shaderID?_.push(x.shaderID):(_.push(x.customVertexShaderID),_.push(x.customFragmentShaderID)),x.defines!==void 0)for(const T in x.defines)_.push(T),_.push(x.defines[T]);return x.isRawShaderMaterial===!1&&(M(_,x),w(_,x),_.push(i.outputColorSpace)),_.push(x.customProgramCacheKey),_.join()}function M(x,_){x.push(_.precision),x.push(_.outputColorSpace),x.push(_.envMapMode),x.push(_.envMapCubeUVHeight),x.push(_.mapUv),x.push(_.alphaMapUv),x.push(_.lightMapUv),x.push(_.aoMapUv),x.push(_.bumpMapUv),x.push(_.normalMapUv),x.push(_.displacementMapUv),x.push(_.emissiveMapUv),x.push(_.metalnessMapUv),x.push(_.roughnessMapUv),x.push(_.anisotropyMapUv),x.push(_.clearcoatMapUv),x.push(_.clearcoatNormalMapUv),x.push(_.clearcoatRoughnessMapUv),x.push(_.iridescenceMapUv),x.push(_.iridescenceThicknessMapUv),x.push(_.sheenColorMapUv),x.push(_.sheenRoughnessMapUv),x.push(_.specularMapUv),x.push(_.specularColorMapUv),x.push(_.specularIntensityMapUv),x.push(_.transmissionMapUv),x.push(_.thicknessMapUv),x.push(_.combine),x.push(_.fogExp2),x.push(_.sizeAttenuation),x.push(_.morphTargetsCount),x.push(_.morphAttributeCount),x.push(_.numDirLights),x.push(_.numPointLights),x.push(_.numSpotLights),x.push(_.numSpotLightMaps),x.push(_.numHemiLights),x.push(_.numRectAreaLights),x.push(_.numDirLightShadows),x.push(_.numPointLightShadows),x.push(_.numSpotLightShadows),x.push(_.numSpotLightShadowsWithMaps),x.push(_.numLightProbes),x.push(_.shadowMapType),x.push(_.toneMapping),x.push(_.numClippingPlanes),x.push(_.numClipIntersection),x.push(_.depthPacking)}function w(x,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),x.push(a.mask)}function y(x){const _=g[x.type];let T;if(_){const V=Mn[_];T=Hs.clone(V.uniforms)}else T=x.uniforms;return T}function W(x,_){let T;for(let V=0,H=u.length;V<H;V++){const tt=u[V];if(tt.cacheKey===_){T=tt,++T.usedTimes;break}}return T===void 0&&(T=new ng(i,_,x,r),u.push(T)),T}function C(x){if(--x.usedTimes===0){const _=u.indexOf(x);u[_]=u[u.length-1],u.pop(),x.destroy()}}function I(x){l.remove(x)}function S(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:y,acquireProgram:W,releaseProgram:C,releaseShaderCache:I,programs:u,dispose:S}}function og(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function lg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Lc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Dc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,f,d,g,v,p){let m=i[t];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:v,group:p},i[t]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=v,m.group=p),t++,m}function a(h,f,d,g,v,p){const m=o(h,f,d,g,v,p);d.transmission>0?n.push(m):d.transparent===!0?s.push(m):e.push(m)}function l(h,f,d,g,v,p){const m=o(h,f,d,g,v,p);d.transmission>0?n.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function c(h,f){e.length>1&&e.sort(h||lg),n.length>1&&n.sort(f||Lc),s.length>1&&s.sort(f||Lc)}function u(){for(let h=t,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function cg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Dc,i.set(n,[o])):s>=r.length?(o=new Dc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function ug(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new Ot};break;case"SpotLight":e={position:new B,direction:new B,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new B,halfWidth:new B,halfHeight:new B};break}return i[t.id]=e,e}}}function hg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let fg=0;function dg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function pg(i){const t=new ug,e=hg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const s=new B,r=new ae,o=new ae;function a(c){let u=0,h=0,f=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let d=0,g=0,v=0,p=0,m=0,M=0,w=0,y=0,W=0,C=0,I=0;c.sort(dg);for(let x=0,_=c.length;x<_;x++){const T=c[x],V=T.color,H=T.intensity,tt=T.distance,N=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=V.r*H,h+=V.g*H,f+=V.b*H;else if(T.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(T.sh.coefficients[D],H);I++}else if(T.isDirectionalLight){const D=t.get(T);if(D.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const X=T.shadow,z=e.get(T);z.shadowIntensity=X.intensity,z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,n.directionalShadow[d]=z,n.directionalShadowMap[d]=N,n.directionalShadowMatrix[d]=T.shadow.matrix,M++}n.directional[d]=D,d++}else if(T.isSpotLight){const D=t.get(T);D.position.setFromMatrixPosition(T.matrixWorld),D.color.copy(V).multiplyScalar(H),D.distance=tt,D.coneCos=Math.cos(T.angle),D.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),D.decay=T.decay,n.spot[v]=D;const X=T.shadow;if(T.map&&(n.spotLightMap[W]=T.map,W++,X.updateMatrices(T),T.castShadow&&C++),n.spotLightMatrix[v]=X.matrix,T.castShadow){const z=e.get(T);z.shadowIntensity=X.intensity,z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,n.spotShadow[v]=z,n.spotShadowMap[v]=N,y++}v++}else if(T.isRectAreaLight){const D=t.get(T);D.color.copy(V).multiplyScalar(H),D.halfWidth.set(T.width*.5,0,0),D.halfHeight.set(0,T.height*.5,0),n.rectArea[p]=D,p++}else if(T.isPointLight){const D=t.get(T);if(D.color.copy(T.color).multiplyScalar(T.intensity),D.distance=T.distance,D.decay=T.decay,T.castShadow){const X=T.shadow,z=e.get(T);z.shadowIntensity=X.intensity,z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,z.shadowCameraNear=X.camera.near,z.shadowCameraFar=X.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=N,n.pointShadowMatrix[g]=T.shadow.matrix,w++}n.point[g]=D,g++}else if(T.isHemisphereLight){const D=t.get(T);D.skyColor.copy(T.color).multiplyScalar(H),D.groundColor.copy(T.groundColor).multiplyScalar(H),n.hemi[m]=D,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ft.LTC_FLOAT_1,n.rectAreaLTC2=Ft.LTC_FLOAT_2):(n.rectAreaLTC1=Ft.LTC_HALF_1,n.rectAreaLTC2=Ft.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const S=n.hash;(S.directionalLength!==d||S.pointLength!==g||S.spotLength!==v||S.rectAreaLength!==p||S.hemiLength!==m||S.numDirectionalShadows!==M||S.numPointShadows!==w||S.numSpotShadows!==y||S.numSpotMaps!==W||S.numLightProbes!==I)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=y+W-C,n.spotLightMap.length=W,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=I,S.directionalLength=d,S.pointLength=g,S.spotLength=v,S.rectAreaLength=p,S.hemiLength=m,S.numDirectionalShadows=M,S.numPointShadows=w,S.numSpotShadows=y,S.numSpotMaps=W,S.numLightProbes=I,n.version=fg++)}function l(c,u){let h=0,f=0,d=0,g=0,v=0;const p=u.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){const w=c[m];if(w.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),h++}else if(w.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),d++}else if(w.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(p),o.identity(),r.copy(w.matrixWorld),r.premultiply(p),o.extractRotation(r),y.halfWidth.set(w.width*.5,0,0),y.halfHeight.set(0,w.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(p),f++}else if(w.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(w.matrixWorld),y.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:n}}function Ic(i){const t=new pg(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function mg(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Ic(i),t.set(s,[a])):r>=o.length?(a=new Ic(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class gg extends us{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=df,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class vg extends us{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const _g=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xg=`uniform sampler2D shadow_pass;
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
}`;function yg(i,t,e){let n=new gl;const s=new St,r=new St,o=new ce,a=new gg({depthPacking:pf}),l=new vg,c={},u=e.maxTextureSize,h={[ei]:We,[We]:ei,[sn]:sn},f=new Se({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:_g,fragmentShader:xg}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new xe;g.setAttribute("position",new we(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Jt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_u;let m=this.type;this.render=function(C,I,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const x=i.getRenderTarget(),_=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),V=i.state;V.setBlending(zn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const H=m!==Nn&&this.type===Nn,tt=m===Nn&&this.type!==Nn;for(let N=0,D=C.length;N<D;N++){const X=C[N],z=X.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const rt=z.getFrameExtents();if(s.multiply(rt),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/rt.x),s.x=r.x*rt.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/rt.y),s.y=r.y*rt.y,z.mapSize.y=r.y)),z.map===null||H===!0||tt===!0){const at=this.type!==Nn?{minFilter:tn,magFilter:tn}:{};z.map!==null&&z.map.dispose(),z.map=new on(s.x,s.y,at),z.map.texture.name=X.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const it=z.getViewportCount();for(let at=0;at<it;at++){const Mt=z.getViewport(at);o.set(r.x*Mt.x,r.y*Mt.y,r.x*Mt.z,r.y*Mt.w),V.viewport(o),z.updateMatrices(X,at),n=z.getFrustum(),y(I,S,z.camera,X,this.type)}z.isPointLightShadow!==!0&&this.type===Nn&&M(z,S),z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(x,_,T)};function M(C,I){const S=t.update(v);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new on(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(I,null,S,f,v,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(I,null,S,d,v,null)}function w(C,I,S,x){let _=null;const T=S.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(T!==void 0)_=T;else if(_=S.isPointLight===!0?l:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const V=_.uuid,H=I.uuid;let tt=c[V];tt===void 0&&(tt={},c[V]=tt);let N=tt[H];N===void 0&&(N=_.clone(),tt[H]=N,I.addEventListener("dispose",W)),_=N}if(_.visible=I.visible,_.wireframe=I.wireframe,x===Nn?_.side=I.shadowSide!==null?I.shadowSide:I.side:_.side=I.shadowSide!==null?I.shadowSide:h[I.side],_.alphaMap=I.alphaMap,_.alphaTest=I.alphaTest,_.map=I.map,_.clipShadows=I.clipShadows,_.clippingPlanes=I.clippingPlanes,_.clipIntersection=I.clipIntersection,_.displacementMap=I.displacementMap,_.displacementScale=I.displacementScale,_.displacementBias=I.displacementBias,_.wireframeLinewidth=I.wireframeLinewidth,_.linewidth=I.linewidth,S.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const V=i.properties.get(_);V.light=S}return _}function y(C,I,S,x,_){if(C.visible===!1)return;if(C.layers.test(I.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&_===Nn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,C.matrixWorld);const H=t.update(C),tt=C.material;if(Array.isArray(tt)){const N=H.groups;for(let D=0,X=N.length;D<X;D++){const z=N[D],rt=tt[z.materialIndex];if(rt&&rt.visible){const it=w(C,rt,x,_);C.onBeforeShadow(i,C,I,S,H,it,z),i.renderBufferDirect(S,null,H,it,C,z),C.onAfterShadow(i,C,I,S,H,it,z)}}}else if(tt.visible){const N=w(C,tt,x,_);C.onBeforeShadow(i,C,I,S,H,N,null),i.renderBufferDirect(S,null,H,N,C,null),C.onAfterShadow(i,C,I,S,H,N,null)}}const V=C.children;for(let H=0,tt=V.length;H<tt;H++)y(V[H],I,S,x,_)}function W(C){C.target.removeEventListener("dispose",W);for(const S in c){const x=c[S],_=C.target.uuid;_ in x&&(x[_].dispose(),delete x[_])}}}const Mg={[so]:ro,[ao]:co,[oo]:uo,[Ji]:lo,[ro]:so,[co]:ao,[uo]:oo,[lo]:Ji};function bg(i,t){function e(){let k=!1;const Et=new ce;let st=null;const xt=new ce(0,0,0,0);return{setMask:function(Nt){st!==Nt&&!k&&(i.colorMask(Nt,Nt,Nt,Nt),st=Nt)},setLocked:function(Nt){k=Nt},setClear:function(Nt,Ut,qt,ie,ye){ye===!0&&(Nt*=ie,Ut*=ie,qt*=ie),Et.set(Nt,Ut,qt,ie),xt.equals(Et)===!1&&(i.clearColor(Nt,Ut,qt,ie),xt.copy(Et))},reset:function(){k=!1,st=null,xt.set(-1,0,0,0)}}}function n(){let k=!1,Et=!1,st=null,xt=null,Nt=null;return{setReversed:function(Ut){if(Et!==Ut){const qt=t.get("EXT_clip_control");Et?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT);const ie=Nt;Nt=null,this.setClear(ie)}Et=Ut},getReversed:function(){return Et},setTest:function(Ut){Ut?F(i.DEPTH_TEST):j(i.DEPTH_TEST)},setMask:function(Ut){st!==Ut&&!k&&(i.depthMask(Ut),st=Ut)},setFunc:function(Ut){if(Et&&(Ut=Mg[Ut]),xt!==Ut){switch(Ut){case so:i.depthFunc(i.NEVER);break;case ro:i.depthFunc(i.ALWAYS);break;case ao:i.depthFunc(i.LESS);break;case Ji:i.depthFunc(i.LEQUAL);break;case oo:i.depthFunc(i.EQUAL);break;case lo:i.depthFunc(i.GEQUAL);break;case co:i.depthFunc(i.GREATER);break;case uo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xt=Ut}},setLocked:function(Ut){k=Ut},setClear:function(Ut){Nt!==Ut&&(Et&&(Ut=1-Ut),i.clearDepth(Ut),Nt=Ut)},reset:function(){k=!1,st=null,xt=null,Nt=null,Et=!1}}}function s(){let k=!1,Et=null,st=null,xt=null,Nt=null,Ut=null,qt=null,ie=null,ye=null;return{setTest:function(ee){k||(ee?F(i.STENCIL_TEST):j(i.STENCIL_TEST))},setMask:function(ee){Et!==ee&&!k&&(i.stencilMask(ee),Et=ee)},setFunc:function(ee,cn,An){(st!==ee||xt!==cn||Nt!==An)&&(i.stencilFunc(ee,cn,An),st=ee,xt=cn,Nt=An)},setOp:function(ee,cn,An){(Ut!==ee||qt!==cn||ie!==An)&&(i.stencilOp(ee,cn,An),Ut=ee,qt=cn,ie=An)},setLocked:function(ee){k=ee},setClear:function(ee){ye!==ee&&(i.clearStencil(ee),ye=ee)},reset:function(){k=!1,Et=null,st=null,xt=null,Nt=null,Ut=null,qt=null,ie=null,ye=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,v=!1,p=null,m=null,M=null,w=null,y=null,W=null,C=null,I=new Ot(0,0,0),S=0,x=!1,_=null,T=null,V=null,H=null,tt=null;const N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,X=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(z)[1]),D=X>=1):z.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),D=X>=2);let rt=null,it={};const at=i.getParameter(i.SCISSOR_BOX),Mt=i.getParameter(i.VIEWPORT),Bt=new ce().fromArray(at),U=new ce().fromArray(Mt);function Z(k,Et,st,xt){const Nt=new Uint8Array(4),Ut=i.createTexture();i.bindTexture(k,Ut),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qt=0;qt<st;qt++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(Et,0,i.RGBA,1,1,xt,0,i.RGBA,i.UNSIGNED_BYTE,Nt):i.texImage2D(Et+qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Nt);return Ut}const Y={};Y[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),F(i.DEPTH_TEST),o.setFunc(Ji),pt(!1),At(Bl),F(i.CULL_FACE),P(zn);function F(k){u[k]!==!0&&(i.enable(k),u[k]=!0)}function j(k){u[k]!==!1&&(i.disable(k),u[k]=!1)}function ot(k,Et){return h[k]!==Et?(i.bindFramebuffer(k,Et),h[k]=Et,k===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Et),k===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Et),!0):!1}function ft(k,Et){let st=d,xt=!1;if(k){st=f.get(Et),st===void 0&&(st=[],f.set(Et,st));const Nt=k.textures;if(st.length!==Nt.length||st[0]!==i.COLOR_ATTACHMENT0){for(let Ut=0,qt=Nt.length;Ut<qt;Ut++)st[Ut]=i.COLOR_ATTACHMENT0+Ut;st.length=Nt.length,xt=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,xt=!0);xt&&i.drawBuffers(st)}function $(k){return g!==k?(i.useProgram(k),g=k,!0):!1}const G={[di]:i.FUNC_ADD,[Xh]:i.FUNC_SUBTRACT,[$h]:i.FUNC_REVERSE_SUBTRACT};G[qh]=i.MIN,G[Yh]=i.MAX;const ct={[jh]:i.ZERO,[Zh]:i.ONE,[Kh]:i.SRC_COLOR,[no]:i.SRC_ALPHA,[sf]:i.SRC_ALPHA_SATURATE,[ef]:i.DST_COLOR,[Qh]:i.DST_ALPHA,[Jh]:i.ONE_MINUS_SRC_COLOR,[io]:i.ONE_MINUS_SRC_ALPHA,[nf]:i.ONE_MINUS_DST_COLOR,[tf]:i.ONE_MINUS_DST_ALPHA,[rf]:i.CONSTANT_COLOR,[af]:i.ONE_MINUS_CONSTANT_COLOR,[of]:i.CONSTANT_ALPHA,[lf]:i.ONE_MINUS_CONSTANT_ALPHA};function P(k,Et,st,xt,Nt,Ut,qt,ie,ye,ee){if(k===zn){v===!0&&(j(i.BLEND),v=!1);return}if(v===!1&&(F(i.BLEND),v=!0),k!==Wh){if(k!==p||ee!==x){if((m!==di||y!==di)&&(i.blendEquation(i.FUNC_ADD),m=di,y=di),ee)switch(k){case Yi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yr:i.blendFunc(i.ONE,i.ONE);break;case zl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case zl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}M=null,w=null,W=null,C=null,I.set(0,0,0),S=0,p=k,x=ee}return}Nt=Nt||Et,Ut=Ut||st,qt=qt||xt,(Et!==m||Nt!==y)&&(i.blendEquationSeparate(G[Et],G[Nt]),m=Et,y=Nt),(st!==M||xt!==w||Ut!==W||qt!==C)&&(i.blendFuncSeparate(ct[st],ct[xt],ct[Ut],ct[qt]),M=st,w=xt,W=Ut,C=qt),(ie.equals(I)===!1||ye!==S)&&(i.blendColor(ie.r,ie.g,ie.b,ye),I.copy(ie),S=ye),p=k,x=!1}function Tt(k,Et){k.side===sn?j(i.CULL_FACE):F(i.CULL_FACE);let st=k.side===We;Et&&(st=!st),pt(st),k.blending===Yi&&k.transparent===!1?P(zn):P(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);const xt=k.stencilWrite;a.setTest(xt),xt&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),kt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?F(i.SAMPLE_ALPHA_TO_COVERAGE):j(i.SAMPLE_ALPHA_TO_COVERAGE)}function pt(k){_!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),_=k)}function At(k){k!==Hh?(F(i.CULL_FACE),k!==T&&(k===Bl?i.cullFace(i.BACK):k===Gh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):j(i.CULL_FACE),T=k}function wt(k){k!==V&&(D&&i.lineWidth(k),V=k)}function kt(k,Et,st){k?(F(i.POLYGON_OFFSET_FILL),(H!==Et||tt!==st)&&(i.polygonOffset(Et,st),H=Et,tt=st)):j(i.POLYGON_OFFSET_FILL)}function Lt(k){k?F(i.SCISSOR_TEST):j(i.SCISSOR_TEST)}function R(k){k===void 0&&(k=i.TEXTURE0+N-1),rt!==k&&(i.activeTexture(k),rt=k)}function b(k,Et,st){st===void 0&&(rt===null?st=i.TEXTURE0+N-1:st=rt);let xt=it[st];xt===void 0&&(xt={type:void 0,texture:void 0},it[st]=xt),(xt.type!==k||xt.texture!==Et)&&(rt!==st&&(i.activeTexture(st),rt=st),i.bindTexture(k,Et||Y[k]),xt.type=k,xt.texture=Et)}function et(){const k=it[rt];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function lt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _t(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function mt(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function bt(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function vt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function gt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Dt(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function E(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function O(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function L(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function q(k){Bt.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Bt.copy(k))}function nt(k){U.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),U.copy(k))}function dt(k,Et){let st=c.get(Et);st===void 0&&(st=new WeakMap,c.set(Et,st));let xt=st.get(k);xt===void 0&&(xt=i.getUniformBlockIndex(Et,k.name),st.set(k,xt))}function yt(k,Et){const xt=c.get(Et).get(k);l.get(Et)!==xt&&(i.uniformBlockBinding(Et,xt,k.__bindingPointIndex),l.set(Et,xt))}function Pt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},rt=null,it={},h={},f=new WeakMap,d=[],g=null,v=!1,p=null,m=null,M=null,w=null,y=null,W=null,C=null,I=new Ot(0,0,0),S=0,x=!1,_=null,T=null,V=null,H=null,tt=null,Bt.set(0,0,i.canvas.width,i.canvas.height),U.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:F,disable:j,bindFramebuffer:ot,drawBuffers:ft,useProgram:$,setBlending:P,setMaterial:Tt,setFlipSided:pt,setCullFace:At,setLineWidth:wt,setPolygonOffset:kt,setScissorTest:Lt,activeTexture:R,bindTexture:b,unbindTexture:et,compressedTexImage2D:lt,compressedTexImage3D:_t,texImage2D:O,texImage3D:L,updateUBOMapping:dt,uniformBlockBinding:yt,texStorage2D:Dt,texStorage3D:E,texSubImage2D:mt,texSubImage3D:bt,compressedTexSubImage2D:vt,compressedTexSubImage3D:gt,scissor:q,viewport:nt,reset:Pt}}function Uc(i,t,e,n){const s=Sg(n);switch(e){case Pu:return i*t;case Du:return i*t;case Iu:return i*t*2;case ul:return i*t/s.components*s.byteLength;case hl:return i*t/s.components*s.byteLength;case Uu:return i*t*2/s.components*s.byteLength;case fl:return i*t*2/s.components*s.byteLength;case Lu:return i*t*3/s.components*s.byteLength;case vn:return i*t*4/s.components*s.byteLength;case dl:return i*t*4/s.components*s.byteLength;case zr:case kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Vr:case Hr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vo:case xo:return Math.max(i,16)*Math.max(t,8)/4;case go:case _o:return Math.max(i,8)*Math.max(t,8)/2;case yo:case Mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case bo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case So:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Eo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case To:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ao:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Co:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ro:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Po:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Lo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Do:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Io:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case No:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Fo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Gr:case Oo:case Bo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Nu:case zo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ko:case Vo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Sg(i){switch(i){case Vn:case Au:return{byteLength:1,components:1};case Vs:case Cu:case wn:return{byteLength:2,components:1};case ll:case cl:return{byteLength:2,components:4};case xi:case ol:case Sn:return{byteLength:4,components:1};case Ru:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function wg(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new St,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,b){return d?new OffscreenCanvas(R,b):Zr("canvas")}function v(R,b,et){let lt=1;const _t=Lt(R);if((_t.width>et||_t.height>et)&&(lt=et/Math.max(_t.width,_t.height)),lt<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const mt=Math.floor(lt*_t.width),bt=Math.floor(lt*_t.height);h===void 0&&(h=g(mt,bt));const vt=b?g(mt,bt):h;return vt.width=mt,vt.height=bt,vt.getContext("2d").drawImage(R,0,0,mt,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_t.width+"x"+_t.height+") to ("+mt+"x"+bt+")."),vt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_t.width+"x"+_t.height+")."),R;return R}function p(R){return R.generateMipmaps}function m(R){i.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(R,b,et,lt,_t=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let mt=b;if(b===i.RED&&(et===i.FLOAT&&(mt=i.R32F),et===i.HALF_FLOAT&&(mt=i.R16F),et===i.UNSIGNED_BYTE&&(mt=i.R8)),b===i.RED_INTEGER&&(et===i.UNSIGNED_BYTE&&(mt=i.R8UI),et===i.UNSIGNED_SHORT&&(mt=i.R16UI),et===i.UNSIGNED_INT&&(mt=i.R32UI),et===i.BYTE&&(mt=i.R8I),et===i.SHORT&&(mt=i.R16I),et===i.INT&&(mt=i.R32I)),b===i.RG&&(et===i.FLOAT&&(mt=i.RG32F),et===i.HALF_FLOAT&&(mt=i.RG16F),et===i.UNSIGNED_BYTE&&(mt=i.RG8)),b===i.RG_INTEGER&&(et===i.UNSIGNED_BYTE&&(mt=i.RG8UI),et===i.UNSIGNED_SHORT&&(mt=i.RG16UI),et===i.UNSIGNED_INT&&(mt=i.RG32UI),et===i.BYTE&&(mt=i.RG8I),et===i.SHORT&&(mt=i.RG16I),et===i.INT&&(mt=i.RG32I)),b===i.RGB_INTEGER&&(et===i.UNSIGNED_BYTE&&(mt=i.RGB8UI),et===i.UNSIGNED_SHORT&&(mt=i.RGB16UI),et===i.UNSIGNED_INT&&(mt=i.RGB32UI),et===i.BYTE&&(mt=i.RGB8I),et===i.SHORT&&(mt=i.RGB16I),et===i.INT&&(mt=i.RGB32I)),b===i.RGBA_INTEGER&&(et===i.UNSIGNED_BYTE&&(mt=i.RGBA8UI),et===i.UNSIGNED_SHORT&&(mt=i.RGBA16UI),et===i.UNSIGNED_INT&&(mt=i.RGBA32UI),et===i.BYTE&&(mt=i.RGBA8I),et===i.SHORT&&(mt=i.RGBA16I),et===i.INT&&(mt=i.RGBA32I)),b===i.RGB&&et===i.UNSIGNED_INT_5_9_9_9_REV&&(mt=i.RGB9_E5),b===i.RGBA){const bt=_t?sa:Qt.getTransfer(lt);et===i.FLOAT&&(mt=i.RGBA32F),et===i.HALF_FLOAT&&(mt=i.RGBA16F),et===i.UNSIGNED_BYTE&&(mt=bt===oe?i.SRGB8_ALPHA8:i.RGBA8),et===i.UNSIGNED_SHORT_4_4_4_4&&(mt=i.RGBA4),et===i.UNSIGNED_SHORT_5_5_5_1&&(mt=i.RGB5_A1)}return(mt===i.R16F||mt===i.R32F||mt===i.RG16F||mt===i.RG32F||mt===i.RGBA16F||mt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),mt}function y(R,b){let et;return R?b===null||b===xi||b===es?et=i.DEPTH24_STENCIL8:b===Sn?et=i.DEPTH32F_STENCIL8:b===Vs&&(et=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===xi||b===es?et=i.DEPTH_COMPONENT24:b===Sn?et=i.DEPTH_COMPONENT32F:b===Vs&&(et=i.DEPTH_COMPONENT16),et}function W(R,b){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==tn&&R.minFilter!==bn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function C(R){const b=R.target;b.removeEventListener("dispose",C),S(b),b.isVideoTexture&&u.delete(b)}function I(R){const b=R.target;b.removeEventListener("dispose",I),_(b)}function S(R){const b=n.get(R);if(b.__webglInit===void 0)return;const et=R.source,lt=f.get(et);if(lt){const _t=lt[b.__cacheKey];_t.usedTimes--,_t.usedTimes===0&&x(R),Object.keys(lt).length===0&&f.delete(et)}n.remove(R)}function x(R){const b=n.get(R);i.deleteTexture(b.__webglTexture);const et=R.source,lt=f.get(et);delete lt[b.__cacheKey],o.memory.textures--}function _(R){const b=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(b.__webglFramebuffer[lt]))for(let _t=0;_t<b.__webglFramebuffer[lt].length;_t++)i.deleteFramebuffer(b.__webglFramebuffer[lt][_t]);else i.deleteFramebuffer(b.__webglFramebuffer[lt]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[lt])}else{if(Array.isArray(b.__webglFramebuffer))for(let lt=0;lt<b.__webglFramebuffer.length;lt++)i.deleteFramebuffer(b.__webglFramebuffer[lt]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let lt=0;lt<b.__webglColorRenderbuffer.length;lt++)b.__webglColorRenderbuffer[lt]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[lt]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const et=R.textures;for(let lt=0,_t=et.length;lt<_t;lt++){const mt=n.get(et[lt]);mt.__webglTexture&&(i.deleteTexture(mt.__webglTexture),o.memory.textures--),n.remove(et[lt])}n.remove(R)}let T=0;function V(){T=0}function H(){const R=T;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),T+=1,R}function tt(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function N(R,b){const et=n.get(R);if(R.isVideoTexture&&wt(R),R.isRenderTargetTexture===!1&&R.version>0&&et.__version!==R.version){const lt=R.image;if(lt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{U(et,R,b);return}}e.bindTexture(i.TEXTURE_2D,et.__webglTexture,i.TEXTURE0+b)}function D(R,b){const et=n.get(R);if(R.version>0&&et.__version!==R.version){U(et,R,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,et.__webglTexture,i.TEXTURE0+b)}function X(R,b){const et=n.get(R);if(R.version>0&&et.__version!==R.version){U(et,R,b);return}e.bindTexture(i.TEXTURE_3D,et.__webglTexture,i.TEXTURE0+b)}function z(R,b){const et=n.get(R);if(R.version>0&&et.__version!==R.version){Z(et,R,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture,i.TEXTURE0+b)}const rt={[po]:i.REPEAT,[mi]:i.CLAMP_TO_EDGE,[mo]:i.MIRRORED_REPEAT},it={[tn]:i.NEAREST,[ff]:i.NEAREST_MIPMAP_NEAREST,[er]:i.NEAREST_MIPMAP_LINEAR,[bn]:i.LINEAR,[da]:i.LINEAR_MIPMAP_NEAREST,[gi]:i.LINEAR_MIPMAP_LINEAR},at={[gf]:i.NEVER,[bf]:i.ALWAYS,[vf]:i.LESS,[Ou]:i.LEQUAL,[_f]:i.EQUAL,[Mf]:i.GEQUAL,[xf]:i.GREATER,[yf]:i.NOTEQUAL};function Mt(R,b){if(b.type===Sn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===bn||b.magFilter===da||b.magFilter===er||b.magFilter===gi||b.minFilter===bn||b.minFilter===da||b.minFilter===er||b.minFilter===gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,rt[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,rt[b.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,rt[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,it[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,it[b.minFilter]),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,at[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===tn||b.minFilter!==er&&b.minFilter!==gi||b.type===Sn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Bt(R,b){let et=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",C));const lt=b.source;let _t=f.get(lt);_t===void 0&&(_t={},f.set(lt,_t));const mt=tt(b);if(mt!==R.__cacheKey){_t[mt]===void 0&&(_t[mt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,et=!0),_t[mt].usedTimes++;const bt=_t[R.__cacheKey];bt!==void 0&&(_t[R.__cacheKey].usedTimes--,bt.usedTimes===0&&x(b)),R.__cacheKey=mt,R.__webglTexture=_t[mt].texture}return et}function U(R,b,et){let lt=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(lt=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(lt=i.TEXTURE_3D);const _t=Bt(R,b),mt=b.source;e.bindTexture(lt,R.__webglTexture,i.TEXTURE0+et);const bt=n.get(mt);if(mt.version!==bt.__version||_t===!0){e.activeTexture(i.TEXTURE0+et);const vt=Qt.getPrimaries(Qt.workingColorSpace),gt=b.colorSpace===Jn?null:Qt.getPrimaries(b.colorSpace),Dt=b.colorSpace===Jn||vt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let E=v(b.image,!1,s.maxTextureSize);E=kt(b,E);const O=r.convert(b.format,b.colorSpace),L=r.convert(b.type);let q=w(b.internalFormat,O,L,b.colorSpace,b.isVideoTexture);Mt(lt,b);let nt;const dt=b.mipmaps,yt=b.isVideoTexture!==!0,Pt=bt.__version===void 0||_t===!0,k=mt.dataReady,Et=W(b,E);if(b.isDepthTexture)q=y(b.format===ns,b.type),Pt&&(yt?e.texStorage2D(i.TEXTURE_2D,1,q,E.width,E.height):e.texImage2D(i.TEXTURE_2D,0,q,E.width,E.height,0,O,L,null));else if(b.isDataTexture)if(dt.length>0){yt&&Pt&&e.texStorage2D(i.TEXTURE_2D,Et,q,dt[0].width,dt[0].height);for(let st=0,xt=dt.length;st<xt;st++)nt=dt[st],yt?k&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,nt.width,nt.height,O,L,nt.data):e.texImage2D(i.TEXTURE_2D,st,q,nt.width,nt.height,0,O,L,nt.data);b.generateMipmaps=!1}else yt?(Pt&&e.texStorage2D(i.TEXTURE_2D,Et,q,E.width,E.height),k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,O,L,E.data)):e.texImage2D(i.TEXTURE_2D,0,q,E.width,E.height,0,O,L,E.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){yt&&Pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,q,dt[0].width,dt[0].height,E.depth);for(let st=0,xt=dt.length;st<xt;st++)if(nt=dt[st],b.format!==vn)if(O!==null)if(yt){if(k)if(b.layerUpdates.size>0){const Nt=Uc(nt.width,nt.height,b.format,b.type);for(const Ut of b.layerUpdates){const qt=nt.data.subarray(Ut*Nt/nt.data.BYTES_PER_ELEMENT,(Ut+1)*Nt/nt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,Ut,nt.width,nt.height,1,O,qt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,nt.width,nt.height,E.depth,O,nt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,q,nt.width,nt.height,E.depth,0,nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else yt?k&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,nt.width,nt.height,E.depth,O,L,nt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,q,nt.width,nt.height,E.depth,0,O,L,nt.data)}else{yt&&Pt&&e.texStorage2D(i.TEXTURE_2D,Et,q,dt[0].width,dt[0].height);for(let st=0,xt=dt.length;st<xt;st++)nt=dt[st],b.format!==vn?O!==null?yt?k&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,nt.width,nt.height,O,nt.data):e.compressedTexImage2D(i.TEXTURE_2D,st,q,nt.width,nt.height,0,nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):yt?k&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,nt.width,nt.height,O,L,nt.data):e.texImage2D(i.TEXTURE_2D,st,q,nt.width,nt.height,0,O,L,nt.data)}else if(b.isDataArrayTexture)if(yt){if(Pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,q,E.width,E.height,E.depth),k)if(b.layerUpdates.size>0){const st=Uc(E.width,E.height,b.format,b.type);for(const xt of b.layerUpdates){const Nt=E.data.subarray(xt*st/E.data.BYTES_PER_ELEMENT,(xt+1)*st/E.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,xt,E.width,E.height,1,O,L,Nt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,E.width,E.height,E.depth,O,L,E.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,q,E.width,E.height,E.depth,0,O,L,E.data);else if(b.isData3DTexture)yt?(Pt&&e.texStorage3D(i.TEXTURE_3D,Et,q,E.width,E.height,E.depth),k&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,E.width,E.height,E.depth,O,L,E.data)):e.texImage3D(i.TEXTURE_3D,0,q,E.width,E.height,E.depth,0,O,L,E.data);else if(b.isFramebufferTexture){if(Pt)if(yt)e.texStorage2D(i.TEXTURE_2D,Et,q,E.width,E.height);else{let st=E.width,xt=E.height;for(let Nt=0;Nt<Et;Nt++)e.texImage2D(i.TEXTURE_2D,Nt,q,st,xt,0,O,L,null),st>>=1,xt>>=1}}else if(dt.length>0){if(yt&&Pt){const st=Lt(dt[0]);e.texStorage2D(i.TEXTURE_2D,Et,q,st.width,st.height)}for(let st=0,xt=dt.length;st<xt;st++)nt=dt[st],yt?k&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,O,L,nt):e.texImage2D(i.TEXTURE_2D,st,q,O,L,nt);b.generateMipmaps=!1}else if(yt){if(Pt){const st=Lt(E);e.texStorage2D(i.TEXTURE_2D,Et,q,st.width,st.height)}k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,O,L,E)}else e.texImage2D(i.TEXTURE_2D,0,q,O,L,E);p(b)&&m(lt),bt.__version=mt.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Z(R,b,et){if(b.image.length!==6)return;const lt=Bt(R,b),_t=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+et);const mt=n.get(_t);if(_t.version!==mt.__version||lt===!0){e.activeTexture(i.TEXTURE0+et);const bt=Qt.getPrimaries(Qt.workingColorSpace),vt=b.colorSpace===Jn?null:Qt.getPrimaries(b.colorSpace),gt=b.colorSpace===Jn||bt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const Dt=b.isCompressedTexture||b.image[0].isCompressedTexture,E=b.image[0]&&b.image[0].isDataTexture,O=[];for(let xt=0;xt<6;xt++)!Dt&&!E?O[xt]=v(b.image[xt],!0,s.maxCubemapSize):O[xt]=E?b.image[xt].image:b.image[xt],O[xt]=kt(b,O[xt]);const L=O[0],q=r.convert(b.format,b.colorSpace),nt=r.convert(b.type),dt=w(b.internalFormat,q,nt,b.colorSpace),yt=b.isVideoTexture!==!0,Pt=mt.__version===void 0||lt===!0,k=_t.dataReady;let Et=W(b,L);Mt(i.TEXTURE_CUBE_MAP,b);let st;if(Dt){yt&&Pt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,dt,L.width,L.height);for(let xt=0;xt<6;xt++){st=O[xt].mipmaps;for(let Nt=0;Nt<st.length;Nt++){const Ut=st[Nt];b.format!==vn?q!==null?yt?k&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Nt,0,0,Ut.width,Ut.height,q,Ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Nt,dt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):yt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Nt,0,0,Ut.width,Ut.height,q,nt,Ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Nt,dt,Ut.width,Ut.height,0,q,nt,Ut.data)}}}else{if(st=b.mipmaps,yt&&Pt){st.length>0&&Et++;const xt=Lt(O[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,dt,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(E){yt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,O[xt].width,O[xt].height,q,nt,O[xt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,dt,O[xt].width,O[xt].height,0,q,nt,O[xt].data);for(let Nt=0;Nt<st.length;Nt++){const qt=st[Nt].image[xt].image;yt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Nt+1,0,0,qt.width,qt.height,q,nt,qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Nt+1,dt,qt.width,qt.height,0,q,nt,qt.data)}}else{yt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,q,nt,O[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,dt,q,nt,O[xt]);for(let Nt=0;Nt<st.length;Nt++){const Ut=st[Nt];yt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Nt+1,0,0,q,nt,Ut.image[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Nt+1,dt,q,nt,Ut.image[xt])}}}p(b)&&m(i.TEXTURE_CUBE_MAP),mt.__version=_t.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Y(R,b,et,lt,_t,mt){const bt=r.convert(et.format,et.colorSpace),vt=r.convert(et.type),gt=w(et.internalFormat,bt,vt,et.colorSpace),Dt=n.get(b),E=n.get(et);if(E.__renderTarget=b,!Dt.__hasExternalTextures){const O=Math.max(1,b.width>>mt),L=Math.max(1,b.height>>mt);_t===i.TEXTURE_3D||_t===i.TEXTURE_2D_ARRAY?e.texImage3D(_t,mt,gt,O,L,b.depth,0,bt,vt,null):e.texImage2D(_t,mt,gt,O,L,0,bt,vt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),At(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,_t,E.__webglTexture,0,pt(b)):(_t===i.TEXTURE_2D||_t>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&_t<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,lt,_t,E.__webglTexture,mt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function F(R,b,et){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer){const lt=b.depthTexture,_t=lt&&lt.isDepthTexture?lt.type:null,mt=y(b.stencilBuffer,_t),bt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=pt(b);At(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt,mt,b.width,b.height):et?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,mt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,mt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,R)}else{const lt=b.textures;for(let _t=0;_t<lt.length;_t++){const mt=lt[_t],bt=r.convert(mt.format,mt.colorSpace),vt=r.convert(mt.type),gt=w(mt.internalFormat,bt,vt,mt.colorSpace),Dt=pt(b);et&&At(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,gt,b.width,b.height):At(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Dt,gt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,gt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function j(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const lt=n.get(b.depthTexture);lt.__renderTarget=b,(!lt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),N(b.depthTexture,0);const _t=lt.__webglTexture,mt=pt(b);if(b.depthTexture.format===ji)At(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,_t,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,_t,0);else if(b.depthTexture.format===ns)At(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,_t,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,_t,0);else throw new Error("Unknown depthTexture format")}function ot(R){const b=n.get(R),et=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const lt=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),lt){const _t=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,lt.removeEventListener("dispose",_t)};lt.addEventListener("dispose",_t),b.__depthDisposeCallback=_t}b.__boundDepthTexture=lt}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");j(b.__webglFramebuffer,R)}else if(et){b.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[lt]),b.__webglDepthbuffer[lt]===void 0)b.__webglDepthbuffer[lt]=i.createRenderbuffer(),F(b.__webglDepthbuffer[lt],R,!1);else{const _t=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=b.__webglDepthbuffer[lt];i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,mt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),F(b.__webglDepthbuffer,R,!1);else{const lt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,_t),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,_t)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(R,b,et){const lt=n.get(R);b!==void 0&&Y(lt.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),et!==void 0&&ot(R)}function $(R){const b=R.texture,et=n.get(R),lt=n.get(b);R.addEventListener("dispose",I);const _t=R.textures,mt=R.isWebGLCubeRenderTarget===!0,bt=_t.length>1;if(bt||(lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture()),lt.__version=b.version,o.memory.textures++),mt){et.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(b.mipmaps&&b.mipmaps.length>0){et.__webglFramebuffer[vt]=[];for(let gt=0;gt<b.mipmaps.length;gt++)et.__webglFramebuffer[vt][gt]=i.createFramebuffer()}else et.__webglFramebuffer[vt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){et.__webglFramebuffer=[];for(let vt=0;vt<b.mipmaps.length;vt++)et.__webglFramebuffer[vt]=i.createFramebuffer()}else et.__webglFramebuffer=i.createFramebuffer();if(bt)for(let vt=0,gt=_t.length;vt<gt;vt++){const Dt=n.get(_t[vt]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&At(R)===!1){et.__webglMultisampledFramebuffer=i.createFramebuffer(),et.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let vt=0;vt<_t.length;vt++){const gt=_t[vt];et.__webglColorRenderbuffer[vt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,et.__webglColorRenderbuffer[vt]);const Dt=r.convert(gt.format,gt.colorSpace),E=r.convert(gt.type),O=w(gt.internalFormat,Dt,E,gt.colorSpace,R.isXRRenderTarget===!0),L=pt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,L,O,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,et.__webglColorRenderbuffer[vt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(et.__webglDepthRenderbuffer=i.createRenderbuffer(),F(et.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(mt){e.bindTexture(i.TEXTURE_CUBE_MAP,lt.__webglTexture),Mt(i.TEXTURE_CUBE_MAP,b);for(let vt=0;vt<6;vt++)if(b.mipmaps&&b.mipmaps.length>0)for(let gt=0;gt<b.mipmaps.length;gt++)Y(et.__webglFramebuffer[vt][gt],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,gt);else Y(et.__webglFramebuffer[vt],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);p(b)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let vt=0,gt=_t.length;vt<gt;vt++){const Dt=_t[vt],E=n.get(Dt);e.bindTexture(i.TEXTURE_2D,E.__webglTexture),Mt(i.TEXTURE_2D,Dt),Y(et.__webglFramebuffer,R,Dt,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,0),p(Dt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let vt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(vt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,lt.__webglTexture),Mt(vt,b),b.mipmaps&&b.mipmaps.length>0)for(let gt=0;gt<b.mipmaps.length;gt++)Y(et.__webglFramebuffer[gt],R,b,i.COLOR_ATTACHMENT0,vt,gt);else Y(et.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,vt,0);p(b)&&m(vt),e.unbindTexture()}R.depthBuffer&&ot(R)}function G(R){const b=R.textures;for(let et=0,lt=b.length;et<lt;et++){const _t=b[et];if(p(_t)){const mt=M(R),bt=n.get(_t).__webglTexture;e.bindTexture(mt,bt),m(mt),e.unbindTexture()}}}const ct=[],P=[];function Tt(R){if(R.samples>0){if(At(R)===!1){const b=R.textures,et=R.width,lt=R.height;let _t=i.COLOR_BUFFER_BIT;const mt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(R),vt=b.length>1;if(vt)for(let gt=0;gt<b.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let gt=0;gt<b.length;gt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(_t|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(_t|=i.STENCIL_BUFFER_BIT)),vt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[gt]);const Dt=n.get(b[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Dt,0)}i.blitFramebuffer(0,0,et,lt,0,0,et,lt,_t,i.NEAREST),l===!0&&(ct.length=0,P.length=0,ct.push(i.COLOR_ATTACHMENT0+gt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ct.push(mt),P.push(mt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ct))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),vt)for(let gt=0;gt<b.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,bt.__webglColorRenderbuffer[gt]);const Dt=n.get(b[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,Dt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const b=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function pt(R){return Math.min(s.maxSamples,R.samples)}function At(R){const b=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function wt(R){const b=o.render.frame;u.get(R)!==b&&(u.set(R,b),R.update())}function kt(R,b){const et=R.colorSpace,lt=R.format,_t=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||et!==rs&&et!==Jn&&(Qt.getTransfer(et)===oe?(lt!==vn||_t!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),b}function Lt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=V,this.setTexture2D=N,this.setTexture2DArray=D,this.setTexture3D=X,this.setTextureCube=z,this.rebindTextures=ft,this.setupRenderTarget=$,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=At}function Eg(i,t){function e(n,s=Jn){let r;const o=Qt.getTransfer(s);if(n===Vn)return i.UNSIGNED_BYTE;if(n===ll)return i.UNSIGNED_SHORT_4_4_4_4;if(n===cl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ru)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Au)return i.BYTE;if(n===Cu)return i.SHORT;if(n===Vs)return i.UNSIGNED_SHORT;if(n===ol)return i.INT;if(n===xi)return i.UNSIGNED_INT;if(n===Sn)return i.FLOAT;if(n===wn)return i.HALF_FLOAT;if(n===Pu)return i.ALPHA;if(n===Lu)return i.RGB;if(n===vn)return i.RGBA;if(n===Du)return i.LUMINANCE;if(n===Iu)return i.LUMINANCE_ALPHA;if(n===ji)return i.DEPTH_COMPONENT;if(n===ns)return i.DEPTH_STENCIL;if(n===ul)return i.RED;if(n===hl)return i.RED_INTEGER;if(n===Uu)return i.RG;if(n===fl)return i.RG_INTEGER;if(n===dl)return i.RGBA_INTEGER;if(n===zr||n===kr||n===Vr||n===Hr)if(o===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Hr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===go||n===vo||n===_o||n===xo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===go)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_o)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yo||n===Mo||n===bo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===yo||n===Mo)return o===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===bo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===So||n===wo||n===Eo||n===To||n===Ao||n===Co||n===Ro||n===Po||n===Lo||n===Do||n===Io||n===Uo||n===No||n===Fo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===So)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Eo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===To)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ao)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Co)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ro)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Po)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Lo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Do)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Io)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Uo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===No)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Gr||n===Oo||n===Bo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Gr)return o===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nu||n===zo||n===ko||n===Vo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Gr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===zo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ko)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Tg extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class an extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ag={type:"move"};class Ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new an,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new an,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new an,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,n),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ag)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new an;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Cg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Pg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Fe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Se({vertexShader:Cg,fragmentShader:Rg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Jt(new js(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Lg extends as{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const v=new Pg,p=e.getContextAttributes();let m=null,M=null;const w=[],y=[],W=new St;let C=null;const I=new Ke;I.viewport=new ce;const S=new Ke;S.viewport=new ce;const x=[I,S],_=new Tg;let T=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let Z=w[U];return Z===void 0&&(Z=new Ha,w[U]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(U){let Z=w[U];return Z===void 0&&(Z=new Ha,w[U]=Z),Z.getGripSpace()},this.getHand=function(U){let Z=w[U];return Z===void 0&&(Z=new Ha,w[U]=Z),Z.getHandSpace()};function H(U){const Z=y.indexOf(U.inputSource);if(Z===-1)return;const Y=w[Z];Y!==void 0&&(Y.update(U.inputSource,U.frame,c||o),Y.dispatchEvent({type:U.type,data:U.inputSource}))}function tt(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",tt),s.removeEventListener("inputsourceschange",N);for(let U=0;U<w.length;U++){const Z=y[U];Z!==null&&(y[U]=null,w[U].disconnect(Z))}T=null,V=null,v.reset(),t.setRenderTarget(m),d=null,f=null,h=null,s=null,M=null,Bt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(W.width,W.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(U){if(s=U,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",tt),s.addEventListener("inputsourceschange",N),p.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(W),s.renderState.layers===void 0){const Z={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Z),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new on(d.framebufferWidth,d.framebufferHeight,{format:vn,type:Vn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let Z=null,Y=null,F=null;p.depth&&(F=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=p.stencil?ns:ji,Y=p.stencil?es:xi);const j={colorFormat:e.RGBA8,depthFormat:F,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(j),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new on(f.textureWidth,f.textureHeight,{format:vn,type:Vn,depthTexture:new Yu(f.textureWidth,f.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Bt.setContext(s),Bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function N(U){for(let Z=0;Z<U.removed.length;Z++){const Y=U.removed[Z],F=y.indexOf(Y);F>=0&&(y[F]=null,w[F].disconnect(Y))}for(let Z=0;Z<U.added.length;Z++){const Y=U.added[Z];let F=y.indexOf(Y);if(F===-1){for(let ot=0;ot<w.length;ot++)if(ot>=y.length){y.push(Y),F=ot;break}else if(y[ot]===null){y[ot]=Y,F=ot;break}if(F===-1)break}const j=w[F];j&&j.connect(Y)}}const D=new B,X=new B;function z(U,Z,Y){D.setFromMatrixPosition(Z.matrixWorld),X.setFromMatrixPosition(Y.matrixWorld);const F=D.distanceTo(X),j=Z.projectionMatrix.elements,ot=Y.projectionMatrix.elements,ft=j[14]/(j[10]-1),$=j[14]/(j[10]+1),G=(j[9]+1)/j[5],ct=(j[9]-1)/j[5],P=(j[8]-1)/j[0],Tt=(ot[8]+1)/ot[0],pt=ft*P,At=ft*Tt,wt=F/(-P+Tt),kt=wt*-P;if(Z.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(kt),U.translateZ(wt),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),j[10]===-1)U.projectionMatrix.copy(Z.projectionMatrix),U.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const Lt=ft+wt,R=$+wt,b=pt-kt,et=At+(F-kt),lt=G*$/R*Lt,_t=ct*$/R*Lt;U.projectionMatrix.makePerspective(b,et,lt,_t,Lt,R),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function rt(U,Z){Z===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(Z.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(s===null)return;let Z=U.near,Y=U.far;v.texture!==null&&(v.depthNear>0&&(Z=v.depthNear),v.depthFar>0&&(Y=v.depthFar)),_.near=S.near=I.near=Z,_.far=S.far=I.far=Y,(T!==_.near||V!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),T=_.near,V=_.far),I.layers.mask=U.layers.mask|2,S.layers.mask=U.layers.mask|4,_.layers.mask=I.layers.mask|S.layers.mask;const F=U.parent,j=_.cameras;rt(_,F);for(let ot=0;ot<j.length;ot++)rt(j[ot],F);j.length===2?z(_,I,S):_.projectionMatrix.copy(I.projectionMatrix),it(U,_,F)};function it(U,Z,Y){Y===null?U.matrix.copy(Z.matrixWorld):(U.matrix.copy(Y.matrixWorld),U.matrix.invert(),U.matrix.multiply(Z.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(Z.projectionMatrix),U.projectionMatrixInverse.copy(Z.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=Ho*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(U){l=U,f!==null&&(f.fixedFoveation=U),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=U)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let at=null;function Mt(U,Z){if(u=Z.getViewerPose(c||o),g=Z,u!==null){const Y=u.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let F=!1;Y.length!==_.cameras.length&&(_.cameras.length=0,F=!0);for(let ot=0;ot<Y.length;ot++){const ft=Y[ot];let $=null;if(d!==null)$=d.getViewport(ft);else{const ct=h.getViewSubImage(f,ft);$=ct.viewport,ot===0&&(t.setRenderTargetTextures(M,ct.colorTexture,f.ignoreDepthValues?void 0:ct.depthStencilTexture),t.setRenderTarget(M))}let G=x[ot];G===void 0&&(G=new Ke,G.layers.enable(ot),G.viewport=new ce,x[ot]=G),G.matrix.fromArray(ft.transform.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale),G.projectionMatrix.fromArray(ft.projectionMatrix),G.projectionMatrixInverse.copy(G.projectionMatrix).invert(),G.viewport.set($.x,$.y,$.width,$.height),ot===0&&(_.matrix.copy(G.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),F===!0&&_.cameras.push(G)}const j=s.enabledFeatures;if(j&&j.includes("depth-sensing")){const ot=h.getDepthInformation(Y[0]);ot&&ot.isValid&&ot.texture&&v.init(t,ot,s.renderState)}}for(let Y=0;Y<w.length;Y++){const F=y[Y],j=w[Y];F!==null&&j!==void 0&&j.update(F,Z,c||o)}at&&at(U,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const Bt=new qu;Bt.setAnimationLoop(Mt),this.setAnimationLoop=function(U){at=U},this.dispose=function(){}}}const ci=new xn,Dg=new ae;function Ig(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Wu(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,M,w,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,M,w):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===We&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===We&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=t.get(m),w=M.envMap,y=M.envMapRotation;w&&(p.envMap.value=w,ci.copy(y),ci.x*=-1,ci.y*=-1,ci.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),p.envMapRotation.value.setFromMatrix4(Dg.makeRotationFromEuler(ci)),p.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,w){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=w*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===We&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const M=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ug(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,w){const y=w.program;n.uniformBlockBinding(M,y)}function c(M,w){let y=s[M.id];y===void 0&&(g(M),y=u(M),s[M.id]=y,M.addEventListener("dispose",p));const W=w.program;n.updateUBOMapping(M,W);const C=t.render.frame;r[M.id]!==C&&(f(M),r[M.id]=C)}function u(M){const w=h();M.__bindingPointIndex=w;const y=i.createBuffer(),W=M.__size,C=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,W,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,y),y}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const w=s[M.id],y=M.uniforms,W=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let C=0,I=y.length;C<I;C++){const S=Array.isArray(y[C])?y[C]:[y[C]];for(let x=0,_=S.length;x<_;x++){const T=S[x];if(d(T,C,x,W)===!0){const V=T.__offset,H=Array.isArray(T.value)?T.value:[T.value];let tt=0;for(let N=0;N<H.length;N++){const D=H[N],X=v(D);typeof D=="number"||typeof D=="boolean"?(T.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,V+tt,T.__data)):D.isMatrix3?(T.__data[0]=D.elements[0],T.__data[1]=D.elements[1],T.__data[2]=D.elements[2],T.__data[3]=0,T.__data[4]=D.elements[3],T.__data[5]=D.elements[4],T.__data[6]=D.elements[5],T.__data[7]=0,T.__data[8]=D.elements[6],T.__data[9]=D.elements[7],T.__data[10]=D.elements[8],T.__data[11]=0):(D.toArray(T.__data,tt),tt+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,w,y,W){const C=M.value,I=w+"_"+y;if(W[I]===void 0)return typeof C=="number"||typeof C=="boolean"?W[I]=C:W[I]=C.clone(),!0;{const S=W[I];if(typeof C=="number"||typeof C=="boolean"){if(S!==C)return W[I]=C,!0}else if(S.equals(C)===!1)return S.copy(C),!0}return!1}function g(M){const w=M.uniforms;let y=0;const W=16;for(let I=0,S=w.length;I<S;I++){const x=Array.isArray(w[I])?w[I]:[w[I]];for(let _=0,T=x.length;_<T;_++){const V=x[_],H=Array.isArray(V.value)?V.value:[V.value];for(let tt=0,N=H.length;tt<N;tt++){const D=H[tt],X=v(D),z=y%W,rt=z%X.boundary,it=z+rt;y+=rt,it!==0&&W-it<X.storage&&(y+=W-it),V.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=y,y+=X.storage}}}const C=y%W;return C>0&&(y+=W-C),M.__size=y,M.__cache={},this}function v(M){const w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),w}function p(M){const w=M.target;w.removeEventListener("dispose",p);const y=o.indexOf(w.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function m(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class Qu{constructor(t={}){const{canvas:e=wf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),v=new Int32Array(4);let p=null,m=null;const M=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ze,this.toneMapping=Qn,this.toneMappingExposure=1;const y=this;let W=!1,C=0,I=0,S=null,x=-1,_=null;const T=new ce,V=new ce;let H=null;const tt=new Ot(0);let N=0,D=e.width,X=e.height,z=1,rt=null,it=null;const at=new ce(0,0,D,X),Mt=new ce(0,0,D,X);let Bt=!1;const U=new gl;let Z=!1,Y=!1;const F=new ae,j=new ae,ot=new B,ft=new ce,$={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let G=!1;function ct(){return S===null?z:1}let P=n;function Tt(A,J){return e.getContext(A,J)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${rl}`),e.addEventListener("webglcontextlost",xt,!1),e.addEventListener("webglcontextrestored",Nt,!1),e.addEventListener("webglcontextcreationerror",Ut,!1),P===null){const J="webgl2";if(P=Tt(J,A),P===null)throw Tt(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let pt,At,wt,kt,Lt,R,b,et,lt,_t,mt,bt,vt,gt,Dt,E,O,L,q,nt,dt,yt,Pt,k;function Et(){pt=new k0(P),pt.init(),yt=new Eg(P,pt),At=new U0(P,pt,t,yt),wt=new bg(P,pt),At.reverseDepthBuffer&&f&&wt.buffers.depth.setReversed(!0),kt=new G0(P),Lt=new og,R=new wg(P,pt,wt,Lt,At,yt,kt),b=new F0(y),et=new z0(y),lt=new Zf(P),Pt=new D0(P,lt),_t=new V0(P,lt,kt,Pt),mt=new X0(P,_t,lt,kt),q=new W0(P,At,R),E=new N0(Lt),bt=new ag(y,b,et,pt,At,Pt,E),vt=new Ig(y,Lt),gt=new cg,Dt=new mg(pt),L=new L0(y,b,et,wt,mt,d,l),O=new yg(y,mt,At),k=new Ug(P,kt,At,wt),nt=new I0(P,pt,kt),dt=new H0(P,pt,kt),kt.programs=bt.programs,y.capabilities=At,y.extensions=pt,y.properties=Lt,y.renderLists=gt,y.shadowMap=O,y.state=wt,y.info=kt}Et();const st=new Lg(y,P);this.xr=st,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const A=pt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=pt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(D,X,!1))},this.getSize=function(A){return A.set(D,X)},this.setSize=function(A,J,ut=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=A,X=J,e.width=Math.floor(A*z),e.height=Math.floor(J*z),ut===!0&&(e.style.width=A+"px",e.style.height=J+"px"),this.setViewport(0,0,A,J)},this.getDrawingBufferSize=function(A){return A.set(D*z,X*z).floor()},this.setDrawingBufferSize=function(A,J,ut){D=A,X=J,z=ut,e.width=Math.floor(A*ut),e.height=Math.floor(J*ut),this.setViewport(0,0,A,J)},this.getCurrentViewport=function(A){return A.copy(T)},this.getViewport=function(A){return A.copy(at)},this.setViewport=function(A,J,ut,ht){A.isVector4?at.set(A.x,A.y,A.z,A.w):at.set(A,J,ut,ht),wt.viewport(T.copy(at).multiplyScalar(z).round())},this.getScissor=function(A){return A.copy(Mt)},this.setScissor=function(A,J,ut,ht){A.isVector4?Mt.set(A.x,A.y,A.z,A.w):Mt.set(A,J,ut,ht),wt.scissor(V.copy(Mt).multiplyScalar(z).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(A){wt.setScissorTest(Bt=A)},this.setOpaqueSort=function(A){rt=A},this.setTransparentSort=function(A){it=A},this.getClearColor=function(A){return A.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor.apply(L,arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha.apply(L,arguments)},this.clear=function(A=!0,J=!0,ut=!0){let ht=0;if(A){let Q=!1;if(S!==null){const Ct=S.texture.format;Q=Ct===dl||Ct===fl||Ct===hl}if(Q){const Ct=S.texture.type,zt=Ct===Vn||Ct===xi||Ct===Vs||Ct===es||Ct===ll||Ct===cl,Ht=L.getClearColor(),Gt=L.getClearAlpha(),Yt=Ht.r,jt=Ht.g,Wt=Ht.b;zt?(g[0]=Yt,g[1]=jt,g[2]=Wt,g[3]=Gt,P.clearBufferuiv(P.COLOR,0,g)):(v[0]=Yt,v[1]=jt,v[2]=Wt,v[3]=Gt,P.clearBufferiv(P.COLOR,0,v))}else ht|=P.COLOR_BUFFER_BIT}J&&(ht|=P.DEPTH_BUFFER_BIT),ut&&(ht|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(ht)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xt,!1),e.removeEventListener("webglcontextrestored",Nt,!1),e.removeEventListener("webglcontextcreationerror",Ut,!1),gt.dispose(),Dt.dispose(),Lt.dispose(),b.dispose(),et.dispose(),mt.dispose(),Pt.dispose(),k.dispose(),bt.dispose(),st.dispose(),st.removeEventListener("sessionstart",Pl),st.removeEventListener("sessionend",Ll),ii.stop()};function xt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),W=!0}function Nt(){console.log("THREE.WebGLRenderer: Context Restored."),W=!1;const A=kt.autoReset,J=O.enabled,ut=O.autoUpdate,ht=O.needsUpdate,Q=O.type;Et(),kt.autoReset=A,O.enabled=J,O.autoUpdate=ut,O.needsUpdate=ht,O.type=Q}function Ut(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function qt(A){const J=A.target;J.removeEventListener("dispose",qt),ie(J)}function ie(A){ye(A),Lt.remove(A)}function ye(A){const J=Lt.get(A).programs;J!==void 0&&(J.forEach(function(ut){bt.releaseProgram(ut)}),A.isShaderMaterial&&bt.releaseShaderCache(A))}this.renderBufferDirect=function(A,J,ut,ht,Q,Ct){J===null&&(J=$);const zt=Q.isMesh&&Q.matrixWorld.determinant()<0,Ht=zh(A,J,ut,ht,Q);wt.setMaterial(ht,zt);let Gt=ut.index,Yt=1;if(ht.wireframe===!0){if(Gt=_t.getWireframeAttribute(ut),Gt===void 0)return;Yt=2}const jt=ut.drawRange,Wt=ut.attributes.position;let ne=jt.start*Yt,he=(jt.start+jt.count)*Yt;Ct!==null&&(ne=Math.max(ne,Ct.start*Yt),he=Math.min(he,(Ct.start+Ct.count)*Yt)),Gt!==null?(ne=Math.max(ne,0),he=Math.min(he,Gt.count)):Wt!=null&&(ne=Math.max(ne,0),he=Math.min(he,Wt.count));const fe=he-ne;if(fe<0||fe===1/0)return;Pt.setup(Q,ht,Ht,ut,Gt);let ze,se=nt;if(Gt!==null&&(ze=lt.get(Gt),se=dt,se.setIndex(ze)),Q.isMesh)ht.wireframe===!0?(wt.setLineWidth(ht.wireframeLinewidth*ct()),se.setMode(P.LINES)):se.setMode(P.TRIANGLES);else if(Q.isLine){let $t=ht.linewidth;$t===void 0&&($t=1),wt.setLineWidth($t*ct()),Q.isLineSegments?se.setMode(P.LINES):Q.isLineLoop?se.setMode(P.LINE_LOOP):se.setMode(P.LINE_STRIP)}else Q.isPoints?se.setMode(P.POINTS):Q.isSprite&&se.setMode(P.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)se.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))se.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const $t=Q._multiDrawStarts,Cn=Q._multiDrawCounts,re=Q._multiDrawCount,un=Gt?lt.get(Gt).bytesPerElement:1,Si=Lt.get(ht).currentProgram.getUniforms();for(let $e=0;$e<re;$e++)Si.setValue(P,"_gl_DrawID",$e),se.render($t[$e]/un,Cn[$e])}else if(Q.isInstancedMesh)se.renderInstances(ne,fe,Q.count);else if(ut.isInstancedBufferGeometry){const $t=ut._maxInstanceCount!==void 0?ut._maxInstanceCount:1/0,Cn=Math.min(ut.instanceCount,$t);se.renderInstances(ne,fe,Cn)}else se.render(ne,fe)};function ee(A,J,ut){A.transparent===!0&&A.side===sn&&A.forceSinglePass===!1?(A.side=We,A.needsUpdate=!0,tr(A,J,ut),A.side=ei,A.needsUpdate=!0,tr(A,J,ut),A.side=sn):tr(A,J,ut)}this.compile=function(A,J,ut=null){ut===null&&(ut=A),m=Dt.get(ut),m.init(J),w.push(m),ut.traverseVisible(function(Q){Q.isLight&&Q.layers.test(J.layers)&&(m.pushLight(Q),Q.castShadow&&m.pushShadow(Q))}),A!==ut&&A.traverseVisible(function(Q){Q.isLight&&Q.layers.test(J.layers)&&(m.pushLight(Q),Q.castShadow&&m.pushShadow(Q))}),m.setupLights();const ht=new Set;return A.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Ct=Q.material;if(Ct)if(Array.isArray(Ct))for(let zt=0;zt<Ct.length;zt++){const Ht=Ct[zt];ee(Ht,ut,Q),ht.add(Ht)}else ee(Ct,ut,Q),ht.add(Ct)}),w.pop(),m=null,ht},this.compileAsync=function(A,J,ut=null){const ht=this.compile(A,J,ut);return new Promise(Q=>{function Ct(){if(ht.forEach(function(zt){Lt.get(zt).currentProgram.isReady()&&ht.delete(zt)}),ht.size===0){Q(A);return}setTimeout(Ct,10)}pt.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let cn=null;function An(A){cn&&cn(A)}function Pl(){ii.stop()}function Ll(){ii.start()}const ii=new qu;ii.setAnimationLoop(An),typeof self<"u"&&ii.setContext(self),this.setAnimationLoop=function(A){cn=A,st.setAnimationLoop(A),A===null?ii.stop():ii.start()},st.addEventListener("sessionstart",Pl),st.addEventListener("sessionend",Ll),this.render=function(A,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(J),J=st.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,J,S),m=Dt.get(A,w.length),m.init(J),w.push(m),j.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),U.setFromProjectionMatrix(j),Y=this.localClippingEnabled,Z=E.init(this.clippingPlanes,Y),p=gt.get(A,M.length),p.init(),M.push(p),st.enabled===!0&&st.isPresenting===!0){const Ct=y.xr.getDepthSensingMesh();Ct!==null&&fa(Ct,J,-1/0,y.sortObjects)}fa(A,J,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort(rt,it),G=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,G&&L.addToRenderList(p,A),this.info.render.frame++,Z===!0&&E.beginShadows();const ut=m.state.shadowsArray;O.render(ut,A,J),Z===!0&&E.endShadows(),this.info.autoReset===!0&&this.info.reset();const ht=p.opaque,Q=p.transmissive;if(m.setupLights(),J.isArrayCamera){const Ct=J.cameras;if(Q.length>0)for(let zt=0,Ht=Ct.length;zt<Ht;zt++){const Gt=Ct[zt];Il(ht,Q,A,Gt)}G&&L.render(A);for(let zt=0,Ht=Ct.length;zt<Ht;zt++){const Gt=Ct[zt];Dl(p,A,Gt,Gt.viewport)}}else Q.length>0&&Il(ht,Q,A,J),G&&L.render(A),Dl(p,A,J);S!==null&&(R.updateMultisampleRenderTarget(S),R.updateRenderTargetMipmap(S)),A.isScene===!0&&A.onAfterRender(y,A,J),Pt.resetDefaultState(),x=-1,_=null,w.pop(),w.length>0?(m=w[w.length-1],Z===!0&&E.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,M.pop(),M.length>0?p=M[M.length-1]:p=null};function fa(A,J,ut,ht){if(A.visible===!1)return;if(A.layers.test(J.layers)){if(A.isGroup)ut=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(J);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||U.intersectsSprite(A)){ht&&ft.setFromMatrixPosition(A.matrixWorld).applyMatrix4(j);const zt=mt.update(A),Ht=A.material;Ht.visible&&p.push(A,zt,Ht,ut,ft.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||U.intersectsObject(A))){const zt=mt.update(A),Ht=A.material;if(ht&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ft.copy(A.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),ft.copy(zt.boundingSphere.center)),ft.applyMatrix4(A.matrixWorld).applyMatrix4(j)),Array.isArray(Ht)){const Gt=zt.groups;for(let Yt=0,jt=Gt.length;Yt<jt;Yt++){const Wt=Gt[Yt],ne=Ht[Wt.materialIndex];ne&&ne.visible&&p.push(A,zt,ne,ut,ft.z,Wt)}}else Ht.visible&&p.push(A,zt,Ht,ut,ft.z,null)}}const Ct=A.children;for(let zt=0,Ht=Ct.length;zt<Ht;zt++)fa(Ct[zt],J,ut,ht)}function Dl(A,J,ut,ht){const Q=A.opaque,Ct=A.transmissive,zt=A.transparent;m.setupLightsView(ut),Z===!0&&E.setGlobalState(y.clippingPlanes,ut),ht&&wt.viewport(T.copy(ht)),Q.length>0&&Qs(Q,J,ut),Ct.length>0&&Qs(Ct,J,ut),zt.length>0&&Qs(zt,J,ut),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function Il(A,J,ut,ht){if((ut.isScene===!0?ut.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[ht.id]===void 0&&(m.state.transmissionRenderTarget[ht.id]=new on(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?wn:Vn,minFilter:gi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const Ct=m.state.transmissionRenderTarget[ht.id],zt=ht.viewport||T;Ct.setSize(zt.z,zt.w);const Ht=y.getRenderTarget();y.setRenderTarget(Ct),y.getClearColor(tt),N=y.getClearAlpha(),N<1&&y.setClearColor(16777215,.5),y.clear(),G&&L.render(ut);const Gt=y.toneMapping;y.toneMapping=Qn;const Yt=ht.viewport;if(ht.viewport!==void 0&&(ht.viewport=void 0),m.setupLightsView(ht),Z===!0&&E.setGlobalState(y.clippingPlanes,ht),Qs(A,ut,ht),R.updateMultisampleRenderTarget(Ct),R.updateRenderTargetMipmap(Ct),pt.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let Wt=0,ne=J.length;Wt<ne;Wt++){const he=J[Wt],fe=he.object,ze=he.geometry,se=he.material,$t=he.group;if(se.side===sn&&fe.layers.test(ht.layers)){const Cn=se.side;se.side=We,se.needsUpdate=!0,Ul(fe,ut,ht,ze,se,$t),se.side=Cn,se.needsUpdate=!0,jt=!0}}jt===!0&&(R.updateMultisampleRenderTarget(Ct),R.updateRenderTargetMipmap(Ct))}y.setRenderTarget(Ht),y.setClearColor(tt,N),Yt!==void 0&&(ht.viewport=Yt),y.toneMapping=Gt}function Qs(A,J,ut){const ht=J.isScene===!0?J.overrideMaterial:null;for(let Q=0,Ct=A.length;Q<Ct;Q++){const zt=A[Q],Ht=zt.object,Gt=zt.geometry,Yt=ht===null?zt.material:ht,jt=zt.group;Ht.layers.test(ut.layers)&&Ul(Ht,J,ut,Gt,Yt,jt)}}function Ul(A,J,ut,ht,Q,Ct){A.onBeforeRender(y,J,ut,ht,Q,Ct),A.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Q.onBeforeRender(y,J,ut,ht,A,Ct),Q.transparent===!0&&Q.side===sn&&Q.forceSinglePass===!1?(Q.side=We,Q.needsUpdate=!0,y.renderBufferDirect(ut,J,ht,Q,A,Ct),Q.side=ei,Q.needsUpdate=!0,y.renderBufferDirect(ut,J,ht,Q,A,Ct),Q.side=sn):y.renderBufferDirect(ut,J,ht,Q,A,Ct),A.onAfterRender(y,J,ut,ht,Q,Ct)}function tr(A,J,ut){J.isScene!==!0&&(J=$);const ht=Lt.get(A),Q=m.state.lights,Ct=m.state.shadowsArray,zt=Q.state.version,Ht=bt.getParameters(A,Q.state,Ct,J,ut),Gt=bt.getProgramCacheKey(Ht);let Yt=ht.programs;ht.environment=A.isMeshStandardMaterial?J.environment:null,ht.fog=J.fog,ht.envMap=(A.isMeshStandardMaterial?et:b).get(A.envMap||ht.environment),ht.envMapRotation=ht.environment!==null&&A.envMap===null?J.environmentRotation:A.envMapRotation,Yt===void 0&&(A.addEventListener("dispose",qt),Yt=new Map,ht.programs=Yt);let jt=Yt.get(Gt);if(jt!==void 0){if(ht.currentProgram===jt&&ht.lightsStateVersion===zt)return Fl(A,Ht),jt}else Ht.uniforms=bt.getUniforms(A),A.onBeforeCompile(Ht,y),jt=bt.acquireProgram(Ht,Gt),Yt.set(Gt,jt),ht.uniforms=Ht.uniforms;const Wt=ht.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Wt.clippingPlanes=E.uniform),Fl(A,Ht),ht.needsLights=Vh(A),ht.lightsStateVersion=zt,ht.needsLights&&(Wt.ambientLightColor.value=Q.state.ambient,Wt.lightProbe.value=Q.state.probe,Wt.directionalLights.value=Q.state.directional,Wt.directionalLightShadows.value=Q.state.directionalShadow,Wt.spotLights.value=Q.state.spot,Wt.spotLightShadows.value=Q.state.spotShadow,Wt.rectAreaLights.value=Q.state.rectArea,Wt.ltc_1.value=Q.state.rectAreaLTC1,Wt.ltc_2.value=Q.state.rectAreaLTC2,Wt.pointLights.value=Q.state.point,Wt.pointLightShadows.value=Q.state.pointShadow,Wt.hemisphereLights.value=Q.state.hemi,Wt.directionalShadowMap.value=Q.state.directionalShadowMap,Wt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Wt.spotShadowMap.value=Q.state.spotShadowMap,Wt.spotLightMatrix.value=Q.state.spotLightMatrix,Wt.spotLightMap.value=Q.state.spotLightMap,Wt.pointShadowMap.value=Q.state.pointShadowMap,Wt.pointShadowMatrix.value=Q.state.pointShadowMatrix),ht.currentProgram=jt,ht.uniformsList=null,jt}function Nl(A){if(A.uniformsList===null){const J=A.currentProgram.getUniforms();A.uniformsList=Wr.seqWithValue(J.seq,A.uniforms)}return A.uniformsList}function Fl(A,J){const ut=Lt.get(A);ut.outputColorSpace=J.outputColorSpace,ut.batching=J.batching,ut.batchingColor=J.batchingColor,ut.instancing=J.instancing,ut.instancingColor=J.instancingColor,ut.instancingMorph=J.instancingMorph,ut.skinning=J.skinning,ut.morphTargets=J.morphTargets,ut.morphNormals=J.morphNormals,ut.morphColors=J.morphColors,ut.morphTargetsCount=J.morphTargetsCount,ut.numClippingPlanes=J.numClippingPlanes,ut.numIntersection=J.numClipIntersection,ut.vertexAlphas=J.vertexAlphas,ut.vertexTangents=J.vertexTangents,ut.toneMapping=J.toneMapping}function zh(A,J,ut,ht,Q){J.isScene!==!0&&(J=$),R.resetTextureUnits();const Ct=J.fog,zt=ht.isMeshStandardMaterial?J.environment:null,Ht=S===null?y.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:rs,Gt=(ht.isMeshStandardMaterial?et:b).get(ht.envMap||zt),Yt=ht.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,jt=!!ut.attributes.tangent&&(!!ht.normalMap||ht.anisotropy>0),Wt=!!ut.morphAttributes.position,ne=!!ut.morphAttributes.normal,he=!!ut.morphAttributes.color;let fe=Qn;ht.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(fe=y.toneMapping);const ze=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,se=ze!==void 0?ze.length:0,$t=Lt.get(ht),Cn=m.state.lights;if(Z===!0&&(Y===!0||A!==_)){const en=A===_&&ht.id===x;E.setState(ht,A,en)}let re=!1;ht.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==Cn.state.version||$t.outputColorSpace!==Ht||Q.isBatchedMesh&&$t.batching===!1||!Q.isBatchedMesh&&$t.batching===!0||Q.isBatchedMesh&&$t.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&$t.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&$t.instancing===!1||!Q.isInstancedMesh&&$t.instancing===!0||Q.isSkinnedMesh&&$t.skinning===!1||!Q.isSkinnedMesh&&$t.skinning===!0||Q.isInstancedMesh&&$t.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&$t.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&$t.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&$t.instancingMorph===!1&&Q.morphTexture!==null||$t.envMap!==Gt||ht.fog===!0&&$t.fog!==Ct||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==E.numPlanes||$t.numIntersection!==E.numIntersection)||$t.vertexAlphas!==Yt||$t.vertexTangents!==jt||$t.morphTargets!==Wt||$t.morphNormals!==ne||$t.morphColors!==he||$t.toneMapping!==fe||$t.morphTargetsCount!==se)&&(re=!0):(re=!0,$t.__version=ht.version);let un=$t.currentProgram;re===!0&&(un=tr(ht,J,Q));let Si=!1,$e=!1,ds=!1;const de=un.getUniforms(),yn=$t.uniforms;if(wt.useProgram(un.program)&&(Si=!0,$e=!0,ds=!0),ht.id!==x&&(x=ht.id,$e=!0),Si||_!==A){wt.buffers.depth.getReversed()?(F.copy(A.projectionMatrix),Tf(F),Af(F),de.setValue(P,"projectionMatrix",F)):de.setValue(P,"projectionMatrix",A.projectionMatrix),de.setValue(P,"viewMatrix",A.matrixWorldInverse);const Gn=de.map.cameraPosition;Gn!==void 0&&Gn.setValue(P,ot.setFromMatrixPosition(A.matrixWorld)),At.logarithmicDepthBuffer&&de.setValue(P,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ht.isMeshPhongMaterial||ht.isMeshToonMaterial||ht.isMeshLambertMaterial||ht.isMeshBasicMaterial||ht.isMeshStandardMaterial||ht.isShaderMaterial)&&de.setValue(P,"isOrthographic",A.isOrthographicCamera===!0),_!==A&&(_=A,$e=!0,ds=!0)}if(Q.isSkinnedMesh){de.setOptional(P,Q,"bindMatrix"),de.setOptional(P,Q,"bindMatrixInverse");const en=Q.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),de.setValue(P,"boneTexture",en.boneTexture,R))}Q.isBatchedMesh&&(de.setOptional(P,Q,"batchingTexture"),de.setValue(P,"batchingTexture",Q._matricesTexture,R),de.setOptional(P,Q,"batchingIdTexture"),de.setValue(P,"batchingIdTexture",Q._indirectTexture,R),de.setOptional(P,Q,"batchingColorTexture"),Q._colorsTexture!==null&&de.setValue(P,"batchingColorTexture",Q._colorsTexture,R));const ps=ut.morphAttributes;if((ps.position!==void 0||ps.normal!==void 0||ps.color!==void 0)&&q.update(Q,ut,un),($e||$t.receiveShadow!==Q.receiveShadow)&&($t.receiveShadow=Q.receiveShadow,de.setValue(P,"receiveShadow",Q.receiveShadow)),ht.isMeshGouraudMaterial&&ht.envMap!==null&&(yn.envMap.value=Gt,yn.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),ht.isMeshStandardMaterial&&ht.envMap===null&&J.environment!==null&&(yn.envMapIntensity.value=J.environmentIntensity),$e&&(de.setValue(P,"toneMappingExposure",y.toneMappingExposure),$t.needsLights&&kh(yn,ds),Ct&&ht.fog===!0&&vt.refreshFogUniforms(yn,Ct),vt.refreshMaterialUniforms(yn,ht,z,X,m.state.transmissionRenderTarget[A.id]),Wr.upload(P,Nl($t),yn,R)),ht.isShaderMaterial&&ht.uniformsNeedUpdate===!0&&(Wr.upload(P,Nl($t),yn,R),ht.uniformsNeedUpdate=!1),ht.isSpriteMaterial&&de.setValue(P,"center",Q.center),de.setValue(P,"modelViewMatrix",Q.modelViewMatrix),de.setValue(P,"normalMatrix",Q.normalMatrix),de.setValue(P,"modelMatrix",Q.matrixWorld),ht.isShaderMaterial||ht.isRawShaderMaterial){const en=ht.uniformsGroups;for(let Gn=0,Wn=en.length;Gn<Wn;Gn++){const Ol=en[Gn];k.update(Ol,un),k.bind(Ol,un)}}return un}function kh(A,J){A.ambientLightColor.needsUpdate=J,A.lightProbe.needsUpdate=J,A.directionalLights.needsUpdate=J,A.directionalLightShadows.needsUpdate=J,A.pointLights.needsUpdate=J,A.pointLightShadows.needsUpdate=J,A.spotLights.needsUpdate=J,A.spotLightShadows.needsUpdate=J,A.rectAreaLights.needsUpdate=J,A.hemisphereLights.needsUpdate=J}function Vh(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(A,J,ut){Lt.get(A.texture).__webglTexture=J,Lt.get(A.depthTexture).__webglTexture=ut;const ht=Lt.get(A);ht.__hasExternalTextures=!0,ht.__autoAllocateDepthBuffer=ut===void 0,ht.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ht.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,J){const ut=Lt.get(A);ut.__webglFramebuffer=J,ut.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(A,J=0,ut=0){S=A,C=J,I=ut;let ht=!0,Q=null,Ct=!1,zt=!1;if(A){const Gt=Lt.get(A);if(Gt.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(P.FRAMEBUFFER,null),ht=!1;else if(Gt.__webglFramebuffer===void 0)R.setupRenderTarget(A);else if(Gt.__hasExternalTextures)R.rebindTextures(A,Lt.get(A.texture).__webglTexture,Lt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Wt=A.depthTexture;if(Gt.__boundDepthTexture!==Wt){if(Wt!==null&&Lt.has(Wt)&&(A.width!==Wt.image.width||A.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(A)}}const Yt=A.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(zt=!0);const jt=Lt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(jt[J])?Q=jt[J][ut]:Q=jt[J],Ct=!0):A.samples>0&&R.useMultisampledRTT(A)===!1?Q=Lt.get(A).__webglMultisampledFramebuffer:Array.isArray(jt)?Q=jt[ut]:Q=jt,T.copy(A.viewport),V.copy(A.scissor),H=A.scissorTest}else T.copy(at).multiplyScalar(z).floor(),V.copy(Mt).multiplyScalar(z).floor(),H=Bt;if(wt.bindFramebuffer(P.FRAMEBUFFER,Q)&&ht&&wt.drawBuffers(A,Q),wt.viewport(T),wt.scissor(V),wt.setScissorTest(H),Ct){const Gt=Lt.get(A.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+J,Gt.__webglTexture,ut)}else if(zt){const Gt=Lt.get(A.texture),Yt=J||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Gt.__webglTexture,ut||0,Yt)}x=-1},this.readRenderTargetPixels=function(A,J,ut,ht,Q,Ct,zt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=Lt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&zt!==void 0&&(Ht=Ht[zt]),Ht){wt.bindFramebuffer(P.FRAMEBUFFER,Ht);try{const Gt=A.texture,Yt=Gt.format,jt=Gt.type;if(!At.textureFormatReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!At.textureTypeReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=A.width-ht&&ut>=0&&ut<=A.height-Q&&P.readPixels(J,ut,ht,Q,yt.convert(Yt),yt.convert(jt),Ct)}finally{const Gt=S!==null?Lt.get(S).__webglFramebuffer:null;wt.bindFramebuffer(P.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(A,J,ut,ht,Q,Ct,zt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=Lt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&zt!==void 0&&(Ht=Ht[zt]),Ht){const Gt=A.texture,Yt=Gt.format,jt=Gt.type;if(!At.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!At.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(J>=0&&J<=A.width-ht&&ut>=0&&ut<=A.height-Q){wt.bindFramebuffer(P.FRAMEBUFFER,Ht);const Wt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Wt),P.bufferData(P.PIXEL_PACK_BUFFER,Ct.byteLength,P.STREAM_READ),P.readPixels(J,ut,ht,Q,yt.convert(Yt),yt.convert(jt),0);const ne=S!==null?Lt.get(S).__webglFramebuffer:null;wt.bindFramebuffer(P.FRAMEBUFFER,ne);const he=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Ef(P,he,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Wt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Ct),P.deleteBuffer(Wt),P.deleteSync(he),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,J=null,ut=0){A.isTexture!==!0&&(Ls("WebGLRenderer: copyFramebufferToTexture function signature has changed."),J=arguments[0]||null,A=arguments[1]);const ht=Math.pow(2,-ut),Q=Math.floor(A.image.width*ht),Ct=Math.floor(A.image.height*ht),zt=J!==null?J.x:0,Ht=J!==null?J.y:0;R.setTexture2D(A,0),P.copyTexSubImage2D(P.TEXTURE_2D,ut,0,0,zt,Ht,Q,Ct),wt.unbindTexture()},this.copyTextureToTexture=function(A,J,ut=null,ht=null,Q=0){A.isTexture!==!0&&(Ls("WebGLRenderer: copyTextureToTexture function signature has changed."),ht=arguments[0]||null,A=arguments[1],J=arguments[2],Q=arguments[3]||0,ut=null);let Ct,zt,Ht,Gt,Yt,jt,Wt,ne,he;const fe=A.isCompressedTexture?A.mipmaps[Q]:A.image;ut!==null?(Ct=ut.max.x-ut.min.x,zt=ut.max.y-ut.min.y,Ht=ut.isBox3?ut.max.z-ut.min.z:1,Gt=ut.min.x,Yt=ut.min.y,jt=ut.isBox3?ut.min.z:0):(Ct=fe.width,zt=fe.height,Ht=fe.depth||1,Gt=0,Yt=0,jt=0),ht!==null?(Wt=ht.x,ne=ht.y,he=ht.z):(Wt=0,ne=0,he=0);const ze=yt.convert(J.format),se=yt.convert(J.type);let $t;J.isData3DTexture?(R.setTexture3D(J,0),$t=P.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(R.setTexture2DArray(J,0),$t=P.TEXTURE_2D_ARRAY):(R.setTexture2D(J,0),$t=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,J.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,J.unpackAlignment);const Cn=P.getParameter(P.UNPACK_ROW_LENGTH),re=P.getParameter(P.UNPACK_IMAGE_HEIGHT),un=P.getParameter(P.UNPACK_SKIP_PIXELS),Si=P.getParameter(P.UNPACK_SKIP_ROWS),$e=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,fe.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,fe.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Gt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Yt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,jt);const ds=A.isDataArrayTexture||A.isData3DTexture,de=J.isDataArrayTexture||J.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const yn=Lt.get(A),ps=Lt.get(J),en=Lt.get(yn.__renderTarget),Gn=Lt.get(ps.__renderTarget);wt.bindFramebuffer(P.READ_FRAMEBUFFER,en.__webglFramebuffer),wt.bindFramebuffer(P.DRAW_FRAMEBUFFER,Gn.__webglFramebuffer);for(let Wn=0;Wn<Ht;Wn++)ds&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Lt.get(A).__webglTexture,Q,jt+Wn),A.isDepthTexture?(de&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Lt.get(J).__webglTexture,Q,he+Wn),P.blitFramebuffer(Gt,Yt,Ct,zt,Wt,ne,Ct,zt,P.DEPTH_BUFFER_BIT,P.NEAREST)):de?P.copyTexSubImage3D($t,Q,Wt,ne,he+Wn,Gt,Yt,Ct,zt):P.copyTexSubImage2D($t,Q,Wt,ne,he+Wn,Gt,Yt,Ct,zt);wt.bindFramebuffer(P.READ_FRAMEBUFFER,null),wt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else de?A.isDataTexture||A.isData3DTexture?P.texSubImage3D($t,Q,Wt,ne,he,Ct,zt,Ht,ze,se,fe.data):J.isCompressedArrayTexture?P.compressedTexSubImage3D($t,Q,Wt,ne,he,Ct,zt,Ht,ze,fe.data):P.texSubImage3D($t,Q,Wt,ne,he,Ct,zt,Ht,ze,se,fe):A.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Q,Wt,ne,Ct,zt,ze,se,fe.data):A.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Q,Wt,ne,fe.width,fe.height,ze,fe.data):P.texSubImage2D(P.TEXTURE_2D,Q,Wt,ne,Ct,zt,ze,se,fe);P.pixelStorei(P.UNPACK_ROW_LENGTH,Cn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,re),P.pixelStorei(P.UNPACK_SKIP_PIXELS,un),P.pixelStorei(P.UNPACK_SKIP_ROWS,Si),P.pixelStorei(P.UNPACK_SKIP_IMAGES,$e),Q===0&&J.generateMipmaps&&P.generateMipmap($t),wt.unbindTexture()},this.copyTextureToTexture3D=function(A,J,ut=null,ht=null,Q=0){return A.isTexture!==!0&&(Ls("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ut=arguments[0]||null,ht=arguments[1]||null,A=arguments[2],J=arguments[3],Q=arguments[4]||0),Ls('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,J,ut,ht,Q)},this.initRenderTarget=function(A){Lt.get(A).__webglFramebuffer===void 0&&R.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),wt.unbindTexture()},this.resetState=function(){C=0,I=0,S=null,wt.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}class th extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ng extends Fe{constructor(t=null,e=1,n=1,s,r,o,a,l,c=tn,u=tn,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nc extends we{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Bi=new ae,Fc=new ae,br=[],Oc=new bi,Fg=new ae,ys=new Jt,Ms=new cs;class Ga extends Jt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Nc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Fg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new bi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Bi),Oc.copy(t.boundingBox).applyMatrix4(Bi),this.boundingBox.union(Oc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new cs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Bi),Ms.copy(t.boundingSphere).applyMatrix4(Bi),this.boundingSphere.union(Ms)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ys.geometry=this.geometry,ys.material=this.material,ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ms.copy(this.boundingSphere),Ms.applyMatrix4(n),t.ray.intersectsSphere(Ms)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Bi),Fc.multiplyMatrices(n,Bi),ys.matrixWorld=Fc,ys.raycast(t,br);for(let o=0,a=br.length;o<a;o++){const l=br[o];l.instanceId=r,l.object=this,e.push(l)}br.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Nc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ng(new Float32Array(s*this.count),s,this.count,ul,Sn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Og extends us{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Bc=new ae,Wo=new pl,Sr=new cs,wr=new B;class eh extends Te{constructor(t=new xe,e=new Og){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(s),Sr.radius+=r,t.ray.intersectsSphere(Sr)===!1)return;Bc.copy(s).invert(),Wo.copy(t.ray).applyMatrix4(Bc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,v=d;g<v;g++){const p=c.getX(g);wr.fromBufferAttribute(h,p),zc(wr,p,l,s,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,v=d;g<v;g++)wr.fromBufferAttribute(h,g),zc(wr,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function zc(i,t,e,n,s,r,o){const a=Wo.distanceSqToPoint(i);if(a<e){const l=new B;Wo.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Bg extends Fe{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Tn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const u=n[s],f=n[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new St:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new B,s=[],r=[],o=[],a=new B,l=new ae;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new B)}r[0]=new B,o[0]=new B;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Le(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Le(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class _l extends Tn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new St){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class zg extends _l{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function xl(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Er=new B,Wa=new xl,Xa=new xl,$a=new xl;class nh extends Tn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new B){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Er.subVectors(s[0],s[1]).add(s[0]),c=Er);const h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Er.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Er),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),v=Math.pow(h.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(u),d);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),Wa.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,v,p),Xa.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,v,p),$a.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,v,p)}else this.curveType==="catmullrom"&&(Wa.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Xa.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),$a.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Wa.calc(l),Xa.calc(l),$a.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new B().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function kc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function kg(i,t){const e=1-i;return e*e*t}function Vg(i,t){return 2*(1-i)*i*t}function Hg(i,t){return i*i*t}function Fs(i,t,e,n){return kg(i,t)+Vg(i,e)+Hg(i,n)}function Gg(i,t){const e=1-i;return e*e*e*t}function Wg(i,t){const e=1-i;return 3*e*e*i*t}function Xg(i,t){return 3*(1-i)*i*i*t}function $g(i,t){return i*i*i*t}function Os(i,t,e,n,s){return Gg(i,t)+Wg(i,e)+Xg(i,n)+$g(i,s)}class ih extends Tn{constructor(t=new St,e=new St,n=new St,s=new St){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new St){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Os(t,s.x,r.x,o.x,a.x),Os(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class qg extends Tn{constructor(t=new B,e=new B,n=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new B){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Os(t,s.x,r.x,o.x,a.x),Os(t,s.y,r.y,o.y,a.y),Os(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class sh extends Tn{constructor(t=new St,e=new St){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new St){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new St){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yg extends Tn{constructor(t=new B,e=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new B){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new B){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rh extends Tn{constructor(t=new St,e=new St,n=new St){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new St){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Fs(t,s.x,r.x,o.x),Fs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jg extends Tn{constructor(t=new B,e=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new B){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Fs(t,s.x,r.x,o.x),Fs(t,s.y,r.y,o.y),Fs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ah extends Tn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new St){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(kc(a,l.x,c.x,u.x,h.x),kc(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new St().fromArray(s))}return this}}var Xo=Object.freeze({__proto__:null,ArcCurve:zg,CatmullRomCurve3:nh,CubicBezierCurve:ih,CubicBezierCurve3:qg,EllipseCurve:_l,LineCurve:sh,LineCurve3:Yg,QuadraticBezierCurve:rh,QuadraticBezierCurve3:jg,SplineCurve:ah});class Zg extends Tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Xo[s.type]().fromJSON(s))}return this}}class Vc extends Zg{constructor(t){super(),this.type="Path",this.currentPoint=new St,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new sh(this.currentPoint.clone(),new St(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new rh(this.currentPoint.clone(),new St(t,e),new St(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new ih(this.currentPoint.clone(),new St(t,e),new St(n,s),new St(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new ah(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new _l(t,e,n,s,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ni extends xe{constructor(t=[new St(0,-.5),new St(.5,0),new St(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Le(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],u=1/e,h=new B,f=new St,d=new B,g=new B,v=new B;let p=0,m=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:p=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,d.x=m*1,d.y=-p,d.z=m*0,v.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:p=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,d.x=m*1,d.y=-p,d.z=m*0,g.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),l.push(d.x,d.y,d.z),v.copy(g)}for(let M=0;M<=e;M++){const w=n+M*u*s,y=Math.sin(w),W=Math.cos(w);for(let C=0;C<=t.length-1;C++){h.x=t[C].x*y,h.y=t[C].y,h.z=t[C].x*W,o.push(h.x,h.y,h.z),f.x=M/e,f.y=C/(t.length-1),a.push(f.x,f.y);const I=l[3*C+0]*y,S=l[3*C+1],x=l[3*C+0]*W;c.push(I,S,x)}}for(let M=0;M<e;M++)for(let w=0;w<t.length-1;w++){const y=w+M*t.length,W=y,C=y+t.length,I=y+t.length+1,S=y+1;r.push(W,C,S),r.push(I,S,C)}this.setIndex(r),this.setAttribute("position",new te(o,3)),this.setAttribute("uv",new te(a,2)),this.setAttribute("normal",new te(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ni(t.points,t.segments,t.phiStart,t.phiLength)}}class pe extends xe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],d=[];let g=0;const v=[],p=n/2;let m=0;M(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new te(h,3)),this.setAttribute("normal",new te(f,3)),this.setAttribute("uv",new te(d,2));function M(){const y=new B,W=new B;let C=0;const I=(e-t)/n;for(let S=0;S<=r;S++){const x=[],_=S/r,T=_*(e-t)+t;for(let V=0;V<=s;V++){const H=V/s,tt=H*l+a,N=Math.sin(tt),D=Math.cos(tt);W.x=T*N,W.y=-_*n+p,W.z=T*D,h.push(W.x,W.y,W.z),y.set(N,I,D).normalize(),f.push(y.x,y.y,y.z),d.push(H,1-_),x.push(g++)}v.push(x)}for(let S=0;S<s;S++)for(let x=0;x<r;x++){const _=v[x][S],T=v[x+1][S],V=v[x+1][S+1],H=v[x][S+1];(t>0||x!==0)&&(u.push(_,T,H),C+=3),(e>0||x!==r-1)&&(u.push(T,V,H),C+=3)}c.addGroup(m,C,0),m+=C}function w(y){const W=g,C=new St,I=new B;let S=0;const x=y===!0?t:e,_=y===!0?1:-1;for(let V=1;V<=s;V++)h.push(0,p*_,0),f.push(0,_,0),d.push(.5,.5),g++;const T=g;for(let V=0;V<=s;V++){const tt=V/s*l+a,N=Math.cos(tt),D=Math.sin(tt);I.x=x*D,I.y=p*_,I.z=x*N,h.push(I.x,I.y,I.z),f.push(0,_,0),C.x=N*.5+.5,C.y=D*.5*_+.5,d.push(C.x,C.y),g++}for(let V=0;V<s;V++){const H=W+V,tt=T+V;y===!0?u.push(tt,tt+1,H):u.push(tt+1,tt,H),S+=3}c.addGroup(m,S,y===!0?1:2),m+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ti extends pe{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ti(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class yl extends xe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(r.slice(),3)),this.setAttribute("uv",new te(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const w=new B,y=new B,W=new B;for(let C=0;C<e.length;C+=3)d(e[C+0],w),d(e[C+1],y),d(e[C+2],W),l(w,y,W,M)}function l(M,w,y,W){const C=W+1,I=[];for(let S=0;S<=C;S++){I[S]=[];const x=M.clone().lerp(y,S/C),_=w.clone().lerp(y,S/C),T=C-S;for(let V=0;V<=T;V++)V===0&&S===C?I[S][V]=x:I[S][V]=x.clone().lerp(_,V/T)}for(let S=0;S<C;S++)for(let x=0;x<2*(C-S)-1;x++){const _=Math.floor(x/2);x%2===0?(f(I[S][_+1]),f(I[S+1][_]),f(I[S][_])):(f(I[S][_+1]),f(I[S+1][_+1]),f(I[S+1][_]))}}function c(M){const w=new B;for(let y=0;y<r.length;y+=3)w.x=r[y+0],w.y=r[y+1],w.z=r[y+2],w.normalize().multiplyScalar(M),r[y+0]=w.x,r[y+1]=w.y,r[y+2]=w.z}function u(){const M=new B;for(let w=0;w<r.length;w+=3){M.x=r[w+0],M.y=r[w+1],M.z=r[w+2];const y=p(M)/2/Math.PI+.5,W=m(M)/Math.PI+.5;o.push(y,1-W)}g(),h()}function h(){for(let M=0;M<o.length;M+=6){const w=o[M+0],y=o[M+2],W=o[M+4],C=Math.max(w,y,W),I=Math.min(w,y,W);C>.9&&I<.1&&(w<.2&&(o[M+0]+=1),y<.2&&(o[M+2]+=1),W<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function d(M,w){const y=M*3;w.x=t[y+0],w.y=t[y+1],w.z=t[y+2]}function g(){const M=new B,w=new B,y=new B,W=new B,C=new St,I=new St,S=new St;for(let x=0,_=0;x<r.length;x+=9,_+=6){M.set(r[x+0],r[x+1],r[x+2]),w.set(r[x+3],r[x+4],r[x+5]),y.set(r[x+6],r[x+7],r[x+8]),C.set(o[_+0],o[_+1]),I.set(o[_+2],o[_+3]),S.set(o[_+4],o[_+5]),W.copy(M).add(w).add(y).divideScalar(3);const T=p(W);v(C,_+0,M,T),v(I,_+2,w,T),v(S,_+4,y,T)}}function v(M,w,y,W){W<0&&M.x===1&&(o[w]=M.x-1),y.x===0&&y.z===0&&(o[w]=W/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yl(t.vertices,t.indices,t.radius,t.details)}}class oh extends Vc{constructor(t){super(t),this.uuid=os(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Vc().fromJSON(s))}return this}}const Kg={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=lh(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,f,d;if(n&&(r=nv(i,t,r,e)),i.length>80*e){a=c=i[0],l=u=i[1];for(let g=e;g<s;g+=e)h=i[g],f=i[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return Gs(r,o,e,a,l,d,0),o}};function lh(i,t,e,n,s){let r,o;if(s===dv(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Hc(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Hc(r,i[r],i[r+1],o);return o&&oa(o,o.next)&&(Xs(o),o=o.next),o}function yi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(oa(e,e.next)||ve(e.prev,e,e.next)===0)){if(Xs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Gs(i,t,e,n,s,r,o){if(!i)return;!o&&r&&ov(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Qg(i,n,s,r):Jg(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Xs(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=tv(yi(i),t,e),Gs(i,t,e,n,s,r,2)):o===2&&ev(i,t,e,n,s,r):Gs(yi(i),t,e,n,s,r,1);break}}}function Jg(i){const t=i.prev,e=i,n=i.next;if(ve(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&Wi(s,a,r,l,o,c,g.x,g.y)&&ve(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Qg(i,t,e,n){const s=i.prev,r=i,o=i.next;if(ve(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,v=a>l?a>c?a:c:l>c?l:c,p=u>h?u>f?u:f:h>f?h:f,m=$o(d,g,t,e,n),M=$o(v,p,t,e,n);let w=i.prevZ,y=i.nextZ;for(;w&&w.z>=m&&y&&y.z<=M;){if(w.x>=d&&w.x<=v&&w.y>=g&&w.y<=p&&w!==s&&w!==o&&Wi(a,u,l,h,c,f,w.x,w.y)&&ve(w.prev,w,w.next)>=0||(w=w.prevZ,y.x>=d&&y.x<=v&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&Wi(a,u,l,h,c,f,y.x,y.y)&&ve(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;w&&w.z>=m;){if(w.x>=d&&w.x<=v&&w.y>=g&&w.y<=p&&w!==s&&w!==o&&Wi(a,u,l,h,c,f,w.x,w.y)&&ve(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;y&&y.z<=M;){if(y.x>=d&&y.x<=v&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&Wi(a,u,l,h,c,f,y.x,y.y)&&ve(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function tv(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!oa(s,r)&&ch(s,n,n.next,r)&&Ws(s,r)&&Ws(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Xs(n),Xs(n.next),n=i=r),n=n.next}while(n!==i);return yi(n)}function ev(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&uv(o,a)){let l=uh(o,a);o=yi(o,o.next),l=yi(l,l.next),Gs(o,t,e,n,s,r,0),Gs(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function nv(i,t,e,n){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=lh(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(cv(c));for(s.sort(iv),r=0;r<s.length;r++)e=sv(s[r],e);return e}function iv(i,t){return i.x-t.x}function sv(i,t){const e=rv(i,t);if(!e)return t;const n=uh(e,i);return yi(n,n.next),yi(e,e.next)}function rv(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let u=1/0,h;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Wi(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),Ws(e,i)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&av(s,e)))&&(s=e,u=h)),e=e.next;while(e!==a);return s}function av(i,t){return ve(i.prev,i,t.prev)<0&&ve(t.next,i,i.next)<0}function ov(i,t,e,n){let s=i;do s.z===0&&(s.z=$o(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,lv(s)}function lv(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function $o(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function cv(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Wi(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function uv(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!hv(i,t)&&(Ws(i,t)&&Ws(t,i)&&fv(i,t)&&(ve(i.prev,i,t.prev)||ve(i,t.prev,t))||oa(i,t)&&ve(i.prev,i,i.next)>0&&ve(t.prev,t,t.next)>0)}function ve(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function oa(i,t){return i.x===t.x&&i.y===t.y}function ch(i,t,e,n){const s=Ar(ve(i,t,e)),r=Ar(ve(i,t,n)),o=Ar(ve(e,n,i)),a=Ar(ve(e,n,t));return!!(s!==r&&o!==a||s===0&&Tr(i,e,t)||r===0&&Tr(i,n,t)||o===0&&Tr(e,i,n)||a===0&&Tr(e,t,n))}function Tr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ar(i){return i>0?1:i<0?-1:0}function hv(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&ch(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ws(i,t){return ve(i.prev,i,i.next)<0?ve(i,t,i.next)>=0&&ve(i,i.prev,t)>=0:ve(i,t,i.prev)<0||ve(i,i.next,t)<0}function fv(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function uh(i,t){const e=new qo(i.i,i.x,i.y),n=new qo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Hc(i,t,e,n){const s=new qo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Xs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function qo(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function dv(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Bs{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Bs.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Gc(t),Wc(n,t);let o=t.length;e.forEach(Gc);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Wc(n,e[l]);const a=Kg.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Gc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Wc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Kr extends xe{constructor(t=new oh([new St(.5,.5),new St(-.5,.5),new St(-.5,-.5),new St(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new te(s,3)),this.setAttribute("uv",new te(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:pv;let w,y=!1,W,C,I,S;m&&(w=m.getSpacedPoints(u),y=!0,f=!1,W=m.computeFrenetFrames(u,!1),C=new B,I=new B,S=new B),f||(p=0,d=0,g=0,v=0);const x=a.extractPoints(c);let _=x.shape;const T=x.holes;if(!Bs.isClockWise(_)){_=_.reverse();for(let G=0,ct=T.length;G<ct;G++){const P=T[G];Bs.isClockWise(P)&&(T[G]=P.reverse())}}const H=Bs.triangulateShape(_,T),tt=_;for(let G=0,ct=T.length;G<ct;G++){const P=T[G];_=_.concat(P)}function N(G,ct,P){return ct||console.error("THREE.ExtrudeGeometry: vec does not exist"),G.clone().addScaledVector(ct,P)}const D=_.length,X=H.length;function z(G,ct,P){let Tt,pt,At;const wt=G.x-ct.x,kt=G.y-ct.y,Lt=P.x-G.x,R=P.y-G.y,b=wt*wt+kt*kt,et=wt*R-kt*Lt;if(Math.abs(et)>Number.EPSILON){const lt=Math.sqrt(b),_t=Math.sqrt(Lt*Lt+R*R),mt=ct.x-kt/lt,bt=ct.y+wt/lt,vt=P.x-R/_t,gt=P.y+Lt/_t,Dt=((vt-mt)*R-(gt-bt)*Lt)/(wt*R-kt*Lt);Tt=mt+wt*Dt-G.x,pt=bt+kt*Dt-G.y;const E=Tt*Tt+pt*pt;if(E<=2)return new St(Tt,pt);At=Math.sqrt(E/2)}else{let lt=!1;wt>Number.EPSILON?Lt>Number.EPSILON&&(lt=!0):wt<-Number.EPSILON?Lt<-Number.EPSILON&&(lt=!0):Math.sign(kt)===Math.sign(R)&&(lt=!0),lt?(Tt=-kt,pt=wt,At=Math.sqrt(b)):(Tt=wt,pt=kt,At=Math.sqrt(b/2))}return new St(Tt/At,pt/At)}const rt=[];for(let G=0,ct=tt.length,P=ct-1,Tt=G+1;G<ct;G++,P++,Tt++)P===ct&&(P=0),Tt===ct&&(Tt=0),rt[G]=z(tt[G],tt[P],tt[Tt]);const it=[];let at,Mt=rt.concat();for(let G=0,ct=T.length;G<ct;G++){const P=T[G];at=[];for(let Tt=0,pt=P.length,At=pt-1,wt=Tt+1;Tt<pt;Tt++,At++,wt++)At===pt&&(At=0),wt===pt&&(wt=0),at[Tt]=z(P[Tt],P[At],P[wt]);it.push(at),Mt=Mt.concat(at)}for(let G=0;G<p;G++){const ct=G/p,P=d*Math.cos(ct*Math.PI/2),Tt=g*Math.sin(ct*Math.PI/2)+v;for(let pt=0,At=tt.length;pt<At;pt++){const wt=N(tt[pt],rt[pt],Tt);F(wt.x,wt.y,-P)}for(let pt=0,At=T.length;pt<At;pt++){const wt=T[pt];at=it[pt];for(let kt=0,Lt=wt.length;kt<Lt;kt++){const R=N(wt[kt],at[kt],Tt);F(R.x,R.y,-P)}}}const Bt=g+v;for(let G=0;G<D;G++){const ct=f?N(_[G],Mt[G],Bt):_[G];y?(I.copy(W.normals[0]).multiplyScalar(ct.x),C.copy(W.binormals[0]).multiplyScalar(ct.y),S.copy(w[0]).add(I).add(C),F(S.x,S.y,S.z)):F(ct.x,ct.y,0)}for(let G=1;G<=u;G++)for(let ct=0;ct<D;ct++){const P=f?N(_[ct],Mt[ct],Bt):_[ct];y?(I.copy(W.normals[G]).multiplyScalar(P.x),C.copy(W.binormals[G]).multiplyScalar(P.y),S.copy(w[G]).add(I).add(C),F(S.x,S.y,S.z)):F(P.x,P.y,h/u*G)}for(let G=p-1;G>=0;G--){const ct=G/p,P=d*Math.cos(ct*Math.PI/2),Tt=g*Math.sin(ct*Math.PI/2)+v;for(let pt=0,At=tt.length;pt<At;pt++){const wt=N(tt[pt],rt[pt],Tt);F(wt.x,wt.y,h+P)}for(let pt=0,At=T.length;pt<At;pt++){const wt=T[pt];at=it[pt];for(let kt=0,Lt=wt.length;kt<Lt;kt++){const R=N(wt[kt],at[kt],Tt);y?F(R.x,R.y+w[u-1].y,w[u-1].x+P):F(R.x,R.y,h+P)}}}U(),Z();function U(){const G=s.length/3;if(f){let ct=0,P=D*ct;for(let Tt=0;Tt<X;Tt++){const pt=H[Tt];j(pt[2]+P,pt[1]+P,pt[0]+P)}ct=u+p*2,P=D*ct;for(let Tt=0;Tt<X;Tt++){const pt=H[Tt];j(pt[0]+P,pt[1]+P,pt[2]+P)}}else{for(let ct=0;ct<X;ct++){const P=H[ct];j(P[2],P[1],P[0])}for(let ct=0;ct<X;ct++){const P=H[ct];j(P[0]+D*u,P[1]+D*u,P[2]+D*u)}}n.addGroup(G,s.length/3-G,0)}function Z(){const G=s.length/3;let ct=0;Y(tt,ct),ct+=tt.length;for(let P=0,Tt=T.length;P<Tt;P++){const pt=T[P];Y(pt,ct),ct+=pt.length}n.addGroup(G,s.length/3-G,1)}function Y(G,ct){let P=G.length;for(;--P>=0;){const Tt=P;let pt=P-1;pt<0&&(pt=G.length-1);for(let At=0,wt=u+p*2;At<wt;At++){const kt=D*At,Lt=D*(At+1),R=ct+Tt+kt,b=ct+pt+kt,et=ct+pt+Lt,lt=ct+Tt+Lt;ot(R,b,et,lt)}}}function F(G,ct,P){l.push(G),l.push(ct),l.push(P)}function j(G,ct,P){ft(G),ft(ct),ft(P);const Tt=s.length/3,pt=M.generateTopUV(n,s,Tt-3,Tt-2,Tt-1);$(pt[0]),$(pt[1]),$(pt[2])}function ot(G,ct,P,Tt){ft(G),ft(ct),ft(Tt),ft(ct),ft(P),ft(Tt);const pt=s.length/3,At=M.generateSideWallUV(n,s,pt-6,pt-3,pt-2,pt-1);$(At[0]),$(At[1]),$(At[3]),$(At[1]),$(At[2]),$(At[3])}function ft(G){s.push(l[G*3+0]),s.push(l[G*3+1]),s.push(l[G*3+2])}function $(G){r.push(G.x),r.push(G.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return mv(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Xo[s.type]().fromJSON(s)),new Kr(n,t.options)}}const pv={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new St(r,o),new St(a,l),new St(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],v=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new St(o,1-l),new St(c,1-h),new St(f,1-g),new St(v,1-m)]:[new St(a,1-l),new St(u,1-h),new St(d,1-g),new St(p,1-m)]}};function mv(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Zs extends yl{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Zs(t.radius,t.detail)}}class Ml extends xe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let h=t;const f=(e-t)/s,d=new B,g=new St;for(let v=0;v<=s;v++){for(let p=0;p<=n;p++){const m=r+p/n*o;d.x=h*Math.cos(m),d.y=h*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,u.push(g.x,g.y)}h+=f}for(let v=0;v<s;v++){const p=v*(n+1);for(let m=0;m<n;m++){const M=m+p,w=M,y=M+n+1,W=M+n+2,C=M+1;a.push(w,y,C),a.push(y,W,C)}}this.setIndex(a),this.setAttribute("position",new te(l,3)),this.setAttribute("normal",new te(c,3)),this.setAttribute("uv",new te(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ml(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class bl extends xe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new B,h=new B,f=new B;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const v=g/s*r,p=d/n*Math.PI*2;h.x=(t+e*Math.cos(p))*Math.cos(v),h.y=(t+e*Math.cos(p))*Math.sin(v),h.z=e*Math.sin(p),a.push(h.x,h.y,h.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const v=(s+1)*d+g-1,p=(s+1)*(d-1)+g-1,m=(s+1)*(d-1)+g,M=(s+1)*d+g;o.push(v,p,M),o.push(p,m,M)}this.setIndex(o),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bl(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class gv extends Se{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class De extends us{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fu,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Sl extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class hh extends Sl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const qa=new ae,Xc=new B,$c=new B;class fh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gl,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Xc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Xc),$c.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($c),e.updateMatrixWorld(),qa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const qc=new ae,bs=new B,Ya=new B;class vv extends fh{constructor(){super(new Ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new St(4,2),this._viewportCount=6,this._viewports=[new ce(2,1,1,1),new ce(0,1,1,1),new ce(3,1,1,1),new ce(1,1,1,1),new ce(3,0,1,1),new ce(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),bs.setFromMatrixPosition(t.matrixWorld),n.position.copy(bs),Ya.copy(n.position),Ya.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ya),n.updateMatrixWorld(),s.makeTranslation(-bs.x,-bs.y,-bs.z),qc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qc)}}class wl extends Sl{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new vv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class _v extends fh{constructor(){super(new ra(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yo extends Sl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new _v}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class xv{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Yc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Yc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Yc(){return performance.now()}const jc=new ae;class yv{constructor(t,e,n=0,s=1/0){this.ray=new pl(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ml,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return jc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jc),this}intersectObject(t,e=!0,n=[]){return jo(t,this,n,e),n.sort(Zc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)jo(t[s],this,n,e);return n.sort(Zc),n}}function Zc(i,t){return i.distance-t.distance}function jo(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)jo(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rl);const dh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class fs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Mv=new ra(-1,1,1,-1,0,1);class bv extends xe{constructor(){super(),this.setAttribute("position",new te([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new te([0,2,0,0,2,0],2))}}const Sv=new bv;class El{constructor(t){this._mesh=new Jt(Sv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Mv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class ph extends fs{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Se?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Hs.clone(t.uniforms),this.material=new Se({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new El(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Kc extends fs{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class wv extends fs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Ev{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new St);this._width=n.width,this._height=n.height,e=new on(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:wn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ph(dh),this.copyPass.material.blending=zn,this.clock=new xv}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Kc!==void 0&&(o instanceof Kc?n=!0:o instanceof wv&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new St);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Tv extends fs{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ot}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const Av={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ot(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ss extends fs{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new St(t.x,t.y):new St(256,256),this.clearColor=new Ot(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new on(r,o,{type:wn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new on(r,o,{type:wn});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new on(r,o,{type:wn});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}const a=Av;this.highPassUniforms=Hs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Se({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new St(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=dh;this.copyUniforms=Hs.clone(u.uniforms),this.blendMaterial=new Se({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Yr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ot,this.oldClearAlpha=1,this.basic=new _n,this.fsQuad=new El(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new St(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=ss.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ss.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Se({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new St(.5,.5)},direction:{value:new St(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Se({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}ss.BlurDirectionX=new St(1,0);ss.BlurDirectionY=new St(0,1);const Cv={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Rv extends fs{constructor(){super();const t=Cv;this.uniforms=Hs.clone(t.uniforms),this.material=new gv({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new El(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Qt.getTransfer(this._outputColorSpace)===oe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Mu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===bu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Su?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===al?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===wu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Eu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function Pv(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new xe;let c=0;for(let u=0;u<i.length;++u){const h=i[u];let f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in h.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(t){let d;if(e)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(e){let u=0;const h=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=i[f].attributes.position.count}l.setIndex(h)}for(const u in r){const h=Jc(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){const d=[];for(let v=0;v<o[u].length;++v)d.push(o[u][v][f]);const g=Jc(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Jc(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const o=new t(r),a=new we(o,e,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const h=l/e;for(let f=0,d=u.count;f<d;f++)for(let g=0;g<e;g++){const v=u.getComponent(f,g);a.setComponent(f+h,g,v)}}else o.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}const Je=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),Be=(i,t,e)=>i+(t-i)*e,be=(i,t,e)=>{const n=Je((e-i)/(t-i));return n*n*(3-2*n)},Lv=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;function Hn(i){let t=i>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Cr(i,t){const e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function rn(i,t){const e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),l=Cr(e,n),c=Cr(e+1,n),u=Cr(e,n+1),h=Cr(e+1,n+1);return l+(c-l)*o+(u-l)*a+(l-c-u+h)*o*a}function Jr(i,t){return rn(i,t)*.6+rn(i*2.1+7.3,t*2.1+1.7)*.3+rn(i*4.3+3.1,t*4.3+9.2)*.1}const mh={uTime:{value:0}};function Tl(i,t=.07){const e=new De(i);return e.onBeforeCompile=n=>{n.uniforms.uTime=mh.uTime,n.vertexShader=`uniform float uTime;
attribute float sway;
`+n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        {
          vec4 wp = vec4(transformed, 1.0);
          #ifdef USE_INSTANCING
            wp = instanceMatrix * wp;
          #endif
          wp = modelMatrix * wp;
          float w = sin(uTime * 1.6 + wp.x * 0.55 + wp.z * 0.4) + 0.5 * sin(uTime * 2.9 + wp.x * 1.3 - wp.z * 0.9);
          transformed.x += w * ${t.toFixed(4)} * sway;
          transformed.z += w * ${(t*.6).toFixed(4)} * sway;
        }`)},e}const ja=new ae,Rr=new ls,Qc=new xn,Pr=new B,Ss=new B,ws=new Ot;class le{constructor(t=1,{sway:e=!1,tint:n=null}={}){this.parts=[],this.rand=Hn(t),this.withSway=e,this.tint=n}add(t,e,n={}){const{p:s,r,s:o,jitter:a=.05,m:l,sway:c}=n,u=t.index?t.toNonIndexed():t.clone();for(const g of Object.keys(u.attributes))g!=="position"&&u.deleteAttribute(g);l?u.applyMatrix4(l):(r?Rr.setFromEuler(Qc.set(r[0],r[1],r[2])):Rr.identity(),s?Pr.set(s[0],s[1],s[2]):Pr.set(0,0,0),o===void 0?Ss.set(1,1,1):typeof o=="number"?Ss.set(o,o,o):Ss.set(o[0],o[1],o[2]),u.applyMatrix4(ja.compose(Pr,Rr,Ss)));const h=u.attributes.position,f=h.count,d=new Float32Array(f*3);ws.set(e),this.tint&&this.tint(ws);for(let g=0;g<f;g+=3){const v=1+(this.rand()*2-1)*a;for(let p=0;p<3;p++)d[(g+p)*3]=ws.r*v,d[(g+p)*3+1]=ws.g*v,d[(g+p)*3+2]=ws.b*v}if(u.setAttribute("color",new we(d,3)),this.withSway){const g=new Float32Array(f);if(c)for(let v=0;v<f;v++){const p=Je((h.getY(v)-c[0])/c[1]);g[v]=p*p*c[1]}u.setAttribute("sway",new we(g,1))}return this.parts.push(u),this}box(t,e,n,s,r=0,o=0,a=0,l={}){return this.add(new ln(t,e,n),s,{...l,p:[r,o,a]})}cyl(t,e,n,s,r,o=0,a=0,l=0,c={}){return this.add(new pe(t,e,n,s),r,{...c,p:[o,a,l]})}ball(t,e,n,s=0,r=0,o=0,a={}){return this.add(new Zs(t,e),n,{...a,p:[s,r,o]})}cone(t,e,n,s,r=0,o=0,a=0,l={}){return this.add(new ti(t,e,n),s,{...l,p:[r,o,a]})}merge(t,e=0,n=0,s=0,r=0,o=1){ja.compose(Pr.set(e,n,s),Rr.setFromEuler(Qc.set(0,r,0)),Ss.set(o,o,o));for(const a of t.parts){const l=a.clone();l.applyMatrix4(ja),this.withSway&&!l.attributes.sway?l.setAttribute("sway",new we(new Float32Array(l.attributes.position.count),1)):!this.withSway&&l.attributes.sway&&l.deleteAttribute("sway"),this.parts.push(l)}return this}get empty(){return this.parts.length===0}geometry(){const t=Pv(this.parts,!1);return t.computeVertexNormals(),t}mesh(t,{cast:e=!0,receive:n=!0}={}){const s=new Jt(this.geometry(),t);return s.castShadow=e,s.receiveShadow=n,s}}function Dv(i,t,e){const n=i/2,s=e/2,r=[-n,0,s,n,0,s,n,t,0,-n,0,s,n,t,0,-n,t,0,n,0,-s,-n,0,-s,-n,t,0,n,0,-s,-n,t,0,n,t,0,n,0,s,n,0,-s,n,t,0,-n,0,-s,-n,0,s,-n,t,0,-n,0,-s,n,0,-s,n,0,s,-n,0,-s,n,0,s,-n,0,s],o=new xe;return o.setAttribute("position",new te(r,3)),o}const En={flat:new De({vertexColors:!0,flatShading:!0,roughness:.92,metalness:0}),glossy:new De({vertexColors:!0,flatShading:!0,roughness:.45,metalness:.05})};function Al(i){i.traverse(t=>{var n;(n=t.geometry)==null||n.dispose();const e=t.material;e&&e!==En.flat&&e!==En.glossy&&e.dispose()}),i.removeFromParent()}function Iv(i,t=.25){const e=new De(i);return e.onBeforeCompile=n=>{n.fragmentShader=n.fragmentShader.replace("#include <lights_fragment_end>",`irradiance *= ${t.toFixed(3)};
#include <lights_fragment_end>`)},e}function gh(i,t=0){return new De({color:1709072,emissive:new Ot(i),emissiveIntensity:t,roughness:.6})}const Es=Math.PI/180,tu={intro:{target:[-1,-3.5,-1],yaw:45,pitch:33,fitW:64,fitWp:40,fitH:47,blur:5,dim:0},vineyard:{target:[7.2,.4,6.6],yaw:45,pitch:35,fitW:36,fitWp:20,fitH:23,blur:4.5,dim:0},cellar:{target:[5.5,-4.5,12],yaw:20,pitch:11,fitW:34,fitWp:15,fitH:13.5,blur:2.5,dim:1},market:{target:[12.6,1,-9.6],yaw:45,pitch:33,fitW:23,fitWp:15,fitH:16.5,blur:4.5,dim:0}},Uv={uniforms:{tDiffuse:{value:null},uRes:{value:new St(1,1)},uBlur:{value:4},uFocus:{value:.5},uVignette:{value:.3},uSat:{value:1.08},uTime:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform vec2 uRes;
    uniform float uBlur, uFocus, uVignette, uSat, uTime;
    varying vec2 vUv;
    void main() {
      // desfoque "tilt-shift": nítido na faixa central, borrado em cima e embaixo (efeito maquete)
      float d = abs(vUv.y - uFocus);
      float amt = smoothstep(0.17, 0.52, d) * uBlur;
      vec3 col = texture2D(tDiffuse, vUv).rgb;
      if (amt > 0.05) {
        vec2 px = amt / uRes;
        vec3 acc = col;
        for (int i = 0; i < 14; i++) {
          float a = float(i) * 2.39996;
          float r = sqrt((float(i) + 0.5) / 14.0);
          acc += texture2D(tDiffuse, vUv + vec2(cos(a), sin(a)) * r * px).rgb;
        }
        col = acc / 15.0;
      }
      // saturação
      float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(l), col, uSat);
      // vinheta
      vec2 q = vUv - 0.5;
      float v = smoothstep(0.82, 0.22, length(q * vec2(1.0, 0.92)));
      col *= mix(1.0 - uVignette, 1.0, v);
      // grão sutil
      float n = fract(sin(dot(vUv * uRes + mod(uTime, 10.0) * 61.0, vec2(12.9898, 78.233))) * 43758.5453);
      col += (n - 0.5) * 0.010;
      gl_FragColor = vec4(max(col, 0.0), 1.0);
    }
  `};function Nv(i){const t=matchMedia("(pointer: coarse)").matches||Math.min(innerWidth,innerHeight)<600,e=new Qu({canvas:i,antialias:!1,powerPreference:"high-performance"}),n=Math.min(window.devicePixelRatio||1,t?1.5:2);e.setPixelRatio(n),e.shadowMap.enabled=!0,e.shadowMap.type=xu,e.toneMapping=al,e.toneMappingExposure=1;const s=new th,r=new ra(-1,1,1,-1,1,400),o=new on(4,4,{type:wn,samples:t?2:4}),a=new Ev(e,o);a.addPass(new Tv(s,r));const l=new ss(new St(256,256),.42,.75,.92);a.addPass(l);const c=new ph(Uv);a.addPass(c),a.addPass(new Rv);let u=1,h=1,f=1;const d={tx:0,ty:0,tz:0,yaw:45*Es,pitch:35*Es,fitW:40,fitH:26,blur:4,dim:0,px:0,py:0,zoom:1};let g=null,v=null,p=1,m=2,M="intro";const w=new B,y=new B,W=new B,C=new B;function I(ft){const $=tu[ft],G=Je((f-.55)/.65),ct=G*G*(3-2*G);return{tx:$.target[0],ty:$.target[1],tz:$.target[2],yaw:$.yaw*Es,pitch:$.pitch*Es,fitW:Be($.fitWp,$.fitW,ct),fitH:$.fitH,blur:$.blur,dim:$.dim,px:0,py:0,zoom:1}}function S(ft,{instant:$=!1,duration:G=2}={}){M=ft,v=I(ft),$?(Object.assign(d,v),p=1):(g={...d},p=0,m=G)}function x(){const ft=Math.cos(d.pitch),$=Math.sin(d.pitch);w.set(Math.sin(d.yaw)*ft,$,Math.cos(d.yaw)*ft),y.set(d.tx,d.ty,d.tz),r.position.copy(y).addScaledVector(w,140),r.lookAt(y),r.updateMatrixWorld(),W.setFromMatrixColumn(r.matrixWorld,0),C.setFromMatrixColumn(r.matrixWorld,1),r.position.addScaledVector(W,d.px).addScaledVector(C,d.py);const G=Math.max(d.fitH,d.fitW/f)*d.zoom;return r.top=G/2,r.bottom=-G/2,r.right=G/2*f,r.left=-(G/2)*f,r.updateProjectionMatrix(),r.updateMatrixWorld(),G}function _(){u=i.clientWidth||innerWidth,h=i.clientHeight||innerHeight,f=u/h,e.setSize(u,h,!1),a.setSize(u,h),c.uniforms.uRes.value.set(u*n,h*n);const ft=I(M);p>=1?(d.fitW=ft.fitW,d.fitH=ft.fitH):v&&(v.fitW=ft.fitW,v.fitH=ft.fitH)}window.addEventListener("resize",_);const T=[],V=new yv,H=new St,tt=new Map;let N=0,D=0,X=1,z=()=>{},rt=()=>{},it=!1,at=null;const Mt={x:-1,y:-1,inside:!1};let Bt=30;function U(ft,$){const G=i.getBoundingClientRect();H.set((ft-G.left)/G.width*2-1,-(($-G.top)/G.height)*2+1),V.setFromCamera(H,r);const ct=T.filter(Tt=>Tt.userData.pickable!==!1&&(!Tt.userData.view||Tt.userData.view===M)),P=V.intersectObjects(ct,!1);return P.length?P[0].object:null}i.addEventListener("pointerdown",ft=>{try{i.setPointerCapture(ft.pointerId)}catch{}if(tt.set(ft.pointerId,{x:ft.clientX,y:ft.clientY}),tt.size===1&&(N=0),tt.size===2){const[$,G]=[...tt.values()];D=Math.hypot($.x-G.x,$.y-G.y),X=d.zoom,N=999}}),i.addEventListener("pointermove",ft=>{Mt.x=ft.clientX,Mt.y=ft.clientY,Mt.inside=!0,ft.pointerType==="mouse"&&(it=!0);const $=tt.get(ft.pointerId);if(!$)return;const G=ft.clientX-$.x,ct=ft.clientY-$.y;if($.x=ft.clientX,$.y=ft.clientY,tt.size===1){if(N+=Math.abs(G)+Math.abs(ct),N>8&&p>=1&&M!=="intro"){const P=Bt/h;d.px=Je(d.px-G*P,-16,16),d.py=Je(d.py+ct*P,-10,10)}}else if(tt.size===2&&p>=1){const[P,Tt]=[...tt.values()],pt=Math.hypot(P.x-Tt.x,P.y-Tt.y);D>0&&(d.zoom=Je(X*D/pt,.5,1.6))}});const Z=ft=>{const $=tt.has(ft.pointerId);tt.delete(ft.pointerId),$&&ft.type==="pointerup"&&N<=8&&tt.size===0&&z(U(ft.clientX,ft.clientY),ft)};i.addEventListener("pointerup",Z),i.addEventListener("pointercancel",Z),i.addEventListener("pointerleave",()=>{Mt.inside=!1,it=!0}),i.addEventListener("wheel",ft=>{ft.preventDefault(),!(p<1||M==="intro")&&(d.zoom=Je(d.zoom*Math.exp(ft.deltaY*.0012),.5,1.6))},{passive:!1});function Y(ft,$){if(p<1&&g){p=Math.min(1,p+ft/m);const G=Lv(p);for(const ct in v)d[ct]=Be(g[ct],v[ct],G)}if(M==="intro"&&p>=1&&(d.yaw=tu.intro.yaw*Es+Math.sin($*.22)*.06),Bt=x(),c.uniforms.uBlur.value=d.blur*n*Je(d.zoom,.6,1.3),c.uniforms.uTime.value=$,it){it=!1;const G=Mt.inside&&tt.size===0?U(Mt.x,Mt.y):null;G!==at&&(at=G,i.style.cursor=G?"pointer":"grab",rt(G))}}function F(){a.render()}const j=new B;function ot(ft,$){return j.copy(ft).project(r),$.x=(j.x*.5+.5)*u,$.y=(-j.y*.5+.5)*h,$}return _(),S("intro",{instant:!0}),{renderer:e,scene:s,camera:r,composer:a,bloom:l,finish:c,isMobile:t,pickables:T,setView:S,update:Y,render:F,project:ot,resize:_,get view(){return M},get dim(){return d.dim},get moving(){return p<1},get width(){return u},get height(){return h},set onPick(ft){z=ft},set onHover(ft){rt=ft}}}const Fv=Math.PI/180,Zo=.735,Ko=.975,Ov=[{t:0,sun:"#ffb088",si:1.5,sky:"#f2c4aa",gnd:"#7b6b5a",hi:.6,top:"#f6cfae",bot:"#ee9f8c",glow:"#ffd9b3",gi:.3,exp:1,lamp:.45,star:0,fi:.3},{t:.07,sun:"#ffe0b8",si:2.7,sky:"#d3e4f0",gnd:"#8f8658",hi:.78,top:"#9ccbe8",bot:"#f3e2c4",glow:"#ffffff",gi:.1,exp:1,lamp:0,star:0,fi:.4},{t:.33,sun:"#fff3df",si:3.1,sky:"#bfdaf2",gnd:"#9a915e",hi:.9,top:"#7db9e3",bot:"#dcebee",glow:"#ffffff",gi:.08,exp:1,lamp:0,star:0,fi:.45},{t:.52,sun:"#ffe4b3",si:3.1,sky:"#cfdfea",gnd:"#9a8a58",hi:.8,top:"#86c0e2",bot:"#f2ddb4",glow:"#fff3d6",gi:.12,exp:1,lamp:0,star:0,fi:.4},{t:.63,sun:"#ffb25c",si:3.2,sky:"#ecc9a2",gnd:"#8c6b48",hi:.74,top:"#eeb46c",bot:"#e8794a",glow:"#ffd08a",gi:.4,exp:1.16,lamp:0,star:0,fi:.32},{t:.705,sun:"#ff7440",si:1.9,sky:"#d79da3",gnd:"#5e4859",hi:.66,top:"#8a6396",bot:"#f38f5c",glow:"#ff9d6b",gi:.42,exp:1.18,lamp:.75,star:.05,fi:.3},{t:Zo,sun:"#ff7440",si:0,sky:"#7772b0",gnd:"#3c3554",hi:.66,top:"#34316a",bot:"#a9617d",glow:"#8a5a9a",gi:.3,exp:1.2,lamp:1,star:.4,fi:.3},{t:.78,sun:"#b4c6ff",si:1.25,sky:"#5068b8",gnd:"#262a4c",hi:.8,top:"#0d1233",bot:"#232b5e",glow:"#3848a8",gi:.25,exp:1.2,lamp:1,star:1,fi:.25},{t:.95,sun:"#b4c6ff",si:1.25,sky:"#5068b8",gnd:"#262a4c",hi:.8,top:"#0d1233",bot:"#232b5e",glow:"#3848a8",gi:.25,exp:1.2,lamp:1,star:1,fi:.25},{t:Ko,sun:"#a9bfff",si:0,sky:"#6a6aa0",gnd:"#3a3550",hi:.5,top:"#3a3a70",bot:"#c98a8a",glow:"#b07a8a",gi:.28,exp:1.1,lamp:.8,star:.3,fi:.3}],vh=["sun","sky","gnd","top","bot","glow"],Bv=["si","hi","gi","exp","lamp","star","fi"],Xi=Ov.map(i=>{const t={...i};for(const e of vh)t[e]=new Ot(i[e]);return t});Xi.push({...Xi[0],t:1});const zv=`
  attribute float aPhase;
  uniform float uTime, uSize, uDrift, uBlink;
  varying float vA;
  void main() {
    vec3 p = position;
    p.x += sin(uTime * 0.50 * uDrift + aPhase * 6.0) * 0.7;
    p.y += sin(uTime * 0.80 * uDrift + aPhase * 11.0) * 0.35;
    p.z += cos(uTime * 0.45 * uDrift + aPhase * 4.0) * 0.7;
    float b = sin(uTime * uBlink + aPhase * 20.0) * 0.5 + 0.5;
    vA = mix(1.0, smoothstep(0.25, 0.9, b), step(0.001, uBlink)) * (0.5 + 0.5 * fract(aPhase * 7.3));
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
    gl_PointSize = uSize * (0.6 + 0.8 * fract(aPhase * 3.7));
  }
`,kv=`
  uniform vec3 uColor;
  uniform float uAlpha;
  varying float vA;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.05, d);
    gl_FragColor = vec4(uColor * a * vA * uAlpha, 1.0);
  }
`;function _h({count:i,box:t,color:e,size:n,drift:s=1,blink:r=0,seed:o=7,pixelRatio:a=1}){const l=Hn(o),c=new Float32Array(i*3),u=new Float32Array(i);for(let g=0;g<i;g++)c[g*3]=Be(t[0],t[3],l()),c[g*3+1]=Be(t[1],t[4],l()),c[g*3+2]=Be(t[2],t[5],l()),u[g]=l();const h=new xe;h.setAttribute("position",new we(c,3)),h.setAttribute("aPhase",new we(u,1));const f=new Se({uniforms:{uTime:{value:0},uSize:{value:n*a},uDrift:{value:s},uBlink:{value:r},uColor:{value:new Ot(e[0],e[1],e[2])},uAlpha:{value:1}},vertexShader:zv,fragmentShader:kv,transparent:!0,depthWrite:!1,blending:Yr}),d=new eh(h,f);return d.frustumCulled=!1,d}function Vv(i){const{scene:t,renderer:e,isMobile:n}=i,s=e.getPixelRatio(),r=new Se({uniforms:{uTop:{value:new Ot},uBottom:{value:new Ot},uGlow:{value:new Ot},uStars:{value:0},uTime:{value:0},uRes:{value:new St(1,1)}},vertexShader:`
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = vec4(position.xy, 1.0, 1.0); }
    `,fragmentShader:`
      uniform vec3 uTop, uBottom, uGlow;
      uniform float uStars, uTime;
      uniform vec2 uRes;
      varying vec2 vUv;
      float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      void main() {
        vec3 c = mix(uBottom, uTop, smoothstep(0.05, 0.95, vUv.y));
        vec2 q = (vUv - vec2(0.5, 0.56)) * vec2(uRes.x / uRes.y, 1.0);
        float g = 1.0 - smoothstep(0.0, 0.85, length(q));
        c += uGlow * g * g;
        if (uStars > 0.01) {
          vec2 cell = vUv * uRes / 34.0;
          vec2 id = floor(cell), f = fract(cell);
          float h = hash(id);
          vec2 sp = vec2(hash(id + 3.1), hash(id + 7.7)) * 0.8 + 0.1;
          float d = length(f - sp);
          float tw = 0.6 + 0.4 * sin(uTime * (1.0 + h * 3.0) + h * 40.0);
          float s = step(0.72, h) * smoothstep(0.09, 0.0, d) * tw;
          c += vec3(0.9, 0.95, 1.3) * s * uStars * 1.6;
        }
        gl_FragColor = vec4(c, 1.0);
      }
    `,depthTest:!1,depthWrite:!1}),o=new Jt(new js(2,2),r);o.frustumCulled=!1,o.renderOrder=-1e3,t.add(o);const a=new Yo(16777215,3);a.castShadow=!0;const l=n?1024:2048;a.shadow.mapSize.set(l,l);const c=a.shadow.camera;c.left=-36,c.right=36,c.top=34,c.bottom=-34,c.near=20,c.far=220,a.shadow.bias=-6e-4,a.shadow.normalBias=.06,a.target.position.set(0,-3,0),t.add(a,a.target);const u=new hh(16777215,8947814,.8);t.add(u);const h=new Yo(14673663,.35);h.position.set(40,26,44),t.add(h);const f=new De({vertexColors:!0,flatShading:!0,roughness:1,emissive:16777215,emissiveIntensity:.12}),d=[],g=-84,v=96,p=[[21,.85],[16,.6],[11,1],[5,.7],[-2,.85],[-8,.65],[-13,1],[-18,.75],[-23,1.05],[18,.55],[-20,.6],[8,.55]],m=Hn(42);p.forEach(([D,X],z)=>{const rt=new le(100+z),it=3+Math.floor(m()*3);for(let Mt=0;Mt<it;Mt++){const Bt=1.1+m()*.9;rt.ball(Bt,1,"#ffffff",(Mt-(it-1)/2)*1.5+(m()-.5),m()*.5,(m()-.5)*1.2,{s:[1.25,.7,1],jitter:.03})}const at=rt.mesh(f,{cast:!1,receive:!1});at.scale.setScalar(X),at.rotation.y=Math.PI/4,at.userData={speed:.5+m()*.6,d:-v+(z*.618+m()*.2)%1*v*2,y:(D+.406*g)/.82},t.add(at),d.push(at)});const M=_h({count:70,box:[-20,.4,-4,20,2.6,15],color:[2.6,3,.9],size:7,blink:1.4,seed:11,pixelRatio:s});t.add(M);const w=new De({color:2894387,roughness:1,side:sn,flatShading:!0}),y=new xe;y.setAttribute("position",new te([0,0,-.16,.62,0,.02,0,0,.2],3)),y.computeVertexNormals();const W=[];for(let D=0;D<5;D++){const X=new an,z=new Jt(y,w),rt=new Jt(y,w);rt.scale.x=-1,z.castShadow=rt.castShadow=!0,X.add(z,rt),X.userData={l:z,r:rt,radius:9+D*2.6,speed:.22+D%3*.05,phase:D*1.7,h:9+D%2*2.5,cx:-2+D*1.5,cz:-2+D%2*4},t.add(X),W.push(X)}const C={sun:1,hemi:1,exp:1,amt:0,bgAmt:0,clouds:12,cloudDim:0,birds:1,tint:new Ot("#ffffff"),top:new Ot("#ffffff"),bot:new Ot("#ffffff")};function I(D){const X=D.sky;Object.assign(C,{sun:X.sun,hemi:X.hemi,exp:X.exp,amt:X.amt,bgAmt:X.bgAmt,clouds:X.clouds,cloudDim:X.cloudDim,birds:D.birds}),C.tint.set(X.tint),C.top.set(X.top),C.bot.set(X.bot)}const S=[],x={lamp:0,night:0,exposure:1,sunDir:new B(0,1,0),isMoon:!1},_={},T=new Ot,V=new Ot("#0d0807"),H=Math.SQRT1_2;function tt(D){let X=0;for(;X<Xi.length-2&&D>=Xi[X+1].t;)X++;const z=Xi[X],rt=Xi[X+1],it=Je((D-z.t)/(rt.t-z.t));for(const at of Bv)_[at]=Be(z[at],rt[at],it);for(const at of vh)_[at]=(_[at]||new Ot).lerpColors(z[at],rt[at],it);return _}function N(D,X,z,rt){const it=tt(D),at=1-Je(it.star*1.4);it.sun.lerp(C.tint,C.amt*.6*at),it.sky.lerp(C.tint,C.amt*at),it.top.lerp(C.top,C.bgAmt*at),it.bot.lerp(C.bot,C.bgAmt*at);const Mt=D>Zo&&D<Ko,Bt=x.sunDir;if(Mt)Bt.set(-.55,.72,.42).normalize();else{const Y=D>=Ko?0:D,F=Math.PI*(.04+.92*(Y/Zo)),j=(5+52*Math.pow(Math.sin(F),1.6))*Fv,ot=(Math.cos(F)+.4)*H,ft=(-Math.cos(F)+.4)*H,$=Math.hypot(ot,ft);Bt.set(ot/$*Math.cos(j),Math.sin(j),ft/$*Math.cos(j))}a.position.copy(a.target.position).addScaledVector(Bt,110),a.color.copy(it.sun),a.intensity=it.si*Be(1,C.sun,at)*(1-.55*rt),u.color.copy(it.sky),u.groundColor.copy(it.gnd),u.intensity=it.hi*Be(1,C.hemi,at)*(1-.42*rt),h.color.copy(it.sky),h.intensity=it.fi*.7*(1-.9*rt),r.uniforms.uTop.value.copy(it.top).lerp(V,rt*.62),r.uniforms.uBottom.value.copy(it.bot).lerp(V,rt*.8),r.uniforms.uGlow.value.copy(it.glow).multiplyScalar(it.gi*(1-rt)),r.uniforms.uStars.value=it.star*(1-rt),r.uniforms.uTime.value=z,r.uniforms.uRes.value.set(i.width,i.height),e.toneMappingExposure=Be(it.exp*Be(1,C.exp,at),1.12,rt),x.lamp=it.lamp,x.night=it.star,x.isMoon=Mt;for(const Y of S)Y.mat?Y.mat.emissiveIntensity=Y.max*(Y.always?1:it.lamp):Y.light.intensity=Y.max*it.lamp*(Y.flicker?.9+.1*Math.sin(z*9+Y.max):1);T.copy(it.sky).lerp(it.sun,.35),f.emissive.copy(T),f.emissiveIntensity=.1+.25*(1-it.star)*(1-rt),f.color.setScalar((1-.3*rt)*(1-C.cloudDim));for(let Y=0;Y<d.length;Y++){const F=d[Y];F.visible=Y<C.clouds;const j=F.userData;j.d+=X*j.speed,j.d>v&&(j.d-=v*2),F.position.set((g+j.d)/2,j.y,(g-j.d)/2)}M.material.uniforms.uTime.value=z,M.material.uniforms.uAlpha.value=Je(it.lamp*1.2-.3)*(1-rt),M.visible=M.material.uniforms.uAlpha.value>.01;const U=1-Je(it.star*2),Z=Math.round(W.length*C.birds);for(let Y=0;Y<W.length;Y++){const F=W[Y],j=F.userData,ot=z*j.speed+j.phase;F.position.set(j.cx+Math.cos(ot)*j.radius,j.h+Math.sin(z*.7+j.phase)*.6,j.cz+Math.sin(ot)*j.radius*.7),F.rotation.y=-ot;const ft=Math.sin(z*9+j.phase)*.7;j.l.rotation.z=ft,j.r.rotation.z=-ft,F.scale.setScalar(U),F.visible=U>.02&&Y<Z}return x}return{update:N,lamps:S,state:x,sun:a,hemi:u,clouds:d,setClimate:I}}const Rt={X0:-22,X1:22,Z0:-16,Z1:16,BOTTOM:-14},Ve={x0:-9,x1:21,z0:9,z1:15,floor:-9,ceil:-2},Pe={x:-13,z:-8.5,h:3,r0:5.6,r1:11},Bn={x:12.6,z:-9.6,w:14,d:10},Ne={w:5.6,d:5.4},Hv=[-1.4,5,11.4,17.8],Gv=[4.3,10.9],Wv=[[1,1],[2,1],[1,0],[2,0],[0,1],[3,1],[0,0],[3,0]],Un=Wv.map(([i,t])=>({x:Hv[i],z:Gv[t]})),Xr=[-2.75,-.25,3.25,5.75,9.25,11.75],je={r:.82,len:1.8,z:Ve.z0+1.2,y:[Ve.floor+1.12,Ve.floor+3.02]},Xv=[[2,0],[3,0],[1,0],[4,0],[0,0],[5,0],[2,1],[3,1],[1,1],[4,1],[0,1],[5,1]],Ts=Xv.map(([i,t])=>({x:Xr[i],y:je.y[t],z:je.z,tier:t}));let Jo=null;function xh(i){Jo=i||null}const zi=(i,t,e,n,s,r)=>Math.max(Math.abs(i-e)-s/2,Math.abs(t-n)-r/2);function $v(i,t){const e=Math.min(zi(i,t,8.2,7.6,26,13.4),zi(i,t,Bn.x,Bn.z,Bn.w+2,Bn.d+2),zi(i,t,Pe.x+.6,Pe.z+.2,12,9),zi(i,t,-8.3,9.8,4,4.2),zi(i,t,-6.5,7.2,2.4,17.6),zi(i,t,0,-1.3,15,2.4));return be(.3,3.2,e)}function He(i,t){const e=Math.hypot(i-Pe.x,(t-Pe.z)*1.1);let n=Pe.h*(1-be(Pe.r0,Pe.r1,e));n+=1.5*(1-be(1.2,5.6,Math.hypot(i+1.5,(t+15.2)*1.2)));const s=(1-be(-12.5,-10.5,i))*be(Pe.r0+.5,Pe.r0+3.5,e);return n+=(Jr(i*.28+5,t*.28+2)-.45)*1.1*s,Jo&&(n+=Jo(i,t)*$v(i,t)),n}function Ee(i,t){const e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=He(e,n),a=He(e+1,n),l=He(e,n+1),c=He(e+1,n+1);return e+n&1?s+r<1?o+(a-o)*s+(l-o)*r:c+(l-c)*(1-s)+(a-c)*(1-r):s>r?o+(a-o)*s+(c-a)*r:o+(l-o)*r+(c-l)*s}const Is=i=>new Ot(i);function As(i,t,e,n,s=.06,r=10){const o=new nh(t.map(([f,d])=>new B(f,0,d)),!1,"catmullrom",.5),a=t.length*r,l=[],c=[];for(let f=0;f<=a;f++){const d=f/a,g=o.getPointAt(d),v=o.getTangentAt(d),p=-v.z,m=v.x,M=e*.5*(.88+.28*rn(g.x*.7+3,g.z*.7)),w=g.x+p*M,y=g.z+m*M,W=g.x-p*M,C=g.z-m*M;l.push([w,Ee(w,y)+s,y]),c.push([W,Ee(W,C)+s,C])}const u=[];for(let f=0;f<a;f++){const d=l[f],g=c[f],v=l[f+1],p=c[f+1];u.push(...d,...v,...g,...g,...v,...p)}const h=new xe;h.setAttribute("position",new te(u,3)),i.add(h,n,{jitter:.05})}const Za=[[-.7,"#4f3a26"],[-2.6,"#7a5236"],[-4.2,"#a06f44"],[-5,"#c79a62"],[-7.2,"#b08355"],[-8,"#8f8a7c"],[-10.6,"#a59d8c"],[-12.2,"#7b766c"],[-99,"#5f5b55"]].map(([i,t])=>[i,Is(t)]);function qv(i,t,e){const n=i+(rn(t*.16,3.3)-.5)*1.7+(rn(t*.9,i*.9)-.5)*.5;for(const[s,r]of Za)if(n>s)return e.copy(r);return e.copy(Za[Za.length-1][1])}function yh(i,t){const e=new an;i.add(e);const n=Hn(2024),s=new Ot,r=new Ot,[o,a,l,c]=t.grass.map(Is),[u,h]=t.field.map(Is),f=Is(t.hill),d=Is("#c3d3e6");function g(N,D,X){const z=Jr(N*.17+1.3,D*.17+4.1);X.copy(l).lerp(o,be(.25,.6,z)).lerp(a,be(.55,.85,z)),X.lerp(c,rn(N*.7,D*.7)*.35);const rt=Math.hypot(N-Pe.x,(D-Pe.z)*1.1);X.lerp(f,(1-be(Pe.r0,Pe.r1+1,rt))*.55);const it=(1-be(-13.5,-11.5,N))*be(-.5,2.5,D);if(it>0){const at=Math.floor((N*.6+D*.9)*1.1)&1;r.copy(at?u:h),X.lerp(r,it*t.fieldAmt)}return t.groundFx==="snow"?X.lerp(d,be(.35,.75,Jr(N*.35+9,D*.35+2))*.45):t.groundFx==="cracks"?rn(N*1.9+4,D*1.9)>.7&&X.multiplyScalar(.8):t.groundFx==="ripples"&&X.multiplyScalar(.94+.1*Math.sin(N*2.2+D*1.1+rn(N*.3,D*.3)*5)),X}const v=[],p=[],m=(N,D,X)=>{const z=(N[0]+D[0]+X[0])/3,rt=(N[2]+D[2]+X[2])/3;g(z,rt,s);const it=1+(n()-.5)*.07;for(const at of[N,D,X])v.push(at[0],at[1],at[2]),p.push(s.r*it,s.g*it,s.b*it)};for(let N=Rt.X0;N<Rt.X1;N++)for(let D=Rt.Z0;D<Rt.Z1;D++){const X=[N,He(N,D),D],z=[N+1,He(N+1,D),D],rt=[N,He(N,D+1),D+1],it=[N+1,He(N+1,D+1),D+1];N+D&1?(m(X,rt,z),m(z,rt,it)):(m(X,rt,it),m(X,it,z))}const M=new xe;M.setAttribute("position",new te(v,3)),M.setAttribute("color",new te(p,3)),M.computeVertexNormals();const w=new Jt(M,En.flat);w.receiveShadow=!0,w.castShadow=!0,e.add(w);const y=[],W=[],C=[-.6,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12];function I(N){const D=N==="z"?Rt.X0:Rt.Z0,X=N==="z"?Rt.X1:Rt.Z1,z=N==="z"?Ve.x0:Ve.z0,rt=at=>{const Mt=N==="z"?He(at,Rt.Z1):He(Rt.X1,at),Bt=Rt.BOTTOM-rn(at*.45+(N==="z"?0:50),9.1)*3.2;return[Mt,...C,Bt]},it=(at,Mt,Bt)=>{const U=Mt[Bt],Z=at>=z&&U<=Ve.ceil+.001&&U>=Ve.floor-.001;let Y=0;return Bt>0&&!Z&&at<X&&(Y=Je((rn(at*.55+(N==="z"?0:31),U*.6+10)-.32)*.75,0,.5)),N==="z"?[at,U,Rt.Z1+Y]:[Rt.X1+Y,U,at]};for(let at=D;at<X;at++){const Mt=rt(at),Bt=rt(at+1);for(let U=0;U<Mt.length-1;U++){const Z=(Mt[U]+Mt[U+1])/2;if(at>=z&&Z<Ve.ceil&&Z>Ve.floor)continue;const Y=it(at,Mt,U),F=it(at+1,Bt,U),j=it(at,Mt,U+1),ot=it(at+1,Bt,U+1),ft=N==="z"?[[Y,j,ot],[Y,ot,F]]:[[Y,ot,j],[Y,F,ot]];for(const $ of ft){const G=($[0][1]+$[1][1]+$[2][1])/3;qv(G,at+(N==="z"?0:60),s);const ct=1+(n()-.5)*.12;for(const P of $)y.push(P[0],P[1],P[2]),W.push(s.r*ct,s.g*ct,s.b*ct)}}}}I("z"),I("x");const S=new xe;S.setAttribute("position",new te(y,3)),S.setAttribute("color",new te(W,3)),S.computeVertexNormals();const x=new Jt(S,En.flat);x.receiveShadow=!0,x.castShadow=!0,e.add(x);const _=new le(77),[T,V]=t.paths;As(_,[[-12.4,-5.4],[-10.9,-3.7],[-8.7,-1.9],[-6.4,-.9]],1.35,T),As(_,[[-6.4,-.9],[-2,-1.3],[3,-1.5],[6.3,-3],[7.6,-4.9]],1.35,T),As(_,[[-6.4,-.9],[-6.9,3],[-6.4,7.6],[-6.3,11],[-6.5,14.8]],1.25,T),As(_,[[-6.4,7.6],[2,7.62],[12,7.58],[21.3,7.6]],.95,V),As(_,[[-6.4,.2],[4,.4],[14,.35],[21.3,.4]],.8,V);const H=["#6a665f","#5d5a54","#77726a"];for(let N=0;N<26;N++){const D=N<15,X=D?Rt.X0+1.5+n()*(Rt.X1-Rt.X0-3):Rt.Z0+1.5+n()*(Rt.Z1-Rt.Z0-3),z=n()*2.2+.4,rt=1.2+n()*1.6,it=2.5+n()*4.5,at=D?X:Rt.X1-z,Mt=D?Rt.Z1-z:X;_.cone(rt,it,5,H[N%3],at,Rt.BOTTOM-.4-it/2,Mt,{r:[Math.PI,n()*3,0],jitter:.1})}for(let N=0;N<16;N++){const D=N%2===0;let X,z;do X=D?Rt.X0+1+n()*42:Rt.Z0+1+n()*30,z=-1.5-n()*10.5;while(X>(D?Ve.x0:Ve.z0)-1.2&&z>Ve.floor-1&&z<Ve.ceil+.8);const rt=.35+n()*.55;_.ball(rt,0,z<-7?"#9a9486":"#8a7f70",D?X:Rt.X1+.1,z,D?Rt.Z1+.1:X,{s:[1.2,.8,1],r:[n(),n(),n()],jitter:.1})}for(let N=0;N<14;N++){const D=N%2===0,X=D?Rt.X0+1+n()*12+(N%4===0,0):Rt.Z0+1+n()*23,z=.8+n()*1.5,rt=(D?He(X,Rt.Z1):He(Rt.X1,X))-.5;_.cyl(.05,.02,z,4,"#4a3524",D?X:Rt.X1+.12,rt-z/2,D?Rt.Z1+.12:X,{r:[(n()-.5)*.4,0,(n()-.5)*.4]})}{const N=[[0,0],[.18,.02],[.42,.45],[.48,.8],[.36,1.15],[.16,1.4],[.14,1.62],[.22,1.72]].map(([D,X])=>new St(D,X));_.add(new ni(N,8),"#b8663f",{p:[Rt.X1+.15,-6.3,1.5],r:[.5,.3,-.9],jitter:.08}),_.add(new ni(N,8),"#a9583a",{p:[-15,-5.9,Rt.Z1+.12],r:[-.8,.2,.5],s:.8,jitter:.08})}for(let N=0;N<150;N++){const D=N<88,X=D?Rt.X0+N/88*44+n()*.4:Rt.Z0+(N-88)/62*32+n()*.4,z=D?He(X,Rt.Z1):He(Rt.X1,X),rt=D?X:Rt.X1,it=D?Rt.Z1:X;g(rt,it,s),s.multiplyScalar(.82);const at=.25+n()*.5;_.cone(.22+n()*.15,at,4,s,D?X:Rt.X1+.04,z-at/2+.03,D?Rt.Z1+.04:X,{r:[Math.PI,n()*3,0],jitter:.06})}const tt=_.mesh(En.flat);return e.add(tt),{grassColor:g,dispose:()=>Al(e)}}const fi=(i,t)=>new St(i,t);function vi(i=1,t=.82,e=1.8,n="#8f5d34"){const s=new le(i),r=[];for(let a=0;a<=6;a++){const l=a/6-.5;r.push(fi(t*(.8+.2*Math.cos(Math.PI*l)),l*e))}s.add(new ni(r,12),n,{jitter:.11});for(const a of[-.46,-.3,.3,.46]){const l=t*(.8+.2*Math.cos(Math.PI*a))+.02;s.add(new pe(l,l,e*.045,12,1,!0),"#3a3531",{p:[0,a*e,0],jitter:.05})}const o=t*.8-.03;return s.cyl(o,o,.04,12,"#a9763f",0,e/2-.07,0,{jitter:.06}),s.cyl(o,o,.04,12,"#a9763f",0,-e/2+.07,0,{jitter:.06}),s}function Yv(i,t,e,n,s=5,r=Math.random){const o=.55+s*.07,a=[fi(.02,0),fi(.62,.07),fi(.9,.26),fi(.82,.52),fi(.5,.8),fi(0,1)],l=["#34522f","#3d5d36","#2f4b2d","#426339"];i.cyl(.09,.12,.6,5,"#5b4330",t,e+.3,n),i.add(new ni(a,6),l[Math.floor(r()*l.length)],{p:[t,e+.4,n],r:[(r()-.5)*.06,r()*3,(r()-.5)*.06],s:[o,s,o],jitter:.13,sway:[e+.4,s]})}function jv(i,t,e,n,s=5.5,r=Math.random){i.cyl(.11,.2,s*.78,6,"#6e4c36",t,e+s*.39,n,{r:[.04,0,.05],sway:[e,s]});const o=["#4f6e3b","#5b7c42","#466437"];for(let a=0;a<4;a++){const l=a/4*Math.PI*2+r(),c=a===0?0:.9+r()*.4;i.ball(1.25+r()*.35,1,o[a%3],t+Math.cos(l)*c,e+s*.86+r()*.25,n+Math.sin(l)*c,{s:[1.25,.5,1.25],r:[0,r()*3,0],jitter:.1,sway:[e,s]})}}function Mh(i,t,e,n,s=1,r=Math.random){i.cyl(.1*s,.2*s,1*s,5,"#6c5d4b",t,e+.5*s,n,{r:[(r()-.5)*.3,r()*3,(r()-.5)*.3]});const o=["#8b9b6c","#98a87a","#7e9063","#a3b184"];for(let a=0;a<4;a++){const l=r()*6.28,c=a===0?0:.45*s;i.ball((.55+r()*.25)*s,1,o[a],t+Math.cos(l)*c,e+(1.25+r()*.35)*s,n+Math.sin(l)*c,{s:[1,.78,1],r:[0,r()*3,0],jitter:.1,sway:[e+.6*s,1.5*s]})}}function eu(i,t,e,n,s=1,r="#5f8a44",o=Math.random){i.ball(.45*s,1,r,t,e+.3*s,n,{s:[1.1,.8,1.1],r:[0,o()*3,0],jitter:.1,sway:[e,.8*s]})}function Qe(i,t,e,n,s=0,r=null,o=Math.random){const a=new le(Math.floor(o()*1e6)+1),l="#a27647";if(a.box(.8,.06,.56,l,0,.03,0),a.box(.8,.32,.05,l,0,.2,.26),a.box(.8,.32,.05,l,0,.2,-.26),a.box(.05,.32,.5,l,.38,.2,0),a.box(.05,.32,.5,l,-.38,.2,0),r==="red"||r==="white"){const c=r==="red"?["#5a1d4f","#6b2560","#43163d"]:["#c8cc62","#b5c253","#d6d77a"];for(let u=0;u<16;u++)a.ball(.1,0,c[u%3],(o()-.5)*.56,.3+o()*.14,(o()-.5)*.34,{jitter:.12})}else if(r==="bottles")for(let c=0;c<6;c++)$s(a,-.26+c%3*.26,.08,c<3?-.12:.12,c%2?"#27402d":"#3a2a22");i.merge(a,t,e,n,s)}function $s(i,t,e,n,s="#27402d"){i.cyl(.06,.06,.28,6,s,t,e+.14,n,{jitter:.04}),i.cyl(.022,.05,.1,6,s,t,e+.33,n,{jitter:.04}),i.cyl(.026,.026,.06,6,"#7a1f2f",t,e+.4,n,{jitter:.02})}function Ka(i,t,e,n,s=0,{shirt:r="#b4473a",pants:o="#3f3a4a",hat:a="#d9b86a",apron:l=null}={},c="default"){const u=new le(31);if(c==="egypt"){const f="#c68e63",d="#f4efe2",g="#e3b94a",v="#2f5fa8";u.box(.1,.36,.13,f,-.07,.18,0),u.box(.1,.36,.13,f,.07,.18,0),u.cyl(.17,.22,.3,7,d,0,.45,0),u.box(.1,.26,.04,g,0,.42,.19),u.cyl(.14,.17,.3,7,f,0,.74,0),u.cyl(.21,.19,.06,9,g,0,.88,0),u.cyl(.16,.16,.03,9,"#3f9a9a",0,.9,0),u.box(.07,.38,.09,f,-.21,.66,.02,{r:[0,0,-.18]}),u.box(.07,.38,.09,f,.21,.66,.02,{r:[0,0,.18]}),u.box(.08,.04,.1,g,-.24,.52,.02),u.box(.08,.04,.1,g,.24,.52,.02),u.ball(.15,1,f,0,1.04,0,{jitter:.03});for(let p=0;p<4;p++)u.box(.36-p*.03,.055,.3,p%2?g:v,0,1.08+p*.055,-.03);for(const p of[-1,1])for(let m=0;m<4;m++)u.box(.1,.07,.1,m%2?g:v,p*.17,1.02-m*.07,.07);u.box(.05,.08,.04,g,0,1.2,.15),i.merge(u,t,e,n,s);return}const h=c==="winter";u.box(.11,.38,.14,o,-.07,.19,0),u.box(.11,.38,.14,o,.07,.19,0),u.cyl(.15,.19,.5,7,r,0,.62,0),l&&u.box(.26,.42,.05,l,0,.5,.17),u.box(.08,.4,.1,r,-.22,.64,.02,{r:[0,0,-.18]}),u.box(.08,.4,.1,r,.22,.64,.02,{r:[0,0,.18]}),u.ball(.15,1,"#e7b58c",0,1.02,0,{jitter:.03}),h?(u.cyl(.19,.23,.4,7,"#5a4a42",0,.56,0),u.cyl(.17,.17,.09,8,"#b4473a",0,.9,0),u.box(.08,.26,.05,"#b4473a",.08,.76,.17),u.ball(.165,1,"#3f5a7a",0,1.09,0,{s:[1,.75,1],jitter:.04}),u.ball(.06,0,"#f4f1ea",0,1.24,0)):a&&(u.cyl(.3,.3,.03,9,a,0,1.13,0),u.cyl(.13,.16,.13,8,a,0,1.2,0)),i.merge(u,t,e,n,s)}function Qo(i,t,e,n,s=4.5,r=Math.random){const o=(r()-.5)*.5,a=r()*6.28,l=6;let c=t,u=n;for(let d=0;d<l;d++){const g=d/l;i.cyl(.16-g*.05,.19-g*.05,s/l+.04,6,d%2?"#8a6a45":"#7a5c3a",c,e+(d+.5)*(s/l),u,{sway:[e,s]}),c+=Math.cos(a)*o*g*.35,u+=Math.sin(a)*o*g*.35}const h=e+s,f=["#5f8a3c","#6f9a45","#527a36"];for(let d=0;d<9;d++){const g=d/9*Math.PI*2+r()*.3,v=.55+r()*.35,p=1.7+r()*.5;i.add(new ti(.3,p,4),f[d%3],{p:[c+Math.cos(g)*p*.42,h+.12-v*.35,u+Math.sin(g)*p*.42],r:[0,-g,-Math.PI/2-v],s:[1,1,.22],jitter:.1,sway:[e,s]})}i.ball(.3,0,"#6f9a45",c,h+.05,u,{sway:[e,s]});for(let d=0;d<5;d++)i.ball(.09,0,"#c9742c",c+(r()-.5)*.4,h-.3-r()*.2,u+(r()-.5)*.4,{sway:[e,s]})}function nu(i,t,e,n,s=1,r=Math.random){const o=["#5f8f4a","#6a9a52","#557f44"][Math.floor(r()*3)],a=(1.5+r()*.9)*s,l=r()*6.28;i.cyl(.2*s,.24*s,a,7,o,t,e+a/2,n),i.ball(.2*s,0,o,t,e+a,n);for(const c of[-1,1]){if(r()<.25)continue;const u=e+a*(.35+r()*.25),h=Math.cos(l)*c,f=Math.sin(l)*c;i.cyl(.11*s,.11*s,.4*s,6,o,t+h*.32*s,u,n+f*.32*s,{r:[f*1.57,0,-h*1.57]});const d=(.5+r()*.4)*s;i.cyl(.11*s,.12*s,d,6,o,t+h*.5*s,u+d/2,n+f*.5*s),i.ball(.11*s,0,o,t+h*.5*s,u+d,n+f*.5*s)}}function Zv(i,t,e,n,s=0){i.add(new pe(.8,.8,1.15,11),"#d9b458",{p:[t,e+.78,n],r:[Math.PI/2,0,s],jitter:.1}),i.add(new pe(.45,.45,1.17,9),"#c9a149",{p:[t,e+.78,n],r:[Math.PI/2,0,s],jitter:.06})}function iu(i,t,e,n,s,r=2.6){i.cyl(.05,.07,r,6,"#2f2b2a",e,n+r/2,s),i.box(.5,.05,.05,"#2f2b2a",e+.2,n+r-.05,s),i.box(.2,.05,.2,"#2f2b2a",e+.42,n+r-.12,s),t.box(.16,.24,.16,"#ffffff",e+.42,n+r-.28,s,{jitter:0}),i.cone(.16,.12,4,"#2f2b2a",e+.42,n+r-.47,s,{r:[Math.PI,.78,0]})}const Lr=(i,t,e,n,s,r,o=0)=>Math.abs(i-e)<s/2+o&&Math.abs(t-n)<r/2+o;function Cs(i,t){return!(i<Rt.X0+.7||i>Rt.X1-.7||t<Rt.Z0+.7||t>Rt.Z1-.7||Lr(i,t,8.2,7.6,26,13.4,.7)||Lr(i,t,Bn.x,Bn.z,Bn.w,Bn.d,1.3)||Lr(i,t,Pe.x+.6,Pe.z+.2,10.5,7.6,.6)||Lr(i,t,-8.3,9.8,2.4,2.6,1)||Math.abs(i+6.5)<1.2&&t>-1.6||Math.abs(t+1.3)<1.2&&i>-7.5&&i<7.5)}function Us(i,t,e,n,s,r,o,a,l=8){const c=t/l;for(let u=0;u<l;u++)i.add(Dv(c+.01,e,n),a,{p:[s-t/2+c*(u+.5),r,o],jitter:.12});i.box(t+.1,.1,.18,"#9c4a32",s,r+e,o,{jitter:.05})}function bh(i,t,e){const n=new an;i.scene.add(n);const s=[],r=U=>{t.lamps.push(U),s.push(U)},o=e.props==="desert",a=Hn(909),l=new le(5),c=new le(6,{sway:!0,tint:e.vegTint}),u=new le(7),h=Pe.x,f=Pe.h,d=Pe.z,g=new le(8),v=new le(9),{STUCCO:p,STUCCO2:m,TOWER:M,STONE:w,TRIM:y,ROOF:W,SHUT:C,WOOD:I}={STUCCO:"#ecc98c",STUCCO2:"#e3b678",TOWER:"#e0bd82",STONE:"#bca789",TRIM:"#d9c4a0",ROOF:"#bb5a3c",SHUT:"#587259",WOOD:"#5c3b26",...e.villa},S=.35,x=(U,Z,Y,F=.55,j=.82,ot=!0)=>{g.box(F+.18,j+.18,.06,y,U,Z,Y),v.box(F,j,.05,"#ffffff",U,Z,Y+.035,{jitter:0}),ot&&(g.box(F*.5,j,.05,C,U-F*.8,Z,Y+.04),g.box(F*.5,j,.05,C,U+F*.8,Z,Y+.04)),g.box(F+.34,.07,.16,y,U,Z-j/2-.1,Y+.05)},_=(U,Z,Y,F=.55,j=.82,ot=!0)=>{g.box(.06,j+.18,F+.18,y,U,Z,Y),v.box(.05,j,F,"#ffffff",U+.035,Z,Y,{jitter:0}),ot&&(g.box(.05,j,F*.5,C,U+.04,Z,Y-F*.8),g.box(.05,j,F*.5,C,U+.04,Z,Y+F*.8)),g.box(.16,.07,F+.34,y,U+.05,Z-j/2-.1,Y)};g.box(10.5,1.7,7.6,w,.6,-.5,.2,{jitter:.06});for(let U=0;U<9;U++)g.box(1.1,.12,7.62,U%2?"#c6b294":"#b39e80",-4.1+U*1.17,.3,.2,{jitter:.05});g.box(5.6,3.4,3.8,p,-.4,S+1.7,-.4,{jitter:.03}),g.box(5.7,.5,3.9,"#cbb089",-.4,S+.25,-.4,{jitter:.05}),Us(g,6.5,1.2,4.8,-.4,S+3.4,-.4,W,9),g.box(6.5,.1,4.8,"#a5503a",-.4,S+3.4,-.4),g.box(2.3,6.5,2.3,M,-2.95,S+3.25,-1.7,{jitter:.03}),g.box(2.5,.16,2.5,y,-2.95,S+5,-1.7),g.box(2.75,.14,2.75,"#a5503a",-2.95,S+6.55,-1.7),g.add(new ti(1.98,1.05,4),W,{p:[-2.95,S+7.15,-1.7],r:[0,Math.PI/4,0],jitter:.1}),g.box(.06,.5,.06,"#3a3531",-2.95,S+7.9,-1.7),g.box(.62,.95,.08,"#3a2b24",-2.95,S+5.75,-.53),g.box(.08,.95,.62,"#3a2b24",-1.78,S+5.75,-1.7),v.box(.5,.5,.05,"#ffffff",-2.95,S+5.6,-.52,{jitter:0}),v.box(.05,.5,.5,"#ffffff",-1.77,S+5.6,-1.7,{jitter:0}),x(-2.95,S+3.9,-.54,.4,.7,!1),g.box(3.6,2.5,3.2,m,4,S+1.25,.1,{jitter:.03}),g.box(3.7,.45,3.3,"#cbb089",4,S+.22,.1,{jitter:.05}),Us(g,4.3,.95,4,4.05,S+2.5,.1,"#b35438",6),g.box(4.3,.1,4,"#a5503a",4.05,S+2.5,.1),g.box(.45,1.15,.45,"#cfae7e",1,S+4.2,-1.3),g.box(.62,.12,.62,"#a5503a",1,S+4.82,-1.3),g.box(1.2,1.75,.08,y,-.4,S+.87,1.5),g.box(.9,1.45,.1,I,-.4,S+.72,1.53),g.add(new pe(.45,.45,.1,10),I,{p:[-.4,S+1.45,1.53],r:[Math.PI/2,0,0]}),g.box(.06,.06,.06,"#d9b86a",-.1,S+.75,1.6),g.box(1.6,.14,.7,w,-.4,S+.07,1.9);for(const U of[-2.25,-.4,1.45])x(U,S+2.5,1.51);for(const U of[-2.25,1.45])x(U,S+1.05,1.51);for(const U of[3.2,4.8])x(U,S+1.45,1.71,.5,.75);for(const U of[-.65,.85])_(5.81,S+1.45,U,.5,.75);_(2.41,S+2.95,-1.2,.4,.4,!1);for(const U of[2.5,3.95,5.4])g.cyl(.07,.07,2,6,"#7a5a3c",U,S+1,3.3),g.box(.09,.09,1.9,"#7a5a3c",U,S+2.02,2.5);g.box(3.3,.09,.09,"#7a5a3c",3.95,S+2.08,3.3),g.box(3.3,.09,.09,"#7a5a3c",3.95,S+2.08,2.5);for(let U=0;U<9;U++){const Z=h+2.5+a()*2.9,Y=d+1.9+a()*1.5;c.ball(.34+a()*.16,0,U%2?"#6f9645":"#5d8640",Z,f+S+2.2+a()*.12,Y,{s:[1.2,.5,1.2],r:[0,a()*3,0],sway:[f+S+1.9,.6]}),U%3===0&&l.ball(.1,0,"#5a1d4f",Z,f+S+1.88,Y)}g.box(1.3,.07,.7,"#8a6a48",3.95,S+.72,2.85);for(const[U,Z]of[[3.4,2.6],[4.5,2.6],[3.4,3.1],[4.5,3.1]])g.box(.07,.7,.07,"#8a6a48",U,S+.35,Z);g.box(1.3,.06,.24,"#8a6a48",3.95,S+.42,2.25);for(const[U,Z,Y]of[[-1.35,1.95,1],[.55,1.95,1],[5.3,-3,1.2],[-4.1,3.4,1.1]])if(g.cyl(.24*Y,.17*Y,.34*Y,7,"#b8653f",U,S+.17*Y,Z),c.ball(.3*Y,1,"#5f8a44",h+U,f+S+.52*Y,d+Z,{sway:[f+S+.3,.6]}),Y===1.2)for(let F=0;F<4;F++)l.ball(.07,0,"#f2c53a",h+U+(a()-.5)*.4,f+S+.6+a()*.2,d+Z+(a()-.5)*.4);g.box(3.3,.5,.26,w,-3,S+.25,3.85,{jitter:.07}),g.box(5.2,.5,.26,w,3.2,S+.25,3.85,{jitter:.07}),g.box(.26,.5,5,w,5.72,S+.25,-1.3,{jitter:.07}),g.box(1.7,.2,.5,w,-.45,.25,4.2),g.box(1.9,.14,.5,w,-.45,.1,4.6),l.merge(g,h,f,d),u.merge(v,h,f,d);const T=-8.3,V=9.8;l.box(2.4,2,2.6,"#cfbb96",T,1,V,{jitter:.06}),l.box(2.5,.4,2.7,"#b7a585",T,.2,V,{jitter:.06}),Us(l,2.9,.85,3.2,T,2,V,"#b35438",5),l.box(.08,1.45,.95,"#22160f",T+1.2,.72,V),l.add(new pe(.475,.475,.08,10),"#22160f",{p:[T+1.2,1.45,V],r:[0,0,Math.PI/2]}),l.box(.07,1.4,.52,I,T+1.42,.7,V+.62,{r:[0,1,0]}),l.box(.2,.06,.06,"#2f2b2a",T+1.3,1.92,V-.8),u.box(.15,.22,.15,"#ffffff",T+1.4,1.75,V-.8,{jitter:0}),l.merge(vi(21),T+.2,.5,V+1.95,0,.55),l.merge(vi(22),T-.75,.5,V+1.9,.7,.55),Qe(l,T+1.9,0,V+1.7,.3,"red",a),Qe(l,T+2,.38,V+1.75,-.2,null,a),Qe(l,-5.5,0,8.55,.2,"red",a),Qe(l,-5.45,0,6.7,-.15,"white",a);for(const[U,Z]of[[1.3,6.9],[8.3,14]]){for(let Y=U;Y<=Z+.01;Y+=1.4)l.box(.11,.78,.11,"#8a6a48",-5,.39,Y,{r:[0,a()*.3,0]});l.box(.05,.07,Z-U,"#9a7a56",-5,.6,(U+Z)/2),l.box(.05,.07,Z-U,"#9a7a56",-5,.32,(U+Z)/2)}const H=[[-11.9,-1.2,4.6],[-9.9,-.3,5.2],[-8,.4,4.4],[-9.6,-4.2,5],[-7.6,-3.1,4.3],[-19,-4.6,5.6],[-6.6,-12.4,5.2],[-17.6,-14.2,6.2],[-9.8,-14.6,5.4],[-20.6,-9.6,5],[-3,-14.4,5.4],[-.9,-15,6],[.8,-13.7,4.8],[-4.4,-13,4.2],[4.3,-13.4,4.8],[20.9,-14.9,5.2],[20.9,-4.2,4.4],[-20.6,14.2,4.6],[-19.3,14.9,3.8],[-21,1.6,4.4]],tt=[[-20.2,-13.4,6.4],[2.7,-11.9,5.6],[-16.6,2.6,5.2]],N=[[-19.2,5.4,1.1],[-15.2,5.8,1],[-18.6,9.2,1.2],[-14.7,9.9,1],[-19.6,12.4,1],[-15.9,13.4,1.15],[-11.9,13.2,.95],[-11.6,5.6,.9],[-3.6,-4.4,1],[1.6,-5.2,1.1],[-1.2,-8.4,1]];if(o){const Y=(F,j)=>Math.hypot(F-.2,j- -13.3)>4.2;for(const[F,j,ot]of H)Y(F,j)&&Qo(c,F,Ee(F,j)-.05,j,ot*.85,a);for(const[F,j,ot]of tt)Y(F,j)&&Qo(c,F,Ee(F,j)-.05,j,ot,a);for(const[F,j,ot]of N)nu(c,F,Ee(F,j)-.05,j,ot,a);for(let F=0;F<26;F++){const j=Rt.X0+a()*44,ot=Rt.Z0+a()*32;!Cs(j,ot)||!Y(j,ot)||(F%3?nu(c,j,Ee(j,ot)-.05,ot,.5+a()*.5,a):eu(c,j,Ee(j,ot)-.05,ot,.6+a()*.5,"#8a9a5a",a))}{const F=Ee(.2,-13.3)-1.2;for(let ot=0;ot<6;ot++){const ft=3.9-ot*.6;l.add(new pe(ft-.5,ft,.9,4),ot%2?"#dcbc82":"#d2b076",{p:[.2,F+.45+ot*.9,-13.3],r:[0,Math.PI/4,0],jitter:.06})}l.add(new ti(.42,.6,4),"#e8c56a",{p:[.2,F+5.7,-13.3],r:[0,Math.PI/4,0],jitter:.04});const j=Ee(-9.2,-2.6);l.box(.8,.3,.8,"#c9a878",-9.2,j+.15,-2.6),l.box(.5,3.4,.5,"#d8b98a",-9.2,j+1.7,-2.6,{jitter:.05}),l.add(new ti(.36,.55,4),"#e8c56a",{p:[-9.2,j+3.67,-2.6],r:[0,Math.PI/4,0]})}}else{for(const[U,Z,Y]of H)Yv(c,U,Ee(U,Z)-.05,Z,Y,a);for(const[U,Z,Y]of tt)jv(c,U,Ee(U,Z)-.05,Z,Y,a);for(const[U,Z,Y]of N)Mh(c,U,Ee(U,Z)-.05,Z,Y,a);for(let U=0;U<26;U++){const Z=Rt.X0+a()*44,Y=Rt.Z0+a()*32;!Cs(Z,Y)||Z<-11.5&&Y>1||eu(c,Z,Ee(Z,Y)-.05,Y,.7+a()*.8,U%3?"#6b8f47":"#58803f",a)}}if(!o)for(const[U,Z,Y]of[[-17.2,7.3,.3],[-13.3,11.4,1.2],[-17.6,11.2,2],[-13,3.7,.8],[-20.3,8.6,1.5]])Zv(l,U,Ee(U,Z)-.06,Z,Y);{const Y=Ee(-10.3,3.3);l.cyl(.05,.05,1.9,5,"#7a5a3c",-10.3,Y+.95,3.3),l.box(1.3,.07,.07,"#7a5a3c",-10.3,Y+1.35,3.3),l.box(.5,.62,.24,"#b4473a",-10.3,Y+1.15,3.3,{jitter:.08}),l.box(.5,.16,.26,"#3f5a7a",-10.3,Y+.82,3.3),l.ball(.2,1,"#e3cf9a",-10.3,Y+1.68,3.3),l.cyl(.36,.36,.03,9,"#b9934e",-10.3,Y+1.82,3.3),l.cone(.2,.26,7,"#b9934e",-10.3,Y+1.95,3.3)}{const Y=Ee(-17.9,.2);l.add(new pe(.75,.8,.8,10,1,!0),"#b9aa90",{p:[-17.9,Y+.4,.2],jitter:.1}),l.cyl(.8,.8,.1,10,"#a89a82",-17.9,Y+.8,.2),l.cyl(.6,.6,.02,10,"#3c5a66",-17.9,Y+.6,.2),l.box(.1,1.5,.1,"#7a5a3c",-17.9-.7,Y+1.4,.2),l.box(.1,1.5,.1,"#7a5a3c",-17.9+.7,Y+1.4,.2),Us(l,1.9,.5,1.3,-17.9,Y+2.1,.2,"#b35438",4),l.cyl(.14,.12,.2,6,"#6d5138",-17.9+.3,Y+.95,.2+.3)}const D=e.flowers.colors;for(let U=0;U<e.flowers.n;U++){const Z=Rt.X0+a()*44,Y=Rt.Z0+a()*32;Cs(Z,Y)&&l.ball(.07+a()*.04,0,D[Math.floor(a()*D.length)],Z,Ee(Z,Y)+.1,Y,{jitter:.1})}if(e.mounds)for(let U=0;U<e.mounds.n;U++){const Z=Rt.X0+a()*44,Y=Rt.Z0+a()*32;if(!Cs(Z,Y))continue;const F=.35+a()*.7;l.ball(F,1,e.mounds.color,Z,Ee(Z,Y)-F*.25,Y,{s:[1.5,.45,1.2],r:[0,a()*3,0],jitter:.04})}for(let U=0;U<40;U++){const Z=Rt.X0+a()*44,Y=Rt.Z0+a()*32;if(!Cs(Z,Y))continue;const F=.18+a()*.35;l.ball(F,0,U%2?"#a9a393":"#958f80",Z,Ee(Z,Y)+F*.3,Y,{s:[1.2,.7,1],r:[a(),a(),a()],jitter:.1})}n.add(l.mesh(En.flat));const X=Tl({vertexColors:!0,flatShading:!0,roughness:.9},.02);n.add(c.mesh(X));const z=gh("#ffc267");if(n.add(u.mesh(z,{cast:!1,receive:!1})),r({mat:z,max:3.2}),!i.isMobile){const U=new wl("#ffb060",0,11,2);U.position.set(h-.4,f+2.3,d+2.8),n.add(U),r({light:U,max:16})}const rt=new Zs(.3,1),it=[];for(let U=0;U<6;U++){const Z=new Jt(rt,new De({color:15920356,flatShading:!0,transparent:!0,opacity:0,roughness:1,depthWrite:!1}));Z.userData.phase=U/6,n.add(Z),it.push(Z)}const at=new B(h+1,f+S+4.95,d-1.3);function Mt(U,Z){for(const Y of it){const F=(Z*.11+Y.userData.phase)%1;Y.position.set(at.x+F*1.6+Math.sin(F*7+Y.userData.phase*9)*.15,at.y+F*3.2,at.z-F*.5),Y.scale.setScalar(.5+F*1.9),Y.material.opacity=Math.sin(Math.min(1,F*1.15)*Math.PI)*.42}}function Bt(){for(const U of s){const Z=t.lamps.indexOf(U);Z>=0&&t.lamps.splice(Z,1)}Al(n)}return{update:Mt,dispose:Bt}}const Xt={gameName:"Vindima",token:"SOL",dayLength:240,startTimeOfDay:.5,startCoins:1,plotPrices:[0,.5,1,2,4,8,15,25],barrelPrices:[0,0,.3,.5,.8,1.2,1.8,2.5,3.5,5,7,10],barrelCapacityKg:30,launchSeason:"spring",seasons:{spring:{grape:"vernaccia"},summer:{grape:"sangiovese"},autumn:{grape:"canaiolo"},winter:{grape:"trebbiano"},drought:{grape:"aleatico"},desert:{grape:"moscatel"}},varieties:{vernaccia:{kind:"white",grape:"#cdd067",wine:"#e3c765",vinePrice:.1,growTime:60,yieldKg:[9,11],pricePerKg:.01},sangiovese:{kind:"red",grape:"#5a1d4f",wine:"#8a2040",vinePrice:.1,growTime:75,yieldKg:[10,12],pricePerKg:.0105},canaiolo:{kind:"red",grape:"#3b1f5c",wine:"#6e1838",vinePrice:.1,growTime:70,yieldKg:[9,11],pricePerKg:.0102},trebbiano:{kind:"white",grape:"#b9c08a",wine:"#d9cf8f",vinePrice:.1,growTime:100,yieldKg:[7,9],pricePerKg:.0105},aleatico:{kind:"red",grape:"#4a1838",wine:"#7a1a3a",vinePrice:.1,growTime:80,yieldKg:[5,7],pricePerKg:.016},moscatel:{kind:"white",grape:"#e2c468",wine:"#e8b94a",vinePrice:.1,growTime:90,yieldKg:[8,10],pricePerKg:.0122}},qualities:[{id:"common",stars:1,mult:1,weight:50},{id:"good",stars:2,mult:1.04,weight:32},{id:"great",stars:3,mult:1.1,weight:14},{id:"legendary",stars:4,mult:1.25,weight:4}],wine:{pressFactor:1,minDaysToBottle:1,maxDays:30,milestones:[[0,1],[1,1.1],[3,1.2],[7,1.5],[30,3]],litersPerKg:.7}};Xt.wine.curve=i=>{const t=Xt.wine.milestones;for(let e=1;e<t.length;e++)if(i<=t[e][0]){const[n,s]=t[e-1],[r,o]=t[e];return s+(o-s)*(i-n)/(r-n)}return t[t.length-1][1]};const Sh=Object.keys(Xt.seasons),wh=i=>{var t;return((t=Xt.seasons[i])==null?void 0:t.grape)??Xt.seasons[Xt.launchSeason].grape},Kv=i=>Sh.find(t=>Xt.seasons[t].grape===i)??Xt.launchSeason,Eh="vindima-save-v2",tl=new Set,It={s:null},Th={reveal:"gold",bottle:"bordeaux",sound:"file",tod:"auto"};function la(i){return tl.add(i),()=>tl.delete(i)}function me(i,t={}){for(const e of tl)e(i,t)}const Mi=i=>Math.round(i*1e4)/1e4;function Ah(){return{v:2,coins:Xt.startCoins,clock:Xt.startTimeOfDay*Xt.dayLength,savedAt:Date.now(),speed:1,lang:null,muted:!1,started:!1,wallet:null,season:Xt.launchSeason,dev:{...Th},plots:Xt.plotPrices.map((i,t)=>({owned:t===0,variety:null,startedAt:0,duration:1})),barrels:Xt.barrelPrices.map((i,t)=>({owned:t<2,wine:null})),grapes:[],bottles:[],nextId:1,stats:{harvests:0,bottled:0,earned:0}}}function Jv(){let i=null;try{const e=localStorage.getItem(Eh);e&&(i=JSON.parse(e))}catch{}if(!(i&&i.v===2&&Array.isArray(i.plots)&&Array.isArray(i.barrels)&&Array.isArray(i.grapes)&&Array.isArray(i.bottles)&&i.plots.length===Xt.plotPrices.length&&i.barrels.length===Xt.barrelPrices.length))i=Ah();else{const e=Math.max(0,(Date.now()-(i.savedAt||Date.now()))/1e3);i.clock+=Math.min(e,30*86400),i.speed=1,Xt.seasons[i.season]||(i.season=Xt.launchSeason),i.dev={...Th,...i.dev||{}}}return It.s=i,i}function _e(){if(It.s){It.s.savedAt=Date.now();try{localStorage.setItem(Eh,JSON.stringify(It.s))}catch{}}}function Qv(){const{lang:i,muted:t,season:e,dev:n}=It.s||{};It.s=Ah(),Object.assign(It.s,{lang:i,muted:t,started:!0}),e&&(It.s.season=e),n&&(It.s.dev=n),_e(),me("reset")}function t_(i){It.s.clock+=i*It.s.speed}function su(i){It.s.speed=i,me("speed",{speed:i})}const ru=()=>Math.floor(It.s.clock/Xt.dayLength)+1,Ch=()=>It.s.clock/Xt.dayLength%1,Qr=i=>Xt.qualities.find(t=>t.id===i)||Xt.qualities[0],Rh=()=>It.s.plots.filter(i=>i.owned).length,Ph=()=>It.s.barrels.filter(i=>i.owned).length,$r=()=>Xt.plotPrices[Rh()]??null,qr=()=>Xt.barrelPrices[Ph()]??null,$i=()=>wh(It.s.season),e_=()=>Xt.varieties[$i()].vinePrice;function qs(i){const t=It.s.plots[i];return!t.owned||!t.variety?-1:Math.min(1,Math.max(0,(It.s.clock-t.startedAt)/t.duration))}function au(i){const t=It.s.plots[i];return Math.max(0,t.duration-(It.s.clock-t.startedAt))}const Ns=i=>qs(i)>=1;function Ki(i,t=i.kg){return Mi(t*Xt.varieties[i.variety].pricePerKg*Qr(i.quality).mult)}const zs=i=>(It.s.clock-i.wine.startedAt)/Xt.dayLength,Vi=i=>Xt.wine.curve(Math.min(Math.max(i,0),Xt.wine.maxDays)),Lh=i=>Mi(i.wine.base*Vi(zs(i))),ou=()=>It.s.grapes.reduce((i,t)=>i+t.kg,0),lu=()=>It.s.bottles.reduce((i,t)=>i+t.bottles,0),Xe=i=>({ok:!1,reason:i});function Cl(i){return It.s.coins+1e-9<i?!1:(It.s.coins=Mi(It.s.coins-i),i>0&&me("coins",{delta:-i}),!0)}function ca(i){It.s.coins=Mi(It.s.coins+i),It.s.stats.earned=Mi(It.s.stats.earned+i),me("coins",{delta:i})}function cu(i){const t=It.s.plots[i];if(!t||t.owned)return Xe("owned");const e=$r();return Cl(e)?(t.owned=!0,me("plot",{i,kind:"bought"}),_e(),{ok:!0,price:e}):Xe("funds")}function n_(i){const t=It.s.plots[i],e=$i(),n=Xt.varieties[e];return!(t!=null&&t.owned)||t.variety||!n?Xe("invalid"):Cl(n.vinePrice)?(Object.assign(t,{variety:e,startedAt:It.s.clock,duration:n.growTime}),me("plot",{i,kind:"planted",variety:e}),_e(),{ok:!0,variety:e}):Xe("funds")}function i_(i){const t=It.s.plots[i];if(!(t!=null&&t.owned)||!t.variety)return Xe("invalid");const e=t.variety;return t.variety=null,me("plot",{i,kind:"uprooted",variety:e}),_e(),{ok:!0}}function s_(){const i=Xt.qualities.reduce((e,n)=>e+n.weight,0);let t=Math.random()*i;for(const e of Xt.qualities)if(t-=e.weight,t<=0)return e;return Xt.qualities[0]}function r_(i){const t=It.s.plots[i];if(!(t!=null&&t.owned)||!t.variety||!Ns(i))return Xe("notripe");const e=t.variety,n=Xt.varieties[e],s=s_(),r=Math.round(n.yieldKg[0]+Math.random()*(n.yieldKg[1]-n.yieldKg[0])),o=It.s.grapes.find(a=>a.variety===e&&a.quality===s.id);return o?o.kg+=r:It.s.grapes.push({id:It.s.nextId++,variety:e,quality:s.id,kg:r}),t.variety=null,It.s.stats.harvests++,me("plot",{i,kind:"harvested",kg:r,quality:s.id,variety:e}),me("inventory"),_e(),{ok:!0,kg:r,quality:s.id,variety:e}}function a_(i){const t=It.s.grapes.findIndex(n=>n.id===i);if(t<0)return Xe("invalid");const e=Ki(It.s.grapes[t]);return It.s.grapes.splice(t,1),ca(e),me("sold",{value:e,kind:"grapes"}),me("inventory"),_e(),{ok:!0,value:e}}function uu(i){const t=It.s.barrels[i];if(!t||t.owned)return Xe("owned");const e=qr();return Cl(e)?(t.owned=!0,me("barrel",{i,kind:"bought"}),_e(),{ok:!0,price:e}):Xe("funds")}function o_(i,t){const e=It.s.barrels[i],n=It.s.grapes.findIndex(o=>o.id===t);if(!(e!=null&&e.owned)||e.wine||n<0)return Xe("invalid");const s=It.s.grapes[n],r=Math.min(s.kg,Xt.barrelCapacityKg);return e.wine={variety:s.variety,quality:s.quality,kg:r,base:Mi(Ki(s,r)*Xt.wine.pressFactor),startedAt:It.s.clock},s.kg-=r,s.kg<=0&&It.s.grapes.splice(n,1),me("barrel",{i,kind:"filled",variety:e.wine.variety}),me("inventory"),_e(),{ok:!0,kg:r}}function l_(i){const t=It.s.barrels[i];if(!(t!=null&&t.owned)||!t.wine)return Xe("invalid");const e=zs(t);if(e<Xt.wine.minDaysToBottle)return Xe("tooyoung");const n={id:It.s.nextId++,variety:t.wine.variety,quality:t.wine.quality,days:e,value:Lh(t),bottles:Math.max(1,Math.round(t.wine.kg*Xt.wine.litersPerKg/.75))};return It.s.bottles.push(n),t.wine=null,It.s.stats.bottled+=n.bottles,me("barrel",{i,kind:"bottled",lot:n}),me("inventory"),_e(),{ok:!0,lot:n}}function Dh(i){const t=It.s.bottles.findIndex(n=>n.id===i);if(t<0)return Xe("invalid");const e=It.s.bottles[t].value;return It.s.bottles.splice(t,1),ca(e),me("sold",{value:e,kind:"wine"}),me("inventory"),_e(),{ok:!0,value:e}}function c_(){let i=0;for(const t of It.s.grapes)i+=Ki(t);for(const t of It.s.bottles)i+=t.value;return i=Mi(i),i?(It.s.grapes=[],It.s.bottles=[],ca(i),me("sold",{value:i,kind:"all"}),me("inventory"),_e(),{ok:!0,value:i}):Xe("empty")}function u_(i){!Xt.seasons[i]||It.s.season===i||(It.s.season=i,me("season",{id:i}),_e())}function h_(i,t){It.s.dev[i]=t,me("dev",{key:i,value:t}),_e()}function f_(i){ca(i),_e()}function d_(i){It.s.clock+=i*Xt.dayLength,me("time"),_e()}function p_(){for(const i of It.s.plots)i.owned&&i.variety&&(i.startedAt=It.s.clock-i.duration);me("time"),_e()}const el=4,Ih=6,Rs=el*Ih,Dr=3,Ir=2,Ps=i=>-1.95+i*1.3,m_=i=>-2.05+i*.82;function hu(i,t,e=1){const n=new _n({color:new Ot(2.4*e,1.7*e,.6*e),transparent:!0,opacity:.9,depthWrite:!1}),s=new an,r=.09;for(const[o,a,l,c]of[[i,r,0,t/2],[i,r,0,-t/2],[r,t,i/2,0],[r,t,-i/2,0]]){const u=new Jt(new ln(o+(a===r?r:0),.05,a),n);u.position.set(l,0,c),s.add(u)}return s.visible=!1,s.userData.mat=n,s}function g_(i){const{scene:t}=i,e=Hn(31337),n=Un.length,s=[],r=[];Un.forEach((F,j)=>{const ot=new le(400+j);ot.box(Ne.w,.1,Ne.d,"#684730",0,.05,0,{jitter:.04}),ot.box(Ne.w+.24,.18,.14,"#b7a487",0,.09,Ne.d/2+.05,{jitter:.08}),ot.box(Ne.w+.24,.18,.14,"#b7a487",0,.09,-5.4/2-.05,{jitter:.08}),ot.box(.14,.18,Ne.d,"#ac9a7e",Ne.w/2+.05,.09,0,{jitter:.08}),ot.box(.14,.18,Ne.d,"#ac9a7e",-5.6/2-.05,.09,0,{jitter:.08});for(let pt=0;pt<el;pt++){for(let At=0;At<7;At++)ot.box(.74,.13,.66,At%2?"#7d5738":"#75502f",-2.31+At*.77,.12,Ps(pt),{jitter:.1});for(const At of[-2.6,0,2.6])ot.box(.09,1.35,.09,"#8d6d4b",At,.72,Ps(pt),{r:[0,e()*.5,0]});ot.box(5.25,.022,.022,"#cfc9bb",0,.8,Ps(pt)),ot.box(5.25,.022,.022,"#cfc9bb",0,1.24,Ps(pt))}const ft=ot.mesh(En.flat);ft.position.set(F.x,0,F.z),t.add(ft),s.push(ft);const $=new le(500+j),G=Ne.w/2-.1,ct=Ne.d/2-.1;for(const[pt,At]of[[-1,-1],[1,-1],[-1,1],[1,1]])$.box(.1,.66,.1,"#8d6d4b",pt*G,.33,At*ct);for(const pt of[-1,1])$.box(G*2,.03,.03,"#efe4c9",0,.54,pt*ct);for(const pt of[-1,1])$.box(.03,.03,ct*2,"#efe4c9",pt*G,.54,0);const P=new le(600+j);P.box(.09,1.1,.09,"#7a5a3c",0,.55,0),P.box(1.15,.6,.07,"#b8905c",0,1.1,.04,{jitter:.06}),P.box(1,.05,.02,"#8a6a40",0,1.24,.09),P.cyl(.14,.14,.03,10,"#e8c56a",0,1.02,.09,{r:[Math.PI/2,0,0]}),$.merge(P,.4,0,.6,Math.PI/4);for(let pt=0;pt<22;pt++){const At=.22+e()*.26;$.cone(.13,At,4,pt%3?"#86a04a":"#a3ad52",(e()-.5)*G*1.9,At/2,(e()-.5)*ct*1.9,{r:[0,e()*3,0]})}const Tt=$.mesh(En.flat);Tt.position.set(F.x,0,F.z),t.add(Tt),r.push(Tt)});const o=new pe(.03,.065,.9,5).translate(0,.45,0),a=new Ga(o,new De({color:"#6b4a35",flatShading:!0,roughness:1}),n*Rs);a.castShadow=!0;const l=new Zs(.37,0).scale(1,.82,1);l.setAttribute("sway",new we(new Float32Array(l.attributes.position.count).fill(1),1));const c=new Ga(l,Tl({flatShading:!0,roughness:.85},.028),n*Rs*Dr);c.castShadow=!0,c.receiveShadow=!0;const u=new le(88),h=.078,f=[[-.07,0,-.07],[.07,0,-.07],[-.07,0,.07],[.07,0,.07],[0,-.11,-.07],[-.06,-.11,.05],[.06,-.11,.05],[-.04,-.21,0],[.04,-.21,.01],[0,-.3,0]];for(const[F,j,ot]of f)u.ball(h,0,"#ffffff",F,j,ot,{jitter:.16});const d=new Ga(u.geometry(),new De({vertexColors:!0,flatShading:!0,roughness:.32}),n*Rs*Ir);d.castShadow=!1,d.receiveShadow=!0;for(const F of[a,c,d])F.frustumCulled=!1,t.add(F);const g=[],v=[],p=[];Un.forEach(F=>{for(let j=0;j<el;j++)for(let ot=0;ot<Ih;ot++){const ft=F.x+m_(ot)+(e()-.5)*.12,$=F.z+Ps(j);g.push({x:ft,z:$,ry:e()*6.28,s:.85+e()*.3,lean:(e()-.5)*.3});for(let G=0;G<Dr;G++)v.push({x:ft+(G-1)*.27+(e()-.5)*.1,y:1+e()*.28+(G===1?.14:0),z:$+(e()-.5)*.2,ry:e()*6.28,rx:e()*.6,s:.85+e()*.4,tint:.82+e()*.36,delay:e()*.14});for(let G=0;G<Ir;G++)p.push({x:ft+(G?.22:-.2)+(e()-.5)*.08,y:.86+e()*.1,z:$+.25+(e()-.5)*.06,ry:e()*6.28,s:.95+e()*.35})}});const m=new Ot("#b9da62"),M=new Ot("#4f8539"),w=new Ot("#a8cc62"),y=new Ot("#8a6a3a");let W=1;const C=new Float32Array(n),I=new Array(n).fill(null),S={};for(const[F,j]of Object.entries(Xt.varieties))S[F]=new Ot(j.grape);const x=new Te,_=new Ot,T=new Float32Array(n),V=new Float32Array(n).fill(-2),H=new Array(n).fill(!0);function tt(F){let j=qs(F);const ot=It.s.plots[F],ft=j<0&&C[F]>0;ft&&(j=1);const $=j<0,G=ft?be(0,.7,C[F]):1,ct=ft?1-be(.45,1,C[F]):0,P=T[F],Tt=P>0?1+Math.sin(P*24)*.2*P:1,pt=be(0,.45,j),At=S[ft?I[F]:ot.variety]||w;for(let wt=0;wt<Rs;wt++){const kt=F*Rs+wt,Lt=g[kt],R=$?0:Lt.s*G;x.position.set(Lt.x,.14,Lt.z),x.rotation.set(Lt.lean,Lt.ry,0),x.scale.set(R,R*Be(.2,1,be(0,.3,j)),R),x.updateMatrix(),a.setMatrixAt(kt,x.matrix);for(let b=0;b<Dr;b++){const et=kt*Dr+b,lt=v[et],_t=$?0:be(.04+lt.delay,.6+lt.delay,j)*lt.s*Tt*W*G;x.position.set(lt.x,Be(.4,lt.y,pt),lt.z),x.rotation.set(lt.rx,lt.ry,0),x.scale.setScalar(_t),x.updateMatrix(),c.setMatrixAt(et,x.matrix),_.copy(m).lerp(M,be(.15,.75,j)).lerp(y,ct).multiplyScalar(lt.tint),c.setColorAt(et,_)}for(let b=0;b<Ir;b++){const et=kt*Ir+b,lt=p[et],_t=$||ft?0:be(.6,.97,j)*lt.s;x.position.set(lt.x,lt.y,lt.z),x.rotation.set(0,lt.ry,0),x.scale.setScalar(_t),x.updateMatrix(),d.setMatrixAt(et,x.matrix),_.copy(w).lerp(At,be(.76,.98,j)),d.setColorAt(et,_)}}a.instanceMatrix.needsUpdate=!0,c.instanceMatrix.needsUpdate=!0,d.instanceMatrix.needsUpdate=!0,c.instanceColor.needsUpdate=!0,d.instanceColor.needsUpdate=!0}function N(){for(let F=0;F<n;F++){const j=It.s.plots[F].owned;s[F].visible=j,r[F].visible=!j,H[F]=!0}}const D=new _n({visible:!1}),X=new ln(Ne.w+.3,1.9,Ne.d+.3);Un.forEach((F,j)=>{const ot=new Jt(X,D);ot.position.set(F.x,.95,F.z),ot.userData={type:"plot",index:j,view:"vineyard"},t.add(ot),i.pickables.push(ot)});const z=hu(Ne.w+.5,Ne.d+.5,.7),rt=hu(Ne.w+.5,Ne.d+.5,1.15);t.add(z,rt);let it=-1,at=-1;function Mt(F){it=F,z.visible=F>=0&&F!==at,F>=0&&z.position.set(Un[F].x,.24,Un[F].z)}function Bt(F){at=F,rt.visible=F>=0,F>=0&&rt.position.set(Un[F].x,.24,Un[F].z),z.visible=it>=0&&it!==at}la((F,j)=>{F==="plot"?(H[j.i]=!0,s[j.i].visible=It.s.plots[j.i].owned,r[j.i].visible=!It.s.plots[j.i].owned,(j.kind==="harvested"||j.kind==="planted")&&(T[j.i]=1),j.kind==="harvested"||j.kind==="uprooted"?(C[j.i]=1,I[j.i]=j.variety):j.kind==="planted"&&(C[j.i]=0)):F==="reset"?(C.fill(0),N()):F==="time"&&H.fill(!0)}),N();function U(F,j){for(let ot=0;ot<n;ot++){const ft=qs(ot);T[ot]>0&&(T[ot]=Math.max(0,T[ot]-F*1.5),H[ot]=!0),C[ot]>0&&(C[ot]=Math.max(0,C[ot]-F*.42),H[ot]=!0),(H[ot]||Math.abs(ft-V[ot])>.004)&&(tt(ot),V[ot]=ft,H[ot]=!1)}rt.userData.mat.opacity=.7+.3*Math.sin(j*4)}function Z(F){m.set(F.leaf.young),M.set(F.leaf.mature),W=F.leaf.scale,H.fill(!0)}const Y=Un.map(F=>new B(F.x,2,F.z));return{update:U,setHover:Mt,setSelected:Bt,anchors:Y,setClimate:Z}}function fu(i,t,e,n,s,r){const o=(i-(t+1)*e)/t,a=new oh;a.moveTo(0,0),a.lineTo(0,n),a.lineTo(i,n),a.lineTo(i,0);for(let l=t-1;l>=0;l--){const c=e+l*(e+o),u=c+o;a.lineTo(u,0),a.lineTo(u,s),a.absellipse((c+u)/2,s,o/2,r,0,Math.PI,!1,0),a.lineTo(c,0)}return a.lineTo(0,0),{shape:a,aw:o}}function v_(i,t){const{scene:e}=i,{x0:n,x1:s,z0:r,z1:o,floor:a,ceil:l}=Ve,c=l-a,u=Hn(606),h=new le(606),f=new le(607),d=Iv({vertexColors:!0,flatShading:!0,roughness:.92},.26),g=["#a08a6e","#93806a","#ab9477","#8b7862","#9d8973"],v="#b3a084",p="#6a4a30",m="#7d5a3a",M="#34302d";f.box(Rt.X1-(n-1)-.06,1.7,Rt.Z1-(r-1)-.06,"#5d4230",(n-1+Rt.X1)/2-.03,l+.87,(r-1+Rt.Z1)/2-.03,{jitter:.03}),f.box(Rt.X1-n+1,c+.6,.6,"#3a2a20",(n+Rt.X1)/2-.5,a+c/2,r-.85,{jitter:.03}),f.box(.6,c+.6,Rt.Z1-r+.4,"#3a2a20",n-.85,a+c/2,(r+Rt.Z1)/2-.2,{jitter:.03}),h.box(Rt.X1-n-.04,.5,Rt.Z1-r-.04,"#463c35",(n+Rt.X1)/2,a-.5,(r+Rt.Z1)/2,{jitter:.03});const w=1.5;for(let L=0;L<7;L++){const q=L%2*w*.5;for(let nt=n-q;nt<Rt.X1;nt+=w){const dt=Math.max(nt,n),yt=Math.min(nt+w,Rt.X1);yt-dt<.1||h.box(yt-dt-.03,.97,.5,g[Math.floor(u()*5)],(dt+yt)/2,a+L+.5,r-.25+(u()-.5)*.06,{jitter:.06})}for(let nt=r-q;nt<Rt.Z1;nt+=w){const dt=Math.max(nt,r),yt=Math.min(nt+w,Rt.Z1);yt-dt<.1||h.box(.5,.97,yt-dt-.03,g[Math.floor(u()*5)],n-.25+(u()-.5)*.06,a+L+.5,(dt+yt)/2,{jitter:.06})}}const y=21,W=5,C=(Rt.X1-n)/y,I=(Rt.Z1-r)/W;for(let L=0;L<y;L++)for(let q=0;q<W;q++)h.box(C-.05,.3,I-.05,["#80756a","#74695d","#8a7e70","#6e6459"][Math.floor(u()*4)],n+C*(L+.5),a-.15+(u()-.5)*.03,r+I*(q+.5),{jitter:.05});const S=4.4,x=1.95,_=1,T=5,V=Rt.X1-n,H=fu(V,T,_,c,S,x);f.add(new Kr(H.shape,{depth:1,bevelEnabled:!1,curveSegments:14}),v,{p:[n,a,o],jitter:.025});for(let L=0;L<=T;L++){const q=n+L*(_+H.aw)+_/2;f.box(_+.26,.45,1.16,"#a3917a",q,a+.22,o+.5,{jitter:.05}),f.box(_+.22,.26,1.14,"#c4b297",q,a+S-.13,o+.5,{jitter:.05});for(let nt=1;nt<4;nt++)f.box(_+.02,.04,1.02,"#93816b",q,a+.45+nt*.95,o+.5,{jitter:.02});L<T&&f.box(.5,.75,1.12,"#cbb99c",q+_/2+H.aw/2,a+S+x+.1,o+.5,{jitter:.04}),h.box(.7,.5,o-r,"#8f7c66",q,l-.25,(r+o)/2,{jitter:.05})}const tt=fu(o-r,1,.8,c,S,x);f.add(new Kr(tt.shape,{depth:1,bevelEnabled:!1,curveSegments:14}),v,{p:[Rt.X1,a,r],r:[0,-Math.PI/2,0],jitter:.025}),f.box(1.14,.26,.8+.22,"#c4b297",Rt.X1-.5,a+S-.13,r+.4,{jitter:.05}),f.box(1.16,.45,.8+.26,"#a3917a",Rt.X1-.5,a+.22,r+.4,{jitter:.05}),f.box(1.12,.75,.5,"#cbb99c",Rt.X1-.5,a+S+x+.1,(r+o)/2,{jitter:.04});for(let L=0;L<15;L++){const q=.4+L*.44;h.box(1.35,q,.37,L%2?"#978872":"#8c7d68",n+.72,a+q/2,14.55-L*.36,{jitter:.05})}const N=je.z+.58,D=je.z-.58;for(let L=0;L<3;L++){const q=Xr[L*2],nt=Xr[L*2+1],dt=(q+nt)/2,yt=nt-q+2.5;for(const Pt of[q-1.25,dt,nt+1.25]){for(const k of[N,D])h.box(.17,4,.17,p,Pt,a+2,k,{jitter:.08});h.box(.12,.12,1.3,p,Pt,a+2.04,je.z),h.box(.12,.12,1.3,p,Pt,a+3.96,je.z)}for(const Pt of[N,D])h.box(yt,.17,.17,m,dt,a+2.06,Pt,{jitter:.06}),h.box(yt,.14,.14,m,dt,a+3.96,Pt,{jitter:.06})}for(const L of Xr)for(const q of[N,D]){h.box(1.5,.3,.18,m,L,a+.15,q,{jitter:.08});for(const nt of[-1,1])h.box(.34,.2,.18,p,L+nt*.62,a+.38,q,{r:[0,0,nt*.6]}),h.box(.34,.2,.18,p,L+nt*.62,a+2.24,q,{r:[0,0,nt*.6]})}const X=16.4,z=1.85;{const L=vi(77,z,3,"#7d4f2c");for(const q of L.parts)q.rotateX(Math.PI/2);h.merge(L,X,a+.45+z,r+1.85);for(const q of[r+.9,r+2.8]){h.box(3.1,.55,.36,p,X,a+.27,q,{jitter:.08});for(const nt of[-1,1])h.box(.7,.5,.36,m,X+nt*1.3,a+.75,q,{r:[0,0,nt*.7]})}h.cyl(.42,.42,.05,12,"#d9b86a",X,a+.45+z+.35,r+3.31,{r:[Math.PI/2,0,0],jitter:.04}),h.cyl(.3,.3,.06,10,"#7a1f2f",X,a+.45+z+.35,r+3.33,{r:[Math.PI/2,0,0],jitter:.04}),h.cyl(.05,.05,.3,6,"#b9934e",X,a+.45+.5,r+3.4,{r:[Math.PI/2,0,0]})}const rt=19.4,it=13;h.cyl(1.15,1.25,.4,10,"#8f806c",rt,a+.2,it,{jitter:.07}),h.add(new pe(.85,.85,1.15,14,1,!0),"#a87c4a",{p:[rt,a+.97,it],jitter:.16});for(const L of[.6,1.35])h.add(new pe(.88,.88,.08,14,1,!0),M,{p:[rt,a+L,it]});h.cyl(.8,.8,.1,12,"#5a1d4f",rt,a+1.3,it,{jitter:.2}),h.cyl(.78,.78,.12,12,"#8a6a48",rt,a+1.5,it,{jitter:.08}),h.cyl(.07,.07,2.2,6,M,rt,a+2.5,it);for(const L of[-1,1])h.box(.2,3.3,.2,p,rt+L*1.15,a+1.65,it,{jitter:.08});h.box(2.7,.26,.28,m,rt,a+3.35,it,{jitter:.08}),h.box(1.9,.07,.07,M,rt,a+2.9,it,{r:[0,.7,0]}),h.box(.5,.08,.18,"#8a6a48",rt+.2,a+.45,it+1.2,{r:[.3,0,0]}),h.cyl(.26,.2,.34,8,"#7a5a3c",rt+.2,a+.17,it+1.55),h.cyl(.22,.22,.03,8,"#7b1e3a",rt+.2,a+.3,it+1.55),Qe(h,17,a,14,.4,"red",u),Qe(h,17.1,a+.38,13.95,.1,"red",u),Qe(h,14.5,a,13.3,-.3,"white",u),Qe(h,20.2,a,10.9,.2,null,u);{const L=vi(91);h.merge(L,20.1,a+.5,9.7,.3,.55),h.merge(L,19.2,a+.5,9.75,1.1,.55)}const at=-5.6,Mt=12.6;h.box(1.9,.1,1.05,m,at,a+1,Mt,{jitter:.07});for(const[L,q]of[[-.8,-.4],[.8,-.4],[-.8,.4],[.8,.4]])h.box(.1,.95,.1,p,at+L,a+.48,Mt+q);$s(h,at-.5,a+1.05,Mt-.1),$s(h,at-.25,a+1.05,Mt+.2,"#3a2a22"),h.cyl(.07,.04,.16,6,"#d8d2c2",at+.3,a+1.13,Mt+.15),h.cyl(.22,.22,.12,9,"#e3c36a",at+.55,a+1.11,Mt-.2,{jitter:.06}),h.cyl(.05,.05,.2,6,"#efe6d2",at,a+1.15,Mt-.25),h.box(.5,.06,.4,m,at,a+.55,Mt+.95);for(const L of[-.2,.2])h.box(.06,.52,.34,p,at+L,a+.27,Mt+.95);for(let L=0;L<5;L++){h.box(2.5,.06,.5,p,-6,a+.4+L*.6,r+.3);for(let q=0;q<9;q++)h.cyl(.085,.085,.36,6,q%3?"#27402d":"#3a2a22",-7.05+q*.26,a+.55+L*.6,r+.34,{r:[Math.PI/2,0,0],jitter:.1})}for(const L of[-1.25,1.25])h.box(.08,3.1,.5,p,-6+L,a+1.55,r+.3);const Bt=[-1.5,4.5,10.5],U=i.isMobile?[-1.5,10.5]:Bt,Z=a+4.9;for(const L of Bt)h.box(.1,.1,.5,M,L,Z-.3,r+.25),h.cyl(.14,.07,.34,6,M,L,Z-.12,r+.5);h.box(.03,1,.03,M,17.9,l-.5,13.2),h.box(.3,.06,.3,M,17.9,l-1.02,13.2),h.box(.3,.06,.3,M,17.9,l-1.46,13.2),e.add(h.mesh(d)),e.add(f.mesh(En.flat));const Y=new _n({color:new Ot(5,2,.45)}),F=new ti(.15,.5,6).translate(0,.25,0),j=[],ot=[],ft=(L,q,nt,dt=1)=>{const yt=new Jt(F,Y);yt.position.set(L,q,nt),yt.userData={sc:dt,ph:u()*10},e.add(yt),j.push(yt)},$=(L,q,nt,dt,yt=17)=>{const Pt=new wl("#ff9a3d",dt,yt,1.7);Pt.position.set(L,q,nt),Pt.userData={base:dt,ph:u()*10},e.add(Pt),ot.push(Pt)};for(const L of Bt)ft(L,Z+.02,r+.5);for(const L of U)$(L,Z+.5,r+1.6,34);ft(17.9,l-1.4,13.2,.6),$(17.9,l-1.5,13.2,30),ft(at,a+1.25,Mt-.25,.35),i.isMobile||$(at,a+1.9,Mt,12,9);const G=_h({count:130,box:[n,a+.6,r+.5,s,l-.6,o+.6],color:[1.7,1.15,.6],size:3.4,drift:.3,blink:0,seed:5,pixelRatio:i.renderer.getPixelRatio()});e.add(G);const ct=[1,2,3].map(L=>{const q=vi(900+L,je.r,je.len);q.cyl(.05,.05,.22,6,"#b9934e",0,je.len/2+.05,.45);const nt=q.geometry();return nt.rotateX(Math.PI/2),nt.computeVertexNormals(),nt}),P=new pe(.2,.2,.05,10).rotateX(Math.PI/2),Tt=new ln(.44,.3,.03),pt=new De({color:"#efe3c6",roughness:.9}),At=new _n({visible:!1}),wt=new ln(2.1,1.85,2.3),kt=Ts.map((L,q)=>{const nt=new an;nt.position.set(L.x,L.y,L.z);const dt=new Jt(ct[q%3],d);dt.castShadow=!0,dt.receiveShadow=!0;const yt=new De({color:"#7b1e3a",roughness:.4,emissive:"#000000"}),Pt=new Jt(P,yt);Pt.position.set(0,.28,je.len/2-.05);const k=new Jt(Tt,pt);k.position.set(0,-.12,je.len/2-.045);const Et=new an;Et.add(Pt,k),nt.add(dt,Et),e.add(nt);const st=new Jt(wt,At);return st.position.set(L.x,L.y,L.z+.2),st.userData={type:"barrel",index:q,view:"cellar"},e.add(st),i.pickables.push(st),{g:nt,mesh:dt,label:Et,sealMat:yt,pulse:0}});function Lt(L){const q=It.s.barrels[L],nt=kt[L];nt.mesh.visible=q.owned,nt.label.visible=!!q.wine,q.wine&&nt.sealMat.color.set(Xt.varieties[q.wine.variety].wine)}const R=()=>kt.forEach((L,q)=>Lt(q));la((L,q)=>{L==="barrel"?(Lt(q.i),kt[q.i].pulse=1):L==="reset"&&R()}),R();const b=new bl(.88,.035,6,28),et=L=>{const q=new Jt(b,new _n({color:new Ot(2.6*L,1.8*L,.6*L),transparent:!0,opacity:.95,depthWrite:!1}));return q.visible=!1,e.add(q),q},lt=et(.7),_t=et(1.2);let mt=-1,bt=-1;const vt=(L,q)=>L.position.set(Ts[q].x,Ts[q].y,Ts[q].z+je.len/2+.04);function gt(L){mt=L,lt.visible=L>=0&&L!==bt,L>=0&&vt(lt,L)}function Dt(L){bt=L,_t.visible=L>=0,L>=0&&vt(_t,L),lt.visible=mt>=0&&mt!==bt}function E(L,q,nt){for(const dt of j){const yt=dt.userData,Pt=Math.sin(q*13+yt.ph)*.5+Math.sin(q*23.7+yt.ph*2)*.3+Math.sin(q*7.1+yt.ph)*.2;dt.scale.set(yt.sc*(1+Pt*.12),yt.sc*(1+Pt*.3),yt.sc*(1+Pt*.12)),dt.rotation.z=Pt*.12}for(const dt of ot){const yt=dt.userData,Pt=Math.sin(q*11+yt.ph)*.5+Math.sin(q*19.3+yt.ph*1.7)*.3+Math.sin(q*5.3+yt.ph)*.2;dt.intensity=yt.base*(.86+Pt*.14)}G.material.uniforms.uTime.value=q,G.material.uniforms.uAlpha.value=.3+.6*nt;for(const dt of kt)dt.pulse>0&&(dt.pulse=Math.max(0,dt.pulse-L*2.2),dt.g.scale.setScalar(1+Math.sin(dt.pulse*Math.PI)*.09));_t.material.opacity=.7+.3*Math.sin(q*4)}const O=Ts.map(L=>new B(L.x,L.y+.15,L.z+je.len/2+.1));return{update:E,setHover:gt,setSelected:Dt,anchors:O}}function Ja(i,t,e,n,s,r,o=7){const a=Math.hypot(e,n),l=Math.atan2(n,e),c=t/o;for(let u=0;u<o;u++){const h=-t/2+c*(u+.5),f=u%2?r:s;i.box(c+.005,.045,a,f,h,-n/2,e/2,{r:[l,0,0],jitter:.04}),i.box(c+.005,.2,.035,f,h,-n-.1,e,{jitter:.04})}}function Uh(i,t,e){const n=new an;i.scene.add(n);const s=[],r=$=>{t.lamps.push($),s.push($)},o=Hn(777),a=new le(777),l=new le(778,{sway:!0,tint:e.vegTint}),c=new le(779),u=new le(780),h=new le(781),{x:f,z:d,w:g,d:v}=Bn,p=.12,m="#9a6f43",M="#7a5a3c",w="#c2b196",y="#2f2b2a",W=["#dccaa9","#cfbc98","#c6b18d","#e2d3b6","#d3c1a0"];for(let $=f-g/2;$<f+g/2-.01;$+=1)for(let G=d-v/2;G<d+v/2-.01;G+=1){const ct=Math.abs($+.5-f)/(g/2),P=Math.abs(G+.5-d)/(v/2);ct**4+P**4>1.02||a.box(.95,.14,.95,W[Math.floor(o()*W.length)],$+.5,.05+o()*.02,G+.5,{jitter:.05})}const C=13.2,I=-14.35,S=7.2,x=3.3,_=2.5,T=I+_/2;a.box(S,x,_,"#e6ab7e",C,x/2,I,{jitter:.03}),a.box(S+.1,.5,_+.1,"#cbb089",C,.25,I,{jitter:.05}),Us(a,S+.7,1.1,_+.9,C,x,I,"#b85a3c",9),a.box(S+.7,.1,_+.9,"#a5503a",C,x,I),a.box(1.25,1.85,.08,"#d9c4a0",C,.92,T+.01),a.box(.95,1.55,.1,"#5c3b26",C,.78,T+.04),a.add(new pe(.475,.475,.1,10),"#5c3b26",{p:[C,1.55,T+.04],r:[Math.PI/2,0,0]});for(const $ of[-2.3,2.3]){a.box(1.5,1.15,.07,"#d9c4a0",C+$,1.25,T+.01),c.box(1.3,.95,.05,"#ffffff",C+$,1.25,T+.04,{jitter:0}),a.box(1.3,.05,.06,"#5c3b26",C+$,1.25,T+.07),a.box(.05,.95,.06,"#5c3b26",C+$,1.25,T+.07),a.box(1.5,.2,.3,"#8a5a3c",C+$,.6,T+.16);for(let ct=0;ct<6;ct++)a.ball(.11,0,ct%2?"#d9392c":"#e86a5a",C+$-.6+ct*.24,.78,T+.18);const G=new le(50);Ja(G,1.8,.9,.4,"#a23143","#f3e7cf",6),a.merge(G,C+$,2.25,T+.02)}for(const $ of[-2.3,0,2.3])a.box(.7,.7,.06,"#d9c4a0",C+$,2.72,T+.01),c.box(.5,.52,.05,"#ffffff",C+$,2.72,T+.035,{jitter:0}),$!==0&&(a.box(.26,.52,.05,"#587259",C+$-.4,2.72,T+.04),a.box(.26,.52,.05,"#587259",C+$+.4,2.72,T+.04));a.box(.05,.05,.7,y,C+.95,2.35,T+.35),a.box(.6,.5,.05,"#5c3b26",C+.95,1.98,T+.62);for(const[$,G]of[[-.1,.1],[.1,.1],[0,.1],[-.05,-.02],[.05,-.02],[0,-.13]])a.ball(.07,0,"#8a3a7a",C+.95+$,1.98+G,T+.66);a.box(.5,.5,.5,"#cfae7e",C-2.4,x+.75,I-.3),a.box(.64,.1,.64,"#a5503a",C-2.4,x+1.05,I-.3);const V=10.1,H=-8.1,tt=Math.PI/4,N=new le(60),D=new le(61);N.box(3.4,.9,1.1,m,0,.45,0,{jitter:.07});for(let $=0;$<6;$++)N.box(.52,.8,.04,$%2?"#a87c4c":"#8f6740",-1.4+$*.56,.45,.57);N.box(3.7,.08,1.35,"#b8915e",0,.94,0,{jitter:.05});for(const[$,G]of[[-1.75,-.6],[1.75,-.6],[-1.75,.62],[1.75,.62]])N.box(.1,G<0?2.85:2.3,.1,M,$,G<0?1.42:1.15,G);const X=new le(62);Ja(X,4.1,2.1,.6,"#a23143","#f3e7cf",8),N.merge(X,0,2.88,-.75),Qe(N,-1.15,.98,0,.08,"red",o),Qe(N,-.2,.98,.02,-.05,"white",o),Qe(N,.75,.98,0,.06,"bottles",o);for(let $=0;$<4;$++)$s(N,1.25+$*.14,.98,.42-$%2*.12,$%2?"#27402d":"#3a2a22");N.cyl(.24,.24,.14,10,"#e3c36a",1.5,1.05,-.15,{jitter:.06}),N.box(3.3,.06,.32,M,0,1.75,-.58);for(let $=0;$<8;$++)$s(N,-1.4+$*.4,1.78,-.58,$%3?"#27402d":"#5a1f2c");N.box(1.5,.36,.05,"#5c3b26",0,2.05,1.38),N.box(1.3,.05,.02,"#e8c56a",0,2.16,1.41),N.box(1.3,.05,.02,"#e8c56a",0,1.94,1.41),N.box(.03,.3,.03,y,-1.55,2,1.2),D.box(.16,.22,.16,"#ffffff",-1.55,1.78,1.2,{jitter:0}),Ka(N,.5,0,-.95,0,{shirt:"#f0e6d2",apron:"#7a1f2f",hat:"#d9b86a"},e.outfit),Qe(N,-2.5,0,.9,.5,"red",o),Qe(N,-2.45,.38,.95,.2,"red",o),N.merge(vi(63),2.55,.5,.7,0,.55);for(let $=0;$<7;$++)N.ball(.1,0,"#5a1d4f",2.55+(o()-.5)*.5,1.02+o()*.08,.7+(o()-.5)*.5);a.merge(N,V,p,H,tt),c.merge(D,V,p,H,tt);const z=new le(70);z.box(2.4,.85,.95,"#8f6740",0,.43,0,{jitter:.07}),z.box(2.6,.07,1.15,"#b8915e",0,.89,0);for(const[$,G]of[[-1.2,-.5],[1.2,-.5],[-1.2,.5],[1.2,.5]])z.box(.09,G<0?2.5:2.05,.09,M,$,G<0?1.25:1.02,G);const rt=new le(71);Ja(rt,3,1.7,.5,"#4f7a55","#f3e7cf",6),z.merge(rt,0,2.52,-.6);for(const[$,G,ct]of[[-.8,0,.26],[-.25,.1,.2],[-.75,0,.2]])z.cyl(ct,ct,.14,10,"#e9c964",$,G===0&&ct===.2?1.14:1,G,{jitter:.06});for(let $=0;$<9;$++)z.ball(.09,0,$%2?"#d9442c":"#e98a2c",.45+$%3*.2,1+Math.floor($/3)*.05,-.15+Math.floor($/3)*.16);z.box(.5,.12,.22,"#c98f4c",.95,.99,.3,{r:[0,.4,0]}),Ka(z,-.2,0,-.85,0,{shirt:"#8aa0b8",apron:"#f0e6d2",hat:null},e.outfit),a.merge(z,16.2,p,-6.6,Math.PI/4+.35);const it=13.9,at=-10.3;a.add(new pe(1.5,1.62,.62,8,1,!0),w,{p:[it,p+.31,at],jitter:.07}),a.add(new Ml(1.28,1.6,8),"#d2c3a8",{p:[it,p+.62,at],r:[-Math.PI/2,0,Math.PI/8],jitter:.05}),a.add(new pe(1.3,1.3,.5,8,1,!0),"#a89a84",{p:[it,p+.37,at],jitter:.04}),h.cyl(1.3,1.3,.04,8,"#69b9cc",it,p+.48,at,{jitter:.03}),a.cyl(.2,.3,1.5,8,w,it,p+.75,at),a.cyl(.66,.3,.26,8,"#cdbda2",it,p+1.5,at),h.cyl(.58,.58,.03,8,"#7cc6d6",it,p+1.62,at,{jitter:.03}),a.ball(.16,1,w,it,p+1.85,at);{const $=new le(80);$.box(2.3,.12,1.25,m,0,.78,0,{jitter:.07});for(const ct of[-.62,.62])$.box(2.3,.3,.06,M,0,.98,ct);$.box(.06,.3,1.25,M,-1.15,.98,0);for(const ct of[-.74,.74])$.add(new pe(.58,.58,.1,12),"#6d5138",{p:[-.2,.58,ct],r:[Math.PI/2,0,0],jitter:.1}),$.add(new pe(.12,.12,.16,8),y,{p:[-.2,.58,ct],r:[Math.PI/2,0,0]}),$.box(1.5,.07,.07,M,1.85,.62,ct*.7,{r:[0,0,-.22]});const G=vi(81);$.merge(G,-.5,1.34,0,0,.55),$.merge(G,.5,1.34,.05,.9,.55),a.merge($,18,p,-9.4,-.9)}a.box(1.7,.13,.5,w,16.9,p+.5,-12.2,{r:[0,.2,0]});for(const $ of[-.6,.6])a.box(.2,.5,.42,"#b3a288",16.9+$,p+.25,-12.2-$*.2);a.box(.34,.16,.2,"#d98a3d",16.75,p+.65,-12.2),a.ball(.1,0,"#d98a3d",16.98,p+.68,-12.16),a.box(.2,.05,.05,"#c97a30",16.55,p+.6,-12.08);{const $=new le(85);$.box(1,1.3,.07,M,0,.7,0,{r:[-.2,0,0]}),$.box(.84,1.05,.03,"#2b2f2b",0,.74,.06,{r:[-.2,0,0],jitter:.02});for(let G=0;G<4;G++)$.box(.5+G%2*.14,.04,.02,"#e9e2cf",-.06,1.05-G*.2,.02+G*.04,{r:[-.2,0,0],jitter:0});a.merge($,7.6,p,-6.6,Math.PI/4)}Ka(a,12.2,p,-7.2,2.6,{shirt:"#4f7a8a",pants:"#5a4a3a",hat:null},e.outfit),a.cyl(.2,.15,.2,7,"#b8905c",12.55,p+.1,-7);for(const[$,G]of[[6.6,-13.3],[19,-5.6],[6.3,-5.7]])a.cyl(.5,.36,.7,8,"#b8653f",$,p+.35,G,{jitter:.07}),e.props==="desert"?Qo(l,$,p+.55,G,2.6,o):Mh(l,$,p+.55,G,.85,o);iu(a,c,8.4,p,-12.6,2.8),iu(a,c,18.6,p,-12.9,2.8);const Mt=[[6.7,-7.7],[18.9,-7.4]];for(const[$,G]of Mt)a.cyl(.05,.07,3.4,6,M,$,p+1.7,G);const Bt=new B,U=new B,Z=[[[Mt[0][0],p+3.35,Mt[0][1]],[C-1.2,x+.25,T+.3]],[[Mt[1][0],p+3.35,Mt[1][1]],[C+1.2,x+.25,T+.3]],[[Mt[0][0],p+3.35,Mt[0][1]],[Mt[1][0],p+3.35,Mt[1][1]]]];for(const[$,G]of Z){Bt.set(...$),U.set(...G);const ct=Math.round(Bt.distanceTo(U)/.62);for(let P=1;P<ct;P++){const Tt=P/ct;u.ball(.075,0,"#ffffff",Be(Bt.x,U.x,Tt),Be(Bt.y,U.y,Tt)-.75*4*Tt*(1-Tt),Be(Bt.z,U.z,Tt),{jitter:0})}}n.add(a.mesh(En.flat)),n.add(l.mesh(Tl({vertexColors:!0,flatShading:!0,roughness:.9},.02))),n.add(h.mesh(new De({vertexColors:!0,flatShading:!0,roughness:.1,metalness:.15}),{cast:!1}));const Y=gh("#ffc267");n.add(c.mesh(Y,{cast:!1,receive:!1})),r({mat:Y,max:3.4});const F=new De({color:14207400,emissive:new Ot("#ffb85a"),emissiveIntensity:0,roughness:.5});n.add(u.mesh(F,{cast:!1,receive:!1})),r({mat:F,max:4.5});const j=new wl("#ffb468",0,18,1.8);j.position.set(f,3.4,d+1.2),n.add(j),r({light:j,max:46});const ot=new Jt(new ln(4.6,3.2,2.8),new _n({visible:!1}));ot.position.set(V,1.6,H),ot.rotation.y=tt,ot.userData={type:"market"},n.add(ot),i.pickables.push(ot);function ft(){for(const G of s){const ct=t.lamps.indexOf(G);ct>=0&&t.lamps.splice(ct,1)}const $=i.pickables.indexOf(ot);$>=0&&i.pickables.splice($,1),Al(n)}return{anchor:new B(V,3.9,H),dispose:ft}}const Ur=480,Nr=new B(Rt.X0-4,-1,Rt.Z0-4),Fr=new B(Rt.X1-Rt.X0+8,17,Rt.Z1-Rt.Z0+8);function __(i){const t=Hn(4242),e=new Float32Array(Ur*3),n=new Float32Array(Ur);for(let h=0;h<Ur;h++)e[h*3]=Nr.x+t()*Fr.x,e[h*3+1]=Nr.y+t()*Fr.y,e[h*3+2]=Nr.z+t()*Fr.z,n[h]=t();const s=new xe;s.setAttribute("position",new we(e,3)),s.setAttribute("aPhase",new we(n,1));const r=new Se({uniforms:{uTime:{value:0},uVel:{value:new B},uSway:{value:.5},uSize:{value:5},uColor:{value:new Ot("#ffffff")},uAlpha:{value:0},uMin:{value:Nr},uBox:{value:Fr}},vertexShader:`
      attribute float aPhase;
      uniform float uTime, uSway, uSize;
      uniform vec3 uVel, uMin, uBox;
      varying float vA;
      void main() {
        vec3 p = position + uVel * uTime * (0.7 + 0.6 * aPhase);
        p.x += sin(uTime * 1.3 + aPhase * 40.0) * uSway;
        p.z += cos(uTime * 1.1 + aPhase * 31.0) * uSway;
        p = uMin + mod(p - uMin, uBox);
        // some suavemente perto do teto e do chão da caixa
        float h = (p.y - uMin.y) / uBox.y;
        vA = smoothstep(0.0, 0.08, h) * smoothstep(1.0, 0.85, h) * (0.55 + 0.45 * fract(aPhase * 7.3));
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        gl_PointSize = uSize * (0.6 + 0.8 * fract(aPhase * 3.7));
      }
    `,fragmentShader:`
      uniform vec3 uColor;
      uniform float uAlpha;
      varying float vA;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        float a = smoothstep(0.5, 0.2, d) * vA * uAlpha;
        if (a < 0.01) discard;
        gl_FragColor = vec4(uColor, a);
      }
    `,transparent:!0,depthWrite:!1}),o=new eh(s,r);o.frustumCulled=!1,o.visible=!1,i.scene.add(o);const a=i.renderer.getPixelRatio();let l=0;function c(h){const f=h.weather;if(!f){o.visible=!1,l=0;return}s.setDrawRange(0,Math.min(Ur,i.isMobile?Math.round(f.count*.6):f.count)),r.uniforms.uVel.value.set(f.vel[0],f.vel[1],f.vel[2]),r.uniforms.uSway.value=f.sway,r.uniforms.uSize.value=f.size*a,r.uniforms.uColor.value.set(f.color),l=f.alpha,o.visible=!0}function u(h,f,d){o.visible&&(r.uniforms.uTime.value=h,r.uniforms.uAlpha.value=l*(1-f)*(1-.45*d))}return{setClimate:c,update:u}}const x_=i=>i.g>i.r*1.02&&i.g>i.b,Or=(i,t)=>{const e=new Ot(i);return n=>{x_(n)&&n.lerp(e,typeof t=="function"?t(n):t)}},y_=(i,t)=>{const e=rn(i*.11+3,t*.11+8)*4;return .2+Math.pow(.5+.5*Math.sin(i*.42+t*.2+e),1.6)*2.4+Jr(i*.3,t*.3)*.5},Qa={dot:"#7fae4a",grass:["#8ea34b","#b6b258","#7a9a47","#a3ad52"],field:["#dcc067","#cfae56"],fieldAmt:.92,hill:"#b9b563",paths:["#dfcca6","#d6c298"],groundFx:null,vegTint:null,leaf:{young:"#b9da62",mature:"#4f8539",scale:1},flowers:{n:420,colors:["#d9392c","#e04a37","#f1c93b","#f4ead2","#d9392c","#b98ad6"]},mounds:null,props:"tuscan",outfit:"default",villa:{},relief:null,weather:null,sky:{sun:1,hemi:1,exp:1,sat:1.08,tint:"#ffffff",amt:0,top:"#ffffff",bot:"#ffffff",bgAmt:0,clouds:12,cloudDim:0},wind:1,birds:1},ki=i=>({...Qa,...i,leaf:{...Qa.leaf,...i.leaf},sky:{...Qa.sky,...i.sky}}),ks={spring:ki({dot:"#8fc25a",leaf:{young:"#c2e06a",mature:"#5c9a3c"},weather:{kind:"petals",count:150,color:"#ffd9e6",size:5.5,vel:[.5,-.55,.25],sway:.6,alpha:.9}}),summer:ki({dot:"#e0b23c",grass:["#98a148","#c4b456","#84963f","#b4aa4e"],field:["#e6c462","#d6ae4c"],hill:"#c9b85c",leaf:{young:"#b3d45e",mature:"#3f7a32"},flowers:{n:260,colors:["#f1c93b","#f6d95a","#e98a2c","#f4ead2","#d9392c"]},weather:{kind:"motes",count:70,color:"#fff2b0",size:4,vel:[.25,.08,.1],sway:.9,alpha:.55},sky:{sun:1.12,exp:1.04,sat:1.16,tint:"#ffe9b8",amt:.14,top:"#6fb4ea",bot:"#ffe9c2",bgAmt:.25,clouds:6},birds:1}),autumn:ki({dot:"#c8742c",grass:["#a39a4a","#c2a24f","#8c8f45","#b88f48"],field:["#c98f4a","#b9783c"],hill:"#c2a257",paths:["#d9c19a","#cfb58a"],vegTint:Or("#c9742c",i=>.12+.55*be(.26,.5,i.g)),leaf:{young:"#dcc65a",mature:"#c5602a"},flowers:{n:220,colors:["#c9742c","#d98a3a","#a8482a","#e0b048","#8a5a2c"]},weather:{kind:"leaves",count:150,color:"#e08a35",size:6.5,vel:[.9,-1,.35],sway:.8,alpha:.95},sky:{sun:.96,sat:1.12,tint:"#ffb070",amt:.2,top:"#b9a8b8",bot:"#ffc28a",bgAmt:.3,clouds:10}}),winter:ki({dot:"#cfe0f0",grass:["#eef2f6","#dfe7ee","#f7f9fb","#cfd9e2"],field:["#e6ebf0","#d5dde6"],fieldAmt:.5,hill:"#e3e9ef",paths:["#c9cfd3","#bcc4ca"],groundFx:"snow",vegTint:Or("#eef3f8",.42),leaf:{young:"#c9c38a",mature:"#9c8a52",scale:.72},flowers:{n:0,colors:[]},mounds:{n:70,color:"#f4f7fa"},outfit:"winter",weather:{kind:"snow",count:460,color:"#ffffff",size:5,vel:[.35,-1.7,.15],sway:.5,alpha:.95},sky:{sun:.82,hemi:1.18,sat:.84,tint:"#cfe0f5",amt:.38,top:"#9fb3c8",bot:"#e6edf3",bgAmt:.6,clouds:12,cloudDim:.18},wind:1.6,birds:.3}),drought:ki({dot:"#b89a58",grass:["#b89a58","#c9ab66","#a88a4c","#bfa25e"],field:["#c8a55e","#b8934e"],hill:"#c2a562",paths:["#e3cfa4","#d8c294"],groundFx:"cracks",vegTint:Or("#a89858",.5),leaf:{young:"#c9c860",mature:"#8f9a45",scale:.86},flowers:{n:0,colors:[]},mounds:{n:46,color:"#a8905a"},weather:{kind:"dust",count:220,color:"#e6cf9a",size:3.5,vel:[2.4,-.05,.7],sway:.4,alpha:.5},sky:{sun:1.22,exp:1.05,sat:.98,tint:"#f4d9a0",amt:.32,top:"#9ec0dc",bot:"#f2ddb0",bgAmt:.5,clouds:3},wind:1.3,birds:.5}),desert:ki({dot:"#e2c58a",grass:["#e2c58a","#edd49c","#d6b677","#e8cc92"],field:["#ecd29a","#dfc184"],fieldAmt:.35,hill:"#e6cb92",paths:["#f2e2bc","#ead6aa"],groundFx:"ripples",vegTint:Or("#7f9a58",.22),leaf:{young:"#c6d27a",mature:"#7f9a55",scale:.9},flowers:{n:0,colors:[]},mounds:{n:60,color:"#e6cc94"},props:"desert",outfit:"egypt",villa:{STUCCO:"#e6c896",STUCCO2:"#dbb983",TOWER:"#dcc08c",ROOF:"#c59a62",SHUT:"#3f8a92",STONE:"#cdb28a"},relief:y_,weather:{kind:"sand",count:380,color:"#f0d9a4",size:3.6,vel:[4.6,-.12,1.3],sway:.3,alpha:.6},sky:{sun:1.25,exp:1.06,sat:1.06,tint:"#ffd9a0",amt:.34,top:"#7fb8e6",bot:"#f6dfae",bgAmt:.55,clouds:2},wind:1.8,birds:.4})},Nh=i=>ks[i]||ks.spring,nl={pt:{tagline:"uma vinícola na Toscana",estate:"Tenuta Toscana",enter:"Entrar na vinícola",introNote:"Protótipo visual · economia e carteira simuladas em SOL","nav.vineyard":"Vinhedo","nav.cellar":"Adega","nav.market":"Mercado","nav.dev":"Teste",day:"Dia {n}","tod.dawn":"Amanhecer","tod.morning":"Manhã","tod.noon":"Meio-dia","tod.afternoon":"Tarde","tod.golden":"Hora dourada","tod.dusk":"Entardecer","tod.night":"Noite","stock.grapes":"Uvas no estoque","stock.bottles":"Garrafas no estoque",balance:"Saldo",close:"Fechar","plot.title":"Parcela {n}","plot.forSale":"Terra à venda","plot.forSaleDesc":"Um pedaço de encosta com sol da tarde. Compre para plantar mais videiras.","plot.buy":"Comprar por {p}","plot.empty":"Solo preparado","plot.seasonGrape":"a uva desta safra","plot.plantFor":"Plantar por {p}","plot.oneHarvest":"A videira dá uma colheita e morre. Depois é só plantar de novo.","plot.worth":"As uvas valem cerca de {p}","plot.growing":"Crescendo","plot.ripe":"Pronta para a vindima","plot.ripeDesc":"Os cachos estão no ponto. A qualidade aparece na colheita, e depois dela a videira morre.","plot.harvest":"Colher","plot.plant":"Plantar","plot.uproot":"Arrancar as vinhas","plot.readyIn":"Colheita em {t}","stage.0":"Brotação","stage.1":"Folhagem","stage.2":"Floração","stage.3":"Pintor","stage.4":"Maturação","var.vernaccia":"Vernaccia","var.sangiovese":"Sangiovese","var.canaiolo":"Canaiolo","var.trebbiano":"Trebbiano","var.aleatico":"Aleatico","var.moscatel":"Moscatel","var.vernaccia.d":"Leve e fresca, a primeira a brotar na primavera.","var.sangiovese.d":"A alma da Toscana. Amadurece no sol forte e rende bem.","var.canaiolo.d":"Macia e de colheita tardia, da cor das folhas de outono.","var.trebbiano.d":"Rústica e resistente ao frio. Rende menos e demora mais.","var.aleatico.d":"Com pouca água o cacho é pequeno, mas doce e concentrado.","var.moscatel.d":"Moscatel de Alexandria: uva antiga do Egito, feita para sol e areia.","season.spring":"Primavera","season.summer":"Verão","season.autumn":"Outono","season.winter":"Inverno","season.drought":"Seca","season.desert":"Deserto","season.spring.d":"Campos floridos e pétalas no ar.","season.summer.d":"Sol forte e grama dourada.","season.autumn.d":"Folhas laranja caindo.","season.winter.d":"Neve no chão, casacos e gorros.","season.drought.d":"Terra rachada e poeira no vento.","season.desert.d":"Dunas, tamareiras e roupas do Egito.","vintage.spring":"Safra da Primavera","vintage.summer":"Safra do Verão","vintage.autumn":"Safra do Outono","vintage.winter":"Safra do Inverno","vintage.drought":"Safra da Seca","vintage.desert":"Safra do Deserto","kind.red":"Tinta","kind.white":"Branca",seedlings:"Mudas",growth:"Ciclo",yield:"Colheita",perKg:"por kg","q.common":"Safra comum","q.good":"Safra boa","q.great":"Safra excelente","q.legendary":"Safra lendária","barrel.title":"Barril {n}","barrel.forSale":"Vaga para barril","barrel.forSaleDesc":"Carvalho francês, {kg} kg de uva por enchimento. Mais barris, mais vinho envelhecendo ao mesmo tempo.","barrel.buy":"Comprar por {p}","barrel.empty":"Barril vazio","barrel.chooseLot":"Escolha as uvas para prensar","barrel.noGrapes":"Você ainda não tem uvas. Colha no vinhedo e volte aqui.","barrel.capacity":"Cabe até {kg} kg por barril","barrel.aging":"Envelhecendo","barrel.days":"{d} dias de barril","barrel.day1":"{d} dia de barril","barrel.valueNow":"Valor agora","barrel.base":"Valor das uvas","barrel.bottle":"Engarrafar","barrel.tooYoung":"Espere 1 dia de barril para engarrafar","barrel.milestones":"Quanto vale em cada marco","barrel.dayN":"{d} d","barrel.plusDays":"+{d} d","barrel.curve":"Quanto mais tempo no barril, mais o vinho vale. Depois de 30 dias o valor para de subir.","barrel.emptyTag":"Vazio",press:"Prensar","market.title":"Mercado da vila","market.sell":"Vender","market.buy":"Comprar","market.grapes":"Uvas","market.wines":"Vinhos","market.nothing":"Nada para vender ainda. Colha uvas ou engarrafe um vinho.","market.sellAll":"Vender tudo por {p}","market.sellOne":"Vender","market.plot":"Nova parcela de vinhedo","market.plotDesc":"Você tem {a} de {b}. A próxima parcela livre do vinhedo passa a ser sua.","market.barrel":"Novo barril de carvalho","market.barrelDesc":"Você tem {a} de {b}. O barril vai para a próxima vaga livre da adega.","market.soldOut":"Tudo comprado","market.go":"Ir escolher","market.note":"Valores em SOL simulado. A economia ainda vai ser ajustada.",bottles:"{n} garrafas",bottle1:"1 garrafa",aged:"{d} d de barril","hint.harvest":"As uvas estão maduras. Toque em Colher no vinhedo.","hint.plant":"Toque na sua parcela para plantar a uva da safra.","hint.press":"Você tem uvas. Venda no mercado ou faça vinho na adega.","hint.sellwine":"Suas garrafas estão prontas. Venda no mercado.","hint.aging":"O vinho está envelhecendo. Cada dia de barril aumenta o valor.","hint.wait":"As vinhas estão crescendo. Explore a adega e o mercado enquanto isso.","hint.buy":"Compre mais parcelas e barris para expandir a tenuta.","toast.noFunds":"Saldo insuficiente","toast.planted":"{v} plantada","toast.bought":"Compra feita","toast.harvest":"{q} · {kg} kg de {v}","toast.filled":"{kg} kg prensados. O vinho começou a envelhecer.","toast.bottled":"{n} de {v} engarrafadas, valendo {p}","toast.sold":"Vendido por {p}","toast.wallet":"Carteira simulada conectada","toast.season":"O clima mudou para {s}. Agora só dá para plantar {v}.","toast.skip":"O tempo avançou {d}","toast.ripe":"Todas as uvas amadureceram","rv.new":"Vinho engarrafado","rv.keep":"Guardar na adega","rv.sell":"Vender por {p}","rv.tip":"Segure a garrafa e balance para mexer o vinho","rv.test":"Teste: esta garrafa não entra no estoque. Segure e balance.","rv.skip":"Toque para pular","dev.title":"Test for dev","dev.eyebrow":"Só para desenvolvimento","dev.climate":"Clima e safra","dev.bottle":"Garrafa saindo do barril","dev.reveal":"Animação","dev.reveal.gold":"Conquista dourada","dev.reveal.cellar":"Luz de vela","dev.reveal.off":"Sem animação","dev.shape":"Formato","dev.shape.bordeaux":"Bordalesa","dev.shape.burgundy":"Borgonha","dev.sound":"Som","dev.sound.file":"O seu áudio","dev.sound.synth":"Sintético","dev.preview":"Ver a garrafa agora","dev.time":"Tempo","dev.speed":"Velocidade","dev.skip":"Avançar","dev.skipN":"+{d} d","dev.days1":"1 dia","dev.daysN":"{d} dias","dev.tod":"Hora do dia","dev.tod.auto":"Automática","dev.tod.morning":"Manhã","dev.tod.golden":"Dourada","dev.tod.night":"Noite","dev.cheats":"Atalhos","dev.addSol":"+1 SOL","dev.ripen":"Amadurecer tudo","dev.note":"As escolhas ficam salvas neste navegador.","menu.language":"Idioma","menu.sound":"Som","menu.on":"Ligado","menu.off":"Desligado","menu.speed":"Velocidade do tempo","menu.speedNote":"Só para demonstração","menu.photo":"Modo foto","menu.photoExit":"Toque para voltar","menu.wallet":"Conectar carteira","menu.walletNote":"Simulada nesta fase","menu.reset":"Recomeçar do zero","menu.resetConfirm":"Apagar o progresso e recomeçar?","place.cellar":"Adega","place.market":"Mercado",min:"min",sec:"s"},en:{tagline:"a winery in Tuscany",estate:"Tuscan Estate",enter:"Enter the winery",introNote:"Visual prototype · economy and wallet simulated in SOL","nav.vineyard":"Vineyard","nav.cellar":"Cellar","nav.market":"Market","nav.dev":"Test",day:"Day {n}","tod.dawn":"Dawn","tod.morning":"Morning","tod.noon":"Midday","tod.afternoon":"Afternoon","tod.golden":"Golden hour","tod.dusk":"Dusk","tod.night":"Night","stock.grapes":"Grapes in stock","stock.bottles":"Bottles in stock",balance:"Balance",close:"Close","plot.title":"Plot {n}","plot.forSale":"Land for sale","plot.forSaleDesc":"A slice of hillside with afternoon sun. Buy it to plant more vines.","plot.buy":"Buy for {p}","plot.empty":"Soil is ready","plot.seasonGrape":"this season's grape","plot.plantFor":"Plant for {p}","plot.oneHarvest":"The vine gives one harvest and dies. Then you plant again.","plot.worth":"The grapes are worth about {p}","plot.growing":"Growing","plot.ripe":"Ready for harvest","plot.ripeDesc":"The clusters are at their peak. Quality is revealed when you pick, and then the vine dies.","plot.harvest":"Harvest","plot.plant":"Plant","plot.uproot":"Pull up the vines","plot.readyIn":"Harvest in {t}","stage.0":"Bud break","stage.1":"Leafing","stage.2":"Flowering","stage.3":"Veraison","stage.4":"Ripening","var.vernaccia":"Vernaccia","var.sangiovese":"Sangiovese","var.canaiolo":"Canaiolo","var.trebbiano":"Trebbiano","var.aleatico":"Aleatico","var.moscatel":"Muscat","var.vernaccia.d":"Light and fresh, the first to bud in spring.","var.sangiovese.d":"The soul of Tuscany. Ripens in strong sun and yields well.","var.canaiolo.d":"Soft and late-ripening, the colour of autumn leaves.","var.trebbiano.d":"Rustic and cold-hardy. Yields less and takes longer.","var.aleatico.d":"With little water the cluster is small, but sweet and concentrated.","var.moscatel.d":"Muscat of Alexandria: an ancient Egyptian grape made for sun and sand.","season.spring":"Spring","season.summer":"Summer","season.autumn":"Autumn","season.winter":"Winter","season.drought":"Drought","season.desert":"Desert","season.spring.d":"Fields in bloom and petals in the air.","season.summer.d":"Strong sun and golden grass.","season.autumn.d":"Orange leaves falling.","season.winter.d":"Snow on the ground, coats and beanies.","season.drought.d":"Cracked earth and dust in the wind.","season.desert.d":"Dunes, date palms and Egyptian clothes.","vintage.spring":"Spring vintage","vintage.summer":"Summer vintage","vintage.autumn":"Autumn vintage","vintage.winter":"Winter vintage","vintage.drought":"Drought vintage","vintage.desert":"Desert vintage","kind.red":"Red","kind.white":"White",seedlings:"Seedlings",growth:"Cycle",yield:"Harvest",perKg:"per kg","q.common":"Common vintage","q.good":"Good vintage","q.great":"Great vintage","q.legendary":"Legendary vintage","barrel.title":"Barrel {n}","barrel.forSale":"Barrel slot","barrel.forSaleDesc":"French oak, {kg} kg of grapes per fill. More barrels, more wine ageing at once.","barrel.buy":"Buy for {p}","barrel.empty":"Empty barrel","barrel.chooseLot":"Choose grapes to press","barrel.noGrapes":"You have no grapes yet. Harvest in the vineyard and come back.","barrel.capacity":"Holds up to {kg} kg per barrel","barrel.aging":"Ageing","barrel.days":"{d} days in barrel","barrel.day1":"{d} day in barrel","barrel.valueNow":"Value now","barrel.base":"Grape value","barrel.bottle":"Bottle it","barrel.tooYoung":"Wait 1 day in the barrel to bottle","barrel.milestones":"What it is worth at each mark","barrel.dayN":"{d} d","barrel.plusDays":"+{d} d","barrel.curve":"The longer it stays in the barrel, the more the wine is worth. After 30 days the value stops rising.","barrel.emptyTag":"Empty",press:"Press","market.title":"Village market","market.sell":"Sell","market.buy":"Buy","market.grapes":"Grapes","market.wines":"Wines","market.nothing":"Nothing to sell yet. Harvest grapes or bottle a wine.","market.sellAll":"Sell all for {p}","market.sellOne":"Sell","market.plot":"New vineyard plot","market.plotDesc":"You own {a} of {b}. The next free plot in the vineyard becomes yours.","market.barrel":"New oak barrel","market.barrelDesc":"You own {a} of {b}. The barrel goes to the next free slot in the cellar.","market.soldOut":"All purchased","market.go":"Go choose","market.note":"Values in simulated SOL. The economy will still be tuned.",bottles:"{n} bottles",bottle1:"1 bottle",aged:"{d} d in barrel","hint.harvest":"The grapes are ripe. Tap Harvest in the vineyard.","hint.plant":"Tap your plot to plant this season's grape.","hint.press":"You have grapes. Sell them at the market or make wine in the cellar.","hint.sellwine":"Your bottles are ready. Sell them at the market.","hint.aging":"The wine is ageing. Every day in the barrel adds value.","hint.wait":"The vines are growing. Explore the cellar and the market meanwhile.","hint.buy":"Buy more plots and barrels to grow the estate.","toast.noFunds":"Not enough balance","toast.planted":"{v} planted","toast.bought":"Purchase complete","toast.harvest":"{q} · {kg} kg of {v}","toast.filled":"{kg} kg pressed. The wine has started ageing.","toast.bottled":"{n} of {v} bottled, worth {p}","toast.sold":"Sold for {p}","toast.wallet":"Simulated wallet connected","toast.season":"The climate changed to {s}. Now you can only plant {v}.","toast.skip":"Time moved forward {d}","toast.ripe":"All grapes are ripe","rv.new":"Wine bottled","rv.keep":"Keep in the cellar","rv.sell":"Sell for {p}","rv.tip":"Hold the bottle and shake it to swirl the wine","rv.test":"Test: this bottle does not go to your stock. Hold and shake.","rv.skip":"Tap to skip","dev.title":"Test for dev","dev.eyebrow":"Development only","dev.climate":"Climate and vintage","dev.bottle":"Bottle coming out of the barrel","dev.reveal":"Animation","dev.reveal.gold":"Golden achievement","dev.reveal.cellar":"Candlelight","dev.reveal.off":"No animation","dev.shape":"Shape","dev.shape.bordeaux":"Bordeaux","dev.shape.burgundy":"Burgundy","dev.sound":"Sound","dev.sound.file":"Your audio","dev.sound.synth":"Synthetic","dev.preview":"See the bottle now","dev.time":"Time","dev.speed":"Speed","dev.skip":"Skip ahead","dev.skipN":"+{d} d","dev.days1":"1 day","dev.daysN":"{d} days","dev.tod":"Time of day","dev.tod.auto":"Automatic","dev.tod.morning":"Morning","dev.tod.golden":"Golden","dev.tod.night":"Night","dev.cheats":"Shortcuts","dev.addSol":"+1 SOL","dev.ripen":"Ripen everything","dev.note":"Your choices are saved in this browser.","menu.language":"Language","menu.sound":"Sound","menu.on":"On","menu.off":"Off","menu.speed":"Time speed","menu.speedNote":"For demo purposes only","menu.photo":"Photo mode","menu.photoExit":"Tap to go back","menu.wallet":"Connect wallet","menu.walletNote":"Simulated at this stage","menu.reset":"Start over","menu.resetConfirm":"Erase your progress and start over?","place.cellar":"Cellar","place.market":"Market",min:"min",sec:"s"}};let Ys="pt";const du=()=>Ys;function Fh(i){Ys=nl[i]?i:"pt",document.documentElement.lang=Ys==="pt"?"pt-BR":"en"}function M_(){return(navigator.language||"pt").toLowerCase().startsWith("pt")?"pt":"en"}function K(i,t){let e=nl[Ys][i]??nl.pt[i]??i;if(t)for(const n in t)e=e.replaceAll(`{${n}}`,t[n]);return e}function pn(i,t=0){return new Intl.NumberFormat(Ys==="pt"?"pt-BR":"en-US",{minimumFractionDigits:t,maximumFractionDigits:t}).format(i)}function Fn(i){const t=Math.abs(i);return pn(i,t>=100?1:t>=10?2:3)}function to(i){return i=Math.max(0,Math.ceil(i)),i>=60?`${Math.floor(i/60)} ${K("min")} ${String(i%60).padStart(2,"0")} ${K("sec")}`:`${i} ${K("sec")}`}const ge=i=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${i}</svg>`,Vt={grape:ge('<circle cx="7.6" cy="10.4" r="2.2"/><circle cx="12" cy="10.4" r="2.2"/><circle cx="16.4" cy="10.4" r="2.2"/><circle cx="9.8" cy="14.4" r="2.2"/><circle cx="14.2" cy="14.4" r="2.2"/><circle cx="12" cy="18.4" r="2.2"/><path d="M12 8.2V4.6"/><path d="M12 5.6c1.6-2.2 4-2.6 6-1.8-.6 2-2.9 3-6 1.8z"/>'),vine:ge('<path d="M12 21V10.5"/><path d="M12 11C12 7 9 4 4.5 4c0 4.5 3 7 7.5 7z"/><path d="M12 14.5c0-3 2.5-5.5 7-5.5 0 3.5-3 5.5-7 5.5z"/><path d="M8 21h8"/>'),sprout:ge('<path d="M12 20v-8"/><path d="M12 12c0-3-2-5-5.5-5 0 3 2 5 5.5 5z"/><path d="M12 14c0-2.4 1.8-4.4 5-4.4 0 2.6-1.8 4.4-5 4.4z"/>'),barrel:ge('<path d="M6.2 4h11.6c1.6 2.4 2.4 5 2.4 8s-.8 5.6-2.4 8H6.2C4.6 17.6 3.8 15 3.8 12s.8-5.6 2.4-8z"/><path d="M4.3 9h15.4M4.3 15h15.4M12 4v16"/>'),market:ge('<path d="M3 9l1.6-5h14.8L21 9"/><path d="M3 9a2.25 2.25 0 0 0 4.5 0 2.25 2.25 0 0 0 4.5 0 2.25 2.25 0 0 0 4.5 0A2.25 2.25 0 0 0 21 9"/><path d="M5 11.6V20h14v-8.4"/><path d="M9.6 20v-4.6h4.8V20"/>'),bottle:ge('<path d="M10.2 3h3.6v4.2c0 1 .5 1.6 1.2 2.3.8.8 1.3 1.7 1.3 3V20a1 1 0 0 1-1 1H8.7a1 1 0 0 1-1-1v-7.5c0-1.3.5-2.2 1.3-3 .7-.7 1.2-1.3 1.2-2.3V3z"/><path d="M7.7 13.5h8.6v4H7.7"/>'),coin:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10.5" fill="#1c1430"/><circle cx="12" cy="12" r="10.5" fill="none" stroke="#4a3a78" stroke-width="1"/><path fill="#19f0a0" d="M8.4 7.3h8.7l-1.6 1.9H6.8z"/><path fill="#6f8fe8" d="M6.8 11.05h8.7l1.6 1.9H8.4z"/><path fill="#9945ff" d="M8.4 14.8h8.7l-1.6 1.9H6.8z"/></svg>',flask:ge('<path d="M9 3h6M10 3v5.8L5.4 17.6A2.2 2.2 0 0 0 7.4 21h9.2a2.2 2.2 0 0 0 2-3.4L14 8.8V3"/><path d="M7.6 14.5h8.8"/>'),sun:ge('<circle cx="12" cy="12" r="4"/><path d="M12 2.8v2.2M12 19v2.2M2.8 12H5M19 12h2.2M5.5 5.5l1.6 1.6M16.9 16.9l1.6 1.6M18.5 5.5l-1.6 1.6M7.1 16.9l-1.6 1.6"/>'),moon:ge('<path d="M20 14.2A8 8 0 1 1 9.8 4a6.4 6.4 0 0 0 10.2 10.2z"/>'),menu:ge('<path d="M4 7h16M4 12h16M4 17h16"/>'),soundOn:ge('<path d="M4 10v4h3l5 4V6l-5 4H4z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/>'),soundOff:ge('<path d="M4 10v4h3l5 4V6l-5 4H4z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/>'),camera:ge('<path d="M4 8h3l1.5-2h7L17 8h3v11H4z"/><circle cx="12" cy="13.2" r="3.2"/>'),wallet:ge('<path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H18v3"/><path d="M4 7.5V17a2 2 0 0 0 2 2h14V8H6.5A2.5 2.5 0 0 1 4 7.5z"/><path d="M16.5 13.5h.01"/>'),close:ge('<path d="M6 6l12 12M18 6L6 18"/>'),star:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 3.2l2.7 5.5 6 .9-4.4 4.2 1.1 6L12 17l-5.4 2.8 1.1-6L3.3 9.6l6-.9z"/></svg>',lock:ge('<path d="M7.5 11V8a4.5 4.5 0 0 1 9 0v3"/><path d="M5.5 11h13v9h-13z"/>'),plus:ge('<path d="M12 5v14M5 12h14"/>'),clock:ge('<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>'),globe:ge('<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.5 2.6 3.8 5.4 3.8 8.5s-1.3 5.9-3.8 8.5c-2.5-2.6-3.8-5.4-3.8-8.5s1.3-5.9 3.8-8.5z"/>'),speed:ge('<path d="M4 6l7 6-7 6V6zM13 6l7 6-7 6V6z"/>'),reset:ge('<path d="M4 12a8 8 0 1 0 2.6-5.9"/><path d="M4 4v4.5h4.5"/>'),drop:ge('<path d="M12 3.5c3 4 5.5 6.8 5.5 10a5.5 5.5 0 0 1-11 0c0-3.2 2.5-6 5.5-10z"/>'),arrow:ge('<path d="M5 12h14M13 6l6 6-6 6"/>')},mn=(i,t,e)=>Math.min(e,Math.max(t,i)),Hi=(i,t,e)=>i+(t-i)*e,ta="0111102223134512232111111113243521533436922132332320",b_=ta.length*.05,il=1.5,pu=(()=>{const i=[0];let t=0;for(const e of ta)t+=Number(e)+.6,i.push(t);return i.map(e=>e/t)})();function S_(i,t){if(!t)return mn(i/il,0,1);const e=mn(i/.05,0,ta.length),n=Math.min(ta.length-1,Math.floor(e));return Hi(pu[n],pu[n+1],e-n)}const eo={bordeaux:{glass:[[0,-1.42],[.22,-1.5],[.44,-1.6],[.52,-1.57],[.54,-1.48],[.54,.32],[.52,.5],[.42,.7],[.28,.86],[.2,1],[.175,1.15],[.175,1.5],[.2,1.52],[.2,1.6],[.15,1.6]],fill:.5,label:[-.98,-.02],r:.54},burgundy:{glass:[[0,-1.42],[.24,-1.5],[.48,-1.6],[.57,-1.57],[.59,-1.48],[.59,-.2],[.56,.1],[.47,.45],[.35,.78],[.25,1.02],[.19,1.22],[.175,1.5],[.2,1.52],[.2,1.6],[.15,1.6]],fill:.36,label:[-1.02,-.22],r:.59}},w_=-1.42,mu=`
  varying vec3 vW, vN, vV;
  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vW = wp.xyz;
    vN = normalize(mat3(modelMatrix) * normal);
    vV = normalize(cameraPosition - wp.xyz);
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`,E_=`
  uniform vec3 uPivot, uCol, uDeep, uTop;
  uniform vec2 uWob;
  uniform float uTime, uRip;
  varying vec3 vW, vN, vV;
  void main() {
    vec3 d = vW - uPivot;
    float wave = sin(d.x * 9.0 + uTime * 5.0) * uRip + sin(d.z * 7.0 - uTime * 4.0) * uRip * 0.6;
    float h = d.y - (d.x * uWob.x + d.z * uWob.y) - wave;
    if (h > 0.0) discard;
    vec3 col;
    if (gl_FrontFacing) {
      float fr = pow(1.0 - max(dot(normalize(vN), normalize(vV)), 0.0), 2.0);
      float nearTop = smoothstep(-2.4, 0.0, h);
      col = mix(uDeep, uCol, nearTop * 0.75 + 0.12) + fr * 0.3 * uCol;
      col += smoothstep(-0.05, 0.0, h) * 0.35 * uTop;
    } else {
      col = uTop;
    }
    gl_FragColor = vec4(col, 1.0);
    #include <colorspace_fragment>
  }
`,T_=`
  uniform vec3 uGlass;
  uniform float uAlpha;
  varying vec3 vW, vN, vV;
  void main() {
    vec3 n = normalize(vN), v = normalize(vV);
    float fr = pow(1.0 - abs(dot(n, v)), 2.2);
    vec3 nv = normalize((viewMatrix * vec4(n, 0.0)).xyz);
    float s1 = smoothstep(0.07, 0.0, abs(nv.x - 0.52)) * smoothstep(-0.9, 0.3, nv.y + 0.2);
    float s2 = smoothstep(0.035, 0.0, abs(nv.x + 0.6)) * 0.6;
    vec3 col = uGlass * (0.4 + fr * 1.3) + vec3(1.0) * (s1 * 0.95 + s2 * 0.6) + fr * 0.35;
    float a = clamp(uAlpha + fr * 0.7 + s1 * 0.9 + s2 * 0.6, 0.0, 1.0);
    gl_FragColor = vec4(col, a);
    #include <colorspace_fragment>
  }
`;function A_({ui:i,audio:t,onSold:e}){const n=document.createElement("div");n.className="reveal",n.hidden=!0,n.innerHTML=`
    <div class="rv-back"></div>
    <div class="rv-rays"></div>
    <div class="rv-glow"></div>
    <canvas class="rv-gl"></canvas>
    <canvas class="rv-fx"></canvas>
    <div class="rv-flash"></div>
    <p class="rv-skip"></p>
    <div class="rv-info">
      <small class="rv-eyebrow"></small>
      <h2 class="rv-name"></h2>
      <div class="rv-meta"></div>
      <div class="rv-value">${Vt.coin}<b></b><small>${Xt.token}</small></div>
      <p class="rv-tip"></p>
      <div class="rv-actions">
        <button class="btn primary" data-rv="keep"></button>
        <button class="btn ghost" data-rv="sell"></button>
      </div>
    </div>`,i.appendChild(n);const s=bt=>n.querySelector(bt),r=s(".rv-gl"),o=s(".rv-fx"),a=o.getContext("2d");let l=null,c,u,h,f,d,g,v,p,m="";const M={uPivot:{value:new B},uCol:{value:new Ot},uDeep:{value:new Ot},uTop:{value:new Ot},uWob:{value:new St},uTime:{value:0},uRip:{value:.012}},w={uGlass:{value:new Ot("#9fc9a8")},uAlpha:{value:.08}},y=new _n({color:"#8a2040"});function W(){l=new Qu({canvas:r,alpha:!0,antialias:!0}),l.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),c=new th,u=new Ke(28,1,.1,60),u.position.set(0,0,14),c.add(new hh("#fff4e0","#3a2028",1.6));const bt=new Yo("#fff0d8",2.2);bt.position.set(3,5,6),c.add(bt),h=new an,c.add(h),v=new Jt(new pe(.035,.05,1,8).translate(0,.5,0),y),c.add(v)}function C(bt){if(m===bt)return;m=bt;for(const nt of[...h.children])nt.geometry.dispose(),h.remove(nt);const vt=eo[bt],gt=nt=>new St(nt[0],nt[1]),Dt=vt.glass.filter(nt=>nt[1]<1.44).map(([nt,dt])=>[Math.max(0,nt-.05),dt<-1.4?dt+.06:dt]);Dt.push([.11,1.44],[0,1.44]),f=new Jt(new ni(Dt.map(gt),44),new Se({uniforms:M,vertexShader:mu,fragmentShader:E_,side:sn})),d=new Jt(new ni(vt.glass.map(gt),44),new Se({uniforms:w,vertexShader:mu,fragmentShader:T_,transparent:!0,depthWrite:!1})),d.renderOrder=3;const[E,O]=vt.label;g=new Jt(new pe(vt.r+.006,vt.r+.006,O-E,36,1,!0,-1.05,2.1).translate(0,(E+O)/2,0),new De({map:p,roughness:.85,side:sn}));const L=new Jt(new pe(.186,.186,.58,20).translate(0,1.33,0),new De({color:"#7a1f2f",roughness:.38,metalness:.55})),q=new Jt(new pe(.19,.19,.05,20).translate(0,1.07,0),new De({color:"#d9b86a",roughness:.3,metalness:.8}));h.add(f,g,L,q,d)}function I(bt){const vt=document.createElement("canvas");vt.width=640,vt.height=420;const gt=vt.getContext("2d"),Dt=gt.createLinearGradient(0,0,0,420);Dt.addColorStop(0,"#fdf8ec"),Dt.addColorStop(1,"#eedfc0"),gt.fillStyle=Dt,gt.fillRect(0,0,640,420),gt.strokeStyle="#b5873a",gt.lineWidth=5,gt.strokeRect(18,18,604,384),gt.lineWidth=1.5,gt.strokeRect(30,30,580,360),gt.textAlign="center",gt.fillStyle="#b5873a",gt.font='600 26px Jost, "Segoe UI", sans-serif',gt.fillText("V I N D I M A",320,86),gt.fillStyle="#3b0f1c";const E=K("var."+bt.variety);gt.font=`700 ${E.length>10?78:96}px "Cormorant Garamond", Georgia, serif`,gt.fillText(E,320,196),gt.strokeStyle="#b5873a",gt.lineWidth=2,gt.beginPath(),gt.moveTo(170,228),gt.lineTo(470,228),gt.stroke(),gt.fillStyle="#5d4a3f",gt.font='italic 500 38px "Cormorant Garamond", Georgia, serif',gt.fillText(K("vintage."+Kv(bt.variety)),320,282),gt.fillStyle="#b5873a",gt.font="34px serif",gt.fillText("★".repeat(Qr(bt.quality).stars),320,346),p==null||p.dispose(),p=new Bg(vt),p.colorSpace=Ze,p.anisotropy=4,g&&(g.material.map=p,g.material.needsUpdate=!0)}let S=0,x=0,_=0,T=0,V="closed",H=null,tt=!1,N=!1,D=il,X=.5;const z=new St,rt=new St,it=new St,at=1.33;let Mt=0,Bt=0,U=0,Z=0,Y=0,F=0,j=0,ot=0,ft=0,$=0,G=!1;const ct=[];let P=1,Tt=1,pt=1;function At(){P=n.clientWidth||innerWidth,Tt=n.clientHeight||innerHeight,pt=Math.min(window.devicePixelRatio||1,2),l&&(l.setSize(P,Tt,!1),u.aspect=P/Tt,u.updateProjectionMatrix()),o.width=P*pt,o.height=Tt*pt}window.addEventListener("resize",()=>{V!=="closed"&&At()});const wt=()=>2*u.position.z*Math.tan(u.fov*Math.PI/360)/Tt;r.addEventListener("pointerdown",bt=>{if(V==="pour")return b();if(V==="show"){G=!0;try{r.setPointerCapture(bt.pointerId)}catch{}Lt(bt)}}),r.addEventListener("pointermove",bt=>{G&&Lt(bt)});const kt=()=>{G=!1,it.set(0,0)};r.addEventListener("pointerup",kt),r.addEventListener("pointercancel",kt);function Lt(bt){const vt=r.getBoundingClientRect(),gt=wt();it.set(mn((bt.clientX-vt.left-vt.width/2)*gt,-2.2,2.2),mn(-(bt.clientY-vt.top-vt.height/2)*gt-at,-1.1,.9))}function R(){V="show",n.classList.add("burst"),t.play("cork"),t.play("reveal"),ft=1;const bt=P/2,vt=Tt*.5-at/wt(),gt=n.dataset.style==="cellar"?34:90;for(let Dt=0;Dt<gt;Dt++){const E=Math.random()*Math.PI*2,O=140+Math.random()*520;ct.push({x:bt,y:vt,vx:Math.cos(E)*O,vy:Math.sin(E)*O-120,life:0,max:.7+Math.random()*1.1,s:1.5+Math.random()*3.5,tw:Math.random()*6})}}function b(){V==="pour"&&(_-=Math.max(0,D-T)*1e3)}function et(bt){a.setTransform(pt,0,0,pt,0,0),a.clearRect(0,0,P,Tt);const vt=n.dataset.style==="cellar";if(V==="show"&&Math.random()<(vt?.35:.5)){const gt=Tt*.5-at/wt();vt?ct.push({x:P*(.2+Math.random()*.6),y:Tt+10,vx:(Math.random()-.5)*30,vy:-60-Math.random()*90,life:0,max:2.5+Math.random()*2,s:1.2+Math.random()*2,tw:Math.random()*6,ember:!0}):ct.push({x:P/2+(Math.random()-.5)*320,y:gt+(Math.random()-.5)*420,vx:0,vy:-18,life:0,max:.8+Math.random()*.8,s:1.5+Math.random()*3,tw:Math.random()*6})}a.globalCompositeOperation="lighter";for(let gt=ct.length-1;gt>=0;gt--){const Dt=ct[gt];if(Dt.life+=bt,Dt.life>Dt.max){ct.splice(gt,1);continue}Dt.x+=Dt.vx*bt,Dt.y+=Dt.vy*bt,Dt.ember||(Dt.vx*=1-2.2*bt,Dt.vy=Dt.vy*(1-2.2*bt)+160*bt);const E=Dt.life/Dt.max,O=Math.sin(Math.min(1,E*1.15)*Math.PI)*(.6+.4*Math.sin(T*14+Dt.tw));a.fillStyle=Dt.ember?`rgba(255, ${150+Math.floor(60*(1-E))}, 70, ${O*.8})`:`rgba(255, 226, 150, ${O})`;const L=Dt.s*(Dt.ember?1:1+(1-E));a.beginPath(),a.arc(Dt.x,Dt.y,L*.6,0,7),a.fill(),Dt.ember||(a.fillRect(Dt.x-L*2.2,Dt.y-.5,L*4.4,1),a.fillRect(Dt.x-.5,Dt.y-L*2.2,1,L*4.4))}a.globalCompositeOperation="source-over"}function lt(bt){if(V==="closed")return;const vt=Math.min(.05,(bt-x)/1e3||.016);x=bt,T=(bt-_)/1e3;const gt=V==="pour"?S_(T,N):1;V==="pour"&&T>=D&&R();const Dt=Hi(w_,X,gt),E=mn(T/.55,0,1),O=1-Math.pow(1-E,3),L=(it.x-z.x)*70-rt.x*11,q=(it.y-z.y)*70-rt.y*11;rt.x+=L*vt,rt.y+=q*vt,z.x+=rt.x*vt,z.y+=rt.y*vt;const nt=mn((it.x-z.x)*.5+rt.x*.09,-.95,.95);Mt=Hi(Mt,nt,1-Math.exp(-vt*10)),Bt=Hi(Bt,mn(rt.y*.07,-.4,.4),1-Math.exp(-vt*8)),Y+=vt*(G?0:.35),ft>0&&(ft=Math.max(0,ft-vt*2.4));const dt=(.6+.4*O)*(1+Math.sin(ft*Math.PI)*.14);h.position.set(z.x,at+z.y-(1-O)*4.2+Math.sin(T*1.4)*.04,0),h.rotation.set(Bt,Math.sin(Y)*.42,Mt),h.scale.setScalar(dt),h.updateMatrixWorld(!0);const yt=(Mt-U)/vt,Pt=(Bt-Z)/vt;U=Mt,Z=Bt;const k=.55;F=mn(Hi(F,0,vt*1.3)+mn(rt.x*.28+yt*.2,-3,3)*vt,-k,k),j=mn(Hi(j,0,vt*1.3)+mn(rt.y*.12+Pt*.2,-3,3)*vt,-k,k);const Et=T*7.2;M.uWob.value.set(F*Math.sin(Et),j*Math.cos(Et)),M.uRip.value=(V==="pour"?.03:.008)+Math.min(.05,(Math.abs(F)+Math.abs(j))*.08),M.uTime.value=T,M.uPivot.value.set(0,Dt,0).applyMatrix4(h.matrixWorld),ot-=vt,V==="show"&&ot<=0&&Math.abs(F)+Math.abs(j)>.3&&(t.play("slosh"),ot=.42);const st=V==="pour"&&T>.12;if(v.visible=st,st){const xt=h.position.y+1.5*dt;v.position.set(h.position.x+Math.sin(T*23)*.006,xt,0),v.scale.set(1+Math.sin(T*31)*.15,Math.min(6,(T-.12)*26),1)}l.render(c,u),et(vt),V==="show"&&$<H.value&&($=Math.min(H.value,$+H.value/.9*vt),s(".rv-value b").textContent=Fn($)),S=requestAnimationFrame(lt)}function _t(bt,vt={}){H=bt,tt=!!vt.test;const gt=It.s.dev;l||W(),I(H),C(eo[gt.bottle]?gt.bottle:"bordeaux"),g.material.map=p,g.material.needsUpdate=!0,X=eo[m].fill;const Dt=Xt.varieties[H.variety],E=new Ot(Dt.wine),O=Dt.kind==="white";M.uCol.value.copy(E).multiplyScalar(O?1:1.25),M.uDeep.value.copy(E).multiplyScalar(O?.6:.3),M.uTop.value.copy(E).lerp(new Ot("#ffd9c9"),O?.45:.3),w.uGlass.value.set(O?"#d6e6c8":"#9fc9a8"),y.color.copy(E),n.dataset.style=gt.reveal==="cellar"?"cellar":"gold",n.style.setProperty("--rv-wine",Dt.wine),n.classList.remove("burst"),n.hidden=!1,n.offsetWidth,n.classList.add("open"),s(".rv-eyebrow").textContent=K("rv.new"),s(".rv-name").textContent=K("var."+H.variety);const L=Qr(H.quality);s(".rv-meta").innerHTML=`<span class="stars q-${L.id}">${Vt.star.repeat(L.stars)}</span><span>${K("q."+L.id)}</span><i>·</i><span>${K(H.days<1.95&&H.days>=.95?"barrel.day1":"barrel.days",{d:pn(H.days,1)})}</span><i>·</i><span>${H.bottles===1?K("bottle1"):K("bottles",{n:H.bottles})}</span>`,s(".rv-value b").textContent=Fn(0),s(".rv-tip").textContent=K(tt?"rv.test":"rv.tip"),s(".rv-skip").textContent=K("rv.skip"),s('[data-rv="keep"]').textContent=K(tt?"close":"rv.keep");const q=s('[data-rv="sell"]');q.hidden=tt,q.innerHTML=K("rv.sell",{p:`<span class="coin">${Vt.coin}<b>${Fn(H.value)}</b></span>`}),N=gt.sound==="file"&&t.playSample("wine",1),N||t.play("pour"),D=N?b_:il,V="pour",T=0,$=0,z.set(0,0),rt.set(0,0),it.set(0,0),Mt=Bt=U=Z=F=j=Y=ft=0,ct.length=0,G=!1,At(),x=_=performance.now(),cancelAnimationFrame(S),S=requestAnimationFrame(lt)}function mt(){V!=="closed"&&(V="closed",cancelAnimationFrame(S),n.classList.remove("open","burst"),n.hidden=!0)}return n.addEventListener("click",bt=>{const vt=bt.target.closest("[data-rv]");if(!vt){V==="pour"&&!bt.target.closest(".rv-gl")&&b();return}if(t.play("click"),vt.dataset.rv==="sell"&&!tt){const gt=Dh(H.id);gt.ok&&(e==null||e(gt.value))}mt()}),{show:_t,close:mt,get open(){return V!=="closed"}}}const C_=Xt.token,Br=2*Math.PI*15;function R_({engine:i,vineyard:t,cellar:e,market:n,audio:s,goView:r,places:o}){const a=document.getElementById("ui"),l=()=>It.s,c=(E,O=a)=>O.querySelector(E),u=(E,O)=>`<span class="coin">${Vt.coin}<b>${O==null?Fn(E):pn(E,O)}</b></span>`,h=E=>`<span class="stars q-${E}" title="${K("q."+E)}">${Vt.star.repeat(Qr(E).stars)}</span>`,f=(E,O="grape")=>`<span class="swatch ${O}" style="--c:${Xt.varieties[E][O]}"></span>`,d=E=>E/l().speed,g=E=>K(E<1.95&&E>=.95?"barrel.day1":"barrel.days",{d:pn(E,1)});a.innerHTML=`
    <div class="intro" id="intro">
      <div class="intro-card">
        <div class="orn">${Vt.grape}</div>
        <small class="intro-top">Toscana · MMXXVI</small>
        <h1>${Xt.gameName}</h1>
        <div class="rule"><i></i><span>✦</span><i></i></div>
        <p class="tagline" data-i18n="tagline"></p>
        <button class="btn primary big" id="enter"><span data-i18n="enter"></span>${Vt.arrow}</button>
        <div class="seg" id="introLang"><button data-lang="pt">Português</button><button data-lang="en">English</button></div>
        <p class="note" data-i18n="introNote"></p>
      </div>
    </div>
    <header class="topbar">
      <div class="brand">
        <span class="brand-mark">${Vt.grape}</span>
        <span class="brand-text"><b>${Xt.gameName}</b><small data-i18n="estate"></small></span>
      </div>
      <div class="top-right">
        <button class="chip season" id="seasonChip"><i class="season-dot"></i><span class="clock-text"><b id="seasonName"></b><small id="seasonGrape"></small></span></button>
        <div class="chip clock">
          <span class="dial"><svg viewBox="0 0 36 36"><circle cx="18" cy="18" r="15" class="rbg"/><circle cx="18" cy="18" r="15" class="rfg" id="dialRing" stroke-dasharray="${Br}" transform="rotate(-90 18 18)"/></svg><span id="dialIcon"></span></span>
          <span class="clock-text"><b id="dayLabel"></b><small id="todLabel"></small></span>
        </div>
        <div class="chip stock" id="stockGrapes">${Vt.grape}<b id="grapesKg">0</b><small>kg</small></div>
        <div class="chip stock" id="stockBottles">${Vt.bottle}<b id="bottleCount">0</b></div>
        <div class="chip balance" id="balance">${Vt.coin}<b id="coins">0</b><small>${C_}</small></div>
        <button class="icon-btn" id="menuBtn" aria-label="Menu">${Vt.menu}</button>
      </div>
    </header>
    <div class="hint" id="hint"><span id="hintText"></span></div>
    <nav class="nav" id="nav">
      <button data-view="vineyard">${Vt.vine}<span data-i18n="nav.vineyard"></span></button>
      <button data-view="cellar">${Vt.barrel}<span data-i18n="nav.cellar"></span></button>
      <button data-view="market">${Vt.market}<span data-i18n="nav.market"></span></button>
      <button data-dev="1" class="nav-dev">${Vt.flask}<span data-i18n="nav.dev"></span></button>
    </nav>
    <aside class="panel" id="panel" hidden></aside>
    <div class="menu" id="menu" hidden></div>
    <div class="labels" id="labels" data-view="intro"></div>
    <div class="toasts" id="toasts"></div>
    <button class="photo-exit" id="photoExit">${Vt.camera}<span data-i18n="menu.photoExit"></span></button>
  `;const v=c("#panel"),p=c("#menu"),m=c("#labels"),M=c("#toasts"),w=c("#coins"),y=c("#hint"),W=c("#hintText");let C=0;function I(){C++;for(const E of a.querySelectorAll("[data-i18n]"))E.textContent=K(E.dataset.i18n);for(const E of a.querySelectorAll("#introLang button"))E.classList.toggle("on",E.dataset.lang===du());c("#stockGrapes").title=K("stock.grapes"),c("#stockBottles").title=K("stock.bottles"),c("#balance").title=K("balance"),kt=""}function S(E,O=""){const L=document.createElement("div");for(L.className=`toast ${O}`,L.innerHTML=E,M.appendChild(L);M.children.length>3;)M.firstChild.remove();setTimeout(()=>L.classList.add("out"),3200),setTimeout(()=>L.remove(),3700)}const x={x:0,y:0};function _(E,O,L=""){i.project(E,x);const q=document.createElement("div");q.className=`float ${L}`,q.innerHTML=O,q.style.left=`${x.x}px`,q.style.top=`${x.y}px`,a.appendChild(q),setTimeout(()=>q.remove(),1700)}function T(E){if(E.ok)return!0;if(E.reason==="funds"){S(K("toast.noFunds"),"warn");const O=c("#balance");O.classList.remove("shake"),O.offsetWidth,O.classList.add("shake")}return s.play("error"),!1}const V=A_({ui:a,audio:s,onSold:E=>N(E)});function H(E){const O=r_(E);T(O)&&(s.play("harvest"),s.play("wither"),_(t.anchors[E],`+${O.kg} kg ${h(O.quality)}`,`q-${O.quality}`),S(`${f(O.variety)} ${K("toast.harvest",{q:`<b>${K("q."+O.quality)}</b>`,kg:O.kg,v:K("var."+O.variety)})}`,`q-${O.quality}`))}const tt={close:()=>ot(),buyPlot:()=>{T(cu(D.index))&&(s.play("buy"),S(K("toast.bought")))},plant:()=>{const E=n_(D.index);T(E)&&(s.play("plant"),S(`${f(E.variety)} ${K("toast.planted",{v:K("var."+E.variety)})}`))},harvest:()=>H(D.index),uproot:()=>{i_(D.index),s.play("click")},buyBarrel:()=>{T(uu(D.index))&&(s.play("buy"),S(K("toast.bought")))},fill:E=>{const O=o_(D.index,Number(E.id));T(O)&&(s.play("pour"),S(`${Vt.drop} ${K("toast.filled",{kg:O.kg})}`))},bottle:()=>{const E=D.index,O=l_(E);if(!T(O))return;const L=O.lot;l().dev.reveal==="off"?(s.play("cork"),_(e.anchors[E],u(L.value)),S(`${f(L.variety,"wine")} ${K("toast.bottled",{n:L.bottles===1?K("bottle1"):K("bottles",{n:L.bottles}),v:K("var."+L.variety),p:u(L.value)})}`)):(ot(),V.show(L))},season:E=>{E.id!==l().season&&(u_(E.id),s.play("whoosh"))},dev:E=>{h_(E.key,E.id),s.play("click")},devSpeed:E=>{su(Number(E.id)),C++,s.play("click")},devSkip:E=>{const O=Number(E.id);d_(O),s.play("click"),S(`${Vt.clock} ${K("toast.skip",{d:O===1?K("dev.days1"):K("dev.daysN",{d:O})})}`)},devCoins:()=>{f_(1),s.play("coin")},devRipen:()=>{p_(),s.play("harvest"),S(`${Vt.grape} ${K("toast.ripe")}`)},devPreview:()=>{ot(),V.show({id:-1,variety:$i(),quality:"great",days:7,value:.165,bottles:9},{test:!0})},sellGrapes:E=>{const O=a_(Number(E.id));T(O)&&N(O.value)},sellBottles:E=>{const O=Dh(Number(E.id));T(O)&&N(O.value)},sellAll:()=>{const E=c_();T(E)&&N(E.value)},tab:E=>{D.tab=E.id,Z(),s.play("click")},marketPlot:()=>{const E=l().plots.findIndex(O=>!O.owned);E>=0&&T(cu(E))&&(s.play("buy"),S(K("toast.bought")))},marketBarrel:()=>{const E=l().barrels.findIndex(O=>!O.owned);E>=0&&T(uu(E))&&(s.play("buy"),S(K("toast.bought")))}};function N(E){s.play("coin"),S(`${K("toast.sold",{p:u(E)})}`,"gain")}let D=null,X="";const z=(E,O,L)=>`
    <div class="p-head">
      <span class="p-icon">${L}</span>
      <div class="p-title"><small class="eyebrow">${E}</small><h2>${O}</h2></div>
      <button class="p-close" data-act="close" aria-label="${K("close")}">${Vt.close}</button>
    </div>`;function rt(E){const O=l().plots[E],L=E+1,q=l().coins;if(!O.owned){const dt=$r(),yt=q>=dt;return{sig:`L${dt}${yt}`,build:()=>`${z(K("plot.title",{n:L}),K("plot.forSale"),Vt.lock)}
          <p class="desc">${K("plot.forSaleDesc")}</p>
          <button class="btn primary ${yt?"":"poor"}" data-act="buyPlot">${K("plot.buy",{p:u(dt)})}</button>`}}if(!O.variety){const dt=$i(),yt=Xt.varieties[dt],Pt=q>=yt.vinePrice,k=(yt.yieldKg[0]+yt.yieldKg[1])/2*yt.pricePerKg;return{sig:`E${dt}${Pt}${l().speed}`,build:()=>`${z(K("plot.title",{n:L}),K("plot.empty"),Vt.sprout)}
          <p class="label">${K("vintage."+l().season)} · ${K("plot.seasonGrape")}</p>
          <div class="row static variety">
            ${f(dt)}
            <span class="r-main"><b>${K("var."+dt)}</b><small>${K("kind."+yt.kind)} · ${K("var."+dt+".d")}</small>
              <span class="r-stats"><span>${Vt.clock}${to(d(yt.growTime))}</span><span>${Vt.grape}${yt.yieldKg[0]}–${yt.yieldKg[1]} kg</span></span>
            </span>
          </div>
          <button class="btn primary ${Pt?"":"poor"}" data-act="plant">${Vt.sprout}${K("plot.plantFor",{p:u(yt.vinePrice)})}</button>
          <p class="fine">${K("plot.worth",{p:u(k)})}. ${K("plot.oneHarvest")}</p>`}}const nt=Xt.varieties[O.variety];return Ns(E)?{sig:`R${O.variety}`,build:()=>`${z(K("plot.title",{n:L}),K("var."+O.variety),Vt.grape)}
          <div class="status ripe">${f(O.variety)}<b>${K("plot.ripe")}</b></div>
          <p class="desc">${K("plot.ripeDesc")}</p>
          <button class="btn primary" data-act="harvest">${Vt.grape}${K("plot.harvest")}</button>`}:{sig:`G${O.variety}`,build:()=>`${z(K("plot.title",{n:L}),K("var."+O.variety),Vt.vine)}
        <div class="status">${f(O.variety)}<b>${K("plot.growing")}</b><span class="dotsep">·</span><span data-live="stage"></span></div>
        <div class="bar"><i data-live="bar"></i></div>
        <div class="bar-legend"><span>${Vt.clock}<span data-live="time"></span></span></div>
        <div class="facts">
          <div><small>${K("yield")}</small><b>${nt.yieldKg[0]}–${nt.yieldKg[1]} kg</b></div>
          <div><small>${K("perKg")}</small>${u(nt.pricePerKg,4)}</div>
          <div><small>${K("kind."+nt.kind)}</small>${f(O.variety,"wine")}</div>
        </div>
        <button class="btn ghost small" data-act="uproot">${K("plot.uproot")}</button>`}}function it(E){const Pt=Math.max(6,Math.ceil(E*1.5+1)),k=Vi(Pt),Et=ie=>8+ie/Pt*284,st=ie=>84-(ie-1)/(k-1)*72;let xt="",Nt="";for(let ie=0;ie<=48;ie++){const ye=Pt*ie/48,ee=`${ie?"L":"M"}${Et(ye).toFixed(1)} ${st(Vi(ye)).toFixed(1)}`;xt+=ee,ye<=E&&(Nt+=ee)}const Ut=Et(Math.min(E,Pt)),qt=st(Vi(E));return Nt+=`L${Ut.toFixed(1)} ${qt.toFixed(1)}L${Ut.toFixed(1)} 84L8 84Z`,`<svg viewBox="0 0 300 104">
      <line class="axis" x1="8" y1="84" x2="292" y2="84"/>
      <path class="area" d="${Nt}"/><path class="curve" d="${xt}"/>
      <line class="now" x1="${Ut}" y1="${qt}" x2="${Ut}" y2="84"/>
      <circle class="dot" cx="${Ut}" cy="${qt}" r="4.6"/>
      <text x="8" y="99">0</text><text x="292" y="99" text-anchor="end">${Pt} d</text>
      <text x="292" y="14" text-anchor="end">×${pn(k,2)}</text>
    </svg>`}function at(E){const O=l().barrels[E],L=E+1,q=l().coins;if(!O.owned){const yt=qr(),Pt=q>=yt;return{sig:`L${yt}${Pt}`,build:()=>`${z(K("barrel.title",{n:L}),K("barrel.forSale"),Vt.plus)}
          <p class="desc">${K("barrel.forSaleDesc",{kg:Xt.barrelCapacityKg})}</p>
          <button class="btn primary ${Pt?"":"poor"}" data-act="buyBarrel">${K("barrel.buy",{p:u(yt)})}</button>`}}if(!O.wine){const yt=l().grapes;return{sig:`E${yt.map(Pt=>`${Pt.id}:${Pt.kg}`).join(",")}`,build:()=>`${z(K("barrel.title",{n:L}),K("barrel.empty"),Vt.barrel)}
          ${yt.length?`<p class="label">${K("barrel.chooseLot")}</p>
          <div class="list">${yt.map(Pt=>{const k=Math.min(Pt.kg,Xt.barrelCapacityKg);return`<button class="row" data-act="fill" data-id="${Pt.id}">
              ${f(Pt.variety)}
              <span class="r-main"><b>${K("var."+Pt.variety)}</b><small>${h(Pt.quality)} ${K("q."+Pt.quality)}</small>
                <span class="r-stats"><span>${Vt.grape}${k} kg${Pt.kg>k?` / ${Pt.kg}`:""}</span></span></span>
              <span class="r-side"><small>${K("press")}</small>${u(Ki(Pt,k))}</span>
            </button>`}).join("")}</div>
          <p class="fine">${K("barrel.capacity",{kg:Xt.barrelCapacityKg})}</p>`:`<div class="empty">${Vt.grape}<p>${K("barrel.noGrapes")}</p></div>
             <button class="btn ghost" data-nav="vineyard">${Vt.vine}${K("nav.vineyard")}</button>`}`}}const nt=O.wine,dt=zs(O)>=Xt.wine.minDaysToBottle;return{sig:`A${nt.variety}${nt.startedAt}${dt}`,build:()=>`${z(`${K("barrel.title",{n:L})} · ${K("barrel.aging")}`,K("var."+nt.variety),Vt.barrel)}
        <div class="status">${f(nt.variety,"wine")}${h(nt.quality)}<span>${K("q."+nt.quality)}</span><span class="dotsep">·</span><span>${nt.kg} kg</span></div>
        <div class="value-box">
          <small>${K("barrel.valueNow")}</small>
          <div class="value"><span data-live="value"></span><span class="mult" data-live="mult"></span></div>
          <small class="sub"><span data-live="days"></span> · ${K("barrel.base")} ${Fn(nt.base)}</small>
        </div>
        <div class="chart" data-live="chart"></div>
        <p class="fine">${K("barrel.curve")}</p>
        <div class="proj"><small>${K("barrel.milestones")}</small><div class="proj-row four" data-live="proj"></div></div>
        <button class="btn primary" data-act="bottle" ${dt?"":"disabled"}>${Vt.bottle}${K(dt?"barrel.bottle":"barrel.tooYoung")}</button>`}}function Mt(){const E=l(),O=D.tab||"sell",L=E.coins,q=`<div class="seg tabs"><button data-act="tab" data-id="sell" class="${O==="sell"?"on":""}">${K("market.sell")}</button><button data-act="tab" data-id="buy" class="${O==="buy"?"on":""}">${K("market.buy")}</button></div>`;if(O==="sell"){let Et=0;for(const st of E.grapes)Et+=Ki(st);for(const st of E.bottles)Et+=st.value;return{sig:`S${E.grapes.map(st=>`${st.id}:${st.kg}`).join(",")}|${E.bottles.map(st=>st.id).join(",")}`,build:()=>`${z(K("nav.market"),K("market.title"),Vt.market)}${q}
          ${!E.grapes.length&&!E.bottles.length?`<div class="empty">${Vt.market}<p>${K("market.nothing")}</p></div>`:""}
          ${E.grapes.length?`<p class="label">${K("market.grapes")}</p><div class="list">${E.grapes.map(st=>`
            <div class="row static">${f(st.variety)}
              <span class="r-main"><b>${K("var."+st.variety)}</b><small>${h(st.quality)} ${st.kg} kg</small></span>
              <button class="btn mini" data-act="sellGrapes" data-id="${st.id}">${u(Ki(st))}</button>
            </div>`).join("")}</div>`:""}
          ${E.bottles.length?`<p class="label">${K("market.wines")}</p><div class="list">${E.bottles.map(st=>`
            <div class="row static">${f(st.variety,"wine")}
              <span class="r-main"><b>${K("var."+st.variety)}</b><small>${h(st.quality)} ${st.bottles===1?K("bottle1"):K("bottles",{n:st.bottles})} · ${K("aged",{d:pn(st.days,1)})}</small></span>
              <button class="btn mini" data-act="sellBottles" data-id="${st.id}">${u(st.value)}</button>
            </div>`).join("")}</div>`:""}
          ${Et?`<button class="btn primary" data-act="sellAll">${K("market.sellAll",{p:u(Et)})}</button>`:""}
          <p class="fine">${K("market.note")}</p>`}}const nt=$r(),dt=qr(),yt=Rh(),Pt=Ph(),k=(Et,st,xt,Nt,Ut)=>`
      <div class="row static shop">
        <span class="p-icon">${Et}</span>
        <span class="r-main"><b>${st}</b><small>${xt}</small></span>
        ${Nt==null?`<span class="soldout">${K("market.soldOut")}</span>`:`<button class="btn mini ${L>=Nt?"":"poor"}" data-act="${Ut}">${u(Nt)}</button>`}
      </div>`;return{sig:`B${yt}${Pt}${L>=(nt??0)}${L>=(dt??0)}`,build:()=>`${z(K("nav.market"),K("market.title"),Vt.market)}${q}
        <div class="list">
          ${k(Vt.vine,K("market.plot"),K("market.plotDesc",{a:yt,b:E.plots.length}),nt,"marketPlot")}
          ${k(Vt.barrel,K("market.barrel"),K("market.barrelDesc",{a:Pt,b:E.barrels.length}),dt,"marketBarrel")}
        </div>
        <p class="fine">${K("market.note")}</p>`}}function Bt(){const E=l(),O=E.dev,L=(nt,dt,yt,Pt)=>`<div class="seg wrap">${yt.map(([k,Et])=>`<button data-act="${nt}" ${dt?`data-key="${dt}"`:""} data-id="${k}" class="${String(Pt)===String(k)?"on":""}">${Et}</button>`).join("")}</div>`,q=(nt,dt)=>`<div class="opt"><small>${nt}</small>${dt}</div>`;return{sig:`D${E.season}${E.speed}${JSON.stringify(O)}`,build:()=>`${z(K("dev.eyebrow"),K("dev.title"),Vt.flask)}
        <p class="label">${K("dev.climate")}</p>
        <div class="list">${Sh.map(nt=>{const dt=wh(nt);return`<button class="row season-row ${E.season===nt?"on":""}" data-act="season" data-id="${nt}">
            <i class="season-dot" style="--c:${ks[nt].dot}"></i>
            <span class="r-main"><b>${K("season."+nt)}</b><small>${K("season."+nt+".d")}</small></span>
            <span class="r-side"><small>${K("var."+dt)}</small>${f(dt)}</span>
          </button>`}).join("")}</div>
        <p class="label">${K("dev.bottle")}</p>
        ${q(K("dev.reveal"),L("dev","reveal",[["gold",K("dev.reveal.gold")],["cellar",K("dev.reveal.cellar")],["off",K("dev.reveal.off")]],O.reveal))}
        ${q(K("dev.shape"),L("dev","bottle",[["bordeaux",K("dev.shape.bordeaux")],["burgundy",K("dev.shape.burgundy")]],O.bottle))}
        ${q(K("dev.sound"),L("dev","sound",[["file",K("dev.sound.file")],["synth",K("dev.sound.synth")]],O.sound))}
        <button class="btn primary" data-act="devPreview">${Vt.bottle}${K("dev.preview")}</button>
        <p class="label">${K("dev.time")}</p>
        ${q(K("dev.speed"),L("devSpeed",null,[[1,"1×"],[10,"10×"],[60,"60×"]],E.speed))}
        ${q(K("dev.skip"),L("devSkip",null,[[1,K("dev.skipN",{d:1})],[7,K("dev.skipN",{d:7})],[30,K("dev.skipN",{d:30})]],""))}
        ${q(K("dev.tod"),L("dev","tod",[["auto",K("dev.tod.auto")],["morning",K("dev.tod.morning")],["golden",K("dev.tod.golden")],["night",K("dev.tod.night")]],O.tod))}
        <p class="label">${K("dev.cheats")}</p>
        <div class="seg wrap"><button data-act="devCoins">${K("dev.addSol")}</button><button data-act="devRipen">${K("dev.ripen")}</button></div>
        <p class="fine">${K("dev.note")}</p>`}}function U(){const E=D.type==="plot"?rt(D.index):D.type==="barrel"?at(D.index):D.type==="dev"?Bt():Mt();return E.sig=`${D.type}${D.index??""}${D.tab??""}#${C}#${E.sig}`,E}function Z(){if(!D)return;const E=U();X=E.sig;const O=v.scrollTop;v.innerHTML=E.build(),v.scrollTop=O,Y()}function Y(){if(!D)return;const E=(O,L)=>{const q=v.querySelector(`[data-live="${O}"]`);q&&q.innerHTML!==L&&(q.innerHTML=L)};if(D.type==="plot"){const O=qs(D.index),L=v.querySelector('[data-live="bar"]');L&&O>=0&&(L.style.width=`${(O*100).toFixed(1)}%`,E("time",K("plot.readyIn",{t:to(d(au(D.index)))})),E("stage",K(`stage.${Math.min(4,Math.floor(O*5))}`)))}else if(D.type==="barrel"){const O=l().barrels[D.index];if(O!=null&&O.wine&&v.querySelector('[data-live="value"]')){const L=zs(O);E("value",u(Lh(O))),E("mult",`×${pn(Vi(L),2)}`),E("days",g(L)),E("chart",it(L)),E("proj",Xt.wine.milestones.slice(1).map(([q,nt])=>`<span class="${L>=q?"hit":""}"><small>${K("barrel.dayN",{d:q})}</small>${u(O.wine.base*nt)}</span>`).join(""))}}}function F(E){D=E,X="",v.scrollTop=0,Z(),v.hidden=!1,v.classList.remove("open"),v.offsetWidth,v.classList.add("open"),t.setSelected(E.type==="plot"?E.index:-1),e.setSelected(E.type==="barrel"?E.index:-1),document.body.classList.add("has-panel"),c("#nav [data-dev]").classList.toggle("on",E.type==="dev")}const j=()=>(D==null?void 0:D.type)==="dev"?ot():F({type:"dev"});function ot(){D&&(D=null,v.hidden=!0,t.setSelected(-1),e.setSelected(-1),document.body.classList.remove("has-panel"),c("#nav [data-dev]").classList.remove("on"))}v.addEventListener("click",E=>{var q;const O=E.target.closest("[data-nav]");if(O)return r(O.dataset.nav);const L=E.target.closest("[data-act]");!L||L.disabled||!D||(q=tt[L.dataset.act])==null||q.call(tt,L.dataset)});const ft=(E,O)=>{const L=document.createElement("button");return L.className="wl",L.dataset.kind=E,L.innerHTML='<span class="wl-in"></span>',L.addEventListener("click",O),m.appendChild(L),{el:L,inner:L.firstChild,sig:""}},$=t.anchors.map((E,O)=>ft("plot",()=>{s.play("click"),Ns(O)?H(O):F({type:"plot",index:O})})),G=e.anchors.map((E,O)=>ft("barrel",()=>{s.play("click"),F({type:"barrel",index:O})})),ct=[{...ft("place",()=>r("cellar")),anchor:o.cellar,key:"place.cellar",icon:Vt.barrel},{...ft("place",()=>r("market")),anchor:o.market,key:"place.market",icon:Vt.market}];function P(E,O,L,q){return O+=C,E.sig===O?!1:(E.sig=O,E.inner.className=`wl-in ${L}`,E.inner.innerHTML=q,!0)}const Tt=`<svg class="ring" viewBox="0 0 36 36"><circle cx="18" cy="18" r="15" class="rbg"/><circle cx="18" cy="18" r="15" class="rfg" stroke-dasharray="${Br}" transform="rotate(-90 18 18)"/></svg>`;function pt(){const E=l();$.forEach((L,q)=>{const nt=E.plots[q];if(nt.owned)if(!nt.variety)P(L,"E","act soft",`${Vt.sprout}<span>${K("plot.plant")}</span>`);else if(Ns(q))P(L,"R","act ripe",`${Vt.grape}<span>${K("plot.harvest")}</span>`);else{P(L,`G${nt.variety}`,"grow",`<span class="ringbox" style="--c:${Xt.varieties[nt.variety].grape}">${Tt}${Vt.vine}</span><small></small>`);const dt=qs(q);L.inner.querySelector(".rfg").style.strokeDashoffset=(Br*(1-dt)).toFixed(1),L.inner.lastChild.textContent=to(d(au(q)))}else{const dt=$r(),yt=E.coins>=dt;P(L,`L${dt}${yt}`,`tag ${yt?"can":""}`,`${Vt.lock}<b>${Fn(dt)}</b>`)}});const O=E.barrels.findIndex(L=>!L.owned);G.forEach((L,q)=>{const nt=E.barrels[q];if(nt.owned)if(!nt.wine)P(L,`E${E.grapes.length>0}`,`act soft ${E.grapes.length?"pulse":"dim"}`,E.grapes.length?`${Vt.drop}<span>${K("press")}</span>`:`<span>${K("barrel.emptyTag")}</span>`);else{P(L,`A${nt.wine.variety}`,"aging",`<i style="--c:${Xt.varieties[nt.wine.variety].wine}"></i><b></b><small></small>`);const dt=zs(nt);L.inner.children[1].textContent=`×${pn(Vi(dt),2)}`,L.inner.children[2].textContent=`${pn(dt,1)} d`}else{const dt=qr(),yt=E.coins>=dt;q===O?P(L,`L${dt}${yt}`,`tag ${yt?"can":""}`,`${Vt.plus}<b>${Fn(dt)}</b>`):P(L,"X","ghost",Vt.plus)}});for(const L of ct)P(L,"P","place",`${L.icon}<span>${K(L.key)}</span>`)}function At(){const E=(L,q)=>{i.project(q,x),L.el.style.transform=`translate3d(${x.x.toFixed(1)}px, ${x.y.toFixed(1)}px, 0)`},O=i.view;if(O==="vineyard"){$.forEach((L,q)=>E(L,t.anchors[q]));for(const L of ct)E(L,L.anchor)}else O==="cellar"&&G.forEach((L,q)=>E(L,e.anchors[q]))}let wt=l().coins,kt="",Lt="";const R=[[.05,"dawn"],[.22,"morning"],[.42,"noon"],[.58,"afternoon"],[.69,"golden"],[.76,"dusk"],[.975,"night"],[1.01,"dawn"]];function b(){const E=l(),O=Ch(),L=R.find(([k])=>O<k)[1],q=O>.735&&O<.975,nt=`${ru()}${L}${q}${C}${ou()}|${lu()}|${E.season}`;nt!==Lt&&(Lt=nt,c("#seasonName").textContent=K("season."+E.season),c("#seasonGrape").textContent=K("var."+$i()),c("#seasonChip .season-dot").style.setProperty("--c",ks[E.season].dot),c("#seasonChip").title=K("vintage."+E.season),c("#dayLabel").textContent=K("day",{n:ru()}),c("#todLabel").textContent=K("tod."+L),c("#dialIcon").innerHTML=q?Vt.moon:Vt.sun,c("#grapesKg").textContent=pn(ou()),c("#bottleCount").textContent=pn(lu()),c("#stockGrapes").classList.toggle("zero",!E.grapes.length),c("#stockBottles").classList.toggle("zero",!E.bottles.length)),c("#dialRing").style.strokeDashoffset=(Br*(1-O)).toFixed(1);let dt="hint.buy";const yt=E.plots.some((k,Et)=>Ns(Et)),Pt=e_();yt?dt="hint.harvest":E.plots.some(k=>k.owned&&!k.variety)&&E.coins>=Pt?dt="hint.plant":E.grapes.length?dt="hint.press":E.bottles.length?dt="hint.sellwine":E.barrels.some(k=>k.wine)?dt="hint.aging":E.plots.some(k=>k.variety)&&(dt="hint.wait"),dt!==kt&&(kt=dt,W.textContent=K(dt),y.classList.remove("pop"),y.offsetWidth,y.classList.add("pop"))}function et(){const E=l(),O=(L,q,nt)=>`<div class="seg">${q.map(([dt,yt])=>`<button data-m="${L}" data-v="${dt}" class="${String(nt)===String(dt)?"on":""}">${yt}</button>`).join("")}</div>`;p.innerHTML=`
      <div class="m-row"><span>${Vt.globe}${K("menu.language")}</span>${O("lang",[["pt","PT"],["en","EN"]],du())}</div>
      <div class="m-row"><span>${E.muted?Vt.soundOff:Vt.soundOn}${K("menu.sound")}</span>${O("sound",[["on",K("menu.on")],["off",K("menu.off")]],E.muted?"off":"on")}</div>
      <div class="m-row"><span>${Vt.speed}${K("menu.speed")}<small>${K("menu.speedNote")}</small></span>${O("speed",[[1,"1×"],[10,"10×"],[60,"60×"]],E.speed)}</div>
      <button class="m-btn" data-m="photo">${Vt.camera}${K("menu.photo")}</button>
      <button class="m-btn" data-m="wallet">${Vt.wallet}${E.wallet?`${E.wallet.slice(0,6)}…${E.wallet.slice(-4)}`:K("menu.wallet")}<small>${K("menu.walletNote")}</small></button>
      <button class="m-btn danger" data-m="reset">${Vt.reset}${K("menu.reset")}</button>`}function lt(E){const O=E??p.hidden;O&&et(),p.hidden=!O,c("#menuBtn").classList.toggle("on",O)}c("#menuBtn").addEventListener("click",E=>{E.stopPropagation(),s.play("click"),lt()}),p.addEventListener("click",E=>{const O=E.target.closest("[data-m]");if(!O)return;const{m:L,v:q}=O.dataset;if(s.play("click"),L==="lang")_t(q);else if(L==="sound")l().muted=q==="off",s.setMuted(l().muted),_e();else if(L==="speed")su(Number(q)),C++;else if(L==="photo"){lt(!1),ot(),document.body.classList.add("photo");return}else if(L==="wallet")l().wallet||(l().wallet="0x"+Array.from({length:40},()=>"0123456789abcdef"[Math.floor(Math.random()*16)]).join(""),_e(),S(`${Vt.wallet} ${K("toast.wallet")}`));else if(L==="reset"){confirm(K("menu.resetConfirm"))&&(Qv(),lt(!1),ot(),wt=l().coins);return}et()}),document.addEventListener("pointerdown",E=>{!p.hidden&&!E.target.closest("#menu")&&!E.target.closest("#menuBtn")&&lt(!1)}),c("#photoExit").addEventListener("click",()=>document.body.classList.remove("photo"));function _t(E){Fh(E),l().lang=E,_e(),I(),Z(),pt()}c("#introLang").addEventListener("click",E=>{const O=E.target.closest("[data-lang]");O&&(s.play("click"),_t(O.dataset.lang))}),c("#seasonChip").addEventListener("click",()=>{s.play("click"),j()}),c("#nav").addEventListener("click",E=>{if(E.target.closest("[data-dev]")){s.play("click"),j();return}const O=E.target.closest("[data-view]");O&&(s.play("click"),r(O.dataset.view))}),c("#enter").addEventListener("click",()=>{s.start(),s.play("cork"),l().started=!0,_e(),document.body.classList.add("playing"),r("vineyard")}),c("#stockGrapes").addEventListener("click",()=>r("market")),c("#stockBottles").addEventListener("click",()=>r("market")),c("#balance").addEventListener("click",()=>r("market"));let mt=0;function bt(E){m.dataset.view=E;for(const O of a.querySelectorAll("#nav button"))O.classList.toggle("on",O.dataset.view===E);clearTimeout(mt),E==="market"?mt=setTimeout(()=>F({type:"market",tab:"sell"}),900):D&&!(D.type==="dev"||D.type==="plot"&&E==="vineyard"||D.type==="barrel"&&E==="cellar")&&ot()}window.addEventListener("keydown",E=>{if(V.open){E.key==="Escape"&&V.close();return}if(E.key==="Escape")document.body.classList.contains("photo")?document.body.classList.remove("photo"):p.hidden?ot():lt(!1);else if(document.body.classList.contains("playing")&&!E.ctrlKey&&!E.metaKey){const O={1:"vineyard",2:"cellar",3:"market"}[E.key];O?r(O):E.key==="4"&&j()}});let vt=!0;la((E,O)=>{if(vt=!0,E==="coins"){const L=document.createElement("span");L.className=`delta ${O.delta>0?"up":"down"}`,L.textContent=`${O.delta>0?"+":"−"}${Fn(Math.abs(O.delta))}`,c("#balance").appendChild(L),setTimeout(()=>L.remove(),1300)}else if(E==="season")C++,S(`<i class="season-dot" style="--c:${ks[O.id].dot}"></i> ${K("toast.season",{s:`<b>${K("season."+O.id)}</b>`,v:`<b>${K("var."+$i())}</b>`})}`);else if(E==="inventory")for(const L of["#stockGrapes","#stockBottles"]){const q=c(L);q.classList.remove("bump"),q.offsetWidth,q.classList.add("bump")}});let gt=0;function Dt(E){At();const O=l().coins;if(wt!==O){const q=(O-wt)*Math.min(1,E*9);wt=Math.abs(O-wt)<6e-4?O:wt+q}const L=Fn(wt);w.textContent!==L&&(w.textContent=L),gt+=E,(vt||gt>.2)&&(gt=0,vt=!1,b(),pt(),D&&(U().sig!==X?Z():Y()))}return I(),b(),pt(),{update:Dt,onView:bt,closePanel:ot,toast:S,openPlot:E=>{s.play("click"),F({type:"plot",index:E})},openBarrel:E=>{s.play("click"),F({type:"barrel",index:E})},openMarket:()=>F({type:"market",tab:"sell"}),get hasPanel(){return!!D}}}const P_={wine:"sfx/vinho-servindo.mp3"};function L_(){let i=null,t=null,e=null,n=null,s=null,r=!1,o="vineyard",a=0,l=null,c=null,u=0,h=1,f=1;const d={};async function g(S,x){try{const _=await fetch("./"+x);d[S]=await i.decodeAudioData(await _.arrayBuffer())}catch{}}function v(S,x=1){if(!i||r||!d[S])return!1;const _=i.createBufferSource(),T=i.createGain();return _.buffer=d[S],T.gain.value=x,_.connect(T).connect(t),_.start(),!0}function p(S){const x=i.sampleRate*2,_=i.createBuffer(1,x,i.sampleRate),T=_.getChannelData(0);let V=0;for(let H=0;H<x;H++){const tt=Math.random()*2-1;S?(V=(V+.02*tt)/1.02,T[H]=V*3.5):T[H]=tt}return _}function m(S,x,_="lowpass"){const T=i.createBufferSource();T.buffer=S,T.loop=!0;const V=i.createBiquadFilter();V.type=_,V.frequency.value=x;const H=i.createGain();return H.gain.value=0,T.connect(V).connect(H).connect(t),T.start(),H}function M({type:S="sine",f:x=440,f2:_=null,t:T=.15,g:V=.2,delay:H=0,echo:tt=!1}){if(!i)return;const N=i.currentTime+H,D=i.createOscillator(),X=i.createGain();D.type=S,D.frequency.setValueAtTime(x,N),_&&D.frequency.exponentialRampToValueAtTime(_,N+T),X.gain.setValueAtTime(1e-4,N),X.gain.exponentialRampToValueAtTime(V,N+.008),X.gain.exponentialRampToValueAtTime(1e-4,N+T),D.connect(X).connect(tt?e:t),D.start(N),D.stop(N+T+.03)}function w({t:S=.1,g:x=.2,f:_=2e3,q:T=1,type:V="bandpass",delay:H=0}){if(!i)return;const tt=i.currentTime+H,N=i.createBufferSource();N.buffer=n;const D=i.createBiquadFilter();D.type=V,D.frequency.value=_,D.Q.value=T;const X=i.createGain();X.gain.setValueAtTime(1e-4,tt),X.gain.exponentialRampToValueAtTime(x,tt+.012),X.gain.exponentialRampToValueAtTime(1e-4,tt+S),N.connect(D).connect(X).connect(t),N.start(tt,Math.random()),N.stop(tt+S+.03)}function y(){var _;if(i){(_=i.resume)==null||_.call(i);return}try{i=new(window.AudioContext||window.webkitAudioContext)}catch{return}t=i.createGain(),t.gain.value=r?0:.85,t.connect(i.destination),e=i.createGain();const S=i.createDelay(1),x=i.createGain();S.delayTime.value=.27,x.gain.value=.38,e.connect(t),e.connect(S),S.connect(x).connect(S),S.connect(t),n=p(!1),s=p(!0),l=m(s,420),c=m(s,110),clearInterval(u),u=setInterval(C,260);for(const[T,V]of Object.entries(P_))g(T,V);W()}function W(){if(!i)return;const S=o==="cellar",x=i.currentTime;l.gain.setTargetAtTime(S?.012:Math.min(.2,.085*h),x,.8),c.gain.setTargetAtTime(S?.22:0,x,.8)}function C(){if(!i||r||document.hidden)return;const S=Math.random();if(o==="cellar"){S<.07&&M({f:1100+Math.random()*500,f2:520,t:.09,g:.07,echo:!0}),S>.985&&M({type:"triangle",f:90,f2:70,t:.5,g:.05,echo:!0});return}if(a>.5){if(S<.34){const x=4100+Math.random()*500;for(let _=0;_<5;_++)M({f:x,t:.035,g:.018,delay:_*.055})}S>.992&&M({f:520,f2:410,t:.5,g:.03,delay:.1})}else if(S<.1*f){const x=2300+Math.random()*1700,_=2+Math.floor(Math.random()*4);for(let T=0;T<_;T++)M({f:x*(1+Math.random()*.25),f2:x*(.8+Math.random()*.5),t:.07+Math.random()*.06,g:.028,delay:T*.11})}}const I={click:()=>M({type:"triangle",f:720,f2:520,t:.05,g:.09}),error:()=>{M({type:"square",f:150,f2:110,t:.14,g:.05})},coin:()=>{M({f:1320,t:.3,g:.13}),M({f:1760,t:.42,g:.13,delay:.07}),M({f:2640,t:.3,g:.05,delay:.07})},buy:()=>{M({type:"triangle",f:523,t:.25,g:.12}),M({type:"triangle",f:659,t:.25,g:.12,delay:.08}),M({type:"triangle",f:784,t:.4,g:.12,delay:.16})},plant:()=>{M({f:150,f2:70,t:.16,g:.22}),w({t:.12,g:.07,f:900,q:.7}),M({type:"triangle",f:660,f2:880,t:.18,g:.06,delay:.1})},harvest:()=>{w({t:.14,g:.12,f:3200,q:.8}),w({t:.16,g:.1,f:2400,q:.8,delay:.1}),M({type:"triangle",f:587,t:.2,g:.1,delay:.05}),M({type:"triangle",f:880,t:.32,g:.1,delay:.15})},pour:()=>{for(let S=0;S<6;S++)M({f:260+S*45+Math.random()*30,f2:420+S*50,t:.09,g:.12,delay:S*.1,echo:!0})},cork:()=>{M({f:420,f2:90,t:.11,g:.3,echo:!0}),w({t:.06,g:.16,f:1500,q:.6})},reveal:()=>{[523,659,784,1047,1319].forEach((S,x)=>M({type:"triangle",f:S,t:.9-x*.08,g:.1,delay:x*.07})),M({f:2093,t:1.1,g:.05,delay:.36}),M({f:3136,t:.9,g:.03,delay:.44}),w({t:.5,g:.05,f:6500,q:.4,type:"highpass",delay:.3})},slosh:()=>{const S=520+Math.random()*260;w({t:.16,g:.09,f:S,q:1.6}),w({t:.2,g:.06,f:S*.6,q:1.2,delay:.07}),M({f:300+Math.random()*120,f2:520,t:.07,g:.05,delay:.03})},wither:()=>{for(let S=0;S<4;S++)w({t:.09,g:.05,f:3800-S*500,q:.9,delay:.25+S*.13})},whoosh:()=>w({t:.5,g:.1,f:700,q:.5})};return{start:y,play(S){var x;i&&!r&&((x=I[S])==null||x.call(I))},playSample:v,hasSample:S=>!!d[S],setClimate(S){h=S.wind,f=S.birds,W()},setScene(S){o=S,W()},setNight(S){a=S},setMuted(S){r=S,t&&t.gain.setTargetAtTime(S?0:.85,i.currentTime,.05)}}}Jv();Fh(It.s.lang||M_());const ue=Nv(document.getElementById("scene")),_i=Vv(ue),Oh=__(ue);let Ge=Nh(It.s.season);xh(Ge.relief);let gu=yh(ue.scene,Ge),sl=bh(ue,_i,Ge);const Ks=g_(ue),ua=v_(ue);let ea=Uh(ue,_i,Ge);const Js=L_();Js.setMuted(It.s.muted);function Rl(i,t){Ge=Nh(i),t&&(gu.dispose(),sl.dispose(),ea.dispose(),xh(Ge.relief),gu=yh(ue.scene,Ge),sl=bh(ue,_i,Ge),ea=Uh(ue,_i,Ge)),_i.setClimate(Ge),Oh.setClimate(Ge),Ks.setClimate(Ge),Js.setClimate(Ge),ue.finish.uniforms.uSat.value=Ge.sky.sat}Rl(It.s.season,!1);la((i,t)=>{i==="season"&&Rl(t.id,!0)});const ha=new Jt(new ln(3.2,3.2,3.4),new _n({visible:!1}));ha.position.set(-8.3,1.6,9.8);ha.userData={type:"cellarDoor",view:"vineyard"};ue.scene.add(ha);ue.pickables.push(ha);function na(i){const t=i==="cellar"||ue.view==="cellar";ue.view!==i&&ue.setView(i,{duration:t?2.4:1.9}),Ks.setHover(-1),ua.setHover(-1),qi.onView(i),Js.setScene(i)}const qi=R_({engine:ue,vineyard:Ks,cellar:ua,market:ea,audio:Js,goView:na,places:{cellar:new B(-8.3,3.7,9.8),market:ea.anchor}});ue.onPick=i=>{if(ue.view==="intro")return;if(!i)return qi.closePanel();const t=i.userData;t.type==="plot"?qi.openPlot(t.index):t.type==="barrel"?qi.openBarrel(t.index):t.type==="cellarDoor"?na("cellar"):t.type==="market"&&(ue.view!=="market"?na("market"):qi.openMarket())};ue.onHover=i=>{const t=i==null?void 0:i.userData;Ks.setHover((t==null?void 0:t.type)==="plot"?t.index:-1),ua.setHover((t==null?void 0:t.type)==="barrel"?t.index:-1)};const D_={morning:.2,golden:.635,night:.86};let vu=performance.now(),Kn=0;function Bh(i){const t=(i-vu)/1e3,e=Math.min(.1,t);vu=i,Kn+=e,t_(Math.min(t,3600)),mh.uTime.value=Kn,ue.update(e,Kn);const n=_i.update(window.__tod??D_[It.s.dev.tod]??Ch(),e,Kn,ue.dim);Js.setNight(n.night),Oh.update(Kn,ue.dim,n.night),sl.update(e,Kn),Ks.update(e,Kn),ua.update(e,Kn,ue.dim),qi.update(e),ue.render(),requestAnimationFrame(Bh)}requestAnimationFrame(Bh);setInterval(_e,5e3);document.addEventListener("visibilitychange",()=>{document.hidden&&_e()});window.addEventListener("pagehide",_e);window.__vindima={engine:ue,sky:_i,game:It,goView:na,applyClimate:Rl};
