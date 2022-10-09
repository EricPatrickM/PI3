import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.page.html',
  styleUrls: ['./rules.page.scss'],
})
export class RulesPage implements OnInit {

  constructor(private modalcontroler : ModalController) { }

  ngOnInit() {
  }

  dimiss(){
    this.modalcontroler.dismiss();
  }

}
