import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import { TodosComponent } from './main-page/todos/todos.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ListsComponent } from './side-menu/lists/lists.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    SideMenuComponent,
    MainPageComponent,
    ListsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule ,
    MatButtonModule ,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
