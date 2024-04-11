import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPortfolioContainerComponent } from './my-portfolio-container.component';

describe('MyPortfolioContainerComponent', () => {
  let component: MyPortfolioContainerComponent;
  let fixture: ComponentFixture<MyPortfolioContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPortfolioContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPortfolioContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
