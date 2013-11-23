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
    },

    adjustCardsPosition: function() {
        var lastX = 0;

        for(var i = 0, l = this.childNodes.length; i < l; i++) {
            lastX = lastX + HandCardGroup.CARD_GAP_X;
            this.childNodes[i].x = lastX;
        }
    }
});

HandCardGroup.CARD_GAP_X = 40;
