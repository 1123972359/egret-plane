

var extendStatics = Object.setPrototypeOf ||
({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

var __extends = function (d, b) {
extendStatics(d, b);
function __() { this.constructor = d; }
d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var __assign = Object.assign || function (t) {
for (var s, i = 1, n = arguments.length; i < n; i++) {
    s = arguments[i];
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
}
return t;
};

var __rest = function (s, e) {
var t = {};
for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
    }
return t;
};

var __decorate = function (decorators, target, key, desc) {
var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __param = function (paramIndex, decorator) {
return function (target, key) { decorator(target, key, paramIndex); }
};

var __metadata = function (metadataKey, metadataValue) {
if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
};

var __awaiter = function (thisArg, _arguments, P, generator) {
function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
});
};

var __generator = function (thisArg, body) {
var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
function verb(n) { return function (v) { return step([n, v]); }; }
function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];
        switch (op[0]) {
            case 0: case 1: t = op; break;
            case 4: _.label++; return { value: op[1], done: false };
            case 5: _.label++; y = op[1]; op = [0]; continue;
            case 7: op = _.ops.pop(); _.trys.pop(); continue;
            default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                if (t[2]) _.ops.pop();
                _.trys.pop(); continue;
        }
        op = body.call(thisArg, _);
    } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
    if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
}
};

var __exportStar = function(m, exports) {
for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};

var __createBinding = Object.create ? (function(o, m, k, k2) {
if (k2 === undefined) k2 = k;
Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
if (k2 === undefined) k2 = k;
o[k2] = m[k];
});

var __values = function (o) {
var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
if (m) return m.call(o);
if (o && typeof o.length === "number") return {
    next: function () {
        if (o && i >= o.length) o = void 0;
        return { value: o && o[i++], done: !o };
    }
};
throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

var __read = function (o, n) {
var m = typeof Symbol === "function" && o[Symbol.iterator];
if (!m) return o;
var i = m.call(o), r, ar = [], e;
try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
}
catch (error) { e = { error: error }; }
finally {
    try {
        if (r && !r.done && (m = i["return"])) m.call(i);
    }
    finally { if (e) throw e.error; }
}
return ar;
};

var __spread = function () {
for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
return ar;
};

var __spreadArrays = function () {
for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
return r;
};

var __await = function (v) {
return this instanceof __await ? (this.v = v, this) : new __await(v);
};

var __asyncGenerator = function (thisArg, _arguments, generator) {
if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
var g = generator.apply(thisArg, _arguments || []), i, q = [];
return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
function fulfill(value) { resume("next", value); }
function reject(value) { resume("throw", value); }
function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};

var __asyncDelegator = function (o) {
var i, p;
return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
};

var __asyncValues = function (o) {
if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
var m = o[Symbol.asyncIterator], i;
return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};

var __makeTemplateObject = function (cooked, raw) {
if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
o["default"] = v;
};

var __importStar = function (mod) {
if (mod && mod.__esModule) return mod;
var result = {};
if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
__setModuleDefault(result, mod);
return result;
};

var __importDefault = function (mod) {
return (mod && mod.__esModule) ? mod : { "default": mod };
};

var __classPrivateFieldGet = function (receiver, privateMap) {
if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
}
return privateMap.get(receiver);
};

var __classPrivateFieldSet = function (receiver, privateMap, value) {
if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
}
privateMap.set(receiver, value);
return value;
};

var __reflect = function(p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Bullet.ts":
/***/ (function(module, exports) {

var Bullet = /** @class */ (function () {
    function Bullet() {
        this.bulletType = {
            normal: function () {
                var shape = new egret.Shape();
                var long = 20;
                var dis = 20;
                shape.graphics.lineStyle(10, 0xff00ff);
                shape.graphics.moveTo(0 / 2, 0);
                shape.graphics.lineTo(0 / 2, 0 - long);
                return shape;
            }
        };
    }
    /**
     * 创建子弹
     * @param {string} type 子弹类型
     * @return {egret.Shape}
     */
    Bullet.prototype.create = function (type) {
        var shape = this.bulletType[type]();
        return shape;
    };
    return Bullet;
}());
window["Bullet"] = Bullet;
__reflect(Bullet.prototype,"Bullet",[]); 


/***/ }),

/***/ "./src/Enemy.ts":
/***/ (function(module, exports) {

/**
 * 敌人
 */
var Enemy = /** @class */ (function () {
    function Enemy() {
    }
    /**
     * 创建敌人
     * @return {egret.Bitmap}
     */
    Enemy.prototype.create = function () {
        var enemy = createBitmapByName("balloon_png");
        return enemy;
    };
    return Enemy;
}());
window["Enemy"] = Enemy;
__reflect(Enemy.prototype,"Enemy",[]); 


/***/ }),

/***/ "./src/LoadingUI.ts":
/***/ (function(module, exports) {

//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var LoadingUI = /** @class */ (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 300;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        this.textField.text = "Loading..." + current + "/" + total;
    };
    return LoadingUI;
}(egret.Sprite));
window["LoadingUI"] = LoadingUI;
__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]); 


/***/ }),

/***/ "./src/Main.ts":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./src/Bullet.ts");
__webpack_require__("./src/Enemy.ts");
__webpack_require__("./src/LoadingUI.ts");
__webpack_require__("./src/Main.ts");
__webpack_require__("./src/Platform.ts");
__webpack_require__("./src/Pool.ts");
__webpack_require__("./src/utils/index.ts");
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this._touchStatus = false; // 触摸按下
        _this._distance = new egret.Point(); // 鼠标点击时，鼠标全局坐标与_bird的位置差
        _this.enemyGroup = []; // 敌人组
        _this.bulletGroup = []; // 子弹组
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Main.prototype.onAddToStage = function (event) {
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
            context.onUpdate = function () {
            };
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.createGameScene();
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        loadingView = new LoadingUI();
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 2:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 创建游戏场景
     * Create a game scene
     */
    Main.prototype.createGameScene = function () {
        this.createBg();
        this.createPlane();
        this.createEnemy();
        this.createBulltePool();
    };
    // 创建背景，背景滚动
    Main.prototype.createBg = function () {
        // 两张相同背景
        var sky = createBitmapByName("bgg_png");
        this.addChild(sky);
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        sky.width = stageW;
        sky.height = stageH;
        var sky2 = createBitmapByName("bgg_png");
        this.addChild(sky2);
        sky2.width = stageW;
        sky2.height = stageH;
        sky2.y = -stageH;
        var speed = 10;
        // 设置背景滚动
        this.addEventListener(egret.Event.ENTER_FRAME, function () {
            sky.y += speed;
            sky2.y += speed;
            if (sky.y >= stageH) {
                sky.y = -(stageH - sky2.y);
            }
            if (sky2.y >= stageH) {
                sky2.y = -(stageH - sky.y);
            }
        }, this);
    };
    // 飞机触摸移动
    Main.prototype.createPlane = function () {
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        var icon = createBitmapByName("close_png");
        this.addChild(icon);
        icon.x = stageW / 2 - icon.width / 2;
        icon.y = stageH / 2;
        this.plane = icon;
        this.plane.touchEnabled = true;
        this.plane.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
        this.plane.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
    };
    // 创建敌人
    Main.prototype.createEnemy = function () {
        var _this = this;
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        var en = new Enemy();
        var pool = Pool.getInstance();
        pool.create(function () { return en.create(); }, 'enemy', 10);
        // 取出不活动的敌人
        var getOne = function () {
            var one = pool.getActivceFalseOne('enemy');
            if (one) {
                one.body.x = Math.random() * 1 + Math.random() * stageW * 0.9;
                one.body.y = -50;
                _this.addChild(one.body);
                one.frame = function () {
                    one.body.y += 10;
                    if (one.body.y > stageH) {
                        // 如果超出屏幕，就回收到池子，并从舞台去除，将 enemyGroup 中的去除
                        clearPoolItem('enemyGroup', one, one.frame, _this);
                    }
                };
                _this.addEventListener(egret.Event.ENTER_FRAME, one.frame, _this);
            }
            return one;
        };
        var timeStamp = 0;
        var createTimeStamp = 500;
        this.addEventListener(egret.Event.ENTER_FRAME, function () {
            // 如果敌人组的数量少于池的创建数量，那就从池取出
            if (_this.enemyGroup.length < pool.length) {
                // 一秒创建一个
                var now = new Date().getTime();
                if (now - timeStamp >= createTimeStamp) {
                    timeStamp = now;
                    var res = getOne();
                    res && _this.enemyGroup.push(res);
                }
            }
        }, this);
    };
    Main.prototype.mouseDown = function (evt) {
        // console.log("Mouse Down.");
        this._touchStatus = true;
        this._distance.x = evt.stageX - this.plane.x;
        this._distance.y = evt.stageY - this.plane.y;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
        // 开火
        this.planeFire();
    };
    Main.prototype.mouseMove = function (evt) {
        if (this._touchStatus) {
            // console.log("moving now ! Mouse: [X:" + evt.stageX + ",Y:" + evt.stageY + "]");
            this.plane.x = evt.stageX - this._distance.x;
            this.plane.y = evt.stageY - this._distance.y;
        }
    };
    Main.prototype.mouseUp = function (evt) {
        // console.log("Mouse Up.");
        this._touchStatus = false;
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
    };
    // 创建子弹池
    Main.prototype.createBulltePool = function () {
        var bu = new Bullet();
        var pool = Pool.getInstance();
        pool.create(function () { return bu.create('normal'); }, 'bullet', 20);
    };
    // 开火
    Main.prototype.planeFire = function () {
        var _this = this;
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        var pool = Pool.getInstance();
        var dis = 20;
        // 取出不活动的子弹
        var getOne = function () {
            var pool = Pool.getInstance();
            var one = pool.getActivceFalseOne('bullet');
            if (one) {
                one.body.x = _this.plane.x + _this.plane.width / 2;
                one.body.y = _this.plane.y;
                _this.addChild(one.body);
                one.frame = function () {
                    one.body.y -= dis;
                    // 如果飞机子弹与敌组碰撞，则将子弹和敌人去除
                    var isColl = false;
                    if (_this.enemyGroup.length > 0) {
                        for (var i in _this.enemyGroup) {
                            if (isCollision(one.body, _this.enemyGroup[i].body)) {
                                isColl = true;
                                clearPoolItem('bulletGroup', one, one.frame, _this);
                                clearPoolItem('enemyGroup', _this.enemyGroup[i], _this.enemyGroup[i].frame, _this);
                                break;
                            }
                        }
                    }
                    if (!isColl) {
                        // 如果超出屏幕，就回收到池子，并从舞台去除，将 bulletGroup 中的去除
                        console.log("one.body.height", _this.plane.y + one.body.y, one.body.height);
                        if (one.body.y < 0) {
                            clearPoolItem('bulletGroup', one, one.frame, _this);
                        }
                    }
                };
                _this.addEventListener(egret.Event.ENTER_FRAME, one.frame, _this);
            }
            return one;
        };
        var timeStamp = 0;
        var createTimeStamp = 100;
        var frame = function () {
            if (!_this._touchStatus) {
                _this.removeEventListener(egret.Event.ENTER_FRAME, frame, _this);
                return;
            }
            // 如果子弹组的数量少于池的创建数量，那就从池取出
            if (_this.bulletGroup.length < pool.length) {
                // 一秒创建一个
                var now = new Date().getTime();
                if (now - timeStamp >= createTimeStamp) {
                    timeStamp = now;
                    var res = getOne();
                    res && _this.bulletGroup.push(res);
                }
            }
        };
        this.addEventListener(egret.Event.ENTER_FRAME, frame, this);
    };
    return Main;
}(egret.DisplayObjectContainer));
window["Main"] = Main;
__reflect(Main.prototype,"Main",[]); 


/***/ }),

/***/ "./src/Platform.ts":
/***/ (function(module, exports) {

var DebugPlatform = /** @class */ (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { nickName: "username" }];
            });
        });
    };
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return DebugPlatform;
}());
window["DebugPlatform"] = DebugPlatform;
__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]); 
if (!window.platform) {
    window.platform = new DebugPlatform();
}


/***/ }),

/***/ "./src/Pool.ts":
/***/ (function(module, exports) {

/**
 * 对象池
 * @author lbb
 */
var Pool = /** @class */ (function () {
    function Pool() {
        this.poolMap = {}; // 池
        this.length = 0;
    }
    /**
     * 获取实例
     * @return {Pool}
     */
    Pool.getInstance = function () {
        return this.instance;
    };
    /**
     * 预创建池
     * @method create
     * @param {function} create 创建方法
     * @param {string} key 键名
     * @param {number} num 初始化数量
     * @return {any[]}
     */
    Pool.prototype.create = function (create, key, num) {
        if (!this.poolMap.hasOwnProperty(key)) {
            this.poolMap[key] = [];
        }
        this.poolMap[key] = fill(new Array(num), function () { return ({
            id: randomId(),
            active: false,
            body: create()
        }); });
        this.length = num;
        return this.poolMap[key];
    };
    /**
     * 获取一个不活动的对象，并把状态设置为活动
     * @method getActivceFalseOne
     * @param {string} key 键名
     * @return {any}
     */
    Pool.prototype.getActivceFalseOne = function (key) {
        var arr = this.poolMap[key];
        var res = arr.filter(function (item) { return !item.active; });
        if (res.length > 0) {
            res[0].active = true;
            return res[0];
        }
        return false;
    };
    /**
     * 回收对象，并把状态设置为不活动
     * @method recoveryOne
     * @param {any} one 一个池物
     */
    Pool.prototype.recoveryOne = function (one) {
        one.active = false;
        one.body.x = one.body.y = 0;
    };
    Pool.instance = new Pool(); // 单例
    return Pool;
}());
window["Pool"] = Pool;
__reflect(Pool.prototype,"Pool",[]); 


/***/ }),

/***/ "./src/utils/index.ts":
/***/ (function(module, exports) {

var _this = this;
/**
 * 数组填充
 * @method fill
 * @param {any[]} arr 数组
 * @param {Function} fn 填充物函数
 * @returns {any[]} 填充后的数组
 */
function fill(arr, fn) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = fn();
    }
    return arr;
}
window["fill"] = fill;
/**
 * 创建随机id
 * @method randomId
 * @return {number}
 */
function randomId() {
    return Math.floor(new Date().getTime() + Math.random() * 1111 + Math.random() * 9999);
}
window["randomId"] = randomId;
/**
 * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
 * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
 * @method createBitmapByName
 * @param {string} name 资源名
 * @return {egret.Bitmap}
 */
var createBitmapByName = function (name) {
    var result = new egret.Bitmap();
    var texture = RES.getRes(name);
    result.texture = texture;
    return result;
};
window["createBitmapByName"] = createBitmapByName;
/**
 * 描述文件加载成功，开始播放动画
 * Description file loading is successful, start to play the animation
 * @method startAnimation
 * @param {string[]} result 资源数组
 */
var startAnimation = function (result) {
    var parser = new egret.HtmlTextParser();
    var textflowArr = result.map(function (text) { return parser.parse(text); });
    var textfield = _this.textfield;
    var count = -1;
    var change = function () {
        count++;
        if (count >= textflowArr.length) {
            count = 0;
        }
        var textFlow = textflowArr[count];
        // 切换描述内容
        // Switch to described content
        textfield.textFlow = textFlow;
        var tw = egret.Tween.get(textfield);
        tw.to({ "alpha": 1 }, 200);
        tw.wait(2000);
        tw.to({ "alpha": 0 }, 200);
        tw.call(change, _this);
    };
    change();
};
window["startAnimation"] = startAnimation;
/**
 * 碰撞检测
 * @method isCollision
 * @param {any} a 检测物1
 * @param {any} b 检测物2
 * @return {boolean}
 */
var isCollision = function (a, b) {
    var flag = false;
    var l1 = a.x;
    var r1 = a.x + a.width;
    var t1 = a.y;
    var b1 = a.y + a.height;
    var l2 = b.x;
    var r2 = b.x + b.width;
    var t2 = b.y;
    var b2 = b.y + b.height;
    if (b1 < t2 || l1 > r2 || t1 > b2 || r1 < l2) {
        return false;
    }
    return true;
};
window["isCollision"] = isCollision;
/**
 * 清理舞台对应池中物
 * @method clearPoolItem
 * @param {string} group 组名
 * @param {any} one 池中物
 * @param {Function} fn 清除的函数
 * @param {any} that this
 */
var clearPoolItem = function (group, one, fn, that) {
    var pool = Pool.getInstance();
    pool.recoveryOne(one);
    that.removeChild(one.body);
    that.removeEventListener(egret.Event.ENTER_FRAME, fn, that);
    for (var i = 0; i < that[group].length; i++) {
        if (that[group][i].id === one.id) {
            that[group].splice(i, 1);
            break;
        }
    }
};
window["clearPoolItem"] = clearPoolItem;


/***/ })

/******/ });