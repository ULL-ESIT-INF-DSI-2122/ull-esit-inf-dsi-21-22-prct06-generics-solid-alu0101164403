import {genres} from './interfaces';
import {BasicStreamableItem} from './BasicStreamableItem';

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
