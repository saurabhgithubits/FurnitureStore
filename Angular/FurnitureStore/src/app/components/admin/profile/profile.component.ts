import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/entity/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user = new User(0,'','','','','','','','',true,[]);
  constructor(private login: LoginService,
              private router: Router
    ) {}

  
  ngOnInit(): void {
    this.user = this.login.getUser();
    this.login.getCurrentUser().subscribe(
      (user: any) => {
        this.user = user;
      },
      (error) => {
        alert('error');
      }
    );
  }

  editUser(user:User){
    this.router.navigate(['admin/updateProfile/',this.user.userId])
  }

}
