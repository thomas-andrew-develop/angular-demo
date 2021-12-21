import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveBlogComponent } from './save.component';

describe('SaveBlogComponent', () => {
  let component: SaveBlogComponent;
  let fixture: ComponentFixture<SaveBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
