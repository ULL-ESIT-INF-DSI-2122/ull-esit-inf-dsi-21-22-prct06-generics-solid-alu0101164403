import {genresDocu} from './interfaces';
import {BasicStreamableItem} from './BasicStreamableItem';
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
