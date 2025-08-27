import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inputmessage } from './inputmessage';

describe('Inputmessage', () => {
  let component: Inputmessage;
  let fixture: ComponentFixture<Inputmessage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inputmessage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inputmessage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
