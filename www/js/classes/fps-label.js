// TODO:
//

FpsLabel = Class.create(Label, {
    initialize: function() {
        Label.call(this);
        this.font = Settings.FONT;
        this.color = 'white';
        this.textAlign = "left";
        this.x = 10;
        this.y = 5;
    }
});
