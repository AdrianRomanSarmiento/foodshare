import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { PlatosAddComponent } from '../platos/platos-add/platos-add.component';

@Injectable({
  providedIn: 'root'
})
export class SaveChangesGuard implements CanDeactivate<PlatosAddComponent> {
  canDeactivate(
    component: PlatosAddComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean {
      if (component.saved) {
        return true;
      }
      return confirm('¿Quieres salir? Los cambios no se guardarán');
  }
}
