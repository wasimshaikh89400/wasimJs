import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'offer',
})
export class OfferPipe implements PipeTransform {
  transform(value: number) {
    return value / 2;
  }
}
