import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantEvalListComponent } from './etudiant-eval-list.component';

describe('EtudiantEvalListComponent', () => {
  let component: EtudiantEvalListComponent;
  let fixture: ComponentFixture<EtudiantEvalListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtudiantEvalListComponent]
    });
    fixture = TestBed.createComponent(EtudiantEvalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
