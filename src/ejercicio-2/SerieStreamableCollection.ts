import {BasicStreamableCollection} from './BasicStreamableCollection';
import {Serie} from './Serie';

/**
 * clase que representa una coleccion de series
 */
export class SerieStreamableCollection
  extends BasicStreamableCollection<Serie> {
  constructor(readonly itemList: Serie[]) {
    super(itemList);
  }

  public print(): string[] {
    if (this.itemList.length === 0) {
      return ['No hay elementos en la lista'];
    } else {
      return this.itemList.map((value) => {
        return value.print();
      });
    }
  }
}
