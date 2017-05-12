/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TodoDataService } from './todo-data.service';
import {ToDo} from './to-do';

describe('TodoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService]
    });
  });

  it('should ...', inject([TodoDataService], (service: TodoDataService) => {
    expect(service).toBeTruthy();
  }));

  describe("get all todos",()=>{
    it("initially getall returns empty array",inject([TodoDataService],(service:TodoDataService)=>{
    expect(service.getAllTodos()).toEqual([]);
    }));
  });

  describe("save todos",function(){
        it("should return all todos",inject([TodoDataService],(service:TodoDataService)=>{
        let todo1=new ToDo({title: 'Hello1',complete:false});
        let todo2=new ToDo({title: 'Hello2',complete:false});
        service.addTodo(todo1);
        service.addTodo(todo2);
        expect(service.getAllTodos()).toEqual([todo1,todo2]);
      }));

      it("gettodobyid",inject([TodoDataService],(service:TodoDataService)=>{
        let todo1=new ToDo({title: 'Hello1',complete:false});
        let todo2=new ToDo({title: 'Hello2',complete:false});
        service.addTodo(todo1);
        service.addTodo(todo2);
        expect(service.getTodoById(1)).toEqual(todo1);
        expect(service.getTodoById(2)).toEqual(todo2);
      }));
  });

  describe("delete todo by id",()=>{

      it("deletes a todo with a matching id",inject([TodoDataService],(service:TodoDataService)=>{
        let todo1=new ToDo({title: 'Hello1',complete:false});
        let todo2=new ToDo({title: 'Hello2',complete:false});
        service.addTodo(todo1); 
        service.addTodo(todo2);
        console.log(todo1.id);
        console.log(todo2.id);
        service.deleteToDoById(1);
        expect(service.getAllTodos()).toEqual([todo2]);
        // service.deleteToDoById(2);
        // expect(service.getAllTodos()).toEqual([todo1]);
      }));

      it("should not delete if there is no matching id",inject([TodoDataService],function(service:TodoDataService){
        let todo1=new ToDo({title: 'Hello1',complete:false});
        let todo2=new ToDo({title: 'Hello2',complete:false});
        service.addTodo(todo1); 
        service.addTodo(todo2);
        service.deleteToDoById(3);
         expect(service.getAllTodos()).toEqual([todo1,todo2]);
      }));

      describe("update todo by id",()=>{

        it("should update with a matching id",inject([TodoDataService],function(service:TodoDataService){
            let todo1=new ToDo({title: 'Hello1',complete:false});
            service.addTodo(todo1); 
            let updatedTodo= service.updateToDoById(1,{title: "Puja"});
            expect(updatedTodo.title).toEqual("Puja");
          }));

        it("should not update if there is no matching id",inject([TodoDataService],function(service:TodoDataService){
          let todo1=new ToDo({title: 'Hello1',complete:false});
          service.addTodo(todo1); 
          let updatedTodo= service.updateToDoById(3,{title: "Puja"});
          expect(updatedTodo).toEqual(null);
        }));
      });


      describe("toggletodocomplete",()=>{
        it("return todo with inverse complete status",inject([TodoDataService],(service:TodoDataService)=>{
           let todo1=new ToDo({title: 'Hello1',complete:false});
           service.addTodo(todo1);
           let updatedTodo=service.toggleTodoComplete(todo1);
           expect(updatedTodo.complete).toEqual(true);
           service.toggleTodoComplete(todo1);
           expect(updatedTodo.complete).toEqual(false);
        }))
      });
  });
});
