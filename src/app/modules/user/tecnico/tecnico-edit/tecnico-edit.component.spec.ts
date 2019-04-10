import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicoEditComponent } from './tecnico-edit.component';

describe('TecnicoEditComponent', () => {
  let component: TecnicoEditComponent;
  let fixture: ComponentFixture<TecnicoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecnicoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnicoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
