import { Component, OnInit} from '@angular/core';
import { Observable } from "rxjs/Observable";
import { RiotApiService } from '../api/riot-api.service';
import { ActivatedRoute, Params, Router }   from '@angular/router';


@Component({
  selector: 'mastery',
  templateUrl: './mastery.component.html',
  styleUrls: ['./mastery.component.scss']
})
export class MasteryComponent implements OnInit {
  baseImgUrl: string;
  summoner: any;
  masteries: any;

  constructor(private api: RiotApiService, private route: ActivatedRoute, private router: Router) {
    this.baseImgUrl = api.baseImgUrl;
  }

  ngOnInit() {
    let queryParamsSub = this.route.queryParams
    .map(params => params['summonerName'])
    .subscribe(
      name => this.getSummoner(name),
      error => console.log(error)
    );
  }

  searchForSummoner(searchTerm: string) {
    this.router.navigate([this.route.routeConfig.path], {queryParams: {summonerName: searchTerm}})
  }

  getSummoner(searchTerm: string) {
    if (!!searchTerm) {}
    this.api.getEndpoint(`/summoner/by-name/${searchTerm}`).subscribe(
      summoner => {
        this.summoner = summoner;
        this.getMasteriesForSummoner(summoner.id);
      },
      error => console.log(error)
    );
  }

  resetSummoner() {
    this.summoner = {};
    this.masteries = {};
  }

  keys(obj) : Array<string> {
    return Object.keys(obj);
  }

  getMasteriesForSummoner(summonerId:string) {
    this.api.getEndpoint(`/masteries/${summonerId}`)
    .map(obj => Object.keys(obj).map(key => obj[key]))
    .subscribe(
      masteries => this.masteries = masteries,
      error => console.log(error)
    );

  }



}
