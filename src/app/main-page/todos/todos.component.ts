import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];
  inputTodos:string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos =[
      {
        content :"first todo" ,
        compeleted : false
      }
    ]
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

  addTodo (){
    this.todos.push({
      content:this.inputTodos ,
      compeleted :false
    })
    this.inputTodos = "";
  }
}
