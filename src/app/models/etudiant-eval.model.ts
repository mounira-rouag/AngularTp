export class EtudiantEval{
    id!:number;
    prenom!:string;
    classe!:string;
    comment!:string;
    bonus!:number;
    inscriDate!:Date;
   
    experienceAngular?:string;
 constructor(id:number, prenom:string,classe:string,comment:string,bonus:number,inscriDate:Date, experienceAngular?:string){
    this.id=id;
    this.prenom=prenom;
    this.classe=classe;
    this.bonus=bonus;
    this.comment=comment;
    this.inscriDate=inscriDate;
   
    this.experienceAngular=experienceAngular;
    
}

}