import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantEvalDetailsComponent } from './etudiant-eval-details.component';

describe('EtudiantEvalDetailsComponent', () => {
  let component: EtudiantEvalDetailsComponent;
  let fixture: ComponentFixture<EtudiantEvalDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtudiantEvalDetailsComponent]
    });
    fixture = TestBed.createComponent(EtudiantEvalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
