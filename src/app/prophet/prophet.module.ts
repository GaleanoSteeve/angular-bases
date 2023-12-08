import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './pages/main-page-component';
import { ProphetListComponent } from './components/prophet-list/prophet-list.component';
import { CharacterComponent } from './components/character/character.component';

@NgModule({
  declarations: [
    MainPageComponent,
    ProphetListComponent,
    CharacterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class ProphetModule { }