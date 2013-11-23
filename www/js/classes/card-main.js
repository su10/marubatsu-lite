// TODO:
// パワー&タフネス
// 能力

CardMain = Class.create(Group, {
    cardSprite: null,
    initialize: function() {
        Group.call(this);
        this.cardSprite = new CardSprite(this);
    }
});
