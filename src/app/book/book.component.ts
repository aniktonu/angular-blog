import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../type/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  @Input() book: Book = {} as Book;
  @Output() addBook = new EventEmitter<Book>();


  addToCart() {
    this.addBook.emit(this.book);

  }

}

