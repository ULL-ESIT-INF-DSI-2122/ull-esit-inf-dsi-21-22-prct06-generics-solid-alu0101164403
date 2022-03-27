import {genres, genresDocu, ItemStremeable} from './interfaces';

/**
 * clase abstracta que contiene los datos basicos de lso elementos
 * streamables
 */
export abstract class BasicStreamableItem implements ItemStremeable {
  constructor(readonly name: string, readonly yearPublication: number,
    readonly genre: (genres|genresDocu)[], readonly averageScore: number,
    readonly recommended: boolean, readonly description: string) {
  }
  abstract print(): string;
}
