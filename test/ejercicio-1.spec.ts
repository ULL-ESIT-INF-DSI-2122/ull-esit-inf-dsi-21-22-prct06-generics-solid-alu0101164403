import 'mocha';
import {expect} from 'chai';
import {Fighter} from '../src/ejercicio-1/Fighter';
import {Combat} from '../src/ejercicio-1/Combat';
import {Pokedex} from '../src/ejercicio-1/Pokedex';
import {UniversoPokemon} from '../src/ejercicio-1/UPokemon';
import {UniversoMarvel} from '../src/ejercicio-1/UMarvel';
import {UniversoDragonBall} from '../src/ejercicio-1/UDragonBall';


describe('Test ejercicio-1', () => {
  // eslint-disable-next-line max-len
  const pokemon1: UniversoPokemon = new UniversoPokemon('pikachu', 'electrico', 'pikapika', 52, 41, 65, 50);
  // eslint-disable-next-line max-len
  const marvel1: UniversoMarvel = new UniversoMarvel('thor', 'electrico', 'yo soy thor', 100, 41, 35, 500);
  // eslint-disable-next-line max-len
  const dragonB1: UniversoDragonBall = new UniversoDragonBall('goku', 'fuerza', 'no me rendire', 75, 95, 65, 100);

  describe('Test clase UPokemon', () => {
    it('Se comprueba que se crea un objeto correctamente', () => {
      expect(pokemon1 instanceof Fighter).to.be.true;
    });
    it('Se comprueban getter de datos', () => {
      expect(pokemon1.nombre).to.be.equal('pikachu');
      expect(pokemon1.ataque).to.be.equal(52);
      expect(pokemon1.frase).to.be.equal('pikapika');
    });
    // eslint-disable-next-line max-len
    it('Se comprueban que no permite valores negativos ni vacios en los atributos', () => {
      expect(() => {
        new UniversoPokemon('Charmader', 'fuego', 'hola', -55, 55, 45, 2);
      }).to.throw('El atributo ataque es menor que 0');
      expect(() => {
        new UniversoPokemon('', 'fuego', 'hola', 55, 55, 45, 2);
      }).to.throw('El nombre no puede estar vacío.');
    });

    describe('Test clase UMarvel', () => {
      it('Se comprueba que se crea un objeto correctamente', () => {
        expect(marvel1 instanceof Fighter).to.be.true;
      });
      it('Se comprueban getter de datos', () => {
        expect(marvel1.nombre).to.be.equal('thor');
        expect(marvel1.defensa).to.be.equal(41);
        expect(marvel1.hp).to.be.equal(500);
      });
    });

    describe('Test clase UDragonBall', () => {
      it('Se comprueba que se crea un objeto correctamente', () => {
        expect(dragonB1 instanceof Fighter).to.be.true;
      });
      it('Se comprueban getter de datos', () => {
        expect(dragonB1.nombre).to.be.equal('goku');
        expect(dragonB1.ataque).to.be.equal(75);
        expect(dragonB1.velocidad).to.be.equal(65);
      });
    });

    describe('Test de la clase Combat usando Pokedex', () => {
      const pokedex: Pokedex = new Pokedex([pokemon1, marvel1, dragonB1]);
      // eslint-disable-next-line max-len
      const combate: Combat = new Combat(pokedex.listaLuchadores[0], pokedex.listaLuchadores[0]);
      // eslint-disable-next-line max-len
      const combate2: Combat = new Combat(pokedex.listaLuchadores[1], pokedex.listaLuchadores[2]);

      it('Se comprueba que se crea un objeto correctamente', () => {
        expect(combate instanceof Combat).to.be.true;
      });
      it('Se comprueban que realiza un combate correctamente', () => {
        expect(combate.start()).to.be.equal('pikachu');
      });
      it('Se comprueban que realiza un combate correctamente', () => {
        expect(combate2.start()).to.be.equal('thor');
      });
    });
  });
});
