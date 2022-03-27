export class Clave {
  private clave: string[];

  constructor(private claveCadena: string) {
    this.clave = claveCadena.split('');
  }

  public getClave(): string {
    return this.clave.join('');
  }
  public setClave(claveNueva: string): void {
    this.clave = claveNueva.split('');
  }
  public ajustarClave(tam: number): string[] {
    const auxClave: string = '';
    if (this.clave.length < tam) {
      auxClave.padEnd(tam, this.getClave());
    }
    return auxClave.split('');
  }
}
