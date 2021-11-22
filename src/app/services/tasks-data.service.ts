import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/todos';
import { SenderService } from './sender.service';
import { Schema } from 'mongoose';
import { send } from 'process';

@Injectable({
  providedIn: 'root'
})
export class TasksDataService {
  url:String ="http://localhost:3000/";
  todos:any;

  constructor(private http:HttpClient, private senderService:SenderService ) {}
  getAllTasks(){
    this.http.get(this.url+'api/tasks').subscribe(
      (response) => {this.senderService.updateTodoList(response); console.log(response)},
      (error) => console.log(error)
    )
  }
  insertTask(taskData : object , id){
    this.http.post(this.url+'api/tasks', taskData).subscribe(
      (response) => {
        this.findTaskByListId(id)
      },
      (error) => console.log(error)
    )
  }
  updateTodos(id , taskData : object){
    this.http.put(this.url+`api/tasks/${id}`, taskData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }
  deleteTodos(id:Schema.Types.ObjectId){
    this.http.delete(this.url+`api/tasks/${id}`).subscribe(
      (response) => {this.getAllTasks()},
      (error) => console.log(error)
    )
  }
  findTaskByListId(id){
    this.http.get(this.url+`api/tasks/query/${id}`).subscribe(
      (response) => {this.senderService.updateTodoList(response) ; console.log(response)},
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
      (response) => {this.getAllLists()},
      (error) => console.log(error)
    )
  }
  updateList(id:Schema.Types.ObjectId , listInfo : object){
    this.http.put(this.url+`api/lists/${id}`, listInfo).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }
  deleteList(id:Schema.Types.ObjectId){
    this.http.delete(this.url+`api/lists/${id}`).subscribe(
      (response) => {this.getAllLists()},
      (error) => console.log(error)
    )
  }
  findList(id:Schema.Types.ObjectId){
    this.http.get(this.url+`api/lists/${id}`).subscribe(
      (response) => this.senderService.nextListInfo(response),
      (error) => console.log(error)
    )
  }
  }

