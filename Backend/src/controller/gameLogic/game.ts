/*
1 - Ouro
2 - Espadas
3 - Copas
4 - Paus
*/
import Player from './Players/Player'

class DeckOfCard{
    public cards : any = []
    reset(){//criar baralho
        for(let i=1;i <= 13;i++){
            if(i <= 7 || i >= 11){
                for(let j=1;j <= 4;j++){
                    this.cards.push({ number:i, suit:j})
                }
            }
        }
    }
}

export default class Game{
    private deckOfCard : DeckOfCard = new DeckOfCard()
    private players : Player[] = []
    private amountPlayers = 5
    private sorteada: any = []
    private currentRound = 4
    private wildcard = null

    constructor(amount : number){
        this.amountPlayers = amount
        for(let i=0;i < amount;i++){
            this.players[i] = new Player
        }
    }

    dealAllCards(){//sortear para todos
        this.deckOfCard.reset()
        if(this.currentRound * this.amountPlayers > 40){
            this.currentRound=1
        }
        for(let i=0;i < this.amountPlayers;i++){
            this.dealCards(this.currentRound, i)
        }
    }

    dealCards(amount:number, playerPosition:number){//sortear cartas
        this.sorteada = []
        for(let i=0;i < amount;i++){
            this.sorteada.push(this.deckOfCard.cards[Math.floor(Math.random() * this.deckOfCard.cards.length-1)]);
        }
        this.players[playerPosition].deck = this.sorteada
        this.deckOfCard.cards.splice(this.sorteada,1)
    }

    defineWildCard(){//definir o coringa
        if(this.currentRound * this.amountPlayers == 40){
            this.currentRound=1
        } else {
            this.wildcard = this.deckOfCard.cards[Math.floor(Math.random() * this.deckOfCard.cards.length-1)];
            this.deckOfCard.cards.splice(this.sorteada,1)
        }
    }

    guessCard(){//Definir quantidade na rodadas

    }

    playCards(){//realizou a jogada

    }

    roundFinished(){

    }

    tieCard(){//Empachar as cartas

    }

    checkRoundsWon(){//Rodadas ganhas no final
    
    }
    
    loseLifes(){//Perdeu vida

    }
}

class Room{
    createRoom(){//criar salas customizadas

    }
    deleteRoom(){//deletar salas customizadas

    }
    leaveRoom(){//tirar um jogador da sala e acionar a IA

    }
    checkEmptyRoom(){//Excluir salas que estiverem vazias

    }
    pauseRoom(){//pausar as salas publicas

    }
}