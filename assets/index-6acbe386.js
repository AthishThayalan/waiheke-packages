var Ie=(i,n)=>()=>(n||i((n={exports:{}}).exports,n),n.exports);var Se=Ie((ke,Y)=>{(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))w(d);new MutationObserver(d=>{for(const b of d)if(b.type==="childList")for(const k of b.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&w(k)}).observe(document,{childList:!0,subtree:!0});function p(d){const b={};return d.integrity&&(b.integrity=d.integrity),d.referrerPolicy&&(b.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?b.credentials="include":d.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function w(d){if(d.ep)return;d.ep=!0;const b=p(d);fetch(d.href,b)}})();var te=function(i){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.width=this.canvas.width=i.width,this.height=this.canvas.height=i.height,this.context.drawImage(i,0,0,this.width,this.height)};te.prototype.getPixelCount=function(){return this.width*this.height},te.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)};var J=function(){};if(J.prototype.getColor=function(i,n){return this.getPalette(i,5,n)[0]},J.prototype.getPalette=function(i,n,p){(n===void 0||n<2||n>256)&&(n=10),(p===void 0||p<1)&&(p=10);for(var w,d,b,k,G=new te(i),a=G.getImageData().data,t=G.getPixelCount(),s=[],v=0;v<t;v+=p)d=a[0+(w=4*v)],b=a[w+1],k=a[w+2],a[w+3]>=125&&(d>250&&b>250&&k>250||s.push([d,b,k]));var f=Te.quantize(s,n);return f?f.palette():null},J.prototype.getColorFromUrl=function(i,n,p){var w=document.createElement("img"),d=this;w.addEventListener("load",function(){var b=d.getPalette(w,5,p);n(b[0],i)}),w.src=i},J.prototype.getImageData=function(i,n){var p=new XMLHttpRequest;p.open("GET",i,!0),p.responseType="arraybuffer",p.onload=function(){if(this.status==200){var w=new Uint8Array(this.response);b=w.length;for(var d=new Array(b),b=0;b<w.length;b++)d[b]=String.fromCharCode(w[b]);var k=d.join(""),G=window.btoa(k);n("data:image/png;base64,"+G)}},p.send()},J.prototype.getColorAsync=function(i,n,p){var w=this;this.getImageData(i,function(d){var b=document.createElement("img");b.addEventListener("load",function(){var k=w.getPalette(b,5,p);n(k[0],this)}),b.src=d})},!H)var H={map:function(i,n){var p={};return n?i.map(function(w,d){return p.index=d,n.call(p,w)}):i.slice()},naturalOrder:function(i,n){return i<n?-1:i>n?1:0},sum:function(i,n){var p={};return i.reduce(n?function(w,d,b){return p.index=b,w+n.call(p,d)}:function(w,d){return w+d},0)},max:function(i,n){return Math.max.apply(null,n?H.map(i,n):i)}};var Te=function(){var i=5,n=8-i,p=1e3;function w(a,t,s){return(a<<2*i)+(t<<i)+s}function d(a){var t=[],s=!1;function v(){t.sort(a),s=!0}return{push:function(f){t.push(f),s=!1},peek:function(f){return s||v(),f===void 0&&(f=t.length-1),t[f]},pop:function(){return s||v(),t.pop()},size:function(){return t.length},map:function(f){return t.map(f)},debug:function(){return s||v(),t}}}function b(a,t,s,v,f,l,x){this.r1=a,this.r2=t,this.g1=s,this.g2=v,this.b1=f,this.b2=l,this.histo=x}function k(){this.vboxes=new d(function(a,t){return H.naturalOrder(a.vbox.count()*a.vbox.volume(),t.vbox.count()*t.vbox.volume())})}function G(a,t){if(t.count()){var s=t.r2-t.r1+1,v=t.g2-t.g1+1,f=H.max([s,v,t.b2-t.b1+1]);if(t.count()==1)return[t.copy()];var l,x,T,c,O=0,P=[],L=[];if(f==s)for(l=t.r1;l<=t.r2;l++){for(c=0,x=t.g1;x<=t.g2;x++)for(T=t.b1;T<=t.b2;T++)c+=a[w(l,x,T)]||0;P[l]=O+=c}else if(f==v)for(l=t.g1;l<=t.g2;l++){for(c=0,x=t.r1;x<=t.r2;x++)for(T=t.b1;T<=t.b2;T++)c+=a[w(x,l,T)]||0;P[l]=O+=c}else for(l=t.b1;l<=t.b2;l++){for(c=0,x=t.r1;x<=t.r2;x++)for(T=t.g1;T<=t.g2;T++)c+=a[w(x,T,l)]||0;P[l]=O+=c}return P.forEach(function(A,N){L[N]=O-A}),function(A){var N,D,z,Z,_,j=A+"1",q=A+"2",X=0;for(l=t[j];l<=t[q];l++)if(P[l]>O/2){for(z=t.copy(),Z=t.copy(),_=(N=l-t[j])<=(D=t[q]-l)?Math.min(t[q]-1,~~(l+D/2)):Math.max(t[j],~~(l-1-N/2));!P[_];)_++;for(X=L[_];!X&&P[_-1];)X=L[--_];return z[q]=_,Z[j]=z[q]+1,[z,Z]}}(f==s?"r":f==v?"g":"b")}}return b.prototype={volume:function(a){return this._volume&&!a||(this._volume=(this.r2-this.r1+1)*(this.g2-this.g1+1)*(this.b2-this.b1+1)),this._volume},count:function(a){var t=this.histo;if(!this._count_set||a){var s,v,f,l=0;for(s=this.r1;s<=this.r2;s++)for(v=this.g1;v<=this.g2;v++)for(f=this.b1;f<=this.b2;f++)l+=t[w(s,v,f)]||0;this._count=l,this._count_set=!0}return this._count},copy:function(){return new b(this.r1,this.r2,this.g1,this.g2,this.b1,this.b2,this.histo)},avg:function(a){var t=this.histo;if(!this._avg||a){var s,v,f,l,x=0,T=1<<8-i,c=0,O=0,P=0;for(v=this.r1;v<=this.r2;v++)for(f=this.g1;f<=this.g2;f++)for(l=this.b1;l<=this.b2;l++)x+=s=t[w(v,f,l)]||0,c+=s*(v+.5)*T,O+=s*(f+.5)*T,P+=s*(l+.5)*T;this._avg=x?[~~(c/x),~~(O/x),~~(P/x)]:[~~(T*(this.r1+this.r2+1)/2),~~(T*(this.g1+this.g2+1)/2),~~(T*(this.b1+this.b2+1)/2)]}return this._avg},contains:function(a){var t=a[0]>>n,s=a[1]>>n,v=a[2]>>n;return t>=this.r1&&t<=this.r2&&s>=this.g1&&s<=this.g2&&v>=this.b1&&v<=this.b2}},k.prototype={push:function(a){this.vboxes.push({vbox:a,color:a.avg()})},palette:function(){return this.vboxes.map(function(a){return a.color})},size:function(){return this.vboxes.size()},map:function(a){for(var t=this.vboxes,s=0;s<t.size();s++)if(t.peek(s).vbox.contains(a))return t.peek(s).color;return this.nearest(a)},nearest:function(a){for(var t,s,v,f=this.vboxes,l=0;l<f.size();l++)((s=Math.sqrt(Math.pow(a[0]-f.peek(l).color[0],2)+Math.pow(a[1]-f.peek(l).color[1],2)+Math.pow(a[2]-f.peek(l).color[2],2)))<t||t===void 0)&&(t=s,v=f.peek(l).color);return v},forcebw:function(){var a=this.vboxes;a.sort(function(f,l){return H.naturalOrder(H.sum(f.color),H.sum(l.color))});var t=a[0].color;t[0]<5&&t[1]<5&&t[2]<5&&(a[0].color=[0,0,0]);var s=a.length-1,v=a[s].color;v[0]>251&&v[1]>251&&v[2]>251&&(a[s].color=[255,255,255])}},{quantize:function(a,t){if(!a.length||t<2||t>256)return!1;var s=function(c){var O,P=new Array(1<<3*i);return c.forEach(function(L){O=w(L[0]>>n,L[1]>>n,L[2]>>n),P[O]=(P[O]||0)+1}),P}(a);s.forEach(function(){});var v=function(c,O){var P,L,A,N=1e6,D=0,z=1e6,Z=0,_=1e6,j=0;return c.forEach(function(q){(P=q[0]>>n)<N?N=P:P>D&&(D=P),(L=q[1]>>n)<z?z=L:L>Z&&(Z=L),(A=q[2]>>n)<_?_=A:A>j&&(j=A)}),new b(N,D,z,Z,_,j,O)}(a,s),f=new d(function(c,O){return H.naturalOrder(c.count(),O.count())});function l(c,O){for(var P,L=1,A=0;A<p;)if((P=c.pop()).count()){var N=G(s,P),D=N[0],z=N[1];if(!D||(c.push(D),z&&(c.push(z),L++),L>=O)||A++>p)return}else c.push(P),A++}f.push(v),l(f,.75*t);for(var x=new d(function(c,O){return H.naturalOrder(c.count()*c.volume(),O.count()*O.volume())});f.size();)x.push(f.pop());l(x,t-x.size());for(var T=new k;x.size();)T.push(x.pop());return T}}}(),Y={};(function i(n,p,w,d){var b=!!(n.Worker&&n.Blob&&n.Promise&&n.OffscreenCanvas&&n.OffscreenCanvasRenderingContext2D&&n.HTMLCanvasElement&&n.HTMLCanvasElement.prototype.transferControlToOffscreen&&n.URL&&n.URL.createObjectURL),k=typeof Path2D=="function"&&typeof DOMMatrix=="function",G=function(){if(!n.OffscreenCanvas)return!1;var r=new OffscreenCanvas(1,1),e=r.getContext("2d");e.fillRect(0,0,1,1);var o=r.transferToImageBitmap();try{e.createPattern(o,"no-repeat")}catch{return!1}return!0}();function a(){}function t(r){var e=p.exports.Promise,o=e!==void 0?e:n.Promise;return typeof o=="function"?new o(r):(r(a,a),null)}var s=function(r,e){return{transform:function(o){if(r)return o;if(e.has(o))return e.get(o);var h=new OffscreenCanvas(o.width,o.height),g=h.getContext("2d");return g.drawImage(o,0,0),e.set(o,h),h},clear:function(){e.clear()}}}(G,new Map),v=function(){var r=Math.floor(16.666666666666668),e,o,h={},g=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(e=function(m){var y=Math.random();return h[y]=requestAnimationFrame(function u(M){g===M||g+r-1<M?(g=M,delete h[y],m()):h[y]=requestAnimationFrame(u)}),y},o=function(m){h[m]&&cancelAnimationFrame(h[m])}):(e=function(m){return setTimeout(m,r)},o=function(m){return clearTimeout(m)}),{frame:e,cancel:o}}(),f=function(){var r,e,o={};function h(g){function m(y,u){g.postMessage({options:y||{},callback:u})}g.init=function(u){var M=u.transferControlToOffscreen();g.postMessage({canvas:M},[M])},g.fire=function(u,M,E){if(e)return m(u,null),e;var F=Math.random().toString(36).slice(2);return e=t(function(I){function S(R){R.data.callback===F&&(delete o[F],g.removeEventListener("message",S),e=null,s.clear(),E(),I())}g.addEventListener("message",S),m(u,F),o[F]=S.bind(null,{data:{callback:F}})}),e},g.reset=function(){g.postMessage({reset:!0});for(var u in o)o[u](),delete o[u]}}return function(){if(r)return r;if(!w&&b){var g=["var CONFETTI, SIZE = {}, module = {};","("+i.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{r=new Worker(URL.createObjectURL(new Blob([g])))}catch(m){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",m),null}h(r)}return r}}(),l={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function x(r,e){return e?e(r):r}function T(r){return r!=null}function c(r,e,o){return x(r&&T(r[e])?r[e]:l[e],o)}function O(r){return r<0?0:Math.floor(r)}function P(r,e){return Math.floor(Math.random()*(e-r))+r}function L(r){return parseInt(r,16)}function A(r){return r.map(N)}function N(r){var e=String(r).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:L(e.substring(0,2)),g:L(e.substring(2,4)),b:L(e.substring(4,6))}}function D(r){var e=c(r,"origin",Object);return e.x=c(e,"x",Number),e.y=c(e,"y",Number),e}function z(r){r.width=document.documentElement.clientWidth,r.height=document.documentElement.clientHeight}function Z(r){var e=r.getBoundingClientRect();r.width=e.width,r.height=e.height}function _(r){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=r,e}function j(r,e,o,h,g,m,y,u,M){r.save(),r.translate(e,o),r.rotate(m),r.scale(h,g),r.arc(0,0,1,y,u,M),r.restore()}function q(r){var e=r.angle*(Math.PI/180),o=r.spread*(Math.PI/180);return{x:r.x,y:r.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:r.startVelocity*.5+Math.random()*r.startVelocity,angle2D:-e+(.5*o-Math.random()*o),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:r.color,shape:r.shape,tick:0,totalTicks:r.ticks,decay:r.decay,drift:r.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:r.gravity*3,ovalScalar:.6,scalar:r.scalar,flat:r.flat}}function X(r,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.velocity*=e.decay,e.flat?(e.wobble=0,e.wobbleX=e.x+10*e.scalar,e.wobbleY=e.y+10*e.scalar,e.tiltSin=0,e.tiltCos=0,e.random=1):(e.wobble+=e.wobbleSpeed,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble),e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2);var o=e.tick++/e.totalTicks,h=e.x+e.random*e.tiltCos,g=e.y+e.random*e.tiltSin,m=e.wobbleX+e.random*e.tiltCos,y=e.wobbleY+e.random*e.tiltSin;if(r.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-o)+")",r.beginPath(),k&&e.shape.type==="path"&&typeof e.shape.path=="string"&&Array.isArray(e.shape.matrix))r.fill(ge(e.shape.path,e.shape.matrix,e.x,e.y,Math.abs(m-h)*.1,Math.abs(y-g)*.1,Math.PI/10*e.wobble));else if(e.shape.type==="bitmap"){var u=Math.PI/10*e.wobble,M=Math.abs(m-h)*.1,E=Math.abs(y-g)*.1,F=e.shape.bitmap.width*e.scalar,I=e.shape.bitmap.height*e.scalar,S=new DOMMatrix([Math.cos(u)*M,Math.sin(u)*M,-Math.sin(u)*E,Math.cos(u)*E,e.x,e.y]);S.multiplySelf(new DOMMatrix(e.shape.matrix));var R=r.createPattern(s.transform(e.shape.bitmap),"no-repeat");R.setTransform(S),r.globalAlpha=1-o,r.fillStyle=R,r.fillRect(e.x-F/2,e.y-I/2,F,I),r.globalAlpha=1}else if(e.shape==="circle")r.ellipse?r.ellipse(e.x,e.y,Math.abs(m-h)*e.ovalScalar,Math.abs(y-g)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):j(r,e.x,e.y,Math.abs(m-h)*e.ovalScalar,Math.abs(y-g)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if(e.shape==="star")for(var C=Math.PI/2*3,B=4*e.scalar,U=8*e.scalar,W=e.x,$=e.y,K=5,V=Math.PI/K;K--;)W=e.x+Math.cos(C)*U,$=e.y+Math.sin(C)*U,r.lineTo(W,$),C+=V,W=e.x+Math.cos(C)*B,$=e.y+Math.sin(C)*B,r.lineTo(W,$),C+=V;else r.moveTo(Math.floor(e.x),Math.floor(e.y)),r.lineTo(Math.floor(e.wobbleX),Math.floor(g)),r.lineTo(Math.floor(m),Math.floor(y)),r.lineTo(Math.floor(h),Math.floor(e.wobbleY));return r.closePath(),r.fill(),e.tick<e.totalTicks}function ve(r,e,o,h,g){var m=e.slice(),y=r.getContext("2d"),u,M,E=t(function(F){function I(){u=M=null,y.clearRect(0,0,h.width,h.height),s.clear(),g(),F()}function S(){w&&!(h.width===d.width&&h.height===d.height)&&(h.width=r.width=d.width,h.height=r.height=d.height),!h.width&&!h.height&&(o(r),h.width=r.width,h.height=r.height),y.clearRect(0,0,h.width,h.height),m=m.filter(function(R){return X(y,R)}),m.length?u=v.frame(S):I()}u=v.frame(S),M=I});return{addFettis:function(F){return m=m.concat(F),E},canvas:r,promise:E,reset:function(){u&&v.cancel(u),M&&M()}}}function ae(r,e){var o=!r,h=!!c(e||{},"resize"),g=!1,m=c(e,"disableForReducedMotion",Boolean),y=b&&!!c(e||{},"useWorker"),u=y?f():null,M=o?z:Z,E=r&&u?!!r.__confetti_initialized:!1,F=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,I;function S(C,B,U){for(var W=c(C,"particleCount",O),$=c(C,"angle",Number),K=c(C,"spread",Number),V=c(C,"startVelocity",Number),be=c(C,"decay",Number),ye=c(C,"gravity",Number),Me=c(C,"drift",Number),ie=c(C,"colors",A),we=c(C,"ticks",Number),se=c(C,"shapes"),Ce=c(C,"scalar"),xe=!!c(C,"flat"),le=D(C),ce=W,re=[],Ee=r.width*le.x,Pe=r.height*le.y;ce--;)re.push(q({x:Ee,y:Pe,angle:$,spread:K,startVelocity:V,color:ie[ce%ie.length],shape:se[P(0,se.length)],ticks:we,decay:be,gravity:ye,drift:Me,scalar:Ce,flat:xe}));return I?I.addFettis(re):(I=ve(r,re,M,B,U),I.promise)}function R(C){var B=m||c(C,"disableForReducedMotion",Boolean),U=c(C,"zIndex",Number);if(B&&F)return t(function(V){V()});o&&I?r=I.canvas:o&&!r&&(r=_(U),document.body.appendChild(r)),h&&!E&&M(r);var W={width:r.width,height:r.height};u&&!E&&u.init(r),E=!0,u&&(r.__confetti_initialized=!0);function $(){if(u){var V={getBoundingClientRect:function(){if(!o)return r.getBoundingClientRect()}};M(V),u.postMessage({resize:{width:V.width,height:V.height}});return}W.width=W.height=null}function K(){I=null,h&&(g=!1,n.removeEventListener("resize",$)),o&&r&&(document.body.removeChild(r),r=null,E=!1)}return h&&!g&&(g=!0,n.addEventListener("resize",$,!1)),u?u.fire(C,W,K):S(C,W,K)}return R.reset=function(){u&&u.reset(),I&&I.reset()},R}var ee;function oe(){return ee||(ee=ae(null,{useWorker:!0,resize:!0})),ee}function ge(r,e,o,h,g,m,y){var u=new Path2D(r),M=new Path2D;M.addPath(u,new DOMMatrix(e));var E=new Path2D;return E.addPath(M,new DOMMatrix([Math.cos(y)*g,Math.sin(y)*g,-Math.sin(y)*m,Math.cos(y)*m,o,h])),E}function me(r){if(!k)throw new Error("path confetti are not supported in this browser");var e,o;typeof r=="string"?e=r:(e=r.path,o=r.matrix);var h=new Path2D(e),g=document.createElement("canvas"),m=g.getContext("2d");if(!o){for(var y=1e3,u=y,M=y,E=0,F=0,I,S,R=0;R<y;R+=2)for(var C=0;C<y;C+=2)m.isPointInPath(h,R,C,"nonzero")&&(u=Math.min(u,R),M=Math.min(M,C),E=Math.max(E,R),F=Math.max(F,C));I=E-u,S=F-M;var B=10,U=Math.min(B/I,B/S);o=[U,0,0,U,-Math.round(I/2+u)*U,-Math.round(S/2+M)*U]}return{type:"path",path:e,matrix:o}}function pe(r){var e,o=1,h="#000000",g='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof r=="string"?e=r:(e=r.text,o="scalar"in r?r.scalar:o,g="fontFamily"in r?r.fontFamily:g,h="color"in r?r.color:h);var m=10*o,y=""+m+"px "+g,u=new OffscreenCanvas(m,m),M=u.getContext("2d");M.font=y;var E=M.measureText(e),F=Math.ceil(E.actualBoundingBoxRight+E.actualBoundingBoxLeft),I=Math.ceil(E.actualBoundingBoxAscent+E.actualBoundingBoxDescent),S=2,R=E.actualBoundingBoxLeft+S,C=E.actualBoundingBoxAscent+S;F+=S+S,I+=S+S,u=new OffscreenCanvas(F,I),M=u.getContext("2d"),M.font=y,M.fillStyle=h,M.fillText(e,R,C);var B=1/o;return{type:"bitmap",bitmap:u.transferToImageBitmap(),matrix:[B,0,0,B,-F*B/2,-I*B/2]}}p.exports=function(){return oe().apply(this,arguments)},p.exports.reset=function(){oe().reset()},p.exports.create=ae,p.exports.shapeFromPath=me,p.exports.shapeFromText=pe})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),Y,!1);const he=Y.exports;Y.exports.create;console.log("Welcome to NPM!");const fe=document.querySelector("button"),Q=document.querySelector("img"),ne=document.querySelector("input");if(!Q||!ne)throw new Error("Error.");if(!fe)throw new Error("Error.");const Oe=()=>{const i=Math.floor(Math.random()*1e3+100),n=Math.floor(Math.random()*1e3+100);he({particleCount:i,spread:n})};fe.addEventListener("click",Oe);const de=new J,ue=()=>{const i=de.getColor(Q);console.log(i),document.body.style.backgroundColor=`rgb(${i[0]},${i[1]},${i[2]})`};Q.complete?ue():Q.addEventListener("load",ue);const Fe=()=>{Q.src=ne.value;let i=de.getPalette(Q,8),n=[];for(let p=0;p<i.length;p++)n.push(`rgb(${i[p][0]},${i[p][1]},${i[p][2]})`);console.log(n),he({colors:n})};ne.addEventListener("input",Fe)});export default Se();
