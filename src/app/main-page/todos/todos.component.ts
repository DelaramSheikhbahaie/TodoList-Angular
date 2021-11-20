import { ChangeDetectorRef, Component, OnInit, SimpleChange } from '@angular/core';
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
  listID:number;
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
  taskData:object;

  constructor(
     private service:SenderService ,
     private apiService :TasksDataService ,
    ) {}

  ngOnInit(): void {
    this.service.sharedListID.subscribe(id => this.listID = id)
    this.service.sharedTodoList.subscribe(
      todoList => this.todos = todoList)
      // .filter(
      //   todo=>todo.listId === this.listID)
      // )
    this.apiService.getAllTasks()
  }
  toggleDone (id:number){
    this.todos.map((todo , index)=>{
      if(id === index) todo.compeleted = ! todo.compeleted
      return todo
    })
  }

  deleteTodo (id:number){
    // this.todos = this.todos.filter((todo , index)=> index !== id)
    this.apiService.deleteTodos(id)
  }

  changeStyleOnEdit(id:number){
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
  editTodo(id:number){
      this.todoEditMode= !this.todoEditMode;
      this.changeStyleOnEdit(id)
      this.taskData ={
        listId : this.listID ,
        content:this.contentEditInput ,
        date:this.dateEditInput ,
        description:this.descriptionEditInput,
        compeleted:false ,
        isMain :false ,
      }
      this.apiService.updateTodos(id , this.taskData);
  }
  moveToDailyList(todo){
    todo.isMain = true
    this.apiService.insertTask(todo)
  }
}
