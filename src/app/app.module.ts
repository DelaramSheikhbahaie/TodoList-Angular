import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodosComponent } from './main-page/todos/todos.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ListsComponent } from './side-menu/lists/lists.component';
import { MaterialModule } from './material/material.module';
import { CreateTodoComponent } from './main-page/create-todo/create-todo.component';
import { SenderService } from './services/sender.service';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    SideMenuComponent,
    MainPageComponent,
    ListsComponent,
    CreateTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule ,
    FormsModule ,
    MaterialModule,
    HttpClientModule
  ],
  providers: [SenderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
