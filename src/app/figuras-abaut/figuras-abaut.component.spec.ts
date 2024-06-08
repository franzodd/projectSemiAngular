import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigurasAbautComponent } from './figuras-abaut.component';

describe('FigurasAbautComponent', () => {
  let component: FigurasAbautComponent;
  let fixture: ComponentFixture<FigurasAbautComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FigurasAbautComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FigurasAbautComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
