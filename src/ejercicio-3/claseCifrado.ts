import {Alfabeto} from './claseAlfabeto';
import {Clave} from './claseClave';
import {Mensaje} from './claseMensaje';

/**
 * clase que representa un cifrado, contiene un mensaje, alfabeto y clave
 */
export abstract class Cifrado {
  readonly mensaje: Mensaje;
  readonly clave: Clave;
  readonly alfabeto: Alfabeto;
  /**
   * constructor que recibe en cadenas el mensaje, clave y alfabeto
   * comprueba que no se pasen valores vacio e inicializa los atributos
   * como onjetos de sus correspondientes clases
   * @param mensajeCadena string
   * @param claveCadena string
   * @param alfabetoCadena string
   */
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
