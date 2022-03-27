import {BasicStreamableCollection} from './BasicStreamableCollection';
import {Docu} from './Docu';

/**
 * clase que representa una coleccion de documetales
 */
export class DocuStreamableCollection
  extends BasicStreamableCollection<Docu> {
  constructor(readonly itemList: Docu[]) {
    super(itemList);
  }

  public print(): string[] {
    if (this.itemList.length === 0) {
      return ['No hay elementos en la lista'];
    } else {
      return this.itemList.map((value) => {
        return value.print() + `\n`;
      });
    }
  }
}
