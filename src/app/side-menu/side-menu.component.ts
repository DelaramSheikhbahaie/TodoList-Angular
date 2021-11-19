import { Component, OnInit } from '@angular/core';
import { SenderService } from '../services/sender.service';
import { TasksDataService } from '../services/tasks-data.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  
  inputListName:string;
  allLists:[]

  constructor(private service : SenderService , private apiService:TasksDataService) { }

  ngOnInit(): void {
    // this.allLists = this.apiService.getAllLists()
    // this.service.updateList(this.allLists)
  }
  addList(){
    if(this.inputListName !== ""){
      this.service.updateList({title:this.inputListName , date:Date.now() , isMain:false})
      this.inputListName = "";
    }
    
  }
}
