import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TomateComponent } from './tomate.component';

describe('TomateComponent', () => {
  let component: TomateComponent;
  let fixture: ComponentFixture<TomateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TomateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TomateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
