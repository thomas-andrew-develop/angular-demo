import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slugify'
})
export class SlugifyPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  transform(input: string): string {
    return input.toString().toLowerCase()
      .replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a')
      .replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e')
      .replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i')
      .replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o')
      .replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u')
      .replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y')
      .replace(/đ/gi, 'd')
      .replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '')
      .replace(/ /gi, "-")
      .replace(/\-\-\-\-\-/gi, '-')
      .replace(/\-\-\-\-/gi, '-')
      .replace(/\-\-\-/gi, '-')
      .replace(/\-\-/gi, '-')

      // .replace(/[^a-z0-9 -]/g, '')
      // .replace(/\s+/g, '-')           // Replace spaces with -
      // .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      // .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      // .replace(/^-+/, '')             // Trim - from start of text
      // .replace(/-+$/, '');            // Trim - from end of text
  }

}
