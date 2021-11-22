import { NgModule } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const materialComponent =[
  MatButtonModule ,
  MatGridListModule ,
  MatSidenavModule ,
  MatFormFieldModule ,
  MatInputModule ,
  MatListModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule ,
  MatTooltipModule,
  MatSnackBarModule
]

@NgModule({
  imports: [materialComponent],
  exports:[materialComponent]
})
export class MaterialModule { }
