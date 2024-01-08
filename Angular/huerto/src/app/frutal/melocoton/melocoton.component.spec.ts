import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MelocotonComponent } from './melocoton.component';

describe('MelocotonComponent', () => {
  let component: MelocotonComponent;
  let fixture: ComponentFixture<MelocotonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MelocotonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MelocotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
