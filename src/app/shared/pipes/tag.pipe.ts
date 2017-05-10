import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tags'
})

export class TagPipe implements PipeTransform {

  transform(champions: any[], args: string): any {
      console.log('test');
      if(!args || !champions) return champions;
      return champions.filter(champ => champ.tags.indexOf(args) != -1);
  }

}
