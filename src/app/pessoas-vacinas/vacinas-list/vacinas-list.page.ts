import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Vacina } from '../vacinas.model';

import { VacinasService } from '../vacinas.service';

@Component({
  selector: 'app-vacinas-list',
  templateUrl: './vacinas-list.page.html',
  styleUrls: ['./vacinas-list.page.scss'],
})
export class VacinasListPage implements OnInit {
  vacinas: Vacina[];

  constructor(
    private alertController: AlertController,
    private vacinasService: VacinasService
  ) {
    this.vacinas = this.vacinasService.getVacinas();
  }

  ngOnInit() {}

  excluir(vacina: Vacina) {
    this.alertController
      .create({
        header: 'Excluir',
        message: 'Confirma a exclusão?',
        buttons: [
          {
            text: 'Sim',
            handler: () => {
              this.vacinasService.remove(vacina.nome);
              this.vacinas = this.vacinasService.getVacinas();
            },
          },
          {
            text: 'Não',
          },
        ],
      })
      .then((alert) => alert.present());
  }
}
