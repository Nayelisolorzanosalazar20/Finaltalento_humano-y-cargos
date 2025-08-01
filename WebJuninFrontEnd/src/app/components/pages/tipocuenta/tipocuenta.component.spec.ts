import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipocuentaComponent } from './tipocuenta.component';

describe('TipocuentaComponent', () => {
  let component: TipocuentaComponent;
  let fixture: ComponentFixture<TipocuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipocuentaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipocuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});