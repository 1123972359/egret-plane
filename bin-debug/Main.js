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
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
var Main = (function (_super) {
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
__reflect(Main.prototype, "Main");
