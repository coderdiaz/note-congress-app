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

  constructor(
    public http: Http
  ) {
    this.notes = [
      {
        'title': 'Nota 1',
        'description': "Hola mundo",
        'created_at': '2016-11-17 13:33:00'
      },
      {
        'title': 'Nota 2',
        'description': "2016-11-17 13:33:00"
      },
      {
        'title': 'Nota 3',
        'description': "2016-11-17 13:33:00"
      },
      {
        'title': 'Nota 4',
        'description': "2016-11-17 13:33:00"
      },
    ];
  }

  allNotes() {
    return this.notes;
  }

}
