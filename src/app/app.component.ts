import { Component } from '@angular/core';
import {TodoDataService} from './todo-data.service';
import {ToDo} from './to-do';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers:[TodoDataService] or 
  providers: []
})
export class AppComponent {
  // newTodo:ToDo = new ToDo();
  constructor(private todoDataService:TodoDataService ){}

  // addTodo(){
  //   this.todoDataService.addTodo(this.newTodo);
  //   this.newTodo=new ToDo();
  // }
onAddTodo(todo:ToDo){
  this.todoDataService.addTodo(todo);
}
  // removeTodo(todo){
  //   this.todoDataService.deleteToDoById(todo.id);
  // } 

onRemoveTodo(todo:ToDo){
  this.todoDataService.deleteToDoById(todo.id);
}
  get todos(){
    return this.todoDataService.getAllTodos();
  }

  // toggleTodoComplete(todo){
  //   this.todoDataService.toggleTodoComplete(todo);
  // }

  OntoggleTodoComplete(todo:ToDo){
    this.todoDataService.toggleTodoComplete(todo);
  }
}
