import { Component } from '@angular/core';
import { user } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { User } from 'src/app/models/usuario';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { RulesComponent } from './components/rules/rules.component';
import { ProfilePage } from './pages/profile/profile.page';

import { AuthService } from './services/auth.service';
import { UserFirebaseService } from './services/user-firebase.service';


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

  constructor(public modalCtrl: ModalController, 
    private router : Router, 
    private authService : AuthService, 
    private rafael : UserFirebaseService) {}

  async goToLogin(){
    this.router.navigate(["/login"]);
  }
  async goToHome(){
    this.router.navigate(["/home"]);
  }
  goToRegister(){
    this.router.navigate(["/register"]);
  }
  async goToRules(){
    const modal = await this.modalCtrl.create({
      component : RulesComponent,
    });
    return await modal.present();
  }
  async gotoUpdate(){
    console.log(this.rafael.getProfile());
    
    const modal = await this.modalCtrl.create({
      component : ProfilePage,
    });
    return await modal.present();
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
  async sobreNos(){
    const modal = await this.modalCtrl.create({
      component : AboutUsComponent,
    });
    return await modal.present();
  }

}

