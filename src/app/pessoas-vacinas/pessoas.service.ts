import { Injectable } from '@angular/core';

import { Pessoa, Genero } from './pessoas.model';

@Injectable({
  providedIn: 'root',
})
export class PessoasService {
  private pessoas: Pessoa[];
  private contador = 6;

  constructor() {
    this.pessoas = [
    
    ];
  }

  public getPessoas() {
    return this.pessoas;
  }

  public remove(nome: string) {
    this.pessoas = this.pessoas.filter((pessoa) => pessoa.nome !== nome);
  }

  public save(pessoa: Pessoa) {
    if (pessoa.id) {
      const index = this.pessoas.findIndex(p => p.id === pessoa.id);
      this.pessoas[index] = pessoa;
    } else {
      const id = this.contador++;
      this.pessoas.push({ ...pessoa, id });
    }
  }

  public findById(id: number) {
    return this.pessoas.find(pessoa => pessoa.id === id);
  }
}
