PanelMain = Class.create(Group, {
    panels: [],
    panelSetCompleted: false,
    
    initialize: function() {
        Group.call(this);
    },
    
    setPanels: function() {
        this.panels = [];
        this.panelSetCompleted = false;
        for(var i = 0, colSize = PanelMain.COL; i < colSize; i++) {
            for(var j = 0, rowSize = PanelMain.ROW; j < rowSize; j++) {
                var panel = new Panel(this);
                panel.x = j * Panel.WIDTH;
                panel.y = i * Panel.HEIGHT;
                this.addChild(panel);
                this.panels.push(panel);
            }
        }
        this.panelSetCompleted = true;
    },
    
    filledPanelsCount: function() {
        return this.panels.filter(function(panel, i, arr) { return panel.isFilled(); }).length;
    },
    
    reset: function() {
        this.dispose();
        this.setPanels();
    },
    
    finished: function() {
        return this.panelSetCompleted && this.panels.every(function(panel, i, arr) {
            return panel.isFilled();
        });
    },
    
    dispose: function() {
        while(0 < this.panels.length) {
            var panel = this.panels.pop();
            this.removeChild(panel);
            panel.image = null;
            panel = null;
        }
        this.panelSetCompletd = false;
        this.panels = [];
    }
});

PanelMain.COL = 3;
PanelMain.ROW = 3;
