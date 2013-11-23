// TODO:
// 手札配る

Player = Class.create(Group, {
    type: 0,
    handCardMain: null,
    initialize: function(type) {
        Group.call(this);
        this.type = type;
        this.handCardMain = new HandCardMain();
    }
});

Player.TYPE_ME = 1;
Player.TYPE_OPPONENT = 2;
