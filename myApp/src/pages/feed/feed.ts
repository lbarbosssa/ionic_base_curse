import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public nome_usuario:string = "Lucas Barbosa";
  //sem o public é padrão, o tipo de variavel é declardo para que a var receba apenas oque ela espera.

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  
  public somaDoisNumeros(num1:number, num2:number): void {
    //É sempre bom especificar o tipo que será recebido
    alert(num1 + num2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    //this.somaDoisNumeros(10, 99);
  }

}
