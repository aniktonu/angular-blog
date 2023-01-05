import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  title: string = 'Clean Code';
  author: string = ' Robert C. Martin ';
  src: string = 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg';

  title2: string = 'The Pragmatic Programmer';
  author2: string = 'David Thomas';
  src2: string = 'https://m.media-amazon.com/images/I/41HXiIojloL._SX396_BO1,204,203,200_.jpg';

  isShow: boolean = false;

  showEvent() {
    this.isShow = true;
  }

  myName: string = '';
}


