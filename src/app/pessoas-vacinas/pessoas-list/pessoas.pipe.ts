import { Pipe, PipeTransform } from '@angular/core';
import { Genero } from '../pessoas.model';

@Pipe({
  name: 'genero'
})
export class GeneroPipe implements PipeTransform {

  transform(value: Genero): string {
    switch(value) {
      case Genero.MASCULINO: return 'Masculino';
      case Genero.FEMININO: return 'Feminino';      
    }
  }

}
