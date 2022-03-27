import {Cifrado} from './claseCifrado';

export class CodificadorCesar extends Cifrado {
  constructor(mensajeCadena: string, claveCadena:string,
      alfabetoCadena:string) {
    super(mensajeCadena, claveCadena, alfabetoCadena);
  }

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
