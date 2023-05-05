import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../bookservice.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'books.model';

@Component({
  selector: 'app-book-by-id',
  templateUrl: './book-by-id.component.html',
  styleUrls: ['./book-by-id.component.css']
})
export class BookByIdComponent implements OnInit {
  book: any;
  id:any

  constructor(private bookservice:BookserviceService, private url:ActivatedRoute) { }


  ngOnInit(): void {
  }
  
  searchBook(bookId:any){
    this.bookservice.singlebook(bookId).subscribe((data) => {
      this.book = data;
      console.log(data);
    });
  }
  }

