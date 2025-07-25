import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoComponent } from './cargos.component';

describe('CargoComponent', () => {
  let component: CargoComponent;
  let fixture: ComponentFixture<CargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CargoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
