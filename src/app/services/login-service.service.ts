import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, pipe, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
private loginUrl = 'http://localhost:3100/api/v1/login';
private regUrl = 'http://localhost:3100/api/v1/register';


  getToken():string{
   return window.localStorage['jwtToken'];
  }

saveToken(token: string){
  window.localStorage['jwtToken']=token;
}


  constructor(private http:HttpClient) { 
    const jwtToken=this.getToken();
  }
loginUser(user: any):Observable <any>{
  return this.http.post(this.loginUrl,user)
  .pipe(catchError(this.handleError));
}
regUser(data:any){
  return this.http.post(this.regUrl,data)
  .pipe(catchError(this.handleError));
}  

handleError(error:any){
    return throwError(error.message || "server error")
  }


}

