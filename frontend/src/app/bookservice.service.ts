import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';
import { Book } from 'books.model';
@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor( private http:HttpClient) { }

  addbook(book:Book){
    return this.http.post('http://localhost:3000/books',book)
  }

  allbook(){
    return this.http.get('http://localhost:3000/books')

  }
  delbook(id:any){
    return this.http.delete('http://localhost:3000/books/'+id)
  }

  singlebook(id:any){
    return this.http.get('http://localhost:3000/books/'+id)
  }

  updatebook(id:any,book:Book){
    return this.http.put('http://localhost:3000/books/'+id,book)
  }
  

}
