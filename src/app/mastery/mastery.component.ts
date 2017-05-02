import { Component, OnInit} from '@angular/core';
import { Observable } from "rxjs/Observable";
import { RiotApiService } from '../api/riot-api.service';
import { ActivatedRoute, Params }   from '@angular/router';


@Component({
  selector: 'mastery',
  templateUrl: './mastery.component.html',
  styleUrls: ['./mastery.component.scss']
})
export class MasteryComponent implements OnInit {
  baseImgUrl: string;
  summoner: any;
  masteries: any;

  constructor(private api: RiotApiService, private route: ActivatedRoute) {
    this.baseImgUrl = api.baseImgUrl;
  }

  ngOnInit() {
    let query = this.route.snapshot.queryParams;
    if (!!query && query['summonerName']){
      this.lookupSummoner(query['summonerName']);
    }
  }

  lookupSummoner(searchTerm: string) {
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
    this.api.getEndpoint(`/masteries/${summonerId}`).subscribe(
      masteries => this.masteries = masteries,
      error => console.log(error)
    );

  }



}
