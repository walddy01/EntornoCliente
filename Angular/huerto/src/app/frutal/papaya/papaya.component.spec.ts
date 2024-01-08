import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PapayaComponent } from './papaya.component';

describe('PapayaComponent', () => {
  let component: PapayaComponent;
  let fixture: ComponentFixture<PapayaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PapayaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PapayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
