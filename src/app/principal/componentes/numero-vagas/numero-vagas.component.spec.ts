import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeroVagasComponent } from './numero-vagas.component';

describe('NumeroVagasComponent', () => {
  let component: NumeroVagasComponent;
  let fixture: ComponentFixture<NumeroVagasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumeroVagasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumeroVagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
