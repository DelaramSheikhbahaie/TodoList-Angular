import { NgModule } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {MatListModule} from '@angular/material/list';

const materialComponent =[
  MatButtonModule ,
  MatGridListModule ,
  MatSidenavModule ,
  MatFormFieldModule ,
  MatInputModule ,
  MatListModule
]

@NgModule({
  imports: [materialComponent],
  exports:[materialComponent]
})
export class MaterialModule { }
