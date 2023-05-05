import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {

  addbook:any;
  submitted = false;
  id:any;

  constructor( private formbuilder:FormBuilder, private routes:Router , private bookservice:BookserviceService, private url:ActivatedRoute) { 
    this.addbook=this.formbuilder.group(
      {
        Book_Title:['',[Validators.required,Validators.minLength(6)]],
        Author:['',[Validators.required,Validators.maxLength(12)]],
        ISBN:['',Validators.required]
      }
      
    )
  }

  ngOnInit(): void {
    this.id=this.url.snapshot.params['id'];
    console.log(this.id);
    this.bookservice.singlebook(this.id).subscribe(data=>{
      this.addbook.patchValue(data);
    })
  }
  get f() { return this.addbook.controls; }
  onsubmit(){
    this.submitted = true;this.submitted = true;
    if (this.addbook.valid){
      alert('succesfully Updation!!!\n Check the values in all_books page.');
      this.bookservice.updatebook(this.id,this.addbook.value).subscribe((data:any)=>{
        console.log(data);
        this.routes.navigate(['/all_book'])
  
      })
    }

    }

}


