import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { User } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.page.html',
  styleUrls: ['./ranking.page.scss'],
})
export class RankingPage{

  users : User[];
  constructor(private authService : AuthService, private modal :ModalController) { 
    this.carregarRanking()
  }
 
  carregarRanking(){
   this.authService.ranking()
   .subscribe(res => {
     this.users = res.map(c =>{
      return{
       ...c.payload.doc.data() as User
      }as User;
     })
   });
 }
 dimiss(){
  this.modal.dismiss();
 }

}
