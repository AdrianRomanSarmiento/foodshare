import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlatosCardListComponent } from './platos-card-list/platos-card-list.component';
import { PlatosAddComponent } from './platos-add/platos-add.component';
import { PlatosDetailComponent } from './platos-detail/platos-detail.component';
import { PlatosDetailResolve } from './resolvers/platos-detail.resolve';
import { SaveChangesGuard } from '../guards/save-changes.guard';
import { PlatosEditComponent } from './platos-edit/platos-edit.component';
import { PlatosDetailGuard } from './guards/platos-detail.guard';


const routes: Routes = [
  { path: '', component: PlatosCardListComponent },
  {
    path: 'add',
    component: PlatosAddComponent,
    canDeactivate: [SaveChangesGuard]
  },
  {
    path: ':id',
    component: PlatosDetailComponent,
    resolve: {
      plato: PlatosDetailResolve
    }
  },
  {
    path: ':id/edit',
    component: PlatosEditComponent,
    canActivate: [PlatosDetailGuard],
    resolve: {
      plato: PlatosDetailResolve
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatosRoutingModule { }
