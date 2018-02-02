import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {

  name;
  message;
  dataSource;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getMessages().then((res) => {
      this.dataSource = res;
    });
    let interval = setInterval(() => {
      this.homeService.getMessages().then((res) => {
        this.dataSource = res;
      });
    }, 500);
  }

  send(name, message) {
    this.homeService.sendMessage(name, message);
    this.message = null;
    this.name = null;
  }

}
