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
export interface datosContendiente extends estadisticasBase {
  readonly nombre:string;
  readonly tipo: tipoPoder;
  readonly frase: string;
}
/**
 * tipo de dato para el tipo de pokemon, no puede haber otros tipos
 * que no aparezca aqui
 */
export type tipoPoder = 'planta'| 'fuego' | 'electrico' | 'agua' | 'fuerza' |
'martillo'| 'puño' | 'arco' | 'magia';
