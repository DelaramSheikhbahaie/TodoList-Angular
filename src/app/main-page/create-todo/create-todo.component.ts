import { Component, OnInit } from '@angular/core';
import { TasksDataService } from 'src/app/services/tasks-data.service';
import { SenderService } from '../../services/sender.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  contentInput:String;
  dateInput:String;
  descriptionInput:String;
  isDaily:boolean
  listId:number;
  listName:string;
  taskData:object

  constructor(private service:SenderService , private apiService : TasksDataService) { }

  ngOnInit(): void {
    this.service.sharedListID.subscribe(id => this.listId =id)
    this.service.sharedListName.subscribe(name => this.listName = name)
  }

  addTodo(){
    if(this.contentInput !== "" ){
      // && this.dateInput !== "" && this.descriptionInput !== ""
      this.listName == "Daily Tasks List" ? this.isDaily = true : this.isDaily = false
      this.taskData ={
        listId : this.listId ,
        title:this.contentInput ,
        date:this.dateInput ,
        description:this.descriptionInput,
        done:false ,
        isDaily : this.isDaily
      }
      this.apiService.insertTask(this.taskData)
      // console.log(this.dateInput.slice(3,11))
      this.contentInput="";
      this.dateInput="";
      this.descriptionInput=""
    }
  }
}
