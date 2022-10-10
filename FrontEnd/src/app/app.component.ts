import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { modalController } from '@ionic/core';
import { User } from 'src/models/usuario';
import { RulesPage } from './Screens/rules/rules.page';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  nameb1 : string = "Login";
  nameb2 : string = "Cadastro";
  altbotton : boolean = false;
  us : User;
  constructor(public modalCtrl: ModalController, private router : Router, private authService : AuthService) {}

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
  gotoUpdate(){
    console.log("editar perfil")
  }
  gotoLogOut(){
    const check = this.authService.logout();
    this.isLogin(check);
  }

  isLogin(ver : boolean){
    if(ver){
      this.nameb1 = "Editar Perfil";
      this.nameb2 = "Sair";
      this.altbotton = true;
    }else{
      this.nameb1 = "Login";
      this.nameb2 = "Cadastrar";
      this.altbotton = false;
      console.log("Usuario não encontrado")
    }
  }

  botao1(){
    if(this.altbotton){
      this.gotoUpdate();
    }else{
      this.goToLogin();
    }
  }
  botao2(){
    if(this.altbotton){
      this.gotoLogOut();
    }else{
      this.goToRegister();
    }
  }
}
