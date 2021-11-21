import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateTodoComponent } from './main-page/create-todo/create-todo.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ListsComponent } from './side-menu/lists/lists.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'list/:id', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
