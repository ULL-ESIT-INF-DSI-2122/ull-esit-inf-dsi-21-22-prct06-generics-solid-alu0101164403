import 'mocha';
import {expect} from 'chai';
import {NumericPrintableCollection} from
  '../src/modificacionClase/NumericPrintableCollection';
import {StringPrintableCollection} from
  '../src/modificacionClase/StringPrintableCollection';

describe('Test de la clase NumericPrintCollection', () => {
  const n1: NumericPrintableCollection =
    new NumericPrintableCollection([50, 10, 32]);
  const n2: NumericPrintableCollection =
    new NumericPrintableCollection([1, 2, 5, 6, 7]);

  it('Se comprueba que se crea un objeto', () => {
    expect(typeof n1).to.be.equal('object');
  });
  it('Se comprueba print()', () => {
    expect(n1.print()).to.be.equal('50,10,32');
    expect(n2.print()).to.be.equal('1,2,5,6,7');
  });
});

describe('Test de la clase StringPrintCollection', () => {
  const s1: StringPrintableCollection =
    new StringPrintableCollection(['hola', 'BuenosDias']);
  const s2: StringPrintableCollection =
    new StringPrintableCollection(['esta', 'Soleado']);

  it('Se comprueba que se crea un objeto', () => {
    expect(typeof s1).to.be.equal('object');
  });
  it('Se comprueba print()', () => {
    expect(s1.print()).to.be.equal('hola,BuenosDias');
    expect(s2.print()).to.be.equal('esta,Soleado');
  });
});
