import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { GeneralComponent } from './components/general/general.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { GuardGuard } from './servicios/guard.guard';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent, canActivate: [GuardGuard] },
  { path: 'contacto', component: ContactoComponent, canActivate: [GuardGuard] },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    canActivate: [GuardGuard],
  },
  { path: 'sobre-mi', component: SobreMiComponent, canActivate: [GuardGuard] },
  { path: 'general', component: GeneralComponent, canActivate: [GuardGuard] },
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: '**', redirectTo: '/inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
