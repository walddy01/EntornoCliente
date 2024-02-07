import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarMailComponent } from './enviar-mail.component';

describe('EnviarMailComponent', () => {
  let component: EnviarMailComponent;
  let fixture: ComponentFixture<EnviarMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviarMailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnviarMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
