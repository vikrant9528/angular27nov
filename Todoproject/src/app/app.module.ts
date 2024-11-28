import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, dialogbox } from './app.component';
import { TodoitemsComponent } from './todoitems/todoitems.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
 


@NgModule({ 
  declarations: [
    AppComponent,
    TodoitemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  entryComponents: [dialogbox], 
  providers: [],
  bootstrap: [AppComponent]//which component is loaded first
})
export class AppModule { }
