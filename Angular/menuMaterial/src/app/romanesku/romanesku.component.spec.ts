import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomaneskuComponent } from './romanesku.component';

describe('RomaneskuComponent', () => {
  let component: RomaneskuComponent;
  let fixture: ComponentFixture<RomaneskuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RomaneskuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RomaneskuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
