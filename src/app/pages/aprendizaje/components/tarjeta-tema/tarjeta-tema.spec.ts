import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaTema } from './tarjeta-tema';

describe('TarjetaTema', () => {
  let component: TarjetaTema;
  let fixture: ComponentFixture<TarjetaTema>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaTema]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaTema);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
