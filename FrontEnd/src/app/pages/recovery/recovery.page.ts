import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.page.html',
  styleUrls: ['./recovery.page.scss'],
})
export class RecoveryPage implements OnInit {
  formLogin : FormGroup;
  isSubmitted : boolean;

  constructor(private router : Router, 
    private formBuilder: FormBuilder, 
    private alertController : AlertController, 
    private loadingCtrl : LoadingController,
    private authService : AuthService,
    private comp : AppComponent) { }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      email :["", [Validators.required, Validators.email]],
    });
  }

  get errorControl(){
    return this.formLogin.controls;
  }

  submitForm(): boolean{
    this.isSubmitted = true;
    if(!this.formLogin.valid){
      this.presentAlert("Recuperação de senha", "Erro",
       "Preencha o campo!");
      return false;
    }else{
      this.recovery();
    }
  }
  async recovery(){
    const loading = await this.loadingCtrl.create()
    await loading.present();
    const check = await this.authService.recoverypass(this.formLogin.value);

    await loading.dismiss();
    if(check){
      this.presentAlert("Recuperação de senha", "Sucesso",
      "O email para recuperação foi enviado!");
      this.router.navigateByUrl('/login', { replaceUrl: true });
    }else{
      this.presentAlert("Recuperação de senha", "Erro",
      "Erro ao recuperar senha");
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

}
