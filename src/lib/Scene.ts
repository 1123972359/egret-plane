/**
 * 场景类
 */
class Scene {

    public static instance: Scene;

    public sceneStack: any[] = []; // 场景栈

    public constructor() {

    }

    /**
     * 单例
     * @method getInstance
     * @return {Scene}
     */
    public static getInstance(): Scene {
        if (!Scene.instance) {
            Scene.instance = new Scene()
        }
        return Scene.instance;
    }

    /**
     * 打开新场景
     * @method push
     * @param {any} cls 场景类实例
     * @param {any} that this
     */
    public push(cls: any, that: any) {
        this.sceneStack.push(cls);
        console.log(`that`, that);
        that.addChild(cls);
    }

    /**
     * 关闭当前场景
     * @method pop
     * @param {any} cls 场景类实例
     */
    public pop() {
        const pop = this.sceneStack.pop()
        pop.parent.removeChild(pop);
    }
}