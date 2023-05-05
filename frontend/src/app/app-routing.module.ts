import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookByIdComponent } from './book-by-id/book-by-id.component';
import { AllBookComponent } from './all-book/all-book.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';

const routes: Routes = [
  {
  path:'',component:HomeComponent
  },
  {
    path:'book_by_id',component:BookByIdComponent
  },
  {
    path:"all_book",component:AllBookComponent
  },
  {
    path:"editbook/:id",component:UpdatebookComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
