import {tipoPoder} from './interfaces';
import {Fighter} from './Fighter';

export class UniversoMarvel extends Fighter {
  constructor(readonly nombre:string, private peso:number,
    private altura:number, readonly tipo:tipoPoder, readonly ataque:number,
    readonly defensa:number, readonly velocidad:number, readonly hp:number) {
    super(nombre, tipo, ataque, defensa, velocidad, hp);
  }
}
