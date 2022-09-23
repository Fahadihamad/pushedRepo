import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  user:User[];

  constructor( private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.getAllUser();
  
  }
    private getAllUser() {
      this.userService.getUser().subscribe(data=>{
        this.user=data;
      });
      
    
  }
  updateUser(id:number){
  this.router.navigate(["update",id]);
  }
  deleteUser(id:number){
   this.userService.deleteUsers(id).subscribe(data=>{
    console.log(data);
    this.getAllUser();
   });
  }
  userDetails(id:number){
    this.router.navigate(["userDetails",id]);
  }
}
