export class Alfabeto {
  private alfabeto: string[];

  constructor(private alfabetoCadena: string) {
    this.alfabeto = alfabetoCadena.split('');
  }

  public getAlfabeto(): string {
    return this.alfabeto.join('');
  }
  public setAlfabeto(nuevoAlfabeto: string) {
    this.alfabeto = nuevoAlfabeto.split('');
  }
  public size(): number {
    return this.alfabeto.length;
  }
}
