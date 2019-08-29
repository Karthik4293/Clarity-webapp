import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenGrokComponent } from './open-grok.component';

describe('OpenGrokComponent', () => {
  let component: OpenGrokComponent;
  let fixture: ComponentFixture<OpenGrokComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenGrokComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenGrokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
