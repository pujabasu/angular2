import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import{ToDo} from './../to-do';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {

  constructor() { }

  @Input()
  todo: ToDo;

  @Output()
  remove:EventEmitter<ToDo>=new EventEmitter();

  ngOnInit() {
  }

  removeTodo(todo){
    this.remove.emit(todo);
  }

  @Output()
  toggle:EventEmitter<ToDo>=new EventEmitter();

  toggleTodo(todo){
    this.toggle.emit(todo);
  }
  
}
