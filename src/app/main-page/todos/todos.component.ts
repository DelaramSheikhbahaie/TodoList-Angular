import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todos';
import { SenderService } from 'src/app/services/sender.service';
import { TasksDataService } from 'src/app/services/tasks-data.service';
import { ElementRef, ViewChild } from '@angular/core';
// import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];
  inputTodos:string = "";
  listID:number;
  todoEditMode:boolean = false;
  // form: FormGroup;
  contentEditInput:String;
  dateEditInput:String;
  descriptionEditInput:String;
  element: HTMLElement;

  constructor(
     private service:SenderService ,
     private apiService :TasksDataService ,
    //  public fb: FormBuilder
     ) { 
      // this.form = this.fb.group({
      //   concept: this.contentEditInput,
      //   date: this.dateEditInput ,
      //   description : this.descriptionEditInput
    // })
     }

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

  updateTodo(id:number){
    // this.element = document.getElementById("") as HTMLElement;
    // console.log(this.element)
    // this.element.style.display = "none"
    this.todoEditMode= !this.todoEditMode;
    if(this.todoEditMode){
      // var formData: any = new FormData();
      // formData.append("content", this.form.get('content').value);
      // formData.append("date", this.form.get('date').value);
      // formData.append("description", this.form.get('description').value);
      // this.apiService.updateTodos(id . formData)
    }
    
  }
}
