import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSerialsComponent } from './all-serials.component';

describe('AllSerialsComponent', () => {
  let component: AllSerialsComponent;
  let fixture: ComponentFixture<AllSerialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSerialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSerialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
