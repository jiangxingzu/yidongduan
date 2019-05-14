import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import { PayPage } from '../pay/pay';

/**
 * Generated class for the OrderConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-confirm',
  templateUrl: 'order-confirm.html',
})
export class OrderConfirmPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderConfirmPage');
  }
  //展示一个自定义的模态窗口，在模态窗口内部加载PayPage
  showModel() {
    var myModal = this.modalCtrl.create(PayPage)
    myModal.present()
  }

}
