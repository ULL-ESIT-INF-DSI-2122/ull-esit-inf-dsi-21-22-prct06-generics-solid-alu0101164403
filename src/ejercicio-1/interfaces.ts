/**
 * interfaz generica que contiene las estadictias base de los pokemons
 */
 interface estadisticasBase {
  readonly ataque:number;
  readonly defensa:number;
  readonly velocidad:number;
  readonly hp:number;
}
/*
 * interfaz generica con los datos basicos de un pokemon incluyendo
 * estadisticas bases
 */
export interface datosContendiente<T> extends estadisticasBase {
  readonly nombre:string;
  readonly peso:number;
  readonly altura:number;
  readonly tipo: T;
}
/**
 * tipo de dato para el tipo de pokemon, no puede haber otros tipos
 * que no aparezca aqui
 */
export type tipoPoder = 'planta'| 'fuego' | 'electrico' | 'agua' | 'fuerza';

export type tipoArma = 'martillo'| 'puño' | 'arco' | 'magia';
