import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImportantsComponent } from './importants/importants.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodosComponent } from './todos/todos.component';
const routes: Routes = [
  {path: 'detail/:id', component: TodoDetailComponent},
  {path: '', redirectTo: '/todos', pathMatch: 'full'},
  {path: 'todos', component: TodosComponent},
  {path: 'important', component: ImportantsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
