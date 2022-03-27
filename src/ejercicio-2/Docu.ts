import {genresDocu} from './interfaces';
import {BasicStreamableItem} from './BasicStreamableItem';

/**
 * clase que representa un documental, es hija de BasicStreamableItem
 */
export class Docu extends BasicStreamableItem {
  /**
   * el constructor recibe los parametros necesarios para implemetar
   * un item del tipo streamable
   * @param name string
   * @param yearPublication number
   * @param genre genres
   * @param averageScore number
   * @param recommended boolean
   * @param description string
   */
  constructor(readonly name: string, readonly yearPublication: number,
    readonly genre: genresDocu[], readonly averageScore: number,
    readonly recommended: boolean, readonly description: string) {
    super(name, yearPublication, genre, averageScore, recommended, description);
  }
  /**
   * metodo que devuelve una cadena con los datos de la clase formateados
   */
  public print(): string {
    // eslint-disable-next-line max-len
    return (`Type Documentary\nName: ${this.name}\nYear: ${this.yearPublication}\nGenres: ${this.genre}\nScore: ${this.averageScore}\nDescription: ${this.description}`);
  }
}
