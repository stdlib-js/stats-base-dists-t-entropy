"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=n(function(f,t){
var s=require('@stdlib/math-base-assert-is-nan/dist'),i=require('@stdlib/math-base-special-digamma/dist'),q=require('@stdlib/math-base-special-sqrt/dist'),o=require('@stdlib/math-base-special-beta/dist'),v=require('@stdlib/math-base-special-ln/dist');function c(e){var r,a;return s(e)||e<=0?NaN:(a=e/2,r=(e+1)/2,r*=i((1+e)/2)-i(a),r+=v(q(e)*o(a,.5)),r)}t.exports=c
});var m=u();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
