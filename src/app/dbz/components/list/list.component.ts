import { Component, Input, EventEmitter, Output } from '@angular/core';
import { character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbp-app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: character[] = [{
    name: 'Trunks',
    power: 10
  },]

  // @Output()
  // public onDelete: EventEmitter<number> = new EventEmitter();

  @Output()
  public deleteById: EventEmitter<string> = new EventEmitter();

  deleteCharacterById(id?:string):void {
    if (!id) return;
    console.log({id})

    this.deleteById.emit(id)
  }


  // onDeleteCharacter(index: number):void {
  //   this.onDelete.emit(index);
  //   console.log({index})
  // };
}
