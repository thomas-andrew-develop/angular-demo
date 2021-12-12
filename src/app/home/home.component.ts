import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categoriesList = [
    {
      id: 1,
      name: 'Commercial'
    },
    {
      id: 2,
      name: 'Design'
    },
    {
      id: 3,
      name: 'Nature'
    },
    {
      id: 4,
      name: 'People'
    },
    {
      id: 5,
      name: 'Photography'
    }
  ];

  blogs : any = [
    {
      id: 1,
      image: 'https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/11/2016/11/1.jpg',
      title: 'Trip that you’ll never ever forget',
      date_post: 'November 23, 2016',
      author: 'shufflehound',
      excerpt: 'Quisque dictum eros nisl, a maximus massa accumsan non. Aliquam erat volutpat. Quisque at finibus dui. Praesent cursus, dui sed tempus mollis, turpis ex porta lacus, ut egestas justo nibh in nisi. Donec arcu enim, congue in nunc ut, cursus sollicitudin urna. Pellentesque magna purus',
      description: 'uisque dictum eros nisl, a maximus massa accumsan non. Aliquam erat volutpat. Quisque at finibus dui. Praesent cursus, dui sed tempus mollis, turpis ex porta lacus, ut egestas justo nibh in nisi. Donec arcu enim, congue in nunc ut, cursus sollicitudin urna. Pellentesque magna purus, accumsan varius mi et, gravida consectetur purus. Etiam mattis molestie aliquet. Aenean diam enim, faucibus et sodales id, iaculis vitae lectus. Duis sed consequat quam. Ut tincidunt eleifend pretium. Suspendisse nisl turpis, dapibus ac vestibulum nec, venenatis eu arcu. Etiam et fermentum ante. Curabitur eget diam sem. Fusce pulvinar turpis vel arcu pharetra bibendum. Integer leo libero, convallis nec nisi eu, aliquam tempus leo.',
      category: [1,2],
    },
    {
      id: 2,
      image: 'https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/11/2016/11/3.jpg',
      title: 'Movielike photo shoot – B&W',
      date_post: 'November 23, 2016',
      author: 'shufflehound',
      excerpt: 'Ut et lacus ex. Aliquam dignissim mauris sit amet purus convallis, vitae vehicula lectus tincidunt. Nulla placerat imperdiet condimentum. Quisque efficitur ipsum eu libero eleifend lobortis. Mauris eros mauris, auctor quis risus ac, facilisis vehicula ligula. Pellentesque habitant morbi tristique senectus et netus et',
      description: 'Ut et lacus ex. Aliquam dignissim mauris sit amet purus convallis, vitae vehicula lectus tincidunt. Nulla placerat imperdiet condimentum. Quisque efficitur ipsum eu libero eleifend lobortis. Mauris eros mauris, auctor quis risus ac, facilisis vehicula ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam quis gravida nulla. Aliquam erat volutpat. Mauris eu sem sit amet felis lobortis luctus ut vitae erat.</p> <p>Morbi eu ante mollis, elementum tortor in, hendrerit libero. Maecenas feugiat rhoncus magna, at consequat libero dictum eget. Donec gravida odio erat, vel ullamcorper lacus faucibus vitae. Mauris hendrerit at justo ac dapibus. Nulla venenatis malesuada nisi eget aliquam. Ut dignissim elit sed ipsum malesuada, et vestibulum sapien consectetur. Etiam facilisis risus sit amet lacus posuere lacinia.',
      category: [1,2],
    },
    {
      id: 3,
      image: 'https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/11/2016/11/4.jpg',
      title: 'Trip that you’ll never ever forget',
      date_post: 'November 23, 2016',
      author: 'shufflehound',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in eros scelerisque, scelerisque nisl sit amet, molestie erat. In a elementum ex. Curabitur id tincidunt justo. Nam dictum lacinia nulla, et tincidunt dolor commodo ultricies. Praesent laoreet diam in faucibus iaculis. Mauris tincidunt dui',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in eros scelerisque, scelerisque nisl sit amet, molestie erat. In a elementum ex. Curabitur id tincidunt justo. Nam dictum lacinia nulla, et tincidunt dolor commodo ultricies. Praesent laoreet diam in faucibus iaculis. Mauris tincidunt dui tempus velit euismod, et porta nibh gravida. Integer luctus leo nulla, nec viverra quam volutpat laoreet. Phasellus sed nisi non leo convallis gravida et et felis. Pellentesque quis metus ac nulla ornare malesuada pellentesque et risus.</p> <p>In sed consectetur mi, a efficitur dui. Duis ac lacus sem. Aenean eget justo malesuada, fringilla turpis eu, placerat erat. Nullam at leo ac massa mattis pharetra. Praesent eget risus auctor, feugiat purus placerat, iaculis leo. Nam ac molestie nunc, et convallis urna. Ut facilisis suscipit eros. Nulla egestas semper purus, sed tincidunt libero cursus quis. Donec vel dui vel lorem malesuada posuere non id nisi. Fusce sodales ornare lectus, nec efficitur est pellentesque eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      category: [1,2],
    },
    {
      id: 4,
      image: 'https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/11/2016/11/5.jpg',
      title: 'Trip that you’ll never ever forget',
      date_post: 'November 23, 2016',
      author: 'shufflehound',
      excerpt: 'Morbi eu ante mollis, elementum tortor in, hendrerit libero. Maecenas feugiat rhoncus magna, at consequat libero dictum eget. Donec gravida odio erat, vel ullamcorper lacus faucibus vitae. Mauris hendrerit at justo ac dapibus. Nulla venenatis malesuada nisi eget aliquam. Ut dignissim elit sed ipsum',
      description: 'Morbi eu ante mollis, elementum tortor in, hendrerit libero. Maecenas feugiat rhoncus magna, at consequat libero dictum eget. Donec gravida odio erat, vel ullamcorper lacus faucibus vitae. Mauris hendrerit at justo ac dapibus. Nulla venenatis malesuada nisi eget aliquam. Ut dignissim elit sed ipsum malesuada, et vestibulum sapien consectetur. Etiam facilisis risus sit amet lacus posuere lacinia.</p> <p>Quisque dictum eros nisl, a maximus massa accumsan non. Aliquam erat volutpat. Quisque at finibus dui. Praesent cursus, dui sed tempus mollis, turpis ex porta lacus, ut egestas justo nibh in nisi. Donec arcu enim, congue in nunc ut, cursus sollicitudin urna. Pellentesque magna purus, accumsan varius mi et, gravida consectetur purus. Etiam mattis molestie aliquet. Aenean diam enim, faucibus et sodales id, iaculis vitae lectus. Duis sed consequat quam. Ut tincidunt eleifend pretium. Suspendisse nisl turpis, dapibus ac vestibulum nec, venenatis eu arcu. Etiam et fermentum ante. Curabitur eget diam sem. Fusce pulvinar turpis vel arcu pharetra bibendum. Integer leo libero, convallis nec nisi eu, aliquam tempus leo.',
      category: [1,2],
    },
    {
      id: 5,
      image: 'https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/11/2016/11/7.jpg',
      title: 'Trip that you’ll never ever forget',
      date_post: 'November 23, 2016',
      author: 'shufflehound',
      excerpt: 'In sed consectetur mi, a efficitur dui. Duis ac lacus sem. Aenean eget justo malesuada, fringilla turpis eu, placerat erat. Nullam at leo ac massa mattis pharetra. Praesent eget risus auctor, feugiat purus placerat, iaculis leo. Nam ac molestie nunc, et convallis urna.',
      description: 'In sed consectetur mi, a efficitur dui. Duis ac lacus sem. Aenean eget justo malesuada, fringilla turpis eu, placerat erat. Nullam at leo ac massa mattis pharetra. Praesent eget risus auctor, feugiat purus placerat, iaculis leo. Nam ac molestie nunc, et convallis urna. Ut facilisis suscipit eros. Nulla egestas semper purus, sed tincidunt libero cursus quis. Donec vel dui vel lorem malesuada posuere non id nisi. Fusce sodales ornare lectus, nec efficitur est pellentesque eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> <p>Ut et lacus ex. Aliquam dignissim mauris sit amet purus convallis, vitae vehicula lectus tincidunt. Nulla placerat imperdiet condimentum. Quisque efficitur ipsum eu libero eleifend lobortis. Mauris eros mauris, auctor quis risus ac, facilisis vehicula ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam quis gravida nulla. Aliquam erat volutpat. Mauris eu sem sit amet felis lobortis luctus ut vitae erat.',
      category: [1,2],
    },
    {
      id: 6,
      image: 'https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/11/2016/11/11.jpg',
      title: 'First steps in the right direction',
      date_post: 'November 23, 2016',
      author: 'shufflehound',
      excerpt: 'Ut et lacus ex. Aliquam dignissim mauris sit amet purus convallis, vitae vehicula lectus tincidunt. Nulla placerat imperdiet condimentum. Quisque efficitur ipsum eu libero eleifend lobortis. Mauris eros mauris, auctor quis risus ac, facilisis vehicula ligula. Pellentesque habitant morbi tristique senectus et netus et',
      description: 'Ut et lacus ex. Aliquam dignissim mauris sit amet purus convallis, vitae vehicula lectus tincidunt. Nulla placerat imperdiet condimentum. Quisque efficitur ipsum eu libero eleifend lobortis. Mauris eros mauris, auctor quis risus ac, facilisis vehicula ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam quis gravida nulla. Aliquam erat volutpat. Mauris eu sem sit amet felis lobortis luctus ut vitae erat.</p> <p>Morbi eu ante mollis, elementum tortor in, hendrerit libero. Maecenas feugiat rhoncus magna, at consequat libero dictum eget. Donec gravida odio erat, vel ullamcorper lacus faucibus vitae. Mauris hendrerit at justo ac dapibus. Nulla venenatis malesuada nisi eget aliquam. Ut dignissim elit sed ipsum malesuada, et vestibulum sapien consectetur. Etiam facilisis risus sit amet lacus posuere lacinia.',
      category: [1,2],
    },
  ];

  latestBlogs : any = [
    {
      id: 1,
      image: 'https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/11/2016/11/1.jpg',
      title: 'Trip that you’ll never ever forget',
      date_post: 'November 23, 2016',
      author: 'shufflehound',
      excerpt: 'Quisque dictum eros nisl, a maximus massa accumsan non. Aliquam erat volutpat. Quisque at finibus dui. Praesent cursus, dui sed tempus mollis, turpis ex porta lacus, ut egestas justo nibh in nisi. Donec arcu enim, congue in nunc ut, cursus sollicitudin urna. Pellentesque magna purus',
      description: 'uisque dictum eros nisl, a maximus massa accumsan non. Aliquam erat volutpat. Quisque at finibus dui. Praesent cursus, dui sed tempus mollis, turpis ex porta lacus, ut egestas justo nibh in nisi. Donec arcu enim, congue in nunc ut, cursus sollicitudin urna. Pellentesque magna purus, accumsan varius mi et, gravida consectetur purus. Etiam mattis molestie aliquet. Aenean diam enim, faucibus et sodales id, iaculis vitae lectus. Duis sed consequat quam. Ut tincidunt eleifend pretium. Suspendisse nisl turpis, dapibus ac vestibulum nec, venenatis eu arcu. Etiam et fermentum ante. Curabitur eget diam sem. Fusce pulvinar turpis vel arcu pharetra bibendum. Integer leo libero, convallis nec nisi eu, aliquam tempus leo.',
      category: [1,2],
    },
    {
      id: 2,
      image: 'https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/11/2016/11/3.jpg',
      title: 'Movielike photo shoot – B&W',
      date_post: 'November 23, 2016',
      author: 'shufflehound',
      excerpt: 'Ut et lacus ex. Aliquam dignissim mauris sit amet purus convallis, vitae vehicula lectus tincidunt. Nulla placerat imperdiet condimentum. Quisque efficitur ipsum eu libero eleifend lobortis. Mauris eros mauris, auctor quis risus ac, facilisis vehicula ligula. Pellentesque habitant morbi tristique senectus et netus et',
      description: 'Ut et lacus ex. Aliquam dignissim mauris sit amet purus convallis, vitae vehicula lectus tincidunt. Nulla placerat imperdiet condimentum. Quisque efficitur ipsum eu libero eleifend lobortis. Mauris eros mauris, auctor quis risus ac, facilisis vehicula ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam quis gravida nulla. Aliquam erat volutpat. Mauris eu sem sit amet felis lobortis luctus ut vitae erat.</p> <p>Morbi eu ante mollis, elementum tortor in, hendrerit libero. Maecenas feugiat rhoncus magna, at consequat libero dictum eget. Donec gravida odio erat, vel ullamcorper lacus faucibus vitae. Mauris hendrerit at justo ac dapibus. Nulla venenatis malesuada nisi eget aliquam. Ut dignissim elit sed ipsum malesuada, et vestibulum sapien consectetur. Etiam facilisis risus sit amet lacus posuere lacinia.',
      category: [1,2],
    },
    {
      id: 3,
      image: 'https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/11/2016/11/4.jpg',
      title: 'Trip that you’ll never ever forget',
      date_post: 'November 23, 2016',
      author: 'shufflehound',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in eros scelerisque, scelerisque nisl sit amet, molestie erat. In a elementum ex. Curabitur id tincidunt justo. Nam dictum lacinia nulla, et tincidunt dolor commodo ultricies. Praesent laoreet diam in faucibus iaculis. Mauris tincidunt dui',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in eros scelerisque, scelerisque nisl sit amet, molestie erat. In a elementum ex. Curabitur id tincidunt justo. Nam dictum lacinia nulla, et tincidunt dolor commodo ultricies. Praesent laoreet diam in faucibus iaculis. Mauris tincidunt dui tempus velit euismod, et porta nibh gravida. Integer luctus leo nulla, nec viverra quam volutpat laoreet. Phasellus sed nisi non leo convallis gravida et et felis. Pellentesque quis metus ac nulla ornare malesuada pellentesque et risus.</p> <p>In sed consectetur mi, a efficitur dui. Duis ac lacus sem. Aenean eget justo malesuada, fringilla turpis eu, placerat erat. Nullam at leo ac massa mattis pharetra. Praesent eget risus auctor, feugiat purus placerat, iaculis leo. Nam ac molestie nunc, et convallis urna. Ut facilisis suscipit eros. Nulla egestas semper purus, sed tincidunt libero cursus quis. Donec vel dui vel lorem malesuada posuere non id nisi. Fusce sodales ornare lectus, nec efficitur est pellentesque eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      category: [1,2],
    }
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
