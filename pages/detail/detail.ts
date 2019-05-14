import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController} from 'ionic-angular';
import { HttpClient } from '@angular/common/http'
import { NotFoundPage } from '../not-found/not-found';
import { CartPage } from '../cart/cart';
import { LoginPage } from '../login/login';
/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  notFound = NotFoundPage

  cart = CartPage

  picList = []

  title = ""

  subtitle = ""

  price = 0

  constructor(public navCtrl: NavController, public navParams: NavParams,private myHttp:HttpClient,private toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
    var myId = this.navParams.get('id')
    console.log(myId)
    var url = "http://localhost:8080/product/detail?lid="+myId
    this.myHttp.get(url).subscribe((result:any)=>{
      console.log(result)
      this.picList = result.details.picList
      this.title = result.details.title
      this.subtitle = result.details.subtitle
      this.price = result.details.price
    })
    
  }
  addToCart() {
    var myId = this.navParams.get('id')
    var url1="http://localhost:8080/cart/add?lid="+myId+"&buyCount=1"
    this.myHttp.get(url1,{withCredentials:true}).subscribe((result:any)=>{
      if(result.code==300){
        this.navCtrl.push(LoginPage)
      }else if(result.code == 200){
        var myToast = this.toastCtrl.create({
          message:'添加成功',
          duration:1500
        })
        myToast.present();
      }
    })
  }

}
