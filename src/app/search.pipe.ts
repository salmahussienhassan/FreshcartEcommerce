import { Product } from './product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(product: Product[], searchWord: string): Product[] {
    
   return product.filter((product)=>{
    return  product.title.toLowerCase().includes(searchWord.toLowerCase())
    })
    
  }

}
