import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VacinasListPage } from './vacinas-list.page';

const routes: Routes = [
  {
    path: '',
    component: VacinasListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VacinasListPageRoutingModule {}
