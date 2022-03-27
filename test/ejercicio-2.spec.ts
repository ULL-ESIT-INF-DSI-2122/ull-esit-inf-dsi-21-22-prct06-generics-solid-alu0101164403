import 'mocha';
import {expect} from 'chai';
import {Docu} from '../src/ejercicio-2/Docu';
import {Movie} from '../src/ejercicio-2/Movie';
import {Serie} from '../src/ejercicio-2/Serie';
import {DocuStreamableCollection} from
  '../src/ejercicio-2/DocuStreamableCollection';
import {MovieStreamableCollection} from
  '../src/ejercicio-2/MovieStreamableCollection';
import {SerieStreamableCollection} from
  '../src/ejercicio-2/SerieStreamableCollection';
import objetos from '../src/ejercicio-2/objetos';

describe('Test ejercicio-2.', () => {
  describe('Test clase Docu', () => {
    it('Se crea un obejto de la clase Docu', () => {
      expect(objetos.doc1 instanceof Docu).to.be.true;
    });
    it('Se comprueba getters de Docu', () => {
      expect(objetos.doc1.name).to.be.eq('doc1');
      expect(objetos.doc1.genre).to.deep.equal(['nature', 'animals']);
      expect(objetos.doc1.averageScore).to.be.eq(7);
      expect(objetos.doc1.description).to.be.eq('animales');
      expect(objetos.doc1.yearPublication).to.be.eq(2021);
      expect(objetos.doc1.recommended).to.be.true;
    });
    it('Se comprueba metodo print()', () => {
      expect(objetos.doc1.print()).to
          // eslint-disable-next-line max-len
          .be.equal('Type Documentary\nName: doc1\nYear: 2021\nGenres: nature,animals\nScore: 7\nDescription: animales');
    });
  });
  describe('Test clase Movie.', () => {
    it('Se crea un obejto de la clase Movie', () => {
      expect(objetos.Venom instanceof Movie).to.be.true;
    });
    it('Se comprueba getters de Movie', () => {
      expect(objetos.HarryPotter.name).to.be.eq('HarryPotter');
      expect(objetos.HarryPotter.genre).to.deep.equal(['fantasy']);
      expect(objetos.HarryPotter.averageScore).to.be.eq(9);
      expect(objetos.HarryPotter.description).to.be.
          eq('aventuras de un grupo de niños');
      expect(objetos.HarryPotter.yearPublication).to.be.eq(2001);
      expect(objetos.HarryPotter.recommended).to.be.true;
    });
    it('Se comprueba metodo print()', () => {
      expect(objetos.HarryPotter.print()).to
      // eslint-disable-next-line max-len
          .be.equal('Type Movie\nName: HarryPotter\nYear: 2001\nGenres: fantasy\nScore: 9\nDescription: aventuras de un grupo de niños');
    });
  });

  describe('Test clase Serie.', () => {
    it('Se crea un obejto de la clase Serie', () => {
      expect(objetos.StrangerThings instanceof Serie).to.be.true;
    });
    it('Se comprueba getters de Serie', () => {
      expect(objetos.TheOffice.name).to.be.eq('The Office');
      expect(objetos.TheOffice.genre).to.deep.equal(['comedy']);
      expect(objetos.TheOffice.averageScore).to.be.eq(8);
      expect(objetos.TheOffice.description).to.be.
          eq('serie americana que muestra la vida en una oficina');
      expect(objetos.TheOffice.yearPublication).to.be.eq(2005);
      expect(objetos.TheOffice.recommended).to.be.true;
      expect(objetos.TheOffice.numberSeasons).to.be.eq(9);
    });
    it('Se comprueba metodo print()', () => {
      expect(objetos.TheOffice.print()).to
      // eslint-disable-next-line max-len
          .be.equal('Type Serie\nName: The Office\nYear: 2005\nGenres: comedy\nScore: 8\nNumber seasons: 9\nDescription: serie americana que muestra la vida en una oficina');
    });
  });

  describe('Test clases StreamableCollection.', () => {
    const coleccionDocu: DocuStreamableCollection =
    new DocuStreamableCollection([objetos.doc1,
      objetos.doc2]);
    const coleccionSeries: SerieStreamableCollection =
    new SerieStreamableCollection([objetos.TheOffice]);
    const coleccionPelis: MovieStreamableCollection =
    new MovieStreamableCollection([objetos.HarryPotter, objetos.Ghostbusters]);

    describe('Test clase DocuCollection.', () => {
      it('Se crea un objeto correctamente', () => {
        expect(coleccionDocu instanceof DocuStreamableCollection).to.be.true;
      });
      it('Se comprueba metodo print()', () => {
        expect(coleccionDocu.print()).not.to.be.undefined;
      });
      it('Se comprueba getItemList()', () => {
        // eslint-disable-next-line max-len
        expect(coleccionDocu.getItemList()).to.deep.equal(['doc1', 'doc2']);
      });
      it('Se comprueba metodo addItemList()', () => {
        coleccionDocu.addItemList(objetos.doc3);
        // eslint-disable-next-line max-len
        expect(coleccionDocu.getItemList()).to.deep.equal(['doc1', 'doc2', 'doc3']);
      });
      it('Se comprueba error en metodo deleteItemList()', () => {
        expect(() => {
          coleccionDocu.deleteItemList(5);
        }).to.throw(`No existe un elemento con ese índice`);
      });
      it('Se comprueba searchByName()', () => {
        expect(coleccionDocu.searchByName('doc1').map((value) => {
          return value.name;
        })).to.deep.equal(['doc1']);
        // eslint-disable-next-line max-len
        expect(coleccionDocu.searchByName('oc').map((value) => {
          return value.name;
        })).to.deep.equal(['doc1', 'doc2', 'doc3']);
      });
    });

    describe('Test clase SerieCollection.', () => {
      it('Se crea un objeto correctamente', () => {
        expect(coleccionSeries instanceof SerieStreamableCollection).to.be.true;
      });
      it('Se comprueba metodo print()', () => {
        expect(coleccionSeries.print()).not.to.be.undefined;
      });
      it('Se comprueba metodo addItemList() y getItemList()', () => {
        coleccionSeries.addItemList(objetos.StrangerThings);
        // eslint-disable-next-line max-len
        expect(coleccionSeries.getItemList()).to.deep.equal(['The Office', 'StrangerThings']);
      });
      it('Se comprueba metodo deleteItemList()', () => {
        coleccionSeries.deleteItemList(1);
        // eslint-disable-next-line max-len
        expect(coleccionSeries.getItemList()).to.deep.equal(['StrangerThings']);
      });
      it('Se comprueba searchByYear()', () => {
        // eslint-disable-next-line max-len
        expect(coleccionSeries.searchByYearPublication(2000)).to.be.equal('No hay elementos que mostrar.');
      });
    });

    describe('Test clase MovieCollection.', () => {
      it('Se crea un objeto correctamente', () => {
        expect(coleccionPelis instanceof MovieStreamableCollection).to.be.true;
      });
      it('Se comprueba metodo print()', () => {
        expect(coleccionPelis.print()).not.to.be.undefined;
      });
      it('Se comprueba metodo addItemList() y getItemList()', () => {
        coleccionPelis.addItemList(objetos.Venom);
        // eslint-disable-next-line max-len
        expect(coleccionPelis.getItemList()).to.deep.equal(['HarryPotter', 'Ghostbusters', 'Venom']);
      });
      it('Se comprueba metodo deleteItemList()', () => {
        coleccionPelis.deleteItemList(2);
        // eslint-disable-next-line max-len
        expect(coleccionPelis.getItemList()).to.deep.equal(['HarryPotter', 'Venom']);
      });
      it('Se comprueba searchByGenre()', () => {
        expect(coleccionPelis.searchByGenre('action').map((value) => {
          return value.name;
        })).to.deep.equal(['Venom']);
      });
      it('Se comprueba searchByRating()', () => {
        expect(coleccionPelis.searchByRating(8).map((value) => {
          return value.name;
        })).to.deep.equal(['HarryPotter']);
      });
      it('Se comprueba searchByRecomended()', () => {
        expect(coleccionPelis.searchByRecommended().map((value) => {
          return value.name;
        })).to.deep.equal(['HarryPotter', 'Venom']);
      });
    });
  });
});
