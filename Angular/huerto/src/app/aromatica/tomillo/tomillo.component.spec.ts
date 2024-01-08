import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TomilloComponent } from './tomillo.component';

describe('TomilloComponent', () => {
  let component: TomilloComponent;
  let fixture: ComponentFixture<TomilloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TomilloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TomilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
