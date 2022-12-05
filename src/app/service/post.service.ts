import { Injectable,Injector } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { LoginServiceService } from '../services/login-service.service';

import {Observable, pipe, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ViewProfileComponent } from '../view-profile/view-profile.component';


@Injectable({
  providedIn: 'root'
})
export class PostService {
 apiUrl='http://localhost:3100/api/v1/viewProfile';
 vacUrl='http://localhost:3100/api/v1/viewVacancies/All';
 pssWord='http://localhost:3100/api/v1/updatePassword';
   constructor(private http: HttpClient) { }
   handleError(error:any){
    return throwError(error.message || "server error")
  }
  getToken():string {
    return window.localStorage['jwtToken'];
   }
   saveToken(token: string){
    window.localStorage['jwtToken']=token;
  }
  destroyToken(){
    window.localStorage.removeItem('jwtToken')
  }
  getAllData():Observable<any>
  {
    
   
    let head_obj=new HttpHeaders().set("Authorization",`${this.getToken()}`)
                                  .set('Content-Type', 'application/json')
                                  .set('Accept', 'application/json')
    return this.http.get(this.apiUrl,{headers:head_obj}).pipe(catchError(this.handleError));
   
    
  }
  getVec(){
    return this.http.get(this.vacUrl);
  }
  postPwd():Observable<any>
  {
    
   
    let head_obj=new HttpHeaders().set("Authorization",`${this.getToken()}`)
                                  .set('Content-Type', 'application/json')
                                  .set('Accept', 'application/json')
    return this.http.put(this.pssWord,{headers:head_obj}).pipe(catchError(this.handleError));
   
    
  }
}
