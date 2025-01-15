import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMoviedetailsComponent } from './home-moviedetails.component';

describe('HomeMoviedetailsComponent', () => {
  let component: HomeMoviedetailsComponent;
  let fixture: ComponentFixture<HomeMoviedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeMoviedetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeMoviedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
