import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Doctor } from '../classes/doctor';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
// import { PacienteXDoctor } from '../classes/paciente-xdoctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {  
  apiHost: string = 'https://localhost:44394/'
  apiService: string = 'api/Doctor';
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  Listar():Observable<Doctor[]>{               
    return this.http.get<Doctor[]>(this.apiHost + this.apiService)
    .pipe(
      catchError(this.handleError('Listar',[]))
    );    
  }

  ObtenerDetalle(id:string) : Observable<Doctor>{
    return this.http.get<Doctor>(this.apiHost + this.apiService + '/' + id)
    .pipe(      
      catchError(this.handleError('ObtenerDetalle',null))
    );     
  }

  Insertar(objDoctor: Doctor){
    return this.http.post(this.apiHost + this.apiService,objDoctor)
    .pipe(      
      catchError(this.handleError('InsertarDoctor',null))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
