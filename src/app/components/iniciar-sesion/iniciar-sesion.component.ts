import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css'],
})
export class IniciarSesionComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private autenticacionService: AutenticacionService,
    private ruta: Router
  ) {
    this.form = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  ngOnInit(): void {}
  get Email() {
    return this.form.get('email');
  }
  get Password() {
    return this.form.get('password');
  }

  onEnviar(event: Event) {
    event.preventDefault;
    console.log('estoy en boton enviar');
    console.log(this.form.value);
    this.autenticacionService
      .IniciarSesion(this.form.value)
      .subscribe((data) => {
        console.log('DATA:' + JSON.stringify(data));
        this.ruta.navigate(['inicio']);
      });
  }
}
