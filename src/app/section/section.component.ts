import { Component, OnInit,Input,Output } from '@angular/core';
import {StepComponent} from "../step/step.component";
import {Section} from "../dataModel/Section";
import {Step} from "../dataModel/Step";
import {Node} from "../dataModel/Node";

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

    dragComp(){
        //ev.dataTransfer.setData("text", ev.target.id);
        console.log('drag of step');
    }
  public nodes:Node[];
_dataModel:Section
  @Input()
  set dataModel(data:Section)
  {
    this._dataModel = data;
  }
  get dataModel():Section{
    return this._dataModel;
  }

  constructor() { }

  ngOnInit() {
  }
    public delete()
    {
      //should be through action and reducers

     this.dataModel.parent != undefined?(this.dataModel.parent as Section).removeChild(this.dataModel): console.log("cannot delete root");

      
    }



  /*public dragComp(ev: DragEvent) : void{
   // ev.dataTransfer.setData("text", ev.target.id);
   console.log('drag of section '+ev);
  }*/

  drop(ev: DragEvent) : void{
      ev.preventDefault();
      /*//var data = ev.dataTransfer.getData("text");
      ev.target.appendChild(document.getElementById(data));*/
  }
  public addStep(){ 
    this.dataModel.addChild(new Step(0));
  }
  public addSection(){
    this.dataModel.addChild(new Section(0));
  }
    public addStepAfter(node:Node){
    this.dataModel.addChildAfter(new Step(0),node);
  }
  public addSectionAfter(node:Node){
    this.dataModel.addChildAfter(new Section(0),node);
  }

}
