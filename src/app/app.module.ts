import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {DndModule} from './ext_util/index'; 
//import {DndModule} from 'ng2-dnd';
import { AppComponent } from './app.component';
import { StepComponentComponent } from './step-component/step-component.component';
import { StepComponent } from './step/step.component';
import { SectionComponent } from './section/section.component';

@NgModule({
  declarations: [
    AppComponent,
    StepComponentComponent,
    StepComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DndModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
