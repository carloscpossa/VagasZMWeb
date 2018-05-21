import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicarVagaComponent } from './publicar-vaga.component';

describe('PublicarVagaComponent', () => {
  let component: PublicarVagaComponent;
  let fixture: ComponentFixture<PublicarVagaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicarVagaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicarVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
