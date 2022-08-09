import Card from "../Card/Card"
import PlayerCard from "../PlayerCard/PlayerCard"
import SuperPlayer from "../Players/SuperPlayer"

export default class Table{
    private round : number
    private deckInGame : PlayerCard[]
    private wildCard : Card
    constructor(){
        this.round = 1
        this.deckInGame = []
        this.wildCard
    }
    get Round(){
        return this.round
    }
    set Round(value : number){
        this.round = value
    }
    get DeckInGame(){
        return this.deckInGame
    }

    AddCardInGame(jogador:SuperPlayer, value : Card){
        this.deckInGame.push(new PlayerCard(value, jogador))
    }
    
    NextRound(){
        if(this.round == 7){
            this.round=1
        } else {
            this.round+=1
        }
    }

    get WildCard(){
        return this.wildCard
    }
    set WildCard(value : Card){
        this.wildCard = value
    }
}