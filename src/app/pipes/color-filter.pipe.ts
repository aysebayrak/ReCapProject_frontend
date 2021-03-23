import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../models/color';

@Pipe({
  name: 'colorFilter'
})
export class ColorFilterPipe implements PipeTransform {

  transform(value: Color[], filterText:string): Color[] {
    filterText = filterText ? filterText.toLocaleLowerCase()
    : ""
    return filterText 
    ? value.filter((co: Color) => co.colorName.toLocaleLowerCase().indexOf(filterText) !== -1)
    :value
  }

}
