import { Pipe, PipeTransform } from '@angular/core';
import {Person} from "./shared/models/person.model";

@Pipe({
  name: 'personFilter'
})
export class PersonFilterPipe implements PipeTransform {

  transform(array: Person[], filter: string): Person[] {
    if (filter === '') {
      return array;
    } else {
      return array.filter(function (value, index, array) {
        return value.getFullnameString().toLowerCase().includes(filter.toLowerCase());
      });
    }
  }

}
