import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-my-portfolio',
  templateUrl: './my-portfolio.component.html',
  styleUrls: ['./my-portfolio.component.css']
})
export class MyPortfolioComponent {
   portfolioItems = [
    { title: 'eCommerce Website', imageUrl: '/assets/img/portfolio-1.jpg', filter: 1, delay: '0.0s' },
    { title: 'Design Website', imageUrl: '/assets/img/portfolio-2.jpg', filter: 1, delay: '0.0s' },
    { title: 'software Website', imageUrl: '/assets/img/portfolio-3.jpg', filter: 1, delay: '0.0s' },
    // Add other portfolio items here
  ];

  filteredPortfolioItems = this.portfolioItems;

  applyFilter(category: string) {
    if (category === '*') {
      this.filteredPortfolioItems = this.portfolioItems;
    } 
  } 
}
