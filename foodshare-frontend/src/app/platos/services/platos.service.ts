import { Injectable } from '@angular/core';
import {  Platos } from '../interfaces/Platos';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, delay } from 'rxjs/operators';
import { PlatosResponse, PlatoResponse } from '../interfaces/responses';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlatosService {
  private readonly platosURL = '/platos';

  constructor(private http: HttpClient) { }

  getPlatos(): Observable<Platos[]> {
    return this.http.get<PlatosResponse>(this.platosURL).pipe(
      map(resp => resp.plato)
    );
  }

  // getPlatos() {
  //   return this.http.get<Platos[]>(this.platosURL);
  // }

  getPlato(id: number) {
    return this.http.get<Platos>(`${this.platosURL}/${id}`);
  }

  addPlato(plato: Platos): Observable<Platos> {
    return this.http.post<PlatoResponse>(this.platosURL, plato).pipe(
      map(resp => resp.plato)
    );
  }

  deletePlato(id: number): Observable<void> {
    return this.http.delete<void>(`/platos/${id}`);
  }

  editPlato(id: number, plato: Platos) {
    return this.http.put<PlatoResponse>(`${this.platosURL}/${id}`, plato);
  }
}
