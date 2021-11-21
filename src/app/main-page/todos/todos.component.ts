import { Component, OnInit} from '@angular/core';
import { Todo } from 'src/app/models/todos';
import { SenderService } from 'src/app/services/sender.service';
import { TasksDataService } from 'src/app/services/tasks-data.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];
  inputTodos:string = "";
  listid;
  todoEditMode:boolean = false;
  contentEditInput:String;
  dateEditInput:String;
  descriptionEditInput:String;
  ItemTitle: HTMLElement;
  ItemDescription: HTMLElement;
  ItemDate: HTMLElement;
  ItemTitleInput: HTMLElement;
  ItemDescriptionInput: HTMLElement;
  ItemDateInput: HTMLElement;
  todosInfo:HTMLElement;
  taskData:object;

  constructor(
     private service:SenderService ,
     private apiService :TasksDataService ,
    ) {}

  ngOnInit(): void {
    // this.service.sharedListID.subscribe(id => this.listID = id)
    this.service.sharedTodoList.subscribe(
      todoList => this.todos = todoList)
      // .filter(
      //   todo=>todo.listId === this.listID)
      // )
    this.apiService.getAllTasks()
  }
  toggleDone (id){
    this.todos.map((todo)=>{
      if(id === todo._id) {
        todo.done = !todo.done
        this.todosInfo = document.getElementById(`todos-info-${id}`) as HTMLElement;
        if(todo.done){
          this.todosInfo.style.backgroundColor ="green"
        }
        else{
          this.todosInfo.style.backgroundColor ="transparent"
        }
        this.apiService.updateTodos(id , todo)
      }
    })
  }

  deleteTodo (id){
    this.apiService.deleteTodos(id)
  }

  changeStyleOnEdit(id){
    this.ItemTitle = document.getElementById(`title-${id}`) as HTMLElement;
    this.ItemTitleInput = document.getElementById(`title-${id}-input`) as HTMLElement;

    this.ItemDescription = document.getElementById(`description-${id}`) as HTMLElement;
    this.ItemDescriptionInput = document.getElementById(`description-${id}-input`) as HTMLElement;

    this.ItemDate = document.getElementById(`date-${id}`) as HTMLElement;
    this.ItemDateInput = document.getElementById(`date-${id}-input`) as HTMLElement;

    if(this.todoEditMode){
      this.ItemTitle.style.display = "none"
      this.ItemTitleInput.style.display = "flex"

      this.ItemDescription.style.display = "none"
      this.ItemDescriptionInput.style.display = "flex"

      this.ItemDate.style.display = "none"
      this.ItemDateInput.style.display = "flex"
    }
    if(!this.todoEditMode){
      this.ItemTitle.style.display = "flex"
      this.ItemTitleInput.style.display = "none"

      this.ItemDescription.style.display = "flex"
      this.ItemDescriptionInput.style.display = "none"

      this.ItemDate.style.display = "flex"
      this.ItemDateInput.style.display = "none"
    }
  }
  editTodo(id){
      this.todoEditMode= !this.todoEditMode;
      this.changeStyleOnEdit(id)
      this.taskData ={
        // listId : this.listID ,
        content:this.contentEditInput ,
        date:this.dateEditInput ,
        description:this.descriptionEditInput,
        done:false ,
        isMain :false ,
      }
      this.apiService.updateTodos(id , this.taskData);
  }
  moveToDailyList(todo){
    todo.isMain = true
    this.apiService.insertTask(todo)
  }
}
