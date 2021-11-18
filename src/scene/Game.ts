/**
 * 游戏场景
 */
class Game extends egret.DisplayObjectContainer {
    constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
    }

    private onAddToStage(event: egret.Event) {

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin

            context.onUpdate = () => {

            }
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        this.runGame().catch(e => {
            console.log(e);
        })

    }

    private async runGame() {
        this.createGameScene();
    }

    private textfield: egret.TextField;
    private _touchStatus: Boolean = false; // 触摸按下
    private plane: egret.Bitmap & any; // 飞机
    private _distance: egret.Point = new egret.Point(); // 鼠标点击时，鼠标全局坐标与_bird的位置差
    private enemyGroup: any[] = []; // 敌人组
    private planeBulletGroup: any[] = []; // 飞机子弹组
    private enemyBulletGroup: any[] = []; // 敌人子弹组

    /**
     * 创建游戏场景
     * Create a game scene
     */
    private createGameScene() {
        this.createBg();

        this.createPlane();

        this.createEnemy();

        this.createBulltePool();
    }

    // 创建背景，背景滚动
    private createBg() {
        // 两张相同背景
        let sky = createBitmapByName("bgg_png");
        this.addChild(sky);
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;
        sky.width = stageW;
        sky.height = stageH;

        let sky2 = createBitmapByName("bgg_png");
        this.addChild(sky2);
        sky2.width = stageW;
        sky2.height = stageH;
        sky2.y = -stageH;
        const speed: number = 10;
        // 设置背景滚动
        this.addEventListener(egret.Event.ENTER_FRAME, () => {
            sky.y += speed;
            sky2.y += speed;
            if (sky.y >= stageH) {
                sky.y = -(stageH - sky2.y);
            }
            if (sky2.y >= stageH) {
                sky2.y = -(stageH - sky.y);
            }
        }, this)
    }

    // 飞机触摸移动
    private createPlane() {
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;
        let icon = createBitmapByName("close_png");
        this.addChild(icon);
        icon.x = stageW / 2 - icon.width / 2;
        icon.y = stageH / 2;
        this.plane = icon;
        this.plane.touchEnabled = true;
        this.plane.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
        this.plane.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
    }

    // 创建敌人
    private createEnemy() {
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;
        const en = new Enemy();
        const pool = Pool.getInstance();
        const level: number = 1;
        const poolName: string = `enemy${level}`;
        pool.create(() => en.create(level), poolName, 2);
        // 取出不活动的敌人
        const getOne = () => {
            var one = pool.getActiveFalseOne(poolName);
            if (one) {
                one.body.x = Math.random() * 1 + Math.random() * stageW * 0.9;
                one.body.y = -50;
                this.addChild(one.body);

                one.frame = () => {
                    one.body.y += 10;
                    if (one.body.y > stageH) {
                        // 如果超出屏幕，就回收到池子，并从舞台去除，将 enemyGroup 中的去除
                        clearPoolItem('enemyGroup', one, one.frame, this);
                    }
                }

                this.addEventListener(egret.Event.ENTER_FRAME, one.frame, this)

                // 敌人开火
                this.enemyFire(one);
            }
            return one;
        }

        const timerFn = () => {
            // 如果敌人组的数量少于池的创建数量，那就从池取出
            if (this.enemyGroup.length < pool.poolMap[poolName].length) {
                const res = getOne();
                res && this.enemyGroup.push(res);
            }
        }

        let timer: egret.Timer = new egret.Timer(500, Infinity);
        timer.addEventListener(egret.TimerEvent.TIMER, timerFn, this);
        timer.start();

    }

    private mouseDown(evt: egret.TouchEvent) {
        // console.log("Mouse Down.");
        this._touchStatus = true;
        this._distance.x = evt.stageX - this.plane.x;
        this._distance.y = evt.stageY - this.plane.y;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);

        // 开火
        this.planeFire();
    }

    private mouseMove(evt: egret.TouchEvent) {
        if (this._touchStatus) {
            // console.log("moving now ! Mouse: [X:" + evt.stageX + ",Y:" + evt.stageY + "]");
            this.plane.x = evt.stageX - this._distance.x;
            this.plane.y = evt.stageY - this._distance.y;
        }
    }

    private mouseUp(evt: egret.TouchEvent) {
        // console.log("Mouse Up.");
        this._touchStatus = false;
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
    }

    // 创建子弹池
    private createBulltePool() {
        const bu = new Bullet();
        const pool = Pool.getInstance();
        // 飞机普通子弹池
        pool.create(() => bu.create('normal'), 'bullet', 20);
        // 敌人普通子弹池
        pool.create(() => bu.create('emeny-1'), 'emeny-bullet', 100);
    }

    // 自己飞机开火
    private planeFire() {
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;
        const pool = Pool.getInstance();
        const dis: number = 20;
        const poolName: string = 'bullet';

        // 取出不活动的子弹
        const getOne = () => {
            const pool = Pool.getInstance();
            var one = pool.getActiveFalseOne(poolName);
            if (one) {
                one.body.x = this.plane.x + this.plane.width / 2;
                one.body.y = this.plane.y;
                this.addChild(one.body);

                one.frame = () => {
                    one.body.y -= dis;
                    // 如果飞机子弹与敌组碰撞，则将子弹和敌人去除
                    let isColl = false;
                    if (this.enemyGroup.length > 0) {
                        for (let i in this.enemyGroup) {
                            if (isCollision(one.body, this.enemyGroup[i].body)) {
                                isColl = true;
                                clearPoolItem('planeBulletGroup', one, one.frame, this);
                                clearPoolItem('enemyGroup', this.enemyGroup[i], this.enemyGroup[i].frame, this);
                                break;
                            }
                        }
                    }
                    if (!isColl) {
                        // 如果超出屏幕，就回收到池子，并从舞台去除，将 planeBulletGroup 中的去除
                        if (one.body.y < 0) {
                            clearPoolItem('planeBulletGroup', one, one.frame, this);
                        }
                    }
                }
                this.addEventListener(egret.Event.ENTER_FRAME, one.frame, this)
            }
            return one;
        }


        const timerFn = () => {
            if (!this._touchStatus) {
                timer.removeEventListener(egret.TimerEvent.TIMER, timerFn, this);
                return;
            }
            // 如果子弹组的数量少于池的创建数量，那就从池取出
            if (this.planeBulletGroup.length < pool.poolMap[poolName].length) {
                const res = getOne();
                res && this.planeBulletGroup.push(res);
            }
        }

        let timer: egret.Timer = new egret.Timer(500, Infinity);
        timer.addEventListener(egret.TimerEvent.TIMER, timerFn, this);
        timer.start();

        this.plane.fireTimer = timer;
        this.plane.fireTimerFn = timerFn;
    }

    /**
     * 敌人开火
     * @method enemyFire
     * @param {any} enemy 敌人的pool
     */
    private enemyFire(enemy: any) {
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;
        const pool = Pool.getInstance();
        const dis: number = 20;
        const poolName: string = 'emeny-bullet';

        const clearTimer = () => {
            // 如果enemy已经被回收了，那么清除它的子弹定时器
            enemy.body.fireTimer.removeEventListener(egret.TimerEvent.TIMER, enemy.body.fireTimerFn, this)
        }

        // 取出不活动的子弹
        const getOne = () => {
            const pool = Pool.getInstance();
            var one = pool.getActiveFalseOne(poolName);
            if (one) {
                one.body.x = enemy.body.x + enemy.body.width / 2;
                one.body.y = enemy.body.y + enemy.body.height;
                this.addChild(one.body);

                one.frame = () => {
                    one.body.y += dis;
                    // 如果敌机子弹与飞机碰撞，则失败，停止游戏
                    let isColl = false;
                    if (isCollision(one.body, this.plane)) {
                        isColl = true;

                        // 设置flag
                        this.gameOver();

                        clearPoolItem('enemyBulletGroup', one, one.frame, this);
                    }
                    if (!isColl) {
                        // 如果超出屏幕，就回收到池子，并从舞台去除，将 enemyBulletGroup 中的去除
                        if (one.body.y > stageH + one.body.height) {
                            clearPoolItem('enemyBulletGroup', one, one.frame, this);
                        }
                    }
                }
                this.addEventListener(egret.Event.ENTER_FRAME, one.frame, this)
            }
            return one;
        }

        const timerFn = () => {
            if (!enemy.active) {
                clearTimer();
                return;
            }
            // 如果子弹组的数量少于池的创建数量，那就从池取出
            if (this.enemyBulletGroup.length < pool.poolMap[poolName].length) {
                const res = getOne();
                res && this.enemyBulletGroup.push(res);
            }
        }

        let timer: egret.Timer = new egret.Timer(500, Infinity);
        timer.addEventListener(egret.TimerEvent.TIMER, timerFn, this);
        timer.start();

        enemy.body.fireTimer = timer;
        enemy.body.fireTimerFn = timerFn;
    }

    private scene: Scene;

    private gameOver() {
        platform.gameover = true;
        this.removeChild(this.plane);

        this.scene = Scene.getInstance();

        this.scene.pop(this);
        // 此处切换场景有问题

    }

}