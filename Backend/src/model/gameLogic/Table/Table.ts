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
        this.wildCard = new Card(5,1)
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
        this.tieCard()
    }

    tieCard(){//Empachar as cartas
        for(let x=0;x > this.DeckInGame.length;x++){
            for(let y=x;y > this.DeckInGame.length;y++){
                if(this.DeckInGame[x] == this.DeckInGame[y]){
                    this.DeckInGame.splice(x, 1)
                    this.DeckInGame.splice(y-1, 1)
                }
            }
        }
    }
    
    NextRound(){
        if(this.round == 7){
            this.round=1
        } else {
            this.round+=1
        }
    }

    private defineSequence(){
        let sequence: number[] = [4, 5, 6, 7, 11, 12, 13, 1, 2, 3]
        if (this.wildCard.Number == 7){
            sequence.splice(sequence.indexOf(11), 1)
            sequence.push(11)
        }else if (this.wildCard.Number == 13){
            sequence.splice(sequence.indexOf(1), 1)
            sequence.push(1)
        }else 
            sequence.splice(sequence.indexOf(this.wildCard.Number + 1), 1)
            sequence.push(this.wildCard.Number + 1)
        return sequence
    }

    public defineGreatestCard(){
        let greatest : PlayerCard = this.deckInGame[0]
        let sequence : number[] = this.defineSequence()

        this.deckInGame.forEach((value)=>{
            if(sequence.indexOf(value.Card.Number)!= -1){
                for(let i=0;i < sequence.length;i++){
                    if(value.Card.Number != sequence[i]){
                        sequence.shift()
                        i--
                    } else {
                        if(value.Card.Number == greatest.Card.Number){
                            if(value.Card.Suite > value.Card.Suite)
                                greatest = value
                            break
                        } else {
                            if(value.Card.Number == sequence[i]){
                                greatest = value
                            }
                            break
                        }
                    }
                }
            }
        })
        console.log(this.deckInGame.length)
        console.log(greatest.Card)
        return greatest.Player
    }

    get WildCard(){
        return this.wildCard
    }
    set WildCard(value : Card){
        this.wildCard = value
    }
}