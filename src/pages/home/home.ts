import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NoteProvider } from '../../providers/note-provider';
import { Note } from '../../Note';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ NoteProvider ]
})
export class HomePage {

  private notes: Note[] = [];

  constructor(public navCtrl: NavController,
    private noteProvider: NoteProvider) {}

  ngOnInit(): void {
    this.noteProvider.getNotes()
      .then(response => {
        this.notes = response;
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Ah ocurrido un problema');
      });
  }

}
