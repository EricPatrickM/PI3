/*
1 - Ouro
2 - Espadas
3 - Copas
4 - Paus
*/

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
    deck = new DeckOfCard()
    
    dealCards(){ //sortear cartas
        sorteada = Math.random(0, baralho.cartas.length)

    }
}

teste = new Jogo()
console.log(teste.teste())