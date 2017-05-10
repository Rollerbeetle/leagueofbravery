import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { RiotApiService } from '../api/riot-api.service';

@Component({
  selector: 'champion-list',
  templateUrl: './champion-list.component.html',
  styleUrls: ['./champion-list.component.scss'],
})
export class ChampionListComponent implements OnInit {
  champions: Observable<any[]>;
  chosenTag: string = '';
  baseImgUrl: string;

  allTags: string[] = [
    'Marksman',
    'Assassin',
    'Mage',
    'Support',
    'Fighter',
    'Tank'
  ]
  constructor(private api: RiotApiService) {
    this.baseImgUrl = api.baseImgUrl;
  }

  private getChampions(): Observable<any[]>{
    return this.api.getChampions();
  }


  ngOnInit() {
    this.champions = this.getChampions();
  }

}
