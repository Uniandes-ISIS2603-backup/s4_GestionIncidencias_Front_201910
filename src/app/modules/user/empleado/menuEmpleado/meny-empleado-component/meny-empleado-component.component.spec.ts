import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenyEmpleadoComponentComponent } from './meny-empleado-component.component';

describe('MenyEmpleadoComponentComponent', () => {
  let component: MenyEmpleadoComponentComponent;
  let fixture: ComponentFixture<MenyEmpleadoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenyEmpleadoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenyEmpleadoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
