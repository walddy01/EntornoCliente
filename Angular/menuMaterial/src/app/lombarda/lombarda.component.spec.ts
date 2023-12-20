import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LombardaComponent } from './lombarda.component';

describe('LombardaComponent', () => {
  let component: LombardaComponent;
  let fixture: ComponentFixture<LombardaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LombardaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LombardaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
