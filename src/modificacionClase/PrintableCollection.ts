import {Collectable, Printable} from './interfaces';

/**
 * clase PrintableCollection, representa y contiene métdos
 * que modifican tipos imprimibles.
 * Es una clase abstracta
 */
export abstract class PrintableCollection<T> implements Collectable<T>,
    Printable {
  /**
   * constructor, recibe una lista de elementos aun sin definir el tipo
   * @param items T[]
   */
  constructor(protected items: T[]) {
  }
  /**
   * metodo que añade un elemento a la lista
   * @param newItem T
   */
  public addItem(newItem: T): void {
    this.items.push(newItem);
  }
  /**
   * metodo que muestra el elemento del indice indicado como parametro
   * @param index number, indica el indice
   * @returns T
   */
  public getItem(index: number): T {
    return this.items[index];
  }
  /**
   * metodo que elimina un elemento de la lista en el indice pasado
   * por parametro
   * @param index number, indica el indice de la lista
   */
  public removeItem(index: number): void {
    this.items.splice(index, 1);
  }
  /**
   * metodo que devuelve el numero de elementos de la lista
   * @returns number
   */
  public getNumberOfItems(): number {
    return this.items.length;
  }
  /**
   * metodo abstracto que obliga a definir en las subclases un
   * metodo que devuelva una cadena
   */
  public abstract print(): string;
}
