import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name: any;
  constructor(private userservice:UserserviceService,private route:ActivatedRoute,private router:Router) { }
users:any;

id:any;
choose:any;
user:any={
  id:0,
  name:'',
  img:'',
  location:''

};
  ngOnInit(): void {
  this.users =this.userservice.onGet();
  }
ondelete(id:any){
  this.userservice.ondelete(id);

  

}

search(){
  this.users=this.users.filter((res: { name: string; })=>{
    return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
}
  )}
}

