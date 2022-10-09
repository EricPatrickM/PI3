import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/usuario';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  botao : string;
  us : User;
  constructor(private router : Router) {}

  goToLogin(){
    this.router.navigate(["/login"]);
  }

  goToRegister(){
    this.router.navigate(["/register"]);
  }

  isLogin(){

  }
}
