import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Note } from '../Note';

/*
  Generated class for the NoteProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class NoteProvider {

  private api_url: string;

  constructor(public http: Http) {
    this.api_url = '/api';
  }

  getNotes(): Promise<Note[]> {
    return this.http.get(`${this.api_url}/notes`)
      .toPromise()
      .then(response => JSON.parse(response['_body']) as Note)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('A ocurrido un error', error);
    return Promise.reject(error.message || error);
  }

}
