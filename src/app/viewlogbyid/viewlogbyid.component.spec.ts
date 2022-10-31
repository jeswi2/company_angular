import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlogbyidComponent } from './viewlogbyid.component';

describe('ViewlogbyidComponent', () => {
  let component: ViewlogbyidComponent;
  let fixture: ComponentFixture<ViewlogbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewlogbyidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewlogbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
