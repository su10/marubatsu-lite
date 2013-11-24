var game = null;
var imgPath = {};

function init() {
    game = new Game();

    for(var i in imgPath) {
        game.preload(imgPath[i]);
    }
    
    $("#enchant-stage > div").css('-webkit-transform','none');
    
    game.start();
}

function reset() {
    game.pause();
    game.reset();
    game.resume();
}
