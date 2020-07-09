import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatosRoutingModule } from './platos-routing.module';
import { PlatosDetailComponent } from './platos-detail/platos-detail.component';
import { PlatosAddComponent } from './platos-add/platos-add.component';
import { PlatosEditComponent } from './platos-edit/platos-edit.component';
import { PlatosItemComponent } from './platos-item/platos-item.component';
import { PlatosCardListComponent } from './platos-card-list/platos-card-list.component';
import { FormsModule } from '@angular/forms';
import { PlatosFilterPipe } from './pipes/platos-filter.pipe';
import { SharedModule } from '../shared/shared.module';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    PlatosDetailComponent,
    PlatosAddComponent,
    PlatosEditComponent,
    PlatosItemComponent,
    PlatosCardListComponent,
    PlatosFilterPipe
  ],
  imports: [
    CommonModule,
    PlatosRoutingModule,
    FormsModule,
    SharedModule,
    NgxMapboxGLModule,
    NgbModule

  ]
})
export class PlatosModule { }
