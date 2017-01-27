import {Node} from "./Node";

export class Section extends Node {
    public childs:Node[];// = [];
    childCount:number = 0;
    secId : number=0;

    constructor(id:number){
        super(id);
        this.type = "SECTION";
        this.childs = [];
        this.secId++;
    }
    public addChild(child:Node,index:number =-1)
        {
            this.childs.push(child);
            this.childCount++;
            child.parent = this;
            child.relationshipNumber = this.childCount;

        }
        public addChildAfter(child:Node,afternode:Node)
        {

            let index = this.childs.indexOf(afternode);
            this.childs.splice(index+1,0,child);
            this.childCount++;
            child.parent = this;
            // child.relationshipNumber = this.childCount;
        }

        public getChilds():Node[]
        {
            return this.childs;
        }
        public removeChild(node :Node)
        {
            let index:number = this.childs.indexOf(node);
            this.childs.splice(index,1);
        }
}