/*
1 - Ouro
2 - Espadas
3 - Copas
4 - Paus
*/
import SuperPlayer from '../Players/SuperPlayer'
import DeckOfCard from '../Deck/DeckOfCard'
import Table from '../Table/Table'
import Player from '../Players/Player'
import Card from '../Card/Card'


export default class Game{
    private deckOfCard : DeckOfCard = new DeckOfCard()
    private players : SuperPlayer[] = []
    private table : Table
    private amountPlayers = 5

    constructor(amount : number){
        this.amountPlayers = amount
        for(let i=0;i < amount;i++){
            this.players.push(new Player('teste', 'teste'))
        }
        this.start()
    }


    start(){
        this.dealAllCards()
        this.defineWildCard()

        //define guess
        this.guessCard(0, 0)
        this.playCards(0, new Card(0, 0))

        this.roundFinished()
    }

    dealAllCards(){//sortear para todos e definir coringa
        this.deckOfCard.reset()
        for(let i=0;i < this.amountPlayers;i++){
            this.dealCards(this.table.Round, i)
        }
    }

    dealCards(amount:number, playerPosition:number){//sortear cartas para um jogador
        let sorteada : Card[] = []
        let indice : number
        for(let i=0;i < amount;i++){
            indice=Math.floor(Math.random() * this.deckOfCard.cards.length-1)
            sorteada.push(this.deckOfCard.Cards[indice]);
            this.deckOfCard.removeCard(indice)
        }
        this.players[playerPosition].Deck = sorteada
    }

    defineWildCard(){//definir o coringa
        if(this.table.Round * this.amountPlayers == 40){
            this.table.WildCard = new Card(-1, -1);
        } else {
            this.table.WildCard = this.deckOfCard.cards[Math.floor(Math.random() * this.deckOfCard.cards.length-1)];
        }
    }

    guessCard(playerPosition : number, amount : number){//Definir quantidade na rodadas
        this.players[playerPosition].RoundGuess = amount
    }

    playCards(playerPosition : number, value : Card){//realizou a jogada
        this.players[playerPosition].Deck.forEach((x)=>{
            if(x == value){
                this.table.AddCardInGame(this.players[playerPosition], value)
            }
        })
        this.tieCard()
    }

    phaseFinished(){//Quem ganhou a fase

    }

    roundFinished(){
        for(let x=0;x < this.amountPlayers;x++){
            this.players[x].RoundFinished()
        }
        this.table.NextRound()
    }

    tieCard(){//Empachar as cartas
        for(let x=0;x > this.table.DeckInGame.length;x++){
            for(let y=x;y > this.table.DeckInGame.length;y++){
                if(this.table.DeckInGame[x] == this.table.DeckInGame[y]){
                    this.table.DeckInGame.splice(x, 1)
                    this.table.DeckInGame.splice(y-1, 1)
                }
            }
        }
    }

    checkPhaseWon(){
        let wildcard = this.table.WildCard
        let deckInGame = this.table.DeckInGame

    }

    defineGreatestCard(){
        
    }
}