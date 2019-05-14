import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NotFoundPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-not-found',
  templateUrl: 'not-found.html',
})
export class NotFoundPage {

  count = 5

  canGoBack = false

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotFoundPage');
    this.canGoBack = this.navCtrl.canGoBack()
    if(!this.canGoBack){
      return 
    }
    var myTimer = setInterval(()=>{
      this.count --
      if(this.count == 0){
        clearInterval(myTimer)
        if(this.navCtrl.canGoBack()){
          this.navCtrl.pop()
        }
      }
    },1000)
  }
}
