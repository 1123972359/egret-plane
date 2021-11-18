/**
 * 敌人
 */
class Enemy {

    public constructor() {

    }

    /**
     * 创建敌人
     * @param {number} lv default=1
     * @return {EnemyBitmap} 
     */
    public create(lv: number = 1): egret.Bitmap {
        let enemy: any = createBitmapByName("balloon_png");
        enemy.level = lv;
        return enemy;
    }
}
