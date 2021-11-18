/**
 * 子弹
 */
type bulletType = {
    normal: Function
}

class Bullet {

    private bulletType: bulletType = {
        // 飞机normal子弹
        normal: () => {
            var shape: egret.Shape = new egret.Shape();
            const long: number = 20;
            const dis: number = 20;
            shape.graphics.lineStyle(10, 0xff00ff);
            shape.graphics.moveTo(0 / 2, 0);
            shape.graphics.lineTo(0 / 2, 0 - long);
            return shape;
        },
        // 敌机normal子弹
        [`emeny-1`]: () => {
            var shape: egret.Shape = new egret.Shape();
            const long: number = 20;
            const dis: number = 20;
            shape.graphics.lineStyle(10, 0x2E8B57);
            shape.graphics.moveTo(0 / 2, 0);
            shape.graphics.lineTo(0 / 2, 0 - long);
            return shape;
        }
    };

    public constructor() {
    }


    /**
     * 创建子弹
     * @param {string} type 子弹类型
     * @return {egret.Shape} 
     */
    public create(type: string): egret.Shape {
        const shape = this.bulletType[type]();
        return shape;
    }
}

