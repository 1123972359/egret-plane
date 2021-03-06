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
/**
 * 游戏场景
 */
var Game = (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super.call(this) || this;
        _this._touchStatus = false; // 触摸按下
        _this._distance = new egret.Point(); // 鼠标点击时，鼠标全局坐标与_bird的位置差
        _this.enemyGroup = []; // 敌人组
        _this.planeBulletGroup = []; // 飞机子弹组
        _this.enemyBulletGroup = []; // 敌人子弹组
        _this.pool = Pool.getInstance(); // 对象池    
        _this.skySpeed = 10;
        _this.enemyLevel = 1;
        /**
         * 自己飞机开火
         */
        _this.planeBulletPoolName = 'bullet';
        _this.planeBulletDis = 20;
        /**
         * 敌人开火
         * @method enemyFire
         * @param {any} enemy 敌人的pool
         */
        _this.enemyFireDis = 20;
        _this.enemyFirePoolName = 'emeny-bullet';
        /**
         * 游戏结束
         */
        _this.scene = Scene.getInstance();
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Game.prototype.onAddToStage = function (event) {
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
    Game.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.createGameScene();
                return [2 /*return*/];
            });
        });
    };
    /**
     * 创建游戏场景
     * Create a game scene
     */
    Game.prototype.createGameScene = function () {
        this.createBg();
        this.createPlane();
        this.createEnemy();
        this.createBulltePool();
    };
    Game.prototype.createBg = function () {
        // 两张相同背景
        this.sky = createBitmapByName("bgg_png");
        this.addChild(this.sky);
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        this.sky.width = stageW;
        this.sky.height = stageH;
        this.sky2 = createBitmapByName("bgg_png");
        this.addChild(this.sky2);
        this.sky2.width = stageW;
        this.sky2.height = stageH;
        this.sky2.y = -stageH;
        this.addEventListener(egret.Event.ENTER_FRAME, this.bgFrame, this);
    };
    // 设置背景滚动
    Game.prototype.bgFrame = function () {
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        this.sky.y += this.skySpeed;
        this.sky2.y += this.skySpeed;
        if (this.sky.y >= stageH) {
            this.sky.y = -(stageH - this.sky2.y);
        }
        if (this.sky2.y >= stageH) {
            this.sky2.y = -(stageH - this.sky.y);
        }
    };
    // 飞机触摸移动
    Game.prototype.createPlane = function () {
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
    Game.prototype.createEnemy = function () {
        var _this = this;
        var en = new Enemy();
        var poolName = "enemy" + this.enemyLevel;
        this.pool.create(function () { return en.create(_this.enemyLevel); }, poolName, 2);
        this.createEnemyTimer = new egret.Timer(500, Infinity);
        this.createEnemyTimer.addEventListener(egret.TimerEvent.TIMER, this.createEnemyTimerFn, this);
        this.createEnemyTimer.start();
    };
    Game.prototype.createEnemyTimerFn = function () {
        var poolName = "enemy" + this.enemyLevel;
        // 如果敌人组的数量少于池的创建数量，那就从池取出
        if (this.enemyGroup.length < this.pool.poolMap[poolName].length) {
            var res = this.createEnemyGetOne();
            res && this.enemyGroup.push(res);
        }
    };
    // 取出不活动的敌人
    Game.prototype.createEnemyGetOne = function () {
        var _this = this;
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        var poolName = "enemy" + this.enemyLevel;
        var one = this.pool.getActiveFalseOne(poolName);
        if (one) {
            one.body.x = Math.random() * 1 + Math.random() * stageW * 0.9;
            one.body.y = -50;
            this.addChild(one.body);
            one.frame = function () {
                one.body.y += 10;
                if (one.body.y > stageH) {
                    // 如果超出屏幕，就回收到池子，并从舞台去除，将 enemyGroup 中的去除
                    clearPoolItem('enemyGroup', one, one.frame, _this);
                }
            };
            this.addEventListener(egret.Event.ENTER_FRAME, one.frame, this);
            // 敌人开火
            this.enemyFire(one);
        }
        return one;
    };
    Game.prototype.mouseDown = function (evt) {
        // console.log("Mouse Down.");
        this._touchStatus = true;
        this._distance.x = evt.stageX - this.plane.x;
        this._distance.y = evt.stageY - this.plane.y;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
        // 开火
        this.planeFire();
    };
    Game.prototype.mouseMove = function (evt) {
        if (this._touchStatus) {
            // console.log("moving now ! Mouse: [X:" + evt.stageX + ",Y:" + evt.stageY + "]");
            this.plane.x = evt.stageX - this._distance.x;
            this.plane.y = evt.stageY - this._distance.y;
        }
    };
    Game.prototype.mouseUp = function (evt) {
        // console.log("Mouse Up.");
        this._touchStatus = false;
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
    };
    // 创建子弹池
    Game.prototype.createBulltePool = function () {
        var bu = new Bullet();
        // 飞机普通子弹池
        this.pool.create(function () { return bu.create('normal'); }, 'bullet', 20);
        // 敌人普通子弹池
        this.pool.create(function () { return bu.create('emeny-1'); }, 'emeny-bullet', 100);
    };
    Game.prototype.planeFire = function () {
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        this.planeFireTimer = new egret.Timer(500, Infinity);
        this.planeFireTimer.addEventListener(egret.TimerEvent.TIMER, this.planeFireTimerFn, this);
        this.planeFireTimer.start();
        this.plane.fireTimer = this.planeFireTimer;
        this.plane.fireTimerFn = this.planeFireTimerFn;
    };
    Game.prototype.planeFireTimerFn = function () {
        if (!this._touchStatus) {
            this.planeFireTimer.removeEventListener(egret.TimerEvent.TIMER, this.planeFireTimerFn, this);
            return;
        }
        // 如果子弹组的数量少于池的创建数量，那就从池取出
        if (this.planeBulletGroup.length < this.pool.poolMap[this.planeBulletPoolName].length) {
            var res = this.planeFireGetOne();
            res && this.planeBulletGroup.push(res);
        }
    };
    // 取出不活动的子弹
    Game.prototype.planeFireGetOne = function () {
        var _this = this;
        var one = this.pool.getActiveFalseOne(this.planeBulletPoolName);
        if (one) {
            one.body.x = this.plane.x + this.plane.width / 2;
            one.body.y = this.plane.y;
            this.addChild(one.body);
            one.frame = function () {
                one.body.y -= _this.planeBulletDis;
                // 如果飞机子弹与敌组碰撞，则将子弹和敌人去除
                var isColl = false;
                if (_this.enemyGroup.length > 0) {
                    for (var i in _this.enemyGroup) {
                        if (isCollision(one.body, _this.enemyGroup[i].body)) {
                            isColl = true;
                            clearPoolItem('planeBulletGroup', one, one.frame, _this);
                            clearPoolItem('enemyGroup', _this.enemyGroup[i], _this.enemyGroup[i].frame, _this);
                            break;
                        }
                    }
                }
                if (!isColl) {
                    // 如果超出屏幕，就回收到池子，并从舞台去除，将 planeBulletGroup 中的去除
                    if (one.body.y < 0) {
                        clearPoolItem('planeBulletGroup', one, one.frame, _this);
                    }
                }
            };
            this.addEventListener(egret.Event.ENTER_FRAME, one.frame, this);
        }
        return one;
    };
    Game.prototype.enemyFire = function (enemy) {
        var _this = this;
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        // 取出不活动的子弹
        var getOne = function () {
            var pool = Pool.getInstance();
            var one = pool.getActiveFalseOne(_this.enemyFirePoolName);
            if (one) {
                one.body.x = enemy.body.x + enemy.body.width / 2;
                one.body.y = enemy.body.y + enemy.body.height;
                _this.addChild(one.body);
                one.frame = function () {
                    one.body.y += _this.enemyFireDis;
                    // 如果敌机子弹与飞机碰撞，则失败，停止游戏
                    var isColl = false;
                    if (isCollision(one.body, _this.plane)) {
                        isColl = true;
                        // 设置flag
                        !platform.gameover && _this.gameOver();
                        clearPoolItem('enemyBulletGroup', one, one.frame, _this);
                    }
                    if (!isColl) {
                        // 如果超出屏幕，就回收到池子，并从舞台去除，将 enemyBulletGroup 中的去除
                        if (one.body.y > stageH + one.body.height) {
                            clearPoolItem('enemyBulletGroup', one, one.frame, _this);
                        }
                    }
                };
                _this.addEventListener(egret.Event.ENTER_FRAME, one.frame, _this);
            }
            return one;
        };
        var timerFn = function () {
            if (!enemy.active) {
                // 如果enemy已经被回收了，那么清除它的子弹定时器
                enemy.body.fireTimer.removeEventListener(egret.TimerEvent.TIMER, enemy.body.fireTimerFn, _this);
                return;
            }
            // 如果子弹组的数量少于池的创建数量，那就从池取出
            if (_this.enemyBulletGroup.length < _this.pool.poolMap[_this.enemyFirePoolName].length) {
                var res = getOne();
                res && _this.enemyBulletGroup.push(res);
            }
        };
        var timer = new egret.Timer(500, Infinity);
        timer.addEventListener(egret.TimerEvent.TIMER, timerFn, this);
        timer.start();
        enemy.body.fireTimer = timer;
        enemy.body.fireTimerFn = timerFn;
    };
    Game.prototype.gameOver = function () {
        platform.gameover = true;
        // 背景滚动清除
        this.removeEventListener(egret.Event.ENTER_FRAME, this.bgFrame, this);
        // 触摸清除
        this.plane.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
        this.plane.removeEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
        this._touchStatus = false;
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
        // 创建敌人清除
        this.createEnemyTimer.removeEventListener(egret.TimerEvent.TIMER, this.createEnemyTimerFn, this);
        // 切换场景
        this.scene.pop();
    };
    return Game;
}(egret.DisplayObjectContainer));
__reflect(Game.prototype, "Game");
