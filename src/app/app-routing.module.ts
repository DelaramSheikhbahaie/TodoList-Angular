import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

var mainListId = '619bcdef2888490b5867bcbe';
const routes: Routes = [
  { path: '', redirectTo: `/list/${mainListId}`, pathMatch: 'full' },
  { path: '**', redirectTo: `/list/${mainListId}`, pathMatch: 'full' },
  { path: 'list/:id', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
