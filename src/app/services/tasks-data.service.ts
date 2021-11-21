import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/todos';
import { SenderService } from './sender.service';

@Injectable({
  providedIn: 'root'
})
export class TasksDataService {
  url:String ="http://localhost:3000/";
  todos:any;

  constructor(private http:HttpClient, private senderService:SenderService ) {}
  getAllTasks(){
    this.http.get(this.url+'api/tasks').subscribe(
      (response) => {this.senderService.updateTodoList(response)},
      (error) => console.log(error)
    )
  }
  insertTask(taskData : object){
    this.http.post(this.url+'api/tasks', taskData).subscribe(
      (response) => {console.log(response)},
      (error) => console.log(error)
    )
  }
  updateTodos(id , taskData : object){
    this.http.put(this.url+`api/tasks/:${id}`, taskData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }
  deleteTodos(id){
    this.http.delete(this.url+`api/tasks/:${id}`).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }
  
  getAllLists(){
    this.http.get(this.url+'api/lists').subscribe(
      (response) => {this.senderService.updateList(response);},
      (error) => console.log(error)
    )
  }
  insertList(listData : object){
    this.http.post(this.url+'api/lists', listData).subscribe(
      (response) => {console.log(response)},
      (error) => console.log(error)
    )
  }
  updateList(id , listInfo : object){
    this.http.put(this.url+'api/lists/:id', listInfo).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }
  deleteList(id){
    this.http.delete(this.url+'api/lists/:id').subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }
  }

