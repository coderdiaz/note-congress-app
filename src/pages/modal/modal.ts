import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { Data } from '../../providers/data';

/*
  Generated class for the Modal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html'
})
export class ModalPage {

  private form: any;

  constructor(public navCtrl: NavController,
    public viewCtrl: ViewController,
    public sdata: Data) {
      
      this.form = {
        'title': '',
        'description': ''
      };

    }

  ionViewDidLoad() {
    console.log('Hello ModalPage Page');
  }

  dismiss() {
    console.log('OK!');
    this.viewCtrl.dismiss();
  }

  create() {
    this.sdata.createNote(this.form);
    this.viewCtrl.dismiss();
  }

}
