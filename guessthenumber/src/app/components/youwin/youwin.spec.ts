import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Youwin } from './youwin';

describe('Youwin', () => {
  let component: Youwin;
  let fixture: ComponentFixture<Youwin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Youwin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Youwin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
