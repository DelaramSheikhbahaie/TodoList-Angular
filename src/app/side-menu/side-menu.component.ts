import { Component, OnInit } from '@angular/core';
import { SenderService } from '../sender.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  
  inputListName:string = "";
  service :SenderService ;

  constructor() { }

  ngOnInit(): void {
  }
  addList(){
    // this.service.test = this.inputListName
  }
}
