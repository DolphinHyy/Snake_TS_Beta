!function(){"use strict";var e={820:function(e,t,n){n.d(t,{Z:function(){return a}});var o=n(81),i=n.n(o),s=n(645),r=n.n(s)()(i());r.push([e.id,'* {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\nbody {\n  font: bold 20px "Courier";\n}\n#main {\n  width: 360px;\n  height: 420px;\n  background-color: #b7d4a8;\n  margin: 100px auto;\n  border: 10px solid #000;\n  border-radius: 40px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n#stage {\n  width: 304px;\n  height: 304px;\n  border: 2px solid black;\n  position: relative;\n}\n#stage #snake > div {\n  width: 10px;\n  height: 10px;\n  background-color: #000;\n  border: 1px solid #b7d4a8;\n  position: absolute;\n}\n#stage #food {\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  top: 50px;\n  left: 50px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n#stage #food div {\n  -webkit-box-flex: 40%;\n      -ms-flex: 40%;\n          flex: 40%;\n  height: 4px;\n  background-color: #000;\n  border-radius: 2px;\n  -webkit-transform: rotate(45deg);\n      -ms-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n#score-panel {\n  width: 300px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n',""]);const a=r},645:function(e){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,i,s){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(o)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(r[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&r[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),t.push(d))}},t}},81:function(e){e.exports=function(e){return e[1]}},379:function(e){var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var s={},r=[],a=0;a<e.length;a++){var c=e[a],l=o.base?c[0]+o.base:c[0],d=s[l]||0,h="".concat(l," ").concat(d);s[l]=d+1;var f=n(h),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)t[f].references++,t[f].updater(u);else{var p=i(u,o);o.byIndex=a,t.splice(a,0,{identifier:h,updater:p,references:1})}r.push(h)}return r}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var s=o(e=e||[],i=i||{});return function(e){e=e||[];for(var r=0;r<s.length;r++){var a=n(s[r]);t[a].references--}for(var c=o(e,i),l=0;l<s.length;l++){var d=n(s[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}s=c}}},569:function(e){var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:function(e){e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:function(e,t,n){e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:function(e){e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,i&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:function(e){e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var s=t[o]={id:o,exports:{}};return e[o](s,s.exports,n),s.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e=n(379),t=n.n(e),o=n(795),i=n.n(o),s=n(569),r=n.n(s),a=n(565),c=n.n(a),l=n(216),d=n.n(l),h=n(589),f=n.n(h),u=n(820),p={};p.styleTagTransform=f(),p.setAttributes=c(),p.insert=r().bind(null,"head"),p.domAPI=i(),p.insertStyleElement=d(),t()(u.Z,p),u.Z&&u.Z.locals&&u.Z.locals;new class{constructor(){this.direction="",this.isLive=!0,this.food=new class{constructor(){this.element=document.getElementById("food")}get X(){return this.element.offsetLeft}get Y(){return this.element.offsetTop}change(){let e=10*Math.round(29*Math.random())+"px",t=10*Math.round(29*Math.random())+"px";this.element.style.top=e,this.element.style.left=t}},this.snake=new class{constructor(){this.element=document.getElementById("snake"),this.head=document.querySelector("#snake>div"),this.bodies=this.element.getElementsByTagName("div")}get X(){return this.head.offsetLeft}get Y(){return this.head.offsetTop}set X(e){if(this.X!==e){if(e<0||e>290)throw new Error("????????????");this.bodies[1]&&this.bodies[1].offsetLeft===e&&(e=e>this.X?this.X-10:this.X+10),this.moveBody(),this.head.style.left=e+"px",this.checkHead()}}set Y(e){if(this.Y!==e){if(this.Y<0||this.Y>290)throw new Error("????????????");this.bodies[1]&&this.bodies[1].offsetTop===e&&(e=e>this.Y?this.Y-10:this.Y+10),this.moveBody(),this.head.style.top=e+"px",this.checkHead()}}addBody(){this.element.insertAdjacentHTML("beforeend","<div></div>")}moveBody(){for(let e=this.bodies.length-1;e>0;e--){let t=this.bodies[e-1].offsetLeft,n=this.bodies[e-1].offsetTop;this.bodies[e].style.left=t+"px",this.bodies[e].style.top=n+"px"}}checkHead(){for(let e=1;e<this.bodies.length;e++){let t=this.bodies[e];if(this.X===t.offsetLeft&&this.Y===t.offsetTop)throw new Error("???????????????")}}},this.scorePanel=new class{constructor(){this.score=0,this.level=1,this.degree=3,this.maxLevel=6,this.scoreEle=document.getElementById("score"),this.levelEle=document.getElementById("level")}setDegree(e,t){this.degree=e,this.maxLevel=t}addScore(){this.scoreEle.innerHTML=++this.score+"",this.score%this.degree==0&&this.levelUp()}levelUp(){this.level<=this.maxLevel&&(this.levelEle.innerHTML=++this.level+"")}},this.init()}init(){document.addEventListener("keydown",this.keyDownHandler.bind(this)),this.run()}keyDownHandler(e){this.direction=e.key}run(){let e=this.snake.X,t=this.snake.Y;switch(this.direction){case"ArrowUp":case"Up":t-=10;break;case"ArrowDown":case"Down":t+=10;break;case"ArrowLeft":case"Left":e-=10;break;case"ArrowRight":case"Right":e+=10}this.checkEat(e,t);try{this.snake.X=e,this.snake.Y=t}catch(e){alert(e+"GAME OVER"),this.isLive=!1}this.isLive&&setTimeout(this.run.bind(this),330-30*this.scorePanel.level)}checkEat(e,t){e===this.food.X&&t===this.food.Y&&(this.food.change(),this.scorePanel.addScore(),this.snake.addBody())}}}()}();