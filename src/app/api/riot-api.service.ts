import { Http, BaseRequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';


@Injectable()
export class RiotApiService {
  private ServiceHost = 'http://localhost:3001';

  public baseImgUrl ='http://ddragon.leagueoflegends.com/cdn/7.6.1/img/champion/';

  constructor(private http: Http) {
  }

  public getEndpoint(endpoint:string, options: object = {}){
    let url = this.ServiceHost + endpoint;
    return this.http.get(url, options).map(response => {
      return response.json();
    });
  }

}
