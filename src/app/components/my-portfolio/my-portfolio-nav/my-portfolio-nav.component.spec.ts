import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPortfolioNavComponent } from './my-portfolio-nav.component';

describe('MyPortfolioNavComponent', () => {
  let component: MyPortfolioNavComponent;
  let fixture: ComponentFixture<MyPortfolioNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPortfolioNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPortfolioNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
