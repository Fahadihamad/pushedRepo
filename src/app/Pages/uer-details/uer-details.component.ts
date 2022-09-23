import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-uer-details',
  templateUrl: './uer-details.component.html',
  styleUrls: ['./uer-details.component.scss']
})
export class UerDetailsComponent implements OnInit {
  id:number;
  user:User=new User();

  constructor(private rout:ActivatedRoute,private userService:UserService) { }

  ngOnInit(): void {
    this.id=this.rout.snapshot.params["id"];
    this.userService.getUserById(this.id).subscribe(data=>{
      this.user=data;
    },
    error=>console.log(error));
  }

}
