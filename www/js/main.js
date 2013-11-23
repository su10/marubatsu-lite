enchant();

function callinit() {
    if(getUa() === false) init();
    else document.addEventListener("deviceready", init, false);
}

var game = null;
var imgPath = {};

function reset() {
    game.pause();
    game.resetPanels();
    game.resume();
}

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
        
        // Main loop(old)
        // game.rootScene.addEventListener(Event.ENTER_FRAME,function() {
        //     if(game.panelMain && game.panelMain.finished()) {
        //         game.clear();
        //     }
        // });
        
        // Main loop
        game.rootScene.addEventListener(Event.ENTER_FRAME, game.onEnterFrame.bind(game));
    };
    
    game.start();
}


// Public functions
function puts(obj) {
    var properties = '';
    for (var prop in obj){
        properties += prop + "=" + obj[prop] + "\n";
    }
    alert(properties);
}


function vibrate() {
    if(typeof(navigator.notification) !== 'undefined') navigator.notification.vibrate(500);
}

function getUa() {
    if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 ) {
        return 'iPhone'; 
    } else if(navigator.userAgent.indexOf('iPad') > 0) {
        return 'iPad';
    } else if(navigator.userAgent.indexOf('Android') > 0) {
        return 'Android';
    } else return false;
}
