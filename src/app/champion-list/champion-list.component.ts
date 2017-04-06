import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { RiotApiService } from '../api/riot-api.service';

@Component({
  selector: 'champion-list',
  templateUrl: './champion-list.component.html',
  styleUrls: ['./champion-list.component.css'],
})
export class ChampionListComponent implements OnInit {
  champions: Observable<any[]>;
  chosenTag = '';
  constructor(private api: RiotApiService) {
    this.champions = this.getChampions();
  }

  baseImgUrl ='http://ddragon.leagueoflegends.com/cdn/7.6.1/img/champion/';

  private getChampions(): Observable<any[]>{
    return this.api.getEndpoint('/static/champions', {
      params: {
        champData: 'image,tags,blurb,lore'
      }
    })
    .map(json => json.data)
    .map(obj => Object.keys(obj).map(key => obj[key]))
  }

  private chooseTag( tag: string): void {
    this.chosenTag = tag;

    this.champions = this.champions.filter(champ => {
          return this.chosenTag === '' || champ['tags'].includes(this.chosenTag);
        });
  }

  private shuffle(array: any[]): any[] {
    let tmp, current, top = array.length;

    if(top) while(--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
    }

    return array;
  }
  ngOnInit() {

  }

}
