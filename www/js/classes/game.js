// TODO:
// 手札をrootSceneにaddする書き方変える

Game = Class.create(Core,{
    fps: Settings.FPS,
    fpsLabel: null,
    scale: 1,
    
    state: 0,
    
    panelMain: null,
    turn: null,

    initialize: function() {
        this.screenSize = {
            width: Game.SCREEN_WIDTH,
            height: Game.SCREEN_HEIGHT,
            zoom: Game.SCREEN_ZOOM
        };
        
        // Set screen size
        if (getUa() == 'iPhone') {
            this.screenSize.height = window.screen.height - 108; 
        } else if(getUa() == 'iPad') {
            this.screenSize.height = 382;
        } else if(getUa() == 'Android') {
            this.screenSize.zoom = screen.availWidth / this.screenSize.width;
            this.screenSize.height = screen.availHeight ? ~~((screen.availHeight - 76*4) / this.screenSize.zoom) : 420;
        } else this.screenSize.height = 480;
        
        Core.call(this,this.screenSize.width,this.screenSize.height);
        
        this.rootScene.backgroundColor = Game.BACKGROUND_COLOR;
        
        this.fpsLabel = new Label();
        this.fpsLabel.font = Settings.FONT;
        this.fpsLabel.color = "white";
        this.fpsLabel.textAlign = "left";
        this.fpsLabel.x = 10;
        this.fpsLabel.y = 5;
        this.fpsLabel.width = 240;
        
        this.scale = Game.DEFAULT_SCALE;

        this.players = new Players();
        this.players.shuffleTurnOwner();

        // TODO: 書き方変えたい、値は定数化
        this.rootScene.addChild(this.players.enemy.handCardMain.handCardGroup);
        this.players.enemy.handCardMain.handCardGroup.x = 0;
        this.players.enemy.handCardMain.handCardGroup.y = 0;
        this.players.enemy.handCardMain.handCardGroup.adjustCardsPosition();
        this.rootScene.addChild(this.players.me.handCardMain.handCardGroup);
        this.players.me.handCardMain.handCardGroup.x = 0;
        this.players.me.handCardMain.handCardGroup.y = 400;
        this.players.me.handCardMain.handCardGroup.adjustCardsPosition();

        this.state = Game.STATE_INIT;
    },
    
    updateFpsLabel: function() {
        if(!this.oldFrameCount) {
            this.oldFrameCount = 0;
        }
        if(this.fpsLabel !== null) {
            this.fpsLabel.text = (this.frame - this.oldFrameCount) + ' fps';
            this.oldFrameCount = this.frame;
        }
    },

    resetPanels: function() {
        if(this.panelMain !== null) {
            this.panelMain.reset();
        } else {
            var panelMain = new PanelMain();
            this.panelMain = panelMain;
            this.panelMain.setPanels();
            this.panelMain.x = (this.screenSize.width - (Panel.WIDTH * PanelMain.ROW)) / 2;
            this.panelMain.y = (this.screenSize.height - (Panel.HEIGHT * PanelMain.COL)) / 2;
            this.rootScene.addChild(panelMain);
        }
    },
    
    startTurn: function(turnOwnerEnum) {
        this.turn = new Turn(this, turnOwnerEnum);
    },
    
    changeTurnOwner: function(turnOwnerEnum) {
        if(this.panelMain.finished() == false) {
            this.state = turnOwnerEnum == Turn.OWNER_PLAYER ? Game.STATE_ENEMY_TURN : Game.STATE_PLAYER_TURN;
        } else {
            this.state = Game.STATE_FINISH;
        }
    },
    
    onEnterFrame: function() {
        switch(this.state) {
            case Game.STATE_INIT:
                this.state = Game.STATE_PLAYER_TURN;
                break;
            case Game.STATE_PLAYER_TURN:
                this.startTurn(Turn.OWNER_PLAYER);
                this.rootScene.addChild(this.turn);
                this.state = Game.STATE_WAITING_PLAYER_TURN;
                break;
            case Game.STATE_WAITING_PLAYER_TURN:
                break;
            case Game.STATE_ENEMY_TURN:
                this.startTurn(Turn.OWNER_ENEMY);
                this.rootScene.addChild(this.turn);
                this.state = Game.STATE_WAITING_ENEMY_TURN;
                break;
            case Game.STATE_WAITING_ENEMY_TURN:
                break;
            case Game.STATE_FINISH:
                this.removeEventListener(Event.ENTER_FRAME, arguments.callee);
                this.clear();
                break;
            default:
                this.removeEventListener(Event.ENTER_FRAME, arguments.callee);
                throw('invalid state.');
        }
    },
    
    clear: function() {
        this.stop();
        if(typeof(navigator.notification) !== 'undefined') {
            navigator.notification.alert("Cleared!", function(){}, "Congraturations");
        } else {
            alert("Cleared!");
        }
        this.end("Cleared!");
    }
});

Game.DEFAULT_SCALE = 1;
Game.SCREEN_WIDTH = 320;
Game.SCREEN_HEIGHT = 480;
Game.SCREEN_ZOOM = 1;
Game.BACKGROUND_COLOR = 'silver';

Game.STATE_INIT = 0;
Game.STATE_PLAYER_TURN = 1;
Game.STATE_WAITING_PLAYER_TURN = 2;
Game.STATE_ENEMY_TURN = 3;
Game.STATE_WAITING_ENEMY_TURN = 4;
Game.STATE_FINISH = 5;
