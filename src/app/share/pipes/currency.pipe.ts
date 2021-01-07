import { Pipe, PipeTransform } from '@angular/core';
import getSymbolFromCurrency from 'currency-symbol-map';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: string): string {
    return getSymbolFromCurrency(value) || '$';
  }

}
