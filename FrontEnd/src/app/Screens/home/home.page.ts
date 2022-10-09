import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  nickname : string;
  email : string;

  constructor(private alertController : AlertController, private router : Router) {}

  ngOnInit(){
      this.nickname;
      this.email;
  }
  AlertInput(){

  }
  async presentAlertRegister() {
    const alert = await this.alertController.create({
      header: 'Cadastrar',
      buttons: [
        {
          text: 'Cancelar',
          
        },
        {
          text: 'Cadastrar',
        },
      ],
      inputs: [     
        {
          placeholder: 'Nickname (max 8 characters)',
          name : "nickname",
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: "email",
          placeholder: 'Email',
          name: "email",
        },
        {
          type: "password",
          placeholder: "Senha",
          name: "senha",
          attributes: {
            minlenght: 6,
            maxlenght: 9,
          },
        },
      ],
    });
    await alert.present();
  }
  async presentAlertLogin() {
    const alert = await this.alertController.create({
      header: 'Login',
      buttons: [
        {
          text: 'Cancelar',
          
        },
        {
          text: 'Logar',
        },
      ],
      inputs: [     
        {
          placeholder: 'Nickname (max 8 characters)',
          name : "nickname",
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: "email",
          placeholder: 'Email',
          name: "email",
        },
        {
          type: "password",
          placeholder: "Senha",
          name: "senha",
          attributes: {
            minlenght: 6,
            maxlenght: 9,
          },
        },
      ],
    });
    await alert.present();
  }
  

  goToLogin(){
    this.router.navigate(["/login"]);
  }

  goToRegister(){
    this.router.navigate(["/register"]);
  }
}
