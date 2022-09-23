import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  user:User=new User();

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.userService.addUser(this.user).subscribe(data=>{
      this.onGoToList();
    },
    error=>console.log(error));
  }
  onGoToList(){
    this.router.navigateByUrl("/list");
  }

}
