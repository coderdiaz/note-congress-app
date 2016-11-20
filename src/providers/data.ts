import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Note } from '../Note';

/*
  Generated class for the Data provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Data {

  private api_url: string;
  private headers = new Headers({ 'Content-Type' : 'application/json' });

  constructor(
    public http: Http
  ) {
    this.api_url = '/api';
  }

  /**
   * Función para obtener la información de las notas.
   * 
   * @author Javier Diaz
   * @return Promise<Note[]>
   */
  allNotes(): Promise<Note[]> {
    return this.http.get(`${this.api_url}/notes`)
      .toPromise()
      .then(response => JSON.parse(response['_body']) as Note)
      .catch(this.handleError);
  }

  /**
   * Función para generar una nueva nota.
   * 
   * @author Javier Diaz
   * @param form FormData
   * @return Promise<any>
   */
  createNote(form): Promise<any> {
    return this.http.post(`${this.api_url}/notes`, form)
      .toPromise()
      .then(response => JSON.parse(response['_body']))
      .catch(this.handleError);
  }

  /**
   * Función para editar la información de una nota.
   * 
   * @author Javier Diaz
   * @param form FormData
   * @return Promise<any>
   */
  editNote(form): Promise<any> {
     return this.http.put(`${this.api_url}/notes/${form.id}`, form, { headers: this.headers })
      .toPromise()
      .then(response => JSON.parse(response['_body']))
      .catch(this.handleError);
  }

  /**
   * Función para eliminar una nota.
   * 
   * @author Javier Diaz
   * @param id number
   * @return Promise<any>
   */
  deleteNote(id: number): Promise<any> {
    return this.http.delete(`${this.api_url}/notes/${id}`)
      .toPromise()
      .then(response => parseInt(response['_body']))
      .catch(this.handleError);
  }

  /**
   * Función CallBack lanzada al encontrar una excepción en las peticiones.
   * 
   * @author Javier Diaz
   * @param error Exception
   * @return Promise<any>
   */
  private handleError(error: any): Promise<any> {
    console.error('A ocurrido un error', error);
    return Promise.reject(error.message || error);
  }

}
