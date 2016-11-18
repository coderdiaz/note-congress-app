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

  private form: { title?: string, description?: string } = {};
  public submitted = false;

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public sdata: Data
  ) {}

  ionViewDidLoad() {
    console.log('Hello ModalPage Page');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  create(form) {
    this.submitted = true;
    if(form.valid) {
      this.viewCtrl.dismiss(this.form);
    }
  }

}
