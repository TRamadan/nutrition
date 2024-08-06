import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'round',
  standalone: true,
})
export class RoundPipe implements PipeTransform {
  transform(value: number, decimalPlaces: number = 1): number {
    if (typeof value !== 'number') {
      return value;
    }
    const factor = Math.pow(10, decimalPlaces);
    return Math.round(value * factor) / factor;
  }
}
