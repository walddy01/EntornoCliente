import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwecComponent } from './dwec.component';

describe('DwecComponent', () => {
  let component: DwecComponent;
  let fixture: ComponentFixture<DwecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DwecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
