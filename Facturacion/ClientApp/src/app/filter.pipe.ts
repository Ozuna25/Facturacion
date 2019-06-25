import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toString().toLowerCase();
    return items.filter(it => {
      return it.nombres.toString().toLowerCase().includes(searchText) || it.apellidos.toString().toLowerCase().includes(searchText)
     
    });

  }


}
