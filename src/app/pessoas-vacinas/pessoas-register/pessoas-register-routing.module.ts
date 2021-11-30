import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PessoasRegisterPage } from './pessoas-register.page';

const routes: Routes = [
  {
    path: '',
    component: PessoasRegisterPage
  },
  {
    path: ':id',
    component: PessoasRegisterPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PessoasRegisterPageRoutingModule {}
