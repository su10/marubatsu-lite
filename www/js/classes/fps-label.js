// TODO:
//

FpsLabel = Class.create(Label, {
    oldFrame: 0,

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

    update: function(currentFrame) {
        this.text = (currentFrame - this.oldFrame) + ' fps';
        this.oldFrame = currentFrame;
    }
});
