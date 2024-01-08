import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AromaticaComponent } from './aromatica.component';

describe('AromaticaComponent', () => {
  let component: AromaticaComponent;
  let fixture: ComponentFixture<AromaticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AromaticaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AromaticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
