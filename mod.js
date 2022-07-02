// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return r({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,u=n.__defineSetter__,l=n.__lookupGetter__,i=n.__lookupSetter__;var c=e,f=function(r,t,e){var c,f,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((f="value"in e)&&(l.call(r,t)||i.call(r,t)?(c=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=c):r[t]=e.value),y="get"in e,p="set"in e,f&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(r,t,e.get),p&&u&&u.call(r,t,e.set),r},y=t()?c:f;var p=function(r,t,e){y(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})},_="function"==typeof Math.fround?Math.fround:null;var b=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var v=function(){return b&&"symbol"==typeof Symbol.toStringTag},d=Object.prototype.toString,m=d;var s=function(r){return m.call(r)},N=Object.prototype.hasOwnProperty;var g=function(r,t){return null!=r&&N.call(r,t)},j="function"==typeof Symbol?Symbol.toStringTag:"",w=g,S=j,h=d;var A=s,F=function(r){var t,e,n;if(null==r)return h.call(r);e=r[S],t=w(r,S);try{r[S]=void 0}catch(t){return h.call(r)}return n=h.call(r),t?r[S]=e:delete r[S],n},O=v()?F:A,P="function"==typeof Float32Array;var T=function(r){return P&&r instanceof Float32Array||"[object Float32Array]"===O(r)},E=Number.POSITIVE_INFINITY,I="function"==typeof Float32Array?Float32Array:null,V=T,k=E,x=I;var G="function"==typeof Float32Array?Float32Array:void 0,M=function(){throw new Error("not implemented")},C=new(function(){var r,t;if("function"!=typeof x)return!1;try{t=new x([1,3.14,-3.14,5e40]),r=V(t)&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===k}catch(t){r=!1}return r}()?G:M)(1);var Y=_;"function"!=typeof Y&&(Y=function(r){return C[0]=r,C[0]});var q=Y;function z(r,t,e,n){var o,a,u,l,i,c,f;if(r<=0)return NaN;if(1===r||0===n)return(i=e[0])==i&&r-t>0?0:NaN;for(a=n<0?(1-r)*n:0,o=0,l=0,c=0,f=0;f<r;f++)(i=e[a])==i&&(o=q(o+q(i*i)),l=q(l+i),c+=1),a+=n;return(u=c-t)<=0?NaN:q(q(o-q(q(l/c)*l))/u)}function B(r,t,e,n,o){var a,u,l,i,c,f,y;if(r<=0)return NaN;if(1===r||0===n)return(c=e[o])==c&&r-t>0?0:NaN;for(u=o,a=0,i=0,f=0,y=0;y<r;y++)(c=e[u])==c&&(a=q(a+q(c*c)),i=q(i+c),f+=1),u+=n;return(l=f-t)<=0?NaN:q(q(a-q(q(i/f)*i))/l)}p(z,"ndarray",B);export{z as default,B as ndarray};
//# sourceMappingURL=mod.js.map
