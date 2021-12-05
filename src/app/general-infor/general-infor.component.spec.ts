import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInforComponent } from './general-infor.component';

describe('GeneralInforComponent', () => {
  let component: GeneralInforComponent;
  let fixture: ComponentFixture<GeneralInforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralInforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralInforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
