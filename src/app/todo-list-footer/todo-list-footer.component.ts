import { Component, OnInit,Input } from '@angular/core';
import {ToDo} from './../to-do'

@Component({
  selector: 'app-todo-list-footer',
  templateUrl: './todo-list-footer.component.html',
  styleUrls: ['./todo-list-footer.component.css']
})
export class TodoListFooterComponent implements OnInit {

  constructor() { }
  @Input()
  todos: ToDo[];
  ngOnInit() {
  }

}
