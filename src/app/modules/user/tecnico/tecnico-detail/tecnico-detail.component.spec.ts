import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicoDetailComponent } from './tecnico-detail.component';

describe('TecnicoDetailComponent', () => {
  let component: TecnicoDetailComponent;
  let fixture: ComponentFixture<TecnicoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecnicoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnicoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
