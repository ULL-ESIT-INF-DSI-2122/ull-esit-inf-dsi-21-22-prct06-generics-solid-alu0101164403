import {Cifrado} from './claseCifrado';

export class DecodificadorCesar extends Cifrado {
  constructor(mensaje: string, clave:string, alfabeto:string) {
    super(mensaje, clave, alfabeto);
  }

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
