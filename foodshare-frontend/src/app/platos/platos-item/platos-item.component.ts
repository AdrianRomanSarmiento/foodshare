import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Platos } from '../interfaces/Platos';
import { PlatosService } from '../services/platos.service';

@Component({
  selector: 'app-platos-item',
  templateUrl: './platos-item.component.html',
  styleUrls: ['./platos-item.component.css']
})
export class PlatosItemComponent implements OnInit {
  @Input() plato: Platos;
  // @Output() deleted = new EventEmitter<void>();

  constructor(private platosService: PlatosService) { }

  ngOnInit(): void {
  }

  // deletePlato() {
  //   this.platosService.deletePlato(this.plato.id).subscribe(
  //     () => this.deleted.emit(),
  //     error => console.error(error)
  //   );
  // }
}
