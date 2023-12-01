import { Component, Input, OnInit } from '@angular/core';
import { EtudiantEval } from '../models/etudiant-eval.model';
import { EtudiantEvalsService } from '../services/etudiant-evals.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-etudiant-eval-details',
  templateUrl: './etudiant-eval-details.component.html',
  styleUrls: ['./etudiant-eval-details.component.less']
})
export class EtudiantEvalDetailsComponent implements OnInit {
  @Input() etudiant!:EtudiantEval;

 
  constructor(private etudiantEvalsService:EtudiantEvalsService,private route: ActivatedRoute){
    
  }
 
  ngOnInit(){
    const etudId=+this.route.snapshot.params['id'];
    this.etudiant=this.etudiantEvalsService.findEtudiantEvalById(etudId);
  }
 

  onClick1(){
    this.etudiantEvalsService.modifBonusEtudiantEvalByID(this.etudiant.id,1)
  }
  onClick2(){
    this.etudiantEvalsService.modifBonusEtudiantEvalByID(this.etudiant.id,0)
  }
  
}
