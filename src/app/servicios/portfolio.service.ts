import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  url: string = 'https://above-tallia-tomymartin.koyeb.app';
  constructor(private http: HttpClient) {}
  obtenerDatos(): Observable<any> {
    return this.http.get<any>(this.url + '/datos');
  }

  enviarMensaje(mensaje: any): Observable<any> {
    console.log('Estoy en enviar mensaje');

    return this.http.post(this.url + '/enviarCorreo', mensaje);
  }
}
