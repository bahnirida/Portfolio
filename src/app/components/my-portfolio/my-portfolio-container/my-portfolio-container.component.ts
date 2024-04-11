import { Component } from '@angular/core';

@Component({
  selector: 'app-my-portfolio-container',
  templateUrl: './my-portfolio-container.component.html',
  styleUrls: ['./my-portfolio-container.component.css']
})
export class MyPortfolioContainerComponent {
  portfolioItems = [
    { title: 'eCommerce Website', imageUrl: '/assets/img/portfolio-1.jpg', filter: 1, delay: '0.0s' },
    // Add other portfolio items here
  ];

  constructor() { }
}
