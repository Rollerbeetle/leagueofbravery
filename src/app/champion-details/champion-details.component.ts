import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { RiotApiService } from '../api/riot-api.service';

@Component({
  selector: 'champion-details',
  templateUrl: './champion-details.component.html',
  styleUrls: ['./champion-details.component.css']
})
export class ChampionDetailsComponent implements OnInit {
  private champion: any;
  constructor(
    private api: RiotApiService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  keys(obj) : Array<string> {
    return Object.keys(obj);
  }

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => this.api.getEndpoint('/static/champions/'+params['id'], {
      params: {
        champData: 'all'
      }
    }))
    .subscribe(champion => this.champion = champion);
  }

}
