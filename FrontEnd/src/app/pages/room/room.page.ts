import { Component, OnInit } from '@angular/core';
import Phaser from 'phaser';


@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss'],
})

export class RoomPage implements OnInit {

naipes = ['Diamons','Clubs','Hearts','Spades'];
valores = ['2','3','4','5','6','7','Q','J','K','A'];

 getCardName(naipes, valores) {
  return 'card${naipes}{valores}$';
}

  pashergamer : Phaser.Game;
  config : Phaser.Types.Core.GameConfig;
  
  constructor() { }

  ngOnInit() {
    this.initializePhaser();
  }


  initializePhaser(){
    this.config = {
      type: Phaser.AUTO,
      width: 400,
      height: 400,
      parent:'game',
      backgroundColor: '#71c5cf',
      scene: [],
      scale: {
        mode: Phaser.Scale.ENVELOP
      }
    }
    
    this.pashergamer = new Phaser.Game(this.config);
  }

  aleatorionipe(){
    var randomNumber = Math.floor(Math.random()*this.naipes.length);
    return this.naipes[randomNumber]
  }

  aleatoriovalor(){
    var randomNumber = Math.floor(Math.random()*this.valores.length);
	
	if (randomNumber < 0)
	{
		return this.valores[0]
	}
	return this.valores[randomNumber]
  }
  
  currentCardName(){
	return this.getCardName(this.aleatorionipe(), this.aleatoriovalor())
  }


}
