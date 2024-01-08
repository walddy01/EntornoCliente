import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorComponent } from './sor.component';

describe('SorComponent', () => {
  let component: SorComponent;
  let fixture: ComponentFixture<SorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
