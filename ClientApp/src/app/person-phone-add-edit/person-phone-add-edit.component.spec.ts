import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonPhoneAddEditComponent } from './person-phone-add-edit.component';

describe('PersonPhoneAddEditComponent', () => {
  let component: PersonPhoneAddEditComponent;
  let fixture: ComponentFixture<PersonPhoneAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonPhoneAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonPhoneAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
