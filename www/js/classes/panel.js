Panel = Class.create(Sprite, {
    panelMain: null,
    
    state: 0,
    color: '',

    initialize: function(panelMain) {
        Sprite.call(this, Panel.WIDTH, Panel.HEIGHT);
        
        this.panelMain = panelMain;
        
        this.state = Panel.STATE_FREE;
        this.color = Panel.DEFAULT_COLOR;
        
        var s = new Surface(Panel.WIDTH, Panel.HEIGHT);
        var c = s.context;
        c.fillStyle = this.color;
        c.fillRect(0, 0, Panel.WIDTH, Panel.HEIGHT);
        c.strokeStyle = Panel.DEFAULT_FRAME_COLOR;
        c.strokeRect(0, 0, Panel.WIDTH, Panel.HEIGHT);
        
        this.image = s;
        
        var self = this;
        
        this.addEventListener(Event.TOUCH_END, function() {
            self.removeEventListener(Event.TOUCH_END, arguments.callee);
            
            self.color = Settings.MY_TURN ? Panel.MY_COLOR : Panel.ENEMY_COLOR;
            
            var s = new Surface(Panel.WIDTH, Panel.HEIGHT);
            var c = s.context;
            c.fillStyle = self.color;
            c.fillRect(0, 0, Panel.WIDTH, Panel.HEIGHT);
            self.image = s;
            
            Settings.MY_TURN = !Settings.MY_TURN;
            
            self.state = Panel.STATE_FILLED;
        });
    },
    
    isFilled: function() {
        return this.state == Panel.STATE_FILLED;
    }
});

Panel.STATE_DEFAULT = 0;
Panel.STATE_FREE = 1;
Panel.STATE_FILLED = 2;

Panel.DEFAULT_COLOR = 'white';
Panel.DEFAULT_FRAME_COLOR = 'black';
Panel.MY_COLOR = 'red';
Panel.ENEMY_COLOR = 'blue';

Panel.WIDTH = 80;
Panel.HEIGHT = 80;
