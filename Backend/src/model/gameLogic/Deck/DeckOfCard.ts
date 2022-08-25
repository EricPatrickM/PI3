/*
1 - Ouro
2 - Espadas
3 - Copas
4 - Paus
*/

import Card from "../Card/Card"

export default class DeckOfCard{
    private cards : Card[] = []
    
    constructor(){

    }

    public reset(){ //criar/resetar baralho
        this.cards = []
        for(let i=1;i <= 13;i++){
            if(i <= 7 || i >= 11){
                for(let j=1;j <= 4;j++){
                    this.cards.push(new Card(j,i))
                }
            }
        }
    }

    public get Cards() : Card[]{
        return this.cards
    }

    public removeCard(value : number){
        this.cards.splice(value,1) 
    }
}