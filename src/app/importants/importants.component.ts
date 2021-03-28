import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todoInterface';
import { Location } from '@angular/common'
@Component({
  selector: 'app-importants',
  templateUrl: './importants.component.html',
  styleUrls: ['./importants.component.css']
})
export class ImportantsComponent implements OnInit {

  constructor(private todoService: TodoService, private location: Location) { }
  importants!: Todo[];
  getImportantTodos(): void
  {
    this.todoService.getImportantTodos().subscribe(imps => this.importants = imps);
  }
  ngOnInit(): void {
    this.getImportantTodos();
  }
  goBack(): void {
    this.location.back();
  }
}
