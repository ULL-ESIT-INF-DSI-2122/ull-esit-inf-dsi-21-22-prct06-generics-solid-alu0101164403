import {PrintableCollection} from './PrintableCollection';

/**
 * clase NumericPrintableCollection, se encarga de imprimir
 * una coleccion de numeros representados en una cadena.
 * Hereda de la clase abstracta PrintableCollection
 */
export class NumericPrintableCollection
  extends PrintableCollection<number> {
  /**
   * constructor que recibe como parametro una lista de numeros
   */
  constructor(protected items: number[]) {
    super(items);
  }
  /**
   * metodo que devuelve una cadena con todos los elementos numericos
   * de la lista separadas por comas
   * @returns string
   */
  public print(): string {
    return this.items.join(',');
  }
}
