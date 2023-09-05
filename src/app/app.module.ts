import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { counterModule } from './counter/counter.module';
import { heroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';


import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    counterModule,
    heroesModule,
    DbzModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
