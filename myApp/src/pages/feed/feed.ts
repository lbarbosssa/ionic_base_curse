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

  public somaDoisNumeros(): void {
    alert(5 + 10);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    this.somaDoisNumeros();
  }

}
