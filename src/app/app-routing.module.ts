import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';



const routes: Routes = [
  {path:'',component:HeaderComponent},
  {path:'list/add/:id',component:ListComponent},
  {path:'list/edit/:id',component:ListComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
