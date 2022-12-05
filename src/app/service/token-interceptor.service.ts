/*import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable,Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginServiceService } from '../services/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService  implements HttpInterceptor{

  
  constructor(private inject:Injector) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let loginServiceService=this.inject.get(LoginServiceService);
let token = !loginServiceService.getToken ?req: req.clone({
setHeaders:{
  Authorization: `'bearer' ${loginServiceService.getToken()}`
}
})
    
  return next.handle(token);
  }
  
}
*/