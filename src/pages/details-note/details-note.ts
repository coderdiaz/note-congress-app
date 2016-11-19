import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the DetailsNote page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-details-note',
  templateUrl: 'details-note.html'
})
export class DetailsNotePage {

  note: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
      this.note = this.navParams.get('note');
    }

  ionViewDidLoad() {
    console.log('Hello DetailsNotePage Page');
  }

}
