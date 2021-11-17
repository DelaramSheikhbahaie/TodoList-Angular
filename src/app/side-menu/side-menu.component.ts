import { Component, OnInit } from '@angular/core';
import { SenderService } from '../sender.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  
  inputListName:string;

  constructor(private service : SenderService) { }

  ngOnInit(): void {
  }
  addList(){
    if(this.inputListName !== ""){
      this.service.updateList({name:this.inputListName})
      this.inputListName = "";
    }
    
  }
}
