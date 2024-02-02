import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatEComponent } from './chat-e.component';

describe('ChatEComponent', () => {
  let component: ChatEComponent;
  let fixture: ComponentFixture<ChatEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
