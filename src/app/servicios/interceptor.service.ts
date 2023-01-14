import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor(private autenticacionServicio: AutenticacionService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    var currentUser = this.autenticacionServicio.UsuarioAutenticado;

    console.log('estoy en interceptor');
    console.log(currentUser.id_persona);
    if (currentUser && currentUser.id_persona && currentUser.Token) {
      req = req.clone({
        setHeaders: {
          token: currentUser.Token,
          id_persona: currentUser.id_persona,
        },
      });
    }
    console.log('Interceptor esta corriendo: ' + JSON.stringify(currentUser));
    return next.handle(req);
  }
}
