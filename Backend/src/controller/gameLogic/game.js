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
    players = []
    amountPlayers = 5
    sorteada = []
    currentRound = 4
    
    constructor(amount){
        this.amountPlayers = amount
        for(let i=0;i < amount;i++){
            this.players[i] = new Player
        }
    }

    dealAllCards(){
        if(this.currentRound * this.amountPlayers > 40){
            this.currentRound=1
        }
        for(let i=0;i < this.amountPlayers;i++){
            this.dealCards(this.currentRound, i)
        }
        for(let i=0;i < this.amountPlayers;i++){
            console.log(this.players[i].deck)
        }
    }

    dealCards(amount, playerPosition){//sortear cartas
        this.sorteada = []
        for(let i=0;i < amount;i++){
            this.sorteada.push(this.deckOfCard.cards[Math.floor(Math.random() * this.deckOfCard.cards.length-1)]);
        }
        console.log(this.sorteada)
        this.players[playerPosition].deck = this.sorteada
        this.deckOfCard.cards.splice(this.sorteada,1)
    }

    defineWildCard(){//definir o coringa

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
        /*loseLifes(){//Perdeu vida
    
        }*/
    }

}

teste = new Game(3)
teste.dealAllCards()