import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeListBlogComponent } from './home-list-blog.component';

describe('HomeListBlogComponent', () => {
  let component: HomeListBlogComponent;
  let fixture: ComponentFixture<HomeListBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeListBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeListBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
