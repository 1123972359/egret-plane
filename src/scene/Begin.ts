/**
 * 开始场景
 */
class Begin extends egret.DisplayObjectContainer {

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin

            context.onUpdate = () => {
                if (platform.gameover) {
                    this.label.text = '重新开始';
                }
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

    private scene: Scene = Scene.getInstance();

    private async runGame() {
        this.ceateBeginRect();
        this.createBeginText();
    }

    private ceateBeginRect() {
        let shp: egret.Shape = new egret.Shape();
        shp.graphics.beginFill(0x778899, 1);
        shp.graphics.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight);
        shp.graphics.endFill();
        this.addChild(shp)
    }

    /**
     * 创建开始文字
     * @method createBeginText
     */
    private label: egret.TextField;
    private createBeginText() {
        let label: egret.TextField = new egret.TextField();
        label.text = '开始游戏';
        label.x = this.stage.stageWidth / 2 - label.width / 2;
        label.y = this.stage.stageHeight / 2;
        label.textColor = 0xFFB6C1;
        this.addChild(label)
        label.touchEnabled = true;
        label.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            const game = new Game();
            this.scene.push(game, this);
            platform.gameover = false;
        }, this)
        this.label = label;
    }

}