export class User {
    
    userId:number;
    username:string;
    email:string;
    password:string;
    mobile:string;
    address:string;
    firstName:string;
    lastName:string;
    role:string;
    enabled:boolean;
    authorities:string [];
    
    constructor(
     userId:number,
     username:string,
     email:string,
     password:string,
     mobile:string,
     address:string,
     firstName:string,
    lastName:string,
    role:string,
    enabled:boolean,
    authorities:string []
    ){
        this.userId = userId;
        this.username = username;
        this.email = email;
        this.password = password;
        this.mobile = mobile;
        this.address = address;
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        this.enabled = enabled;
        this.authorities = authorities;
    }

}
