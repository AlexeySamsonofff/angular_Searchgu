import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addNewLine'
})
export class AddNewLinePipe implements PipeTransform {

  transform(value: string): any {
    return null;
  }

}
