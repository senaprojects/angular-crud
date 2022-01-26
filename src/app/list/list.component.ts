import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  id:any;
  choose:any;
  user:any={
    id:0,
    name:'',
    img:'',
    location:''

  };
  constructor(private addservice:UserserviceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
    this.choose=this.id==0?'Add users...':'Edit users...';

   if(this.id!=0){
     this.user=this.addservice.ongetusers(this.id);
  
   }
  }
 onsubmit(form:NgForm){
   let user:any={
   id:form.value.id,
   name:form.value.user,
   img:form.value.image,
   location:form.value.location,



   }
  
this.addservice.onadd(user);
this.router.navigateByUrl('');


 
  }
 
}
