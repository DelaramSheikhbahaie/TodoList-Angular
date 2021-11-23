import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SenderService } from './sender.service';
import { Schema } from 'mongoose';

@Injectable({
  providedIn: 'root',
})
export class TasksDataService {
  baseUrl: String = 'http://localhost:3000/';
  todos: any;

  constructor(private http: HttpClient, private senderService: SenderService) {}

  insertTask(taskData) {
    this.http.post(this.baseUrl + 'api/tasks', taskData).subscribe({
      next: (response) => this.findTaskByListId(taskData.list),
      error: (err) => console.log(err),
    });
  }

  updateTodos(taskData, listId) {
    this.http.put(this.baseUrl + `api/tasks/${taskData._id}`, taskData).subscribe({
      next: (response) => this.findTaskByListId(listId),
      error: (err) => console.log(err),
    });
  }

  deleteTodos(id: Schema.Types.ObjectId, listId) {
    this.http.delete(this.baseUrl + `api/tasks/${id}`).subscribe({
      next: (response) => this.findTaskByListId(listId),
      error: (err) => console.log(err),
    });
  }

  findTaskByListId(id) {
    this.http.get(this.baseUrl + `api/tasks/query/${id}`).subscribe({
      next: (response) => {
        this.senderService.updateTodoList(response);
        console.log(response);
      },
      error: (err) => console.log(err),
    });
  }

  compeletedList() {
    this.http.get(this.baseUrl + 'api/compeleted').subscribe({
      next: (response) => {
        this.senderService.updateTodoList(response);
        console.log(response);
      },
      error: (err) => console.log(err),
    });
  }

  getAllLists() {
    this.http.get(this.baseUrl + 'api/lists').subscribe({
      next: (response) => this.senderService.updateList(response),
      error: (err) => console.log(err),
    });
  }

  insertList(listData: object) {
    this.http.post(this.baseUrl + 'api/lists', listData).subscribe({
      next: (response) => this.getAllLists(),
      error: (err) => console.log(err),
    });
  }

  updateList(id: Schema.Types.ObjectId, listInfo: object) {
    this.http.put(this.baseUrl + `api/lists/${id}`, listInfo).subscribe({
      next: (response) => console.log(response),
      error: (err) => console.log(err),
    });
  }

  deleteList(id: Schema.Types.ObjectId) {
    this.http.delete(this.baseUrl + `api/lists/${id}`).subscribe({
      next: (response) => this.getAllLists(),
      error: (err) => console.log(err),
    });
  }

  findList(id: Schema.Types.ObjectId) {
    this.http.get(this.baseUrl + `api/lists/${id}`).subscribe({
      next: (response) => this.senderService.nextListInfo(response),
      error: (err) => console.log(err),
    });
  }
  mainList() {
    this.http.get(this.baseUrl + `api/mainList`).subscribe({
      next: (response) => {this.getAllLists(); this.senderService.setDailyListId(response)},
      error: (err) => console.log(err),
    });
  }
}
