import {datosContendiente, tipoPoder} from './interfaces';

// clase padre de todas
export abstract class Fighter implements datosContendiente {
  constructor(readonly nombre:string, readonly tipo: tipoPoder,
    readonly frase: string, readonly ataque: number, readonly defensa: number,
    readonly velocidad: number, readonly hp: number) {
    const dicComprobar: {[key:string]: number} = {
      'ataque': ataque,
      'defensa': defensa,
      'velocidad': velocidad,
      'hp': hp,
    };
    for (const clave in dicComprobar) {
      if (dicComprobar[clave] < 0) {
        throw new Error(`El atributo ${clave} es menor que 0`);
      }
    }
    if (nombre === '' || frase === '') {
      throw new Error(`El nombre no puede estar vacío.`);
    }
  }
}
