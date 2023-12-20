import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColifrorComponent } from './colifror.component';

describe('ColifrorComponent', () => {
  let component: ColifrorComponent;
  let fixture: ComponentFixture<ColifrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColifrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColifrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
