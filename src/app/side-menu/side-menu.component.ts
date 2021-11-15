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
    this.service.test ="side menu"
  }
  addList(){
    console.log(this)
  }
}
