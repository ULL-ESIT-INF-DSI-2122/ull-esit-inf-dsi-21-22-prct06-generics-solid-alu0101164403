import {Cifrado} from './claseCifrado';

export class DecodificadorCesar extends Cifrado {
  constructor(mensaje: string, clave:string, alfabeto:string) {
    super(mensaje, clave, alfabeto);
  }

  private desplazar(indiceCaracterActual:number): string {
    const indiceCaracterMensajeEnAlfabeto: number =
        this.alfabeto.indexOf(this.mensaje[indiceCaracterActual]);
    const indiceCaracterClaveEnAlfabeto: number =
        this.alfabeto.indexOf(this.clave[indiceCaracterActual]);
    let indiceCaracterDecodificado: number = indiceCaracterMensajeEnAlfabeto -
        (indiceCaracterClaveEnAlfabeto + 1);
    if (indiceCaracterDecodificado < 0) {
      indiceCaracterDecodificado =
          this.alfabeto.length - Math.abs(indiceCaracterDecodificado);
    }
    return this.alfabeto[indiceCaracterDecodificado];
  }

  public decodificar(): string {
    let mensajeDescifrado: string = '';
    let indiceCaracterActual: number = 0;
    while (this.mensaje.length > indiceCaracterActual) {
      const caracterDecodificado: string = this.desplazar(indiceCaracterActual);
      mensajeDescifrado = mensajeDescifrado.concat('', caracterDecodificado);
      indiceCaracterActual++;
    }
    return mensajeDescifrado;
  }
}
