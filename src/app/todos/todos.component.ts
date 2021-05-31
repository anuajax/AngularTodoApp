import { Component, OnInit } from '@angular/core';
import { Todo } from '../todoInterface';
// import { TODOS } from '../todosList';
import { TodoService } from '../todo.service'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = []; //todos = TODOS

  constructor(private todoService: TodoService) { }

  getTodos(): void
  {
    this.todoService.getTodos().subscribe(todos => this.todos = todos)
  }

  ngOnInit(): void {
    this.getTodos()
  }

  deleteTodo(todo: Todo): void {
    this.todos = this.todos.filter(t => t !== todo);
    this.todoService.deleteTodo(todo.id).subscribe();
  }
  markImportant(todo: Todo): void {
       this.todoService.markImportant(todo).subscribe();
  }

  addNewTodo(description: string, important: Boolean, created: string): void {
    this.todoService.addNewTodo({description,important,created} as Todo).subscribe(todo =>this.todos.push(todo));
  }
}
