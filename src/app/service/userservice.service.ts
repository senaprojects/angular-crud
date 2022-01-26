import { Injectable } from '@angular/core';


import { user } from '../model.ts/models';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  name:any;
  users:user[]=[
  {
    id: 10,
    name: 'Amygdala homes',
    img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb1.2.1&w=1000&q=80',
    location: 'Chennai'
    },
    {
    id: 11,
    name: 'Fairbanks Ltd',
    img: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb1.2.1&w=1000&q=80',
    location: 'Pondicherry'
    },
    {
    id: 12,
    name: 'Dale homes',
    img: 'https://i.pinimg.com/736x/2f/82/39/2f823993ba069d0aa966144e6f20d459.jpg',
    location: 'Trichy'
    },
    {
    id: 13,
    name: 'Triptico Properties',
    img: 'https://media.gettyimages.com/photos/idyllic-home-with-covered-porchpictureid479767332?s=612x612',
    location: 'Madurai'
    }

    ];


  constructor() { }

  onGet(){
   return this.users;

  }
 
  onadd(user:any){
    this.users.push(user);
  }
  ongetusers(id:any){
    return this.users.find(x=>x.id==id);
    
    }
    ondelete(id:any){
      let user:any=this.users.find(x=>x.id==id);
      let index=this.users.indexOf(user,0);
      this.users.splice(index,1);
    }
   
  search(){
    this.users=this.users.filter(res=>{
      return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
    })
  }
}
