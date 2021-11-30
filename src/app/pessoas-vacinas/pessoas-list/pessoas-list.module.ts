import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PessoasListPageRoutingModule } from './pessoas-list-routing.module';

import { PessoasListPage } from './pessoas-list.page';
import { GeneroPipe } from './pessoas.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PessoasListPageRoutingModule
  ],
  declarations: [PessoasListPage, GeneroPipe]
})
export class PessoasListPageModule {}
