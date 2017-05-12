import {ToDo} from './to-do';

describe('ToDo', () => {
  it('should create an instance', () => {
    expect(new ToDo()).toBeTruthy();
  });

  it('should accept values in the constructor',()=>{
    let todo=new ToDo({
      id:1,
      title:'hello',
      complete:true
    });

    expect(todo.title).toEqual('hello');
    expect(todo.complete).toEqual(true);
  });
});
