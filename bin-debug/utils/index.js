var _this = this;
/**
 * 数组填充
 * @method fill
 * @param {any[]} arr 数组
 * @param {Function} fn 填充物函数
 * @returns {any[]} 填充后的数组
 */
function fill(arr, fn) {
    for (var i = 0; i < arr.length; i++) {
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
var createBitmapByName = function (name) {
    var result = new egret.Bitmap();
    var texture = RES.getRes(name);
    result.texture = texture;
    return result;
};
/**
 * 描述文件加载成功，开始播放动画
 * Description file loading is successful, start to play the animation
 * @method startAnimation
 * @param {string[]} result 资源数组
 */
var startAnimation = function (result) {
    var parser = new egret.HtmlTextParser();
    var textflowArr = result.map(function (text) { return parser.parse(text); });
    var textfield = _this.textfield;
    var count = -1;
    var change = function () {
        count++;
        if (count >= textflowArr.length) {
            count = 0;
        }
        var textFlow = textflowArr[count];
        // 切换描述内容
        // Switch to described content
        textfield.textFlow = textFlow;
        var tw = egret.Tween.get(textfield);
        tw.to({ "alpha": 1 }, 200);
        tw.wait(2000);
        tw.to({ "alpha": 0 }, 200);
        tw.call(change, _this);
    };
    change();
};
/**
 * 碰撞检测
 * @method isCollision
 * @param {any} a 检测物1
 * @param {any} b 检测物2
 * @return {boolean}
 */
var isCollision = function (a, b) {
    var flag = false;
    var l1 = a.x;
    var r1 = a.x + a.width;
    var t1 = a.y;
    var b1 = a.y + a.height;
    var l2 = b.x;
    var r2 = b.x + b.width;
    var t2 = b.y;
    var b2 = b.y + b.height;
    if (b1 < t2 || l1 > r2 || t1 > b2 || r1 < l2) {
        return false;
    }
    return true;
};
/**
 * 清理舞台对应池中物
 * @method clearPoolItem
 * @param {string} group 组名
 * @param {any} one 池中物
 * @param {Function} fn 清除的函数
 * @param {any} that this
 */
var clearPoolItem = function (group, one, fn, that) {
    var pool = Pool.getInstance();
    pool.recoveryOne(one);
    that.removeChild(one.body);
    that.removeEventListener(egret.Event.ENTER_FRAME, fn, that);
    for (var i = 0; i < that[group].length; i++) {
        if (that[group][i].id === one.id) {
            that[group].splice(i, 1);
            break;
        }
    }
};
