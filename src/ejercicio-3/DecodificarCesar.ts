import {Cifrado} from './claseCifrado';

/**
 * clase que representa un decodifcicado usando el metodo Cesar
 * es hijo de la clase Cifrado
 */
export class DecodificadorCesar extends Cifrado {
  /**
   * el constructor recibe un mensaje, clave y alfabeto
   * @param mensaje string
   * @param clave string
   * @param alfabeto string
   */
  constructor(mensaje: string, clave:string, alfabeto:string) {
    super(mensaje, clave, alfabeto);
  }
  /**
   * metodo que realiza el desplazamiento para encontra eñ acarcater
   * en el alafabeto ya decodificado, se devuelve ese caracter
   * @param indiceCaracterActual number
   * @returns string
   */
  private desplazar(indiceCaracterActual:number): string {
    const indiceCaracterMensajeEnAlfabeto: number =
        this.alfabeto.getAlfabeto().
            indexOf(this.mensaje.getMensaje()[indiceCaracterActual]);
    const indiceCaracterClaveEnAlfabeto: number =
        this.alfabeto.getAlfabeto().
            indexOf(this.clave.getClave()[indiceCaracterActual]);
    let indiceCaracterDecodificado: number = indiceCaracterMensajeEnAlfabeto -
        (indiceCaracterClaveEnAlfabeto + 1);
    if (indiceCaracterDecodificado < 0) {
      indiceCaracterDecodificado =
          this.alfabeto.size() - Math.abs(indiceCaracterDecodificado);
    }
    return this.alfabeto.getAlfabeto()[indiceCaracterDecodificado];
  }
  /**
   * metodo que realiza el descifrado de un texto, para ello llama
   * al metodo desplazar y devuelve el texto descifrado
   * @returns string
   */
  public decodificar(): string {
    let mensajeDescifrado: string = '';
    let indiceCaracterActual: number = 0;
    while (this.mensaje.size() > indiceCaracterActual) {
      const caracterDecodificado: string = this.desplazar(indiceCaracterActual);
      mensajeDescifrado = mensajeDescifrado.concat('', caracterDecodificado);
      indiceCaracterActual++;
    }
    return mensajeDescifrado;
  }
}
