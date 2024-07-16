import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(customers:any, term:string): any {
    return customers.filter((customer:any)=>customer.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()));
  }

}
