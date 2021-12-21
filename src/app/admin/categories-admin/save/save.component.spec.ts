import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveCategoriesComponent } from './save.component';

describe('SaveComponent', () => {
  let component: SaveCategoriesComponent;
  let fixture: ComponentFixture<SaveCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
