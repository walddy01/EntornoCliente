import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdComponent } from './bd.component';

describe('BdComponent', () => {
  let component: BdComponent;
  let fixture: ComponentFixture<BdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
