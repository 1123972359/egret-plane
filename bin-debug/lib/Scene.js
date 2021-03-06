var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 场景类
 */
var Scene = (function () {
    function Scene() {
        this.sceneStack = []; // 场景栈
    }
    /**
     * 单例
     * @method getInstance
     * @return {Scene}
     */
    Scene.getInstance = function () {
        if (!Scene.instance) {
            Scene.instance = new Scene();
        }
        return Scene.instance;
    };
    /**
     * 打开新场景
     * @method push
     * @param {any} cls 场景类实例
     * @param {any} that this
     */
    Scene.prototype.push = function (cls, that) {
        this.sceneStack.push(cls);
        console.log("that", that);
        that.addChild(cls);
    };
    /**
     * 关闭当前场景
     * @method pop
     * @param {any} cls 场景类实例
     */
    Scene.prototype.pop = function () {
        var pop = this.sceneStack.pop();
        pop.parent.removeChild(pop);
    };
    return Scene;
}());
__reflect(Scene.prototype, "Scene");
