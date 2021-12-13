import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLatestPostComponent } from './home-latest-post.component';

describe('HomeLatestPostComponent', () => {
  let component: HomeLatestPostComponent;
  let fixture: ComponentFixture<HomeLatestPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLatestPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLatestPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
