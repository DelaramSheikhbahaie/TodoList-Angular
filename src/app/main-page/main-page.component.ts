import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SenderService } from '../services/sender.service';
import { TasksDataService } from '../services/tasks-data.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})

export class MainPageComponent implements OnInit {
  listId: any;
  listName: string;
  compeletedListId: any;

  constructor(
    private service: SenderService,
    private apiService: TasksDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.compeletedListId = this.service.CompeletedListID;
    this.route.paramMap.subscribe((params) => (this.listId = params.get('id')));
    this.service.sharedListName.subscribe((name) => (this.listName = name));
    console.log("name" ,this.listName)
    this.apiService.findList(this.listId);
  }
}
