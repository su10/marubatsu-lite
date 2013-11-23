// TODO:
// 

CardSprite = Class.create(Sprite, {
    cardMain: null,

    initialize: function(cardMain) {
        Sprite.call(this, CardSprite.WIDTH, CardSprite.HEIGHT);
        this.cardMain = cardMain;
        
        var s = new Surface(CardSprite.WIDTH, CardSprite.HEIGHT);
        var c = s.context;
        c.fillStyle = "green";
        c.lineWidth = 1;
        
        var x = 0;
        var y = 0;
        var r = 12;
        
        var w = CardSprite.WIDTH;
        var h = CardSprite.HEIGHT;
        
        c.beginPath();
        c.moveTo(x+r,y);
        c.lineTo(w+x-r,y);
        c.arcTo(w+x,y,w+x,y+r,r);
        c.lineTo(w+x,h+y-r);
        c.arcTo(w+x,h+y,w+x-r,h+y,r);
        c.lineTo(x+r,h+y);
        c.arcTo(x,h+y,x,h+y-r,r);
        c.lineTo(x,y+r);
        c.arcTo(x,y,x+r,y,r);
        c.fill();
        
        this.image = s;
    }
});

CardSprite.WIDTH = 80;
CardSprite.HEIGHT = 80;
