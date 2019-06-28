import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginate'
})

export class Pagination implements PipeTransform {
  transform(items: any[], page_size: number , page_number: number): any[] {
    if (!items.length) return []
    if (page_size === 0) {
      return items
    }
    page_size = page_size || 5
    page_number = page_number || 1
    --page_number
    return items.slice(page_number * page_size, (page_number + 1) * page_size);
  }
}
