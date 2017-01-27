import { Component, OnInit ,Input} from '@angular/core';
import {Step} from "../dataModel/Step";
import {Section} from "../dataModel/Section";
import {DraggableComponent} from "../ext_util/draggable.component";
import {DroppableComponent} from "../ext_util/droppable.component";

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {

   /*transferData:Object = {id:1, msg: 'Hello'};
    receivedData:Array<any> = [];

    // constructor() { }
 
    *
     * The $event is a structure:
     * {
     *   dragData: any,
     *   mouseEvent: MouseEvent
     * }
     
     transferDataSuccess($event) {
        this.receivedData.push($event.dragData);
    }*/

  dragComp(){
        //ev.dataTransfer.setData("text", ev.target.id);
        console.log('drag of step');
    }

  _dataModel:Step
  @Input()
  set dataModel(data:Step)
  {
    this._dataModel = data;
  }
  get dataModel():Step{
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
  /* public  dragComp(ev: DragEvent) : void{
        //ev.dataTransfer.setData("text", ev.target.id);
        console.log('drag of step'+ev);
    }
*/

  

   public drop(ev: DragEvent) : void{
      ev.preventDefault();
     /* var data = ev.dataTransfer.getData("text");
      ev.target.appendChild(document.getElementById(data));*/
    }


}
