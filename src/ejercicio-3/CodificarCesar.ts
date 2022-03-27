import {Cifrado} from './claseCifrado';

/**
 * clase que representa como se codifica por metodo Cesar
 * es hija de la clase Cifrado
 */
export class CodificadorCesar extends Cifrado {
  /**
   * el contructor recibe un mensaje, clave y alfabeto en formato string
   * @param mensajeCadena string
   * @param claveCadena string
   * @param alfabetoCadena string
   */
  constructor(mensajeCadena: string, claveCadena:string,
      alfabetoCadena:string) {
    super(mensajeCadena, claveCadena, alfabetoCadena);
  }
  /**
   * metodo que realiza el desplazamiento sobre el alfabeto
   * para encontra el acaracter que va a codificar el caracter
   * del mensaje
   * @param indiceCaracterActual numebr
   * @returns string
   */
  private desplazar(indiceCaracterActual:number): string {
    const indiceCaracterMensajeEnAlfabeto: number =
        this.alfabeto.getAlfabeto().
            indexOf(this.mensaje.getMensaje()[indiceCaracterActual]);
    const indiceCaracterClaveEnAlfabeto: number =
        this.alfabeto.getAlfabeto().
            indexOf(this.clave.getClave()[indiceCaracterActual]);
    let indiceCaracterCodificado: number = indiceCaracterMensajeEnAlfabeto +
    indiceCaracterClaveEnAlfabeto + 1;

    if (indiceCaracterCodificado > this.alfabeto.size() - 1) {
      indiceCaracterCodificado =
          indiceCaracterCodificado - this.alfabeto.size();
    }
    return this.alfabeto.getAlfabeto()[indiceCaracterCodificado];
  }
  /**
   * metodo que realiza el cifrado, para ello llama al metodo desplazar
   * @returns string
   */
  public codificar(): string {
    let mensajeCifrado: string = '';
    let indiceCaracterActual: number = 0;
    while (this.mensaje.size() > indiceCaracterActual) {
      const caracterCodificado: string = this.desplazar(indiceCaracterActual);
      mensajeCifrado = mensajeCifrado.concat('', caracterCodificado);
      indiceCaracterActual++;
    }
    return mensajeCifrado;
  }
}
