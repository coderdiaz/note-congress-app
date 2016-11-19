import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
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

  form: { title?: string, description?: string, id?: number } = {};
  submitted = false;
  type: number;

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public sdata: Data,
    public params: NavParams
  ) {
    
    let data = this.params.get('data');
    this.type = this.params.get('type');

    if(data != null) {
      this.form.title = data.title;
      this.form.description = data.description;
      this.form.id = data.id;
    }

  }

  ionViewDidLoad() {
    console.log('Hello ModalPage Page');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  create(form) {
    this.submitted = true;
    if(form.valid) {
      this.sdata.createNote(this.form).then(response => {
          console.log(response);
          this.viewCtrl.dismiss(response.note);
      });
    }
  }

  edit(form) {
    this.submitted = true;
    if(form.valid) {
      this.sdata.editNote(form, form.id).then(response => {
        this.viewCtrl.dismiss(response.note);
      });
      this.viewCtrl.dismiss(this.form);
    }
  }

}
