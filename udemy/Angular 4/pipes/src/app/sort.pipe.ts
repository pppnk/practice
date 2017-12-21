import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any): any {
    return value.sort((a, b) => a === b? 0: (a > b? 1: -1));
  }

}
