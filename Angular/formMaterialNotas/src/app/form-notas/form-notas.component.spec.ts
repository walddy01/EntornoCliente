import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNotasComponent } from './form-notas.component';

describe('FormNotasComponent', () => {
  let component: FormNotasComponent;
  let fixture: ComponentFixture<FormNotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNotasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
