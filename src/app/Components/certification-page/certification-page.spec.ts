import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationPage } from './certification-page';

describe('CertificationPage', () => {
  let component: CertificationPage;
  let fixture: ComponentFixture<CertificationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificationPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
