import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PessoasRegisterPageRoutingModule } from './pessoas-register-routing.module';

import { PessoasRegisterPage } from './pessoas-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PessoasRegisterPageRoutingModule
  ],
  declarations: [PessoasRegisterPage]
})
export class PessoasRegisterPageModule {}
