// TODO:
// me,enemyとかいう名前をどうにかしたい
// 先攻後攻の抽選

Players = Class.create(Object, {
    me: null,
    enemy: null,
    turnOwner: null,
    initialize: function() {
        this.me = new Player(Player.TYPE_ME);
        this.enemy = new Player(Player.TYPE_ENEMY);
    },

    shuffleTurnOwner: function() {
        this.turnOwner = this.me;
    }
});
