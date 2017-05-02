import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { RiotApiService } from '../api/riot-api.service';

@Component({
  selector: 'mastery',
  templateUrl: './mastery.component.html',
  styleUrls: ['./mastery.component.scss']
})
export class MasteryComponent implements OnInit {
  baseImgUrl: string;
  summoner: any;

  constructor(private api: RiotApiService) {
    this.baseImgUrl = api.baseImgUrl;
  }

  ngOnInit() {
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
  }

  keys(obj) : Array<string> {
    return Object.keys(obj);
  }

  getMasteriesForSummoner(summonerId:string) {
    this.api.getEndpoint(`/masteries/${summonerId}`).subscribe(
      masteries => this.summoner.masteries = masteries,
      error => console.log(error)
    );

  }



}
