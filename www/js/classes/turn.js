Turn = Class.create(Group, {
    game: null,
    owner: 0,
    phase: 0,
    
    initialize: function(game, turnOwnerEnum) {
        Group.call(this);
        this.game = game;
        this.owner = turnOwnerEnum;
        this.phase = Turn.PHASE_UPKEEP;
        
        var self = this;
        var startFilledPanelCount = game.panelMain.filledPanelsCount();
        
        this.addEventListener(Event.ENTER_FRAME, function() {
            switch(self.phase) {
                case Turn.PHASE_UPKEEP:
                    // should do something.
                    self.phase = Turn.PHASE_DRAW;
                    break;
                case Turn.PHASE_DRAW:
                    // should draw a card.
                    self.phase = Turn.PHASE_MAIN;
                    break;
                case Turn.PHASE_MAIN:
                    // should use a card.
                    if(startFilledPanelCount < game.panelMain.filledPanelsCount()) {
                        self.phase = Turn.PHASE_END;
                    }
                    break;
                case Turn.PHASE_END:
                    // should do something.
                    self.removeEventListener(Event.ENTER_FRAME, arguments.callee);
                    game.changeTurnOwner(turnOwnerEnum == Turn.OWNER_PLAYER ? Turn.OWNER_PLAYER : Turn.OWNER_ENEMY);
                    break;
            }
        });
    }
});

Turn.OWNER_PLAYER = 1;
Turn.OWNER_ENEMY = 2;

Turn.PHASE_UPKEEP = 1;
Turn.PHASE_DRAW = 2;
Turn.PHASE_MAIN = 3;
Turn.PHASE_END = 4;
