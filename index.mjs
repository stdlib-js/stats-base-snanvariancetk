// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.1.1-esm/index.mjs";function t(r,t,n,a){var i,s,o,f,d,u,N;if(r<=0)return NaN;if(1===r||0===a)return(d=n[0])==d&&r-t>0?0:NaN;for(s=a<0?(1-r)*a:0,i=0,f=0,u=0,N=0;N<r;N++)(d=n[s])==d&&(i=e(i+e(d*d)),f=e(f+d),u+=1),s+=a;return(o=u-t)<=0?NaN:e(e(i-e(e(f/u)*f))/o)}function n(r,t,n,a,i){var s,o,f,d,u,N,l;if(r<=0)return NaN;if(1===r||0===a)return(u=n[i])==u&&r-t>0?0:NaN;for(o=i,s=0,d=0,N=0,l=0;l<r;l++)(u=n[o])==u&&(s=e(s+e(u*u)),d=e(d+u),N+=1),o+=a;return(f=N-t)<=0?NaN:e(e(s-e(e(d/N)*d))/f)}r(t,"ndarray",n);export{t as default,n as ndarray};
//# sourceMappingURL=index.mjs.map
