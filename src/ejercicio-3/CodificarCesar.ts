import {Cifrado} from './claseCifrado';

export class CodificadorCesar extends Cifrado {
  constructor(mensaje: string, clave:string, alfabeto:string) {
    super(mensaje, clave, alfabeto);
  }

  private desplazar(indiceCaracterActual:number): string {
    const indiceCaracterMensajeEnAlfabeto: number =
        this.alfabeto.indexOf(this.mensaje[indiceCaracterActual]);
    const indiceCaracterClaveEnAlfabeto: number =
        this.alfabeto.indexOf(this.clave[indiceCaracterActual]);
    let indiceCaracterCodificado: number = indiceCaracterMensajeEnAlfabeto +
    indiceCaracterClaveEnAlfabeto + 1;
    if (indiceCaracterCodificado > this.alfabeto.length - 1) {
      indiceCaracterCodificado =
          indiceCaracterCodificado - this.alfabeto.length;
    }
    return this.alfabeto[indiceCaracterCodificado];
  }

  public codificar(): string {
    let mensajeCifrado: string = '';
    let indiceCaracterActual: number = 0;
    while (this.mensaje.length > indiceCaracterActual) {
      const caracterCodificado: string = this.desplazar(indiceCaracterActual);
      mensajeCifrado = mensajeCifrado.concat('', caracterCodificado);
      indiceCaracterActual++;
    }
    return mensajeCifrado;
  }
}
