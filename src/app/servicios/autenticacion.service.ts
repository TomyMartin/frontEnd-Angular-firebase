import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  url = 'https://above-tallia-tomymartin.koyeb.app/';
  currentUserSubject: BehaviorSubject<any>;
  constructor(private http: HttpClient) {
    console.log('el servicio de autenticaciones esta corriendo');
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(sessionStorage.getItem('currentUser') || '{}')
    );
  }

  IniciarSesion(credenciales: any): Observable<any> {
    console.log('estoy en iniciar sesion');
    console.log(this.url);
    return this.http.post(this.url + 'login', credenciales).pipe(
      map((data) => {
        sessionStorage.setItem('currentUser', JSON.stringify(data));
        this.currentUserSubject.next(data);
        return data;
      })
    );
  }
  get UsuarioAutenticado() {
    return this.currentUserSubject.value;
  }
}
