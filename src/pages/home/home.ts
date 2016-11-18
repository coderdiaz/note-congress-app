import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import { DetailsNotePage } from '../details-note/details-note';
import { ModalPage } from '../modal/modal';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ Data ]
})
export class HomePage {

  private items: any;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public sdata: Data
  ) {}

  ngOnInit() {
    this.items = this.sdata.allNotes();
  }

  goToDetail(note) {
    this.navCtrl.push(DetailsNotePage, {
      'note': note
    });
  }

  openModal() {
    let modal = this.modalCtrl.create(ModalPage);
    modal.onDidDismiss(result => {
      if(typeof result != 'undefined') {
        this.items.push(result);
      }
    });
    modal.present();
  }
  
}
