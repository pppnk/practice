import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: any, propName: string): any {
    if(value.length === 0 || filterString.trim() === ''){
      return value;
    }
    return value.slice().filter(item => item[propName] === filterString);
  }

}
