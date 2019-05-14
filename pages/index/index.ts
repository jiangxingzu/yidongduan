import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from "@angular/common/http"
import { DetailPage } from '../detail/detail';
/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {
  cList = []  //保存轮播图数据

  myList = [] //保存横向滚动的容器数据

  rList = []  //保存缩略图

  detail = DetailPage
  constructor(private myHttp: HttpClient, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
    //发请求
    var url = "http://localhost:8080/index";
    this.myHttp.get(url).subscribe((result: any) => {
      console.log(result)
      this.cList = result.carouselItems;
      this.myList = result.newArrialItems;
      this.rList = result.recommendedItems;
    })
  }
}
