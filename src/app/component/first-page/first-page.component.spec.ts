import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPageComponent } from './first-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

describe('FirstPageComponent', () => {
  let component: FirstPageComponent;
  let fixture: ComponentFixture<FirstPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstPageComponent ]
    })
    .compileComponents();
  });

  


  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
