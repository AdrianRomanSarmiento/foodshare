import { Component, OnInit } from '@angular/core';
import { PlatosService } from '../services/platos.service';
import { Router } from '@angular/router';
import { Platos } from '../interfaces/Platos';
import { NgModel } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Result } from 'ngx-mapbox-gl/lib/control/geocoder-control.directive';

@Component({
  selector: 'app-platos-add',
  templateUrl: './platos-add.component.html',
  styleUrls: ['./platos-add.component.css']
})
export class PlatosAddComponent implements OnInit {
  newPlato: Platos;
  saved = false;
  archivo: string;
  timeForm = new Date();
  lat = 38.4039418;
  lng = -0.5288701;
  zoom = 16;

  constructor(private platosService: PlatosService,
              private router: Router,
              private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Compartir un plato');

    this.resetFormulario();
  }

  prueba() {
    this.timeForm.toString();
    console.log(this.timeForm);
  }

  addPlato() {
    this.newPlato.hora = this.timeForm.toString(); // casteo de la hora a string
    this.platosService.addPlato(this.newPlato).subscribe(
      evento => {
        this.saved = true;
        this.router.navigate(['/platos']);
      }
    );
  }

  private resetFormulario() {
    this.newPlato = {
      nombre: '',
      descripcion: '',
      imagen: '',
      creador: '',
      hora: '',
      direccion: '',
      latitud: null,
      longitud: null
    };
    this.timeForm = null; // reseteamos el campo de hora del formulario
    this.archivo = ''; // con esto se resetea también el campo de la imagen del formulario
  }

  // convierte la imagen en base64 para poder añadirla
  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) { return; }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', e => {
      this.newPlato.imagen = reader.result as string;
    });
  }

  // cambia la clase del campo del formulario según si es válido o no, cambiando así el CSS de bootstrap
  validClasses(ngModel: NgModel, validClass: string, errorClass: string) {
    return {
      [validClass]: ngModel.touched && ngModel.valid,
      [errorClass]: ngModel.touched && ngModel.invalid
    };
  }

  changePosition(result: Result) {
    this.newPlato.direccion = result.place_name;
    this.newPlato.latitud = result.geometry.coordinates[1];
    this.newPlato.longitud = result.geometry.coordinates[0];
    console.log(this.newPlato);
  }

}
