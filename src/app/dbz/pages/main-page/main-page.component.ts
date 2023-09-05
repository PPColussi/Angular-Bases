import { Component } from '@angular/core';
import { character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/service.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  constructor( private dbzService: DbzService ) {}

  get characters(): character[] {
    return[...this.dbzService.characters]
  }

  deleteCharacterById(id:string):void {
    this.dbzService.deleteCharacterById(id)
  }

  onNewCharacter(character: character):void {
    this.dbzService.addCharacter( character )
  }
}

