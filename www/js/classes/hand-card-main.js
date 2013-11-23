// TODO:
// spriteにカード追加・削除
// IE6~8で動かないけどgetter使いたい

HandCardMain = Class.create(Object, {
    cards: null,
    handCardGroup: null,

    initialize: function() {
        this.cards = [];
        this.handCardGroup = new HandCardGroup(this);
    },

    addCard: function(card) {
        if(card instanceof Card) {
            this.cards.push(card);
            this.handCardGroup.addCard(card.cardSprite);
        } else {
            throw 'invalid class.';
        }
    },

    removeCard: function(card) {
        for(var i = 0, l = this.cards.length; i < l; i++) {
            if(card === this.cards[i]) {
                this.cards.slice(i, 1);
                this.handCardGroup.removeCard(card.cardSprite);
                break;
            }
        }
    }
});
