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
    private plane: egret.Bitmap; // 飞机
    private _distance: egret.Point = new egret.Point(); // 鼠标点击时，鼠标全局坐标与_bird的位置差
    private enemyGroup: any[] = []; // 敌人组
    private planeBulletGroup: any[] = []; // 飞机子弹组

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
        pool.create(() => en.create(), 'enemy', 10);
        // 取出不活动的敌人
        const getOne = () => {
            var one = pool.getActivceFalseOne('enemy');
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
            }
            return one;
        }

        let timeStamp = 0;
        let createTimeStamp = 500;
        this.addEventListener(egret.Event.ENTER_FRAME, () => {
            // 如果敌人组的数量少于池的创建数量，那就从池取出
            if (this.enemyGroup.length < pool.length) {
                // 一秒创建一个
                let now = new Date().getTime()
                if (now - timeStamp >= createTimeStamp) {
                    timeStamp = now;
                    const res = getOne();
                    res && this.enemyGroup.push(res);
                }
            }
        }, this)
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
        pool.create(() => bu.create('normal'), 'bullet', 20);
    }

    // 开火
    private planeFire() {
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;
        const pool = Pool.getInstance();
        const dis: number = 20;

        // 取出不活动的子弹
        const getOne = () => {
            const pool = Pool.getInstance();
            var one = pool.getActivceFalseOne('bullet');
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
                        console.log(`one.body.height`, this.plane.y + one.body.y, one.body.height);
                        if (one.body.y < 0) {
                            clearPoolItem('planeBulletGroup', one, one.frame, this);
                        }
                    }
                }
                this.addEventListener(egret.Event.ENTER_FRAME, one.frame, this)
            }
            return one;
        }

        let timeStamp = 0;
        let createTimeStamp = 100;

        const frame = () => {
            if (!this._touchStatus) {
                this.removeEventListener(egret.Event.ENTER_FRAME, frame, this)
                return;
            }
            // 如果子弹组的数量少于池的创建数量，那就从池取出
            if (this.planeBulletGroup.length < pool.length) {
                // 一秒创建一个
                let now = new Date().getTime()
                if (now - timeStamp >= createTimeStamp) {
                    timeStamp = now;
                    const res = getOne();
                    res && this.planeBulletGroup.push(res);
                }
            }
        }

        this.addEventListener(egret.Event.ENTER_FRAME, frame, this)
    }

}