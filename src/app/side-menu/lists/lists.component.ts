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
  ListTitleInput: HTMLElement;
  ListTitle: HTMLElement;
  NameEditInput:string;
  ListEditMode:boolean = false;

  constructor(private service:SenderService , private apiService:TasksDataService) { }

  ngOnInit(): void {
    this.service.sharedLists.subscribe(list => this.lists = list)
  }
  deleteList (id){
    this.apiService.deleteList(id)
  }
  changeStyleOnEdit(id){
    this.ListTitle = document.getElementById(`title-${id}`) as HTMLElement;
    this.ListTitleInput = document.getElementById(`title-${id}-input`) as HTMLElement;
    if(this.ListEditMode){
      this.ListTitle.style.display = "none"
      this.ListTitleInput.style.display = "flex"
    }
    if(!this.ListEditMode){
      this.ListTitle.style.display = "flex"
      this.ListTitleInput.style.display = "none"
    }
  }
  editList(id){
    this.ListEditMode =!this.ListEditMode
    this.lists.map((list)=>{
      if(id === list._id) {
        this.changeStyleOnEdit(id);
        list.title = this.NameEditInput
      }
    })
  }
  openList(id , name:string){
    this.service.nextListInfo(id , name)
  }

}
