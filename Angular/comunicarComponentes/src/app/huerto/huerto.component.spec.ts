import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuertoComponent } from './huerto.component';

describe('HuertoComponent', () => {
  let component: HuertoComponent;
  let fixture: ComponentFixture<HuertoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuertoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HuertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
