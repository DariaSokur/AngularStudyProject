import { Component, OnInit } from '@angular/core';

const defaultName = 'Dear Friend';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})

export class HelloComponent implements OnInit {
  userName: string = defaultName;

  changeUser() {
    this.userName = defaultName;
  }
  ngOnInit() {
  }

}
