import {BasicStreamableCollection} from './BasicStreamableCollection';
import {Movie} from './Movie';

export class MovieStreamableCollection
  extends BasicStreamableCollection<Movie> {
  constructor(readonly itemList: Movie[]) {
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
