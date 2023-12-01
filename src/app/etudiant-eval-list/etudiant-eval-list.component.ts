import { Component } from '@angular/core';
import { EtudiantEval } from '../models/etudiant-eval.model';
import { EtudiantEvalsService } from '../services/etudiant-evals.service';

@Component({
  selector: 'app-etudiant-eval-list',
  templateUrl: './etudiant-eval-list.component.html',
  styleUrls: ['./etudiant-eval-list.component.less']
})
export class EtudiantEvalListComponent {
  title = 'stageproject';
  student1!:EtudiantEval;
  student2!:EtudiantEval;
  students!:EtudiantEval[];
  constructor(private etudintEvalsService:EtudiantEvalsService){}
  ngOnInit(){
    this.students=this.etudintEvalsService.etudiants
  }
  
    

}
