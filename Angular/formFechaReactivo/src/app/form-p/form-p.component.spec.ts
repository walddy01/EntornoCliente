import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPComponent } from './form-p.component';

describe('FormPComponent', () => {
  let component: FormPComponent;
  let fixture: ComponentFixture<FormPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
