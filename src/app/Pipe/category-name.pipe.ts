import { Pipe, PipeTransform } from '@angular/core';
import { BlogService } from '../Services/blog.service';

@Pipe({
  name: 'categoryName'
})
export class CategoryNamePipe implements PipeTransform {
  transform(id: any , categories: any[]) {
      let category : any = categories.find((category: any) => category.id === id);
      let result = category.name as string
      console.log(typeof result)
      console.log(result)
      return result;
  }

}
