import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
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

  constructor(private router : Router, private formBuilder: FormBuilder, private alertController : AlertController, private loadingCtrl : LoadingController) { }

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
      //this.presentAlert("Agenda", "Erro",
       //"Todos os campos são Obrigatórios!");
      return false;
    }else{
      console.log("1");
      this.login();
    }
  }

  async login(){
    console.log("chegou aqui");
     /*this.auth.login(this.formLogin.value).then(() => {
      this.presentAlert("Alerta", "Cadastro", "Cadastro realizado com Sucesso");
      this.router.navigate(["\home"]);
    }).catch((error) => {
      this.loadingCtrl.dismiss();
      this.presentAlert("Alerta", "Erro", "Erro ao cadastrar");
      console.log(error);
    });
  }

  async presentAlert(header:string, subHeader:string,massage:string) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subHeader,
      message: massage,
      buttons: ['OK'],
    });*/
  }
}
