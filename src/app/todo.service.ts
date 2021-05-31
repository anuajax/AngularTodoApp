import { Injectable } from '@angular/core';
import { from, Observable, of} from 'rxjs';
import {map,filter, tap, find} from 'rxjs/operators';
import { Todo } from './todoInterface';
import { TODOS } from './todosList';
import { HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  private url = 'api/todos'  //URL to Web Api

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url) ;   //
    //return of(TODOS);//using RxJS's of operator

  }

  getTodoById(id: number): Observable<Todo> {
     const detailUrl = `${this.url}/${id}`;
  //   const todo = TODOS.find(t => t.id === id) as Todo;
  //   return of(todo);
  return this.http.get<Todo>(detailUrl);

  }

  getImportantTodos(): Observable<Todo[]> {
    //const imptodos = TODOS.filter(t => t.important);
    //return of(imptodos);
    return this.http.get<Todo[]>(this.url);
    //do the filtering/manipulation in the component, not in the service
    //services are just used to bring the dataa
  }

  markImportant(todo: Todo): Observable<any> {
    // const  todo = TODOS.find(t => t.id === id);
    // if(todo!==undefined)
    // {
    //   todo.important = !todo.important;
    //   return of(todo);
    // }
    // return of();
    todo.important = !todo.important;
  return  this.http.put<Todo>(this.url, todo,this.httpOptions);

}

   updateTodo(todo: Todo): Observable<any> {
    return this.http.put(this.url, todo, this.httpOptions);
   }

   addNewTodo(todo: Todo): Observable<Todo> {
     return this.http.post<Todo>(this.url, todo, this.httpOptions);
   }
   deleteTodo(id: number): Observable<Todo> {
     return this.http.delete<Todo>(`${this.url}/${id}`, this.httpOptions);
   }
}
