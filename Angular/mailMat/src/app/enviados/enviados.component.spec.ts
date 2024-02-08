import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviadosComponent } from './enviados.component';

describe('EnviadosComponent', () => {
  let component: EnviadosComponent;
  let fixture: ComponentFixture<EnviadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnviadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
