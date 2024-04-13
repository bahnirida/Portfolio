import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-portfolio-container',
  templateUrl: './my-portfolio-container.component.html',
  styleUrls: ['./my-portfolio-container.component.css']
})
export class MyPortfolioContainerComponent {
  @Input() portfolioItems : any;
}
