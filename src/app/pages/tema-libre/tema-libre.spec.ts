import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemaLibre } from './tema-libre';

describe('TemaLibre', () => {
  let component: TemaLibre;
  let fixture: ComponentFixture<TemaLibre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemaLibre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemaLibre);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
