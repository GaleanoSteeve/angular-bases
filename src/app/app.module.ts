import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { CounterModule } from './counter/counter.module';
import { HeoresModule } from './heroes/heroes.module';
import { ProphetModule } from './prophet/prophet.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeoresModule,
    ProphetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }