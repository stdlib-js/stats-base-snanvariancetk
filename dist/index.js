"use strict";var p=function(e,i){return function(){try{return i||e((i={exports:{}}).exports,i),i.exports}catch(u){throw (i=0, u)}};};var x=p(function(z,k){
var q=require('@stdlib/number-float64-base-to-float32/dist');function T(e,i,u,f){var s,n,o,v,r,a,t;if(e<=0)return NaN;if(e===1||f===0)return r=u[0],r===r&&e-i>0?0:NaN;for(f<0?n=(1-e)*f:n=0,s=0,v=0,a=0,t=0;t<e;t++)r=u[n],r===r&&(s=q(s+q(r*r)),v=q(v+r),a+=1),n+=f;return o=a-i,o<=0?NaN:q(q(s-q(q(v/a)*v))/o)}k.exports=T
});var S=p(function(A,y){
var c=require('@stdlib/number-float64-base-to-float32/dist');function _(e,i,u,f,s){var n,o,v,r,a,t,l;if(e<=0)return NaN;if(e===1||f===0)return a=u[s],a===a&&e-i>0?0:NaN;for(o=s,n=0,r=0,t=0,l=0;l<e;l++)a=u[o],a===a&&(n=c(n+c(a*a)),r=c(r+a),t+=1),o+=f;return v=t-i,v<=0?NaN:c(c(n-c(c(r/t)*r))/v)}y.exports=_
});var F=p(function(B,m){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=x(),O=S();E(j,"ndarray",O);m.exports=j
});var b=require("path").join,d=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=F(),N,R=d(b(__dirname,"./native.js"));g(R)?N=h:N=R;module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
