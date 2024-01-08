import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwesComponent } from './dwes.component';

describe('DwesComponent', () => {
  let component: DwesComponent;
  let fixture: ComponentFixture<DwesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DwesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
