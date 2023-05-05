import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookserviceService } from '../bookservice.service';
import { v4 as uuidv4 } from 'uuid';
import { Book } from 'books.model';

function generateIsbn(): string {
  const uuid = uuidv4().replace(/-/g, '').substring(0, 12); 
  const digits = [...uuid].map((digit) => parseInt(digit));
  let sum = 0;

  for (let i = 0; i < 12; i++) {
    sum += (i % 2 === 0) ? digits[i] : digits[i] * 3;
  }

  const checkDigit = (10 - (sum % 10)) % 10;
  return `${uuid}-${checkDigit}`;
}



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})




export class HomeComponent implements OnInit {

  addbook:any;
  submitted = false;
  id:any;
  isbn: string = generateIsbn();
  
  constructor( private formbuilder:FormBuilder, private routes:Router , private bookservice:BookserviceService, private url:ActivatedRoute) { 
    this.addbook=this.formbuilder.group(
      {
        Book_Title:['',[Validators.required,Validators.minLength(6)]],
        Author:['',[Validators.required,Validators.maxLength(12)]],
        ISBN:['',Validators.required]
      },
      
    )
  }
  
  ngOnInit(): void {
    
  }
  get f() { return this.addbook.controls; }
  onsubmit(){
    
      this.submitted = true;
      if (this.addbook.valid) {
        alert('Form Submitted succesfully!!!\n Check the values in all_books page.');
        console.log(this.addbook.value);
      
        this.bookservice.addbook(this.addbook.value).subscribe((data:any)=>{
        console.log(data);
        this.routes.navigate(['/all_book'])
        
      });
        
      
    }
   
}

}
