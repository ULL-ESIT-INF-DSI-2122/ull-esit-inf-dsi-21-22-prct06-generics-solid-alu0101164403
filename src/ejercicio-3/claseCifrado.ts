import {Alfabeto} from './claseAlfabeto';
import {Clave} from './claseClave';
import {Mensaje} from './claseMensaje';

export abstract class Cifrado {
  readonly mensaje: Mensaje;
  readonly clave: Clave;
  readonly alfabeto: Alfabeto;

  constructor(mensajeCadena: string, claveCadena: string,
      alfabetoCadena: string) {
    if (mensajeCadena == '') {
      throw new Error(`No se ha introducido un mensaje valido`);
    }
    if (claveCadena == '') {
      throw new Error(`No se ha introducido una clave valida`);
    }
    if (alfabetoCadena == '') {
      throw new Error(`No se ha introducido un alfabeto valido`);
    }
    this.clave = new Clave(claveCadena);
    this.clave.ajustarClave(mensajeCadena.length);
    this.mensaje = new Mensaje(mensajeCadena);
    this.alfabeto = new Alfabeto(alfabetoCadena);
  }
}
