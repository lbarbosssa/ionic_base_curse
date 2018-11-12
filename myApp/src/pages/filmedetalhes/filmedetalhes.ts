import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FilmedetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filmedetalhes',
  templateUrl: 'filmedetalhes.html',
})
export class FilmedetalhesPage {
  public filme;
  public filmeid;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public movieProvider: MoovieProvider
  ) {
  }

  ionViewDidEnter() {
    this.filmeid = this.navParams.get("id");
    this.movieProvider.getMovieDeatils(this.filmeid).subscribe(
      data => {
        //let retorno = (data as any)._body;
        //this.filme = JSON.parse(retorno);
        const retorno = (data as any);
        this.filme = retorno;
        console.log(this.filme);

      }, error => {
        console.log(error);
      }
    )
  }

}
