import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Todo } from './todoInterface';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb()
  {
    const todos = [
      {description: 'Study 2 hours 9:00AM-11:00Am', id: 1, important: true, created: '12 Mar 1999',completed: false},
      {description: 'Call emergengy dishwasher', id: 2, important: true, created: '27th Feb 1990',completed: false},
      {description: 'Buy chicken', id: 3, important: false, created: '21Mar 2012',completed: false},
      {description: 'Get a condom of chocolate and stawberry', id: 4, important: false, created:'3rd Apr 2018',completed: false},
      {description: 'Call doctor to general health checkup', id: 5, important: true, created: '21 Jul 2020'},
      {description: 'Go to nannys house', id: 6, important: false, created: '2nd Oct, 2019',completed: false},
      {description: 'Check on stock invested', id: 7, important: true, created: '3rd Dec 2020',completed: false},
      {description: 'Go to fetch some groceries', id: 8, important: false, created: '28 Feb 2021',completed: false},
      {description: 'Buy an airplane toy for baby', id: 9, important: true, created: '26th Mar 2021',completed: false},
      {description: 'Check on your friends', id: 10, important: false, created: '16 Nov 2022',completed: false},
      {description: 'Cook dinner for family', id: 11, important: true, created: '19 Nov 2022',completed: false},


    ];
    return {todos}
  }

  genId(todos: Todo[]): number {
    return todos.length > 0 ?  Math.max(...todos.map(todo=>todo.id)) +1 : 12;
  }
}
