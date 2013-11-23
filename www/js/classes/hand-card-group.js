// TODO:
// add,remove後の全部のカード位置調整

HandCardGroup = Class.create(Group, {
    handCardMain: null,

    initialize: function(handCardMain) {
        Group.call(this);
        this.handCardMain = handCardMain;
    },

    addCard: function(cardSprite) {
        this.addChild(cardSprite);
    },

    removeCard: function(cardSprite) {
        this.removeChild(cardSprite);
    }
});
