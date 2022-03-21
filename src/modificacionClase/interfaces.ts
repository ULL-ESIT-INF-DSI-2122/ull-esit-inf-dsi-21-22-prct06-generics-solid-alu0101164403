/**
 * interfaz abstracta que representa un coleccionable
 */
export interface Collectable<T> {
  /**
   * metodo que recibe un elemento aun sin tpo definido
   * y añadira a una lista el elemento
   * @param newItem T
   * @return void
   */
  addItem(newItem: T): void;
  /**
   * metodo que devolvera un elemento aun sin tipo definido
   * del indice de la lista dada por parametro
   * @param index number
   * @return T
   */
  getItem(index: number): T;
  /**
   * metodo que elimina un elemento de la lista en
   * el indice dado por parametro
   * @param index number
   * @return void
   */
  removeItem(index: number): void;
  /**
   * metodo que devuelve el numero de elemento de una lista
   * @return number
   */
  getNumberOfItems(): number;
}
/**
 * interfaz generica
 */
export interface Printable {
  /**
   * metodo que devolverá una cadena de datos formateada
   */
  print(): string;
}
