import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable, pipe, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
//import { ChatsComponent } from './chats/chats.component';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  constructor(private http: HttpClient ) { }

  handleError(error:any){
    return throwError(error.message || "server error")
  }
  getToken():string {
    return window.localStorage['jwtToken'];
   }
   saveToken(token: string){
    window.localStorage['jwtToken']=token;
  }


  getuser='http://localhost:3100/api/v1/chats/get_users';
  getUsers():Observable<any>
  {


    let head_obj=new HttpHeaders().set("Authorization",`${this.getToken()}`)
                                  .set('Content-Type', 'application/json')
                                  .set('Accept', 'application/json')
    return this.http.get(this.getuser,{headers:head_obj}).pipe(catchError(this.handleError));


  }

  getMessages='http://localhost:3100/api/v1/chats';

  getMessage():Observable<any>
  {


    let head_obj=new HttpHeaders().set("Authorization",`${this.getToken()}`)
                                  .set('Content-Type', 'application/json')
                                  .set('Accept', 'application/json')
    return this.http.get(this.getMessages,{headers:head_obj}).pipe(catchError(this.handleError));


  }
  sendMessages='http://localhost:3100/api/v1/chats/send_messages';

  sendMessage():Observable<any>
  {


    let head_obj=new HttpHeaders().set("Authorization",`${this.getToken()}`)
                                  .set('Content-Type', 'application/json')
                                  .set('Accept', 'application/json')
    return this.http.get(this.sendMessages,{headers:head_obj}).pipe(catchError(this.handleError));


  }
}
