import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public menus = [
    { title: 'Lista de Pessoas', url: '/pessoas-list', icon: 'people' },
    { title: 'Cadastro de Pessoas', url: '/pessoas-register', icon: 'accessibility' },
    { title: 'Lista de Vacinas', url: '/vacinas-list', icon: 'medkit' },
    { title: 'Cadastro de Vacinas', url: '/vacinas-register', icon: 'medical' },
  ];

  constructor() {}
}
