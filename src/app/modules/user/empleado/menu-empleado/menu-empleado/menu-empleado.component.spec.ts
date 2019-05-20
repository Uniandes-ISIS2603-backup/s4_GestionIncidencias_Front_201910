import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEmpleadoComponent } from './menu-empleado.component';

describe('MenuEmpleadoComponent', () => {
  let component: MenuEmpleadoComponent;
  let fixture: ComponentFixture<MenuEmpleadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuEmpleadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
