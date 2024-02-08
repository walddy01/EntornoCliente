import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecibirNoLeidoMailComponent } from './recibir-no-leido-mail.component';

describe('RecibirNoLeidoMailComponent', () => {
  let component: RecibirNoLeidoMailComponent;
  let fixture: ComponentFixture<RecibirNoLeidoMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecibirNoLeidoMailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecibirNoLeidoMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
