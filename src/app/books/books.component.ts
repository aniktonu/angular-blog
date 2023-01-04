import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  title: string = 'ব্যথার শেকড় ';
  author: string = '  ফারজানা কবির ঈশিতা ';
  source: string = 'https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/Bethar_Shekor-Farjana_Kobir_Ishita-2d779-225242.jpg';

  title2: string = 'স্বপ্ন দেখুন সফলতা আসবেই';
  author2: string = '  সাহেদ বিপ্লব ';
  source2: string = 'https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/95ae4c8bb_210754.jpg';

  isShow: boolean = false;

  handleClick() {
    this.isShow = !this.isShow;
  }

}
