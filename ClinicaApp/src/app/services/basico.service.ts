import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Especialidad } from '../classes/especialidad';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicoService {

  apiHost: string = 'https://localhost:44394/'
  apiService: string = 'api/Basico';
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  ListarEspecialidades():Observable<Especialidad[]>{
    return this.http.get<Especialidad[]>(this.apiHost + this.apiService)
    .pipe(
      catchError(this.handleError('ListarEspecialidades',[]))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
