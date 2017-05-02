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
    this.champions = this.getChampions()
      .map(obj => Object.keys(obj).map(key => obj[key]))
;
  }

}
