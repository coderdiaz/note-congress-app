import { Component } from '@angular/core';

import { Platform, NavController, ModalController, ActionSheetController } from 'ionic-angular';
import { DetailsNotePage } from '../details-note/details-note';
import { ModalPage } from '../modal/modal';
import { Data } from '../../providers/data';
import { Note } from '../../Note';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ Data ]
})
export class HomePage {

  items: Note[] = [];

  constructor(
    public platform: Platform,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public sdata: Data,
    public actionsheetCtrl: ActionSheetController
  ) {}

  ionViewDidLoad() {
    this.sdata.allNotes()
    .then(response => {
      this.items = response;
    }).catch(error => {
      console.error('Error:', error);
      alert('Ocurrio un problema');
    });
  }

  goToDetail(note) {
    this.navCtrl.push(DetailsNotePage, {
      'note': note
    });
  }

  openModal(data=null, index=null, type) {
    let modal = this.modalCtrl.create(ModalPage, { 'data': data, 'type': type });
    modal.onDidDismiss(result => {
      if(typeof result != 'undefined') {
        if(type == 1) {
          this.items.push(result);
        } else {
          this.items[index] = result;
        }
      }
    });
    modal.present();
  }

  openMenu(e, index) {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Options',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            let id = this.items[index].id;
            this.sdata.deleteNote(id).then(response => {
              this.items.splice(index, 1);
            });
          }
        },
        {
          text: 'Edit',
          icon: !this.platform.is('ios') ? 'create' : null,
          handler: () => {
            this.openModal(this.items[index], index, 2);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.info('Cancel sheet');
          }
        }
      ]
    });

    actionSheet.present();
  }
  
}
