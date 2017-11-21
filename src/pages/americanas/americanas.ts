import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FinalPage } from '../final/final';

/**
 * Generated class for the AmericanasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-americanas',
  templateUrl: 'americanas.html',
})
export class AmericanasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AmericanasPage');
  }

  onClick1() {
this.navCtrl.push(FinalPage);
}

}
