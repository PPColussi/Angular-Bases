import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = ['Deadpool','Ghost Rider','Hulk','Venom','Punisher','pepe'];
  public deleteHero?: string;
  removeLastHero():void {
  this.deleteHero = this.heroNames.shift();

  }
}
