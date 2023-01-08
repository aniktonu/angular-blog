import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { CountComponent } from './count/count.component';
import { BookComponent } from './book/book.component';




@NgModule(
    {
        declarations: [AppComponent, BooksComponent, CountComponent, BookComponent],
        imports: [BrowserModule, FormsModule],
        bootstrap: [AppComponent]
    })

export class AppModule { }