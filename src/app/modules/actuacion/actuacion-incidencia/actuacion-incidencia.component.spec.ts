import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuacionIncidenciaComponent } from './actuacion-incidencia.component';

describe('ActuacionIncidenciaComponent', () => {
  let component: ActuacionIncidenciaComponent;
  let fixture: ComponentFixture<ActuacionIncidenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActuacionIncidenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActuacionIncidenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
