import {tipoPoder} from './interfaces';
import {Fighter} from './Fighter';

export class UniversoMarvel extends Fighter {
  constructor(readonly nombre:string, readonly tipo: tipoPoder,
    readonly frase: string, readonly ataque: number, readonly defensa: number,
    readonly velocidad: number, readonly hp: number) {
    super(nombre, tipo, frase, ataque, defensa, velocidad, hp);
  }
}
