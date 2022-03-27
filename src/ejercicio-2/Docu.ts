import {genresDocu, ItemStremeable} from './interfaces';

export class Docu implements ItemStremeable {
  constructor(readonly name: string, readonly yearPublication: number,
    readonly genre: genresDocu[], readonly averageScore: number,
    readonly recommended: boolean, readonly description: string) {
  }

  public print(): string {
    // eslint-disable-next-line max-len
    return (`Type Documentary\nName: ${this.name}\nYear: ${this.yearPublication}\nGenres: ${this.genre}\nScore: ${this.averageScore}\nDescription: ${this.description}`);
  }
}
