var game = null;
var imgPath = {};

function init() {
    game = new Game();

    for(var i in imgPath) {
        game.preload(imgPath[i]);
    }
    
    $("#enchant-stage > div").css('-webkit-transform','none');
    
    game.onload = function(){
        game.rootScene.addChild(this.fpsLabel);
        
        game.resetPanels();
        
        // // fps表示
        game.updateFpsLabel();
        setInterval(function() { game.updateFpsLabel(); }, 1000);
        
        // Main loop
        game.rootScene.addEventListener(Event.ENTER_FRAME, game.onEnterFrame.bind(game));
    };
    game.start();
}

function reset() {
    game.pause();
    game.resetPanels();
    game.resume();
}
