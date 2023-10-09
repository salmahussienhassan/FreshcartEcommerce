import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordsearch'
})
export class WordsearchPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
