var extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},__extends=function(e,t){function n(){this.constructor=e}extendStatics(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;r>n;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},__rest=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n},__decorate=function(e,t,n,r){var o,i=arguments.length,a=3>i?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(3>i?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},__param=function(e,t){return function(n,r){t(n,r,e)}},__metadata=function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0},__awaiter=function(e,t,n,r){function o(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,i){function a(e){try{c(r.next(e))}catch(t){i(t)}}function s(e){try{c(r["throw"](e))}catch(t){i(t)}}function c(e){e.done?n(e.value):o(e.value).then(a,s)}c((r=r.apply(e,t||[])).next())})},__generator=function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,i&&(a=2&n[0]?i["return"]:n[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,n[1])).done)return a;switch(i=0,a&&(n=[2&n[0],a.value]),n[0]){case 0:case 1:a=n;break;case 4:return c.label++,{value:n[1],done:!1};case 5:c.label++,i=n[1],n=[0];continue;case 7:n=c.ops.pop(),c.trys.pop();continue;default:if(a=c.trys,!(a=a.length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){c=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){c.label=n[1];break}if(6===n[0]&&c.label<a[1]){c.label=a[1],a=n;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(n);break}a[2]&&c.ops.pop(),c.trys.pop();continue}n=t.call(e,c)}catch(r){n=[6,r],i=0}finally{o=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,i,a,s,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:n(0),"throw":n(1),"return":n(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},__exportStar=function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||__createBinding(t,e,n)},__createBinding=Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]},__values=function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},__read=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-->0)&&!(r=i.next()).done;)a.push(r.value)}catch(s){o={error:s}}finally{try{r&&!r.done&&(n=i["return"])&&n.call(i)}finally{if(o)throw o.error}}return a},__spread=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(__read(arguments[t]));return e},__spreadArrays=function(){for(var e=0,t=0,n=arguments.length;n>t;t++)e+=arguments[t].length;for(var r=Array(e),o=0,t=0;n>t;t++)for(var i=arguments[t],a=0,s=i.length;s>a;a++,o++)r[o]=i[a];return r},__await=function(e){return this instanceof __await?(this.v=e,this):new __await(e)},__asyncGenerator=function(e,t,n){function r(e){l[e]&&(u[e]=function(t){return new Promise(function(n,r){h.push([e,t,n,r])>1||o(e,t)})})}function o(e,t){try{i(l[e](t))}catch(n){c(h[0][3],n)}}function i(e){e.value instanceof __await?Promise.resolve(e.value.v).then(a,s):c(h[0][2],e)}function a(e){o("next",e)}function s(e){o("throw",e)}function c(e,t){e(t),h.shift(),h.length&&o(h[0][0],h[0][1])}if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var u,l=n.apply(e,t||[]),h=[];return u={},r("next"),r("throw"),r("return"),u[Symbol.asyncIterator]=function(){return this},u},__asyncDelegator=function(e){function t(t,o){n[t]=e[t]?function(n){return(r=!r)?{value:__await(e[t](n)),done:"return"===t}:o?o(n):n}:o}var n,r;return n={},t("next"),t("throw",function(e){throw e}),t("return"),n[Symbol.iterator]=function(){return this},n},__asyncValues=function(e){function t(t){r[t]=e[t]&&function(r){return new Promise(function(o,i){r=e[t](r),n(o,i,r.done,r.value)})}}function n(e,t,n,r){Promise.resolve(r).then(function(t){e({value:t,done:n})},t)}if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=e[Symbol.asyncIterator];return o?o.call(e):(e="function"==typeof __values?__values(e):e[Symbol.iterator](),r={},t("next"),t("throw"),t("return"),r[Symbol.asyncIterator]=function(){return this},r)},__makeTemplateObject=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&__createBinding(t,e,n);return __setModuleDefault(t,e),t},__importDefault=function(e){return e&&e.__esModule?e:{"default":e}},__classPrivateFieldGet=function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)},__classPrivateFieldSet=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n},__reflect=function(e,t,n){e.__class__=t,n?n.push(t):n=[t],e.__types__=e.__types__?n.concat(e.__types__):n};!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(t){return e[t]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){n(1),n(0),n(2),n(3),n(4),n(5),n(6),n(7),n(8),n(9);var r=function(e){function t(){var t=e.call(this)||this;return t.scene=Scene.getInstance(),t.addEventListener(egret.Event.ADDED_TO_STAGE,t.onAddToStage,t),t}return __extends(t,e),t.prototype.onAddToStage=function(e){egret.lifecycle.addLifecycleListener(function(e){e.onUpdate=function(){}}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()},this.runGame()["catch"](function(e){console.log(e)})},t.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return[4,this.loadResource()];case 1:return t.sent(),e=new Begin,this.scene.push(e,this),[2]}})})},t.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,3,,4]),e=new LoadingUI,this.stage.addChild(e),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return n.sent(),[4,RES.loadGroup("preload",0,e)];case 2:return n.sent(),this.stage.removeChild(e),[3,4];case 3:return t=n.sent(),console.error(t),[3,4];case 4:return[2]}})})},t}(egret.DisplayObjectContainer);window.Main=r,__reflect(r.prototype,"Main",[])},function(e,t){var n=function(e){function t(){var t=e.call(this)||this;return t.createView(),t}return __extends(t,e),t.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},t.prototype.onProgress=function(e,t){this.textField.text="Loading..."+e+"/"+t},t}(egret.Sprite);window.LoadingUI=n,__reflect(n.prototype,"LoadingUI",["RES.PromiseTaskReporter"])},function(e,t){var n=function(){function e(){this.gameover=!1}return e.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,{nickName:"username"}]})})},e.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2]})})},e}();window.DebugPlatform=n,__reflect(n.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new n)},function(e,t){var n=function(){function e(){this.bulletType={normal:function(){var e=new egret.Shape,t=20;return e.graphics.lineStyle(10,16711935),e.graphics.moveTo(0,0),e.graphics.lineTo(0,0-t),e},"enemy-1":function(){var e=new egret.Shape,t=20;return e.graphics.lineStyle(10,3050327),e.graphics.moveTo(0,0),e.graphics.lineTo(0,0-t),e}}}return e.prototype.create=function(e){var t=this.bulletType[e]();return t},e}();window.Bullet=n,__reflect(n.prototype,"Bullet",[])},function(e,t){var n=function(){function e(){}return e.prototype.create=function(e){void 0===e&&(e=1);var t=createBitmapByName("balloon_png");return t.level=e,t},e}();window.Enemy=n,__reflect(n.prototype,"Enemy",[])},function(e,t){var n=function(){function e(){this.poolMap={}}return e.getInstance=function(){return this.instance},e.prototype.create=function(e,t,n){return this.poolMap.hasOwnProperty(t)||(this.poolMap[t]=[]),this.poolMap[t]=fill(new Array(n),function(){return{id:randomId(),active:!1,body:e()}}),this.poolMap[t]},e.prototype.getActiveFalseOne=function(e){var t=this.poolMap[e],n=t.filter(function(e){return!e.active});return n.length>0?(n[0].active=!0,n[0]):!1},e.prototype.recoveryOne=function(e){e.active=!1,e.body.x=e.body.y=0},e.instance=new e,e}();window.Pool=n,__reflect(n.prototype,"Pool",[])},function(e,t){var n=function(){function e(){this.sceneStack=[]}return e.getInstance=function(){return e.instance||(e.instance=new e),e.instance},e.prototype.push=function(e,t){this.sceneStack.push(e),console.log("that",t),t.addChild(e)},e.prototype.pop=function(){var e=this.sceneStack.pop();e.parent.removeChild(e)},e}();window.Scene=n,__reflect(n.prototype,"Scene",[])},function(e,t){var n=function(e){function t(){var t=e.call(this)||this;return t.scene=Scene.getInstance(),t.addEventListener(egret.Event.ADDED_TO_STAGE,t.onAddToStage,t),t}return __extends(t,e),t.prototype.onAddToStage=function(e){var t=this;egret.lifecycle.addLifecycleListener(function(e){e.onUpdate=function(){platform.gameover&&(t.label.text="重新开始")}}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()},this.runGame()["catch"](function(e){console.log(e)})},t.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return this.ceateBeginRect(),this.createBeginText(),[2]})})},t.prototype.ceateBeginRect=function(){var e=new egret.Shape;e.graphics.beginFill(7833753,1),e.graphics.drawRect(0,0,this.stage.stageWidth,this.stage.stageHeight),e.graphics.endFill(),this.addChild(e)},t.prototype.createBeginText=function(){var e=this,t=new egret.TextField;t.text="开始游戏",t.x=this.stage.stageWidth/2-t.width/2,t.y=this.stage.stageHeight/2,t.textColor=16758465,this.addChild(t),t.touchEnabled=!0,t.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){var t=new Game;e.scene.push(t,e),platform.gameover=!1},this),this.label=t},t}(egret.DisplayObjectContainer);window.Begin=n,__reflect(n.prototype,"Begin",[])},function(e,t){var n=function(e){function t(){var t=e.call(this)||this;return t._touchStatus=!1,t._distance=new egret.Point,t.enemyGroup=[],t.planeBulletGroup=[],t.enemyBulletGroup=[],t.pool=Pool.getInstance(),t.skySpeed=10,t.enemyLevel=1,t.planeBulletPoolName="bullet",t.planeBulletDis=20,t.enemyFireDis=20,t.enemyFirePoolName="emeny-bullet",t.scene=Scene.getInstance(),t.addEventListener(egret.Event.ADDED_TO_STAGE,t.onAddToStage,t),t}return __extends(t,e),t.prototype.onAddToStage=function(e){egret.lifecycle.addLifecycleListener(function(e){e.onUpdate=function(){}}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()},this.runGame()["catch"](function(e){console.log(e)})},t.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return this.createGameScene(),[2]})})},t.prototype.createGameScene=function(){this.createBg(),this.createPlane(),this.createEnemy(),this.createBulltePool()},t.prototype.createBg=function(){this.sky=createBitmapByName("bgg_png"),this.addChild(this.sky);var e=this.stage.stageWidth,t=this.stage.stageHeight;this.sky.width=e,this.sky.height=t,this.sky2=createBitmapByName("bgg_png"),this.addChild(this.sky2),this.sky2.width=e,this.sky2.height=t,this.sky2.y=-t,this.addEventListener(egret.Event.ENTER_FRAME,this.bgFrame,this)},t.prototype.bgFrame=function(){var e=(this.stage.stageWidth,this.stage.stageHeight);this.sky.y+=this.skySpeed,this.sky2.y+=this.skySpeed,this.sky.y>=e&&(this.sky.y=-(e-this.sky2.y)),this.sky2.y>=e&&(this.sky2.y=-(e-this.sky.y))},t.prototype.createPlane=function(){var e=this.stage.stageWidth,t=this.stage.stageHeight,n=createBitmapByName("close_png");this.addChild(n),n.x=e/2-n.width/2,n.y=t/2,this.plane=n,this.plane.touchEnabled=!0,this.plane.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.mouseDown,this),this.plane.addEventListener(egret.TouchEvent.TOUCH_END,this.mouseUp,this)},t.prototype.createEnemy=function(){var e=this,t=new Enemy,n="enemy"+this.enemyLevel;this.pool.create(function(){return t.create(e.enemyLevel)},n,2),this.createEnemyTimer=new egret.Timer(500,1/0),this.createEnemyTimer.addEventListener(egret.TimerEvent.TIMER,this.createEnemyTimerFn,this),this.createEnemyTimer.start()},t.prototype.createEnemyTimerFn=function(){var e="enemy"+this.enemyLevel;if(this.enemyGroup.length<this.pool.poolMap[e].length){var t=this.createEnemyGetOne();t&&this.enemyGroup.push(t)}},t.prototype.createEnemyGetOne=function(){var e=this,t=this.stage.stageWidth,n=this.stage.stageHeight,r="enemy"+this.enemyLevel,o=this.pool.getActiveFalseOne(r);return o&&(o.body.x=1*Math.random()+Math.random()*t*.9,o.body.y=-50,this.addChild(o.body),o.frame=function(){o.body.y+=10,o.body.y>n&&clearPoolItem("enemyGroup",o,o.frame,e)},this.addEventListener(egret.Event.ENTER_FRAME,o.frame,this),this.enemyFire(o)),o},t.prototype.mouseDown=function(e){this._touchStatus=!0,this._distance.x=e.stageX-this.plane.x,this._distance.y=e.stageY-this.plane.y,this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.mouseMove,this),this.planeFire()},t.prototype.mouseMove=function(e){this._touchStatus&&(this.plane.x=e.stageX-this._distance.x,this.plane.y=e.stageY-this._distance.y)},t.prototype.mouseUp=function(e){this._touchStatus=!1,this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.mouseMove,this)},t.prototype.createBulltePool=function(){var e=new Bullet;this.pool.create(function(){return e.create("normal")},this.planeBulletPoolName,20),this.pool.create(function(){return e.create("enemy-1")},this.enemyFirePoolName,100)},t.prototype.planeFire=function(){this.stage.stageWidth,this.stage.stageHeight;this.planeFireTimer=new egret.Timer(500,1/0),this.planeFireTimer.addEventListener(egret.TimerEvent.TIMER,this.planeFireTimerFn,this),this.planeFireTimer.start(),this.plane.fireTimer=this.planeFireTimer,this.plane.fireTimerFn=this.planeFireTimerFn},t.prototype.planeFireTimerFn=function(){if(!this._touchStatus)return void this.planeFireTimer.removeEventListener(egret.TimerEvent.TIMER,this.planeFireTimerFn,this);if(this.planeBulletGroup.length<this.pool.poolMap[this.planeBulletPoolName].length){var e=this.planeFireGetOne();e&&this.planeBulletGroup.push(e)}},t.prototype.planeFireGetOne=function(){var e=this,t=this.pool.getActiveFalseOne(this.planeBulletPoolName);return t&&(t.body.x=this.plane.x+this.plane.width/2,t.body.y=this.plane.y,this.addChild(t.body),t.frame=function(){t.body.y-=e.planeBulletDis;var n=!1;if(e.enemyGroup.length>0)for(var r in e.enemyGroup)if(isCollision(t.body,e.enemyGroup[r].body)){n=!0,clearPoolItem("planeBulletGroup",t,t.frame,e),clearPoolItem("enemyGroup",e.enemyGroup[r],e.enemyGroup[r].frame,e);break}n||t.body.y<0&&clearPoolItem("planeBulletGroup",t,t.frame,e)},this.addEventListener(egret.Event.ENTER_FRAME,t.frame,this)),t},t.prototype.enemyFire=function(e){var t=this,n=(this.stage.stageWidth,this.stage.stageHeight),r=function(){var r=Pool.getInstance(),o=r.getActiveFalseOne(t.enemyFirePoolName);return o&&(o.body.x=e.body.x+e.body.width/2,o.body.y=e.body.y+e.body.height,t.addChild(o.body),o.frame=function(){o.body.y+=t.enemyFireDis;var e=!1;isCollision(o.body,t.plane)&&(e=!0,!platform.gameover&&t.gameOver(),clearPoolItem("enemyBulletGroup",o,o.frame,t)),e||o.body.y>n+o.body.height&&clearPoolItem("enemyBulletGroup",o,o.frame,t)},t.addEventListener(egret.Event.ENTER_FRAME,o.frame,t)),o},o=function(){if(!e.active)return void e.body.fireTimer.removeEventListener(egret.TimerEvent.TIMER,e.body.fireTimerFn,t);if(t.enemyBulletGroup.length<t.pool.poolMap[t.enemyFirePoolName].length){var n=r();n&&t.enemyBulletGroup.push(n)}},i=new egret.Timer(500,1/0);i.addEventListener(egret.TimerEvent.TIMER,o,this),i.start(),e.body.fireTimer=i,e.body.fireTimerFn=o},t.prototype.gameOver=function(){platform.gameover=!0,this.removeEventListener(egret.Event.ENTER_FRAME,this.bgFrame,this),this.plane.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.mouseDown,this),this.plane.removeEventListener(egret.TouchEvent.TOUCH_END,this.mouseUp,this),this._touchStatus=!1,this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.mouseMove,this),this.createEnemyTimer.removeEventListener(egret.TimerEvent.TIMER,this.createEnemyTimerFn,this),this.scene.pop()},t}(egret.DisplayObjectContainer);window.Game=n,__reflect(n.prototype,"Game",[])},function(e,t){function n(e,t){for(var n=0;n<e.length;n++)e[n]=t();return e}function r(){return Math.floor((new Date).getTime()+1111*Math.random()+9999*Math.random())}var o=this;window.fill=n,window.randomId=r;var i=function(e){var t=new egret.Bitmap,n=RES.getRes(e);return t.texture=n,t};window.createBitmapByName=i;var a=function(e){var t=new egret.HtmlTextParser,n=e.map(function(e){return t.parse(e)}),r=o.textfield,i=-1,a=function(){i++,i>=n.length&&(i=0);var e=n[i];r.textFlow=e;var t=egret.Tween.get(r);t.to({alpha:1},200),t.wait(2e3),t.to({alpha:0},200),t.call(a,o)};a()};window.startAnimation=a;var s=function(e,t){var n=e.x,r=e.x+e.width,o=e.y,i=e.y+e.height,a=t.x,s=t.x+t.width,c=t.y,u=t.y+t.height;return c>i||n>s||o>u||a>r?!1:!0};window.isCollision=s;var c=function(e,t,n,r){var i=Pool.getInstance();i.recoveryOne(t),r.removeChild(t.body),n&&r.removeEventListener(egret.Event.ENTER_FRAME,n,r),t.body.fireTimer&&t.body.fireTimerFn&&t.body.fireTimer.removeEventListener(egret.TimerEvent.TIMER,t.body.fireTimerFn,o);for(var a=0;a<r[e].length;a++)if(r[e][a].id===t.id){r[e].splice(a,1);break}};window.clearPoolItem=c}]);