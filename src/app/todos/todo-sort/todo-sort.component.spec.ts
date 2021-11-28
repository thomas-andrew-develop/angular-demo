import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoSortComponent } from './todo-sort.component';

describe('TodoSortComponent', () => {
  let component: TodoSortComponent;
  let fixture: ComponentFixture<TodoSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoSortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
