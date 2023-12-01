import { Injectable } from "@angular/core";
import { EtudiantEval } from "../models/etudiant-eval.model";

@Injectable({
    providedIn:'root'
}) 
export class EtudiantEvalsService{
    etudiants:EtudiantEval[]=[
        new EtudiantEval(0, 'ahmed','gt tst','brillant',6,new Date(2021,9,2)),
        new EtudiantEval(1, 'abir','gt tst','moyenne',2,new Date(2021,9,5))
    ];
    getAllEtudiantEvals():EtudiantEval[]{
        return this.etudiants;
    }
    findEtudiantEvalById(EtEvId:number):EtudiantEval{
        const EtEv=this.etudiants.find(Element=>Element.id===EtEvId);
        if(EtEv){
            return EtEv;
        }else {
            throw new Error ('NOt Found');
        }
    }
    addBonusEtudiantEval(EtEvId:number):void{
        const EtEv=this.findEtudiantEvalById(EtEvId);
        if(EtEv){
            EtEv.bonus++;
        }else {
            throw new Error ('NOt Found');
        }
    }
    modifBonusEtudiantEvalByID(EtEvId:number,action: 0| 1):void{
        const EtEv=this.findEtudiantEvalById(EtEvId);
        if(EtEv){
            if(action===1)
                EtEv.bonus++;
            else
                EtEv.bonus--;
        }else {
            throw new Error ('NOt Found');
        }
    }

}
