import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Pessoa, Genero } from '../pessoas.model';

import { PessoasService } from '../pessoas.service';

@Component({
  selector: 'app-pessoas-list',
  templateUrl: './pessoas-list.page.html',
  styleUrls: ['./pessoas-list.page.scss'],
})
export class PessoasListPage implements OnInit {
  pessoas: Pessoa[];

  constructor(
    private alertController: AlertController,
    private pessoasService: PessoasService
  ) {
    this.pessoas = this.pessoasService.getPessoas();
  }

  ngOnInit() {}

  excluir(pessoa: Pessoa) {
    this.alertController
      .create({
        header: 'Excluir',
        message: 'Confirmar a exclusão?',
        buttons: [
          {
            text: 'Sim',
            handler: () => {
              this.pessoasService.remove(pessoa.nome);
              this.pessoas = this.pessoasService.getPessoas();
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
