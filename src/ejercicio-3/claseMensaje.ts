export class Mensaje {
  private mensaje: string[];

  constructor(private mensajeCadena: string) {
    this.mensaje = mensajeCadena.split('');
  }

  public getMensaje(): string {
    return this.mensaje.join('');
  }
  public setMensaje(mensajeNueva: string): void {
    this.mensaje = mensajeNueva.split('');
  }
  public size(): number {
    return this.mensaje.length;
  }
}
