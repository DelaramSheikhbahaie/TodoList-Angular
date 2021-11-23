import { Component, OnInit } from '@angular/core';
import { SenderService } from 'src/app/services/sender.service';
import { TasksDataService } from 'src/app/services/tasks-data.service';
import { List } from '../../models/lists';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
})
export class ListsComponent implements OnInit {
  lists: List[];
  compeletedListId: any;
  ListTitleInput: HTMLElement;
  ListTitle: HTMLElement;
  NameEditInput: string;
  ListEditMode: boolean = false;
  constructor(
    private service: SenderService,
    private apiService: TasksDataService
  ) {}

  ngOnInit(): void {
    this.compeletedListId = this.service.CompeletedListID;
    this.service.sharedLists.subscribe((list) => (this.lists = list));
  }

  deleteList(id) {
    this.apiService.deleteList(id);
  }

  switchToEditMode(list) {
    if (!this.ListEditMode) {
      //edit only one item at the time
      this.ListEditMode = true;
      this.changeStyleOnEdit(list._id, list);
    }
  }

  submitEdit(list) {
    this.ListEditMode = false;
    this.changeStyleOnEdit(list._id, list);
    this.apiService.updateList(list._id, list);
  }

  cancleEdit(list) {
    this.ListEditMode = false;
    this.changeStyleOnEdit(list._id, list);
  }

  changeStyleOnEdit(id, list) {
    this.ListTitle = document.getElementById(`title-${id}`) as HTMLElement;
    this.ListTitleInput = document.getElementById(
      `title-${id}-input`
    ) as HTMLElement;
    if (this.ListEditMode) {
      this.ListTitle.style.display = 'none';
      this.ListTitleInput.style.display = 'flex';
      this.NameEditInput = list.title; //to show current value in edit box
    }
    if (!this.ListEditMode) {
      this.ListTitle.style.display = 'flex';
      this.ListTitleInput.style.display = 'none';
      list.title = this.NameEditInput; //to show updated value in list before refresh
      this.NameEditInput = '';
    }
  }
  
  openList(list) {
    this.service.nextListInfo(list);
  }
}
