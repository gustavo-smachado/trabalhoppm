export interface Pessoa {
  id: number;
  nome: string;
  genero: Genero;
  endereco: string;
  nascimento: Date;
  observacao: string;
}

export enum Genero {
  MASCULINO = 'MASCULINO',
  FEMININO = 'FEMININO',
}