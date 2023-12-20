import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaulComponent } from './raul.component';

describe('RaulComponent', () => {
  let component: RaulComponent;
  let fixture: ComponentFixture<RaulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
