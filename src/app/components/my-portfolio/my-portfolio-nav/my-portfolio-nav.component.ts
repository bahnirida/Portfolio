import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-my-portfolio-nav',
  templateUrl: './my-portfolio-nav.component.html',
  styleUrls: ['./my-portfolio-nav.component.css']
})
export class MyPortfolioNavComponent {
  selectedFilter: string = '*';
  @Output() filter: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  applyFilter(filter: string) {
    this.selectedFilter = filter;
    this.filter.emit(filter);
  }
}
