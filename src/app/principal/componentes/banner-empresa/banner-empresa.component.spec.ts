import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerEmpresaComponent } from './banner-empresa.component';

describe('BannerEmpresaComponent', () => {
  let component: BannerEmpresaComponent;
  let fixture: ComponentFixture<BannerEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
