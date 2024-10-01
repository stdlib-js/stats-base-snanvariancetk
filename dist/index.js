"use strict";var p=function(e,i){return function(){return i||e((i={exports:{}}).exports,i),i.exports}};var x=p(function(z,k){
var o=require('@stdlib/number-float64-base-to-float32/dist');function T(e,i,c,u){var f,n,s,v,r,a,t;if(e<=0)return NaN;if(e===1||u===0)return r=c[0],r===r&&e-i>0?0:NaN;for(u<0?n=(1-e)*u:n=0,f=0,v=0,a=0,t=0;t<e;t++)r=c[n],r===r&&(f=o(f+o(r*r)),v=o(v+r),a+=1),n+=u;return s=a-i,s<=0?NaN:o(o(f-o(o(v/a)*v))/s)}k.exports=T
});var S=p(function(A,y){
var q=require('@stdlib/number-float64-base-to-float32/dist');function _(e,i,c,u,f){var n,s,v,r,a,t,l;if(e<=0)return NaN;if(e===1||u===0)return a=c[f],a===a&&e-i>0?0:NaN;for(s=f,n=0,r=0,t=0,l=0;l<e;l++)a=c[s],a===a&&(n=q(n+q(a*a)),r=q(r+a),t+=1),s+=u;return v=t-i,v<=0?NaN:q(q(n-q(q(r/t)*r))/v)}y.exports=_
});var F=p(function(B,m){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=x(),O=S();E(j,"ndarray",O);m.exports=j
});var b=require("path").join,d=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=F(),N,R=d(b(__dirname,"./native.js"));g(R)?N=h:N=R;module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
