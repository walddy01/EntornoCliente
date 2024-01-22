import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrutalComponent } from './frutal.component';

describe('FrutalComponent', () => {
  let component: FrutalComponent;
  let fixture: ComponentFixture<FrutalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrutalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrutalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
