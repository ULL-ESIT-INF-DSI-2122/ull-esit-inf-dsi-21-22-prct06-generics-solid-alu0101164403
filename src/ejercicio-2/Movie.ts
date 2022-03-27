import {genres} from './interfaces';
import {BasicStreamableItem} from './BasicStreamableItem';

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
