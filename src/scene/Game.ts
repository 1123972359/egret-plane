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
    private pool = Pool.getInstance(); // 对象池    

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
    private sky: egret.Bitmap;
    private sky2: egret.Bitmap;
    private skySpeed: number = 10;

    private createBg() {
        // 两张相同背景
        this.sky = createBitmapByName("bgg_png");
        this.addChild(this.sky);
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;
        this.sky.width = stageW;
        this.sky.height = stageH;

        this.sky2 = createBitmapByName("bgg_png");
        this.addChild(this.sky2);
        this.sky2.width = stageW;
        this.sky2.height = stageH;
        this.sky2.y = -stageH;
        this.addEventListener(egret.Event.ENTER_FRAME, this.bgFrame, this);
    }

    // 设置背景滚动
    private bgFrame() {
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;
        this.sky.y += this.skySpeed;
        this.sky2.y += this.skySpeed;
        if (this.sky.y >= stageH) {
            this.sky.y = -(stageH - this.sky2.y);
        }
        if (this.sky2.y >= stageH) {
            this.sky2.y = -(stageH - this.sky.y);
        }
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
    private createEnemyTimer: egret.Timer;
    private enemyLevel: number = 1;

    private createEnemy() {
        const en = new Enemy();
        const poolName: string = `enemy${this.enemyLevel}`;
        this.pool.create(() => en.create(this.enemyLevel), poolName, 2);

        this.createEnemyTimer = new egret.Timer(500, Infinity);
        this.createEnemyTimer.addEventListener(egret.TimerEvent.TIMER, this.createEnemyTimerFn, this);
        this.createEnemyTimer.start();
    }

    private createEnemyTimerFn() {
        const poolName: string = `enemy${this.enemyLevel}`;
        // 如果敌人组的数量少于池的创建数量，那就从池取出
        if (this.enemyGroup.length < this.pool.poolMap[poolName].length) {
            const res = this.createEnemyGetOne();
            res && this.enemyGroup.push(res);
        }
    }

    // 取出不活动的敌人
    private createEnemyGetOne() {
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;
        const poolName: string = `enemy${this.enemyLevel}`;
        var one = this.pool.getActiveFalseOne(poolName);
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
        // 飞机普通子弹池
        this.pool.create(() => bu.create('normal'), 'bullet', 20);
        // 敌人普通子弹池
        this.pool.create(() => bu.create('emeny-1'), 'emeny-bullet', 100);
    }

    /**
     * 自己飞机开火
     */
    private planeBulletPoolName: string = 'bullet';
    private planeBulletDis: number = 20;
    private planeFireTimer: egret.Timer;

    private planeFire() {
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;

        this.planeFireTimer = new egret.Timer(500, Infinity);
        this.planeFireTimer.addEventListener(egret.TimerEvent.TIMER, this.planeFireTimerFn, this);
        this.planeFireTimer.start();

        this.plane.fireTimer = this.planeFireTimer;
        this.plane.fireTimerFn = this.planeFireTimerFn;
    }

    private planeFireTimerFn() {
        if (!this._touchStatus) {
            this.planeFireTimer.removeEventListener(egret.TimerEvent.TIMER, this.planeFireTimerFn, this);
            return;
        }
        // 如果子弹组的数量少于池的创建数量，那就从池取出
        if (this.planeBulletGroup.length < this.pool.poolMap[this.planeBulletPoolName].length) {
            const res = this.planeFireGetOne();
            res && this.planeBulletGroup.push(res);
        }
    }

    // 取出不活动的子弹
    private planeFireGetOne() {
        var one = this.pool.getActiveFalseOne(this.planeBulletPoolName);
        if (one) {
            one.body.x = this.plane.x + this.plane.width / 2;
            one.body.y = this.plane.y;
            this.addChild(one.body);

            one.frame = () => {
                one.body.y -= this.planeBulletDis;
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

    /**
     * 敌人开火
     * @method enemyFire
     * @param {any} enemy 敌人的pool
     */
    private enemyFireDis: number = 20;
    private enemyFirePoolName: string = 'emeny-bullet';

    private enemyFire(enemy: any) {
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;

        // 取出不活动的子弹
        const getOne = () => {
            const pool = Pool.getInstance();
            var one = pool.getActiveFalseOne(this.enemyFirePoolName);
            if (one) {
                one.body.x = enemy.body.x + enemy.body.width / 2;
                one.body.y = enemy.body.y + enemy.body.height;
                this.addChild(one.body);

                one.frame = () => {
                    one.body.y += this.enemyFireDis;
                    // 如果敌机子弹与飞机碰撞，则失败，停止游戏
                    let isColl = false;
                    if (isCollision(one.body, this.plane)) {
                        isColl = true;

                        // 设置flag
                        !platform.gameover && this.gameOver();

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
                // 如果enemy已经被回收了，那么清除它的子弹定时器
                enemy.body.fireTimer.removeEventListener(egret.TimerEvent.TIMER, enemy.body.fireTimerFn, this)
                return;
            }
            // 如果子弹组的数量少于池的创建数量，那就从池取出
            if (this.enemyBulletGroup.length < this.pool.poolMap[this.enemyFirePoolName].length) {
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

    /**
     * 游戏结束
     */
    private scene: Scene = Scene.getInstance();

    private gameOver() {
        platform.gameover = true;

        // 背景滚动清除
        this.removeEventListener(egret.Event.ENTER_FRAME, this.bgFrame, this)

        // 触摸清除
        this.plane.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
        this.plane.removeEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
        this._touchStatus = false;
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);

        // 创建敌人清除
        this.createEnemyTimer.removeEventListener(egret.TimerEvent.TIMER, this.createEnemyTimerFn, this);

        // 切换场景
        this.scene.pop();


    }

}