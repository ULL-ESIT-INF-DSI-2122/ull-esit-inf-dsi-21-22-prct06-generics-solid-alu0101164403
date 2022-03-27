import {Streamable, ItemStremeable, genres, genresDocu} from './interfaces';

/**
 * clase abstracta y generica que contiene los atributos y metodos que
 * deben contened todas las clases que represeten una coleccion de streamables
 */
export abstract class BasicStreamableCollection<T extends ItemStremeable>
implements Streamable<T> {
  /**
   * el contructor recibe una lista con objeto T(no estan definidos aun)
   * @param itemList T[]
   */
  constructor(readonly itemList: T[] = []) {
  }
  /**
   * metodo que devuelve los elemento de la lista mostrando solo su nombre
   * @returns string[]
   */
  public getItemList(): string[] {
    return this.itemList.map((value) => {
      return value.name;
    });
  }
  /**
   * metodo que añade un elemento a la lsita
   * @param item T
   */
  public addItemList(item: T): void {
    this.itemList.push(item);
  }
  /**
   * metodo que eliminar un elemento de la lista buscando por su indice
   * @param numberItem number
   */
  public deleteItemList(numberItem: number): void {
    if (numberItem >= this.itemList.length) {
      throw new Error(`No existe un elemento con ese índice`);
    }
    this.itemList.splice((numberItem-1), 1);
  }
  /**
   * metodo que busca en la lista los objetos que cumplen la condcion
   * en este caso que contengan una cadena en su nombre
   * devuelve una nueva lista con esos objetos
   * @param name string
   * @returns T[]
   */
  public searchByName(name: string): T[] {
    return this.itemList.filter((value) => {
      return value.name.includes(name);
    });
  }
  /**
   * metodo que busca en la lista los objetos que cumplen la condcion
   * en este caso que hayan sido publicados en el año indicado
   * devuelve una nueva lista con esos objetos o un mensaje si no hay elementos
   * que coincidan con la busqueda
   * @param name string
   * @returns T[]
   */
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
  /**
   * metodo que busca en la lista los objetos que cumplen la condcion
   * en este caso que pertenezcan a un genero
   * devuelve una nueva lista con esos objetos
   * @param name string
   * @returns T[]
   */
  public searchByGenre(genre: genres|genresDocu): T[] {
    return this.itemList.filter((value) => {
      return value.genre.includes(genre);
    });
  }
  /**
   * metodo que busca en la lista los objetos que cumplen la condcion
   * en este caso que tengan mas o igual nota a la indicada
   * devuelve una nueva lista con esos objetos
   * @param name string
   * @returns T[]
   */
  public searchByRating(score: number): T[] {
    return this.itemList.filter((value) => {
      return (value.averageScore >= score);
    });
  }
  /**
   * metodo que busca en la lista los objetos que cumplen la condcion
   * en este caso que esten recomendados
   * devuelve una nueva lista con esos objetos
   * @param name string
   * @returns T[]
   */
  public searchByRecommended(): T[] {
    return this.itemList.filter((value) => {
      return value.recommended;
    });
  }
  public getList(): IterableIterator<T> {
    // values?
    return this.itemList.values();
  }
  /**
   * metodo abstracto para que se implemente en las subclases
   * como quiere mostrarse el objeto
   */
  abstract print(): string[];
}
