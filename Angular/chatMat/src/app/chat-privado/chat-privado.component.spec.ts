import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatPrivadoComponent } from './chat-privado.component';

describe('ChatPrivadoComponent', () => {
  let component: ChatPrivadoComponent;
  let fixture: ComponentFixture<ChatPrivadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatPrivadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatPrivadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
