import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class GuardGuard implements CanActivate {
  constructor(
    private autenticacionServico: AutenticacionService,
    private rutas: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let currentUser = this.autenticacionServico.UsuarioAutenticado;
    if (currentUser && currentUser.Token) {
      return true;
    } else {
      this.rutas.navigate(['/iniciar-sesion']);
      return false;
    }
  }
}
