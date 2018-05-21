import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalEmpresaComponent } from './principal-empresa.component';

describe('PrincipalEmpresaComponent', () => {
  let component: PrincipalEmpresaComponent;
  let fixture: ComponentFixture<PrincipalEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
