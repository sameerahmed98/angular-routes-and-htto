import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  http = inject(HttpClient)

  getTodosFromApi() {
    const url = `https://jsonplaceholder.typicode.com/todos/`
    return this.http.get<Array<Todo>>(url)
  }

  // todoItems: Array<Todo> = [
  //   {
  //     userId: 98,
  //     id: 1,
  //     title: 'groceries',
  //     completed: false
  //   },
  //   {
  //     userId: 78,
  //     id: 2,
  //     title: 'car wash',
  //     completed: true
  //   }
  //   ,
  //   {
  //     userId: 77,
  //     id: 3,
  //     title: 'Tranfer the Money',
  //     completed: false
  //   }
  // ]
}
