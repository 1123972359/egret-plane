var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 敌人
 */
var Enemy = (function () {
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
__reflect(Enemy.prototype, "Enemy");
