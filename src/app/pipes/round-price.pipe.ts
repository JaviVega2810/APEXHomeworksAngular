import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundPrice'
})
export class RoundPricePipe implements PipeTransform {

  transform(value: number | string, ...args: unknown[]): number {
    let finalValue = Number(value);
    let decimal = finalValue - Math.floor(finalValue);
    console.log(decimal);
    if(decimal <= 0.4999){
      return Math.floor(finalValue) + 0.5;
    }
    else if(decimal >= 0.5001){
      return Math.floor(finalValue) + 1;
    }
    return finalValue;
  }

}
