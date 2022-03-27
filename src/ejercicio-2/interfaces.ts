export interface Streamable<T extends ItemStremeable>
    extends ModifyList<T>, Search<T>, PrintableCollection, Iterate<T> {
  // atributos basicos de streamable
  readonly itemList: T[];
  getItemList(): string[];
}

interface ModifyList<T> {
  // metodos basicos de lista
  addItemList(item: T): void;
  deleteItemList(numberItem: number): void;
}

interface Search<T> {
  // metodos busqueda
  searchByName(name: string): T[];
  searchByYearPublication(year: number): T[] | string;
  searchByGenre(genre: string): T[];
  searchByRating(value: number): T[];
  searchByRecommended(): T[];
}

interface Iterate<T> {
  getList(): IterableIterator<T>;
}

interface PrintableCollection {
  print(): string[];
}

export interface PrivateCollection<T> {
  // metodos añadir coleccion privada
  addItemListToSee(item: T): void;
  addItemListLiked(item: T): void;
  addItemListUnliked(item: T): void;
  addItemListSeen(item: T): void;
  // metodos eliminar coleccion privada
  deleteItemListToSee(numberItem: T): void;
  deleteItemListLiked(numberItem: T): void;
  deleteItemListUnliked(numberItem: T): void;
  deleteItemListSeen(numberItem: T): void;
}

export interface ItemStremeable extends PrintItem {
  // atributos basicos de objeto coleccionable
  readonly name:string;
  readonly yearPublication: number;
  readonly genre: (genres|genresDocu)[];
  readonly averageScore: number;
  readonly recommended: boolean;
  readonly description: string;
}

interface PrintItem {
  print(): string;
}

export type genres = 'action' | 'comedy' | 'horror' | 'romance' | 'fantasy';
export type genresDocu = 'nature' | 'animals' | 'travels' | 'historical';
