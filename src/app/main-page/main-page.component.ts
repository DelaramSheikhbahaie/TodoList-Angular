import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SenderService } from '../services/sender.service';
import { TasksDataService } from '../services/tasks-data.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  listid;
  listName:string;
  constructor(private service : SenderService ,private apiService:TasksDataService , private route :ActivatedRoute) { }

  ngOnInit(): void {
    // this.service.sharedListID.subscribe(id => this.listId = id)
    this.route.paramMap.subscribe(params => this.listid = params.get('id'))
    this.service.sharedListName.subscribe(name => this.listName = name)
    // this.apiService.findList(this.listid)
  }

}
