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
import Bot from '../Players/Bot'

import Card from '../Card/Card'


export default class Game{
    private deckOfCard : DeckOfCard = new DeckOfCard()
    private players : SuperPlayer[] = []
    private table : Table
    private amountPlayers = 5

    public insertNewPlayer(place : number, socketId:string){
        this.players[place] = new Player("")
    }

    public getAllPlayers():SuperPlayer[]{
        return this.players
    }

    constructor(amount : number){
        this.amountPlayers = amount
        this.table = new Table()
        for(let i=0;i < amount;i++){
            this.players.push(new Bot())
        }
        this.start()
    }


    private start(){
        this.deckOfCard.reset()
        this.dealAllCards()
        this.defineWildCard()

        //define guess
        for(let i=0;i < this.amountPlayers;i++){
            this.guessCard(i, 0)
        }

        for(let i=0;i < this.table.Round;i++){
            for(let j=0;j < this.amountPlayers;j++){
                this.playCards(j, new Card(1, j+1))
            }
            this.phaseFinished()
        }
        this.roundFinished()
    }

    dealAllCards(){//sortear para todos e definir coringa
        for(let i=0;i < this.amountPlayers;i++){
            this.dealCards(this.table.Round, i)
        }
    }

    dealCards(amount:number, playerPosition:number){//sortear cartas para um jogador
        let sorteada : Card[] = []
        let indice : number
        for(let i=0;i < amount;i++){
            indice = Math.floor(Math.random() * this.deckOfCard.Cards.length)
            sorteada.push(this.deckOfCard.Cards[indice]);
            this.deckOfCard.removeCard(indice)
        }
        this.players[playerPosition].Deck = sorteada
    }

    defineWildCard(){//definir o coringa
        if(this.table.Round * this.amountPlayers == 40){
            this.table.WildCard = new Card(3, 0);
        } else {
            this.table.WildCard = this.deckOfCard.Cards[Math.floor(Math.random() * this.deckOfCard.Cards.length-1)];
        }
    }

    guessCard(playerPosition : number, amount : number){//Definir quantidade na rodadas
        this.players[playerPosition].RoundGuess = amount
    }

    playCards(playerPosition : number, value : Card){//realizou a jogada
        this.players[playerPosition].Deck.forEach((x)=>{
            //if(x.Number == value.Number && x.Suite == value.Suite){
                this.table.AddCardInGame(this.players[playerPosition], value)
            //}
        })
    }

    phaseFinished(){//Quem ganhou a fase
        let person : SuperPlayer = this.table.defineGreatestCard()
        person.PhaseFinished()
    }

    roundFinished(){
        for(let x=0;x < this.amountPlayers;x++){
            this.players[x].RoundFinished()
        }
        this.table.NextRound()
    }
}