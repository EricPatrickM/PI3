import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { create } from 'domain';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formLogin : FormGroup;
  isSubmitted : boolean;
  auth : AuthService;

  constructor(private router : Router, 
    private formBuilder: FormBuilder, 
    private alertController : AlertController, 
    private loadingCtrl : LoadingController,
    private authService : AuthService,
    private comp : AppComponent) { }

  public get nick() {
    return this.formLogin.get('nick');
  }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      email :["", [Validators.required, Validators.email]],
      password :["", [Validators.required]]
    });
  }


  get errorControl(){
    return this.formLogin.controls;
  }

  submitForm(): boolean{
    this.isSubmitted = true;
    if(!this.formLogin.valid){
      this.presentAlert("Login", "Erro",
       "Todos os campos são Obrigatórios!");
      return false;
    }else{
      console.log("1");
      this.login();
    }
  }

  async login(){
    console.log("erro aqui 2");
    const loading = await this.loadingCtrl.create()
    await loading.present();

    const user = await this.authService.login(this.formLogin.value);
    await loading.dismiss();
    if (user) {
      this.presentAlert('Login', 'Login Realizado com Sucesso!', 'Seja Bem vindo!');
      this.comp.isLogin(true);
			this.router.navigateByUrl('/home', { replaceUrl: true });
		} else {
			this.presentAlert('Login', 'Por Favor tente novamente!', '');
		}
  }

  async recoveryPassword(){
    let email : any;
    const alert = await this.alertController.create({
      header: "Recuperar Senha",
      message : "Insira seu email para recuperar sua senha",
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log(email);
            this.authService.recoverypassword(email);
            
          }
        }, {
          text: 'Cancelar'
        }
      ],
      inputs: [
        {
          type: 'email',
          name : email,
          placeholder: 'email',
          value: email,
          
        }
      ]
    })
    await alert.present();
  }

  async presentAlert(header:string, subHeader:string,massage:string) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subHeader,
      message: massage,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
