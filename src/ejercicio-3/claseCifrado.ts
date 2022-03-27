export abstract class Cifrado {
  // protected mensajeOriginal: string = '';
  // protected mensajeCifrado: string = '';
  protected mensaje: string[];
  protected clave: string[];
  protected claveOriginal: string;
  protected alfabeto: string[];

  constructor(mensaje: string, clave: string, alfabeto: string) {
    if (mensaje == '') {
      throw new Error(`No se ha introducido un mensaje valido`);
    }
    if (clave == '') {
      throw new Error(`No se ha introducido una clave valida`);
    }
    if (alfabeto == '') {
      throw new Error(`No se ha introducido un alfabeto valido`);
    }

    this.claveOriginal = clave;
    this.ajustarClave(mensaje);
    this.mensaje = mensaje.split('');
    this.clave = clave.split('');
    this.alfabeto = alfabeto.split('');
  }
  // comrpueba si la clave es del mismo tamaño que el mensaje
  // sino lo es, lo ajusta para que lo sea
  private ajustarClave(mensaje:string): void {
    if (this.claveOriginal.length < mensaje.length) {
      this.claveOriginal.padEnd(mensaje.length, this.claveOriginal);
    }
  }
  /*
  public getMensajeOriginal(): string {
    return this.mensajeOriginal;
  }
  public getMensajeCifrado(): string {
    return this.mensajeCifrado;
  }
  */
  public getMensaje(): string {
    return this.mensaje.join('');
  }
  public getClave(): string {
    return this.clave.join('');
  }
  public getAlfabeto(): string {
    return this.alfabeto.join('');
  }
  public setMensaje(mensaje: string): void {
    this.mensaje = mensaje.split('');
  }
  public setClave(clave:string): void {
    this.clave = clave.split('');
  }
  public setAlfabeto(alfabeto:string): void {
    this.alfabeto = alfabeto.split('');
  }
}
