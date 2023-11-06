import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public deletedName?: string;
  public names: string[] = ['Job','Noé','Gad','Lot','José'];

  removeLastHero(): void {
    this.deletedName = this.names.pop();
  }
}
