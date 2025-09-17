import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateListUser } from './create-list-user';

describe('CreateListUser', () => {
  let component: CreateListUser;
  let fixture: ComponentFixture<CreateListUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateListUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateListUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
