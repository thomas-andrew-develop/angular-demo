import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailFeaturedComponent } from './blog-detail-featured.component';

describe('BlogDetailFeaturedComponent', () => {
  let component: BlogDetailFeaturedComponent;
  let fixture: ComponentFixture<BlogDetailFeaturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogDetailFeaturedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDetailFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
