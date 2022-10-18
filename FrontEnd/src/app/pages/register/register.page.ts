import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  formRegister : FormGroup;
  isSubmitted : boolean;
  


  constructor(
    private router : Router, 
    private formBuilder : FormBuilder, 
    private loadingCtrl : LoadingController, 
    private alertController : AlertController,
    private authService: AuthService,
    private comp : AppComponent
    ) { }

  ngOnInit() {
    this.formRegister = this.formBuilder.group({
      nick : ["", [Validators.required]],
      email :["", [Validators.required, Validators.email]],
      password :["", [Validators.required, Validators.minLength(6)]]
    });
  }

  get errorControl(){
    return this.formRegister.controls;
  }

  get email() {
    return this.formRegister.get('email');
  }
  get password() {
    return this.formRegister.get('password');
  }

  submitForm(): boolean{
    this.isSubmitted = true;
    if(!this.formRegister.valid){
      this.presentAlert("Agenda", "Erro",
       "Todos os campos são Obrigatórios!");
      return false;
    }else{
      console.log("erro aqui 1");
      this.reg();
    }
  }


  async reg() {
    console.log("erro aqui 2");
    const loading = await this.loadingCtrl.create()
    await loading.present();

    const user = await this.authService.register(this.formRegister.value);
    await loading.dismiss();

    if (user) {
      this.presentAlert('Cadastro', 'Cadastro Realizado com Sucesso!', 'Seja Bem vindo!');
      this.comp.isLogin(true);
			this.router.navigateByUrl('/home', { replaceUrl: true });
		}else{
      this.presentAlert('Cadastro', "Erro", "Não foi possível realizar cadastro, tente novamente!");
    }

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

  async showLoading(mensagem : string, duracao : number){
    const loading = await this.loadingCtrl.create({
      message: mensagem,
      duration: duracao,
    });

    loading.present();
  }

}
