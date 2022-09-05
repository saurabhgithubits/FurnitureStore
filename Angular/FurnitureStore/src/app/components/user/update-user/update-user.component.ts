import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/entity/user';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  
  user = new User(0,'','','','','','','','',true,[]);

  constructor(
          private userService:UserService,
          private loginService:LoginService,
          private router:Router,
          private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.getUserById(+this.route.snapshot.params['userId']).subscribe(
      data => {
      this.user = data;
      this.user.password = ''; 
      console.log(this.user)
      })
  }

  update(){
    

    Swal.fire({  
      title: 'Do you want to update the product details ?',  
      showDenyButton: true,  showCancelButton: false,  
      confirmButtonText: `Yes`,  
      denyButtonText: `No`,
    }).then((result) => {  
        if (result.isConfirmed) {    
          this.userService.addUser(this.user).subscribe(
            (data:any) => { 
                console.log(data);
                Swal.fire('Profile Updated!!','User Id: '+data.userId,'success');
                if(this.loginService.getUserRole()=='ADMIN'){
                  this.router.navigate(['admin/profile']);
                }
                else if(this.loginService.getUserRole()=='NORMAL'){
                  this.router.navigate(['user/profile']);
                }
                   
            },
            (error) => {
              console.log(error);
              Swal.fire('Updation Failed','','error');
            }
          );
        } else if (result.isDenied) {    
          Swal.fire('Not Updated','' ,'info' );if(this.loginService.getUserRole()=='ADMIN'){
            this.router.navigate(['admin/profile']);
          }
          else if(this.loginService.getUserRole()=='NORMAL'){
            this.router.navigate(['user/profile']);
          }
       }
    });
  }
}
