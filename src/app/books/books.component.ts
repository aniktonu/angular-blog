import { Component } from '@angular/core';
import { Book } from '../type/Book';




@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})


export class BooksComponent {


  books: Book[] = [
    {
      title: 'Clean Code',
      author: 'Robert C. Martin',
      src: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
      price: 10
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'David Thomas',
      src: 'https://m.media-amazon.com/images/I/41HXiIojloL._SX396_BO1,204,203,200_.jpg',
      price: 20
    },
    {
      title: 'Code Complete',
      author: 'Steve McConnell',
      src: 'https://m.media-amazon.com/images/I/51IM3Ywr1yL._SX397_BO1,204,203,200_.jpg',
      price: 30
    },
    {
      title: 'Introduction to Algorithms',
      author: 'Thomas H. Cormen',
      src: 'https://m.media-amazon.com/images/I/41SNoh5ZhOL._SX440_BO1,204,203,200_.jpg',
      price: 40
    }





  ];


  // title: string = 'Clean Code';
  // author: string = ' Robert C. Martin ';
  // src: string = 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg';

  // title2: string = 'The Pragmatic Programmer';
  // author2: string = 'David Thomas';
  // src2: string = 'https://m.media-amazon.com/images/I/41HXiIojloL._SX396_BO1,204,203,200_.jpg';

  // isShow: boolean = false;

  // showEvent() {
  //   this.isShow = true;
  // }

  // myName: string = '';

  isShowing: boolean = true;


  addToCard(book: Book) {
    console.log(book);
  }

}
