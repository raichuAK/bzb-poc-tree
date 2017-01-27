import {Node} from "./Node";

export class Step extends Node {
    stepId : number=0;
public step_data:any = {};
    constructor(id:number){
        super(id);
        this.type = "STEP";
        this.stepId++;
    }
}