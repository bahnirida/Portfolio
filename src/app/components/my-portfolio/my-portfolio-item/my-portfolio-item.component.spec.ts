import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPortfolioItemComponent } from './my-portfolio-item.component';

describe('MyPortfolioItemComponent', () => {
  let component: MyPortfolioItemComponent;
  let fixture: ComponentFixture<MyPortfolioItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPortfolioItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPortfolioItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
