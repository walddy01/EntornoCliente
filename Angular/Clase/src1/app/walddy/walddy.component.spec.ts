import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalddyComponent } from './walddy.component';

describe('WalddyComponent', () => {
  let component: WalddyComponent;
  let fixture: ComponentFixture<WalddyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalddyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WalddyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
