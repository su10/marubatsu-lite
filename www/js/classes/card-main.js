// TODO:
// パワー&タフネス
// 能力

CardMain = Class.create(Group, {
    cardSprite: null,
    handCardMain: null,
    initialize: function() {
        Group.call(this);
        this.cardSprite = new CardSprite(this);

        this.cardSprite.addEventListener(Event.TOUCH_END, function() {
            this.handCardMain.selectCard(this);
        }.bind(this));
    }
});
