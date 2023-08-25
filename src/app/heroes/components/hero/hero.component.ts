import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
 public name: string = 'ironman';
 public age:  number = 45;

 get CapitalizeName(): string {
  return 'Genio, Millonario, Playboy, Filantropo'.toUpperCase();
 }
 getHeroDescription(): string {
  return `${this.name} - ${this.age}`
 }

 changeName():void {
  this.name = 'Deadpool';
 }
 changeAge():void {
  this.age = 35;
 }

 resetForm():void {
  this.name = 'ironman';
  this.age = 45;

  // document.querySelectorAll('h1')!.forEach(Element => {
  //   Element.innerHTML = '<h1> For the Burning Blade!!!!</h1>'
  // });
 }
}
