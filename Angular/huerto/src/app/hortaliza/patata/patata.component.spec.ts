import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatataComponent } from './patata.component';

describe('PatataComponent', () => {
  let component: PatataComponent;
  let fixture: ComponentFixture<PatataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
