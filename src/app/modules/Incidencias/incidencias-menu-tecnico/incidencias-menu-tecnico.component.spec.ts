import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciasMenuTecnicoComponent } from './incidencias-menu-tecnico.component';

describe('IncidenciasMenuTecnicoComponent', () => {
  let component: IncidenciasMenuTecnicoComponent;
  let fixture: ComponentFixture<IncidenciasMenuTecnicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidenciasMenuTecnicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidenciasMenuTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
