import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMovesComponent } from './single-moves.component';

describe('SingleMovesComponent', () => {
  let component: SingleMovesComponent;
  let fixture: ComponentFixture<SingleMovesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleMovesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleMovesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
