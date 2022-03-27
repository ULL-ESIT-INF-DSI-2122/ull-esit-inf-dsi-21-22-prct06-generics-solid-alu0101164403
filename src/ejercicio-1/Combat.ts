import {Fighter} from './Fighter';

export class Combat {
  constructor(readonly luchador1: Fighter, readonly luchador2: Fighter) {
  }

  private dañoRealizado(luchador1: Fighter, luchador2: Fighter): number {
    const efectividad = matrizEfectividad[luchador1.tipo][luchador2.tipo];
    // eslint-disable-next-line max-len
    const daño:number = 50 * (luchador1.ataque / luchador2.defensa) * efectividad;
    return daño;
  }

  public start(): string {
    let hpLuch1:number = this.luchador1.hp;
    let hpLuch2:number = this.luchador2.hp;
    console.log(`Vida inicial: \n${this.luchador1.nombre} = ${hpLuch1}`);
    console.log(`${this.luchador2.nombre} = ${hpLuch2}`);

    while (hpLuch1 > 0) {
      hpLuch2 -= this.dañoRealizado(this.luchador1, this.luchador2);

      console.log(`Vida actual de los combatientes: \n
      ${this.luchador1.nombre} -> ${hpLuch1}\n
      ${this.luchador2.nombre} -> ${hpLuch2}`);
      console.log(`${this.luchador1.nombre} dice: ${this.luchador1.frase}`);
      if (hpLuch2 <= 0) break;
      hpLuch1 -= this.dañoRealizado(this.luchador2, this.luchador1);

      console.log(`Vida actual de los combatientes: \n
      ${this.luchador1.nombre} -> ${hpLuch1}\n
      ${this.luchador2.nombre} -> ${hpLuch2}`);
      console.log(`${this.luchador2.nombre} dice: ${this.luchador2.frase}`);
    }
    if (hpLuch1 > 0) {
      return this.luchador1.nombre;
    } else {
      return this.luchador2.nombre;
    }
  }
}


const efectivo = 2;
const neutral = 1;
const pocoEfectivo = 0.5;

/**
* diccionario de diccionarios con efectividades de los ataques, primero con
* atacante y luego aparece el defensor
*/
const matrizEfectividad: {[key:string]: {[key:string]: number}} = {
  'fuego': {'fuego': pocoEfectivo, 'agua': pocoEfectivo, 'planta': efectivo,
    'electrico': neutral, 'fuerza': efectivo},
  'agua': {'fuego': efectivo, 'agua': pocoEfectivo, 'planta': pocoEfectivo,
    'electrico': pocoEfectivo, 'fuerza': neutral},
  'planta': {'fuego': pocoEfectivo, 'agua': efectivo, 'planta': pocoEfectivo,
    'electrico': neutral, 'fuerza': pocoEfectivo},
  'electrico': {'fuego': neutral, 'agua': efectivo, 'planta': neutral,
    'electrico': pocoEfectivo, 'fuerza': pocoEfectivo},
  'fuerza': {'fuego': neutral, 'agua': efectivo, 'planta': neutral,
    'electrico': pocoEfectivo, 'fuerza': neutral},
};

