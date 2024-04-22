import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-my-portfolio',
  templateUrl: './my-portfolio.component.html',
  styleUrls: ['./my-portfolio.component.css']
})
export class MyPortfolioComponent {


  portfolioItems: any[] = []; // Initialize with your portfolio items
  filteredItems: any[] = [];

  constructor() { }

  ngOnInit(): void {
    // Initialize portfolioItems with your data
    this.portfolioItems = [
      { title: 'eCommerce Website', imageUrl: './assets/img/portfolio-1.jpg', filter: 1, delay: '0.0s',category:"WD" },
      { title: 'Design Website', imageUrl: './assets/img/portfolio-2.jpg', filter: 1, delay: '0.0s' ,category: "WD"},
      { title: 'software Website', imageUrl: './assets/img/portfolio-3.jpg', filter: 1, delay: '0.0s' ,category: "MA"},
      { title: 'eCommerce Website', imageUrl: './assets/img/portfolio-4.jpg', filter: 1, delay: '0.0s',category:"WD" },
      { title: 'Design Website', imageUrl: './assets/img/portfolio-5.jpg', filter: 1, delay: '0.0s' ,category: "MA"},
      { title: 'software Website', imageUrl: './assets/img/portfolio-6.jpg', filter: 1, delay: '0.0s',category: "WD" },
    ];
    this.filteredItems = [...this.portfolioItems]; // Initially show all items
  }

  applyFilter(filter: string) {
    if (filter === '*') {
      this.filteredItems = [...this.portfolioItems]; // Show all items
    } else {
      console.log(filter);
      this.filteredItems = this.portfolioItems.filter(item => item.category === filter); // Filter items by category
      console.log(this.filteredItems);
    }
  }
}
