import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HortalizaComponent } from './hortaliza.component';

describe('HortalizaComponent', () => {
  let component: HortalizaComponent;
  let fixture: ComponentFixture<HortalizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HortalizaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HortalizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
