import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatComponents } from './chat-components';

describe('ChatComponents', () => {
  let component: ChatComponents;
  let fixture: ComponentFixture<ChatComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
