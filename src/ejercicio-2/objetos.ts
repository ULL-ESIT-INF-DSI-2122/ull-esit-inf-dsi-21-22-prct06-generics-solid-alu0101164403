import {Docu} from './Docu';
import {Movie} from './Movie';
import {Serie} from './Serie';

const TheOffice: Serie = new Serie('The Office', 2005, ['comedy'],
    8, true, 'serie americana que muestra la vida en una oficina', 9);

const StrangerThings: Serie = new Serie('StrangerThings', 2016,
    ['horror', 'fantasy'], 9, false, 'aventuras de un grupo de niños', 4);

const HarryPotter: Movie = new Movie('HarryPotter', 2001,
    ['fantasy'], 9, true, 'aventuras de un grupo de niños');

const Ghostbusters: Movie = new Movie('Ghostbusters', 2001,
    ['fantasy', 'action'], 7, false, 'cazan fantasmas');

const Venom: Movie = new Movie('Venom', 2021,
    ['comedy', 'action'], 7, true, 'cazan fantasmas');

const doc1: Docu = new Docu('doc1', 2021,
    ['nature', 'animals'], 7, true, 'animales');

const doc2: Docu = new Docu('doc2', 2021,
    ['travels'], 7, false, 'viajes');

const doc3: Docu = new Docu('doc3', 2021,
    ['historical', 'travels'], 7, true, 'ciudades antiguas');

export default {
  TheOffice,
  StrangerThings,
  HarryPotter,
  Ghostbusters,
  Venom,
  doc1,
  doc2,
  doc3,
};
