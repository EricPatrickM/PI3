import Card from "../Card/Card";
import SuperPlayer from "../Players/SuperPlayer";

export default class PlayerCard{
    private card:Card
    private player:SuperPlayer

    constructor(card : Card, player:SuperPlayer){
        this.card = card
        this.player = player
    }
    
    get Card() : Card{
        return this.card
    }
    get Player() : SuperPlayer{
        return this.player
    }
}