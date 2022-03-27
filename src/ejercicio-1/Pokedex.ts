import {Fighter} from './Fighter';

export class Pokedex {
  constructor(private listaLuchadores: Fighter[]) {
  }
  public addLuchador(nuevoLuchador: Fighter): void {
    this.listaLuchadores.push(nuevoLuchador);
  }
  public deleteLuchador(indice: number): void {
    this.listaLuchadores.slice(indice, 1);
  }
}
