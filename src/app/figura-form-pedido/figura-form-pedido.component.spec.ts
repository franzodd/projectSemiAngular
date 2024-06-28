import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiguraFormPedidoComponent } from './figura-form-pedido.component';

describe('FiguraFormPedidoComponent', () => {
  let component: FiguraFormPedidoComponent;
  let fixture: ComponentFixture<FiguraFormPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FiguraFormPedidoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiguraFormPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
