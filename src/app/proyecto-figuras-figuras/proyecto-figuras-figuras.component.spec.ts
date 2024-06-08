import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoFigurasFigurasComponent } from './proyecto-figuras-figuras.component';

describe('ProyectoFigurasFigurasComponent', () => {
  let component: ProyectoFigurasFigurasComponent;
  let fixture: ComponentFixture<ProyectoFigurasFigurasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProyectoFigurasFigurasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProyectoFigurasFigurasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
