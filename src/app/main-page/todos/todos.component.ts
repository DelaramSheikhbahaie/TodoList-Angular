import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todos';
import { SenderService } from 'src/app/services/sender.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];
  inputTodos:string = "";
  listID:number;

  constructor(private service:SenderService) { }

  ngOnInit(): void {
    this.service.sharedTodoList.subscribe(todoList => this.todos = todoList)
    this.service.sharedListID.subscribe(id => this.listID = id)
  }

  toggleDone (id:number){
    this.todos.map((todo , index)=>{
      if(id === index) todo.compeleted = ! todo.compeleted
      return todo
    })
  }

  deleteTodo (id:number){
    this.todos = this.todos.filter((todo , index)=> index !== id)
  }
}
