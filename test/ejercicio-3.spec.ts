import 'mocha';
import {expect} from 'chai';
import {DecodificadorCesar} from '../src/ejercicio-3/DecodificarCesar';
import {CodificadorCesar} from '../src/ejercicio-3/CodificarCesar';

describe('Test clase cifrado', () => {
  const cifrado1: CodificadorCesar = new CodificadorCesar('HOLAMUNDO', 'CLAVE',
      'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ');
  const cifrado2: CodificadorCesar = new CodificadorCesar('HOLAMUNDO', 'CLAVE',
      'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ');
  const cifrado3: DecodificadorCesar = new DecodificadorCesar('KAMWQUNDO',
      'CLAVE', 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ');

  describe('Test clace CifradoCesar', () => {
    it('Se instancia un objeto de cifrado correctamente', () => {
      expect(typeof cifrado1).to.be.equal('object');
    });
    it('Se comprueba que no se pasan datos vacios', () => {
      expect(() => {
        new CodificadorCesar('HolaMundo', 'bbv', '');
      }).to.throw('No se ha introducido un alfabeto valido');
      expect(() => {
        new CodificadorCesar('HolaMundo', '', 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ');
      }).to.throw('No se ha introducido una clave valida');
      expect(() => {
        new CodificadorCesar('', 'hol', 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ');
      }).to.throw('No se ha introducido un mensaje valido');
    });
    it('Se comprueban getters', () => {
      expect(cifrado1.getMensaje()).to.be.equal('HOLAMUNDO');
      expect(cifrado1.getAlfabeto()).to.be.equal('ABCDEFGHIJKLMNÑOPQRSTUVWXYZ');
      expect(cifrado1.getClave()).to.be.equal('CLAVE');
    });
    it('Se comprueban setters', () => {
      cifrado2.setMensaje('adios');
      cifrado2.setAlfabeto('acbdghijskoz');
      cifrado2.setClave('casa');
      expect(cifrado2.getMensaje()).to.be.equal('adios');
      expect(cifrado2.getAlfabeto()).to.be.equal('acbdghijskoz');
      expect(cifrado2.getClave()).to.be.equal('casa');
    });
    it('Se comprueban metodo codificar', () => {
      expect(cifrado1.codificar()).to.be.eq('KAMWQUNDO');
    });
    it('Se comprueban metodo decodificar', () => {
      expect(cifrado3.decodificar()).to.be.equal('HOLAMUNDO');
    });
  });
});
