import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieMoviedetailsComponent } from './movie-moviedetails.component';

describe('MovieMoviedetailsComponent', () => {
  let component: MovieMoviedetailsComponent;
  let fixture: ComponentFixture<MovieMoviedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieMoviedetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieMoviedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
