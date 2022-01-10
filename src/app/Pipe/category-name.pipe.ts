import { Pipe, PipeTransform } from '@angular/core';
import { BlogService } from '../Services/blog.service';

@Pipe({
  name: 'categoryName'
})
export class CategoryNamePipe implements PipeTransform {
  constructor(private blogService: BlogService) { }
  transform(id: any): any {
    return this.blogService.fetchCategories().subscribe(categories => {
      let category : object = categories.find((category: any) => category.id === id);
      console.log(typeof category.name)
      console.log(category.name)
      return String(category.name);
    });
  }

}
