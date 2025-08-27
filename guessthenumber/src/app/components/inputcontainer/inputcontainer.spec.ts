import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inputcontainer } from './inputcontainer';

describe('Inputcontainer', () => {
  let component: Inputcontainer;
  let fixture: ComponentFixture<Inputcontainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inputcontainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inputcontainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
