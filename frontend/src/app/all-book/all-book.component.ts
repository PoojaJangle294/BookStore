import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../bookservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-book',
  templateUrl: './all-book.component.html',
  styleUrls: ['./all-book.component.css']
})
export class AllBookComponent implements OnInit {
  bookdata:any;

  constructor( private bookservice:BookserviceService, private routes:Router) { }

  ngOnInit(): void {
    this.loadbookdata();
  }

  loadbookdata(){
    this.bookservice.allbook().subscribe((data:any)=>{
      // console.log(data);
      this.bookdata=data;

    })
  }

  deletebook(datas:any){
    if(confirm('Are you sure to delete this book data')==true){
    this.bookservice.delbook(datas._id).subscribe(data=>{
      console.log(data);
     this.bookdata=this.bookdata.filter((u:any)=>u!==datas)
    })
  } 
}

}
