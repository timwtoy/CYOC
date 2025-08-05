import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieBuilder } from './cookie-builder';

describe('CookieBuilder', () => {
  let component: CookieBuilder;
  let fixture: ComponentFixture<CookieBuilder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookieBuilder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookieBuilder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
