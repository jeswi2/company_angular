import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewleaveidComponent } from './viewleaveid.component';

describe('ViewleaveidComponent', () => {
  let component: ViewleaveidComponent;
  let fixture: ComponentFixture<ViewleaveidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewleaveidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewleaveidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
