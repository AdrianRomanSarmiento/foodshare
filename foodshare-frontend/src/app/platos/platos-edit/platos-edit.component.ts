import { Component, OnInit } from '@angular/core';
import { Platos } from '../interfaces/Platos';
import { PlatosService } from '../services/platos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NgModel } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { Result } from 'ngx-mapbox-gl/lib/control/geocoder-control.directive';

@Component({
  selector: 'app-platos-edit',
  templateUrl: './platos-edit.component.html',
  styleUrls: ['./platos-edit.component.css']
})
export class PlatosEditComponent implements OnInit {
  plato: Platos;
  archivo: string;
  timeForm = new Date();
  timeStr: string;
  zoom = 16;

  constructor(private platosService: PlatosService,
              private router: Router,
              private title: Title,
              private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Editar un plato');

    const id = this.route.params.pipe(
      switchMap(params => {
        const id = +params.id;
        return this.platosService.getPlato(id);
      })
    ).subscribe(plato => this.plato = plato);

  }


  // convierte la imagen en base64 para poder añadirla
  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) { return; }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', e => {
      this.plato.imagen = reader.result as string;
    });
  }

  // cambia la clase del campo del formulario según si es válido o no, cambiando así el CSS de bootstrap
  validClasses(ngModel: NgModel, validClass: string, errorClass: string) {
    return {
      [validClass]: ngModel.valid,
      [errorClass]: ngModel.touched && ngModel.invalid
    };
  }

  // verifica si se ha introducido una fecha nueva válida
  validTime() {
    this.timeStr = this.timeForm.toString();  // pasamos la nueva hora introducida a string
    if (!isNaN(+this.timeStr.substr(4, 1))) {  // si la posición 4 es un número (!NaN), la fecha introducida es correcta. La asignamos
      this.plato.hora = this.timeStr;
    } // else: fecha nueva no válida, nos quedamos con la anterior (no la tocamos)
  }

  editPlato() {
    this.validTime();
    this.platosService.editPlato(this.plato.id, this.plato).subscribe(evento => {
      this.router.navigate(['/platos']);
    });
  }

  changePosition(result: Result) {
    this.plato.direccion = result.place_name;
    this.plato.latitud = result.geometry.coordinates[1];
    this.plato.longitud = result.geometry.coordinates[0];
    console.log(this.plato);
  }
}
