import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCep } from './component-cep';

describe('ComponentCep', () => {
  let component: ComponentCep;
  let fixture: ComponentFixture<ComponentCep>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentCep]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentCep);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
