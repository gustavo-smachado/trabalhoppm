import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pessoas-list',
    pathMatch: 'full'
  },
  {
    path: 'pessoas-list',
    loadChildren: () => import('./pessoas-vacinas/pessoas-list/pessoas-list.module').then( m => m.PessoasListPageModule)
  },
  {
    path: 'pessoas-register',
    loadChildren: () => import('./pessoas-vacinas/pessoas-register/pessoas-register.module').then( m => m.PessoasRegisterPageModule)
  },
  {
    path: 'vacinas-list',
    loadChildren: () => import('./pessoas-vacinas/vacinas-list/vacinas-list.module').then( m => m.VacinasListPageModule)
  },
  {
    path: 'vacinas-register',
    loadChildren: () => import('./pessoas-vacinas/vacinas-register/vacinas-register.module').then( m => m.VacinasRegisterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
