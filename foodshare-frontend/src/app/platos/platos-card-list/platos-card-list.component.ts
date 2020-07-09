import { Component, OnInit } from '@angular/core';
import { Platos } from '../interfaces/Platos';
import { PlatosService } from '../services/platos.service';
import { Title } from '@angular/platform-browser';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-platos-card-list',
  templateUrl: './platos-card-list.component.html',
  styleUrls: ['./platos-card-list.component.css'],
  animations: [
    trigger('animateList', [
      transition(':enter', [
        query('app-platos-item', [
          style({ opacity: 0, transform: 'translateY(100px)' }),
          stagger(100, animate('500ms ease-out', style({ opacity: 1, transform: 'none' })))
        ])
      ])
    ])
  ]
})
export class PlatosCardListComponent implements OnInit {
  platos: Platos[] = [];
  search = '';
  collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });

  constructor(private platosService: PlatosService,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Platos y comidas para compartir');

    this.platosService.getPlatos().subscribe(
      platos => this.platos = platos,
    );
  }

  // borra el plato recibido por el componente hijo (plato-item) del array
  borrarPlato(plato: Platos) {
    this.platos.splice(this.platos.indexOf(plato), 1);
    this.platos = [...this.platos]; // clonamos para que se actualice el HTML
  }

  orderTime(e: Event) {
    e.preventDefault();
    this.platos.sort((a, b) => this.collator.compare(a.hora, b.hora));
    this.platos = [...this.platos];
  }
}



