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
  handleEdit(id){
    this.lists.map((list)=>{
      if(id === list._id) {
        this.changeStyleOnEdit(id , list)
        this.apiService.updateList(id , list);
      }
    })
  }
  changeStyleOnEdit(id , list){
    this.ListTitle = document.getElementById(`title-${id}`) as HTMLElement;
    this.ListTitleInput = document.getElementById(`title-${id}-input`) as HTMLElement;
    if(this.ListEditMode){
      this.ListTitle.style.display = "none"
      this.ListTitleInput.style.display = "flex"
      this.NameEditInput = list.title //to show current value in edit box
    }
    if(!this.ListEditMode){
      this.ListTitle.style.display = "flex"
      this.ListTitleInput.style.display = "none"
      list.title = this.NameEditInput  //to show updated value in list before refresh
      this.NameEditInput = ""
    }
  }
  switchToEditMode(id){
    if(!this.ListEditMode){ //edit only one item at the time
      this.ListEditMode = true;
      this.handleEdit(id)
    }
  }
  submitEdit(id){
      this.ListEditMode = false;
      this.handleEdit(id)
  }
  openList(list){
    this.service.nextListInfo(list)
  }

}
