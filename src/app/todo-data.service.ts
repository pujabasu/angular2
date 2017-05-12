import { Injectable } from '@angular/core';
import {ToDo} from './to-do';

@Injectable()
export class TodoDataService {

  constructor() { }

  lastId: number=0;
  todos:ToDo[]=[];

  //POST
  addTodo(todo:ToDo):TodoDataService{
    if(!todo.id)
    todo.id=++this.lastId;
    this.todos.push(todo);
    return this;
  }


//DELETE
 deleteToDoById(id:number):TodoDataService{
   this.todos=this.todos.filter(todo=>todo.id!==id);
   return this;
 }

//PUT
 updateToDoById(id:number,values:Object={}):ToDo{
   let todo=this.todos.filter(todo=>todo.id===id).pop();
   if(!todo)
   return null;
   Object.assign(todo,values);
   return todo;
 }

//GET
 getAllTodos():ToDo[]{
   return this.todos;
 }

//GET/:id
 getTodoById(id:number):ToDo{
   return this.todos.filter(_=>_.id===id).pop();
 }

//TOGGLE TODO COMPLETE
 toggleTodoComplete(todo:ToDo):ToDo{
   let updatedTodo=this.updateToDoById(todo.id,{
     complete:!todo.complete
   });

   return updatedTodo;
 }

}
