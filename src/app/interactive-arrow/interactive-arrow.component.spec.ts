import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveArrowComponent } from './interactive-arrow.component';

describe('InteractiveArrowComponent', () => {
  let component: InteractiveArrowComponent;
  let fixture: ComponentFixture<InteractiveArrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractiveArrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractiveArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
