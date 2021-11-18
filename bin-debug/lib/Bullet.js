var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Bullet = (function () {
    function Bullet() {
        this.bulletType = (_a = {
                // 飞机normal子弹
                normal: function () {
                    var shape = new egret.Shape();
                    var long = 20;
                    var dis = 20;
                    shape.graphics.lineStyle(10, 0xff00ff);
                    shape.graphics.moveTo(0 / 2, 0);
                    shape.graphics.lineTo(0 / 2, 0 - long);
                    return shape;
                }
            },
            // 敌机normal子弹
            _a["emeny-1"] = function () {
                var shape = new egret.Shape();
                var long = 20;
                var dis = 20;
                shape.graphics.lineStyle(10, 0x2E8B57);
                shape.graphics.moveTo(0 / 2, 0);
                shape.graphics.lineTo(0 / 2, 0 - long);
                return shape;
            },
            _a);
        var _a;
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
__reflect(Bullet.prototype, "Bullet");
