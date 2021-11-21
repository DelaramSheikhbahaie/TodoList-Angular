import { Component, OnInit} from '@angular/core';
import { Todo } from 'src/app/models/todos';
import { SenderService } from 'src/app/services/sender.service';
import { TasksDataService } from 'src/app/services/tasks-data.service';

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
  titleEditInput:string;
  dateEditInput:string;
  descriptionEditInput:string;
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
    this.apiService.getAllTasks()
    this.service.sharedTodoList.subscribe(
      todoList => this.todos = todoList)
      // .filter(
      //   todo=>todo.listId === this.listID)
      // )
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

  changeStyleOnEdit(id , todo){
    this.ItemTitle = document.getElementById(`title-${id}`) as HTMLElement;
    this.ItemTitleInput = document.getElementById(`title-${id}-input`) as HTMLElement;

    this.ItemDescription = document.getElementById(`description-${id}`) as HTMLElement;
    this.ItemDescriptionInput = document.getElementById(`description-${id}-input`) as HTMLElement;

    this.ItemDate = document.getElementById(`date-${id}`) as HTMLElement;
    this.ItemDateInput = document.getElementById(`date-${id}-input`) as HTMLElement;

    if(this.todoEditMode){
      this.ItemTitle.style.display = "none"
      this.ItemTitleInput.style.display = "flex"
      this.titleEditInput = todo.title //to show value in edit box

      this.ItemDescription.style.display = "none"
      this.ItemDescriptionInput.style.display = "flex"
      this.descriptionEditInput = todo.description

      this.ItemDate.style.display = "none"
      this.ItemDateInput.style.display = "flex"
      this.dateEditInput = todo.date
    }
    if(!this.todoEditMode){
      this.ItemTitle.style.display = "flex"
      this.ItemTitleInput.style.display = "none"
      todo.title = this.titleEditInput //to show updated value in list before refresh
      this.titleEditInput=""

      this.ItemDescription.style.display = "flex"
      this.ItemDescriptionInput.style.display = "none"
      todo.description = this.descriptionEditInput
      this.descriptionEditInput=""

      this.ItemDate.style.display = "flex"
      this.ItemDateInput.style.display = "none"
      todo.date = this.dateEditInput
      this.dateEditInput=""
    }
  }
  editTodo(id){
      this.todoEditMode= !this.todoEditMode;
      this.todos.map((todo)=>{
        if(id === todo._id) {
          this.changeStyleOnEdit(id , todo)
          this.taskData ={
            // listId : this.listID ,
            title:this.titleEditInput ,
            date:this.dateEditInput ,
            description:this.descriptionEditInput,
            done:false ,
            isMain :false ,
          }
          this.apiService.updateTodos(id , todo);
        }
      })
  }
  moveToDailyList(todo){
    todo.isMain = true
    this.apiService.insertTask(todo)
  }
}
