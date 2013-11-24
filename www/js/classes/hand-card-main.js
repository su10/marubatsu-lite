// TODO:
// spriteにカード追加・削除
// IE6~8で動かないけどgetter使いたい
// 選択状態のカードの位置を定数にする

HandCardMain = Class.create(Object, {
    player: null,
    cards: null,
    handCardGroup: null,
    selectedCard: null,

    initialize: function(player) {
        this.player = player;
        this.cards = [];
        this.handCardGroup = new HandCardGroup();
    },

    addCard: function(card) {
        if(card instanceof CardMain) {
            this.cards.push(card);
            card.handCardMain = this;
            this.handCardGroup.addCard(card.cardSprite);
        } else {
            throw 'invalid class.';
        }
    },

    removeCard: function(card) {
        for(var i = 0, l = this.cards.length; i < l; i++) {
            if(card === this.cards[i]) {
                this.cards[i].handCardMain = null;
                this.cards.slice(i, 1);
                this.handCardGroup.removeCard(card.cardSprite);
                break;
            }
        }
    },

    selectCard: function(card) {
        if(this.selectedCard === card) return;
        if(this.selectedCard) {
            // 位置を戻す
            this.selectedCard.cardSprite.y = 0;
        }
        card.cardSprite.y -= 30;
        this.selectedCard = card;
    }
});
