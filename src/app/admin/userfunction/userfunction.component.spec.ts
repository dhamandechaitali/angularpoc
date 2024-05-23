import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserfunctionComponent } from './userfunction.component';

describe('UserfunctionComponent', () => {
  let component: UserfunctionComponent;
  let fixture: ComponentFixture<UserfunctionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserfunctionComponent]
    });
    fixture = TestBed.createComponent(UserfunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
