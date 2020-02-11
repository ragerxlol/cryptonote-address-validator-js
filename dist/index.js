module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=2)}([function(t,e,r){!function(t){"use strict";var e={};function r(t,i,s){if(s!==e)return t instanceof r?t:void 0===t?n:r.parse(t);for(t=t||[];t.length&&!t[t.length-1];)--t.length;this._d=t,this._s=t.length?i||1:0}r._construct=function(t,n){return new r(t,n,e)};r.base=1e7,r.base_log10=7;var n=new r([],0,e);r.ZERO=n;var i=new r([1],1,e);r.ONE=i;var s=new r(i._d,-1,e);r.M_ONE=s,r._0=n,r._1=i,r.small=[n,i,new r([2],1,e),new r([3],1,e),new r([4],1,e),new r([5],1,e),new r([6],1,e),new r([7],1,e),new r([8],1,e),new r([9],1,e),new r([10],1,e),new r([11],1,e),new r([12],1,e),new r([13],1,e),new r([14],1,e),new r([15],1,e),new r([16],1,e),new r([17],1,e),new r([18],1,e),new r([19],1,e),new r([20],1,e),new r([21],1,e),new r([22],1,e),new r([23],1,e),new r([24],1,e),new r([25],1,e),new r([26],1,e),new r([27],1,e),new r([28],1,e),new r([29],1,e),new r([30],1,e),new r([31],1,e),new r([32],1,e),new r([33],1,e),new r([34],1,e),new r([35],1,e),new r([36],1,e)],r.digits="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),r.prototype.toString=function(t){if((t=+t||10)<2||t>36)throw new Error("illegal radix "+t+".");if(0===this._s)return"0";if(10===t){var e=this._s<0?"-":"";e+=this._d[this._d.length-1].toString();for(var n=this._d.length-2;n>=0;n--){for(var i=this._d[n].toString();i.length<7;)i="0"+i;e+=i}return e}var s=r.digits;t=r.small[t];for(var o,a=this._s,u=this.abs(),h=[];0!==u._s;){var l=u.divRem(t);u=l[0],o=l[1],h.push(s[o.valueOf()])}return(a<0?"-":"")+h.reverse().join("")},r.radixRegex=[/^$/,/^$/,/^[01]*$/,/^[012]*$/,/^[0-3]*$/,/^[0-4]*$/,/^[0-5]*$/,/^[0-6]*$/,/^[0-7]*$/,/^[0-8]*$/,/^[0-9]*$/,/^[0-9aA]*$/,/^[0-9abAB]*$/,/^[0-9abcABC]*$/,/^[0-9a-dA-D]*$/,/^[0-9a-eA-E]*$/,/^[0-9a-fA-F]*$/,/^[0-9a-gA-G]*$/,/^[0-9a-hA-H]*$/,/^[0-9a-iA-I]*$/,/^[0-9a-jA-J]*$/,/^[0-9a-kA-K]*$/,/^[0-9a-lA-L]*$/,/^[0-9a-mA-M]*$/,/^[0-9a-nA-N]*$/,/^[0-9a-oA-O]*$/,/^[0-9a-pA-P]*$/,/^[0-9a-qA-Q]*$/,/^[0-9a-rA-R]*$/,/^[0-9a-sA-S]*$/,/^[0-9a-tA-T]*$/,/^[0-9a-uA-U]*$/,/^[0-9a-vA-V]*$/,/^[0-9a-wA-W]*$/,/^[0-9a-xA-X]*$/,/^[0-9a-yA-Y]*$/,/^[0-9a-zA-Z]*$/],r.parse=function(t,i){var s;t=t.toString(),void 0!==i&&10!=+i||(t=t.replace(/\s*[*xX]\s*10\s*(\^|\*\*)\s*/,"e").replace(/^([+\-])?(\d+)\.?(\d*)[eE]([+\-]?\d+)$/,(function(t,e,r,n,i){var s=(i=+i)<0,o=r.length+i;t=(s?r:n).length,i=(i=Math.abs(i))>=t?i-t+s:0;var a=new Array(i+1).join("0"),u=r+n;return(e||"")+(s?u=a+u:u+=a).substr(0,o+=s?a.length:0)+(o<u.length?"."+u.substr(o):"")}))),s=void 0===i?"0[xcb]":16==i?"0x":8==i?"0c":2==i?"0b":"";var o=new RegExp("^([+\\-]?)("+s+")?([0-9a-z]*)(?:\\.\\d*)?$","i").exec(t);if(o){var a=o[1]||"+",u=o[2]||"",h=o[3]||"";if(void 0===i)i="0x"===u||"0X"===u?16:"0c"===u||"0C"===u?8:"0b"===u||"0B"===u?2:10;else if(i<2||i>36)throw new Error("Illegal radix "+i+".");if(i=+i,!r.radixRegex[i].test(h))throw new Error("Bad digit for radix "+i);if(0===(h=h.replace(/^0+/,"").split("")).length)return n;if(a="-"===a?-1:1,10==i){for(var l=[];h.length>=7;)l.push(parseInt(h.splice(h.length-r.base_log10,r.base_log10).join(""),10));return l.push(parseInt(h.join(""),10)),new r(l,a,e)}l=n;i=r.small[i];for(var f=r.small,c=0;c<h.length;c++)l=l.multiply(i).add(f[parseInt(h[c],36)]);return new r(l._d,a,e)}throw new Error("Invalid BigInteger format: "+t)},r.prototype.add=function(t){if(0===this._s)return r(t);if(0===(t=r(t))._s)return this;if(this._s!==t._s)return t=t.negate(),this.subtract(t);for(var n,i=this._d,s=t._d,o=i.length,a=s.length,u=new Array(Math.max(o,a)+1),h=Math.min(o,a),l=0,f=0;f<h;f++)n=i[f]+s[f]+l,u[f]=n%1e7,l=n/1e7|0;for(a>o&&(i=s,o=a),f=h;l&&f<o;f++)n=i[f]+l,u[f]=n%1e7,l=n/1e7|0;for(l&&(u[f]=l);f<o;f++)u[f]=i[f];return new r(u,this._s,e)},r.prototype.negate=function(){return new r(this._d,0|-this._s,e)},r.prototype.abs=function(){return this._s<0?this.negate():this},r.prototype.subtract=function(t){if(0===this._s)return r(t).negate();if(0===(t=r(t))._s)return this;if(this._s!==t._s)return t=t.negate(),this.add(t);var i=this;this._s<0&&(i=new r(t._d,1,e),t=new r(this._d,1,e));var s=i.compareAbs(t);if(0===s)return n;if(s<0){var o=t;t=i,i=o}var a,u,h=i._d,l=t._d,f=h.length,c=l.length,d=new Array(f),p=0;for(a=0;a<c;a++)(u=h[a]-p-l[a])<0?(u+=1e7,p=1):p=0,d[a]=u;for(a=c;a<f;a++){if(!((u=h[a]-p)<0)){d[a++]=u;break}u+=1e7,d[a]=u}for(;a<f;a++)d[a]=h[a];return new r(d,s,e)},function(){function t(t,n){for(var i=t._d,s=i.slice(),o=0;;){var a=(i[o]||0)+1;if(s[o]=a%1e7,a<=1e7-1)break;++o}return new r(s,n,e)}function n(t,n){for(var i=t._d,s=i.slice(),o=0;;){var a=(i[o]||0)-1;if(!(a<0)){s[o]=a;break}s[o]=a+1e7,++o}return new r(s,n,e)}r.prototype.next=function(){switch(this._s){case 0:return i;case-1:return n(this,-1);default:return t(this,1)}},r.prototype.prev=function(){switch(this._s){case 0:return s;case-1:return t(this,-1);default:return n(this,1)}}}(),r.prototype.compareAbs=function(t){if(this===t)return 0;if(!(t instanceof r)){if(!isFinite(t))return isNaN(t)?t:-1;t=r(t)}if(0===this._s)return 0!==t._s?-1:0;if(0===t._s)return 1;var e=this._d.length,n=t._d.length;if(e<n)return-1;if(e>n)return 1;for(var i=this._d,s=t._d,o=e-1;o>=0;o--)if(i[o]!==s[o])return i[o]<s[o]?-1:1;return 0},r.prototype.compare=function(t){return this===t?0:(t=r(t),0===this._s?-t._s:this._s===t._s?this.compareAbs(t)*this._s:this._s)},r.prototype.isUnit=function(){return this===i||this===s||1===this._d.length&&1===this._d[0]},r.prototype.multiply=function(t){if(0===this._s)return n;if(0===(t=r(t))._s)return n;if(this.isUnit())return this._s<0?t.negate():t;if(t.isUnit())return t._s<0?this.negate():this;if(this===t)return this.square();var i,s=this._d.length>=t._d.length,o=(s?this:t)._d,a=(s?t:this)._d,u=o.length,h=a.length,l=u+h,f=new Array(l);for(i=0;i<l;i++)f[i]=0;for(i=0;i<h;i++){for(var c,d=0,p=a[i],g=u+i,w=i;w<g;w++)d=(c=f[w]+p*o[w-i]+d)/1e7|0,f[w]=c%1e7|0;d&&(d=(c=f[w]+d)/1e7|0,f[w]=c%1e7)}return new r(f,this._s*t._s,e)},r.prototype.multiplySingleDigit=function(t){if(0===t||0===this._s)return n;if(1===t)return this;var i;if(1===this._d.length)return new r((i=this._d[0]*t)>=1e7?[i%1e7|0,i/1e7|0]:[i],1,e);if(2===t)return this.add(this);if(this.isUnit())return new r([t],1,e);for(var s=this._d,o=s.length,a=o+1,u=new Array(a),h=0;h<a;h++)u[h]=0;for(var l=0,f=0;f<o;f++)l=(i=t*s[f]+l)/1e7|0,u[f]=i%1e7|0;return l&&(u[f]=l),new r(u,1,e)},r.prototype.square=function(){if(0===this._s)return n;if(this.isUnit())return i;var t,s,o,a,u=this._d,h=u.length,l=new Array(h+h+1);for(a=0;a<h;a++)o=2*a,s=(t=u[a]*u[a])/1e7|0,l[o]=t%1e7,l[o+1]=s;for(a=0;a<h;a++){s=0,o=2*a+1;for(var f=a+1;f<h;f++,o++)s=(t=u[f]*u[a]*2+l[o]+s)/1e7|0,l[o]=t%1e7;var c=s+l[o=h+a];s=c/1e7|0,l[o]=c%1e7,l[o+1]+=s}return new r(l,1,e)},r.prototype.quotient=function(t){return this.divRem(t)[0]},r.prototype.divide=r.prototype.quotient,r.prototype.remainder=function(t){return this.divRem(t)[1]},r.prototype.divRem=function(t){if(0===(t=r(t))._s)throw new Error("Divide by zero");if(0===this._s)return[n,n];if(1===t._d.length)return this.divRemSmall(t._s*t._d[0]);switch(this.compareAbs(t)){case 0:return[this._s===t._s?i:s,n];case-1:return[n,this]}for(var o,a=this._s*t._s,u=t.abs(),h=this._d,l=h.length,f=(t._d.length,[]),c=new r([],0,e);l;)if(c._d.unshift(h[--l]),(c=new r(c._d,1,e)).compareAbs(t)<0)f.push(0);else{if(0===c._s)o=0;else{var d=c._d.length,p=u._d.length,g=1e7*c._d[d-1]+c._d[d-2],w=1e7*u._d[p-1]+u._d[p-2];c._d.length>u._d.length&&(g=1e7*(g+1)),o=Math.ceil(g/w)}do{var _=u.multiplySingleDigit(o);if(_.compareAbs(c)<=0)break;o--}while(o);if(f.push(o),o){var v=c.subtract(_);c._d=v._d.slice()}}return[new r(f.reverse(),a,e),new r(c._d,this._s,e)]},r.prototype.divRemSmall=function(t){var i;if(0===(t=+t))throw new Error("Divide by zero");var s=t<0?-1:1,o=this._s*s;if((t=Math.abs(t))<1||t>=1e7)throw new Error("Argument out of range");if(0===this._s)return[n,n];if(1===t||-1===t)return[1===o?this.abs():new r(this._d,o,e),n];if(1===this._d.length){var a=new r([this._d[0]/t|0],1,e);return i=new r([this._d[0]%t|0],1,e),o<0&&(a=a.negate()),this._s<0&&(i=i.negate()),[a,i]}for(var u,h=this._d.slice(),l=new Array(h.length),f=0,c=0,d=0;h.length;){if((f=1e7*f+h[h.length-1])<t)l[d++]=0,h.pop(),c=1e7*c+f;else c=f-t*(u=0===f?0:f/t|0),l[d++]=u,u?(h.pop(),f=c):h.pop()}return i=new r([c],1,e),this._s<0&&(i=i.negate()),[new r(l.reverse(),o,e),i]},r.prototype.isEven=function(){var t=this._d;return 0===this._s||0===t.length||t[0]%2==0},r.prototype.isOdd=function(){return!this.isEven()},r.prototype.sign=function(){return this._s},r.prototype.isPositive=function(){return this._s>0},r.prototype.isNegative=function(){return this._s<0},r.prototype.isZero=function(){return 0===this._s},r.prototype.exp10=function(t){if(0===(t=+t))return this;if(Math.abs(t)>Number(o))throw new Error("exponent too large in BigInteger.exp10");if(0===this._s)return n;if(t>0){for(var i=new r(this._d.slice(),this._s,e);t>=7;t-=7)i._d.unshift(0);return 0==t?i:(i._s=1,i=i.multiplySingleDigit(Math.pow(10,t)),this._s<0?i.negate():i)}if(-t>=7*this._d.length)return n;i=new r(this._d.slice(),this._s,e);for(t=-t;t>=7;t-=7)i._d.shift();return 0==t?i:i.divRemSmall(Math.pow(10,t))[0]},r.prototype.pow=function(t){if(this.isUnit())return this._s>0?this:r(t).isOdd()?this:this.negate();if(0===(t=r(t))._s)return i;if(t._s<0){if(0===this._s)throw new Error("Divide by zero");return n}if(0===this._s)return n;if(t.isUnit())return this;if(t.compareAbs(o)>0)throw new Error("exponent too large in BigInteger.pow");for(var e=this,s=i,a=r.small[2];t.isPositive();){if(t.isOdd()&&(s=s.multiply(e),t.isUnit()))return s;e=e.square(),t=t.quotient(a)}return s},r.prototype.modPow=function(t,e){for(var n=i,s=this;t.isPositive();)t.isOdd()&&(n=n.multiply(s).remainder(e)),(t=t.quotient(r.small[2])).isPositive()&&(s=s.square().remainder(e));return n},r.prototype.log=function(){switch(this._s){case 0:return-1/0;case-1:return NaN}var t=this._d.length;if(7*t<30)return Math.log(this.valueOf());var n=Math.ceil(30/7),i=this._d.slice(t-n);return Math.log(new r(i,1,e).valueOf())+(t-n)*Math.log(1e7)},r.prototype.valueOf=function(){return parseInt(this.toString(),10)},r.prototype.toJSValue=function(){return parseInt(this.toString(),10)},r.prototype.lowVal=function(){return this._d[0]||0};var o=r(2147483647);r.MAX_EXP=o,function(){function t(t){return function(e){return t.call(r(e))}}function e(t){return function(e,n){return t.call(r(e),r(n))}}function n(t){return function(e,n,i){return t.call(r(e),r(n),r(i))}}!function(){var i,s,o="toJSValue,isEven,isOdd,sign,isZero,isNegative,abs,isUnit,square,negate,isPositive,toString,next,prev,log".split(","),a="compare,remainder,divRem,subtract,add,quotient,divide,multiply,pow,compareAbs".split(","),u=["modPow"];for(i=0;i<o.length;i++)r[s=o[i]]=t(r.prototype[s]);for(i=0;i<a.length;i++)r[s=a[i]]=e(r.prototype[s]);for(i=0;i<u.length;i++)r[s=u[i]]=n(r.prototype[s]);r.exp10=function(t,e){return r(t).exp10(e)}}()}(),t.JSBigInt=r}(e)},function(t,e){t.exports=require("keccak")},function(t,e,r){"use strict";r.r(e);var n=r(0);const i="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",s=[];for(let t=0;t<i.length;t++)s.push(i.charCodeAt(t));const o=[0,2,3,5,6,7,9,10,11],a=s.length,u=new n.JSBigInt(2).pow(64);function h(t,e,r){if(t.length<1||t.length>11)throw new Error("Invalid block length: "+t.length);const i=o.indexOf(t.length);if(i<=0)throw new Error("Invalid block size");let h=new n.JSBigInt(0),l=new n.JSBigInt(1);for(let e=t.length-1;e>=0;e--){const r=s.indexOf(t[e]);if(r<0)throw new Error("Invalid symbol");const n=l.multiply(r).add(h);if(1===n.compare(u))throw new Error("Overflow");h=n,l=l.multiply(a)}if(i<8&&new n.JSBigInt(2).pow(8*i).compare(h)<=0)throw new Error("Overflow 2");return e.set(function(t,e){const r=new Uint8Array(e);if(e<1||e>8)throw new Error("Invalid input length");const i=new n.JSBigInt(2).pow(8);for(let n=e-1;n>=0;n--)r[n]=t.remainder(i).toJSValue(),t=t.divide(i);return r}(h,i),r),e}function l(t){if(0===(t=function(t){const e=new Uint8Array(t.length);for(let r=0;r<t.length;r++)e[r]=t.charCodeAt(r);return e}(t)).length)return"";const e=Math.floor(t.length/11),r=t.length%11,n=o.indexOf(r);if(n<0)throw new Error("Invalid encoded length");let i=new Uint8Array(8*e+n);for(let r=0;r<e;r++)i=h(t.subarray(11*r,11*r+11),i,8*r);return r>0&&(i=h(t.subarray(11*e,11*e+r),i,8*e)),function(t){const e=[];for(let r=0;r<t.length;++r)e.push(("0"+t[r].toString(16)).slice(-2));return e.join("")}(i)}var f=r(1),c=r.n(f);function d(t){t=new n.JSBigInt(t);let e="";for(;t.compare(128)>=0;)e+=("0"+(127&t.lowVal()|128).toString(16)).slice(-2),t=t.divide(new n.JSBigInt(2).pow(7));return e+=("0"+t.toJSValue().toString(16)).slice(-2),e}function p(t){if(Buffer.isBuffer(t))return c()("keccak256").update(t).digest("hex");if("string"==typeof t)return c()("keccak256").update(function(t){if(t.length%2!=0)throw new Error("Hex string has invalid length!");const e=Buffer.alloc(t.length/2);for(let r=0;r<t.length/2;++r)e[r]=parseInt(t.slice(2*r,2*r+2),16);return e}(t)).digest("hex");throw new Error("Input must be Buffer or String")}r.d(e,"validate",(function(){return g}));function g(t,e,r=!1){let n,i,s,o,a,u;try{const r=l(t),h=d(e[0]),f=d(e[1]),c=d(e[2]),g=h.length+64+64+8,w=f.length+64+64+16+8,_=c.length+64+64+8;let v;if(r.startsWith(h)&&r.length===g){n="regular",i=r.slice(0,h.length);const t=r.slice(h.length);s=t.slice(0,64),o=t.slice(64,128),u=t.slice(128,136),v=p(i+s+o).slice(0,8)}else if(r.startsWith(f)&&r.length===w){n="integrated",i=r.slice(0,f.length);const t=r.slice(f.length);s=t.slice(0,64),o=t.slice(64,128),a=t.slice(128,144),u=t.slice(144,152),v=p(i+s+o+a).slice(0,8)}else{if(!r.startsWith(c)||r.length!==_)throw new Error("Invalid prefix");{n="sub",i=r.slice(0,c.length);const t=r.slice(c.length);s=t.slice(0,64),o=t.slice(64,128),u=t.slice(128,136),v=p(i+s+o).slice(0,8)}}if(u!==v)throw new Error("Invalid checksum");return{valid:!0,type:n,prefix:i,spend:s,view:o,pid:a,checksum:u}}catch(t){if(r)throw t;return{valid:!1,type:n,prefix:i,spend:s,view:o,pid:a,checksum:u}}}}]);