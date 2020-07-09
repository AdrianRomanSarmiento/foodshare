import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlatosService } from '../services/platos.service';
import { Platos } from '../interfaces/Platos';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-platos-detail',
  templateUrl: './platos-detail.component.html',
  styleUrls: ['./platos-detail.component.css']
})
export class PlatosDetailComponent implements OnInit {
  plato: Platos;
  @Output() deleted = new EventEmitter<void>();
  zoom = 15;
  public isCollapsed = false;


  constructor(private route: ActivatedRoute,
              private platosService: PlatosService,
              private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.params.pipe(
      switchMap(params => {
        const id = +params.id;
        return this.platosService.getPlato(id);
      })
    ).subscribe(plato => this.plato = plato);
  }

  edit() {
    this.router.navigate(['/platos/', this.plato.id, 'edit']);
  }

  goBack() {
    this.router.navigate(['/platos']);
  }

  deletePlato() {
    this.platosService.deletePlato(this.plato.id).subscribe(
      () => {
        this.deleted.emit();
        this.goBack();
      },
      error => console.error(error)
    );
  }
}
