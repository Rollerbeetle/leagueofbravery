import { Http, BaseRequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { environment } from '../../environments/environment';



import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';


@Injectable()
export class RiotApiService {
  private ServiceHost = environment.serviceHost;

  public baseImgUrl = environment.baseImgUrl;

  constructor(private http: Http) {
  }

  public getEndpoint(endpoint:string, options: object = {}): Observable<any>{
    let url = this.ServiceHost + endpoint;
    return this.http.get(url, options)
    .map(response => response.json())
    .catch(this.handleError);
  }

  private handleError (error: Response | any): Observable<any> {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${body}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);

    return Observable.throw(errMsg)
  }

}
