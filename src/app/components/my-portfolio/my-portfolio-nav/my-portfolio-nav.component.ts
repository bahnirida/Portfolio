import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-my-portfolio-nav',
  templateUrl: './my-portfolio-nav.component.html',
  styleUrls: ['./my-portfolio-nav.component.css']
})
export class MyPortfolioNavComponent {
  @Output() categorySelected = new EventEmitter<string>();

  constructor() { }

  filterItems(category: string) {
    this.categorySelected.emit(category);
  }
}
