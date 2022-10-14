import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {

  constructor(private modal : ModalController) { }

  ngOnInit() {}

  dimiss(){
    this.modal.dismiss();
  }
  

}
