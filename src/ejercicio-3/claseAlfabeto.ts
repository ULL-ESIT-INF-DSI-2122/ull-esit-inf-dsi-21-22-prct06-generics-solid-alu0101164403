/**
 * clase que representa un alfabeto, se pasa un string pero se transforma
 * a un array para facilitar su posteior uso.
 */
export class Alfabeto {
  private alfabeto: string[];
  /**
   * constructor que se le pasa una cadena e inciializa el atributo
   * transformandolo en un array
   * @param alfabetoCadena string, alfabeto que se pasa
   */
  constructor(private alfabetoCadena: string) {
    this.alfabeto = alfabetoCadena.split('');
  }
  /**
   * metodo que devuelve el alfabeto como un string
   * @returns string
   */
  public getAlfabeto(): string {
    return this.alfabeto.join('');
  }
  /**
   * metodo que cambia el valor del alfabeto
   * @param nuevoAlfabeto string, nueva cadena
   */
  public setAlfabeto(nuevoAlfabeto: string) {
    this.alfabeto = nuevoAlfabeto.split('');
  }
  /**
   * metodo que devuelve el tamaño del alfabeto (nuemro de caracteres)
   * @returns number
   */
  public size(): number {
    return this.alfabeto.length;
  }
}
