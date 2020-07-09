import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Platos } from '../interfaces/Platos';
import { Observable } from 'rxjs';
import { PlatosService } from '../services/platos.service';

@Injectable({
  providedIn: 'root'
})
export class PlatosDetailResolve implements Resolve<Platos> {

  constructor(private platosService: PlatosService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Platos> {
    const id = +route.params.id;
    return this.platosService.getPlato(id);
  }
}
