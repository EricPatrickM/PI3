import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from '@firebase/util';
import { ModalController } from '@ionic/angular';

import { User } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  private us : User;
  private a : any

  constructor(private authService : AuthService, private modal : ModalController) { }

  async ngOnInit() {
    this.authService.getPerfil().subscribe((res : User) => {
      this.us = res;
      return this.us;
      });

  }

  dimiss(){
    this.modal.dismiss();
  }

  getuser(){
    return this.us;
  }

}
