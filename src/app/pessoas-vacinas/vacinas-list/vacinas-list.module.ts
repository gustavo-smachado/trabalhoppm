import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VacinasListPageRoutingModule } from './vacinas-list-routing.module';

import { VacinasListPage } from './vacinas-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VacinasListPageRoutingModule
  ],
  declarations: [VacinasListPage]
})
export class VacinasListPageModule {}
