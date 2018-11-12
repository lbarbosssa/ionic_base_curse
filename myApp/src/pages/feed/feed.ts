import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MoovieProvider } from "../../providers/moovie/moovie";
import { FilmedetalhesPage } from '../filmedetalhes/filmedetalhes';


@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider
  ]
})
export class FeedPage {
  public objeto_feed = {
    titulo: "Lucas Barbosa",
    data: "November 6, 1955",
    descricao: "Estou criando um app",
    qntd_likes: 12,
    qnt_comments: 4,
    time_comment: "11h ago"
  }

  public lista_filmes = new Array<any>();
  public loader;
  public refresher;
  public isRefreshing: boolean = false;
  public infiniteScroll;
  public page = 1;

  public nome_usuario: string = "Lucas Barbosa";
  //sem o public é padrão, o tipo de variavel é declardo para que a var receba apenas oque ela espera.

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MoovieProvider,
    public loadingCtrl: LoadingController
  ) {
  }


  abrirCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando ...",
    });
    this.loader.present();
  }

  fecharCarregando() {
    this.loader.dismiss();
  }

  public somaDoisNumeros(num1: number, num2: number): void {
    //É sempre bom especificar o tipo que será recebido
    alert(num1 + num2);
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;

    this.carregarFilmes();
  }

  ionViewDidEnter() {
    this.carregarFilmes();
  }

  abrirDetalhes(filme) {
    console.log(filme);
    this.navCtrl.push(FilmedetalhesPage, { id: filme.id });
  }

  doInfinite(infiniteScroll) {
    this.page++;
    this.infiniteScroll = infiniteScroll;
    this.carregarFilmes(true);
  }

  carregarFilmes(newpage: boolean = false) {

    this.abrirCarregando();
    this.movieProvider.getPopularMovies(this.page).subscribe(
      data => {
        const response = (data as any);

        if(newpage){
          this.lista_filmes = this.lista_filmes.concat(response.results);
          this.infiniteScroll.complete();
        }else{
        this.lista_filmes = response.results;
        }

        this.fecharCarregando();

        if (this.isRefreshing) {
          this.refresher.complete();
          this.isRefreshing = false;
        }
      }, error => {
        console.log(error);
        this.fecharCarregando();
        if (this.isRefreshing) {
          this.refresher.complete();
          this.isRefreshing = false;
        }
      }
    )
  }


}


