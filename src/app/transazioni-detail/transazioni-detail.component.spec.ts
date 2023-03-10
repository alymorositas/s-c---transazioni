import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransazioniDetailComponent } from './transazioni-detail.component';

describe('TransazioniDetailComponent', () => {
  let component: TransazioniDetailComponent;
  let fixture: ComponentFixture<TransazioniDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransazioniDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransazioniDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
