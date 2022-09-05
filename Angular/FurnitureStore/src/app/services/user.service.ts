import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../entity/helper';
import { User } from '../entity/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http:HttpClient
     ) { }

// add User
public addUser(user:User){
  return this.http.post(`${baseUrl}/user/`,user)
}

// user Login
login(loginData: User){
 return this.http.post(`${baseUrl}/user/login`,loginData);
}


//  user Logout
signOut(){
 return this.http.get(`${baseUrl}/user/logout`);
}
// Get User By Username
getUserByName(userName:string){
 return this.http.get<User>(`${baseUrl}/user/getByUserName/{userName}`);
}

// Get User By UserId
getUserById(userId:number){
  return this.http.get<User>(`${baseUrl}/user/getById/${userId}`);
 }

// Update User
public updateUser(user:User){
 return this.http.put(`${baseUrl}/user/update`,user)
}

// Update Admin
public updateAdmin(user:User){
return this.http.put(`${baseUrl}/user/updateAdmin`,user)
}
}
