import { Pipe, PipeTransform } from '@angular/core';
import { Platos } from '../interfaces/Platos';

@Pipe({
  name: 'platosFilter'
})
export class PlatosFilterPipe implements PipeTransform {
  transform(platos: Platos[], search: string): Platos[] {
    if (!search) {
      return platos;
    }
    return platos.filter(e =>
      e.nombre.toLowerCase().includes(search.toLowerCase()) ||
      e.direccion.toLowerCase().includes(search.toLowerCase())
    );
  }
}
