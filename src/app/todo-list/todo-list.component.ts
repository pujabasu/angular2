import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import{ToDo} from './../to-do';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  @Input()
  todos:ToDo[];

  @Output()
  remove:EventEmitter<ToDo>=new EventEmitter();

  @Output()
  toggle:EventEmitter<ToDo>=new EventEmitter();

  onToggleTodo(todo:ToDo){
    this.toggle.emit(todo);
  }

  onRemoveTodo(todo:ToDo){
    this.remove.emit(todo);
  }

  ngOnInit() {
  }

}
