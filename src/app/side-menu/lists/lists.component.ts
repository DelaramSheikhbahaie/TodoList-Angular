import { Component, OnInit } from '@angular/core';
import { SenderService } from 'src/app/services/sender.service';
import { TasksDataService } from 'src/app/services/tasks-data.service';
import {List} from '../../models/lists'
@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  lists:List[];

  constructor(private service:SenderService , private apiService:TasksDataService) { }

  ngOnInit(): void {
    this.service.sharedLists.subscribe(list => this.lists = list)
  }
  deleteList (id:number){
    // this.lists = this.lists.filter((list , index)=> index !== id)
    this.apiService.deleteList(id)
  }
  // editName (name:string){

  // }
  openList(id:number , name:string){
    this.service.nextListInfo(id , name)
  }

}
