# PRÁCTICA 6.  CLASES E INTERFACES ABSTRACTAS

Alumno: Ainoa Iglesias Dasilva

email: alu0101164403@ull.edu.es

Asignatura: Desarrollo de sistemas informáticos

Curso: 3º, 2021/22

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101164403/badge.svg?branch=master)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101164403?branch=master)

## EJERCICIO 1. EL COMBATE DEFINITIVO

## EJERCICIO 2. DSIFLIX

##### INTERFACES

- Steamable<T extends ItemStremeable>: interfaz genérica que contiene el atributo básico y común para toda clase StreamableCollection, esto es una lista de los elementos que contiene el coleccionable y además un método que devuelve los elementos que contiene esa lista. Los tipos de elementos no está definidos ya que se podría crear coleccionables de libros, peliculas, series... que son objetos distintos, pero sí se obliga a que esos objetos tengan definidos unos datos como pueden ser el nombre, fecha estreno/publicacion.. entre otros que son comunes a todo coleccionable y además con tipos conocidos (el nombre siempre será un string por ejemplo), por ello la interfaz tiene como tipo de datos <T extends ItemStremeable>. Esta interfaz extiende otras que contienen métodos comunes y obligados para todas las clases de este tipo.

```ts
export interface Streamable<T extends ItemStremeable> extends ModifyList<T>, Search<T>, PrintableCollection, Iterate<T> {
  readonly itemList: T[];
  getItemList(): string[];
}
```

- ModifyList<T>: contiene los métodos básicos necesarios para modificar una lista de coleccionables como son añadir y eliminar elementos.

```ts
interface ModifyList<T> {
  addItemList(item: T): void;
  deleteItemList(numberItem: number): void;
}
```

- Search<T>: contiene métodos básicos de búsqueda en objetos streamableCollection, como búsqueda por nombre/fecha/género... y que devuelven una lista con los objetos encontrados.

```ts
interface Search<T> {
  searchByName(name: string): T[];
  searchByYearPublication(year: number): T[] | string;
  searchByGenre(genre: string): T[];
  searchByRating(value: number): T[];
  searchByRecommended(): T[];
}
```

- PrintableCollection: interfaz común que contiene un método para definir como quiere mostrarse las listas. Devuelve una lista de string de cada objeto.

```ts
interface PrintableCollection {
  print(): string[];
}
```

- PrivateCollection<T>: contiene métodos para definir lo que puede hacer un usuario con los objetos de las listas anteriores.

```ts
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
```

- ItemStreamable: interfaz normal con los datos básicos que debe tener un objeto que se pueda coleccionar y stremear, que serían el nomnre, fecha de pucblicación/estreno, géneros, nota media, si está recomendado y una descripcón.

```ts
export interface ItemStremeable extends PrintItem {
  // atributos basicos de objeto coleccionable
  readonly name:string;
  readonly yearPublication: number;
  readonly genre: (genres|genresDocu)[];
  readonly averageScore: number;
  readonly recommended: boolean;
  readonly description: string;
}
```

- PrintItem: interfaz normal para implementar un método que devuelva cómo se quiere mostrar la información del objeto.

```ts
interface PrintItem {
  print(): string;
}
```

En este fichero además están incluidos dos tipos de datos que contiene los géneros que puden adquirir las películas, series y documentales.

```ts
export type genres = 'action' | 'comedy' | 'horror' | 'romance' | 'fantasy';
export type genresDocu = 'nature' | 'animals' | 'travels' | 'historical';
```

Para seguir el principio SOLID interface segregation, subdividí las interfaces según el tipo de datos o función de los métodos, si su finalidad es buscar, modificar, mostrar información o atrbutos básicos.

##### CLASES

Como en este caso se pide hacer coleccionables de documentales, películas y series, creé una clase para cada uno de ellos que heredan de una clase abstracta ya que comparten atributos y métodos.

- BasicStreamableItem: clase abstracta con los atributos básicos y comunes a un elementos coleccionable. Los atributo son 'readonly' para que puedan accederse a ellos para ver el contenido pero no modificarlos una vez creado el objeto.

```ts
export abstract class BasicStreamableItem implements ItemStremeable {
  constructor(readonly name: string, readonly yearPublication: number,
    readonly genre: (genres|genresDocu)[], readonly averageScore: number,
    readonly recommended: boolean, readonly description: string) {
  }
  abstract print(): string;
}
```

- Docu: esta clase crea un objeto documental e implementa la interfaz ItemStreamable. 

```ts
export class Docu extends BasicStreamableItem {
  constructor(readonly name: string, readonly yearPublication: number,
    readonly genre: genresDocu[], readonly averageScore: number,
    readonly recommended: boolean, readonly description: string) {
    super(name, yearPublication, genre, averageScore, recommended, description);
  }

  public print(): string {
    // eslint-disable-next-line max-len
    return (`Type Documentary\nName: ${this.name}\nYear: ${this.yearPublication}\nGenres: ${this.genre}\nScore: ${this.averageScore}\nDescription: ${this.description}`);
  }
}
```

- Serie: esta clase crea un objeto serie e implementa la interfaz ItemStreamable y que contiene un atributo para indicar el número de temporadas.

```ts
export class Serie extends BasicStreamableItem {
  constructor(readonly name: string, readonly yearPublication: number,
    readonly genre: genres[], readonly averageScore: number,
    readonly recommended: boolean, readonly description: string,
    readonly numberSeasons:number) {
    super(name, yearPublication, genre, averageScore, recommended, description);
  }

  public print(): string {
    // eslint-disable-next-line max-len
    return (`Type Serie\nName: ${this.name}\nYear: ${this.yearPublication}\nGenres: ${this.genre}\nScore: ${this.averageScore}\nNumber seasons: ${this.numberSeasons}\nDescription: ${this.description}`);
  }
}
```

- Movie: esta clase crea un objeto pelicula e implementa la interfaz ItemStreamable.

```ts
export class Movie extends BasicStreamableItem {
  constructor(readonly name: string, readonly yearPublication: number,
    readonly genre: genres[], readonly averageScore: number,
    readonly recommended: boolean, readonly description: string) {
    super(name, yearPublication, genre, averageScore, recommended, description);
  }

  public print(): string {
    // eslint-disable-next-line max-len
    return (`Type Movie\nName: ${this.name}\nYear: ${this.yearPublication}\nGenres: ${this.genre}\nScore: ${this.averageScore}\nDescription: ${this.description}`);
  }
}
```

- BasicStreamableCollection: clase asbtracta y genérica que contiene el atributo básico de las colecciones y define los métodos que tendrán todas las subclases.

```ts
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
  abstract print(): string[];
}
```

- MovieStreamableCollection: clase para representar una coleccion de películas, contiene los atributos básicos y método definidos en la clase padre (BasicStreamableCollection) y un método print() que devuelve cómo se quiere mostrar la lista de elementos.

```ts
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
```

- SerieStreamableCollection: clase para representar una coleccion de series, contiene los atributos básicos y método definidos en la clase padre (BasicStreamableCollection) y un método print() que devuelve cómo se quiere mostrar la lista de elementos.

```ts
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
```

- DocuStreamableCollection: clase para representar una coleccion de documentales, contiene los atributos básicos y método definidos en la clase padre (BasicStreamableCollection) y un método print() que devuelve cómo se quiere mostrar la lista de elementos.

```ts
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
```

#### TEST

```ts
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
          .be.equal('Type Serie\nName: The Office\nYear: 2005\nGenres: comedy\nScore: 8\nNumber seasons: 9\nDescription: serie americana que muestra la vida en una oficina');
    });
  });

  describe('Test clases StreamableCollection.', () => {
    describe('Test clase DocuCollection.', () => {
      it('Se crea un objeto correctamente', () => {
        expect(coleccionDocu instanceof DocuStreamableCollection).to.be.true;
      });
      it('Se comprueba metodo print()', () => {
        expect(coleccionDocu.print()).not.to.be.undefined;
      });
      it('Se comprueba getItemList()', () => {
        expect(coleccionDocu.getItemList()).to.deep.equal(['doc1', 'doc2']);
      });
      it('Se comprueba metodo addItemList()', () => {
        coleccionDocu.addItemList(objetos.doc3);
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
        expect(coleccionSeries.getItemList()).to.deep.equal(['The Office', 'StrangerThings']);
      });
      it('Se comprueba metodo deleteItemList()', () => {
        coleccionSeries.deleteItemList(1);
        expect(coleccionSeries.getItemList()).to.deep.equal(['StrangerThings']);
      });
      it('Se comprueba searchByYear()', () => {
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
        expect(coleccionPelis.getItemList()).to.deep.equal(['HarryPotter', 'Ghostbusters', 'Venom']);
      });
      it('Se comprueba metodo deleteItemList()', () => {
        coleccionPelis.deleteItemList(2);
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
```

Se hizo test de todos los método definidos y se tubo en cuenta (no en todos los métodos) algún error que pueda surgir como por ejemplo que las listas estén vacias, que no se encuentren los elementos buscados o no haya elementos en la posición indicada para eliminar.

## EJERCICIO 3. EL CIFRADO INDESCIFRABLE

#### CLASES

- Cifrado: esta clase contiene los atributos básicos que tendrá cualquier cifrado, como son un mensaje de entrada (ya sea para codificar o descodificar), una clave y un alfabeto.

```ts
export abstract class Cifrado {
  readonly mensaje: Mensaje;
  readonly clave: Clave;
  readonly alfabeto: Alfabeto;

  constructor(mensajeCadena: string, claveCadena: string,
      alfabetoCadena: string) {
    if (mensajeCadena == '') {
      throw new Error(`No se ha introducido un mensaje valido`);
    }
    if (claveCadena == '') {
      throw new Error(`No se ha introducido una clave valida`);
    }
    if (alfabetoCadena == '') {
      throw new Error(`No se ha introducido un alfabeto valido`);
    }
    this.clave = new Clave(claveCadena);
    this.clave.ajustarClave(mensajeCadena.length);
    this.mensaje = new Mensaje(mensajeCadena);
    this.alfabeto = new Alfabeto(alfabetoCadena);
  }
}
```

- Alfabeto: clase que crea un objeto que representa un objeto. Tanto en esta clase como la de clave y mensaje convertí las cadenas que se pasan en arrays ya que me pareció más fácil trabajar así que con strings.

```ts
export class Alfabeto {
  private alfabeto: string[];

  constructor(private alfabetoCadena: string) {
    this.alfabeto = alfabetoCadena.split('');
  }

  public getAlfabeto(): string {
    return this.alfabeto.join('');
  }
  public setAlfabeto(nuevoAlfabeto: string) {
    this.alfabeto = nuevoAlfabeto.split('');
  }
  public size(): number {
    return this.alfabeto.length;
  }
}
```

- Clave: clase para representar la clave de cifrado.

```ts
export class Clave {
  private clave: string[];

  constructor(private claveCadena: string) {
    this.clave = claveCadena.split('');
  }

  public getClave(): string {
    return this.clave.join('');
  }
  public setClave(claveNueva: string): void {
    this.clave = claveNueva.split('');
  }
  public ajustarClave(tam: number): string[] {
    const auxClave: string = '';
    if (this.clave.length < tam) {
      auxClave.padEnd(tam, this.getClave());
    }
    return auxClave.split('');
  }
}
```

- Mensaje: clase que represnta el mensaje a codificar.

```ts
export class Mensaje {
  private mensaje: string[];

  constructor(private mensajeCadena: string) {
    this.mensaje = mensajeCadena.split('');
  }

  public getMensaje(): string {
    return this.mensaje.join('');
  }
  public setMensaje(mensajeNueva: string): void {
    this.mensaje = mensajeNueva.split('');
  }
  public size(): number {
    return this.mensaje.length;
  }
}
```

- CodificarCesar: clase que realiza la operación de codificar usando el método César. Es hija de la clase Cifrado. Para cifrar se busca el índice del caracter por el que se intercambia, para ello, en el método desplazar() se busca el índice en el alfabeto del carácter actual de la clave y ese índice (mas 1 ya que los indices empiezan en 0) es el que indica la cantidad que se debe desplazar el carácter actual. Se suma el índice del carácter actual del mensaje más el desplazamiento obtenido y se obtiene el índice en el alfabeto del carácter sustituto. Se tiene en cuenta siempre que el desplazamiento puede sobrepasar el último carácter del alfabeto y en ese caso debería continuar el desplazamiento por índice 0.

```ts
export class CodificadorCesar extends Cifrado {
  constructor(mensajeCadena: string, claveCadena:string,
      alfabetoCadena:string) {
    super(mensajeCadena, claveCadena, alfabetoCadena);
  }

  private desplazar(indiceCaracterActual:number): string {
    const indiceCaracterMensajeEnAlfabeto: number = this.alfabeto.getAlfabeto().
            indexOf(this.mensaje.getMensaje()[indiceCaracterActual]);
    const indiceCaracterClaveEnAlfabeto: number = this.alfabeto.getAlfabeto().
            indexOf(this.clave.getClave()[indiceCaracterActual]);
    let indiceCaracterCodificado: number = indiceCaracterMensajeEnAlfabeto +
    indiceCaracterClaveEnAlfabeto + 1;

    if (indiceCaracterCodificado > this.alfabeto.size() - 1) {
      indiceCaracterCodificado =
          indiceCaracterCodificado - this.alfabeto.size();
    }
    return this.alfabeto.getAlfabeto()[indiceCaracterCodificado];
  }

  public codificar(): string {
    let mensajeCifrado: string = '';
    let indiceCaracterActual: number = 0;
    while (this.mensaje.size() > indiceCaracterActual) {
      const caracterCodificado: string = this.desplazar(indiceCaracterActual);
      mensajeCifrado = mensajeCifrado.concat('', caracterCodificado);
      indiceCaracterActual++;
    }
    return mensajeCifrado;
  }
}
```

- DecodificadorCesar: clase que representa el métdo para decodificar usando el método César. Para decodificar se usa el mismo método que para cifrar pero teniendo en cuenta que el desplazamito es a la izquierda.

```ts
export class DecodificadorCesar extends Cifrado {
  constructor(mensaje: string, clave:string, alfabeto:string) {
    super(mensaje, clave, alfabeto);
  }

  private desplazar(indiceCaracterActual:number): string {
    const indiceCaracterMensajeEnAlfabeto: number =
        this.alfabeto.getAlfabeto().
            indexOf(this.mensaje.getMensaje()[indiceCaracterActual]);
    const indiceCaracterClaveEnAlfabeto: number =
        this.alfabeto.getAlfabeto().
            indexOf(this.clave.getClave()[indiceCaracterActual]);
    let indiceCaracterDecodificado: number = indiceCaracterMensajeEnAlfabeto -
        (indiceCaracterClaveEnAlfabeto + 1);
    if (indiceCaracterDecodificado < 0) {
      indiceCaracterDecodificado =
          this.alfabeto.size() - Math.abs(indiceCaracterDecodificado);
    }
    return this.alfabeto.getAlfabeto()[indiceCaracterDecodificado];
  }

  public decodificar(): string {
    let mensajeDescifrado: string = '';
    let indiceCaracterActual: number = 0;
    while (this.mensaje.size() > indiceCaracterActual) {
      const caracterDecodificado: string = this.desplazar(indiceCaracterActual);
      mensajeDescifrado = mensajeDescifrado.concat('', caracterDecodificado);
      indiceCaracterActual++;
    }
    return mensajeDescifrado;
  }
}
```

#### TEST 

```ts
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
````
