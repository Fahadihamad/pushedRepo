import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  user:User=new User();
  id:number

  constructor(private route:ActivatedRoute,private userService:UserService,private router:Router) { }

  ngOnInit(): void {
   this.id= this.route.snapshot.params["id"];
   this.userService.getUserById(this.id).subscribe(data=>{
    this.user=data;
   },
   error=>console.log(error));
   

  }
  onSubmit(){
    this.userService.updateUser(this.id,this.user).subscribe(data=>{
      this.router.navigateByUrl("/list");
    }
    ,error=>console.log(error));

  }
}
