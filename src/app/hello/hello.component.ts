import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})

export class HelloComponent implements OnInit {
  defaultName = 'Dear Friend';
  user: string = this.defaultName;

  changeUser() {
    this.user = this.defaultName;
  }
  ngOnInit() {
  }

}
