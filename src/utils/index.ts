
/**
 * 数组填充
 * @method fill
 * @param {any[]} arr 数组
 * @param {Function} fn 填充物函数
 * @returns {any[]} 填充后的数组
 */
function fill(arr: any[], fn: Function): any[] {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = fn();
    }
    return arr;
}

/**
 * 创建随机id
 * @method randomId
 * @return {number}
 */
function randomId() {
    return Math.floor(new Date().getTime() + Math.random() * 1111 + Math.random() * 9999);
}

/**
 * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
 * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
 * @method createBitmapByName
 * @param {string} name 资源名
 * @return {egret.Bitmap}
 */
const createBitmapByName = (name: string) => {
    let result = new egret.Bitmap();
    let texture: egret.Texture = RES.getRes(name);
    result.texture = texture;
    return result;
}

/**
 * 描述文件加载成功，开始播放动画
 * Description file loading is successful, start to play the animation
 * @method startAnimation
 * @param {string[]} result 资源数组
 */
const startAnimation = (result: string[]) => {
    let parser = new egret.HtmlTextParser();

    let textflowArr = result.map(text => parser.parse(text));
    let textfield = this.textfield;
    let count = -1;
    let change = () => {
        count++;
        if (count >= textflowArr.length) {
            count = 0;
        }
        let textFlow = textflowArr[count];

        // 切换描述内容
        // Switch to described content
        textfield.textFlow = textFlow;
        let tw = egret.Tween.get(textfield);
        tw.to({ "alpha": 1 }, 200);
        tw.wait(2000);
        tw.to({ "alpha": 0 }, 200);
        tw.call(change, this);
    };

    change();
}

/**
 * 碰撞检测
 * @method isCollision
 * @param {any} a 检测物1
 * @param {any} b 检测物2
 * @return {boolean}
 */
const isCollision = (a: any, b: any): Boolean => {
    let flag = false;

    let l1 = a.x;
    let r1 = a.x + a.width;
    let t1 = a.y;
    let b1 = a.y + a.height;

    let l2 = b.x;
    let r2 = b.x + b.width;
    let t2 = b.y;
    let b2 = b.y + b.height;

    if (b1 < t2 || l1 > r2 || t1 > b2 || r1 < l2) {
        return false;
    }

    return true;
}

/**
 * 清理舞台对应池中物
 * @method clearPoolItem
 * @param {string} group 组名
 * @param {any} one 池中物
 * @param {Function} fn 清除的函数
 * @param {any} that this
 */
const clearPoolItem = (group: string, one: any, fn: Function, that: any) => {
    const pool = Pool.getInstance();
    pool.recoveryOne(one);
    that.removeChild(one.body);
    that.removeEventListener(egret.Event.ENTER_FRAME, fn, that)
    for (let i = 0; i < that[group].length; i++) {
        if (that[group][i].id === one.id) {
            that[group].splice(i, 1);
            break;
        }
    }
}