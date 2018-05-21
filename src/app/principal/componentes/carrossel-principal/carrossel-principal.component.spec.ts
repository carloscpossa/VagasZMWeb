import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosselPrincipalComponent } from './carrossel-principal.component';

describe('CarrosselPrincipalComponent', () => {
  let component: CarrosselPrincipalComponent;
  let fixture: ComponentFixture<CarrosselPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrosselPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrosselPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
