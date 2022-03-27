import 'mocha';
import {expect} from 'chai';
import {DecodificadorCesar} from '../src/ejercicio-3/DecodificarCesar';
import {CodificadorCesar} from '../src/ejercicio-3/CodificarCesar';

describe('Test ejercicio-2', () => {
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
      expect(cifrado1.mensaje.getMensaje()).to.be.equal('HOLAMUNDO');
      // eslint-disable-next-line max-len
      expect(cifrado1.alfabeto.getAlfabeto()).to.be.equal('ABCDEFGHIJKLMNÑOPQRSTUVWXYZ');
      expect(cifrado1.clave.getClave()).to.be.equal('CLAVE');
    });
    it('Se comprueban setters', () => {
      cifrado2.mensaje.setMensaje('adios');
      cifrado2.alfabeto.setAlfabeto('acbdghijskoz');
      cifrado2.clave.setClave('casa');
      expect(cifrado2.mensaje.getMensaje()).to.be.equal('adios');
      expect(cifrado2.alfabeto.getAlfabeto()).to.be.equal('acbdghijskoz');
      expect(cifrado2.clave.getClave()).to.be.equal('casa');
    });
    it('Se comprueban metodo codificar', () => {
      expect(cifrado1.codificar()).to.be.eq('KAMWQUNDO');
    });
    it('Se comprueban metodo decodificar', () => {
      expect(cifrado3.decodificar()).to.be.equal('HOLAMUNDO');
    });
  });
});
