import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss'],
})
export class RulesComponent implements OnInit {

  constructor(private modal : ModalController) { }

  ngOnInit() {}

  dimiss(){
    this.modal.dismiss();
  }

}
