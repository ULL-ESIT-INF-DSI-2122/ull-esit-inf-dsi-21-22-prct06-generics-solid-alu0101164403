/**
 * clase que representa un mensaje (para cifrar o descifrar)
 */
export class Mensaje {
  private mensaje: string[];
  /**
   * el contrsuctor recibe una cadena y con ella se inicializa el
   * atributo conviertola en array de string
   * @param mensajeCadena string
   */
  constructor(private mensajeCadena: string) {
    this.mensaje = mensajeCadena.split('');
  }
  /**
   * metodo que devuelve el mensaje en formato string
   * @returns string
   */
  public getMensaje(): string {
    return this.mensaje.join('');
  }
  /**
   * metodo que permite midificar el mensaje
   * @param mensajeNueva string
   */
  public setMensaje(mensajeNueva: string): void {
    this.mensaje = mensajeNueva.split('');
  }
  /**
   * metodo que devuelve el tamaño del mensaje
   * @returns number
   */
  public size(): number {
    return this.mensaje.length;
  }
}
