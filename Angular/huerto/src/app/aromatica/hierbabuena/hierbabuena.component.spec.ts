import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HierbabuenaComponent } from './hierbabuena.component';

describe('HierbabuenaComponent', () => {
  let component: HierbabuenaComponent;
  let fixture: ComponentFixture<HierbabuenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HierbabuenaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HierbabuenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
