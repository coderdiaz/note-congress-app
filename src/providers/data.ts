import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Data provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Data {

  private notes: any;

  constructor(public http: Http) {
    this.notes = [
      {
        'title': 'Nota 1',
        'description': "Hola mundo"
      },
      {
        'title': 'Nota 2',
        'description': "Soy una nueva nota"
      },
      {
        'title': 'Nota 3',
        'description': "League of legends"
      },
      {
        'title': 'Nota 4',
        'description': "Call of duty"
      },
    ];
  }

  allNotes() {
    return this.notes;
  }

  createNote(note) {
    this.notes.push(note);
    console.log(this.notes);
  }

}
