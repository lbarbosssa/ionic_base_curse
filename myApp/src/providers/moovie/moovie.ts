import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {
  private baseApiPath = "https://api.themoviedb.org/3";
  constructor(public http: HttpClient) {
    console.log('Hello MoovieProvider Provider');
  }

  getLatesteMovies() {
    return this.http.get(this.baseApiPath + "/movie/latest?api_key=" + this.getApiKey());
  }

  getApiKey(): string{
    return "7e5cac9f8cea0bb43e4dd1aca147b93f";
  }

}
