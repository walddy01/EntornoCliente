import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlvaroComponent } from './alvaro.component';

describe('AlvaroComponent', () => {
  let component: AlvaroComponent;
  let fixture: ComponentFixture<AlvaroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlvaroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlvaroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
