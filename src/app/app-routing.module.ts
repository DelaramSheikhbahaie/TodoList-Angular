import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ListsComponent } from './side-menu/lists/lists.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

const routes: Routes = [
  {path:"" , component:MainPageComponent},
  {path:"create-todo" , component:CreateTodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
