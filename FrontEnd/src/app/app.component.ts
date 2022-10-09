import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { modalController } from '@ionic/core';
import { User } from 'src/models/usuario';
import { RulesPage } from './Screens/rules/rules.page';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  botao : string;
  us : User;
  constructor(public modalCtrl: ModalController, private router : Router) {}

  goToLogin(){
    this.router.navigate(["/login"]);
  }

  goToRegister(){
    this.router.navigate(["/register"]);
  }
  async goToRules(){
    const modal = await modalController.create({
      component : RulesPage,
    });
    return await modal.present();
  }




  isLogin(){

  }
}
