(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{169:function(e,t,n){e.exports={explore_body:"LnmHacks_explore_body__3g1jX",gradient:"LnmHacks_gradient__1jkGm",explore:"LnmHacks_explore__3yyaF",imgdiv:"LnmHacks_imgdiv__1bgPi",imgCon:"LnmHacks_imgCon__3u1lj",floating:"LnmHacks_floating__2WcgD",explore_image:"LnmHacks_explore_image__hGmr5",explore_content:"LnmHacks_explore_content__2WEyy",explore_heading:"LnmHacks_explore_heading__17DP1",explore_details:"LnmHacks_explore_details__1MtHN",explore_navbar:"LnmHacks_explore_navbar__19u7v",explore_navoptions:"LnmHacks_explore_navoptions__3RvjL",event_register_button:"LnmHacks_event_register_button__N6QV5",event_register_button1:"LnmHacks_event_register_button1__2Rzy1",explore_description:"LnmHacks_explore_description__2D8El",explore_details1:"LnmHacks_explore_details1__3V9e7",explore_description1:"LnmHacks_explore_description1__3lPdv",explore_contact:"LnmHacks_explore_contact__1Th59",active:"LnmHacks_active__3I4wx",dot:"LnmHacks_dot__3GaiH",none:"LnmHacks_none__2r8VP",notnone:"LnmHacks_notnone__31v-y"}},170:function(e,t,n){e.exports={contact:"Contact_contact__2wD13",name:"Contact_name__1J-v4",number:"Contact_number__1aCdz",outer:"Contact_outer__YcXYO"}},188:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n(9),o=n(1),i=n.n(o),c=n(169),l=n.n(c),s=n(35),u=n(34),d=n(46),m=(n(75),n(21)),p=n(33),f=n(170),h=n.n(f),v=n(120);var _=function(){return i.a.createElement("div",{className:h.a.outer},[{name:"LNM Hacks 5.0",email:"info@lnmhacks.xyz"}].map(function(e){return i.a.createElement("div",{className:h.a.contact},i.a.createElement("div",{className:h.a.nameNumber},i.a.createElement("div",{className:h.a.name},e.name)),i.a.createElement("div",{className:h.a.mail},i.a.createElement("a",{style:{color:"white"},href:"https://mail.google.com/mail/?view=cm&fs=1&to= ".concat(e.email),target:"_blank"},i.a.createElement(v.b,{size:25}))))}))};function y(){y=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(O){l=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var o=t&&t.prototype instanceof m?t:m,i=Object.create(o.prototype),c=new N(r||[]);return a(i,"_invoke",{value:w(e,n,c)}),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(O){return{type:"throw",arg:O}}}e.wrap=s;var d={};function m(){}function p(){}function f(){}var h={};l(h,o,function(){return this});var v=Object.getPrototypeOf,_=v&&v(v(j([])));_&&_!==t&&n.call(_,o)&&(h=_);var g=f.prototype=m.prototype=Object.create(h);function b(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function x(e,t){var r;a(this,"_invoke",{value:function(a,o){function i(){return new t(function(r,i){!function a(r,o,i,c){var l=u(e[r],e,o);if("throw"!==l.type){var s=l.arg,d=s.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then(function(e){a("next",e,i,c)},function(e){a("throw",e,i,c)}):t.resolve(d).then(function(e){s.value=e,i(s)},function(e){return a("throw",e,i,c)})}c(l.arg)}(a,o,r,i)})}return r=r?r.then(i,i):i()}})}function w(e,t,n){var a="suspendedStart";return function(r,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw o;return H()}for(n.method=r,n.arg=o;;){var i=n.delegate;if(i){var c=k(i,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var l=u(e,t,n);if("normal"===l.type){if(a=n.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a="completed",n.method="throw",n.arg=l.arg)}}}function k(e,t){var n=t.method,a=e.iterator[n];if(void 0===a)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,k(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var r=u(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,d;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function j(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,r=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:H}}function H(){return{value:void 0,done:!0}}return p.prototype=f,a(g,"constructor",{value:f,configurable:!0}),a(f,"constructor",{value:p,configurable:!0}),p.displayName=l(f,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,l(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(x.prototype),l(x.prototype,i,function(){return this}),e.AsyncIterator=x,e.async=function(t,n,a,r,o){void 0===o&&(o=Promise);var i=new x(s(t,n,a,r),o);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},b(g),l(g,c,"Generator"),l(g,o,function(){return this}),l(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var a in t)n.push(a);return n.reverse(),function e(){for(;n.length;){var a=n.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=j,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return i.type="throw",i.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),E(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;E(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:j(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}t.default=function(e){e.auth,e.setAuth;var t=Object(o.useState)("about"),n=Object(r.a)(t,2),c=n[0],f=n[1],h=Object(o.useState)("LNMHacks 5.0 will be a 72-hour hackathon with a wide range of tracks in Blockchain field such as DeFi, DAOs, NFTs and Gaming, LNMHacks is expecting the participation of innovators and developers from all over the nation."),v=Object(r.a)(h,2),g=v[0],b=v[1],x=function(e){var t=e.target.id;"contact"===t?(b(i.a.createElement(_,null)),f("contact")):"about"===t?(b("LNMHacks 5.0, a 72-hour hackathon with a wide range of tracks in Blockchain field such as DeFi, DAOs, NFTs and Gaming, LNMHacks is expecting the participation of innovators and developers from all over the nation."),f("about")):"structure"===t?(b("Revealing soon!!"),f("structure")):"timeline"===t?(b("LNM Hacks 5.0 will take place between 27th January, 2023 and 29th January, 2023. "),f("timeline")):"prizes"===t&&(b("Exciting Prizes and Swags to be revealed soon."),f("prizes"))},w=Object(o.useCallback)(function(){var e=Object(a.a)(y().mark(function e(t){return y().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.a)(t);case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),[]),k=Object(o.useCallback)(function(){var e=Object(a.a)(y().mark(function e(t){return y().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),[]),L=Object(o.useState)({x:0,y:0}),E=Object(r.a)(L,2),N=E[0],j=E[1],H={default:{x:N.x-10,y:N.y-12},imgInitial:{opacity:0},imgAnimate:{opacity:1},contentInitial:{opacity:0,y:"-100%"},contentAnimate:{opacity:1,y:0},text:{height:80,width:80,x:N.x-38,y:N.y-40,backgroundColor:"white",mixBlendMode:"difference"},card:{height:90,width:90,x:N.x-43,y:N.y-45,backgroundColor:"white",mixBlendMode:"difference"},card2:{height:46,width:46,x:N.x-21,y:N.y-23,backgroundColor:"white",mixBlendMode:"difference"},btn:{height:40,width:40,x:N.x-18,y:N.y-20,backgroundColor:"white",mixBlendMode:"difference"},handlebefore:{opacity:0},handleafter:{opacity:1}},O=Object(o.useState)("default"),M=Object(r.a)(O,2),C=M[0],z=M[1],S=function(){return z("text")},G=function(){return z("btn")},P=function(){return z("default")};Object(o.useEffect)(function(){var e=function(e){j({x:e.clientX,y:e.clientY})};return window.addEventListener("mousemove",e),function(){window.removeEventListener("mousemove",e)}},[]);var A=window.screen.width>600,F=window.screen.width<425;return i.a.createElement(i.a.Fragment,null,!F&&i.a.createElement(m.motion.div,{className:"cursor",variants:H,animate:C,transition:{x:{delay:0},y:{delay:0},type:"tween",stiffness:1e4,bounce:0}}),i.a.createElement("div",{className:l.a.explore_body},i.a.createElement("div",{className:l.a.explore},i.a.createElement("div",{onMouseEnter:S,onMouseLeave:P,className:"".concat(l.a.explore_heading," ").concat(l.a.none)},"LNM Hacks 5",i.a.createElement("span",{className:l.a.dot},"."),"0"),i.a.createElement(m.motion.div,{variants:H,initial:"imgInitial",animate:"imgAnimate",transition:{duration:1.5,delay:0},className:l.a.imgdiv},i.a.createElement("div",{className:l.a.imgCon},i.a.createElement(d.LazyLoadImage,{className:l.a.explore_image,onMouseEnter:function(){return z("card")},onMouseLeave:P,src:"./images/lnmhacksposter2.png",alt:"LNM hacks Poster",effect:"blur",height:"100%",width:"100%",placeholderSrc:"./Images/dark-bg-preloader2.jpg"}))),i.a.createElement(m.motion.div,{variants:H,initial:"contentInitial",animate:"contentAnimate",transition:{duration:1,delay:0},className:l.a.explore_content},i.a.createElement("div",{onMouseEnter:S,onMouseLeave:P,className:"".concat(l.a.explore_heading," ").concat(l.a.notnone)},"LNM Hacks 5",i.a.createElement("span",{className:l.a.dot},"."),"0"),i.a.createElement("div",{className:l.a.explore_details},i.a.createElement("div",{onMouseEnter:G,onMouseLeave:P,className:l.a.explore_navbar},i.a.createElement("div",{className:"about"===c?"".concat(l.a.explore_navoptions," ").concat(l.a.active):"".concat(l.a.explore_navoptions),style:{border:0},onClick:function(e){return x(e)},id:"about"},"About"),i.a.createElement("div",{className:"structure"===c?"".concat(l.a.explore_navoptions," ").concat(l.a.active):"".concat(l.a.explore_navoptions),onClick:function(e){return x(e)},id:"structure"},"Structure"),i.a.createElement("div",{className:"prizes"===c?"".concat(l.a.explore_navoptions," ").concat(l.a.active):"".concat(l.a.explore_navoptions),onClick:function(e){return x(e)},id:"prizes"},"Prizes"),i.a.createElement("div",{className:"timeline"===c?"".concat(l.a.explore_navoptions," ").concat(l.a.active):"".concat(l.a.explore_navoptions),onClick:function(e){return x(e)},id:"timeline"},"Timeline"),i.a.createElement("div",{className:"contact"===c?"".concat(l.a.explore_navoptions," ").concat(l.a.active):"".concat(l.a.explore_navoptions),onClick:function(e){return x(e)},id:"contact"},"Contacts")),i.a.createElement("div",{className:l.a.explore_description},i.a.createElement("div",{onMouseEnter:G,onMouseLeave:P},g))),i.a.createElement("a",{href:"https://docs.google.com/forms/d/e/1FAIpQLSf22WYYU0_e9R-GnHkv8XN4FBVdeXinJDSjj-li9Q-wjcAEHA/viewform",target:"_blank"},i.a.createElement("a",{href:"https://lnmhacks.xyz/",target:"_blank"},i.a.createElement("button",{className:l.a.event_register_button,onMouseEnter:G,onMouseLeave:P},"Our Website"))))),i.a.createElement(m.motion.div,{onMouseEnter:G,onMouseLeave:P,variants:H,initial:"handlebefore",animate:"handleafter",transition:{duration:"1",delay:"0.5"}},i.a.createElement(p.a,null)),A&&i.a.createElement(s.a,{id:"tsparticles",init:w,loaded:k,options:{particles:{number:{value:40,density:{enable:!0,value_area:500}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:3},image:{src:"",width:100,height:100}},opacity:{value:.7,random:!0,anim:{enable:!0,speed:1,opacity_min:0,sync:!1}},size:{value:3,random:!0,anim:{enable:!0,speed:4,size_min:.3,sync:!1}},line_linked:{enable:!0,distance:64.09640098708464,color:"#ffffff",opacity:.5,width:1},move:{enable:!0,speed:1,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:600}}},interactivity:{detect_on:"window",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!1,mode:"bubble"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:85.20998174071826,size:0,duration:2,opacity:0,speed:3},repulse:{distance:170,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0,fullScreen:{enable:!0,zIndex:0}}})))}}}]);
//# sourceMappingURL=15.2c739218.chunk.js.map