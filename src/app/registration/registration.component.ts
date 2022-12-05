import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
import {Observable, pipe, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoginServiceService } from '../services/login-service.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
//export class RegisterComponent implements OnInit {

  //constructor() { }

  //ngOnInit(): void {
  //}

//}
export class RegistrationComponent {
   title=" Register Account";

   constructor(private loginService:LoginServiceService,private route:Router){
     
   }

  onUsers(data:any){
     
    console.warn(data);
    this.loginService.regUser(data)
    .subscribe((result)=>{
      console.warn(result)
      this.route.navigate(['login']);
      
    },
    (error)=>{
      console.log(error)
    }
    
    );

  }

  }