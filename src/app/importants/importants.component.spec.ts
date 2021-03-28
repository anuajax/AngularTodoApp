import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantsComponent } from './importants.component';

describe('ImportantsComponent', () => {
  let component: ImportantsComponent;
  let fixture: ComponentFixture<ImportantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
