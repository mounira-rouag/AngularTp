import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantEvalComponent } from './etudiant-eval.component';

describe('EtudiantEvalComponent', () => {
  let component: EtudiantEvalComponent;
  let fixture: ComponentFixture<EtudiantEvalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtudiantEvalComponent]
    });
    fixture = TestBed.createComponent(EtudiantEvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
