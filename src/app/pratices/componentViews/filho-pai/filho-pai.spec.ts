import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilhoPai } from './filho-pai';

describe('FilhoPai', () => {
  let component: FilhoPai;
  let fixture: ComponentFixture<FilhoPai>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilhoPai]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilhoPai);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
