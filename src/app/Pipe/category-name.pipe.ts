import { Pipe, PipeTransform } from '@angular/core';
import { BlogService } from '../Services/blog.service';

@Pipe({
  name: 'categoryName'
})
export class CategoryNamePipe implements PipeTransform {
  constructor(private blogService: BlogService) { }
  transform(id: any): any {
    this.blogService.fetchCategories().subscribe(categories => {
      let category : any = categories.find((category: any) => category.id === id);
      return category.name;
    });
  }

}
