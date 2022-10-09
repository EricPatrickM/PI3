import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RulesPageRoutingModule } from './rules-routing.module';

import { RulesPage } from './rules.page';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {
    path :'',
    component: RulesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RulesPageRoutingModule,
    RouterModule.forChild(routes)  
  ],
  declarations: [RulesPage]
})
export class RulesPageModule {}
