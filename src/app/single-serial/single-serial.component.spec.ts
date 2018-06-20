import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSerialComponent } from './single-serial.component';

describe('SingleSerialComponent', () => {
  let component: SingleSerialComponent;
  let fixture: ComponentFixture<SingleSerialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleSerialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSerialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
