// TODO:
// 手札配る

Player = Class.create(Group, {
    type: 0,
    initialize: function(type) {
        Group.call(this);
        this.type = type;
        
    }
});

Player.TYPE_ME = 1;
Player.TYPE_OPPONENT = 2;