import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http'
import { LoginPage } from '../login/login';
import { OrderConfirmPage } from '../order-confirm/order-confirm';
/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  myList = []

  isAllSelected = false

  constructor(public navCtrl: NavController, public navParams: NavParams, private myHttp: HttpClient) {
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad CartPage');
    var url = "http://localhost:8080/cart/list"
    this.myHttp.get(url, { withCredentials: true }).subscribe((result: any) => {
      console.log(result)
      if (result.code == 300) {
        this.navCtrl.push(LoginPage)
      } else if (result.code == 200) {
        this.myList = result.data
        for (var i = 0; i < this.myList.length; i++) {
          this.myList[i].isSelected = false

        }
      }
    })
  }

  shopping() {
    this.navCtrl.parent.select(0)
  }

  operateAll() {
    console.log(this.isAllSelected)
    for (var i = 0; i < this.myList.length; i++) {
      this.myList[i].isSelected = this.isAllSelected
    }
  }

  operateOne() {
    var result = true
    for (var i = 0; i < this.myList.length; i++) {
      result = result && this.myList[i].isSelected
    }
    this.isAllSelected = result
  }

  calcTotalPrice() {
    var totalPrice = 0
    for (var i = 0; i < this.myList.length; i++) {
      if (this.myList[i].isSelected) {
        var p = this.myList[i]
        totalPrice += (p.price * p.count)
      }
    }
    return totalPrice
  }
  /**
   * 修改某一个商品的数量的
   * @param isAdd 是否要往上加
   * @param index 修改的商品的下标
   */
  modifyCount(isAdd, index) {
    if(isAdd){
      this.myList[index].count++
    }else{
      if(this.myList[index].count == 1){
        return
      }
      this.myList[index].count--
    }
  }

  jumpToSubmit() {
    this.navCtrl.push(OrderConfirmPage)
  }

}
