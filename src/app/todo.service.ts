import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { Todo } from './todoInterface';
import { TODOS } from './todosList';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos(): Observable<Todo[]> {
    return of(TODOS);
  }

  getTodoById(id: number): Observable<Todo> {
    const todo = TODOS.find(t => t.id === id) as Todo;
    return of(todo);
  }

  getImportantTodos(): Observable<Todo[]> {
    const imptodos = TODOS.filter(t => t.important);
    return of(imptodos);
  }

  markImportant(id: number): Observable<Todo> {
    const  todo = TODOS.find(t => t.id === id);
    if(todo!==undefined)
    {
      todo.important ? todo.important=false : todo.important=true;
      return of(todo);
    }
    return of();
  }

}
