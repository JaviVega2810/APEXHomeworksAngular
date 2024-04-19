import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipeCapitalize'
})
export class CustomPipeCapitalizePipe implements PipeTransform {

  transform(value: string): string {

    return value.charAt(0).toUpperCase() + value.slice(1);

  }
}
