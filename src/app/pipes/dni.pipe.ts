import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dni'
})
export class DniPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return  value;
  }

}
