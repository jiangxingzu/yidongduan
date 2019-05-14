import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController} from 'ionic-angular';
import { HttpClient } from '@angular/common/http'

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  uname = ""

  upwd = ""

  constructor(public navCtrl: NavController, public navParams: NavParams,private myHttp:HttpClient,private toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  doLogin() {
    console.log(this.uname,this.upwd)
    var url = "http://localhost:8080/user/login"
    this.myHttp.post(url,{uname:this.uname,upwd:this.upwd},{withCredentials:true}).subscribe((result:any)=>{
      if(result.code == 200){
        this.navCtrl.pop()
      }else{
        var myToast = this.toastCtrl.create({
          message:'登录失败',
          duration:1500
        })
        myToast.present()
      }
    })
  }

}
