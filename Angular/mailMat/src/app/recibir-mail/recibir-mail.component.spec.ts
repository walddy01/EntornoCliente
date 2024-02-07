import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecibirMailComponent } from './recibir-mail.component';

describe('RecibirMailComponent', () => {
  let component: RecibirMailComponent;
  let fixture: ComponentFixture<RecibirMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecibirMailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecibirMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
