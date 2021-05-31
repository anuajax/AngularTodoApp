import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todoInterface';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  constructor(private todoService: TodoService, private route: ActivatedRoute, private location: Location) { }

  todo!: Todo; //@Input() todo?: Todo; to make it routable
  getTodoById(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.todoService.getTodoById(id).subscribe(todo => this.todo = todo)
  }

  ngOnInit(): void {
    this.getTodoById();
  }

  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.todoService.updateTodo(this.todo).subscribe(()=>this.goBack());
  }
}
