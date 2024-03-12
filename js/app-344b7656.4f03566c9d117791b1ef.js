/*! For license information please see app-344b7656.4f03566c9d117791b1ef.js.LICENSE.txt */
"use strict";(self.webpackChunkresume=self.webpackChunkresume||[]).push([[952],{2232:function(e,t,n){function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,r(i.key),i)}}function r(e){var t=function(e,t){if("object"!=i(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,"string");if("object"!=i(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==i(t)?t:String(t)}function l(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}function s(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,u(e,t,"set"),n),n}function o(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,u(e,t,"get"))}function u(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}n.d(t,{c:function(){return g}}),n(3475),n(5016),n(6968),n(1668),n(4248),n(1956),n(9120),n(7056),n(9456),n(9640),n(8928),n(9536),n(1708),n(9632),n(2384),n(4112),n(5792),n(9708);var c=new WeakMap,h=new WeakMap,v=new WeakMap,f=new WeakMap,m=new WeakMap,p=new WeakMap,y=new WeakMap,d=new WeakMap,b=new WeakMap,w=new WeakMap,k=new WeakMap,T=new WeakMap,g=function(){function e(t){var n=t.element;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,c,{writable:!0,value:800}),l(this,h,{writable:!0,value:120}),l(this,v,{writable:!0,value:null}),l(this,f,{writable:!0,value:200}),l(this,m,{writable:!0,value:3}),l(this,p,{writable:!0,value:5}),l(this,y,{writable:!0,value:void 0}),l(this,d,{writable:!0,value:1}),l(this,b,{writable:!0,value:100}),l(this,w,{writable:!0,value:.7*o(this,c)}),l(this,k,{writable:!0,value:[]}),l(this,T,{writable:!0,value:void 0}),s(this,T,n),o(this,T).insertAdjacentHTML("beforeend",'\n                <div id="canvasSearch">\n                    <ul>\n                        <li>\n                            <div class="input-group mb-3">\n                                <label class="form-label">\n                                    개수(1 ~ 10) (<span id="lineNumLabel">'.concat(o(this,p),'</span>)\n                                </label>\n                                <input type="range" class="form-range" id="lineNum" min="1" max="10" step="1" value="').concat(o(this,p),'">\n                            </div>\n                        </li>\n                        <li>\n                            <div class="input-group mb-3">\n                                <label class="form-label">\n                                    속도(1초 ~ 10초) (<span id="speedTimeLabel">').concat(o(this,d),'</span>)\n                                </label>\n                                <input type="range" class="form-range" id="speedTime" min="1" max="10" step="1" value="').concat(o(this,d),'">\n                            </div>\n                        </li>   \n                        <li>\n                            <div class="input-group mb-3">\n                                <label class="form-label">\n                                    선 굵기(1 ~ 10) (<span id="lineTickLabel">').concat(o(this,m),'</span>)\n                                </label>\n                                <input type="range" class="form-range" id="lineTick" min="1" max="10" step="1" value="').concat(o(this,m),'">\n                            </div>\n                        </li>                                              \n                    </ul>\n                </div>\n                <div id="canvasParent">\n                    <canvas></canvas>\n                </div>\n           ')),s(this,v,o(this,T).querySelector("canvas").getContext("2d")),this.initEventBind(),this.generateLine(),this.removeLine(),this.initRequestAnimationFrame()}var t,n;return t=e,(n=[{key:"initEventBind",value:function(){var e=this;o(this,T).querySelector("#lineNum").addEventListener("input",(function(t){s(e,p,t.target.value),o(e,T).querySelector("#lineNumLabel").innerText=o(e,p),e.resize()})),o(this,T).querySelector("#speedTime").addEventListener("input",(function(t){s(e,d,t.target.value),o(e,T).querySelector("#speedTimeLabel").innerText=o(e,d),e.resize()})),o(this,T).querySelector("#lineTick").addEventListener("input",(function(t){s(e,m,t.target.value),o(e,T).querySelector("#lineTickLabel").innerText=o(e,m),e.resize()}))}},{key:"clear",value:function(){o(this,v).clearRect(0,0,o(this,c),o(this,h)),s(this,k,[])}},{key:"resize",value:function(){o(this,T).style.width="".concat(1e3,"px"),s(this,c,1e3),s(this,w,.85*o(this,c)),s(this,y,(o(this,c)+o(this,f))/(1e3*o(this,d))),o(this,v).canvas.setAttribute("width",o(this,c)),o(this,v).canvas.setAttribute("height",o(this,h)),this.clear()}},{key:"intervalFunc",value:function(e){this.generateLine(),this.removeLine(e)}},{key:"generateLine",value:function(){for(var e=Date.now(),t=0;t<o(this,p);t++)o(this,k).push({generateTime:e,startTime:null,x:-o(this,f),y:this.randomIntFromInterval(o(this,m),o(this,h)-o(this,m))})}},{key:"removeLine",value:function(e){var t=this;s(this,k,o(this,k).filter((function(t){return e-t.generateTime<=12e3}))),s(this,k,o(this,k).filter((function(e){return e.x<o(t,c)})))}},{key:"initRequestAnimationFrame",value:function(){var e=this,t=Date.now(),n=null;o(this,v).lineWidth=o(this,m),o(this,v).strokeStyle="#000",requestAnimationFrame((function i(){n=Date.now()-t,o(e,v).clearRect(0,0,o(e,c),o(e,h));for(var a=0;a<o(e,k).length;a++){if(0===a)null===o(e,k)[a].startTime&&(o(e,k)[a].startTime=Date.now());else{if(null===o(e,k)[a-1].startTime)break;if(null===o(e,k)[a].startTime){if(!(o(e,k)[a-1].startTime+o(e,b)<=Date.now()))break;o(e,k)[a].startTime=Date.now()}}if(!(o(e,k)[a].x>=o(e,c))){var r=null;if(o(e,v).beginPath(),o(e,v).lineWidth=o(e,m),o(e,v).lineCap="round",o(e,k)[a].x<o(e,w)&&o(e,k)[a].x+o(e,f)>=o(e,w)){o(e,v).moveTo(o(e,k)[a].x,o(e,k)[a].y),o(e,v).lineTo(o(e,w),o(e,k)[a].y);var l=(o(e,h)/2-o(e,k)[a].y)/(o(e,c)-o(e,w)),s=o(e,k)[a].y-l*o(e,w),u=o(e,w)+(o(e,f)-(o(e,w)-o(e,k)[a].x)),p=l*u+s;o(e,v).moveTo(o(e,w),o(e,k)[a].y),o(e,v).lineTo(u,p),r=o(e,v).createLinearGradient(o(e,k)[a].x,o(e,k)[a].y,u,p)}else if(o(e,k)[a].x>o(e,w)){var d=(o(e,h)/2-o(e,k)[a].y)/(o(e,c)-o(e,w)),T=o(e,k)[a].y-d*o(e,w),g=o(e,w)+(o(e,f)-(o(e,w)-o(e,k)[a].x));o(e,v).moveTo(o(e,k)[a].x,d*o(e,k)[a].x+T),o(e,v).lineTo(g,d*g+T),r=o(e,v).createLinearGradient(o(e,k)[a].x,d*o(e,k)[a].x+T,g,d*g+T)}else o(e,v).moveTo(o(e,k)[a].x,o(e,k)[a].y),o(e,v).lineTo(o(e,k)[a].x+o(e,f),o(e,k)[a].y),r=o(e,v).createLinearGradient(o(e,k)[a].x,o(e,k)[a].y,o(e,k)[a].x+o(e,f),o(e,k)[a].y);o(e,v).save(),r.addColorStop(0,"#292e47"),r.addColorStop(1,"#fff"),o(e,v).strokeStyle=r,o(e,v).stroke(),o(e,v).restore(),o(e,k)[a].x+=o(e,y)*n}}t=Date.now(),requestAnimationFrame(i)}))}},{key:"randomIntFromInterval",value:function(e,t){return Math.floor(Math.random()*(t-e+1)+e)}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}()}}]);