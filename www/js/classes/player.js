// TODO:
// 山札作ってそこからカード引くようにする

Player = Class.create(Group, {
    type: 0,
    handCardMain: null,
    initialize: function(type) {
        Group.call(this);
        this.type = type;
        this.handCardMain = new HandCardMain(this);

        this.drawCard();
        this.drawCard();
        this.drawCard();
        this.drawCard();
        this.drawCard();
    },

    drawCard: function() {
        this.handCardMain.addCard(new CardMain());
    }
});

Player.TYPE_ME = 1;
Player.TYPE_OPPONENT = 2;
