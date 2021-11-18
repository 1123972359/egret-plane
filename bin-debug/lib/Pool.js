var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 对象池
 * @author lbb
 */
var Pool = (function () {
    function Pool() {
        this.poolMap = {}; // 池
        this.length = 0;
    }
    /**
     * 获取实例
     * @return {Pool}
     */
    Pool.getInstance = function () {
        return this.instance;
    };
    /**
     * 预创建池
     * @method create
     * @param {function} create 创建方法
     * @param {string} key 键名
     * @param {number} num 初始化数量
     * @return {any[]}
     */
    Pool.prototype.create = function (create, key, num) {
        if (!this.poolMap.hasOwnProperty(key)) {
            this.poolMap[key] = [];
        }
        this.poolMap[key] = fill(new Array(num), function () { return ({
            id: randomId(),
            active: false,
            body: create()
        }); });
        this.length = num;
        return this.poolMap[key];
    };
    /**
     * 获取一个不活动的对象，并把状态设置为活动
     * @method getActivceFalseOne
     * @param {string} key 键名
     * @return {any}
     */
    Pool.prototype.getActivceFalseOne = function (key) {
        var arr = this.poolMap[key];
        var res = arr.filter(function (item) { return !item.active; });
        if (res.length > 0) {
            res[0].active = true;
            return res[0];
        }
        return false;
    };
    /**
     * 回收对象，并把状态设置为不活动
     * @method recoveryOne
     * @param {any} one 一个池物
     */
    Pool.prototype.recoveryOne = function (one) {
        one.active = false;
        one.body.x = one.body.y = 0;
    };
    Pool.instance = new Pool(); // 单例
    return Pool;
}());
__reflect(Pool.prototype, "Pool");
