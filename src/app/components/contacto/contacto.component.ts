import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent implements OnInit {
  miPortfolio: any;
  form: FormGroup;
  mostrarMsj: boolean = false;
  constructor(
    private datosPortfolio: PortfolioService,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.form = formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.maxLength(200)]],
    });
  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data) => {
      this.miPortfolio = data;
    });
  }

  get Email() {
    return this.form.get('email');
  }
  get Mensaje() {
    return this.form.get('mensaje');
  }
  get Nombre() {
    return this.form.get('nombre');
  }
  onBtEnviar(event: Event) {
    event.preventDefault;
    console.log('Valores del form: ' + this.form.get('email')?.value);

    var mensaje = {
      email: this.form.get('email')?.value,
      nombre: this.form.get('nombre')?.value,
      mensaje: this.form.get('mensaje')?.value,
    };
    this.datosPortfolio.enviarMensaje(mensaje).subscribe();
    this.form.setValue([mensaje, 'Mensaje Enviado...']);
  }
}
