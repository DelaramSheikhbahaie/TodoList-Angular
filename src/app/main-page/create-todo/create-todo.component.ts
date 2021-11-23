import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TasksDataService } from 'src/app/services/tasks-data.service';
import { SenderService } from '../../services/sender.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css'],
})
export class CreateTodoComponent implements OnInit {
  contentInput: string;
  dateInput: string;
  descriptionInput: string;
  isDaily: boolean;
  listId;
  listName: string;
  taskData: object;
  input = new FormControl('', [Validators.required]);

  constructor(
    private service: SenderService,
    private apiService: TasksDataService,
    private route: ActivatedRoute
  ) {}

  get listID(): string {
    return this.listId;
  }
  set listID(value: string) {
    this.listId = value;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => (this.listID = params.get('id')));
    this.service.sharedListName.subscribe((name) => (this.listName = name));
  }

  getErrorMessage() {
    return this.input.hasError('required') ? 'You must enter a value' : '';
  }

  addTodo() {
    if (
      this.contentInput !== '' &&
      this.dateInput !== '' &&
      this.descriptionInput !== ''
    ) {
      this.taskData = {
        title: this.contentInput,
        date: this.dateInput,
        description: this.descriptionInput,
        done: false,
        list: this.listId,
      };
      this.apiService.insertTask(this.taskData);
      this.contentInput = '';
      this.dateInput = '';
      this.descriptionInput = '';
    }
  }
}
