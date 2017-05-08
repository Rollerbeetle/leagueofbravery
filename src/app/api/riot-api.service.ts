import { Http, BaseRequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { environment } from '../../environments/environment';
import { ActivatedRoute, Params }   from '@angular/router';



import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';


@Injectable()
export class RiotApiService {
  private ServiceHost = environment.serviceHost;

  public baseImgUrl = environment.baseImgUrl;

  private region: string

  constructor(private http: Http, private route: ActivatedRoute) {

    let sub = this.route.queryParams.subscribe(query => this.region = query.region);

  }

  public getEndpoint(endpoint:string, options: object = {params: {}}): Observable<any>{
    let url = this.ServiceHost + endpoint;
    options['params']['region'] = this.region;
    return this.http.get(url, options)
    .map(response => response.json())
    .catch(this.handleError);
  }

  public getChampions(): Observable<any> {
    return this.getEndpoint('/static/champions', {
      params: {
        champListData: 'image,tags,blurb',
      }
    })
    .map(json => json.data)
  }

  public getChampionById(id: number): Observable<any> {
    return this.getEndpoint('/static/champions/'+id, {
      params: {
        champData: 'all'
      }
    })
  }

  private handleError (error: Response | any): Observable<any>{
    let err: any;

    if (error instanceof Response) {
      err = {
        status: error.status,
        statusText: error.statusText
      }
      switch (error.status){
        case 0:
          err.error = 'connection_refused';
          break;
        case 424:
          const bodyJson = error.json() || {};
          err.error = bodyJson;
          break;
        default:
          err.error = error.text();
      }

    } else {
      err.message = error.message ? error.message : error.toString();
    }
    return Observable.throw(err);
  }

}
