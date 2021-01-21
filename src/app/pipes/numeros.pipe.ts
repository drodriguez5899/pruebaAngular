import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numeros'
})
export class NumerosPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if(args[0]== "cuadrado"){
      return value*value
    }
    else if (args[0]=="raiz"){
      return Math.sqrt(value)
    }
    else if ((args[0]=="aletras")&& (value<10)){
      switch(value){
        case 1:
          return "uno"
          break;
        case 2:
          return "dos"
          break;
        case 3:
          return "tres"
          break;
        case 4:
          return "cuatro"
          break;
        case 5:
          return "cinco"
          break;
        case 6:
          return "seis"
          break;
        case 7:
          return "siete"
          break;
        case 8:
          return "ocho"
          break;
        case 9:
          return "nueve"
          break;         
      }            
    }
    else return null

  }

}
