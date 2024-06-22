import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiguraContactoComponent } from './figura-contacto.component';

describe('FiguraContactoComponent', () => {
  let component: FiguraContactoComponent;
  let fixture: ComponentFixture<FiguraContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FiguraContactoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiguraContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
