import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SenderService } from './services/sender.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  dailyListId: any;
  constructor(private route: Router, private senderService: SenderService) {}

  ngOnInit() {
    this.senderService.SharedDailyListID.subscribe(
      (id) => (this.dailyListId = id)
    );
    this.route.navigate([`/list/${this.dailyListId}`]);
  }
}
