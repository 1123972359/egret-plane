/**
 * 对象池
 * @author lbb
 */
class Pool {

    private static instance: Pool = new Pool(); // 单例

    private poolMap: Object = {}; // 池

    public length: number = 0;

    private constructor() {
    }

    /**
     * 获取实例
     * @return {Pool}
     */
    public static getInstance(): Pool {
        return this.instance;
    }

    /**
     * 预创建池
     * @method create 
     * @param {function} create 创建方法
     * @param {string} key 键名
     * @param {number} num 初始化数量
     * @return {any[]}
     */
    public create(create: Function, key: string, num: number): any[] {
        if (!this.poolMap.hasOwnProperty(key)) {
            this.poolMap[key] = [];
        }
        this.poolMap[key] = fill(new Array(num), () => ({
            id: randomId(),
            active: false,
            body: create()
        }));
        this.length = num;
        return this.poolMap[key];
    }

    /**
     * 获取一个不活动的对象，并把状态设置为活动
     * @method getActivceFalseOne
     * @param {string} key 键名
     * @return {any}
     */
    public getActivceFalseOne(key: string): any {
        var arr: any[] = this.poolMap[key];
        var res = arr.filter(item => !item.active);
        if (res.length > 0) {
            res[0].active = true;
            return res[0];
        }
        return false;
    }

    /**
     * 回收对象，并把状态设置为不活动
     * @method recoveryOne
     * @param {any} one 一个池物
     */
    public recoveryOne(one: any) {
        one.active = false;
        one.body.x = one.body.y = 0;
    }

}
