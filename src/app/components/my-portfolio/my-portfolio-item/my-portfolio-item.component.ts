import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-portfolio-item',
  templateUrl: './my-portfolio-item.component.html',
  styleUrls: ['./my-portfolio-item.component.css']
})
export class MyPortfolioItemComponent {
  @Input() item: any;

  constructor() { }
}
