import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  listId;
  listName:string;
  taskData:object
  
  constructor(
     private service:SenderService ,
     private apiService : TasksDataService,
     private route :ActivatedRoute,
     ) { }

     get listID(): string {
      return this.listId;
    }
    set listID(value: string) {
      this.listId = value ;
    } 

  ngOnInit(): void {
    // this.service.sharedListID.subscribe(id => this.listId =id)
    this.route.paramMap.subscribe(params => this.listID = params.get('id'))
    this.service.sharedListName.subscribe(name => this.listName = name)
  }

  addTodo(){
    if(this.contentInput !== "" ){
      // && this.dateInput !== "" && this.descriptionInput !== ""
      this.listName == "Daily Tasks List" ? this.isDaily = true : this.isDaily = false
      this.taskData = {
        title:this.contentInput ,
        date:this.dateInput ,
        description:this.descriptionInput,
        done:false ,
        isDaily : this.isDaily,
        list:{type:this.listId , ref:"List"}
      }
      this.apiService.insertTask(this.taskData)
      this.service.displayTodosUpdateBeforeRefresh(this.taskData)
      // console.log(this.dateInput.slice(3,11))
      this.contentInput="";
      this.dateInput="";
      this.descriptionInput=""
    }
  }
}
