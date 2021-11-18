### 使用`typescript`

### 项目结构
    - `resource` 资源（声音、视频、图片）
    - `src` `Main.ts`是入口文件


### Main.ts
    - `loadResource` 加载资源
    - `createGameScene`创建游戏场景

### 常用api
文本
```
    let label:egret.TextField = new egret.TextField(); 
    label.text = "hello world!"; 
    label.textColor = 0xFFB6C1; // {number} 十六进制 0x开头
```
图片
```
    let img:egret.Bitmap = new egret.Bitmap();
    img.texture = RES.getRes("xxx_png");
```
形状
```
    let shp:egret.Shape = new egret.Shape();
    shp.graphics.beginFill( 0xff0000, 1);
    shp.graphics.drawRect( 0, 0, 100, 200 );
    shp.graphics.endFill();
```
声音
```
    let sound:egret.Sound = RES.getRes("mp3Name");
    sound.play();
    sound.stop();
```
事件(触摸)
```
    this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
    this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
```
计时器
```
    // 参数为时间间隔（ms）和执行次数
    let timer:egret.Timer = new egret.Timer(500, 5); 
    // 边计时边触发
    timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
    // 计时结束触发
    timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComFunc, this);
    timer.start();
    timer.stop();
    timer.reset();
```
本地存储
```
let key:string = "score";
let value:string = "100";
egret.localStorage.setItem(key, value);
let score:string = egret.localStorage.getItem(key);
egret.localStorage.removeItem(key);
egret.localStorage.clear();
```
frame事件
```
this.addEventListener(egret.Event.ENTER_FRAME, () => {}, this)
```

### 对象池
    - 为了可以让对象复用，防止大量重复创建对象，导致资源浪费，使用对象池来管理。
    - 对象池可以使用名字区分，如何子弹池，敌人池等
```    

设计思路：
    1、创建一个map，存放各个池，名字即键名
    2、池中物有一个状态，区分是否被取出
    3、池中物先创建再使用，最大值即创建时的数量，当一个物取出使用完被回收，回到池中等到下次取出，就不需要重新创建

```

### 切换场景
简单实现
```
    // this.addChild(场景实例)

    const begin = new Begin();
    this.addChild(begin);
```
可以实现一个全局的类，记录场景的栈 `Scene.ts`

### Frame事件不可滥用，不可替代定时器事件，有需要才用