import { Component, OnInit } from '@angular/core';
import Phaser from 'phaser';
import { User } from 'src/app/models/usuario';
import { ProfilePage } from '../profile/profile.page';


@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss'],
})

export class RoomPage implements OnInit {
private jogador;
private rodada : number = 0;
private us : User;
private profile : ProfilePage;
private carta : string = "assets/baralho/cardBack_blue2.png";
naipes = ['Diamons','Clubs','Hearts','Spades'];
valores = ['2','3','4','5','6','7','Q','J','K','A'];

 getCardName(naipes, valores) {
  return 'card${naipes}{valores}$';
}

  pashergamer : Phaser.Game;
  config : Phaser.Types.Core.GameConfig;
  
  constructor() { }

  ngOnInit() {

  }


  gira(){
    this.carta = "assets/baralho/cardHeartsA.png"; 
  }

  aleatorionipe(){
    var randomNumber = Math.floor(Math.random()*this.naipes.length);
    return this.naipes[randomNumber]
  }

  aleatoriovalor(){
    var randomNumber = Math.floor(Math.random()*this.valores.length);
	  if (randomNumber < 0){ 
		  return this.valores[0]
	  }
	  return this.valores[randomNumber]
  }
  
  currentCardName(){
	  return this.getCardName(this.aleatorionipe(), this.aleatoriovalor())
  }

  game(){

    while(this.rodada !== 8){
      let vira = this.currentCardName;
      let i = 0;
      while(i < this.rodada){
        let jogador
      }
      this.rodada += 1;
    }
  }
}
