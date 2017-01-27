import { Component } from '@angular/core';
import {Section} from "./dataModel/Section";
import {Step} from "./dataModel/Step";
import {Node} from "./dataModel/Node";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Guide page';
  data:Section; 
   listOne:Array<string> = ['Coffee','Orange Juice','Red Wine','Unhealty drink!','Water'];
  constructor(){
        this.createDummydata()
  }
  public createDummydata(){
    this.data = new Section(1);
    var csection = new Section (2);
    csection.addChild(new Step(3));
    csection.addChild(new Step(4));
      this.data.addChild(csection);
    this.data.addChild(new Step(1));
        this.data.addChild(new Step(2));
  }
  public addStep(){
    this.data.addChild(new Step(0));
  }
  public addSection(){
    this.data.addChild(new Section(0));
  }

  
  }
 
/*
@Component({
    selector: 'app',
    template: `
<h4>Simple sortable</h4>
<div class="row">
    <div class="col-sm-3">
        <div class="panel panel-success">
            <div class="panel-heading">
                Favorite drinks
            </div>
            <div class="panel-body">
                 
            </div>
        </div>
    </div>
    <div class="col-sm-6">
        <div class="panel panel-default">
            <div class="panel-body">
                My prefences:<br/>
                <span *ngFor="#item of listOne; #i = index">{{i + 1}}) {{item}}<br/></span>
            </div>
        </div>
    </div>
</div>`
})
export class AppComponent {
  constructor(){}
    listOne:Array<string> = ['Coffee','Orange Juice','Red Wine','Unhealty drink!','Water'];
}
*/

/*import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
<h4>Transfer custom data in Drag-and-Drop</h4>
<div class="row">
    <div class="col-sm-3">
        <div class="panel panel-success">
            <div class="panel-heading">Available to drag</div>
            <div class="panel-body">
                <div class="panel panel-default" dnd-draggable [dragEnabled]="true"
                    [dragData]="transferData">
                    <div class="panel-body">
                        <div>Drag Me</div>
                        <div>{{transferData | json}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-3">
        <div dnd-droppable class="panel panel-info"
            (onDropSuccess)="transferDataSuccess($event)">
            <div class="panel-heading">Place to drop (Items:{{receivedData.length}})</div>
            <div class="panel-body">
                <div [hidden]="!receivedData.length > 0"
                    *ngFor="let data of receivedData">{{data | json}}</div>
            </div>
        </div>
    </div>
</div>

` 
})
export class AppComponent { 

   transferData:Object = {id:1, msg: 'Hello'};
    receivedData:Array<any> = [];

     constructor() { }
 
    /**
     * The $event is a structure:
     * {
     *   dragData: any,
     *   mouseEvent: MouseEvent
     * }
     */
   /* transferDataSuccess($event) {
        this.receivedData.push($event.dragData);
    }

}*/