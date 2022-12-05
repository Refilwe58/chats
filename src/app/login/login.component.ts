import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../services/login-service.service';
import {FormGroup, FormControl,Validators} from '@angular/forms';
import { Token } from '@angular/compiler';
import {Observable, pipe, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;
  responsedata:any;

constructor(private loginService:LoginServiceService, private route:Router){
  localStorage.clear();
  
}
  ngOnInit(): void {
    this.initForm();
   }

  initForm(){
    this.formGroup=new FormGroup({
email: new FormControl('',[Validators.required]),
password: new FormControl('',[Validators.required])
    })
  }
  
  loginProcess(){
   
    if(this.formGroup.valid){
      this.loginService.loginUser(this.formGroup.value).subscribe(result=>{
        
          console.log(result);
        this.loginService.saveToken(result.token);
         //localStorage.setItem('token',result.toString());
          this.route.navigate(['']);
      },
      (error)=>{
        console.log(error)
      }
        
      )
    }
    }

  }

