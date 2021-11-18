/**
 * 敌人
 */
class Enemy {

    public constructor() {

    }

    /**
     * 创建敌人
     * @return {egret.Bitmap} 
     */
    public create(): egret.Bitmap {
        let enemy = createBitmapByName("balloon_png");
        return enemy;
    }
}
