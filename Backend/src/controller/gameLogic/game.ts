/*
1 - Ouro
2 - Espadas
3 - Copas
4 - Paus
*/
import Player from './Players/Player'

class DeckOfCard{
    public deck : any = []
    constructor(){//criar baralho
        for(let i=1;i <= 13;i++){
            if(i <= 7 || i >= 11){
                for(let j=1;j <= 4;j++){
                    this.deck.push({ number:i, suit:j})
                }
            }
        }
    }
}

class Game{
    private deckOfCard = new DeckOfCard()
    private players : Player[] = []
    constructor(amount : number){
        for(let i = 0;i < amount;i++){
            this.players[i] = new Player
        }
    }

    dealAllCards(amount : number){//sortear para todos
        for(let i = 0;i < amount;i++){
            this.players[i].deck = this.dealCards(5)
        }
        for(let i = 0;i < amount;i++){
            console.log('Jogador: ' + i + '\n' + this.players[i].deck)
        }
    }
    dealCards(amount : number){//sortear cartas para um jogador
        let deck : any = []
        let sorted : number = 0
        for(let i = 0;i < amount;i++){
            sorted = Math.floor(Math.random() * this.deckOfCard.deck.length-1);
            deck.push(this.deckOfCard.deck[sorted])
            this.deckOfCard.deck.splice(sorted,1)
        }
        return deck
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

//criar as 10 salas publicas
let teste = new Game(5)