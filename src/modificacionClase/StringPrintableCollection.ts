import {PrintableCollection} from './PrintableCollection';

/**
 * clase StringPrintableCollection, se encarga de imprimir
 * una coleccion de cadenas encadenadas.
 * Hereda de la clase abstracta PrintableCollection
 */
export class StringPrintableCollection extends PrintableCollection<string> {
  /**
   * constructor, recibe una lista de strings
   * @param items string[]
   */
  constructor(protected items: string[]) {
    super(items);
  }
  /**
   * metodo que devuelve una cadena con todos los elementos string de la lista
   * separadas por comas
   * @returns string
   */
  public print(): string {
    return this.items.join(',');
  }
}
