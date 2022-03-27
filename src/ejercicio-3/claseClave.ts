/**
 * clase que reprsenta una clase, se pasa como string pero
 * se transforma en array para facilitar su uso
 */
export class Clave {
  private clave: string[];
  /**
   * el constructor recibe una cadena con la clave y se inicializa el
   * atributo de la clase pasando esa cadena a un vector
   * @param claveCadena string
   */
  constructor(private claveCadena: string) {
    this.clave = claveCadena.split('');
  }
  /**
   * metodo que devuelve la clase en formato string
   * @returns string
   */
  public getClave(): string {
    return this.clave.join('');
  }
  /**
   * metodo que permite modificar el atributo clave
   * @param claveNueva 
   */
  public setClave(claveNueva: string): void {
    this.clave = claveNueva.split('');
  }
  /**
   * metodo que reajusta la clave ya que esta debe ser del mismo
   * tamaño que el mensaje que se quiera cifrar/descifrar
   * para ajustarlo, completa la clave repitiendo sus caracteres hasta
   * llegar al numero deseado
   * @param tam number
   * @returns array de strings
   */
  public ajustarClave(tam: number): string[] {
    const auxClave: string = '';
    if (this.clave.length < tam) {
      auxClave.padEnd(tam, this.getClave());
    }
    return auxClave.split('');
  }
}
