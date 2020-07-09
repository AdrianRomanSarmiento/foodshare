import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route, PreloadAllModules } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseUrlInterceptor } from './interceptors/base-url.interceptor';
import { AppComponent } from './app.component';

const APP_ROUTES: Route[] = [
  { path: 'welcome', component: WelcomeComponent },
  {
    path: 'platos',
    loadChildren: () => import('./platos/platos.module').then(m => m.PlatosModule)
  },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(APP_ROUTES, {preloadingStrategy: PreloadAllModules}),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
