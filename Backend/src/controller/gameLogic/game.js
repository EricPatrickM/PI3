/*
1 - Ouro
2 - Espadas
3 - Copas
4 - Paus
*/

class Player{
    deck=[]
}

class DeckOfCard{
    cards = []
    constructor(){//criar baralho
        for(let i=1;i <= 13;i++){
            if(i <= 7 || i >= 11){
                for(let j=1;j <= 4;j++){
                    this.cards.push({number:i, suit:j})
                }
            }
        }
    }
}

class Game{
    deckOfCard = new DeckOfCard()
    player1 = new Player()
    
    sorteada = 0 
    dealAllCards(amount){
        

    }
    dealCards(){//sortear cartas
        this.sorteada = Math.floor(Math.random() * this.deckOfCard.cards.length-1);
        this.player.deck.push(this.deckOfCard.cards[this.sorteada])
        this.deckOfCard.cards.splice(this.sorteada,1)
    }
    defineWildCard(){//definir o coringa
        if()
    }
    guessCard(){//Definir quantidade de rodadas

    }
    playCards(){//realizou a jogada

    }
    roundFinished(){

    }
    tieCard(){//Empachar as cartas

    }
    checkRoundsWon(){//Rodadas ganhas no final
        loseLifes(){//Perdeu vida
    
        }
    }

}

teste = new Game()
console.log(teste.dealCards())