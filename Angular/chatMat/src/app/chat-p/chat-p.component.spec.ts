import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatPComponent } from './chat-p.component';

describe('ChatPComponent', () => {
  let component: ChatPComponent;
  let fixture: ComponentFixture<ChatPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
