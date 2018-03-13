import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from './contact';

@Pipe({
  name: 'transformContactObjectToString'
})
export class TransformContactObjectToStringPipe implements PipeTransform {

  transform(value: Contact, args?: any): string {
    return `${value.name} ${value.surname}`;
  }

}
