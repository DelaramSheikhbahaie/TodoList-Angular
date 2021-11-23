import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SenderService } from '../services/sender.service';
import { TasksDataService } from '../services/tasks-data.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
})

export class SideMenuComponent implements OnInit {
  inputListName: string;
  allLists: [];
  listData: {};
  input = new FormControl('', [Validators.required]);

  constructor(
    private service: SenderService,
    private apiService: TasksDataService
  ) {}

  ngOnInit(): void {
    this.apiService.getAllLists();
  }

  getErrorMessage() {
    return this.input.hasError('required') ? 'You must enter a value' : '';
  }

  addList() {
    if (this.inputListName !== '') {
      this.listData = {
        title: this.inputListName,
        date: Date.now(),
        isMain: false,
      };
      this.apiService.insertList(this.listData);
      this.inputListName = '';
    }
  }
}
