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
     * @param {number} lv default=1
     * @return {EnemyBitmap}
     */
    Enemy.prototype.create = function (lv) {
        if (lv === void 0) { lv = 1; }
        var enemy = createBitmapByName("balloon_png");
        enemy.level = lv;
        return enemy;
    };
    return Enemy;
}());
__reflect(Enemy.prototype, "Enemy");
