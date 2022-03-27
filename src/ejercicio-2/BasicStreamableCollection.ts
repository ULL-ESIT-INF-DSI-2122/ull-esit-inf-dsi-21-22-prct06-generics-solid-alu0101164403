import {Streamable, ItemStremeable, genres, genresDocu} from './interfaces';

export abstract class BasicStreamableCollection<T extends ItemStremeable>
implements Streamable<T> {
  constructor(readonly itemList: T[] = []) {
  }

  public getItemList(): string[] {
    return this.itemList.map((value) => {
      return value.name;
    });
  }
  public addItemList(item: T): void {
    this.itemList.push(item);
  }

  public deleteItemList(numberItem: number): void {
    if (numberItem >= this.itemList.length) {
      throw new Error(`No existe un elemento con ese índice`);
    }
    this.itemList.splice((numberItem-1), 1);
  }

  public searchByName(name: string): T[] {
    return this.itemList.filter((value) => {
      return value.name.includes(name);
    });
  }
  public searchByYearPublication(year: number): T[] | string {
    const lista: T[] = this.itemList.filter((value) => {
      return value.yearPublication === year;
    });
    if (lista.length === 0) {
      return 'No hay elementos que mostrar.';
    } else {
      return lista;
    }
  }
  public searchByGenre(genre: genres|genresDocu): T[] {
    return this.itemList.filter((value) => {
      return value.genre.includes(genre);
    });
  }
  public searchByRating(score: number): T[] {
    return this.itemList.filter((value) => {
      return (value.averageScore >= score);
    });
  }
  public searchByRecommended(): T[] {
    return this.itemList.filter((value) => {
      return value.recommended;
    });
  }

  public getList(): IterableIterator<T> {
    // values?
    return this.itemList.values();
  }

  abstract print(): string[];
}
