import { Injectable } from '@angular/core';

import { Vacina } from './vacinas.model';

@Injectable({
  providedIn: 'root',
})
export class VacinasService {
  private vacinas: Vacina[];
  private contador = 6;

  constructor() {
    this.vacinas = [
     
    ];
  }

  public getVacinas() {
    return this.vacinas;
  }

  public remove(nome: string) {
    this.vacinas = this.vacinas.filter((vacina) => vacina.nome !== nome);
  }

  public save(vacina: Vacina) {
    if (vacina.id) {
      const index = this.vacinas.findIndex(v => v.id === vacina.id);
      this.vacinas[index] = vacina;
    } else {
      const id = this.contador++;
      this.vacinas.push({ ...vacina, id });
    }
  }

  public findById(id: number) {
    return this.vacinas.find(vacina => vacina.id === id);
  }
}
