import { Component } from '@angular/core';
import { EtudiantEval } from './models/etudiant-eval.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'stageproject';
  student1!:EtudiantEval;
  student2!:EtudiantEval;
  students!:EtudiantEval[];

  ngOnInit(){
    this.students=[
      new EtudiantEval( 0,'ahmed','gt tst','brillant',6,new Date(2021,9,2)),
        new EtudiantEval( 1,'abir','gt tst','moyenne',2,new Date(2021,9,5))
    ];
    
    
    
    
  }

}
