import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable, pipe, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ChattingService {

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
  getMessages='http://localhost:3100/api/v1/chats/get_message/';

  getMessage(id:any):Observable<any>
  {


    let head_obj=new HttpHeaders().set("Authorization",`${this.getToken()}`)
                                  .set('Content-Type', 'application/json')
                                  .set('Accept', 'application/json')
    return this.http.get(this.getMessages+`${id}`,{headers:head_obj}).pipe(catchError(this.handleError));


  }
  sendMessages='http://localhost:3100/api/v1/chats/send_messages/';

  sendMessage(id:any,message:any):Observable<any>
  {


    let head_obj=new HttpHeaders().set("Authorization",`${this.getToken()}`)
                                  .set('Content-Type', 'application/json')
                                  .set('Accept', 'application/json')
    return this.http.post(this.sendMessages+`${id}`,message,{headers:head_obj,responseType: 'text'}).pipe(catchError(this.handleError));


  }
}
