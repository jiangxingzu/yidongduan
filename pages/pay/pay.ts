import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController,LoadingController} from 'ionic-angular';

/**
 * Generated class for the PayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pay',
  templateUrl: 'pay.html',
})
export class PayPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCrl:ViewController,private loadingCtrl:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PayPage');
  }

  closeModal() {
    this.viewCrl.dismiss()
  } 

  showLoading() {
    var myLoading = this.loadingCtrl.create({
      content:"正在支付...",
      duration:3000
    })
    myLoading.present()
    setTimeout(() => {
      this.viewCrl.dismiss()
    }, 3000);
  }

}
