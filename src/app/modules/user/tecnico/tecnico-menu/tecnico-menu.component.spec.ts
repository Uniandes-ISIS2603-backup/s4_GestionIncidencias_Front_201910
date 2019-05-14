import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicoMenuComponent } from './tecnico-menu.component';

describe('TecnicoMenuComponent', () => {
  let component: TecnicoMenuComponent;
  let fixture: ComponentFixture<TecnicoMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecnicoMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnicoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
