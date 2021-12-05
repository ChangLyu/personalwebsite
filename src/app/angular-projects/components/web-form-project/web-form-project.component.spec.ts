import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebFormProjectComponent } from './web-form-project.component';

describe('WebFormProjectComponent', () => {
  let component: WebFormProjectComponent;
  let fixture: ComponentFixture<WebFormProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebFormProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebFormProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
