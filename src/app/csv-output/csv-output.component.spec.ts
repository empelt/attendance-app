import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvOutputComponent } from './csv-output.component';

describe('CsvOutputComponent', () => {
  let component: CsvOutputComponent;
  let fixture: ComponentFixture<CsvOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsvOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
