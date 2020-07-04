import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Paciente } from '../classes/paciente';
import { PacienteXDoctor } from '../classes/paciente-xdoctor';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  apiHost: string = 'https://localhost:44394/'
  apiService: string = 'api/Paciente';
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  Listar(): Observable<Paciente[]>{
    return this.http.get<Paciente[]>(this.apiHost + this.apiService)
    .pipe(
      catchError(this.handleError('Listar',[]))
    );
  }

  ObtenerDetalle(id:string):Observable<Paciente>{
    return this.http.get<Paciente>(this.apiHost + this.apiService + '/' + id)
    .pipe(      
      catchError(this.handleError('ObtenerDetallePaciente',null))
    );
  }

  Insertar(objPaciente: Paciente):Observable<any>{
    return this.http.post(this.apiHost + this.apiService,objPaciente)
    .pipe(
      tap(_ => console.log('Creado Paciente con id ' + objPaciente.numDocumento)),      
      catchError(this.handleError('CrearPaciente',null))
    );    
    
  }

  Actualizar(id:string, objPaciente:Paciente):Observable<any>{
    return this.http.put(this.apiHost + this.apiService + "/" + id,objPaciente)
    .pipe(
      tap(_ => console.log('Actualizado Paciente con id ' + objPaciente.numDocumento)),      
      catchError(this.handleError('ActualizarPaciente',null))
    );
    ;
  }

  Borrar(id:string){
    return this.http.delete(this.apiHost + this.apiService + "/" + id);
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
