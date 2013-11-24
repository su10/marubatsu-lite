// TODO:
//

FpsLabel = Class.create(Label, {
    oldFrameCount: 0,

    initialize: function() {
        Label.call(this);
        this.game = game;
        this.text = '0 fps';
        this.font = Settings.FONT;
        this.color = 'white';
        this.textAlign = "left";
        this.x = 10;
        this.y = 5;
    },

    update: function(game) {
        this.text = (game.frame - this.oldFrameCount) + ' fps';
        this.oldFrameCount = game.frame;
    }
});
